"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
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
          className={`font-display tracking-tight text-ink transition-all duration-500 ease-soft ${
            scrolled ? "py-4 text-xl md:text-2xl" : "py-6 text-2xl md:text-[1.7rem]"
          }`}
        >
          {SITE.brand}
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
          containing block creato da backdrop-filter quando l'header è scrollato. */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center gap-8 bg-bg px-8 md:hidden"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
