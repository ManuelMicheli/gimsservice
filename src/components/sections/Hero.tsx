"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SITE } from "@/lib/site";
import Button from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

// Scena hero fissa (interno finito / finiture).
const HERO = {
  src: "/images/hero-1.jpg",
  alt: "Soggiorno finito con finiture su misura",
};

// Headline mascherata riga per riga (Editorial Split).
const LINES = ["Artigiano edile a Bareggio", "da oltre trent'anni."];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Immagine full-bleed */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO.src}
          alt={HERO.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay scuro per leggibilità — più intenso su mobile */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-black/20" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/45 to-transparent md:from-black/65 md:via-black/25" />
      </div>

      <div className="shell relative z-20 pb-14 pt-32 text-bg md:pb-20">
        <motion.p
          className="overline absolute left-5 top-12 right-5 !text-bg/80 md:static md:left-auto md:right-auto md:top-auto"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
        >
          Imbiancatura · Decorazioni · Cartongesso · Finiture
        </motion.p>

        <h1 className="mt-0 max-w-5xl font-display text-[2.05rem] font-light leading-[1.05] tracking-tight text-bg sm:mt-7 sm:text-6xl md:text-7xl lg:text-[5.5rem] 2xl:text-[7rem]">
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
          <div className="flex w-full flex-col-reverse items-start gap-6 md:w-auto md:flex-row md:items-center md:gap-9">
            <Button href="#contatti" variant="solid" className="w-full justify-center !bg-bg !text-ink hover:!bg-accent hover:!text-bg md:w-auto">
              Richiedi un preventivo gratuito
            </Button>
            <p className="max-w-xs font-body text-sm leading-relaxed text-white md:text-bg/75">
              Un solo artigiano, dal primo sopralluogo alla consegna.
            </p>
          </div>
          <span className="block w-full text-center font-body text-[0.7rem] uppercase tracking-[0.22em] text-bg/50 md:inline md:w-auto md:text-left">
            Bareggio (MI) — Ovest milanese
          </span>
        </motion.div>
      </div>

      <span className="sr-only">{SITE.brand} — artigiano edile a Bareggio (MI)</span>
    </section>
  );
}
