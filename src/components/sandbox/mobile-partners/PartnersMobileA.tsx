"use client";

import { PARTNERS } from "@/lib/site";
import Marquee from "@/components/sections/Marquee";

// A · Claim + Marquee — versione mobile-tuned dell'attuale (claim centrato + banda scorrevole).
export default function PartnersMobileA() {
  return (
    <section className="overflow-hidden bg-bg py-16">
      <div className="mx-auto max-w-[20rem] px-5 text-center">
        <span className="overline text-accent">La rete</span>
        <p className="mt-5 font-display text-[1.45rem] font-light leading-snug tracking-tight text-ink">
          Collaboro con aziende selezionate del territorio che condividono i miei valori — con
          un unico referente: <span className="italic text-accent">io</span>.
        </p>
      </div>

      <div className="mt-12 border-y border-line py-6">
        <Marquee
          items={PARTNERS.map((p) => p.label)}
          itemClassName="font-display text-2xl font-light text-ink/80"
          separatorClassName="text-accent"
          duration={24}
        />
      </div>
    </section>
  );
}
