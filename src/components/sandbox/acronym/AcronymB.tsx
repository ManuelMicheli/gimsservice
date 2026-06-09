"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LETTERS } from "@/components/sandbox/acronym/letters";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Variante B — Full Curtain.
 * Linguetta a sinistra; click → tendina a tutto schermo da sinistra,
 * lettere giganti in righe editoriali.
 */
export default function AcronymB() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-[160vh] overflow-hidden bg-bg">
      <div className="shell py-32">
        <span className="overline text-muted">Anteprima — contenuto pagina dietro</span>
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-light leading-tight text-ink/30 md:text-6xl">
          Il resto della home scorre qui. La linguetta resta ancorata a sinistra.
        </h2>
      </div>

      <button
        onClick={() => setOpen(true)}
        aria-label="Cosa significa G.I.M.S."
        className="group fixed left-0 top-1/2 z-40 flex -translate-y-1/2 items-center gap-3 rounded-r-md border border-l-0 border-ink bg-bg py-5 pl-3 pr-2.5 text-ink shadow-md transition-colors hover:bg-ink hover:text-bg"
      >
        <span
          className="font-body text-[0.7rem] uppercase tracking-[0.28em]"
          style={{ writingMode: "vertical-rl" }}
        >
          Cosa significa G.I.M.S.
        </span>
        <span className="text-accent transition-transform duration-500 ease-soft group-hover:translate-x-0.5" aria-hidden>
          →
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col justify-center bg-ink px-6 text-bg md:px-16"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            exit={{ clipPath: "inset(0 100% 0 0)" }}
            transition={{ duration: 0.7, ease }}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Chiudi"
              className="absolute right-6 top-6 font-body text-sm uppercase tracking-[0.18em] text-bg/60 transition-colors hover:text-bg md:right-12 md:top-10"
            >
              Chiudi ✕
            </button>

            <span className="overline text-accent">Il nome — G.I.M.S.</span>

            <div className="mt-8 border-t border-bg/15">
              {LETTERS.map((item, i) => (
                <motion.div
                  key={item.l}
                  className="group flex flex-col gap-1 border-b border-bg/15 py-5 md:grid md:grid-cols-12 md:items-center md:gap-6 md:py-6"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.35 + i * 0.1 }}
                >
                  <div className="flex items-baseline gap-5 md:contents">
                    <span className="font-display text-6xl font-light leading-none text-accent md:col-span-2 md:text-8xl">
                      {item.l}
                    </span>
                    <h3 className="font-display text-3xl font-light tracking-tight md:col-span-4 md:text-5xl">
                      {item.word}
                    </h3>
                  </div>
                  <p className="font-body text-sm leading-relaxed text-bg/70 md:col-span-6 md:text-right md:text-base">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="mt-10 max-w-md font-body text-bg/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Quattro mestieri, un solo artigiano: tutto ciò che serve per la tua casa.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
