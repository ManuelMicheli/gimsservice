import Image from "next/image";
import { SITE } from "@/lib/site";
import Button from "@/components/ui/Button";

// Scena hero fissa (interno di una casa in ristrutturazione).
const HERO = {
  src: "/images/hero-reno.jpg",
  alt: "Interno di una casa in ristrutturazione a Bareggio",
};

// Headline mascherata riga per riga (Editorial Split).
const LINES = ["Artigiano edile a Bareggio", "da oltre trent'anni."];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Immagine full-bleed */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO.src}
          alt={HERO.alt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay scuro per leggibilità — più intenso su mobile */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-black/20" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/45 to-transparent md:from-black/65 md:via-black/25" />
      </div>

      <div className="shell relative z-20 pb-14 pt-32 text-bg md:pb-20">
        {/* Niente animazione d'entrata sopra la piega: il testo dipinge subito
            (LCP/Speed Index ottimali). Le animazioni restano sotto la piega. */}
        <p className="overline absolute left-5 top-12 right-5 !text-bg md:static md:left-auto md:right-auto md:top-auto">
          José Giardino
        </p>

        <h1 className="mt-0 max-w-5xl font-display text-[2.05rem] font-light leading-[1.05] tracking-tight text-bg sm:mt-7 sm:text-6xl md:text-7xl lg:text-[5.5rem] 2xl:text-[7rem]">
          {LINES.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        <div className="mt-11 flex flex-col items-start gap-7 border-t border-bg/15 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex w-full flex-col-reverse items-start gap-6 md:w-auto md:flex-row md:items-center md:gap-9">
            <Button href="#contatti" variant="solid" className="w-full justify-center !bg-bg !text-ink hover:!bg-accent hover:!text-bg md:w-auto">
              Richiedi un preventivo gratuito
            </Button>
            <p className="max-w-xs font-body text-sm leading-relaxed text-white md:text-bg/75">
              Un solo artigiano, dal primo sopralluogo alla consegna.
            </p>
          </div>
          <span className="block w-full text-center font-body text-[0.7rem] uppercase tracking-[0.22em] text-bg/50 md:inline md:w-auto md:text-left">
            Bareggio (MI) — Ovest milanese
          </span>
        </div>
      </div>

      <span className="sr-only">{SITE.brand} — artigiano edile a Bareggio (MI)</span>
    </section>
  );
}
