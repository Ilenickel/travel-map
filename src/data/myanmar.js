export const MYANMAR = {
  code: "MMR",
  numericId: 104,
  name: { fr: "Myanmar", en: "Myanmar" },
  emoji: "🇲🇲",
  capital: { fr: "Naypyidaw", en: "Naypyidaw" },
  language: { fr: "Birman", en: "Burmese" },
  currency: { fr: "Kyat birman (MMK)", en: "Burmese kyat (MMK)" },
  timezone: "UTC+6:30",
  filter: {
    budgetMin: 30,
    budgetMid: 60,
    tripMin: 1100,
    tripMid: 2200,
  },
  description: {
    fr: "Le Myanmar (Birmanie) est une destination d'une beauté et d'une profondeur spirituelle exceptionnelles : la plaine de Bagan avec ses milliers de temples bouddhistes, le lac Inle et ses pêcheurs sur pirogues, Mandalay et ses monastères. Note : vérifiez les conseils aux voyageurs avant de partir en raison de la situation politique.",
    en: "Myanmar (Burma) is a destination of exceptional beauty and spiritual depth: the plain of Bagan with its thousands of Buddhist temples, Inle Lake and its canoe fishermen, Mandalay and its monasteries. Note: check travel advisories before departure due to the political situation.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Février", en: "November – February" },
      label: { fr: "Saison sèche et fraîche", en: "Cool dry season" },
      color: "#fbbf24",
      description: {
        fr: "Meilleure période : températures agréables (20–30 °C), pas de pluie, idéal pour Bagan et le lac Inle.",
        en: "Best period: pleasant temperatures (20–30 °C), no rain, ideal for Bagan and Inle Lake.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Mars – Mai", en: "March – May" },
      label: { fr: "Chaud et sec", en: "Hot and dry" },
      color: "#fb923c",
      description: {
        fr: "Très chaud (35–40 °C) mais encore sec. Moins de touristes, couchers de soleil spectaculaires sur Bagan.",
        en: "Very hot (35–40 °C) but still dry. Fewer tourists, spectacular sunsets over Bagan.",
      },
      icon: "🌅",
    },
  ],

  weatherCities: [
    {
      id: "yangon",
      name: "Yangon",
      region: { fr: "Yangon (ancienne capitale)", en: "Yangon (former capital)" },
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
      region: { fr: "Mandalay", en: "Mandalay" },
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
      region: { fr: "Mandalay", en: "Mandalay" },
      description: {
        fr: "La plaine de Bagan abrite plus de 2 000 temples et pagodes bouddhistes construits entre le Xe et XIIIe siècle. Au lever et coucher du soleil, ce paysage mystique depuis une montgolfière est l'une des expériences visuelles les plus saisissantes d'Asie.",
        en: "The plain of Bagan is home to more than 2,000 Buddhist temples and pagodas built between the 10th and 13th centuries. At sunrise and sunset, this mystical landscape seen from a hot-air balloon is one of the most striking visual experiences in Asia.",
      },
      wikipedia: "Bagan",
      tags: ["temples", "archéologie", "montgolfière", "spiritualité", "UNESCO", "Architecture", "Désert"],
      mustSee: [
        { name: "Ananda Temple", wikipedia: "File:20160801 Ananda Temple Bagan Myanmar 6682.jpg" },
        { name: "Dhammayangyi Temple", wikipedia: "Dhammayangyi_Temple" },
        { name: "Shwezigon Pagoda", wikipedia: "Shwezigon_Pagoda" },
        { name: { fr: "Montgolfière au lever du soleil", en: "Hot-air balloon at sunrise" }, wikipedia: "Bagan" },
      ],
    },
    {
      id: 2,
      name: { fr: "Lac Inle", en: "Inle Lake" },
      region: { fr: "Shan", en: "Shan" },
      description: {
        fr: "Le lac Inle est célèbre pour ses pêcheurs manœuvrant leur pirogue avec une seule jambe enroulée autour de la rame. Jardins flottants, monastères sur pilotis et villages de tisserands s'y reflètent dans des eaux calmes et brumeuses.",
        en: "Inle Lake is famous for its fishermen who row their canoe with one leg wrapped around the oar. Floating gardens, stilted monasteries and weaving villages reflect on its calm, misty waters.",
      },
      wikipedia: "Inle_Lake",
      tags: ["lac", "Culture", "pêcheurs", "artisanat"],
      mustSee: [
        { name: { fr: "Pêcheurs à la jambe-rame", en: "Leg-rowing fishermen" }, wikipedia: "File:20160805 Inle Lake 7434.jpg" },
        { name: "Phaung Daw Oo Pagoda", wikipedia: "File:Phaung Daw Oo Paya Pagoda.jpg" },
        { name: { fr: "Jardins flottants Inle", en: "Inle floating gardens" }, wikipedia: "File:Inle Lake, House on the lake, Myanmar.jpg" },
      ],
    },
    {
      id: 3,
      name: "Mandalay",
      region: { fr: "Mandalay", en: "Mandalay" },
      description: {
        fr: "Ancienne capitale royale, Mandalay est le centre culturel et bouddhiste de la Birmanie. Ses monastères en teck, le Palais Royal reconstruit, le Pont U Bein (le plus long en teck du monde) et les ateliers d'artisans en font une étape incontournable.",
        en: "Former royal capital, Mandalay is Burma's cultural and Buddhist centre. Its teak monasteries, the rebuilt Royal Palace, U Bein Bridge (the world's longest teak bridge) and craft workshops make it an essential stop.",
      },
      wikipedia: "Mandalay",
      tags: ["Histoire", "bouddhisme", "artisanat", "Culture", "Ville", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Pont U Bein", en: "U Bein Bridge" }, wikipedia: "U_Bein_Bridge" },
        { name: "Mandalay Hill", wikipedia: "Mandalay_Hill" },
        { name: "Mahamuni Pagoda", wikipedia: "Mahamuni_Buddha_Temple" },
        { name: { fr: "Monastère Shwenandaw", en: "Shwenandaw Monastery" }, wikipedia: "Shwenandaw_Monastery" },
      ],
    },
    {
      id: 4,
      name: "Yangon",
      region: { fr: "Yangon", en: "Yangon" },
      description: {
        fr: "L'ancienne capitale est une ville fascinante aux influences coloniales britanniques et bouddhistes. La Shwedagon Pagoda, couverte d'or, est le monument le plus sacré du Myanmar. Le quartier colonial est parmi les mieux préservés d'Asie du Sud-Est.",
        en: "The former capital is a fascinating city of British colonial and Buddhist influences. The gold-covered Shwedagon Pagoda is Myanmar's most sacred monument. Its colonial quarter is among the best preserved in Southeast Asia.",
      },
      wikipedia: "Yangon",
      tags: ["pagode", "colonial", "Histoire", "Culture", "Ville", "Architecture"],
      mustSee: [
        { name: "Shwedagon Pagoda", wikipedia: "Shwedagon_Pagoda" },
        { name: "Bogyoke Aung San Market", wikipedia: "File:Bogyoke Aung San Market inside.jpg" },
        { name: "Sule Pagoda", wikipedia: "Sule_Pagoda" },
        { name: { fr: "Quartier colonial (Downtown Yangon)", en: "Colonial quarter (Downtown Yangon)" }, wikipedia: "Downtown_Yangon" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Myanmar est une destination abordable. Le kyat local est utilisé localement mais le dollar américain était historiquement très accepté pour les services touristiques.",
      en: "Myanmar is an affordable destination. The local kyat is used day-to-day, but US dollars have historically been widely accepted for tourist services.",
    },
    currency: { fr: "Kyat birman (MMK)", en: "Burmese kyat (MMK)" },
    exchangeRate: "1€ ≈ 2 000–2 500 MMK (taux fluctuant)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Dortoir guesthouse", en: "Guesthouse dorm" }, price: "5–10 €", detail: { fr: "Yangon, Bagan, Mandalay", en: "Yangon, Bagan, Mandalay" } },
          { label: { fr: "Chambre double guesthouse", en: "Guesthouse double room" }, price: "15–35 €", detail: { fr: "Bon confort avec AC", en: "Good comfort with AC" } },
          { label: { fr: "Hôtel boutique 4★", en: "4★ boutique hotel" }, price: "60–150 €", detail: { fr: "Bagan ou Inle Lake avec vue", en: "Bagan or Inle Lake with a view" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Mohinga (soupe nationale)", en: "Mohinga (national soup)" }, price: "0,50–1 €", detail: { fr: "Petit-déjeuner birman classique", en: "Classic Burmese breakfast" } },
          { label: { fr: "Repas dans une tea house", en: "Meal at a tea house" }, price: "1,50–3 €", detail: { fr: "Riz + curry + légumes, très typique", en: "Rice + curry + vegetables, very typical" } },
          { label: { fr: "Restaurant touristique", en: "Tourist restaurant" }, price: "5–15 €", detail: { fr: "Cuisine birmane ou internationale", en: "Burmese or international cuisine" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus express Yangon–Bagan (nuit, 8h)", en: "Express bus Yangon–Bagan (overnight, 8h)" }, price: "8–15 €", detail: { fr: "Confortable, AC, départ nocturne", en: "Comfortable, AC, overnight departure" } },
          { label: { fr: "Vol intérieur (ex: Yangon–Mandalay)", en: "Domestic flight (e.g. Yangon–Mandalay)" }, price: "30–80 €", detail: { fr: "KBZ Air ou Air KBZ, 1h de vol", en: "KBZ Air or Air KBZ, 1h flight" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités & Culture", en: "Activities & Culture" },
        items: [
          { label: { fr: "Entrée Bagan (zone archéologique)", en: "Bagan entrance (archaeological zone)" }, price: "20–25 €", detail: { fr: "Valable plusieurs jours", en: "Valid for several days" } },
          { label: { fr: "Montgolfière Bagan", en: "Bagan hot-air balloon" }, price: "300–400 €", detail: { fr: "Coucher/lever de soleil, 1h de vol", en: "Sunrise/sunset, 1h flight" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "30–50 €/j", desc: { fr: "Guesthouse, tea house, bus, excursions budget", en: "Guesthouse, tea house, bus, budget excursions" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "60–100 €/j", desc: { fr: "Hôtel 3★, restaurants, vols intérieurs", en: "3★ hotel, restaurants, domestic flights" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "200 €+/j", desc: { fr: "Lodge 5★ Inle, montgolfière, tours privés", en: "5★ Inle lodge, hot-air balloon, private tours" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks" },
      route: { fr: "Yangon – Bagan – Mandalay – Lac Inle", en: "Yangon – Bagan – Mandalay – Inle Lake" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 100 – 1 600 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Yangon", en: "Return flight Paris–Yangon" }, amount: "550–800 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "150–250 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "130–200 €" },
            { label: { fr: "Transport local + bus/train", en: "Local transport + bus/train" }, amount: "100–200 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "100–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 200 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Yangon", en: "Return flight Paris–Yangon" }, amount: "700–1 000 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "600–900 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "350–500 €" },
            { label: { fr: "Transport + vols intérieurs", en: "Transport + domestic flights" }, amount: "300–500 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "200–350 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "5 500 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Yangon (Business)", en: "Return flight Paris–Yangon (Business)" }, amount: "2 500–3 500 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "1 200–1 800 €" },
            { label: { fr: "Montgolfière Bagan", en: "Bagan hot-air balloon" }, amount: "400–600 €" },
            { label: { fr: "Transport & excursions privées", en: "Transport & private excursions" }, amount: "400–600 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "300–450 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~13–15h avec escale (Bangkok, Singapour, KL)", en: "~13–15h with a layover (Bangkok, Singapore, KL)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "e-Visa recommandé (50 USD) — vérifiez la situation actuelle", en: "e-Visa recommended (50 USD) — check the current situation" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Kyat birman (1€ ≈ 2 000–2 500 MMK) — USD utiles", en: "Burmese kyat (1€ ≈ 2,000–2,500 MMK) — USD useful" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Birman (l'anglais est parlé dans le tourisme)", en: "Burmese (English spoken in tourism)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type A/C/D/G – 230 V (adaptateur universel)", en: "Type A/C/D/G – 230 V (universal adapter)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "4G dans les grandes villes, SIM locale à l'arrivée", en: "4G in major cities, local SIM on arrival" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable, eau en bouteille indispensable", en: "Not drinkable, bottled water essential" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéens recommandés pour les zones rurales, vaccins hépatite A/B", en: "Antimalarials recommended for rural areas, hepatitis A/B vaccines" } },
  ],
};
