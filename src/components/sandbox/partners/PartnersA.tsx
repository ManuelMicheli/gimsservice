"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PARTNERS } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

// Variante A — Split: statement a sinistra, categorie partner numerate a destra.
export default function PartnersA() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-bg shell py-24 md:py-32">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-7">
          <Reveal>
            <span className="overline text-accent">La rete</span>
            <p className="mt-6 max-w-xl font-display text-2xl font-light leading-snug tracking-tight text-ink md:text-4xl">
              Collaboro con aziende selezionate del territorio che condividono i miei valori. Tu hai
              un unico referente — <span className="italic text-accent">io</span> — per un servizio
              completo e coordinato.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-5">
          <div className="border-t border-line">
            {PARTNERS.map((p, i) => (
              <motion.div
                key={p.key}
                className="flex items-baseline gap-5 border-b border-line py-5"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              >
                <span className="font-body text-[0.7rem] uppercase tracking-[0.2em] text-muted">
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
    </section>
  );
}
