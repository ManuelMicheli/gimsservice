"use client";

import SmartImage from "@/components/ui/SmartImage";
import RotatingWord from "@/components/ui/RotatingWord";
import { ROTATING_WORDS } from "@/lib/site";
import { WORKS } from "@/components/sandbox/work/projects";

// C · Editorial Parallax — indice editoriale verticale: numero fuori-scala,
// immagine 4:5 con parallax interno (work-parallax) e reveal in clip-path
// (work-rise), riga meta su hairline. Allineamento alternato per ritmo.
// Tutto CSS scroll-driven, nessun JS, fedele nel frame e su mobile.
export default function WorkMobileC() {
  return (
    <section className="bg-bg px-5 pb-24 pt-16">
      <span className="overline text-accent">02 — Lavori in evidenza</span>
      <h2 className="mt-5 font-display text-[2.2rem] font-light leading-[1.08] tracking-tight text-ink">
        Realizzo <RotatingWord words={ROTATING_WORDS} /> che durano nel tempo.
      </h2>

      <div className="mt-14 flex flex-col gap-16">
        {WORKS.map((p, i) => {
          const right = i % 2 === 1;
          return (
            <a key={p.n} href="#contatti" className="block">
              {/* numero + meta, allineamento alternato */}
              <div className={`flex items-baseline gap-3 ${right ? "flex-row-reverse text-right" : ""}`}>
                <span className="font-display text-[3.4rem] font-light leading-none text-ink/12">
                  {p.n}
                </span>
                <div className={right ? "items-end" : ""}>
                  <span className="block font-body text-[0.6rem] uppercase tracking-[0.22em] text-accent">
                    {p.category}
                  </span>
                  <h3 className="mt-1 font-display text-[1.7rem] font-light leading-none tracking-tight text-ink">
                    {p.title}
                  </h3>
                </div>
              </div>

              {/* immagine con reveal clip + parallax */}
              <div className="work-rise relative mt-5 aspect-[4/5] overflow-hidden rounded-sm bg-line">
                <div className="absolute inset-0 work-parallax">
                  <SmartImage imgKey={p.img} alt={p.title} label={p.title} sizes="360px" />
                </div>
              </div>

              {/* riga meta su hairline */}
              <div className="mt-3 flex items-center justify-between border-t border-ink/70 pt-3">
                <span className="font-body text-[0.64rem] uppercase tracking-[0.2em] text-muted">
                  {p.place} · {p.year}
                </span>
                <span className="font-body text-[0.66rem] uppercase tracking-[0.18em] text-ink">
                  Vedi il lavoro →
                </span>
              </div>
            </a>
          );
        })}
      </div>

      <a
        href="#contatti"
        className="mt-16 flex items-center justify-between rounded-xl bg-ink p-6 text-bg transition-colors active:bg-accent"
      >
        <span className="font-display text-2xl font-light leading-tight">Guarda tutti i lavori</span>
        <span aria-hidden className="text-lg">→</span>
      </a>
    </section>
  );
}
