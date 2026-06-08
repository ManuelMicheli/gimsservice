// Comuni serviti nell'ovest milanese → pagine servizio×città (/servizi/<slug>/<city>).
// Ogni comune ha contenuto proprio (blurb, CAP, comuni limitrofi) per evitare
// pagine duplicate/doorway: il testo cambia per servizio E per città.

export type City = {
  /** slug URL */
  slug: string;
  /** nome comune */
  name: string;
  /** CAP principale */
  cap: string;
  /** provincia */
  province: string;
  /**
   * Paragrafo introduttivo specifico del comune (geografia, zona, riferimenti
   * locali). Scritto in prima persona, coerente con la voce del sito.
   */
  blurb: string;
  /** comuni limitrofi (per link/segnali locali e copertura) */
  nearby: string[];
  /** riferimento/landmark locale, usato nel testo */
  landmark?: string;
};

export const CITIES: City[] = [
  {
    slug: "cornaredo",
    name: "Cornaredo",
    cap: "20010",
    province: "MI",
    blurb:
      "Cornaredo confina direttamente con Bareggio: sono qui in pochi minuti, comprese le frazioni di San Pietro all'Olmo e Cascina Croce. È una delle zone in cui lavoro più spesso, su ville, appartamenti e parti comuni di condominio.",
    nearby: ["Bareggio", "Settimo Milanese", "Pregnana Milanese", "Rho"],
    landmark: "San Pietro all'Olmo",
  },
  {
    slug: "sedriano",
    name: "Sedriano",
    cap: "20018",
    province: "MI",
    blurb:
      "Sedriano è a pochi chilometri da Bareggio, sulla direttrice per Magenta: ci arrivo rapidamente per sopralluoghi e cantieri, anche nella frazione di Roveda. Conosco bene la zona e le tipologie di abitazioni del posto.",
    nearby: ["Bareggio", "Vittuone", "Arluno", "Cornaredo"],
  },
  {
    slug: "vittuone",
    name: "Vittuone",
    cap: "20010",
    province: "MI",
    blurb:
      "A Vittuone intervengo su case singole, appartamenti e piccoli stabili. È un comune dell'ovest milanese vicino a Sedriano e Corbetta, comodo da raggiungere dalla mia sede di Bareggio.",
    nearby: ["Sedriano", "Arluno", "Corbetta", "Santo Stefano Ticino"],
  },
  {
    slug: "arluno",
    name: "Arluno",
    cap: "20004",
    province: "MI",
    blurb:
      "Arluno è ben collegato a Bareggio lungo la zona ovest: ci lavoro per imbiancature, ristrutturazioni e finiture, sia in centro sia nelle aree residenziali più nuove.",
    nearby: ["Vittuone", "Sedriano", "Casorezzo", "Santo Stefano Ticino"],
  },
  {
    slug: "pregnana-milanese",
    name: "Pregnana Milanese",
    cap: "20010",
    province: "MI",
    blurb:
      "Pregnana Milanese è tra Bareggio e Rho: una zona che servo abitualmente, con tempi di intervento rapidi per sopralluoghi e piccoli lavori di manutenzione oltre che per cantieri completi.",
    nearby: ["Rho", "Vanzago", "Cornaredo", "Sedriano"],
  },
  {
    slug: "vanzago",
    name: "Vanzago",
    cap: "20007",
    province: "MI",
    blurb:
      "A Vanzago, nota anche per l'oasi WWF, lavoro su abitazioni private e parti comuni. È un comune dell'ovest milanese che raggiungo facilmente passando da Pregnana e Pogliano.",
    nearby: ["Pregnana Milanese", "Rho", "Pogliano Milanese", "Arluno"],
    landmark: "oasi WWF di Vanzago",
  },
  {
    slug: "rho",
    name: "Rho",
    cap: "20017",
    province: "MI",
    blurb:
      "Rho è uno dei centri più grandi della zona ovest, vicino al polo fieristico Rho-Pero. Ci intervengo su appartamenti, ville e condomini, coordinando tutto come referente unico, dal sopralluogo alla consegna.",
    nearby: ["Pero", "Pregnana Milanese", "Cornaredo", "Lainate"],
    landmark: "Fiera Rho-Pero",
  },
  {
    slug: "settimo-milanese",
    name: "Settimo Milanese",
    cap: "20019",
    province: "MI",
    blurb:
      "Settimo Milanese, con le frazioni di Vighignolo e Seguro, confina con Bareggio e con Milano: una delle zone che servo più di frequente, con interventi rapidi e ordinati.",
    nearby: ["Milano", "Cornaredo", "Cusago", "Bareggio"],
    landmark: "Vighignolo e Seguro",
  },
  {
    slug: "cusago",
    name: "Cusago",
    cap: "20090",
    province: "MI",
    blurb:
      "A Cusago, dominata dal suo castello Visconteo, lavoro su ville e abitazioni di pregio dove la cura delle finiture conta: spatolati, decorazioni e ristrutturazioni curate nei dettagli.",
    nearby: ["Milano", "Settimo Milanese", "Bareggio", "Cisliano"],
    landmark: "Castello Visconteo di Cusago",
  },
  {
    slug: "corbetta",
    name: "Corbetta",
    cap: "20011",
    province: "MI",
    blurb:
      "Corbetta è un comune dell'ovest milanese tra Vittuone e Magenta: ci intervengo per imbiancature, ristrutturazioni e finiture su case e stabili, mantenendo cantieri puliti e tempi rispettati.",
    nearby: ["Vittuone", "Santo Stefano Ticino", "Magenta", "Abbiategrasso"],
  },
  {
    slug: "magenta",
    name: "Magenta",
    cap: "20013",
    province: "MI",
    blurb:
      "A Magenta, città dell'ovest milanese sul confine con il Ticino, seguo lavori di imbiancatura, ristrutturazione e finiture. Raggiungo la zona dalla mia sede di Bareggio lungo la direttrice per Novara.",
    nearby: ["Corbetta", "Boffalora sopra Ticino", "Marcallo con Casone", "Robecco sul Naviglio"],
  },
  {
    slug: "abbiategrasso",
    name: "Abbiategrasso",
    cap: "20081",
    province: "MI",
    blurb:
      "Abbiategrasso, sul Naviglio Grande a sud-ovest di Milano, è parte della mia area di lavoro: intervengo su abitazioni e stabili con la stessa cura che metto nei cantieri di Bareggio.",
    nearby: ["Corbetta", "Cassinetta di Lugagnano", "Robecco sul Naviglio", "Vermezzo con Zelo"],
    landmark: "Naviglio Grande",
  },
];

export const CITY_SLUGS = CITIES.map((c) => c.slug);

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

import type { ServicePage } from "@/lib/services-content";

/** FAQ di una pagina servizio×città: domande locali + FAQ del servizio. */
export function cityServiceFaq(
  page: ServicePage,
  city: City
): { q: string; a: string }[] {
  return [
    {
      q: `Lavorate a ${city.name}?`,
      a: `Sì: ${city.name} (${city.cap}, ${city.province}) rientra nella mia area di lavoro nell'ovest milanese. Vengo per il sopralluogo gratuito e seguo il cantiere di persona, dal primo incontro alla consegna.`,
    },
    {
      q: `Coprite anche i comuni vicini a ${city.name}?`,
      a: `Certo: oltre a ${city.name} servo anche ${city.nearby
        .slice(0, 3)
        .join(", ")} e il resto dell'ovest milanese.`,
    },
    ...page.faq,
  ];
}
