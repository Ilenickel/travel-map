export const ARGENTINA = {
  code: "ARG",
  numericId: 32,
  name: "Argentine",
  emoji: "🇦🇷",
  capital: "Buenos Aires",
  language: "Espagnol",
  currency: "Peso argentin (ARS)",
  timezone: "UTC-3",
  filter: {
    budgetMin: 35,
    budgetMid: 80,
    tripMin: 1800,
    tripMid: 3500,
  },
  description:
    "L'Argentine est un pays d'immenses contrastes, des glaciers de Patagonie aux vignobles de Mendoza, en passant par la vibrante Buenos Aires et les chutes d'Iguazú. Terre du tango, du mate et de l'asado, elle offre une richesse culturelle et naturelle extraordinaire.",

  bestPeriods: [
    {
      months: "Octobre – Décembre",
      label: "Printemps austral",
      color: "#86efac",
      description:
        "Températures agréables à Buenos Aires et dans le Nord. Idéal pour la Patagonie avant les grandes chaleurs.",
      icon: "🌸",
    },
    {
      months: "Mars – Mai",
      label: "Automne austral",
      color: "#fb923c",
      description:
        "Les feuillages dorés de Patagonie sont splendides. Buenos Aires est très agréable avec moins de touristes.",
      icon: "🍂",
    },
    {
      months: "Juin – Août",
      label: "Ski & Patagonie Sud",
      color: "#93c5fd",
      description:
        "Saison de ski dans les Andes (Bariloche, Las Leñas). La Patagonie est accessible mais venteuse.",
      icon: "⛷️",
    },
  ],

  weatherCities: [
    {
      id: "buenos-aires",
      name: "Buenos Aires",
      region: "Pampa",
      data: [
        { month: "Jan", temp: 26, rain: 120, icon: "☀️" },
        { month: "Fév", temp: 25, rain: 100, icon: "☀️" },
        { month: "Mar", temp: 23, rain: 100, icon: "☀️" },
        { month: "Avr", temp: 18, rain: 90, icon: "☀️" },
        { month: "Mai", temp: 14, rain: 70, icon: "⛅" },
        { month: "Jun", temp: 11, rain: 60, icon: "⛅" },
        { month: "Jul", temp: 10, rain: 55, icon: "⛅" },
        { month: "Aoû", temp: 12, rain: 60, icon: "⛅" },
        { month: "Sep", temp: 14, rain: 75, icon: "⛅" },
        { month: "Oct", temp: 18, rain: 95, icon: "☀️" },
        { month: "Nov", temp: 22, rain: 100, icon: "☀️" },
        { month: "Déc", temp: 25, rain: 110, icon: "☀️" },
      ],
    },
    {
      id: "bariloche",
      name: "Bariloche",
      region: "Patagonie",
      data: [
        { month: "Jan", temp: 18, rain: 30, icon: "☀️" },
        { month: "Fév", temp: 17, rain: 35, icon: "☀️" },
        { month: "Mar", temp: 13, rain: 50, icon: "⛅" },
        { month: "Avr", temp: 9, rain: 60, icon: "⛅" },
        { month: "Mai", temp: 5, rain: 85, icon: "❄️" },
        { month: "Jun", temp: 2, rain: 85, icon: "❄️" },
        { month: "Jul", temp: 1, rain: 80, icon: "❄️" },
        { month: "Aoû", temp: 3, rain: 60, icon: "❄️" },
        { month: "Sep", temp: 6, rain: 55, icon: "❄️" },
        { month: "Oct", temp: 10, rain: 55, icon: "⛅" },
        { month: "Nov", temp: 14, rain: 35, icon: "⛅" },
        { month: "Déc", temp: 17, rain: 35, icon: "☀️" },
      ],
    },
    {
      id: "mendoza",
      name: "Mendoza",
      region: "Cuyo (vignobles)",
      data: [
        { month: "Jan", temp: 28, rain: 30, icon: "⛅" },
        { month: "Fév", temp: 27, rain: 40, icon: "⛅" },
        { month: "Mar", temp: 23, rain: 35, icon: "☀️" },
        { month: "Avr", temp: 17, rain: 25, icon: "☀️" },
        { month: "Mai", temp: 12, rain: 20, icon: "⛅" },
        { month: "Jun", temp: 7, rain: 20, icon: "❄️" },
        { month: "Jul", temp: 6, rain: 15, icon: "❄️" },
        { month: "Aoû", temp: 8, rain: 15, icon: "⛅" },
        { month: "Sep", temp: 13, rain: 20, icon: "⛅" },
        { month: "Oct", temp: 18, rain: 30, icon: "☀️" },
        { month: "Nov", temp: 22, rain: 25, icon: "☀️" },
        { month: "Déc", temp: 26, rain: 30, icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Buenos Aires",
      region: "Pampa",
      description:
        "La « Paris de l'Amérique du Sud » est une métropole effervescente aux multiples quartiers : le coloré Caminito à La Boca, le chic Palermo, l'historique San Telmo. Le tango y est né et les steakhouses y sont légendaires.",
      wikipedia: "Buenos_Aires",
      tags: ["Culture", "Gastronomie", "Nightlife", "Architecture"],
      mustSee: [
        { name: "La Boca / Caminito", wikipedia: "File:LaBoca_ST_98.jpg" },
        { name: "Teatro Colón", wikipedia: "Teatro_Colón" },
        { name: "MALBA", wikipedia: "File:Buenos_Aires_-_Palermo_-_Malba.jpg" },
        { name: "Recoleta Cemetery", wikipedia: "La_Recoleta_Cemetery" },
      ],
    },
    {
      id: 2,
      name: "Patagonie & Bariloche",
      region: "Patagonie",
      description:
        "La Patagonie offre des paysages époustouflants : lacs glaciaires, forêts de hêtres, condors et sommets enneigés. Bariloche est la porte d'entrée du circuit des Andes avec ses stations de ski et de randonnée.",
      wikipedia: "File:View_from_the_Golf_course_at_Llao_Llao.jpg",
      tags: ["Nature", "Randonnée", "Ski", "Lacs"],
      mustSee: [
        { name: "Parc National Nahuel Huapi", wikipedia: "Nahuel_Huapi_National_Park" },
        { name: "Cerro Catedral", wikipedia: "File:Bariloche_cerra_catedral.jpg" },
        { name: "Circuito Chico", wikipedia: "Nahuel_Huapi_National_Park" },
        { name: "Villa La Angostura", wikipedia: "File:Lago_Correntoso_Playa.JPG" },
      ],
    },
    {
      id: 3,
      name: "Chutes d'Iguazú",
      region: "Misiones",
      description:
        "L'une des merveilles naturelles du monde, les chutes d'Iguazú s'étendent sur 2,7 km avec 275 cascades dont la spectaculaire Garganta del Diablo. Accessibles des deux côtés de la frontière Argentine-Brésil.",
      wikipedia: "Iguazu_Falls",
      tags: ["Nature", "Cascades", "Faune", "UNESCO"],
      mustSee: [
        { name: "Garganta del Diablo", wikipedia: "File:Iguacu-004.jpg" },
        { name: "Parc National Iguazú", wikipedia: "File:Cataratas027.jpg" },
        { name: "Sentier inférieur", wikipedia: "Iguazu_Falls" },
        { name: "Bateau sous les chutes", wikipedia: "Iguazu_Falls" },
      ],
    },
    {
      id: 4,
      name: "Mendoza & Route du Vin",
      region: "Cuyo",
      description:
        "Au pied des Andes, Mendoza est le paradis du vin argentin, notamment le Malbec. Les bodegas (domaines viticoles) proposent des dégustations dans un cadre montagnard exceptionnel.",
      wikipedia: "Mendoza,_Argentina",
      tags: ["Vin", "Gastronomie", "Montagne", "Vélo"],
      mustSee: [
        { name: "Luján de Cuyo", wikipedia: "File:Plaza_de_Luján_de_Cuyo,_Mendoza,_Argentina.jpg" },
        { name: "Aconcagua", wikipedia: "Aconcagua" },
        { name: "Valle de Uco", wikipedia: "File:El_Valle_de_Uco_y_los_Andes_(4775311449).jpg" },
      ],
    },
    {
      id: 5,
      name: "El Calafate & Los Glaciares",
      region: "Santa Cruz (Patagonie)",
      description:
        "Le parc national Los Glaciares abrite le majestueux glacier Perito Moreno, l'un des rares glaciers au monde en progression. El Chaltén, village de randonnée, donne accès aux sommets du Fitz Roy.",
      wikipedia: "File:Glacial_iceberg_in_Argentina.jpg",
      tags: ["Glaciers", "Randonnée", "Nature", "UNESCO"],
      mustSee: [
        { name: "Glacier Perito Moreno", wikipedia: "Perito_Moreno_Glacier" },
        { name: "Mont Fitz Roy", wikipedia: "File:Fitz_Roy_2.jpg" },
        { name: "El Chaltén", wikipedia: "File:El_Chaltén.jpg" },
        { name: "Torres del Paine (Chili, proche)", wikipedia: "File:Monte_Almirante_Nieto.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "L'Argentine offre un excellent rapport qualité-prix grâce au taux de change favorable. Les dépenses varient selon que vous changez vos euros au taux officiel ou au taux parallèle (blue dollar).",
    currency: "Peso argentin (ARS)",
    exchangeRate: "1€ ≈ 1 000–1 200 ARS (taux fluctuant, vérifiez avant le départ)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir auberge de jeunesse", price: "8–15 €", detail: "Buenos Aires, qualité variable" },
          { label: "Chambre double hôtel 3★", price: "30–60 €", detail: "Petit-déjeuner souvent inclus" },
          { label: "Hôtel boutique 4★", price: "80–150 €", detail: "Palermo ou Recoleta, cadre soigné" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Empanadas (4 pièces)", price: "2–3 €", detail: "Snack incontournable" },
          { label: "Menu du midi restaurant local", price: "5–10 €", detail: "Avec boisson" },
          { label: "Asado au restaurant", price: "15–30 €", detail: "Grill argentin complet avec vin" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus longue distance (ex: BA–Mendoza)", price: "25–45 €", detail: "Cama (siège-lit), très confortable" },
          { label: "Subte (métro Buenos Aires)", price: "0,10 €", detail: "Trajet unique, tarif subventionné" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Spectacle de tango", price: "40–80 €", detail: "Avec dîner, show professionnel" },
          { label: "Dégustation bodega Mendoza", price: "15–30 €", detail: "Visite guidée + 4–5 vins" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "35–55 €/j", desc: "Auberge, resto local, transports en commun", color: "#22c55e" },
      { type: "Confort", daily: "80–130 €/j", desc: "Hôtel 3★, restaurants mid-range, excursions", color: "#3b82f6" },
      { type: "Luxe", daily: "200 €+/j", desc: "Hôtel boutique, gastronomie, vols intérieurs", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Buenos Aires – Mendoza – Bariloche – El Calafate",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 800 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Buenos Aires", amount: "700–900 €" },
            { label: "Hébergement (14 nuits)", amount: "300–450 €" },
            { label: "Nourriture", amount: "300–400 €" },
            { label: "Transport local (bus longue distance)", amount: "150–250 €" },
            { label: "Activités & imprévus", amount: "150–250 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 500 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Buenos Aires", amount: "900–1 200 €" },
            { label: "Hébergement (14 nuits)", amount: "700–1 000 €" },
            { label: "Nourriture", amount: "600–800 €" },
            { label: "Transport local + vols intérieurs", amount: "500–700 €" },
            { label: "Activités & imprévus", amount: "400–600 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "7 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Buenos Aires (Business)", amount: "2 500–4 000 €" },
            { label: "Hébergement (14 nuits)", amount: "2 000–3 000 €" },
            { label: "Nourriture & restaurants gastronomiques", amount: "800–1 200 €" },
            { label: "Transport & excursions privées", amount: "600–1 000 €" },
            { label: "Activités premium", amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~14h (Air France, Iberia via Madrid)" },
    { icon: "🪪", label: "Visa", value: "Sans visa pour les Français (90 jours)" },
    { icon: "💰", label: "Monnaie", value: "Peso argentin (1€ ≈ 1 000–1 200 ARS)" },
    { icon: "🗣️", label: "Langue", value: "Espagnol (argentin)" },
    { icon: "🔌", label: "Prise électrique", value: "Type I – 220 V (adaptateur nécessaire)" },
    { icon: "📱", label: "Réseau", value: "4G disponible dans les villes, SIM locale recommandée" },
    { icon: "🚰", label: "Eau du robinet", value: "Potable à Buenos Aires, eau en bouteille ailleurs" },
    { icon: "💊", label: "Santé", value: "Pas de vaccins obligatoires, assurance voyage indispensable" },
  ],
};
