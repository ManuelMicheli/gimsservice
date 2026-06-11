import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Footer from "@/components/layout/Footer";
import SubPageHeader from "@/components/layout/SubPageHeader";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Informativa sull'uso dei cookie di questo sito — G.I.M.S. Service, Bareggio (MI).",
  alternates: { canonical: "/cookie" },
};

const SECTIONS = [
  {
    title: "Cosa sono i cookie",
    body: [
      "I cookie sono piccoli file di testo che i siti salvano sul tuo dispositivo per ricordare informazioni sulla navigazione.",
    ],
  },
  {
    title: "Cookie usati da questo sito",
    body: [
      "Questo sito non usa cookie di profilazione né strumenti di analisi che richiedano consenso preventivo: nessun banner è quindi necessario.",
      "Possono essere usati esclusivamente cookie tecnici strettamente necessari al funzionamento del sito, che non richiedono consenso ai sensi della normativa vigente.",
    ],
  },
  {
    title: "Cookie di terze parti",
    body: [
      "La pagina include una mappa incorporata di Google Maps (Google Ireland Ltd.). Interagendo con la mappa, Google può installare propri cookie secondo la sua informativa: policies.google.com/privacy.",
    ],
  },
  {
    title: "Come gestire i cookie",
    body: [
      "Puoi bloccare o eliminare i cookie in qualsiasi momento dalle impostazioni del tuo browser. La disattivazione dei cookie tecnici può compromettere alcune funzioni del sito.",
    ],
  },
];

export default function CookiePage() {
  return (
    <>
      <SubPageHeader />

      <main id="top">
        <nav aria-label="Breadcrumb" className="shell pt-8">
          <ol className="flex items-center gap-2 font-body text-[0.72rem] uppercase tracking-[0.12em] text-muted">
            <li><Link href="/" className="hover:text-ink">Home</Link></li>
            <li aria-hidden>/</li>
            <li className="text-ink">Cookie Policy</li>
          </ol>
        </nav>

        <section className="shell py-12 md:py-20">
          <span className="overline text-accent">Informativa</span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-light leading-tight text-ink md:text-6xl">
            Cookie Policy
          </h1>
          <p className="mt-6 max-w-2xl font-body text-sm leading-relaxed text-muted">
            Informativa sull&apos;uso dei cookie su questo sito, gestito da {SITE.brand} di{" "}
            {SITE.owner}.
          </p>

          <div className="mt-12 max-w-2xl space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.title} className="border-t border-line pt-6">
                <h2 className="font-display text-2xl font-light text-ink">{s.title}</h2>
                {s.body.map((p, i) => (
                  <p key={i} className="mt-3 font-body text-sm leading-relaxed text-muted">
                    {p}
                  </p>
                ))}
              </div>
            ))}
            <p className="border-t border-line pt-6 font-body text-[0.78rem] text-muted">
              Per il trattamento dei dati personali consulta la{" "}
              <Link href="/privacy" className="link-underline text-ink">Privacy Policy</Link>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
