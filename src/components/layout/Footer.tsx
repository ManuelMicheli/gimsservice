import Link from "next/link";
import Image from "next/image";
import { SERVICES, SITE } from "@/lib/site";
import ContactForm from "./ContactForm";
import Reveal from "@/components/ui/Reveal";

export default function Footer() {
  return (
    <footer id="contatti" className="bg-ink text-bg">
      {/* Form contatti */}
      <div className="shell border-b border-white/10 py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <span className="overline text-bg/50">Contatti</span>
            <h2 className="mt-5 max-w-md font-display text-4xl leading-[1.05] text-bg md:text-6xl 2xl:text-7xl">
              Parliamo del tuo <span className="text-accent">progetto</span>.
            </h2>
            <p className="mt-6 max-w-md font-body text-bg/60">
              Raccontami cosa hai in mente: ti rispondo di persona e fissiamo un sopralluogo
              gratuito, senza impegno.
            </p>
            <div className="mt-10 flex flex-col gap-2 font-body text-sm text-bg/80">
              <a href={SITE.phoneHref} className="link-underline w-fit">
                Tel · {SITE.phoneDisplay}
              </a>
              <a href={`mailto:${SITE.email}`} className="link-underline w-fit">
                {SITE.email}
              </a>
              <a href={SITE.whatsapp} target="_blank" className="link-underline w-fit">
                WhatsApp
              </a>
              <span className="mt-2 text-bg/50">{SITE.address}</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>

      {/* Tagline + colonne link */}
      <div className="shell py-16">
        <p className="max-w-xl font-display text-2xl leading-snug text-bg/90 md:text-3xl">
          Soluzioni artigianali professionali, con qualità e precisione.
        </p>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="overline text-bg/40">Servizi</h3>
            <ul className="mt-5 space-y-2.5 font-body text-sm text-bg/70">
              {SERVICES.map((s) => (
                <li key={s.n}>
                  <Link href={`/servizi/${s.slug}`} className="transition-colors hover:text-bg">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="overline text-bg/40">Azienda</h3>
            <ul className="mt-5 space-y-2.5 font-body text-sm text-bg/70">
              {[
                ["Chi Siamo", "#manifesto"],
                ["Galleria", "#lavori"],
                ["Recensioni", "#recensioni"],
                ["Area servita", "#area"],
              ].map(([l, h]) => (
                <li key={h}>
                  <Link href={h} className="transition-colors hover:text-bg">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="overline text-bg/40">Risorse</h3>
            <ul className="mt-5 space-y-2.5 font-body text-sm text-bg/70">
              {[
                ["FAQ", "#faq"],
                ["Contatti", "#contatti"],
                ["Privacy Policy", "#"],
                ["Cookie Policy", "#"],
              ].map(([l, h]) => (
                <li key={l}>
                  <Link href={h} className="transition-colors hover:text-bg">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Image
              src="/logo.png"
              alt={SITE.brand}
              width={510}
              height={342}
              className="h-16 w-auto rounded-md"
            />
            <p className="mt-5 font-body text-sm leading-relaxed text-bg/70">
              {SITE.address}
              <br />
              {SITE.phoneDisplay}
              <br />
              {SITE.email}
            </p>
          </div>
        </div>
      </div>

      {/* Legale */}
      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-3 py-7 font-body text-[0.72rem] text-bg/45 md:flex-row md:items-center md:justify-between">
          <span>
            © {SITE.brand} — {SITE.vat}
          </span>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-bg/80">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-bg/80">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
