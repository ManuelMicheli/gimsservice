import { ImageResponse } from "next/og";

// Favicon / logo generato dinamicamente. Monogramma "G" su fondo scuro brand.
export const size = { width: 256, height: 256 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#16140f",
          color: "#8a5a36",
          fontSize: 180,
          fontWeight: 500,
          fontFamily: "Georgia, serif",
        }}
      >
        G
      </div>
    ),
    size
  );
}
