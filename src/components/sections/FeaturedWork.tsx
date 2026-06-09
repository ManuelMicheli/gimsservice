"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { PROJECTS, ROTATING_WORDS } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import RotatingWord from "@/components/ui/RotatingWord";

const ease = [0.16, 1, 0.3, 1] as const;

// Frazione di scroll verticale rispetto alla distanza orizzontale.
// < 1 = la riga scorre più veloce e la sezione finisce prima (appena la CTA è in vista).
const SCROLL_LEN = 0.65;

/** Card placeholder (nessuna foto): gradient palette + numero + meta. */
function Card({ p }: { p: (typeof PROJECTS)[number] }) {
  return (
    <a
      href="#contatti"
      className="group relative block h-full w-[82vw] shrink-0 overflow-hidden rounded-sm border border-line bg-line/40 sm:w-[56vw] lg:w-[38vw] xl:w-[32vw]"
    >
      {/* sfondo placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink/[0.06] to-accent/[0.10] transition-colors duration-700 group-hover:from-ink/[0.10] group-hover:to-accent/[0.16]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #16140f 1px, transparent 1px), linear-gradient(to bottom, #16140f 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <span className="absolute right-6 top-5 font-display text-6xl font-light leading-none text-ink/15 md:text-7xl">
        {p.n}
      </span>

      <span className="absolute left-6 top-6 font-body text-[0.6rem] uppercase tracking-[0.2em] text-muted">
        Foto in arrivo
      </span>

      <div className="absolute inset-x-6 bottom-6">
        <span className="flex items-center gap-3 font-body text-[0.66rem] uppercase tracking-[0.2em] text-accent">
          {p.category}
        </span>
        <h3 className="mt-2 flex items-end justify-between font-display text-3xl font-light leading-none tracking-tight text-ink md:text-4xl">
          {p.title}
          <span className="mb-1 text-base text-ink transition-transform duration-500 ease-soft group-hover:translate-x-1.5" aria-hidden>
            →
          </span>
        </h3>
      </div>
    </a>
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
 * La sezione si "pinna" e la riga di card placeholder scorre in orizzontale
 * mentre l'utente scrolla la pagina. Fallback: scroll orizzontale nativo.
 */
export default function FeaturedWork() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [vh, setVh] = useState(0);
  const [idx, setIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  // Distanza orizzontale = bordo destro dell'ultima card (CTA) - viewport.
  // Misurata dal bordo reale dell'ultimo figlio così non resta MAI spazio dopo la CTA.
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
    // ricalcolo dopo layout/font + ad ogni cambio dimensione (evita race al mount).
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

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const p = Math.min(Math.max(v, 0), 1);
    setProgress(p);
    setIdx(Math.round(p * (PROJECTS.length - 1)));
  });

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

  // Fallback (reduced motion): strip a scroll orizzontale nativo.
  if (reduce) {
    return (
      <section id="lavori" className="overflow-hidden py-20 md:py-32">
        {Heading}
        <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-8 md:gap-8 md:px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {PROJECTS.map((p) => (
            <div key={p.n} className="aspect-[4/5] snap-start sm:aspect-[4/3]">
              <Card p={p} />
            </div>
          ))}
          <CtaCard />
        </div>
      </section>
    );
  }

  return (
    <section
      id="lavori"
      ref={sectionRef}
      style={{ height: distance ? vh + distance * SCROLL_LEN : undefined }}
      className="relative"
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
            <div
              className="absolute inset-y-0 left-0 bg-accent"
              style={{ width: `${Math.max(progress * 100, 4)}%` }}
            />
          </div>
          <span className="hidden font-body text-[0.7rem] uppercase tracking-[0.18em] text-muted sm:block">
            Scorri ↓
          </span>
        </div>

        {/* track orizzontale guidato dallo scroll */}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="mt-10 flex h-[58vh] gap-5 pl-5 pr-5 sm:pl-8 md:gap-8 md:pl-12 lg:pl-16 xl:pl-20 2xl:pl-28"
        >
          {PROJECTS.map((p) => (
            <Card key={p.n} p={p} />
          ))}
          <CtaCard />
        </motion.div>
      </div>
    </section>
  );
}
