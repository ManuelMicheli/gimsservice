"use client";

import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";

const STATS = [
  { v: "30+", l: "anni di esperienza" },
  { v: "1", l: "solo referente" },
  { v: "Ovest MI", l: "zona servita" },
];

// Variante A — Asymmetric Split. Foto tall a sinistra, manifesto a destra.
export default function ManifestoA() {
  return (
    <section className="bg-bg shell py-24 md:py-32">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
        {/* Foto */}
        <Reveal className="md:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <SmartImage
              imgKey="manifesto"
              alt="José Giardino al lavoro — cura dei dettagli"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
          </div>
        </Reveal>

        {/* Testo */}
        <div className="flex flex-col justify-center md:col-span-7">
          <Reveal>
            <span className="overline text-accent">Chi sono</span>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-light leading-[1.06] tracking-tight text-ink md:text-5xl 2xl:text-6xl">
              Dal primo sopralluogo alla <span className="italic">consegna</span> finale.
            </h2>
          </Reveal>

          <div className="mt-8 max-w-xl space-y-5 font-body text-[0.97rem] leading-relaxed text-ink">
            <Reveal delay={0.1}>
              <p>
                Ogni spazio merita di riflettere la tua personalità. Metto al centro
                l&apos;artigianalità, la cura dei dettagli e la competenza tecnica. Con oltre
                trent&apos;anni di esperienza ti seguo personalmente in ogni fase, con materiali
                selezionati e soluzioni su misura.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                Non sono il più economico e non il più costoso: cerco l&apos;equilibrio giusto tra
                qualità e investimento, per creare spazi unici e duraturi.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="pt-1 font-display text-xl italic text-ink">— José Giardino</p>
            </Reveal>
          </div>

          {/* Stat row */}
          <Reveal delay={0.25}>
            <div className="mt-12 grid grid-cols-3 border-t border-line pt-8">
              {STATS.map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-light text-accent md:text-4xl">{s.v}</div>
                  <div className="mt-2 font-body text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
