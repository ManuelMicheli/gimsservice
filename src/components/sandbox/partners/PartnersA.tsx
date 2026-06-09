"use client";

import { PARTNERS } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import Marquee from "@/components/sections/Marquee";

const STATS = [
  { n: "5", label: "categorie partner" },
  { n: "1", label: "referente unico" },
  { n: "100%", label: "materiali certificati" },
];

// Variante A — Dark Band: blocco scuro full-contrast al centro del sito.
// Marquee come banda luminosa, statement + riga statistiche.
export default function PartnersA() {
  return (
    <section className="overflow-hidden bg-ink py-24 text-bg md:py-32">
      <div className="shell">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-8">
            <span className="overline text-accent">La rete</span>
            <p className="mt-6 max-w-2xl font-display text-3xl font-light leading-[1.1] tracking-tight text-bg md:text-5xl">
              Una rete di aziende selezionate del territorio. Tu hai un unico
              referente — <span className="italic text-accent">io</span>.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-4">
            <p className="font-body text-sm leading-relaxed text-bg/60">
              Partner qualificati per impianti elettrici, serramenti,
              condizionamento e idraulica: materiali certificati e soluzioni
              tecniche affidabili, coordinati da una sola mano.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Banda marquee — bordo hairline chiaro su scuro */}
      <Reveal delay={0.15}>
        <div className="mt-16 border-y border-bg/15 py-8 md:mt-20 md:py-10">
          <Marquee
            items={PARTNERS.map((p) => p.label)}
            itemClassName="font-display text-3xl font-light text-bg md:text-5xl"
            separatorClassName="px-2 text-accent"
            duration={32}
          />
        </div>
      </Reveal>

      {/* Riga statistiche */}
      <div className="shell mt-14 md:mt-16">
        <div className="grid grid-cols-1 gap-px overflow-hidden border-y border-bg/15 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="flex items-baseline gap-4 py-6 sm:justify-center sm:px-4"
            >
              <span className="font-display text-4xl font-light text-accent md:text-5xl">
                {s.n}
              </span>
              <span className="font-body text-[0.7rem] uppercase leading-tight tracking-[0.18em] text-bg/55">
                {s.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
