import { PARTNERS } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import Marquee from "@/components/sections/Marquee";

/**
 * Partner di fiducia — claim centrato + banda marquee delle categorie partner.
 */
export default function Partners() {
  return (
    <section className="overflow-hidden py-20 md:py-32">
      <Reveal className="mx-auto max-w-3xl px-6 text-center">
        <span className="overline text-accent">La rete</span>
        <p className="mt-6 font-display text-2xl font-light leading-snug tracking-tight text-ink md:text-4xl">
          Collaboro con aziende selezionate del territorio che condividono i miei valori di
          professionalità e attenzione ai dettagli — con un unico referente:{" "}
          <span className="italic text-accent">io</span>.
        </p>
        <p className="mx-auto mt-6 max-w-xl font-body text-sm leading-relaxed text-muted">
          Partner qualificati per impianti elettrici, serramenti, condizionamento e idraulica: così
          garantisco materiali certificati e soluzioni tecniche affidabili, per un servizio completo
          e coordinato.
        </p>
      </Reveal>

      {/* ===== MOBILE — Numbered List ===== */}
      <div className="mt-12 border-t border-line px-5 md:hidden">
        {PARTNERS.map((p, i) => (
          <Reveal key={p.key} delay={i * 0.06}>
            <div className="flex items-center gap-5 border-b border-line py-6">
              <span className="font-body text-[0.62rem] uppercase tracking-[0.2em] text-accent">
                0{i + 1}
              </span>
              <h3 className="font-display text-[1.6rem] font-light tracking-tight text-ink">
                {p.label}
              </h3>
            </div>
          </Reveal>
        ))}
      </div>

      {/* ===== DESKTOP — Marquee ===== */}
      <Reveal delay={0.1} className="hidden md:block">
        <div className="mt-20 border-y border-line py-7">
          <Marquee
            items={PARTNERS.map((p) => p.label)}
            itemClassName="font-display text-2xl font-light text-ink/80 md:text-4xl"
            separatorClassName="text-accent"
            duration={30}
          />
        </div>
      </Reveal>
    </section>
  );
}
