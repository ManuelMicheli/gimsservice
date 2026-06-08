"use client";

import { motion, useReducedMotion } from "framer-motion";
import { METHOD } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Il Metodo GIMS — Ghost Rows.
 * Righe full-width con numero ghost gigante clippato al bordo destro.
 */
export default function Method() {
  const reduce = useReducedMotion();

  return (
    <section id="metodo" className="overflow-hidden bg-ink py-20 text-bg md:py-36">
      <div className="shell">
        <Reveal>
          <span className="overline text-bg/50">04 — Come lavoro</span>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-light leading-tight tracking-tight text-bg md:text-6xl 2xl:text-7xl">
            Il Metodo GIMS
          </h2>
        </Reveal>

        <ol className="mt-16 border-t border-white/10 md:mt-20">
          {METHOD.map((s, i) => (
            <motion.li
              key={s.n}
              className="group relative flex items-center overflow-hidden border-b border-white/10 py-10 md:py-14"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.05 }}
            >
              {/* Numero ghost gigante, clippato a destra */}
              <span className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 select-none font-display text-[7rem] font-light leading-none text-white/[0.07] transition-colors duration-700 group-hover:text-accent/20 md:-right-6 md:text-[16rem]">
                {s.n}
              </span>
              <div className="relative z-10 max-w-[16rem] md:max-w-2xl">
                <h3 className="font-display text-[1.6rem] font-light leading-tight tracking-tight text-bg md:text-5xl">
                  {s.title}
                </h3>
                <p className="mt-3 font-body text-[0.82rem] leading-relaxed text-bg/60 md:mt-4 md:text-base">
                  {s.desc}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <div className="mt-16 flex justify-center">
            <Button href="#contatti" variant="solid" className="w-full justify-center bg-bg text-ink hover:bg-accent hover:text-bg md:w-auto">
              Richiedi il tuo preventivo gratuito
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
