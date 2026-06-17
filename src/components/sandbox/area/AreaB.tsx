import { SITE } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const ZONES = ["Bareggio", "Corbetta", "Sedriano", "Cornaredo", "Rho", "Milano", "Hinterland ovest"];

// Variante B — Map-forward: mappa grande + card glass sovrapposta.
export default function AreaB() {
  return (
    <section className="bg-bg shell py-24 md:py-32">
      <Reveal>
        <span className="overline text-accent">05 — Area servita</span>
      </Reveal>

      <div className="relative mt-8 overflow-hidden rounded-sm border border-line md:mt-10">
        {/* Mappa */}
        <iframe
          title="Mappa — GIMS Service, Bareggio (MI)"
          src={SITE.mapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[34rem] w-full grayscale-[0.25] md:h-[40rem]"
          allowFullScreen
        />

        {/* Card glass sovrapposta */}
        <Reveal className="pointer-events-none absolute inset-0 flex items-end p-5 md:items-center md:p-10">
          <div className="pointer-events-auto w-full max-w-md border border-line bg-surface/90 p-8 backdrop-blur-md md:p-10">
            <h2 className="font-display text-3xl font-light leading-[1.06] tracking-tight text-ink md:text-4xl">
              Lavoro a Bareggio e in tutto l&apos;<span className="italic">ovest milanese</span>.
            </h2>
            <p className="mt-5 font-body text-sm leading-relaxed text-muted">
              Locale, affidabile, puntuale. Vengo da te per il sopralluogo e seguo il cantiere di
              persona, dal primo incontro alla consegna.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {ZONES.map((z) => (
                <li key={z} className="rounded-full border border-line px-3 py-1.5 font-body text-[0.7rem] uppercase tracking-[0.12em] text-muted">
                  {z}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <Button href="#contatti" variant="solid">Richiedi un sopralluogo</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
