export const BRUNEI = {
  code: "BRN",
  numericId: 96,
  name: "Brunéi",
  emoji: "🇧🇳",
  capital: "Bandar Seri Begawan",
  language: "Malais, Anglais",
  currency: "Dollar de Brunéi (BND)",
  timezone: "UTC+8",
  filter: { budgetMin: 60, budgetMid: 120, tripMin: 1000, tripMid: 2200 },
  description:
    "Brunéi est un minuscule sultanat souverain niché sur l'île de Bornéo, l'un des États les plus riches du monde grâce à ses immenses réserves pétrolières. Cette richesse se reflète dans ses mosquées aux dômes dorés spectaculaires, ses palais royaux et son architecture de prestige, mais aussi dans la conservation de vastes forêts tropicales primaires. Kampong Ayer, le plus grand village sur pilotis du monde habité en permanence, offre un contraste saisissant avec l'opulence royale environnante.",
  bestPeriods: [
    {
      months: "Mars–Octobre",
      label: "Moins pluvieux",
      color: "#22c55e",
      description: "Pluies moins fréquentes, idéal pour visiter les forêts de Temburong et les sites culturels.",
      icon: "☀️",
    },
    {
      months: "Novembre–Février",
      label: "Saison des pluies",
      color: "#f59e0b",
      description: "Pluies abondantes du nord-est, mais les sites restent accessibles. Températures identiques.",
      icon: "🌧️",
    },
  ],
  weatherCities: [
    {
      id: "bandar_seri_begawan",
      name: "Bandar Seri Begawan",
      region: "Capitale",
      data: [
        { month: "Jan", temp: 26, rain: 200, icon: "⛅" },
        { month: "Fév", temp: 26, rain: 150, icon: "☀️" },
        { month: "Mar", temp: 27, rain: 100, icon: "🌧️" },
        { month: "Avr", temp: 27, rain: 110, icon: "🌧️" },
        { month: "Mai", temp: 27, rain: 140, icon: "🌧️" },
        { month: "Jun", temp: 27, rain: 120, icon: "🌧️" },
        { month: "Jul", temp: 26, rain: 130, icon: "☀️" },
        { month: "Aoû", temp: 26, rain: 155, icon: "☀️" },
        { month: "Sep", temp: 26, rain: 145, icon: "☀️" },
        { month: "Oct", temp: 26, rain: 170, icon: "☀️" },
        { month: "Nov", temp: 26, rain: 230, icon: "⛅" },
        { month: "Déc", temp: 27, rain: 200, icon: "🌧️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Mosquée Omar Ali Saifuddien",
      region: "Bandar Seri Begawan",
      description:
        "La mosquée Omar Ali Saifuddien est l'emblème architectural de Brunéi, une chef-d'œuvre de marbre blanc et de dômes dorés construite en 1958 et entourée d'un lagon artificiel qui reflète sa silhouette majestueuse. Considérée comme l'une des plus belles mosquées d'Asie du Sud-Est, elle peut accueillir jusqu'à 3 000 fidèles dans ses espaces intérieurs ornés de mosaïques vénitiennes et de vitraux britanniques. La promenade nocturne autour du lagon illuminé est un moment de sérénité inoubliable.",
      wikipedia: "Omar_Ali_Saifuddien_Mosque",
      tags: ["Mosquée", "Architecture", "Religion", "Nuit"],
      mustSee: [
        { name: "Dôme doré — vue depuis le lagon au coucher du soleil", wikipedia: "File:Sultan Omar Ali Saifuddien Mosque; 2002.jpg" },
        { name: "Réplique de la barge royale — sur le lagon, décoration de fêtes", wikipedia: "File:Mahligai barge, Omar Ali Saifuddien Mosque, April 2025 05.jpg" },
        { name: "Intérieur — mosaïques vénitiennes et marbres italiens", wikipedia: "File:Interior of Omar Ali Saifuddien Mosque, April 2025.jpg" },
        { name: "Promenade nocturne — illuminations spectaculaires après la nuit", wikipedia: "File:Sultan Omar Ali Saifuddin Mosque 02.jpg" },
      ],
    },
    {
      id: 2,
      name: "Kampong Ayer",
      region: "Bandar Seri Begawan",
      description:
        "Kampong Ayer est le plus grand village sur pilotis du monde, une ville aquatique de 30 000 habitants construite sur les eaux du fleuve Brunéi depuis au moins 1521, date à laquelle Magellan le décrivit déjà dans ses journaux de voyage. Ce labyrinthe de maisons en bois reliées par des passerelles et desservies par des taxis-bateaux abrite des mosquées, des cliniques, des écoles et des marchés flottants. Se promener dans ses ruelles à l'aube, loin des circuits touristiques, révèle une vie quotidienne fascinante.",
      wikipedia: "Kampong_Ayer",
      tags: ["Village sur l'eau", "Culture", "Histoire", "Bateau"],
      mustSee: [
        { name: "Musée culturel de Kampong Ayer — exposition sur la vie aquatique", wikipedia: "File:BN-bsb-kampong-ayer.jpg" },
        { name: "Traversée en water taxi — réseau de bateaux-taxis entre les villages", wikipedia: "File:Kampong Ayer 27 May 2023 34.jpg" },
        { name: "Mosquée flottante — prière du vendredi en communauté", wikipedia: "File:Jeti 16, Kampong Ayer, Brunei, April 2025.jpg" },
      ],
    },
    {
      id: 3,
      name: "Parc national d'Ulu Temburong",
      region: "District de Temburong",
      description:
        "Le parc national d'Ulu Temburong est un sanctuaire de forêt primaire de 550 km² accessible uniquement en bateau rapide et en longboat depuis la capitale, traversant la Malaisie orientale. Cette forêt vierge millénaire, pratiquement intacte, abrite une biodiversité extraordinaire : proboscis, gibbons, pythons réticulés et des centaines d'espèces d'oiseaux. La passerelle aérienne culminant à 60 mètres au-dessus de la canopée offre une vue spectaculaire sur l'immensité de la forêt tropicale.",
      wikipedia: "Ulu_Temburong_National_Park",
      tags: ["Forêt tropicale", "Biodiversité", "Nature", "Canopée"],
      mustSee: [
        { name: "Passerelle de la canopée — 60 m de hauteur sur la forêt primaire", wikipedia: "File:Ulu Temburong Canopy Walk 2013 12.jpg" },
        { name: "Longboat sur la rivière — navigation en pirogue à moteur dans la jungle", wikipedia: "Ulu_Temburong_National_Park" },
        { name: "Cascades de Temburong — baignade dans les eaux cristallines de la rivière", wikipedia: "File:Ulu Temburong Canopy Walk 2013 24.jpg" },
        { name: "Observation des proboscis — singes au grand nez au lever du soleil", wikipedia: "Proboscis_monkey" },
      ],
    },
    {
      id: 4,
      name: "Palais royal Istana Nurul Iman",
      region: "Bandar Seri Begawan",
      description:
        "L'Istana Nurul Iman est la résidence officielle du Sultan de Brunéi et la plus grande résidence royale au monde, avec ses 1 788 pièces, ses 257 salles de bain et ses écuries pour 110 poneys de polo. Cette architecture moghole-malaise aux dômes dorés est normalement fermée au public, mais son parc extérieur et la vue depuis le fleuve restent accessibles. Lors de la fête du Hari Raya Aïd el-Fitr, le sultan ouvre traditionnellement le palais aux habitants et aux visiteurs.",
      wikipedia: "Istana_Nurul_Iman",
      tags: ["Palais", "Royauté", "Architecture", "Record"],
      mustSee: [
        { name: "Vue depuis le fleuve — panorama du palais depuis un bateau", wikipedia: "File:Istana Nurul Iman's Heliport.jpg" },
        { name: "Dômes et minarets — architecture islamique à grande échelle", wikipedia: "File:1000200673.mp4-45579(1).jpg" },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "Brunéi est plus cher que ses voisins malaisiens ou indonésiens, mais reste abordable comparé aux standards occidentaux. La vente d'alcool est interdite dans le pays — il faut passer par les duty-free ou les hôtels internationaux autorisés.",
    currency: "BND",
    exchangeRate: "1€ ≈ 1,45 BND",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse ou petit hôtel", range: "25–50 €" },
          { label: "Hôtel 3 étoiles", range: "60–100 €" },
          { label: "Hôtel de luxe (Empire Hotel)", range: "150–300 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Nasi lemak ou mie goreng au marché", range: "2–4 €" },
          { label: "Restaurant local complet", range: "6–12 €" },
          { label: "Restaurant international ou hôtel", range: "20–40 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus local en ville (rare, peu pratique)", range: "0,50–1 €" },
          { label: "Taxi en ville (8–10 km)", range: "5–10 €" },
          { label: "Water taxi vers Kampong Ayer", range: "1–2 €" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée mosquée Omar Ali (gratuite)", range: "Gratuit" },
          { label: "Tour guidé Ulu Temburong (journée)", range: "60–120 €" },
          { label: "Location voiture / jour", range: "30–60 €" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "50–80 €/j",
        desc: "Guesthouse, repas au marché, transports en taxi, visites gratuites.",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "100–180 €/j",
        desc: "Hôtel 3-4 étoiles, restaurants, excursion Temburong, voiture de location.",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "5 jours",
      route: "Bandar Seri Begawan → Kampong Ayer → Ulu Temburong → BSB",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1000 – 1400 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Brunéi (via KL ou Singapour)", amount: "550–800 €" },
            { label: "Hébergement (4 nuits)", amount: "100–160 €" },
            { label: "Transports locaux", amount: "30–60 €" },
            { label: "Nourriture + boissons", amount: "60–100 €" },
            { label: "Activités (Temburong inclus)", amount: "80–150 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2000 – 3000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Brunéi (direct ou premium)", amount: "700–1100 €" },
            { label: "Hébergement (4 nuits)", amount: "400–700 €" },
            { label: "Transports et location voiture", amount: "150–250 €" },
            { label: "Nourriture + restaurants", amount: "150–250 €" },
            { label: "Activités et excursions", amount: "200–350 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "14–18h avec 1–2 escales (Kuala Lumpur, Singapour ou Dubaï). Royal Brunei Airlines depuis certains hubs" },
    { icon: "🪪", label: "Visa", value: "Exemption de visa pour les ressortissants français jusqu'à 30 jours" },
    { icon: "💰", label: "Monnaie", value: "Dollar de Brunéi (BND), paritaire avec le dollar de Singapour. CB largement acceptée" },
    { icon: "🗣️", label: "Langue", value: "Malais officiel, anglais très répandu dans les commerces et hôtels" },
    { icon: "🔌", label: "Prise électrique", value: "Type G britannique (240V) — adaptateur universel nécessaire" },
    { icon: "💊", label: "Santé", value: "Pas de vaccin obligatoire. Hépatite A recommandée. Soins de santé de bonne qualité" },
    { icon: "🍺", label: "Alcool", value: "Vente et consommation publique d'alcool interdites. Touristes peuvent importer 2L en duty-free à l'arrivée" },
    { icon: "👗", label: "Tenue vestimentaire", value: "Tenue décente requise dans les mosquées et bâtiments officiels. Code vestimentaire respectueux recommandé partout" },
  ],
};
