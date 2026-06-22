export const CAMEROON = {
  code: "CMR",
  numericId: 120,
  name: "Cameroun",
  emoji: "🇨🇲",
  capital: "Yaoundé",
  language: "Français, Anglais, Pidgin, Fulfulde, Bassa",
  currency: "Franc CFA (XAF)",
  timezone: "UTC+1",
  filter: {
    budgetMin: 45, budgetMid: 100,
    tripMin: 1800, tripMid: 3500,
  },
  description:
    "Le Cameroun est surnommé 'l'Afrique en miniature' : désert du Sahara au nord avec le lac Tchad, savane, forêt tropicale dense du bassin du Congo (gorilles et chimpanzés), côte atlantique avec le mont Cameroun (4 095m, volcan actif), et la diversité culturelle de 300 ethnies. Douala sa métropole, Kribi et ses plages, et le Nord avec les Kirdi et les sultanats peuls.",

  bestPeriods: [
    {
      months: "Novembre – Mars",
      label: "Saison sèche (nord et centre)",
      color: "#22c55e",
      description:
        "Idéal pour le nord (Maroua, Waza) et les parcs nationaux. Centre et sud plus pluvieux mais praticables. Températures agréables 22–30°C.",
      icon: "☀️",
    },
    {
      months: "Juin – Septembre",
      label: "Saison des pluies (sud)",
      color: "#ef4444",
      description:
        "Pluies abondantes au sud et centre (200–400mm/mois), routes difficiles en forêt. Nord sec mais très chaud (35–40°C).",
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "yaounde",
      name: "Yaoundé",
      region: "Centre",
      data: [
        { month: "Jan", temp: 24, rain: 20,  icon: "☀️" },
        { month: "Fév", temp: 25, rain: 70,  icon: "⛅" },
        { month: "Mar", temp: 25, rain: 130, icon: "🌧️" },
        { month: "Avr", temp: 25, rain: 200, icon: "🌧️" },
        { month: "Mai", temp: 24, rain: 200, icon: "🌧️" },
        { month: "Jun", temp: 23, rain: 100, icon: "⛅" },
        { month: "Jul", temp: 22, rain: 60,  icon: "⛅" },
        { month: "Aoû", temp: 22, rain: 80,  icon: "⛅" },
        { month: "Sep", temp: 23, rain: 220, icon: "🌧️" },
        { month: "Oct", temp: 23, rain: 280, icon: "🌧️" },
        { month: "Nov", temp: 24, rain: 100, icon: "⛅" },
        { month: "Déc", temp: 24, rain: 20,  icon: "☀️" },
      ],
    },
    {
      id: "maroua",
      name: "Maroua",
      region: "Extrême-Nord",
      data: [
        { month: "Jan", temp: 26, rain: 0,   icon: "☀️" },
        { month: "Fév", temp: 29, rain: 0,   icon: "⛅" },
        { month: "Mar", temp: 33, rain: 5,   icon: "🌡️" },
        { month: "Avr", temp: 36, rain: 20,  icon: "🌡️" },
        { month: "Mai", temp: 35, rain: 60,  icon: "🌡️" },
        { month: "Jun", temp: 31, rain: 110, icon: "🌧️" },
        { month: "Jul", temp: 29, rain: 180, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 200, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 130, icon: "🌧️" },
        { month: "Oct", temp: 31, rain: 30,  icon: "⛅" },
        { month: "Nov", temp: 29, rain: 0,   icon: "⛅" },
        { month: "Déc", temp: 26, rain: 0,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Parc de Waza — Éléphants du Sahel",
      region: "Extrême-Nord",
      description:
        "Le Parc national de Waza est le plus accessible et le plus riche en faune du Cameroun : éléphants (la plus grande population du pays), lions, girafes, autruches et hippotragues dans une savane sahélienne spectaculaire. Meilleur en saison sèche (novembre–avril) quand les animaux se concentrent autour des points d'eau.",
      wikipedia: "Waza_National_Park",
      tags: ["Safari", "Éléphants", "Lions", "Savane"],
      mustSee: [
        { name: "Safari Waza — éléphants, girafes et lions en saison sèche", wikipedia: "Waza_National_Park" },
        { name: "Sultanat de Maroua — palais du sultan peul", wikipedia: "Maroua" },
        { name: "Mont Mandara et villages perchés Kirdi", wikipedia: "Mandara_Mountains" },
      ],
    },
    {
      id: 2,
      name: "Mont Cameroun — Volcan et ascension",
      region: "Sud-Ouest",
      description:
        "Le mont Cameroun (4 095m) est le plus haut sommet d'Afrique de l'Ouest et de Centrale : un volcan actif (dernière éruption 1999) dont l'ascension de 3 jours traverse toutes les zones de végétation, de la forêt tropicale aux laves récentes. La ville de Buea est la base de départ. Limbe, sur la côte, complète le circuit avec ses plages de sable noir volcanique.",
      wikipedia: "Mount_Cameroon",
      tags: ["Volcan", "Randonnée", "Altitude", "Forêt"],
      mustSee: [
        { name: "Ascension mont Cameroun (3j, guide obligatoire)", wikipedia: "Mount_Cameroon" },
        { name: "Plages de sable noir de Limbe", wikipedia: "File:Limbe view with Bioko.jpg" },
        { name: "Wildlife Centre de Limbe — chimpanzés et gorilles sauvés", wikipedia: "File:Limbé Wildlife Centre (4).jpg" },
        { name: "Plantation de thé de Tole", wikipedia: "Mount_Cameroon" },
      ],
    },
    {
      id: 3,
      name: "Kribi — Plages et chutes",
      region: "Océan",
      description:
        "Kribi est la plus belle station balnéaire du Cameroun : plages de sable blanc bordées de palmiers avec la forêt tropicale en arrière-plan. Les chutes de la Lobé sont uniques au monde : une rivière qui se jette directement dans l'océan Atlantique depuis une falaise rocheuse. À proximité : les Pygmées Baka et la forêt primaire.",
      wikipedia: "Kribi",
      tags: ["Plage", "Cascades", "Forêt", "Pygmées"],
      mustSee: [
        { name: "Chutes de la Lobé — chutes tombant directement dans l'océan", wikipedia: "File:Les chutes de la lobé kribi cameroon1.jpg" },
        { name: "Plages de Kribi — sable blanc et palmiers", wikipedia: "Kribi" },
        { name: "Rencontre avec les Pygmées Baka (forêt)", wikipedia: "File:Baka Drf Dja.JPG" },
        { name: "Pêche et fruits de mer frais sur la plage", wikipedia: "File:Couché du soleil kribi.jpg" },
      ],
    },
    {
      id: 4,
      name: "Bafut & Chefferies Bamoun",
      region: "Ouest / Nord-Ouest",
      description:
        "Les chefferies traditionnelles de l'Ouest camerounais sont parmi les plus vivantes d'Afrique : le palais de la chefferie de Bafut avec ses danses Abakwa, les tisserands Ndop, et le palais du Sultan des Bamoun à Foumban avec son musée de 2 000 pièces retraçant l'histoire du royaume Bamoun. L'Ouest camerounais est aussi une région agricole spectaculaire aux paysages de montagnes.",
      wikipedia: "Foumban",
      tags: ["Royauté", "Culture", "Artisanat", "Montagne"],
      mustSee: [
        { name: "Palais du Sultan des Bamoun à Foumban + musée", wikipedia: "Foumban" },
        { name: "Chefferie de Bafut et danse Abakwa sacrée", wikipedia: "File:Bafut Palace - EcoVillage - Cameroon.JPG" },
        { name: "Marché de Foumban — bronzes, masques et tissus", wikipedia: "File:Cameroon - Foumban market.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Cameroun est abordable mais les parcs nationaux et les circuits guidés représentent un coût significatif. Douala est la ville la plus chère. La cuisine camerounaise est excellente et bon marché dans les restaurants locaux.",
    currency: "XAF",
    exchangeRate: "1€ = 655 XAF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / chambre en lodge", price: "20–40 €", detail: "Ventilateur ou clim basique" },
          { label: "Hôtel 3★ (Yaoundé, Douala, Kribi)", price: "60–100 €", detail: "Clim, wifi, sécurité" },
          { label: "Hôtel de luxe (Hilton Douala, Yaoundé Hilton)", price: "150–250 €", detail: "Standard international" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Ndolé / eru dans un resto local", price: "2–6 €", detail: "Cuisine camerounaise typique" },
          { label: "Restaurant mid-range Yaoundé", price: "8–20 €", detail: "Grillades, poisson, bière locale" },
          { label: "Restaurant gastronomique Douala", price: "25–50 €", detail: "Fruits de mer, cuisine française" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus express (Yaoundé–Douala, 4h)", price: "5–10 €", detail: "Compagnies confortables (Général Express)" },
          { label: "Vol intérieur Douala–Maroua", price: "80–150 €", detail: "Recommandé pour éviter les longues routes" },
          { label: "4x4 avec chauffeur / journée", price: "70–120 €", detail: "Indispensable pour les parcs" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Safari Waza (guide + jeep, journée)", price: "50–90 €", detail: "Depuis Maroua" },
          { label: "Ascension mont Cameroun (3 jours)", price: "150–250 €", detail: "Guide + porteurs + hébergement" },
          { label: "Visite Foumban + Bafut avec guide", price: "30–60 €", detail: "Journée depuis Bafoussam" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "45–75 €/j", desc: "Guesthouse + cuisine locale + bus", color: "#22c55e" },
      { type: "Confort", daily: "100–160 €/j", desc: "Hôtel 3★ + restaurants + excursions guidées", color: "#3b82f6" },
      { type: "Luxe", daily: "250 €+/j", desc: "Grand hôtel + safaris privés + vols intérieurs", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "14 jours",
      route: "Douala (2j) → Yaoundé (2j) → Bafoussam / Ouest (3j) → Mont Cameroun / Limbe (3j) → Kribi (2j) → Maroua / Waza (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 800 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Douala", amount: "550–800 €" },
            { label: "Hébergement (14 nuits)", amount: "400–650 €" },
            { label: "Transports locaux + 1 vol intérieur", amount: "300–500 €" },
            { label: "Nourriture", amount: "200–400 €" },
            { label: "Guides & activités", amount: "250–450 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 500 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Douala", amount: "600–900 €" },
            { label: "Hébergement (14 nuits)", amount: "1 000–1 600 €" },
            { label: "4x4 + vols intérieurs", amount: "700–1 200 €" },
            { label: "Nourriture & restaurants", amount: "500–900 €" },
            { label: "Guides & safaris", amount: "500–800 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~7h direct (Air France, Corsair, Camair-Co) vers Douala ou Yaoundé" },
    { icon: "🪪", label: "Visa",              value: "Visa obligatoire — e-Visa disponible en ligne (~90€) ou ambassade. Valable 30–90 jours." },
    { icon: "💰", label: "Monnaie",           value: "Franc CFA BEAC (XAF). 1€ = 655 XAF taux fixe. Espèces indispensables hors grandes villes." },
    { icon: "🗣️", label: "Langue",            value: "Français et Anglais (officiels). Français prédominant au centre et sud. Anglais au nord-ouest et sud-ouest." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/E (européen) — 220V." },
    { icon: "💊", label: "Santé",             value: "Vaccin fièvre jaune obligatoire. Antipaludéen indispensable. Fièvre typhoïde et hépatites A/B recommandés." },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille indispensable." },
    { icon: "📱", label: "Réseau",            value: "Bonne couverture 4G dans les grandes villes. Zones reculées sans réseau. SIM MTN locale recommandée." },
  ],
};
