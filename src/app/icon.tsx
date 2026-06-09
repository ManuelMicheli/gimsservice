import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

// Favicon / app icon: logo reale G.I.M.S. Service centrato su fondo brand.
export const size = { width: 256, height: 256 };
export const contentType = "image/png";

export default async function Icon() {
  const data = await readFile(join(process.cwd(), "public/logo.png"));
  const src = `data:image/png;base64,${data.toString("base64")}`;

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
          padding: 18,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={220} height={148} alt="G.I.M.S. Service" />
      </div>
    ),
    size
  );
}
