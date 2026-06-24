export const THAILAND = {
  code: "THA",
  numericId: 764,
  name: "Thaïlande",
  emoji: "🇹🇭",
  capital: "Bangkok",
  language: "Thaï",
  currency: "Baht (฿)",
  timezone: "UTC+7",
  filter: {
    budgetMin: 25, budgetMid: 70,
    tripMin: 1200, tripMid: 2500,
  },
  description:
    "La Thaïlande enchante avec ses temples dorés, ses plages de sable blanc, sa gastronomie épicée et son hospitalité légendaire. Entre la frénésie de Bangkok, la sérénité de Chiang Mai et les îles turquoise du Sud, c'est une destination qui comble tous les voyageurs.",

  bestPeriods: [
    {
      months: "Novembre – Février",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "La meilleure période : ciel bleu, chaleur agréable (25–30 °C), idéal pour visiter Bangkok, Chiang Mai et les îles.",
      icon: "☀️",
    },
    {
      months: "Mars – Avril",
      label: "Songkran",
      color: "#f9a8d4",
      description:
        "Nouvel an thaï célébré avec la fête de l'eau (Songkran). Chaleur maximale, mais ambiance festive unique.",
      icon: "💦",
    },
    {
      months: "Octobre – Novembre",
      label: "Transition",
      color: "#fb923c",
      description:
        "Fin des pluies au nord, début de la haute saison. Excellente période pour Chiang Mai et les parcs nationaux.",
      icon: "🌤",
    },
  ],

  weatherCities: [
    {
      id: "bangkok",
      name: "Bangkok",
      region: "Centre",
      data: [
        { month: "Jan", temp: 28, rain: 25,  icon: "⛅" },
        { month: "Fév", temp: 29, rain: 27,  icon: "⛅" },
        { month: "Mar", temp: 31, rain: 44,  icon: "⛅" },
        { month: "Avr", temp: 30, rain: 74,  icon: "⛅" },
        { month: "Mai", temp: 31, rain: 218, icon: "🌧️" },
        { month: "Jun", temp: 30, rain: 149, icon: "🌧️" },
        { month: "Jul", temp: 30, rain: 171, icon: "🌧️" },
        { month: "Aoû", temp: 30, rain: 208, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 308, icon: "🌧️" },
        { month: "Oct", temp: 29, rain: 275, icon: "🌧️" },
        { month: "Nov", temp: 28, rain: 50,  icon: "⛅" },
        { month: "Déc", temp: 26, rain: 10,  icon: "☀️" },
      ],
    },
    {
      id: "chiang-mai",
      name: "Chiang Mai",
      region: "Nord",
      data: [
        { month: "Jan", temp: 21, rain: 5,   icon: "☀️" },
        { month: "Fév", temp: 24, rain: 7,   icon: "☀️" },
        { month: "Mar", temp: 28, rain: 15,  icon: "⛅" },
        { month: "Avr", temp: 32, rain: 50,  icon: "🌡️" },
        { month: "Mai", temp: 29, rain: 165, icon: "🌧️" },
        { month: "Jun", temp: 28, rain: 130, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 150, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 205, icon: "🌧️" },
        { month: "Sep", temp: 26, rain: 220, icon: "⛅" },
        { month: "Oct", temp: 25, rain: 125, icon: "☀️" },
        { month: "Nov", temp: 23, rain: 30,  icon: "☀️" },
        { month: "Déc", temp: 21, rain: 8,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Bangkok",
      region: "Centre",
      description:
        "La capitale trépidante mêle temples bouddhistes majestueux, marchés flottants colorés, street food délicieuse et vie nocturne effervescente.",
      wikipedia: "Bangkok",
      tags: ["Ville", "Temples", "Gastronomie", "Shopping", "Architecture"],
      mustSee: [
        { name: "Grand Palais & Wat Phra Kaew", wikipedia: "Grand_Palace" },
        { name: "Wat Arun — Temple de l'Aurore", wikipedia: "Wat_Arun" },
        { name: "Marché flottant de Damnoen Saduak", wikipedia: "Damnoen_Saduak_Floating_Market" },
        { name: "Quartier de Chatuchak", wikipedia: "Chatuchak_Weekend_Market" },
      ],
    },
    {
      id: 2,
      name: "Chiang Mai",
      region: "Nord",
      description:
        "Capitale culturelle du nord, entourée de montagnes et de forêts. Réputée pour ses temples, ses sanctuaires d'éléphants éthiques et ses marchés artisanaux.",
      wikipedia: "Chiang_Mai",
      tags: ["Culture", "Nature", "Temples", "Artisanat", "Randonnée"],
      mustSee: [
        { name: "Wat Doi Suthep", wikipedia: "Wat_Phra_That_Doi_Suthep" },
        { name: "Vieille ville — les 300 temples", wikipedia: "File:Wat_Chiang_Man_(I).jpg" },
        { name: "Sanctuaire Elephant Nature Park", wikipedia: "Elephant_Nature_Park" },
        { name: "Marché de nuit de Chiang Mai", wikipedia: "File:Chiang_Mai_sunday_evening_walking_street.jpg" },
      ],
    },
    {
      id: 3,
      name: "Koh Samui & Îles du Golfe",
      region: "Sud (Golfe)",
      description:
        "Archipel paradisiaque avec des plages de sable blanc, des eaux cristallines et une vie nocturne animée à Koh Phangan.",
      wikipedia: "Ko_Samui",
      tags: ["Plage", "Mer", "Détente", "Fête"],
      mustSee: [
        { name: "Plage de Chaweng — Koh Samui", wikipedia: "Ko_Samui" },
        { name: "Full Moon Party — Koh Phangan", wikipedia: "Full_Moon_Party" },
        { name: "Koh Tao — plongée", wikipedia: "Ko_Tao" },
      ],
    },
    {
      id: 4,
      name: "Krabi & Îles d'Andaman",
      region: "Sud (Andaman)",
      description:
        "Falaises calcaires spectaculaires plongeant dans la mer turquoise, plages secrètes et snorkeling d'exception autour de Koh Lanta et des îles Phi Phi.",
      wikipedia: "File:Maya_Bay,_Thailand_by_Mike_Clegg_Photography.jpg",
      tags: ["Plage", "Escalade", "Snorkeling", "Paysage"],
      mustSee: [
        { name: "Railay Beach", wikipedia: "Railay_Beach" },
        { name: "Îles Phi Phi", wikipedia: "Phi_Phi_Islands" },
        { name: "Koh Lanta", wikipedia: "File:Thailand_koh_lanta_beach.jpg" },
        { name: "Tiger Cave Temple", wikipedia: "File:Wat_Tham_Sua_15.jpg" },
      ],
    },
    {
      id: 5,
      name: "Ayutthaya",
      region: "Centre",
      description:
        "Ancienne capitale du royaume de Siam, classée au patrimoine UNESCO. Ses temples en ruines et ses Bouddhas décapités témoignent d'une civilisation glorieuse.",
      wikipedia: "Ayutthaya_Historical_Park",
      tags: ["Histoire", "UNESCO", "Temples", "Culture", "Architecture"],
      mustSee: [
        { name: "Wat Mahathat — tête de Bouddha dans les racines", wikipedia: "File:Templo_Mahathat,_Ayutthaya,_Tailandia,_2013-08-23,_DD_06.jpg" },
        { name: "Wat Phra Si Sanphet", wikipedia: "Wat_Phra_Si_Sanphet" },
        { name: "Parc historique d'Ayutthaya", wikipedia: "Ayutthaya_Historical_Park" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Thaïlande est l'une des destinations les plus abordables d'Asie. La street food est délicieuse et peu chère, et les hébergements de qualité restent très accessibles.",
    currency: "THB (฿)",
    exchangeRate: "~38 ฿ = 1 €",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir hostel", price: "5–10 €", detail: "Propre et bien équipé dans les grandes villes" },
          { label: "Guesthouse simple", price: "10–20 €", detail: "Chambre privée avec ventilo ou clim basique" },
          { label: "Hôtel confort", price: "30–70 €", detail: "Chambre double avec piscine souvent incluse" },
          { label: "Resort bord de mer", price: "80–200 €", detail: "Vue mer, accès plage, prestations complètes" },
          { label: "Hôtel de luxe", price: "200–500 €", detail: "5 étoiles, spa, piscine à débordement" },
        ],
      },
      {
        id: "food",
        icon: "🍜",
        label: "Nourriture",
        items: [
          { label: "Street food (pad thaï, riz sauté)", price: "1–2 €", detail: "La meilleure nourriture du pays !" },
          { label: "Restaurant local", price: "3–6 €", detail: "Repas complet avec boisson" },
          { label: "Restaurant touristique", price: "8–15 €", detail: "Curry, soupe tom yum, poisson grillé" },
          { label: "Restaurant occidental", price: "10–20 €", detail: "Pizza, burger, sushi" },
          { label: "Smoothie tropical", price: "1–2 €", detail: "Mangue, pastèque, noix de coco" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Tuk-tuk (trajet court)", price: "1–3 €", detail: "Négocier le prix avant de monter" },
          { label: "Grab (taxi appli)", price: "2–8 €", detail: "Prix fixe, très pratique" },
          { label: "Bus BTS/MRT (Bangkok)", price: "0,50–1,50 €", detail: "Réseau de métro efficace" },
          { label: "Bus longue distance", price: "5–15 €", detail: "Chiang Mai–Bangkok ~10 €" },
          { label: "Vol intérieur", price: "20–60 €", detail: "AirAsia, Nok Air — très abordable" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Entrée temple (ex. Wat Pho)", price: "5–8 €", detail: "La plupart des grands temples sont payants" },
          { label: "Cours de cuisine thaïe", price: "25–50 €", detail: "Inclut visite marché et repas" },
          { label: "Demi-journée snorkeling", price: "20–40 €", detail: "Tour en bateau + équipement" },
          { label: "Massage thaïlandais (1h)", price: "5–10 €", detail: "Expérience incontournable !" },
          { label: "Visite sanctuaire éléphants", price: "60–90 €", detail: "Journée complète, repas inclus" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "25–40 €/j", desc: "Street food + guesthouse + transports locaux", color: "#22c55e" },
      { type: "Confort", daily: "70–120 €/j", desc: "Hôtel confort + restos mid-range + activités", color: "#3b82f6" },
      { type: "Luxe", daily: "200 €+/j", desc: "Resort 5★ + gastronomie + excursions privées", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Bangkok (3j) → Chiang Mai (4j) → Krabi (4j) → Koh Samui (3j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 200 – 1 600 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Bangkok", amount: "450–700 €" },
            { label: "Vols intérieurs", amount: "60–100 €" },
            { label: "Hébergement (14 nuits)", amount: "120–200 €" },
            { label: "Nourriture", amount: "150–250 €" },
            { label: "Activités & imprévus", amount: "150–250 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 500 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Bangkok", amount: "600–900 €" },
            { label: "Vols intérieurs", amount: "100–150 €" },
            { label: "Hébergement (14 nuits)", amount: "700–1 000 €" },
            { label: "Nourriture", amount: "500–700 €" },
            { label: "Activités & imprévus", amount: "400–600 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "5 000 € +",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Bangkok (business)", amount: "1 500–3 000 €" },
            { label: "Transferts privés", amount: "200–400 €" },
            { label: "Hébergement resorts (14 nuits)", amount: "1 500–3 000 €" },
            { label: "Gastronomie & spa", amount: "800–1 500 €" },
            { label: "Excursions privées", amount: "500–1 000 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~11h direct (Thai Airways, Air France)" },
    { icon: "🪪", label: "Visa", value: "Sans visa pour les Français — 60 jours (étendu à 60 jours depuis novembre 2023)" },
    { icon: "💰", label: "Monnaie", value: "Baht thaïlandais (฿) — retrait DAB conseillé" },
    { icon: "🗣️", label: "Langue", value: "Thaï — anglais touristique dans les zones visitées" },
    { icon: "🔌", label: "Prise électrique", value: "Type A/B/C — 220V (adaptateur universel recommandé)" },
    { icon: "📱", label: "Réseau", value: "SIM locale très abordable (~5 €/mois illimité)" },
    { icon: "🚰", label: "Eau du robinet", value: "Non potable — boire eau en bouteille" },
    { icon: "💊", label: "Santé", value: "Vaccins hépatite A/B recommandés, anti-moustiques indispensables" },
  ],
};
