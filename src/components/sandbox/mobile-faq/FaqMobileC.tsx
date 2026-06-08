"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQ_TEASER } from "@/lib/site";
import Button from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

// C · Card Accordion — ogni domanda in una card arrotondata, con gap. Più morbido.
export default function FaqMobileC() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-line bg-surface px-5 py-16">
      <span className="overline text-accent">06 — Domande frequenti</span>
      <h2 className="mt-4 font-display text-[2rem] font-light leading-tight tracking-tight text-ink">
        Le risposte alle domande più comuni.
      </h2>

      <div className="mt-10 flex flex-col gap-3">
        {FAQ_TEASER.map((f, i) => {
          const active = open === i;
          return (
            <div
              key={f.q}
              className={`rounded-xl border px-5 transition-colors duration-300 ${active ? "border-accent/40 bg-bg" : "border-line bg-bg"}`}
            >
              <button
                onClick={() => setOpen(active ? null : i)}
                aria-expanded={active}
                className="flex w-full items-center justify-between gap-5 py-5 text-left"
              >
                <span className="font-display text-[1.18rem] font-light leading-snug text-ink">{f.q}</span>
                <span className={`shrink-0 font-body text-2xl text-accent transition-transform duration-500 ease-soft ${active ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {active && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 font-body text-[0.84rem] leading-relaxed text-muted">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <Button href="#contatti" variant="outline" className="mt-8 w-full justify-center">
        Tutte le domande →
      </Button>
    </section>
  );
}
