"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PROJECTS, ROTATING_WORDS } from "@/lib/site";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";
import RotatingWord from "@/components/ui/RotatingWord";

const ease = [0.16, 1, 0.3, 1] as const;

// Variante B — Alternating Rows. Righe grandi, immagine alternata sx/dx.
export default function WorkB() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-bg shell py-24 md:py-32">
      <Reveal>
        <span className="overline text-accent">02 — Lavori in evidenza</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-6 max-w-4xl font-display text-4xl font-light leading-[1.08] tracking-tight text-ink md:text-6xl">
          Realizzo <RotatingWord words={ROTATING_WORDS} /> che durano nel tempo.
        </h2>
      </Reveal>

      <div className="mt-16 flex flex-col gap-16 md:mt-24 md:gap-28">
        {PROJECTS.map((p, i) => {
          const flip = i % 2 === 1;
          return (
            <motion.a
              key={p.n}
              href="#contatti"
              className="group grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-12"
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.8, ease }}
            >
              <div className={`relative aspect-[16/10] overflow-hidden rounded-sm bg-line md:col-span-8 ${flip ? "md:order-2 md:col-start-5" : ""}`}>
                <div className="absolute inset-0 transition-transform duration-[1s] ease-soft group-hover:-translate-y-full">
                  <SmartImage imgKey={p.img} alt={`${p.title} — vista principale`} label={p.title} sizes="(max-width:768px) 100vw, 66vw" />
                </div>
                <div className="absolute inset-0 translate-y-full transition-transform duration-[1s] ease-soft group-hover:translate-y-0">
                  <SmartImage imgKey={p.imgAlt} alt={`${p.title} — vista alternata`} label={`${p.title} · dettaglio`} sizes="(max-width:768px) 100vw, 66vw" />
                </div>
              </div>
              <div className={`md:col-span-4 ${flip ? "md:order-1 md:row-start-1" : ""}`}>
                <span className="font-display text-6xl font-light leading-none text-accent md:text-8xl">{p.n}</span>
                <h3 className="mt-5 font-display text-3xl font-light tracking-tight text-ink md:text-4xl">{p.title}</h3>
                <span className="mt-5 inline-flex items-center gap-2 font-body text-[0.74rem] uppercase tracking-[0.18em] text-ink">
                  <span className="link-underline">Vedi il lavoro</span>
                  <span className="transition-transform duration-500 ease-soft group-hover:translate-x-1">→</span>
                </span>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
