"use client";

import { motion } from "framer-motion";
import { PROJECTS, ROTATING_WORDS } from "@/lib/site";
import SmartImage from "@/components/ui/SmartImage";
import RotatingWord from "@/components/ui/RotatingWord";

const ease = [0.16, 1, 0.3, 1] as const;

// C · Caption Strip — immagine 4:5, sotto barra caption con numero + titolo + freccia su hairline.
export default function WorkMobileC() {
  return (
    <section className="bg-bg px-5 py-16">
      <span className="overline text-accent">02 — Lavori in evidenza</span>
      <h2 className="mt-5 font-display text-[2.2rem] font-light leading-[1.1] tracking-tight text-ink">
        Realizzo <RotatingWord words={ROTATING_WORDS} /> che durano nel tempo.
      </h2>

      <div className="mt-12 flex flex-col gap-14">
        {PROJECTS.map((p, i) => (
          <motion.a
            key={p.n}
            href="#contatti"
            className="block"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.7, ease, delay: i * 0.03 }}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-line">
              <SmartImage imgKey={p.img} alt={p.title} label={p.title} sizes="360px" />
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-ink pt-3">
              <div className="flex items-baseline gap-3">
                <span className="font-body text-[0.62rem] uppercase tracking-[0.2em] text-accent">
                  {p.n}
                </span>
                <h3 className="font-display text-[1.5rem] font-light tracking-tight text-ink">
                  {p.title}
                </h3>
              </div>
              <span className="font-body text-[0.66rem] uppercase tracking-[0.18em] text-ink">→</span>
            </div>
          </motion.a>
        ))}
      </div>

      <a
        href="#contatti"
        className="mt-12 flex items-center justify-between rounded-sm bg-ink p-6 text-bg"
      >
        <span className="font-display text-2xl font-light leading-tight">Guarda tutti i lavori</span>
        <span aria-hidden className="text-lg">→</span>
      </a>
    </section>
  );
}
