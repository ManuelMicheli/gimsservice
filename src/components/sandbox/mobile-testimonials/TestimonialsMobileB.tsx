"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

// B · Stacked Cards — tutte le recensioni in scroll verticale, card con bordo. Statico.
export default function TestimonialsMobileB() {
  return (
    <section className="border-y border-line bg-surface px-5 py-16">
      <span className="overline text-accent">03 — Recensioni</span>
      <h2 className="mt-4 font-display text-[2.2rem] font-light leading-tight tracking-tight text-ink">
        Dicono di me
      </h2>

      <div className="mt-10 flex flex-col gap-4">
        {TESTIMONIALS.map((t, i) => (
          <motion.figure
            key={t.n}
            className="rounded-xl border border-line bg-bg p-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-6% 0px" }}
            transition={{ duration: 0.6, ease, delay: i * 0.05 }}
          >
            <span className="text-[0.8rem] tracking-[0.2em] text-accent" aria-label="5 stelle su 5">
              ★★★★★
            </span>
            <blockquote className="mt-3 font-display text-[1.2rem] font-light leading-[1.45] tracking-tight text-ink">
              {t.text}
            </blockquote>
            <figcaption className="mt-4 border-t border-line pt-4 font-body text-sm text-muted">
              <span className="text-ink">{t.name}</span> · {t.place}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
