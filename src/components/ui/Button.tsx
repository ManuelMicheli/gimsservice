import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "solid" | "inverse" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-body text-[0.78rem] uppercase tracking-[0.16em] transition-all duration-500 ease-soft";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-bg px-7 py-3.5 hover:bg-accent",
  // Per sezioni su fondo scuro (bg-ink): pill chiara, testo scuro.
  inverse: "bg-bg text-ink px-7 py-3.5 hover:bg-accent hover:text-bg",
  outline:
    "border border-ink/30 px-7 py-3.5 text-ink hover:border-ink hover:bg-ink hover:text-bg",
  ghost: "px-3 py-2.5 text-ink hover:text-accent",
};

export default function Button({
  children,
  href,
  variant = "solid",
  className = "",
  type = "button",
  ...rest
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    const external = href.startsWith("http") || href.startsWith("tel:");
    return (
      <Link
        href={href}
        className={cls}
        {...(external && href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} {...rest}>
      {children}
    </button>
  );
}
