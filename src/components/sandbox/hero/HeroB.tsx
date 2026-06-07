"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

// Variante B — Centered Monumental. Il tipo È l'eroe.
const WORDS = ["Finiture", "che", "durano", "nel", "tempo."];

export default function HeroB() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink text-bg">
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-2.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        {/* Vignette + scuro centrale per il testo */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,0.65)_100%)]" />
      </div>

      {/* Kicker top */}
      <motion.p
        className="overline !text-bg/70 absolute left-1/2 top-10 z-20 -translate-x-1/2 text-center md:top-14"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.2 }}
      >
        G.I.M.S. Service — Bareggio (MI)
      </motion.p>

      <div className="relative z-20 shell flex flex-col items-center text-center">
        <h1 className="max-w-6xl font-display text-[3rem] font-light leading-[0.98] tracking-tight sm:text-7xl md:text-8xl lg:text-[8.5rem]">
          {WORDS.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block pr-[0.22em]"
                initial={reduce ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease, delay: 0.25 + i * 0.09 }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="mt-8 max-w-md font-body text-sm leading-relaxed text-bg/75"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.8 }}
        >
          Oltre trent'anni di imbiancatura, decorazioni e ristrutturazioni nell'ovest milanese.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.95 }}
        >
          <Button href="#contatti" variant="solid" className="!bg-bg !text-ink hover:!bg-accent hover:!text-bg">
            Richiedi un preventivo gratuito
          </Button>
        </motion.div>
      </div>

      {/* Corner meta */}
      <div className="absolute bottom-8 left-0 z-20 shell flex w-full items-end justify-between">
        <span className="font-body text-[0.7rem] uppercase tracking-[0.22em] text-bg/50">
          45.47°N — 8.99°E
        </span>
        <span className="font-body text-[0.7rem] uppercase tracking-[0.22em] text-bg/50">
          Scroll ↓
        </span>
      </div>
    </section>
  );
}
