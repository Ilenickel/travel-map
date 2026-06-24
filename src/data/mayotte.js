export const MAYOTTE = {
  code: "MYT",
  numericId: 175,
  name: "Mayotte",
  emoji: "🇾🇹",
  capital: "Mamoudzou",
  language: "Français, Shimaoré, Kibushi",
  currency: "Euro (EUR)",
  timezone: "UTC+3",
  filter: {
    budgetMin: 70, budgetMid: 165,
    tripMin: 1500, tripMid: 3000,
  },
  description:
    "Mayotte est un département français de l'océan Indien entre les Comores et Madagascar : le deuxième plus grand lagon du monde (1 100 km²), protégé par la seule double barrière de corail de l'océan Indien, avec dauphins, tortues vertes, requins-baleines, dugongs et raies manta. L'île au lagon, encore méconnue, offre une plongée et un snorkeling d'exception à prix euro.",

  bestPeriods: [
    {
      months: "Avril – Novembre",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "Idéal pour le lagon : mer calme, visibilité sous-marine excellente (20–30m), dauphins et tortues présents toute l'année. Températures agréables 24–28°C.",
      icon: "☀️",
    },
    {
      months: "Décembre – Mars",
      label: "Saison des pluies / cyclones",
      color: "#ef4444",
      description:
        "Pluies abondantes, mer agitée, risque cyclonique. Températures élevées (28–32°C). Mois les moins favorables pour la plongée.",
      icon: "🌀",
    },
  ],

  weatherCities: [
    {
      id: "mamoudzou",
      name: "Mamoudzou",
      region: "Grande-Terre",
      data: [
        { month: "Jan", temp: 28, rain: 350, icon: "🌧️" },
        { month: "Fév", temp: 28, rain: 380, icon: "🌧️" },
        { month: "Mar", temp: 28, rain: 250, icon: "🌧️" },
        { month: "Avr", temp: 27, rain: 130, icon: "🌧️" },
        { month: "Mai", temp: 25, rain: 60,  icon: "☀️" },
        { month: "Jun", temp: 23, rain: 30,  icon: "☀️" },
        { month: "Jul", temp: 23, rain: 20,  icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 15,  icon: "☀️" },
        { month: "Sep", temp: 24, rain: 20,  icon: "☀️" },
        { month: "Oct", temp: 26, rain: 50,  icon: "☀️" },
        { month: "Nov", temp: 27, rain: 130, icon: "🌧️" },
        { month: "Déc", temp: 28, rain: 270, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Lagon de Mayotte — Plongée et dauphins",
      region: "Lagon",
      description:
        "Le lagon de Mayotte est l'un des plus beaux au monde : 1 100 km² d'eaux turquoise entourées d'une double barrière de corail, où nagent des dauphins-toupies (en permanence), des tortues vertes (pondent sur les plages d'avril à août), des dugongs et des raies manta. La visibilité sous-marine y dépasse régulièrement 30 mètres.",
      wikipedia: "File:Le lagon de Mayotte (34707734326).jpg",
      tags: ["Lagon", "Plongée", "Dauphins", "Tortues"],
      mustSee: [
        { name: "Nage avec les dauphins-toupies dans le lagon", wikipedia: "File:Eilat Dolphin Reef (3).jpg" },
        { name: "Snorkeling Petite-Terre — tortues et poissons perroquets", wikipedia: "File:Mayotte, Petite Terre (2850837100).jpg" },
        { name: "Banc de sable Ilot Sable Blanc", wikipedia: "File:Îlot de sable blanc.JPG" },
      ],
    },
    {
      id: 3,
      name: "Baie de Bouéni & plages du sud",
      region: "Grande-Terre (sud)",
      description:
        "Le sud de Mayotte concentre les plus belles plages et baies : la baie de Bouéni avec ses eaux turquoise et ses mangroves, la plage de Moya (la plus longue de l'île, tortues en saison), et les villages traditionnels swahili aux mosquées blanches. Un mzungu (étranger) qui sort des sentiers battus y sera souvent seul.",
      wikipedia: "File:Riffs before SW Mayotte (30592452163).jpg",
      tags: ["Plage", "Mangroves", "Tortues", "Authentique"],
      mustSee: [
        { name: "Plage de Moya — la plus longue de Mayotte + tortues", wikipedia: "File:Plage de Grand Moya .jpg" },
        { name: "Baie de Bouéni — kayak en mangroves", wikipedia: "File:Riffs before SW Mayotte (30592452163).jpg" },
      ],
    },
    {
      id: 4,
      name: "Petite-Terre — Mamoudzou historique",
      region: "Petite-Terre",
      description:
        "Petite-Terre est la petite île où se trouvent les institutions (préfecture), le quartier de Dzaoudzi et le marché de Mamoudzou. La promenade du bord de mer, les toits colorés de Dzaoudzi, et la plage du Sables-Blancs sont les points d'attraction de cette mini-île reliée par bac à la Grande-Terre.",
      wikipedia: "File:Phare de Petite Terre.jpg",
      tags: ["Ville", "Marché", "Bac", "Plage"],
      mustSee: [
        { name: "Marché de Mamoudzou — épices et artisanat mahorais", wikipedia: "Mamoudzou" },
        { name: "Traversée en bac Grande-Terre / Petite-Terre", wikipedia: "File:Mayotte, Petite Terre (2850837100).jpg" },
        { name: "Promenade de Dzaoudzi et panorama lagon", wikipedia: "File:Mayotte, Petite Terre (2850837570).jpg" },
        { name: "Plage de Petite-Terre (Sables Blancs) — snorkeling avec tortues", wikipedia: "File:Petite Terre vue de l’îlot de sable blanc.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Mayotte est un département français — les prix s'alignent sur la métropole pour les produits importés, mais restent inférieurs pour la restauration locale. L'hébergement est en développement. Avantage majeur : l'euro sans change.",
    currency: "EUR",
    exchangeRate: "1€ = 1€ (territoire français)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Chambre d'hôte / gîte local", price: "40–70 €", detail: "Simple mais confortable" },
          { label: "Hôtel 3★ Mamoudzou / Petite-Terre", price: "90–150 €", detail: "Vue lagon, piscine" },
          { label: "Lodge bord de mer (Bouéni)", price: "120–200 €", detail: "Immersion nature" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Barquette coco / mataba dans un restaurant local", price: "5–12 €", detail: "Cuisine mahoraise typique" },
          { label: "Restaurant mid-range Mamoudzou", price: "15–30 €", detail: "Poissons et fruits de mer du lagon" },
          { label: "Supermarché (Jumbo Score, Score)", price: "Same as France", detail: "Prix métropole + transport" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bac Grande-Terre / Petite-Terre", price: "1–2 €", detail: "Traversée 5 min" },
          { label: "Taxi-brousse / taxi collectif", price: "1–5 €", detail: "Transport inter-villages" },
          { label: "Location de voiture", price: "50–80 €/j", detail: "Recommandé pour le sud et randonnées" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Plongée 2 immersions (club de plongée)", price: "70–100 €", detail: "Lagon exceptionnel" },
          { label: "Excursion dauphins et snorkeling (demi-journée)", price: "40–70 €", detail: "En bateau, guide" },
          { label: "Kayak en mangroves (Bouéni)", price: "20–40 €", detail: "Location ou guidée" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "70–100 €/j", desc: "Chambre d'hôte + cuisine locale + taxi-brousse", color: "#22c55e" },
      { type: "Confort", daily: "140–220 €/j", desc: "Hôtel 3★ + restaurants + plongée + location voiture", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Mamoudzou / Petite-Terre (2j) → Tour du lagon en bateau (3j) → Sud et plages (3j) → Bénara et forêt (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 500 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Mayotte (Air Austral, Corsair)", amount: "500–800 €" },
            { label: "Hébergement (10 nuits)", amount: "400–650 €" },
            { label: "Transports locaux", amount: "150–250 €" },
            { label: "Nourriture", amount: "250–400 €" },
            { label: "Plongée & excursions lagon", amount: "200–400 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 000 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Mayotte", amount: "600–900 €" },
            { label: "Hôtels 3★ (10 nuits)", amount: "1 000–1 600 €" },
            { label: "Location voiture", amount: "400–600 €" },
            { label: "Nourriture & restaurants", amount: "400–650 €" },
            { label: "Plongée, dauphins, kayak", amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~12h (Air Austral direct depuis CDG, ou Corsair via escale) — 3 à 5 fois par semaine" },
    { icon: "🪪", label: "Visa",              value: "Aucun visa — département français. Carte nationale d'identité suffisante pour les ressortissants français." },
    { icon: "💰", label: "Monnaie",           value: "Euro (€). Carte bancaire acceptée dans les commerces principaux. Espèces utiles en zone rurale." },
    { icon: "🗣️", label: "Langue",            value: "Français (officiel). Shimaoré et Kibushi entre habitants. Français suffisant pour voyager." },
    { icon: "🔌", label: "Prise électrique",  value: "Type E/F (européen) — 220V. Aucun adaptateur nécessaire." },
    { icon: "💊", label: "Santé",             value: "Antipaludéen recommandé (paludisme présent à Mayotte). Crème solaire indispensable. Eau du robinet à éviter." },
    { icon: "🚰", label: "Eau du robinet",    value: "Qualité variable — eau en bouteille recommandée." },
    { icon: "🌀", label: "Cyclones",          value: "Risque cyclonique de novembre à avril. Consulter Météo-France Mayotte en saison." },
  ],
};
