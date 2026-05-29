"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SITE } from "@/lib/site";
import Button from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

// 3 scene rappresentative (interni finiti / finiture) che scorrono in dissolvenza.
const SLIDES = [
  { src: "/images/hero-1.jpg", alt: "Soggiorno finito con finiture su misura" },
  { src: "/images/hero-2.jpg", alt: "Interno luminoso con pareti tinteggiate a regola d'arte" },
  { src: "/images/hero-3.jpg", alt: "Ambiente curato con decorazioni e dettagli artigianali" },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  const DURATION = 5000; // tempo per slide (ms) — sincronizzato con la barra di caricamento

  // Timeout riavviato a ogni cambio di `i`: vale sia per l'auto-avanzamento sia
  // per il click manuale (il timer riparte da capo).
  useEffect(() => {
    if (reduce) return;
    const t = setTimeout(() => setI((p) => (p + 1) % SLIDES.length), DURATION);
    return () => clearTimeout(t);
  }, [i, reduce]);

  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Slideshow full-bleed: scorrimento orizzontale smooth (sempre in avanti) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={reduce ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={reduce ? undefined : { x: "-100%" }}
            transition={{ duration: 1.2, ease }}
          >
            <Image
              src={SLIDES[i].src}
              alt={SLIDES[i].alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/15" />
      </div>

      <div className="shell relative z-20 pb-16 pt-32 text-bg md:pb-24">
        <motion.p
          className="overline text-bg/70"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
        >
          Precisione e qualità in ogni dettaglio.
        </motion.p>

        <motion.p
          className="mt-4 font-body text-sm tracking-[0.04em] text-bg/70"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
        >
          Imbiancatura · Decorazioni · Cartongesso · Ristrutturazioni · Finiture
        </motion.p>

        <motion.h1
          className="mt-7 max-w-5xl font-display text-[2.5rem] font-light leading-[1.02] tracking-tight text-bg sm:text-6xl md:text-7xl lg:text-[5.5rem] 2xl:text-[7rem]"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.3 }}
        >
          Artigiano edile a Bareggio da oltre <span className="italic">trent&apos;anni</span>.
        </motion.h1>

        <motion.div
          className="mt-10 flex flex-col items-start gap-7 md:flex-row md:items-center md:gap-10"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.5 }}
        >
          <Button href="#contatti" variant="solid" className="!bg-bg !text-ink hover:!bg-accent hover:!text-bg">
            Richiedi un preventivo gratuito
          </Button>
          <p className="max-w-xs font-body text-sm leading-relaxed text-bg/75">
            Un solo artigiano, dal primo sopralluogo alla consegna.
          </p>
        </motion.div>

        {/* Indicatori slideshow: 3 trattini + barra di caricamento sul corrente */}
        <div className="mt-12 flex items-center gap-3">
          {SLIDES.map((_, n) => (
            <button
              key={n}
              onClick={() => setI(n)}
              aria-label={`Vai alla slide ${n + 1}`}
              aria-current={n === i}
              className="relative h-[3px] w-12 overflow-hidden rounded-full bg-bg/30 transition-[width] duration-500 ease-soft hover:bg-bg/45"
            >
              {/* slide già passate: barra piena */}
              {n < i && <span className="absolute inset-0 rounded-full bg-bg/70" />}
              {/* slide corrente: barra che si riempie nel tempo che manca al cambio */}
              {n === i &&
                (reduce ? (
                  <span className="absolute inset-0 rounded-full bg-bg" />
                ) : (
                  <motion.span
                    key={i}
                    className="absolute inset-y-0 left-0 rounded-full bg-bg"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: DURATION / 1000, ease: "linear" }}
                  />
                ))}
            </button>
          ))}
        </div>
      </div>

      <span className="sr-only">{SITE.brand} — artigiano edile a Bareggio (MI)</span>
    </section>
  );
}
