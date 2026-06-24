export const ZAMBIA = {
  code: "ZMB",
  numericId: 894,
  name: "Zambie",
  emoji: "🇿🇲",
  capital: "Lusaka",
  language: "Anglais, Bemba, Nyanja, Tonga",
  currency: "Kwacha zambien (ZMW)",
  timezone: "UTC+2",
  filter: {
    budgetMin: 50, budgetMid: 130,
    tripMin: 1800, tripMid: 4000,
  },
  description:
    "La Zambie est la Rolls-Royce des safaris africains : le South Luangwa (fondateur du walking safari), le Kafue, les plaines d'inondation du Liuwa — et les chutes Victoria (Mosi-oa-Tunya, 'la fumée qui gronde'), classées UNESCO, partagées avec le Zimbabwe. Un pays sans masse touristique, avec une faune abondante et les lodges de safari les plus exclusifs d'Afrique.",

  bestPeriods: [
    {
      months: "Mai – Octobre",
      label: "Saison sèche (Green Season)",
      color: "#22c55e",
      description:
        "Meilleure période pour les safaris : faune concentrée autour des points d'eau, végétation clairsemée pour l'observation. Températures agréables 20–32°C. Victoria Falls à son plus faible niveau mais accessible à pied côté zambien.",
      icon: "☀️",
    },
    {
      months: "Novembre – Avril",
      label: "Saison des pluies",
      color: "#ef4444",
      description:
        "Pluies abondantes (150–250mm/mois), pistes impraticables, certains camps fermés. Victoria Falls au maximum spectaculaire. 'Green season' avec moins de touristes.",
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "livingstone",
      name: "Livingstone",
      region: "Province du Sud (Victoria Falls)",
      data: [
        { month: "Jan", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 180, icon: "🌧️" },
        { month: "Mar", temp: 26, rain: 100, icon: "☀️" },
        { month: "Avr", temp: 24, rain: 20,  icon: "☀️" },
        { month: "Mai", temp: 21, rain: 5,   icon: "☀️" },
        { month: "Jun", temp: 18, rain: 0,   icon: "☀️" },
        { month: "Jul", temp: 18, rain: 0,   icon: "☀️" },
        { month: "Aoû", temp: 21, rain: 0,   icon: "☀️" },
        { month: "Sep", temp: 25, rain: 5,   icon: "☀️" },
        { month: "Oct", temp: 29, rain: 10,  icon: "⛅" },
        { month: "Nov", temp: 28, rain: 80,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 160, icon: "🌧️" },
      ],
    },
    {
      id: "south_luangwa",
      name: "South Luangwa",
      region: "Province de l'Est (parc national)",
      data: [
        { month: "Jan", temp: 28, rain: 220, icon: "🌧️" },
        { month: "Fév", temp: 28, rain: 200, icon: "🌧️" },
        { month: "Mar", temp: 27, rain: 120, icon: "🌧️" },
        { month: "Avr", temp: 25, rain: 25,  icon: "☀️" },
        { month: "Mai", temp: 22, rain: 5,   icon: "☀️" },
        { month: "Jun", temp: 18, rain: 0,   icon: "☀️" },
        { month: "Jul", temp: 17, rain: 0,   icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 0,   icon: "☀️" },
        { month: "Sep", temp: 26, rain: 5,   icon: "☀️" },
        { month: "Oct", temp: 31, rain: 10,  icon: "⛅" },
        { month: "Nov", temp: 29, rain: 80,  icon: "⛅" },
        { month: "Déc", temp: 28, rain: 180, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Chutes Victoria — Mosi-oa-Tunya",
      region: "Livingstone (province du Sud)",
      description:
        "Les chutes Victoria sont les plus grandes chutes d'eau au monde (1 708m de large, 108m de hauteur) — classées UNESCO et merveille naturelle du monde. En saison sèche (sept-oct), on peut nager dans la 'Devil's Pool' au bord du précipice. En saison des pluies, le panache de brume se voit à 50km. L'accès côté zambien permet de longer la falaise face aux chutes.",
      wikipedia: "Victoria_Falls",
      tags: ["Chutes", "UNESCO", "Incontournable", "Aventure", "Nature", "Randonnée"],
      mustSee: [
        { name: "Chutes Victoria", wikipedia: "File:Victoria Falls, Zimbabwe 01.jpg" },
        { name: "Promenade du bord du précipice côté zambien", wikipedia: "File:Mosi-oa-Tunya National Park, Zambia (48598581361).jpg" },
        { name: "Devil's Pool — baignade au bord de la chute (sept-janv)", wikipedia: "File:Visitors at the Devil's Pool, Victoria Falls.jpg" },

      ],
    },
    {
      id: 2,
      name: "South Luangwa — Walking Safari",
      region: "Province de l'Est",
      description:
        "Le South Luangwa est le berceau du walking safari, inventé ici par Norman Carr en 1950. C'est le seul parc africain où l'on peut approcher les animaux à pied avec un guide armé — lions, léopards, éléphants à quelques mètres. La vallée de la rivière Luangwa concentre l'une des plus hautes densités de faune d'Afrique. Considéré par les puristes comme le meilleur parc d'Afrique.",
      wikipedia: "South_Luangwa_National_Park",
      tags: ["Walking safari", "Léopards", "Éléphants", "Exclusif", "Safari"],
      mustSee: [
        { name: "Safari nocturne — léopards et civettes en chasse", wikipedia: "File:South Luangwa National Park animals 2022 16.png" },
        { name: "Rive de la Luangwa — hippopotames et crocodiles", wikipedia: "File:South Luangwa National Park - 51865178097.jpg" },
        { name: "Camp de brousse (fly camp) sous les étoiles", wikipedia: "File:Sunrise in South Luangwa National Park.jpg" },
      ],
    },
    {
      id: 3,
      name: "Plaines du Kafue — Antilopes et lions",
      region: "Province du Nord-Ouest",
      description:
        "Le Kafue est le plus grand parc d'Afrique subsaharienne (22 400 km²) — plus grand que la Belgique. Moins connu que le Luangwa, il offre des paysages variés (plaines d'inondation de Busanga, forêts de miombo) et une faune abondante : lions, guépards, lycaons (chien sauvage d'Afrique en voie de disparition), hippos et sitatungas.",
      wikipedia: "Kafue_National_Park",
      tags: ["Safari", "Lycaons", "Immensité", "Nature"],
      mustSee: [
        { name: "Plaines de Busanga — guépards et lions en saison sèche", wikipedia: "Kafue_National_Park" },
        { name: "Lycaons (chiens sauvages) — espèce en danger critique", wikipedia: "African_wild_dog" },
        { name: "Rivière Kafue — crocodiles et hippopotames", wikipedia: "File:Kafue_River_Hook_Downstream_Zambia_Jul23_A7C_05328.jpg" },
      ],
    },
    {
      id: 4,
      name: "Lusaka et Lower Zambezi",
      region: "Province de Lusaka + Vallée du Zambèze",
      description:
        "Lusaka est une capitale animée avec ses marchés (Soweto Market, le plus grand marché d'Afrique centrale) et ses galeries d'art contemporain zambien. Le Lower Zambezi National Park, en face du Zimbabwe, permet des safaris en canoë sur le Zambèze — paddling entre les éléphants qui traversent le fleuve, unique en Afrique.",
      wikipedia: "File:Lusaka, capital city of Zambia.jpg",
      tags: ["Ville", "Canoë", "Zambèze", "Éléphants", "Gastronomie", "Architecture", "Histoire"],
      mustSee: [
        { name: "Safari en canoë sur le Zambèze — éléphants traversant le fleuve", wikipedia: "Lower_Zambezi_National_Park" },
        { name: "Soweto Market Lusaka — artisanat et cuisine zambienne", wikipedia: "File:Fast Food in Lusaka 10.jpg" },
        { name: "Marché Kalingalinga — peintures et sculptures lusaka", wikipedia: "File:Kalingalinga.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Zambie est une destination de safari haut de gamme : les camps de brousse sont parmi les plus chers du monde. Il est cependant possible de voyager à budget moyen en restant dans des lodges de catégorie intermédiaire à Livingstone. Les parcs eux-mêmes ont des droits d'entrée élevés.",
    currency: "ZMW",
    exchangeRate: "1€ ≈ 28 ZMW",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / backpackers Livingstone", price: "25–60 €", detail: "Chambre simple, piscine souvent disponible" },
          { label: "Lodge 3★ Livingstone ou Lusaka", price: "80–150 €", detail: "Confortable, proches des activités" },
          { label: "Camp de brousse exclusif (Luangwa, Kafue)", price: "400–1 500 €", detail: "Tout inclus, all-inclusive, guides experts" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Nshima + kapenta (petits poissons séchés) restaurant local", price: "5–12 €", detail: "Cuisine zambienne traditionnelle" },
          { label: "Restaurant touristique Livingstone (steakhouse, pizza)", price: "15–30 €", detail: "Clientèle internationale" },
          { label: "Supermarché Shoprite (chaîne locale)", price: "same as Europe", detail: "Produits importés, prix similaires" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus Lusaka–Livingstone (Power Tools, Mazhandu)", price: "10–20 €", detail: "7h de trajet" },
          { label: "Vol intérieur Lusaka–Mfuwe (Luangwa)", price: "150–300 €", detail: "Proflight Zambia, 1h15" },
          { label: "Transfer privé lodge (souvent inclus)", price: "50–150 €", detail: "Depuis l'aéroport de brousse" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Devil's Pool Victoria Falls (entrée + guide)", price: "90–130 €", detail: "Sept–janv, frisson garanti" },
          { label: "Walking safari South Luangwa (demi-journée)", price: "80–150 €", detail: "Guide professionnel armé" },
          { label: "Rafting Zambèze (journée complète)", price: "90–130 €", detail: "23 rapides, niveau 5" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "50–90 €/j", desc: "Guesthouse + cuisine locale + activités basiques", color: "#22c55e" },
      { type: "Confort", daily: "130–250 €/j", desc: "Lodge 3★ + restaurants + safaris guidés", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Lusaka (1j) → Livingstone / Victoria Falls (3j) → South Luangwa (5j) → retour (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 800 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Europe–Lusaka", amount: "600–1 000 €" },
            { label: "Hébergement (10 nuits)", amount: "400–700 €" },
            { label: "Vols intérieurs + transport", amount: "300–500 €" },
            { label: "Nourriture", amount: "200–350 €" },
            { label: "Activités & droits d'entrée parcs", amount: "300–600 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "4 000 – 8 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Europe–Lusaka", amount: "700–1 200 €" },
            { label: "Lodges et camps (10 nuits)", amount: "1 500–4 000 €" },
            { label: "Vols intérieurs + transfers", amount: "500–1 000 €" },
            { label: "Nourriture & bar (souvent inclus)", amount: "inclus–500 €" },
            { label: "Safaris, rafting, activités", amount: "400–1 000 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~12–14h via Johannesburg (South African, Lufthansa), Nairobi (Kenya Airways) ou Addis-Abeba (Ethiopian)." },
    { icon: "🪪", label: "Visa",              value: "Visa à l'arrivée (50 USD, 30 jours) pour les Français. Possible en ligne (e-Visa). KAZA UniVisa disponible (Zambie + Zimbabwe)." },
    { icon: "💰", label: "Monnaie",           value: "Kwacha zambien (ZMW). Dollars USD et euros acceptés dans les lodges. Carte bancaire dans les grandes villes uniquement." },
    { icon: "🗣️", label: "Langue",            value: "Anglais (officiel, langue du quotidien dans les villes). Bemba, Nyanja et Tonga entre habitants." },
    { icon: "🔌", label: "Prise électrique",  value: "Type G (britannique, 3 broches carrées) — 230V. Adaptateur recommandé." },
    { icon: "💊", label: "Santé",             value: "Antipaludéen indispensable. Vaccin fièvre jaune obligatoire si arrivée depuis pays endémique. Eau en bouteille." },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille uniquement." },
    { icon: "📱", label: "Réseau",            value: "MTN et Airtel couvrent les principales villes. Les parcs de brousse sont en zone blanche — prévoir communication satellite si besoin." },
  ],
};
