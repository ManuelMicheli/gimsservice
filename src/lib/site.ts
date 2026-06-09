// Dati centralizzati del sito GIMS Service.
// Copy definitivo (italiano) come da brief. Voce: prima persona singolare di José Giardino.

export const SITE = {
  brand: "G.I.M.S. Service",
  shortBrand: "GIMS",
  owner: "José Giardino",
  phoneDisplay: "347 800 4971",
  phoneHref: "tel:+393478004971",
  email: "josegiardino68@gmail.com",
  // Numero WhatsApp da confermare con il cliente (placeholder = telefono principale).
  whatsapp: "https://wa.me/393478004971",
  address: "Via Primo Maggio, 21 — 20008 Bareggio (MI)",
  mapsUrl: "https://maps.app.goo.gl/pvvF6xJRVzdcU5H18",
  // Embed senza API key (q = indirizzo). Sostituibile con un place_id se disponibile.
  mapsEmbed:
    "https://www.google.com/maps?q=Via%20Primo%20Maggio%2021%2C%2020008%20Bareggio%20MI&output=embed",
  vat: "P.IVA — da inserire",
} as const;

export const NAV = [
  { label: "Servizi", href: "/servizi" },
  { label: "Galleria", href: "#lavori" },
  { label: "Il Metodo", href: "#metodo" },
  { label: "Chi Siamo", href: "#manifesto" },
] as const;

export type Service = {
  n: string;
  title: string;
  desc: string;
  /** chiave immagine (vedi components/ui/SmartImage placeholder) */
  img: string;
  /** slug della pagina servizio dedicata: /servizi/<slug> */
  slug: string;
};

export const SERVICES: Service[] = [
  { n: "01", title: "Imbiancatura", img: "imbiancatura", slug: "imbiancatura", desc: "Imbiancature per interni ed esterni con materiali certificati dei migliori marchi italiani, eseguite con tecniche professionali per garantire durata e qualità." },
  { n: "02", title: "Decorazioni", img: "cover-decorazioni", slug: "decorazioni-pareti", desc: "Decorazioni realizzate con materiali certificati e tecniche professionali, per un risultato di qualità che resiste nel tempo." },
  { n: "03", title: "Spatolati", img: "cover-spatolato", slug: "spatolato-veneziano", desc: "Finiture spatolate, anche in stucco antico veneziano, con materiali certificati e tecniche professionali per superfici di pregio." },
  { n: "04", title: "Cartongesso", img: "cover-cartongesso", slug: "cartongesso", desc: "Pareti e controsoffitti in cartongesso con materiali certificati e tecniche professionali." },
  { n: "05", title: "Pavimenti e Rivestimenti", img: "cover-pavimenti", slug: "pavimenti-e-rivestimenti", desc: "Fornitura e posa di pavimenti in piastrelle, laminato, PVC e parquet, con materiali certificati e tecniche professionali." },
  { n: "06", title: "Ristrutturazione Bagni", img: "bagno", slug: "ristrutturazione-bagni", desc: "Rendi unico il tuo bagno: trasformo lo spazio in un ambiente di comfort e stile, chiavi in mano." },
  { n: "07", title: "Tapparelle", img: "tapparelle", slug: "tapparelle", desc: "Installazione e manutenzione di tapparelle con materiali resistenti e lavorazioni accurate." },
  { n: "08", title: "Manutenzione Stabili", img: "cover-manutenzione", slug: "manutenzione-stabili", desc: "Manutenzione ordinaria e straordinaria di stabili, con interventi programmati e materiali certificati." },
];

export type Project = {
  n: string;
  title: string;
  img: string;
  imgAlt: string; // secondo frame per l'hover (effetto White Maple)
  category: string;
  place: string;
  year: string;
};

