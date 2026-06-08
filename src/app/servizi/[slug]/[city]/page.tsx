import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICE_SLUGS, getServicePage } from "@/lib/services-content";
import { CITY_SLUGS, getCity, cityServiceFaq } from "@/lib/cities";
import { buildCityServiceJsonLd, SITE_URL } from "@/lib/seo";
import CityServicePageView from "@/components/service/CityServicePageView";

// Pre-genera tutte le combinazioni servizio × città a build time.
export function generateStaticParams() {
  return SERVICE_SLUGS.flatMap((slug) =>
    CITY_SLUGS.map((city) => ({ slug, city }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}): Promise<Metadata> {
  const { slug, city: citySlug } = await params;
  const page = getServicePage(slug);
  const city = getCity(citySlug);
  if (!page || !city) return {};

  const url = `${SITE_URL}/servizi/${page.slug}/${city.slug}`;
  const title = `${page.serviceType} a ${city.name} (${city.province})`;
  const description = `${page.serviceType} a ${city.name} e dintorni: ${page.lead} Sopralluogo e preventivo gratuiti — G.I.M.S. Service, Bareggio.`;

  return {
    title,
    description,
    keywords: [
      `${page.serviceType.toLowerCase()} ${city.name}`,
      `${page.slug.replace(/-/g, " ")} ${city.name}`,
      ...page.keywords.map((k) => `${k} ${city.name}`).slice(0, 3),
    ],
    alternates: { canonical: `/servizi/${page.slug}/${city.slug}` },
    openGraph: {
      type: "article",
      locale: "it_IT",
      url,
      title: `${title} — G.I.M.S. Service`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — G.I.M.S. Service`,
      description,
    },
  };
}

export default async function CityServiceRoute({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}) {
  const { slug, city: citySlug } = await params;
  const page = getServicePage(slug);
  const city = getCity(citySlug);
  if (!page || !city) notFound();

  const jsonLd = buildCityServiceJsonLd(page, city, cityServiceFaq(page, city));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CityServicePageView page={page} city={city} />
    </>
  );
}
