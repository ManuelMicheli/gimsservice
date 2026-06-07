"use client";

import { PROJECTS, ROTATING_WORDS } from "@/lib/site";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";
import RotatingWord from "@/components/ui/RotatingWord";

// Variante C — Horizontal Scroll. Strip scroll-snap con card grandi.
export default function WorkC() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <span className="overline text-accent">02 — Lavori in evidenza</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-4xl font-display text-4xl font-light leading-[1.08] tracking-tight text-ink md:text-6xl">
            Realizzo <RotatingWord words={ROTATING_WORDS} /> che durano nel tempo.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 font-body text-sm uppercase tracking-[0.16em] text-muted">
            Scorri lateralmente →
          </p>
        </Reveal>
      </div>

      {/* Strip orizzontale */}
      <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6 sm:px-8 md:mt-16 md:px-12 lg:px-16 xl:px-20 2xl:px-28 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {PROJECTS.map((p) => (
          <a
            key={p.n}
            href="#contatti"
            className="group block w-[78vw] shrink-0 snap-start sm:w-[52vw] lg:w-[34vw]"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-line">
              <div className="absolute inset-0 transition-transform duration-[900ms] ease-soft group-hover:-translate-y-full">
                <SmartImage imgKey={p.img} alt={`${p.title} — vista principale`} label={p.title} sizes="50vw" />
              </div>
              <div className="absolute inset-0 translate-y-full transition-transform duration-[900ms] ease-soft group-hover:translate-y-0">
                <SmartImage imgKey={p.imgAlt} alt={`${p.title} — vista alternata`} label={`${p.title} · dettaglio`} sizes="50vw" />
              </div>
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <h3 className="font-display text-xl text-ink">
                <span className="mr-3 font-body text-xs text-muted">{p.n}</span>
                {p.title}
              </h3>
              <span className="font-body text-[0.72rem] uppercase tracking-[0.14em] text-muted transition-colors group-hover:text-accent">
                Vedi →
              </span>
            </div>
          </a>
        ))}

        {/* CTA finale */}
        <a
          href="#contatti"
          className="flex w-[78vw] shrink-0 snap-start flex-col justify-between rounded-sm border border-ink bg-ink p-7 text-bg transition-colors hover:bg-accent sm:w-[52vw] lg:w-[34vw]"
        >
          <span className="overline text-bg/60">Galleria completa</span>
          <span className="font-display text-3xl font-light leading-tight">Vai alla galleria →</span>
        </a>
      </div>
    </section>
  );
}
