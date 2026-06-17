// Dataset arricchito per le varianti premium della sezione "Lavori in evidenza".
// Solo per la sandbox: usa le foto reali dei cantieri (ovest milanese).

export type WorkItem = {
  n: string;
  title: string;
  category: string;
  place: string;
  year: string;
  img: string;
  imgAlt: string;
};

export const WORKS: WorkItem[] = [
  { n: "01", title: "Spatolato", category: "Spatolato", place: "Bareggio", year: "2024", img: "g-spatolato", imgAlt: "g-spatolato-nicchie" },
  { n: "02", title: "Pareti e luce", category: "Cartongesso", place: "Milano", year: "2023", img: "g-cartongesso", imgAlt: "g-cartongesso-3" },
  { n: "03", title: "Posa pavimenti", category: "Pavimenti", place: "Bareggio", year: "2025", img: "g-pavimenti", imgAlt: "g-pavimenti-posa" },
  { n: "04", title: "Finiture interni", category: "Imbiancatura", place: "Milano", year: "2024", img: "g-imbiancatura", imgAlt: "g-imbiancatura-2" },
  { n: "05", title: "Decorazioni d'autore", category: "Decorazioni", place: "Milano", year: "2025", img: "g-decorazione", imgAlt: "g-best-5" },
];
