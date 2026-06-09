"use client";

import { useEffect, useRef } from "react";

/** Interpolazione lineare a stop multipli (sostituisce framer useTransform). */
function lerpStops(p: number, stops: number[], vals: number[]): number {
  if (p <= stops[0]) return vals[0];
  if (p >= stops[stops.length - 1]) return vals[vals.length - 1];
  for (let i = 0; i < stops.length - 1; i++) {
    if (p >= stops[i] && p <= stops[i + 1]) {
      const t = (p - stops[i]) / (stops[i + 1] - stops[i]);
      return vals[i] + (vals[i + 1] - vals[i]) * t;
    }
  }
  return vals[vals.length - 1];
}

/**
 * Isola client per lo sticky-scroll del Manifesto (desktop). Il markup è
 * renderizzato dal server (children, NON re-idratato): qui si attacca solo
 * l'handler di scroll che scrive gli stili via querySelector sui data-attr.
 */
export default function ManifestoScroll({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blocks = Array.from(root.current?.querySelectorAll<HTMLElement>("[data-manifesto]") ?? []);
    if (!blocks.length) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      for (const el of blocks) {
        if (el.offsetHeight === 0) continue; // nascosto (variante non attiva)
        const imageWrap = el.querySelector<HTMLElement>("[data-image]");
        const textWrap = el.querySelector<HTMLElement>("[data-text]");
        const dot = el.querySelector<HTMLElement>("[data-dot]");
        const imgOps = Array.from(el.querySelectorAll<HTMLElement>("[data-img-op]"));
        const txtOps = Array.from(el.querySelectorAll<HTMLElement>("[data-txt-op]"));

        const total = el.offsetHeight - window.innerHeight;
        const p = total > 0 ? Math.min(Math.max((window.scrollY - el.offsetTop) / total, 0), 1) : 0;

        const ops = [
          lerpStops(p, [0, 0.28, 0.4], [1, 1, 0]),
          lerpStops(p, [0.32, 0.44, 0.62, 0.72], [0, 1, 1, 0]),
          lerpStops(p, [0.64, 0.76, 1], [0, 1, 1]),
        ];
        // Slide orizzontale opposto: solo desktop (data-image/data-text presenti).
        const stops = [0, 0.32, 0.44, 0.64, 0.76, 1];
        const imageX = lerpStops(p, stops, [0, 0, 100, 100, 0, 0]);
        const textX = lerpStops(p, stops, [100, 100, 0, 0, 100, 100]);
        if (imageWrap) imageWrap.style.transform = `translateX(${imageX}%)`;
        if (textWrap) textWrap.style.transform = `translateX(${textX}%)`;
        const stepX = lerpStops(p, [0, 1], [0, 200]);
        if (dot) dot.style.left = `${stepX}%`;
        ops.forEach((o, i) => {
          if (imgOps[i]) imgOps[i].style.opacity = String(o);
          if (txtOps[i]) txtOps[i].style.opacity = String(o);
        });
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={root}>{children}</div>;
}
