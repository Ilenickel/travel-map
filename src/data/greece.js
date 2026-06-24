export const GREECE = {
  code: "GRC",
  numericId: 300,
  name: "Grèce",
  emoji: "🇬🇷",
  capital: "Athènes",
  language: "Grec",
  currency: "Euro (€)",
  timezone: "UTC+2",
  filter: {
    budgetMin: 50, budgetMid: 110,
    tripMin: 1500, tripMid: 2800,
  },
  description:
    "La Grèce est le berceau de la civilisation occidentale. Entre l'Acropole d'Athènes, les monastères des Météores, les îles cycladiques aux maisons blanches (Santorin, Mykonos) et les plages cristallines de Crète, elle conjugue patrimoine antique et beauté méditerranéenne.",

  bestPeriods: [
    {
      months: "Mai – Juin",
      label: "Début d'été",
      color: "#22c55e",
      description:
        "Parfait pour tout le pays : mer déjà chaude, foule modérée, températures idéales (24–28 °C). Meilleure période pour visiter Athènes.",
      icon: "🌤",
    },
    {
      months: "Septembre – Octobre",
      label: "Arrière-saison",
      color: "#fb923c",
      description:
        "Mer encore chaude, lumière dorée, moins de touristes, prix plus bas. Idéal pour les randonnées et les sites archéologiques.",
      icon: "🍇",
    },
    {
      months: "Juillet – Août",
      label: "Plein été",
      color: "#3b82f6",
      description:
        "Soleil garanti sur les îles. Très fréquenté et chaud (32–35 °C). Ambiance estivale maximale à Mykonos et Santorin.",
      icon: "☀️",
    },
  ],

  weatherCities: [
    {
      id: "athens",
      name: "Athènes",
      region: "Attique",
      data: [
        { month: "Jan", temp: 10, rain: 43,  icon: "⛅" },
        { month: "Fév", temp: 10, rain: 40,  icon: "⛅" },
        { month: "Mar", temp: 12, rain: 41,  icon: "⛅" },
        { month: "Avr", temp: 16, rain: 28,  icon: "☀️" },
        { month: "Mai", temp: 21, rain: 14,  icon: "☀️" },
        { month: "Jun", temp: 25, rain: 5,   icon: "☀️" },
        { month: "Jul", temp: 28, rain: 8,   icon: "⛅" },
        { month: "Aoû", temp: 28, rain: 3,   icon: "⛅" },
        { month: "Sep", temp: 25, rain: 12,  icon: "☀️" },
        { month: "Oct", temp: 20, rain: 35,  icon: "☀️" },
        { month: "Nov", temp: 15, rain: 72,  icon: "⛅" },
        { month: "Déc", temp: 11, rain: 58,  icon: "⛅" },
      ],
    },
    {
      id: "santorini",
      name: "Santorin",
      region: "Cyclades",
      data: [
        { month: "Jan", temp: 12, rain: 55,  icon: "⛅" },
        { month: "Fév", temp: 12, rain: 50,  icon: "⛅" },
        { month: "Mar", temp: 13, rain: 40,  icon: "⛅" },
        { month: "Avr", temp: 16, rain: 15,  icon: "☀️" },
        { month: "Mai", temp: 21, rain: 8,   icon: "☀️" },
        { month: "Jun", temp: 26, rain: 2,   icon: "☀️" },
        { month: "Jul", temp: 28, rain: 1,   icon: "⛅" },
        { month: "Aoû", temp: 28, rain: 1,   icon: "⛅" },
        { month: "Sep", temp: 25, rain: 5,   icon: "☀️" },
        { month: "Oct", temp: 21, rain: 30,  icon: "☀️" },
        { month: "Nov", temp: 17, rain: 60,  icon: "☀️" },
        { month: "Déc", temp: 13, rain: 70,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Athènes",
      region: "Attique",
      description:
        "L'une des plus anciennes villes du monde : l'Acropole et le Parthénon dominent la ville, entourés de quartiers bohèmes (Monastiraki, Psirri) et de tavernes animées.",
      wikipedia: "Athens",
      tags: ["Histoire", "UNESCO", "Culture", "Gastronomie", "Ville", "Architecture"],
      mustSee: [
        { name: "Acropole & Parthénon", wikipedia: "Acropolis_of_Athens" },
        { name: "Musée de l'Acropole", wikipedia: "File:Acropolis Museum Interior.jpg" },
        { name: "Agora antique", wikipedia: "Ancient_Agora_of_Athens" },
        { name: "Quartier Monastiraki", wikipedia: "Monastiraki" },
      ],
    },
    {
      id: 2,
      name: "Santorin",
      region: "Cyclades",
      description:
        "L'île la plus photographiée du monde, avec ses maisons blanches à dômes bleus accrochées à la caldeira d'un volcan. Couchers de soleil légendaires à Oia.",
      wikipedia: "File:Thira (Santorini) - Ia-01.jpg",
      tags: ["Paysage", "Romantisme", "Mer", "Volcan", "Plage", "Randonnée"],
      mustSee: [
        { name: "Village d'Oia au coucher du soleil", wikipedia: "File:Οία 1121.jpg" },
        { name: "Fira — la capitale de l'île", wikipedia: "Fira" },
        { name: "Plage de Perissa (sable noir)", wikipedia: "File:Perissa Beach and Mésa Vounó at sunset, May 2024.jpg" },
        { name: "Akrotiri — Pompéi de l'Égée", wikipedia: "Akrotiri,_Santorini" },
      ],
    },
    {
      id: 3,
      name: "Météores",
      region: "Thessalie",
      description:
        "Monastères byzantins perchés sur des piliers de roche géants surplombant la plaine thessalienne. Paysage à couper le souffle, site UNESCO.",
      wikipedia: "Meteora",
      tags: ["UNESCO", "Nature", "Histoire", "Randonnée", "Architecture"],
      mustSee: [
        { name: "Monastère de Varlaam", wikipedia: "File:Moni Varlaam BW 2017-10-07 09-09-52.jpg" },
        { name: "Grand Météore (Transfiguration)", wikipedia: "File:Meteora Monastery.jpg" },
        { name: "Randonnée entre les piliers de roche", wikipedia: "File:Meteora Monastery bridge.jpg" },
        { name: "Coucher de soleil sur les monastères", wikipedia: "File:Mystic land METEORA.jpg" },
      ],
    },
    {
      id: 4,
      name: "Crète",
      region: "Crète",
      description:
        "La plus grande île grecque, avec le palais minoen de Cnossos, les gorges de Samaria (les plus longues d'Europe) et des plages de rêve comme Elafonissi.",
      wikipedia: "Crete",
      tags: ["Histoire", "Nature", "Plage", "Randonnée", "UNESCO", "Gastronomie"],
      mustSee: [
        { name: "Palais minoen de Cnossos", wikipedia: "File:Δεξαμενή Καθαρμών Κνωσός 0562.jpg" },
        { name: "Gorges de Samaria", wikipedia: "File:Φαράγγι Σαμαριάς 3754.jpg" },
        { name: "Plage d'Elafonissi (sable rose)", wikipedia: "Elafonisi" },
        { name: "Vieille Hania", wikipedia: "Chania" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Grèce reste abordable malgré la fréquentation touristique. Les tavernes locales sont excellentes et bon marché. Santorin et Mykonos sont significativement plus chères que le reste du pays.",
    currency: "EUR (€)",
    exchangeRate: "Monnaie locale",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir hostel", price: "15–25 €", detail: "Principalement dans les grandes villes" },
          { label: "Studios / appartements", price: "40–80 €", detail: "Avec kitchenette, très pratique sur les îles" },
          { label: "Hôtel confort", price: "60–120 €", detail: "Chambre double avec vue mer souvent accessible" },
          { label: "Hôtel piscine (Crète, Rhodes)", price: "80–180 €", detail: "Formule tout inclus disponible" },
          { label: "Cave house (Santorin)", price: "200–600 €", detail: "Maison dans la roche, vue caldeira" },
        ],
      },
      {
        id: "food",
        icon: "🍜",
        label: "Nourriture",
        items: [
          { label: "Gyros / souvlaki (rue)", price: "2–4 €", detail: "Street food incontournable" },
          { label: "Taverne locale (mezze)", price: "12–20 €/pers", detail: "Tzatziki, houmous, feta, salade grecque" },
          { label: "Salade grecque + pain pita", price: "5–8 €", detail: "Repas léger idéal" },
          { label: "Poisson grillé (taverne de pêcheur)", price: "15–30 €", detail: "Au poids — voir le prix avant" },
          { label: "Café grec / frappé", price: "1,50–3 €", detail: "Culture du café omniprésente" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Métro Athènes", price: "1,20–2,50 €", detail: "Ticket 90 min ou pass journalier" },
          { label: "Bus KTEL longue distance", price: "8–30 €", detail: "Réseau national bien développé" },
          { label: "Ferry inter-îles", price: "15–80 €", detail: "Athènes–Santorin ~50 € (5h rapide)" },
          { label: "Vol intérieur (Aegean, Sky Express)", price: "30–100 €", detail: "Athènes–Héraklion–Santorin bien desservi" },
          { label: "Location de quad / scooter (îles)", price: "20–40 €/j", detail: "Idéal pour explorer les îles" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Acropole + sites environnants", price: "30 € (billet combiné)", detail: "Valable 5 jours pour 7 sites" },
          { label: "Musée archéologique national", price: "12 €", detail: "L'un des plus riches du monde" },
          { label: "Palais de Cnossos (Crète)", price: "15 €", detail: "Civilisation minoenne, 3 000 ans av. J.-C." },
          { label: "Excursion voilier (Cyclades)", price: "60–120 €", detail: "Demi-journée ou journée, repas inclus" },
          { label: "Randonnée gorges de Samaria", price: "5 €", detail: "16 km, transport en bateau retour" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "50–75 €/j", desc: "Hostel + taverne + ferry + bus", color: "#22c55e" },
      { type: "Confort", daily: "110–180 €/j", desc: "Hôtel confort + restos + activités", color: "#3b82f6" },
      { type: "Luxe", daily: "350 €+/j", desc: "Cave house Santorin + gastronomie + excursions privées", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Athènes (3j) → Météores (2j) → Santorin (4j) → Mykonos (2j) → Crète (3j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 500 – 2 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Athènes", amount: "80–200 €" },
            { label: "Ferries & transports intérieurs", amount: "200–300 €" },
            { label: "Hébergement (14 nuits)", amount: "450–650 €" },
            { label: "Nourriture", amount: "400–550 €" },
            { label: "Activités & imprévus", amount: "250–400 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 800 – 4 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Athènes", amount: "100–300 €" },
            { label: "Ferries rapides & vols intérieurs", amount: "300–500 €" },
            { label: "Hébergement (14 nuits)", amount: "1 000–1 600 €" },
            { label: "Nourriture & restaurants", amount: "800–1 200 €" },
            { label: "Activités & imprévus", amount: "500–700 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "6 000 € +",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Athènes (business)", amount: "500–1 500 €" },
            { label: "Transfers privés & speed boats", amount: "500–800 €" },
            { label: "Cave house & hôtels 5★ (14 nuits)", amount: "2 500–5 000 €" },
            { label: "Gastronomie & dîners vue mer", amount: "1 000–2 000 €" },
            { label: "Excursions privées & imprévus", amount: "600–1 200 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~3h30 direct (Aegean Airlines, Air France, easyJet)" },
    { icon: "🪪", label: "Visa", value: "Pas de visa (espace Schengen)" },
    { icon: "💰", label: "Monnaie", value: "Euro (€) — certaines îles ont peu de DAB, prévoir du liquide" },
    { icon: "🗣️", label: "Langue", value: "Grec — anglais courant dans les zones touristiques" },
    { icon: "🔌", label: "Prise électrique", value: "Type C/F — 230V (même qu'en France)" },
    { icon: "📱", label: "Réseau", value: "Roaming européen inclus, réseau parfois limité sur les petites îles" },
    { icon: "🚰", label: "Eau du robinet", value: "Potable dans les grandes villes, eau en bouteille sur les îles" },
    { icon: "💊", label: "Santé", value: "Carte européenne d'assurance maladie valide" },
  ],
};
