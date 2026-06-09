"use client";

import SmartImage from "@/components/ui/SmartImage";
import RotatingWord from "@/components/ui/RotatingWord";
import { ROTATING_WORDS } from "@/lib/site";
import { WORKS } from "@/components/sandbox/work/projects";

// A · Cinematic Stack — deck di card pinnate (position: sticky) che si impilano
// scrollando: la card sotto rimpicciolisce e si scurisce mentre la successiva
// le scorre sopra. 100% CSS scroll-driven (work-stack-out / work-cap), nessun JS.
// Funziona identico dentro al phone-frame e su mobile reale.
export default function WorkMobileA() {
  return (
    <section className="bg-bg px-5 pb-24 pt-16">
      <span className="overline text-accent">02 — Lavori in evidenza</span>
      <h2 className="mt-5 font-display text-[2.2rem] font-light leading-[1.08] tracking-tight text-ink">
        Realizzo <RotatingWord words={ROTATING_WORDS} /> che durano nel tempo.
      </h2>

      {/* Deck — ogni card è sticky, si impilano sullo stesso top */}
      <div className="relative mt-12 flex flex-col gap-8">
        {WORKS.map((p, i) => (
          <a
            key={p.n}
            href="#contatti"
            className="work-stack-out sticky top-6 block aspect-[4/5] overflow-hidden rounded-xl bg-line shadow-[0_30px_60px_-30px_rgba(0,0,0,0.55)]"
            style={{ zIndex: 10 + i }}
          >
            {/* parallax interno */}
            <div className="absolute inset-0 work-parallax">
              <SmartImage imgKey={p.img} alt={p.title} label={p.title} sizes="390px" />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30" />

            {/* indice grande, outline */}
            <span className="absolute right-5 top-4 font-display text-[4.5rem] font-light leading-none text-bg/15">
              {p.n}
            </span>

            {/* caption che sale */}
            <div className="work-cap absolute inset-x-5 bottom-5">
              <span className="font-body text-[0.62rem] uppercase tracking-[0.22em] text-accent">
                {p.category} · {p.place} · {p.year}
              </span>
              <h3 className="mt-2 flex items-end justify-between font-display text-[2.1rem] font-light leading-[0.95] tracking-tight text-bg">
                {p.title}
                <span aria-hidden className="mb-1 text-base">→</span>
              </h3>
            </div>
          </a>
        ))}
      </div>

      <a
        href="#contatti"
        className="mt-10 flex items-center justify-between rounded-xl bg-ink p-6 text-bg transition-colors active:bg-accent"
      >
        <span className="font-display text-2xl font-light leading-tight">Guarda tutti i lavori</span>
        <span aria-hidden className="text-lg">→</span>
      </a>
    </section>
  );
}
