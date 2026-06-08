"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PROJECTS, ROTATING_WORDS } from "@/lib/site";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";
import RotatingWord from "@/components/ui/RotatingWord";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Lavori in evidenza — Alternating Rows.
 * Righe grandi con immagine alternata sx/dx, numero gigante, frame alternato in hover.
 */
export default function FeaturedWork() {
  const reduce = useReducedMotion();

  return (
    <section id="lavori" className="shell py-20 md:py-36">
      <Reveal>
        <span className="overline text-accent">02 — Lavori in evidenza</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-6 max-w-4xl font-display text-4xl font-light leading-[1.08] tracking-tight text-ink md:text-6xl 2xl:text-7xl">
          Realizzo <RotatingWord words={ROTATING_WORDS} /> che durano nel tempo.
        </h2>
      </Reveal>

      {/* ===== MOBILE — Overlay Cards ===== */}
      <div className="mt-12 flex flex-col gap-5 md:hidden">
        {PROJECTS.map((p, i) => (
          <motion.a
            key={p.n}
            href="#contatti"
            className="relative block aspect-[4/5] w-full overflow-hidden rounded-lg bg-line"
            initial={reduce ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.7, ease, delay: i * 0.03 }}
          >
            <SmartImage imgKey={p.img} alt={p.title} label={p.title} sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
            <span className="absolute right-5 top-5 font-display text-3xl font-light leading-none text-bg/70">
              {p.n}
            </span>
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
              <h3 className="font-display text-[2rem] font-light leading-none tracking-tight text-bg">
                {p.title}
              </h3>
              <span className="mb-1 font-body text-[0.66rem] uppercase tracking-[0.18em] text-bg">
                Vedi →
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* ===== DESKTOP — Alternating Rows ===== */}
      <div className="mt-24 hidden flex-col gap-28 md:flex">
        {PROJECTS.map((p, i) => {
          const flip = i % 2 === 1;
          return (
            <motion.a
              key={p.n}
              href="#contatti"
              className="group grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-12"
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.8, ease }}
            >
              <div className={`relative aspect-[16/10] overflow-hidden rounded-sm bg-line md:col-span-8 ${flip ? "md:order-2 md:col-start-5" : ""}`}>
                <div className="absolute inset-0 transition-transform duration-[1s] ease-soft group-hover:-translate-y-full">
                  <SmartImage imgKey={p.img} alt={`${p.title} — vista principale`} label={p.title} sizes="(max-width:768px) 100vw, 66vw" />
                </div>
                <div className="absolute inset-0 translate-y-full transition-transform duration-[1s] ease-soft group-hover:translate-y-0">
                  <SmartImage imgKey={p.imgAlt} alt={`${p.title} — vista alternata`} label={`${p.title} · dettaglio`} sizes="(max-width:768px) 100vw, 66vw" />
                </div>
              </div>
              <div className={`md:col-span-4 ${flip ? "md:order-1 md:row-start-1" : ""}`}>
                <span className="font-display text-6xl font-light leading-none text-accent md:text-8xl">{p.n}</span>
                <h3 className="mt-5 font-display text-3xl font-light tracking-tight text-ink md:text-4xl">{p.title}</h3>
                <span className="mt-5 inline-flex items-center gap-2 font-body text-[0.74rem] uppercase tracking-[0.18em] text-ink">
                  <span className="link-underline">Vedi il lavoro</span>
                  <span className="transition-transform duration-500 ease-soft group-hover:translate-x-1">→</span>
                </span>
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* CTA galleria */}
      <div className="mt-12 md:mt-28">
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
