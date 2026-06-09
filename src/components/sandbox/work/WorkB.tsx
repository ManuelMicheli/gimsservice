"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ROTATING_WORDS } from "@/lib/site";
import { WORKS, type WorkItem } from "@/components/sandbox/work/projects";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";
import RotatingWord from "@/components/ui/RotatingWord";

const ease = [0.16, 1, 0.3, 1] as const;

function Row({ p, i }: { p: WorkItem; i: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Parallax interno alla cornice.
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-8%", "8%"]);
  const flip = i % 2 === 1;

  return (
    <motion.a
      href="#contatti"
      className="group grid grid-cols-1 items-center gap-7 md:grid-cols-12 md:gap-12"
      initial={reduce ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.9, ease }}
    >
      <div
        ref={ref}
        className={`relative aspect-[4/3] overflow-hidden rounded-sm bg-line md:col-span-7 md:aspect-[16/11] ${
          flip ? "md:order-2 md:col-start-6" : ""
        }`}
      >
        <motion.div style={{ y }} className="absolute inset-[-9%]">
          <div className="absolute inset-0 transition-transform duration-[1100ms] ease-soft group-hover:-translate-y-full">
            <SmartImage imgKey={p.img} alt={`${p.title} — ${p.category}`} label={p.title} sizes="(max-width:768px) 100vw, 58vw" />
          </div>
          <div className="absolute inset-0 translate-y-full transition-transform duration-[1100ms] ease-soft group-hover:translate-y-0">
            <SmartImage imgKey={p.imgAlt} alt={`${p.title} — dettaglio`} label={`${p.title} · dettaglio`} sizes="(max-width:768px) 100vw, 58vw" />
          </div>
        </motion.div>
        <span className="pointer-events-none absolute left-5 top-5 font-display text-7xl font-light leading-none text-bg/85 mix-blend-overlay md:text-8xl">
          {p.n}
        </span>
      </div>

      <div className={`md:col-span-5 ${flip ? "md:order-1 md:row-start-1 md:pl-4" : "md:pl-2"}`}>
        <span className="flex items-center gap-3 font-body text-[0.7rem] uppercase tracking-[0.2em] text-accent">
          {p.category}
          <span className="h-px w-10 bg-accent/50" />
          <span className="text-muted">{p.place} · {p.year}</span>
        </span>
        <h3 className="mt-5 font-display text-4xl font-light leading-[1.04] tracking-tight text-ink md:text-6xl">
          {p.title}
        </h3>
        <span className="mt-6 inline-flex items-center gap-2 font-body text-[0.74rem] uppercase tracking-[0.18em] text-ink">
          <span className="link-underline">Vedi il lavoro</span>
          <span className="transition-transform duration-500 ease-soft group-hover:translate-x-1.5">→</span>
        </span>
      </div>
    </motion.a>
  );
}

/** Variante B — Cinematic Editorial. Righe alternate full-bleed con parallax. */
export default function WorkB() {
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

      <div className="mt-16 flex flex-col gap-20 md:mt-28 md:gap-36">
        {WORKS.map((p, i) => (
          <Row key={p.n} p={p} i={i} />
        ))}
      </div>

      <div className="mt-20 md:mt-32">
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
