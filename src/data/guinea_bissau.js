export const GUINEA_BISSAU = {
  code: "GNB",
  numericId: 624,
  name: { fr: "Guinée-Bissau", en: "Guinea-Bissau" },
  emoji: "🇬🇼",
  capital: { fr: "Bissau", en: "Bissau" },
  language: {
    fr: "Portugais (officiel), Créole bissau-guinéen (crioulo)",
    en: "Portuguese (official), Bissau-Guinean Creole (crioulo)",
  },
  currency: { fr: "Franc CFA (XOF)", en: "CFA franc (XOF)" },
  timezone: "UTC",
  filter: {
    budgetMin: 25, budgetMid: 55,
    tripMin: 700, tripMid: 1400,
  },
  description: {
    fr: "La Guinée-Bissau est l'une des destinations les plus secrètes d'Afrique de l'Ouest. L'archipel des Bijagos, réserve de biosphère de l'UNESCO composée de 88 îles habitées d'espèces rares, est un paradis pour les amateurs de nature sauvage. Entre hippopotames pygmées, lamantins, tortues marines et villages animistes aux rites ancestraux, ce petit pays lusophone réserve des découvertes exceptionnelles.",
    en: "Guinea-Bissau is one of West Africa's best-kept secrets. The Bijagós Archipelago, a UNESCO biosphere reserve made up of 88 islands inhabited by rare species, is a paradise for lovers of untamed nature. Between pygmy hippos, manatees, sea turtles and animist villages with ancestral rites, this small Portuguese-speaking country promises exceptional discoveries.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Mai", en: "November – May" },
      label: { fr: "Saison sèche", en: "Dry season" },
      color: "#22c55e",
      description: {
        fr: "Saison sèche et agréable, idéale pour visiter les îles Bijagos, la côte et l'intérieur du pays. Température clémente de 25–30°C, pas de pluie, accès facile aux îles.",
        en: "Pleasant dry season, ideal for visiting the Bijagós Islands, the coast and the country's interior. Mild 25–30°C temperatures, no rain, and easy access to the islands.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Octobre", en: "June – October" },
      label: { fr: "Saison des pluies", en: "Rainy season" },
      color: "#ef4444",
      description: {
        fr: "Saison des pluies très intenses avec 500–800 mm/mois. Routes dégradées, îles difficiles d'accès, humidité extrême. Déconseillé pour le tourisme.",
        en: "Very intense rainy season with 500–800 mm/month. Roads deteriorate, the islands become hard to reach, and humidity is extreme. Not recommended for tourism.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "bissau",
      name: "Bissau",
      region: { fr: "Bissau (côte)", en: "Bissau (coast)" },
      data: [
        { month: "Jan", temp: 25, rain: 5,   icon: "☀️" },
        { month: "Fév", temp: 26, rain: 5,   icon: "☀️" },
        { month: "Mar", temp: 27, rain: 5,   icon: "⛅" },
        { month: "Avr", temp: 28, rain: 80,  icon: "⛅" },
        { month: "Mai", temp: 28, rain: 120, icon: "🌧️" },
        { month: "Jun", temp: 27, rain: 300, icon: "🌧️" },
        { month: "Jul", temp: 26, rain: 500, icon: "🌧️" },
        { month: "Aoû", temp: 27, rain: 550, icon: "🌧️" },
        { month: "Sep", temp: 27, rain: 400, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Nov", temp: 28, rain: 30,  icon: "⛅" },
        { month: "Déc", temp: 26, rain: 5,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Archipel des Bijagos", en: "Bijagós Archipelago" },
      region: { fr: "Archipel des Bijagos", en: "Bijagós Archipelago" },
      description: {
        fr: "L'archipel des Bijagos est une réserve de biosphère de l'UNESCO composée de 88 îles, dont seulement 20 sont habitées. Ce sanctuaire marin abrite des hippopotames pygmées, des lamantins, des buffles sauvages et des dizaines d'espèces d'oiseaux. Les Bijagos, peuple matriarcal aux rites animistes forts, vivent en quasi-autarcie sur leurs îles.",
        en: "The Bijagós Archipelago is a UNESCO biosphere reserve made up of 88 islands, only 20 of which are inhabited. This marine sanctuary is home to pygmy hippos, manatees, wild buffalo and dozens of bird species. The Bijagós people, a matriarchal society with strong animist rites, live in near self-sufficiency on their islands.",
      },
      wikipedia: "File:L'Archipel des Bijagos vu par Sentinel 2.jpg",
      tags: ["UNESCO", "Nature", "Îles", "Animisme"],
      mustSee: [
        { name: { fr: "Île d'Orango — hippopotames marins", en: "Orango Island — marine hippos" }, wikipedia: "File:Lagoa_com_hipopótamos_03_(cropped).jpg" },
        { name: { fr: "Île de Bubaque — centre de l'archipel", en: "Bubaque Island — the archipelago's hub" }, wikipedia: "Bubaque" },
        { name: { fr: "Île de Poilão — nidification de tortues marines", en: "Poilão Island — sea turtle nesting grounds" }, wikipedia: "File:Détails Tortues 07.jpg" },
      ],
    },
    {
      id: 2,
      name: "Bolama",
      region: { fr: "Région de Bolama", en: "Bolama Region" },
      description: {
        fr: "Bolama, ancienne capitale coloniale portugaise, est une ville-fantôme magnifique envahie par la végétation tropicale. Ses bâtiments néo-classiques en ruines et son atmosphère mélancolique en font un lieu de photographie unique, loin des circuits touristiques classiques.",
        en: "Bolama, the former Portuguese colonial capital, is a magnificent ghost town overtaken by tropical vegetation. Its ruined neoclassical buildings and melancholic atmosphere make it a unique photography spot, far from the usual tourist trail.",
      },
      wikipedia: "File:Viagem_de_Bissau_para_Bolama,_Guiné-Bissau_–_2018-03-02_–_DSCN0996.jpg",
      tags: ["Histoire", "Colonial", "Ruines", "Photo"],
      mustSee: [
        { name: { fr: "Palais du gouverneur colonial en ruines", en: "Ruined colonial governor's palace" }, wikipedia: "File:Bolama ruins.jpg" },
        { name: { fr: "Coucher de soleil sur l'estuaire", en: "Sunset over the estuary" }, wikipedia: "File:Porto de Bolama 06.jpg" },
      ],
    },
    {
      id: 3,
      name: "Bissau",
      region: { fr: "Bissau", en: "Bissau" },
      description: {
        fr: "La capitale de la Guinée-Bissau est une ville à taille humaine, détendue et authentique. Le marché de Bandim, le Museu Nacional, les ruines du Fort de São José de Amura et les quartiers aux maisons coloniales délabrées forment un portrait attachant de cette capitale peu connue.",
        en: "Guinea-Bissau's capital is a laid-back, human-scale and authentic city. Bandim Market, the Museu Nacional, the ruins of Fort São José de Amura and neighbourhoods lined with crumbling colonial houses create an endearing portrait of this little-known capital.",
      },
      wikipedia: "Bissau",
      tags: ["Ville", "Marché", "Histoire", "Coloniale"],
      mustSee: [
        { name: { fr: "Marché de Bandim — cœur animé de Bissau", en: "Bandim Market — Bissau's lively heart" }, wikipedia: "File:Avenida_dos_Combatentes_da_Liberdade_da_Pátria,_Bissau_(2).jpg" },
        { name: { fr: "Fort de São José de Amura (XVIII°)", en: "Fort São José de Amura (18th century)" }, wikipedia: "File:Interior_da_Fortaleza_de_São_José_de_Amura,_Bissau.jpg" },
        { name: { fr: "Museu Nacional da Guiné-Bissau", en: "National Museum of Guinea-Bissau" }, wikipedia: "File:DC - Foto Serra No 143 - Museu (Bissau).jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Guinée-Bissau est l'une des destinations les moins chères d'Afrique de l'Ouest. L'infrastructure touristique est minimale, surtout dans les îles, et les options de confort sont limitées. Le franc CFA (partagé avec le Sénégal) est la monnaie, facilitant les échanges.",
      en: "Guinea-Bissau is one of the cheapest destinations in West Africa. Tourist infrastructure is minimal, especially on the islands, and comfort options are limited. The CFA franc (shared with Senegal) is the currency, which makes exchange easier.",
    },
    currency: "XOF",
    exchangeRate: "1€ = 656 XOF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse locale / chambre villageoise", en: "Local guesthouse / village room" }, price: "8–20 €", detail: { fr: "Simple, avec moustiquaire", en: "Simple, with a mosquito net" } },
          { label: { fr: "Auberge ou pension à Bissau", en: "Inn or guesthouse in Bissau" }, price: "20–40 €", detail: { fr: "Clim, eau courante", en: "Air conditioning, running water" } },
          { label: { fr: "Lodge ou camp sur les îles Bijagos", en: "Lodge or camp on the Bijagós Islands" }, price: "40–80 €", detail: { fr: "Repas souvent inclus", en: "Meals often included" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Repas de rue (riz, sauce arachide)", en: "Street meal (rice, peanut sauce)" }, price: "1–3 €", detail: { fr: "Cuisine locale authentique", en: "Authentic local cuisine" } },
          { label: { fr: "Restaurant local à Bissau", en: "Local restaurant in Bissau" }, price: "4–8 €", detail: { fr: "Poisson frais, riz jollof", en: "Fresh fish, jollof rice" } },
          { label: { fr: "Restaurant touristique / lodge", en: "Tourist restaurant / lodge" }, price: "10–20 €", detail: { fr: "Poisson de mer, fruits tropicaux", en: "Sea fish, tropical fruits" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Pirogue Bissau–Bubaque (Bijagos)", en: "Bissau–Bubaque pirogue (Bijagós)" }, price: "10–20 €", detail: { fr: "3–4h de traversée", en: "3–4h crossing" } },
          { label: { fr: "Taxi-moto (Jakarta) à Bissau", en: "Motorbike taxi (Jakarta) in Bissau" }, price: "0,50–2 €", detail: { fr: "Transport local courant", en: "Common local transport" } },
          { label: { fr: "Location de pirogue pour les îles", en: "Pirogue hire for the islands" }, price: "40–80 €/j", detail: { fr: "Avec pagayeur", en: "With paddler" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Observation hippopotames en pirogue", en: "Hippo-watching by pirogue" }, price: "15–30 €", detail: { fr: "Guide local obligatoire", en: "Local guide required" } },
          { label: { fr: "Visite village bijagos avec guide", en: "Visit to a Bijagós village with guide" }, price: "10–20 €", detail: { fr: "Donation à la communauté", en: "Donation to the community" } },
          { label: { fr: "Plongée / snorkeling (Bijagos)", en: "Diving / snorkelling (Bijagós)" }, price: "30–50 €", detail: { fr: "Eaux cristallines, faune riche", en: "Crystal-clear waters, rich wildlife" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "25–45 €/j", desc: { fr: "Guesthouse + nourriture locale + pirogue partagée", en: "Guesthouse + local food + shared pirogue" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "55–90 €/j", desc: { fr: "Lodge Bijagos + repas + pirogues privatisées", en: "Bijagós lodge + meals + private pirogues" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Bissau (2j) → Archipel Bijagos : Bubaque + Orango (5j) → Cantanhez (2j) → Bolama (1j)",
        en: "Bissau (2d) → Bijagós Archipelago: Bubaque + Orango (5d) → Cantanhez (2d) → Bolama (1d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "700 – 1 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bissau (via Dakar ou Lisbonne)", en: "Return flight Paris–Bissau (via Dakar or Lisbon)" }, amount: "350–500 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "150–250 €" },
            { label: { fr: "Transports locaux + pirogues", en: "Local transport + pirogues" }, amount: "100–150 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "80–120 €" },
            { label: { fr: "Activités + guides", en: "Activities + guides" }, amount: "80–120 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 400 – 2 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bissau (via Dakar ou Lisbonne)", en: "Return flight Paris–Bissau (via Dakar or Lisbon)" }, amount: "400–600 €" },
            { label: { fr: "Hébergement lodges (10 nuits)", en: "Lodge accommodation (10 nights)" }, amount: "450–700 €" },
            { label: { fr: "Transports + pirogues privatisées", en: "Transport + private pirogues" }, amount: "250–350 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "150–200 €" },
            { label: { fr: "Activités + plongée + guides", en: "Activities + diving + guides" }, amount: "150–200 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~8h (via Dakar ou Lisbonne — pas de vol direct)", en: "~8h (via Dakar or Lisbon — no direct flight)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Visa obligatoire — obtenu à l'arrivée (environ 20 €) ou à l'ambassade", en: "Visa required — available on arrival (around €20) or from the embassy" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Franc CFA (1€ = 656 XOF) — espèces indispensables, peu de DAB", en: "CFA franc (1€ = 656 XOF) — cash is essential, with few ATMs" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Portugais (officiel) + crioulo bissau-guinéen (langue véhiculaire)", en: "Portuguese (official) + Bissau-Guinean crioulo (lingua franca)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C — 220 V (coupures de courant fréquentes)", en: "Type C — 220 V (frequent power cuts)" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéen OBLIGATOIRE + fièvre jaune OBLIGATOIRE — eau en bouteille uniquement", en: "Antimalarial medication REQUIRED + yellow fever vaccination REQUIRED — bottled water only" } },
    { icon: "🏝️", label: { fr: "Îles Bijagos", en: "Bijagós Islands" }, value: { fr: "Accès en pirogue depuis Bissau (3–5h) — planifier logistique à l'avance", en: "Access by pirogue from Bissau (3–5h) — plan logistics in advance" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Couverture mobile limitée, inexistante dans les îles — prévoir connexion minimale", en: "Limited mobile coverage, non-existent on the islands — plan for minimal connectivity" } },
  ],
};
