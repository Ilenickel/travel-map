export const RWANDA = {
  code: "RWA",
  numericId: 646,
  name: { fr: "Rwanda", en: "Rwanda" },
  emoji: "🇷🇼",
  capital: { fr: "Kigali", en: "Kigali" },
  language: { fr: "Kinyarwanda, Français, Anglais", en: "Kinyarwanda, French, English" },
  currency: { fr: "Franc rwandais (RWF)", en: "Rwandan franc (RWF)" },
  timezone: "UTC+2",
  filter: {
    budgetMin: 60, budgetMid: 150,
    tripMin: 3000, tripMid: 6000,
  },
  description: {
    fr: "Le Rwanda, « pays des mille collines », s'est réinventé en modèle de développement africain. Kigali, ville la plus propre d'Afrique, et le parc des Volcans — dernier refuge des gorilles de montagne — font du Rwanda une destination d'exception, à la fois émouvante et inspirante.",
    en: "Rwanda, the 'land of a thousand hills', has reinvented itself as a model of African development. Kigali, Africa's cleanest city, and Volcanoes National Park — the last refuge of the mountain gorillas — make Rwanda an exceptional destination, both moving and inspiring.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Septembre", en: "June – September" },
      label: { fr: "Grande saison sèche", en: "Long dry season" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période pour les gorilles et le Parc des Volcans. Herbe courte, sentiers praticables. Mois de juin au top.",
        en: "Best time for gorillas and Volcanoes National Park. Short grass, passable trails. June is the top month.",
      },
      icon: "🦍",
    },
    {
      months: { fr: "Décembre – Janvier", en: "December – January" },
      label: { fr: "Petite saison sèche", en: "Short dry season" },
      color: "#fb923c",
      description: {
        fr: "Courte saison sèche, bonnes conditions pour les gorilles et les chimpanzés de la forêt de Nyungwe.",
        en: "Short dry season, good conditions for gorillas and chimpanzees in Nyungwe Forest.",
      },
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "kigali",
      name: "Kigali",
      region: { fr: "Kigali", en: "Kigali" },
      data: [
        { month: "Jan", temp: 21, rain: 80,  icon: "☀️" },
        { month: "Fév", temp: 21, rain: 110, icon: "☀️" },
        { month: "Mar", temp: 21, rain: 140, icon: "☀️" },
        { month: "Avr", temp: 21, rain: 170, icon: "☀️" },
        { month: "Mai", temp: 20, rain: 110, icon: "☀️" },
        { month: "Jun", temp: 19, rain: 20,  icon: "☀️" },
        { month: "Jul", temp: 19, rain: 5,   icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 15,  icon: "☀️" },
        { month: "Sep", temp: 21, rain: 60,  icon: "☀️" },
        { month: "Oct", temp: 21, rain: 95,  icon: "☀️" },
        { month: "Nov", temp: 21, rain: 110, icon: "☀️" },
        { month: "Déc", temp: 21, rain: 80,  icon: "☀️" },
      ],
    },
    {
      id: "parc_volcans",
      name: { fr: "Parc des Volcans", en: "Volcanoes National Park" },
      region: { fr: "Rwanda Nord", en: "Northern Rwanda" },
      data: [
        { month: "Jan", temp: 15, rain: 60,  icon: "⛅" },
        { month: "Fév", temp: 15, rain: 80,  icon: "⛅" },
        { month: "Mar", temp: 15, rain: 130, icon: "⛅" },
        { month: "Avr", temp: 14, rain: 180, icon: "⛅" },
        { month: "Mai", temp: 14, rain: 100, icon: "⛅" },
        { month: "Jun", temp: 13, rain: 20,  icon: "⛅" },
        { month: "Jul", temp: 13, rain: 5,   icon: "⛅" },
        { month: "Aoû", temp: 14, rain: 10,  icon: "⛅" },
        { month: "Sep", temp: 15, rain: 55,  icon: "⛅" },
        { month: "Oct", temp: 15, rain: 100, icon: "⛅" },
        { month: "Nov", temp: 15, rain: 120, icon: "⛅" },
        { month: "Déc", temp: 15, rain: 70,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Gorilles de montagne — Parc des Volcans", en: "Mountain gorillas — Volcanoes National Park" },
      region: { fr: "Rwanda Nord", en: "Northern Rwanda" },
      description: {
        fr: "Le Parc national des Volcans est l'un des rares endroits au monde où observer des gorilles de montagne en liberté. Ces primates, proches parents de l'homme, vivent en familles dans les forêts brumeuses des Virunga. Un permis (1 500$) donne accès à une heure inoubliable.",
        en: "Volcanoes National Park is one of the few places in the world to observe wild mountain gorillas. These primates, close relatives of humans, live in family groups in the misty forests of the Virunga range. A permit ($1,500) grants access to an unforgettable hour with them.",
      },
      wikipedia: "Volcanoes_National_Park",
      tags: ["Gorilles", "Nature", "Unique", "UNESCO", "Safari", "Randonnée"],
      mustSee: [
        { name: { fr: "Trekking gorilles de montagne", en: "Mountain gorilla trekking" }, wikipedia: "Mountain_gorilla" },
        { name: { fr: "Volcan Karisimbi (4 507 m)", en: "Mount Karisimbi (4,507 m)" }, wikipedia: "Mount_Karisimbi" },
        { name: { fr: "Forêt brumeuse des Virunga", en: "Virunga misty forest" }, wikipedia: "Virunga_Mountains" },
        { name: "Diane Fossey Tomb (Karisoke)", wikipedia: "Dian_Fossey" },
      ],
    },
    {
      id: 2,
      name: "Kigali",
      region: { fr: "Kigali", en: "Kigali" },
      description: {
        fr: "Kigali est la capitale la plus propre et la plus moderne d'Afrique sub-saharienne : interdiction des sacs plastiques depuis 2008, rues impeccables, gastronomie dynamique. Le Mémorial du Génocide est une visite essentielle pour comprendre l'histoire rwandaise.",
        en: "Kigali is the cleanest and most modern capital in sub-Saharan Africa: plastic bags banned since 2008, spotless streets, a dynamic food scene. The Genocide Memorial is an essential visit for understanding Rwandan history.",
      },
      wikipedia: "Kigali",
      tags: ["Ville", "Moderne", "Mémoire", "Gastronomie", "Histoire", "Architecture"],
      mustSee: [
        { name: { fr: "Mémorial du Génocide de Kigali", en: "Kigali Genocide Memorial" }, wikipedia: "Kigali_Genocide_Memorial" },
        { name: { fr: "Quartier Kimironko — marché des artisans", en: "Kimironko district — craft market" }, wikipedia: "File:Paintings Images.jpg" },
        { name: "Inema Arts Center", wikipedia: "File:Inema Art Center.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Forêt de Nyungwe", en: "Nyungwe Forest" },
      region: { fr: "Rwanda Sud-Ouest", en: "South-West Rwanda" },
      description: {
        fr: "Nyungwe est l'une des forêts tropicales les mieux conservées d'Afrique : 1 000 km² de forêt de montagne abritant des chimpanzés, des colobes angolais (500+), des centaines d'espèces d'oiseaux et une canopée accessible par une passerelle suspendue à 50 m.",
        en: "Nyungwe is one of the best-preserved rainforests in Africa: 1,000 km² of montane forest home to chimpanzees, Angolan colobus monkeys (500+), hundreds of bird species and a canopy accessible via a suspended walkway 50m up.",
      },
      wikipedia: "File:NYUNGWE.jpg",
      tags: ["Forêt", "Chimpanzés", "Oiseaux", "Canopée", "Randonnée", "Nature", "Safari"],
      mustSee: [
        { name: { fr: "Trek chimpanzés de Nyungwe", en: "Nyungwe chimpanzee trek" }, wikipedia: "Chimpanzee" },
        { name: { fr: "Canopy Walk — passerelle à 50 m", en: "Canopy Walk — 50m suspended walkway" }, wikipedia: "File:Nyungwe canopy walk.jpg" },
        { name: { fr: "Colobes angolais (plus grand groupe d'Afrique)", en: "Angolan colobus monkeys (Africa's largest group)" }, wikipedia: "File:Colobus angolensis.jpg" },
        { name: { fr: "Chutes de Kamiranzovu", en: "Kamiranzovu Waterfall" }, wikipedia: "File:Kamiranzovu Waterfall.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Lac Kivu", en: "Lake Kivu" },
      region: { fr: "Rwanda Ouest", en: "Western Rwanda" },
      description: {
        fr: "Le lac Kivu, partagé avec la RDC, est l'un des plus beaux lacs d'Afrique : eaux bleues entre collines verdoyantes, îles tropicales à explorer en kayak, plages de Gisenyi et Kibuye, et culture de café de spécialité sur les rives.",
        en: "Lake Kivu, shared with the DRC, is one of the most beautiful lakes in Africa: blue waters between green hills, tropical islands to explore by kayak, the beaches of Gisenyi and Kibuye, and specialty coffee growing along its shores.",
      },
      wikipedia: "File:Along Lake Kivu.jpg",
      tags: ["Lac", "Détente", "Kayak", "Paysages"],
      mustSee: [
        { name: { fr: "Gisenyi — bord du lac, plages", en: "Gisenyi — lakeside, beaches" }, wikipedia: "File:Beach in Gisenyi (Rwanda).JPG" },
        { name: { fr: "Îles Amahoro & Nkombo (kayak)", en: "Amahoro & Nkombo islands (kayaking)" }, wikipedia: "File:Amahoro_Island_in_Kivu.jpg" },
        { name: { fr: "Kibuye — ville coloniale & collines", en: "Kibuye — colonial town & hills" }, wikipedia: "File:Kibuye view , Rwanda.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Rwanda est cher pour l'Afrique, notamment à cause du permis gorilles (1 500$ l'unité). Kigali est une ville moderne avec des prix intermédiaires. Hors permis et gorilles, le pays reste abordable.",
      en: "Rwanda is expensive for Africa, mainly due to the gorilla permit ($1,500 each). Kigali is a modern city with mid-range prices. Outside of the gorilla permit, the country remains affordable.",
    },
    currency: "RWF",
    exchangeRate: "1€ ≈ 1 300 RWF",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse / hôtel local", en: "Guesthouse / local hotel" }, price: "20–50 €", detail: { fr: "Kigali hors luxe", en: "Kigali, non-luxury" } },
          { label: { fr: "Lodge mid-range Volcans", en: "Mid-range lodge, Volcanoes" }, price: "150–300 €", detail: { fr: "Pension complète", en: "Full board" } },
          { label: { fr: "Lodge luxe (gorilla lodge)", en: "Luxury lodge (gorilla lodge)" }, price: "500–1 500 €", detail: { fr: "All-inclusive premium", en: "Premium all-inclusive" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Brochettes de viande (inshis)", en: "Meat skewers (inshis)" }, price: "3–6 €", detail: { fr: "Street food local", en: "Local street food" } },
          { label: { fr: "Restaurant Kigali", en: "Kigali restaurant" }, price: "10–20 €", detail: { fr: "Cuisine rwandaise moderne", en: "Modern Rwandan cuisine" } },
          { label: { fr: "Gastronomie lodge", en: "Lodge dining" }, price: "40–60 €", detail: { fr: "Inclus souvent dans le forfait", en: "Often included in the package" } },
        ],
      },
      {
        id: "transport",
        icon: "🚐",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Moto-taxi (Kigali)", en: "Motorbike taxi (Kigali)" }, price: "1–3 €", detail: { fr: "Rapide et incontournable", en: "Fast and essential" } },
          { label: { fr: "Minibus Kigali–Ruhengeri", en: "Minibus Kigali–Ruhengeri" }, price: "3–5 €", detail: { fr: "Vers le parc des Volcans", en: "To Volcanoes National Park" } },
          { label: { fr: "Transfert hôtel avec chauffeur", en: "Hotel transfer with driver" }, price: "30–60 €", detail: { fr: "Pratique et sûr", en: "Convenient and safe" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Permis gorilles de montagne", en: "Mountain gorilla permit" }, price: "1 500 $", detail: { fr: "1h avec une famille, quotas limités", en: "1h with a family group, limited quotas" } },
          { label: { fr: "Trek chimpanzés Nyungwe", en: "Nyungwe chimpanzee trek" }, price: "100–150 €", detail: { fr: "Demi-journée guidée", en: "Half-day guided" } },
          { label: { fr: "Canopy Walk Nyungwe", en: "Nyungwe Canopy Walk" }, price: "30–50 €", detail: { fr: "Passerelle suspendue", en: "Suspended walkway" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "60–100 €/j", desc: { fr: "Hors permis gorilles : guesthouse + cuisine locale", en: "Excluding gorilla permit: guesthouse + local food" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "200–350 €/j", desc: { fr: "Lodge mid-range + permis gorilles amorti", en: "Mid-range lodge + gorilla permit amortised" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "600 €+/j", desc: { fr: "Gorilla lodge all-inclusive + expériences privées", en: "All-inclusive gorilla lodge + private experiences" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days" },
      route: {
        fr: "Kigali (2j) → Parc des Volcans — gorilles (2j) → Nyungwe (2j) → Lac Kivu (2j)",
        en: "Kigali (2d) → Volcanoes National Park — gorillas (2d) → Nyungwe (2d) → Lake Kivu (2d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "3 000 – 4 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Kigali", en: "Return flight Paris–Kigali" }, amount: "600–900 €" },
            { label: { fr: "Permis gorilles (1 unité)", en: "Gorilla permit (1 unit)" }, amount: "1 350 € (1 500$)" },
            { label: { fr: "Hébergement (8 nuits)", en: "Accommodation (8 nights)" }, amount: "250–450 €" },
            { label: { fr: "Nourriture & transports", en: "Food & transport" }, amount: "250–400 €" },
            { label: { fr: "Activités Nyungwe & Kivu", en: "Nyungwe & Kivu activities" }, amount: "200–300 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "6 000 – 8 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Kigali", en: "Return flight Paris–Kigali" }, amount: "700–1 000 €" },
            { label: { fr: "Permis gorilles (2 unités)", en: "Gorilla permits (2 units)" }, amount: "2 700 € (3 000$)" },
            { label: { fr: "Lodges mid-range (8 nuits)", en: "Mid-range lodges (8 nights)" }, amount: "1 000–1 800 €" },
            { label: { fr: "Nourriture & excursions", en: "Food & excursions" }, amount: "600–1 000 €" },
            { label: { fr: "Transports & extras", en: "Transport & extras" }, amount: "300–500 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "14 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Kigali (Business)", en: "Return flight Paris–Kigali (Business)" }, amount: "3 000–5 000 €" },
            { label: { fr: "Permis gorilles (2–3 unités)", en: "Gorilla permits (2–3 units)" }, amount: "2 700–4 050 €" },
            { label: { fr: "Gorilla lodge 5★ (8 nuits)", en: "5★ gorilla lodge (8 nights)" }, amount: "4 000–8 000 €" },
            { label: { fr: "Expériences & gastronomie", en: "Experiences & fine dining" }, amount: "800–1 500 €" },
            { label: { fr: "Extras", en: "Extras" }, amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~8h (RwandAir direct ou Kenya Airways, Brussels Airlines)", en: "~8h (RwandAir direct or Kenya Airways, Brussels Airlines)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Visa gratuit à l'arrivée ou e-Visa gratuit en ligne (irembo.gov.rw)", en: "Free visa on arrival or free online e-Visa (irembo.gov.rw)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Franc rwandais (1€ ≈ 1 300 RWF) — dollars & euros acceptés", en: "Rwandan franc (1€ ≈ 1,300 RWF) — dollars & euros accepted" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Kinyarwanda + Anglais (officiel) + Français", en: "Kinyarwanda + English (official) + French" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/J – 230 V", en: "Type C/J — 230V" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Bonne couverture nationale (MTN, Airtel)", en: "Good national coverage (MTN, Airtel)" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille", en: "Not drinkable — bottled water" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéen recommandé, fièvre jaune si pays à risque transité", en: "Antimalarial recommended, yellow fever if transiting a risk country" } },
  ],
};
