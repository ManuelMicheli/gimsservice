"use client";

import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";

// Variante C — Layered Quote Card. Immagine grande + card traslucida sovrapposta.
export default function ManifestoC() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <span className="overline text-accent">Chi sono</span>
        </Reveal>

        <div className="relative mt-8 md:mt-10">
          {/* Immagine */}
          <Reveal>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm md:aspect-[16/9]">
              <SmartImage
                imgKey="manifesto"
                alt="José Giardino al lavoro — cura dei dettagli"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              {/* Index */}
              <span className="absolute right-5 top-5 font-body text-[0.7rem] uppercase tracking-[0.2em] text-white/70">
                (Chi sono / 03)
              </span>
            </div>
          </Reveal>

          {/* Card quote sovrapposta */}
          <Reveal delay={0.15}>
            <div className="relative z-10 mx-auto -mt-16 w-[92%] border border-line bg-surface/95 p-8 backdrop-blur-sm md:-mt-24 md:w-[70%] md:p-12">
              <p className="font-display text-2xl font-light leading-[1.18] tracking-tight text-ink md:text-3xl">
                “Dal primo sopralluogo alla <span className="italic">consegna</span> finale ti seguo
                personalmente, con materiali selezionati e soluzioni su misura.”
              </p>
              <p className="mt-6 font-display text-lg italic text-accent">— José Giardino</p>
            </div>
          </Reveal>
        </div>

        {/* Testo sotto */}
        <div className="mx-auto mt-14 max-w-2xl space-y-5 text-center font-body text-[0.97rem] leading-relaxed text-ink md:mt-16">
          <Reveal delay={0.1}>
            <p>
              Ogni spazio merita di riflettere la tua personalità. Metto al centro
              l&apos;artigianalità, la cura dei dettagli e la competenza tecnica. Con oltre
              trent&apos;anni di esperienza, cerco sempre l&apos;equilibrio giusto tra qualità e
              investimento, per creare spazi unici e duraturi.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
