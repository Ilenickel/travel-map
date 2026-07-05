export const GABON = {
  code: "GAB",
  numericId: 266,
  name: { fr: "Gabon", en: "Gabon" },
  emoji: "🇬🇦",
  capital: { fr: "Libreville", en: "Libreville" },
  language: { fr: "Français, Fang, Myene, Nzebi", en: "French, Fang, Myene, Nzebi" },
  currency: { fr: "Franc CFA (XAF)", en: "CFA franc (XAF)" },
  timezone: "UTC+1",
  filter: {
    budgetMin: 80, budgetMid: 180,
    tripMin: 2500, tripMid: 5000,
  },
  description: {
    fr: "Le Gabon est le sanctuaire de la forêt équatoriale d'Afrique centrale : 80% du territoire couvert par la forêt primaire, 13 parcs nationaux abritant gorilles des plaines, éléphants de forêt, hippopotames de mer sur les plages de Loango, et les mandrills (les plus grandes colonies mondiales au Parc de la Lopé). Un des pays les mieux préservés d'Afrique, peu touristique mais d'une richesse naturelle stupéfiante.",
    en: "Gabon is the sanctuary of Central Africa's equatorial rainforest: 80% of the country is covered in primary forest, and its 13 national parks shelter lowland gorillas, forest elephants, hippos on Loango's beaches, and mandrills, including the world's largest colonies in Lopé National Park. One of Africa's best-preserved countries, it remains little visited yet astonishingly rich in nature.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Septembre", en: "June – September" },
      label: { fr: "Grande saison sèche", en: "Long dry season" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : moins de pluie, forêt plus accessible, gorilles plus faciles à observer. Loango : baleines à bosse (juil–sept). Températures 22–28°C.",
        en: "Best time to go: less rain, easier access to the forest, and gorillas are easier to spot. In Loango, humpback whales are present from July to September. Temperatures range from 22 to 28°C.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Janvier", en: "December – January" },
      label: { fr: "Petite saison sèche", en: "Short dry season" },
      color: "#f59e0b",
      description: {
        fr: "Courte période sèche, acceptable pour visiter. Éléphants visibles sur la plage de Loango en décembre.",
        en: "A short dry spell that is still fine for visiting. Elephants can be seen on Loango's beach in December.",
      },
      icon: "⛅",
    },
    {
      months: { fr: "Octobre – Novembre", en: "October – November" },
      label: { fr: "Grande saison des pluies", en: "Long rainy season" },
      color: "#ef4444",
      description: {
        fr: "Fortes pluies (300–400mm/mois), forêt difficile d'accès, pistes impraticables. Moins favorable.",
        en: "Heavy rainfall (300–400 mm/month), difficult forest access, and tracks that become impassable. Less favourable.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "libreville",
      name: "Libreville",
      region: { fr: "Estuaire (côte)", en: "Estuary (coast)" },
      data: [
        { month: "Jan", temp: 27, rain: 250, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Mar", temp: 27, rain: 300, icon: "🌧️" },
        { month: "Avr", temp: 27, rain: 280, icon: "🌧️" },
        { month: "Mai", temp: 26, rain: 150, icon: "⛅" },
        { month: "Jun", temp: 24, rain: 30,  icon: "⛅" },
        { month: "Jul", temp: 23, rain: 10,  icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 15,  icon: "☀️" },
        { month: "Sep", temp: 25, rain: 50,  icon: "⛅" },
        { month: "Oct", temp: 26, rain: 300, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 380, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 270, icon: "🌧️" },
      ],
    },
    {
      id: "lope",
      name: "Lopé",
      region: { fr: "Ogooué-Ivindo (centre)", en: "Ogooué-Ivindo (central)" },
      data: [
        { month: "Jan", temp: 25, rain: 100, icon: "⛅" },
        { month: "Fév", temp: 25, rain: 120, icon: "🌧️" },
        { month: "Mar", temp: 26, rain: 200, icon: "⛅" },
        { month: "Avr", temp: 26, rain: 200, icon: "🌧️" },
        { month: "Mai", temp: 25, rain: 100, icon: "⛅" },
        { month: "Jun", temp: 23, rain: 30,  icon: "⛅" },
        { month: "Jul", temp: 22, rain: 10,  icon: "☀️" },
        { month: "Aoû", temp: 22, rain: 20,  icon: "☀️" },
        { month: "Sep", temp: 24, rain: 60,  icon: "⛅" },
        { month: "Oct", temp: 25, rain: 250, icon: "🌧️" },
        { month: "Nov", temp: 25, rain: 300, icon: "🌧️" },
        { month: "Déc", temp: 25, rain: 150, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Parc national de Loango — Éléphants sur la plage", en: "Loango National Park — Elephants on the Beach" },
      region: { fr: "Ogooué-Maritime", en: "Ogooué-Maritime" },
      description: {
        fr: "Loango est l'un des parcs les plus spectaculaires d'Afrique : des éléphants de forêt qui se baignent dans l'océan Atlantique, des hippopotames de mer qui surfent dans les vagues, des baleines à bosse (juillet–septembre), des gorilles des plaines dans la forêt derrière la plage. Un décor où la forêt primaire rencontre la mer — unique au monde.",
        en: "Loango is one of Africa's most spectacular parks: forest elephants bathing in the Atlantic Ocean, hippos in the surf, humpback whales from July to September, and lowland gorillas in the forest just behind the beach. It is a landscape where primary rainforest meets the sea — something truly unique in the world.",
      },
      wikipedia: "File:Gabon Loango National Park Elephant with offspring.jpeg",
      tags: ["Unique", "Éléphants", "Plage", "Baleines"],
      mustSee: [
        { name: { fr: "Éléphants de forêt sur la plage de Loango (déc–janv)", en: "Forest elephants on Loango beach (Dec–Jan)" }, wikipedia: "File:Gabon Loango National Park Elephant with offspring.jpeg" },
        { name: { fr: "Baleines à bosse (juillet–septembre) depuis la plage", en: "Humpback whales (July–September) seen from the beach" }, wikipedia: "File:Syncerus caffer nanus 153689273.jpg" },
        { name: { fr: "Hippopotames de mer dans les vagues", en: "Hippos in the waves" }, wikipedia: "File:Syncerus caffer nanus 153689273.jpg" },
        { name: { fr: "Gorilles des plaines dans la forêt côtière", en: "Lowland gorillas in the coastal forest" }, wikipedia: "File:Western Lowland Gorilla mother and baby.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Parc de la Lopé — Gorilles et mandrills", en: "Lopé National Park — Gorillas and Mandrills" },
      region: { fr: "Ogooué-Ivindo", en: "Ogooué-Ivindo" },
      description: {
        fr: "La Lopé (UNESCO) est l'un des rares endroits où l'on peut observer des gorilles des plaines occidentaux et des mandrills en groupes de plusieurs centaines d'individus — la plus grande colonie de mandrills au monde. La Lopé est aussi remarquable pour ses paysages : prairie d'altitude entourée de forêt primaire et de falaises rocheuses.",
        en: "Lopé (UNESCO-listed) is one of the rare places where you can see western lowland gorillas and mandrills in groups of several hundred individuals — the largest mandrill colony in the world. Lopé is also remarkable for its landscapes: upland grasslands surrounded by primary forest and rocky cliffs.",
      },
      wikipedia: "File:La-lopé-gabon.jpg",
      tags: ["UNESCO", "Gorilles", "Mandrills", "Forêt"],
      mustSee: [
        { name: { fr: "Observation gorilles des plaines (habitués aux humains)", en: "Western lowland gorilla tracking (habituated groups)" }, wikipedia: "File:La-lopé-gabon.jpg" },
        { name: { fr: "Colonie de mandrills — jusqu'à 1 300 individus", en: "Mandrill colony — up to 1,300 individuals" }, wikipedia: "File:La-lopé-gabon.jpg" },
        { name: { fr: "Gravures rupestres néolithiques de la Lopé", en: "Lopé's Neolithic rock carvings" }, wikipedia: "File:La lopé-rupestre2.jpg" },
        { name: { fr: "Savanes et galeries forestières depuis le lodge", en: "Savannas and gallery forests from the lodge" }, wikipedia: "File:Lopé National Park village panorama.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Gabon est l'une des destinations les plus chères d'Afrique subsaharienne. Le pétrole a fait monter les prix, et les parcs nationaux exigent des lodges coûteux pour minimiser l'impact touristique. Un voyage au Gabon est un investissement pour des expériences uniques.",
      en: "Gabon is one of the most expensive destinations in sub-Saharan Africa. Oil wealth has pushed prices up, and the national parks rely on costly lodges to keep tourism's impact low. A trip to Gabon is an investment in truly unique experiences.",
    },
    currency: "XAF",
    exchangeRate: "1€ = 655 XAF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Chambre d'hôte / guesthouse Libreville", en: "Guesthouse / B&B in Libreville" }, price: "50–80 €", detail: { fr: "Milieu de gamme en ville", en: "Mid-range option in the city" } },
          { label: { fr: "Hôtel 3★ Libreville", en: "3★ hotel in Libreville" }, price: "100–160 €", detail: { fr: "Standard correct, clim, wifi", en: "Decent standard, air conditioning, Wi-Fi" } },
          { label: { fr: "Lodge parcs nationaux (Loango, Lopé)", en: "National park lodge (Loango, Lopé)" }, price: "200–500 €", detail: { fr: "Pension complète + activités", en: "Full board + activities" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Cuisine locale dans un boui-boui", en: "Local food at a roadside eatery" }, price: "4–10 €", detail: { fr: "Poisson grillé, sauces locales", en: "Grilled fish, local sauces" } },
          { label: { fr: "Restaurant mid-range Libreville", en: "Mid-range restaurant in Libreville" }, price: "15–30 €", detail: { fr: "Fruits de mer, cuisine française", en: "Seafood, French cuisine" } },
          { label: { fr: "Restaurant gastronomique Libreville", en: "Fine-dining restaurant in Libreville" }, price: "35–70 €", detail: { fr: "Cuisine internationale de qualité", en: "High-quality international cuisine" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Taxi partagé urbain", en: "Shared city taxi" }, price: "1–3 €", detail: { fr: "Transport local Libreville", en: "Local transport in Libreville" } },
          { label: { fr: "Vol intérieur (Libreville–Port-Gentil)", en: "Domestic flight (Libreville–Port-Gentil)" }, price: "60–130 €", detail: { fr: "Gabon Airlines, Afrijet", en: "Gabon Airlines, Afrijet" } },
          { label: { fr: "Transfer lodge en avion léger ou pirogue", en: "Lodge transfer by light aircraft or pirogue" }, price: "100–300 €", detail: { fr: "Loango et parcs reculés", en: "Loango and remote parks" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Journée safari Lopé (guide + 4x4)", en: "Full-day Lopé safari (guide + 4x4)" }, price: "80–150 €", detail: { fr: "Gorilles et mandrills", en: "Gorillas and mandrills" } },
          { label: { fr: "Tour nocturne tortues Cap Esterias (guide)", en: "Night turtle tour at Cap Esterias (guide)" }, price: "30–60 €", detail: { fr: "Oct–mars, départ 21h", en: "Oct–Mar, departure at 9 pm" } },
          { label: { fr: "Balade en kayak / pirogue (Loango)", en: "Kayak / pirogue trip (Loango)" }, price: "40–80 €", detail: { fr: "Lagunes et mangroves", en: "Lagoons and mangroves" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "80–120 €/j", desc: { fr: "Guesthouse Libreville + restaurants locaux + taxi", en: "Guesthouse in Libreville + local restaurants + taxis" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "180–280 €/j", desc: { fr: "Hôtel 3★ + excursions guidées + vols intérieurs", en: "3★ hotel + guided excursions + domestic flights" }, color: "#3b82f6" },
      { type: { fr: "Lodge", en: "Lodge" }, daily: "300–600 €/j", desc: { fr: "Lodge parc national pension complète + safaris", en: "Full-board national park lodge + safaris" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Libreville (3j) → Parc de la Lopé (3j) → Loango (4j)",
        en: "Libreville (3d) → Lopé National Park (3d) → Loango (4d)",
      },
      budgets: [
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "3 500 – 6 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Libreville", en: "Return flight Paris–Libreville" }, amount: "700–1 200 €" },
            { label: { fr: "Hébergement ville (4 nuits)", en: "City accommodation (4 nights)" }, amount: "400–700 €" },
            { label: { fr: "Lodge Lopé (3 nuits, pension complète)", en: "Lopé lodge (3 nights, full board)" }, amount: "700–1 200 €" },
            { label: { fr: "Lodge Loango (3 nuits, pension complète)", en: "Loango lodge (3 nights, full board)" }, amount: "900–1 500 €" },
            { label: { fr: "Vols intérieurs + transfers", en: "Domestic flights + transfers" }, amount: "400–700 €" },
            { label: { fr: "Nourriture ville + activités", en: "Meals in town + activities" }, amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~7h direct (Air France, Corsair) vers Libreville — liaisons régulières", en: "~7h direct to Libreville (Air France, Corsair) — regular connections" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "e-Visa obligatoire — disponible en ligne avant le départ (~85€). Valable 90 jours.", en: "e-Visa required — available online before departure (~€85). Valid for 90 days." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Franc CFA BEAC (XAF). 1€ = 655 XAF taux fixe. Carte bancaire dans grands hôtels. Espèces pour les parcs.", en: "BEAC CFA franc (XAF). €1 = 655 XAF at a fixed rate. Cards are accepted in major hotels. Cash is needed for the parks." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Français (officiel) — communication facile pour francophones.", en: "French (official) — easy communication for French speakers." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/E (européen) — 220V.", en: "Type C/E (European) — 220V." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Vaccin fièvre jaune obligatoire. Antipaludéen indispensable. Hépatites A/B et typhoïde recommandés.", en: "Yellow fever vaccination is mandatory. Antimalarial medication is essential. Hepatitis A/B and typhoid are recommended." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille indispensable.", en: "Not safe to drink — bottled water is essential." } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Bonne couverture à Libreville. Parcs : réseau absent, communication par radio satellite.", en: "Good coverage in Libreville. In the parks there is no network, with communication handled by satellite radio." } },
  ],
};
