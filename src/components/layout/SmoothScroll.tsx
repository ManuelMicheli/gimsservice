"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/** Smooth scroll globale via Lenis. Disattivato se prefers-reduced-motion.
 *  Resetta lo scroll in cima a ogni cambio pagina (Lenis gestisce uno scroll
 *  virtuale, quindi il reset nativo di Next non basta: senza questo la nuova
 *  pagina eredita l'offset della precedente). */
export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let lenis: Lenis | null = null;
    let raf = 0;

    // Anchor link interni → scroll fluido (registrato subito; usa Lenis se pronto).
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        if (lenis) lenis.scrollTo(el as HTMLElement, { offset: -80 });
        else (el as HTMLElement).scrollIntoView({ behavior: "smooth" });
      }
    };
    document.addEventListener("click", onClick);

    // Inizializza Lenis solo alla PRIMA interazione (wheel/touch/tasto): così il
    // suo RAF non gira mai durante il caricamento → zero costo su TBT/Speed Index,
    // ma lo smooth scroll è attivo nell'istante in cui l'utente scrolla davvero.
    const start = () => {
      if (lenis) return;
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      lenisRef.current = lenis;
      const loop = (time: number) => {
        lenis!.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    };
    const events: (keyof WindowEventMap)[] = ["wheel", "touchstart", "keydown", "pointerdown"];
    const onFirst = () => {
      start();
      events.forEach((e) => window.removeEventListener(e, onFirst));
    };
    events.forEach((e) => window.addEventListener(e, onFirst, { passive: true, once: false }));

    return () => {
      events.forEach((e) => window.removeEventListener(e, onFirst));
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis?.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Reset in cima a ogni navigazione (ignora gli atterraggi su anchor #).
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) return;
    const lenis = lenisRef.current;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
