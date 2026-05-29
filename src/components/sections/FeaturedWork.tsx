import { PROJECTS, ROTATING_WORDS } from "@/lib/site";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";
import RotatingWord from "@/components/ui/RotatingWord";

/**
 * Lavori in evidenza. Headline con parola rotante.
 * Card con effetto White Maple: al passaggio la foto scorre verso l'alto
 * rivelando un frame alternato dello stesso ambiente.
 */
export default function FeaturedWork() {
  return (
    <section id="lavori" className="shell py-20 md:py-36">
      <Reveal>
        <span className="overline text-accent">02 — Lavori in evidenza</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-6 max-w-4xl font-display text-4xl font-light leading-[1.08] tracking-tight text-ink md:text-6xl 2xl:text-7xl">
          Realizzo <RotatingWord words={ROTATING_WORDS} /> che durano nel tempo.
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.n} delay={Math.min(i * 0.06, 0.3)}>
            <a href="#contatti" className="group block">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-line">
                {/* frame principale */}
                <div className="absolute inset-0 transition-transform duration-[900ms] ease-soft group-hover:-translate-y-full">
                  <SmartImage
                    imgKey={p.img}
                    alt={`${p.title} — vista principale`}
                    label={p.title}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                {/* frame alternato (rivelato dall'hover) */}
                <div className="absolute inset-0 translate-y-full transition-transform duration-[900ms] ease-soft group-hover:translate-y-0">
                  <SmartImage
                    imgKey={p.imgAlt}
                    alt={`${p.title} — vista alternata`}
                    label={`${p.title} · dettaglio`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="font-display text-xl text-ink">
                  <span className="mr-3 font-body text-xs text-muted">{p.n}</span>
                  {p.title}
                </h3>
                <span className="font-body text-[0.72rem] uppercase tracking-[0.14em] text-muted transition-colors group-hover:text-accent">
                  Vedi →
                </span>
              </div>
            </a>
          </Reveal>
        ))}

        {/* CTA card */}
        <Reveal delay={0.3}>
          <a
            href="#contatti"
            className="flex aspect-[4/5] flex-col justify-between rounded-sm border border-ink bg-ink p-7 text-bg transition-colors hover:bg-accent"
          >
            <span className="overline text-bg/60">Galleria completa</span>
            <span className="font-display text-3xl font-light leading-tight">
              Vai alla galleria →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
