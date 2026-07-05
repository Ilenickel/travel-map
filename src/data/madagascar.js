export const MADAGASCAR = {
  code: "MDG",
  numericId: 450,
  name: { fr: "Madagascar", en: "Madagascar" },
  emoji: "🇲🇬",
  capital: { fr: "Antananarivo", en: "Antananarivo" },
  language: { fr: "Malgache, Français", en: "Malagasy, French" },
  currency: { fr: "Ariary (MGA)", en: "Ariary (MGA)" },
  timezone: "UTC+3",
  filter: {
    budgetMin: 40, budgetMid: 80,
    tripMin: 2000, tripMid: 4000,
  },
  description: {
    fr: "Madagascar, « la Grande Île », est l'une des destinations les plus uniques au monde : 90% de sa faune et flore sont endémiques. Lémuriens dans les forêts, baobabs géants de l'allée des Baobabs, caméléons multicolores et plages sauvages de Nosy Be. Un autre monde.",
    en: "Madagascar, 'the Great Island', is one of the most unique destinations in the world: 90% of its flora and fauna are endemic. Lemurs in the forests, giant baobabs along the Avenue of the Baobabs, multicoloured chameleons and wild beaches at Nosy Be. A world apart.",
  },

  bestPeriods: [
    {
      months: { fr: "Avril – Novembre", en: "April – November" },
      label: { fr: "Saison sèche", en: "Dry season" },
      color: "#22c55e",
      description: {
        fr: "Saison sèche et fraîche, idéale pour tout le pays. Routes praticables, lémuriens actifs. Saison des baleines à bosse sur la côte est (juillet–septembre).",
        en: "Dry, cool season, ideal for the whole country. Roads passable, lemurs active. Humpback whale season on the east coast (July–September).",
      },
      icon: "🦎",
    },
    {
      months: { fr: "Décembre – Mars", en: "December – March" },
      label: { fr: "Saison des pluies", en: "Rainy season" },
      color: "#3b82f6",
      description: {
        fr: "Végétation luxuriante, moins de touristes. Routes impraticables au nord-ouest. Nosy Be reste accessible.",
        en: "Lush vegetation, fewer tourists. Roads impassable in the north-west. Nosy Be remains accessible.",
      },
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "antananarivo",
      name: "Antananarivo",
      region: "Analamanga",
      data: [
        { month: "Jan", temp: 20, rain: 270, icon: "⛅" },
        { month: "Fév", temp: 20, rain: 245, icon: "⛅" },
        { month: "Mar", temp: 19, rain: 180, icon: "☀️" },
        { month: "Avr", temp: 18, rain: 50,  icon: "☀️" },
        { month: "Mai", temp: 16, rain: 15,  icon: "☀️" },
        { month: "Jun", temp: 14, rain: 10,  icon: "⛅" },
        { month: "Jul", temp: 13, rain: 10,  icon: "⛅" },
        { month: "Aoû", temp: 14, rain: 10,  icon: "⛅" },
        { month: "Sep", temp: 17, rain: 20,  icon: "☀️" },
        { month: "Oct", temp: 19, rain: 55,  icon: "☀️" },
        { month: "Nov", temp: 20, rain: 150, icon: "☀️" },
        { month: "Déc", temp: 21, rain: 230, icon: "⛅" },
      ],
    },
    {
      id: "nosy_be",
      name: "Nosy Be",
      region: "Diana",
      data: [
        { month: "Jan", temp: 28, rain: 320, icon: "🌧️" },
        { month: "Fév", temp: 28, rain: 290, icon: "🌧️" },
        { month: "Mar", temp: 28, rain: 220, icon: "🌧️" },
        { month: "Avr", temp: 27, rain: 60,  icon: "⛅" },
        { month: "Mai", temp: 26, rain: 25,  icon: "☀️" },
        { month: "Jun", temp: 24, rain: 15,  icon: "☀️" },
        { month: "Jul", temp: 24, rain: 10,  icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 10,  icon: "☀️" },
        { month: "Sep", temp: 25, rain: 15,  icon: "☀️" },
        { month: "Oct", temp: 26, rain: 40,  icon: "☀️" },
        { month: "Nov", temp: 27, rain: 130, icon: "🌧️" },
        { month: "Déc", temp: 28, rain: 250, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Allée des Baobabs", en: "Avenue of the Baobabs" },
      region: "Menabe",
      description: {
        fr: "L'allée des Baobabs, entre Morondava et Belo Tsiribihina, est l'image iconique de Madagascar : des dizaines de baobabs centenaires (20–30 m de haut, 1000 ans d'âge) encadrant une piste de latérite rouge au coucher du soleil.",
        en: "The Avenue of the Baobabs, between Morondava and Belo Tsiribihina, is Madagascar's iconic image: dozens of centuries-old baobabs (20–30 m tall, 1,000 years old) lining a red laterite track at sunset.",
      },
      wikipedia: "Avenue_of_the_Baobabs",
      tags: ["Nature", "Icône", "Photo", "Unique"],
      mustSee: [
        { name: { fr: "Coucher de soleil sur les baobabs", en: "Sunset over the baobabs" }, wikipedia: "File:Avenue of the Baobabs at Sunset.jpg" },
        { name: { fr: "Baobabs amoureux (deux baobabs enlacés)", en: "Baobabs Amoureux (two intertwined baobabs)" }, wikipedia: "Avenue_of_the_Baobabs" },
        { name: { fr: "Village de Kirindy (lémuriens)", en: "Kirindy village (lemurs)" }, wikipedia: "File:Ring-tailed lemur (Lemur catta).jpg" },
        { name: { fr: "Réserve de Bemaraha (UNESCO)", en: "Bemaraha Reserve (UNESCO)" }, wikipedia: "Tsingy_de_Bemaraha_Strict_Nature_Reserve" },
      ],
    },
    {
      id: 2,
      name: { fr: "Tsingy de Bemaraha", en: "Tsingy de Bemaraha" },
      region: "Melaky",
      description: {
        fr: "Les Tsingy sont des forêts de calcaire en lames de couteau, inscrites à l'UNESCO. Ces formations karstiques uniques sont parcourues via des via ferrata, avec une biodiversité extraordinaire (lémuriens, oiseaux endémiques).",
        en: "The Tsingy are UNESCO-listed forests of knife-edged limestone. These unique karst formations are explored via via ferrata routes, amid extraordinary biodiversity (lemurs, endemic birds).",
      },
      wikipedia: "Tsingy_de_Bemaraha_Strict_Nature_Reserve",
      tags: ["UNESCO", "Nature", "Aventure", "Unique"],
      mustSee: [
        { name: { fr: "Grands Tsingy — via ferrata suspendue", en: "Grands Tsingy — suspended via ferrata" }, wikipedia: "File:Tsingy de Bemaraha, Madagascar.jpg" },
        { name: { fr: "Lémuriens dans la forêt", en: "Lemurs in the forest" }, wikipedia: "File:Grote vasapapegaai, Tsingy de Bemaraha.JPG" },
        { name: { fr: "Pirogue sur la rivière Manambolo", en: "Canoe trip on the Manambolo river" }, wikipedia: "File:Manambolorivier 13.JPG" },
      ],
    },
    {
      id: 3,
      name: { fr: "Parc national d'Isalo", en: "Isalo National Park" },
      region: "Ihorombe",
      description: {
        fr: "Isalo est le « Canyon du Colorado » malgache : un massif de grès sculpté par l'érosion en canyons, piscines naturelles, pluies de sable orange et forêts de pachypodes en fleurs. Randonnées inoubliables.",
        en: "Isalo is Madagascar's 'Grand Canyon': a sandstone massif carved by erosion into canyons, natural pools, orange sand formations and forests of flowering pachypodium. Unforgettable hikes.",
      },
      wikipedia: "Isalo_National_Park",
      tags: ["Randonnée", "Nature", "Canyon", "Piscines"],
      mustSee: [
        { name: { fr: "Piscine naturelle bleue (nage)", en: "Blue natural pool (swimming)" }, wikipedia: "File:Falls_of_Anjofo,_Isalo,_Madagascar_(21833449081).jpg" },
        { name: { fr: "Canyon des Makis (lémuriens)", en: "Canyon des Makis (lemurs)" }, wikipedia: "File:Eulemur_rufifrons,_Isalo_National_Park_2007-03-01.jpg" },
        { name: { fr: "Fenêtre de l'Isalo (coucher de soleil)", en: "Isalo Window (sunset)" }, wikipedia: "File:IsaloRock.jpg" },
      ],
    },
    {
      id: 4,
      name: "Nosy Be",
      region: "Diana",
      description: {
        fr: "L'île de Nosy Be est le paradis balnéaire de Madagascar : plages de sable blanc, lagons aux eaux tropicales, observation des baleines à bosse (juil.–sept.) et requins-baleines. L'île aux parfums (ylang-ylang).",
        en: "The island of Nosy Be is Madagascar's seaside paradise: white sand beaches, tropical lagoons, humpback whale watching (Jul.–Sep.) and whale sharks. The 'island of perfumes' (ylang-ylang).",
      },
      wikipedia: "File:Nosy Iranja, Madagascar, 2025-09-17, DD 21.jpg",
      tags: ["Plage", "Plongée", "Baleines", "Île"],
      mustSee: [
        { name: { fr: "Plage de Hell-Ville & Madirokely", en: "Hell-Ville & Madirokely beach" }, wikipedia: "File:Ville de Nosy Be Hell ville, Madagascar.jpg" },
        { name: { fr: "Baleines à bosse (juil.–sept.)", en: "Humpback whales (Jul.–Sep.)" }, wikipedia: "Humpback_whale" },
        { name: { fr: "Requins-baleines à Nosy Mitsio", en: "Whale sharks at Nosy Mitsio" }, wikipedia: "Whale_shark" },
        { name: { fr: "Plongée aux îlots de Nosy Tanikely", en: "Diving at the Nosy Tanikely islets" }, wikipedia: "Coral_reef" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Madagascar est l'un des pays les moins chers au monde. Le transport est la variable principale : les routes sont difficiles et les vols intérieurs indispensables pour certaines zones.",
      en: "Madagascar is one of the cheapest countries in the world. Transport is the main variable: roads are difficult and domestic flights are essential for some areas.",
    },
    currency: "MGA",
    exchangeRate: "1€ ≈ 4 900 MGA",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Bungalow local", en: "Local bungalow" }, price: "10–25 €", detail: { fr: "Propre et authentique", en: "Clean and authentic" } },
          { label: { fr: "Hôtel 3★ Antananarivo", en: "3★ hotel in Antananarivo" }, price: "35–60 €", detail: { fr: "Confort standard", en: "Standard comfort" } },
          { label: { fr: "Lodge éco / vue plage Nosy Be", en: "Eco-lodge / beach view in Nosy Be" }, price: "80–180 €", detail: { fr: "Proche paradis tropical", en: "Near-paradise tropical setting" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Romazava (viande feuilles)", en: "Romazava (meat and greens stew)" }, price: "1–3 €", detail: { fr: "Plat national, économique", en: "National dish, cheap" } },
          { label: { fr: "Restaurant local (riz, zébu)", en: "Local restaurant (rice, zebu beef)" }, price: "3–8 €", detail: { fr: "Très abordable", en: "Very affordable" } },
          { label: { fr: "Fruits de mer Nosy Be", en: "Seafood in Nosy Be" }, price: "10–20 €", detail: { fr: "Homard, crevettes géantes", en: "Lobster, giant prawns" } },
        ],
      },
      {
        id: "transport",
        icon: "✈️",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Vol intérieur Tana–Morondava", en: "Domestic flight Tana–Morondava" }, price: "100–200 €", detail: { fr: "A/R — évite 2j de piste", en: "Round trip — saves 2 days on the track" } },
          { label: { fr: "Taxi-brousse (piste)", en: "Taxi-brousse (bush taxi)" }, price: "5–20 €", detail: { fr: "Lent mais authentique", en: "Slow but authentic" } },
          { label: { fr: "Location 4x4 avec chauffeur", en: "4x4 rental with driver" }, price: "80–120 €/j", detail: { fr: "Obligatoire hors routes", en: "Essential off the main roads" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Entrée parc national (Isalo, Ranomafana)", en: "National park entrance (Isalo, Ranomafana)" }, price: "10–20 €/j", detail: { fr: "Guide obligatoire", en: "Guide mandatory" } },
          { label: { fr: "Observation baleines (Nosy Be)", en: "Whale watching (Nosy Be)" }, price: "60–100 €", detail: { fr: "Demi-journée", en: "Half day" } },
          { label: { fr: "Trek Tsingy (via ferrata)", en: "Tsingy trek (via ferrata)" }, price: "30–60 €", detail: { fr: "Guide obligatoire", en: "Guide mandatory" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "40–60 €/j", desc: { fr: "Bungalow + cuisine locale + transport taxi-brousse", en: "Bungalow + local food + taxi-brousse transport" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "80–130 €/j", desc: { fr: "Hôtel 3★ + restaurants + vols intérieurs", en: "3★ hotel + restaurants + domestic flights" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "250 €+/j", desc: { fr: "Lodges & Nosy Be + vols privés + guides premium", en: "Lodges & Nosy Be + private flights + premium guides" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks" },
      route: {
        fr: "Antananarivo (2j) → Isalo (3j) → Allée des Baobabs (2j) → Tsingy de Bemaraha (2j) → Nosy Be (5j)",
        en: "Antananarivo (2d) → Isalo (3d) → Avenue of the Baobabs (2d) → Tsingy de Bemaraha (2d) → Nosy Be (5d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "2 000 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Antananarivo", en: "Return flight Paris–Antananarivo" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "250–450 €" },
            { label: { fr: "Vols intérieurs (3–4)", en: "Domestic flights (3–4)" }, amount: "400–600 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "300–450 €" },
            { label: { fr: "Parcs & guides & imprévus", en: "Parks & guides & contingency" }, amount: "300–500 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "4 000 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Antananarivo", en: "Return flight Paris–Antananarivo" }, amount: "700–1 000 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "800–1 300 €" },
            { label: { fr: "Vols intérieurs (3–4)", en: "Domestic flights (3–4)" }, amount: "500–800 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "500–700 €" },
            { label: { fr: "Excursions & parcs", en: "Excursions & parks" }, amount: "500–800 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "9 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Antananarivo (Business)", en: "Return flight Paris–Antananarivo (Business)" }, amount: "2 500–4 000 €" },
            { label: { fr: "Lodges premium (14 nuits)", en: "Premium lodges (14 nights)" }, amount: "2 500–4 000 €" },
            { label: { fr: "Vols charter", en: "Charter flights" }, amount: "1 500–3 000 €" },
            { label: { fr: "Gastronomie & expériences", en: "Fine dining & experiences" }, amount: "800–1 500 €" },
            { label: { fr: "Guides privés", en: "Private guides" }, amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~11h (Air Austral direct, Air France via escale)", en: "~11h (Air Austral direct, Air France with a stopover)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Visa à l'arrivée : gratuit jusqu'à 30 jours, 35€ jusqu'à 60 jours, 80€ jusqu'à 90 jours. E-Visa en ligne disponible.", en: "Visa on arrival: free up to 30 days, 35€ up to 60 days, 80€ up to 90 days. Online e-Visa available." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Ariary (1€ ≈ 4 900 MGA) — espèces indispensables", en: "Ariary (1€ ≈ 4,900 MGA) — cash essential" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Malgache + Français (largement compris)", en: "Malagasy + French (widely understood)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: "Type C/E – 220 V" },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Couverture villes, très limitée en zone rurale", en: "Coverage in cities, very limited in rural areas" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille obligatoire", en: "Not drinkable — bottled water essential" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéen OBLIGATOIRE + vaccins hépatite A/B recommandés", en: "Antimalarial treatment MANDATORY + hepatitis A/B vaccines recommended" } },
  ],
};
