import Link from "next/link";

export const metadata = { title: "Sandbox Mobile — GIMS Design" };

// Indice redesign MOBILE. Una pagina per sezione, varianti A/B/C in phone-frame.
const SECTIONS = [
  { href: "/sandbox/mobile/hero", label: "Hero", status: "in lavorazione" },
  { href: "/sandbox/mobile/acronym", label: "Acronym", status: "—" },
  { href: "/sandbox/mobile/manifesto", label: "Manifesto", status: "—" },
  { href: "/sandbox/mobile/services", label: "Services", status: "—" },
  { href: "/sandbox/mobile/partners", label: "Partners", status: "—" },
  { href: "/sandbox/mobile/work", label: "Featured Work", status: "—" },
  { href: "/sandbox/mobile/testimonials", label: "Testimonials", status: "—" },
  { href: "/sandbox/mobile/method", label: "Method", status: "—" },
  { href: "/sandbox/mobile/area", label: "Service Area", status: "—" },
  { href: "/sandbox/mobile/faq", label: "FAQ", status: "—" },
];

export default function SandboxMobileIndex() {
  return (
    <main className="min-h-screen bg-bg px-8 py-20 text-ink">
      <div className="mx-auto max-w-3xl">
        <p className="overline mb-4">GIMS — Mobile Design Sandbox</p>
        <h1 className="font-display text-5xl font-light tracking-tight">Sezioni — Mobile</h1>
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {SECTIONS.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="group flex items-center justify-between py-6 transition-colors hover:text-accent"
              >
                <span className="font-display text-2xl">{s.label}</span>
                <span className="font-body text-[0.72rem] uppercase tracking-[0.18em] text-muted">
                  {s.status} →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
