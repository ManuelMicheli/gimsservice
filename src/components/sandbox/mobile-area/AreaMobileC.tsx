"use client";

import { SITE } from "@/lib/site";
import Button from "@/components/ui/Button";

const ZONES = ["Bareggio", "Milano", "Binasco", "Sesto San Giovanni", "Hinterland ovest"];

// C · Map Banner — mappa banner in alto, contenuto sotto su off-white.
export default function AreaMobileC() {
  return (
    <section className="bg-bg pb-16">
      <div className="relative h-[18rem] w-full overflow-hidden">
        <iframe
          title="Mappa — GIMS Service"
          src={SITE.mapsEmbed}
          loading="lazy"
          className="h-full w-full grayscale-[0.3]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-bg" />
      </div>

      <div className="-mt-6 px-5">
        <span className="overline text-accent">05 — Area servita</span>
        <h2 className="mt-4 font-display text-[2rem] font-light leading-[1.08] tracking-tight text-ink">
          Lavoro a Bareggio e in tutto l&apos;<span className="italic">ovest milanese</span>.
        </h2>
        <p className="mt-4 font-body text-[0.86rem] leading-relaxed text-muted">
          Locale, affidabile, puntuale. Vengo da te per il sopralluogo e seguo il cantiere di
          persona, dal primo incontro alla consegna.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {ZONES.map((z) => (
            <li key={z} className="rounded-full border border-line px-3 py-1.5 font-body text-[0.64rem] uppercase tracking-[0.12em] text-muted">
              {z}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Button href="#contatti" variant="solid" className="w-full justify-center">
            Richiedi un sopralluogo
          </Button>
        </div>
      </div>
    </section>
  );
}
