export const SIERRA_LEONE = {
  code: "SLE",
  numericId: 694,
  name: "Sierra Leone",
  emoji: "🇸🇱",
  capital: "Freetown",
  language: "Anglais (officiel), Krio (créole local)",
  currency: "Leone (SLL)",
  timezone: "UTC",
  filter: {
    budgetMin: 35, budgetMid: 70,
    tripMin: 800, tripMid: 1700,
  },
  description:
    "La Sierra Leone est une destination en pleine renaissance touristique, avec des plages parmi les plus belles d'Afrique de l'Ouest encore presque désertes. Freetown et son coton-tree centenaire, l'île de Tiwai (sanctuaire de l'hippopotame pygmée et des colobes), les plages de Tokeh et River No. 2, et le sanctuaire de chimpanzés de Tacugama composent un itinéraire naturel exceptionnel.",

  bestPeriods: [
    {
      months: "Novembre – Avril",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "Saison sèche idéale pour visiter les plages, la brousse et l'île de Tiwai. Temps ensoleillé, routes praticables, température de 27–31°C.",
      icon: "☀️",
    },
    {
      months: "Mai – Octobre",
      label: "Saison des pluies",
      color: "#ef4444",
      description:
        "L'une des saisons des pluies les plus intenses d'Afrique avec 500–800 mm/mois en juillet-août. Routes dégradées, certaines zones inaccessibles. Déconseillé.",
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "freetown",
      name: "Freetown",
      region: "Freetown (côte, péninsule)",
      data: [
        { month: "Jan", temp: 27, rain: 10,  icon: "⛅" },
        { month: "Fév", temp: 28, rain: 10,  icon: "⛅" },
        { month: "Mar", temp: 29, rain: 20,  icon: "⛅" },
        { month: "Avr", temp: 28, rain: 90,  icon: "⛅" },
        { month: "Mai", temp: 27, rain: 250, icon: "🌧️" },
        { month: "Jun", temp: 26, rain: 450, icon: "🌧️" },
        { month: "Jul", temp: 24, rain: 700, icon: "🌧️" },
        { month: "Aoû", temp: 24, rain: 800, icon: "🌧️" },
        { month: "Sep", temp: 25, rain: 600, icon: "🌧️" },
        { month: "Oct", temp: 26, rain: 300, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 80,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 20,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Freetown",
      region: "Freetown",
      description:
        "Freetown, capitale fondée en 1787 pour accueillir des esclaves libérés, possède une histoire unique liée à l'abolition. Le coton-tree centenaire au cœur de la ville, le Musée national, le quartier de Krio Cotton Tree et l'île de Banana racontent cette mémoire singulière sur fond d'animation africaine.",
      wikipedia: "Freetown",
      tags: ["Histoire", "Abolition", "Culture", "Capitale"],
      mustSee: [
        { name: "Cotton Tree — kapokier tricentenaire symbole de la ville", wikipedia: "Cotton_Tree_(Sierra_Leone)" },
        { name: "Sierra Leone National Museum", wikipedia: "Sierra_Leone_National_Museum" },
        { name: "Île de Banana (Bunce Island) — comptoir négrier", wikipedia: "File:Bunce Island Beach.jpg" },
        { name: "Marché de Freetown — Lumley Market", wikipedia: "File:Freetown_street_(13992704238).jpg" },
      ],
    },
    {
      id: 2,
      name: "Plages de la péninsule de Freetown",
      region: "Western Area Rural",
      description:
        "La péninsule de Freetown abrite des plages de sable blanc encore peu fréquentées et d'une beauté exceptionnelle. River No. 2 Beach, encadrée de palmiers et d'un lagon, et Tokeh Beach figurent parmi les plus belles plages d'Afrique de l'Ouest.",
      wikipedia: "File:Beach in Freetown, Sierra Leone (14176784751).jpg",
      tags: ["Plage", "Nature", "Lagon", "Détente"],
      mustSee: [
        { name: "River No. 2 Beach — lagon et palmiers, top Afrique", wikipedia: "File:River_No._2_Beach_(Sierra_Leone).jpg" },
        { name: "Tokeh Beach — plage de sable blanc préservée", wikipedia: "File:Tokeh_Beach.jpg" },
        { name: "Kent Beach au bout de la péninsule", wikipedia: "File:The beach at Deal, Kent - geograph.org.uk - 6079466.jpg" },
        { name: "Plage de Bureh — vagues pour le surf", wikipedia: "File:Freetown_beach.jpg" },
      ],
    },
    {
      id: 3,
      name: "Île de Tiwai",
      region: "Pujehun",
      description:
        "L'île de Tiwai, dans la rivière Moa, est un sanctuaire naturel privé abritant l'une des plus fortes densités de primates au monde. On y observe 11 espèces de primates dont le colobe de Diana en danger, le sooty mangabey, et surtout l'hippopotame pygmée dans son milieu naturel.",
      wikipedia: "Tiwai_Island",
      tags: ["Nature", "Primates", "Hippopotames pygmées", "Forêt"],
      mustSee: [
        { name: "Hippopotame pygmée — espèce rarissime", wikipedia: "Pygmy_hippopotamus" },
        { name: "Colobe de Diana et 10 autres espèces de primates", wikipedia: "Diana_monkey" },
        { name: "Balade en pirogue autour de l'île", wikipedia: "Tiwai_Island" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "La Sierra Leone est abordable pour les voyageurs, même si les prix ont augmenté avec la reprise du tourisme. Freetown et les plages restent bon marché par rapport aux standards internationaux, et la qualité du poisson frais et des fruits de mer est excellente.",
    currency: "SLL",
    exchangeRate: "1€ ≈ 25 000 SLL",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse locale à Freetown", price: "15–30 €", detail: "Simple, avec moustiquaire" },
          { label: "Hôtel 2–3★ Freetown / côte", price: "40–70 €", detail: "Clim, eau chaude" },
          { label: "Lodge ou beach resort", price: "60–120 €", detail: "Péninsule ou Tiwai Island" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Riz cassava leaf (cuisine locale)", price: "2–4 €", detail: "Plat national sierraléonais" },
          { label: "Poisson grillé au marché", price: "3–7 €", detail: "Barracuda, mérou frais" },
          { label: "Restaurant touristique Freetown", price: "12–25 €", detail: "Fruits de mer, cuisine fusion" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Ferry Freetown–aéroport (en bateau)", price: "3–5 €", detail: "Traversée 30 min, essentiel" },
          { label: "Taxi partagé (poda-poda) en ville", price: "0,30–1 €", detail: "Minibus local courant" },
          { label: "4x4 ou véhicule privé / jour", price: "60–90 €", detail: "Pour Tiwai Island ou l'intérieur" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Visite sanctuaire de Tacugama", price: "15–25 €", detail: "Entrée + guide" },
          { label: "Séjour Tiwai Island (nuit + repas + guides)", price: "50–80 €/j", detail: "All-inclusive communautaire" },
          { label: "Sortie plage avec pirogue (River No. 2)", price: "5–15 €", detail: "Traversée du lagon" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "35–55 €/j", desc: "Guesthouse + bouffe locale + transport partagé", color: "#22c55e" },
      { type: "Confort", daily: "70–110 €/j", desc: "Hôtel 3★ + restos + excursions + 4x4", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Freetown (2j) → Plages de la péninsule (2j) → Tacugama (1j) → Tiwai Island (3j) → Retour Freetown (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "800 – 1 150 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Freetown (via escale)", amount: "400–600 €" },
            { label: "Hébergement (10 nuits)", amount: "180–280 €" },
            { label: "Transports locaux + ferry + 4x4", amount: "100–160 €" },
            { label: "Nourriture + boissons", amount: "80–120 €" },
            { label: "Activités + Tiwai + guides", amount: "100–150 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 700 – 2 400 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Freetown (via escale)", amount: "500–750 €" },
            { label: "Hébergement lodges (10 nuits)", amount: "550–800 €" },
            { label: "Transports + 4x4 privatif", amount: "300–450 €" },
            { label: "Nourriture + boissons", amount: "200–280 €" },
            { label: "Activités + guides", amount: "150–200 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",    value: "~8–9h (via Bruxelles, Casablanca ou Addis-Abeba — pas de direct)" },
    { icon: "🪪", label: "Visa",                value: "Visa obligatoire — e-Visa disponible en ligne (80 $)" },
    { icon: "💰", label: "Monnaie",             value: "Leone (SLL) — dollar et euro acceptés dans les hôtels, espèces en zone rurale" },
    { icon: "🗣️", label: "Langue",              value: "Anglais (officiel) + Krio (créole, langue véhiculaire de toute la population)" },
    { icon: "🔌", label: "Prise électrique",    value: "Type G (comme au Royaume-Uni) — 230 V (coupures fréquentes)" },
    { icon: "💊", label: "Santé",               value: "Antipaludéen OBLIGATOIRE + fièvre jaune OBLIGATOIRE — eau en bouteille uniquement" },
    { icon: "⛴️", label: "Aéroport",            value: "L'aéroport est de l'autre côté de la baie — prévoir ferry (30 min) ou hélicoptère" },
    { icon: "📱", label: "Réseau",              value: "Bonne couverture Orange et Africell à Freetown, limitée en zone rurale" },
  ],
};
