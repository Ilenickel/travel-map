export const MYANMAR = {
  code: "MMR",
  numericId: 104,
  name: "Myanmar",
  emoji: "🇲🇲",
  capital: "Naypyidaw",
  language: "Birman",
  currency: "Kyat birman (MMK)",
  timezone: "UTC+6:30",
  filter: {
    budgetMin: 30,
    budgetMid: 60,
    tripMin: 1100,
    tripMid: 2200,
  },
  description:
    "Le Myanmar (Birmanie) est une destination d'une beauté et d'une profondeur spirituelle exceptionnelles : la plaine de Bagan avec ses milliers de temples bouddhistes, le lac Inle et ses pêcheurs sur pirogues, Mandalay et ses monastères. Note : vérifiez les conseils aux voyageurs avant de partir en raison de la situation politique.",

  bestPeriods: [
    {
      months: "Novembre – Février",
      label: "Saison sèche et fraîche",
      color: "#fbbf24",
      description:
        "Meilleure période : températures agréables (20–30 °C), pas de pluie, idéal pour Bagan et le lac Inle.",
      icon: "☀️",
    },
    {
      months: "Mars – Mai",
      label: "Chaud et sec",
      color: "#fb923c",
      description:
        "Très chaud (35–40 °C) mais encore sec. Moins de touristes, couchers de soleil spectaculaires sur Bagan.",
      icon: "🌅",
    },
  ],

  weatherCities: [
    {
      id: "yangon",
      name: "Yangon",
      region: "Yangon (ancienne capitale)",
      data: [
        { month: "Jan", temp: 25, rain: 5, icon: "☀️" },
        { month: "Fév", temp: 27, rain: 3, icon: "⛅" },
        { month: "Mar", temp: 30, rain: 10, icon: "⛅" },
        { month: "Avr", temp: 32, rain: 30, icon: "🌡️" },
        { month: "Mai", temp: 30, rain: 275, icon: "🌧️" },
        { month: "Jun", temp: 28, rain: 485, icon: "🌧️" },
        { month: "Jul", temp: 27, rain: 570, icon: "🌧️" },
        { month: "Aoû", temp: 27, rain: 535, icon: "🌧️" },
        { month: "Sep", temp: 27, rain: 390, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 200, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 65, icon: "⛅" },
        { month: "Déc", temp: 25, rain: 8, icon: "☀️" },
      ],
    },
    {
      id: "mandalay",
      name: "Mandalay",
      region: "Mandalay",
      data: [
        { month: "Jan", temp: 21, rain: 8, icon: "☀️" },
        { month: "Fév", temp: 24, rain: 8, icon: "☀️" },
        { month: "Mar", temp: 29, rain: 15, icon: "⛅" },
        { month: "Avr", temp: 33, rain: 45, icon: "🌡️" },
        { month: "Mai", temp: 31, rain: 120, icon: "🌧️" },
        { month: "Jun", temp: 29, rain: 130, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 160, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 155, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 130, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 100, icon: "🌧️" },
        { month: "Nov", temp: 24, rain: 40, icon: "☀️" },
        { month: "Déc", temp: 21, rain: 10, icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Bagan",
      region: "Mandalay",
      description:
        "La plaine de Bagan abrite plus de 2 000 temples et pagodes bouddhistes construits entre le Xe et XIIIe siècle. Au lever et coucher du soleil, ce paysage mystique depuis une montgolfière est l'une des expériences visuelles les plus saisissantes d'Asie.",
      wikipedia: "Bagan",
      tags: ["temples", "archéologie", "montgolfière", "spiritualité"],
      mustSee: [
        { name: "Ananda Temple", wikipedia: "File:20160801 Ananda Temple Bagan Myanmar 6682.jpg" },
        { name: "Dhammayangyi Temple", wikipedia: "Dhammayangyi_Temple" },
        { name: "Shwezigon Pagoda", wikipedia: "Shwezigon_Pagoda" },
        { name: "Mongolfière au lever du soleil", wikipedia: "Bagan" },
      ],
    },
    {
      id: 2,
      name: "Lac Inle",
      region: "Shan",
      description:
        "Le lac Inle est célèbre pour ses pêcheurs manœuvrant leur pirogue avec une seule jambe enroulée autour de la rame. Jardins flottants, monastères sur pilotis et villages de tisserands s'y reflètent dans des eaux calmes et brumeuses.",
      wikipedia: "Inle_Lake",
      tags: ["lac", "culture", "pêcheurs", "artisanat"],
      mustSee: [
        { name: "Pêcheurs à la jambe-rame", wikipedia: "File:20160805 Inle Lake 7434.jpg" },
        { name: "Phaung Daw Oo Pagoda", wikipedia: "File:Phaung Daw Oo Paya Pagoda.jpg" },
        { name: "Jardins flottants Inle", wikipedia: "File:Inle Lake, House on the lake, Myanmar.jpg" },
      ],
    },
    {
      id: 3,
      name: "Mandalay",
      region: "Mandalay",
      description:
        "Ancienne capitale royale, Mandalay est le centre culturel et bouddhiste de la Birmanie. Ses monastères en teck, le Palais Royal reconstruit, le Pont U Bein (le plus long en teck du monde) et les ateliers d'artisans en font une étape incontournable.",
      wikipedia: "Mandalay",
      tags: ["histoire", "bouddhisme", "artisanat", "culture"],
      mustSee: [
        { name: "Pont U Bein", wikipedia: "U_Bein_Bridge" },
        { name: "Mandalay Hill", wikipedia: "Mandalay_Hill" },
        { name: "Mahamuni Pagoda", wikipedia: "Mahamuni_Buddha_Temple" },
        { name: "Monastère Shwenandaw", wikipedia: "Shwenandaw_Monastery" },
      ],
    },
    {
      id: 4,
      name: "Yangon",
      region: "Yangon",
      description:
        "L'ancienne capitale est une ville fascinante aux influences coloniales britanniques et bouddhistes. La Shwedagon Pagoda, couverte d'or, est le monument le plus sacré du Myanmar. Le quartier colonial est parmi les mieux préservés d'Asie du Sud-Est.",
      wikipedia: "Yangon",
      tags: ["pagode", "colonial", "histoire", "culture"],
      mustSee: [
        { name: "Shwedagon Pagoda", wikipedia: "Shwedagon_Pagoda" },
        { name: "Bogyoke Aung San Market", wikipedia: "File:Bogyoke Aung San Market inside.jpg" },
        { name: "Sule Pagoda", wikipedia: "Sule_Pagoda" },
        { name: "Quartier colonial (Downtown Yangon)", wikipedia: "Downtown_Yangon" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "Le Myanmar est une destination abordable. Le kyat local est utilisé localement mais le dollar américain était historiquement très accepté pour les services touristiques.",
    currency: "Kyat birman (MMK)",
    exchangeRate: "1€ ≈ 2 000–2 500 MMK (taux fluctuant)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir guesthouse", price: "5–10 €", detail: "Yangon, Bagan, Mandalay" },
          { label: "Chambre double guesthouse", price: "15–35 €", detail: "Bon confort avec AC" },
          { label: "Hôtel boutique 4★", price: "60–150 €", detail: "Bagan ou Inle Lake avec vue" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Mohinga (soupe nationale)", price: "0,50–1 €", detail: "Petit-déjeuner birman classique" },
          { label: "Repas dans une tea house", price: "1,50–3 €", detail: "Riz + curry + légumes, très typique" },
          { label: "Restaurant touristique", price: "5–15 €", detail: "Cuisine birmane ou internationale" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus express Yangon–Bagan (nuit, 8h)", price: "8–15 €", detail: "Confortable, AC, départ nocturne" },
          { label: "Vol intérieur (ex: Yangon–Mandalay)", price: "30–80 €", detail: "KBZ Air ou Air KBZ, 1h de vol" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Entrée Bagan (zone archéologique)", price: "20–25 €", detail: "Valable plusieurs jours" },
          { label: "Montgolfière Bagan", price: "300–400 €", detail: "Coucher/lever de soleil, 1h de vol" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "30–50 €/j", desc: "Guesthouse, tea house, bus, excursions budget", color: "#22c55e" },
      { type: "Confort", daily: "60–100 €/j", desc: "Hôtel 3★, restaurants, vols intérieurs", color: "#3b82f6" },
      { type: "Luxe", daily: "200 €+/j", desc: "Lodge 5★ Inle, montgolfière, tours privés", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Yangon – Bagan – Mandalay – Lac Inle",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 100 – 1 600 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Yangon", amount: "550–800 €" },
            { label: "Hébergement (14 nuits)", amount: "150–250 €" },
            { label: "Nourriture", amount: "130–200 €" },
            { label: "Transport local + bus/train", amount: "100–200 €" },
            { label: "Activités & imprévus", amount: "100–200 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 200 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Yangon", amount: "700–1 000 €" },
            { label: "Hébergement (14 nuits)", amount: "600–900 €" },
            { label: "Nourriture", amount: "350–500 €" },
            { label: "Transport + vols intérieurs", amount: "300–500 €" },
            { label: "Activités & imprévus", amount: "200–350 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "5 500 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Yangon (Business)", amount: "2 500–3 500 €" },
            { label: "Hébergement (14 nuits)", amount: "1 200–1 800 €" },
            { label: "Montgolfière Bagan", amount: "400–600 €" },
            { label: "Transport & excursions privées", amount: "400–600 €" },
            { label: "Nourriture & restaurants", amount: "300–450 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~13–15h avec escale (Bangkok, Singapour, KL)" },
    { icon: "🪪", label: "Visa", value: "e-Visa recommandé (50 USD) — vérifiez la situation actuelle" },
    { icon: "💰", label: "Monnaie", value: "Kyat birman (1€ ≈ 2 000–2 500 MMK) — USD utiles" },
    { icon: "🗣️", label: "Langue", value: "Birman (l'anglais est parlé dans le tourisme)" },
    { icon: "🔌", label: "Prise électrique", value: "Type A/C/D/G – 230 V (adaptateur universel)" },
    { icon: "📱", label: "Réseau", value: "4G dans les grandes villes, SIM locale à l'arrivée" },
    { icon: "🚰", label: "Eau du robinet", value: "Non potable, eau en bouteille indispensable" },
    { icon: "💊", label: "Santé", value: "Antipaludéens recommandés pour les zones rurales, vaccins hépatite A/B" },
  ],
};
