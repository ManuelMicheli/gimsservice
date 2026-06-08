"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { SERVICES } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * I Nostri Servizi — Index List editoriale.
 * 8 righe type-led; in hover (desktop) un'immagine flottante segue il cursore.
 * Su mobile resta una lista pulita, senza immagine.
 */
export default function Services() {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState<number | null>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 28, mass: 0.4 });
  const y = useSpring(my, { stiffness: 220, damping: 28, mass: 0.4 });

  return (
    <section
      id="servizi"
      className="relative shell py-20 md:py-32"
      onMouseMove={(e) => {
        mx.set(e.clientX);
        my.set(e.clientY);
      }}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <span className="overline text-accent">01 — Cosa faccio</span>
          <h2 className="mt-5 font-display text-4xl font-light leading-tight tracking-tight text-ink md:text-6xl 2xl:text-7xl">
            I Nostri Servizi
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-sm font-body text-muted">
            Una gamma completa di servizi, dove qualità e precisione sono al centro di ogni progetto.
          </p>
        </Reveal>
      </div>

      {/* ===== MOBILE — Thumb List ===== */}
      <div className="mt-12 border-t border-line md:hidden">
        {SERVICES.map((s, i) => (
          <motion.a
            key={s.n}
            href={`/servizi/${s.slug}`}
            className="flex items-center gap-4 border-b border-line py-4"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-6% 0px" }}
            transition={{ duration: 0.5, ease, delay: i * 0.03 }}
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md">
              <Image src={`/images/${s.img}.jpg`} alt={`${s.title} — G.I.M.S. Service, Bareggio`} fill sizes="80px" className="object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="font-body text-[0.58rem] uppercase tracking-[0.2em] text-accent">
                {s.n}
              </span>
              <h3 className="font-display text-[1.35rem] font-light leading-tight tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-1 font-body text-[0.74rem] leading-snug text-muted">{s.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* ===== DESKTOP — Index List (immagine flottante in hover) ===== */}
      <div className="mt-20 hidden border-t border-line md:block">
        {SERVICES.map((s, i) => (
          <motion.a
            key={s.n}
            href={`/servizi/${s.slug}`}
            className="group grid grid-cols-12 items-center gap-3 border-b border-line py-7 transition-colors duration-500"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.6, ease, delay: i * 0.04 }}
          >
            <span className="col-span-1 font-body text-[0.7rem] uppercase tracking-[0.2em] text-muted">
              {s.n}
            </span>
            <h3 className="col-span-5 font-display text-3xl font-light tracking-tight text-ink transition-all duration-500 ease-soft group-hover:translate-x-3 group-hover:text-accent md:text-5xl">
              {s.title}
            </h3>
            <p className="col-span-5 font-body text-sm leading-relaxed text-muted md:text-right">
              {s.desc}
            </p>
            <span className="col-span-1 text-right font-body text-lg text-ink transition-all duration-500 group-hover:text-accent">
              →
            </span>
          </motion.a>
        ))}
      </div>

      {/* Immagine flottante (desktop, pointer fine) */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-40 hidden h-64 w-80 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-sm md:block"
        style={{ x, y }}
        animate={{ opacity: hovered !== null ? 1 : 0, scale: hovered !== null ? 1 : 0.9 }}
        transition={{ duration: 0.4, ease }}
      >
        {SERVICES.map((s, i) => (
          <Image
            key={s.n}
            src={`/images/${s.img}.jpg`}
            alt=""
            fill
            sizes="320px"
            className={`object-cover transition-opacity duration-300 ${hovered === i ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </motion.div>
    </section>
  );
}
