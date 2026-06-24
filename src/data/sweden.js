export const SWEDEN = {
  code: "SWE",
  numericId: 752,
  name: "Suède",
  emoji: "🇸🇪",
  capital: "Stockholm",
  language: "Suédois",
  currency: "Couronne suédoise (SEK)",
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 100, budgetMid: 180,
    tripMin: 1500, tripMid: 3500,
  },
  description:
    "La Suède offre une nature sauvage immense : l'archipel de Stockholm (30 000 îles), la Laponie suédoise avec ses aurores boréales et ses rennes, les forêts de pins infinies, et les lacs de l'intérieur. Stockholm est l'une des capitales les plus belles d'Europe — construite sur 14 îles. Le pays de l'IKEA, d'ABBA, du design et du fika (pause café rituelle).",

  bestPeriods: [
    {
      months: "Juin – Août",
      label: "Été scandinave",
      color: "#22c55e",
      description:
        "Soleil quasi permanent à Stockholm (17–21°C), archipel animé, randonnées en Laponie. Soleil de minuit au-dessus du cercle polaire. Meilleure saison.",
      icon: "☀️",
    },
    {
      months: "Décembre – Mars",
      label: "Hiver arctique",
      color: "#3b82f6",
      description:
        "Aurores boréales en Laponie (Abisko, meilleur site d'Europe), traîneaux à chiens, ski, hôtel de glace de Jukkasjärvi. -20°C en Laponie, -5°C à Stockholm.",
      icon: "🌌",
    },
  ],

  weatherCities: [
    {
      id: "stockholm",
      name: "Stockholm",
      region: "Suède centrale (archipel baltique)",
      data: [
        { month: "Jan", temp: -2, rain: 40,  icon: "❄️" },
        { month: "Fév", temp: -2, rain: 30,  icon: "❄️" },
        { month: "Mar", temp:  2, rain: 35,  icon: "⛅" },
        { month: "Avr", temp:  7, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 13, rain: 35,  icon: "☀️" },
        { month: "Jun", temp: 17, rain: 45,  icon: "☀️" },
        { month: "Jul", temp: 21, rain: 60,  icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 65,  icon: "☀️" },
        { month: "Sep", temp: 15, rain: 55,  icon: "⛅" },
        { month: "Oct", temp:  9, rain: 55,  icon: "⛅" },
        { month: "Nov", temp:  4, rain: 55,  icon: "⛅" },
        { month: "Déc", temp:  1, rain: 45,  icon: "❄️" },
      ],
    },
    {
      id: "abisko",
      name: "Abisko (Laponie)",
      region: "Laponia — cercle polaire (68°N)",
      data: [
        { month: "Jan", temp: -14, rain: 30, icon: "❄️" },
        { month: "Fév", temp: -13, rain: 25, icon: "❄️" },
        { month: "Mar", temp:  -8, rain: 25, icon: "❄️" },
        { month: "Avr", temp:  -2, rain: 25, icon: "❄️" },
        { month: "Mai", temp:   5, rain: 30, icon: "⛅" },
        { month: "Jun", temp:  12, rain: 40, icon: "⛅" },
        { month: "Jul", temp:  14, rain: 50, icon: "⛅" },
        { month: "Aoû", temp:  12, rain: 55, icon: "⛅" },
        { month: "Sep", temp:   6, rain: 45, icon: "⛅" },
        { month: "Oct", temp:   0, rain: 45, icon: "⛅" },
        { month: "Nov", temp:  -6, rain: 35, icon: "❄️" },
        { month: "Déc", temp: -11, rain: 30, icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Stockholm — Capitale sur l'eau",
      region: "Suède centrale",
      description:
        "Stockholm s'étend sur 14 îles entre le lac Mälaren et la mer Baltique : Gamla Stan (vieille ville médiévale du XIIIe siècle), le musée Vasa (navire de guerre de 1628 intact), le musée Skansen (premier musée en plein air du monde), et les quartiers branchés de Södermalm et Östermalm. Une capitale qui conjugue histoire, design et nature à portée de ferry.",
      wikipedia: "Stockholm",
      tags: ["Ville", "Musées", "Architecture", "Îles", "Gastronomie"],
      mustSee: [
        { name: "Musée Vasa — navire de guerre du XVIIe siècle intact", wikipedia: "Vasa_(ship)" },
        { name: "Gamla Stan — vieille ville médiévale et Palais Royal", wikipedia: "File:Västerlånggatan,_Gamla_stan,_Stockholm.jpg" },
        { name: "Archipel de Stockholm en ferry (30 000 îles)", wikipedia: "File:SS Stockholm August 2015 01.jpg" },
        { name: "ABBA The Museum — exposition interactive sur ABBA", wikipedia: "File:ABBA- The Museum-4.jpg" },
      ],
    },
    {
      id: 2,
      name: "Laponie suédoise — Aurores et rennes",
      region: "Norrbotten (cercle polaire)",
      description:
        "La Laponie suédoise abrite le parc national de Laponia (UNESCO), les éleveurs de rennes Sami, et Abisko — réputé avoir le ciel le plus clair d'Europe pour les aurores boréales. L'Ice Hotel de Jukkasjärvi est un hôtel entièrement reconstruit en glace chaque année depuis 1990. La randonnée de la Kungsleden (500km) est le trek le plus emblématique de Scandinavie.",
      wikipedia: "File:Oratunturi_central_summit_from_the_west_in_midnight,_Sodankylä,_Lapland,_Finland,_2019_June.jpg",
      tags: ["Aurores", "Rennes", "Sami", "Arctique", "Nature", "Randonnée"],
      mustSee: [
        { name: "Ice Hotel Jukkasjärvi — chambre sculptée dans la glace", wikipedia: "File:Icehotel-se-01.JPG" },
        { name: "Aurores boréales depuis la Aurora Sky Station d'Abisko", wikipedia: "File:Aurora in Abisko near Torneträsk.jpg" },
        { name: "Traîneau à chiens en Laponie (excursion 2–3h)", wikipedia: "File:Reindeers_at_Lake_Torneträsk,_Abisko_area,_Swedish_Lapland.jpg" },
      ],
    },
    {
      id: 3,
      name: "Gotland — Île médiévale de la Baltique",
      region: "Mer Baltique",
      description:
        "Gotland est la plus grande île de la Baltique : Visby, sa capitale médiévale (UNESCO), est entourée de remparts du XIIIe siècle intacts. Les champs de fleurs sauvages, les raukar (piliers calcaires sur les plages), les ruines d'églises romanes et le festival médiéval annuel d'août font de Gotland une destination unique en Europe.",
      wikipedia: "File:Helgumannen (2) hq.JPG",
      tags: ["Médiéval", "UNESCO", "Île", "Remparts"],
      mustSee: [
        { name: "Visby — ville médiévale fortifiée UNESCO (XIIIe s.)", wikipedia: "File:Visby domkyrka July 2019 07.jpg" },
        { name: "Raukar de Fårö — sculptures naturelles calcaires sur la plage", wikipedia: "File:Gotland Fårö-Raukar Gamlehamn.jpg" },
        { name: "Festival médiéval de Visby (août)", wikipedia: "File:Jousting during the Medieval Week in Visby in 2009.jpg" },
        { name: "Ruines des 94 églises médiévales de Gotland", wikipedia: "File:Visby_panorama_från_klinten.jpg" },
      ],
    },
    {
      id: 4,
      name: "Côte ouest — Göteborg et Bohuslän",
      region: "Västra Götaland",
      description:
        "Göteborg est la deuxième ville de Suède, réputée pour ses fruits de mer (les meilleures langoustes et crevettes de Scandinavie), ses canaux néerlandais, et Liseberg (l'un des parcs d'attractions les plus appréciés d'Europe). La côte de Bohuslän au nord : villages de pêcheurs sur des rochers granitiques polis par la mer, gravures rupestres de Tanum (UNESCO).",
      wikipedia: "Gothenburg",
      tags: ["Fruits de mer", "Côte", "UNESCO", "Design"],
      mustSee: [
        { name: "Marché de Feskekorka — fruits de mer frais de Bohuslän", wikipedia: "File:00 3022 Göteborg - Markthallen.jpg" },
        { name: "Gravures rupestres de Tanum — art de l'Âge du Bronze (UNESCO)", wikipedia: "Rock_Carvings_in_Tanum" },
        { name: "Archipel de Bohuslän — kayak entre les îlots granitiques", wikipedia: "File:Bohuslän 2017.jpg" },
        { name: "Universeum — grand aquarium de Scandinavie", wikipedia: "Universeum" },
      ],
    },
    {
      id: 5,
      name: "Åre & Sälen",
      region: "Jämtland / Dalarna",
      description:
        "Åre est la plus grande station de ski de Scandinavie, prisée pour ses pistes alpines et son ambiance animée. Plus au sud, Sälen réunit quatre domaines parfaits pour les familles. Forêts, lacs gelés et parcs nationaux complètent ce terrain de jeu nordique en hiver comme en été.",
      wikipedia: "Åre",
      tags: ["Ski", "Nature", "Randonnée"],
      mustSee: [
        { name: "Åre — plus grande station scandinave", wikipedia: "Åre" },
        { name: "Sälen — 4 domaines réunis", wikipedia: "Sälen" },
        { name: "Parc national de Fulufjället", wikipedia: "File:Fulufjällets nationalpark, July 2022 30.jpg" },
        { name: "Östersund & musée Jamtli", wikipedia: "Östersund" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Suède est chère mais moins que la Norvège. Le franc-suédois fort rend tout plus onéreux pour les visiteurs, mais le supermarché reste accessible. Les transports sont excellents et relativement abordables. L'hébergement est le poste le plus lourd.",
    currency: "SEK",
    exchangeRate: "1€ ≈ 11 SEK",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "STF Hostel (auberge officielle suédoise)", price: "30–60 €", detail: "Dortoir ou chambre double, bon rapport qualité/prix" },
          { label: "Hôtel 3★ Stockholm ou Göteborg", price: "120–200 €", detail: "Confort standard en ville" },
          { label: "Ice Hotel Jukkasjärvi (chambre de glace)", price: "350–600 €", detail: "Expérience unique de janvier à avril" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Lunch suédois (dagens rätt — plat du jour + café)", price: "12–18 €", detail: "Formule déjeuner partout en Suède" },
          { label: "Fika (café + kanelbulle) dans un café", price: "5–8 €", detail: "Rituel social suédois incontournable" },
          { label: "Supermarché ICA ou Coop — courses pour la journée", price: "15–25 €", detail: "Qualité excellente" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Train SJ Stockholm–Göteborg (3h)", price: "20–60 €", detail: "Réservation à l'avance conseillée" },
          { label: "SL (métro + bus Stockholm, ticket 24h)", price: "10 €", detail: "Réseau très efficace" },
          { label: "Ferry Stockholm–Gotland (6h)", price: "25–60 €", detail: "Destination + vélo possible" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Musée Vasa (Stockholm)", price: "19 €", detail: "Incontournable, inclus dans Stockholm Pass" },
          { label: "Excursion aurores boréales (Abisko, minibus, 4h)", price: "60–100 €", detail: "Déc–mars, selon météo" },
          { label: "Kayak archipel de Stockholm (demi-journée)", price: "50–80 €", detail: "Location ou guidé" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "100–160 €/j", desc: "Auberge + supermarché + transports publics", color: "#22c55e" },
      { type: "Confort", daily: "180–300 €/j", desc: "Hôtel 3★ + restaurants + excursions", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Stockholm (3j) → Gotland (2j) → Göteborg et Bohuslän (2j) → Laponie Abisko (3j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 500 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Stockholm (SAS, Norwegian, EasyJet)", amount: "80–200 €" },
            { label: "Hébergement (10 nuits)", amount: "400–700 €" },
            { label: "Transports intérieurs (train, ferry)", amount: "300–500 €" },
            { label: "Nourriture (supermarché + dagens rätt)", amount: "350–500 €" },
            { label: "Activités & musées", amount: "200–400 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 500 – 6 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Stockholm", amount: "150–400 €" },
            { label: "Hôtels 3★ (10 nuits)", amount: "1 200–2 000 €" },
            { label: "Transports + vol intérieur Laponie", amount: "500–900 €" },
            { label: "Nourriture & restaurants", amount: "600–900 €" },
            { label: "Aurores, kayak, musées, Ice Hotel", amount: "600–1 000 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~2–2h30 (SAS, Norwegian, Air France direct CDG–Stockholm Arlanda). Aussi Ryanair via Skavsta/Västerås." },
    { icon: "🪪", label: "Visa",              value: "Aucun visa — espace Schengen. Carte d'identité française suffisante." },
    { icon: "💰", label: "Monnaie",           value: "Couronne suédoise (SEK). Carte bancaire acceptée partout — les Suédois utilisent quasi-exclusivement Swish (appli). Espèces rares." },
    { icon: "🗣️", label: "Langue",            value: "Suédois. Anglais parlé quasi-universellement — niveau excellent dans tout le pays." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire." },
    { icon: "💊", label: "Santé",             value: "Aucune précaution particulière. Carte européenne d'assurance maladie (CEAM) valide. Pharmacies omniprésentes (Apoteket)." },
    { icon: "🌞", label: "Soleil de minuit",  value: "Soleil de minuit en Laponie de mai à juillet. Nuit polaire de décembre à janvier. Mélatonine conseillée pour réguler le sommeil en été." },
    { icon: "🏕️", label: "Droit de passage",  value: "L'Allemansrätten (droit de tous) permet de randonner et camper librement sur toutes les terres privées ou publiques en Suède. Règle fondamentale." },
  ],
};
