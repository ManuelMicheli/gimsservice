"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
import Button from "@/components/ui/Button";

/** Trasforma gli anchor della home (#x) in link assoluti (/#x) per le sottopagine. */
function toAbsolute(href: string): string {
  return href.startsWith("#") ? `/${href}` : href;
}

/**
 * Header per le sottopagine (/servizi, /servizi/[slug]).
 * Desktop: brand + telefono + Preventivo. Mobile: hamburger → overlay fullscreen
 * con la nav completa del sito (linkata in assoluto verso la home).
 */
export default function SubPageHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="border-b border-line bg-bg">
        <div className="shell flex items-center justify-between py-5">
          <Link
            href="/"
            aria-label={`${SITE.brand} — home`}
            className="font-display text-xl tracking-tight text-ink md:text-2xl"
          >
            {SITE.brand}
          </Link>

          {/* Nav desktop */}
          <nav className="hidden items-center gap-6 md:flex">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={toAbsolute(n.href)}
                className="link-underline font-body text-[0.8rem] uppercase tracking-[0.14em]"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={SITE.phoneHref}
              className="link-underline font-body text-[0.8rem] tracking-[0.04em]"
            >
              {SITE.phoneDisplay}
            </a>
            <Button href="#contatti" variant="solid">
              Preventivo
            </Button>
          </nav>

          {/* Hamburger mobile */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-px w-6 bg-ink transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Overlay fullscreen mobile — sempre montato, transizione CSS. */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center gap-8 bg-bg px-8 transition-[opacity,transform] duration-300 ease-soft md:hidden ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
        }`}
        aria-hidden={!open}
      >
        {NAV.map((n) => (
          <Link
            key={n.href}
            href={toAbsolute(n.href)}
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="font-display text-4xl text-ink"
          >
            {n.label}
          </Link>
        ))}
        <div className="mt-4 flex flex-col gap-4 border-t border-line pt-8">
          <a href={SITE.phoneHref} className="font-body text-lg">
            {SITE.phoneDisplay}
          </a>
          <Button href="#contatti" variant="solid" className="self-start">
            Preventivo Gratuito
          </Button>
        </div>
      </div>
    </>
  );
}
