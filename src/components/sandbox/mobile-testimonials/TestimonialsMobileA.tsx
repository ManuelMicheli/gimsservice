"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

// A · Spotlight Carousel — una quote alla volta, auto-rotate + dots (mobile-tuned dell'attuale).
export default function TestimonialsMobileA() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="border-y border-line bg-surface px-5 py-16 text-center">
      <span className="overline text-accent">03 — Recensioni</span>

      <span className="pointer-events-none mt-8 block font-display text-6xl leading-none text-accent/30">
        “
      </span>
      <div className="min-h-[15rem]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.6, ease }}
            className="font-display text-[1.5rem] font-light leading-[1.4] tracking-tight text-ink"
          >
            {t.text}
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex flex-col items-center gap-1">
        <span className="text-accent" aria-label="5 stelle su 5">★★★★★</span>
        <span className="mt-3 font-body text-sm text-muted">
          <span className="text-ink">{t.name}</span> · {t.place}
        </span>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        {TESTIMONIALS.map((d, k) => (
          <button
            key={d.n}
            onClick={() => setI(k)}
            aria-label={`Recensione ${k + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${k === i ? "w-8 bg-accent" : "w-1.5 bg-line"}`}
          />
        ))}
      </div>
    </section>
  );
}
