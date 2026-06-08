"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

type Pair = {
  before: string;
  after: string;
  title: string;
  place: string;
};

// Coppie prima/dopo — stesso ambiente, foto reali dei cantieri G.I.M.S. Service.
const PAIRS: Pair[] = [
  {
    before: "/images/g-bagno-before.jpg",
    after: "/images/g-bagno-2.jpg",
    title: "Ristrutturazione bagno — effetto marmo",
    place: "Bareggio (MI)",
  },
];

function Slider({ pair }: { pair: Pair }) {
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [pos, setPos] = useState(50);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(100, Math.max(0, p)));
  }, []);

  return (
    <figure>
      <div
        ref={ref}
        role="slider"
        aria-label={`Trascina per confrontare prima e dopo — ${pair.title}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        tabIndex={0}
        className="group relative aspect-[4/5] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-sm border border-line bg-line [&_img]:pointer-events-none [&_img]:select-none"
        onDragStart={(e) => e.preventDefault()}
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (dragging.current) setFromClientX(e.clientX);
        }}
        onPointerUp={() => {
          dragging.current = false;
        }}
        onPointerCancel={() => {
          dragging.current = false;
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
          if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
        }}
      >
        {/* DOPO — strato pieno sotto */}
        <Image
          src={pair.after}
          alt={`${pair.title} — dopo l'intervento`}
          fill
          draggable={false}
          sizes="(max-width:768px) 100vw, 50vw"
          className="object-cover"
        />
        <span className="absolute right-4 top-4 z-10 rounded-full bg-ink/70 px-3 py-1 font-body text-[0.6rem] uppercase tracking-[0.18em] text-bg backdrop-blur-sm">
          Dopo
        </span>

        {/* PRIMA — strato pieno ritagliato col clip-path (niente deformazione) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={pair.before}
            alt={`${pair.title} — prima dell'intervento`}
            fill
            draggable={false}
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover"
          />
          <span className="absolute left-4 top-4 z-10 rounded-full bg-bg/80 px-3 py-1 font-body text-[0.6rem] uppercase tracking-[0.18em] text-ink backdrop-blur-sm">
            Prima
          </span>
        </div>

        {/* Maniglia + linea centrale */}
        <div
          className="pointer-events-none absolute inset-y-0 z-20"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute inset-y-0 -ml-[1px] w-0.5 bg-bg/90 shadow-[0_0_12px_rgba(0,0,0,0.4)]" />
          <div className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-bg/70 bg-bg/95 text-ink shadow-lg transition-transform duration-300 group-hover:scale-105">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 6 4 12l5 6M15 6l5 6-5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <figcaption className="mt-4 flex items-baseline justify-between gap-4">
        <span className="font-display text-lg font-light tracking-tight text-ink">
          {pair.title}
        </span>
        <span className="font-body text-[0.66rem] uppercase tracking-[0.18em] text-muted">
          {pair.place}
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * Prima / Dopo — slider di confronto trascinabile.
 * Linea centrale spostabile (pointer + touch + frecce) che rivela in live
 * la trasformazione del cantiere.
 */
export default function BeforeAfter() {
  return (
    <section id="prima-dopo" className="shell py-20 md:py-32">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <span className="overline text-accent">Trasformazioni</span>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-light leading-[1.08] tracking-tight text-ink md:text-6xl">
            Prima e <span className="italic">dopo</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-sm font-body text-muted">
            Trascina la linea per vedere il cambiamento. Stessi ambienti, prima e dopo
            l&apos;intervento — risultati reali, consegnati chiavi in mano.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-12 max-w-xl md:mt-16">
        {PAIRS.map((p) => (
          <Reveal key={p.before}>
            <Slider pair={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
