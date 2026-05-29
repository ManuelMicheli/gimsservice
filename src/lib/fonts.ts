import { Fraunces, Space_Mono } from "next/font/google";

// Body / descrizioni / etichette → Space Mono (mono tecnico, forme geometriche
// distintive in stile "fax/tecnico"). Sostituisce Faxfont Fine.
// Space Mono ha il glifo "€": nessun fallback speciale necessario.
export const bodyMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

// Display / titoli → Fraunces (serif elegante variabile).
export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});
