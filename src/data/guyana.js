export const GUYANA = {
  code: "GUY",
  numericId: 328,
  name: { fr: "Guyana", en: "Guyana" },
  emoji: "🇬🇾",
  capital: { fr: "Georgetown", en: "Georgetown" },
  language: { fr: "Anglais", en: "English" },
  currency: { fr: "Dollar du Guyana (GYD)", en: "Guyanese dollar (GYD)" },
  timezone: "UTC-4",
  filter: {
    budgetMin: 35,
    budgetMid: 70,
    tripMin: 1700,
    tripMid: 3000,
  },
  description: {
    fr: "Le Guyana est l'unique pays anglophone d'Amérique du Sud, une terre de jungle primaire quasi-intacte couvrant 80% du territoire. Chutes de Kaieteur (cinq fois Niagara), tepuys, jaguars et une biodiversité exceptionnelle en font une destination d'écotourisme de premier plan pour les aventuriers.",
    en: "Guyana is the only English-speaking country in South America, a land of almost untouched primary rainforest covering 80% of the territory. Kaieteur Falls (five times taller than Niagara), tepuis, jaguars and exceptional biodiversity make it a leading ecotourism destination for adventurers.",
  },

  bestPeriods: [
    {
      months: { fr: "Septembre – Novembre", en: "September – November" },
      label: { fr: "Saison sèche courte", en: "Short dry season" },
      color: "#fbbf24",
      description: {
        fr: "Meilleure période pour explorer l'intérieur : routes praticables et faune visible autour des points d'eau.",
        en: "Best time to explore the interior: roads are passable and wildlife is visible around water sources.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Février – Avril", en: "February – April" },
      label: { fr: "Saison sèche principale", en: "Main dry season" },
      color: "#86efac",
      description: {
        fr: "Deuxième saison sèche, idéale pour les chutes de Kaieteur et la Rupununi. Georgetown plus agréable.",
        en: "Second dry season, ideal for Kaieteur Falls and the Rupununi. Georgetown is more pleasant too.",
      },
      icon: "🌤",
    },
  ],

  weatherCities: [
    {
      id: "georgetown",
      name: "Georgetown",
      region: { fr: "Demerara-Mahaica", en: "Demerara-Mahaica" },
      data: [
        { month: "Jan", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 120, icon: "🌧️" },
        { month: "Mar", temp: 28, rain: 165, icon: "🌧️" },
        { month: "Avr", temp: 28, rain: 265, icon: "🌧️" },
        { month: "Mai", temp: 28, rain: 320, icon: "🌧️" },
        { month: "Jun", temp: 27, rain: 320, icon: "🌧️" },
        { month: "Jul", temp: 27, rain: 255, icon: "🌧️" },
        { month: "Aoû", temp: 27, rain: 165, icon: "🌧️" },
        { month: "Sep", temp: 27, rain: 80, icon: "⛅" },
        { month: "Oct", temp: 28, rain: 90, icon: "⛅" },
        { month: "Nov", temp: 28, rain: 165, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 230, icon: "🌧️" },
      ],
    },
    {
      id: "lethem",
      name: "Lethem",
      region: { fr: "Rupununi (Savanes)", en: "Rupununi (Savannas)" },
      data: [
        { month: "Jan", temp: 30, rain: 100, icon: "🌧️" },
        { month: "Fév", temp: 31, rain: 60, icon: "⛅" },
        { month: "Mar", temp: 32, rain: 70, icon: "🌡️" },
        { month: "Avr", temp: 31, rain: 110, icon: "🌧️" },
        { month: "Mai", temp: 30, rain: 195, icon: "🌧️" },
        { month: "Jun", temp: 29, rain: 260, icon: "🌧️" },
        { month: "Jul", temp: 29, rain: 230, icon: "🌧️" },
        { month: "Aoû", temp: 30, rain: 155, icon: "🌧️" },
        { month: "Sep", temp: 31, rain: 65, icon: "⛅" },
        { month: "Oct", temp: 31, rain: 55, icon: "⛅" },
        { month: "Nov", temp: 30, rain: 100, icon: "🌧️" },
        { month: "Déc", temp: 29, rain: 160, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Chutes de Kaieteur", en: "Kaieteur Falls" },
      region: { fr: "Potaro-Siparuni", en: "Potaro-Siparuni" },
      description: {
        fr: "Les chutes de Kaieteur sont l'une des plus puissantes au monde : 226 m de hauteur et 100 m de large, avec un débit impressionnant. Accessibles uniquement en avion depuis Georgetown, elles sont entourées d'une forêt primaire abritant la grenouille poison dorée unique au monde.",
        en: "Kaieteur Falls is one of the most powerful waterfalls in the world: 226 m high and 100 m wide, with an impressive flow. Accessible only by plane from Georgetown, it is surrounded by primary rainforest home to the world's unique golden poison frog.",
      },
      wikipedia: "Kaieteur_Falls",
      tags: ["Cascade", "Nature", "Unique", "Jungle"],
      mustSee: [
        { name: { fr: "Kaieteur Falls (chute principale)", en: "Kaieteur Falls (main waterfall)" }, wikipedia: "Kaieteur_Falls" },
        { name: { fr: "Parc national Kaieteur", en: "Kaieteur National Park" }, wikipedia: "File:Potato River (Kaieteur) 23 20 35 006000.jpeg" },
        { name: { fr: "Gorge de Kaieteur", en: "Kaieteur Gorge" }, wikipedia: "File:Kaieteur Falls Guyana (2) 2007.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Savanes de Rupununi", en: "Rupununi Savannas" },
      region: { fr: "Upper Takutu-Upper Essequibo", en: "Upper Takutu-Upper Essequibo" },
      description: {
        fr: "Les savanes de Rupununi sont une vaste plaine à la frontière brésilienne, mosaïque de prairies, forêts galeries et zones humides. Ici vivent les communautés indigènes Makushi et Wapishana, ainsi que jaguars, loutres géantes et arapaïmas géants.",
        en: "The Rupununi Savannas are a vast plain on the Brazilian border, a mosaic of grasslands, gallery forests and wetlands. Makushi and Wapishana Indigenous communities live here, alongside jaguars, giant otters and giant arapaimas.",
      },
      wikipedia: "File:Rupununi River.jpg",
      tags: ["Safari", "Cultures Indigènes", "Faune", "Nature"],
      mustSee: [
        { name: { fr: "Parc national Iwokrama", en: "Iwokrama National Park" }, wikipedia: "File:Iwokrama Rainforest, Guyana (12179378186).jpg" },
        { name: "Canopy Walkway Iwokrama", wikipedia: "File:Canopy walkway in Kakum National Park 7.jpg" },
        { name: { fr: "Arapaïma (pêche)", en: "Arapaima (fishing)" }, wikipedia: "Arapaima" },
      ],
    },
    {
      id: 3,
      name: "Georgetown",
      region: { fr: "Demerara-Mahaica", en: "Demerara-Mahaica" },
      description: {
        fr: "La capitale est un mélange unique de cultures créole, indienne, amérindienne et hollandaise. Ses maisons victoriennes en bois peintes de couleurs vives, son marché de Stabroek et sa cathédrale Saint-George (plus haute cathédrale en bois du monde) sont remarquables.",
        en: "The capital is a unique blend of Creole, Indian, Amerindian and Dutch cultures. Its brightly painted Victorian wooden houses, Stabroek Market and St George's Cathedral (the tallest wooden cathedral in the world) are remarkable.",
      },
      wikipedia: "Georgetown,_Guyana",
      tags: ["Ville", "Colonial", "Multiculturel", "Architecture"],
      mustSee: [
        { name: { fr: "Marché de Stabroek", en: "Stabroek Market" }, wikipedia: "Stabroek_Market" },
        { name: { fr: "Cathédrale Saint-George", en: "St George's Cathedral" }, wikipedia: "File:20191121 Guyana 0048 Georgetown sRGB (49295795336).jpg" },
        { name: { fr: "Musée National du Guyana", en: "Guyana National Museum" }, wikipedia: "Guyana_National_Museum" },
        { name: { fr: "Promenade du Seawall", en: "Seawall promenade" }, wikipedia: "Georgetown,_Guyana" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Guyana est en développement et les coûts touristiques restent modérés. L'écotourisme dans l'intérieur peut être onéreux en raison des vols et lodges.",
      en: "Guyana is still developing and tourist costs remain moderate. Ecotourism in the interior can be expensive because of flights and lodges.",
    },
    currency: "Dollar du Guyana (GYD)",
    exchangeRate: "1€ ≈ 220–240 GYD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse simple Georgetown", en: "Simple guesthouse in Georgetown" }, price: "20–40 €", detail: { fr: "Basique mais fonctionnel", en: "Basic but functional" } },
          { label: { fr: "Hôtel 3★ Georgetown", en: "3★ hotel in Georgetown" }, price: "60–100 €", detail: { fr: "Bon confort, avec AC", en: "Good comfort, with AC" } },
          { label: { fr: "Ecolodge Iwokrama", en: "Iwokrama ecolodge" }, price: "100–200 €", detail: { fr: "Tout compris, immersion en jungle", en: "All-inclusive, jungle immersion" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Repas local (cook shop)", en: "Local meal (cook shop)" }, price: "3–6 €", detail: { fr: "Curry, riz, roti, typique créole-indien", en: "Curry, rice, roti, typical Creole-Indian fare" } },
          { label: { fr: "Restaurant mid-range Georgetown", en: "Mid-range restaurant in Georgetown" }, price: "10–20 €", detail: { fr: "Cuisine variée, ambiance décontractée", en: "Varied cuisine, laid-back atmosphere" } },
          { label: { fr: "Repas en ecolodge", en: "Meal at an ecolodge" }, price: "15–25 €", detail: { fr: "Inclus dans certains forfaits", en: "Included in some packages" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Vol Georgetown–Kaieteur (charter)", en: "Georgetown–Kaieteur flight (charter)" }, price: "120–180 €", detail: { fr: "Avion bi-moteur, durée 45 min A/R", en: "Twin-engine plane, 45 min return trip" } },
          { label: { fr: "Minibus Georgetown–Lethem", en: "Georgetown–Lethem minibus" }, price: "15–25 €", detail: { fr: "8–10h de piste, aventureux", en: "8–10h on rough tracks, adventurous" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités & Culture", en: "Activities & Culture" },
        items: [
          { label: { fr: "Tour Kaieteur (journée)", en: "Kaieteur tour (day trip)" }, price: "150–220 €", detail: { fr: "Vol charter + guide, depuis Georgetown", en: "Charter flight + guide, from Georgetown" } },
          { label: { fr: "Séjour Rupununi (3 jours)", en: "Rupununi stay (3 days)" }, price: "200–400 €", detail: { fr: "Lodge, safari, communautés indigènes", en: "Lodge, safari, Indigenous communities" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "35–60 €/j", desc: { fr: "Guesthouse, cook shop, minibus", en: "Guesthouse, cook shop, minibus" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "70–120 €/j", desc: { fr: "Hôtel 3★, restaurants, excursions guidées", en: "3★ hotel, restaurants, guided excursions" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "200 €+/j", desc: { fr: "Ecolodge premium, tours privés, vols charters", en: "Premium ecolodge, private tours, charter flights" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks" },
      route: { fr: "Georgetown – Kaieteur – Iwokrama – Rupununi", en: "Georgetown – Kaieteur – Iwokrama – Rupununi" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 700 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Georgetown", en: "Return flight Paris–Georgetown" }, amount: "800–1 100 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "300–450 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "200–300 €" },
            { label: { fr: "Transport local + vol Kaieteur", en: "Local transport + Kaieteur flight" }, amount: "200–350 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "3 000 – 4 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Georgetown", en: "Return flight Paris–Georgetown" }, amount: "900–1 200 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "700–1 000 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "400–600 €" },
            { label: { fr: "Tours + vols intérieurs", en: "Tours + domestic flights" }, amount: "600–900 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "300–500 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "6 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Georgetown (Business)", en: "Return flight Paris–Georgetown (Business)" }, amount: "2 500–3 500 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "1 800–2 500 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "400–600 €" },
            { label: { fr: "Tours privés + vols charters", en: "Private tours + charter flights" }, amount: "800–1 200 €" },
            { label: { fr: "Activités premium", en: "Premium activities" }, amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~12–14h avec escale (Port of Spain, Miami, Amsterdam)", en: "~12–14h with a stopover (Port of Spain, Miami, Amsterdam)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Sans visa pour les Français (90 jours)", en: "No visa required for French citizens (90 days)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Dollar du Guyana (1€ ≈ 220–240 GYD)", en: "Guyanese dollar (1€ ≈ 220–240 GYD)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Anglais (langue officielle)", en: "English (official language)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type A/B/G – 120 V (adaptateur nécessaire)", en: "Type A/B/G – 120 V (adapter required)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "4G à Georgetown, quasi inexistant à l'intérieur", en: "4G in Georgetown, almost non-existent in the interior" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable, eau en bouteille indispensable", en: "Not drinkable, bottled water is essential" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Vaccin fièvre jaune obligatoire + antipaludéens pour l'intérieur", en: "Yellow fever vaccine required + antimalarial medication for the interior" } },
  ],
};
