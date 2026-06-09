import type { CSSProperties } from "react";

/**
 * Marquee orizzontale a loop infinito (CSS puro, niente JS).
 * I contenuti sono duplicati: l'animazione trasla di -50% = loop continuo.
 * prefers-reduced-motion ferma l'animazione (globals.css).
 */
export default function Marquee({
  items,
  itemClassName = "",
  separatorClassName = "text-accent",
  separator = "·",
  gap = "px-8",
  duration = 26,
  reverse = false,
}: {
  items: string[];
  itemClassName?: string;
  separatorClassName?: string;
  separator?: string;
  gap?: string;
  duration?: number;
  reverse?: boolean;
}) {
  const Group = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {items.map((t, i) => (
        <span key={i} className="flex items-center">
          <span className={`${gap} ${itemClassName}`}>{t}</span>
          <span className={separatorClassName}>{separator}</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="w-full overflow-hidden">
      <div
        className="marquee-track"
        data-reverse={reverse}
        style={{ "--marquee-dur": `${duration}s` } as CSSProperties}
      >
        <Group />
        <Group ariaHidden />
      </div>
    </div>
  );
}
