import Image from "next/image";
import { SERVICES } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import ServicesHover from "@/components/sections/ServicesHover";

/**
 * I Nostri Servizi (server component).
 * Le liste sono HTML statico (niente hydration). L'unica parte client è
 * l'immagine flottante desktop, isolata in <ServicesHover>.
 */
export default function Services() {
  return (
    <section id="servizi" className="relative shell py-20 md:py-32">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <span className="overline text-accent">01 — Cosa faccio</span>
          <h2 className="mt-5 font-display text-4xl font-light leading-tight tracking-tight text-ink md:text-6xl 2xl:text-7xl">
            I Nostri Servizi
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-sm font-body text-muted">
            Una gamma completa di servizi, dove qualità e precisione sono al centro di ogni progetto.
          </p>
          <a
            href="/servizi"
            className="group mt-5 inline-flex items-center gap-2 font-body text-sm font-medium uppercase tracking-[0.15em] text-accent"
          >
            Scopri tutti i servizi
            <span className="text-lg transition-transform duration-500 ease-soft group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>
      </div>

      <ServicesHover images={SERVICES.map((s) => s.img)}>
        {/* ===== MOBILE — Thumb List ===== */}
        <div className="mt-12 border-t border-line md:hidden">
          {SERVICES.map((s, i) => (
            <a
              key={s.n}
              data-idx={i}
              href={`/servizi/${s.slug}`}
              className="flex items-center gap-4 border-b border-line py-4"
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md">
                <Image src={`/images/${s.img}.jpg`} alt={`${s.title} — G.I.M.S. Service, Bareggio`} fill sizes="80px" className="object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="font-body text-[0.58rem] uppercase tracking-[0.2em] text-accent">
                  {s.n}
                </span>
                <h3 className="font-display text-[1.35rem] font-light leading-tight tracking-tight text-ink">
                  {s.title}
                </h3>
                <p className="mt-1 font-body text-[0.74rem] leading-snug text-muted">{s.desc}</p>
              </div>
            </a>
          ))}
        </div>

        {/* ===== DESKTOP — Index List + immagine flottante che segue il mouse ===== */}
        <div className="mt-20 hidden border-t border-line md:block">
          {SERVICES.map((s, i) => (
            <a
              key={s.n}
              data-idx={i}
              href={`/servizi/${s.slug}`}
              className="group grid grid-cols-12 items-center gap-3 border-b border-line py-7 transition-colors duration-500"
            >
              <span className="col-span-1 font-body text-[0.7rem] uppercase tracking-[0.2em] text-muted">
                {s.n}
              </span>
              <h3 className="col-span-5 font-display text-3xl font-light tracking-tight text-ink transition-all duration-500 ease-soft group-hover:translate-x-3 group-hover:text-accent md:text-5xl">
                {s.title}
              </h3>
              <p className="col-span-5 line-clamp-2 font-body text-sm leading-relaxed text-muted md:text-right">
                {s.desc}
              </p>
              <span className="col-span-1 text-right text-lg text-ink transition-all duration-500 group-hover:text-accent group-hover:-rotate-45">
                →
              </span>
            </a>
          ))}
        </div>
      </ServicesHover>
    </section>
  );
}
