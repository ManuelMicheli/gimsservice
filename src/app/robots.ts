import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// /robots.txt generato da Next. Indicizza tutto tranne la sandbox interna.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/sandbox", "/sandbox/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
