"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";

// Le 3 immagini che la foto sticky attraversa scorrendo (desktop).
const STICKY_IMAGES: { key: string; src?: string; alt: string }[] = [
  { key: "chi-siamo", src: "/images/chi-siamo.png", alt: "Soggiorno finito con finiture su misura" },
  { key: "g-manutenzione", alt: "Manutenzione stabili — intervento su parti comuni" },
  { key: "bagno", alt: "Ambiente finito — risultato consegnato chiavi in mano" },
];

// Layout: desktop = Sticky Scroll (foto fissa che attraversa 3 immagini, testo a comparsa).
// Mobile = Cover Portrait (foto full-bleed con overline+headline overlay, testo sotto).
export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Cross-fade tra le 3 immagini in base al progresso di scroll della sezione.
  const op0 = useTransform(scrollYProgress, [0, 0.28, 0.4], [1, 1, 0]);
  const op1 = useTransform(scrollYProgress, [0.32, 0.44, 0.62, 0.72], [0, 1, 1, 0]);
  const op2 = useTransform(scrollYProgress, [0.64, 0.76, 1], [0, 1, 1]);
  const opacities = [op0, op1, op2];
  // Indicatore step (01 → 03) che avanza con lo scroll.
  const stepX = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  // Posizione orizzontale: immagine sinistra → destra → sinistra; testo sempre opposto.
  // Lo spostamento avviene durante le finestre di cross-fade tra i capitoli.
  const imageX = useTransform(
    scrollYProgress,
    [0, 0.32, 0.44, 0.64, 0.76, 1],
    ["0%", "0%", "100%", "100%", "0%", "0%"]
  );
  const textX = useTransform(
    scrollYProgress,
    [0, 0.32, 0.44, 0.64, 0.76, 1],
    ["100%", "100%", "0%", "0%", "100%", "100%"]
  );

  return (
    <section id="manifesto" className="py-24 md:py-32">
      {/* ===== MOBILE — Cover Portrait ===== */}
      <div className="md:hidden">
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <SmartImage
            imgKey="chi-siamo"
            src="/images/chi-siamo.png"
            alt="Soggiorno finito con finiture su misura"
            label="Manifesto — dettaglio artigiano"
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <Reveal className="absolute inset-x-5 bottom-7">
            <span className="overline !text-bg/80">Chi sono</span>
            <h2 className="mt-3 font-display text-[2.3rem] font-light leading-[1.06] tracking-tight text-bg">
              Dal primo sopralluogo alla <span className="italic">consegna</span> finale.
            </h2>
          </Reveal>
        </div>

        <div className="space-y-5 px-5 py-12 font-body text-[0.9rem] leading-relaxed text-ink">
          <Reveal delay={0.1}>
            <p>
              Ogni spazio merita di riflettere la tua personalità. Per questo metto al centro
              l&apos;artigianalità, la cura dei dettagli e la competenza tecnica. Con oltre
              trent&apos;anni di esperienza ti seguo personalmente in ogni fase, con materiali
              selezionati e soluzioni su misura che uniscono estetica e funzionalità.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              Non sono il più economico e non sono il più costoso: cerco sempre il giusto
              equilibrio tra qualità e investimento, per creare spazi unici e duraturi.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p>
              Dalla ristrutturazione di appartamenti e negozi alla manutenzione di stabili, fino a
              tapparelle e cartongesso: unisco competenza tecnica e sensibilità estetica per
              trasformare gli spazi in ambienti funzionali e armoniosi.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="pt-1 font-display text-xl italic text-accent">— José Giardino, geometra</p>
          </Reveal>
        </div>
      </div>

      {/* ===== DESKTOP — Sticky Scroll: foto e testo scivolano in opposizione ===== */}
      {/* sinistra (cap.1) → destra (cap.2) → sinistra (cap.3). Cross-fade dei contenuti. */}
      <div ref={ref} className="hidden md:block">
        <div className="relative h-[300vh]">
          <div className="sticky top-[14vh] h-[72vh]">
            <div className="shell h-full">
              <div className="relative h-full">
                {/* IMMAGINE — metà larghezza, scivola sx↔dx */}
                <motion.div
                  className="absolute left-0 top-0 h-full w-1/2 overflow-hidden rounded-sm bg-line"
                  style={{ x: imageX }}
                >
                  {STICKY_IMAGES.map((img, idx) => (
                    <motion.div
                      key={img.key}
                      className="absolute inset-0"
                      style={{ opacity: opacities[idx] }}
                    >
                      <SmartImage
                        imgKey={img.key}
                        src={img.src}
                        alt={img.alt}
                        label="Manifesto — dettaglio artigiano"
                        sizes="(max-width: 768px) 100vw, 42vw"
                      />
                    </motion.div>
                  ))}

                  {/* Indicatore step in basso */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/55 to-transparent px-6 pb-5 pt-16">
                    <span className="font-body text-[0.66rem] uppercase tracking-[0.22em] text-bg/80">
                      Chi sono
                    </span>
                    <span className="font-body text-[0.66rem] uppercase tracking-[0.22em] text-bg/80">
                      01 — 03
                    </span>
                  </div>
                  <div className="absolute inset-x-6 bottom-[3.1rem] h-px bg-bg/25">
                    <motion.span
                      className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent"
                      style={{ left: stepX }}
                    />
                  </div>
                </motion.div>

                {/* TESTO — metà larghezza, scivola opposto all'immagine. 3 capitoli in cross-fade. */}
                <motion.div
                  className="absolute left-0 top-0 h-full w-1/2"
                  style={{ x: textX }}
                >
                  <motion.div
                    className="absolute inset-0 flex flex-col justify-center px-2 lg:px-10"
                    style={{ opacity: op0 }}
                  >
                    <span className="overline text-accent">Chi sono</span>
                    <h2 className="mt-5 max-w-xl font-display text-4xl font-light leading-[1.06] tracking-tight text-ink lg:text-5xl 2xl:text-6xl">
                      Dal primo sopralluogo alla <span className="italic">consegna</span> finale.
                    </h2>
                    <p className="mt-8 max-w-xl font-body text-[0.97rem] leading-relaxed text-ink">
                      Ogni spazio merita di riflettere la tua personalità. Per questo metto al centro
                      l&apos;artigianalità, la cura dei dettagli e la competenza tecnica. Con oltre
                      trent&apos;anni di esperienza ti seguo personalmente in ogni fase, con materiali
                      selezionati e soluzioni su misura che uniscono estetica e funzionalità.
                    </p>
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 flex flex-col justify-center px-2 lg:px-10"
                    style={{ opacity: op1 }}
                  >
                    <p className="max-w-xl font-display text-2xl font-light leading-snug tracking-tight text-ink lg:text-3xl">
                      Non sono il più economico e non sono il più costoso: cerco sempre il giusto
                      equilibrio tra <span className="italic text-accent">qualità e investimento</span>,
                      per creare spazi unici e duraturi.
                    </p>
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 flex flex-col justify-center px-2 lg:px-10"
                    style={{ opacity: op2 }}
                  >
                    <p className="max-w-xl font-body text-[0.97rem] leading-relaxed text-ink">
                      Dalla ristrutturazione di appartamenti e negozi alla manutenzione di stabili, fino
                      a tapparelle e cartongesso: unisco competenza tecnica e sensibilità estetica per
                      trasformare gli spazi in ambienti funzionali e armoniosi.
                    </p>
                    <p className="mt-6 font-display text-xl italic text-ink">— José Giardino, geometra</p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
