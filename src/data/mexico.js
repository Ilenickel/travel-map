export const MEXICO = {
  code: "MEX",
  numericId: 484,
  name: "Mexique",
  emoji: "🇲🇽",
  capital: "Mexico",
  language: "Espagnol",
  currency: "Peso (MXN)",
  timezone: "UTC-6",
  filter: {
    budgetMin: 35, budgetMid: 85,
    tripMin: 1400, tripMid: 2800,
  },
  description:
    "Le Mexique est une mosaïque de civilisations : pyramides aztèques et mayas, colonial baroque d'Oaxaca et San Cristóbal, plages turquoise de Cancún et de la Riviera Maya, cuisine classée UNESCO, tequila et mariachis. Un pays d'une richesse culturelle infinie.",

  bestPeriods: [
    {
      months: "Novembre – Février",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "Meilleure période pour tout le pays : clima agréable dans les highlands, mer turquoise à Cancún, sites archéologiques confortables.",
      icon: "☀️",
    },
    {
      months: "Mars – Mai",
      label: "Printemps",
      color: "#f9a8d4",
      description:
        "Saison sèche qui se prolonge, chaleur augmentant. Idéal pour le Yucatán et la Riviera Maya avant les pluies.",
      icon: "🌵",
    },
    {
      months: "Octobre – Novembre",
      label: "Día de Muertos",
      color: "#a78bfa",
      description:
        "La Fête des Morts (2 novembre) est l'une des plus belles célébrations culturelles du monde, particulièrement à Oaxaca et Mexico.",
      icon: "💀",
    },
  ],

  weatherCities: [
    {
      id: "mexico-city",
      name: "Mexico",
      region: "Centre",
      data: [
        { month: "Jan", temp: 14, rain: 31,  icon: "⛅" },
        { month: "Fév", temp: 16, rain: 5,   icon: "☀️" },
        { month: "Mar", temp: 18, rain: 55,  icon: "☀️" },
        { month: "Avr", temp: 20, rain: 69,  icon: "☀️" },
        { month: "Mai", temp: 18, rain: 55,  icon: "☀️" },
        { month: "Jun", temp: 17, rain: 155, icon: "☀️" },
        { month: "Jul", temp: 16, rain: 165, icon: "☀️" },
        { month: "Aoû", temp: 19, rain: 224, icon: "⛅" },
        { month: "Sep", temp: 18, rain: 309, icon: "⛅" },
        { month: "Oct", temp: 17, rain: 179, icon: "☀️" },
        { month: "Nov", temp: 15, rain: 56,  icon: "⛅" },
        { month: "Déc", temp: 14, rain: 0,   icon: "⛅" },
      ],
    },
    {
      id: "cancun",
      name: "Cancún",
      region: "Quintana Roo",
      data: [
        { month: "Jan", temp: 24, rain: 65,  icon: "☀️" },
        { month: "Fév", temp: 24, rain: 40,  icon: "☀️" },
        { month: "Mar", temp: 25, rain: 35,  icon: "☀️" },
        { month: "Avr", temp: 27, rain: 45,  icon: "⛅" },
        { month: "Mai", temp: 29, rain: 70,  icon: "⛅" },
        { month: "Jun", temp: 30, rain: 150, icon: "🌧️" },
        { month: "Jul", temp: 29, rain: 140, icon: "🌧️" },
        { month: "Aoû", temp: 30, rain: 165, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 210, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 190, icon: "🌧️" },
        { month: "Nov", temp: 26, rain: 95,  icon: "☀️" },
        { month: "Déc", temp: 24, rain: 75,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Mexico",
      region: "Centre",
      description:
        "L'une des plus grandes mégapoles du monde, construite sur les ruines de Tenochtitlán aztèque. Musée d'Anthropologie exceptionnel, quartier de Coyoacán et gastronomie de classe mondiale.",
      wikipedia: "Mexico_City",
      tags: ["Ville", "Histoire", "Culture", "Gastronomie"],
      mustSee: [
        { name: "Musée national d'Anthropologie", wikipedia: "National_Museum_of_Anthropology_(Mexico)" },
        { name: "Teotihuacan — Pyramides du Soleil et de la Lune", wikipedia: "Teotihuacan" },
        { name: "Centro Histórico & Zócalo", wikipedia: "File:Facade - Temple of San Agustín - Mexico 2024.jpg" },
        { name: "Coyoacán — maison de Frida Kahlo", wikipedia: "Frida_Kahlo_Museum" },
      ],
    },
    {
      id: 2,
      name: "Cancún & Riviera Maya",
      region: "Yucatán",
      description:
        "Plages de sable blanc et mer des Caraïbes turquoise, cenotes mystérieux (grottes inondées), ruines mayas de Tulum et Cobá. Station balnéaire internationale et nature préservée.",
      wikipedia: "File:Hotel Zone in Cancun, Mexico.jpg",
      tags: ["Plage", "Mer", "Nature", "Plongée"],
      mustSee: [
        { name: "Ruines mayas de Tulum", wikipedia: "Tulum" },
        { name: "Cenotes (Gran Cenote, Ik Kil)", wikipedia: "Cenote" },
        { name: "Parc Xcaret / Xel-Há", wikipedia: "Xcaret" },
        { name: "Île de Cozumel — plongée", wikipedia: "File:Cozumel, Mexico 1996.jpg" },
      ],
    },
    {
      id: 3,
      name: "Oaxaca",
      region: "Sud",
      description:
        "Capitale culinaire du Mexique, avec ses moles, ses tlayudas et son mezcal artisanal. Ruines zapotèques de Monte Albán et marchés aux textiles indigènes extraordinaires.",
      wikipedia: "Oaxaca",
      tags: ["Gastronomie", "Culture", "Histoire", "Artisanat"],
      mustSee: [
        { name: "Monte Albán — cité zapotèque", wikipedia: "Monte_Albán" },
        { name: "Marché de Tlacolula", wikipedia: "Tlacolula_de_Matamoros" },
        { name: "Villages artisanaux (Teotitlán, Arrazola)", wikipedia: "Teotitlán_del_Valle" },
      ],
    },
    {
      id: 4,
      name: "Chichén Itzá & Yucatán",
      region: "Yucatán",
      description:
        "La pyramide El Castillo de Chichén Itzá est l'une des Nouvelles Sept Merveilles du Monde. La péninsule du Yucatán regorge de sites mayas, cenotes et villes coloniales.",
      wikipedia: "Chichen_Itza",
      tags: ["Histoire", "UNESCO", "Archéologie", "Nature"],
      mustSee: [
        { name: "Chichén Itzá — El Castillo", wikipedia: "Chichen_Itza" },
        { name: "Uxmal — site maya", wikipedia: "Uxmal" },
        { name: "Mérida — capitale coloniale", wikipedia: "File:Mérida, Yucatán Julio 2019 01.jpg" },
        { name: "Cenote Ik Kil", wikipedia: "Ik_Kil" },
      ],
    },
    {
      id: 5,
      name: "Baja California & Cuivre",
      region: "Baja California / Chihuahua",
      description:
        "La péninsule de Basse-Californie et le nord mexicain offrent des paysages désertiques spectaculaires, du Canyon du Cuivre, plus vaste que le Grand Canyon, aux lagunes où viennent mettre bas les baleines grises. Missions coloniales, déserts et mer de Cortés composent une nature brute et préservée.",
      wikipedia: "Copper_Canyon",
      tags: ["Désert", "Nature", "Randonnée", "UNESCO"],
      mustSee: [
        { name: "Canyon du Cuivre", wikipedia: "Copper_Canyon" },
        { name: "Aire de refuge des baleines de Basse-Californie", wikipedia: "File:Islands_and_Protected_Areas_of_the_Gulf_of_California-113600.jpg" },
        { name: "Cabo San Lucas", wikipedia: "File:Sunset in Cabo San Lucas, Mexico.jpg" },
        { name: "Mission de San Francisco Javier", wikipedia: "File:San javier mission 3 (39760880685).jpg" },
        { name: "La Paz & balades en kayak", wikipedia: "File:Vista aérea del Malecón de La Paz, Baja California 15.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Mexique est excellent rapport qualité-prix pour les Européens. La nourriture de rue est délicieuse et bon marché, et les hébergements de qualité restent accessibles. Cancún est plus chère que le reste.",
    currency: "MXN ($)",
    exchangeRate: "~20 MXN = 1 €",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir hostel", price: "8–15 €", detail: "Bon niveau dans les villes touristiques" },
          { label: "Guesthouse / posada", price: "20–45 €", detail: "Chambre privée avec ambiance locale" },
          { label: "Hôtel confort", price: "45–100 €", detail: "Chambre double bien équipée, parfois piscine" },
          { label: "Boutique hôtel (Oaxaca, Mérida)", price: "80–180 €", detail: "Maison coloniale avec patio" },
          { label: "Resort all-inclusive (Cancún)", price: "150–500 €", detail: "Tout inclus, formule très populaire" },
        ],
      },
      {
        id: "food",
        icon: "🍜",
        label: "Nourriture",
        items: [
          { label: "Tacos de rue (3 pièces)", price: "1–2 €", detail: "La base de l'alimentation mexicaine" },
          { label: "Comida corrida (menu midi)", price: "4–8 €", detail: "Soupe + plat + boisson, repas complet" },
          { label: "Guacamole + chips + margarita", price: "6–12 €", detail: "Ritual apéritif mexicain" },
          { label: "Restaurant mid-range", price: "10–20 €", detail: "Mole, enchiladas, chile en nogada" },
          { label: "Mezcal artisanal (verre)", price: "3–8 €", detail: "Bien meilleur que la tequila !" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Métro Mexico (ligne)", price: "0,25 €", detail: "Un des moins chers au monde !" },
          { label: "Uber / Didi", price: "2–8 €", detail: "Bien plus sûr que le taxi dans les grandes villes" },
          { label: "Bus ADO (longue distance)", price: "8–30 €", detail: "Réseau confortable, Mexico–Oaxaca ~15 €" },
          { label: "Vol intérieur", price: "30–100 €", detail: "Volaris, Interjet — bien desservi" },
          { label: "Collectivo (minibus Yucatán)", price: "1–3 €", detail: "Idéal entre sites maya et cenotes" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Chichén Itzá", price: "18–25 €", detail: "Entrée + son et lumière le soir" },
          { label: "Musée d'Anthropologie (Mexico)", price: "4 €", detail: "Gratuit le dimanche pour les Mexicains" },
          { label: "Teotihuacan (pyramides)", price: "5–8 €", detail: "À 50 km de Mexico, très accessible" },
          { label: "Plongée (Cozumel)", price: "40–80 €", detail: "2 plongées, équipement inclus" },
          { label: "Excursion cenotes (demi-journée)", price: "20–40 €", detail: "Baignade en eau claire, snorkeling" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "35–60 €/j", desc: "Hostel + tacos + transports locaux", color: "#22c55e" },
      { type: "Confort", daily: "85–140 €/j", desc: "Hôtel confort + restos + activités", color: "#3b82f6" },
      { type: "Luxe", daily: "250 €+/j", desc: "Resort 5★ + gastronomie + excursions privées", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Mexico (3j) → Teotihuacan (1j) → Oaxaca (3j) → Mérida (2j) → Chichén Itzá (1j) → Riviera Maya (4j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 400 – 1 900 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Mexico", amount: "450–700 €" },
            { label: "Vols & bus intérieurs", amount: "100–180 €" },
            { label: "Hébergement (14 nuits)", amount: "200–350 €" },
            { label: "Nourriture", amount: "200–350 €" },
            { label: "Activités & imprévus", amount: "200–350 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 800 – 4 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Mexico", amount: "600–900 €" },
            { label: "Vols intérieurs & transferts", amount: "200–350 €" },
            { label: "Hébergement (14 nuits)", amount: "700–1 200 €" },
            { label: "Nourriture & restaurants", amount: "600–900 €" },
            { label: "Activités & imprévus", amount: "450–700 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "5 500 € +",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Mexico (business)", amount: "2 000–3 500 €" },
            { label: "Transferts privés & vols", amount: "400–700 €" },
            { label: "Resort all-inclusive & boutique hôtels (14 nuits)", amount: "1 500–3 000 €" },
            { label: "Gastronomie & expériences", amount: "700–1 200 €" },
            { label: "Excursions privées & imprévus", amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~11–12h direct (Aeroméxico, Air France)" },
    { icon: "🪪", label: "Visa", value: "Pas de visa pour les Français (180 jours)" },
    { icon: "💰", label: "Monnaie", value: "Peso mexicain (MXN) — retrait DAB, carte peu acceptée en dehors des villes" },
    { icon: "🗣️", label: "Langue", value: "Espagnol — anglais dans les zones touristiques (Cancún, Mexico)" },
    { icon: "🔌", label: "Prise électrique", value: "Type A/B — 127V (adaptateur recommandé)" },
    { icon: "📱", label: "Réseau", value: "SIM locale bon marché (Telcel) ou eSIM internationale" },
    { icon: "🚰", label: "Eau du robinet", value: "Non potable — eau en bouteille absolument nécessaire" },
    { icon: "💊", label: "Santé", value: "Vaccin hépatite A recommandé, anti-moustiques (dengue), montfezuma's revenge à prévoir" },
  ],
};
