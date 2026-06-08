import { ImageResponse } from "next/og";
import { SERVICE_SLUGS, getServicePage } from "@/lib/services-content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "G.I.M.S. Service — Bareggio (MI)";

// Una card OG per ogni servizio, pre-generata a build time.
export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getServicePage(slug);
  const title = page?.serviceType ?? "G.I.M.S. Service";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#16140f",
          color: "#f4f1ec",
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#8a5a36",
            display: "flex",
          }}
        >
          G.I.M.S. Service
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: 72, lineHeight: 1.05 }}>{title}</div>
          <div
            style={{
              marginTop: "16px",
              fontSize: 32,
              color: "#bdb6a8",
              fontFamily: "monospace",
              display: "flex",
            }}
          >
            Bareggio (MI) · Ovest milanese · Preventivo gratuito
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(244,241,236,0.2)",
            paddingTop: "28px",
            fontSize: 26,
            fontFamily: "monospace",
            color: "#bdb6a8",
            display: "flex",
          }}
        >
          www.gims-service.it
        </div>
      </div>
    ),
    size
  );
}
