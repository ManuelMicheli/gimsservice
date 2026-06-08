"use client";

import { motion } from "framer-motion";
import SmartImage from "@/components/ui/SmartImage";

const ease = [0.16, 1, 0.3, 1] as const;

// B · Cover Portrait — foto full-bleed con overline+headline overlay, testo sotto su off-white.
export default function ManifestoMobileB() {
  return (
    <section className="bg-bg">
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <SmartImage imgKey="manifesto" alt="José Giardino al lavoro" sizes="390px" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <motion.div
          className="absolute inset-x-5 bottom-7"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="overline !text-bg/80">Chi sono</span>
          <h2 className="mt-3 font-display text-[2.3rem] font-light leading-[1.06] tracking-tight text-bg">
            Dal primo sopralluogo alla <span className="italic">consegna</span> finale.
          </h2>
        </motion.div>
      </div>

      <div className="px-5 py-12">
        <div className="space-y-5 font-body text-[0.9rem] leading-relaxed text-ink">
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
          <p className="pt-1 font-display text-xl italic text-accent">— José Giardino</p>
        </div>
      </div>
    </section>
  );
}
