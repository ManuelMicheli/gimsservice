"use client";

import { useRef } from "react";

/**
 * Transizione di pagina (CSS puro, niente JS di animazione). Ogni navigazione
 * rimonta il template: le pagine — statiche e prefetchate — appaiono con un fade
 * veloce. Il PRIMO caricamento non fa fade (nessun impatto su LCP); il fade
 * scatta solo dalle navigazioni client successive. reduced-motion in globals.css.
 */
let hasNavigated = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const isFirstLoad = useRef(!hasNavigated);
  if (typeof window !== "undefined") hasNavigated = true;

  return <div className={isFirstLoad.current ? undefined : "page-fade"}>{children}</div>;
}
