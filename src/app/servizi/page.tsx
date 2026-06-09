import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/seo";
import { SERVICE_PAGES } from "@/lib/services-content";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";
import Footer from "@/components/layout/Footer";
import SubPageHeader from "@/components/layout/SubPageHeader";

export const metadata: Metadata = {
  title: "Servizi — Imbianchino, decorazioni e ristrutturazioni a Bareggio",
  description:
    "Tutti i servizi di G.I.M.S. Service a Bareggio e ovest milanese: imbiancatura, decorazioni, spatolato veneziano, cartongesso, pavimenti, ristrutturazione bagni, tapparelle e manutenzione stabili.",
  alternates: { canonical: "/servizi" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: `${SITE_URL}/servizi`,
    title: "Servizi — G.I.M.S. Service, Bareggio (MI)",
    description:
      "Imbiancatura, decorazioni, spatolato, cartongesso, pavimenti, ristrutturazione bagni, tapparelle e manutenzione stabili nell'ovest milanese.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/servizi#webpage`,
  url: `${SITE_URL}/servizi`,
  name: "Servizi G.I.M.S. Service",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  inLanguage: "it-IT",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Servizi", item: `${SITE_URL}/servizi` },
    ],
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: SERVICE_PAGES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.serviceType,
      url: `${SITE_URL}/servizi/${s.slug}`,
    })),
  },
};

export default function ServiziIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SubPageHeader />

      <main id="top">
        <nav aria-label="Breadcrumb" className="shell pt-8">
          <ol className="flex items-center gap-2 font-body text-[0.72rem] uppercase tracking-[0.12em] text-muted">
            <li><Link href="/" className="hover:text-ink">Home</Link></li>
            <li aria-hidden>/</li>
            <li className="text-ink">Servizi</li>
          </ol>
        </nav>

        <section className="shell py-12 md:py-20">
          <Reveal>
            <span className="overline text-accent">I nostri servizi</span>
            <h1 className="mt-5 max-w-3xl font-display text-[2.2rem] font-light leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Imbianchino, decorazioni e ristrutturazioni a Bareggio
            </h1>
            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-muted">
              Oltre trent&apos;anni di esperienza al servizio di case e stabili nell&apos;ovest milanese.
              Un solo referente, dal sopralluogo alla consegna. Scegli il servizio per i dettagli.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_PAGES.map((s) => (
              <Link
                key={s.slug}
                href={`/servizi/${s.slug}`}
                className="group flex flex-col overflow-hidden rounded-sm border border-line bg-bg transition-colors hover:bg-surface"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <SmartImage
                    imgKey={s.imgKey}
                    alt={`${s.serviceType} — G.I.M.S. Service, Bareggio`}
                    label={s.serviceType}
                    sizes="(max-width:640px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-xl font-normal text-ink transition-colors group-hover:text-accent">
                    {s.serviceType}
                  </h2>
                  <p className="mt-2 flex-1 font-body text-[0.82rem] leading-relaxed text-muted">{s.lead}</p>
                  <span className="mt-5 font-body text-[0.72rem] uppercase tracking-[0.14em] text-accent">
                    Scopri →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
