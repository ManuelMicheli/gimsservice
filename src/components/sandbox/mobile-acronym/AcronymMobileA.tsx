"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;
const LETTERS = [
  { l: "G", word: "Giardino", desc: "Il cognome di José Giardino, l'artigiano dietro G.I.M.S." },
  { l: "I", word: "Imbiancatura", desc: "Tinteggiature, decorazioni e spatolati per interni ed esterni." },
  { l: "M", word: "Muratura", desc: "Opere edili e ristrutturazioni." },
  { l: "S", word: "Sanitari", desc: "Impianti idraulici e sanitari certificati." },
];

// A · Editorial Rows — lettera grande inline col nome, numero + desc, hairline.
export default function AcronymMobileA() {
  return (
    <section className="bg-bg px-5 py-16">
      <span className="overline text-accent">Il nome</span>
      <h2 className="mt-4 font-display text-[2.4rem] font-light leading-tight tracking-tight text-ink">
        Cosa significa G.I.M.S.
      </h2>
      <p className="mt-4 max-w-[18rem] font-body text-[0.84rem] leading-relaxed text-muted">
        Quattro mestieri, un solo artigiano: tutto ciò che serve per la tua casa.
      </p>

      <div className="mt-12 border-t border-line">
        {LETTERS.map((item, i) => (
          <motion.div
            key={item.l}
            className="border-b border-line py-7"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.6, ease, delay: i * 0.06 }}
          >
            <div className="flex items-baseline gap-4">
              <span className="font-display text-5xl font-light leading-none text-accent">
                {item.l}
              </span>
              <h3 className="font-display text-[1.6rem] font-light tracking-tight text-ink">
                {item.word}
              </h3>
            </div>
            <p className="mt-3 font-body text-[0.82rem] leading-relaxed text-muted">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
