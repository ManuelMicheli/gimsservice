import { FAQ_TEASER } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

/**
 * FAQ teaser — Accordion nativo (<details>): zero JS, server component.
 * La prima domanda è aperta di default.
 */
export default function FaqTeaser() {
  return (
    <section id="faq" className="border-t border-line bg-surface py-20 md:py-32">
      <div className="shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <Reveal>
          <span className="overline text-accent">06 — Domande frequenti</span>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight tracking-tight text-ink md:text-5xl">
            Le risposte alle domande più comuni.
          </h2>
          <Button href="#contatti" variant="outline" className="mt-8 hidden lg:inline-flex">
            Tutte le domande →
          </Button>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border-t border-line">
            {FAQ_TEASER.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                className="group border-b border-line"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-xl font-light text-ink md:text-2xl">{f.q}</span>
                  <span className="shrink-0 font-body text-2xl text-accent transition-transform duration-500 ease-soft group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-xl pb-7 font-body text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>

        {/* CTA mobile — sotto l'accordion, full-width */}
        <Button href="#contatti" variant="outline" className="w-full justify-center lg:hidden">
          Tutte le domande →
        </Button>
      </div>
    </section>
  );
}
