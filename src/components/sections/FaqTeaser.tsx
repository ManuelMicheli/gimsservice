import { FAQ_TEASER } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function FaqTeaser() {
  return (
    <section id="faq" className="border-t border-line bg-surface py-20 md:py-32">
      <div className="shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <Reveal>
          <span className="overline text-accent">06 — Domande frequenti</span>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight tracking-tight text-ink md:text-5xl">
            Le risposte alle domande più comuni.
          </h2>
          <Button href="#contatti" variant="outline" className="mt-8">
            Tutte le domande →
          </Button>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="divide-y divide-line border-t border-line">
            {FAQ_TEASER.map((f) => (
              <div key={f.q} className="py-7">
                <dt className="font-display text-xl text-ink">{f.q}</dt>
                <dd className="mt-2 max-w-xl font-body text-sm leading-relaxed text-muted">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
