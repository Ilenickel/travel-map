export const SOMALIA = {
  code: "SOM",
  numericId: 706,
  name: "Somalie",
  emoji: "🇸🇴",
  capital: "Mogadiscio",
  language: "Somali, Arabe",
  currency: "Shilling somalien (SOS)",
  timezone: "UTC+3",
  filter: {
    budgetMin: 60, budgetMid: 120,
    tripMin: 1200, tripMid: 2500,
  },
  description:
    "La Somalie abrite des merveilles souvent ignorées : les peintures rupestres de Laas Geel, parmi les mieux conservées au monde, la côte du Somaliland avec ses plages immaculées, et Berbera, ancien port caravanier. Le Somaliland (autoproclamé indépendant depuis 1991) est la partie la plus accessible et la plus sûre du pays, tandis que Mogadiscio se reconstruit timidement après des décennies de conflit.",

  bestPeriods: [
    {
      months: "Décembre – Mars",
      label: "Saison sèche (Jilaal)",
      color: "#22c55e",
      description:
        "Meilleure période pour le Somaliland : températures clémentes (25–30°C), mer calme à Berbera, pistes praticables. Idéal pour Laas Geel et les sites côtiers.",
      icon: "☀️",
    },
    {
      months: "Juin – Août",
      label: "Petite saison sèche (Hagaa)",
      color: "#f59e0b",
      description:
        "Seconde fenêtre favorable. Vent d'est à Berbera, idéal pour la planche à voile. Températures supportables grâce à la brise maritime.",
      icon: "🌊",
    },
  ],

  weatherCities: [
    {
      id: "mogadishu",
      name: "Mogadiscio",
      region: "Banadir (côte sud)",
      data: [
        { month: "Jan", temp: 27, rain: 15,  icon: "⛅" },
        { month: "Fév", temp: 27, rain: 10,  icon: "⛅" },
        { month: "Mar", temp: 28, rain: 25,  icon: "⛅" },
        { month: "Avr", temp: 28, rain: 75,  icon: "⛅" },
        { month: "Mai", temp: 27, rain: 80,  icon: "⛅" },
        { month: "Jun", temp: 26, rain: 55,  icon: "☀️" },
        { month: "Jul", temp: 25, rain: 50,  icon: "☀️" },
        { month: "Aoû", temp: 25, rain: 55,  icon: "☀️" },
        { month: "Sep", temp: 26, rain: 50,  icon: "☀️" },
        { month: "Oct", temp: 27, rain: 90,  icon: "⛅" },
        { month: "Nov", temp: 27, rain: 65,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 30,  icon: "⛅" },
      ],
    },
    {
      id: "hargeisa",
      name: "Hargeisa",
      region: "Somaliland (nord, altitude 1300m)",
      data: [
        { month: "Jan", temp: 20, rain: 5,   icon: "☀️" },
        { month: "Fév", temp: 22, rain: 5,   icon: "☀️" },
        { month: "Mar", temp: 24, rain: 25,  icon: "☀️" },
        { month: "Avr", temp: 24, rain: 50,  icon: "☀️" },
        { month: "Mai", temp: 22, rain: 65,  icon: "☀️" },
        { month: "Jun", temp: 22, rain: 35,  icon: "☀️" },
        { month: "Jul", temp: 21, rain: 55,  icon: "☀️" },
        { month: "Aoû", temp: 21, rain: 45,  icon: "☀️" },
        { month: "Sep", temp: 22, rain: 20,  icon: "☀️" },
        { month: "Oct", temp: 24, rain: 30,  icon: "☀️" },
        { month: "Nov", temp: 22, rain: 25,  icon: "☀️" },
        { month: "Déc", temp: 20, rain: 10,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Laas Geel — Peintures rupestres",
      region: "Somaliland, région de Hargeisa",
      description:
        "Laas Geel est l'un des sites d'art rupestre les mieux conservés du monde entier. Découvertes par une mission française en 2002, ces peintures vieilles de 5 000 à 11 000 ans représentent des bovins aux cornes décorées, des pasteurs et des animaux sauvages avec des couleurs d'une fraîcheur saisissante. Le site, situé à 50 km de Hargeisa, est accessible en une journée et constitue la principale raison de visiter le Somaliland.",
      wikipedia: "Laas_Geel",
      tags: ["Art rupestre", "Préhistoire", "UNESCO candidat", "Archéologie"],
      mustSee: [
        { name: "Grottes principales — panneaux de peintures aux couleurs vives", wikipedia: "File:Laas Geel.jpg" },
        { name: "Bovins néolithiques peints — représentations uniques au monde", wikipedia: "File:Laas Geel single cow.jpg" },
        { name: "Paysage de vallée — cadre naturel autour du confluent", wikipedia: "File:Laas Geel rock.jpg" },
        { name: "Site de Dhagah Kure — peintures rupestres secondaires proches", wikipedia: "File:Laas Geel, 2024.jpg" },
      ],
    },
    {
      id: 2,
      name: "Berbera",
      region: "Somaliland, côte du Golfe d'Aden",
      description:
        "Berbera est le principal port du Somaliland et une ville d'une grande valeur historique, ancien comptoir caravanier sur la route de l'encens et des esclaves. Ses plages de sable blanc bordées de palmiers et ses eaux translucides du golfe d'Aden en font une station balnéaire confidentielle et authentique. Les ruines ottomanes, les vieilles maisons de corail et le marché animé témoignent de son passé commerçant.",
      wikipedia: "Berbera",
      tags: ["Plage", "Histoire", "Port", "Plongée"],
      mustSee: [
        { name: "Plage de Berbera — plages immaculées sur le golfe d'Aden", wikipedia: "File:Clean of berbera beach.jpg" },
        { name: "Vieux quartier colonial", wikipedia: "File:Berbera Somaliland view northeast.JPG" },
        { name: "Port de Berbera — activité portuaire et pêche traditionnelle", wikipedia: "File:Port_de_Berbera.jpg" },
        { name: "Récifs coralliens du golfe d'Aden — snorkeling et plongée", wikipedia: "Gulf_of_Aden" },
      ],
    },
    {
      id: 3,
      name: "Hargeisa",
      region: "Somaliland, capitale",
      description:
        "Hargeisa est la capitale du Somaliland, région autonome autoproclamée depuis 1991 qui fonctionne comme un état indépendant de facto avec ses propres institutions, monnaie et passeport. La ville est relativement sûre et animée, avec un marché central coloré, des mosquées historiques et le monument de l'avion de guerre transformé en symbole de résistance. C'est la porte d'entrée pour tous les voyageurs souhaitant explorer le Somaliland.",
      wikipedia: "Hargeisa",
      tags: ["Capitale", "Culture", "Marché", "Politique"],
      mustSee: [
        { name: "Avion-monument de la guerre civile — symbole de la résistance du Somaliland", wikipedia: "File:New rebuilt of Hargeisa War Memorial.jpg" },
        { name: "Marché central — épices, tissus et vie locale", wikipedia: "File:Street Market Hargeisa, Somaliland (29322262370).jpg" },
      ],
    },
    {
      id: 4,
      name: "Mogadiscio",
      region: "Banadir (capitale fédérale)",
      description:
        "Mogadiscio, l'une des plus anciennes villes de la Corne de l'Afrique, se reconstruit progressivement après des décennies de guerre civile. Sa vieille ville (Hamarweyne) avec ses maisons arabes et ses mosquées médiévales reprend vie, et quelques hôtels de luxe accueillent les visiteurs avec une sécurité privée renforcée. La visite reste réservée aux voyageurs expérimentés avec guide et sécurité privée, en raison des risques d'attentats.",
      wikipedia: "Mogadishu",
      tags: ["Histoire", "Architecture", "Urbanisme", "Précaution"],
      mustSee: [
        { name: "Cathédrale de Mogadiscio — édifice colonial en ruines partielles", wikipedia: "Mogadishu_Cathedral" },
        { name: "Plage de Lido — front de mer qui renaît peu à peu", wikipedia: "Mogadishu" },
        { name: "Marché Bakara — grand marché animé (avec précautions)", wikipedia: "File:Bakaara Market.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "Le coût de la vie en Somalie varie fortement selon la région. Le Somaliland est relativement abordable avec des prix similaires à l'Éthiopie voisine. Mogadiscio est plus chère en raison des frais de sécurité importants. Le dollar américain est largement accepté aux côtés du shilling somalien.",
    currency: "SOS",
    exchangeRate: "1€ ≈ 640 SOS (Somaliland: shilling du Somaliland)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse simple (Hargeisa)", range: "15–30 €" },
          { label: "Hôtel milieu de gamme", range: "40–80 €" },
          { label: "Hôtel sécurisé (Mogadiscio)", range: "100–200 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Canjeero (crêpes) + viande, restaurant local", range: "3–7 €" },
          { label: "Restaurant milieu de gamme", range: "10–20 €" },
          { label: "Thé somalien (shaax) + gâteaux", range: "1–2 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Taxi en ville (Hargeisa)", range: "2–5 €" },
          { label: "Minibus Hargeisa–Berbera", range: "5–10 €" },
          { label: "Guide + véhicule pour Laas Geel", range: "40–80 €/j" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée site de Laas Geel", range: "10–20 €" },
          { label: "Sécurité privée Mogadiscio (obligatoire)", range: "150–300 €/j" },
          { label: "Sortie snorkeling Berbera", range: "20–40 €" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "60–90 €/j", desc: "Somaliland uniquement : guesthouse, nourriture locale, transports publics", color: "#22c55e" },
      { type: "Confort", daily: "120–250 €/j", desc: "Hôtel correct, guide, sécurité à Mogadiscio si nécessaire", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "8 jours",
      route: "Hargeisa → Laas Geel → Berbera → Hargeisa",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 200 – 1 600 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Hargeisa (via Addis ou Dubaï)", amount: "600–900 €" },
            { label: "Hébergement (7 nuits)", amount: "105–210 €" },
            { label: "Transports locaux", amount: "100–150 €" },
            { label: "Nourriture + boissons", amount: "150–250 €" },
            { label: "Activités + entrées", amount: "100–200 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 500 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Hargeisa (via Dubaï)", amount: "700–1 000 €" },
            { label: "Hébergement (7 nuits)", amount: "280–560 €" },
            { label: "Location véhicule + guide", amount: "700–1 000 €" },
            { label: "Nourriture + boissons", amount: "300–500 €" },
            { label: "Activités + entrées", amount: "250–400 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "Vols via Dubaï (flydubai vers Hargeisa), Addis-Abeba (Ethiopian Airlines) ou Nairobi (Kenya Airways). Pas de vol direct Paris–Somaliland." },
    { icon: "🪪", label: "Visa", value: "Somaliland : visa à l'arrivée à l'aéroport de Hargeisa (20–30 USD). Somalie fédérale : visa difficile à obtenir, formalités complexes." },
    { icon: "💰", label: "Monnaie", value: "Dollar américain (USD) largement accepté. Shilling du Somaliland en usage local. Pas de carte bancaire internationale acceptée." },
    { icon: "🗣️", label: "Langue", value: "Somali (langue nationale), arabe (deuxième langue). Anglais compris dans les milieux commerciaux du Somaliland." },
    { icon: "🔌", label: "Prise électrique", value: "Type G (britannique à 3 broches). Tension 220V. Générateurs fréquents, coupures habituelles." },
    { icon: "💊", label: "Santé", value: "Vaccin fièvre jaune recommandé (peut être exigé). Paludisme dans les zones basses. Méningite, hépatites A/B conseillés. Eau en bouteille impérative." },
    { icon: "⚠️", label: "Sécurité — Somaliland", value: "Le Somaliland est relativement stable. Laas Geel et Berbera sont accessibles avec un guide local. Respecter les règles locales (tenue, photographies des sites militaires interdites)." },
    { icon: "🚫", label: "Sécurité — Somalie fédérale", value: "Mogadiscio et le reste de la Somalie fédérale sont classés en zone rouge absolue par le MEAE. Risque élevé d'attentats (Al-Shabaab), enlèvements et violence. Sécurité privée obligatoire si déplacement professionnel indispensable." },
  ],
};
