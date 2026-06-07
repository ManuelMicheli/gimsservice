import { TESTIMONIALS } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

function Stars() {
  return (
    <span className="text-accent" aria-label="5 stelle su 5">
      ★★★★★
    </span>
  );
}

// Variante A — Grid Cards (3 celle bordate).
export default function TestimonialsA() {
  return (
    <section className="border-y border-line bg-surface py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <span className="overline text-accent">03 — Recensioni</span>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-light leading-tight tracking-tight text-ink md:text-6xl">
            Cosa Dicono i Nostri Clienti
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.n} delay={Math.min(i * 0.08, 0.2)} className="h-full">
              <figure className="flex h-full flex-col justify-between gap-10 bg-surface p-8 md:p-10">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-xs text-muted">{t.n}</span>
                    <Stars />
                  </div>
                  <blockquote className="mt-6 font-display text-lg font-light leading-relaxed text-ink md:text-xl">
                    “{t.text}”
                  </blockquote>
                </div>
                <figcaption className="font-body text-sm text-muted">
                  <span className="text-ink">{t.name}</span> · {t.place}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
