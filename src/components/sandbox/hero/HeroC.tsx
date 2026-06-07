"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

// Variante C — Framed Gallery. Frame inset, hairline a croce, indice da galleria.
const LINES = ["Artigiano edile", "a Bareggio."];

export default function HeroC() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] bg-bg p-3 md:p-5">
      <div className="relative h-[calc(100svh-1.5rem)] overflow-hidden border border-ink/20 bg-ink text-bg md:h-[calc(100svh-2.5rem)]">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-3.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/35" />
        </div>

        {/* Hairline a croce */}
        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="absolute left-1/2 top-0 h-full w-px bg-bg/10" />
          <div className="absolute left-0 top-[68%] h-px w-full bg-bg/10" />
        </div>

        {/* Top row: overline + indice */}
        <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between p-6 md:p-9">
          <motion.span
            className="overline !text-bg/80"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease, delay: 0.3 }}
          >
            Imbiancatura · Cartongesso · Finiture
          </motion.span>
          <motion.span
            className="font-body text-[0.7rem] uppercase tracking-[0.22em] text-bg/60"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease, delay: 0.4 }}
          >
            (01 / Home)
          </motion.span>
        </div>

        {/* Bottom: headline + meta */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col gap-8 p-6 md:flex-row md:items-end md:justify-between md:p-9">
          <h1 className="font-display text-[2.5rem] font-light leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-[5rem]">
            {LINES.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease, delay: 0.45 + i * 0.12 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            className="flex max-w-sm flex-col items-start gap-5"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.7 }}
          >
            <p className="font-body text-sm leading-relaxed text-bg/75">
              Un solo referente, dal sopralluogo alla consegna. Oltre trent'anni di lavori nell'ovest milanese.
            </p>
            <Button href="#contatti" variant="solid" className="!bg-bg !text-ink hover:!bg-accent hover:!text-bg">
              Preventivo gratuito
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
