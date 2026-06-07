import { METHOD } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

// Ghost Number — esecuzione 1: griglia 4 celle, numero ghost dietro, testo sopra.
export default function MethodA() {
  return (
    <section className="bg-ink py-24 text-bg md:py-32">
      <div className="shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <span className="overline text-bg/50">04 — Come lavoro</span>
            <h2 className="mt-5 font-display text-4xl font-light leading-tight tracking-tight text-bg md:text-6xl">
              Il Metodo GIMS
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm font-body text-bg/60">Un processo chiaro, senza sorprese.</p>
          </Reveal>
        </div>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-4">
          {METHOD.map((s, i) => (
            <Reveal as="li" key={s.n} delay={Math.min(i * 0.08, 0.24)} className="h-full">
              <div className="relative flex h-full min-h-[16rem] flex-col justify-end overflow-hidden bg-ink p-8 md:min-h-[20rem] md:p-9">
                {/* Numero ghost */}
                <span className="pointer-events-none absolute -right-3 -top-6 select-none font-display text-[9rem] font-light leading-none text-white/[0.06] md:text-[11rem]">
                  {s.n}
                </span>
                <div className="relative z-10">
                  <h3 className="font-display text-xl font-light text-bg md:text-2xl">{s.title}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-bg/60">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.2}>
          <div className="mt-14 flex justify-center">
            <Button href="#contatti" variant="solid" className="bg-bg text-ink hover:bg-accent hover:text-bg">
              Richiedi il tuo preventivo gratuito
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
