"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LETTERS } from "@/components/sandbox/acronym/letters";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Variante C — Expanding Panel.
 * La linguetta cresce in un pannello chiaro ancorato a sinistra;
 * le lettere appaiono a cascata. Più leggera, senza coprire la pagina.
 */
export default function AcronymC() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-[160vh] overflow-hidden bg-bg">
      <div className="shell py-32">
        <span className="overline text-muted">Anteprima — contenuto pagina dietro</span>
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-light leading-tight text-ink/30 md:text-6xl">
          Il resto della home scorre qui. La linguetta resta ancorata a sinistra.
        </h2>
      </div>

      {/* backdrop leggero quando aperto */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-30 bg-ink/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className="fixed left-0 top-1/2 z-40 -translate-y-1/2">
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.button
              key="tab"
              onClick={() => setOpen(true)}
              aria-label="Cosa significa G.I.M.S."
              className="group flex items-center gap-3 rounded-r-md bg-ink py-5 pl-3 pr-2.5 text-bg shadow-lg transition-colors hover:bg-accent"
              initial={{ x: -8, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              transition={{ duration: 0.35, ease }}
            >
              <span className="font-body text-[0.7rem] uppercase tracking-[0.28em]" style={{ writingMode: "vertical-rl" }}>
                Cosa significa G.I.M.S.
              </span>
              <span className="text-accent group-hover:text-bg" aria-hidden>→</span>
            </motion.button>
          ) : (
            <motion.div
              key="panel"
              className="w-[88vw] max-w-[420px] overflow-hidden rounded-r-lg border border-l-0 border-line bg-bg shadow-2xl"
              initial={{ width: 56, opacity: 0 }}
              animate={{ width: "min(88vw, 420px)", opacity: 1 }}
              exit={{ width: 56, opacity: 0 }}
              transition={{ duration: 0.55, ease }}
            >
              <div className="flex items-center justify-between border-b border-line px-7 py-5">
                <div>
                  <span className="overline text-accent">Il nome</span>
                  <h2 className="mt-1 font-display text-3xl font-light leading-none text-ink">G.I.M.S.</h2>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Chiudi"
                  className="font-body text-sm uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
                >
                  ✕
                </button>
              </div>

              <div className="px-7 py-2">
                {LETTERS.map((item, i) => (
                  <motion.div
                    key={item.l}
                    className="flex items-baseline gap-4 border-b border-line py-4 last:border-b-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, ease, delay: 0.3 + i * 0.09 }}
                  >
                    <span className="w-9 shrink-0 font-display text-4xl font-light leading-none text-accent">{item.l}</span>
                    <div>
                      <h3 className="font-display text-xl font-light tracking-tight text-ink">{item.word}</h3>
                      <p className="mt-1 font-body text-[0.82rem] leading-relaxed text-muted">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="border-t border-line px-7 py-5 font-body text-[0.82rem] text-muted">
                Quattro mestieri, un solo artigiano.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
