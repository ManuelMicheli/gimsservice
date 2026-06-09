import Image from "next/image";

/**
 * SmartImage — renderizza una foto reale via next/image quando `src` è presente,
 * altrimenti un placeholder elegante nella palette del sito (aspect-ratio corretto).
 *
 * COME INSERIRE LE FOTO REALI (vedi GIMS-Manifest-Immagini-Home.md):
 *  1. Scarica l'originale 4K da Unsplash/Pexels, esporta in WebP/AVIF (<300–400KB hero).
 *  2. Mettila in /public/images/<key>.webp
 *  3. Passa `src="/images/<key>.webp"` a questo componente (o un URL remoto:
 *     images.unsplash.com / images.pexels.com sono già whitelisted in next.config).
 */

type Props = {
  /** chiave logica (es. "spatolati") — usata anche per il label del placeholder */
  imgKey: string;
  src?: string;
  alt: string;
  /** etichetta mostrata sul placeholder; default = imgKey */
  label?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

// Tinte di placeholder coerenti con la palette, variate per categoria.
const TINTS: Record<string, [string, string]> = {
  hero: ["#211d16", "#4a3a28"],
  manifesto: ["#2a241b", "#6b675e"],
  decorazione: ["#3a2c1f", "#8a5a36"],
  "decorazione-2": ["#2c2218", "#6e4d33"],
  imbiancatura: ["#e8e3da", "#cfc7ba"],
  "imbiancatura-2": ["#dcd6cb", "#b9b2a4"],
  spatolati: ["#4a3a28", "#8a5a36"],
  "spatolati-2": ["#5a4632", "#a06b41"],
  cartongesso: ["#e2dcd2", "#b7b0a3"],
  "cartongesso-2": ["#d6cfc3", "#a59e90"],
  pavimenti: ["#5a4127", "#8a5a36"],
  "pavimenti-2": ["#6b4d2e", "#a06b41"],
  bagno: ["#dfdbd2", "#a9a294"],
  tapparelle: ["#cac3b5", "#7a7468"],
  manutenzione: ["#cbc4b6", "#6b675e"],
  "area-a": ["#2a241b", "#8a5a36"],
  "area-b": ["#3a3228", "#6b675e"],
};

function tint(key: string): [string, string] {
  return TINTS[key] ?? ["#2a241b", "#8a5a36"];
}

// Immagini reali presenti in /public/images/<key>.jpg (scaricate da Pexels, licenza libera).
// Se la chiave è qui dentro e non viene passato `src`, usiamo il file locale.
const AVAILABLE = new Set([
  "hero-1", "hero-2", "hero-3", "manifesto",
  "decorazione", "decorazione-2",
  "imbiancatura", "imbiancatura-2",
  "spatolati", "spatolati-2",
  "cartongesso", "cartongesso-2",
  "pavimenti", "pavimenti-2",
  "bagno", "tapparelle", "manutenzione",
  "area-a", "area-b",
  // Foto reali G.I.M.S. Service (cantieri Bareggio / ovest milanese)
  "g-hero", "g-manifesto",
  "g-imbiancatura", "g-imbiancatura-2", "g-cantiere",
  "g-decorazione",
  "g-spatolato", "g-spatolato-2", "g-spatolato-3", "g-spatolato-nicchie",
  "g-cartongesso", "g-cartongesso-2", "g-cartongesso-3", "g-cartongesso-4", "g-cartongesso-5",
  "g-pavimenti", "g-pavimenti-2", "g-pavimenti-3", "g-pavimenti-4", "g-pavimenti-5", "g-pavimenti-posa", "g-pavimenti-posa-2",
  "g-bagno", "g-bagno-2", "g-bagno-3", "g-bagno-4", "g-bagno-5", "g-bagno-6", "g-bagno-7",
  "g-bagno-before", "g-bagno-before-2",
  "g-manutenzione", "g-manutenzione-2", "g-manutenzione-3",
  // Migliori lavori (foto selezionate dal cliente)
  "g-best-1", "g-best-2", "g-best-3", "g-best-4", "g-best-5",
  // Hero + cover servizi (case in ristrutturazione, Pexels licenza libera)
  "hero-reno", "reno-cartongesso", "reno-manutenzione",
]);

export default function SmartImage({
  imgKey,
  src,
  alt,
  label,
  priority,
  sizes = "100vw",
  className = "",
}: Props) {
  const resolved = src ?? (AVAILABLE.has(imgKey) ? `/images/${imgKey}.jpg` : undefined);

  if (resolved) {
    return (
      <Image
        src={resolved}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${className}`}
      />
    );
  }

  const [from, to] = tint(imgKey);
  return (
    <div
      className={`relative flex h-full w-full items-end overflow-hidden ${className}`}
      style={{ background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)` }}
      role="img"
      aria-label={alt}
    >
      {/* griglia sottile per dare carattere "editoriale" allo slot vuoto */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <span className="relative m-4 font-body text-[0.62rem] uppercase tracking-[0.2em] text-white/70">
        {label ?? imgKey}
      </span>
    </div>
  );
}
