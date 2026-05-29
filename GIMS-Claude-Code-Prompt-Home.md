# PROMPT CLAUDE CODE — Home GIMS Service (struttura White Maple)

> Copia-incolla in Claude Code. Costruzione della **home page** di GIMS Service,
> struttura identica a whitemapleconstruction.com, qualità Awwwards.

---

## RUOLO & OBIETTIVO

Sei un senior frontend engineer + designer. Costruisci la **home page** del sito di
**G.I.M.S. Service** (impresa artigiana edile a Bareggio, MI — imbiancatura, decorazioni,
cartongesso, ristrutturazioni, finiture). Riproduci **fedelmente l'architettura e le
interazioni** del sito di riferimento **White Maple Construction**
(https://whitemapleconstruction.com): stessa sequenza di sezioni, stesse micro-interazioni,
stesso ritmo editoriale premium. Estetica sobria, foto-centrica, livello Awwwards.

## STACK & VINCOLI

- **Next.js 15 (App Router) + TypeScript + Tailwind CSS**
- **Framer Motion** per reveal/transizioni UI, **GSAP + ScrollTrigger** per marquee, parallax e scroll-driven
- **Lenis** per smooth scroll
- Mobile-first, perfettamente responsive
- Performance: Lighthouse 90+, immagini via `next/image`, font self-hosted, `display:swap`
- Accessibilità: HTML semantico, focus states, `prefers-reduced-motion` rispettato (disattiva animazioni pesanti)
- Niente librerie UI pesanti. Componenti custom, puliti, riusabili
- Tutto il copy è in **italiano** (vedi sotto, testi definitivi)

## TONO DI VOCE (importante)

G.I.M.S. Service è gestita **esclusivamente da José Giardino** (geometra): è lui che segue
personalmente ogni lavoro. **Non è un team.** Quindi:
- Nelle sezioni personali (manifesto, metodo, chi siamo) usa la **voce in prima persona
  singolare di José** ("seguo", "vengo da te", "lavoro con cura"). Il nome brand
  "G.I.M.S. Service" resta per header/footer/SEO.
- **Evita** ogni riferimento a "team", "squadra", "il nostro staff", "i nostri operai".
- Trasforma il "solo artigiano" in **leva di fiducia**: un unico professionista, accountability
  diretta, nessun subappalto. (Es. claim: "Un solo artigiano, dal primo sopralluogo alla consegna.")
- I **partner esterni** servono solo per i trade tecnici complementari (elettrico, serramenti,
  condizionamento, idraulica): "mi avvalgo di partner qualificati", non "il nostro reparto".

## TIPOGRAFIA (definita — usare esattamente questa)

- **Body / descrizioni → Faxfont Fine** (font tecnico, self-hosted). File in `/public/fonts/`:
  `FaxfontFine.woff2`, `FaxfontFine.woff`. Peso 500. ⚠️ Il font NON ha il glifo `€`:
  imposta fallback monospace per coprirlo.
- **Display / titoli → Fraunces** (serif elegante variabile, via `next/font/google`).
  Asse ottico alto sui titoli grandi, peso 300–500, leggermente in italic per gli accenti
  editoriali dove serve. (Alternative coerenti se richiesto: Newsreader, Spectral.)

```ts
// src/lib/fonts.ts
import localFont from "next/font/local";
import { Fraunces } from "next/font/google";

export const faxfont = localFont({
  src: [
    { path: "../../public/fonts/FaxfontFine.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/FaxfontFine.woff",  weight: "500", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});
```
`<html lang="it" className={`${fraunces.variable} ${faxfont.variable}`}>`
Tailwind: `fontFamily: { display: "var(--font-display)", body: "var(--font-body)" }`.
Default body = `font-body`; titoli = `font-display`.

## DESIGN TOKENS (provvisori — facilmente sostituibili)

Palette di partenza tipo White Maple (nero/off-white + 1 accento caldo). Tokenizza tutto in
CSS variables così è banale cambiarla dopo:
```
--bg:        #F4F1EC;  /* off-white caldo */
--surface:   #FFFFFF;
--ink:       #16140F;  /* near-black */
--muted:     #6B675E;
--accent:    #8A5A36;  /* terra/bronzo — provvisorio */
--line:      #E2DCD2;
```
Spaziature generose, molto white space, griglia a 12 colonne, max-width ~1280px.

## INTERAZIONI GLOBALI (firma White Maple)

1. **Preloader** iniziale con zoom fluido che transita nell'hero (rispetta reduced-motion).
2. **Header sticky** trasparente sull'hero, diventa solido allo scroll; **logo che si
   rimpicciolisce** allo scroll.
3. Reveal allo scroll (fade+translate Y) coordinati, mai "luna park": ripetizione coerente.
4. Cursore/hover discreti.

---

# SEZIONI DELLA HOME (ordine identico a White Maple)

## 1) Header
Logo G.I.M.S. (sx) · Nav: **Servizi · Galleria · Il Metodo · Chi Siamo** · Telefono
`347 800 4971` cliccabile · Pulsante CTA pieno: **Preventivo Gratuito**.
Mobile: hamburger → overlay fullscreen.

## 2) Hero
- Overline (piccolo, body): `Precisione e qualità in ogni dettaglio.`
- Sub: `Imbiancatura · Decorazioni · Cartongesso · Ristrutturazioni · Finiture`
- H1 grande (display): `Artigiano edile a Bareggio da oltre trent'anni.`
- Immagine di sfondo full-bleed (placeholder: una foto del portfolio, es. spatolato/bagno)
- Trust line (sotto l'H1 o sopra la CTA): `Un solo artigiano, dal primo sopralluogo alla consegna.`
- CTA: `Richiedi un preventivo gratuito`

## 3) Manifesto / Intro
- Headline (display): `Dal primo sopralluogo alla consegna finale.`
- Body:
  `Ogni spazio merita di riflettere la tua personalità. Per questo metto al centro
   l'artigianalità, la cura dei dettagli e la competenza tecnica. Con oltre trent'anni di
   esperienza ti seguo personalmente in ogni fase, con materiali selezionati e soluzioni
   su misura che uniscono estetica e funzionalità.`
  `Non sono il più economico e non sono il più costoso: cerco sempre il giusto
   equilibrio tra qualità e investimento, per creare spazi unici e duraturi.`
  Firma opzionale: `— José Giardino`

## 4) Marquee animato (GSAP, loop infinito orizzontale)
`Lo Standard GIMS • Materiali certificati • Cantiere pulito • Preventivo gratuito • Oltre 30 anni di esperienza •` (ripetuto)

## 5) Servizi
Titolo: `I Nostri Servizi` · sottotitolo: `Qualità e precisione al centro di ogni progetto.`
Lista numerata **01–08** (titolo display + descrizione body + link "Scopri →"):
- **01 Imbiancatura** — Imbiancature per interni ed esterni con materiali certificati dei migliori marchi italiani.
- **02 Decorazioni** — Decorazioni realizzate con materiali certificati e tecniche professionali.
- **03 Spatolati** — Finiture spatolate, anche stucco antico veneziano, per superfici di pregio.
- **04 Cartongesso** — Pareti, controsoffitti ed elementi decorativi in cartongesso su misura.
- **05 Pavimenti e Rivestimenti** — Posa di piastrelle, laminato, PVC e parquet.
- **06 Ristrutturazione Bagni** — Trasformiamo il bagno in un ambiente di comfort e stile, chiavi in mano.
- **07 Tapparelle** — Installazione e manutenzione con materiali resistenti e lavorazioni accurate.
- **08 Manutenzione Stabili** — Manutenzione ordinaria e straordinaria con interventi programmati.

## 6) Partner di fiducia
Titolo: `I Miei Partner` · Paragrafo:
`Collaboro con aziende selezionate del territorio che condividono i miei valori di
 professionalità e attenzione ai dettagli. Per impianti elettrici, serramenti, sistemi di
 condizionamento e impianti idraulici mi avvalgo di partner qualificati, così da offrirti un
 servizio completo e coordinato — con un unico referente: io.`
Logo wall responsive (placeholder loghi: elettrico, serramenti, condizionamento, idraulica).

## 7) Lavori in evidenza (parola rotante + galleria hover)
Headline con parola che ruota (display):
`Realizzo [imbiancature / decorazioni / spatolati / cartongesso / bagni] che durano nel tempo.`
Griglia progetti = categorie portfolio, ciascuna con **hover: la foto scorre verso l'alto
rivelando una vista alternata** (effetto White Maple):
`01 Decorazione · 02 Imbiancatura · 03 Spatolati · 04 Cartongesso · 05 Pavimenti`
CTA: `Vai alla galleria →` (placeholder immagini portfolio).

## 8) Recensioni
Titolo: `Cosa Dicono i Nostri Clienti` — 3 testimonianze numerate (tutte 5★):
- **01 — Rinaldo, Milano:** "Ci siamo rivolti a GIMS Service per diversi interventi: tinteggiatura, installazione di condizionatori e lavori sull'impianto idraulico. Sempre puntuali e precisi, ci hanno saputo consigliare le soluzioni più adatte, garantendo qualità e affidabilità in ogni fase."
- **02 — Luca Conti, Binasco:** "Professionalità e cura hanno trasformato la nostra casa. Risultati che parlano da soli e qualità senza compromessi."
- **03 — Elena Rossi, Sesto San Giovanni:** "Servizio impeccabile e soluzioni su misura hanno reso il nostro progetto un'esperienza senza stress e altamente soddisfacente."

## 9) Il Metodo GIMS (sostituisce il lead-magnet ebook)
Titolo: `Il Metodo GIMS` · sottotitolo: `Un processo chiaro, senza sorprese.`
4 step (numerati, reveal in sequenza):
- **01 Sopralluogo** — Vengo da te per capire esigenze, spazi e obiettivi.
- **02 Preventivo gratuito e trasparente** — Ti do una valutazione chiara, senza impegno.
- **03 Cantiere ordinato e pulito** — Lavoro con cura e gestisco anche lo smaltimento.
- **04 Consegna chiavi in mano** — Ti riconsegno l'ambiente pronto all'uso.
CTA finale: `Richiedi il tuo preventivo gratuito`

## 10) Area servita
Headline: `Lavoro a Bareggio e in tutto l'ovest milanese.` · sub: `Locale, affidabile, puntuale.`
Paragrafo + 2 foto + **mappa Google** (embed verso https://maps.app.goo.gl/pvvF6xJRVzdcU5H18).
Zone: Bareggio, Milano, Binasco, Sesto San Giovanni e hinterland.

## 11) Teaser FAQ (al posto del blog in v1)
Mini-sezione: 2-3 domande dalla pagina FAQ (es. "Quanto costa il preventivo?" → "È gratuito e
senza impegno.") + CTA `Tutte le domande →`.

## 12) Footer
- **Form contatti**: Nome*, Email*, Telefono, **Tipo di intervento** (select: Imbiancatura / Cartongesso / Bagno / Pavimenti / Decorazioni / Altro), Messaggio*, checkbox consenso privacy. CTA: `Invia richiesta →`. (Niente `<form>` reattivo in artifact; qui è Next reale → usa Server Action o handler con validazione.)
- Tagline: `Soluzioni artigianali professionali, con qualità e precisione.`
- Indirizzo: `Via Primo Maggio, 21 — 20008 Bareggio (MI)`
- Contatti: Tel `347 800 4971` · Email `josegiardino68@gmail.com` · WhatsApp (predisponi link `wa.me`, numero da confermare)
- Colonne link: **Servizi** (gli 8) · **Azienda** (Chi Siamo, Galleria, Recensioni, Area servita) · **Risorse** (FAQ, Contatti, Privacy, Cookie)
- Legale: Privacy Policy · Cookie Policy · P.IVA (placeholder, da inserire)

---

## STRUTTURA FILE ATTESA
```
src/
  app/
    layout.tsx          // fonts, Lenis provider, metadata SEO
    page.tsx            // composizione sezioni home
    globals.css         // tokens + base
  lib/fonts.ts
  components/
    layout/Header.tsx, Footer.tsx, Preloader.tsx, SmoothScroll.tsx
    sections/Hero.tsx, Manifesto.tsx, Marquee.tsx, Services.tsx, Partners.tsx,
             FeaturedWork.tsx, Testimonials.tsx, Method.tsx, ServiceArea.tsx,
             FaqTeaser.tsx
    ui/   // button, reveal wrapper, rotating-word, ecc.
public/fonts/   // FaxfontFine.woff2 + .woff
```

## SEO (metadata)
title: `G.I.M.S. Service — Imbiancatura, ristrutturazioni e finiture a Bareggio (MI)`
description: usa il claim "oltre 30 anni di esperienza in imbiancatura, decorazioni,
cartongesso, pavimenti, ristrutturazione bagni, tapparelle". `lang="it"`, Open Graph,
JSON-LD `LocalBusiness` (nome, indirizzo Bareggio, telefono, geo, areaServed).

## COSA NON FARE
- Niente palette/copy inventati oltre a quelli qui forniti.
- Niente animazioni eccessive o non coerenti; rispetta `prefers-reduced-motion`.
- Niente immagini hardcoded mancanti: usa placeholder puliti con aspect-ratio corretti.
- Non rompere la copertura italiana del body font (fallback mono per `€`).

## OUTPUT
Genera tutti i componenti e file sopra, con la home assemblata in `page.tsx`,
commenti dove servono i contenuti reali (foto, loghi partner, P.IVA, WhatsApp).
Inizia confermando design tokens e struttura cartelle, poi procedi sezione per sezione.
