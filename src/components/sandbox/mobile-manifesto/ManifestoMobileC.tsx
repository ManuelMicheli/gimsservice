"use client";

import { motion } from "framer-motion";
import SmartImage from "@/components/ui/SmartImage";

const ease = [0.16, 1, 0.3, 1] as const;

// C · Text-First + Framed Photo — titolo in apertura, foto con cornice accent offset, firma grande.
export default function ManifestoMobileC() {
  return (
    <section className="bg-bg px-5 py-16">
      <span className="overline text-accent">Chi sono</span>
      <h2 className="mt-4 font-display text-[2.3rem] font-light leading-[1.06] tracking-tight text-ink">
        Dal primo sopralluogo alla <span className="italic">consegna</span> finale.
      </h2>

      {/* foto con cornice accent offset */}
      <motion.div
        className="relative mt-10 pl-4 pt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-8% 0px" }}
        transition={{ duration: 0.7, ease }}
      >
        <div className="absolute inset-0 left-0 top-0 mr-4 mb-4 border border-accent" />
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
          <SmartImage imgKey="manifesto" alt="José Giardino al lavoro" sizes="390px" />
        </div>
      </motion.div>

      <div className="mt-10 space-y-5 font-body text-[0.9rem] leading-relaxed text-ink">
        <p>
          Ogni spazio merita di riflettere la tua personalità. Per questo metto al centro
          l&apos;artigianalità, la cura dei dettagli e la competenza tecnica. Con oltre
          trent&apos;anni di esperienza ti seguo personalmente in ogni fase, con materiali
          selezionati e soluzioni su misura.
        </p>
        <p>
          Non sono il più economico e non sono il più costoso: cerco sempre il giusto
          equilibrio tra qualità e investimento, per creare spazi unici e duraturi.
        </p>
      </div>

      <p className="mt-8 border-t border-line pt-6 font-display text-2xl italic text-ink">
        — José Giardino
      </p>
    </section>
  );
}
