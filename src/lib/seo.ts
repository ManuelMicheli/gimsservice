// SEO centralizzato: URL canonico, parole chiave, dati strutturati (JSON-LD @graph).
// Unica fonte di verità per metadata + structured data.

import {
  SITE,
  SERVICES,
  FAQ_TEASER,
  TESTIMONIALS,
} from "@/lib/site";
import type { ServicePage } from "@/lib/services-content";
import type { City } from "@/lib/cities";

/** URL canonico del sito (senza slash finale). */
export const SITE_URL = "https://www.gims-service.it";

/** Coordinate sede (Bareggio, MI). */
export const GEO = { latitude: 45.4767, longitude: 8.9938 } as const;

/** Numero di telefono in formato E.164 (per tel: e schema.org). */
export const PHONE_E164 = "+393478004971";

/**
 * Comuni serviti — usati sia in areaServed (schema) sia come segnali locali.
 * Ovest milanese + hinterland: massima copertura per ricerche "servizio + città".
 */
export const AREA_SERVED = [
  "Bareggio",
  "Cornaredo",
  "Sedriano",
  "Vittuone",
  "Arluno",
  "Pregnana Milanese",
  "Vanzago",
  "Rho",
  "Settimo Milanese",
  "Cusago",
  "Magenta",
  "Abbiategrasso",
  "Corbetta",
  "Milano",
] as const;

/**
 * Parole chiave principali. Mix di:
 * - mestiere generico (imbianchino, piastrellista, ristrutturazioni)
 * - mestiere + località (imbianchino Bareggio, ...)
 * - servizi specifici (spatolato, cartongesso, pavimenti)
 */
export const KEYWORDS = [
  // mestiere generico
  "imbianchino",
  "imbiancatura",
  "piastrellista",
  "posa piastrelle",
  "ristrutturazioni",
  "ristrutturazione casa",
  "ristrutturazione appartamenti",
  "cartongessista",
  "decoratore",
  "artigiano edile",
  "impresa edile",
  // servizi
  "spatolato",
  "decorazioni pareti",
  "cartongesso pareti e controsoffitti",
  "posa pavimenti e rivestimenti",
  "parquet e laminato",
  "tapparelle installazione e riparazione",
  "manutenzione stabili e condomini",
  "tinteggiatura interni ed esterni",
  // mestiere + località (intento locale)
  "imbianchino Bareggio",
  "imbianchino Milano",
  "imbianchino ovest milanese",
  "piastrellista Bareggio",
  "ristrutturazioni Bareggio",
  "ristrutturazioni Milano ovest",
  "cartongesso Milano",
  "imbianchino Cornaredo",
  "imbianchino Sedriano",
  "imbianchino Rho",
] as const;

/** Descrizione meta principale (≤160 char raccomandati per lo snippet). */
export const META_DESCRIPTION =
  "Imbianchino e artigiano edile a Bareggio (MI) con oltre 30 anni di esperienza: imbiancatura, decorazioni, spatolato, cartongesso, posa pavimenti e tapparelle. Un solo referente, dal sopralluogo alla consegna. Preventivo gratuito.";

/** Titolo principale. */
export const META_TITLE =
  "Imbianchino e Ristrutturazioni a Bareggio (MI) — G.I.M.S. Service";

/**
 * Costruisce il grafo JSON-LD completo.
 * Un solo blocco @graph collega tutte le entità tramite @id → migliore comprensione
 * per Google e per i motori AI (rich results, knowledge panel locale).
 */
