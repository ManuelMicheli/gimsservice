"use client";

import { useRef, useState } from "react";
import Image from "next/image";

/**
 * Isola interattiva (client) per la sezione Servizi: avvolge la lista
 * (renderizzata dal server, NON re-idratata) e gestisce solo l'immagine
 * flottante desktop che segue il cursore. Hydration minima.
 */
export default function ServicesHover({
  images,
  children,
}: {
  images: string[];
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  const floatRef = useRef<HTMLDivElement>(null);

  return (
    <div
      onMouseMove={(e) => {
        const el = floatRef.current;
        if (el) el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }}
      onMouseOver={(e) => {
        const a = (e.target as HTMLElement).closest("[data-idx]");
        if (a) setHovered(Number(a.getAttribute("data-idx")));
      }}
      onMouseLeave={() => setHovered(null)}
    >
      {children}

      {/* Immagine flottante (desktop, pointer fine) */}
      <div
        ref={floatRef}
        className={`pointer-events-none fixed left-0 top-0 z-50 hidden h-64 w-80 overflow-hidden rounded-sm transition-[opacity,scale] duration-300 ease-soft md:block ${
          hovered !== null ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        {images.map((img, i) => (
          <Image
            key={img}
            src={`/images/${img}.jpg`}
            alt=""
            fill
            sizes="320px"
            className={`object-cover transition-opacity duration-300 ${hovered === i ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
    </div>
  );
}
