export const NIGERIA = {
  code: "NGA",
  numericId: 566,
  name: "Nigéria",
  emoji: "🇳🇬",
  capital: "Abuja",
  language: "Anglais, Haoussa, Yoruba, Igbo",
  currency: "Naira (NGN)",
  timezone: "UTC+1",
  filter: {
    budgetMin: 40, budgetMid: 85,
    tripMin: 900, tripMid: 1900,
  },
  description:
    "Le Nigéria est la première économie d'Afrique et le pays le plus peuplé du continent. Entre la mégalopole trépidante de Lagos, la capitale moderne d'Abuja, les réserves animalières de Yankari et l'héritage artistique millénaire du royaume de Bénin, le pays offre une diversité fascinante rarement explorée par les voyageurs.",

  bestPeriods: [
    {
      months: "Novembre – Mars",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "Saison sèche avec l'harmattan du nord. Températures agréables, pas de pluie, idéal pour visiter les parcs nationaux et les villes. Meilleure période pour les safaris à Yankari.",
      icon: "☀️",
    },
    {
      months: "Avril – Juin",
      label: "Début de saison des pluies",
      color: "#f59e0b",
      description:
        "Les pluies commencent progressivement. La végétation verdit, les parcs sont encore accessibles. Éviter juillet-octobre au sud (Lagos très humide).",
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "lagos",
      name: "Lagos",
      region: "Lagos (côte)",
      data: [
        { month: "Jan", temp: 27, rain: 35,  icon: "⛅" },
        { month: "Fév", temp: 28, rain: 45,  icon: "⛅" },
        { month: "Mar", temp: 29, rain: 80,  icon: "⛅" },
        { month: "Avr", temp: 28, rain: 120, icon: "🌧️" },
        { month: "Mai", temp: 27, rain: 190, icon: "🌧️" },
        { month: "Jun", temp: 26, rain: 280, icon: "⛅" },
        { month: "Jul", temp: 25, rain: 320, icon: "⛅" },
        { month: "Aoû", temp: 24, rain: 210, icon: "⛅" },
        { month: "Sep", temp: 25, rain: 200, icon: "⛅" },
        { month: "Oct", temp: 26, rain: 150, icon: "🌧️" },
        { month: "Nov", temp: 28, rain: 65,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 25,  icon: "⛅" },
      ],
    },
    {
      id: "abuja",
      name: "Abuja",
      region: "Territoire de la capitale fédérale (intérieur)",
      data: [
        { month: "Jan", temp: 25, rain: 5,   icon: "☀️" },
        { month: "Fév", temp: 27, rain: 10,  icon: "⛅" },
        { month: "Mar", temp: 30, rain: 35,  icon: "⛅" },
        { month: "Avr", temp: 31, rain: 65,  icon: "⛅" },
        { month: "Mai", temp: 29, rain: 130, icon: "🌧️" },
        { month: "Jun", temp: 27, rain: 180, icon: "🌧️" },
        { month: "Jul", temp: 25, rain: 230, icon: "⛅" },
        { month: "Aoû", temp: 24, rain: 270, icon: "⛅" },
        { month: "Sep", temp: 25, rain: 220, icon: "⛅" },
        { month: "Oct", temp: 27, rain: 85,  icon: "⛅" },
        { month: "Nov", temp: 27, rain: 15,  icon: "⛅" },
        { month: "Déc", temp: 25, rain: 5,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Lagos",
      region: "Lagos",
      description:
        "Lagos est la plus grande ville d'Afrique, une mégalopole de plus de 20 millions d'habitants débordant d'énergie, de culture et de contrastes. Le marché de Lekki, la plage de Bar Beach, le National Museum et la scène musicale afrobeats en font une destination unique au monde.",
      wikipedia: "Lagos",
      tags: ["Ville", "Culture", "Marché", "Musique", "Plage", "Gastronomie"],
      mustSee: [
        { name: "Marché de Lekki — artisanat et tissus", wikipedia: "File:Shopping District - Lagos Nigeria.jpg" },
        { name: "Nike Art Gallery — art contemporain nigérian", wikipedia: "Nike_Art_Gallery" },
        { name: "National Museum Lagos — bronzes et ivoires", wikipedia: "File:Garden in front of museum (6349971557).jpg" },
        { name: "Bar Beach & Victoria Island", wikipedia: "File:Aerial_view_of_victoria_island_in_Lagos,_Nigeria_with_habours_for_yatches.jpg" },
      ],
    },
    {
      id: 2,
      name: "Abuja",
      region: "Territoire de la capitale fédérale",
      description:
        "Abuja, capitale fédérale planifiée depuis les années 1980, impressionne par son architecture moderne et ses monuments grandioses. La mosquée nationale, la cathédrale nationale et le rocher d'Aso Rock offrent un visage très différent du Nigéria.",
      wikipedia: "Abuja",
      tags: ["Ville", "Architecture", "Monuments", "Politique"],
      mustSee: [
        { name: "Aso Rock — rocher monolithique emblématique", wikipedia: "Aso_Rock" },
        { name: "Mosquée nationale du Nigéria", wikipedia: "File:AbujaNationalMosque.jpg" },
        { name: "Millenium Tower & Cultural Centre", wikipedia: "File:Newlea.jpg" },
        { name: "Musée national d'Abuja", wikipedia: "Abuja" },
      ],
    },
    {
      id: 3,
      name: "Parc national de Yankari",
      region: "Bauchi",
      description:
        "Le parc national de Yankari est la plus grande réserve naturelle du Nigéria. On y observe éléphants, lions, buffles et babouins, avec en bonus les sources d'eau chaude naturelles de Wikki Spring, véritables piscines naturelles dans la brousse.",
      wikipedia: "File:Wikki warm spring, YANKARI Game Reserve, Bauchi.jpg",
      tags: ["Safari", "Nature", "Faune", "Sources chaudes"],
      mustSee: [
        { name: "Wikki Spring — sources chaudes cristallines", wikipedia: "File:Wikki Warm Spring Lake.jpg" },
        { name: "Éléphants de savane du parc", wikipedia: "File:Elephants in yankari 2.jpg" },
        { name: "Marshall Caves — grottes préhistoriques", wikipedia: "File:Marshall Caves.jpg" },
      ],
    },
    {
      id: 4,
      name: "Bénin City & Royaume du Bénin",
      region: "Edo",
      description:
        "Bénin City est le berceau de l'un des royaumes les plus sophistiqués d'Afrique précoloniale, célèbre pour ses bronzes et ivoires arrachés par les Britanniques en 1897. Le musée national de Bénin expose ce patrimoine exceptionnel, et certaines pièces commencent à être restituées.",
      wikipedia: "File:Areal view of the ancient city of Benin.jpg",
      tags: ["Histoire", "Art", "Royaume", "Bronzes", "UNESCO", "Architecture"],
      mustSee: [
        { name: "Musée national de Bénin — bronzes et ivoires", wikipedia: "File:Nat Museum, Benin.jpg" },
        { name: "Palais royal d'Oba — siège de la monarchie", wikipedia: "File:Royal_Palace_of_the_Oba_of_Benin_cropped.jpg" },
        { name: "Ruines des remparts de Bénin (UNESCO proposé)", wikipedia: "File:Benin Moat 1.png" },
        { name: "Marché de Bénin City", wikipedia: "File:New Benin Market, Benin City.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "Le Nigéria présente des coûts très variables selon les villes et le standing choisi. Lagos est l'une des villes les plus chères d'Afrique subsaharienne pour les étrangers, mais la nourriture de rue reste très accessible. Le naira est soumis à des fluctuations importantes.",
    currency: "NGN",
    exchangeRate: "1€ ≈ 1 800 NGN",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / auberge locale", price: "15–30 €", detail: "En dehors de Lagos" },
          { label: "Hôtel 3★ Lagos / Abuja", price: "50–80 €", detail: "Clim, sécurité, petit-déjeuner" },
          { label: "Hôtel de charme / lodge", price: "90–150 €", detail: "Yankari, Victoria Island" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Suya (brochettes de rue)", price: "1–3 €", detail: "Incontournable et délicieux" },
          { label: "Buka (resto local — jollof rice)", price: "3–7 €", detail: "Repas complet local" },
          { label: "Restaurant touristique Lagos", price: "15–35 €", detail: "Cuisine internationale" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus local (danfo) Lagos", price: "0,20–0,50 €", detail: "Minibus jaunes emblématiques" },
          { label: "Uber / bolt (Lagos)", price: "3–10 €", detail: "Plus sûr que les taxis" },
          { label: "Vol domestique Lagos–Abuja", price: "40–80 €", detail: "1h de vol" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée parc Yankari + logement", price: "20–40 €", detail: "Par personne par nuit" },
          { label: "Visite National Museum Lagos", price: "2–5 €", detail: "Entrée + guide" },
          { label: "Excursion en pirogue — Delta Niger", price: "30–60 €", detail: "Demi-journée avec guide" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "40–60 €/j", desc: "Guesthouse + bouffe locale + transport public", color: "#22c55e" },
      { type: "Confort", daily: "85–130 €/j", desc: "Hôtel 3★ + restos + Uber + excursions", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Lagos (3j) → Bénin City (2j) → Abuja (2j) → Yankari (3j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "900 – 1 300 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Lagos", amount: "350–550 €" },
            { label: "Hébergement (10 nuits)", amount: "200–300 €" },
            { label: "Transports locaux + vols domestiques", amount: "150–200 €" },
            { label: "Nourriture + boissons", amount: "120–180 €" },
            { label: "Activités + entrées", amount: "100–150 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 900 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Lagos", amount: "500–800 €" },
            { label: "Hébergement (10 nuits)", amount: "600–900 €" },
            { label: "Transports locaux + vols domestiques", amount: "300–450 €" },
            { label: "Nourriture + boissons", amount: "300–400 €" },
            { label: "Activités + guides", amount: "200–300 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",    value: "~6h (Ethiopian Airlines, Air France, Turkish Airlines via escale)" },
    { icon: "🪪", label: "Visa",                value: "Visa obligatoire — e-Visa en ligne (~160 USD+). Processus complexe, prévoir plusieurs semaines." },
    { icon: "💰", label: "Monnaie",             value: "Naira (NGN) — retrait DAB conseillé, cartes acceptées dans les hôtels" },
    { icon: "🗣️", label: "Langue",              value: "Anglais (officiel) + Yoruba, Haoussa, Igbo selon la région" },
    { icon: "🔌", label: "Prise électrique",    value: "Type G (comme au Royaume-Uni) — 220 V" },
    { icon: "💊", label: "Santé",               value: "Antipaludéen OBLIGATOIRE + fièvre jaune OBLIGATOIRE — eau en bouteille uniquement" },
    { icon: "🔒", label: "Sécurité",            value: "Vigilance élevée à Lagos — éviter les quartiers isolés la nuit, informez-vous avant le voyage" },
    { icon: "📱", label: "Réseau & Internet",   value: "Bonne 4G dans les grandes villes, MTN et Airtel disponibles en SIM locale" },
  ],
};
