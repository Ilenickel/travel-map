export const CUBA = {
  code: "CUB",
  numericId: 192,
  name: "Cuba",
  emoji: "🇨🇺",
  capital: "La Havane",
  language: "Espagnol",
  currency: "Peso cubain (CUP)",
  timezone: "UTC-5",
  filter: {
    budgetMin: 50, budgetMid: 120,
    tripMin: 1500, tripMid: 3500,
  },
  description:
    "Cuba est une capsule temporelle : voitures américaines des années 50, musique de salsa et son dans les ruelles de la Havane, plages vierges de Varadero et de Cayo Coco, Trinidad coloniale classée UNESCO et la vallée de Viñales, ses mogotes calcaires et ses plantations de tabac. Un pays unique, figé et fascinant.",

  bestPeriods: [
    {
      months: "Novembre – Avril",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "Saison idéale : températures parfaites (25–28°C), pluies rares, mer calme pour les cayes. Haute saison touristique mais justifiée.",
      icon: "🚗",
    },
    {
      months: "Juillet – Août",
      label: "Été chaud",
      color: "#ef4444",
      description:
        "Chaleur et humidité élevées (30–33°C), saison des cyclones (août–octobre). Réservé aux amateurs de plage sous la chaleur.",
      icon: "🌡️",
    },
  ],

  weatherCities: [
    {
      id: "la_havane",
      name: "La Havane",
      region: "Occidente",
      data: [
        { month: "Jan", temp: 22, rain: 45,  icon: "☀️" },
        { month: "Fév", temp: 23, rain: 40,  icon: "☀️" },
        { month: "Mar", temp: 25, rain: 40,  icon: "☀️" },
        { month: "Avr", temp: 26, rain: 50,  icon: "☀️" },
        { month: "Mai", temp: 27, rain: 100, icon: "🌧️" },
        { month: "Jun", temp: 29, rain: 130, icon: "🌧️" },
        { month: "Jul", temp: 30, rain: 120, icon: "🌧️" },
        { month: "Aoû", temp: 30, rain: 130, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 140, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 120, icon: "🌧️" },
        { month: "Nov", temp: 25, rain: 60,  icon: "⛅" },
        { month: "Déc", temp: 23, rain: 50,  icon: "☀️" },
      ],
    },
    {
      id: "trinidad",
      name: "Trinidad",
      region: "Centre",
      data: [
        { month: "Jan", temp: 23, rain: 40,  icon: "☀️" },
        { month: "Fév", temp: 24, rain: 30,  icon: "☀️" },
        { month: "Mar", temp: 26, rain: 40,  icon: "☀️" },
        { month: "Avr", temp: 27, rain: 60,  icon: "⛅" },
        { month: "Mai", temp: 29, rain: 130, icon: "🌧️" },
        { month: "Jun", temp: 30, rain: 160, icon: "🌧️" },
        { month: "Jul", temp: 31, rain: 150, icon: "🌧️" },
        { month: "Aoû", temp: 31, rain: 140, icon: "🌧️" },
        { month: "Sep", temp: 30, rain: 120, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 110, icon: "🌧️" },
        { month: "Nov", temp: 26, rain: 60,  icon: "⛅" },
        { month: "Déc", temp: 24, rain: 40,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "La Havane",
      region: "Occidente",
      description:
        "La Havane est une des capitales les plus charismatiques du monde : son Malecón face à la mer, ses Américaines rutilantes des années 50, son Vieux-Havane classé UNESCO, ses bars à mojitos légendaires (La Bodeguita del Medio) et sa musique omniprésente. Une ville qui vit intensément malgré tout.",
      wikipedia: "Havana",
      tags: ["UNESCO", "Musique", "Architecture", "Emblématique"],
      mustSee: [
        { name: "Malecón au coucher du soleil", wikipedia: "Malecón,_Havana" },
        { name: "Capitolio Nacional", wikipedia: "File:CapitolioNacionalDeColombia2004-7.jpg" },
        { name: "Plaza de la Revolución", wikipedia: "File:Plaza_de_la_Revolution.jpg" },
      ],
    },
    {
      id: 2,
      name: "Trinidad",
      region: "Centre",
      description:
        "Trinidad est la ville coloniale la mieux préservée de Cuba, classée UNESCO : son centre historique en pavés rose et ses maisons ocre-orangées encadrent la Plaza Mayor. La nuit, les escaliers de la Casa de la Música et les bars de la rue résonnent de son cubain jusqu'à l'aube.",
      wikipedia: "Trinidad,_Cuba",
      tags: ["UNESCO", "Colonial", "Musique", "Salsa"],
      mustSee: [
        { name: "Plaza Mayor & Église de la Santísima Trinidad", wikipedia: "File:Trinidad_(Kuba)_03.jpg" },
        { name: "Salsa sur les escaliers de la Casa de la Música", wikipedia: "Trinidad,_Cuba" },
        { name: "Cascades Topes de Collantes (randonnée)", wikipedia: "File:Cuba_2013-01-27_(8554174568).jpg" },
        { name: "Valle de los Ingenios (UNESCO) — anciens moulins", wikipedia: "File:Valle_de_los_ingenios2.jpg" },
      ],
    },
    {
      id: 3,
      name: "Viñales",
      region: "Occidente (Pinar del Río)",
      description:
        "La Vallée de Viñales, classée UNESCO, est le paysage le plus iconique de Cuba : des formations calcaires en pain de sucre (mogotes) s'élèvent au-dessus des plantations de tabac rouge — le meilleur tabac du monde. Les « vegas » (fermes de tabac) se visitent à cheval ou en vélo.",
      wikipedia: "Viñales_Valley",
      tags: ["UNESCO", "Nature", "Tabac", "Randonnée"],
      mustSee: [
        { name: "Mogotes — formations karstiques géantes", wikipedia: "File:Vallée_de_Viñales-Mogote_(1).jpg" },
        { name: "Cueva del Indio — grotte en barque", wikipedia: "File:CUBA_-_panoramio_(59).jpg" },
        { name: "Randonnée ou cheval entre les mogotes", wikipedia: "File:Fragmento_del_Valle_de_Viñales._Cuba.JPG" },
      ],
    },
    {
      id: 4,
      name: "Varadero & Cayes",
      region: "Matanzas / Ciego de Ávila",
      description:
        "Varadero offre 23 km de plage de sable blanc, une des plus longues des Caraïbes. Les cayes (Cayo Coco, Cayo Santa María) sont des atolls sauvages aux eaux turquoise, peu fréquentés, accessibles depuis Ciego de Ávila.",
      wikipedia: "Varadero",
      tags: ["Plage", "Caraïbes", "All-inclusive", "Snorkel"],
      mustSee: [
        { name: "Plage de Varadero (23 km de sable blanc)", wikipedia: "File:Plage_de_Varadero.JPG" },
        { name: "Cayo Coco — plage sauvage & flamants roses", wikipedia: "Cayo_Coco" },
        { name: "Snorkel et plongée (récifs Varadero)", wikipedia: "Varadero" },
        { name: "Cayo Santa María — eaux cristallines", wikipedia: "Cayo_Santa_María" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Cuba a un système monétaire complexe pour les touristes. Depuis 2021, le CUP (peso cubain) est la seule monnaie officielle. Les euros ou dollars s'échangent en CUP. L'accès aux biens de consommation est limité et les prix fluctuent. Prévoir du cash.",
    currency: "CUP",
    exchangeRate: "1€ ≈ 120 CUP (taux non officiel, varie)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Casa particular (chambre chez l'habitant)", price: "20–40 €", detail: "Authentique, recommandé" },
          { label: "Hôtel d'État 3★", price: "50–100 €", detail: "Qualité variable" },
          { label: "Resort all-inclusive Varadero", price: "100–200 €", detail: "Tout compris, plage privée" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Repas casa particular (inclus souvent)", price: "8–15 €", detail: "Copieux, poisson, fruits" },
          { label: "Paladares (restos privés)", price: "10–25 €", detail: "Bien meilleurs que l'État" },
          { label: "Mojito ou daiquiri (La Floridita)", price: "5–8 €", detail: "L'expérience Hemingway" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Viazul (bus inter-villes)", price: "10–25 €", detail: "La Havane–Trinidad : 6h" },
          { label: "Taxi colectivo (voiture partagée)", price: "15–30 €", detail: "Américaines vintage !" },
          { label: "Vol intérieur La Havane–Santiago", price: "60–100 €", detail: "Quand disponible (Cubana)" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Tour en Américaine décapotable (2h)", price: "25–40 €", detail: "La Havane — incontournable" },
          { label: "Cours de salsa (1h)", price: "10–20 €", detail: "Avec musiciens en direct" },
          { label: "Excursion Viñales (journée)", price: "30–50 €", detail: "Cheval + cave + tabac" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "50–80 €/j", desc: "Casa particular + paladar + Viazul", color: "#22c55e" },
      { type: "Confort", daily: "120–180 €/j", desc: "Hôtel correct + restos privés + excursions", color: "#3b82f6" },
      { type: "Luxe", daily: "300 €+/j", desc: "Resort all-inclusive + guide privé + américaines", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "12 jours",
      route: "La Havane (4j) → Viñales (2j) → Trinidad (3j) → Varadero (3j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 500 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–La Havane", amount: "400–700 €" },
            { label: "Casas particulares (12 nuits)", amount: "350–550 €" },
            { label: "Nourriture & mojitos", amount: "350–500 €" },
            { label: "Transports (Viazul + taxis)", amount: "200–300 €" },
            { label: "Activités & imprévus", amount: "150–250 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 500 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–La Havane", amount: "500–800 €" },
            { label: "Hébergement (12 nuits)", amount: "900–1 500 €" },
            { label: "Nourriture & cocktails", amount: "600–900 €" },
            { label: "Taxis privés & transports", amount: "500–800 €" },
            { label: "Excursions & activités", amount: "400–600 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "7 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–La Havane (direct)", amount: "1 000–2 000 €" },
            { label: "Hôtels & resorts (12 nuits)", amount: "2 000–3 500 €" },
            { label: "Gastronomie & cigares Cohiba", amount: "800–1 500 €" },
            { label: "Américaine privée + guide", amount: "600–1 000 €" },
            { label: "Extras", amount: "400 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~10h direct (Air France, Corsair, TUI fly)" },
    { icon: "🪪", label: "Visa",              value: "Tarjeta turística (~25€, incluse dans certains vols) obligatoire" },
    { icon: "💰", label: "Monnaie",           value: "Peso cubain (CUP) — espèces OBLIGATOIRES, cartes refusées" },
    { icon: "🗣️", label: "Langue",            value: "Espagnol" },
    { icon: "🔌", label: "Prise électrique",  value: "Type A/B/C – 110 V ou 220 V selon zones" },
    { icon: "📱", label: "Réseau",            value: "Wi-Fi limité (ETECSA, hôtels) — internet très lent" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille obligatoire" },
    { icon: "💊", label: "Santé",             value: "Assurance voyage OBLIGATOIRE (vérifiée à l'arrivée)" },
  ],
};
