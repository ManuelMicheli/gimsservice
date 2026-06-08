import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";

// Layout: desktop = Asymmetric Split (foto tall sx + testo dx).
// Mobile = Cover Portrait (foto full-bleed con overline+headline overlay, testo sotto).
export default function Manifesto() {
  return (
    <section id="manifesto" className="py-24 md:py-32">
      {/* ===== MOBILE — Cover Portrait ===== */}
      <div className="md:hidden">
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <SmartImage
            imgKey="manifesto"
            alt="José Giardino al lavoro — cura dei dettagli"
            label="Manifesto — dettaglio artigiano"
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <Reveal className="absolute inset-x-5 bottom-7">
            <span className="overline !text-bg/80">Chi sono</span>
            <h2 className="mt-3 font-display text-[2.3rem] font-light leading-[1.06] tracking-tight text-bg">
              Dal primo sopralluogo alla <span className="italic">consegna</span> finale.
            </h2>
          </Reveal>
        </div>

        <div className="space-y-5 px-5 py-12 font-body text-[0.9rem] leading-relaxed text-ink">
          <Reveal delay={0.1}>
            <p>
              Ogni spazio merita di riflettere la tua personalità. Per questo metto al centro
              l&apos;artigianalità, la cura dei dettagli e la competenza tecnica. Con oltre
              trent&apos;anni di esperienza ti seguo personalmente in ogni fase, con materiali
              selezionati e soluzioni su misura che uniscono estetica e funzionalità.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              Non sono il più economico e non sono il più costoso: cerco sempre il giusto
              equilibrio tra qualità e investimento, per creare spazi unici e duraturi.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="pt-1 font-display text-xl italic text-accent">— José Giardino</p>
          </Reveal>
        </div>
      </div>

      {/* ===== DESKTOP — Asymmetric Split ===== */}
      <div className="hidden shell md:block">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* Foto */}
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <SmartImage
                imgKey="manifesto"
                alt="José Giardino al lavoro — cura dei dettagli"
                label="Manifesto — dettaglio artigiano"
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
                  Ogni spazio merita di riflettere la tua personalità. Per questo metto al centro
                  l&apos;artigianalità, la cura dei dettagli e la competenza tecnica. Con oltre
                  trent&apos;anni di esperienza ti seguo personalmente in ogni fase, con materiali
                  selezionati e soluzioni su misura che uniscono estetica e funzionalità.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  Non sono il più economico e non sono il più costoso: cerco sempre il giusto
                  equilibrio tra qualità e investimento, per creare spazi unici e duraturi.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="pt-1 font-display text-xl italic text-ink">— José Giardino</p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