export const PROJECTS: Project[] = [
  { n: "01", title: "Stucco Veneziano", category: "Spatolato", place: "Bareggio", year: "2024", img: "g-spatolato", imgAlt: "g-spatolato-nicchie" },
  { n: "02", title: "Bagno chiavi in mano", category: "Ristrutturazione", place: "Milano", year: "2024", img: "g-bagno", imgAlt: "g-bagno-3" },
  { n: "03", title: "Pareti e luce", category: "Cartongesso", place: "Binasco", year: "2023", img: "g-cartongesso", imgAlt: "g-cartongesso-3" },
  { n: "04", title: "Posa pavimenti", category: "Pavimenti", place: "Bareggio", year: "2025", img: "g-pavimenti", imgAlt: "g-pavimenti-posa" },
  { n: "05", title: "Finiture interni", category: "Imbiancatura", place: "Sesto S.G.", year: "2024", img: "g-imbiancatura", imgAlt: "g-imbiancatura-2" },
  { n: "06", title: "Decorazioni d'autore", category: "Decorazioni", place: "Milano", year: "2025", img: "g-decorazione", imgAlt: "g-best-5" },
];

export const ROTATING_WORDS = [
  "imbiancature",
  "decorazioni",
  "spatolati",
  "cartongesso",
  "bagni",
];

export type Testimonial = { n: string; name: string; place: string; text: string; avatar: string };

const avatar = (seed: string) =>
  `https://api.dicebear.com/10.x/lorelei/svg?seed=${encodeURIComponent(seed)}`;

export const TESTIMONIALS: Testimonial[] = [
  {
    n: "01",
    name: "Rinaldo",
    place: "Milano",
    text: "Ci siamo rivolti a GIMS Service per diversi interventi: tinteggiatura, installazione di condizionatori e lavori sull'impianto idraulico. Sempre puntuali e precisi, ci hanno saputo consigliare le soluzioni più adatte, garantendo qualità e affidabilità in ogni fase.",
    avatar: avatar("Rinaldo"),
  },
  {
    n: "02",
    name: "Luca Conti",
    place: "Binasco",
    text: "Professionalità e cura hanno trasformato la nostra casa. Risultati che parlano da soli e qualità senza compromessi.",
    avatar: avatar("Luca Conti"),
  },
  {
    n: "03",
    name: "Elena Rossi",
    place: "Sesto San Giovanni",
    text: "Servizio impeccabile e soluzioni su misura hanno reso il nostro progetto un'esperienza senza stress e altamente soddisfacente.",
    avatar: avatar("Elena Rossi"),
  },
];

export type Step = { n: string; title: string; desc: string };

export const METHOD: Step[] = [
  { n: "01", title: "Sopralluogo", desc: "Vengo da te per capire esigenze, spazi e obiettivi." },
  { n: "02", title: "Preventivo gratuito e trasparente", desc: "Ti do una valutazione chiara, senza impegno." },
  { n: "03", title: "Cantiere ordinato e pulito", desc: "Lavoro con cura e gestisco anche lo smaltimento." },
  { n: "04", title: "Consegna chiavi in mano", desc: "Ti riconsegno l'ambiente pronto all'uso." },
];

export const PARTNERS = [
  { label: "Impianti Elettrici", key: "elettrico" },
  { label: "Serramenti", key: "serramenti" },
  { label: "Condizionamento", key: "condizionamento" },
  { label: "Impianti Idraulici", key: "idraulica" },
  { label: "Pompe di Calore", key: "pompa-calore" },
];

export const FAQ_TEASER = [
  { q: "Quanto costa il preventivo?", a: "È gratuito e senza impegno: vengo a fare il sopralluogo e ti consegno una valutazione chiara." },
  { q: "In quanto tempo iniziate i lavori?", a: "Dopo il sopralluogo concordiamo insieme una data: cerco sempre di rispettare i tempi promessi." },
  { q: "Lavorate anche fuori Bareggio?", a: "Sì: copro Bareggio e tutto l'ovest milanese, da Milano a Binasco fino al suo hinterland." },
];

export const SERVICE_TYPES = [
  "Imbiancatura",
  "Cartongesso",
  "Bagno",
  "Pavimenti",
  "Decorazioni",
  "Altro",
];
