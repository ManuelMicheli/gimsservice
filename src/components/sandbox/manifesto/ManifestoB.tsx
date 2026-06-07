"use client";

import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";
import Marquee from "@/components/sections/Marquee";

const MARQUEE = [
  "Artigianalità",
  "Cura dei dettagli",
  "Materiali selezionati",
  "Soluzioni su misura",
  "Oltre trent'anni",
];

// Variante B — Typographic Manifesto. Statement gigante + marquee + immagine wide.
export default function ManifestoB() {
  return (
    <section className="overflow-hidden bg-bg py-24 md:py-32">
      <div className="shell flex flex-col items-center text-center">
        <Reveal>
          <span className="overline text-accent">Chi sono</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-7 max-w-5xl font-display text-[2rem] font-light leading-[1.08] tracking-tight text-ink sm:text-4xl md:text-6xl">
            Ogni spazio merita di riflettere la tua personalità. Per questo metto al centro
            l&apos;<span className="italic text-accent">artigianalità</span> e la cura dei dettagli.
          </h2>
        </Reveal>
      </div>

      {/* Marquee band full-bleed */}
      <Reveal delay={0.1}>
        <div className="my-16 border-y border-line py-6 md:my-20">
          <Marquee
            items={MARQUEE}
            itemClassName="font-display text-2xl font-light italic text-ink/80 md:text-4xl"
            separatorClassName="text-accent"
            duration={32}
          />
        </div>
      </Reveal>

      {/* Immagine cinematica wide */}
      <div className="shell">
        <Reveal>
          <div className="relative aspect-[16/8] w-full overflow-hidden rounded-sm">
            <SmartImage
              imgKey="manifesto"
              alt="José Giardino al lavoro — cura dei dettagli"
              sizes="100vw"
            />
          </div>
        </Reveal>

        <div className="mx-auto mt-12 max-w-2xl space-y-5 text-center font-body text-[0.97rem] leading-relaxed text-ink md:mt-14">
          <Reveal delay={0.1}>
            <p>
              Con oltre trent&apos;anni di esperienza ti seguo personalmente in ogni fase, con
              materiali selezionati e soluzioni su misura che uniscono estetica e funzionalità.
              Non sono il più economico e non il più costoso: cerco l&apos;equilibrio giusto tra
              qualità e investimento.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="pt-1 font-display text-xl italic text-ink">— José Giardino</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
