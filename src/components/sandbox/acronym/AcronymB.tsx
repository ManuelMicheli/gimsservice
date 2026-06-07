"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

const LETTERS = [
  { l: "G", word: "Giardino", desc: "Cura del verde e degli spazi esterni." },
  { l: "I", word: "Imbiancatura", desc: "Tinteggiature per interni ed esterni." },
  { l: "M", word: "Muratura", desc: "Opere edili e ristrutturazioni." },
  { l: "S", word: "Sanitari", desc: "Impianti e bagni chiavi in mano." },
];

// Variante B — Monumental Lockup. 4 lettere giganti con divisori, hover-fill.
export default function AcronymB() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-bg shell py-24 text-center md:py-32">
      <Reveal>
        <span className="overline text-accent">Il nome</span>
        <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-light leading-tight tracking-tight text-ink md:text-6xl">
          Quattro mestieri, un solo artigiano.
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-2 border-l border-t border-line md:mt-20 md:grid-cols-4">
        {LETTERS.map((item, i) => (
          <motion.div
            key={item.l}
            className="group relative flex flex-col items-center border-b border-r border-line px-5 py-12 transition-colors duration-500 hover:bg-ink md:py-16"
            initial={reduce ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.7, ease, delay: i * 0.09 }}
          >
            <span className="font-display text-[5.5rem] font-light leading-none text-accent transition-colors duration-500 group-hover:text-bg md:text-[8rem]">
              {item.l}
            </span>
            <h3 className="mt-5 font-display text-xl font-light tracking-tight text-ink transition-colors duration-500 group-hover:text-bg md:text-2xl">
              {item.word}
            </h3>
            <p className="mt-3 max-w-[16ch] font-body text-sm leading-relaxed text-muted transition-colors duration-500 group-hover:text-bg/70">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
