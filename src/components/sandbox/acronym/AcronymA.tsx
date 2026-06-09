"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LETTERS } from "@/components/sandbox/acronym/letters";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Variante A — Slide Drawer.
 * Linguetta verticale fissa a sinistra; click → pannello scorre da sinistra
 * con l'acronimo, backdrop che oscura la pagina.
 */
export default function AcronymA() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-[160vh] overflow-hidden bg-bg">
      {/* finta pagina dietro, solo per contesto sandbox */}
      <div className="shell py-32">
        <span className="overline text-muted">Anteprima — contenuto pagina dietro</span>
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-light leading-tight text-ink/30 md:text-6xl">
          Il resto della home scorre qui. La linguetta resta ancorata a sinistra.
        </h2>
      </div>

      {/* Linguetta */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Cosa significa G.I.M.S."
        className="group fixed left-0 top-1/2 z-40 flex -translate-y-1/2 items-center gap-3 rounded-r-md bg-ink py-5 pl-3 pr-2.5 text-bg shadow-lg transition-colors hover:bg-accent"
      >
        <span
          className="font-body text-[0.7rem] uppercase tracking-[0.28em]"
          style={{ writingMode: "vertical-rl" }}
        >
          Cosa significa G.I.M.S.
        </span>
        <span className="text-accent transition-transform duration-500 ease-soft group-hover:translate-x-0.5 group-hover:text-bg" aria-hidden>
          →
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-ink/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed left-0 top-0 z-50 flex h-full w-[88vw] max-w-[460px] flex-col bg-ink px-8 py-10 text-bg md:px-10"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.6, ease }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="overline text-accent">Il nome</span>
                  <h2 className="mt-4 font-display text-4xl font-light leading-none">G.I.M.S.</h2>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Chiudi"
                  className="font-body text-sm uppercase tracking-[0.18em] text-bg/60 transition-colors hover:text-bg"
                >
                  Chiudi ✕
                </button>
              </div>

              <div className="mt-10 flex flex-col">
                {LETTERS.map((item, i) => (
                  <motion.div
                    key={item.l}
                    className="border-t border-bg/15 py-5 last:border-b"
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease, delay: 0.25 + i * 0.08 }}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-5xl font-light leading-none text-accent">{item.l}</span>
                      <h3 className="font-display text-2xl font-light tracking-tight">{item.word}</h3>
                    </div>
                    <p className="mt-2 font-body text-sm leading-relaxed text-bg/70">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <p className="mt-auto pt-8 font-body text-sm text-bg/60">
                Quattro mestieri, un solo artigiano: tutto ciò che serve per la tua casa.
              </p>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
