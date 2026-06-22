export const QATAR = {
  code: "QAT",
  numericId: 634,
  name: "Qatar",
  emoji: "🇶🇦",
  capital: "Doha",
  language: "Arabe",
  currency: "Riyal qatarien (QAR)",
  timezone: "UTC+3",
  filter: { budgetMin: 90, budgetMid: 180, tripMin: 1300, tripMid: 2800 },
  description:
    "Le Qatar est une petite péninsule du Golfe persique devenue en quelques décennies l'une des nations les plus riches du monde grâce à ses gigantesques réserves de gaz naturel. Doha, sa capitale tentaculaire, impressionne par son skyline futuriste, ses musées de classe mondiale et son souq Waqif restauré avec soin. Hôte de la Coupe du monde de football 2022, le Qatar a investi massivement dans son infrastructure touristique tout en cherchant à préserver les traditions bédouines de sa culture ancestrale.",
  bestPeriods: [
    {
      months: "Nov – Mar",
      label: "Hiver — idéal",
      color: "#22c55e",
      description: "Températures parfaites (18–27°C), idéal pour explorer Doha, le désert et les plages.",
      icon: "☀️",
    },
    {
      months: "Avr – Mai",
      label: "Printemps — encore agréable",
      color: "#f59e0b",
      description: "Chaleur montante (28–35°C), humidité en hausse. Possible mais moins confortable.",
      icon: "⛅",
    },
    {
      months: "Jun – Sep",
      label: "Été — à éviter",
      color: "#ef4444",
      description: "Chaleur et humidité extrêmes (38–42°C, 80–90% d'humidité). Quasi-insupportable en extérieur.",
      icon: "🌡️",
    },
  ],
  weatherCities: [
    {
      id: "doha",
      name: "Doha",
      region: "Capitale",
      data: [
        { month: "Jan", temp: 18, rain: 15, icon: "☀️" },
        { month: "Fév", temp: 19, rain: 15, icon: "☀️" },
        { month: "Mar", temp: 23, rain: 10, icon: "☀️" },
        { month: "Avr", temp: 28, rain: 8, icon: "⛅" },
        { month: "Mai", temp: 33, rain: 2, icon: "🌡️" },
        { month: "Jun", temp: 37, rain: 0, icon: "🌡️" },
        { month: "Jul", temp: 38, rain: 0, icon: "🌡️" },
        { month: "Aoû", temp: 38, rain: 0, icon: "🌡️" },
        { month: "Sep", temp: 35, rain: 0, icon: "🌡️" },
        { month: "Oct", temp: 30, rain: 2, icon: "⛅" },
        { month: "Nov", temp: 24, rain: 5, icon: "☀️" },
        { month: "Déc", temp: 19, rain: 15, icon: "☀️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Souq Waqif",
      region: "Doha",
      description:
        "Le Souq Waqif est le cœur authentique de Doha, un marché traditionnel soigneusement restauré qui recréé l'atmosphère d'un souq qatarien du début du XXe siècle. Ses ruelles pavées serpentent entre des boutiques vendant épices, faucons, tissus et parfums, tandis que de nombreux restaurants proposent la cuisine traditionnelle qatarienne et levantine dans une ambiance animée. Le souq abrite également des fauconniers professionnels, les faucons étant le symbole national du Qatar.",
      wikipedia: "Souq_Waqif",
      tags: ["Culture", "Shopping", "Gastronomie", "Traditions"],
      mustSee: [
        { name: "Marché aux faucons — tradition de fauconnerie patrimoine immatériel de l'UNESCO", wikipedia: "File:1 raróg.jpg" },
        { name: "Marché aux épices — parfums, encens et épices du Golfe", wikipedia: "File:Souq Waqif, Doha, Catar, 2013-08-05, DD 82.JPG" },
        { name: "Restaurants traditionnels — machbous, harees et luqaimat", wikipedia: "File:Doha Dinner Bayt Sharq 03.jpg" },
      ],
    },
    {
      id: 2,
      name: "Musée d'Art Islamique",
      region: "Doha, Corniche",
      description:
        "Le Musée d'Art Islamique de Doha, conçu par l'architecte I.M. Pei et inauguré en 2008, est l'un des plus beaux musées du monde dans son domaine. Posé sur une île artificielle face à la Corniche de Doha, ce bâtiment aux formes géométriques audacieuses abrite l'une des collections les plus complètes d'art islamique au monde, couvrant quatorze siècles et trois continents. Céramiques persanes, manuscrits enluminés, textiles et ivoires côtoient des bijoux exceptionnels dans des salles d'exposition magistrales.",
      wikipedia: "File:IslamicArtMuseumDohaSkyline.jpg",
      tags: ["Musée", "Art islamique", "Architecture", "Culture"],
      mustSee: [
        { name: "Collection de céramiques — faïences persanes, iznik et chinoises", wikipedia: "Museum_of_Islamic_Art,_Doha" },
        { name: "Manuscrits enluminés — corans rares et textes scientifiques médiévaux", wikipedia: "File:Doha, museo d'arte islamica, interno, una sala 01.jpg" },
        { name: "Atrium central — chef-d'œuvre architectural d'I.M. Pei", wikipedia: "File:Doha, museo d'arte islamica, interno, atrio 06.jpg" },
      ],
    },
    {
      id: 3,
      name: "Al Zubarah",
      region: "Nord du Qatar",
      description:
        "Al Zubarah est l'unique site du Qatar inscrit au patrimoine mondial de l'UNESCO. Cette cité marchande et perlière fortifiée, fondée au XVIIIe siècle, fut l'un des plus importants ports de commerce du Golfe avant d'être abandonnée au XIXe siècle. Les fouilles archéologiques révèlent un urbanisme sophistiqué — rues tracées au cordeau, maisons à cour, mosquées et souqs — témoignant de la prospérité des marchands de perles qatariens.",
      wikipedia: "File:Ruins in Zubarah on a cloudy day.jpg",
      tags: ["UNESCO", "Archéologie", "Histoire", "Pêche aux perles"],
      mustSee: [
        { name: "Fort d'Al Zubarah — forteresse du XIXe siècle abritant le centre d'interprétation", wikipedia: "File:Zubara Fort.jpg" },
        { name: "Vestiges de la cité — ruines de la ville perlière du XVIIIe siècle", wikipedia: "File:Archaelogical site of Al Zubarah 09.jpg" },
        { name: "Plages du nord — côtes sauvages peu fréquentées", wikipedia: "File:Zubarah beach on a cloudy day.jpg" },
      ],
    },
    {
      id: 4,
      name: "Désert de Khor Al Adaid (Mer intérieure)",
      region: "Sud du Qatar",
      description:
        "Khor Al Adaid, surnommée la « Mer Intérieure », est l'un des phénomènes naturels les plus spectaculaires du Qatar : un bras de mer pénétrant profondément à l'intérieur des terres, entouré de dunes de sable doré atteignant 40 mètres de hauteur. Ce site unique, reconnu par l'UNESCO comme réserve naturelle, est accessible uniquement en 4x4 et offre l'une des expériences de désert les plus immersives du Golfe. Dauphins, tortues marines et dugongs fréquentent ces eaux peu profondes.",
      wikipedia: "Khor_Al_Adaid",
      tags: ["Nature", "Désert", "UNESCO", "Aventure"],
      mustSee: [
        { name: "Safari de dunes en 4x4 — montées et descentes dans les mégadunes de sable", wikipedia: "File:Khor al-Udeid 09.jpg" },
        { name: "Observation des dauphins — dauphins Indo-Pacifiques dans les eaux côtières", wikipedia: "File:Eilat Dolphin Reef (3).jpg" },
        { name: "Coucher de soleil sur les dunes — spectacle de lumières incomparable", wikipedia: "File:Khor al-Udeid 05.jpg" },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "Le Qatar est l'une des destinations les plus onéreuses du Moyen-Orient. Les hôtels sont chers, surtout en haute saison (novembre–mars). La nourriture locale dans les restaurants populaires reste relativement abordable. L'alcool est disponible uniquement dans les hôtels et restaurants agréés.",
    currency: "QAR",
    exchangeRate: "1€ ≈ 3,95 QAR",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Hôtel économique", price: "50–90 €", detail: "Hôtel simple avec clim, en périphérie" },
          { label: "Hôtel mid-range", price: "100–180 €", detail: "Hôtel 4 étoiles, confort international" },
          { label: "Hôtel de luxe", price: "250–600 €", detail: "Grands palaces sur la Corniche ou The Pearl" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Restaurant populaire", price: "6–12 €", detail: "Machbous, shawarma, biryani" },
          { label: "Restaurant mid-range", price: "20–40 €", detail: "Cuisine internationale ou levantine" },
          { label: "Food court / mall", price: "5–10 €", detail: "Restaurants dans les centres commerciaux" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Métro de Doha", price: "0,50–1,50 €", detail: "Réseau moderne inauguré en 2019" },
          { label: "Taxi / Careem", price: "4–10 €", detail: "Course courte en ville" },
          { label: "Bus touristique Hop-On Hop-Off", price: "20–30 €", detail: "Tour des principales attractions de Doha" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée musées", price: "5–15 €", detail: "MIA, Musée national du Qatar" },
          { label: "Safari désert (Khor Al Adaid)", price: "60–120 €", detail: "Excursion en 4x4 avec guide" },
          { label: "Observation d'un match de football", price: "20–80 €", detail: "Al-Sadd, Qatar SC dans les stades de la Coupe du monde" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "70–100 €/j",
        desc: "Hôtel économique, restaurants locaux, métro",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "160–250 €/j",
        desc: "Bon hôtel, restaurants de qualité, excursions et taxis",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "8 jours",
      route: "Doha → Al Zubarah → Khor Al Adaid → Doha",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 300 – 1 700 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Doha", amount: "400–600 €" },
            { label: "Hébergement (7 nuits)", amount: "350–560 €" },
            { label: "Transports locaux + métro", amount: "80–120 €" },
            { label: "Nourriture + boissons", amount: "280–360 €" },
            { label: "Activités + excursions", amount: "190–280 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 500 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Doha", amount: "450–700 €" },
            { label: "Hébergement (7 nuits)", amount: "900–1 400 €" },
            { label: "Transports locaux + taxis", amount: "200–300 €" },
            { label: "Nourriture + boissons", amount: "600–800 €" },
            { label: "Activités + excursions", amount: "350–500 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "Vols directs Qatar Airways depuis CDG, environ 7h. Hub mondial de connexion vers l'Asie et l'Océanie." },
    { icon: "🪪", label: "Visa", value: "Sans visa pour les ressortissants français (90 jours) — depuis 2020." },
    { icon: "💰", label: "Monnaie", value: "Riyal qatarien (QAR) — cartes bancaires acceptées partout. Alcool uniquement en hôtels agréés." },
    { icon: "🗣️", label: "Langue", value: "Arabe — anglais très largement parlé dans tout le secteur touristique, hôtelier et commercial" },
    { icon: "🔌", label: "Prise électrique", value: "Type G (240V) — même qu'au Royaume-Uni, adaptateur indispensable depuis la France" },
    { icon: "💊", label: "Santé", value: "Pas de vaccination obligatoire. Eau du robinet non potable. Se protéger du soleil et de la chaleur." },
    { icon: "⚠️", label: "Sécurité", value: "Pays très sûr. Tenue correcte dans les lieux publics recommandée. Relations homosexuelles illégales." },
    { icon: "🏟️", label: "Héritage Coupe du monde 2022", value: "Stades climatisés réutilisés pour des événements sportifs. Visites organisées disponibles." },
  ],
};
