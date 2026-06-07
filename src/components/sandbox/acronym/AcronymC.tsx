"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const LETTERS = [
  { l: "G", word: "Giardino", desc: "Cura del verde e degli spazi esterni." },
  { l: "I", word: "Imbiancatura", desc: "Tinteggiature per interni ed esterni." },
  { l: "M", word: "Muratura", desc: "Opere edili e ristrutturazioni." },
  { l: "S", word: "Sanitari", desc: "Impianti e bagni chiavi in mano." },
];

// Variante C — Sticky Split. Colonna sx ferma, dx scorre i blocchi.
export default function AcronymC() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-bg shell py-24 md:py-32">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
        {/* Sinistra sticky */}
        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <span className="overline text-accent">Il nome</span>
            <h2 className="mt-5 font-display text-4xl font-light leading-tight tracking-tight text-ink md:text-6xl">
              Cosa significa <span className="italic">G.I.M.S.</span>
            </h2>
            <p className="mt-7 max-w-sm font-body text-muted">
              Quattro mestieri, un solo artigiano: tutto ciò che serve per la tua casa, con un
              unico referente dal sopralluogo alla consegna.
            </p>
            <span className="mt-8 inline-block font-body text-[0.7rem] uppercase tracking-[0.2em] text-muted">
              (04 — Competenze)
            </span>
          </div>
        </div>

        {/* Destra: blocchi */}
        <div className="md:col-span-7">
          <div className="border-t border-line">
            {LETTERS.map((item, i) => (
              <motion.div
                key={item.l}
                className="flex items-baseline gap-6 border-b border-line py-9 md:gap-10 md:py-12"
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.7, ease, delay: i * 0.05 }}
              >
                <span className="font-display text-6xl font-light leading-none text-accent md:text-7xl">
                  {item.l}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-light tracking-tight text-ink md:text-3xl">
                    {item.word}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
