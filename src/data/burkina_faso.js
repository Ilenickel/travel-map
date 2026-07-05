export const BURKINA_FASO = {
  code: "BFA",
  numericId: 854,
  name: { fr: "Burkina Faso", en: "Burkina Faso" },
  emoji: "🇧🇫",
  capital: { fr: "Ouagadougou", en: "Ouagadougou" },
  language: { fr: "Français, Mooré, Dioula, Fulfuldé", en: "French, Mooré, Dioula, Fulfulde" },
  currency: { fr: "Franc CFA (XOF)", en: "CFA franc (XOF)" },
  timezone: "UTC+0",
  filter: {
    budgetMin: 35, budgetMid: 80,
    tripMin: 1300, tripMid: 2500,
  },
  description: {
    fr: "Le Burkina Faso est un pays enclavé du Sahel longtemps réputé pour son hospitalité légendaire, le FESPACO (plus grand festival de cinéma africain), les masques sacrés Mossi, la falaise de Banfora avec ses cascades et hippotragues, et les sites de la Comoé. Attention : la situation sécuritaire au nord et à l'est est très dégradée depuis 2019 — vérifier les avis aux voyageurs AVANT tout départ.",
    en: "Burkina Faso is a landlocked Sahelian country long known for its legendary hospitality, FESPACO (Africa's biggest film festival), sacred Mossi masks, the Banfora escarpment with its waterfalls and roan antelopes, and the sites of the Comoé region. Warning: the security situation in the north and east has seriously deteriorated since 2019 — check official travel advisories BEFORE any departure.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Février", en: "November – February" },
      label: { fr: "Saison sèche et fraîche", en: "Cool dry season" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : harmattan frais (20–30°C), ciel dégagé, routes praticables. Période idéale pour visiter Ouaga et le sud-ouest.",
        en: "Best time to go: cool harmattan winds (20–30°C), clear skies and passable roads. Ideal season for visiting Ouaga and the southwest.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Mars – Mai", en: "March – May" },
      label: { fr: "Saison chaude et sèche", en: "Hot dry season" },
      color: "#f59e0b",
      description: {
        fr: "Températures élevées (35–42°C), harmattan poussiéreux. Pénible mais sec. Moins favorable.",
        en: "Very high temperatures (35–42°C) and dusty harmattan winds. Tough but dry. Less favourable overall.",
      },
      icon: "🌡️",
    },
    {
      months: { fr: "Juin – Septembre", en: "June – September" },
      label: { fr: "Saison des pluies", en: "Rainy season" },
      color: "#ef4444",
      description: {
        fr: "Pluies (80–150mm/mois), routes de brousse difficiles. Nord et sahel très chauds même avec pluie.",
        en: "Rainfall increases sharply (80–150mm/month) and bush roads become difficult. The north and Sahel remain very hot even with rain.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "ouagadougou",
      name: "Ouagadougou",
      region: { fr: "Plateau Central", en: "Central Plateau" },
      data: [
        { month: "Jan", temp: 26, rain: 0,   icon: "☀️" },
        { month: "Fév", temp: 29, rain: 5,   icon: "⛅" },
        { month: "Mar", temp: 33, rain: 10,  icon: "🌡️" },
        { month: "Avr", temp: 35, rain: 20,  icon: "🌡️" },
        { month: "Mai", temp: 34, rain: 60,  icon: "🌡️" },
        { month: "Jun", temp: 31, rain: 100, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 140, icon: "🌧️" },
        { month: "Aoû", temp: 27, rain: 180, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 120, icon: "🌧️" },
        { month: "Oct", temp: 29, rain: 40,  icon: "⛅" },
        { month: "Nov", temp: 28, rain: 5,   icon: "⛅" },
        { month: "Déc", temp: 25, rain: 0,   icon: "☀️" },
      ],
    },
    {
      id: "banfora",
      name: "Banfora",
      region: { fr: "Cascades (sud-ouest)", en: "Cascades (southwest)" },
      data: [
        { month: "Jan", temp: 26, rain: 0,   icon: "☀️" },
        { month: "Fév", temp: 28, rain: 5,   icon: "⛅" },
        { month: "Mar", temp: 32, rain: 10,  icon: "🌡️" },
        { month: "Avr", temp: 33, rain: 30,  icon: "🌡️" },
        { month: "Mai", temp: 31, rain: 90,  icon: "⛅" },
        { month: "Jun", temp: 28, rain: 140, icon: "🌧️" },
        { month: "Jul", temp: 26, rain: 200, icon: "🌧️" },
        { month: "Aoû", temp: 25, rain: 250, icon: "🌧️" },
        { month: "Sep", temp: 26, rain: 210, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 80,  icon: "⛅" },
        { month: "Nov", temp: 27, rain: 10,  icon: "⛅" },
        { month: "Déc", temp: 25, rain: 0,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Ouagadougou — Culture et FESPACO", en: "Ouagadougou — Culture & FESPACO" },
      region: { fr: "Plateau Central", en: "Central Plateau" },
      description: {
        fr: "Ouagadougou ('Ouaga') est la capitale culturelle d'Afrique de l'Ouest : le FESPACO (Festival Panafricain du Cinéma, années impaires en février) est le plus grand festival de cinéma africain au monde. Le Grand Marché, le Musée National et les centres culturels (Institut Français, Espace Camille Guichard) vibrent. La scène musicale (djembe, balafon) est exceptionnelle.",
        en: "Ouagadougou ('Ouaga') is West Africa's cultural capital: FESPACO (the Panafrican Film Festival, held in February of odd-numbered years) is the largest African film festival in the world. The Grand Marché, the National Museum and cultural hubs such as the Institut Français and Espace Camille Guichard are full of life. The music scene, from djembe to balafon, is exceptional.",
      },
      wikipedia: "Ouagadougou",
      tags: ["Culture", "FESPACO", "Cinéma", "Musique"],
      mustSee: [
        { name: { fr: "FESPACO — Festival Panafricain du Cinéma (années impaires, février)", en: "FESPACO — Panafrican Film Festival (odd-numbered years, February)" }, wikipedia: "File:Siege FESPACO Ouaga.jpg" },
        { name: { fr: "Musée National du Burkina Faso — masques et bronzes Mossi", en: "National Museum of Burkina Faso — Mossi masks and bronzes" }, wikipedia: "File:Théâtre de plein air au musée national du Burkina Faso.jpg" },
        { name: { fr: "Grand Marché de Ouagadougou — tissus et artisanat", en: "Grand Market of Ouagadougou — fabrics and handicrafts" }, wikipedia: "File:Ouagadougou street in 2004 2.jpg" },
        { name: { fr: "Village artisanal de Ouagadougou", en: "Ouagadougou craft village" }, wikipedia: "File:July 2004 Ouagadougou streets 12.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Banfora & Cascades de Karfiguéla", en: "Banfora & Karfiguéla Waterfalls" },
      region: { fr: "Cascades", en: "Cascades" },
      description: {
        fr: "La région de Banfora est le paradis naturel du Burkina Faso : les cascades de Karfiguéla (chutes de 10m dans un écrin de verdure), le lac de Tengrela avec ses hippopotames, les pics de Sindou (formations rocheuses spectaculaires), et les dômes de Fabédougou. La région est accessible et relativement sûre.",
        en: "The Banfora area is Burkina Faso's natural paradise: the Karfiguéla waterfalls (10-metre cascades set in lush greenery), Lake Tengrela with its hippos, the Sindou Peaks with their spectacular rock formations, and the Fabédougou domes. The region is accessible and relatively safe.",
      },
      wikipedia: "Banfora",
      tags: ["Cascades", "Hippos", "Roches", "Nature"],
      mustSee: [
        { name: { fr: "Cascades de Karfiguéla — chutes spectaculaires dans la brousse", en: "Karfiguéla Waterfalls — spectacular falls in the bush" }, wikipedia: "File:Cascades_de_Banfora_Burkina_Faso.JPG" },
        { name: { fr: "Lac de Tengrela — hippopotames (observation en pirogue)", en: "Lake Tengrela — hippos (seen by pirogue)" }, wikipedia: "File:Lac de Tengrela vu sud.jpg" },
        { name: { fr: "Pics de Sindou — formations rocheuses spectaculaires", en: "Sindou Peaks — spectacular rock formations" }, wikipedia: "File:PicsdeSindou.jpg" },
        { name: { fr: "Dômes de Fabédougou — rochers rouges en pleine campagne", en: "Fabédougou Domes — red rock formations in the countryside" }, wikipedia: "File:Domes de Fabedougou.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Laongo — Symphonie des Roches", en: "Laongo — Symphony of the Rocks" },
      region: { fr: "Plateau Central", en: "Central Plateau" },
      description: {
        fr: "À 30km d'Ouagadougou, le Symposium International de Sculpture sur Granit de Laongo réunit depuis 1989 des sculpteurs du monde entier qui travaillent directement dans les immenses rochers de granite. Une galerie à ciel ouvert unique en Afrique, où l'art contemporain africain et international se fond dans le paysage sahélien.",
        en: "Thirty kilometres from Ouagadougou, the Laongo International Granite Sculpture Symposium has brought together sculptors from around the world since 1989, carving directly into huge granite boulders. It is a unique open-air gallery in Africa, where African and international contemporary art blends into the Sahelian landscape.",
      },
      wikipedia: "File:Symposium accueil.JPG",
      tags: ["Art", "Sculpture", "Rochers", "Unique"],
      mustSee: [
        { name: { fr: "Sculptures sur granite de Laongo (symposium international)", en: "Laongo granite sculptures (international symposium)" }, wikipedia: "File:TR Sculture sur granite de Laongo 03.jpg" },
        { name: { fr: "Paysage de rochers de granite rose à perte de vue", en: "Endless landscape of pink granite boulders" }, wikipedia: "File:GRANITE PETROGLYPHE DE LAONGO.jpg" },
        { name: { fr: "Village de Laongo et artisans locaux", en: "Laongo village and local craftspeople" }, wikipedia: "File:Sortie photo sur le site de granite de Loango 02.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Burkina Faso est l'un des pays les plus abordables d'Afrique de l'Ouest. La situation sécuritaire a fortement réduit le tourisme ces dernières années, rendant les services moins disponibles. Le franc CFA arrimé à l'euro facilite la gestion du budget.",
      en: "Burkina Faso is one of the most affordable countries in West Africa. The security situation has sharply reduced tourism in recent years, making services less widely available. The CFA franc's peg to the euro makes budgeting easier.",
    },
    currency: "XOF",
    exchangeRate: "1€ = 655 XOF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse / chambre simple", en: "Guesthouse / basic room" }, price: "15–30 €", detail: { fr: "Ventilateur ou clim basique", en: "Fan or basic air conditioning" } },
          { label: { fr: "Hôtel 3★ Ouagadougou", en: "3★ hotel in Ouagadougou" }, price: "50–90 €", detail: { fr: "Clim, sécurité, wifi", en: "A/C, security, Wi-Fi" } },
          { label: { fr: "Hôtel de luxe (Laico, Azalaï)", en: "Luxury hotel (Laico, Azalaï)" }, price: "120–200 €", detail: { fr: "Standard international", en: "International standard" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Tô / riz sauce dans un buvette locale", en: "Tô / rice with sauce in a local eatery" }, price: "1–3 €", detail: { fr: "Cuisine burkinabé typique", en: "Typical Burkinabé cooking" } },
          { label: { fr: "Restaurant mid-range Ouaga", en: "Mid-range restaurant in Ouaga" }, price: "7–15 €", detail: { fr: "Grillades, brochettes, menu", en: "Grilled dishes, skewers, set menus" } },
          { label: { fr: "Restaurant gastronomique Ouaga", en: "Fine-dining restaurant in Ouaga" }, price: "20–40 €", detail: { fr: "Cuisine française et internationale", en: "French and international cuisine" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Sotrama (minibus collectif) — trajet urbain", en: "Sotrama shared minibus — urban ride" }, price: "0,15–0,50 €", detail: { fr: "Transport populaire", en: "Common local transport" } },
          { label: { fr: "Taxi clim ou moto-taxi", en: "Air-conditioned taxi or moto-taxi" }, price: "1–5 €", detail: { fr: "Selon distance", en: "Depending on distance" } },
          { label: { fr: "Bus STAF (Ouaga–Banfora, 4h)", en: "STAF bus (Ouaga–Banfora, 4h)" }, price: "5–10 €", detail: { fr: "Confortable, climatisé", en: "Comfortable, air-conditioned" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Visite guidée cascades de Karfiguéla + lac Tengrela", en: "Guided tour of Karfiguéla Waterfalls + Lake Tengrela" }, price: "20–40 €", detail: { fr: "Journée depuis Banfora", en: "Day trip from Banfora" } },
          { label: { fr: "Pirogue lac Tengrela — hippopotames", en: "Lake Tengrela pirogue trip — hippos" }, price: "5–10 €", detail: { fr: "30–45 min", en: "30–45 min" } },
          { label: { fr: "Sculptures de Laongo (entrée + guide)", en: "Laongo sculptures (entry + guide)" }, price: "5–15 €", detail: { fr: "30km d'Ouaga", en: "30 km from Ouaga" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "35–60 €/j", desc: { fr: "Guesthouse + cuisine locale + transport commun", en: "Guesthouse + local food + shared transport" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "80–130 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions guidées", en: "3★ hotel + restaurants + guided excursions" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "200 €+/j", desc: { fr: "Grand hôtel Ouaga + circuit privatisé", en: "Top hotel in Ouaga + private tour" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Ouagadougou (4j) → Laongo (1j) → Bobo-Dioulasso (2j) → Banfora / Cascades (3j)",
        en: "Ouagadougou (4d) → Laongo (1d) → Bobo-Dioulasso (2d) → Banfora / Cascades (3d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 300 – 1 900 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Ouagadougou", en: "Return flight Paris–Ouagadougou" }, amount: "500–700 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "200–350 €" },
            { label: { fr: "Transports locaux", en: "Local transport" }, amount: "100–200 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "150–250 €" },
            { label: { fr: "Activités & guides", en: "Activities & guides" }, amount: "100–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 500 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Ouagadougou", en: "Return flight Paris–Ouagadougou" }, amount: "550–750 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "600–1 000 €" },
            { label: { fr: "Location voiture / chauffeur", en: "Car hire / driver" }, amount: "400–600 €" },
            { label: { fr: "Nourriture & sorties", en: "Food & outings" }, amount: "350–550 €" },
            { label: { fr: "Activités & excursions", en: "Activities & excursions" }, amount: "250–400 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~6h (Air France, Ethiopian Airlines, Brussels Airlines via escale)", en: "~6h (Air France, Ethiopian Airlines, Brussels Airlines with a stopover)" } },
    { icon: "⚠️", label: { fr: "Sécurité", en: "Safety" }, value: { fr: "AVERTISSEMENT : vaste zones d'insécurité au nord, est et sahel. Consulter AVANT le départ les avis MEAE / Diplomatie.gouv.fr.", en: "WARNING: large areas in the north, east and Sahel are unsafe. Check MEAE / Diplomatie.gouv.fr travel advisories BEFORE departure." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Visa obligatoire — à obtenir à l'ambassade ou à l'arrivée. Vérifier les procédures actuelles.", en: "Visa required — obtainable from the embassy or on arrival. Check the current procedures." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Franc CFA (XOF). 1€ = 655 XOF taux fixe. Espèces indispensables hors Ouaga.", en: "CFA franc (XOF). 1€ = 655 XOF at a fixed rate. Cash is essential outside Ouaga." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Français (officiel) — communication facile pour francophones.", en: "French (official) — easy communication for French speakers." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/E (européen) — 220V.", en: "Type C/E (European) — 220V." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Vaccin fièvre jaune obligatoire. Antipaludéen indispensable. Méningite recommandé.", en: "Yellow fever vaccination required. Anti-malarial medication is essential. Meningitis vaccination recommended." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille indispensable.", en: "Not safe to drink — bottled water is essential." } },
  ],
};
