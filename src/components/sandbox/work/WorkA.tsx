"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ROTATING_WORDS } from "@/lib/site";
import { WORKS } from "@/components/sandbox/work/projects";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";
import RotatingWord from "@/components/ui/RotatingWord";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Variante A — Index Reveal.
 * Lista numerata editoriale a sinistra; a destra una lastra sticky che
 * crossfade sul progetto in hover. Firma "white maple".
 */
export default function WorkA() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const cur = WORKS[active];

  return (
    <section className="bg-bg shell py-24 md:py-36">
      <Reveal>
        <span className="overline text-accent">02 — Lavori in evidenza</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-6 max-w-4xl font-display text-4xl font-light leading-[1.08] tracking-tight text-ink md:text-6xl">
          Realizzo <RotatingWord words={ROTATING_WORDS} /> che durano nel tempo.
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-12 md:mt-24 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
        {/* Lista */}
        <ul className="order-2 flex flex-col lg:order-1">
          {WORKS.map((p, i) => {
            const on = i === active;
            return (
              <li key={p.n}>
                <a
                  href="#contatti"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group flex items-center gap-6 border-t border-line py-6 last:border-b md:py-7"
                >
                  <span
                    className={`w-10 shrink-0 font-body text-[0.7rem] tabular-nums tracking-[0.1em] transition-colors duration-500 ${
                      on ? "text-accent" : "text-muted"
                    }`}
                  >
                    {p.n}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span
                      className={`block font-display text-3xl font-light leading-[1.05] tracking-tight transition-all duration-500 ease-soft md:text-5xl ${
                        on ? "translate-x-2 text-ink" : "text-ink/45"
                      }`}
                    >
                      {p.title}
                    </span>
                    <span
                      className={`mt-2 block overflow-hidden font-body text-[0.7rem] uppercase tracking-[0.18em] text-muted transition-all duration-500 ${
                        on ? "max-h-6 opacity-100" : "max-h-0 opacity-0 md:max-h-6 md:opacity-60"
                      }`}
                    >
                      {p.category} · {p.place} · {p.year}
                    </span>
                  </span>

                  {/* mini thumb mobile */}
                  <span className="relative aspect-square w-16 shrink-0 overflow-hidden rounded-sm bg-line lg:hidden">
                    <SmartImage imgKey={p.img} alt={p.title} label={p.title} sizes="64px" />
                  </span>

                  <span
                    className={`hidden shrink-0 font-body text-lg transition-all duration-500 ease-soft lg:block ${
                      on ? "translate-x-0 text-accent opacity-100" : "-translate-x-3 opacity-0"
                    }`}
                    aria-hidden
                  >
                    →
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Lastra sticky */}
        <div className="order-1 hidden lg:order-2 lg:block">
          <div className="sticky top-28">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-line">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={cur.n}
                  className="absolute inset-0"
                  initial={reduce ? false : { opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease }}
                >
                  <SmartImage imgKey={cur.img} alt={cur.title} label={cur.title} sizes="42vw" />
                </motion.div>
              </AnimatePresence>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-bg">
                <div>
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={cur.n}
                      className="block font-display text-2xl font-light"
                      initial={reduce ? false : { opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5, ease }}
                    >
                      {cur.category}
                    </motion.span>
                  </AnimatePresence>
                  <span className="mt-1 block font-body text-[0.7rem] uppercase tracking-[0.18em] text-bg/70">
                    {cur.place} · {cur.year}
                  </span>
                </div>
                <span className="font-body text-[0.7rem] tabular-nums tracking-[0.1em] text-bg/70">
                  {cur.n} / {String(WORKS.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 md:mt-24">
        <Reveal>
          <a
            href="#contatti"
            className="flex flex-col items-start justify-between gap-6 rounded-sm border border-ink bg-ink p-8 text-bg transition-colors hover:bg-accent md:flex-row md:items-center md:p-12"
          >
            <span className="font-display text-3xl font-light leading-tight md:text-4xl">
              Guarda tutti i lavori
            </span>
            <span className="inline-flex items-center gap-2 font-body text-[0.74rem] uppercase tracking-[0.18em]">
              Vai alla galleria <span aria-hidden>→</span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
