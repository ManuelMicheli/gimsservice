import { ImageResponse } from "next/og";

// OG/social card generata dinamicamente (1200×630). Nessun file statico da mantenere.
export const alt =
  "G.I.M.S. Service — Imbianchino e ristrutturazioni a Bareggio (MI)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: 30,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#8a5a36",
          }}
        >
          G.I.M.S. Service
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: 78, lineHeight: 1.05, fontWeight: 400 }}>
            Imbianchino, decorazioni
          </div>
          <div style={{ fontSize: 78, lineHeight: 1.05, fontWeight: 400 }}>
            e ristrutturazioni
          </div>
          <div
            style={{
              marginTop: "20px",
              fontSize: 34,
              color: "#bdb6a8",
              fontFamily: "monospace",
            }}
          >
            Bareggio (MI) · Ovest milanese · 30+ anni di esperienza
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(244,241,236,0.2)",
            paddingTop: "28px",
            fontSize: 26,
            fontFamily: "monospace",
            color: "#bdb6a8",
          }}
        >
          <span>www.gims-service.it</span>
          <span>Preventivo gratuito</span>
        </div>
      </div>
    ),
    size
  );
}
