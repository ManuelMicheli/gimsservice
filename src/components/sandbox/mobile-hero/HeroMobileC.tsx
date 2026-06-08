"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;
const LINES = ["Artigiano edile", "a Bareggio."];

// C · Framed Gallery — immagine full-bleed con cornice a filo, label verticale, headline in basso.
export default function HeroMobileC() {
  return (
    <section className="relative h-full overflow-hidden bg-ink">
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-1.jpg" alt="" fill priority sizes="390px" className="object-cover" />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* cornice hairline inset */}
      <div className="pointer-events-none absolute inset-4 z-20 border border-bg/35" />

      {/* overline in alto */}
      <motion.p
        className="absolute left-9 right-9 top-10 z-30 font-body text-[0.6rem] uppercase tracking-[0.24em] text-bg/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease, delay: 0.3 }}
      >
        G.I.M.S. Service — dal 1990
      </motion.p>

      {/* label verticale */}
      <motion.span
        className="absolute right-7 top-1/2 z-30 origin-center -translate-y-1/2 rotate-90 whitespace-nowrap font-body text-[0.58rem] uppercase tracking-[0.3em] text-bg/55"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease, delay: 0.6 }}
      >
        Bareggio (MI) · Ovest milanese
      </motion.span>

      {/* headline + CTA in basso */}
      <div className="absolute inset-x-9 bottom-11 z-30">
        <h1 className="font-display text-[2.7rem] font-light leading-[1.0] tracking-tight text-bg">
          {LINES.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.35 + i * 0.12 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.a
          href="#contatti"
          className="mt-7 flex w-full items-center justify-center rounded-full border border-bg/40 px-7 py-4 font-body text-[0.72rem] uppercase tracking-[0.16em] text-bg backdrop-blur-sm"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.7 }}
        >
          Preventivo gratuito →
        </motion.a>
      </div>
    </section>
  );
}
