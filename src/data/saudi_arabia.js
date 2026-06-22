export const SAUDI_ARABIA = {
  code: "SAU",
  numericId: 682,
  name: "Arabie Saoudite",
  emoji: "🇸🇦",
  capital: "Riyad",
  language: "Arabe",
  currency: "Riyal saoudien (SAR)",
  timezone: "UTC+3",
  filter: {
    budgetMin: 60, budgetMid: 130,
    tripMin: 2000, tripMid: 4000,
  },
  description:
    "L'Arabie Saoudite s'ouvre progressivement au tourisme international depuis 2019. Sites nabatéens d'AlUla (Hégra), déserts infinis, vieille Djeddah inscrite à l'UNESCO, modernité de Riyad et douceur de la mer Rouge — un pays qui surprend et dépasse les clichés.",

  bestPeriods: [
    {
      months: "Novembre – Mars",
      label: "Hiver doux",
      color: "#22c55e",
      description:
        "Températures agréables (15–25 °C), idéales pour visiter Riyad, AlUla, la vieille ville de Djeddah et le désert.",
      icon: "🏛️",
    },
    {
      months: "Avril – Mai",
      label: "Printemps",
      color: "#f59e0b",
      description:
        "Avant la grande chaleur estivale, températures encore supportables (25–35 °C) pour les sites culturels.",
      icon: "🌸",
    },
  ],

  weatherCities: [
    {
      id: "riyadh",
      name: "Riyad",
      region: "Riyad",
      data: [
        { month: "Jan", temp: 15, rain: 15,  icon: "☀️" },
        { month: "Fév", temp: 18, rain: 15,  icon: "☀️" },
        { month: "Mar", temp: 23, rain: 25,  icon: "☀️" },
        { month: "Avr", temp: 29, rain: 10,  icon: "⛅" },
        { month: "Mai", temp: 35, rain: 2,   icon: "🌡️" },
        { month: "Jun", temp: 40, rain: 0,   icon: "🌡️" },
        { month: "Jul", temp: 42, rain: 0,   icon: "🌡️" },
        { month: "Aoû", temp: 42, rain: 0,   icon: "🌡️" },
        { month: "Sep", temp: 38, rain: 0,   icon: "🌡️" },
        { month: "Oct", temp: 32, rain: 2,   icon: "🌡️" },
        { month: "Nov", temp: 23, rain: 10,  icon: "☀️" },
        { month: "Déc", temp: 17, rain: 10,  icon: "☀️" },
      ],
    },
    {
      id: "jeddah",
      name: "Djeddah",
      region: "Mer Rouge",
      data: [
        { month: "Jan", temp: 23, rain: 10,  icon: "☀️" },
        { month: "Fév", temp: 24, rain: 5,   icon: "☀️" },
        { month: "Mar", temp: 26, rain: 0,   icon: "☀️" },
        { month: "Avr", temp: 30, rain: 0,   icon: "⛅" },
        { month: "Mai", temp: 34, rain: 0,   icon: "🌡️" },
        { month: "Jun", temp: 37, rain: 0,   icon: "🌡️" },
        { month: "Jul", temp: 38, rain: 0,   icon: "🌡️" },
        { month: "Aoû", temp: 38, rain: 0,   icon: "🌡️" },
        { month: "Sep", temp: 36, rain: 0,   icon: "🌡️" },
        { month: "Oct", temp: 33, rain: 5,   icon: "🌡️" },
        { month: "Nov", temp: 28, rain: 10,  icon: "⛅" },
        { month: "Déc", temp: 25, rain: 15,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "AlUla & Hégra",
      region: "Médine",
      description:
        "Site archéologique nabatéen de premier ordre, Hégra (Madain Saleh) est le Pétra saoudien : tombeaux monumentaux taillés dans la roche rouge, inscrits à l'UNESCO depuis 2008.",
      wikipedia: "File:Al Ula old town, Saudi Arabia 2011.jpg",
      tags: ["Histoire", "Archéologie", "UNESCO", "Désert"],
      mustSee: [
        { name: "Hégra — tombeaux nabatéens (UNESCO)", wikipedia: "File:Hegra, Al-Ula, Saudi Arabia.png" },
        { name: "Elephant Rock", wikipedia: "File:Elephant_rock_Al_Ula,_Saudi_Arabia_2011.jpg" },
        { name: "Oasis de Dedan", wikipedia: "File:Al-'Ula oasis (6).jpg" },
      ],
    },
    {
      id: 2,
      name: "Djeddah historique",
      region: "Djeddah",
      description:
        "Al-Balad, le vieux quartier de Djeddah, est inscrit à l'UNESCO : maisons coralliennes à moucharabiehs, ruelles parfumées d'encens et port historique sur la mer Rouge.",
      wikipedia: "Jeddah",
      tags: ["Histoire", "UNESCO", "Mer Rouge"],
      mustSee: [
        { name: "Al-Balad — vieille ville (UNESCO)", wikipedia: "Al-Balad,_Jeddah" },
        { name: "Fontaine du roi Fahd (305m)", wikipedia: "File:King Fahd's Fountain.jpg" },
        { name: "Corniche de Djeddah", wikipedia: "Jeddah_Corniche" },
      ],
    },
    {
      id: 3,
      name: "Riyad",
      region: "Riyad",
      description:
        "Capitale ultramoderne en pleine transformation : Kingdom Tower, quartier Al-Ula à ciel ouvert (Diriyah), musées de classe mondiale et gastronomie internationale de plus en plus accessible.",
      wikipedia: "Riyadh",
      tags: ["Ville", "Architecture", "Culture"],
      mustSee: [
        { name: "Diriyah — capitale ottomane (UNESCO)", wikipedia: "File:At-Turaif District in ad-Dir'iyah (12).jpg" },
        { name: "Kingdom Centre Tower", wikipedia: "Kingdom_Centre" },
        { name: "Musée national d'Arabie Saoudite", wikipedia: "National_Museum_of_Saudi_Arabia" },
      ],
    },
  ],

  costOfLiving: {
    intro: "L'Arabie Saoudite est en transformation touristique. Les prix restent élevés, notamment pour l'hébergement. L'alcool est interdit.",
    currency: "SAR",
    exchangeRate: "1€ ≈ 4,05 SAR",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Hôtel 3★", price: "50–80 €", detail: "Correct, mais peu de budget" },
          { label: "Hôtel 4★", price: "100–180 €", detail: "Standard touristique" },
          { label: "Resort luxe AlUla", price: "300–600 €", detail: "Camps de luxe dans le désert" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Kabsa / shawarma local", price: "3–8 €", detail: "Riz au poulet, plat national" },
          { label: "Restaurant mid-range", price: "15–30 €", detail: "Internationale ou locale" },
          { label: "Gastronomie Riyad/Djeddah", price: "40–100 €", detail: "Restaurants internationaux premium" },
        ],
      },
      {
        id: "transport",
        icon: "🚗",
        label: "Transport",
        items: [
          { label: "Location voiture / jour", price: "35–60 €", detail: "Indispensable (peu de transports en commun)" },
          { label: "Taxi Uber / Careem", price: "5–15 €", detail: "Application recommandée" },
          { label: "Vol intérieur Riyad–AlUla", price: "80–150 €", detail: "Gain de temps" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Visite guidée Hégra (AlUla)", price: "40–80 €", detail: "Obligatoire sur le site" },
          { label: "Diriyah Experience", price: "20–40 €", detail: "Reconstitution historique" },
          { label: "Desert Safari", price: "60–120 €", detail: "Nuit sous les étoiles" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "60–90 €/j", desc: "Hôtel 3★ + restaurants locaux + location voiture", color: "#22c55e" },
      { type: "Confort", daily: "130–200 €/j", desc: "Hôtel 4★ + bonnes tables + excursions", color: "#3b82f6" },
      { type: "Luxe", daily: "400 €+/j", desc: "Resorts désert + gastronomie + privé", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Riyad (3j) → AlUla (3j) → Djeddah (3j) → Riyad (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "2 000 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Riyad", amount: "400–600 €" },
            { label: "Hébergement (10 nuits)", amount: "500–800 €" },
            { label: "Nourriture", amount: "300–450 €" },
            { label: "Location voiture & vols intérieurs", amount: "400–600 €" },
            { label: "Activités & entrées", amount: "300–500 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "4 000 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Riyad", amount: "600–900 €" },
            { label: "Hébergement (10 nuits)", amount: "1 200–2 000 €" },
            { label: "Nourriture", amount: "600–900 €" },
            { label: "Transport & vols intérieurs", amount: "600–900 €" },
            { label: "Activités & guides", amount: "500–800 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "10 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Riyad (Business)", amount: "2 000–4 000 €" },
            { label: "Resorts AlUla + hôtels luxe", amount: "3 000–5 000 €" },
            { label: "Gastronomie & expériences", amount: "1 500–3 000 €" },
            { label: "Transport privé", amount: "800–1 500 €" },
            { label: "Visites exclusives", amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~6h (Saudia, Air France, Transavia)" },
    { icon: "🪪", label: "Visa",              value: "e-Visa touristique en ligne (~117 USD, valable 1 an entrées multiples)" },
    { icon: "💰", label: "Monnaie",           value: "Riyal (1€ ≈ 4,05 SAR)" },
    { icon: "🗣️", label: "Langue",            value: "Arabe (anglais dans le tourisme)" },
    { icon: "🔌", label: "Prise électrique",  value: "Type G – 220 V (adaptateur UK)" },
    { icon: "📱", label: "Réseau",            value: "Très bonne couverture, e-SIM disponible" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille" },
    { icon: "💊", label: "Santé",             value: "Aucun vaccin obligatoire, soins modernes" },
  ],
};
