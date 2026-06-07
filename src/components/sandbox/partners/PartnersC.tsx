"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PARTNERS } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

// Variante C — Claim centrato + strip di celle bordate (spec-sheet).
export default function PartnersC() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-bg shell py-24 md:py-32">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="overline text-accent">La rete</span>
        <p className="mt-6 font-display text-2xl font-light leading-snug tracking-tight text-ink md:text-4xl">
          Per impianti elettrici, serramenti, condizionamento e idraulica mi avvalgo di partner
          qualificati. Un servizio completo e coordinato, con un unico referente:{" "}
          <span className="italic text-accent">io</span>.
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-2 border-l border-t border-line md:mt-20 md:grid-cols-4">
        {PARTNERS.map((p, i) => (
          <motion.div
            key={p.key}
            className="flex flex-col gap-3 border-b border-r border-line p-7 md:p-9"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, ease, delay: i * 0.08 }}
          >
            <span className="font-body text-[0.7rem] uppercase tracking-[0.2em] text-accent">
              0{i + 1}
            </span>
            <span className="font-display text-lg font-light tracking-tight text-ink md:text-xl">
              {p.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
