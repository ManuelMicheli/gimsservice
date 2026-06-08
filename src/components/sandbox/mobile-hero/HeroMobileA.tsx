"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;
const LINES = ["Artigiano edile a Bareggio", "da oltre trent'anni."];

// A · Cinematic — full-bleed, contenuto ancorato in basso, headline mascherata.
export default function HeroMobileA() {
  return (
    <section className="relative flex h-full flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-1.jpg" alt="" fill priority sizes="390px" className="object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
      </div>

      {/* overline in alto */}
      <motion.p
        className="absolute left-5 right-5 top-12 z-20 font-body text-[0.62rem] uppercase leading-relaxed tracking-[0.2em] text-bg/75"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.2 }}
      >
        Imbiancatura · Decorazioni · Cartongesso · Finiture
      </motion.p>

      <div className="relative z-20 px-5 pb-9">
        <h1 className="font-display text-[2.05rem] font-light leading-[1.05] tracking-tight text-bg">
          {LINES.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.3 + i * 0.1 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="mt-8 border-t border-bg/15 pt-7"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.7 }}
        >
          <p className="mb-6 max-w-[18rem] font-body text-[0.86rem] leading-relaxed text-white">
            Un solo artigiano, dal primo sopralluogo alla consegna.
          </p>
          <a
            href="#contatti"
            className="flex w-full items-center justify-center rounded-full bg-bg px-7 py-4 font-body text-[0.74rem] uppercase tracking-[0.16em] text-ink"
          >
            Richiedi un preventivo gratuito
          </a>
          <p className="mt-5 text-center font-body text-[0.62rem] uppercase tracking-[0.22em] text-bg/50">
            Bareggio (MI) — Ovest milanese
          </p>
        </motion.div>
      </div>
    </section>
  );
}
