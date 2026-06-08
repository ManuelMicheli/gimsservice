import type { Metadata, Viewport } from "next";
import { bodyMono, fraunces } from "@/lib/fonts";
import { SITE } from "@/lib/site";
import {
  SITE_URL,
  META_TITLE,
  META_DESCRIPTION,
  KEYWORDS,
  buildJsonLd,
} from "@/lib/seo";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Preloader from "@/components/layout/Preloader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: META_TITLE,
    template: "%s — G.I.M.S. Service",
  },
  description: META_DESCRIPTION,
  keywords: [...KEYWORDS],
  applicationName: SITE.brand,
  authors: [{ name: SITE.owner }],
  creator: SITE.owner,
  publisher: SITE.brand,
  category: "Construction & Home Improvement",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: SITE.brand,
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "/",
    // L'immagine è generata da app/opengraph-image.tsx (auto-collegata da Next).
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Inserire i codici quando disponibili (Google Search Console, Bing).
  // verification: { google: "...", other: { "msvalidate.01": "..." } },
};

export const viewport: Viewport = {
  themeColor: "#16140f",
};

const jsonLd = buildJsonLd();

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
