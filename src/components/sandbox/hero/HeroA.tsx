"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

// Variante A — Editorial Split.
// Foto full-bleed, top-bar a filo, headline mascherata riga per riga in basso a sinistra.
const LINES = ["Artigiano edile a Bareggio", "da oltre trent'anni."];

export default function HeroA() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink text-bg">
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-1.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/40" />
      </div>

      {/* Top bar a filo */}
      <div className="relative z-20 shell flex items-center justify-between border-b border-bg/15 py-5">
        <span className="font-display text-lg tracking-tight">G.I.M.S. Service</span>
        <span className="overline !text-bg/70">EST. 1990 — Bareggio (MI)</span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Blocco basso */}
      <div className="relative z-20 shell pb-14 md:pb-20">
        <motion.p
          className="overline !text-bg/80 mb-6"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
        >
          Imbiancatura · Decorazioni · Cartongesso · Finiture
        </motion.p>

        <h1 className="max-w-5xl font-display text-[2.6rem] font-light leading-[1.0] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          {LINES.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={reduce ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease, delay: 0.3 + i * 0.12 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="mt-11 flex flex-col items-start gap-7 border-t border-bg/15 pt-8 md:flex-row md:items-center md:justify-between"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.6 }}
        >
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-9">
            <Button href="#contatti" variant="solid" className="!bg-bg !text-ink hover:!bg-accent hover:!text-bg">
              Richiedi un preventivo gratuito
            </Button>
            <p className="max-w-xs font-body text-sm leading-relaxed text-bg/75">
              Un solo artigiano, dal primo sopralluogo alla consegna.
            </p>
          </div>
          <span className="hidden font-body text-[0.7rem] uppercase tracking-[0.22em] text-bg/50 md:inline">
            Scroll ↓
          </span>
        </motion.div>
      </div>
    </section>
  );
}
