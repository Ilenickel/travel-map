export const ZIMBABWE = {
  code: "ZWE",
  numericId: 716,
  name: "Zimbabwe",
  emoji: "🇿🇼",
  capital: "Harare",
  language: "Shona, Ndébélé, Anglais",
  currency: "Dollar américain (USD)",
  timezone: "UTC+2",
  filter: {
    budgetMin: 80, budgetMid: 220,
    tripMin: 2500, tripMid: 7000,
  },
  description:
    "Le Zimbabwe recèle deux des merveilles naturelles africaines : les chutes Victoria, classées UNESCO, la plus grande cascade du monde par volume d'eau et brume visible à 40 km, et le mystérieux Grand Zimbabwe, ruines médiévales témoignant d'un empire africain disparu. Hwange abrite 40 000 éléphants.",

  bestPeriods: [
    {
      months: "Mai – Octobre",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "Idéal pour les safaris (animaux concentrés aux points d'eau). Victoria Falls en mai–juillet = débit maximum. Sep–oct = meilleure visibilité du Devil's Pool.",
      icon: "🌊",
    },
    {
      months: "Décembre – Avril",
      label: "Saison verte",
      color: "#3b82f6",
      description:
        "Paysages verdoyants, oiseaux migrateurs, moins de touristes. Les chutes sont moins impressionnantes (après la crue).",
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "victoria_falls",
      name: "Victoria Falls",
      region: "Matabeleland Nord",
      data: [
        { month: "Jan", temp: 28, rain: 120, icon: "🌧️" },
        { month: "Fév", temp: 28, rain: 110, icon: "🌧️" },
        { month: "Mar", temp: 28, rain: 80,  icon: "⛅" },
        { month: "Avr", temp: 27, rain: 20,  icon: "⛅" },
        { month: "Mai", temp: 24, rain: 5,   icon: "☀️" },
        { month: "Jun", temp: 21, rain: 0,   icon: "☀️" },
        { month: "Jul", temp: 21, rain: 0,   icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 0,   icon: "☀️" },
        { month: "Sep", temp: 28, rain: 5,   icon: "⛅" },
        { month: "Oct", temp: 31, rain: 30,  icon: "⛅" },
        { month: "Nov", temp: 30, rain: 80,  icon: "⛅" },
        { month: "Déc", temp: 29, rain: 120, icon: "🌧️" },
      ],
    },
    {
      id: "harare",
      name: "Harare",
      region: "Mashonaland",
      data: [
        { month: "Jan", temp: 25, rain: 200, icon: "⛅" },
        { month: "Fév", temp: 25, rain: 175, icon: "☀️" },
        { month: "Mar", temp: 24, rain: 120, icon: "☀️" },
        { month: "Avr", temp: 23, rain: 30,  icon: "☀️" },
        { month: "Mai", temp: 20, rain: 10,  icon: "☀️" },
        { month: "Jun", temp: 18, rain: 5,   icon: "☀️" },
        { month: "Jul", temp: 18, rain: 5,   icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 5,   icon: "☀️" },
        { month: "Sep", temp: 24, rain: 10,  icon: "☀️" },
        { month: "Oct", temp: 26, rain: 40,  icon: "☀️" },
        { month: "Nov", temp: 25, rain: 100, icon: "☀️" },
        { month: "Déc", temp: 25, rain: 180, icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Chutes Victoria",
      region: "Matabeleland Nord",
      description:
        "Les chutes Victoria, classées UNESCO et 7e merveille naturelle, sont la plus grande cascade du monde par volume d'eau : 1,7 km de large, 108 m de haut, un rugissement audible à 40 km et une brume permanente. Le Devil's Pool permet de nager à 10 cm du précipice entre septembre et décembre.",
      wikipedia: "Victoria_Falls",
      tags: ["UNESCO", "7e Merveille", "Cascade", "Aventure", "Nature", "Randonnée"],
      mustSee: [ 
        { name: "Chutes Victoria", wikipedia: "File:Victoria Falls, Zimbabwe 01.jpg" },
        { name: "Devil's Pool — nager au bord de la chute (sep–déc)", wikipedia: "File:Visitors at the Devil's Pool, Victoria Falls.jpg" },
        { name: "Bungee jumping sur le pont du Zimbabwe (111 m)", wikipedia: "File:Victoria Falls Bridge.JPG" },
        { name: "Promenade du bord du précipice côté zambien", wikipedia: "File:Mosi-oa-Tunya National Park, Zambia (48598581361).jpg" },
      ],
    },
    {
      id: 2,
      name: "Hwange National Park",
      region: "Matabeleland Nord",
      description:
        "Hwange est le plus grand parc national du Zimbabwe : 14 651 km² abritant 40 000 éléphants (la plus grande population de Zimbabwe), des meutes de lycaons peints (espèce menacée), des lions et des rhinocéros noirs. Les points d'eau artificiels concentrent la faune en saison sèche.",
      wikipedia: "Hwange_National_Park",
      tags: ["Éléphants", "Safari", "Lycaons", "Big Five", "Nature"],
      mustSee: [
        { name: "Troupeaux d'éléphants (40 000 dans le parc)", wikipedia: "African_bush_elephant" },
        { name: "Meutes de lycaons peints (painted dogs)", wikipedia: "African_wild_dog" },
        { name: "Lions de Hwange (notoirement confiants)", wikipedia: "Lion" },
        { name: "Rhinos noirs — à pied (guides armés)", wikipedia: "Black_rhinoceros" },
      ],
    },
    {
      id: 3,
      name: "Grand Zimbabwe",
      region: "Masvingo",
      description:
        "Le Grand Zimbabwe, classé UNESCO, est l'ensemble de ruines en pierre sèche le plus grand d'Afrique subsaharienne : une cité médiévale (XI–XV s.) qui fut capitale d'un empire commercant sur l'or, la taille et la complexité de ses murs défiant toute explication longtemps. Mystérieux et grandiose.",
      wikipedia: "Great_Zimbabwe",
      tags: ["UNESCO", "Histoire", "Archéologie", "Mystère", "Architecture"],
      mustSee: [
        { name: "La Grande Enceinte (mur de 250 m, 11 m de haut)", wikipedia: "File:Great-Zimbabwe.jpg" },
        { name: "Colline du Roi (acropole royale)", wikipedia: "Great_Zimbabwe" },
        { name: "Musée national du Grand Zimbabwe", wikipedia: "File:Natural History Museum Zimbabwe Bulawayo.jpg" },
      ],
    },
    {
      id: 4,
      name: "Matobo Hills",
      region: "Matabeleland Sud",
      description:
        "Les collines Matobo (UNESCO) sont un paysage de rochers balancés géants (kopjes) parsemé de peintures rupestres San parmi les plus belles d'Afrique. C'est aussi le seul endroit au monde où l'on peut tracker des rhinocéros blancs à pied, sans grillage, avec des guides.",
      wikipedia: "File:Matobo Road and kopje.jpg",
      tags: ["UNESCO", "Art rupestre", "Rhinos", "Randonnée", "Nature"],
      mustSee: [
        { name: "Tracking rhinos blancs à pied (sans barrière)", wikipedia: "White_rhinoceros" },
        { name: "Peintures rupestres San (parmi les plus belles d'Afrique)", wikipedia: "San_rock_art" },
        { name: "World's View — tombe de Cecil Rhodes & panorama", wikipedia: "File:Tomb Cecil Rhodes1.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Zimbabwe utilise principalement le dollar américain pour le tourisme. Les prix sont en hausse mais restent raisonnables comparés au Botswana voisin. Victoria Falls est la ville la plus chère. La KAZA Univisa (Zambie-Zimbabwe) est très pratique.",
    currency: "USD",
    exchangeRate: "1€ ≈ 1,08 USD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / backpacker", price: "20–40 €", detail: "Harare ou Vic Falls town" },
          { label: "Lodge safari mid-range", price: "120–250 €", detail: "Pension complète + safaris" },
          { label: "Lodge luxe (Hwange ou Vic Falls)", price: "400–1 000 €", detail: "All-inclusive haut de gamme" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Sadza + ragoût (plat national)", price: "3–6 €", detail: "Excellent et copieux" },
          { label: "Restaurant Victoria Falls", price: "15–30 €", detail: "Vue fleuve Zambèze" },
          { label: "Dinner au lodge (inclus)", price: "inclus", detail: "Braai au feu de bois en brousse" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Vol Harare–Victoria Falls", price: "80–150 €", detail: "A/R, 1h30" },
          { label: "Transfert privé (Victoria Falls–Hwange)", price: "30–50 €", detail: "2h de piste" },
          { label: "Bus Intercape (Harare–Bulawayo)", price: "15–25 €", detail: "Confortable, 5h" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée chutes Victoria", price: "30 €", detail: "Côté zimbabwéen" },
          { label: "Bungee jumping pont Vic Falls (111 m)", price: "130–160 €", detail: "Expérience inoubliable" },
          { label: "KAZA Univisa (Zambie + Zimbabwe)", price: "50 €", detail: "Valable 30 jours les deux pays" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "80–130 €/j", desc: "Guesthouse + sadza + bus + entrées parcs", color: "#22c55e" },
      { type: "Confort", daily: "220–400 €/j", desc: "Lodge safari + safaris guidés + vols intérieurs", color: "#3b82f6" },
      { type: "Luxe", daily: "700 €+/j", desc: "Lodge all-inclusive premium + hélicoptère + privé", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Harare (1j) → Grand Zimbabwe (2j) → Hwange (3j) → Victoria Falls (4j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "2 500 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Zimbabwe (via Johannesburg)", amount: "700–1 100 €" },
            { label: "Hébergement (10 nuits)", amount: "600–900 €" },
            { label: "Vols intérieurs + transports", amount: "300–500 €" },
            { label: "Activités & entrées parcs", amount: "400–600 €" },
            { label: "Nourriture & imprévus", amount: "300–500 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "7 000 – 10 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Zimbabwe", amount: "800–1 300 €" },
            { label: "Lodges mid-range (10 nuits)", amount: "2 500–4 000 €" },
            { label: "Vols intérieurs + transferts", amount: "600–1 000 €" },
            { label: "Safaris & activités (bungee etc.)", amount: "800–1 500 €" },
            { label: "Nourriture & extras", amount: "500–800 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "15 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Zimbabwe (Business)", amount: "3 500–6 000 €" },
            { label: "Lodges all-inclusive premium (10 nuits)", amount: "6 000–10 000 €" },
            { label: "Hélicoptère Vic Falls + privé", amount: "1 500–3 000 €" },
            { label: "Safaris privés + Devil's Pool", amount: "inclus" },
            { label: "Extras", amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~13h avec escale (Ethiopian Airlines, South African Airways, Kenya Airways)" },
    { icon: "🪪", label: "Visa",              value: "Visa on arrival (~50 USD) ou KAZA Univisa (~50 USD, valable Zimbabwe + Zambie)" },
    { icon: "💰", label: "Monnaie",           value: "Dollar américain (USD) — espèces essentielles en brousse" },
    { icon: "🗣️", label: "Langue",            value: "16 langues officielles — Shona, Ndébélé et Anglais principaux" },
    { icon: "🔌", label: "Prise électrique",  value: "Type D/G – 220 V" },
    { icon: "📱", label: "Réseau",            value: "Couverture villes, limitée Hwange et brousse" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille obligatoire" },
    { icon: "💊", label: "Santé",             value: "Antipaludéen OBLIGATOIRE pour Hwange, Chobe et Zambèze" },
  ],
};
