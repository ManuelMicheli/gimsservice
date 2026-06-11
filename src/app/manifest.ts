import type { MetadataRoute } from "next";

// PWA manifest. Migliora installabilità e segnali mobile.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "G.I.M.S. Service — Imbianchino e Ristrutturazioni a Bareggio",
    short_name: "GIMS Service",
    description:
      "Imbianchino e artigiano edile a Bareggio (MI): imbiancatura, decorazioni, cartongesso, pavimenti e tapparelle.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f1ec",
    theme_color: "#16140f",
    lang: "it-IT",
    categories: ["business", "home improvement", "construction"],
    icons: [
      { src: "/icon", sizes: "512x512", type: "image/png" },
    ],
  };
}