export function buildJsonLd() {
  const businessId = `${SITE_URL}/#business`;
  const websiteId = `${SITE_URL}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      // ---- Attività locale (entità principale) ----
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "GeneralContractor"],
        "@id": businessId,
        name: SITE.brand,
        alternateName: SITE.shortBrand,
        url: SITE_URL,
        image: `${SITE_URL}/opengraph-image`,
        logo: `${SITE_URL}/icon`,
        description: META_DESCRIPTION,
        telephone: PHONE_E164,
        email: SITE.email,
        priceRange: "€€",
        currenciesAccepted: "EUR",
        paymentAccepted: "Contanti, Bonifico bancario",
        slogan: "Un solo artigiano, dal sopralluogo alla consegna.",
        knowsLanguage: "it",
        founder: { "@type": "Person", name: SITE.owner },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Via Primo Maggio, 21",
          postalCode: "20008",
          addressLocality: "Bareggio",
          addressRegion: "MI",
          addressCountry: "IT",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: GEO.latitude,
          longitude: GEO.longitude,
        },
        hasMap: SITE.mapsUrl,
        areaServed: AREA_SERVED.map((name) => ({
          "@type": "City",
          name,
        })),
        // Orari indicativi — DA CONFERMARE con il cliente.
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "08:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "08:00",
            closes: "13:00",
          },
        ],
        // Catalogo servizi → ogni voce è un Service indicizzabile.
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servizi G.I.M.S. Service",
          itemListElement: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.desc,
              serviceType: s.title,
              provider: { "@id": businessId },
              areaServed: AREA_SERVED.map((name) => ({ "@type": "City", name })),
            },
          })),
        },
        // Recensioni reali (testimonianze clienti).
        review: TESTIMONIALS.map((t) => ({
          "@type": "Review",
          author: { "@type": "Person", name: t.name },
          reviewBody: t.text,
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
            worstRating: "1",
          },
        })),
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: String(TESTIMONIALS.length),
          bestRating: "5",
          worstRating: "1",
        },
      },

      // ---- Sito web ----
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: SITE.brand,
        inLanguage: "it-IT",
        publisher: { "@id": businessId },
      },

      // ---- Pagina principale + breadcrumb ----
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: META_TITLE,
        description: META_DESCRIPTION,
        isPartOf: { "@id": websiteId },
        about: { "@id": businessId },
        inLanguage: "it-IT",
        breadcrumb: { "@id": `${SITE_URL}/#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Servizi",
            item: `${SITE_URL}/#servizi`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Area servita",
            item: `${SITE_URL}/#area`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Contatti",
            item: `${SITE_URL}/#contatti`,
          },
        ],
      },

      // ---- FAQ (rich result "Domande frequenti") ----
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: FAQ_TEASER.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

/**
 * Grafo JSON-LD per una pagina servizio dedicata (/servizi/<slug>).
 * Service collegato al LocalBusiness (provider) + Breadcrumb + FAQ specifiche.
 */
export function buildServiceJsonLd(page: ServicePage) {
  const businessId = `${SITE_URL}/#business`;
  const url = `${SITE_URL}/servizi/${page.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.serviceType,
        serviceType: page.serviceType,
        description: page.metaDescription,
        url,
        image: `${SITE_URL}/servizi/${page.slug}/opengraph-image`,
        provider: { "@id": businessId },
        areaServed: AREA_SERVED.map((name) => ({ "@type": "City", name })),
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.metaTitle,
        description: page.metaDescription,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${url}#service` },
        inLanguage: "it-IT",
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Servizi", item: `${SITE_URL}/servizi` },
          { "@type": "ListItem", position: 3, name: page.serviceType, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: page.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

/**
 * Grafo JSON-LD per una pagina servizio×città (/servizi/<slug>/<city>).
 * Service con areaServed = singolo comune + Breadcrumb a 4 livelli + FAQ locale.
 */
export function buildCityServiceJsonLd(
  page: ServicePage,
  city: City,
  faq: { q: string; a: string }[]
) {
  const businessId = `${SITE_URL}/#business`;
  const url = `${SITE_URL}/servizi/${page.slug}/${city.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `${page.serviceType} a ${city.name}`,
        serviceType: page.serviceType,
        description: `${page.serviceType} a ${city.name} (${city.province}): ${page.metaDescription}`,
        url,
        provider: { "@id": businessId },
        areaServed: {
          "@type": "City",
          name: city.name,
          address: {
            "@type": "PostalAddress",
            addressLocality: city.name,
            postalCode: city.cap,
            addressRegion: city.province,
            addressCountry: "IT",
          },
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${page.serviceType} a ${city.name} — G.I.M.S. Service`,
        description: `${page.serviceType} a ${city.name} e dintorni.`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${url}#service` },
        inLanguage: "it-IT",
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Servizi", item: `${SITE_URL}/servizi` },
          { "@type": "ListItem", position: 3, name: page.serviceType, item: `${SITE_URL}/servizi/${page.slug}` },
          { "@type": "ListItem", position: 4, name: city.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}
