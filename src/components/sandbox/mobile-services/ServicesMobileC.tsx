"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

// C · Thumb List — riga compatta: thumbnail quadrata sx, numero+titolo+desc dx. Lista con immagini.
export default function ServicesMobileC() {
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
            className="flex items-center gap-4 border-b border-line py-4"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-6% 0px" }}
            transition={{ duration: 0.5, ease, delay: i * 0.03 }}
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md">
              <Image src={`/images/${s.img}.jpg`} alt="" fill sizes="80px" className="object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="font-body text-[0.58rem] uppercase tracking-[0.2em] text-accent">
                {s.n}
              </span>
              <h3 className="font-display text-[1.35rem] font-light leading-tight tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-1 font-body text-[0.74rem] leading-snug text-muted">
                {s.desc}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
