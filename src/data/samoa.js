export const SAMOA = {
  code: "WSM",
  numericId: 882,
  name: "Samoa",
  emoji: "🇼🇸",
  capital: "Apia",
  language: "Samoan, Anglais",
  currency: "Tala samoan (WST)",
  timezone: "UTC+13",
  filter: { budgetMin: 50, budgetMid: 100, tripMin: 1600, tripMid: 3000 },
  description:
    "Les Samoa, souvent appelées le « Cœur du Polynésie », sont un archipel préservé où la culture fa'a Samoa (la manière samoane de vivre) imprègne chaque aspect du quotidien. Avec ses tranchées océaniques spectaculaires, ses chutes d'eau vertigineuses et ses plages parmi les plus belles du Pacifique, Samoa offre une authenticité rare dans un cadre naturel à couper le souffle. Robert Louis Stevenson, auteur de L'Île au trésor, y choisit de finir sa vie, séduit par la beauté et la générosité du peuple samoan.",
  bestPeriods: [
    {
      months: "Mai – Oct",
      label: "Saison sèche",
      color: "#22c55e",
      description: "Moins de pluies, températures agréables, mer calme — meilleure période pour voyager",
      icon: "☀️",
    },
    {
      months: "Nov – Avr",
      label: "Saison des pluies",
      color: "#f59e0b",
      description: "Fortes pluies tropicales et risque de cyclones entre janvier et mars. Tarifs plus bas",
      icon: "🌧️",
    },
  ],
  weatherCities: [
    {
      id: "apia",
      name: "Apia",
      region: "Upolu",
      data: [
        { month: "Jan", temp: 28, rain: 350, icon: "🌧️" },
        { month: "Fév", temp: 28, rain: 360, icon: "🌧️" },
        { month: "Mar", temp: 28, rain: 320, icon: "🌧️" },
        { month: "Avr", temp: 27, rain: 220, icon: "🌧️" },
        { month: "Mai", temp: 26, rain: 130, icon: "☀️" },
        { month: "Jun", temp: 25, rain: 90, icon: "☀️" },
        { month: "Jul", temp: 25, rain: 80, icon: "☀️" },
        { month: "Aoû", temp: 25, rain: 85, icon: "☀️" },
        { month: "Sep", temp: 26, rain: 110, icon: "☀️" },
        { month: "Oct", temp: 26, rain: 160, icon: "☀️" },
        { month: "Nov", temp: 27, rain: 220, icon: "🌧️" },
        { month: "Déc", temp: 28, rain: 300, icon: "🌧️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "To Sua Ocean Trench",
      region: "Upolu Sud",
      description:
        "Le To Sua Ocean Trench est sans conteste l'une des merveilles naturelles les plus saisissantes des Samoa et du Pacifique entier. Cette fosse naturelle de 30 mètres de profondeur, remplie d'eau de mer d'un bleu turquoise intense, est reliée à l'océan par un tunnel sous-marin. On y descend par une longue échelle en bois dans un cadre encadré de fougères géantes et de végétation tropicale dense, pour une baignade inoubliable.",
      wikipedia: "File:To Sua Ocean Trench.jpg",
      tags: ["Nature", "Baignade", "Insolite", "Paysage"],
      mustSee: [
        { name: "To Sua Trench — plongeon dans la fosse d'eau turquoise depuis l'échelle de bois", wikipedia: "File:To Sua Ocean Trench.jpg" },
        { name: "Plage de Lotofaga — accès à la mer depuis les jardins du To Sua", wikipedia: "File:Beach_on_Upolu_Island,_Samoa,_2009.jpg" },
        { name: "Piscines naturelles de Sua Beach — bassins rocheux aux eaux claires", wikipedia: "File:To Sua Ocean Trench - Lotofaga village - Samoa.jpg" },
        { name: "Côte de Lotofaga — falaises noires et vue panoramique sur l'océan", wikipedia: "File:The_part_where_the_ocean_enters_the_trench_To_Sua_Ocean_Trench_Samoa.jpg" },
      ],
    },
    {
      id: 2,
      name: "Plage de Lalomanu",
      region: "Upolu Est",
      description:
        "Lalomanu est régulièrement citée parmi les plus belles plages du Pacifique Sud, avec son sable blanc immaculé, ses cocotiers inclinés sur la mer et ses eaux cristallines propices au snorkeling. La plage est bordée de falaises de corail et offre une vue imprenable sur l'île de Manu'a au loin. Des fales traditionnelles (bungalows ouverts sur la plage) permettent de dormir à quelques mètres des vagues pour une expérience insulaire authentique.",
      wikipedia: "Lalomanu",
      tags: ["Plage", "Snorkeling", "Détente", "Hébergement traditionnel"],
      mustSee: [
        { name: "Plage de Lalomanu — l'une des plus belles plages de Polynésie", wikipedia: "Lalomanu" },
        { name: "Fales de Taufua Beach — nuit en bungalow ouvert sur la plage", wikipedia: "File:Our fale Taufua Beach Fales Samoa.jpg" },
        { name: "Récif de corail de Lalomanu — snorkeling avec poissons tropicaux colorés", wikipedia: "File:Aerial-view-tokelau-2012-photo-new-zealand-ministry-of-foreign-affairs-and-trade_12780239164_o.jpg" },
      ],
    },
    {
      id: 3,
      name: "Savai'i — Champs de lave & Tortues",
      region: "Savai'i",
      description:
        "Savai'i, la plus grande île des Samoa, est une île volcanique peu développée offrant des paysages spectaculaires : champs de lave de Saleaula issus d'une éruption du début du XXe siècle, blowholes impressionnants sur la côte nord, et la piscine aux tortues de Fa'a'ala où des tortues marines viennent se nourrir à quelques mètres des visiteurs. L'île abrite également les Pyramides de Pulemelei, le plus grand monument préhistorique de Polynésie.",
      wikipedia: "File:Tafua Peninsula, Savai'i, Samoa - August 2016.jpg",
      tags: ["Volcan", "Tortues", "Nature", "Préhistoire"],
      mustSee: [
        { name: "Champs de lave de Saleaula — coulées de 1905-1911 ayant englouti un village et une église", wikipedia: "File:Lava_Fields_-_Savai'i_island_-_Samoa.jpg" },
        { name: "Piscine aux tortues de Fa'a'ala — tortues marines en liberté dans un bassin naturel", wikipedia: "File:Total internal reflection of Chelonia mydas.jpg" },
        { name: "Pyramides de Pulemelei — plus grand monument préhistorique de Polynésie (12e siècle)", wikipedia: "File:The Peak of The Great Pulemelei Mound of Savai’i.jpg" },
        { name: "Blowholes d'Alofaaga — jets d'eau et d'air de 20 m sur la côte volcanique", wikipedia: "File:Blowholes Savai'i 2009.jpg" },
      ],
    },
    {
      id: 4,
      name: "Apia & Maison de Robert Louis Stevenson",
      region: "Upolu",
      description:
        "Apia, la capitale animée de Samoa, mêle marché couvert coloré, architecture coloniale allemande et ambiance polynésienne décontractée. La ville est connue dans le monde entier pour avoir été la demeure de Robert Louis Stevenson, auteur de L'Île au trésor, qui s'y installa en 1890 et y décéda en 1894. Sa villa Vailima, transformée en musée, est aujourd'hui l'une des principales attractions touristiques du pays. Les chutes de Papapapai-tai, accessibles en une courte randonnée, sont parmi les plus belles de l'île.",
      wikipedia: "File:Samoa - Apia Govt buildings.jpg",
      tags: ["Ville", "Histoire", "Culture", "Cascades"],
      mustSee: [
        { name: "Villa Vailima — ancienne demeure de Robert Louis Stevenson, aujourd'hui musée", wikipedia: "File:Villa Vailima (30086489993).jpg" },
        { name: "Chutes de Papapapai-tai — cascade de 100 m dans la forêt tropicale d'Upolu", wikipedia: "File:Papapapaitai.jpg" },
        { name: "Plage d'Aggie Grey's — snorkeling et lagon protégé en centre-ville d'Apia", wikipedia: "File:Aggie Greys Lagoon Beach Resort (6932961344).jpg" },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "Samoa est l'une des destinations les plus abordables du Pacifique insulaire. Les fales (bungalows traditionnels ouverts) permettent de dormir sur la plage pour un prix modique tout en s'immergeant dans la culture samoane. La nourriture locale (poisson, taro, umu — four polynésien) est bon marché et délicieuse. Les transports intérieurs entre Upolu et Savai'i se font par ferry économique.",
    currency: "WST",
    exchangeRate: "1€ ≈ 3,0 WST",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Fale traditionnel sur la plage (ouvert)", price: "15–35 €" },
          { label: "Guesthouse ou hôtel de gamme moyenne", price: "50–90 €" },
          { label: "Resort de luxe (Upolu ou Savai'i)", price: "130–250 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Marché local et cuisine de rue (taro, poisson)", price: "2–5 €" },
          { label: "Restaurant local à Apia", price: "7–14 €" },
          { label: "Restaurant de resort ou international", price: "18–35 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus local à Upolu (Apia et alentours)", price: "0,50–1,50 €" },
          { label: "Ferry Upolu–Savai'i (aller simple)", price: "4–6 €" },
          { label: "Location de voiture / jour", price: "40–70 €" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée To Sua Ocean Trench", price: "5–8 €" },
          { label: "Visite Vailima (musée Stevenson)", price: "8–12 €" },
          { label: "Plongée sous-marine (1 sortie guidée)", price: "50–80 €" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "50–75 €/j",
        desc: "Fales traditionnels, marchés locaux, bus et ferry, activités simples",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "100–160 €/j",
        desc: "Hôtels confortables, restaurants, location de voiture et excursions guidées",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "12 jours",
      route: "Apia (Upolu) → Tour d'Upolu → Ferry vers Savai'i → Retour Apia",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 700 – 2 300 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Apia", amount: "1 000–1 300 €" },
            { label: "Hébergement (12 nuits)", amount: "250–380 €" },
            { label: "Transports (bus, ferries, taxi)", amount: "80–120 €" },
            { label: "Nourriture + boissons", amount: "180–280 €" },
            { label: "Activités et visites", amount: "120–200 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 800 – 4 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Apia", amount: "1 200–1 600 €" },
            { label: "Hébergement (12 nuits)", amount: "650–1 000 €" },
            { label: "Location de voiture + ferry", amount: "200–350 €" },
            { label: "Nourriture + boissons", amount: "350–550 €" },
            { label: "Activités et excursions", amount: "250–400 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "22–28h avec 2 escales (via Auckland, Sydney ou Fiji)" },
    { icon: "🪪", label: "Visa", value: "Permis d'entrée délivré à l'arrivée, gratuit, valable 60 jours. Aucune démarche préalable nécessaire." },
    { icon: "💰", label: "Monnaie", value: "Tala samoan (WST). Distributeurs à Apia et dans les principaux villages ; espèces à prévoir pour les îles" },
    { icon: "🗣️", label: "Langue", value: "Samoan et anglais tous deux officiels. Le samoan est la langue du quotidien ; l'anglais est compris partout" },
    { icon: "🔌", label: "Prise électrique", value: "Type I (comme en Australie), 230V — adaptateur recommandé" },
    { icon: "💊", label: "Santé", value: "Pas de paludisme aux Samoa. Vaccins recommandés : hépatites A et B, typhoïde. Eau du robinet non potable" },
    { icon: "🌀", label: "Cyclones", value: "Saison cyclonique novembre–avril. Cyclone Evan (2012) et cyclone Winston ont rappelé la vulnérabilité de l'archipel" },
    { icon: "🙏", label: "Fa'a Samoa", value: "Le dimanche est sacré — commerces fermés, silence respecté. Demander permission avant de photographier les habitants" },
  ],
};
