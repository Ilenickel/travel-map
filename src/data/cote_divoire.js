export const COTE_DIVOIRE = {
  code: "CIV",
  numericId: 384,
  name: { fr: "Côte d'Ivoire", en: "Ivory Coast" },
  emoji: "🇨🇮",
  capital: { fr: "Yamoussoukro", en: "Yamoussoukro" },
  language: { fr: "Français, Dioula, Baoulé, Bété", en: "French, Dyula, Baoulé, Bété" },
  currency: { fr: "Franc CFA (XOF)", en: "CFA franc (XOF)" },
  timezone: "UTC+0",
  filter: {
    budgetMin: 50, budgetMid: 100,
    tripMin: 1500, tripMid: 3000,
  },
  description: {
    fr: "La Côte d'Ivoire est la première économie d'Afrique de l'Ouest : Abidjan sa métropole ultramoderne surnommée 'Paris de l'Afrique', la basilique Notre-Dame de la Paix de Yamoussoukro (la plus grande église du monde), les forêts primaires du Parc de Taï (UNESCO) avec chimpanzés, et les villages Senoufo du nord aux masques sacrés Poro.",
    en: "Ivory Coast is West Africa's leading economy: Abidjan, its ultramodern metropolis nicknamed the 'Paris of Africa'; Yamoussoukro's Basilica of Our Lady of Peace, the largest church in the world; the primary forests of Taï National Park (UNESCO) with chimpanzees; and the Senoufo villages of the north with their sacred Poro masks.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Mars", en: "November – March" },
      label: { fr: "Saison sèche", en: "Dry season" },
      color: "#22c55e",
      description: {
        fr: "Idéal pour voyager. Harmattan doux, peu de pluie. Nord du pays sec et accessible. Meilleure période pour les parcs.",
        en: "Ideal for travelling. Mild harmattan winds, little rain. The north of the country is dry and easy to access. Best season for the national parks.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Septembre", en: "June – September" },
      label: { fr: "Grande saison des pluies", en: "Main rainy season" },
      color: "#ef4444",
      description: {
        fr: "Pluies abondantes au sud (150–250mm/mois), routes difficiles en brousse, parcs peu accessibles.",
        en: "Heavy rainfall in the south (150–250 mm/month), difficult bush roads, and limited access to the parks.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "abidjan",
      name: "Abidjan",
      region: { fr: "Lagunes (sud)", en: "Lagunes (south)" },
      data: [
        { month: "Jan", temp: 27, rain: 20,  icon: "⛅" },
        { month: "Fév", temp: 28, rain: 60,  icon: "⛅" },
        { month: "Mar", temp: 29, rain: 100, icon: "⛅" },
        { month: "Avr", temp: 29, rain: 130, icon: "🌧️" },
        { month: "Mai", temp: 28, rain: 300, icon: "🌧️" },
        { month: "Jun", temp: 26, rain: 560, icon: "🌧️" },
        { month: "Jul", temp: 25, rain: 200, icon: "🌧️" },
        { month: "Aoû", temp: 25, rain: 60,  icon: "⛅" },
        { month: "Sep", temp: 26, rain: 100, icon: "⛅" },
        { month: "Oct", temp: 27, rain: 170, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 70,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 30,  icon: "⛅" },
      ],
    },
    {
      id: "korhogo",
      name: "Korhogo",
      region: { fr: "Savanes (nord)", en: "Savanes (north)" },
      data: [
        { month: "Jan", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Fév", temp: 31, rain: 5,   icon: "⛅" },
        { month: "Mar", temp: 33, rain: 20,  icon: "🌡️" },
        { month: "Avr", temp: 33, rain: 60,  icon: "🌡️" },
        { month: "Mai", temp: 31, rain: 100, icon: "⛅" },
        { month: "Jun", temp: 28, rain: 150, icon: "🌧️" },
        { month: "Jul", temp: 27, rain: 160, icon: "🌧️" },
        { month: "Aoû", temp: 26, rain: 200, icon: "🌧️" },
        { month: "Sep", temp: 27, rain: 190, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 80,  icon: "⛅" },
        { month: "Nov", temp: 29, rain: 10,  icon: "⛅" },
        { month: "Déc", temp: 28, rain: 0,   icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Abidjan — Métropole africaine", en: "Abidjan — African metropolis" },
      region: { fr: "Lagunes", en: "Lagunes" },
      description: {
        fr: "Abidjan est la capitale économique de l'Afrique de l'Ouest francophone : le quartier du Plateau avec ses gratte-ciels sur la lagune Ébrié, Cocody et ses ambassades, Treichville et son marché nocturne animé, et la Cité d'Ivoire (luxe). Une ville de contrastes fascinante, avec une scène musicale (coupé-décalé) et gastronomique remarquable.",
        en: "Abidjan is the economic capital of French-speaking West Africa: the Plateau district with its skyscrapers overlooking the Ébrié Lagoon, Cocody with its embassies, Treichville and its lively night market, and upmarket Cité d'Ivoire. It is a city of fascinating contrasts, with a remarkable music scene shaped by coupé-décalé and an outstanding food culture.",
      },
      wikipedia: "Abidjan",
      tags: ["Ville", "Métropole", "Gastronomie", "Musique"],
      mustSee: [
        { name: { fr: "Cathédrale Saint-Paul du Plateau — architecture audacieuse de Aldo Spirito", en: "Saint Paul's Cathedral in Plateau — Aldo Spirito's bold architecture" }, wikipedia: "File:La cathédrale Saint-Paul Abidjan 03.jpg" },
        { name: { fr: "Marché de Treichville — artisanat et ambiance nocturne", en: "Treichville Market — crafts and nightlife atmosphere" }, wikipedia: "Treichville" },
        { name: { fr: "Musée des Civilisations de Côte d'Ivoire", en: "Museum of Civilisations of Ivory Coast" }, wikipedia: "Abidjan" },
        { name: { fr: "Lagune Ébrié — tour en pirogue", en: "Ébrié Lagoon — dugout canoe ride" }, wikipedia: "File:La lagune Ebrié - Abidjan.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Yamoussoukro — La Basilique", en: "Yamoussoukro — The Basilica" },
      region: { fr: "Bélier", en: "Bélier" },
      description: {
        fr: "Yamoussoukro, capitale officielle, abrite Notre-Dame de la Paix — la plus grande basilique chrétienne du monde (158m de haut, 7 000 places), financée par Félix Houphouët-Boigny et consacrée par Jean-Paul II en 1990. Le contraste avec les villages environnants est saisissant. Également : les caïmans sacrés du palais présidentiel.",
        en: "Yamoussoukro, the official capital, is home to the Basilica of Our Lady of Peace — the world's largest Christian basilica (158 m high, seating 7,000), financed by Félix Houphouët-Boigny and consecrated by John Paul II in 1990. The contrast with the surrounding villages is striking. Also not to be missed are the sacred caimans of the presidential palace.",
      },
      wikipedia: "Basilica_of_Our_Lady_of_Peace",
      tags: ["Architecture", "Religion", "Unique", "Ville"],
      mustSee: [
        { name: { fr: "Basilique Notre-Dame de la Paix — la plus grande du monde (UNESCO)", en: "Basilica of Our Lady of Peace — the largest in the world (UNESCO)" }, wikipedia: "Basilica_of_Our_Lady_of_Peace" },
        { name: { fr: "Caïmans sacrés du lac du palais présidentiel", en: "Sacred caimans in the presidential palace lake" }, wikipedia: "File:Crocodile de Yamoussoukro.jpg" },
        { name: { fr: "Fondation Houphouët-Boigny pour la Paix", en: "Houphouët-Boigny Foundation for Peace" }, wikipedia: "File:Fondation_Félix_Houphouët-Boigny.jpg" },
        { name: { fr: "Mairie de Yamoussoukro et artère centrale démesurée", en: "Yamoussoukro City Hall and its oversized central avenue" }, wikipedia: "File:Cihotelvilleyakro.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Parc de Taï — Forêt primaire et chimpanzés", en: "Taï National Park — Primary rainforest and chimpanzees" },
      region: { fr: "Bas-Sassandra", en: "Bas-Sassandra" },
      description: {
        fr: "Le Parc national de Taï (UNESCO) est l'une des dernières grandes forêts primaires d'Afrique de l'Ouest : 3 300 km² de forêt dense avec des chimpanzés (étudiés depuis 50 ans), des léopards, des hippopotames pygmées (espèce en danger critique) et une biodiversité exceptionnelle. Un voyage au cœur de l'Afrique profonde.",
        en: "Taï National Park (UNESCO) is one of the last great primary rainforests in West Africa: 3,300 km² of dense forest home to chimpanzees studied for the past 50 years, leopards, pygmy hippos — a critically endangered species — and exceptional biodiversity. A journey into the heart of deep Africa.",
      },
      wikipedia: "Taï_National_Park",
      tags: ["Forêt", "UNESCO", "Chimpanzés", "Nature"],
      mustSee: [
        { name: { fr: "Observation chimpanzés de Bossou (habituées aux humains)", en: "Bossou chimpanzee viewing (habituated to humans)" }, wikipedia: "File:Schimpansen im Nationalpark Tai.jpg" },
        { name: { fr: "Hippopotame pygmée (espèce en danger critique)", en: "Pygmy hippo (critically endangered species)" }, wikipedia: "Pygmy_hippopotamus" },
        { name: { fr: "Randonnée en forêt primaire avec guide", en: "Guided hike in the primary rainforest" }, wikipedia: "Taï_National_Park" },
        { name: { fr: "Village de Taï et culture Dan", en: "Taï village and Dan culture" }, wikipedia: "File:Parc national de Taï.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Grand-Bassam — Ville coloniale", en: "Grand-Bassam — Colonial town" },
      region: { fr: "Sud-Comoé", en: "Sud-Comoé" },
      description: {
        fr: "Grand-Bassam, ancienne capitale coloniale française (UNESCO), est à 40km d'Abidjan : ses demeures coloniales en ruines le long de la lagune, ses plages de sable blanc et la quartier France avec ses maisons des comptoirs commerciaux du XIXe siècle. Station balnéaire et patrimoine mêlés.",
        en: "Grand-Bassam, the former French colonial capital (UNESCO), lies 40 km from Abidjan: ruined colonial mansions along the lagoon, white-sand beaches, and the France district with its 19th-century trading post houses. A blend of seaside resort charm and heritage.",
      },
      wikipedia: "Grand-Bassam",
      tags: ["Coloniale", "UNESCO", "Plage", "Histoire"],
      mustSee: [
        { name: { fr: "Quartier France — maisons coloniales classées UNESCO", en: "France district — UNESCO-listed colonial houses" }, wikipedia: "File:Mairie de Grand-Bassam façade avant.jpg" },
        { name: { fr: "Musée National du Costume", en: "National Costume Museum" }, wikipedia: "File:Mairie de Grand-Bassam portail.jpg" },
        { name: { fr: "Plage de Grand-Bassam — détente et fruits de mer", en: "Grand-Bassam Beach — relaxation and seafood" }, wikipedia: "File:Grand Bassam ap 003.jpg" },
        { name: { fr: "Rue des Boutiques coloniales restaurées", en: "Street of restored colonial shops" }, wikipedia: "File:Grand-Bassam women.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Côte d'Ivoire est la plus chère des destinations d'Afrique de l'Ouest francophone. Abidjan est une ville de prix élevés pour les hébergements. La cuisine locale reste abordable. Le franc CFA arrimé à l'euro facilite la gestion du budget.",
      en: "Ivory Coast is the most expensive destination in French-speaking West Africa. Accommodation prices in Abidjan are high, but local food remains affordable. The CFA franc's peg to the euro makes budgeting easier.",
    },
    currency: "XOF",
    exchangeRate: "1€ = 655 XOF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Auberge / guesthouse", en: "Hostel / guesthouse" }, price: "25–50 €", detail: { fr: "Quartiers résidentiels", en: "Residential neighbourhoods" } },
          { label: { fr: "Hôtel 3★ Abidjan (Cocody, Plateau)", en: "3★ hotel in Abidjan (Cocody, Plateau)" }, price: "70–120 €", detail: { fr: "Clim, sécurité, petit-déj", en: "A/C, security, breakfast" } },
          { label: { fr: "Hôtel de luxe (Radisson, Sofitel)", en: "Luxury hotel (Radisson, Sofitel)" }, price: "180–350 €", detail: { fr: "Standard international", en: "International standard" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Attiéké / alloco dans un maquis populaire", en: "Attiéké / alloco in a local maquis eatery" }, price: "2–6 €", detail: { fr: "Cuisine ivoirienne typique", en: "Typical Ivorian cuisine" } },
          { label: { fr: "Restaurant mid-range Abidjan", en: "Mid-range restaurant in Abidjan" }, price: "12–25 €", detail: { fr: "Menu + boisson, bonne cuisine", en: "Meal + drink, good food" } },
          { label: { fr: "Restaurant gastronomique Zone 4", en: "Fine-dining restaurant in Zone 4" }, price: "40–80 €", detail: { fr: "Fruits de mer, cuisine fusion", en: "Seafood, fusion cuisine" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Woro-woro (taxi collectif) — trajet urbain", en: "Woro-woro (shared taxi) — urban ride" }, price: "0,30–1 €", detail: { fr: "Transport local Abidjan", en: "Local transport in Abidjan" } },
          { label: { fr: "Taxi clim Abidjan (Uber, Yango)", en: "A/C taxi in Abidjan (Uber, Yango)" }, price: "3–8 €", detail: { fr: "Selon distance", en: "Depending on distance" } },
          { label: { fr: "Bus UTB (Abidjan–Yamoussoukro, 3h)", en: "UTB bus (Abidjan–Yamoussoukro, 3h)" }, price: "5–10 €", detail: { fr: "Confortable, climatisé", en: "Comfortable, air-conditioned" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Visite Basilique Notre-Dame de la Paix", en: "Visit to the Basilica of Our Lady of Peace" }, price: "5–10 €", detail: { fr: "Visite guidée disponible", en: "Guided tour available" } },
          { label: { fr: "Safari Parc de Taï avec guide", en: "Taï National Park safari with guide" }, price: "50–100 €/j", detail: { fr: "Nuit en lodge incluse", en: "Lodge night included" } },
          { label: { fr: "Tour Grand-Bassam depuis Abidjan", en: "Grand-Bassam day tour from Abidjan" }, price: "30–50 €", detail: { fr: "Transport + guide", en: "Transport + guide" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "50–80 €/j", desc: { fr: "Guesthouse + maquis + transport local", en: "Guesthouse + maquis eateries + local transport" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "100–160 €/j", desc: { fr: "Hôtel 3★ Abidjan + restaurants + excursions", en: "3★ hotel in Abidjan + restaurants + excursions" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "300 €+/j", desc: { fr: "Grand hôtel international + safaris privés", en: "Large international hotel + private safaris" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Abidjan (3j) → Grand-Bassam (1j) → Yamoussoukro (2j) → Parc de Taï (4j)",
        en: "Abidjan (3d) → Grand-Bassam (1d) → Yamoussoukro (2d) → Taï National Park (4d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 500 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Abidjan", en: "Return flight Paris–Abidjan" }, amount: "500–700 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "350–600 €" },
            { label: { fr: "Transports locaux", en: "Local transport" }, amount: "150–250 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "200–350 €" },
            { label: { fr: "Activités & entrées", en: "Activities & admission fees" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "3 000 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Abidjan", en: "Return flight Paris–Abidjan" }, amount: "600–800 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "900–1 400 €" },
            { label: { fr: "Transports / chauffeur", en: "Transport / driver" }, amount: "350–600 €" },
            { label: { fr: "Nourriture & sorties", en: "Food & going out" }, amount: "400–700 €" },
            { label: { fr: "Activités & excursions", en: "Activities & excursions" }, amount: "350–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~6h direct (Air France, Ethiopian Airlines, Air Côte d'Ivoire)", en: "~6h direct (Air France, Ethiopian Airlines, Air Côte d'Ivoire)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Visa requis — e-Visa disponible en ligne (~30€). Valable 30 jours.", en: "Visa required — e-visa available online (~€30). Valid for 30 days." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Franc CFA (XOF). 1€ = 655 XOF taux fixe. Euros acceptés dans hôtels.", en: "CFA franc (XOF). €1 = 655 XOF at a fixed rate. Euros accepted in hotels." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Français (officiel) — communication facile pour francophones.", en: "French (official) — easy communication for French speakers." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/E (européen) — 220V. Adaptateur non nécessaire pour appareils européens.", en: "Type C/E (European) — 220V. No adapter needed for European devices." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Vaccin fièvre jaune obligatoire. Antipaludéen indispensable (Malarone/Doxycycline).", en: "Yellow fever vaccination required. Malaria prophylaxis is essential (Malarone/Doxycycline)." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille indispensable.", en: "Not drinkable — bottled water is essential." } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Bonne couverture 4G Abidjan et grandes villes. SIM locale recommandée (MTN, Orange CI).", en: "Good 4G coverage in Abidjan and major cities. A local SIM is recommended (MTN, Orange CI)." } },
  ],
};
