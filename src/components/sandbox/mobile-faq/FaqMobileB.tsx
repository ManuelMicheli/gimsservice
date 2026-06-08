"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQ_TEASER } from "@/lib/site";
import Button from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

// B · Numbered Accordion — ogni domanda con numero accent 0X, accordion.
export default function FaqMobileB() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-line bg-surface px-5 py-16">
      <span className="overline text-accent">06 — Domande frequenti</span>
      <h2 className="mt-4 font-display text-[2rem] font-light leading-tight tracking-tight text-ink">
        Le risposte alle domande più comuni.
      </h2>

      <div className="mt-10 border-t border-line">
        {FAQ_TEASER.map((f, i) => {
          const active = open === i;
          return (
            <div key={f.q} className="border-b border-line">
              <button
                onClick={() => setOpen(active ? null : i)}
                aria-expanded={active}
                className="flex w-full items-start gap-4 py-5 text-left"
              >
                <span className="mt-1 font-body text-[0.62rem] uppercase tracking-[0.2em] text-accent">
                  0{i + 1}
                </span>
                <span className="flex-1 font-display text-[1.2rem] font-light leading-snug text-ink">
                  {f.q}
                </span>
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
                    <p className="pb-6 pl-8 font-body text-[0.84rem] leading-relaxed text-muted">{f.a}</p>
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
