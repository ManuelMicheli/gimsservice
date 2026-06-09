import type { CSSProperties, ReactNode } from "react";

/** Reveal su scroll: 100% CSS (animation-timeline: view()) → server component,
 *  zero JS / zero hydration. prefers-reduced-motion gestito in globals.css.
 *  `delay` è mantenuto per compatibilità API ma non usato (lo scroll-timeline
 *  scandisce l'animazione in base alla posizione, non al tempo). */
export default function Reveal({
  children,
  y = 28,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  /** Mantenuto per compatibilità API; non usato (scroll-timeline). */
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span" | "li" | "section";
}) {
  const style = { "--reveal-y": `${y}px` } as CSSProperties;
  return (
    <Tag style={style} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
