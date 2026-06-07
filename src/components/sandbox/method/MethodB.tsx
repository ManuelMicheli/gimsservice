"use client";

import { motion, useReducedMotion } from "framer-motion";
import { METHOD } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

// Ghost Number — esecuzione 2: righe full-width, numero ghost gigante a destra (clippato al bordo).
export default function MethodB() {
  const reduce = useReducedMotion();

  return (
    <section className="overflow-hidden bg-ink py-24 text-bg md:py-32">
      <div className="shell">
        <Reveal>
          <span className="overline text-bg/50">04 — Come lavoro</span>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-light leading-tight tracking-tight text-bg md:text-6xl">
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
              <span className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 select-none font-display text-[10rem] font-light leading-none text-white/[0.06] transition-colors duration-700 group-hover:text-accent/20 md:text-[16rem]">
                {s.n}
              </span>
              <div className="relative z-10 max-w-2xl">
                <h3 className="font-display text-3xl font-light tracking-tight text-bg md:text-5xl">
                  {s.title}
                </h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-bg/60 md:text-base">
                  {s.desc}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <div className="mt-16 flex justify-center">
            <Button href="#contatti" variant="solid" className="bg-bg text-ink hover:bg-accent hover:text-bg">
              Richiedi il tuo preventivo gratuito
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
