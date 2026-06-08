import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  SERVICE_SLUGS,
  getServicePage,
} from "@/lib/services-content";
import { buildServiceJsonLd, SITE_URL } from "@/lib/seo";
import ServicePageView from "@/components/service/ServicePageView";

// Pre-genera tutte le pagine servizio a build time (static).
export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};

  const url = `${SITE_URL}/servizi/${page.slug}`;
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: `/servizi/${page.slug}` },
    openGraph: {
      type: "article",
      locale: "it_IT",
      url,
      title: page.metaTitle,
      description: page.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

export default async function ServiceRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();

  const jsonLd = buildServiceJsonLd(page);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageView page={page} />
    </>
  );
}
