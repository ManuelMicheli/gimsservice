"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

/** Preloader iniziale con zoom fluido che transita nell'hero. Rispetta reduced-motion. */
const SEEN_KEY = "gims-preloader-seen";

export default function Preloader() {
  const reduce = useReducedMotion();
  // Parte già "fatto" finché non sappiamo se è la prima visita della sessione:
  // evita un flash del preloader sui reload successivi.
  const [done, setDone] = useState(true);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (reduce) return;
    // Mostra il preloader solo la prima volta che si apre il sito in questa
    // sessione del browser; i reload successivi lo saltano.
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {
      // sessionStorage non disponibile: trattalo come prima visita.
    }
    if (seen) return;

    setDone(false);
    setArmed(true);
    document.documentElement.style.overflow = "hidden";
    const t = setTimeout(() => {
      setDone(true);
      document.documentElement.style.overflow = "";
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        // ignora
      }
    }, 1700);
    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = "";
    };
  }, [reduce]);

  if (reduce || !armed) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="flex flex-col items-center gap-3 text-bg"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.35, opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-display text-3xl tracking-tight md:text-5xl">
              {SITE.brand}
            </span>
            <motion.span
              className="font-body text-[0.62rem] uppercase tracking-[0.3em] text-bg/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Artigiano edile · Bareggio (MI)
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
