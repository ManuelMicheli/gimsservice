"use client";

import { PARTNERS } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import Marquee from "@/components/sections/Marquee";

const QUALIFIERS = [
  "Materiali certificati",
  "Referente unico",
  "Soluzioni su misura",
  "Cantiere coordinato",
  "Aziende del territorio",
];

// Variante B — Dual counter-marquee: due bande che scorrono opposte,
// claim centrato tra le due. Densità + cinetica, su off-white.
export default function PartnersB() {
  return (
    <section className="overflow-hidden bg-bg py-24 md:py-32">
      {/* Banda 1 — categorie grandi, scorre verso sinistra */}
      <div className="border-y border-line py-6 md:py-7">
        <Marquee
          items={PARTNERS.map((p) => p.label)}
          itemClassName="font-display text-3xl font-light text-ink md:text-5xl"
          separatorClassName="px-2 text-accent"
          duration={34}
        />
      </div>

      {/* Claim centrato */}
      <Reveal className="mx-auto max-w-3xl px-6 py-14 text-center md:py-16">
        <span className="overline text-accent">La rete</span>
        <p className="mt-6 font-display text-2xl font-light leading-snug tracking-tight text-ink md:text-4xl">
          Collaboro con aziende selezionate che condividono i miei valori di
          professionalità e attenzione ai dettagli — con un unico referente:{" "}
          <span className="italic text-accent">io</span>.
        </p>
      </Reveal>

      {/* Banda 2 — qualità, più piccola, scorre verso destra (reverse) */}
      <div className="border-y border-line bg-ink/[0.03] py-5 md:py-6">
        <Marquee
          items={QUALIFIERS}
          itemClassName="font-body text-[0.7rem] uppercase tracking-[0.28em] text-muted md:text-xs"
          separatorClassName="px-1 text-accent"
          separator="—"
          duration={40}
          reverse
        />
      </div>
    </section>
  );
}
