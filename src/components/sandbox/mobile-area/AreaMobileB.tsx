"use client";

import { SITE } from "@/lib/site";
import Button from "@/components/ui/Button";

const ZONES = ["Bareggio", "Milano", "Binasco", "Sesto San Giovanni", "Hinterland ovest"];

// B · Content-First — testo + zone + CTA in alto, mappa full-width sotto. Separazione pulita.
export default function AreaMobileB() {
  return (
    <section className="bg-bg px-5 py-16">
      <span className="overline text-accent">05 — Area servita</span>
      <h2 className="mt-5 font-display text-[2rem] font-light leading-[1.08] tracking-tight text-ink">
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

      <div className="mt-8 overflow-hidden rounded-sm border border-line">
        <iframe
          title="Mappa — GIMS Service"
          src={SITE.mapsEmbed}
          loading="lazy"
          className="h-[24rem] w-full grayscale-[0.25]"
        />
      </div>
    </section>
  );
}
