"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

// Variante C — Editorial Rows. Quote grandi impilate, numerate, hairline.
export default function TestimonialsC() {
  const reduce = useReducedMotion();

  return (
    <section className="border-y border-line bg-surface py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <span className="overline text-accent">03 — Recensioni</span>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-light leading-tight tracking-tight text-ink md:text-6xl">
            Cosa Dicono i Nostri Clienti
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-line">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.n}
              className="grid grid-cols-1 gap-6 border-b border-line py-10 md:grid-cols-12 md:gap-12 md:py-14"
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.05 }}
            >
              <div className="flex items-start justify-between md:col-span-4 md:flex-col md:gap-6">
                <span className="font-display text-5xl font-light leading-none text-accent md:text-7xl">
                  {t.n}
                </span>
                <div className="text-right md:text-left">
                  <div className="text-accent" aria-label="5 stelle su 5">★★★★★</div>
                  <div className="mt-2 font-body text-sm text-muted">
                    <span className="text-ink">{t.name}</span> · {t.place}
                  </div>
                </div>
              </div>
              <blockquote className="font-display text-xl font-light leading-relaxed text-ink md:col-span-8 md:text-3xl">
                “{t.text}”
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
