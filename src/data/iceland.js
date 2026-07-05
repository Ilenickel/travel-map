export const ICELAND = {
  code: "ISL",
  numericId: 352,
  name: { fr: "Islande", en: "Iceland" },
  emoji: "🇮🇸",
  capital: { fr: "Reykjavik", en: "Reykjavik" },
  language: { fr: "Islandais", en: "Icelandic" },
  currency: { fr: "Couronne islandaise (kr)", en: "Icelandic króna (kr)" },
  timezone: "UTC+0",
  filter: {
    budgetMin: 80, budgetMid: 160,
    tripMin: 2200, tripMid: 4000,
  },
  description: {
    fr: "L'Islande est une destination de bout du monde, terra d'aurores boréales, de geysers, de volcans actifs, de glaciers immenses et de cascades spectaculaires. Le pays du feu et de la glace, avec Reykjavik la capitale la plus nordique du monde, offre des paysages d'une beauté surnaturelle.",
    en: "Iceland is an end-of-the-world destination, a land of northern lights, geysers, active volcanoes, immense glaciers and spectacular waterfalls. The land of fire and ice, with Reykjavik as the world's northernmost capital, offers landscapes of almost supernatural beauty.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Août", en: "June – August" },
      label: { fr: "Soleil de minuit", en: "Midnight sun" },
      color: "#22c55e",
      description: {
        fr: "Jours quasi sans nuit (soleil de minuit), météo la plus clémente, routes accessibles dont les Highlands. Cascades en plein débit.",
        en: "Days with almost no night (midnight sun), the mildest weather, and accessible roads including the Highlands. Waterfalls are at full flow.",
      },
      icon: "🌞",
    },
    {
      months: { fr: "Septembre – Novembre", en: "September – November" },
      label: { fr: "Aurores boréales", en: "Northern lights" },
      color: "#a78bfa",
      description: {
        fr: "Premières aurores boréales visibles, températures encore correctes, couleurs automnales spectaculaires. Moins de foule.",
        en: "The first northern lights become visible, temperatures are still reasonable, and autumn colours are spectacular. Fewer crowds.",
      },
      icon: "🌌",
    },
    {
      months: { fr: "Décembre – Mars", en: "December – March" },
      label: { fr: "Hiver & Aurores", en: "Winter & Northern lights" },
      color: "#93c5fd",
      description: {
        fr: "Saison des aurores boréales par excellence. Nuits longues, paysages enneigés féeriques, lacs glacés. Prévoir équipement chaud.",
        en: "Prime northern-lights season. Long nights, magical snowy landscapes and frozen lakes. Bring proper cold-weather gear.",
      },
      icon: "❄️",
    },
  ],

  weatherCities: [
    {
      id: "reykjavik",
      name: "Reykjavik",
      region: { fr: "Région capitale", en: "Capital Region" },
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
      name: { fr: "Cercle d'Or (Golden Circle)", en: "Golden Circle" },
      region: { fr: "Sud-Ouest", en: "South-West" },
      description: {
        fr: "Circuit incontournable depuis Reykjavik : le geyser Strokkur, le parc national de Þingvellir (naissance de la démocratie, faille tectonique) et les chutes de Gullfoss.",
        en: "The essential route from Reykjavik: Strokkur geyser, Þingvellir National Park (birthplace of democracy, tectonic rift) and the Gullfoss waterfalls.",
      },
      wikipedia: "Golden_Circle_(Iceland)",
      tags: ["Nature", "Géologie", "Paysage", "Geyser", "UNESCO"],
      mustSee: [
        { name: { fr: "Geyser Strokkur", en: "Strokkur geyser" }, wikipedia: "Strokkur" },
        { name: { fr: "Chutes de Gullfoss", en: "Gullfoss waterfalls" }, wikipedia: "Gullfoss" },
        { name: { fr: "Parc national de Þingvellir", en: "Þingvellir National Park" }, wikipedia: "Þingvellir" },
        { name: { fr: "Lac Kerid — cratère volcanique", en: "Kerid crater lake" }, wikipedia: "Kerið" },
      ],
    },
    {
      id: 2,
      name: { fr: "Côte Sud & Jökulsárlón", en: "South Coast & Jökulsárlón" },
      region: { fr: "Sud", en: "South" },
      description: {
        fr: "La route côtière la plus spectaculaire d'Islande : cascades de Seljalandsfoss et Skógafoss, plage de sable noir de Reynisfjara et le lac glaciaire de Jökulsárlón avec ses icebergs.",
        en: "Iceland's most spectacular coastal route: the Seljalandsfoss and Skógafoss waterfalls, Reynisfjara black-sand beach and Jökulsárlón glacial lagoon with its icebergs.",
      },
      wikipedia: "Jökulsárlón",
      tags: ["Nature", "Glacier", "Plage", "Paysage", "Randonnée"],
      mustSee: [
        { name: { fr: "Jökulsárlón — lac des icebergs", en: "Jökulsárlón — iceberg lagoon" }, wikipedia: "Jökulsárlón" },
        { name: { fr: "Plage de sable noir Reynisfjara", en: "Reynisfjara black-sand beach" }, wikipedia: "Reynisfjara" },
        { name: { fr: "Cascades Seljalandsfoss", en: "Seljalandsfoss waterfalls" }, wikipedia: "Seljalandsfoss" },
        { name: { fr: "Skógafoss & sentier de randonnée", en: "Skógafoss & hiking trail" }, wikipedia: "Skógafoss" },
      ],
    },
    {
      id: 3,
      name: "Snæfellsnes",
      region: { fr: "Ouest", en: "West" },
      description: {
        fr: "Péninsule glaciaire inspirée par Jules Verne (Voyage au centre de la Terre). Glacier Snæfellsjökull, falaises de basalte, villages de pêcheurs et aurores boréales.",
        en: "A glacier-capped peninsula that inspired Jules Verne (Journey to the Center of the Earth). Snæfellsjökull glacier, basalt cliffs, fishing villages and northern lights.",
      },
      wikipedia: "File:View_from_Helgafell,_Snæfellsnes_peninsula,_Iceland,_20230505_1513_5245.jpg",
      tags: ["Nature", "Glacier", "Paysage", "Aurores boréales", "Randonnée"],
      mustSee: [
        { name: { fr: "Glacier Snæfellsjökull", en: "Snæfellsjökull glacier" }, wikipedia: "Snæfellsjökull" },
        { name: { fr: "Falaises de Lóndrangar", en: "Lóndrangar cliffs" }, wikipedia: "Lóndrangar" },
        { name: { fr: "Village de Arnarstapi", en: "Arnarstapi village" }, wikipedia: "Arnarstapi" },
        { name: { fr: "Plage de Djúpalónssandur", en: "Djúpalónssandur beach" }, wikipedia: "File:Dritvik - Djúpalónssandur 03 HDR (1416785147).jpg" },
      ],
    },
    {
      id: 4,
      name: "Reykjavik",
      region: { fr: "Région capitale", en: "Capital Region" },
      description: {
        fr: "La plus petite capitale du monde est surprenante : architecture colorée, scène culturelle vibrante, restaurants de nouvelle cuisine nordique et le Blue Lagoon à 40 min.",
        en: "The world's smallest capital is full of surprises: colourful architecture, a vibrant cultural scene, new Nordic restaurants and the Blue Lagoon just 40 minutes away.",
      },
      wikipedia: "File:View of Reykjavík from Hallgrímskirkja, 20230507 1227 5715.jpg",
      tags: ["Ville", "Culture", "Gastronomie", "Spa", "Histoire", "Architecture"],
      mustSee: [
        { name: { fr: "Hallgrímskirkja — cathédrale emblématique", en: "Hallgrímskirkja — iconic cathedral" }, wikipedia: "Hallgrímskirkja" },
        { name: "Blue Lagoon", wikipedia: "Blue_Lagoon_(geothermal_spa)" },
        { name: { fr: "Old Harbour & marché alimentaire", en: "Old Harbour & food hall" }, wikipedia: "File:Reykjavik old harbour (6046082168).jpg" },
        { name: { fr: "Musée national d'Islande", en: "National Museum of Iceland" }, wikipedia: "National_Museum_of_Iceland" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Islande est l'une des destinations les plus chères d'Europe. Prévoyez un budget conséquent, notamment pour l'hébergement et la restauration. Location de voiture indispensable hors Reykjavik.",
      en: "Iceland is one of Europe's most expensive destinations. Plan for a substantial budget, especially for accommodation and food. Renting a car is essential outside Reykjavik.",
    },
    currency: "ISK (kr)",
    exchangeRate: "~150 kr = 1 €",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Camping (été seulement)", en: "Camping (summer only)" }, price: "15–25 €", detail: { fr: "Réseau de campings bien équipés", en: "Well-equipped campsite network" } },
          { label: { fr: "Dortoir hostel", en: "Hostel dorm" }, price: "35–55 €", detail: { fr: "Assez cher pour un dortoir, mais pratique", en: "Quite expensive for a dorm, but practical" } },
          { label: { fr: "Guesthouse / ferme", en: "Guesthouse / farm stay" }, price: "80–150 €", detail: { fr: "Ambiance authentique, souvent isolée", en: "Authentic atmosphere, often isolated" } },
          { label: { fr: "Hôtel confort", en: "Comfort hotel" }, price: "150–280 €", detail: { fr: "Standard correct dans les villes", en: "Decent standard in towns" } },
          { label: { fr: "Hôtel de luxe", en: "Luxury hotel" }, price: "300–600 €", detail: { fr: "Reykjavik, lieux insolites avec vue", en: "Reykjavik, unusual places with a view" } },
        ],
      },
      {
        id: "food",
        icon: "🍜",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Hot-dog isl. (Bæjarins beztu)", en: "Icelandic hot dog (Bæjarins Beztu)" }, price: "3–4 €", detail: { fr: "Institution nationale — file d'attente assurée", en: "National institution — expect a queue" } },
          { label: { fr: "Boulangerie / café", en: "Bakery / café" }, price: "5–10 €", detail: { fr: "Skyr, pain de seigle, cinnamon roll", en: "Skyr, rye bread, cinnamon roll" } },
          { label: { fr: "Restaurant casual", en: "Casual restaurant" }, price: "20–35 €", detail: { fr: "Fish & chips, burger islandais", en: "Fish & chips, Icelandic burger" } },
          { label: { fr: "Restaurant mid-range", en: "Mid-range restaurant" }, price: "35–60 €", detail: { fr: "Agneau islandais, saumon, skyr", en: "Icelandic lamb, salmon, skyr" } },
          { label: { fr: "Restaurant gastronomique", en: "Fine dining" }, price: "80–150 €", detail: { fr: "Nouvelle cuisine nordique, exceptionnel", en: "New Nordic cuisine, exceptional" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus Reykjavik (Strætó)", en: "Reykjavik bus (Strætó)" }, price: "3,50 €", detail: { fr: "Réseau limité à la capitale", en: "Network limited to the capital" } },
          { label: { fr: "Location de voiture compacte", en: "Compact car rental" }, price: "60–100 €/j", detail: { fr: "Indispensable pour le Ring Road", en: "Essential for the Ring Road" } },
          { label: { fr: "Location 4x4", en: "4x4 rental" }, price: "100–200 €/j", detail: { fr: "Obligatoire pour les Highlands (pistes F)", en: "Mandatory for the Highlands (F-roads)" } },
          { label: { fr: "Bus Reykjavik–Golden Circle (tour)", en: "Reykjavik–Golden Circle bus (tour)" }, price: "60–100 €", detail: { fr: "Excursion organisée depuis Reykjavik", en: "Organised excursion from Reykjavik" } },
          { label: { fr: "Ferry Westfjords", en: "Westfjords ferry" }, price: "20–50 €", detail: { fr: "Baldur Ferry — scenic", en: "Baldur Ferry — scenic route" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités & Culture", en: "Activities & Culture" },
        items: [
          { label: { fr: "Blue Lagoon (entrée standard)", en: "Blue Lagoon (standard entry)" }, price: "60–100 €", detail: { fr: "Réservation obligatoire des semaines à l'avance", en: "Booking required weeks in advance" } },
          { label: { fr: "Tour aurores boréales", en: "Northern lights tour" }, price: "50–80 €", detail: { fr: "Minibus nocturne, conditions météo non garanties", en: "Night minibus, weather conditions not guaranteed" } },
          { label: { fr: "Randonnée sur glacier guidée", en: "Guided glacier hike" }, price: "50–100 €", detail: { fr: "Crampons et guide inclus — incontournable", en: "Crampons and guide included — a must" } },
          { label: { fr: "Snorkeling / plongée à Þingvellir", en: "Snorkelling / diving at Þingvellir" }, price: "80–150 €", detail: { fr: "Dans la faille entre deux plaques tectoniques", en: "In the rift between two tectonic plates" } },
          { label: { fr: "Observation des baleines (Húsavík)", en: "Whale watching (Húsavík)" }, price: "60–90 €", detail: { fr: "Meilleures chances mai–août", en: "Best odds from May to August" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "80–120 €/j", desc: { fr: "Camping + cuisine maison + voiture partagée", en: "Camping + self-catering + shared car" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "160–260 €/j", desc: { fr: "Guesthouse + restos + activités", en: "Guesthouse + restaurants + activities" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "400 €+/j", desc: { fr: "Hôtel 5★ + gastronomie nordique + expériences premium", en: "5★ hotel + Nordic fine dining + premium experiences" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks" },
      route: { fr: "Reykjavik (2j) → Golden Circle (1j) → Côte Sud (2j) → Jökulsárlón (1j) → Highlands (2j) → Nord (3j) → Snæfellsnes (2j) → Reykjavik (1j)", en: "Reykjavik (2d) → Golden Circle (1d) → South Coast (2d) → Jökulsárlón (1d) → Highlands (2d) → North (3d) → Snæfellsnes (2d) → Reykjavik (1d)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "2 200 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Reykjavik", en: "Return flight Paris–Reykjavik" }, amount: "150–400 €" },
            { label: { fr: "Location de voiture (14j)", en: "Car rental (14 days)" }, amount: "700–1 000 €" },
            { label: { fr: "Hébergement (campings + hostels)", en: "Accommodation (campsites + hostels)" }, amount: "400–600 €" },
            { label: { fr: "Nourriture (supermarché + restos budget)", en: "Food (supermarkets + budget restaurants)" }, amount: "400–600 €" },
            { label: { fr: "Activités (Blue Lagoon, glacier...)", en: "Activities (Blue Lagoon, glacier...)" }, amount: "350–550 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "4 000 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Reykjavik", en: "Return flight Paris–Reykjavik" }, amount: "200–500 €" },
            { label: { fr: "Location de voiture 4x4 (14j)", en: "4x4 rental (14 days)" }, amount: "1 000–1 500 €" },
            { label: { fr: "Hébergement guesthouses (14 nuits)", en: "Guesthouse accommodation (14 nights)" }, amount: "1 200–2 000 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "800–1 200 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "600–900 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "8 000 € +",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Reykjavik (business)", en: "Return flight Paris–Reykjavik (business)" }, amount: "800–2 000 €" },
            { label: { fr: "Location SUV premium (14j)", en: "Premium SUV rental (14 days)" }, amount: "1 500–2 500 €" },
            { label: { fr: "Hôtels & lodges luxe (14 nuits)", en: "Luxury hotels & lodges (14 nights)" }, amount: "3 000–6 000 €" },
            { label: { fr: "Gastronomie nordique & Blue Lagoon premium", en: "Nordic fine dining & premium Blue Lagoon" }, amount: "1 000–2 000 €" },
            { label: { fr: "Expériences privées & imprévus", en: "Private experiences & contingency" }, amount: "800–1 500 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~3h direct (Icelandair, easyJet, Vueling)", en: "~3h direct (Icelandair, easyJet, Vueling)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Pas de visa (espace Schengen)", en: "No visa required (Schengen area)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Couronne islandaise (kr) — carte bancaire acceptée partout", en: "Icelandic króna (kr) — card payments accepted everywhere" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Islandais — anglais parfaitement parlé partout", en: "Icelandic — English spoken fluently everywhere" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/F — 230V (même qu'en France)", en: "Type C/F — 230V (same as in France)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Roaming européen inclus — réseau excellent sur Ring Road", en: "EU roaming included — excellent coverage on the Ring Road" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Excellente, parmi la meilleure eau du monde", en: "Excellent, among the best drinking water in the world" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Carte européenne d'assurance maladie valide, aucun risque sanitaire", en: "European Health Insurance Card valid, no particular health risk" } },
  ],
};