export const KUWAIT = {
  code: "KWT",
  numericId: 414,
  name: "Koweït",
  emoji: "🇰🇼",
  capital: "Koweït City",
  language: "Arabe",
  currency: "Dinar koweïtien (KWD)",
  timezone: "UTC+3",
  filter: { budgetMin: 80, budgetMid: 160, tripMin: 1200, tripMid: 2500 },
  description:
    "Le Koweït est un petit État du Golfe persique à la richesse pétrolière colossale, dont la capitale offre un mélange saisissant d'architecture moderniste audacieuse et de traditions bédouines profondément ancrées. Destination méconnue des touristes européens, il possède un patrimoine culturel authentique — souqs animés, musées de qualité mondiale et pêche aux perles ancestrale — que l'opulence pétrolière n'a pas effacé. Le pays connaît des étés extrêmes (dépassant souvent 45°C) qui le rendent idéal à visiter uniquement en hiver.",
  bestPeriods: [
    {
      months: "Nov – Mar",
      label: "Hiver — idéal",
      color: "#22c55e",
      description: "Températures agréables (15–25°C), ciel dégagé, parfait pour explorer la ville et le désert.",
      icon: "☀️",
    },
    {
      months: "Avr – Mai",
      label: "Printemps — acceptable",
      color: "#f59e0b",
      description: "Chaleur montante (25–35°C) mais encore supportable. Possibles tempêtes de sable.",
      icon: "⛅",
    },
    {
      months: "Jun – Sep",
      label: "Été — à éviter absolument",
      color: "#ef4444",
      description: "Chaleur extrême (40–50°C+), humidité élevée. Le pays est quasi-désert touristiquement.",
      icon: "🌡️",
    },
  ],
  weatherCities: [
    {
      id: "kuwait_city",
      name: "Koweït City",
      region: "Capitale",
      data: [
        { month: "Jan", temp: 13, rain: 20, icon: "⛅" },
        { month: "Fév", temp: 15, rain: 15, icon: "⛅" },
        { month: "Mar", temp: 20, rain: 10, icon: "☀️" },
        { month: "Avr", temp: 27, rain: 10, icon: "⛅" },
        { month: "Mai", temp: 33, rain: 2, icon: "🌡️" },
        { month: "Jun", temp: 38, rain: 0, icon: "🌡️" },
        { month: "Jul", temp: 42, rain: 0, icon: "🌡️" },
        { month: "Aoû", temp: 41, rain: 0, icon: "🌡️" },
        { month: "Sep", temp: 36, rain: 0, icon: "🌡️" },
        { month: "Oct", temp: 28, rain: 5, icon: "⛅" },
        { month: "Nov", temp: 20, rain: 15, icon: "☀️" },
        { month: "Déc", temp: 14, rain: 25, icon: "⛅" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Koweït City — centre et front de mer",
      region: "Gouvernorat de la capitale",
      description:
        "Koweït City est une métropole moderne dont la silhouette est dominée par les emblématiques Tours du Koweït, symboles de la renaissance du pays après la guerre du Golfe de 1990–1991. Le front de mer (Corniche) offre une promenade agréable face au Golfe, jalonnée de sculptures et de jardins soignés. La ville combine centres commerciaux ultra-modernes et quartiers historiques où les traditions marchandes du Golfe demeurent vivaces.",
      wikipedia: "Kuwait_City",
      tags: ["Architecture", "Modernité", "Culture", "Promenade"],
      mustSee: [
        { name: "Tours du Koweït — symbole national aux sphères bleues caractéristiques", wikipedia: "Kuwait_Towers" },
        { name: "Grande Mosquée du Koweït — l'une des plus grandes de la péninsule arabique", wikipedia: "Grand_Mosque_of_Kuwait" },
        { name: "Souq Mubarakiya — marché historique aux épices, or et parfums", wikipedia: "File:Kuwait City Souq al-Mubarakeya at Night 01.jpg" },
        { name: "Corniche du Koweït — promenade maritime panoramique", wikipedia: "Kuwait_City" },
      ],
    },
    {
      id: 2,
      name: "Musée national du Koweït",
      region: "Koweït City",
      description:
        "Le Musée national du Koweït retrace l'histoire fascinante de la péninsule arabique depuis les civilisations Dilmun et Failaka jusqu'à l'ère pétrolière contemporaine. Ses collections d'antiquités, d'objets d'artisanat traditionnel et de pièces liées à la pêche aux perles témoignent d'une culture bien antérieure à la découverte du pétrole. Le Musée d'Art islamique adjacent héberge l'une des plus belles collections d'arts islamiques de la région.",
      wikipedia: "File:Kwnmuseum.jpg",
      tags: ["Musée", "Histoire", "Art islamique", "Culture"],
      mustSee: [
        { name: "Collection Dilmun — artefacts de la civilisation Dilmun de l'île Failaka", wikipedia: "File:Echanges Dilmun AO3999.jpg" },
        { name: "Section pêche aux perles — patrimoine maritime immatériel du Golfe", wikipedia: "File:Wolfstein Jagdmuseum - Süßwasserperlen.jpg" },
        { name: "Musée d'Art islamique al-Salam — miniatures, céramiques et manuscrits", wikipedia: "File:Kwnmuseum.jpg" },
        { name: "Planétarium du Koweït — le premier du monde arabe", wikipedia: "File:Planetarium WPKiW.jpg" },
      ],
    },
    {
      id: 3,
      name: "Île Failaka",
      region: "Baie du Koweït",
      description:
        "L'île Failaka, accessible en ferry depuis la capitale, est un site archéologique exceptionnel qui révèle les couches successives de civilisations ayant occupé le Golfe. Les fouilles y ont mis au jour des temples et fortifications grecs de l'époque d'Alexandre le Grand, superposés sur des vestiges Dilmun encore plus anciens. L'île, évacuée lors de l'invasion irakienne de 1990 et partiellement réhabilitée depuis, offre aussi de belles plages désertes.",
      wikipedia: "Failaka_Island",
      tags: ["Archéologie", "Île", "Grèce antique", "Dilmun"],
      mustSee: [
        { name: "Temple d'Ikaros — sanctuaire grec de l'époque hellénistique", wikipedia: "File:Antiquities_of_Failaka_island_02.JPG" },
        { name: "Fort al-Qusur — fortification portugaise réutilisée par les Koweïtiens", wikipedia: "Failaka_Island" },
        { name: "Musée de Failaka — artefacts grecs et Dilmun retrouvés sur l'île", wikipedia: "Failaka_Island" },
        { name: "Plages nord de Failaka — sable fin et eaux calmes du Golfe", wikipedia: "File:Failaka_Island_1.JPG" },
      ],
    },
    {
      id: 4,
      name: "Al-Jahra et désert du Koweït",
      region: "Gouvernorat de Jahra",
      description:
        "Al-Jahra abrite le fort Rouge, vestige de la résistance koweïtienne lors de la bataille de Jahra en 1920, où les tribus locales repoussèrent l'avancée wahhabite saoudienne. Au-delà de la ville, le désert koweïtien s'étend à perte de vue, ponctué de réserves naturelles et de campements de tentes traditionnelles (beit al-sha'ar) prisés des locaux pendant les weekends d'hiver. Les dunes de sable doré et la faune sauvage (gazelles, oiseaux migrateurs) en font une escapade naturelle appréciée.",
      wikipedia: "File:Jahra Gate.jpg",
      tags: ["Désert", "Histoire", "Nature", "Traditions"],
      mustSee: [
        { name: "Fort Rouge d'Al-Jahra — forteresse historique de la résistance koweïtienne", wikipedia: "File:Al Jahra al-Qasr al-Ahmar Exterior 3.jpg" },
        { name: "Réserve naturelle de Sulaibikhat — refuge d'oiseaux migrateurs", wikipedia: "File:Bird photography Kuwait by irvin calicut 09.jpg" },
        { name: "Collines de Mutla — meilleur point de vue sur la baie du Koweït", wikipedia: "File:Mutlaa.jpg" },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "Le Koweït est l'un des pays les plus chers du Golfe persique. Le dinar koweïtien est la monnaie la plus forte du monde. Les restaurants et hôtels de qualité sont onéreux, mais la street food locale et les centres commerciaux offrent des alternatives abordables.",
    currency: "KWD",
    exchangeRate: "1€ ≈ 0,33 KWD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Hôtel économique", price: "40–70 €", detail: "Hôtel simple mais correct avec clim" },
          { label: "Hôtel mid-range", price: "80–130 €", detail: "Hôtel 3–4 étoiles en centre-ville" },
          { label: "Hôtel de luxe", price: "150–300 €", detail: "Grands hôtels de chaîne internationale sur le front de mer" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Restaurant populaire local", price: "5–10 €", detail: "Grillades, machbous (riz au poulet)" },
          { label: "Restaurant mid-range", price: "15–30 €", detail: "Cuisine levantine ou internationale" },
          { label: "Street food / fast food local", price: "3–6 €", detail: "Shawarma, machbous, falafel" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Taxi / application (Careem)", price: "3–8 €", detail: "Course courte en ville" },
          { label: "Bus public (KGL)", price: "0,30–1 €", detail: "Réseau limité mais fonctionnel" },
          { label: "Ferry vers Failaka", price: "10–15 €", detail: "Aller-retour depuis le port de Shuwaikh" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée musées", price: "2–5 €", detail: "Musée national, musée d'art islamique" },
          { label: "Excursion désert", price: "50–100 €", detail: "Safari 4x4 avec guide, coucher de soleil" },
          { label: "Plongée / snorkeling", price: "40–80 €", detail: "Côtes du Golfe, récifs coralliens" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "60–90 €/j",
        desc: "Hôtel économique, restaurants locaux, transports en commun",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "140–220 €/j",
        desc: "Hôtel 4 étoiles, bons restaurants, taxis et excursions",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "7 jours",
      route: "Koweït City → Failaka → désert Al-Jahra",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 200 – 1 600 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Koweït City", amount: "450–650 €" },
            { label: "Hébergement (6 nuits)", amount: "240–420 €" },
            { label: "Transports locaux", amount: "80–120 €" },
            { label: "Nourriture + boissons", amount: "250–320 €" },
            { label: "Activités + musées", amount: "180–250 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 300 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Koweït City", amount: "500–700 €" },
            { label: "Hébergement (6 nuits)", amount: "700–1 000 €" },
            { label: "Transports locaux + taxis", amount: "150–200 €" },
            { label: "Nourriture + boissons", amount: "550–750 €" },
            { label: "Activités + excursions", amount: "400–550 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "Vols directs Kuwait Airways ou Air France, environ 6h. Vols indirects via Istanbul ou Dubaï." },
    { icon: "🪪", label: "Visa", value: "e-Visa obligatoire en ligne (~9 USD) ou visa à l'arrivée pour les ressortissants français." },
    { icon: "💰", label: "Monnaie", value: "Dinar koweïtien (KWD) — la monnaie la plus forte du monde (1 KWD ≈ 3 €). Cartes bancaires largement acceptées." },
    { icon: "🗣️", label: "Langue", value: "Arabe — anglais très largement parlé dans les commerces, hôtels et restaurants" },
    { icon: "🔌", label: "Prise électrique", value: "Type G (240V) — même qu'au Royaume-Uni, adaptateur indispensable depuis la France" },
    { icon: "💊", label: "Santé", value: "Pas de vaccination obligatoire. Eau du robinet non potable. Chaleur extrême en été, hydratation essentielle." },
    { icon: "⚠️", label: "Sécurité", value: "Pays stable et sûr pour les touristes. Respecter le code vestimentaire pudique dans les lieux publics. Alcool interdit." },
    { icon: "🌡️", label: "Climat", value: "Éviter juin–septembre (températures dépassant 45°C). Hiver (nov–mars) idéal avec 15–25°C." },
  ],
};
