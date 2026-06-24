export const SPAIN = {
  code: "ESP",
  numericId: 724,
  name: "Espagne",
  emoji: "🇪🇸",
  capital: "Madrid",
  language: "Espagnol",
  currency: "Euro (€)",
  timezone: "UTC+1",
  filter: {
    budgetMin: 50, budgetMid: 110,
    tripMin: 1500, tripMid: 2800,
  },
  description:
    "L'Espagne séduit par sa diversité : Barcelone et Gaudí, Madrid et ses musées de classe mondiale, le flamenco d'Andalousie, les plages de la Costa del Sol, les tapas et la sangria, les paysages lunaires de Grenade et Séville.",

  bestPeriods: [
    {
      months: "Avril – Juin",
      label: "Printemps",
      color: "#22c55e",
      description:
        "Températures idéales (18–25 °C), feria de Séville, pèlerinage de Saint-Jacques-de-Compostelle, avant la chaleur et la foule estivales.",
      icon: "🌸",
    },
    {
      months: "Septembre – Octobre",
      label: "Arrière-saison",
      color: "#fb923c",
      description:
        "Parfait partout en Espagne : mer encore chaude au sud, températures agréables, vendanges en Rioja, moins de touristes.",
      icon: "🍇",
    },
    {
      months: "Juillet – Août",
      label: "Plages & Îles",
      color: "#3b82f6",
      description:
        "Soleil garanti sur les côtes et les Baléares (Ibiza, Majorque). Chaleur intense dans les terres mais l'Espagne vit la nuit.",
      icon: "☀️",
    },
  ],

  weatherCities: [
    {
      id: "valencia",
      name: "Valencia",
      region: "Communauté valencienne",
      data: [
        { month: "Jan", temp: 11, rain: 37,  icon: "⛅" },
        { month: "Fév", temp: 12, rain: 40,  icon: "⛅" },
        { month: "Mar", temp: 14, rain: 29,  icon: "⛅" },
        { month: "Avr", temp: 16, rain: 35,  icon: "☀️" },
        { month: "Mai", temp: 19, rain: 42,  icon: "☀️" },
        { month: "Jun", temp: 23, rain: 17,  icon: "☀️" },
        { month: "Jul", temp: 26, rain: 16,  icon: "☀️" },
        { month: "Aoû", temp: 26, rain: 12,  icon: "☀️" },
        { month: "Sep", temp: 23, rain: 77,  icon: "☀️" },
        { month: "Oct", temp: 19, rain: 70,  icon: "☀️" },
        { month: "Nov", temp: 15, rain: 38,  icon: "⛅" },
        { month: "Déc", temp: 11, rain: 61,  icon: "⛅" },
      ],
    },
    {
      id: "barcelona",
      name: "Barcelone",
      region: "Catalogne",
      data: [
        { month: "Jan", temp: 9,  rain: 45,  icon: "⛅" },
        { month: "Fév", temp: 10, rain: 35,  icon: "⛅" },
        { month: "Mar", temp: 12, rain: 45,  icon: "⛅" },
        { month: "Avr", temp: 15, rain: 50,  icon: "⛅" },
        { month: "Mai", temp: 19, rain: 55,  icon: "☀️" },
        { month: "Jun", temp: 23, rain: 40,  icon: "☀️" },
        { month: "Jul", temp: 26, rain: 25,  icon: "☀️" },
        { month: "Aoû", temp: 26, rain: 55,  icon: "☀️" },
        { month: "Sep", temp: 23, rain: 85,  icon: "☀️" },
        { month: "Oct", temp: 18, rain: 90,  icon: "☀️" },
        { month: "Nov", temp: 13, rain: 60,  icon: "⛅" },
        { month: "Déc", temp: 10, rain: 45,  icon: "⛅" },
      ],
    },
    {
      id: "seville",
      name: "Séville",
      region: "Andalousie",
      data: [
        { month: "Jan", temp: 11, rain: 85,  icon: "⛅" },
        { month: "Fév", temp: 12, rain: 70,  icon: "⛅" },
        { month: "Mar", temp: 15, rain: 70,  icon: "⛅" },
        { month: "Avr", temp: 18, rain: 60,  icon: "☀️" },
        { month: "Mai", temp: 22, rain: 40,  icon: "☀️" },
        { month: "Jun", temp: 26, rain: 15,  icon: "☀️" },
        { month: "Jul", temp: 29, rain: 2,   icon: "⛅" },
        { month: "Aoû", temp: 29, rain: 3,   icon: "⛅" },
        { month: "Sep", temp: 25, rain: 25,  icon: "☀️" },
        { month: "Oct", temp: 21, rain: 65,  icon: "☀️" },
        { month: "Nov", temp: 16, rain: 85,  icon: "☀️" },
        { month: "Déc", temp: 12, rain: 90,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Barcelone",
      region: "Catalogne",
      description:
        "Capital du modernisme catalan, Barcelone fascine avec la Sagrada Família de Gaudí, le Parc Güell, les plages urbaines et la vie nocturne la plus animée d'Europe.",
      wikipedia: "Barcelona",
      tags: ["Architecture", "Plage", "Culture", "Nuit", "Ville", "Gastronomie", "UNESCO"],
      mustSee: [
        { name: "Sagrada Família", wikipedia: "Sagrada_Família" },
        { name: "Parc Güell", wikipedia: "Park_Güell" },
        { name: "La Boqueria — Marché des Ramblas", wikipedia: "La_Boqueria" },
        { name: "Quartier gothique", wikipedia: "Gothic_Quarter,_Barcelona" },
      ],
    },
    {
      id: 2,
      name: "Madrid",
      region: "Communauté de Madrid",
      description:
        "Capitale de l'art avec le Prado (Vélasquez, Goya), le musée Reina Sofía (Guernica de Picasso) et le Thyssen-Bornemisza. Tapas, flamenco et vie nocturne intense.",
      wikipedia: "Madrid",
      tags: ["Art", "Culture", "Gastronomie", "Ville", "Histoire", "Architecture"],
      mustSee: [
        { name: "Musée du Prado", wikipedia: "Museo_del_Prado" },
        { name: "Musée Reina Sofía — Guernica", wikipedia: "File:Madrid_-_Museo_Nacional_Centro_de_Arte_Reina_Sofía_(MNCARS)_03.JPG" },
        { name: "Palais Royal", wikipedia: "Royal_Palace_of_Madrid" },
        { name: "Puerta del Sol & Retiro", wikipedia: "File:MADRID_100206_UDCI_023.jpg" },
      ],
    },
    {
      id: 3,
      name: "Séville",
      region: "Andalousie",
      description:
        "Capitale du flamenco et de la corrida, avec l'Alcázar mauresque, la cathédrale gothique la plus grande du monde et le quartier de Triana animé.",
      wikipedia: "Seville",
      tags: ["Histoire", "Culture", "Flamenco", "UNESCO", "Architecture", "Gastronomie"],
      mustSee: [
        { name: "Alcázar de Séville", wikipedia: "Alcázar_of_Seville" },
        { name: "Cathédrale de Séville & La Giralda", wikipedia: "Seville_Cathedral" },
        { name: "Quartier de Santa Cruz", wikipedia: "File:Vistas_de_Santa_Cruz_desde_Barrio_Nuevo_(Santa_Cruz_de_Tenerife).jpg" },
        { name: "Plaza de España", wikipedia: "Plaza_de_España,_Seville" },
      ],
    },
    {
      id: 4,
      name: "Grenade",
      region: "Andalousie",
      description:
        "L'Alhambra, palais-forteresse nasride aux jardins paradisiaques, est l'un des monuments les plus visités d'Espagne. Le quartier Albaicín préserve l'architecture mauresque.",
      wikipedia: "File:View_of_Albaicín_from_Alhambra._Granada,_Spain.jpg",
      tags: ["Histoire", "UNESCO", "Architecture", "Culture", "Ski", "Randonnée"],
      mustSee: [
        { name: "Alhambra & Generalife", wikipedia: "Alhambra" },
        { name: "Quartier Albaicín", wikipedia: "Albaicín" },
        { name: "Mirador San Nicolás", wikipedia: "File:Granada_-_View_from_Mirador_de_San_Nicolás_-_02.jpg" },
        { name: "Cathédrale et Chapelle Royale", wikipedia: "Granada_Cathedral" },
      ],
    },
    {
      id: 5,
      name: "Îles Baléares",
      region: "Îles Baléares",
      description:
        "Majorque, Minorque, Ibiza et Formentera — quatre îles méditerranéennes aux eaux turquoise, plages de rêve et culture très différente selon l'île choisie.",
      wikipedia: "File:Pollença, Balearic Islands, Spain - panoramio (307).jpg",
      tags: ["Plage", "Mer", "Fête", "Paysage", "Nature", "Randonnée"],
      mustSee: [
        { name: "Palma de Majorque", wikipedia: "File:Palma de Mallorca (Spain).jpg" },
        { name: "Formentera — plages paradisiaques", wikipedia: "File:Formentera es Mirador.jpg" },
        { name: "Ibiza — couchers de soleil à Café del Mar", wikipedia: "File:Eivissa - ses Figueretes from Airplane.jpg" },
        { name: "Minorque — Menorca Reserva de la Biosfera", wikipedia: "File:Menorca 2.jpg" },
      ],
    },
    {
      id: 6,
      name: "Almería & Las Bardenas",
      region: "Andalousie / Navarre",
      description:
        "Le sud-est de l'Espagne cache des paysages désertiques uniques en Europe, du désert de Tabernas, décor de westerns, aux formations érodées des Bardenas Reales. Entre cinéma, nature protégée et architecture mauresque, la région offre un dépaysement total. Les côtes sauvages de Cabo de Gata complètent ce tableau aride.",
      wikipedia: "Tabernas_Desert",
      tags: ["Désert", "Nature", "Architecture"],
      mustSee: [
        { name: "Désert de Tabernas", wikipedia: "Tabernas_Desert" },
        { name: "Parc naturel de Cabo de Gata", wikipedia: "Cabo_de_Gata-Níjar_Natural_Park" },
        { name: "Bardenas Reales", wikipedia: "Bardenas_Reales" },
        { name: "Alcazaba d'Almería", wikipedia: "File:Alcazaba_1,_Almeria,_Spain.jpg" },
        { name: "Mini Hollywood", wikipedia: "Mini_Hollywood" },
      ],
    },
  ],

  costOfLiving: {
    intro: "L'Espagne est l'un des pays d'Europe occidentale les plus abordables. Les tapas (souvent gratuites à Grenade et Granada !), le menu del día à 10–12 € et les hébergements compétitifs en font une excellente valeur.",
    currency: "EUR (€)",
    exchangeRate: "Monnaie locale",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir hostel", price: "15–28 €", detail: "Très bons hostels, ambiance internationale" },
          { label: "Pension / hostal", price: "35–60 €", detail: "Chambre privée abordable" },
          { label: "Hôtel confort", price: "60–120 €", detail: "Chambre double bien équipée" },
          { label: "Parador (château ou monastère)", price: "100–200 €", detail: "Réseau d'hôtels dans des monuments historiques" },
          { label: "Hôtel boutique", price: "150–350 €", detail: "Barcelone et Madrid offrent d'excellents boutique hôtels" },
        ],
      },
      {
        id: "food",
        icon: "🍜",
        label: "Nourriture",
        items: [
          { label: "Tapas (bar à tapas)", price: "1,50–3 € / tapa", detail: "Gratuites avec la consommation dans certaines villes" },
          { label: "Menu del día (déjeuner)", price: "10–14 €", detail: "3 plats + boisson + dessert — incontournable !" },
          { label: "Bocadillo / sandwich", price: "3–5 €", detail: "Jamón, tortilla, fromage" },
          { label: "Paella (Valencia)", price: "12–20 €", detail: "À Valencia pour l'authentique version" },
          { label: "Restaurant gastronomique", price: "40–150 €", detail: "L'Espagne a le plus d'étoiles Michelin au monde" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Métro Barcelona / Madrid", price: "1,20–2,40 €", detail: "T-Casual 10 voyages recommandée (~11 €)" },
          { label: "Bus urbain", price: "1,20–1,60 €", detail: "Réseau complet dans toutes les villes" },
          { label: "Train AVE (TGV espagnol)", price: "20–90 €", detail: "Madrid–Barcelone en 2h30, Madrid–Séville en 2h30" },
          { label: "Bus longue distance (ALSA)", price: "10–40 €", detail: "Alternative économique aux trains" },
          { label: "Vol intérieur (Vueling, Iberia)", price: "30–80 €", detail: "Utile pour les îles Baléares" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Sagrada Família", price: "26–36 €", detail: "Réservation indispensable plusieurs semaines avant" },
          { label: "Alhambra de Grenade", price: "14–19 €", detail: "Vendre ses billets 2-3 mois avant en haute saison !" },
          { label: "Musée du Prado", price: "15 €", detail: "Gratuit le soir de 18h à 20h" },
          { label: "Spectacle de flamenco", price: "25–50 €", detail: "Authentique à Séville, Grenade, Madrid" },
          { label: "Cours de cuisine espagnole", price: "50–80 €", detail: "Paella, tapas, sangria" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "50–75 €/j", desc: "Hostel + tapas + menu del día + transports", color: "#22c55e" },
      { type: "Confort", daily: "110–180 €/j", desc: "Hôtel confort + restos + activités", color: "#3b82f6" },
      { type: "Luxe", daily: "300 €+/j", desc: "Hôtel boutique + gastronomie étoilée + expériences", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Madrid (3j) → Séville (3j) → Grenade (2j) → Valencia (2j) → Barcelone (4j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 500 – 2 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Madrid ou Barcelone", amount: "80–200 €" },
            { label: "Trains AVE intérieurs", amount: "150–250 €" },
            { label: "Hébergement (14 nuits)", amount: "400–600 €" },
            { label: "Nourriture", amount: "450–600 €" },
            { label: "Activités & imprévus", amount: "350–500 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 800 – 4 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Madrid ou Barcelone", amount: "100–300 €" },
            { label: "Trains & transferts", amount: "200–350 €" },
            { label: "Hébergement (14 nuits)", amount: "1 000–1 600 €" },
            { label: "Nourriture & restaurants", amount: "900–1 300 €" },
            { label: "Activités & imprévus", amount: "500–700 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "6 000 € +",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Espagne (business)", amount: "400–1 200 €" },
            { label: "Transferts privés", amount: "300–600 €" },
            { label: "Paradores & hôtels boutique (14 nuits)", amount: "2 500–5 000 €" },
            { label: "Gastronomie étoilée", amount: "1 200–2 500 €" },
            { label: "Expériences & imprévus", amount: "800–1 500 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~2h (nombreuses compagnies, Paris–Madrid/Barcelone/Séville)" },
    { icon: "🪪", label: "Visa", value: "Pas de visa (espace Schengen)" },
    { icon: "💰", label: "Monnaie", value: "Euro (€) — cartes acceptées partout" },
    { icon: "🗣️", label: "Langue", value: "Espagnol (+ catalan, basque, galicien selon région)" },
    { icon: "🔌", label: "Prise électrique", value: "Type C/F — 230V (même qu'en France)" },
    { icon: "📱", label: "Réseau", value: "Roaming européen inclus, excellent réseau 4G/5G" },
    { icon: "🚰", label: "Eau du robinet", value: "Potable dans tout le pays" },
    { icon: "💊", label: "Santé", value: "Carte européenne d'assurance maladie valide" },
  ],
};
