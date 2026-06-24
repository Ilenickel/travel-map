export const TURKEY = {
  code: "TUR",
  numericId: 792,
  name: "Turquie",
  emoji: "🇹🇷",
  capital: "Ankara",
  language: "Turc",
  currency: "Livre turque (₺)",
  timezone: "UTC+3",
  filter: {
    budgetMin: 30, budgetMid: 75,
    tripMin: 1200, tripMid: 2200,
  },
  description:
    "La Turquie est un pont entre Orient et Occident, entre antiquité et modernité. Istanbul avec ses mosquées et bazars, la Cappadoce avec ses cheminées de fée, les côtes turquoise de la Méditerranée et les ruines grecques d'Éphèse — un pays de richesses infinies.",

  bestPeriods: [
    {
      months: "Avril – Juin",
      label: "Printemps",
      color: "#22c55e",
      description:
        "Idéal pour Istanbul et la Cappadoce. Températures douces (15–25 °C), peu de foule, paysages fleuris.",
      icon: "🌸",
    },
    {
      months: "Juillet – Août",
      label: "Côte turquoise",
      color: "#3b82f6",
      description:
        "Parfait pour la mer Égée et la Méditerranée (Antalya, Bodrum). Mer chaude, soleil garanti.",
      icon: "☀️",
    },
    {
      months: "Septembre – Octobre",
      label: "Arrière-saison",
      color: "#fb923c",
      description:
        "Meilleure période globale : moins de touristes, températures idéales partout, mer encore chaude.",
      icon: "🌤",
    },
  ],

  weatherCities: [
    {
      id: "istanbul",
      name: "Istanbul",
      region: "Marmara",
      data: [
        { month: "Jan", temp: 6,  rain: 57,  icon: "⛅" },
        { month: "Fév", temp: 6,  rain: 69,  icon: "⛅" },
        { month: "Mar", temp: 9,  rain: 61,  icon: "🌦" },
        { month: "Avr", temp: 13, rain: 41,  icon: "🌤" },
        { month: "Mai", temp: 18, rain: 39,  icon: "🌤" },
        { month: "Jun", temp: 23, rain: 24,  icon: "☀️" },
        { month: "Jul", temp: 25, rain: 31,  icon: "☀️" },
        { month: "Aoû", temp: 25, rain: 37,  icon: "☀️" },
        { month: "Sep", temp: 21, rain: 43,  icon: "🌤" },
        { month: "Oct", temp: 17, rain: 100, icon: "🌦" },
        { month: "Nov", temp: 12, rain: 85,  icon: "🌦" },
        { month: "Déc", temp: 8,  rain: 102, icon: "🌦" },
      ],
    },
    {
      id: "antalya",
      name: "Antalya",
      region: "Méditerranée",
      data: [
        { month: "Jan", temp: 10, rain: 220, icon: "🌧" },
        { month: "Fév", temp: 11, rain: 160, icon: "🌧" },
        { month: "Mar", temp: 14, rain: 90,  icon: "🌦" },
        { month: "Avr", temp: 17, rain: 40,  icon: "🌤" },
        { month: "Mai", temp: 22, rain: 20,  icon: "🌤" },
        { month: "Jun", temp: 26, rain: 5,   icon: "☀️" },
        { month: "Jul", temp: 29, rain: 2,   icon: "☀️" },
        { month: "Aoû", temp: 29, rain: 2,   icon: "☀️" },
        { month: "Sep", temp: 26, rain: 10,  icon: "☀️" },
        { month: "Oct", temp: 22, rain: 60,  icon: "🌤" },
        { month: "Nov", temp: 17, rain: 130, icon: "🌦" },
        { month: "Déc", temp: 12, rain: 180, icon: "🌧" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Istanbul",
      region: "Marmara",
      description:
        "Seule ville au monde à cheval sur deux continents. La Mosquée Bleue, Sainte-Sophie, le Grand Bazar et le Bosphore en font une des villes les plus fascinantes au monde.",
      wikipedia: "Istanbul",
      tags: ["Histoire", "Culture", "Gastronomie", "Ville", "Architecture"],
      mustSee: [
        { name: "Sainte-Sophie", wikipedia: "Hagia_Sophia" },
        { name: "Mosquée Bleue (Sultan Ahmet)", wikipedia: "Blue_Mosque,_Istanbul" },
        { name: "Grand Bazar", wikipedia: "Grand_Bazaar,_Istanbul" },
        { name: "Palais de Topkapi", wikipedia: "File:Le Palais de Topkapi vu en haut.png" },
      ],
    },
    {
      id: 2,
      name: "Cappadoce",
      region: "Anatolie centrale",
      description:
        "Paysage lunaire de cheminées de fée sculptées par l'érosion, souterraines et habitées depuis l'Antiquité. Les montgolfières au lever du soleil sont l'une des plus belles expériences de voyage.",
      wikipedia: "Cappadocia",
      tags: ["Nature", "Paysage", "Histoire", "Montgolfière", "Randonnée"],
      mustSee: [
        { name: "Vol en montgolfière au lever du soleil", wikipedia: "Cappadocia" },
        { name: "Vallée de Göreme", wikipedia: "Göreme" },
        { name: "Ville souterraine de Derinkuyu", wikipedia: "Derinkuyu_underground_city" },
        { name: "Monastères en rocher de Göreme", wikipedia: "File:Churches_of_Göreme.jpg" },
      ],
    },
    {
      id: 3,
      name: "Éphèse & Côte Égéenne",
      region: "Mer Égée",
      description:
        "Les ruines les mieux conservées de l'Antiquité gréco-romaine, avec la bibliothèque de Celsus, aux côtés des plages de Bodrum et de Kuşadası.",
      wikipedia: "Ephesus",
      tags: ["Archéologie", "Histoire", "Plage", "UNESCO", "Architecture"],
      mustSee: [
        { name: "Bibliothèque de Celsus — Éphèse", wikipedia: "Library_of_Celsus" },
        { name: "Maison de la Vierge Marie", wikipedia: "House_of_the_Virgin_Mary" },
        { name: "Plages de Bodrum", wikipedia: "Bodrum" },
        { name: "Pamukkale — cascades de travertin", wikipedia: "Pamukkale" },
      ],
    },
    {
      id: 4,
      name: "Antalya & Côte Turquoise",
      region: "Méditerranée",
      description:
        "La Riviera turque avec ses plages de galets, ses eaux cristallines, les ruines de Pergé, Side et l'architecture ottomane de la vieille ville d'Antalya.",
      wikipedia: "Antalya",
      tags: ["Plage", "Mer", "Histoire", "Détente"],
      mustSee: [
        { name: "Vieille ville (Kaleiçi)", wikipedia: "Kaleiçi" },
        { name: "Ruines de Side", wikipedia: "File:2023-01-15_Side,_Turkey_16.jpg" },
        { name: "Plage de Kaputaş", wikipedia: "File:KAPUTAŞ_BEACH_-_panoramio.jpg" },
        { name: "Canyon et gorges de Saklikent", wikipedia: "File:Saklıkent_Kanyonu_(2).jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Grâce à l'inflation et à la faiblesse de la livre turque, la Turquie est devenue très avantageuse pour les voyageurs européens. Excellente valeur pour l'argent.",
    currency: "TRY (₺)",
    exchangeRate: "~35 ₺ = 1 € (variable, taux favorable)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir hostel", price: "8–15 €", detail: "Bonne qualité dans les grandes villes" },
          { label: "Pension / guesthouse", price: "20–40 €", detail: "Accueil chaleureux, souvent avec petit-déj" },
          { label: "Hôtel confort", price: "40–80 €", detail: "Chambre double, excellente valeur" },
          { label: "Maison troglodyte (Cappadoce)", price: "80–200 €", detail: "Expérience unique dans la roche" },
          { label: "Hôtel de luxe", price: "150–400 €", detail: "Resort 5★ sur la côte ou Istanbul" },
        ],
      },
      {
        id: "food",
        icon: "🍜",
        label: "Nourriture",
        items: [
          { label: "Kebab / döner (rue)", price: "2–4 €", detail: "Repas complet et délicieux" },
          { label: "Petit-déjeuner turc complet", price: "5–10 €", detail: "Fromages, olives, œufs, pain — festin !" },
          { label: "Restaurant local (lokanta)", price: "5–12 €", detail: "Meze, köfte, lahmacun" },
          { label: "Restaurant touristique", price: "12–25 €", detail: "Vue Bosphore ou mer incluse" },
          { label: "Baklava & thé çay", price: "1–3 €", detail: "Les pâtisseries sont une institution" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Métro Istanbul (IstanbulKart)", price: "0,40–0,80 €", detail: "Tramway, métro, bateau — 1 ticket" },
          { label: "Ferry Bosphore", price: "0,80–1,50 €", detail: "Traversée Europe–Asie pittoresque" },
          { label: "Bus longue distance", price: "5–20 €", detail: "Compagnies luxueuses (Metro, Flixbus)" },
          { label: "Vol intérieur", price: "20–60 €", detail: "Turkish Airlines, Pegasus — très bien desservi" },
          { label: "Location voiture", price: "20–50 €/j", detail: "Idéal pour la côte et la Cappadoce" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Sainte-Sophie (entrée)", price: "Gratuit", detail: "Mosquée, accès libre aux horaires de prière" },
          { label: "Palais de Topkapi", price: "8–15 €", detail: "Harem en supplément" },
          { label: "Ruines d'Éphèse", price: "10–15 €", detail: "Site archéologique majeur" },
          { label: "Hammam traditionnel", price: "20–50 €", detail: "Expérience incontournable, gommage inclus" },
          { label: "Montgolfière Cappadoce", price: "150–250 €", detail: "1h de vol au lever du soleil" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "30–50 €/j", desc: "Pension + street food + transports locaux", color: "#22c55e" },
      { type: "Confort", daily: "75–130 €/j", desc: "Hôtel confort + restos + activités", color: "#3b82f6" },
      { type: "Luxe", daily: "250 €+/j", desc: "Resort 5★ + gastronomie + excursions privées", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Istanbul (4j) → Cappadoce (3j) → Éphèse/Bodrum (3j) → Antalya (4j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 200 – 1 600 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Istanbul", amount: "150–350 €" },
            { label: "Vols & bus intérieurs", amount: "100–150 €" },
            { label: "Hébergement (14 nuits)", amount: "250–400 €" },
            { label: "Nourriture", amount: "300–400 €" },
            { label: "Activités & imprévus", amount: "200–350 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 200 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Istanbul", amount: "200–400 €" },
            { label: "Vols intérieurs & transferts", amount: "150–250 €" },
            { label: "Hébergement (14 nuits)", amount: "700–1 200 €" },
            { label: "Nourriture", amount: "600–800 €" },
            { label: "Activités (dont montgolfière)", amount: "400–600 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "5 000 € +",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Istanbul (business)", amount: "1 000–2 000 €" },
            { label: "Transferts privés", amount: "300–500 €" },
            { label: "Hébergement (maisons troglodytes, resorts)", amount: "1 500–3 000 €" },
            { label: "Gastronomie & spa", amount: "700–1 200 €" },
            { label: "Expériences privées", amount: "500–800 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~3h30 direct (Turkish Airlines, Air France)" },
    { icon: "🪪", label: "Visa", value: "Visa électronique en ligne (e-Visa, ~20 $, quelques minutes)" },
    { icon: "💰", label: "Monnaie", value: "Livre turque (₺) — taux très favorable, retrait DAB conseillé" },
    { icon: "🗣️", label: "Langue", value: "Turc — anglais courant dans les zones touristiques" },
    { icon: "🔌", label: "Prise électrique", value: "Type C/F — 220V (même qu'en France)" },
    { icon: "📱", label: "Réseau", value: "SIM locale abordable ou roaming européen disponible" },
    { icon: "🚰", label: "Eau du robinet", value: "Non potable — eau en bouteille recommandée" },
    { icon: "💊", label: "Santé", value: "Aucun vaccin obligatoire, soins de qualité dans les grandes villes" },
  ],
};
