"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SERVICES } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

// Span variati per ritmo bento (8 servizi).
const SPAN = [
  "md:col-span-7", "md:col-span-5",
  "md:col-span-5", "md:col-span-7",
  "md:col-span-6", "md:col-span-6",
  "md:col-span-7", "md:col-span-5",
];

// Variante C — Bento Grid. Card immagine con titolo+desc, hover zoom.
export default function ServicesC() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-bg shell py-24 md:py-32">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <span className="overline text-accent">01 — Cosa faccio</span>
          <h2 className="mt-5 font-display text-4xl font-light leading-tight tracking-tight text-ink md:text-6xl">
            I Nostri Servizi
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-sm font-body text-muted">
            Qualità e precisione al centro di ogni progetto.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-12">
        {SERVICES.map((s, i) => (
          <motion.a
            key={s.n}
            href="#contatti"
            className={`group relative block aspect-[4/3] overflow-hidden rounded-xl bg-ink md:aspect-[16/10] ${SPAN[i]}`}
            initial={reduce ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.7, ease, delay: (i % 2) * 0.08 }}
          >
            <Image
              src={`/images/${s.img}.jpg`}
              alt={s.title}
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover transition-transform duration-[1.2s] ease-soft group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/10" />
            <span className="absolute right-5 top-4 font-body text-[0.7rem] uppercase tracking-[0.2em] text-bg/70">
              {s.n}
            </span>
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <h3 className="font-display text-2xl font-light tracking-tight text-bg md:text-3xl">
                {s.title}
              </h3>
              <p className="mt-2 max-w-md font-body text-sm leading-relaxed text-bg/0 transition-colors duration-500 group-hover:text-bg/80">
                {s.desc}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
