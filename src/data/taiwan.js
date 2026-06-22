export const TAIWAN = {
  code: "TWN",
  numericId: 158,
  name: "Taïwan",
  emoji: "🇹🇼",
  capital: "Taipei",
  language: "Mandarin",
  currency: "Dollar taïwanais (NT$)",
  timezone: "UTC+8",
  filter: {
    budgetMin: 35, budgetMid: 80,
    tripMin: 1400, tripMid: 2800,
  },
  description:
    "Taïwan est le « trésor de la Chine » : cuisine de rue exceptionnelle, marchés nocturnes animés, temples bouddhistes parfumés d'encens, montagnes sauvages, gorges spectaculaires (Taroko) et l'accueil le plus chaleureux d'Asie.",

  bestPeriods: [
    {
      months: "Octobre – Décembre",
      label: "Automne",
      color: "#22c55e",
      description:
        "Meilleure période : temps sec et agréable (20–25 °C), peu de typhons, idéal pour randonnée et excursions.",
      icon: "🌤",
    },
    {
      months: "Mars – Mai",
      label: "Printemps",
      color: "#f9a8d4",
      description:
        "Temperatures douces, floraisons de cerisiers dans les montagnes. Quelques pluies mais lumière magnifique.",
      icon: "🌸",
    },
    {
      months: "Juillet – Août",
      label: "Sud & Plages",
      color: "#3b82f6",
      description:
        "Le sud (Kenting, Kaohsiung) est parfait pour la mer. Attention aux typhons occasionnels.",
      icon: "☀️",
    },
  ],

  weatherCities: [
    {
      id: "taipei",
      name: "Taipei",
      region: "Nord",
      data: [
        { month: "Jan", temp: 15, rain: 85,  icon: "⛅" },
        { month: "Fév", temp: 15, rain: 165, icon: "⛅" },
        { month: "Mar", temp: 18, rain: 190, icon: "☀️" },
        { month: "Avr", temp: 21, rain: 155, icon: "☀️" },
        { month: "Mai", temp: 25, rain: 247, icon: "⛅" },
        { month: "Jun", temp: 28, rain: 327, icon: "🌧️" },
        { month: "Jul", temp: 29, rain: 248, icon: "🌧️" },
        { month: "Aoû", temp: 29, rain: 325, icon: "🌧️" },
        { month: "Sep", temp: 27, rain: 280, icon: "🌧️" },
        { month: "Oct", temp: 23, rain: 116, icon: "☀️" },
        { month: "Nov", temp: 20, rain: 79,  icon: "☀️" },
        { month: "Déc", temp: 17, rain: 70,  icon: "☀️" },
      ],
    },
    {
      id: "kaohsiung",
      name: "Kaohsiung",
      region: "Sud",
      data: [
        { month: "Jan", temp: 18, rain: 15,  icon: "☀️" },
        { month: "Fév", temp: 19, rain: 25,  icon: "☀️" },
        { month: "Mar", temp: 22, rain: 30,  icon: "☀️" },
        { month: "Avr", temp: 26, rain: 50,  icon: "☀️" },
        { month: "Mai", temp: 28, rain: 90,  icon: "⛅" },
        { month: "Jun", temp: 30, rain: 350, icon: "🌧️" },
        { month: "Jul", temp: 30, rain: 310, icon: "🌧️" },
        { month: "Aoû", temp: 30, rain: 360, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 180, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 30,  icon: "⛅" },
        { month: "Nov", temp: 24, rain: 15,  icon: "☀️" },
        { month: "Déc", temp: 20, rain: 12,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Taipei",
      region: "Nord",
      description:
        "Capitale dynamique avec ses marchés nocturnes envoûtants, le gratte-ciel Taipei 101, les temples du vieux quartier et les meilleurs xiaolongbao du monde.",
      wikipedia: "Taipei",
      tags: ["Ville", "Gastronomie", "Culture", "Shopping"],
      mustSee: [
        { name: "Taipei 101", wikipedia: "Taipei_101" },
        { name: "Marché nocturne de Shilin", wikipedia: "Shilin_Night_Market" },
        { name: "Temple Longshan", wikipedia: "File:Taipei Taiwan Mengjia-Longshan-Temple-00.jpg" },
        { name: "Musée national du Palais", wikipedia: "National_Palace_Museum" },
      ],
    },
    {
      id: 2,
      name: "Gorges de Taroko",
      region: "Est",
      description:
        "Canyon de marbre aux parois vertigineuses, l'un des sites naturels les plus époustouflants d'Asie. Randonnées dans la jungle, cascades et temples suspendus.",
      wikipedia: "File:Taroko Gorge Huang Chung Yu 01.jpg",
      tags: ["Nature", "Randonnée", "Canyon", "Montagne"],
      mustSee: [
        { name: "Gorges de Taroko", wikipedia: "File:Taroko Gorge Huang Chung Yu 01.jpg" },
        { name: "Temple Changchun", wikipedia: "File:Chang Chun Shrine amk.jpg" },
        { name: "Sentier Zhuilu", wikipedia: "File:Zhuilu Trail 2.jpg" },
      ],
    },
    {
      id: 3,
      name: "Jiufen",
      region: "Nord-Est",
      description:
        "Village de montagne perché sur des falaises, inspiration supposée du film Le Voyage de Chihiro. Ruelles escarpées, lanternes rouges, maisons de thé avec vue sur la mer.",
      wikipedia: "File:Jiufen Buildings 1.jpg",
      tags: ["Paysage", "Culture", "Gastronomie", "Vue"],
      mustSee: [
        { name: "Rue Jishan — ruelles aux lanternes", wikipedia: "File:Jiufen at night lantern glow.jpg" },
        { name: "Qingyun Temple", wikipedia: "File:Jiufen Qingyun Temple, Taiwan, 2024.jpg" },
        { name: "Jinguashi", wikipedia: "File:Jinguashi view from Jioufen 20100731.jpg" },
      ],
    },
    {
      id: 4,
      name: "Tainan",
      region: "Sud",
      description:
        "Ancienne capitale du pays, véritable musée vivant avec ses temples et sa cuisine de rue légendaire. Considérée comme la capitale gastronomique de Taïwan.",
      wikipedia: "Tainan",
      tags: ["Histoire", "Gastronomie", "Temples", "Culture"],
      mustSee: [
        { name: "Fort Anping", wikipedia: "File:Tainan Taiwan Fort-Zeelandia-01.jpg" },
        { name: "Temple Chikanlou", wikipedia: "File:Chihkan Tower night.JPG" },
        { name: "Hayashi Department Store", wikipedia: "Hayashi_Department_Store" },
        { name: "Parc national Taijiang", wikipedia: "Taijiang_National_Park" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Taïwan est l'une des meilleures destinations rapport qualité-prix en Asie. La street food est extraordinaire et bon marché, et les transports sont très efficaces.",
    currency: "TWD (NT$)",
    exchangeRate: "~34 NT$ = 1 €",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir hostel", price: "12–20 €", detail: "Très propres, bien situés" },
          { label: "Guesthouse familiale", price: "25–50 €", detail: "Accueil chaleureux, souvent avec breakfast" },
          { label: "Hôtel confort", price: "50–100 €", detail: "Chambre double bien équipée" },
          { label: "Hôtel boutique design", price: "100–200 €", detail: "Taipei dispose d'excellents hôtels design" },
          { label: "Hôtel de luxe", price: "200–500 €", detail: "W, Mandarin Oriental, Grand Hyatt" },
        ],
      },
      {
        id: "food",
        icon: "🍜",
        label: "Nourriture",
        items: [
          { label: "Street food (marché nocturne)", price: "1–3 €", detail: "Xiao chi, tanghulu, scallion pancake" },
          { label: "Restaurant local (小吃)", price: "3–7 €", detail: "Riz au porc, soupe de nouilles, dumplings" },
          { label: "Xiaolongbao (Din Tai Fung)", price: "15–30 €", detail: "Le meilleur xiao long bao du monde" },
          { label: "Restaurant mid-range", price: "8–15 €", detail: "Cuisine taïwanaise raffinée" },
          { label: "Bubble tea", price: "1,50–3 €", detail: "Inventé à Taïwan — incontournable !" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "MRT Taipei (EasyCard)", price: "0,60–1,50 €", detail: "Réseau moderne et efficace" },
          { label: "Bus urbain", price: "0,50–1 €", detail: "Gratuit avec la EasyCard sur certaines lignes" },
          { label: "Train HSR (TGV)", price: "15–40 €", detail: "Taipei–Kaohsiung en 1h45" },
          { label: "Train TRA (local)", price: "5–20 €", detail: "Côte est — paysages à couper le souffle" },
          { label: "Scooter en location", price: "10–20 €/j", detail: "Idéal pour explorer les régions" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Musée national du Palais", price: "4–6 €", detail: "Collection impériale chinoise inestimable" },
          { label: "Parc national de Taroko", price: "Gratuit", detail: "Accès libre, guides optionnels" },
          { label: "Bains thermaux (Beitou)", price: "3–10 €", detail: "Sources chaudes naturelles de soufre" },
          { label: "Cours de cuisine taïwanaise", price: "30–50 €", detail: "Dumplings, scallion pancakes" },
          { label: "Jiufen + côte Nord (tour)", price: "20–40 €", detail: "Excursion d'une journée depuis Taipei" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "35–55 €/j", desc: "Hostel + marchés nocturnes + MRT", color: "#22c55e" },
      { type: "Confort", daily: "80–130 €/j", desc: "Hôtel confort + restos + activités", color: "#3b82f6" },
      { type: "Luxe", daily: "220 €+/j", desc: "Hôtel boutique + gastronomie + excursions privées", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Taipei (5j) → Jiufen (1j) → Taroko (3j) → Tainan (2j) → Kaohsiung (3j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 400 – 1 900 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Taipei", amount: "550–800 €" },
            { label: "Transports intérieurs (HSR + TRA)", amount: "80–120 €" },
            { label: "Hébergement (14 nuits)", amount: "250–400 €" },
            { label: "Nourriture", amount: "200–350 €" },
            { label: "Activités & imprévus", amount: "150–250 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 800 – 3 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Taipei", amount: "700–1 000 €" },
            { label: "Transports intérieurs", amount: "120–200 €" },
            { label: "Hébergement (14 nuits)", amount: "800–1 200 €" },
            { label: "Nourriture (dont Din Tai Fung)", amount: "600–900 €" },
            { label: "Activités & imprévus", amount: "400–600 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "5 500 € +",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Taipei (business)", amount: "2 000–3 500 €" },
            { label: "Transferts privés", amount: "200–400 €" },
            { label: "Hébergement 5★ (14 nuits)", amount: "1 500–3 000 €" },
            { label: "Gastronomie", amount: "600–1 200 €" },
            { label: "Expériences & imprévus", amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~12h (escale à Hong Kong, Singapour ou Tokyo)" },
    { icon: "🪪", label: "Visa", value: "Pas de visa pour les Français (90 jours)" },
    { icon: "💰", label: "Monnaie", value: "Dollar taïwanais (NT$) — retrait DAB ou bureau de change" },
    { icon: "🗣️", label: "Langue", value: "Mandarin — anglais courant à Taipei et zones touristiques" },
    { icon: "🔌", label: "Prise électrique", value: "Type A — 110V (adaptateur nécessaire pour appareils 220V)" },
    { icon: "📱", label: "Réseau", value: "SIM prépayée à l'aéroport (Wi-Fi partout à Taipei)" },
    { icon: "🚰", label: "Eau du robinet", value: "Non potable directement — eau filtrée ou en bouteille" },
    { icon: "💊", label: "Santé", value: "Vaccin hépatite A recommandé, excellents hôpitaux dans les villes" },
  ],
};
