"use client";

import { useEffect, useState } from "react";

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
 * con il significato di G.I.M.S. Transizioni CSS (niente framer-motion):
 * tutti gli elementi restano montati e cambiano classe.
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
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={`fixed inset-0 z-[55] bg-ink/30 transition-opacity duration-300 ${
          open ? "opacity-100 backdrop-blur-[2px]" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Linguetta (chiusa) — z sotto header/menu così viene coperta dal menu mobile.
          Mobile: pill orizzontale centrata in alto, agganciata sotto la nav.
          Desktop: linguetta verticale al bordo sinistro. */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Cosa significa G.I.M.S.?"
        aria-expanded={open}
        tabIndex={open ? -1 : 0}
        className={`group fixed left-1/2 top-16 z-30 -translate-x-1/2 items-center gap-2 rounded-b-md border border-t-0 border-ink/20 bg-bg px-3.5 py-2 text-ink shadow-lg transition-[opacity,transform] duration-500 ease-soft hover:bg-ink hover:text-bg md:left-0 md:top-1/2 md:translate-x-0 md:-translate-y-1/2 md:gap-3 md:rounded-b-none md:rounded-r-md md:border-l-0 md:border-t md:px-0 md:py-5 md:pl-3 md:pr-2.5 ${
          pastHero ? "flex" : "hidden"
        } md:flex ${
          open
            ? "pointer-events-none -translate-y-16 opacity-0 md:-translate-x-12 md:-translate-y-1/2"
            : "translate-y-0 opacity-100 md:translate-x-0 md:-translate-y-1/2"
        }`}
      >
        <span className="font-body text-[0.62rem] uppercase tracking-[0.18em] md:text-[0.7rem] md:tracking-[0.28em] md:[writing-mode:vertical-rl]">
          Cosa significa G.I.M.S.
        </span>
        <span className="text-accent transition-colors group-hover:text-bg md:text-base" aria-hidden>
          →
        </span>
      </button>

      {/* Pannello (aperto) */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Significato di G.I.M.S."
        className={`fixed left-0 top-1/2 z-[60] flex max-h-[82vh] w-[80vw] max-w-[420px] -translate-y-1/2 flex-col overflow-y-auto rounded-r-lg border border-l-0 border-line bg-bg shadow-2xl transition-[opacity,transform] duration-500 ease-soft md:max-h-[88vh] md:w-[90vw] ${
          open ? "translate-x-0 opacity-100" : "pointer-events-none -translate-x-full opacity-0"
        }`}
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
          {LETTERS.map((item) => (
            <div
              key={item.l}
              className="flex items-baseline gap-4 border-b border-line py-4 last:border-b-0"
            >
              <span className="w-9 shrink-0 font-display text-4xl font-light leading-none text-accent">
                {item.l}
              </span>
              <div>
                <h3 className="font-display text-xl font-light tracking-tight text-ink">{item.word}</h3>
                <p className="mt-1 font-body text-[0.82rem] leading-relaxed text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="border-t border-line px-6 py-5 font-body text-[0.82rem] text-muted md:px-7">
          Quattro mestieri, un solo artigiano: tutto ciò che serve per la tua casa.
        </p>
      </aside>
    </>
  );
}
