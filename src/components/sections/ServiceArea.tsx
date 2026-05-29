import { SITE } from "@/lib/site";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";

const ZONES = ["Bareggio", "Milano", "Binasco", "Sesto San Giovanni", "Hinterland ovest"];

export default function ServiceArea() {
  return (
    <section id="area" className="shell py-24 md:py-36">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <span className="overline text-accent">05 — Area servita</span>
            <h2 className="mt-5 max-w-md font-display text-4xl font-light leading-[1.06] tracking-tight text-ink md:text-6xl 2xl:text-7xl">
              Lavoro a Bareggio e in tutto l&apos;<span className="italic">ovest milanese</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md font-body leading-relaxed text-muted">
              Locale, affidabile, puntuale. Vengo da te per il sopralluogo e seguo il cantiere di
              persona, dal primo incontro alla consegna delle chiavi.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {ZONES.map((z) => (
                <li
                  key={z}
                  className="rounded-full border border-line px-4 py-2 font-body text-[0.75rem] uppercase tracking-[0.12em] text-muted"
                >
                  {z}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <SmartImage
                  imgKey="area-a"
                  alt="Interno italiano caldo e accogliente"
                  label="Area · interno"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  /* src="/images/area-a.webp" */
                />
              </div>
              <div className="relative aspect-[3/4] translate-y-6 overflow-hidden rounded-sm">
                <SmartImage
                  imgKey="area-b"
                  alt="Richiamo locale — architettura lombarda"
                  label="Area · locale"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  /* src="/images/area-b.webp" */
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Mappa Google embed */}
        <Reveal delay={0.1}>
          <div className="relative h-full min-h-[26rem] overflow-hidden rounded-sm border border-line">
            <iframe
              title="Mappa — GIMS Service, Bareggio (MI)"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[0.2]"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
