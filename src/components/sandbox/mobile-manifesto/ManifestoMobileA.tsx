"use client";

import { motion } from "framer-motion";
import SmartImage from "@/components/ui/SmartImage";

const ease = [0.16, 1, 0.3, 1] as const;

// A · Stacked Editorial — foto in alto, testo sotto. Pulito, naturale per mobile.
export default function ManifestoMobileA() {
  return (
    <section className="bg-bg px-5 py-16">
      <motion.div
        className="relative aspect-[4/5] w-full overflow-hidden rounded-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-8% 0px" }}
        transition={{ duration: 0.7, ease }}
      >
        <SmartImage imgKey="manifesto" alt="José Giardino al lavoro" sizes="390px" />
      </motion.div>

      <div className="mt-10">
        <span className="overline text-accent">Chi sono</span>
        <h2 className="mt-4 font-display text-[2.2rem] font-light leading-[1.08] tracking-tight text-ink">
          Dal primo sopralluogo alla <span className="italic">consegna</span> finale.
        </h2>

        <div className="mt-7 space-y-5 font-body text-[0.9rem] leading-relaxed text-ink">
          <p>
            Ogni spazio merita di riflettere la tua personalità. Per questo metto al
            centro l&apos;artigianalità, la cura dei dettagli e la competenza tecnica. Con
            oltre trent&apos;anni di esperienza ti seguo personalmente in ogni fase, con
            materiali selezionati e soluzioni su misura.
          </p>
          <p>
            Non sono il più economico e non sono il più costoso: cerco sempre il giusto
            equilibrio tra qualità e investimento, per creare spazi unici e duraturi.
          </p>
          <p className="pt-1 font-display text-xl italic text-ink">— José Giardino</p>
        </div>
      </div>
    </section>
  );
}
