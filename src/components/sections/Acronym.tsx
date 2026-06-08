"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

// G.I.M.S. — l'acronimo dietro il nome. "Giardino" è il cognome dell'artigiano José Giardino.
const LETTERS = [
  { l: "G", word: "Giardino", desc: "Il cognome di José Giardino, l'artigiano dietro G.I.M.S." },
  { l: "I", word: "Imbiancatura", desc: "Tinteggiature per interni ed esterni." },
  { l: "M", word: "Muratura", desc: "Opere edili e ristrutturazioni." },
  { l: "S", word: "Sanitari", desc: "Impianti e bagni chiavi in mano." },
];

// Layout: Editorial Rows — ogni lettera è una riga full-width.
export default function Acronym() {
  const reduce = useReducedMotion();

  return (
    <section id="acronimo" className="shell py-24 md:py-32">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <span className="overline text-accent">Il nome</span>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-light leading-tight tracking-tight text-ink md:text-6xl 2xl:text-7xl">
            Cosa significa <span>G.I.M.S.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-sm font-body text-muted">
            Quattro mestieri, un solo artigiano: tutto ciò che serve per la tua casa.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 border-t border-line md:mt-20">
        {LETTERS.map((item, i) => (
          <motion.div
            key={item.l}
            className="group flex flex-col gap-3 border-b border-line py-7 transition-colors duration-500 hover:bg-ink/[0.02] md:grid md:grid-cols-12 md:items-center md:gap-4 md:py-9"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.7, ease, delay: i * 0.08 }}
          >
            <span className="hidden font-body text-[0.7rem] uppercase tracking-[0.2em] text-muted md:col-span-1 md:block">
              0{i + 1}
            </span>
            <div className="flex items-baseline gap-4 md:contents">
              <span className="font-display text-5xl font-light leading-none text-accent transition-colors duration-500 group-hover:text-accent md:col-span-2 md:text-8xl md:text-ink">
                {item.l}
              </span>
              <h3 className="font-display text-[1.6rem] font-light tracking-tight text-ink transition-transform duration-500 ease-soft group-hover:translate-x-2 md:col-span-4 md:text-4xl">
                {item.word}
              </h3>
            </div>
            <p className="font-body text-sm leading-relaxed text-muted md:col-span-5 md:mt-0 md:text-right">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
