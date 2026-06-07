"use client";

import { motion, useReducedMotion } from "framer-motion";
import { METHOD } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

// Ghost Number — esecuzione 3: griglia 2x2, numero ghost centrato dietro, testo centrato.
export default function MethodC() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-ink py-24 text-bg md:py-32">
      <div className="shell">
        <Reveal className="text-center">
          <span className="overline text-bg/50">04 — Come lavoro</span>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-light leading-tight tracking-tight text-bg md:text-6xl">
            Il Metodo GIMS
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 md:mt-20">
          {METHOD.map((s, i) => (
            <motion.div
              key={s.n}
              className="relative flex min-h-[18rem] flex-col items-center justify-center overflow-hidden bg-ink px-8 py-14 text-center md:min-h-[22rem]"
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.7, ease, delay: (i % 2) * 0.08 }}
            >
              <span className="pointer-events-none absolute inset-0 flex select-none items-center justify-center font-display text-[14rem] font-light leading-none text-white/[0.05] md:text-[18rem]">
                {s.n}
              </span>
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-light tracking-tight text-bg md:text-3xl">
                  {s.title}
                </h3>
                <p className="mx-auto mt-4 max-w-xs font-body text-sm leading-relaxed text-bg/60">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex justify-center">
            <Button href="#contatti" variant="solid" className="bg-bg text-ink hover:bg-accent hover:text-bg">
              Richiedi il tuo preventivo gratuito
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
