"use client";

import { useRef, useState } from "react";
import { ROTATING_WORDS } from "@/lib/site";
import { WORKS } from "@/components/sandbox/work/projects";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";
import RotatingWord from "@/components/ui/RotatingWord";

/**
 * Variante C — Horizontal Gallery.
 * Strip orizzontale scroll-snap con card grandi, contatore e barra progresso.
 */
export default function WorkC() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [idx, setIdx] = useState(0);

  function onScroll() {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max > 0 ? el.scrollLeft / max : 0;
    setProgress(p);
    setIdx(Math.round(p * (WORKS.length - 1)));
  }

  return (
    <section className="overflow-hidden bg-bg py-24 md:py-36">
      <div className="shell">
        <Reveal>
          <span className="overline text-accent">02 — Lavori in evidenza</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-4xl font-display text-4xl font-light leading-[1.08] tracking-tight text-ink md:text-6xl">
            Realizzo <RotatingWord words={ROTATING_WORDS} /> che durano nel tempo.
          </h2>
        </Reveal>

        {/* contatore + progress */}
        <div className="mt-10 flex items-center gap-6">
          <span className="font-body text-[0.74rem] tabular-nums tracking-[0.1em] text-ink">
            {String(idx + 1).padStart(2, "0")}
            <span className="text-muted"> / {String(WORKS.length).padStart(2, "0")}</span>
          </span>
          <div className="relative h-px flex-1 bg-line">
            <div
              className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-150 ease-out"
              style={{ width: `${Math.max(progress * 100, 6)}%` }}
            />
          </div>
          <span className="hidden font-body text-[0.7rem] uppercase tracking-[0.18em] text-muted sm:block">
            Scorri →
          </span>
        </div>
      </div>

      {/* strip */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-8 md:mt-14 md:gap-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {WORKS.map((p) => (
          <a
            key={p.n}
            href="#contatti"
            className="group relative block w-[82vw] shrink-0 snap-start overflow-hidden rounded-sm bg-line sm:w-[60vw] lg:w-[44vw]"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[4/3]">
              <div className="absolute inset-0 transition-transform duration-[1100ms] ease-soft group-hover:scale-[1.05]">
                <SmartImage imgKey={p.img} alt={`${p.title} — ${p.category}`} label={p.title} sizes="(max-width:640px) 82vw, (max-width:1024px) 60vw, 44vw" />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <span className="absolute right-5 top-4 font-display text-5xl font-light leading-none text-bg/80 md:text-6xl">
                {p.n}
              </span>

              <div className="absolute inset-x-5 bottom-5 text-bg">
                <span className="flex items-center gap-3 font-body text-[0.66rem] uppercase tracking-[0.2em] text-bg/80">
                  {p.category}
                  <span className="h-px w-8 bg-bg/50" />
                  {p.place} · {p.year}
                </span>
                <h3 className="mt-2 flex items-end justify-between font-display text-3xl font-light leading-none tracking-tight md:text-4xl">
                  {p.title}
                  <span className="mb-1 text-base transition-transform duration-500 ease-soft group-hover:translate-x-1.5" aria-hidden>
                    →
                  </span>
                </h3>
              </div>
            </div>
          </a>
        ))}

        {/* CTA finale */}
        <a
          href="#contatti"
          className="flex w-[82vw] shrink-0 snap-start flex-col justify-between rounded-sm border border-ink bg-ink p-7 text-bg transition-colors hover:bg-accent sm:w-[60vw] lg:w-[44vw]"
        >
          <span className="overline text-bg/60">Galleria completa</span>
          <span className="font-display text-4xl font-light leading-tight">
            Guarda tutti<br />i lavori →
          </span>
        </a>
      </div>
    </section>
  );
}
