"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { SERVICES, type Service } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

// Variante B — Sticky Stacking Cards (parallax + dim/scale).
export default function ServicesB() {
  return (
    <section className="bg-bg shell py-24 md:py-32">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <span className="overline text-accent">01 — Cosa faccio</span>
          <h2 className="mt-5 font-display text-4xl font-light leading-tight tracking-tight text-ink md:text-6xl">
            I Nostri Servizi
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-sm font-body text-muted">
            Qualità e precisione al centro di ogni progetto.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 md:mt-20">
        {SERVICES.map((s, i) => (
          <Card key={s.n} service={s} index={i} total={SERVICES.length} />
        ))}
      </div>
    </section>
  );
}

function Card({ service, index, total }: { service: Service; index: number; total: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, index === total - 1 ? 1 : 0.94]);
  const brightness = useTransform(scrollYProgress, [0.5, 1], [1, index === total - 1 ? 1 : 0.7]);
  const filter = useTransform(brightness, (b) => `brightness(${b})`);

  return (
    <div ref={ref} className="static md:sticky" style={{ top: 96 }}>
      <motion.article
        style={reduce ? undefined : { scale, filter }}
        className="relative mb-5 flex w-full origin-top flex-col overflow-hidden rounded-2xl bg-surface md:mb-0 md:h-[78vh] md:max-h-[760px] md:min-h-[460px]"
      >
        <div className="flex shrink-0 flex-col gap-5 p-8 sm:p-10 md:flex-row md:items-end md:justify-between md:gap-12 md:p-14">
          <h3 className="font-display text-4xl font-light leading-[1.05] tracking-tight text-ink md:text-6xl">
            {service.title}
          </h3>
          <div className="md:max-w-lg">
            <p className="font-body text-base leading-relaxed text-ink md:text-lg">{service.desc}</p>
            <a
              href="#contatti"
              className="group mt-6 inline-flex w-fit items-center gap-2 font-body text-[0.74rem] uppercase tracking-[0.18em] text-ink"
            >
              <span className="link-underline">Richiedi un preventivo</span>
              <span className="transition-transform duration-500 ease-soft group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10] md:aspect-auto md:flex-1">
          <motion.div className="absolute inset-0" style={reduce ? undefined : { y, scale: 1.12 }}>
            <Image src={`/images/${service.img}.jpg`} alt={service.title} fill sizes="100vw" className="object-cover" />
          </motion.div>
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/55 to-transparent" />
          <span className="absolute left-8 top-7 font-display text-6xl font-light leading-none text-bg md:left-12 md:top-9 md:text-8xl">
            {service.n}
          </span>
        </div>
      </motion.article>
    </div>
  );
}
