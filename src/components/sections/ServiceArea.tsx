import { SITE } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const ZONES = ["Bareggio", "Milano", "Binasco", "Sesto San Giovanni", "Hinterland ovest"];

/**
 * Area servita.
 * Desktop = Map-forward (mappa grande + card glass sovrapposta).
 * Mobile = Content-First (testo + zone + CTA sopra, mappa full-width sotto).
 */
export default function ServiceArea() {
  return (
    <section id="area" className="py-20 md:py-32">
      {/* ===== MOBILE — Content-First ===== */}
      <div className="px-5 md:hidden">
        <Reveal>
          <span className="overline text-accent">05 — Area servita</span>
          <h2 className="mt-5 font-display text-[2rem] font-light leading-[1.08] tracking-tight text-ink">
            Lavoro a Bareggio e in tutto l&apos;<span className="italic">ovest milanese</span>.
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-muted">
            Locale, affidabile, puntuale. Vengo da te per il sopralluogo e seguo il cantiere di
            persona, dal primo incontro alla consegna.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {ZONES.map((z) => (
              <li key={z} className="rounded-full border border-line px-3 py-1.5 font-body text-[0.66rem] uppercase tracking-[0.12em] text-muted">
                {z}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button href="#contatti" variant="solid" className="w-full justify-center">
              Richiedi un sopralluogo
            </Button>
          </div>
        </Reveal>

        <div className="mt-8 overflow-hidden rounded-sm border border-line">
          <iframe
            title="Mappa — GIMS Service, Bareggio (MI)"
            src={SITE.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[24rem] w-full grayscale-[0.25]"
            allowFullScreen
          />
        </div>
      </div>

      {/* ===== DESKTOP — Map-forward ===== */}
      <div className="hidden shell md:block">
        <Reveal>
          <span className="overline text-accent">05 — Area servita</span>
        </Reveal>

        <div className="relative mt-10 overflow-hidden rounded-sm border border-line">
          {/* Mappa */}
          <iframe
            title="Mappa — GIMS Service, Bareggio (MI)"
            src={SITE.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[40rem] w-full grayscale-[0.25]"
            allowFullScreen
          />

          {/* Card glass sovrapposta */}
          <Reveal className="pointer-events-none absolute inset-0 flex items-center p-10">
            <div className="pointer-events-auto w-full max-w-md border border-line bg-surface/90 p-10 backdrop-blur-md">
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
      </div>
    </section>
  );
}
