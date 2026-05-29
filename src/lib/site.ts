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
  { label: "Servizi", href: "#servizi" },
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
};

export const SERVICES: Service[] = [
  { n: "01", title: "Imbiancatura", img: "imbiancatura", desc: "Imbiancature per interni ed esterni con materiali certificati dei migliori marchi italiani." },
  { n: "02", title: "Decorazioni", img: "decorazione", desc: "Decorazioni realizzate con materiali certificati e tecniche professionali." },
  { n: "03", title: "Spatolati", img: "spatolati", desc: "Finiture spatolate, anche stucco antico veneziano, per superfici di pregio." },
  { n: "04", title: "Cartongesso", img: "cartongesso", desc: "Pareti, controsoffitti ed elementi decorativi in cartongesso su misura." },
  { n: "05", title: "Pavimenti e Rivestimenti", img: "pavimenti", desc: "Posa di piastrelle, laminato, PVC e parquet." },
  { n: "06", title: "Ristrutturazione Bagni", img: "bagno", desc: "Trasformiamo il bagno in un ambiente di comfort e stile, chiavi in mano." },
  { n: "07", title: "Tapparelle", img: "tapparelle", desc: "Installazione e manutenzione con materiali resistenti e lavorazioni accurate." },
  { n: "08", title: "Manutenzione Stabili", img: "manutenzione", desc: "Manutenzione ordinaria e straordinaria con interventi programmati." },
];

export type Project = {
  n: string;
  title: string;
  img: string;
  imgAlt: string; // secondo frame per l'hover (effetto White Maple)
};

export const PROJECTS: Project[] = [
  { n: "01", title: "Decorazione", img: "decorazione", imgAlt: "decorazione-2" },
  { n: "02", title: "Imbiancatura", img: "imbiancatura", imgAlt: "imbiancatura-2" },
  { n: "03", title: "Spatolati", img: "spatolati", imgAlt: "spatolati-2" },
  { n: "04", title: "Cartongesso", img: "cartongesso", imgAlt: "cartongesso-2" },
  { n: "05", title: "Pavimenti", img: "pavimenti", imgAlt: "pavimenti-2" },
];

export const ROTATING_WORDS = [
  "imbiancature",
  "decorazioni",
  "spatolati",
  "cartongesso",
  "bagni",
];

export type Testimonial = { n: string; name: string; place: string; text: string };

export const TESTIMONIALS: Testimonial[] = [
  {
    n: "01",
    name: "Rinaldo",
    place: "Milano",
    text: "Ci siamo rivolti a GIMS Service per diversi interventi: tinteggiatura, installazione di condizionatori e lavori sull'impianto idraulico. Sempre puntuali e precisi, ci hanno saputo consigliare le soluzioni più adatte, garantendo qualità e affidabilità in ogni fase.",
  },
  {
    n: "02",
    name: "Luca Conti",
    place: "Binasco",
    text: "Professionalità e cura hanno trasformato la nostra casa. Risultati che parlano da soli e qualità senza compromessi.",
  },
  {
    n: "03",
    name: "Elena Rossi",
    place: "Sesto San Giovanni",
    text: "Servizio impeccabile e soluzioni su misura hanno reso il nostro progetto un'esperienza senza stress e altamente soddisfacente.",
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
