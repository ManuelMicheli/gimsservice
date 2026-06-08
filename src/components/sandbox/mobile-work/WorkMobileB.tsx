"use client";

import { motion } from "framer-motion";
import { PROJECTS, ROTATING_WORDS } from "@/lib/site";
import SmartImage from "@/components/ui/SmartImage";
import RotatingWord from "@/components/ui/RotatingWord";

const ease = [0.16, 1, 0.3, 1] as const;

// B · Overlay Cards — immagini verticali 4:5 con numero+titolo overlay su gradient. Portfolio cover.
export default function WorkMobileB() {
  return (
    <section className="bg-bg px-5 py-16">
      <span className="overline text-accent">02 — Lavori in evidenza</span>
      <h2 className="mt-5 font-display text-[2.2rem] font-light leading-[1.1] tracking-tight text-ink">
        Realizzo <RotatingWord words={ROTATING_WORDS} /> che durano nel tempo.
      </h2>

      <div className="mt-12 flex flex-col gap-5">
        {PROJECTS.map((p, i) => (
          <motion.a
            key={p.n}
            href="#contatti"
            className="relative block aspect-[4/5] w-full overflow-hidden rounded-lg bg-line"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.7, ease, delay: i * 0.03 }}
          >
            <SmartImage imgKey={p.img} alt={p.title} label={p.title} sizes="360px" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
            <span className="absolute right-5 top-5 font-display text-3xl font-light leading-none text-bg/70">
              {p.n}
            </span>
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
              <h3 className="font-display text-[2rem] font-light leading-none tracking-tight text-bg">
                {p.title}
              </h3>
              <span className="mb-1 font-body text-[0.66rem] uppercase tracking-[0.18em] text-bg">
                Vedi →
              </span>
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
