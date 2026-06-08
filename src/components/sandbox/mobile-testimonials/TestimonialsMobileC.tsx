"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

// C · Editorial Slider — quote grande allineata a sx, virgoletta accent enorme, nav numerata.
export default function TestimonialsMobileC() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const go = (d: number) => setI((p) => (p + d + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="border-y border-line bg-surface px-5 py-16">
      <span className="overline text-accent">03 — Recensioni</span>

      <span className="pointer-events-none -mb-6 mt-6 block font-display text-[7rem] leading-none text-accent/25">
        “
      </span>
      <div className="min-h-[16rem]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.6, ease }}
            className="font-display text-[1.6rem] font-light leading-[1.35] tracking-tight text-ink"
          >
            {t.text}
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-end justify-between border-t border-ink pt-5">
        <div>
          <span className="text-accent" aria-label="5 stelle su 5">★★★★★</span>
          <p className="mt-2 font-body text-sm text-muted">
            <span className="text-ink">{t.name}</span> · {t.place}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-body text-[0.7rem] tracking-[0.2em] text-muted">
            0{i + 1} / 0{TESTIMONIALS.length}
          </span>
          <button
            onClick={() => go(-1)}
            aria-label="Precedente"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink"
          >
            ←
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Successiva"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink bg-ink text-bg"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
