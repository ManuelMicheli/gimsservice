"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;
const LINES = ["Artigiano", "edile a", "Bareggio."];

// B · Editorial Split — testo su off-white in alto, immagine in basso, CTA sul confine.
export default function HeroMobileB() {
  return (
    <section className="flex h-full flex-col bg-bg">
      {/* blocco testo */}
      <div className="relative px-5 pb-10 pt-16">
        <motion.p
          className="overline"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
        >
          Dal 1990 — Bareggio (MI)
        </motion.p>

        <h1 className="mt-6 font-display text-[3.1rem] font-light leading-[0.98] tracking-tight text-ink">
          {LINES.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.25 + i * 0.1 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="mt-6 max-w-[17rem] font-body text-[0.82rem] leading-relaxed text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.6 }}
        >
          Imbiancatura, decorazioni, cartongesso e finiture. Un solo artigiano,
          dal sopralluogo alla consegna.
        </motion.p>
      </div>

      {/* immagine + CTA sovrapposta al confine */}
      <div className="relative flex-1 overflow-hidden">
        <Image src="/images/hero-1.jpg" alt="" fill priority sizes="390px" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <motion.a
          href="#contatti"
          className="absolute left-5 right-5 top-0 flex -translate-y-1/2 items-center justify-center rounded-full bg-ink px-7 py-4 font-body text-[0.74rem] uppercase tracking-[0.16em] text-bg shadow-xl"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: "-50%" }}
          transition={{ duration: 0.7, ease, delay: 0.8 }}
        >
          Richiedi un preventivo gratuito
        </motion.a>
        <p className="absolute bottom-7 left-5 right-5 font-body text-[0.62rem] uppercase tracking-[0.22em] text-bg/80">
          Ovest milanese — oltre trent'anni di cantieri
        </p>
      </div>
    </section>
  );
}
