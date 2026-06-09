"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PARTNERS } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import Marquee from "@/components/sections/Marquee";

const ease = [0.16, 1, 0.3, 1] as const;

// Variante C — Framed editorial: label + statement e lista numerata,
// marquee incorniciato con tacche d'angolo in basso.
export default function PartnersC() {
  const reduce = useReducedMotion();

  return (
    <section className="overflow-hidden bg-bg py-24 md:py-32">
      <div className="shell">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* Colonna sinistra — statement */}
          <div className="md:col-span-6">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-accent" />
                <span className="overline text-accent">La rete</span>
              </div>
              <p className="mt-7 max-w-xl font-display text-2xl font-light leading-snug tracking-tight text-ink md:text-4xl">
                Aziende selezionate del territorio che condividono i miei valori.
                Tu hai un unico referente —{" "}
                <span className="italic text-accent">io</span> — per un servizio
                completo e coordinato.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-muted">
                Partner qualificati per ogni specialità: materiali certificati e
                soluzioni tecniche affidabili, sempre sotto un'unica regia.
              </p>
            </Reveal>
          </div>

          {/* Colonna destra — lista numerata categorie */}
          <div className="md:col-span-6 md:pl-10">
            <div className="border-t border-line">
              {PARTNERS.map((p, i) => (
                <motion.div
                  key={p.key}
                  className="flex items-baseline gap-6 border-b border-line py-5"
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.6, ease, delay: i * 0.07 }}
                >
                  <span className="font-body text-[0.7rem] uppercase tracking-[0.2em] text-accent">
                    0{i + 1}
                  </span>
                  <span className="font-display text-xl font-light tracking-tight text-ink md:text-2xl">
                    {p.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee incorniciato con tacche d'angolo */}
      <Reveal delay={0.1} className="shell mt-16 md:mt-20">
        <div className="relative border border-line py-7 md:py-8">
          <span className="absolute -left-px -top-px h-3 w-3 border-l border-t border-accent" />
          <span className="absolute -right-px -top-px h-3 w-3 border-r border-t border-accent" />
          <span className="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-accent" />
          <span className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-accent" />
          <Marquee
            items={PARTNERS.map((p) => p.label)}
            itemClassName="font-display text-2xl font-light text-ink/85 md:text-4xl"
            separatorClassName="px-1 text-accent"
            duration={30}
          />
        </div>
      </Reveal>
    </section>
  );
}
