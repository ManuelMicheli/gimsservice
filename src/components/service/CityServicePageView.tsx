import Link from "next/link";
import { SITE, METHOD } from "@/lib/site";
import { SERVICE_PAGES, type ServicePage } from "@/lib/services-content";
import { CITIES, cityServiceFaq, type City } from "@/lib/cities";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Footer from "@/components/layout/Footer";

/**
 * Pagina servizio×città (/servizi/<slug>/<city>).
 * Contenuto: blurb specifico del comune + dettaglio servizio + mesh di link interni
 * (altri servizi nello stesso comune, stesso servizio in altre zone).
 */
export default function CityServicePageView({
  page,
  city,
}: {
  page: ServicePage;
  city: City;
}) {
  const otherServices = SERVICE_PAGES.filter((s) => s.slug !== page.slug);
  const otherCities = CITIES.filter((c) => c.slug !== city.slug);
  const faq = cityServiceFaq(page, city);

  return (
    <>
      {/* ===== Header leggero ===== */}
      <header className="border-b border-line bg-bg">
        <div className="shell flex items-center justify-between py-5">
          <Link href="/" aria-label={`${SITE.brand} — home`} className="font-display text-xl tracking-tight text-ink md:text-2xl">
            {SITE.brand}
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/#servizi" className="link-underline hidden font-body text-[0.8rem] uppercase tracking-[0.14em] sm:inline">
              Servizi
            </Link>
            <a href={SITE.phoneHref} className="link-underline hidden font-body text-[0.8rem] tracking-[0.04em] sm:inline">
              {SITE.phoneDisplay}
            </a>
            <Button href="#contatti" variant="solid">Preventivo</Button>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ===== Breadcrumb ===== */}
        <nav aria-label="Breadcrumb" className="shell pt-8">
          <ol className="flex flex-wrap items-center gap-2 font-body text-[0.72rem] uppercase tracking-[0.12em] text-muted">
            <li><Link href="/" className="hover:text-ink">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link href="/servizi" className="hover:text-ink">Servizi</Link></li>
            <li aria-hidden>/</li>
            <li><Link href={`/servizi/${page.slug}`} className="hover:text-ink">{page.serviceType}</Link></li>
            <li aria-hidden>/</li>
            <li className="text-ink">{city.name}</li>
          </ol>
        </nav>

        {/* ===== Hero ===== */}
        <section className="shell grid gap-10 py-12 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <Reveal>
            <span className="overline text-accent">{page.eyebrow} · {city.name}</span>
            <h1 className="mt-5 font-display text-[2.1rem] font-light leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {page.serviceType} a {city.name}
            </h1>
            <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-muted">
              {page.lead}
            </p>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button href="#contatti" variant="solid">Richiedi un preventivo gratuito</Button>
              <a href={SITE.phoneHref} className="link-underline font-body text-sm text-ink">
                oppure chiama il {SITE.phoneDisplay}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-line">
              <SmartImage
                imgKey={page.imgKey}
                alt={`${page.serviceType} a ${city.name} (${city.province}) — G.I.M.S. Service`}
                label={`${page.serviceType} · ${city.name}`}
                priority
                sizes="(max-width:768px) 100vw, 45vw"
              />
            </div>
          </Reveal>
        </section>

        {/* ===== Intro: blurb città + servizio ===== */}
        <section className="shell border-t border-line py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-[0.4fr_0.6fr]">
            <Reveal>
              <h2 className="font-display text-2xl font-light leading-tight tracking-tight text-ink md:text-3xl">
                {page.serviceType} a {city.name} e dintorni
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 font-body text-[0.95rem] leading-relaxed text-muted">
                <p>{city.blurb}</p>
                {page.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== Lavorazioni ===== */}
        <section className="shell border-t border-line py-14 md:py-20">
          <Reveal>
            <span className="overline text-accent">Cosa faccio a {city.name}</span>
            <h2 className="mt-4 max-w-2xl font-display text-2xl font-light leading-tight tracking-tight text-ink md:text-4xl">
              Lavorazioni incluse
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {page.includes.map((it) => (
              <div key={it.title} className="bg-bg p-7">
                <h3 className="font-display text-lg font-normal text-ink">{it.title}</h3>
                <p className="mt-2 font-body text-[0.82rem] leading-relaxed text-muted">{it.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Perché ===== */}
        <section className="bg-ink text-bg">
          <div className="shell grid gap-10 py-14 md:grid-cols-[0.4fr_0.6fr] md:py-20">
            <Reveal>
              <span className="overline text-bg/50">Perché G.I.M.S. Service</span>
              <h2 className="mt-4 font-display text-2xl font-light leading-tight tracking-tight text-bg md:text-3xl">
                Un artigiano locale, vicino a {city.name}.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="space-y-5">
                {page.reasons.map((r) => (
                  <li key={r} className="flex gap-4 border-b border-white/10 pb-5 font-body text-[0.95rem] text-bg/85">
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
              Dal sopralluogo a {city.name} alla consegna
            </h2>
          </Reveal>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {METHOD.map((s) => (
              <li key={s.n} className="border-t border-line pt-5">
                <span className="font-body text-[0.7rem] uppercase tracking-[0.2em] text-accent">{s.n}</span>
                <h3 className="mt-2 font-display text-lg font-normal text-ink">{s.title}</h3>
                <p className="mt-2 font-body text-[0.82rem] leading-relaxed text-muted">{s.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ===== Zona / comuni limitrofi ===== */}
        <section className="shell border-t border-line py-14 md:py-20">
          <Reveal>
            <span className="overline text-accent">Zona servita</span>
            <h2 className="mt-4 font-display text-2xl font-light leading-tight tracking-tight text-ink md:text-3xl">
              {page.serviceType} a {city.name} ({city.cap}) e nei comuni vicini
            </h2>
            <p className="mt-4 max-w-2xl font-body text-[0.9rem] leading-relaxed text-muted">
              Da {SITE.address.split("—")[1]?.trim() ?? "Bareggio"} raggiungo {city.name} e i comuni
              limitrofi per sopralluoghi e cantieri. Servo abitualmente:
            </p>
          </Reveal>
          <ul className="mt-6 flex flex-wrap gap-2">
            {city.nearby.map((n) => (
              <li key={n} className="rounded-full border border-line px-3 py-1.5 font-body text-[0.7rem] uppercase tracking-[0.1em] text-muted">
                {n}
              </li>
            ))}
          </ul>
        </section>

        {/* ===== FAQ ===== */}
        <section className="shell border-t border-line py-14 md:py-20">
          <Reveal>
            <span className="overline text-accent">Domande frequenti</span>
            <h2 className="mt-4 font-display text-2xl font-light leading-tight tracking-tight text-ink md:text-4xl">
              {page.serviceType} a {city.name}: dubbi più comuni
            </h2>
          </Reveal>
          <dl className="mt-10 divide-y divide-line border-y border-line">
            {faq.map((f) => (
              <div key={f.q} className="py-6">
                <dt className="font-display text-lg font-normal text-ink">{f.q}</dt>
                <dd className="mt-2 max-w-3xl font-body text-[0.9rem] leading-relaxed text-muted">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ===== Stesso servizio, altre zone ===== */}
        <section className="shell border-t border-line py-14 md:py-20">
          <Reveal>
            <span className="overline text-accent">{page.serviceType} in altre zone</span>
            <h2 className="mt-4 font-display text-2xl font-light leading-tight tracking-tight text-ink md:text-3xl">
              Lavoro in tutto l&apos;ovest milanese
            </h2>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-2">
            {otherCities.map((c) => (
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

        {/* ===== Altri servizi a {city} ===== */}
        <section className="shell border-t border-line py-14 md:py-20">
          <Reveal>
            <span className="overline text-accent">Altri servizi a {city.name}</span>
            <h2 className="mt-4 font-display text-2xl font-light leading-tight tracking-tight text-ink md:text-3xl">
              Un solo referente per tutta la casa
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s) => (
              <Link key={s.slug} href={`/servizi/${s.slug}/${city.slug}`} className="group bg-bg p-6 transition-colors hover:bg-surface">
                <h3 className="font-display text-base font-normal text-ink transition-colors group-hover:text-accent">
                  {s.serviceType} a {city.name}
                </h3>
                <span className="mt-3 inline-block font-body text-[0.7rem] uppercase tracking-[0.14em] text-accent">
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
