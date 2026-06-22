export const BAHAMAS = {
  code: "BHS",
  numericId: 44,
  name: "Bahamas",
  emoji: "🇧🇸",
  capital: "Nassau",
  language: "Anglais",
  currency: "Dollar des Bahamas (BSD)",
  timezone: "UTC-5",
  filter: { budgetMin: 100, budgetMid: 200, tripMin: 1800, tripMid: 3500 },
  description:
    "L'archipel des Bahamas s'étend sur plus de 700 îles et îlots dispersés entre la Floride et Cuba, offrant certaines des eaux les plus transparentes et les plus colorées du monde, des bleus électriques aux turquoises éclatants. Nassau, la capitale animée, mêle resorts luxueux, culture junkanoo et histoire coloniale, tandis que les îles extérieures (Out Islands) comme les Exumas ou Eleuthera offrent une solitude paradisiaque à quelques minutes d'avion. Les Bahamas sont aussi réputées pour leur faune marine exceptionnelle : requins des récifs, raies, dauphins sauvages et les célèbres cochons nageurs d'Exuma.",
  bestPeriods: [
    {
      months: "Déc – Mai",
      label: "Haute saison",
      color: "#22c55e",
      description: "Temps sec et ensoleillé, eaux calmes, températures idéales — réserver longtemps à l'avance",
      icon: "☀️",
    },
    {
      months: "Jun – Nov",
      label: "Saison cyclonique",
      color: "#f59e0b",
      description: "Prix réduits, moins de touristes, mais risque significatif d'ouragans — vérifier les prévisions",
      icon: "🌀",
    },
  ],
  weatherCities: [
    {
      id: "nassau",
      name: "Nassau",
      region: "New Providence",
      data: [
        { month: "Jan", temp: 22, rain: 40, icon: "☀️" },
        { month: "Fév", temp: 22, rain: 38, icon: "☀️" },
        { month: "Mar", temp: 23, rain: 40, icon: "☀️" },
        { month: "Avr", temp: 24, rain: 55, icon: "☀️" },
        { month: "Mai", temp: 26, rain: 100, icon: "⛅" },
        { month: "Jun", temp: 27, rain: 110, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 120, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 130, icon: "🌧️" },
        { month: "Sep", temp: 27, rain: 170, icon: "🌧️" },
        { month: "Oct", temp: 26, rain: 140, icon: "🌧️" },
        { month: "Nov", temp: 24, rain: 65, icon: "☀️" },
        { month: "Déc", temp: 23, rain: 50, icon: "☀️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Nassau & Paradise Island",
      region: "New Providence",
      description:
        "Nassau, capitale des Bahamas, est une ville animée où les demeures coloniales pastel côtoient les casinos et les bateaux de croisière géants. Le quartier historique offre des rues colorées, le marché artisanal de Straw Market et les fortifications britanniques du XVIIIe siècle. Paradise Island, reliée par pont, abrite l'Atlantis Resort avec son parc aquatique spectaculaire, ses aquariums ouverts et ses plages de sable blanc.",
      wikipedia: "Nassau,_Bahamas",
      tags: ["Plage", "Culture", "Casino", "Histoire coloniale"],
      mustSee: [
        { name: "Fort Fincastle et Queen's Staircase — escalier taillé dans le corail", wikipedia: "File:Bahamas - Nassau, Queens Staircase - panoramio.jpg" },
        { name: "Cable Beach — plage urbaine avec hôtels en bord de mer", wikipedia: "File:Cable Beach, Torndirrup National Park, April 2022 04.jpg" },
        { name: "Atlantis Paradise Island — resort aquatique spectaculaire", wikipedia: "Atlantis_Paradise_Island" },
        { name: "Bay Street — shopping colonial et marché artisanal", wikipedia: "Nassau,_Bahamas" },
      ],
    },
    {
      id: 2,
      name: "Exuma Cays",
      region: "Exumas",
      description:
        "Les Exumas sont un archipel d'îlots sauvages aux eaux d'un bleu irréel, mondialement célèbre pour ses cochons nageurs de Big Major Cay, ses requins nourrices de Compass Cay et ses raies géantes de Stingray City. L'Exuma Land and Sea Park, l'un des premiers parcs marins protégés de l'Atlantique, abrite des coraux en excellent état et une biodiversité marine exceptionnelle. George Town, chef-lieu paisible, est un point de départ idéal pour explorer l'archipel en catamaran.",
      wikipedia: "File:Emerald bay great exuma bahamas.jpg",
      tags: ["Plage", "Snorkeling", "Faune marine", "Kayak"],
      mustSee: [
        { name: "Cochons nageurs de Big Major Cay — unique au monde", wikipedia: "File:Pigs and gulls on the beach.jpg" },
        { name: "Exuma Land and Sea Park — premier parc marin protégé de l'Atlantique", wikipedia: "Exuma_Cays_Land_and_Sea_Park" },
        { name: "Thunderball Grotto — grotte sous-marine (James Bond)", wikipedia: "File:Mary_938.JPG" },
      ],
    },
    {
      id: 3,
      name: "Eleuthera & Harbour Island",
      region: "Eleuthera",
      description:
        "Eleuthera est une île longue et fine réputée pour ses plages de sable rose, phénomène naturel dû aux foraminifères microscopiques brisés par les vagues. Harbour Island, minuscule îlot accessible en water taxi, est considérée comme l'une des plus belles adresses des Caraïbes avec sa célèbre Pink Sand Beach et ses maisons en bois pastel. Glass Window Bridge, point le plus étroit de l'île, offre la vue saisissante de l'Atlantique sombre d'un côté et des eaux turquoise des Caraïbes de l'autre.",
      wikipedia: "File:Eleuthera.jpg",
      tags: ["Plage rose", "Luxe discret", "Snorkeling", "Photographie"],
      mustSee: [
        { name: "Pink Sand Beach (Harbour Island) — sable rose unique", wikipedia: "File:Beachsunsetdog.jpg" },
        { name: "Dunmore Town — village colonial aux maisons de couleur", wikipedia: "File:Bahamas_1989_(339)_Eleuthera_Dunmore_Town,_Harbour_Island_(24293986816).jpg" },
        { name: "Current Cut — passage rapide pour plongée en dérive", wikipedia: "File:Eleuthera.jpg" },
      ],
    },
    {
      id: 4,
      name: "Grand Bahama & Freeport",
      region: "Grand Bahama",
      description:
        "Grand Bahama est la quatrième île en superficie de l'archipel et la plus accessible depuis la Floride, à seulement 90 km de Palm Beach. Le Lucayan National Park abrite l'un des plus longs systèmes de grottes sous-marines du monde, ainsi que des mangroves préservées. Les centres de plongée de Freeport proposent des excursions vers des épaves et des récifs coralliens en excellente santé, avec une forte présence de dauphins sauvages.",
      wikipedia: "Grand_Bahama",
      tags: ["Plongée", "Nature", "Accessible", "Grottes"],
      mustSee: [
        { name: "Lucayan National Park — grottes sous-marines et mangroves", wikipedia: "Lucayan_National_Park" },
        { name: "UNEXSO — centre de plongée avec dauphins sauvages", wikipedia: "File:Grand Bahama Island (Little Bahama Bank) 4.jpg" },
        { name: "Gold Rock Beach — plage isolée aux eaux cristallines", wikipedia: "File:Gold_Rock_Beach_Grand_Bahama_Island.jpg" },
        { name: "Freeport International Bazaar — marché artisanal couvert", wikipedia: "Freeport,_Bahamas" },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "Les Bahamas font partie des destinations caribéennes les plus chères, notamment en raison de leur proximité avec les États-Unis et de leur économie orientée vers le tourisme de luxe. Les îles extérieures (Out Islands) sont souvent moins onéreuses que Nassau.",
    currency: "BSD",
    exchangeRate: "1€ ≈ 1,08 BSD (parité quasi-fixe avec le dollar américain)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Petit hôtel / guesthouse", range: "80–130 €" },
          { label: "Hôtel de confort intermédiaire", range: "150–250 €" },
          { label: "Resort balnéaire haut de gamme", range: "300–600 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Fish fry local (langouste grillée, conch)", range: "12–20 €" },
          { label: "Restaurant intermédiaire", range: "25–45 €" },
          { label: "Dîner gastronomique dans un resort", range: "60–120 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Jitney (bus local à Nassau)", range: "1–2 €" },
          { label: "Vol inter-îles (Nassau–Exuma)", range: "80–200 € A/R" },
          { label: "Location de voiture / jour", range: "50–100 €" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Excursion cochons nageurs (Exuma, journée)", range: "80–150 €" },
          { label: "Plongée (2 bouteilles + équipement)", range: "80–120 €" },
          { label: "Bateau privatisé pour snorkeling", range: "100–200 €" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "100–150 €/j",
        desc: "Guesthouse, fish fry local, jitneys et ferrys, snorkeling sans guide",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "200–400 €/j",
        desc: "Resort en bord de mer, restaurants variés, excursions guidées, vols inter-îles",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Nassau (3j) → Exumas (4j, cochons nageurs + snorkeling) → Eleuthera/Harbour Island (3j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 800 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Nassau", amount: "600–900 €" },
            { label: "Hébergement (9 nuits)", amount: "720–1 170 €" },
            { label: "Vols inter-îles + ferrys", amount: "200–350 €" },
            { label: "Nourriture + boissons", amount: "180–300 €" },
            { label: "Activités + excursions", amount: "200–350 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 500 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Nassau", amount: "900–1 300 €" },
            { label: "Hébergement (9 nuits, resorts)", amount: "1 800–3 000 €" },
            { label: "Transports + vols inter-îles", amount: "350–600 €" },
            { label: "Nourriture + restaurants", amount: "400–700 €" },
            { label: "Activités guidées + plongée", amount: "300–500 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "10–13h avec escale (Miami, New York ou Atlanta — American Airlines, Delta, Air France)" },
    { icon: "🪪", label: "Visa", value: "Pas de visa requis pour les Français (séjour ≤ 90 jours) — passeport valide 6 mois minimum" },
    { icon: "💰", label: "Monnaie", value: "Dollar bahamien (BSD, parité 1:1 avec le USD) — USD accepté partout, cartes bancaires généralisées" },
    { icon: "🗣️", label: "Langue", value: "Anglais (officiel) — créole bahamien dans les milieux locaux" },
    { icon: "🔌", label: "Prise électrique", value: "Type A/B (120V, 60Hz) — adaptateur nécessaire pour les Européens" },
    { icon: "💊", label: "Santé", value: "Pas de vaccins tropicaux requis. Dengue présente — protection anti-moustiques recommandée. Crème solaire biodégradable conseillée pour préserver les récifs." },
    { icon: "🌀", label: "Cyclones", value: "Saison cyclonique juin–novembre — risque réel, éviter ou souscrire une assurance annulation solide" },
    { icon: "🐠", label: "Plongée", value: "Certains sites interdisent les crèmes solaires chimiques — utiliser des protections minérales pour protéger les coraux" },
  ],
};
