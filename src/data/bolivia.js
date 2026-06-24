export const BOLIVIA = {
  code: "BOL",
  numericId: 68,
  name: "Bolivie",
  emoji: "🇧🇴",
  capital: "Sucre (constitutionnelle) / La Paz (siège du gouvernement)",
  language: "Espagnol, quechua, aymara",
  currency: "Boliviano (BOB)",
  timezone: "UTC-4",
  filter: {
    budgetMin: 25,
    budgetMid: 55,
    tripMin: 1200,
    tripMid: 2200,
  },
  description:
    "La Bolivie est l'un des pays les plus authentiques et abordables d'Amérique du Sud. Entre le Salar d'Uyuni (plus grand désert de sel du monde), La Paz perchée à 3 650 m, le lac Titicaca et l'Amazonie, c'est une destination d'une diversité extraordinaire à petit budget.",

  bestPeriods: [
    {
      months: "Mai – Octobre",
      label: "Saison sèche",
      color: "#fbbf24",
      description:
        "Meilleure période pour le Salar d'Uyuni et les Andes. Journées ensoleillées, nuits froides, routes praticables.",
      icon: "☀️",
    },
    {
      months: "Novembre – Avril",
      label: "Saison des pluies (miroir Uyuni)",
      color: "#38bdf8",
      description:
        "L'Uyuni recouvert d'eau devient un miroir géant reflétant le ciel – une image iconique. Certaines routes peuvent être impraticables.",
      icon: "🪞",
    },
  ],

  weatherCities: [
    {
      id: "la-paz",
      name: "La Paz",
      region: "Andes (3 650 m)",
      data: [
        { month: "Jan", temp: 10, rain: 115, icon: "🌦" },
        { month: "Fév", temp: 10, rain: 115, icon: "🌦" },
        { month: "Mar", temp: 10, rain: 70, icon: "⛅" },
        { month: "Avr", temp: 11, rain: 40, icon: "🌤" },
        { month: "Mai", temp: 9, rain: 15, icon: "☀️" },
        { month: "Jun", temp: 8, rain: 5, icon: "☀️" },
        { month: "Jul", temp: 7, rain: 5, icon: "☀️" },
        { month: "Aoû", temp: 8, rain: 10, icon: "☀️" },
        { month: "Sep", temp: 10, rain: 25, icon: "🌤" },
        { month: "Oct", temp: 12, rain: 40, icon: "⛅" },
        { month: "Nov", temp: 12, rain: 60, icon: "🌦" },
        { month: "Déc", temp: 11, rain: 95, icon: "🌦" },
      ],
    },
    {
      id: "sucre",
      name: "Sucre",
      region: "Chuquisaca",
      data: [
        { month: "Jan", temp: 18, rain: 80, icon: "🌦" },
        { month: "Fév", temp: 18, rain: 80, icon: "🌦" },
        { month: "Mar", temp: 18, rain: 55, icon: "⛅" },
        { month: "Avr", temp: 18, rain: 25, icon: "🌤" },
        { month: "Mai", temp: 17, rain: 10, icon: "☀️" },
        { month: "Jun", temp: 15, rain: 3, icon: "☀️" },
        { month: "Jul", temp: 14, rain: 3, icon: "☀️" },
        { month: "Aoû", temp: 16, rain: 5, icon: "☀️" },
        { month: "Sep", temp: 18, rain: 15, icon: "🌤" },
        { month: "Oct", temp: 20, rain: 30, icon: "⛅" },
        { month: "Nov", temp: 20, rain: 45, icon: "🌦" },
        { month: "Déc", temp: 19, rain: 70, icon: "🌦" },
      ],
    },
    {
      id: "uyuni",
      name: "Uyuni",
      region: "Potosí (Altiplano)",
      data: [
        { month: "Jan", temp: 6, rain: 70, icon: "🌦" },
        { month: "Fév", temp: 6, rain: 65, icon: "🌦" },
        { month: "Mar", temp: 6, rain: 45, icon: "⛅" },
        { month: "Avr", temp: 6, rain: 15, icon: "🌤" },
        { month: "Mai", temp: 3, rain: 5, icon: "☀️" },
        { month: "Jun", temp: -1, rain: 2, icon: "❄️" },
        { month: "Jul", temp: -2, rain: 2, icon: "❄️" },
        { month: "Aoû", temp: 1, rain: 3, icon: "⛅" },
        { month: "Sep", temp: 5, rain: 10, icon: "🌤" },
        { month: "Oct", temp: 9, rain: 20, icon: "☀️" },
        { month: "Nov", temp: 10, rain: 35, icon: "⛅" },
        { month: "Déc", temp: 8, rain: 60, icon: "🌦" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Salar d'Uyuni",
      region: "Altiplano",
      description:
        "Le plus grand désert de sel du monde (10 573 km²) est le joyau de la Bolivie. À la saison sèche, ses hexagones de sel s'étendent à perte de vue ; à la saison des pluies, il devient un miroir géant réfléchissant les nuages. Les îles de cactus (Isla Incahuasi) y émergent comme par magie.",
      wikipedia: "Salar_de_Uyuni",
      tags: ["Paysages", "Unique", "Photos", "Altiplano", "Désert", "Nature"],
      mustSee: [
        { name: "Isla Incahuasi", wikipedia: "File:04-Isla_Incahuasi-nX-1.jpg" },
        { name: "Cimetière de trains (Uyuni)", wikipedia: "File:02-Train-Cemetery-Uyuni-nX-22.jpg" },
        { name: "Laguna Colorada", wikipedia: "Laguna_Colorada" },
        { name: "Sol de Mañana (geysers)", wikipedia: "File:Sol de Mañana 2018.jpg" },
      ],
    },
    {
      id: 2,
      name: "La Paz",
      region: "Andes",
      description:
        "La plus haute capitale administrative du monde (3 650 m) est une ville fascinante suspendue dans un canyon andin. Le téléphérique Mi Teleférico offre des vues extraordinaires sur la cuvette et le majestueux Illimani (6 439 m). Le marché des sorcières (Mercado de las Brujas) est unique en son genre.",
      wikipedia: "La_Paz",
      tags: ["Ville", "Altitude", "Culture", "Marchés", "Gastronomie"],
      mustSee: [
        { name: "Mi Teleférico", wikipedia: "File:Mi Teleférico - Linea Naranja.jpg" },
        { name: "Mercado de las Brujas", wikipedia: "File:05-Mercado de las Brujas (La Paz)-8.jpg" },
        { name: "Illimani", wikipedia: "Illimani" },
        { name: "Valle de la Luna (La Paz)", wikipedia: "Valle_de_la_Luna_(Bolivia)" },
      ],
    },
    {
      id: 3,
      name: "Lac Titicaca",
      region: "Altiplano",
      description:
        "Le plus haut lac navigable du monde (3 812 m) est sacré pour les peuples aymara. Les îles flottantes des Uros, l'île de la Lune et l'île du Soleil (Isla del Sol) abritent des ruines incas et des communautés traditionnelles.",
      wikipedia: "Lake_Titicaca",
      tags: ["Lac", "Culture", "Inca", "Îles Flottantes"],
      mustSee: [
        { name: "Îles Uros (flottantes)", wikipedia: "File:Indigenas Uros en el Lago Titicaca Bolivia.jpg" },
        { name: "Isla del Sol", wikipedia: "Isla_del_Sol" },
        { name: "Copacabana (Bolivie)", wikipedia: "Copacabana,_Bolivia" },
        { name: "Ruines de Tiwanaku", wikipedia: "Tiwanaku" },
      ],
    },
    {
      id: 4,
      name: "Sucre",
      region: "Chuquisaca",
      description:
        "La capitale constitutionnelle blanche est l'une des plus belles villes coloniales d'Amérique du Sud, inscrite au patrimoine UNESCO. Ses façades blanches immaculées, ses marchés colorés et son atmosphère paisible en font un havre de paix.",
      wikipedia: "File:Sucre capital de Bolivia.jpg",
      tags: ["Colonial", "UNESCO", "Histoire", "Architecture"],
      mustSee: [
        { name: "Cathédrale Métropolitaine", wikipedia: "File:Catedral - Sucre.jpg" },
        { name: "Casa de la Libertad", wikipedia: "File:Casa de la libertad.jpg" },
        { name: "Recoleta (belvédère)", wikipedia: "File:Cerro San Cristobal - Vistas desde Cumbre - Recoleta - 04.jpg" },
        { name: "Cal Orck'o (dinosaures)", wikipedia: "File:Dinosaur Valley in Cal Orcko Bolivia (photos canned).jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "La Bolivie est l'une des destinations les moins chères d'Amérique du Sud. Les prix sont très bas pour l'hébergement, la nourriture et les transports.",
    currency: "Boliviano (BOB)",
    exchangeRate: "1€ ≈ 7,5–8 BOB",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir auberge de jeunesse", price: "5–10 €", detail: "La Paz, Uyuni, Sucre" },
          { label: "Chambre double hôtel simple", price: "15–30 €", detail: "Confort basique à correct" },
          { label: "Hôtel de sel (Uyuni)", price: "50–120 €", detail: "Expérience unique, murs et sol en sel" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Menú del día (menu local)", price: "1,5–3 €", detail: "Soupe + plat + boisson, très complet" },
          { label: "Salteña (chausson bolivien)", price: "0,50–1 €", detail: "Snack du matin, délicieux" },
          { label: "Restaurant touristique", price: "6–15 €", detail: "La Paz ou Sucre, cuisine andine" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus La Paz–Uyuni (nuit)", price: "8–15 €", detail: "Route longue (10h), préférer le jour" },
          { label: "Tour Salar d'Uyuni (3 jours)", price: "50–80 €", detail: "Tout compris, en groupe, depuis Uyuni" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Téléphérique Mi Teleférico La Paz", price: "0,50 €", detail: "Par ligne, vues exceptionnelles" },
          { label: "Excursion Isla del Sol (Titicaca)", price: "10–20 €", detail: "Bateau + guide, journée" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "25–40 €/j", desc: "Auberge, menú local, bus, tours en groupe", color: "#22c55e" },
      { type: "Confort", daily: "55–90 €/j", desc: "Hôtel correct, restaurants, tours guidés", color: "#3b82f6" },
      { type: "Luxe", daily: "150 €+/j", desc: "Hôtel de luxe, tours privés, vols intérieurs", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "La Paz – Lac Titicaca – Sucre – Uyuni",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 200 – 1 600 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–La Paz", amount: "700–900 €" },
            { label: "Hébergement (14 nuits)", amount: "150–250 €" },
            { label: "Nourriture", amount: "150–220 €" },
            { label: "Transport local + tours", amount: "100–180 €" },
            { label: "Activités & imprévus", amount: "80–150 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 200 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–La Paz", amount: "900–1 200 €" },
            { label: "Hébergement (14 nuits)", amount: "500–700 €" },
            { label: "Nourriture", amount: "350–500 €" },
            { label: "Transport + tours guidés", amount: "250–400 €" },
            { label: "Activités & imprévus", amount: "200–300 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "5 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–La Paz (Business)", amount: "2 500–3 500 €" },
            { label: "Hébergement (14 nuits)", amount: "1 200–1 800 €" },
            { label: "Nourriture & restaurants", amount: "400–600 €" },
            { label: "Transport & excursions privées", amount: "400–600 €" },
            { label: "Activités premium", amount: "200–400 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~14–16h avec escale (Lima ou Bogotá)" },
    { icon: "🪪", label: "Visa", value: "Sans visa pour les Français (90 jours)" },
    { icon: "💰", label: "Monnaie", value: "Boliviano (1€ ≈ 7,5–8 BOB)" },
    { icon: "🗣️", label: "Langue", value: "Espagnol, quechua, aymara" },
    { icon: "🔌", label: "Prise électrique", value: "Type A/C – 220 V (adaptateur conseillé)" },
    { icon: "📱", label: "Réseau", value: "4G dans les villes, très limité en Altiplano" },
    { icon: "🚰", label: "Eau du robinet", value: "Non potable, eau en bouteille indispensable" },
    { icon: "💊", label: "Santé", value: "Mal des montagnes (soroche) fréquent à La Paz – acclimatation nécessaire" },
  ],
};
