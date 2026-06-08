"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQ_TEASER } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * FAQ teaser — Accordion. Una domanda aperta per volta.
 */
export default function FaqTeaser() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-line bg-surface py-20 md:py-32">
      <div className="shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <Reveal>
          <span className="overline text-accent">06 — Domande frequenti</span>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight tracking-tight text-ink md:text-5xl">
            Le risposte alle domande più comuni.
          </h2>
          <Button href="#contatti" variant="outline" className="mt-8 hidden lg:inline-flex">
            Tutte le domande →
          </Button>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border-t border-line">
            {FAQ_TEASER.map((f, i) => {
              const active = open === i;
              return (
                <div key={f.q} className="border-b border-line">
                  <button
                    onClick={() => setOpen(active ? null : i)}
                    aria-expanded={active}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-xl font-light text-ink md:text-2xl">{f.q}</span>
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
                        <p className="max-w-xl pb-7 font-body text-sm leading-relaxed text-muted">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* CTA mobile — sotto l'accordion, full-width */}
        <Button href="#contatti" variant="outline" className="w-full justify-center lg:hidden">
          Tutte le domande →
        </Button>
      </div>
    </section>
  );
}
