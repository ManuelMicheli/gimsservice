"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PROJECTS, ROTATING_WORDS } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import RotatingWord from "@/components/ui/RotatingWord";

// Frazione di scroll verticale rispetto alla distanza orizzontale.
// < 1 = la riga scorre più veloce e la sezione finisce prima (appena la CTA è in vista).
const SCROLL_LEN = 0.65;

/** Card foto reale: singola immagine full-bleed + meta. */
function Card({ p }: { p: (typeof PROJECTS)[number] }) {
  return (
    <a
      href="#contatti"
      className="group relative block h-full w-[82vw] shrink-0 overflow-hidden rounded-sm border border-line bg-line/40 sm:w-[56vw] lg:w-[38vw] xl:w-[32vw]"
    >
      {/* foto */}
      <Image
        src={`/images/${p.img}.jpg`}
        alt={`${p.title} — ${p.category}`}
        fill
        sizes="(max-width: 640px) 82vw, (max-width: 1024px) 56vw, 32vw"
        className="object-cover"
      />

      {/* gradient per leggibilità meta */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/20" />

      <span className="absolute right-6 top-5 font-display text-6xl font-light leading-none text-bg/30 md:text-7xl">
        {p.n}
      </span>

      <div className="absolute inset-x-6 bottom-6">
        <span className="flex items-center gap-3 font-body text-[0.66rem] uppercase tracking-[0.2em] text-accent">
          {p.category}
        </span>
        <h3 className="mt-2 flex items-end justify-between font-display text-3xl font-light leading-none tracking-tight text-bg md:text-4xl">
          {p.title}
          <span className="mb-1 text-base text-bg transition-transform duration-500 ease-soft group-hover:translate-x-1.5" aria-hidden>
            →
          </span>
        </h3>
      </div>
    </a>
  );
}

/**
 * Mobile — Cinematic Stack. Deck di card pinnate (position: sticky) che si
 * impilano scrollando: la card sotto rimpicciolisce e si scurisce mentre la
 * successiva le scorre sopra. 100% CSS scroll-driven (work-stack-out / work-cap
 * / work-parallax in globals.css), niente JS. Graceful degrade dove non
 * supportato (contenuto semplicemente visibile).
 */
function MobileDeck() {
  return (
    <div className="mt-12 flex flex-col gap-8 px-5">
      {PROJECTS.map((p, i) => (
        <a
          key={p.n}
          href="#contatti"
          className="work-stack-out sticky top-6 block aspect-[4/5] overflow-hidden rounded-xl bg-line shadow-[0_30px_60px_-30px_rgba(0,0,0,0.55)]"
          style={{ zIndex: 10 + i }}
        >
          <div className="absolute inset-0 work-parallax">
            <Image
              src={`/images/${p.img}.jpg`}
              alt={`${p.title} — ${p.category}`}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30" />

          <span className="absolute right-5 top-4 font-display text-[4.5rem] font-light leading-none text-bg/15">
            {p.n}
          </span>

          <div className="work-cap absolute inset-x-5 bottom-5">
            <span className="font-body text-[0.62rem] uppercase tracking-[0.22em] text-accent">
              {p.category} · {p.place} · {p.year}
            </span>
            <h3 className="mt-2 flex items-end justify-between font-display text-[2.1rem] font-light leading-[0.95] tracking-tight text-bg">
              {p.title}
              <span aria-hidden className="mb-1 text-base">→</span>
            </h3>
          </div>
        </a>
      ))}

      <a
        href="#contatti"
        className="mt-2 flex items-center justify-between rounded-xl bg-ink p-6 text-bg transition-colors active:bg-accent"
      >
        <span className="font-display text-2xl font-light leading-tight">Guarda tutti i lavori</span>
        <span aria-hidden className="text-lg">→</span>
      </a>
    </div>
  );
}

function CtaCard() {
  return (
    <a
      href="#contatti"
      className="flex h-full w-[82vw] shrink-0 flex-col justify-between rounded-sm border border-ink bg-ink p-7 text-bg transition-colors hover:bg-accent sm:w-[56vw] lg:w-[38vw] xl:w-[32vw]"
    >
      <span className="overline text-bg/60">Galleria completa</span>
      <span className="font-display text-4xl font-light leading-tight">
        Guarda tutti<br />i lavori →
      </span>
    </a>
  );
}

/**
 * Lavori in evidenza — Pinned Horizontal Scroll.
 * La sezione si "pinna" e la riga di card scorre in orizzontale mentre l'utente
 * scrolla. Guidato da un handler scroll diretto (rAF, niente framer-motion).
 * Fallback reduced-motion: scroll orizzontale nativo.
 */
export default function FeaturedWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [vh, setVh] = useState(0);
  const [idx, setIdx] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Distanza orizzontale = bordo destro dell'ultima card (CTA) - viewport.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const calc = () => {
      const last = track.lastElementChild as HTMLElement | null;
      const content = last ? last.offsetLeft + last.offsetWidth : track.scrollWidth;
      setDistance(Math.max(0, content - window.innerWidth));
      setVh(window.innerHeight);
    };
    calc();
    const raf = requestAnimationFrame(calc);
    const t = setTimeout(calc, 600);
    const ro = new ResizeObserver(calc);
    ro.observe(track);
    window.addEventListener("resize", calc);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
      ro.disconnect();
      window.removeEventListener("resize", calc);
    };
  }, []);

  // Scroll → traslazione orizzontale della track (transform diretto, niente re-render).
  useEffect(() => {
    const section = sectionRef.current;
    if (reduce || !section || !distance) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const total = section.offsetHeight - window.innerHeight;
      // rect.top è relativo al viewport (indipendente da offsetParent): quando la
      // sezione si pinna rect.top = 0, e diventa negativo man mano che scrolla.
      const scrolled = -section.getBoundingClientRect().top;
      const p = total > 0 ? Math.min(Math.max(scrolled / total, 0), 1) : 0;
      if (trackRef.current) trackRef.current.style.transform = `translate3d(${-distance * p}px, 0, 0)`;
      if (barRef.current) barRef.current.style.width = `${Math.max(p * 100, 4)}%`;
      const ni = Math.round(p * (PROJECTS.length - 1));
      setIdx((prev) => (prev !== ni ? ni : prev));
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
  }, [distance, reduce]);

  const Heading = (
    <div className="shell">
      <Reveal>
        <span className="overline text-accent">02 — Lavori in evidenza</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-6 max-w-4xl font-display text-4xl font-light leading-[1.08] tracking-tight text-ink md:text-6xl 2xl:text-7xl">
          Realizzo <RotatingWord words={ROTATING_WORDS} /> che durano nel tempo.
        </h2>
      </Reveal>
    </div>
  );

  // Strip a scroll orizzontale NATIVO (momentum del browser, fluidissimo su touch).
  // Usato su mobile sempre, e su desktop con reduced-motion.
  const NativeStrip = (
    <div
      className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain px-5 pb-4 sm:px-8 md:gap-8 md:px-12 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {PROJECTS.map((p) => (
        <div key={p.n} className="aspect-[4/5] snap-start sm:aspect-[4/3]">
          <Card p={p} />
        </div>
      ))}
      <CtaCard />
    </div>
  );

  return (
    <section id="lavori" className="relative">
      {/* ===== MOBILE — Cinematic Stack (deck sticky, scroll-driven CSS) ===== */}
      <div className="py-20 md:hidden">
        {Heading}
        <MobileDeck />
      </div>

      {/* ===== DESKTOP — Pinned Horizontal Scroll (guidato dallo scroll, su mouse è fluido) ===== */}
      {reduce ? (
        <div className="hidden overflow-hidden py-32 md:block">
          {Heading}
          {NativeStrip}
        </div>
      ) : (
        <div
          ref={sectionRef}
          style={{ height: distance ? vh + distance * SCROLL_LEN : undefined }}
          className="hidden md:block"
        >
          <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-10">
            {Heading}

            {/* contatore + progress */}
            <div className="shell mt-8 flex items-center gap-6">
              <span className="font-body text-[0.74rem] tabular-nums tracking-[0.1em] text-ink">
                {String(idx + 1).padStart(2, "0")}
                <span className="text-muted"> / {String(PROJECTS.length).padStart(2, "0")}</span>
              </span>
              <div className="relative h-px flex-1 bg-line">
                <div ref={barRef} className="absolute inset-y-0 left-0 bg-accent" style={{ width: "4%" }} />
              </div>
              <span className="hidden font-body text-[0.7rem] uppercase tracking-[0.18em] text-muted sm:block">
                Scorri ↓
              </span>
            </div>

            {/* track orizzontale guidato dallo scroll */}
            <div
              ref={trackRef}
              className="mt-10 flex h-[58vh] gap-5 pl-5 pr-5 will-change-transform sm:pl-8 md:gap-8 md:pl-12 lg:pl-16 xl:pl-20 2xl:pl-28"
            >
              {PROJECTS.map((p) => (
                <Card key={p.n} p={p} />
              ))}
              <CtaCard />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
