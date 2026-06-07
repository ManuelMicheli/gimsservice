"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SITE } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

const ease = [0.16, 1, 0.3, 1] as const;
const ZONES = ["Bareggio", "Milano", "Binasco", "Sesto San Giovanni", "Hinterland ovest"];

// Variante C — Zone List: zone come lista serif gigante a sx, mappa a dx.
export default function AreaC() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-bg shell py-24 md:py-32">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
        {/* Sinistra: intro + lista zone */}
        <div className="md:col-span-7">
          <Reveal>
            <span className="overline text-accent">05 — Area servita</span>
            <h2 className="mt-5 max-w-md font-display text-4xl font-light leading-[1.06] tracking-tight text-ink md:text-5xl">
              Lavoro a Bareggio e in tutto l&apos;<span className="italic">ovest milanese</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md font-body leading-relaxed text-muted">
              Locale, affidabile, puntuale. Vengo da te per il sopralluogo e seguo il cantiere di
              persona.
            </p>
          </Reveal>

          <div className="mt-12 border-t border-line">
            {ZONES.map((z, i) => (
              <motion.div
                key={z}
                className="group flex items-center justify-between border-b border-line py-5 transition-colors hover:text-accent"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, ease, delay: i * 0.06 }}
              >
                <span className="font-display text-2xl font-light tracking-tight text-ink transition-all duration-500 group-hover:translate-x-2 group-hover:text-accent md:text-4xl">
                  {z}
                </span>
                <span className="font-body text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                  0{i + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Destra: mappa full-height */}
        <Reveal delay={0.1} className="md:col-span-5">
          <div className="relative h-full min-h-[28rem] overflow-hidden rounded-sm border border-line">
            <iframe
              title="Mappa — GIMS Service, Bareggio (MI)"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[0.25]"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
