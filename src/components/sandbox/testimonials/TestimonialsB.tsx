"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

// Variante B — Spotlight Carousel. Una quote gigante per volta, auto-rotate.
export default function TestimonialsB() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((p) => (p + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section className="border-y border-line bg-surface py-24 md:py-36">
      <div className="shell">
        <Reveal className="text-center">
          <span className="overline text-accent">03 — Recensioni</span>
        </Reveal>

        <div className="relative mx-auto mt-12 max-w-4xl text-center md:mt-16">
          <span className="pointer-events-none mb-2 block font-display text-7xl leading-none text-accent/30 md:text-8xl">
            “
          </span>
          <div className="min-h-[14rem] md:min-h-[16rem]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -18 }}
                transition={{ duration: 0.6, ease }}
                className="font-display text-2xl font-light leading-[1.35] tracking-tight text-ink md:text-4xl"
              >
                {t.text}
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex flex-col items-center gap-1">
            <span className="text-accent" aria-label="5 stelle su 5">★★★★★</span>
            <span className="mt-3 font-body text-sm text-muted">
              <span className="text-ink">{t.name}</span> · {t.place}
            </span>
          </div>

          {/* Dots */}
          <div className="mt-10 flex items-center justify-center gap-3">
            {TESTIMONIALS.map((d, k) => (
              <button
                key={d.n}
                onClick={() => setI(k)}
                aria-label={`Recensione ${k + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${k === i ? "w-8 bg-accent" : "w-1.5 bg-line"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
