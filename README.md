# G.I.M.S. Service — Home

Home page del sito di **G.I.M.S. Service** (artigiano edile a Bareggio, MI — José Giardino).
Architettura e micro-interazioni ispirate a White Maple Construction, estetica sobria e foto-centrica.

## Stack
- **Next.js 15** (App Router) + **TypeScript** + **Tailwind CSS**
- **Framer Motion** — reveal/transizioni UI
- **GSAP** — marquee a loop infinito
- **Lenis** — smooth scroll
- Font: **Fraunces** (display) + **Space Mono** (body/etichette, mono tecnico) — entrambi via `next/font/google`

## Comandi
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build di produzione
npm start        # serve la build
```

## Struttura
```
src/
  app/            layout.tsx (font, SEO, JSON-LD) · page.tsx · globals.css · actions.ts (form)
  lib/            fonts.ts · site.ts (tutti i contenuti/dati)
  components/
    layout/       Header · Footer · ContactForm · Preloader · SmoothScroll
    sections/     Hero · Manifesto · Marquee · Services · Partners · FeaturedWork
                  Testimonials · Method · ServiceArea · FaqTeaser
    ui/           Button · Reveal · RotatingWord · SmartImage
public/fonts/     FaxfontFine.otf
```

## Design tokens
Definiti come CSS variables in `src/app/globals.css` (`--bg`, `--ink`, `--accent`, …) e mappati
in `tailwind.config.ts`. Palette provvisoria (off-white + bronzo): cambiala in un punto solo.

## Immagini (da completare)
Le foto sono gestite da `components/ui/SmartImage.tsx`: senza `src` mostra un **placeholder**
elegante nella palette. Per inserire le foto reali (vedi `GIMS-Manifest-Immagini-Home.md`):
1. scarica gli originali 4K (Unsplash/Pexels), esporta in WebP/AVIF (hero < ~300–400 KB);
2. salvali in `/public/images/<chiave>.webp`;
3. passa `src="/images/<chiave>.webp"` al componente (i commenti `/* src=... */` segnano i punti).
   URL remoti `images.unsplash.com` / `images.pexels.com` sono già abilitati in `next.config.mjs`.

## TODO cliente (placeholder nel codice)
- **Foto reali** dei lavori di José (hero + galleria) — la riprova autentica converte di più.
- **Loghi partner** (elettrico, serramenti, condizionamento, idraulica) → `Partners.tsx`.
- **P.IVA** e pagine **Privacy/Cookie** → `lib/site.ts` (`SITE.vat`) e footer.
- **Numero WhatsApp** definitivo → `SITE.whatsapp`.
- **Invio form** reale (es. Resend/Nodemailer verso `josegiardino68@gmail.com`) → `app/actions.ts`.

## Accessibilità & performance
- HTML semantico, focus states, `lang="it"`, JSON-LD `LocalBusiness`.
- `prefers-reduced-motion` rispettato: preloader, marquee, parola rotante e reveal si disattivano.
- Immagini via `next/image` (AVIF/WebP), font `display: swap`, fallback monospace per il glifo `€`.
