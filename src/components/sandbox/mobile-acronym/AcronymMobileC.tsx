"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;
const LETTERS = [
  { l: "G", word: "Giardino", desc: "Cura del verde e degli spazi esterni." },
  { l: "I", word: "Imbiancatura", desc: "Tinteggiature per interni ed esterni." },
  { l: "M", word: "Muratura", desc: "Opere edili e ristrutturazioni." },
  { l: "S", word: "Sanitari", desc: "Impianti idraulici e sanitari, con artigiani di fiducia." },
];

// C · Centered Monogram — lettere enormi centrate, nome sotto, ritmo verticale ampio.
export default function AcronymMobileC() {
  return (
    <section className="bg-bg px-5 py-16 text-center">
      <span className="overline text-accent">Il nome</span>
      <h2 className="mx-auto mt-4 max-w-[16rem] font-display text-[2.3rem] font-light leading-tight tracking-tight text-ink">
        Cosa significa G.I.M.S.
      </h2>
      <p className="mx-auto mt-4 max-w-[17rem] font-body text-[0.84rem] leading-relaxed text-muted">
        Quattro mestieri, un solo artigiano: tutto ciò che serve per la tua casa.
      </p>

      <div className="mt-14 flex flex-col">
        {LETTERS.map((item, i) => (
          <motion.div
            key={item.l}
            className="border-t border-line py-9 last:border-b"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.6, ease, delay: i * 0.06 }}
          >
            <span className="block font-display text-[5.5rem] font-light leading-none text-ink">
              {item.l}
            </span>
            <h3 className="mt-3 font-display text-[1.5rem] font-light tracking-tight text-accent">
              {item.word}
            </h3>
            <p className="mx-auto mt-2 max-w-[15rem] font-body text-[0.8rem] leading-relaxed text-muted">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
