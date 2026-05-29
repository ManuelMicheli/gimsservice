import { METHOD } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function Method() {
  return (
    <section id="metodo" className="bg-ink py-20 text-bg md:py-36">
      <div className="shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <span className="overline text-bg/50">04 — Come lavoro</span>
            <h2 className="mt-5 font-display text-4xl font-light leading-tight tracking-tight text-bg md:text-6xl 2xl:text-7xl">
              Il Metodo GIMS
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm font-body text-bg/60">
              Un processo chiaro, senza sorprese.
            </p>
          </Reveal>
        </div>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-4">
          {METHOD.map((s, i) => (
            <Reveal as="li" key={s.n} delay={Math.min(i * 0.08, 0.24)} className="h-full">
              <div className="flex h-full flex-col gap-8 bg-ink p-8 md:p-9">
                <span className="font-display text-5xl font-light text-accent md:text-6xl">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-display text-xl text-bg">{s.title}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-bg/60">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.2}>
          <div className="mt-14 flex justify-center">
            <Button
              href="#contatti"
              variant="solid"
              className="bg-bg text-ink hover:bg-accent hover:text-bg"
            >
              Richiedi il tuo preventivo gratuito
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
