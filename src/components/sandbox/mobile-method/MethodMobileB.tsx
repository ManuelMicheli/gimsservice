"use client";

import { motion } from "framer-motion";
import { METHOD } from "@/lib/site";
import Button from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

// B · Numbered Cards — ogni step è una card su ink con badge numero accent, titolo, desc.
export default function MethodMobileB() {
  return (
    <section className="bg-ink px-5 py-16 text-bg">
      <span className="overline text-bg/50">04 — Come lavoro</span>
      <h2 className="mt-4 font-display text-[2.4rem] font-light leading-tight tracking-tight text-bg">
        Il Metodo GIMS
      </h2>

      <div className="mt-10 flex flex-col gap-4">
        {METHOD.map((s, i) => (
          <motion.div
            key={s.n}
            className="rounded-xl border border-white/12 bg-white/[0.03] p-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-6% 0px" }}
            transition={{ duration: 0.6, ease, delay: i * 0.05 }}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent font-display text-lg font-light text-accent">
              {s.n}
            </span>
            <h3 className="mt-4 font-display text-[1.55rem] font-light leading-tight tracking-tight text-bg">
              {s.title}
            </h3>
            <p className="mt-2 font-body text-[0.82rem] leading-relaxed text-bg/60">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button href="#contatti" variant="solid" className="w-full justify-center bg-bg text-ink hover:bg-accent hover:text-bg">
          Richiedi il tuo preventivo gratuito
        </Button>
      </div>
    </section>
  );
}
