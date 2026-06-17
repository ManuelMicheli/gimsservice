import Link from "next/link";
import { SITE, METHOD } from "@/lib/site";
import { SERVICE_PAGES, type ServicePage } from "@/lib/services-content";
import { CITIES } from "@/lib/cities";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Footer from "@/components/layout/Footer";
import SubPageHeader from "@/components/layout/SubPageHeader";

/**
 * Vista di una pagina servizio dedicata.
 * Header leggero (link assoluti a `/` per non rompersi fuori dalla home),
 * contenuto SEO ricco, link interni ad altri servizi, Footer riusato (form + contatti).
 */
export default function ServicePageView({ page }: { page: ServicePage }) {
  const others = SERVICE_PAGES.filter((s) => s.slug !== page.slug);
  const strip = page.gallery.slice(0, 4);

  return (
    <>
      {/* ===== Header sottopagina (con nav mobile) ===== */}
      <SubPageHeader />

      <main id="top">
        {/* ===== Breadcrumb ===== */}
        <nav aria-label="Breadcrumb" className="shell pt-8">
          <ol className="flex flex-wrap items-center gap-2 font-body text-[0.72rem] uppercase tracking-[0.12em] text-muted">
            <li><Link href="/" className="hover:text-ink">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link href="/servizi" className="hover:text-ink">Servizi</Link></li>
            <li aria-hidden>/</li>
            <li className="text-ink">{page.serviceType}</li>
          </ol>
        </nav>

        {/* ===== Hero ===== */}
        <section className="shell grid gap-10 py-12 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <Reveal className="flex h-full flex-col">
            <span className="overline text-accent">{page.eyebrow}</span>
            <h1 className="mt-5 font-display text-[2.1rem] font-light leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-muted">
              {page.lead}
            </p>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button href="#contatti" variant="solid">Richiedi un preventivo gratuito</Button>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="link-underline font-body text-sm text-ink">
                oppure scrivimi su WhatsApp
              </a>
            </div>

            {/* Griglia foto reali — riempie lo spazio bianco sotto il titolo */}
            {strip.length > 0 && (
              <div className="mt-auto hidden grid-cols-2 gap-3 pt-10 md:grid md:gap-4">
                {strip.map((g, i) => (
                  <div
                    key={g}
                    className="relative aspect-[4/3] overflow-hidden rounded-sm border border-line bg-line"
                  >
                    <SmartImage
                      imgKey={g}
                      alt={`${page.serviceType} — lavoro reale ${i + 1}, G.I.M.S. Service Bareggio`}
                      label={page.serviceType}
                      sizes="(max-width:768px) 50vw, 22vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-line">
              <SmartImage
                imgKey={page.imgKey}
                alt={`${page.serviceType} — G.I.M.S. Service, Bareggio (MI)`}
                label={page.serviceType}
                priority
                sizes="(max-width:768px) 100vw, 45vw"
              />
            </div>
          </Reveal>
        </section>

        {/* ===== Intro ===== */}
        <section className="shell border-t border-line py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-[0.4fr_0.6fr]">
            <Reveal>
              <h2 className="font-display text-2xl font-light leading-tight tracking-tight text-ink md:text-3xl">
                {page.serviceType} a Bareggio e nell&apos;ovest milanese
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 font-body text-[0.95rem] leading-relaxed text-muted">
                {page.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== Cosa è incluso ===== */}
        <section className="shell border-t border-line py-14 md:py-20">
          <Reveal>
            <span className="overline text-accent">Cosa faccio</span>
            <h2 className="mt-4 max-w-2xl font-display text-2xl font-light leading-tight tracking-tight text-ink md:text-4xl">
              Lavorazioni incluse
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {page.includes.map((it) => (
              <div key={it.title} className="bg-bg p-7">
                <h3 className="font-display text-lg font-normal text-ink">{it.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted">{it.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Perché scegliermi ===== */}
        <section className="bg-ink text-bg">
          <div className="shell grid gap-10 py-14 md:grid-cols-[0.4fr_0.6fr] md:py-20">
            <Reveal>
              <span className="overline text-bg/50">Perché G.I.M.S. Service</span>
              <h2 className="mt-4 font-display text-2xl font-light leading-tight tracking-tight text-bg md:text-3xl">
                Un solo artigiano, dal sopralluogo alla consegna.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="space-y-5">
                {page.reasons.map((r) => (
                  <li key={r} className="flex gap-4 border-b border-bg/10 pb-5 font-body text-[0.95rem] text-bg/85">
                    <span className="text-accent">—</span>
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ===== Metodo ===== */}
        <section className="shell border-t border-line py-14 md:py-20">
          <Reveal>
            <span className="overline text-accent">Come lavoro</span>
            <h2 className="mt-4 font-display text-2xl font-light leading-tight tracking-tight text-ink md:text-4xl">
              Dal primo contatto alla consegna
            </h2>
          </Reveal>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {METHOD.map((s) => (
              <li key={s.n} className="border-t border-line pt-5">
                <span className="font-body text-[0.7rem] uppercase tracking-[0.2em] text-accent">{s.n}</span>
                <h3 className="mt-2 font-display text-lg font-normal text-ink">{s.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted">{s.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ===== Galleria ===== */}
        {page.gallery.length > 0 && (
          <section className="shell border-t border-line py-14 md:py-20">
            <Reveal>
              <span className="overline text-accent">Lavori</span>
              <h2 className="mt-4 font-display text-2xl font-light leading-tight tracking-tight text-ink md:text-4xl">
                Alcuni interventi
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {page.gallery.map((g, i) => (
                <div key={g} className="relative aspect-[4/3] overflow-hidden rounded-sm border border-line">
                  <SmartImage
                    imgKey={g}
                    alt={`${page.serviceType} — esempio di lavoro ${i + 1}, G.I.M.S. Service Bareggio`}
                    label={page.serviceType}
                    sizes="(max-width:640px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===== FAQ ===== */}
        <section className="shell border-t border-line py-14 md:py-20">
          <Reveal>
            <span className="overline text-accent">Domande frequenti</span>
            <h2 className="mt-4 font-display text-2xl font-light leading-tight tracking-tight text-ink md:text-4xl">
              {page.serviceType}: dubbi più comuni
            </h2>
          </Reveal>
          <dl className="mt-10 divide-y divide-line border-y border-line">
            {page.faq.map((f) => (
              <div key={f.q} className="py-6">
                <dt className="font-display text-lg font-normal text-ink">{f.q}</dt>
                <dd className="mt-2 max-w-3xl font-body text-[0.9rem] leading-relaxed text-muted">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ===== Zone servite (link servizio×città) ===== */}
        <section className="shell border-t border-line py-14 md:py-20">
          <Reveal>
            <span className="overline text-accent">Zone servite</span>
            <h2 className="mt-4 font-display text-2xl font-light leading-tight tracking-tight text-ink md:text-4xl">
              {page.serviceType} in tutto l&apos;ovest milanese
            </h2>
            <p className="mt-4 max-w-2xl font-body text-[0.9rem] leading-relaxed text-muted">
              Oltre a Bareggio, intervengo nei comuni dell&apos;ovest milanese. Scegli la tua zona:
            </p>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-2">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/servizi/${page.slug}/${c.slug}`}
                className="rounded-full border border-line px-4 py-2 font-body text-[0.78rem] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bg"
              >
                {page.serviceType} a {c.name}
              </Link>
            ))}
          </div>
        </section>

        {/* ===== Altri servizi (link interni) ===== */}
        <section className="shell border-t border-line py-14 md:py-20">
          <Reveal>
            <span className="overline text-accent">Altri servizi</span>
            <h2 className="mt-4 font-display text-2xl font-light leading-tight tracking-tight text-ink md:text-4xl">
              Tutto quello di cui hai bisogno, un solo referente
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <Link key={s.slug} href={`/servizi/${s.slug}`} className="group bg-bg p-7 transition-colors hover:bg-surface">
                <h3 className="font-display text-lg font-normal text-ink transition-colors group-hover:text-accent">
                  {s.serviceType}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted">{s.lead}</p>
                <span className="mt-4 inline-block font-body text-[0.72rem] uppercase tracking-[0.14em] text-accent">
                  Scopri →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
