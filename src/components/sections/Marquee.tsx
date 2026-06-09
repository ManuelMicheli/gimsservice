"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Marquee orizzontale a loop infinito (GSAP), trasparente e riusabile.
 * Pensato anche come banda di sfondo dietro altri elementi.
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
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !trackRef.current) return;
    const tween = gsap.fromTo(
      trackRef.current,
      { xPercent: reverse ? -50 : 0 },
      { xPercent: reverse ? 0 : -50, repeat: -1, duration, ease: "none" }
    );
    return () => {
      tween.kill();
    };
  }, [duration, reverse]);

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
      <div ref={trackRef} className="flex w-max">
        <Group />
        <Group ariaHidden />
      </div>
    </div>
  );
}
