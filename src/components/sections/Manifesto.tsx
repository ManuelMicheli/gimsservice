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

export default function Manifesto() {
  return (
    <section id="manifesto" className="shell py-24 md:py-36">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Titolo centrato */}
        <Reveal>
          <span className="overline text-accent">Chi sono</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-light leading-[1.06] tracking-tight text-ink md:text-6xl 2xl:text-7xl">
            Dal primo sopralluogo alla <span className="italic">consegna</span> finale.
          </h2>
        </Reveal>

        {/* Immagine centrata, con marquee che scorre dietro */}
        <Reveal delay={0.1} className="w-full">
          <div className="relative mx-auto mt-14 flex w-full justify-center md:mt-16">
            {/* Banda marquee full-bleed dietro l'immagine */}
            <div className="pointer-events-none absolute inset-y-0 left-1/2 z-0 flex w-screen -translate-x-1/2 items-center">
              <Marquee
                items={MARQUEE}
                itemClassName="font-display text-2xl font-light italic text-muted/45 md:text-4xl"
                separatorClassName="text-accent/30"
                duration={32}
              />
            </div>
            {/* Immagine sopra */}
            <div className="relative z-10 aspect-[4/5] w-full max-w-lg overflow-hidden rounded-sm">
              <SmartImage
                imgKey="manifesto"
                alt="Dettaglio del lavoro artigianale: gesto e cura dei dettagli"
                label="Manifesto — dettaglio artigiano"
                sizes="(max-width: 768px) 100vw, 512px"
                /* src="/images/manifesto.jpg" */
              />
            </div>
          </div>
        </Reveal>

        {/* Descrizione sotto l'immagine */}
        <div className="mt-14 max-w-2xl space-y-6 font-body text-[0.98rem] leading-relaxed text-ink md:mt-16">
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
            <p className="pt-2 font-display text-xl italic text-ink">— José Giardino</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
