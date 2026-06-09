"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV, SITE } from "@/lib/site";
import Button from "@/components/ui/Button";

/**
 * Header sticky: trasparente sull'hero, diventa solido allo scroll;
 * il logo si rimpicciolisce allo scroll. Mobile: hamburger → overlay fullscreen.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-soft ${
        scrolled
          ? "border-b border-line bg-bg/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex items-center justify-between">
        <Link
          href="#top"
          aria-label={`${SITE.brand} — home`}
          className={`flex items-center transition-all duration-500 ease-soft ${
            scrolled ? "py-3" : "py-4"
          }`}
        >
          <Image
            src="/logo-mark.png"
            alt={SITE.brand}
            width={504}
            height={327}
            priority
            className={`w-auto transition-all duration-500 ease-soft ${
              scrolled ? "h-10 md:h-11" : "h-12 md:h-14"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
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
            Preventivo Gratuito
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

      {/* Overlay fullscreen mobile — fuori dall'header per non ereditare il
          containing block creato da backdrop-filter quando l'header è scrollato.
          Sempre montato, transizione CSS su opacity/translate. */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center gap-8 bg-bg px-8 transition-[opacity,transform] duration-300 ease-soft md:hidden ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
        }`}
        aria-hidden={!open}
      >
        {NAV.map((n) => (
          <Link
            key={n.href}
            href={n.href}
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
