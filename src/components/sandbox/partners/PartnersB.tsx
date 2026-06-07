"use client";

import { PARTNERS } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import Marquee from "@/components/sections/Marquee";

// Variante B — Claim centrato + banda marquee delle categorie.
export default function PartnersB() {
  return (
    <section className="overflow-hidden bg-bg py-24 md:py-32">
      <Reveal className="mx-auto max-w-3xl px-6 text-center">
        <span className="overline text-accent">La rete</span>
        <p className="mt-6 font-display text-2xl font-light leading-snug tracking-tight text-ink md:text-4xl">
          Collaboro con aziende selezionate del territorio che condividono i miei valori di
          professionalità e attenzione ai dettagli — con un unico referente:{" "}
          <span className="italic text-accent">io</span>.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-16 border-y border-line py-7 md:mt-20">
          <Marquee
            items={PARTNERS.map((p) => p.label)}
            itemClassName="font-display text-2xl font-light text-ink/80 md:text-4xl"
            separatorClassName="text-accent"
            duration={30}
          />
        </div>
      </Reveal>
    </section>
  );
}
