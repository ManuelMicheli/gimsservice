import Reveal from "@/components/ui/Reveal";

/**
 * Partner di fiducia — solo claim, centrato, sfondo coerente col resto del sito.
 */
export default function Partners() {
  return (
    <section className="shell py-20 md:py-32">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="font-display text-2xl font-light leading-snug tracking-tight text-ink md:text-4xl">
          Collaboro con aziende selezionate del territorio che condividono i miei valori di
          professionalità e attenzione ai dettagli. Per impianti elettrici, serramenti, sistemi
          di condizionamento e impianti idraulici mi avvalgo di partner qualificati, così da
          offrirti un servizio completo e coordinato — con un unico referente:{" "}
          <span className="italic text-accent">io</span>.
        </p>
      </Reveal>
    </section>
  );
}
