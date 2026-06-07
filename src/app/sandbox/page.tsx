import Link from "next/link";

export const metadata = { title: "Sandbox — GIMS Design" };

// Indice delle sezioni in lavorazione. Una pagina per sezione, varianti A/B/C.
const SECTIONS = [
  { href: "/sandbox/hero", label: "Hero", status: "fatto" },
  { href: "/sandbox/acronym", label: "Acronym", status: "fatto" },
  { href: "/sandbox/manifesto", label: "Manifesto", status: "fatto" },
  { href: "/sandbox/services", label: "Services", status: "fatto" },
  { href: "/sandbox/partners", label: "Partners", status: "fatto" },
  { href: "/sandbox/work", label: "Featured Work", status: "fatto" },
  { href: "/sandbox/testimonials", label: "Testimonials", status: "fatto" },
  { href: "/sandbox/method", label: "Method", status: "fatto" },
  { href: "/sandbox/area", label: "Service Area", status: "fatto" },
  { href: "/sandbox/faq", label: "FAQ", status: "fatto" },
];

export default function SandboxIndex() {
  return (
    <main className="min-h-screen bg-bg px-8 py-20 text-ink">
      <div className="mx-auto max-w-3xl">
        <p className="overline mb-4">GIMS — Design Sandbox</p>
        <h1 className="font-display text-5xl font-light tracking-tight">Sezioni</h1>
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
