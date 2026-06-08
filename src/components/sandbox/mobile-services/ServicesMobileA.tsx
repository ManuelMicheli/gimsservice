"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

// A · Editorial List — type-led, numero + titolo grande + desc + freccia. Nessuna immagine.
export default function ServicesMobileA() {
  return (
    <section className="bg-bg px-5 py-16">
      <span className="overline text-accent">01 — Cosa faccio</span>
      <h2 className="mt-4 font-display text-[2.4rem] font-light leading-tight tracking-tight text-ink">
        I Nostri Servizi
      </h2>
      <p className="mt-4 max-w-[18rem] font-body text-[0.84rem] leading-relaxed text-muted">
        Qualità e precisione al centro di ogni progetto.
      </p>

      <div className="mt-10 border-t border-line">
        {SERVICES.map((s, i) => (
          <motion.a
            key={s.n}
            href="#contatti"
            className="block border-b border-line py-6"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-6% 0px" }}
            transition={{ duration: 0.5, ease, delay: i * 0.03 }}
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-[1.7rem] font-light tracking-tight text-ink">
                {s.title}
              </h3>
              <span className="font-body text-[0.62rem] uppercase tracking-[0.2em] text-accent">
                {s.n}
              </span>
            </div>
            <p className="mt-2 max-w-[17rem] font-body text-[0.82rem] leading-relaxed text-muted">
              {s.desc}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
