// Contenuto editoriale + SEO delle pagine servizio dedicate (/servizi/[slug]).
// Voce: prima persona singolare di José Giardino (coerente con il resto del sito).
// Ogni pagina mira a una query principale (mestiere + zona) + query secondarie.

export type ServicePage = {
  /** slug URL: /servizi/<slug> */
  slug: string;
  /** chiave immagine principale (vedi SmartImage / public/images) */
  imgKey: string;
  /** immagini galleria */
  gallery: string[];
  /** titolo H1 in pagina */
  h1: string;
  /** <title> (≤60 char consigliati) */
  metaTitle: string;
  /** meta description (≤160 char consigliati) */
  metaDescription: string;
  /** keyword target della pagina */
  keywords: string[];
  /** occhiello breve sopra l'H1 */
  eyebrow: string;
  /** sottotitolo/lead sotto l'H1 */
  lead: string;
  /** paragrafi introduttivi (corpo) */
  intro: string[];
  /** elenco lavorazioni / cosa è incluso */
  includes: { title: string; desc: string }[];
  /** motivi per scegliere (USP) */
  reasons: string[];
  /** FAQ specifiche del servizio */
  faq: { q: string; a: string }[];
  /** nome breve usato in schema.org Service.serviceType */
  serviceType: string;
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "imbiancatura",
    imgKey: "imbiancatura",
    gallery: ["g-imbiancatura", "g-imbiancatura-2", "g-cantiere"],
    h1: "Imbianchino a Bareggio e nell'ovest milanese",
    metaTitle: "Imbianchino Bareggio — Imbiancatura interni ed esterni",
    metaDescription:
      "Imbianchino a Bareggio (MI) e ovest milanese: imbiancatura e tinteggiatura di interni ed esterni con prodotti certificati. Cantiere pulito, preventivo gratuito. 30+ anni di esperienza.",
    keywords: [
      "imbianchino Bareggio",
      "imbianchino Milano",
      "imbiancatura interni",
      "tinteggiatura pareti",
      "imbianchino ovest milanese",
      "pittura interni ed esterni",
    ],
    eyebrow: "Imbiancatura & Tinteggiatura",
    lead: "Pareti e soffitti perfetti, senza polvere né disordine. Vengo io di persona, dal sopralluogo all'ultima mano.",
    intro: [
      "Faccio l'imbianchino da oltre trent'anni e tinteggio interni ed esterni a Bareggio e in tutto l'ovest milanese. Ogni lavoro parte da una preparazione fatta come si deve: stuccatura delle imperfezioni, carteggiatura, protezione di pavimenti e mobili. È lì che si vede la differenza tra una mano di pittura e un lavoro fatto bene.",
      "Uso solo pitture certificate dei migliori marchi italiani: lavabili, traspiranti, antimuffa dove serve. Ti consiglio il prodotto e la finitura giusta per ogni ambiente — opaco vellutato in soggiorno, lavabile in cucina e bagno, traspirante sulle facciate esterne.",
      "Lavoro pulito e ordinato, rispetto i tempi concordati e a fine giornata trovi il cantiere in ordine. Un solo referente per tutto: niente squadre che cambiano, niente sorprese.",
    ],
    includes: [
      { title: "Preparazione delle superfici", desc: "Stuccatura, carteggiatura e fondo: la base che fa durare il colore nel tempo." },
      { title: "Tinteggiatura interni", desc: "Pareti e soffitti con pitture lavabili e traspiranti, finitura uniforme senza aloni." },
      { title: "Pitture per esterni e facciate", desc: "Cicli traspiranti e resistenti agli agenti atmosferici per balconi, facciate e androni." },
      { title: "Trattamenti antimuffa", desc: "Risanamento di zone umide con prodotti specifici, alla radice del problema." },
      { title: "Protezione e ripristino", desc: "Copro mobili e pavimenti, smonto e rimonto, e ti riconsegno la stanza pronta." },
    ],
    reasons: [
      "Un solo artigiano dal sopralluogo alla consegna",
      "Prodotti certificati e finiture su misura per ogni ambiente",
      "Cantiere pulito, ordinato e tempi rispettati",
    ],
    faq: [
      { q: "Quanto costa imbiancare un appartamento a Bareggio?", a: "Dipende da metratura, stato delle pareti e finitura scelta. Vengo a fare il sopralluogo gratuito e ti do un preventivo chiaro, senza impegno." },
      { q: "Devo spostare i mobili prima che arriviate?", a: "No: copro e proteggo io mobili e pavimenti. Per i pezzi più grandi mi organizzo direttamente in cantiere." },
      { q: "Usate pitture lavabili e antimuffa?", a: "Sì. In cucina e bagno consiglio lavabili, nelle zone umide trattamenti antimuffa specifici. Scelgo il prodotto in base all'ambiente." },
    ],
    serviceType: "Imbiancatura e tinteggiatura",
  },

  {
    slug: "decorazioni-pareti",
    imgKey: "cover-decorazioni",
    gallery: ["g-decorazione", "decorazione-2"],
    h1: "Decorazioni e finiture decorative per pareti",
    metaTitle: "Decoratore Bareggio — Decorazioni e finiture pareti",
    metaDescription:
      "Decorazioni di pregio per pareti a Bareggio e ovest milanese: finiture materiche, velature, effetti decorativi con materiali certificati. Sopralluogo e preventivo gratuiti.",
    keywords: [
      "decoratore Bareggio",
      "decorazioni pareti",
      "finiture decorative",
      "velature pareti",
      "pittura decorativa Milano",
    ],
    eyebrow: "Decorazioni d'interni",
    lead: "Dai carattere alle tue pareti con finiture decorative realizzate a regola d'arte.",
    intro: [
      "Le decorazioni sono il modo più diretto per dare personalità a un ambiente. Realizzo velature, effetti materici e finiture decorative su misura, con materiali certificati e tecniche che conosco da decenni di cantiere.",
      "Parto sempre da un confronto su ambiente, luce e stile che hai in mente: poi preparo campioni reali sulla parete, così scegli con cura prima di partire. Niente effetti improvvisati — solo finiture che durano e che ti rappresentano.",
      "Lavoro a Bareggio e in tutto l'ovest milanese, su singole pareti d'accento o su interi ambienti.",
    ],
    includes: [
      { title: "Velature e patinature", desc: "Profondità e movimento del colore con passaggi sovrapposti, fatti a mano." },
      { title: "Effetti materici", desc: "Superfici materiche e sabbiate per pareti d'accento di carattere." },
      { title: "Campionature in cantiere", desc: "Provini reali sulla tua parete prima di iniziare: scegli sul sicuro." },
      { title: "Finiture su misura", desc: "Tonalità ed effetti calibrati su luce e arredo dell'ambiente." },
    ],
    reasons: [
      "Campioni reali prima di partire",
      "Materiali certificati e tecniche professionali",
      "Finiture coordinate con luce e arredo",
    ],
    faq: [
      { q: "Posso vedere un campione prima di decidere?", a: "Sì, preparo provini reali direttamente sulla tua parete: così valuti effetto e tonalità con la luce dell'ambiente prima di iniziare." },
      { q: "Le decorazioni si possono pulire?", a: "Dipende dalla finitura: molte sono resistenti e pulibili. Ti consiglio la soluzione giusta in base all'uso della stanza." },
      { q: "Decorate anche una sola parete?", a: "Certo. Una parete d'accento è spesso la scelta migliore per dare carattere senza appesantire l'ambiente." },
    ],
    serviceType: "Decorazioni d'interni",
  },

  {
    slug: "spatolato-veneziano",
    imgKey: "cover-spatolato",
    gallery: ["g-spatolato", "g-spatolato-2", "g-spatolato-nicchie", "g-spatolato-3"],
    h1: "Spatolato e stucco veneziano per superfici di pregio",
    metaTitle: "Spatolato Veneziano Bareggio — Stucco antico",
    metaDescription:
      "Spatolato e stucco veneziano a Bareggio e ovest milanese: finiture lucide e materiche per pareti di pregio, applicate a mano. 30+ anni di esperienza. Preventivo gratuito.",
    keywords: [
      "spatolato veneziano",
      "stucco veneziano Bareggio",
      "stucco antico",
      "finiture spatolate",
      "marmorino Milano",
    ],
    eyebrow: "Finiture di pregio",
    lead: "Lo spatolato veneziano è la finitura più nobile: profondità, luce e tatto che solo la mano sa dare.",
    intro: [
      "Lo spatolato e lo stucco antico veneziano sono finiture che non perdonano l'approssimazione: contano la preparazione del fondo, il numero di passaggi e la mano di chi le stende. Le realizzo da anni e le applico interamente a spatola, una passata dopo l'altra.",
      "Il risultato è una superficie viva, con riflessi e profondità che cambiano con la luce: ideale per ingressi, soggiorni, sale da pranzo e ambienti che vuoi rendere unici.",
      "Lavoro a Bareggio e nell'ovest milanese, con campionatura preventiva di colore e grado di lucentezza.",
    ],
    includes: [
      { title: "Stucco veneziano lucido", desc: "Finitura levigata e brillante, effetto marmo, per ambienti di rappresentanza." },
      { title: "Marmorino e finiture materiche", desc: "Superfici materiche dall'aspetto naturale, calde al tatto." },
      { title: "Preparazione del fondo", desc: "Rasatura e fondo perfetti: lo spatolato vive di una base impeccabile." },
      { title: "Campionatura colore e lucentezza", desc: "Definiamo insieme tonalità e brillantezza prima di iniziare." },
    ],
    reasons: [
      "Applicazione interamente a mano, a spatola",
      "Fondo preparato a regola d'arte",
      "Campione di colore e lucentezza prima del lavoro",
    ],
    faq: [
      { q: "Lo spatolato veneziano è adatto al bagno?", a: "Sì, con il ciclo e la protezione corretti è adatto anche ad ambienti umidi. Valuto la situazione in sopralluogo e scelgo il prodotto giusto." },
      { q: "Quanto dura una finitura in stucco veneziano?", a: "Se il fondo è preparato bene e la finitura protetta, dura molti anni mantenendo profondità e brillantezza." },
      { q: "Si può fare su una parete già tinteggiata?", a: "Sì, previa preparazione del fondo. In sopralluogo verifico lo stato della parete e ti dico cosa serve." },
    ],
    serviceType: "Spatolato e stucco veneziano",
  },

  {
    slug: "cartongesso",
    imgKey: "cover-cartongesso",
    gallery: ["g-cartongesso", "g-cartongesso-2", "g-cartongesso-3", "g-cartongesso-4", "g-cartongesso-5", "g-hero"],
    h1: "Cartongesso a Bareggio: pareti, controsoffitti e arredo",
    metaTitle: "Cartongesso Bareggio e Milano — Pareti e controsoffitti",
    metaDescription:
      "Cartongessista a Bareggio e ovest milanese: pareti divisorie, controsoffitti, velette, librerie e nicchie su misura, con predisposizione luci e impianti. Preventivo gratuito.",
    keywords: [
      "cartongesso Bareggio",
      "cartongessista Milano",
      "pareti in cartongesso",
      "controsoffitti",
      "velette e nicchie cartongesso",
    ],
    eyebrow: "Cartongesso su misura",
    lead: "Ridisegno gli spazi con pareti, controsoffitti ed elementi su misura, pronti da tinteggiare.",
    intro: [
      "Con il cartongesso puoi cambiare la geometria di una casa senza opere murarie pesanti: dividere una stanza, abbassare un soffitto, creare nicchie, librerie e punti luce. Realizzo strutture su misura, dritte e solide, predisposte per impianti e illuminazione.",
      "Curo i dettagli che fanno la differenza: spigoli protetti, giunti rasati a perfezione, predisposizione per faretti e led. Ti consegno superfici pronte per la tinteggiatura — che posso fare io stesso, così hai un unico referente.",
      "Intervengo a Bareggio e in tutto l'ovest milanese, in case private e in stabili.",
    ],
    includes: [
      { title: "Pareti divisorie", desc: "Nuovi ambienti su misura, anche con isolamento acustico e termico." },
      { title: "Controsoffitti e velette", desc: "Soffitti ribassati, velette e tagli luce per illuminazione d'atmosfera." },
      { title: "Librerie e nicchie", desc: "Elementi decorativi e contenitivi integrati nelle pareti." },
      { title: "Predisposizione impianti e luci", desc: "Passaggio cavi, faretti e led predisposti dentro la struttura." },
      { title: "Rasatura pronta a finire", desc: "Giunti e spigoli rasati: la parete è pronta per pittura o decorazione." },
    ],
    reasons: [
      "Strutture solide e perfettamente in piano",
      "Predisposizione luci e impianti integrata",
      "Unico referente anche per la tinteggiatura finale",
    ],
    faq: [
      { q: "Il cartongesso isola dai rumori?", a: "Sì: con le lastre e il materiale isolante giusto migliora sensibilmente l'isolamento acustico e termico. Lo dimensiono in base all'esigenza." },
      { q: "Posso appendere mensole o la TV a una parete in cartongesso?", a: "Sì, basta predisporre i rinforzi nei punti giusti. Se mi dici cosa va appeso, li inserisco durante la costruzione." },
      { q: "Fate anche la tinteggiatura dopo?", a: "Sì. Costruisco la struttura, la raso e la tinteggio: un solo referente dall'inizio alla fine." },
    ],
    serviceType: "Cartongesso",
  },

  {
    slug: "pavimenti-e-rivestimenti",
    imgKey: "cover-pavimenti",
    gallery: ["g-pavimenti", "g-pavimenti-2", "g-pavimenti-3", "g-pavimenti-4", "g-pavimenti-5", "g-pavimenti-posa", "g-pavimenti-posa-2"],
    h1: "Piastrellista a Bareggio: pavimenti e rivestimenti",
    metaTitle: "Piastrellista Bareggio — Pavimenti e rivestimenti",
    metaDescription:
      "Posa pavimenti e rivestimenti a Bareggio e ovest milanese: piastrelle, gres, parquet, laminato e PVC. Posa precisa, fughe perfette. Sopralluogo e preventivo gratuiti.",
    keywords: [
      "piastrellista Bareggio",
      "posa piastrelle Milano",
      "posa pavimenti",
      "rivestimenti bagno e cucina",
      "posa parquet e laminato",
    ],
    eyebrow: "Pavimenti & Rivestimenti",
    lead: "Posa precisa di piastrelle, gres, parquet e laminato: linee dritte, fughe perfette, finiture pulite.",
    intro: [
      "La posa fa la differenza tra un pavimento qualunque e uno fatto bene. Curo planarità del fondo, allineamento, fughe e tagli: i dettagli che si vedono ogni giorno. Poso piastrelle e gres, parquet, laminato e PVC, sia a pavimento sia a rivestimento.",
      "In bagno e cucina seguo anche i rivestimenti a parete, con attenzione agli angoli, ai sanitari e agli incassi. Ti aiuto a scegliere formato, posa (dritta, diagonale, a spina) e fuga giusta per l'ambiente.",
      "Lavoro a Bareggio e in tutto l'ovest milanese, su nuove pose e rifacimenti.",
    ],
    includes: [
      { title: "Posa piastrelle e gres", desc: "Pavimenti e rivestimenti in ceramica e gres porcellanato, anche grandi formati." },
      { title: "Parquet e laminato", desc: "Posa di parquet prefinito e laminato, flottante o incollato." },
      { title: "Pavimenti in PVC/LVT", desc: "Soluzioni resistenti e veloci, ideali per ristrutturazioni rapide." },
      { title: "Rivestimenti bagno e cucina", desc: "Pareti, paraschizzi e docce con tagli precisi attorno a incassi e sanitari." },
      { title: "Preparazione del sottofondo", desc: "Verifica e ripristino della planarità: la base di una posa duratura." },
    ],
    reasons: [
      "Fughe allineate e tagli precisi",
      "Consiglio su formato, schema di posa e fuga",
      "Nuove pose e rifacimenti, anche su vecchio pavimento",
    ],
    faq: [
      { q: "Si può posare il nuovo pavimento sopra quello vecchio?", a: "In molti casi sì, se il fondo è solido e in piano. Verifico in sopralluogo e ti dico la soluzione migliore per il tuo caso." },
      { q: "Quale fuga conviene per il bagno?", a: "In bagno consiglio fughe strette e stucchi idonei all'umidità. Scelgo colore e tipo in base alle piastrelle e all'uso." },
      { q: "Posate anche grandi formati e gres effetto legno?", a: "Sì, lavoro con grandi formati e gres effetto legno o pietra, con attrezzatura e posa adeguate." },
    ],
    serviceType: "Posa pavimenti e rivestimenti",
  },

  {
    slug: "tapparelle",
    imgKey: "tapparelle",
    gallery: ["tapparelle", "g-manutenzione-2"],
    h1: "Tapparelle a Bareggio: installazione e riparazione",
    metaTitle: "Tapparelle Bareggio — Installazione e riparazione",
    metaDescription:
      "Installazione, riparazione e manutenzione tapparelle a Bareggio e ovest milanese: sostituzione, cinghie, motorizzazione e cassonetti. Interventi accurati, preventivo gratuito.",
    keywords: [
      "tapparelle Bareggio",
      "riparazione tapparelle Milano",
      "sostituzione tapparelle",
      "motorizzazione tapparelle",
      "cambio cinghia tapparella",
    ],
    eyebrow: "Tapparelle & serramenti",
    lead: "Installo, riparo e motorizzo tapparelle con materiali resistenti e lavorazioni accurate.",
    intro: [
      "Una tapparella che si blocca o fa rumore è un fastidio quotidiano. Mi occupo di installazione, riparazione e manutenzione: sostituzione del telo, cambio cinghie e rulli, revisione del cassonetto e motorizzazione di tapparelle manuali.",
      "Uso materiali resistenti e curo i dettagli, così l'intervento dura nel tempo. Se conviene sostituire invece di riparare, te lo dico chiaramente e ti propongo la soluzione più sensata.",
      "Intervengo a Bareggio e in tutto l'ovest milanese, su abitazioni e stabili.",
    ],
    includes: [
      { title: "Sostituzione tapparelle", desc: "Nuovi teli in PVC o alluminio, su misura della tua finestra." },
      { title: "Riparazione e cinghie", desc: "Cambio cinghie, rulli e meccanismi bloccati o usurati." },
      { title: "Motorizzazione", desc: "Trasformazione da manuale a motorizzata, anche con comando a distanza." },
      { title: "Cassonetti e revisione", desc: "Revisione del cassonetto e dei componenti per un funzionamento silenzioso." },
    ],
    reasons: [
      "Diagnosi onesta: riparo se conviene, sostituisco se serve",
      "Materiali resistenti e lavorazioni accurate",
      "Interventi rapidi e puliti",
    ],
    faq: [
      { q: "Conviene riparare o sostituire la tapparella?", a: "Dipende dallo stato del telo e dei meccanismi. In sopralluogo valuto e ti dico la soluzione più conveniente, senza farti spendere più del necessario." },
      { q: "Potete motorizzare una tapparella manuale?", a: "Sì, trasformo tapparelle manuali in motorizzate, anche con comando a distanza. Valuto fattibilità e cassonetto sul posto." },
      { q: "Intervenite anche per una sola tapparella?", a: "Sì, anche per un singolo intervento. Mi organizzo per risolvere in modo rapido e pulito." },
    ],
    serviceType: "Tapparelle: installazione e riparazione",
  },

  {
    slug: "manutenzione-stabili",
    imgKey: "cover-manutenzione",
    gallery: ["g-manutenzione", "g-manutenzione-2", "g-manutenzione-3", "g-manifesto"],
    h1: "Manutenzione stabili e condomini nell'ovest milanese",
    metaTitle: "Manutenzione Stabili Bareggio — Condomini e immobili",
    metaDescription:
      "Manutenzione ordinaria e straordinaria di stabili e condomini a Bareggio e ovest milanese: tinteggiatura parti comuni, piccole opere edili, interventi programmati. Preventivo gratuito.",
    keywords: [
      "manutenzione stabili Bareggio",
      "manutenzione condomini Milano",
      "tinteggiatura parti comuni",
      "manutenzione immobili ovest milanese",
      "piccole opere edili condominio",
    ],
    eyebrow: "Manutenzione immobili",
    lead: "Tengo in ordine stabili e condomini con interventi programmati e un unico referente affidabile.",
    intro: [
      "Uno stabile ben tenuto vale di più e dura di più. Mi occupo della manutenzione ordinaria e straordinaria di condomini e immobili: tinteggiatura di androni, scale e parti comuni, ritocchi, piccole opere edili e interventi programmati nel tempo.",
      "Per amministratori e proprietari sono un referente unico e affidabile: concordiamo un piano di interventi, rispetto tempi e accessi, e lascio sempre le aree pulite e fruibili.",
      "Lavoro a Bareggio e in tutto l'ovest milanese, con disponibilità a sopralluoghi e preventivi per i condomini.",
    ],
    includes: [
      { title: "Tinteggiatura parti comuni", desc: "Androni, scale, ballatoi e corridoi mantenuti decorosi nel tempo." },
      { title: "Piccole opere edili", desc: "Ripristini di intonaco, sigillature e interventi murari minori." },
      { title: "Interventi programmati", desc: "Piano di manutenzione concordato con amministratore o proprietà." },
      { title: "Ripristini e ritocchi", desc: "Risanamento di muffe, infiltrazioni e ammaloramenti localizzati." },
    ],
    reasons: [
      "Referente unico per amministratori e proprietà",
      "Interventi programmati e tempi rispettati",
      "Aree comuni sempre pulite e fruibili",
    ],
    faq: [
      { q: "Lavorate con gli amministratori di condominio?", a: "Sì, sono un referente unico e affidabile: concordiamo un piano di interventi e gestisco tutto in modo ordinato e programmato." },
      { q: "Fate anche interventi straordinari urgenti?", a: "Sì. Per infiltrazioni, distacchi o ammaloramenti intervengo in tempi rapidi dopo un sopralluogo di valutazione." },
      { q: "Coprite anche i comuni dell'ovest milanese?", a: "Sì: Bareggio e tutto l'hinterland ovest, da Milano a Binasco fino ai comuni limitrofi." },
    ],
    serviceType: "Manutenzione stabili e condomini",
  },
];

export const SERVICE_SLUGS = SERVICE_PAGES.map((s) => s.slug);

export function getServicePage(slug: string): ServicePage | undefined {
  return SERVICE_PAGES.find((s) => s.slug === slug);
}
