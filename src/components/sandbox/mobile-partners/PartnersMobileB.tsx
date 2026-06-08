"use client";

import { motion } from "framer-motion";
import { PARTNERS } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

// B · Numbered List — claim centrato + categorie partner come lista verticale numerata.
export default function PartnersMobileB() {
  return (
    <section className="bg-bg px-5 py-16">
      <div className="mx-auto max-w-[20rem] text-center">
        <span className="overline text-accent">La rete</span>
        <p className="mt-5 font-display text-[1.45rem] font-light leading-snug tracking-tight text-ink">
          Collaboro con aziende selezionate del territorio che condividono i miei valori — con
          un unico referente: <span className="italic text-accent">io</span>.
        </p>
      </div>

      <div className="mt-12 border-t border-line">
        {PARTNERS.map((p, i) => (
          <motion.div
            key={p.key}
            className="flex items-center gap-5 border-b border-line py-6"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-6% 0px" }}
            transition={{ duration: 0.5, ease, delay: i * 0.06 }}
          >
            <span className="font-body text-[0.62rem] uppercase tracking-[0.2em] text-accent">
              0{i + 1}
            </span>
            <h3 className="font-display text-[1.6rem] font-light tracking-tight text-ink">
              {p.label}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
