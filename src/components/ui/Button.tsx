import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-body text-[0.78rem] uppercase tracking-[0.16em] transition-all duration-500 ease-soft";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-bg px-7 py-3.5 hover:bg-accent",
  outline:
    "border border-ink/30 px-7 py-3.5 text-ink hover:border-ink hover:bg-ink hover:text-bg",
  ghost: "px-2 py-1 text-ink hover:text-accent",
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
      <Link href={href} className={cls} {...(external ? { target: href.startsWith("http") ? "_blank" : undefined } : {})}>
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
