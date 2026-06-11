import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { SERVICE_SLUGS } from "@/lib/services-content";
import { CITY_SLUGS } from "@/lib/cities";

// Sitemap: home + indice servizi + ogni pagina servizio + ogni servizio×città.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/servizi`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...SERVICE_SLUGS.map((slug) => ({
      url: `${SITE_URL}/servizi/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...SERVICE_SLUGS.flatMap((slug) =>
      CITY_SLUGS.map((city) => ({
        url: `${SITE_URL}/servizi/${slug}/${city}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }))
    ),
    {
      url: `${SITE_URL}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/cookie`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
