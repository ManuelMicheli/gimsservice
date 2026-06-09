"use client";

import { useEffect, useState } from "react";

/** Parola che ruota (effetto White Maple "Realizzo [x] che durano nel tempo").
 *  L'animazione di entrata è CSS: cambiando `key` l'elemento si rimonta e la
 *  keyframe `rot-up` riparte. prefers-reduced-motion gestito in globals.css. */
export default function RotatingWord({
  words,
  interval = 2200,
}: {
  words: string[];
  interval?: number;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="relative inline-grid overflow-hidden align-baseline italic text-accent">
      <span key={words[i]} className="rot-up col-start-1 row-start-1 whitespace-nowrap">
        {words[i]}
      </span>
      {/* riserva larghezza alla parola più lunga per evitare il reflow */}
      <span className="invisible col-start-1 row-start-1 whitespace-nowrap" aria-hidden>
        {words.reduce((a, b) => (a.length >= b.length ? a : b), "")}
      </span>
    </span>
  );
}
