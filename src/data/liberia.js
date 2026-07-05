export const LIBERIA = {
  code: "LBR",
  numericId: 430,
  name: { fr: "Libéria", en: "Liberia" },
  emoji: "🇱🇷",
  capital: { fr: "Monrovia", en: "Monrovia" },
  language: { fr: "Anglais (officiel)", en: "English (official)" },
  currency: { fr: "Dollar libérien (LRD)", en: "Liberian Dollar (LRD)" },
  timezone: "UTC",
  filter: {
    budgetMin: 35, budgetMid: 70,
    tripMin: 850, tripMid: 1700,
  },
  description: {
    fr: "Le Libéria, seul pays d'Afrique subsaharienne jamais colonisé par une puissance européenne, a été fondé en 1847 par des esclaves affranchis américains. Le parc national de Sapo, l'un des derniers grands blocs de forêt primaire d'Afrique de l'Ouest, abrite éléphants de forêt, hippopotames pygmées et chimpanzés. Ses plages atlantiques sauvages et son histoire unique en font une destination pour explorateurs.",
    en: "Liberia, the only country in sub-Saharan Africa never colonised by a European power, was founded in 1847 by freed American slaves. Sapo National Park, one of the last great blocks of primary forest in West Africa, is home to forest elephants, pygmy hippos and chimpanzees. Its wild Atlantic beaches and unique history make it a destination for explorers.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Avril", en: "November – April" },
      label: { fr: "Saison sèche", en: "Dry season" },
      color: "#22c55e",
      description: {
        fr: "Saison sèche avec un temps ensoleillé, des routes praticables et une faune plus visible dans les forêts de Sapo. Températures de 27–31°C, idéal pour le surf et les plages.",
        en: "Dry season with sunny weather, passable roads and more visible wildlife in the Sapo forests. Temperatures of 27–31°C, ideal for surfing and the beach.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Mai – Octobre", en: "May – October" },
      label: { fr: "Saison des pluies", en: "Rainy season" },
      color: "#ef4444",
      description: {
        fr: "Saison des pluies intense (jusqu'à 600 mm/mois à Monrovia en juin). Routes dégradées, certaines zones forestières inaccessibles. Fortement déconseillé pour le tourisme.",
        en: "Intense rainy season (up to 600 mm/month in Monrovia in June). Roads deteriorate, some forest areas become inaccessible. Strongly discouraged for tourism.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "monrovia",
      name: "Monrovia",
      region: { fr: "Monrovia (côte)", en: "Monrovia (coast)" },
      data: [
        { month: "Jan", temp: 27, rain: 20,  icon: "⛅" },
        { month: "Fév", temp: 28, rain: 30,  icon: "⛅" },
        { month: "Mar", temp: 28, rain: 70,  icon: "⛅" },
        { month: "Avr", temp: 27, rain: 140, icon: "🌧️" },
        { month: "Mai", temp: 26, rain: 380, icon: "🌧️" },
        { month: "Jun", temp: 23, rain: 600, icon: "🌧️" },
        { month: "Jul", temp: 23, rain: 520, icon: "🌧️" },
        { month: "Aoû", temp: 23, rain: 500, icon: "🌧️" },
        { month: "Sep", temp: 24, rain: 420, icon: "🌧️" },
        { month: "Oct", temp: 25, rain: 280, icon: "🌧️" },
        { month: "Nov", temp: 26, rain: 100, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 35,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Parc national de Sapo", en: "Sapo National Park" },
      region: "Sinoe",
      description: {
        fr: "Le parc national de Sapo est le plus grand parc naturel du Libéria et l'une des dernières et plus belles forêts tropicales primaires d'Afrique de l'Ouest. Il abrite des éléphants de forêt, des hippopotames pygmées, des chimpanzés et plus de 600 espèces d'oiseaux dans un écosystème pratiquement intact.",
        en: "Sapo National Park is Liberia's largest nature reserve and one of the last and most beautiful primary rainforests in West Africa. It is home to forest elephants, pygmy hippos, chimpanzees and over 600 bird species in a virtually intact ecosystem.",
      },
      wikipedia: "African_forest_elephant",
      tags: ["Nature", "Forêt", "Éléphants", "Primaires"],
      mustSee: [
        { name: { fr: "Éléphants de forêt d'Afrique de l'Ouest", en: "West African forest elephants" }, wikipedia: "African_forest_elephant" },
        { name: { fr: "Hippopotames pygmées dans les rivières", en: "Pygmy hippos in the rivers" }, wikipedia: "Pygmy_hippopotamus" },
        { name: { fr: "Chimpanzés dans la forêt primaire", en: "Chimpanzees in the primary forest" }, wikipedia: "File:Voa_Guinea_chimpanzee_picking_30jan08.jpg" },
        { name: { fr: "Randonnée multi-jours dans la forêt dense", en: "Multi-day trek through the dense forest" }, wikipedia: "File:Rio Sapo 2.jpg" },
      ],
    },
    {
      id: 2,
      name: "Monrovia",
      region: { fr: "Grand Cape Mount / Monrovia", en: "Grand Cape Mount / Monrovia" },
      description: {
        fr: "Monrovia, fondée en 1822 et nommée en hommage au président américain Monroe, est la seule capitale africaine portant le nom d'un président américain. Son histoire liée aux esclaves affranchis est visible dans les vieux quartiers, et les environs offrent des plages sauvages et des lagunes.",
        en: "Monrovia, founded in 1822 and named in honour of American President Monroe, is the only African capital named after a US president. Its history tied to freed slaves is visible in the old districts, and the surrounding area offers wild beaches and lagoons.",
      },
      wikipedia: "Monrovia",
      tags: ["Ville", "Histoire", "Afro-américain", "Culture"],
      mustSee: [
        { name: { fr: "Capitol Building du Libéria", en: "Liberian Capitol Building" }, wikipedia: "File:Liberian_Capitol_Building.jpg" },
        { name: { fr: "Providence Island — île fondatrice de Monrovia", en: "Providence Island — Monrovia's founding island" }, wikipedia: "Providence_Island,_Liberia" },
        { name: { fr: "Marché de Waterside à Monrovia", en: "Waterside Market in Monrovia" }, wikipedia: "Monrovia" },
      ],
    },
    {
      id: 3,
      name: { fr: "Plages atlantiques", en: "Atlantic beaches" },
      region: { fr: "Margibi / Grand Cape Mount", en: "Margibi / Grand Cape Mount" },
      description: {
        fr: "Le Libéria possède plus de 500 km de côte atlantique avec des plages de sable blanc encore presque désertes. Silver Beach et les plages autour de Robertsport, ancien spot de surf à la réputation grandissante, attirent une poignée d'aventuriers en quête d'une Afrique de l'Ouest préservée.",
        en: "Liberia boasts over 500 km of Atlantic coastline with white-sand beaches that remain nearly deserted. Silver Beach and the beaches around Robertsport, a long-standing surf spot with a growing reputation, draw a handful of adventurers seeking an unspoiled West Africa.",
      },
      wikipedia: "Robertsport",
      tags: ["Plage", "Surf", "Nature", "Sauvage"],
      mustSee: [
        { name: { fr: "Robertsport — plage de surf mythique", en: "Robertsport — legendary surf beach" }, wikipedia: "Robertsport" },
        { name: { fr: "Lac Piso — lagon naturel protégé", en: "Lake Piso — protected natural lagoon" }, wikipedia: "Lake_Piso" },
        { name: { fr: "Silver Beach près de Monrovia", en: "Silver Beach near Monrovia" }, wikipedia: "Monrovia" },
        { name: { fr: "Coucher de soleil sur l'Atlantique", en: "Sunset over the Atlantic" }, wikipedia: "File:Sunset at Noronhas' beach.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Libéria est une destination abordable avec une infrastructure touristique encore limitée. Le dollar américain est la monnaie de facto dans les hôtels et restaurants, aux côtés du dollar libérien local. La reconstruction post-guerre civile a amélioré les infrastructures de Monrovia.",
      en: "Liberia is an affordable destination with still-limited tourist infrastructure. The US dollar is the de facto currency in hotels and restaurants, alongside the local Liberian dollar. Post-civil war reconstruction has improved Monrovia's infrastructure.",
    },
    currency: "LRD",
    exchangeRate: "1€ ≈ 200 LRD (1 USD ≈ 185 LRD)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse locale Monrovia", en: "Local guesthouse in Monrovia" }, price: "15–30 €", detail: { fr: "Simple, avec moustiquaire", en: "Simple, with mosquito net" } },
          { label: { fr: "Hôtel 2–3★ Monrovia", en: "2–3★ hotel in Monrovia" }, price: "40–70 €", detail: { fr: "Clim, eau chaude, sécurité", en: "A/C, hot water, security" } },
          { label: { fr: "Lodge de surf à Robertsport", en: "Surf lodge in Robertsport" }, price: "40–80 €", detail: { fr: "Bord de plage, ambiance détendue", en: "Beachfront, relaxed atmosphere" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Jollof rice au marché (rue)", en: "Jollof rice at the market (street)" }, price: "2–4 €", detail: { fr: "Incontournable d'Afrique de l'Ouest", en: "A West African staple" } },
          { label: { fr: "Restaurant local — fufu, cassava", en: "Local restaurant — fufu, cassava" }, price: "4–8 €", detail: { fr: "Cuisine traditionnelle libérienne", en: "Traditional Liberian cuisine" } },
          { label: { fr: "Restaurant expatriés / hôtel Monrovia", en: "Expat restaurant / hotel in Monrovia" }, price: "12–25 €", detail: { fr: "Cuisine internationale, poissons", en: "International cuisine, fish" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bush taxi Monrovia–Robertsport", en: "Bush taxi Monrovia–Robertsport" }, price: "5–10 €", detail: { fr: "~3h de route", en: "~3h drive" } },
          { label: { fr: "Moto-taxi à Monrovia", en: "Motorbike taxi in Monrovia" }, price: "0,50–2 €", detail: { fr: "Transport quotidien courant", en: "Common everyday transport" } },
          { label: { fr: "4x4 avec chauffeur / jour (Sapo)", en: "4x4 with driver / day (Sapo)" }, price: "80–120 €", detail: { fr: "Piste forestière difficile", en: "Difficult forest track" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Entrée parc Sapo + logement forestier / nuit", en: "Sapo park entrance + forest lodging / night" }, price: "30–60 €", detail: { fr: "Guide inclus", en: "Guide included" } },
          { label: { fr: "Cours de surf à Robertsport", en: "Surf lesson in Robertsport" }, price: "20–40 €", detail: { fr: "Instructeur local, planche fournie", en: "Local instructor, board provided" } },
          { label: { fr: "Excursion Providence Island en pirogue", en: "Canoe excursion to Providence Island" }, price: "10–20 €", detail: { fr: "Île historique fondatrice", en: "Historic founding island" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "35–55 €/j", desc: { fr: "Guesthouse + nourriture locale + bush taxi", en: "Guesthouse + local food + bush taxi" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "70–110 €/j", desc: { fr: "Hôtel 3★ + restos + 4x4 + guides", en: "3★ hotel + restaurants + 4x4 + guides" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Monrovia (2j) → Harbel & Plantation Firestone (1j) → Robertsport & plages (2j) → Parc de Sapo (4j) → Monrovia (1j)",
        en: "Monrovia (2d) → Harbel & Firestone Plantation (1d) → Robertsport & beaches (2d) → Sapo Park (4d) → Monrovia (1d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "850 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Monrovia (via escale)", en: "Return flight Paris–Monrovia (via stopover)" }, amount: "400–600 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "200–280 €" },
            { label: { fr: "Transports locaux + bush taxis", en: "Local transport + bush taxis" }, amount: "120–180 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "80–120 €" },
            { label: { fr: "Activités + Sapo + guides", en: "Activities + Sapo + guides" }, amount: "100–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 700 – 2 400 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Monrovia (via escale)", en: "Return flight Paris–Monrovia (via stopover)" }, amount: "500–750 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "550–800 €" },
            { label: { fr: "4x4 privatif + chauffeur + guides", en: "Private 4x4 + driver + guides" }, amount: "350–500 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "180–250 €" },
            { label: { fr: "Activités + entrées", en: "Activities + entrance fees" }, amount: "150–200 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~9–10h (via Bruxelles, Casablanca ou Addis-Abeba — pas de direct)", en: "~9–10h (via Brussels, Casablanca or Addis Ababa — no direct flight)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Visa obligatoire — e-Visa disponible en ligne (85 $)", en: "Visa required — e-Visa available online (85 $)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Dollar libérien (LRD) + dollar américain accepté partout — espèces indispensables", en: "Liberian dollar (LRD) + US dollar accepted everywhere — cash essential" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Anglais (officiel et courant) — langue unique en Afrique de l'Ouest", en: "English (official and widely spoken) — unique among West African countries" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type A/B (comme aux États-Unis) — 120 V (adaptateur nécessaire)", en: "Type A/B (as in the United States) — 120V (adapter required)" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéen OBLIGATOIRE + fièvre jaune OBLIGATOIRE — eau en bouteille uniquement", en: "Antimalarial treatment MANDATORY + yellow fever vaccine MANDATORY — bottled water only" } },
    { icon: "🛣️", label: { fr: "Routes", en: "Roads" }, value: { fr: "Routes souvent en mauvais état hors de Monrovia — 4x4 recommandé en saison sèche", en: "Roads often in poor condition outside Monrovia — 4x4 recommended in the dry season" } },
    { icon: "🔒", label: { fr: "Sécurité", en: "Safety" }, value: { fr: "Situation stable depuis 2003 — quartiers de Monrovia à éviter la nuit, consulter le Quai d'Orsay", en: "Stable situation since 2003 — some Monrovia neighbourhoods best avoided at night, check government travel advisories" } },
  ],
};
