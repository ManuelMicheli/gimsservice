"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;
const LETTERS = [
  { l: "G", word: "Giardino", desc: "Cura del verde e degli spazi esterni." },
  { l: "I", word: "Imbiancatura", desc: "Tinteggiature, decorazioni e spatolati per interni ed esterni." },
  { l: "M", word: "Muratura", desc: "Opere edili e ristrutturazioni." },
  { l: "S", word: "Sanitari", desc: "Impianti idraulici e sanitari certificati." },
];

// B · Letter Blocks — lettera gigante come watermark, nome + desc in primo piano.
export default function AcronymMobileB() {
  return (
    <section className="bg-ink px-5 py-16 text-bg">
      <span className="overline text-accent">Il nome</span>
      <h2 className="mt-4 font-display text-[2.4rem] font-light leading-tight tracking-tight text-bg">
        Cosa significa G.I.M.S.
      </h2>
      <p className="mt-4 max-w-[18rem] font-body text-[0.84rem] leading-relaxed text-bg/60">
        Quattro mestieri, un solo artigiano: tutto ciò che serve per la tua casa.
      </p>

      <div className="mt-12 flex flex-col gap-4">
        {LETTERS.map((item, i) => (
          <motion.div
            key={item.l}
            className="relative overflow-hidden rounded-2xl border border-bg/15 px-6 py-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.6, ease, delay: i * 0.06 }}
          >
            <span className="pointer-events-none absolute -right-2 -top-6 font-display text-[9rem] font-light leading-none text-bg/10">
              {item.l}
            </span>
            <div className="relative">
              <span className="font-body text-[0.62rem] uppercase tracking-[0.2em] text-bg/40">
                0{i + 1}
              </span>
              <h3 className="mt-2 font-display text-[1.9rem] font-light tracking-tight text-bg">
                {item.word}
              </h3>
              <p className="mt-2 max-w-[15rem] font-body text-[0.82rem] leading-relaxed text-bg/60">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
