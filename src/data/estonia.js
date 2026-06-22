export const ESTONIA = {
  code: "EST",
  numericId: 233,
  name: "Estonie",
  emoji: "🇪🇪",
  capital: "Tallinn",
  language: "Estonien",
  currency: "Euro (EUR)",
  timezone: "UTC+2 (été UTC+3)",
  filter: {
    budgetMin: 60, budgetMid: 100,
    tripMin: 900, tripMid: 2000,
  },
  description:
    "L'Estonie est la plus numérique des nations — la première au monde à avoir voté en ligne (2005), à déclarer l'accès à Internet comme droit humain, et à proposer la résidence e-citoyenne mondiale. Tallinn sa capitale est l'une des vieilles villes médiévales les mieux préservées d'Europe (UNESCO). Les forêts de bouleaux, les tourbières, les 2 000 îles et les plages de la mer Baltique complètent le tableau.",

  bestPeriods: [
    {
      months: "Mai – Septembre",
      label: "Été baltique",
      color: "#22c55e",
      description:
        "Températures agréables (16–22°C), journées très longues (soleil jusqu'à 23h en juin), festivals (Song Festival, médiéval de Tallinn), plages animées. Meilleure période.",
      icon: "☀️",
    },
    {
      months: "Décembre – Février",
      label: "Hiver blanc",
      color: "#3b82f6",
      description:
        "Tallinn sous la neige est magnifique — marchés de Noël sur la place de la mairie, vieille ville enneigée. Températures -5 à -15°C. Ski de fond sur les tourbières.",
      icon: "❄️",
    },
  ],

  weatherCities: [
    {
      id: "tallinn",
      name: "Tallinn",
      region: "Harju (nord, golfe de Finlande)",
      data: [
        { month: "Jan", temp: -3, rain: 45,  icon: "❄️" },
        { month: "Fév", temp: -4, rain: 35,  icon: "❄️" },
        { month: "Mar", temp: -1, rain: 35,  icon: "❄️" },
        { month: "Avr", temp:  5, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 12, rain: 40,  icon: "⛅" },
        { month: "Jun", temp: 16, rain: 55,  icon: "☀️" },
        { month: "Jul", temp: 19, rain: 70,  icon: "☀️" },
        { month: "Aoû", temp: 18, rain: 65,  icon: "☀️" },
        { month: "Sep", temp: 13, rain: 65,  icon: "⛅" },
        { month: "Oct", temp:  8, rain: 70,  icon: "⛅" },
        { month: "Nov", temp:  3, rain: 65,  icon: "⛅" },
        { month: "Déc", temp: -1, rain: 50,  icon: "❄️" },
      ],
    },
    {
      id: "saaremaa",
      name: "Saaremaa",
      region: "Grande île de la mer Baltique",
      data: [
        { month: "Jan", temp: -2, rain: 50,  icon: "❄️" },
        { month: "Fév", temp: -3, rain: 40,  icon: "❄️" },
        { month: "Mar", temp:  0, rain: 40,  icon: "❄️" },
        { month: "Avr", temp:  5, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 12, rain: 35,  icon: "⛅" },
        { month: "Jun", temp: 15, rain: 55,  icon: "☀️" },
        { month: "Jul", temp: 18, rain: 65,  icon: "☀️" },
        { month: "Aoû", temp: 17, rain: 70,  icon: "☀️" },
        { month: "Sep", temp: 13, rain: 70,  icon: "⛅" },
        { month: "Oct", temp:  8, rain: 75,  icon: "⛅" },
        { month: "Nov", temp:  3, rain: 70,  icon: "⛅" },
        { month: "Déc", temp: -1, rain: 55,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Tallinn — Vieille ville médiévale UNESCO",
      region: "Harju (nord)",
      description:
        "Tallinn possède l'une des vieilles villes médiévales les mieux préservées d'Europe du Nord (UNESCO) : la place de l'Hôtel de Ville (XIVe s.), les tours de guet de la muraille, la colline de Toompea avec son château et sa cathédrale orthodoxe aux bulbes bleus, et les guildes hanséatiques. La ville est à la fois médiévale et hyper-numérique — une contradiction fascinante.",
      wikipedia: "Tallinn",
      tags: ["Médiéval", "UNESCO", "Hanséatique", "Numérique"],
      mustSee: [
        { name: "Place de l'Hôtel de Ville de Tallinn (XIVe s.) et tour Raekoja", wikipedia: "Tallinn_Town_Hall" },
        { name: "Toompea — colline avec château, parlement, cathédrale orthodoxe", wikipedia: "Toompea" },
        { name: "Muraille médiévale — tours Kiek in de Kök et chemin de ronde", wikipedia: "File:City wall Towers Tallinn 2015.jpg" },
        { name: "Quartier Telliskivi — culture alternative et street food", wikipedia: "Telliskivi_Creative_City" },
      ],
    },
    {
      id: 2,
      name: "Île de Saaremaa — Nature et moulin à vent",
      region: "Mer Baltique (île)",
      description:
        "Saaremaa est la plus grande île d'Estonie : ses moulins à vent de Angla, le château épiscopal de Kuressaare (le mieux préservé des États baltes), le cratère de météorite de Kaali (l'un des plus visibles en Europe), et les falaises de Panga au bord de la Baltique. Une île paisible, venteuse, avec un caractère nordique marqué.",
      wikipedia: "Saaremaa",
      tags: ["Île", "Moulins", "Château", "Météorite"],
      mustSee: [
        { name: "Moulins à vent d'Angla — les plus beaux d'Estonie", wikipedia: "File:Angla tuulikud Saaremaal.jpg" },
        { name: "Château de Kuressaare — forteresse épiscopale gothique intacte", wikipedia: "Kuressaare_Castle" },
        { name: "Cratère de météorite de Kaali (4 000 ans, 110m de diamètre)", wikipedia: "Kaali_crater" },
        { name: "Falaises de Panga — vue sur la mer Baltique depuis les escarpements", wikipedia: "Panga_Cliff" },
      ],
    },
    {
      id: 3,
      name: "Tourbières et forêts — Randonnées nordiques",
      region: "Parc national de Lahemaa",
      description:
        "L'Estonie est couverte à 50% de forêts de bouleaux et de pins, et à 22% de tourbières (bog) — des marécages de mousse de sphaigne où l'on marche sur des planches de bois. Le parc national de Lahemaa (à 70km de Tallinn) est le plus grand d'Estonie : manoirs baltes, forêts vierges et côte rocheuse. Les bains de boue et les saunas de tourbière sont une tradition locale.",
      wikipedia: "Lahemaa_National_Park",
      tags: ["Tourbière", "Forêt", "Randonnée", "Nature"],
      mustSee: [
        { name: "Marche en tourbière (Viru Bog, Lahemaa) — sensation de nuages sous les pieds", wikipedia: "Lahemaa_National_Park" },
        { name: "Manoir de Palmse (XVIIIe s.) au cœur du parc", wikipedia: "File:Palmse manor house at summer.jpg" },
        { name: "Plage rocheuse de Käsmu — village de capitaines", wikipedia: "File:Käsmu sadam 2015.jpg" },
      ],
    },
    {
      id: 4,
      name: "Tartu — Ville universitaire et culture",
      region: "Tartumaa (sud)",
      description:
        "Tartu est la deuxième ville d'Estonie et la capitale intellectuelle du pays : l'Université de Tartu (fondée en 1632 par Gustave Adolphe de Suède) est l'une des plus anciennes du monde. Le musée estonien national (architecture contemporaine spectaculaire), les cafés de la vieille ville et l'Élan Festival en juillet font de Tartu une ville vivante et créative.",
      wikipedia: "Tartu",
      tags: ["Université", "Culture", "Musée", "Animée"],
      mustSee: [
        { name: "Musée national estonien (KUMU de Tartu) — architecture remarquable", wikipedia: "File:Wall from the Estonian National Museum.jpg" },
        { name: "Colline de Toome — ruines de cathédrale médiévale + observatoire", wikipedia: "File:Ruins_of_Tartu_Dome_Cathedral_-_Toomemagi_(Cathedral_Hill)_-_Tartu_-_Estonia_(35961979372).jpg" },
        { name: "Rues animées de la vieille ville — cafés, galeries, étudiants", wikipedia: "File:Tartu Town Hall Place towards Kaarsild 2015.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "L'Estonie utilise l'euro depuis 2011. Les prix sont 30–40% inférieurs à ceux de la France en dehors de Tallinn. La vieille ville de Tallinn est plus touristique (et plus chère) — sortir du centre pour retrouver les prix locaux.",
    currency: "EUR",
    exchangeRate: "1€ = 1€ (zone euro)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Auberge / hostel Tallinn Vieille Ville", price: "20–45 €", detail: "Bonne qualité, bien situé" },
          { label: "Hôtel 3★ Tallinn ou Tartu", price: "65–120 €", detail: "Confortable, souvent inclus petit-déj" },
          { label: "Ferme / pension à Saaremaa", price: "35–70 €", detail: "Demi-pension disponible, nature" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Soupe de poisson estonienne + pain noir (rukkileib)", price: "8–14 €", detail: "Cuisine nordique simple et bonne" },
          { label: "Restaurant mid-range Tallinn", price: "15–28 €", detail: "Cuisine estonienne moderne ou internationale" },
          { label: "Marché de Tallinn (Balti Jaam) — fromages et charcuteries", price: "8–15 €", detail: "Marché couvert animé" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus Lux Express Tallinn–Tartu (2h30)", price: "10–18 €", detail: "Confortable, WiFi, café" },
          { label: "Ferry Tallinn–Helsinki (2h30)", price: "20–50 €", detail: "Tallink Silja, plusieurs fois par jour" },
          { label: "Tramway Tallinn (ticket journée)", price: "3 €", detail: "Réseau pratique" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Visite guidée de la vieille ville de Tallinn (2h)", price: "15–25 €", detail: "Histoire médiévale et hanséatique" },
          { label: "Randonnée en tourbière Viru Bog (Lahemaa)", price: "5–15 €", detail: "Entrée parc + planches bois" },
          { label: "Sauna traditionnel estonien (suivi d'une baignade)", price: "15–30 €", detail: "Expérience culturelle fondamentale" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "60–95 €/j", desc: "Hostel + restaurant local + transports publics", color: "#22c55e" },
      { type: "Confort", daily: "100–180 €/j", desc: "Hôtel 3★ + restaurants + excursions", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "8 jours",
      route: "Tallinn (3j) → Lahemaa (1j) → Tartu (2j) → Saaremaa (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "900 – 1 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Tallinn (Ryanair, Air Baltic)", amount: "80–200 €" },
            { label: "Hébergement (8 nuits)", amount: "250–450 €" },
            { label: "Transports (bus + ferry Saaremaa)", amount: "100–200 €" },
            { label: "Nourriture + boissons", amount: "250–400 €" },
            { label: "Activités, musées, sauna", amount: "150–250 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 000 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Tallinn", amount: "100–300 €" },
            { label: "Hôtels 3★ (8 nuits)", amount: "600–1 100 €" },
            { label: "Voiture de location (5 jours)", amount: "200–350 €" },
            { label: "Nourriture & restaurants", amount: "400–700 €" },
            { label: "Activités, excursions, sauna", amount: "250–450 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~2h30 (Ryanair Beauvais–Tallinn, Air Baltic via Riga). Ferry depuis Helsinki en 2h30 (Tallink)." },
    { icon: "🪪", label: "Visa",              value: "Aucun visa — espace Schengen. Carte d'identité française suffisante." },
    { icon: "💰", label: "Monnaie",           value: "Euro (€). Carte bancaire acceptée partout — les Estoniens paient tout par carte. Espèces quasi inutiles." },
    { icon: "🗣️", label: "Langue",            value: "Estonien (langue finno-ougrienne, proche du finnois). Anglais parfaitement maîtrisé par les jeunes. Russe encore parlé par 25% de la population." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire." },
    { icon: "💊", label: "Santé",             value: "Aucune précaution. CEAM valide. Tiques dans les forêts — pantalon long. Eau du robinet potable." },
    { icon: "💻", label: "Numérique",         value: "L'Estonie est la nation la plus numérique du monde : WiFi gratuit partout (même dans les forêts et les ferries), déclaration d'impôts en 3 minutes en ligne, e-résidence disponible." },
    { icon: "🧖", label: "Sauna",             value: "Le sauna est aussi central qu'en Finlande : chaque maison, chaque ferme, chaque pension en a un. Tradition de se baigner dans un lac ou une rivière froide après." },
  ],
};
