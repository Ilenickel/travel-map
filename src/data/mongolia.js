export const MONGOLIA = {
  code: "MNG",
  numericId: 496,
  name: { fr: "Mongolie", en: "Mongolia" },
  emoji: "🇲🇳",
  capital: { fr: "Oulan-Bator", en: "Ulaanbaatar" },
  language: { fr: "Mongol", en: "Mongolian" },
  currency: { fr: "Tögrög (MNT)", en: "Tögrög (MNT)" },
  timezone: "UTC+8",
  filter: {
    budgetMin: 50, budgetMid: 110,
    tripMin: 1800, tripMid: 3500,
  },
  description: {
    fr: "La Mongolie est l'un des derniers grands espaces vierges de la planète. Steppes infinies, désert de Gobi aux dunes chantantes, yourtes de nomades, chevaux sauvages et nuits sous une voûte céleste sans pollution lumineuse — une aventure incomparable pour ceux qui cherchent l'essentiel.",
    en: "Mongolia is one of the last great untouched wilderness areas on the planet. Endless steppes, the Gobi Desert with its singing dunes, nomad yurts, wild horses and nights under a light-pollution-free sky — an unrivalled adventure for those seeking the essentials.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Août", en: "June – August" },
      label: { fr: "Été nomade", en: "Nomad summer" },
      color: "#22c55e",
      description: {
        fr: "Seule période vraiment accessible (10–25 °C). Naadam (fête nationale en juillet) avec lutte, tir à l'arc et équitation. Steppes verdoyantes.",
        en: "The only truly accessible period (10–25°C). Naadam (national festival in July) with wrestling, archery and horse racing. Lush green steppes.",
      },
      icon: "🐎",
    },
    {
      months: { fr: "Mai & Septembre", en: "May & September" },
      label: { fr: "Épaules", en: "Shoulder season" },
      color: "#f59e0b",
      description: {
        fr: "Moins de monde, températures plus fraîches mais agréables (5–18 °C). Paysages colorés en automne.",
        en: "Fewer crowds, cooler but pleasant temperatures (5–18°C). Colourful autumn landscapes.",
      },
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "ulaanbaatar",
      name: { fr: "Oulan-Bator", en: "Ulaanbaatar" },
      region: { fr: "Capitale", en: "Capital" },
      data: [
        { month: "Jan", temp: -22, rain: 5,   icon: "❄️" },
        { month: "Fév", temp: -16, rain: 5,   icon: "❄️" },
        { month: "Mar", temp: -5,  rain: 7,   icon: "❄️" },
        { month: "Avr", temp: 6,   rain: 15,  icon: "❄️" },
        { month: "Mai", temp: 14,  rain: 30,  icon: "⛅" },
        { month: "Jun", temp: 19,  rain: 60,  icon: "⛅" },
        { month: "Jul", temp: 21,  rain: 75,  icon: "⛅" },
        { month: "Aoû", temp: 19,  rain: 60,  icon: "⛅" },
        { month: "Sep", temp: 12,  rain: 30,  icon: "⛅" },
        { month: "Oct", temp: 2,   rain: 15,  icon: "⛅" },
        { month: "Nov", temp: -10, rain: 8,   icon: "❄️" },
        { month: "Déc", temp: -18, rain: 5,   icon: "❄️" },
      ],
    },
    {
      id: "gobi",
      name: { fr: "Désert de Gobi", en: "Gobi Desert" },
      region: { fr: "Sud", en: "South" },
      data: [
        { month: "Jan", temp: -18, rain: 2,   icon: "❄️" },
        { month: "Fév", temp: -12, rain: 2,   icon: "❄️" },
        { month: "Mar", temp: -2,  rain: 5,   icon: "❄️" },
        { month: "Avr", temp: 10,  rain: 8,   icon: "⛅" },
        { month: "Mai", temp: 18,  rain: 12,  icon: "☀️" },
        { month: "Jun", temp: 25,  rain: 15,  icon: "☀️" },
        { month: "Jul", temp: 27,  rain: 20,  icon: "☀️" },
        { month: "Aoû", temp: 25,  rain: 20,  icon: "☀️" },
        { month: "Sep", temp: 18,  rain: 10,  icon: "☀️" },
        { month: "Oct", temp: 7,   rain: 8,   icon: "⛅" },
        { month: "Nov", temp: -6,  rain: 3,   icon: "❄️" },
        { month: "Déc", temp: -15, rain: 2,   icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Désert de Gobi", en: "Gobi Desert" },
      region: { fr: "Sud Mongolie", en: "Southern Mongolia" },
      description: {
        fr: "Le Gobi est l'un des plus grands déserts du monde, alternant steppes pierreuses et dunes de sable dorées. Les falaises flamboyantes (Bayanzag), les dunes chantantes (Khongoryn Els) et la faune unique (chameau de Bactriane sauvage) sont à couper le souffle.",
        en: "The Gobi is one of the largest deserts in the world, alternating between rocky steppes and golden sand dunes. The Flaming Cliffs (Bayanzag), the singing dunes of Khongoryn Els and unique wildlife (the wild Bactrian camel) are breathtaking.",
      },
      wikipedia: "Gobi_Desert",
      tags: ["Désert", "Nature", "Aventure", "Faune"],
      mustSee: [
        { name: { fr: "Dunes de Khongoryn Els", en: "Khongoryn Els dunes" }, wikipedia: "Khongoryn_Els" },
        { name: { fr: "Falaises flamboyantes de Bayanzag", en: "Bayanzag Flaming Cliffs" }, wikipedia: "Flaming_Cliffs" },
        { name: { fr: "Chameaux de Bactriane sauvages", en: "Wild Bactrian camels" }, wikipedia: "Wild_Bactrian_camel" },
      ],
    },
    {
      id: 2,
      name: { fr: "Parc National de Terelj", en: "Terelj National Park" },
      region: "Töv",
      description: {
        fr: "À seulement 80 km d'Oulan-Bator, ce parc offre un aperçu parfait du mode de vie nomade avec des yourtes, des formations rocheuses spectaculaires et d'excellentes randonnées à cheval.",
        en: "Just 80 km from Ulaanbaatar, this park offers a perfect glimpse of the nomadic way of life, with yurts, spectacular rock formations and excellent horseback riding.",
      },
      wikipedia: "Gorkhi-Terelj_National_Park",
      tags: ["Nature", "Randonnée", "Culture nomade"],
      mustSee: [
        { name: { fr: "Rocher de la Tortue (Melkhii Khad)", en: "Turtle Rock (Melkhii Khad)" }, wikipedia: "Gorkhi-Terelj_National_Park" },
        { name: { fr: "Statue de Gengis Khan (40m)", en: "Genghis Khan Statue (40m)" }, wikipedia: "File:Genghis Khan Equestrian Statue.jpg" },
        { name: { fr: "Séjour en yourte chez nomades", en: "Yurt stay with nomads" }, wikipedia: "File:Decorated tent near lake Qinghai.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Oulan-Bator", en: "Ulaanbaatar" },
      region: { fr: "Capitale", en: "Capital" },
      description: {
        fr: "Capitale contrastée entre gratte-ciels modernes et quartiers de yourtes, avec des monastères bouddhistes rescapés de l'ère soviétique et une scène artistique naissante.",
        en: "A capital of contrasts between modern skyscrapers and yurt districts, with Buddhist monasteries that survived the Soviet era and an emerging arts scene.",
      },
      wikipedia: "Ulaanbaatar",
      tags: ["Ville", "Culture", "Bouddhisme"],
      mustSee: [
        { name: { fr: "Monastère Gandantegchinlen", en: "Gandantegchinlen Monastery" }, wikipedia: "Gandantegchinlen_Monastery" },
        { name: { fr: "Place Sükhbaatar", en: "Sükhbaatar Square" }, wikipedia: "File:Panorama Ulan Bator 13.JPG" },
        { name: { fr: "Musée national de Mongolie", en: "National Museum of Mongolia" }, wikipedia: "National_Museum_of_Mongolia" },
      ],
    },
    {
      id: 4,
      name: { fr: "Khustain Nuruu — Chevaux Takhi", en: "Khustain Nuruu — Takhi Horses" },
      region: "Töv",
      description: {
        fr: "Réserve naturelle où vivent les derniers chevaux de Przewalski sauvages au monde (Takhi), réintroduits après leur extinction à l'état sauvage. Un spectacle naturel rare.",
        en: "A nature reserve home to the last wild Przewalski's horses in the world (Takhi), reintroduced after their extinction in the wild. A rare natural spectacle.",
      },
      wikipedia: "Hustai_National_Park",
      tags: ["Nature", "Faune", "Randonnée"],
      mustSee: [
        { name: { fr: "Chevaux de Przewalski (Takhi)", en: "Przewalski's horses (Takhi)" }, wikipedia: "Przewalski's_horse" },
        { name: { fr: "Steppes de la vallée Tuul", en: "Tuul Valley steppes" }, wikipedia: "Hustai_National_Park" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Mongolie est abordable en logistique locale, mais les circuits organisés et vols internationaux sont coûteux. Voyager indépendamment demande une bonne préparation.",
      en: "Mongolia is affordable for local logistics, but organised tours and international flights are costly. Independent travel requires good preparation.",
    },
    currency: "MNT",
    exchangeRate: "1€ ≈ 3 700 MNT",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Yourte chez nomades (ger)", en: "Nomad yurt (ger)" }, price: "10–20 €", detail: { fr: "Avec repas, expérience unique", en: "With meals, a unique experience" } },
          { label: { fr: "Camp de yourtes touristique", en: "Tourist yurt camp" }, price: "30–60 €", detail: { fr: "Confort + demi-pension", en: "Comfort + half-board" } },
          { label: { fr: "Hôtel 3★ Oulan-Bator", en: "3★ hotel in Ulaanbaatar" }, price: "50–90 €", detail: { fr: "Centre-ville", en: "City centre" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Buuz (raviolis à la vapeur)", en: "Buuz (steamed dumplings)" }, price: "1–2 €", detail: { fr: "Plat national incontournable", en: "A must-try national dish" } },
          { label: { fr: "Restaurant local Oulan-Bator", en: "Local restaurant in Ulaanbaatar" }, price: "5–12 €", detail: { fr: "Viande, lait fermenté (airag)", en: "Meat, fermented milk (airag)" } },
          { label: { fr: "Restaurant occidental", en: "Western restaurant" }, price: "15–30 €", detail: { fr: "Bonne sélection à UB", en: "Good selection in UB" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Location 4×4 avec chauffeur / jour", en: "4x4 rental with driver / day" }, price: "80–120 €", detail: { fr: "Indispensable hors route", en: "Essential off-road" } },
          { label: { fr: "Transport local Oulan-Bator", en: "Local transport in Ulaanbaatar" }, price: "0,50–1 €", detail: { fr: "Bus ou taxi partagé", en: "Bus or shared taxi" } },
          { label: { fr: "Vol intérieur UB–Gobi", en: "Domestic flight UB–Gobi" }, price: "80–150 €", detail: { fr: "Gain de temps considérable", en: "Saves considerable time" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Festival Naadam (entrée)", en: "Naadam Festival (entry)" }, price: "20–50 €", detail: { fr: "Juillet — réserver à l'avance", en: "July — book in advance" } },
          { label: { fr: "Trek à cheval (1 jour)", en: "Horseback trek (1 day)" }, price: "40–80 €", detail: { fr: "Guide et cheval inclus", en: "Guide and horse included" } },
          { label: { fr: "Circuit organisé Gobi (5j)", en: "Organised Gobi tour (5 days)" }, price: "300–600 €", detail: { fr: "Tout inclus depuis UB", en: "All-inclusive from UB" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "50–80 €/j", desc: { fr: "Guesthouses + yourtes + transport partagé", en: "Guesthouses + yurts + shared transport" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "110–180 €/j", desc: { fr: "Camps de yourtes + 4×4 privatif + guides", en: "Yurt camps + private 4x4 + guides" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "300 €+/j", desc: { fr: "Lodges premium + hélicoptère + guides privés", en: "Premium lodges + helicopter + private guides" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks" },
      route: {
        fr: "Oulan-Bator (2j) → Terelj (2j) → Gobi (5j) → Khustain Nuruu (2j) → Oulan-Bator (3j)",
        en: "Ulaanbaatar (2d) → Terelj (2d) → Gobi (5d) → Khustain Nuruu (2d) → Ulaanbaatar (3d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 800 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Oulan-Bator", en: "Return flight Paris–Ulaanbaatar" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "350–600 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "200–350 €" },
            { label: { fr: "Transport 4×4 partagé", en: "Shared 4x4 transport" }, amount: "300–500 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "200–300 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "3 500 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Oulan-Bator", en: "Return flight Paris–Ulaanbaatar" }, amount: "700–1 100 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "800–1 400 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "400–600 €" },
            { label: { fr: "Transport 4×4 privatif", en: "Private 4x4 transport" }, amount: "800–1 200 €" },
            { label: { fr: "Activités & guides", en: "Activities & guides" }, amount: "400–600 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "8 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–UB (Business)", en: "Return flight Paris–UB (Business)" }, amount: "2 000–3 500 €" },
            { label: { fr: "Lodges premium (14 nuits)", en: "Premium lodges (14 nights)" }, amount: "2 500–4 000 €" },
            { label: { fr: "Gastronomie & expériences", en: "Fine dining & experiences" }, amount: "1 000–2 000 €" },
            { label: { fr: "Hélico & transport privé", en: "Helicopter & private transport" }, amount: "1 000–2 000 €" },
            { label: { fr: "Activités exclusives", en: "Exclusive activities" }, amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~10h (MIAT Mongolian Airlines, avec escale)", en: "~10h (MIAT Mongolian Airlines, with a stopover)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Sans visa pour les Français (30 jours)", en: "No visa required for French citizens (30 days)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Tögrög (1€ ≈ 3 700 MNT) — espèces", en: "Tögrög (1€ ≈ 3,700 MNT) — cash" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Mongol (peu d'anglais hors Oulan-Bator)", en: "Mongolian (little English spoken outside Ulaanbaatar)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/E – 220 V", en: "Type C/E – 220V" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Nul hors des villes — prévoir satellite en steppe", en: "Non-existent outside towns — plan for satellite in the steppe" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — purification indispensable", en: "Not drinkable — purification essential" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Encéphalite à tiques en été — vaccin conseillé", en: "Tick-borne encephalitis in summer — vaccine recommended" } },
  ],
};
