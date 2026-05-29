import type { Metadata, Viewport } from "next";
import { bodyMono, fraunces } from "@/lib/fonts";
import { SITE } from "@/lib/site";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Preloader from "@/components/layout/Preloader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gims-service.it"),
  title: {
    default:
      "G.I.M.S. Service — Imbiancatura, ristrutturazioni e finiture a Bareggio (MI)",
    template: "%s — G.I.M.S. Service",
  },
  description:
    "Oltre 30 anni di esperienza in imbiancatura, decorazioni, cartongesso, pavimenti, ristrutturazione bagni e tapparelle. Artigiano edile a Bareggio (MI) — un solo referente, dal sopralluogo alla consegna.",
  keywords: [
    "imbiancatura Bareggio",
    "ristrutturazioni Bareggio",
    "cartongesso Milano",
    "spatolato veneziano",
    "ristrutturazione bagni",
    "artigiano edile Bareggio",
  ],
  authors: [{ name: SITE.owner }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: SITE.brand,
    title:
      "G.I.M.S. Service — Imbiancatura, ristrutturazioni e finiture a Bareggio (MI)",
    description:
      "Oltre 30 anni di esperienza in imbiancatura, decorazioni, cartongesso, pavimenti, ristrutturazione bagni e tapparelle.",
    url: "/",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#16140f",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.brand,
  image: "https://www.gims-service.it/og.jpg",
  description:
    "Impresa artigiana edile: imbiancatura, decorazioni, spatolati, cartongesso, pavimenti, ristrutturazione bagni, tapparelle, manutenzione stabili.",
  telephone: "+39 347 800 4971",
  email: SITE.email,
  url: "https://www.gims-service.it",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Primo Maggio, 21",
    postalCode: "20008",
    addressLocality: "Bareggio",
    addressRegion: "MI",
    addressCountry: "IT",
  },
  geo: { "@type": "GeoCoordinates", latitude: 45.4767, longitude: 8.9938 },
  areaServed: [
    "Bareggio",
    "Milano",
    "Binasco",
    "Sesto San Giovanni",
    "Ovest milanese",
  ],
  founder: { "@type": "Person", name: SITE.owner },
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${fraunces.variable} ${bodyMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Preloader />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
