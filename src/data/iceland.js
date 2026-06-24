export const ICELAND = {
  code: "ISL",
  numericId: 352,
  name: "Islande",
  emoji: "🇮🇸",
  capital: "Reykjavik",
  language: "Islandais",
  currency: "Couronne islandaise (kr)",
  timezone: "UTC+0",
  filter: {
    budgetMin: 80, budgetMid: 160,
    tripMin: 2200, tripMid: 4000,
  },
  description:
    "L'Islande est une destination de bout du monde, terra d'aurores boréales, de geysers, de volcans actifs, de glaciers immenses et de cascades spectaculaires. Le pays du feu et de la glace, avec Reykjavik la capitale la plus nordique du monde, offre des paysages d'une beauté surnaturelle.",

  bestPeriods: [
    {
      months: "Juin – Août",
      label: "Soleil de minuit",
      color: "#22c55e",
      description:
        "Jours quasi sans nuit (soleil de minuit), météo la plus clémente, routes accessibles dont les Highlands. Cascades en plein débit.",
      icon: "🌞",
    },
    {
      months: "Septembre – Novembre",
      label: "Aurores boréales",
      color: "#a78bfa",
      description:
        "Premières aurores boréales visibles, températures encore correctes, couleurs automnales spectaculaires. Moins de foule.",
      icon: "🌌",
    },
    {
      months: "Décembre – Mars",
      label: "Hiver & Aurores",
      color: "#93c5fd",
      description:
        "Saison des aurores boréales par excellence. Nuits longues, paysages enneigés féeriques, lacs glacés. Prévoir équipement chaud.",
      icon: "❄️",
    },
  ],

  weatherCities: [
    {
      id: "reykjavik",
      name: "Reykjavik",
      region: "Région capitale",
      data: [
        { month: "Jan", temp: 0,  rain: 70,  icon: "❄️" },
        { month: "Fév", temp: 0,  rain: 80,  icon: "❄️" },
        { month: "Mar", temp: 1,  rain: 75,  icon: "❄️" },
        { month: "Avr", temp: 3,  rain: 50,  icon: "❄️" },
        { month: "Mai", temp: 7,  rain: 50,  icon: "⛅" },
        { month: "Jun", temp: 10, rain: 40,  icon: "⛅" },
        { month: "Jul", temp: 12, rain: 50,  icon: "⛅" },
        { month: "Aoû", temp: 12, rain: 60,  icon: "⛅" },
        { month: "Sep", temp: 9,  rain: 60,  icon: "⛅" },
        { month: "Oct", temp: 5,  rain: 65,  icon: "❄️" },
        { month: "Nov", temp: 2,  rain: 70,  icon: "❄️" },
        { month: "Déc", temp: 1,  rain: 85,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Cercle d'Or (Golden Circle)",
      region: "Sud-Ouest",
      description:
        "Circuit incontournable depuis Reykjavik : le geyser Strokkur, le parc national de Þingvellir (naissance de la démocratie, faille tectonique) et les chutes de Gullfoss.",
      wikipedia: "Golden_Circle_(Iceland)",
      tags: ["Nature", "Géologie", "Paysage", "Geyser", "UNESCO"],
      mustSee: [
        { name: "Geyser Strokkur", wikipedia: "Strokkur" },
        { name: "Chutes de Gullfoss", wikipedia: "Gullfoss" },
        { name: "Parc national de Þingvellir", wikipedia: "Þingvellir" },
        { name: "Lac Kerid — cratère volcanique", wikipedia: "Kerið" },
      ],
    },
    {
      id: 2,
      name: "Côte Sud & Jökulsárlón",
      region: "Sud",
      description:
        "La route côtière la plus spectaculaire d'Islande : cascades de Seljalandsfoss et Skógafoss, plage de sable noir de Reynisfjara et le lac glaciaire de Jökulsárlón avec ses icebergs.",
      wikipedia: "Jökulsárlón",
      tags: ["Nature", "Glacier", "Plage", "Paysage", "Randonnée"],
      mustSee: [
        { name: "Jökulsárlón — lac des icebergs", wikipedia: "Jökulsárlón" },
        { name: "Plage de sable noir Reynisfjara", wikipedia: "Reynisfjara" },
        { name: "Cascades Seljalandsfoss", wikipedia: "Seljalandsfoss" },
        { name: "Skógafoss & sentier de randonnée", wikipedia: "Skógafoss" },
      ],
    },
    {
      id: 3,
      name: "Snæfellsnes",
      region: "Ouest",
      description:
        "Péninsule glaciaire inspirée par Jules Verne (Voyage au centre de la Terre). Glacier Snæfellsjökull, falaises de basalte, villages de pêcheurs et aurores boréales.",
      wikipedia: "File:View_from_Helgafell,_Snæfellsnes_peninsula,_Iceland,_20230505_1513_5245.jpg",
      tags: ["Nature", "Glacier", "Paysage", "Aurores boréales", "Randonnée"],
      mustSee: [
        { name: "Glacier Snæfellsjökull", wikipedia: "Snæfellsjökull" },
        { name: "Falaises de Lóndrangar", wikipedia: "Lóndrangar" },
        { name: "Village de Arnarstapi", wikipedia: "Arnarstapi" },
        { name: "Plage de Djúpalónssandur", wikipedia: "File:Dritvik - Djúpalónssandur 03 HDR (1416785147).jpg" },
      ],
    },
    {
      id: 4,
      name: "Reykjavik",
      region: "Région capitale",
      description:
        "La plus petite capitale du monde est surprenante : architecture colorée, scène culturelle vibrante, restaurants de nouvelle cuisine nordique et le Blue Lagoon à 40 min.",
      wikipedia: "File:View of Reykjavík from Hallgrímskirkja, 20230507 1227 5715.jpg",
      tags: ["Ville", "Culture", "Gastronomie", "Spa", "Histoire", "Architecture"],
      mustSee: [
        { name: "Hallgrímskirkja — cathédrale emblématique", wikipedia: "Hallgrímskirkja" },
        { name: "Blue Lagoon", wikipedia: "Blue_Lagoon_(geothermal_spa)" },
        { name: "Old Harbour & marché alimentaire", wikipedia: "File:Reykjavik old harbour (6046082168).jpg" },
        { name: "Musée national d'Islande", wikipedia: "National_Museum_of_Iceland" },
      ],
    },
  ],

  costOfLiving: {
    intro: "L'Islande est l'une des destinations les plus chères d'Europe. Prévoyez un budget conséquent, notamment pour l'hébergement et la restauration. Location de voiture indispensable hors Reykjavik.",
    currency: "ISK (kr)",
    exchangeRate: "~150 kr = 1 €",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Camping (été seulement)", price: "15–25 €", detail: "Réseau de campings bien équipés" },
          { label: "Dortoir hostel", price: "35–55 €", detail: "Assez cher pour un dortoir, mais pratique" },
          { label: "Guesthouse / ferme", price: "80–150 €", detail: "Ambiance authentique, souvent isolée" },
          { label: "Hôtel confort", price: "150–280 €", detail: "Standard correct dans les villes" },
          { label: "Hôtel de luxe", price: "300–600 €", detail: "Reykjavik, lieux insolites avec vue" },
        ],
      },
      {
        id: "food",
        icon: "🍜",
        label: "Nourriture",
        items: [
          { label: "Hot-dog isl. (Bæjarins beztu)", price: "3–4 €", detail: "Institution nationale — file d'attente assurée" },
          { label: "Boulangerie / café", price: "5–10 €", detail: "Skyr, pain de seigle, cinnamon roll" },
          { label: "Restaurant casual", price: "20–35 €", detail: "Fish & chips, burger islandais" },
          { label: "Restaurant mid-range", price: "35–60 €", detail: "Agneau islandais, saumon, skyr" },
          { label: "Restaurant gastronomique", price: "80–150 €", detail: "Nouvelle cuisine nordique, exceptionnel" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus Reykjavik (Strætó)", price: "3,50 €", detail: "Réseau limité à la capitale" },
          { label: "Location de voiture compacte", price: "60–100 €/j", detail: "Indispensable pour le Ring Road" },
          { label: "Location 4x4", price: "100–200 €/j", detail: "Obligatoire pour les Highlands (pistes F)" },
          { label: "Bus Reykjavik–Golden Circle (tour)", price: "60–100 €", detail: "Excursion organisée depuis Reykjavik" },
          { label: "Ferry Westfjords", price: "20–50 €", detail: "Baldur Ferry — scenic" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Blue Lagoon (entrée standard)", price: "60–100 €", detail: "Réservation obligatoire des semaines à l'avance" },
          { label: "Tour aurores boréales", price: "50–80 €", detail: "Minibus nocturne, conditions météo non garanties" },
          { label: "Randonnée sur glacier guidée", price: "50–100 €", detail: "Crampons et guide inclus — incontournable" },
          { label: "Snorkeling / plongée à Þingvellir", price: "80–150 €", detail: "Dans la faille entre deux plaques tectoniques" },
          { label: "Observation des baleines (Húsavík)", price: "60–90 €", detail: "Meilleures chances mai–août" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "80–120 €/j", desc: "Camping + cuisine maison + voiture partagée", color: "#22c55e" },
      { type: "Confort", daily: "160–260 €/j", desc: "Guesthouse + restos + activités", color: "#3b82f6" },
      { type: "Luxe", daily: "400 €+/j", desc: "Hôtel 5★ + gastronomie nordique + expériences premium", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Reykjavik (2j) → Golden Circle (1j) → Côte Sud (2j) → Jökulsárlón (1j) → Highlands (2j) → Nord (3j) → Snæfellsnes (2j) → Reykjavik (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "2 200 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Reykjavik", amount: "150–400 €" },
            { label: "Location de voiture (14j)", amount: "700–1 000 €" },
            { label: "Hébergement (campings + hostels)", amount: "400–600 €" },
            { label: "Nourriture (supermarché + restos budget)", amount: "400–600 €" },
            { label: "Activités (Blue Lagoon, glacier...)", amount: "350–550 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "4 000 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Reykjavik", amount: "200–500 €" },
            { label: "Location de voiture 4x4 (14j)", amount: "1 000–1 500 €" },
            { label: "Hébergement guesthouses (14 nuits)", amount: "1 200–2 000 €" },
            { label: "Nourriture & restaurants", amount: "800–1 200 €" },
            { label: "Activités & imprévus", amount: "600–900 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "8 000 € +",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Reykjavik (business)", amount: "800–2 000 €" },
            { label: "Location SUV premium (14j)", amount: "1 500–2 500 €" },
            { label: "Hôtels & lodges luxe (14 nuits)", amount: "3 000–6 000 €" },
            { label: "Gastronomie nordique & Blue Lagoon premium", amount: "1 000–2 000 €" },
            { label: "Expériences privées & imprévus", amount: "800–1 500 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~3h direct (Icelandair, easyJet, Vueling)" },
    { icon: "🪪", label: "Visa", value: "Pas de visa (espace Schengen)" },
    { icon: "💰", label: "Monnaie", value: "Couronne islandaise (kr) — carte bancaire acceptée partout" },
    { icon: "🗣️", label: "Langue", value: "Islandais — anglais parfaitement parlé partout" },
    { icon: "🔌", label: "Prise électrique", value: "Type C/F — 230V (même qu'en France)" },
    { icon: "📱", label: "Réseau", value: "Roaming européen inclus — réseau excellent sur Ring Road" },
    { icon: "🚰", label: "Eau du robinet", value: "Excellente, parmi la meilleure eau du monde" },
    { icon: "💊", label: "Santé", value: "Carte européenne d'assurance maladie valide, aucun risque sanitaire" },
  ],
};
