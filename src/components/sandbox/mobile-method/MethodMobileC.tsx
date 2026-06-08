"use client";

import { motion } from "framer-motion";
import { METHOD } from "@/lib/site";
import Button from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

// C · Timeline — linea verticale a sx con pallini numerati accent, step lungo la linea.
export default function MethodMobileC() {
  return (
    <section className="bg-ink px-5 py-16 text-bg">
      <span className="overline text-bg/50">04 — Come lavoro</span>
      <h2 className="mt-4 font-display text-[2.4rem] font-light leading-tight tracking-tight text-bg">
        Il Metodo GIMS
      </h2>

      <ol className="relative mt-12 pl-12">
        {/* linea verticale */}
        <span className="pointer-events-none absolute left-[15px] top-2 bottom-2 w-px bg-white/15" />
        {METHOD.map((s, i) => (
          <motion.li
            key={s.n}
            className="relative pb-12 last:pb-0"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-6% 0px" }}
            transition={{ duration: 0.6, ease, delay: i * 0.06 }}
          >
            <span className="absolute -left-12 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-accent bg-ink font-body text-[0.7rem] text-accent">
              {s.n}
            </span>
            <h3 className="font-display text-[1.55rem] font-light leading-tight tracking-tight text-bg">
              {s.title}
            </h3>
            <p className="mt-2 font-body text-[0.82rem] leading-relaxed text-bg/60">{s.desc}</p>
          </motion.li>
        ))}
      </ol>

      <div className="mt-6 flex justify-center">
        <Button href="#contatti" variant="solid" className="w-full justify-center bg-bg text-ink hover:bg-accent hover:text-bg">
          Richiedi il tuo preventivo gratuito
        </Button>
      </div>
    </section>
  );
}
