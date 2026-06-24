export const ISRAEL = {
  code: "ISR",
  numericId: 376,
  name: "Israël",
  emoji: "🇮🇱",
  capital: "Jérusalem",
  language: "Hébreu",
  currency: "Shekel (ILS)",
  timezone: "UTC+2 (UTC+3 été)",
  filter: {
    budgetMin: 60, budgetMid: 130,
    tripMin: 2000, tripMid: 3800,
  },
  description:
    "Israël concentre en un territoire minuscule trois des lieux saints les plus importants de l'humanité (Jérusalem), la mer Morte à −430 m, les plages de Tel Aviv, le désert du Néguev et des sites archéologiques uniques. Une destination d'une richesse culturelle exceptionnelle.",

  bestPeriods: [
    {
      months: "Mars – Mai",
      label: "Printemps",
      color: "#22c55e",
      description:
        "Températures idéales (16–25 °C), fleurs du désert (négué), Pessah, idéal pour Jérusalem et les randonnées.",
      icon: "🌸",
    },
    {
      months: "Septembre – Novembre",
      label: "Automne",
      color: "#fb923c",
      description:
        "Après la chaleur estivale, températures agréables (22–28 °C). Roch Hachana et fêtes juives en septembre-octobre.",
      icon: "🍂",
    },
    {
      months: "Juin – Août",
      label: "Été balnéaire",
      color: "#3b82f6",
      description:
        "Mer parfaite, Tel Aviv animée, Eilat et Mer Rouge accessibles. Chaud mais sec (sec < 30% humidité sur la côte).",
      icon: "🏖️",
    },
  ],

  weatherCities: [
    {
      id: "tel_aviv",
      name: "Tel Aviv",
      region: "Centre",
      data: [
        { month: "Jan", temp: 13, rain: 130, icon: "⛅" },
        { month: "Fév", temp: 14, rain: 90,  icon: "⛅" },
        { month: "Mar", temp: 16, rain: 55,  icon: "☀️" },
        { month: "Avr", temp: 21, rain: 20,  icon: "☀️" },
        { month: "Mai", temp: 25, rain: 3,   icon: "☀️" },
        { month: "Jun", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Jul", temp: 31, rain: 0,   icon: "⛅" },
        { month: "Aoû", temp: 31, rain: 0,   icon: "⛅" },
        { month: "Sep", temp: 29, rain: 0,   icon: "⛅" },
        { month: "Oct", temp: 26, rain: 10,  icon: "☀️" },
        { month: "Nov", temp: 21, rain: 65,  icon: "☀️" },
        { month: "Déc", temp: 15, rain: 110, icon: "⛅" },
      ],
    },
    {
      id: "eilat",
      name: "Eilat",
      region: "Mer Rouge",
      data: [
        { month: "Jan", temp: 15, rain: 5,   icon: "☀️" },
        { month: "Fév", temp: 17, rain: 5,   icon: "☀️" },
        { month: "Mar", temp: 21, rain: 5,   icon: "☀️" },
        { month: "Avr", temp: 26, rain: 0,   icon: "☀️" },
        { month: "Mai", temp: 31, rain: 0,   icon: "⛅" },
        { month: "Jun", temp: 34, rain: 0,   icon: "🌡️" },
        { month: "Jul", temp: 37, rain: 0,   icon: "🌡️" },
        { month: "Aoû", temp: 36, rain: 0,   icon: "🌡️" },
        { month: "Sep", temp: 33, rain: 0,   icon: "🌡️" },
        { month: "Oct", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Nov", temp: 22, rain: 3,   icon: "☀️" },
        { month: "Déc", temp: 17, rain: 5,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Jérusalem",
      region: "Jérusalem",
      description:
        "Ville sainte pour les trois grandes religions monothéistes, avec la vieille ville classée à l'UNESCO : le Mur occidental, l'Esplanade des Mosquées (Dôme du Rocher, Al-Aqsa), le Saint-Sépulcre et le quartier juif.",
      wikipedia: "Jerusalem",
      tags: ["Histoire", "Religion", "UNESCO", "Archéologie", "Ville", "Architecture"],
      mustSee: [
        { name: "Mur occidental (Kotel)", wikipedia: "Western_Wall" },
        { name: "Dôme du Rocher & al-Aqsa", wikipedia: "Dome_of_the_Rock" },
        { name: "Saint-Sépulcre", wikipedia: "Church_of_the_Holy_Sepulchre" },
        { name: "Vieille ville — marchés et ruelles", wikipedia: "Old_City_of_Jerusalem" },
      ],
    },
    {
      id: 2,
      name: "Tel Aviv",
      region: "Gush Dan",
      description:
        "Ville ultramoderne, branchée et tolérante, avec la plus grande concentration d'architecture Bauhaus au monde (Ville Blanche UNESCO), des plages de sable fin et une scène culinaire mondialement reconnue.",
      wikipedia: "Tel_Aviv",
      tags: ["Plage", "Culture", "Gastronomie", "Architecture", "Ville"],
      mustSee: [
        { name: "Ville Blanche — architecture Bauhaus (UNESCO)", wikipedia: "File:PikiWiki Israel 9168 White City of Tel Aviv.JPG" },
        { name: "Jaffa — vieille ville portuaire", wikipedia: "Jaffa" },
        { name: "Marché Carmel", wikipedia: "Carmel_Market" },
      ],
    },
    {
      id: 3,
      name: "Mer Morte",
      region: "District Sud",
      description:
        "Le point le plus bas de la Terre (−430 m), avec une eau à 34% de sel où l'on flotte sans effort. Les boues minérales noires ont des propriétés thérapeutiques reconnues.",
      wikipedia: "Dead_Sea",
      tags: ["Nature", "Bien-être", "Unique", "Désert", "Randonnée"],
      mustSee: [
        { name: "Masada — forteresse hérodienne", wikipedia: "Masada" },
        { name: "Bain flottant mer Morte", wikipedia: "Dead_Sea" },
        { name: "Grottes de Qumrân (manuscrits)", wikipedia: "Qumran" },
      ],
    },
    {
      id: 4,
      name: "Eilat & Mer Rouge",
      region: "District Sud",
      description:
        "Station balnéaire à la pointe du Néguev, où la mer Rouge offre une plongée exceptionnelle (coraux, poissons tropicaux, dauphins) et un soleil garanti 360 jours par an.",
      wikipedia: "Eilat",
      tags: ["Plongée", "Plage", "Nature", "Désert"],
      mustSee: [
        { name: "Coral Beach Reserve (snorkeling)", wikipedia: "File:Gulf of Aqaba - Gulf von Akaba.jpg" },
        { name: "Plongée avec dauphins", wikipedia: "File:Eilat Dolphin Reef (3).jpg" },
        { name: "Désert du Néguev — Makhtesh Ramon", wikipedia: "Makhtesh_Ramon" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Israël est une destination onéreuse, comparable aux grandes capitales européennes. Tel Aviv est régulièrement citée comme l'une des villes les plus chères du monde.",
    currency: "ILS",
    exchangeRate: "1€ ≈ 4,10 ILS",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Auberge de jeunesse / hostel", price: "20–40 €", detail: "Dortoir Tel Aviv ou Jérusalem" },
          { label: "Hôtel 3★", price: "70–120 €", detail: "Correct, souvent inclus breakfast" },
          { label: "Hôtel 4–5★ design", price: "180–400 €", detail: "Tel Aviv bord de mer ou Jérusalem" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Houmous + falafel au marché", price: "3–7 €", detail: "Marché Machane Yehuda ou Carmel" },
          { label: "Restaurant local (shakshuka, sabich)", price: "12–20 €", detail: "Bon rapport qualité-prix" },
          { label: "Restaurant gastronomique Tel Aviv", price: "40–80 €", detail: "Scène culinaire world class" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus / Train intercités", price: "5–15 €", detail: "Tel Aviv–Jérusalem ~1h (train direct)" },
          { label: "Métro léger Tel Aviv (Ligne Rouge)", price: "1,50 €", detail: "Réseau en expansion" },
          { label: "Location voiture / jour", price: "40–70 €", detail: "Utile pour Néguev et Nord" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Musée d'Israël (Jérusalem)", price: "12–16 €", detail: "Rouleaux de la Mer Morte" },
          { label: "Tour guidé vieille ville Jérusalem", price: "20–40 €", detail: "Guide anglophone 3h" },
          { label: "Plongée Eilat (2 plongées)", price: "60–90 €", detail: "Équipement inclus" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "60–90 €/j", desc: "Hostel + marchés + transports en commun", color: "#22c55e" },
      { type: "Confort", daily: "130–200 €/j", desc: "Hôtel 3★ + restos mid-range + excursions", color: "#3b82f6" },
      { type: "Luxe", daily: "300 €+/j", desc: "Hôtel design + gastronomie + guide privé", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Tel Aviv (3j) → Jérusalem (3j) → Mer Morte + Masada (2j) → Eilat (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "2 000 – 2 700 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Tel Aviv", amount: "350–550 €" },
            { label: "Hébergement (10 nuits)", amount: "300–500 €" },
            { label: "Nourriture", amount: "400–600 €" },
            { label: "Transport local", amount: "200–300 €" },
            { label: "Activités & entrées", amount: "300–450 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 800 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Tel Aviv", amount: "450–700 €" },
            { label: "Hébergement (10 nuits)", amount: "900–1 500 €" },
            { label: "Nourriture", amount: "800–1 200 €" },
            { label: "Transport & location voiture", amount: "400–600 €" },
            { label: "Activités & guides", amount: "400–700 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "8 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Tel Aviv (Business)", amount: "1 500–3 000 €" },
            { label: "Hôtels design (10 nuits)", amount: "2 500–4 500 €" },
            { label: "Gastronomie & wine", amount: "1 500–2 500 €" },
            { label: "Transport privé", amount: "600–1 000 €" },
            { label: "Expériences privées", amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~4–5h direct (Air France, El Al, Transavia)" },
    { icon: "🪪", label: "Visa",              value: "Sans visa pour les Français (90 jours)" },
    { icon: "💰", label: "Monnaie",           value: "Shekel (1€ ≈ 4,10 ILS)" },
    { icon: "🗣️", label: "Langue",            value: "Hébreu et arabe (anglais très répandu)" },
    { icon: "🔌", label: "Prise électrique",  value: "Type H (spécifique) – 230 V (adaptateur universel)" },
    { icon: "📱", label: "Réseau",            value: "Excellente couverture, e-SIM disponible" },
    { icon: "🚰", label: "Eau du robinet",    value: "Potable (eau dessalinisée de bonne qualité)" },
    { icon: "💊", label: "Santé",             value: "Aucun vaccin obligatoire, soins excellents" },
  ],
};
