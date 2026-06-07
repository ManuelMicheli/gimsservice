"use client";

import { useState, type ReactNode } from "react";

type Variant = { id: string; label: string; node: ReactNode };

// Barra fissa per scegliere la variante. Usata in tutte le pagine sandbox.
export default function Switcher({ variants }: { variants: Variant[] }) {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="fixed bottom-5 left-1/2 z-[100] flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/15 bg-black/80 p-1.5 backdrop-blur-md">
        {variants.map((v, i) => (
          <button
            key={v.id}
            onClick={() => setActive(i)}
            className={`rounded-full px-4 py-2 font-body text-[0.72rem] uppercase tracking-[0.16em] transition-colors duration-300 ${
              i === active ? "bg-white text-black" : "text-white/70 hover:text-white"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>
      <div key={active}>{variants[active].node}</div>
    </>
  );
}
