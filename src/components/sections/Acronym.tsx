"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

// G.I.M.S. — "Giardino" è il cognome dell'artigiano José Giardino.
const LETTERS = [
  { l: "G", word: "Giardino", desc: "Il cognome di José Giardino, l'artigiano dietro G.I.M.S." },
  { l: "I", word: "Imbiancatura", desc: "Tinteggiature per interni ed esterni." },
  { l: "M", word: "Muratura", desc: "Opere edili e ristrutturazioni." },
  { l: "S", word: "Sanitari", desc: "Impianti e bagni chiavi in mano." },
];

/**
 * Acronym — Expanding Panel.
 * Linguetta fissa al bordo sinistro; al click si espande in un pannello chiaro
 * con il significato di G.I.M.S. Niente più sezione nel flusso.
 */
export default function Acronym() {
  const [open, setOpen] = useState(false);
  // Su mobile la linguetta resta nascosta finché l'hero è in vista (evita sovrapposizione).
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Blocco scroll del body + chiusura con Esc quando il pannello è aperto.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[55] bg-ink/30 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Linguetta (chiusa) — z sotto header/menu così viene coperta dal menu mobile */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="tab"
            onClick={() => setOpen(true)}
            aria-label="Cosa significa G.I.M.S.?"
            aria-expanded={false}
            className={`group fixed left-0 top-1/2 z-30 items-center gap-0 rounded-r-md border border-l-0 border-ink/15 bg-bg py-3 pl-0.5 pr-1 text-ink shadow-md transition-colors hover:bg-ink hover:text-bg md:flex md:gap-3 md:py-5 md:pl-3 md:pr-2.5 ${
              pastHero ? "flex" : "hidden"
            }`}
            initial={{ x: -40, y: "-50%", opacity: 0 }}
            animate={{ x: 0, y: "-50%", opacity: 1 }}
            exit={{ x: -40, y: "-50%", opacity: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            <span
              className="font-body text-[0.52rem] uppercase tracking-[0.16em] md:text-[0.7rem] md:tracking-[0.28em]"
              style={{ writingMode: "vertical-rl" }}
            >
              Cosa significa G.I.M.S.
            </span>
            <span className="hidden text-accent transition-colors group-hover:text-bg md:block md:text-base" aria-hidden>
              →
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Pannello (aperto) */}
      <AnimatePresence>
        {open && (
          <motion.aside
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label="Significato di G.I.M.S."
            className="fixed left-0 top-1/2 z-[60] flex max-h-[88vh] w-[90vw] max-w-[420px] flex-col overflow-y-auto rounded-r-lg border border-l-0 border-line bg-bg shadow-2xl"
            initial={{ x: "-100%", y: "-50%", opacity: 0.4 }}
            animate={{ x: 0, y: "-50%", opacity: 1 }}
            exit={{ x: "-100%", y: "-50%", opacity: 0 }}
            transition={{ duration: 0.55, ease }}
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-5 md:px-7">
              <div>
                <span className="overline text-accent">Il nome</span>
                <h2 className="mt-1 font-display text-3xl font-light leading-none text-ink">G.I.M.S.</h2>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Chiudi"
                className="-mr-1 flex h-9 w-9 items-center justify-center rounded-full font-body text-base text-muted transition-colors hover:bg-ink/5 hover:text-ink"
              >
                ✕
              </button>
            </div>

            <div className="px-6 py-1 md:px-7">
              {LETTERS.map((item, i) => (
                <motion.div
                  key={item.l}
                  className="flex items-baseline gap-4 border-b border-line py-4 last:border-b-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, ease, delay: 0.25 + i * 0.08 }}
                >
                  <span className="w-9 shrink-0 font-display text-4xl font-light leading-none text-accent">
                    {item.l}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-light tracking-tight text-ink">{item.word}</h3>
                    <p className="mt-1 font-body text-[0.82rem] leading-relaxed text-muted">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="border-t border-line px-6 py-5 font-body text-[0.82rem] text-muted md:px-7">
              Quattro mestieri, un solo artigiano: tutto ciò che serve per la tua casa.
            </p>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
