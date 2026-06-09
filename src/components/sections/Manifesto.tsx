import SmartImage from "@/components/ui/SmartImage";
import ManifestoScroll from "@/components/sections/ManifestoScroll";

// Le 3 immagini che la foto sticky attraversa scorrendo (desktop).
const STICKY_IMAGES: { key: string; src?: string; alt: string }[] = [
  { key: "chi-siamo", src: "/images/chi-siamo.png", alt: "Soggiorno finito con finiture su misura" },
  { key: "g-manutenzione", alt: "Manutenzione stabili — intervento su parti comuni" },
  { key: "bagno", alt: "Ambiente finito — risultato consegnato chiavi in mano" },
];

// Server component: markup statico (no hydration). Lo sticky-scroll (desktop
// orizzontale + mobile verticale) è guidato da <ManifestoScroll> (client sottile).
export default function Manifesto() {
  return (
    <section id="manifesto" className="py-24 md:py-32">
      <ManifestoScroll>
      {/* ===== MOBILE — Sticky Scroll verticale: testo↕foto si scambiano (alto↔basso) + 3 immagini/frasi in cross-fade ===== */}
      <div data-manifesto data-axis="y" className="md:hidden">
        <div className="relative h-[300vh]">
          <div className="sticky top-[8vh] h-[84vh]">
            <div className="relative h-full px-5">
              {/* TESTO — metà altezza, parte in alto, scivola in basso e torna. 3 capitoli in cross-fade. */}
              <div
                data-text
                className="absolute inset-x-0 top-0 h-1/2 will-change-transform"
                style={{ transform: "translateY(0%)" }}
              >
                <div data-txt-op className="absolute inset-0 flex flex-col justify-center" style={{ opacity: 1 }}>
                  <span className="overline text-accent">Chi sono</span>
                  <h2 className="mt-3 font-display text-[2rem] font-light leading-[1.08] tracking-tight text-ink">
                    Dal primo sopralluogo alla <span className="italic">consegna</span> finale.
                  </h2>
                  <p className="mt-4 font-body text-[0.88rem] leading-relaxed text-ink">
                    Ogni spazio merita di riflettere la tua personalità. Per questo metto al centro
                    l&apos;artigianalità, la cura dei dettagli e la competenza tecnica. Con oltre
                    trent&apos;anni di esperienza ti seguo personalmente in ogni fase.
                  </p>
                </div>

                <div data-txt-op className="absolute inset-0 flex flex-col justify-center" style={{ opacity: 0 }}>
                  <p className="font-display text-[1.45rem] font-light leading-snug tracking-tight text-ink">
                    Non sono il più economico e non sono il più costoso: cerco sempre il giusto
                    equilibrio tra <span className="italic text-accent">qualità e investimento</span>,
                    per creare spazi unici e duraturi.
                  </p>
                </div>

                <div data-txt-op className="absolute inset-0 flex flex-col justify-center" style={{ opacity: 0 }}>
                  <p className="font-body text-[0.88rem] leading-relaxed text-ink">
                    Dalla ristrutturazione di appartamenti e negozi alla manutenzione di stabili, fino
                    a tapparelle e cartongesso: unisco competenza tecnica e sensibilità estetica.
                  </p>
                  <p className="mt-4 font-display text-xl italic text-accent">— José Giardino, geometra</p>
                </div>
              </div>

              {/* IMMAGINE — metà altezza, parte in basso, scivola in alto e torna. Cross-fade tra le 3. */}
              <div
                data-image
                className="absolute inset-x-0 top-0 h-1/2 overflow-hidden rounded-sm bg-line will-change-transform"
                style={{ transform: "translateY(100%)" }}
              >
                {STICKY_IMAGES.map((img, idx) => (
                  <div
                    key={img.key}
                    data-img-op
                    className="absolute inset-0"
                    style={{ opacity: idx === 0 ? 1 : 0 }}
                  >
                    <SmartImage
                      imgKey={img.key}
                      src={img.src}
                      alt={img.alt}
                      label="Manifesto — dettaglio artigiano"
                      sizes="100vw"
                    />
                  </div>
                ))}

                {/* Indicatore step in basso */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/55 to-transparent px-5 pb-4 pt-14">
                  <span className="font-body text-[0.66rem] uppercase tracking-[0.22em] text-bg/80">
                    Chi sono
                  </span>
                  <span className="font-body text-[0.66rem] uppercase tracking-[0.22em] text-bg/80">
                    01 — 03
                  </span>
                </div>
                <div className="absolute inset-x-5 bottom-[2.6rem] h-px bg-bg/25">
                  <span
                    data-dot
                    className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent"
                    style={{ left: "0%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== DESKTOP — Sticky Scroll: foto e testo scivolano in opposizione ===== */}
        <div data-manifesto className="hidden md:block">
          <div className="relative h-[300vh]">
            <div className="sticky top-[14vh] h-[72vh]">
              <div className="shell h-full">
                <div className="relative h-full">
                  {/* IMMAGINE — metà larghezza, scivola sx↔dx */}
                  <div
                    data-image
                    className="absolute left-0 top-0 h-full w-1/2 overflow-hidden rounded-sm bg-line will-change-transform"
                  >
                    {STICKY_IMAGES.map((img, idx) => (
                      <div
                        key={img.key}
                        data-img-op
                        className="absolute inset-0"
                        style={{ opacity: idx === 0 ? 1 : 0 }}
                      >
                        <SmartImage
                          imgKey={img.key}
                          src={img.src}
                          alt={img.alt}
                          label="Manifesto — dettaglio artigiano"
                          sizes="(max-width: 768px) 100vw, 42vw"
                        />
                      </div>
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
                      <span
                        data-dot
                        className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent"
                        style={{ left: "0%" }}
                      />
                    </div>
                  </div>

                  {/* TESTO — metà larghezza, scivola opposto all'immagine. 3 capitoli in cross-fade. */}
                  <div
                    data-text
                    className="absolute left-0 top-0 h-full w-1/2 will-change-transform"
                    style={{ transform: "translateX(100%)" }}
                  >
                    <div data-txt-op className="absolute inset-0 flex flex-col justify-center px-2 lg:px-10" style={{ opacity: 1 }}>
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
                    </div>

                    <div data-txt-op className="absolute inset-0 flex flex-col justify-center px-2 lg:px-10" style={{ opacity: 0 }}>
                      <p className="max-w-xl font-display text-2xl font-light leading-snug tracking-tight text-ink lg:text-3xl">
                        Non sono il più economico e non sono il più costoso: cerco sempre il giusto
                        equilibrio tra <span className="italic text-accent">qualità e investimento</span>,
                        per creare spazi unici e duraturi.
                      </p>
                    </div>

                    <div data-txt-op className="absolute inset-0 flex flex-col justify-center px-2 lg:px-10" style={{ opacity: 0 }}>
                      <p className="max-w-xl font-body text-[0.97rem] leading-relaxed text-ink">
                        Dalla ristrutturazione di appartamenti e negozi alla manutenzione di stabili, fino
                        a tapparelle e cartongesso: unisco competenza tecnica e sensibilità estetica per
                        trasformare gli spazi in ambienti funzionali e armoniosi.
                      </p>
                      <p className="mt-6 font-display text-xl italic text-ink">— José Giardino, geometra</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ManifestoScroll>
    </section>
  );
}
