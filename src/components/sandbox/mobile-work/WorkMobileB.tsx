"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import SmartImage from "@/components/ui/SmartImage";
import RotatingWord from "@/components/ui/RotatingWord";
import { ROTATING_WORDS } from "@/lib/site";
import { WORKS } from "@/components/sandbox/work/projects";

// B · Tactile Gallery — carosello orizzontale snap con peek della card successiva,
// card centrale che si ingrandisce (CSS work-hscale, view inline) e contatore +
// barra avanzamento live via framer useScroll legato al MIO scroller (container ref):
// funziona dentro al phone-frame perché traccio il mio elemento, non la window.
export default function WorkMobileB() {
  const scroller = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scroller });
  const [idx, setIdx] = useState(0);

  useMotionValueEvent(scrollXProgress, "change", (v) => {
    setIdx(Math.round(v * (WORKS.length - 1)));
  });

  return (
    <section className="bg-bg pb-24 pt-16">
      <div className="px-5">
        <span className="overline text-accent">02 — Lavori in evidenza</span>
        <h2 className="mt-5 font-display text-[2.2rem] font-light leading-[1.08] tracking-tight text-ink">
          Realizzo <RotatingWord words={ROTATING_WORDS} /> che durano nel tempo.
        </h2>
      </div>

      {/* carosello — w-[82%] = relativo allo scroller, true nel frame e su phone */}
      <div
        ref={scroller}
        className="hide-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 [-webkit-overflow-scrolling:touch]"
      >
        {WORKS.map((p) => (
          <a
            key={p.n}
            href="#contatti"
            className="work-hscale relative block aspect-[3/4] w-[82%] shrink-0 snap-center overflow-hidden rounded-2xl bg-line shadow-[0_30px_60px_-32px_rgba(0,0,0,0.6)]"
          >
            <div className="absolute inset-0 work-parallax">
              <SmartImage imgKey={p.img} alt={p.title} label={p.title} sizes="320px" />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-black/25" />

            {/* tag categoria verticale */}
            <span className="absolute left-4 top-4 font-body text-[0.58rem] uppercase tracking-[0.22em] text-bg [writing-mode:vertical-rl]">
              {p.category}
            </span>
            <span className="absolute right-5 top-4 font-display text-5xl font-light leading-none text-bg/25">
              {p.n}
            </span>

            <div className="absolute inset-x-5 bottom-5">
              <span className="font-body text-[0.6rem] uppercase tracking-[0.2em] text-accent">
                {p.place} · {p.year}
              </span>
              <h3 className="mt-1.5 font-display text-[1.9rem] font-light leading-[0.95] tracking-tight text-bg">
                {p.title}
              </h3>
            </div>
          </a>
        ))}
      </div>

      {/* contatore + barra (live) */}
      <div className="mt-7 flex items-center gap-5 px-5">
        <span className="font-body text-[0.74rem] tabular-nums tracking-[0.1em] text-ink">
          {String(idx + 1).padStart(2, "0")}
          <span className="text-muted"> / {String(WORKS.length).padStart(2, "0")}</span>
        </span>
        <div className="relative h-px flex-1 bg-line">
          <motion.div
            className="absolute inset-y-0 left-0 origin-left bg-accent"
            style={{ width: "100%", scaleX: scrollXProgress }}
          />
        </div>
        <span className="font-body text-[0.62rem] uppercase tracking-[0.18em] text-muted">
          Scorri →
        </span>
      </div>

      <a
        href="#contatti"
        className="mx-5 mt-10 flex items-center justify-between rounded-xl bg-ink p-6 text-bg transition-colors active:bg-accent"
      >
        <span className="font-display text-2xl font-light leading-tight">Guarda tutti i lavori</span>
        <span aria-hidden className="text-lg">→</span>
      </a>
    </section>
  );
}
