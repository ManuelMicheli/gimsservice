"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Recensioni.
 * Desktop = Spotlight Carousel centrato (auto-rotate + dots).
 * Mobile = Editorial Slider (quote a sx, virgoletta accent, nav frecce + contatore).
 */
export default function Testimonials() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const go = (d: number) => setI((p) => (p + d + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((p) => (p + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section id="recensioni" className="border-y border-line bg-surface py-16 md:py-36">
      {/* ===== MOBILE — Editorial Slider ===== */}
      <div className="px-5 md:hidden">
        <span className="overline text-accent">03 — Recensioni</span>

        <span className="pointer-events-none -mb-6 mt-6 block font-display text-[7rem] leading-none text-accent/25">
          “
        </span>
        <div className="min-h-[16rem]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -18 }}
              transition={{ duration: 0.6, ease }}
              className="font-display text-[1.6rem] font-light leading-[1.35] tracking-tight text-ink"
            >
              {t.text}
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-end justify-between border-t border-ink pt-5">
          <div className="flex items-center gap-3">
            <img
              src={t.avatar}
              alt={t.name}
              width={44}
              height={44}
              className="h-11 w-11 shrink-0 rounded-full border border-line bg-bg"
            />
            <div>
              <span className="text-accent" aria-label="5 stelle su 5">★★★★★</span>
              <p className="mt-1 font-body text-sm text-muted">
                <span className="text-ink">{t.name}</span> · {t.place}
              </p>
            </div>
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
      </div>

      {/* ===== DESKTOP — Spotlight Carousel ===== */}
      <div className="hidden shell md:block">
        <Reveal className="text-center">
          <span className="overline text-accent">03 — Recensioni</span>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-4xl text-center">
          <span className="pointer-events-none mb-2 block font-display text-7xl leading-none text-accent/30 md:text-8xl">
            “
          </span>
          <div className="min-h-[16rem]">
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

          <div className="mt-10 flex flex-col items-center gap-3">
            <img
              src={t.avatar}
              alt={t.name}
              width={56}
              height={56}
              className="h-14 w-14 rounded-full border border-line bg-bg"
            />
            <span className="text-accent" aria-label="5 stelle su 5">★★★★★</span>
            <span className="mt-1 font-body text-sm text-muted">
              <span className="text-ink">{t.name}</span> · {t.place}
            </span>
          </div>

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
