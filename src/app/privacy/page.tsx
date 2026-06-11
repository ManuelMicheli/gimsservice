import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Footer from "@/components/layout/Footer";
import SubPageHeader from "@/components/layout/SubPageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Informativa sul trattamento dei dati personali ai sensi del Regolamento (UE) 2016/679 (GDPR) — G.I.M.S. Service, Bareggio (MI).",
  alternates: { canonical: "/privacy" },
};

const SECTIONS = [
  {
    title: "Titolare del trattamento",
    body: [
      `${SITE.brand} di ${SITE.owner} — ${SITE.address}. Contatti: ${SITE.phoneDisplay}, ${SITE.email}.`,
    ],
  },
  {
    title: "Dati trattati e finalità",
    body: [
      "Tramite il form contatti raccogliamo: nome, email, telefono (facoltativo) e il contenuto del messaggio. Questi dati sono usati esclusivamente per rispondere alla tua richiesta e organizzare sopralluoghi o preventivi.",
      "La base giuridica del trattamento è l'esecuzione di misure precontrattuali adottate su tua richiesta (art. 6.1.b GDPR) e il consenso espresso con la spunta nel form (art. 6.1.a GDPR).",
      "Non effettuiamo profilazione, non inviamo newsletter e non cediamo i dati a terzi per finalità di marketing.",
    ],
  },
  {
    title: "Conservazione",
    body: [
      "I dati delle richieste sono conservati per il tempo necessario a gestire la richiesta e gli eventuali rapporti contrattuali che ne derivano, e comunque non oltre i termini di legge.",
    ],
  },
  {
    title: "Destinatari e trasferimenti",
    body: [
      "Il sito è ospitato su infrastruttura di hosting (Vercel Inc.); i dati tecnici di navigazione possono transitare su server situati anche al di fuori dell'UE, con le garanzie previste dagli artt. 44 e ss. GDPR (clausole contrattuali standard).",
    ],
  },
  {
    title: "I tuoi diritti",
    body: [
      "Puoi esercitare in qualsiasi momento i diritti previsti dagli artt. 15-22 GDPR: accesso, rettifica, cancellazione, limitazione, opposizione e portabilità dei dati.",
      `Per esercitarli scrivi a ${SITE.email}. Hai inoltre diritto di proporre reclamo al Garante per la Protezione dei Dati Personali (www.garanteprivacy.it).`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <SubPageHeader />

      <main id="top">
        <nav aria-label="Breadcrumb" className="shell pt-8">
          <ol className="flex items-center gap-2 font-body text-[0.72rem] uppercase tracking-[0.12em] text-muted">
            <li><Link href="/" className="hover:text-ink">Home</Link></li>
            <li aria-hidden>/</li>
            <li className="text-ink">Privacy Policy</li>
          </ol>
        </nav>

        <section className="shell py-12 md:py-20">
          <span className="overline text-accent">Informativa</span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-light leading-tight text-ink md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-2xl font-body text-sm leading-relaxed text-muted">
            Informativa sul trattamento dei dati personali ai sensi del Regolamento (UE) 2016/679
            (&quot;GDPR&quot;), relativa all&apos;uso di questo sito e del form contatti.
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
              Per informazioni sui cookie consulta la{" "}
              <Link href="/cookie" className="link-underline text-ink">Cookie Policy</Link>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
