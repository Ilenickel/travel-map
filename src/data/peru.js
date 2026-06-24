export const PERU = {
  code: "PER",
  numericId: 604,
  name: "Pérou",
  emoji: "🇵🇪",
  capital: "Lima",
  language: "Espagnol / Quechua",
  currency: "Sol (S/)",
  timezone: "UTC-5",
  filter: {
    budgetMin: 35, budgetMid: 90,
    tripMin: 1600, tripMid: 3000,
  },
  description:
    "Le Pérou est le cœur de l'Amérique andine : Machu Picchu la cité inca au-dessus des nuages, Cusco la capitale inca, la mer de dunes de Huacachina, le lac Titicaca le plus haut du monde et la gastronomie péruvienne parmi les meilleures au monde.",

  bestPeriods: [
    {
      months: "Mai – Octobre",
      label: "Saison sèche (Andes)",
      color: "#22c55e",
      description:
        "Meilleure période pour Machu Picchu et le trek Inca : ciel bleu, sentiers secs. Températures fraîches mais agréables.",
      icon: "☀️",
    },
    {
      months: "Juin – Août",
      label: "Inti Raymi",
      color: "#f9a8d4",
      description:
        "Fête du Soleil (Inti Raymi) à Cusco le 24 juin. Saison sèche au pic, festivals andins animés.",
      icon: "🌞",
    },
    {
      months: "Décembre – Avril",
      label: "Lima & Côte",
      color: "#3b82f6",
      description:
        "Saison humide dans les Andes (mais Machu Picchu reste faisable). Lima et la côte sont parfaites toute l'année. Amazonie luxuriante.",
      icon: "🌦",
    },
  ],

  weatherCities: [
    {
      id: "lima",
      name: "Lima",
      region: "Côte",
      data: [
        { month: "Jan", temp: 23, rain: 15,  icon: "☀️" },
        { month: "Fév", temp: 24, rain: 0,   icon: "☀️" },
        { month: "Mar", temp: 23, rain: 6,   icon: "☀️" },
        { month: "Avr", temp: 21, rain: 0,   icon: "☀️" },
        { month: "Mai", temp: 19, rain: 1,   icon: "☀️" },
        { month: "Jun", temp: 17, rain: 0,   icon: "☀️" },
        { month: "Jul", temp: 16, rain: 0,   icon: "☀️" },
        { month: "Aoû", temp: 15, rain: 0,   icon: "⛅" },
        { month: "Sep", temp: 16, rain: 1,   icon: "☀️" },
        { month: "Oct", temp: 17, rain: 0,   icon: "☀️" },
        { month: "Nov", temp: 19, rain: 0,   icon: "☀️" },
        { month: "Déc", temp: 21, rain: 1,   icon: "☀️" },
      ],
    },
    {
      id: "cusco",
      name: "Cusco",
      region: "Andes (3 400 m)",
      data: [
        { month: "Jan", temp: 12, rain: 140, icon: "⛅" },
        { month: "Fév", temp: 12, rain: 120, icon: "⛅" },
        { month: "Mar", temp: 12, rain: 100, icon: "⛅" },
        { month: "Avr", temp: 13, rain: 40,  icon: "⛅" },
        { month: "Mai", temp: 12, rain: 10,  icon: "☀️" },
        { month: "Jun", temp: 10, rain: 5,   icon: "☀️" },
        { month: "Jul", temp: 9,  rain: 5,   icon: "☀️" },
        { month: "Aoû", temp: 10, rain: 10,  icon: "☀️" },
        { month: "Sep", temp: 12, rain: 20,  icon: "⛅" },
        { month: "Oct", temp: 13, rain: 40,  icon: "⛅" },
        { month: "Nov", temp: 14, rain: 60,  icon: "⛅" },
        { month: "Déc", temp: 13, rain: 115, icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Machu Picchu",
      region: "Cusco",
      description:
        "La cité inca perchée à 2 430 m dans les Andes est le symbole du Pérou. Accessible en train depuis Cusco ou à pied via le mythique Chemin de l'Inca (4 jours).",
      wikipedia: "Machu_Picchu",
      tags: ["UNESCO", "Histoire", "Nature", "Randonnée", "Architecture"],
      mustSee: [
        { name: "Cité inca de Machu Picchu", wikipedia: "Machu_Picchu" },
        { name: "Montagne Huayna Picchu", wikipedia: "Huayna_Picchu" },
        { name: "Chemin de l'Inca (4 jours)", wikipedia: "Inca_Trail_to_Machu_Picchu" },
        { name: "Aguas Calientes — village de départ", wikipedia: "Aguas_Calientes,_Peru" },
      ],
    },
    {
      id: 2,
      name: "Cusco",
      region: "Andes",
      description:
        "L'ancienne capitale de l'Empire Inca, aujourd'hui ville coloniale magnifique à 3 400 m d'altitude. Cathédrale baroque sur fondations incas, marché de Pisac et Vallée Sacrée.",
      wikipedia: "Cusco",
      tags: ["Histoire", "Culture", "UNESCO", "Altitude", "Architecture", "Gastronomie", "Ville"],
      mustSee: [
        { name: "Qorikancha — temple inca du Soleil", wikipedia: "File:Entrada_del_Museo_Qorikancha_02.jpg" },
        { name: "Forteresse de Sacsayhuamán", wikipedia: "Sacsayhuamán" },
        { name: "Plaza de Armas de Cusco", wikipedia: "Plaza_de_Armas_(Cusco)" },
        { name: "Marché de Pisac & Vallée Sacrée", wikipedia: "Sacred_Valley" },
      ],
    },
    {
      id: 3,
      name: "Lima",
      region: "Côte",
      description:
        "Capitale gastronomique de l'Amérique latine, avec des restaurants parmi les meilleurs au monde (Central, Maido). Le quartier de Miraflores et le Larcomaroffrent une vie urbaine cosmopolite.",
      wikipedia: "Lima",
      tags: ["Gastronomie", "Culture", "Ville", "Art", "Architecture", "Plage"],
      mustSee: [
        { name: "Quartier Miraflores & Barranco", wikipedia: "Miraflores_District,_Lima" },
        { name: "Musée Larco — collections précolumbiennes", wikipedia: "Larco_Museum" },
        { name: "Huaca Pucllana — pyramide inca en ville", wikipedia: "Huaca_Pucllana" },
        { name: "Ceviche à Lima — expérience culinaire", wikipedia: "Ceviche" },
      ],
    },
    {
      id: 4,
      name: "Lac Titicaca",
      region: "Puno",
      description:
        "À 3 810 m d'altitude, le lac Titicaca est le plus haut lac navigable du monde. Les îles flottantes des Uros, construites en roseaux, et Taquile habitées par des tisserands sont uniques.",
      wikipedia: "File:Amanecer_en_el_lago_Titicaca,_Puno,_Perú,_2015-08-01,_DD_01.JPG",
      tags: ["Nature", "Culture", "Altitude", "Unique"],
      mustSee: [
        { name: "Îles flottantes des Uros", wikipedia: "File:View_on_a_floating_Uros_Island_from_a_Uru_watchtower,_visible_are_drying_clothes_and_a_shower_building.jpg" },
        { name: "Île de Taquile — tisserands", wikipedia: "File:Taquile from Amantani.jpg" },
        { name: "Île Amantaní — nuit chez l'habitant", wikipedia: "File:Intikawan Amantani.jpg" },
        { name: "Lever de soleil sur le lac", wikipedia: "File:Balsas en el lago Titicaca desde el lado boliviana.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Pérou est relativement abordable, surtout pour la nourriture et les transports locaux. Les circuits organisés (Machu Picchu, Chemin de l'Inca) représentent le plus gros poste de dépense.",
    currency: "PEN (S/)",
    exchangeRate: "~4,2 S/ = 1 €",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir hostel", price: "6–12 €", detail: "Très bons à Cusco, Lima et Aguas Calientes" },
          { label: "Guesthouse / hostal", price: "15–35 €", detail: "Chambre privée correcte" },
          { label: "Hôtel confort", price: "40–90 €", detail: "Chambre double bien équipée" },
          { label: "Boutique hôtel colonial (Cusco)", price: "80–180 €", detail: "Bâtisse coloniale sur fondations incas" },
          { label: "Hôtel de luxe (Lima, Machu Picchu)", price: "200–600 €", detail: "Belmond, Palacio del Inka — vue spectaculaire" },
        ],
      },
      {
        id: "food",
        icon: "🍜",
        label: "Nourriture",
        items: [
          { label: "Menu du jour (restaurant local)", price: "2–4 €", detail: "Soupe + plat principal + boisson" },
          { label: "Ceviche (marché)", price: "3–6 €", detail: "La spécialité péruvienne par excellence" },
          { label: "Lomo saltado / pollo a la brasa", price: "5–10 €", detail: "Cuisine péruvienne classique" },
          { label: "Restaurant mid-range (Lima)", price: "15–30 €", detail: "Tiradito, causa, anticuchos" },
          { label: "Restaurant gastronomique (Lima)", price: "60–150 €", detail: "Central, Maido, Astrid y Gastón — world class" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus urbain (Lima)", price: "0,30–0,60 €", detail: "Très économique mais bondé" },
          { label: "Taxi / Uber (Lima)", price: "3–10 €", detail: "Uber très pratique à Lima" },
          { label: "Train Cusco–Aguas Calientes", amount: "40–100 €", detail: "PeruRail ou Inca Rail — 3h30" },
          { label: "Bus longue distance (Cruz del Sur)", price: "15–40 €", detail: "Lima–Cusco (21h !) ou vol recommandé" },
          { label: "Vol intérieur (LATAM, Sky Airline)", price: "40–100 €", detail: "Lima–Cusco en 1h — fortement recommandé" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Machu Picchu (entrée + bus)", price: "45–65 €", detail: "Réservation obligatoire bien à l'avance" },
          { label: "Chemin de l'Inca (4j, guidé)", price: "500–700 €", detail: "Tout inclus — places limitées, réserver 6 mois avant" },
          { label: "Tour Vallée Sacrée (guidé)", price: "30–60 €", detail: "Pisac, Ollantaytambo, Moray" },
          { label: "Excursion lac Titicaca (2j)", price: "40–80 €", detail: "Aller-retour, hébergement chez l'habitant inclus" },
          { label: "Sandboard & buggy (Huacachina)", price: "15–25 €", detail: "Dunes géantes de la côte péruvienne" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "35–60 €/j", desc: "Hostel + menus locaux + bus + activités basiques", color: "#22c55e" },
      { type: "Confort", daily: "90–150 €/j", desc: "Hôtel confort + restos mid-range + activités", color: "#3b82f6" },
      { type: "Luxe", daily: "300 €+/j", desc: "Hôtel boutique + gastronomie Lima + excursions privées", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Lima (2j) → Nasca (1j) → Cusco (3j) → Machu Picchu (2j) → Vallée Sacrée (2j) → Lac Titicaca (2j) → Lima (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 600 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Lima", amount: "600–900 €" },
            { label: "Vol Lima–Cusco + transports", amount: "100–160 €" },
            { label: "Hébergement (14 nuits)", amount: "200–350 €" },
            { label: "Nourriture", amount: "200–350 €" },
            { label: "Machu Picchu + activités", amount: "250–450 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 000 – 4 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Lima", amount: "700–1 100 €" },
            { label: "Vols intérieurs & trains", amount: "200–350 €" },
            { label: "Hébergement (14 nuits)", amount: "700–1 100 €" },
            { label: "Nourriture & restaurants", amount: "600–900 €" },
            { label: "Activités (Machu Picchu, Titicaca)", amount: "400–700 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "6 500 € +",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Lima (business)", amount: "2 000–3 500 €" },
            { label: "Vols & trains privés", amount: "400–700 €" },
            { label: "Hôtels Belmond & luxe (14 nuits)", amount: "2 000–4 000 €" },
            { label: "Gastronomie Lima + guides", amount: "800–1 500 €" },
            { label: "Chemin Inca & expériences privées", amount: "700–1 200 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~13–14h avec escale (Bogotá, Miami, Madrid)" },
    { icon: "🪪", label: "Visa", value: "Pas de visa pour les Français (90 jours)" },
    { icon: "💰", label: "Monnaie", value: "Sol péruvien (S/) — retrait DAB recommandé, peu de cartes acceptées" },
    { icon: "🗣️", label: "Langue", value: "Espagnol et quechua — anglais dans les zones touristiques" },
    { icon: "🔌", label: "Prise électrique", value: "Type A/B/C — 220V (adaptateur recommandé)" },
    { icon: "📱", label: "Réseau", value: "SIM locale (Claro, Movistar) — réseau limité dans les zones reculées" },
    { icon: "🚰", label: "Eau du robinet", value: "Non potable — eau en bouteille indispensable" },
    { icon: "💊", label: "Santé", value: "Vaccin fièvre jaune recommandé pour l'Amazonie, médicament contre le mal d'altitude (Diamox)" },
  ],
};
