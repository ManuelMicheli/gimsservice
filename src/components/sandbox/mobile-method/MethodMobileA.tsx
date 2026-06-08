"use client";

import { motion } from "framer-motion";
import { METHOD } from "@/lib/site";
import Button from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

// A · Ghost Rows — numero ghost gigante clippato a dx, titolo + desc (mobile-tuned dell'attuale).
export default function MethodMobileA() {
  return (
    <section className="overflow-hidden bg-ink px-5 py-16 text-bg">
      <span className="overline text-bg/50">04 — Come lavoro</span>
      <h2 className="mt-4 font-display text-[2.4rem] font-light leading-tight tracking-tight text-bg">
        Il Metodo GIMS
      </h2>

      <ol className="mt-10 border-t border-white/10">
        {METHOD.map((s, i) => (
          <motion.li
            key={s.n}
            className="relative flex items-center overflow-hidden border-b border-white/10 py-9"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.6, ease, delay: i * 0.05 }}
          >
            <span className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 select-none font-display text-[7rem] font-light leading-none text-white/[0.07]">
              {s.n}
            </span>
            <div className="relative z-10 max-w-[16rem]">
              <h3 className="font-display text-[1.6rem] font-light leading-tight tracking-tight text-bg">
                {s.title}
              </h3>
              <p className="mt-2 font-body text-[0.82rem] leading-relaxed text-bg/60">{s.desc}</p>
            </div>
          </motion.li>
        ))}
      </ol>

      <div className="mt-12 flex justify-center">
        <Button href="#contatti" variant="solid" className="w-full justify-center bg-bg text-ink hover:bg-accent hover:text-bg">
          Richiedi il tuo preventivo gratuito
        </Button>
      </div>
    </section>
  );
}
