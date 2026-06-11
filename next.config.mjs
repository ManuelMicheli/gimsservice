/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Tree-shaking mirato sui barrel import pesanti (framer-motion) → meno JS.
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  // Servizio "ristrutturazione bagni" dismesso: redirect permanente per le URL già indicizzate.
  async redirects() {
    return [
      { source: "/servizi/ristrutturazione-bagni", destination: "/servizi", permanent: true },
      { source: "/servizi/ristrutturazione-bagni/:city", destination: "/servizi", permanent: true },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // Cache lunga sulle immagini ottimizzate (1 anno).
    minimumCacheTTL: 31536000,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
};

export default nextConfig;
