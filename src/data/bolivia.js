export const BOLIVIA = {
  code: "BOL",
  numericId: 68,
  name: { fr: "Bolivie", en: "Bolivia" },
  emoji: "🇧🇴",
  capital: {
    fr: "Sucre (constitutionnelle) / La Paz (siège du gouvernement)",
    en: "Sucre (constitutional capital) / La Paz (seat of government)",
  },
  language: { fr: "Espagnol, quechua, aymara", en: "Spanish, Quechua, Aymara" },
  currency: { fr: "Boliviano (BOB)", en: "Boliviano (BOB)" },
  timezone: "UTC-4",
  filter: {
    budgetMin: 25,
    budgetMid: 55,
    tripMin: 1200,
    tripMid: 2200,
  },
  description: {
    fr: "La Bolivie est l'un des pays les plus authentiques et abordables d'Amérique du Sud. Entre le Salar d'Uyuni (plus grand désert de sel du monde), La Paz perchée à 3 650 m, le lac Titicaca et l'Amazonie, c'est une destination d'une diversité extraordinaire à petit budget.",
    en: "Bolivia is one of the most authentic and affordable countries in South America. Between the Uyuni Salt Flat (the largest salt desert in the world), La Paz perched at 3,650 m, Lake Titicaca and the Amazon, it offers extraordinary diversity on a small budget.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Octobre", en: "May – October" },
      label: { fr: "Saison sèche", en: "Dry season" },
      color: "#fbbf24",
      description: {
        fr: "Meilleure période pour le Salar d'Uyuni et les Andes. Journées ensoleillées, nuits froides, routes praticables.",
        en: "The best time for the Uyuni Salt Flat and the Andes. Sunny days, cold nights and passable roads.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Novembre – Avril", en: "November – April" },
      label: { fr: "Saison des pluies (miroir Uyuni)", en: "Rainy season (Uyuni mirror effect)" },
      color: "#38bdf8",
      description: {
        fr: "L'Uyuni recouvert d'eau devient un miroir géant reflétant le ciel – une image iconique. Certaines routes peuvent être impraticables.",
        en: "When covered with water, Uyuni turns into a giant mirror reflecting the sky — an iconic sight. Some roads can become impassable.",
      },
      icon: "🪞",
    },
  ],

  weatherCities: [
    {
      id: "la-paz",
      name: "La Paz",
      region: { fr: "Andes (3 650 m)", en: "Andes (3,650 m)" },
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
      region: { fr: "Chuquisaca", en: "Chuquisaca" },
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
      region: { fr: "Potosí (Altiplano)", en: "Potosí (Altiplano)" },
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
      name: { fr: "Salar d'Uyuni", en: "Uyuni Salt Flat" },
      region: { fr: "Altiplano", en: "Altiplano" },
      description: {
        fr: "Le plus grand désert de sel du monde (10 573 km²) est le joyau de la Bolivie. À la saison sèche, ses hexagones de sel s'étendent à perte de vue ; à la saison des pluies, il devient un miroir géant réfléchissant les nuages. Les îles de cactus (Isla Incahuasi) y émergent comme par magie.",
        en: "The world's largest salt desert (10,573 km²) is Bolivia's crown jewel. In the dry season, its salt hexagons stretch as far as the eye can see; in the rainy season, it becomes a giant mirror reflecting the clouds. Cactus islands such as Isla Incahuasi rise from it as if by magic.",
      },
      wikipedia: "Salar_de_Uyuni",
      tags: ["Paysages", "Unique", "Photos", "Altiplano", "Désert", "Nature"],
      mustSee: [
        { name: "Isla Incahuasi", wikipedia: "File:04-Isla_Incahuasi-nX-1.jpg" },
        { name: { fr: "Cimetière de trains (Uyuni)", en: "Uyuni Train Cemetery" }, wikipedia: "File:02-Train-Cemetery-Uyuni-nX-22.jpg" },
        { name: "Laguna Colorada", wikipedia: "Laguna_Colorada" },
        { name: { fr: "Sol de Mañana (geysers)", en: "Sol de Mañana (geysers)" }, wikipedia: "File:Sol de Mañana 2018.jpg" },
      ],
    },
    {
      id: 2,
      name: "La Paz",
      region: { fr: "Andes", en: "Andes" },
      description: {
        fr: "La plus haute capitale administrative du monde (3 650 m) est une ville fascinante suspendue dans un canyon andin. Le téléphérique Mi Teleférico offre des vues extraordinaires sur la cuvette et le majestueux Illimani (6 439 m). Le marché des sorcières (Mercado de las Brujas) est unique en son genre.",
        en: "The world's highest administrative capital (3,650 m) is a fascinating city hanging inside an Andean canyon. The Mi Teleférico cable car offers extraordinary views over the basin and the majestic Illimani (6,439 m). The Witches' Market (Mercado de las Brujas) is one of a kind.",
      },
      wikipedia: "La_Paz",
      tags: ["Ville", "Altitude", "Culture", "Marchés", "Gastronomie"],
      mustSee: [
        { name: "Mi Teleférico", wikipedia: "File:Mi Teleférico - Linea Naranja.jpg" },
        { name: { fr: "Mercado de las Brujas", en: "Witches' Market" }, wikipedia: "File:05-Mercado de las Brujas (La Paz)-8.jpg" },
        { name: "Illimani", wikipedia: "Illimani" },
        { name: { fr: "Valle de la Luna (La Paz)", en: "Valley of the Moon (La Paz)" }, wikipedia: "Valle_de_la_Luna_(Bolivia)" },
      ],
    },
    {
      id: 3,
      name: { fr: "Lac Titicaca", en: "Lake Titicaca" },
      region: { fr: "Altiplano", en: "Altiplano" },
      description: {
        fr: "Le plus haut lac navigable du monde (3 812 m) est sacré pour les peuples aymara. Les îles flottantes des Uros, l'île de la Lune et l'île du Soleil (Isla del Sol) abritent des ruines incas et des communautés traditionnelles.",
        en: "The world's highest navigable lake (3,812 m) is sacred to the Aymara people. The floating Uros Islands, Moon Island and Sun Island (Isla del Sol) are home to Inca ruins and traditional communities.",
      },
      wikipedia: "Lake_Titicaca",
      tags: ["Lac", "Culture", "Inca", "Îles Flottantes"],
      mustSee: [
        { name: { fr: "Îles Uros (flottantes)", en: "Floating Uros Islands" }, wikipedia: "File:Indigenas Uros en el Lago Titicaca Bolivia.jpg" },
        { name: "Isla del Sol", wikipedia: "Isla_del_Sol" },
        { name: { fr: "Copacabana (Bolivie)", en: "Copacabana (Bolivia)" }, wikipedia: "Copacabana,_Bolivia" },
        { name: { fr: "Ruines de Tiwanaku", en: "Tiwanaku Ruins" }, wikipedia: "Tiwanaku" },
      ],
    },
    {
      id: 4,
      name: "Sucre",
      region: { fr: "Chuquisaca", en: "Chuquisaca" },
      description: {
        fr: "La capitale constitutionnelle blanche est l'une des plus belles villes coloniales d'Amérique du Sud, inscrite au patrimoine UNESCO. Ses façades blanches immaculées, ses marchés colorés et son atmosphère paisible en font un havre de paix.",
        en: "The white constitutional capital is one of the most beautiful colonial cities in South America and a UNESCO World Heritage site. Its immaculate white façades, colourful markets and peaceful atmosphere make it a true haven.",
      },
      wikipedia: "File:Sucre capital de Bolivia.jpg",
      tags: ["Colonial", "UNESCO", "Histoire", "Architecture"],
      mustSee: [
        { name: { fr: "Cathédrale Métropolitaine", en: "Metropolitan Cathedral" }, wikipedia: "File:Catedral - Sucre.jpg" },
        { name: { fr: "Casa de la Libertad", en: "Casa de la Libertad" }, wikipedia: "File:Casa de la libertad.jpg" },
        { name: { fr: "Recoleta (belvédère)", en: "Recoleta viewpoint" }, wikipedia: "File:Cerro San Cristobal - Vistas desde Cumbre - Recoleta - 04.jpg" },
        { name: { fr: "Cal Orck'o (dinosaures)", en: "Cal Orck'o (dinosaurs)" }, wikipedia: "File:Dinosaur Valley in Cal Orcko Bolivia (photos canned).jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Bolivie est l'une des destinations les moins chères d'Amérique du Sud. Les prix sont très bas pour l'hébergement, la nourriture et les transports.",
      en: "Bolivia is one of the cheapest destinations in South America. Prices are very low for accommodation, food and transport.",
    },
    currency: "Boliviano (BOB)",
    exchangeRate: "1€ ≈ 7,5–8 BOB",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Dortoir auberge de jeunesse", en: "Hostel dorm" }, price: "5–10 €", detail: { fr: "La Paz, Uyuni, Sucre", en: "La Paz, Uyuni, Sucre" } },
          { label: { fr: "Chambre double hôtel simple", en: "Basic hotel double room" }, price: "15–30 €", detail: { fr: "Confort basique à correct", en: "Basic to decent comfort" } },
          { label: { fr: "Hôtel de sel (Uyuni)", en: "Salt hotel (Uyuni)" }, price: "50–120 €", detail: { fr: "Expérience unique, murs et sol en sel", en: "Unique experience, with salt walls and floors" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Menú del día (menu local)", en: "Menú del día (local set menu)" }, price: "1,5–3 €", detail: { fr: "Soupe + plat + boisson, très complet", en: "Soup + main dish + drink, very filling" } },
          { label: { fr: "Salteña (chausson bolivien)", en: "Salteña (Bolivian savoury pastry)" }, price: "0,50–1 €", detail: { fr: "Snack du matin, délicieux", en: "A delicious morning snack" } },
          { label: { fr: "Restaurant touristique", en: "Tourist restaurant" }, price: "6–15 €", detail: { fr: "La Paz ou Sucre, cuisine andine", en: "In La Paz or Sucre, serving Andean cuisine" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus La Paz–Uyuni (nuit)", en: "La Paz–Uyuni bus (overnight)" }, price: "8–15 €", detail: { fr: "Route longue (10h), préférer le jour", en: "Long journey (10h), daytime travel is preferable" } },
          { label: { fr: "Tour Salar d'Uyuni (3 jours)", en: "Uyuni Salt Flat tour (3 days)" }, price: "50–80 €", detail: { fr: "Tout compris, en groupe, depuis Uyuni", en: "All-inclusive, shared tour, departing from Uyuni" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités & Culture", en: "Activities & Culture" },
        items: [
          { label: { fr: "Téléphérique Mi Teleférico La Paz", en: "Mi Teleférico cable car in La Paz" }, price: "0,50 €", detail: { fr: "Par ligne, vues exceptionnelles", en: "Per line, with exceptional views" } },
          { label: { fr: "Excursion Isla del Sol (Titicaca)", en: "Isla del Sol excursion (Titicaca)" }, price: "10–20 €", detail: { fr: "Bateau + guide, journée", en: "Boat + guide, full-day trip" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "25–40 €/j", desc: { fr: "Auberge, menú local, bus, tours en groupe", en: "Hostel, local set menus, buses and shared tours" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "55–90 €/j", desc: { fr: "Hôtel correct, restaurants, tours guidés", en: "Decent hotel, restaurants and guided tours" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "150 €+/j", desc: { fr: "Hôtel de luxe, tours privés, vols intérieurs", en: "Luxury hotel, private tours and domestic flights" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks" },
      route: { fr: "La Paz – Lac Titicaca – Sucre – Uyuni", en: "La Paz – Lake Titicaca – Sucre – Uyuni" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 200 – 1 600 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–La Paz", en: "Return flight Paris–La Paz" }, amount: "700–900 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "150–250 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "150–220 €" },
            { label: { fr: "Transport local + tours", en: "Local transport + tours" }, amount: "100–180 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "80–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 200 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–La Paz", en: "Return flight Paris–La Paz" }, amount: "900–1 200 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "500–700 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "350–500 €" },
            { label: { fr: "Transport + tours guidés", en: "Transport + guided tours" }, amount: "250–400 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "200–300 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "5 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–La Paz (Business)", en: "Return flight Paris–La Paz (business)" }, amount: "2 500–3 500 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "1 200–1 800 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "400–600 €" },
            { label: { fr: "Transport & excursions privées", en: "Transport & private excursions" }, amount: "400–600 €" },
            { label: { fr: "Activités premium", en: "Premium activities" }, amount: "200–400 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~14–16h avec escale (Lima ou Bogotá)", en: "~14–16h with a layover (Lima or Bogotá)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Sans visa pour les Français (90 jours)", en: "Visa-free for French citizens (90 days)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Boliviano (1€ ≈ 7,5–8 BOB)", en: "Boliviano (€1 ≈ 7.5–8 BOB)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Espagnol, quechua, aymara", en: "Spanish, Quechua, Aymara" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type A/C – 220 V (adaptateur conseillé)", en: "Type A/C – 220 V (adapter recommended)" } },
  ],
};
