import { METHOD } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

/**
 * Il Metodo GIMS — Ghost Rows.
 * Righe full-width con numero ghost gigante clippato al bordo destro.
 */
export default function Method() {
  return (
    <section id="metodo" className="overflow-hidden bg-ink py-20 text-bg md:py-32">
      <div className="shell">
        <Reveal>
          <span className="overline text-bg/50">04 — Come lavoro</span>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-light leading-tight tracking-tight text-bg md:text-6xl 2xl:text-7xl">
            Il Metodo GIMS
          </h2>
        </Reveal>

        <ol className="mt-16 border-t border-bg/10 md:mt-20">
          {METHOD.map((s, i) => (
            <Reveal
              as="li"
              key={s.n}
              y={24}
              delay={i * 0.05}
              className="group relative flex items-center overflow-hidden border-b border-bg/10 py-10 md:py-14"
            >
              {/* Numero ghost gigante, clippato a destra */}
              <span className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 select-none font-display text-[7rem] font-light leading-none text-bg/[0.07] transition-colors duration-700 group-hover:text-accent/20 md:-right-6 md:text-[16rem]">
                {s.n}
              </span>
              <div className="relative z-10 max-w-[16rem] md:max-w-2xl">
                <h3 className="font-display text-[1.6rem] font-light leading-tight tracking-tight text-bg md:text-5xl">
                  {s.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-bg/60 md:mt-4 md:text-base">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <div className="mt-16 flex justify-center">
            <Button href="#contatti" variant="inverse" className="w-full justify-center md:w-auto">
              Richiedi il tuo preventivo gratuito
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
