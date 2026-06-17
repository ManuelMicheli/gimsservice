"use client";

import { SITE } from "@/lib/site";
import Button from "@/components/ui/Button";

const ZONES = ["Bareggio", "Corbetta", "Sedriano", "Cornaredo", "Rho", "Milano", "Hinterland ovest"];

// A · Map + Overlay Card — mappa protagonista, card glass sovrapposta in basso.
export default function AreaMobileA() {
  return (
    <section className="bg-bg px-5 py-16">
      <span className="overline text-accent">05 — Area servita</span>

      <div className="relative mt-6 overflow-hidden rounded-sm border border-line">
        <iframe
          title="Mappa — GIMS Service"
          src={SITE.mapsEmbed}
          loading="lazy"
          className="h-[32rem] w-full grayscale-[0.25]"
        />
        <div className="pointer-events-none absolute inset-0 flex items-end p-3">
          <div className="pointer-events-auto w-full border border-line bg-surface/92 p-6 backdrop-blur-md">
            <h2 className="font-display text-[1.7rem] font-light leading-[1.1] tracking-tight text-ink">
              Lavoro a Bareggio e in tutto l&apos;<span className="italic">ovest milanese</span>.
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {ZONES.map((z) => (
                <li key={z} className="rounded-full border border-line px-3 py-1.5 font-body text-[0.62rem] uppercase tracking-[0.12em] text-muted">
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
        </div>
      </div>
    </section>
  );
}
