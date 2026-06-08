"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

// B · Image Tiles — ogni servizio è una tile con foto, numero + titolo overlay. Ricco, visuale.
export default function ServicesMobileB() {
  return (
    <section className="bg-bg px-5 py-16">
      <span className="overline text-accent">01 — Cosa faccio</span>
      <h2 className="mt-4 font-display text-[2.4rem] font-light leading-tight tracking-tight text-ink">
        I Nostri Servizi
      </h2>
      <p className="mt-4 max-w-[18rem] font-body text-[0.84rem] leading-relaxed text-muted">
        Qualità e precisione al centro di ogni progetto.
      </p>

      <div className="mt-10 flex flex-col gap-4">
        {SERVICES.map((s, i) => (
          <motion.a
            key={s.n}
            href="#contatti"
            className="relative block aspect-[16/10] w-full overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-6% 0px" }}
            transition={{ duration: 0.6, ease, delay: i * 0.04 }}
          >
            <Image src={`/images/${s.img}.jpg`} alt="" fill sizes="360px" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <span className="absolute right-4 top-4 font-body text-[0.62rem] uppercase tracking-[0.2em] text-bg/70">
              {s.n}
            </span>
            <div className="absolute inset-x-4 bottom-4">
              <h3 className="font-display text-[1.8rem] font-light leading-none tracking-tight text-bg">
                {s.title}
              </h3>
              <p className="mt-1.5 max-w-[16rem] font-body text-[0.74rem] leading-snug text-bg/75">
                {s.desc}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
