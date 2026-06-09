import { Fraunces, Space_Mono } from "next/font/google";

// Body / descrizioni / etichette → Space Mono (mono tecnico, forme geometriche
// distintive in stile "fax/tecnico"). Sostituisce Faxfont Fine.
// Space Mono ha il glifo "€": nessun fallback speciale necessario.
export const bodyMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--font-body",
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

// Display / titoli → Fraunces (serif elegante). Pesi effettivamente usati: 300/400.
// display:"optional" → niente swap: l'H1 (elemento LCP) dipinge subito nel
// fallback metric-compatibile (LCP ≈ FCP, zero CLS da font). Su connessioni
// normali Fraunces fa comunque in tempo; solo il primo load lentissimo vede il fallback.
export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "optional",
});
