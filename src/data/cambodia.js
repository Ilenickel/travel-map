export const CAMBODIA = {
  code: "KHM",
  numericId: 116,
  name: "Cambodge",
  emoji: "🇰🇭",
  capital: "Phnom Penh",
  language: "Khmer",
  currency: "Riel cambodgien (KHR) / Dollar américain (USD)",
  timezone: "UTC+7",
  filter: {
    budgetMin: 25,
    budgetMid: 55,
    tripMin: 900,
    tripMid: 1800,
  },
  description:
    "Le Cambodge est le pays d'Angkor, l'un des plus grands sites archéologiques du monde. Au-delà des temples khmers, il offre des plages encore sauvages, le Mékong et le lac Tonlé Sap, et une culture empreinte de sérénité bouddhiste malgré un passé traumatique avec les Khmers rouges.",

  bestPeriods: [
    {
      months: "Novembre – Février",
      label: "Saison sèche et fraîche",
      color: "#fbbf24",
      description:
        "Meilleure période : températures douces (25–30 °C), ciel bleu, routes praticables. Idéal pour Angkor et les plages.",
      icon: "☀️",
    },
    {
      months: "Juin – Octobre",
      label: "Saison des pluies (vert et moins de monde)",
      color: "#22c55e",
      description:
        "Campagne verdoyante et moins de touristes à Angkor. Les pluies sont souvent brèves. Coût plus bas.",
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "phnom-penh",
      name: "Phnom Penh",
      region: "Mékong",
      data: [
        { month: "Jan", temp: 25, rain: 10, icon: "☀️" },
        { month: "Fév", temp: 27, rain: 8, icon: "⛅" },
        { month: "Mar", temp: 29, rain: 30, icon: "⛅" },
        { month: "Avr", temp: 31, rain: 65, icon: "⛅" },
        { month: "Mai", temp: 30, rain: 145, icon: "🌧️" },
        { month: "Jun", temp: 30, rain: 180, icon: "🌧️" },
        { month: "Jul", temp: 29, rain: 175, icon: "🌧️" },
        { month: "Aoû", temp: 29, rain: 190, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 260, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 240, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 65, icon: "⛅" },
        { month: "Déc", temp: 25, rain: 15, icon: "☀️" },
      ],
    },
    {
      id: "siem-reap",
      name: "Siem Reap",
      region: "Angkor",
      data: [
        { month: "Jan", temp: 25, rain: 10, icon: "☀️" },
        { month: "Fév", temp: 27, rain: 10, icon: "⛅" },
        { month: "Mar", temp: 29, rain: 30, icon: "⛅" },
        { month: "Avr", temp: 31, rain: 60, icon: "⛅" },
        { month: "Mai", temp: 30, rain: 135, icon: "🌧️" },
        { month: "Jun", temp: 29, rain: 165, icon: "🌧️" },
        { month: "Jul", temp: 29, rain: 175, icon: "🌧️" },
        { month: "Aoû", temp: 29, rain: 185, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 250, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 245, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 60, icon: "⛅" },
        { month: "Déc", temp: 25, rain: 10, icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Angkor & Siem Reap",
      region: "Siem Reap",
      description:
        "Angkor est l'un des sites archéologiques les plus impressionnants du monde : 400 km² de temples khmers du IXe au XVe siècle. Angkor Wat, la plus grande structure religieuse jamais construite, est le symbole même du Cambodge.",
      wikipedia: "File:2016 Angkor, Angkor Wat, Brama Angkor Wat (48).jpg",
      tags: ["temples", "archéologie", "UNESCO", "histoire"],
      mustSee: [
        { name: "Angkor Wat", wikipedia: "Angkor_Wat" },
        { name: "Angkor Thom & Bayon", wikipedia: "Angkor_Thom" },
        { name: "Ta Prohm (temple forêt)", wikipedia: "Ta_Prohm" },
        { name: "Banteay Srei", wikipedia: "Banteay_Srei" },
      ],
    },
    {
      id: 2,
      name: "Phnom Penh",
      region: "Capitale",
      description:
        "La capitale est une ville attachante au bord du Mékong. Le Palais Royal, les pagodes bouddhistes et le marché central contrastent avec les mémoriaux Tuol Sleng (S-21) et Choeung Ek, témoignages poignants du génocide khmer rouge.",
      wikipedia: "Phnom_Penh",
      tags: ["capitale", "histoire", "culture", "mémorial"],
      mustSee: [
        { name: "Palais Royal de Phnom Penh", wikipedia: "File:2016 Phnom Penh, Pałac Królewski, Srebrna Pagoda (02).jpg" },
        { name: "Musée Tuol Sleng (S-21)", wikipedia: "Tuol_Sleng_Genocide_Museum" },
        { name: "Choeung Ek (Killing Fields)", wikipedia: "Choeung_Ek" },
        { name: "Musée National", wikipedia: "National_Museum_of_Cambodia" },
      ],
    },
    {
      id: 3,
      name: "Plages de Sihanoukville & îles",
      region: "Côte Sud",
      description:
        "Les îles de Koh Rong et Koh Rong Samloem offrent des plages de sable blanc et des eaux turquoise encore préservées. Sihanoukville est la porte d'entrée, bien que la ville principale ait beaucoup changé ces dernières années.",
      wikipedia: "Sihanoukville",
      tags: ["plages", "îles", "plongée", "nature"],
      mustSee: [
        { name: "Koh Rong Samloem", wikipedia: "File:Koh Rong Sanloem estuary.jpg" },
        { name: "Koh Rong", wikipedia: "Koh_Rong" },
        { name: "Long Set Beach", wikipedia: "Sihanoukville" },
        { name: "Ream National Park", wikipedia: "Ream_National_Park" },
      ],
    },
    {
      id: 4,
      name: "Battambang",
      region: "Nord-Ouest",
      description:
        "Battambang est la deuxième ville du Cambodge, plus authentique et moins touristique que Siem Reap. Ses temples préangkoriens, son train de bambou (Norry), ses villages de potiers et son architecture coloniale en font une étape charmante.",
      wikipedia: "Battambang",
      tags: ["authentique", "culture", "architecture", "vélo"],
      mustSee: [
        { name: "Train de bambou (Norry)", wikipedia: "File:Bamboo train (Norry) station near Battambang in 2012.jpg" },
        { name: "Phnom Sampeau (temple-falaise)", wikipedia: "File:Wat Phnom Sampeau.Battambang.2006.jpg" },
        { name: "Wat Banan (temple)", wikipedia: "Wat_Banan" },
        { name: "Village de Phnom Pros", wikipedia: "Battambang" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "Le Cambodge est l'une des destinations les plus abordables d'Asie du Sud-Est. Le dollar américain est largement accepté et souvent préféré au riel local.",
    currency: "Dollar américain (USD) / Riel (KHR)",
    exchangeRate: "1€ ≈ 1,05–1,10 USD (utilisez des dollars)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir auberge de jeunesse", price: "4–8 €", detail: "Siem Reap, Phnom Penh, très bon réseau" },
          { label: "Guesthouse double AC", price: "10–25 €", detail: "Bon rapport qualité-prix" },
          { label: "Hôtel boutique 4★", price: "50–120 €", detail: "Siem Reap, piscine souvent incluse" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Repas local (lok lak, amok)", price: "1,5–3 €", detail: "Dans les restos locaux ou marchés" },
          { label: "Happy pizza ou restaurant rue", price: "3–7 €", detail: "Restaurant touristique de base" },
          { label: "Restaurant mid-range", price: "8–18 €", detail: "Fish amok, beef lok lak, desserts" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus Phnom Penh–Siem Reap (6h)", price: "5–10 €", detail: "Giant Ibis ou Mekong Express, AC" },
          { label: "Tuk-tuk trajet ville", price: "1–4 €", detail: "Négocier le prix, omniprésent" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Pass Angkor 1 jour", price: "35 €", detail: "3 jours : 55 €, 7 jours : 70 €" },
          { label: "Cooking class khmer", price: "15–25 €", detail: "Visite marché + cours 3h" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "25–40 €/j", desc: "Dortoir, restos locaux, tuk-tuk", color: "#22c55e" },
      { type: "Confort", daily: "55–90 €/j", desc: "Hôtel 3★, restaurants, excursions guidées", color: "#3b82f6" },
      { type: "Luxe", daily: "150 €+/j", desc: "Hôtel boutique piscine, spa, tours privés", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Phnom Penh – Siem Reap (Angkor) – Plages",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "900 – 1 300 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Phnom Penh", amount: "550–750 €" },
            { label: "Hébergement (14 nuits)", amount: "100–180 €" },
            { label: "Nourriture", amount: "120–200 €" },
            { label: "Transport local + bus", amount: "60–100 €" },
            { label: "Pass Angkor + activités", amount: "80–150 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 800 – 2 600 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Phnom Penh", amount: "700–950 €" },
            { label: "Hébergement (14 nuits)", amount: "450–700 €" },
            { label: "Nourriture", amount: "300–450 €" },
            { label: "Transport + excursions", amount: "200–300 €" },
            { label: "Pass Angkor + activités", amount: "150–250 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "4 500 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Phnom Penh (Business)", amount: "2 500–3 500 €" },
            { label: "Hébergement (14 nuits)", amount: "1 000–1 500 €" },
            { label: "Nourriture & restaurants", amount: "350–500 €" },
            { label: "Tours privés Angkor", amount: "300–500 €" },
            { label: "Activités premium + spa", amount: "250–400 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~13–14h avec escale (Bangkok, Singapour, KL)" },
    { icon: "🪪", label: "Visa", value: "e-Visa en ligne (~36 USD = 30 $ visa + 6 $ frais) ou visa à l'arrivée (35 USD)" },
    { icon: "💰", label: "Monnaie", value: "USD très accepté (1€ ≈ 1,05–1,10 USD)" },
    { icon: "🗣️", label: "Langue", value: "Khmer (l'anglais est très répandu dans le tourisme)" },
    { icon: "🔌", label: "Prise électrique", value: "Type A/C/G – 230 V (adaptateur universel conseillé)" },
    { icon: "📱", label: "Réseau", value: "4G dans les villes, SIM locale chez Smart ou Metfone" },
    { icon: "🚰", label: "Eau du robinet", value: "Non potable, eau en bouteille indispensable" },
    { icon: "💊", label: "Santé", value: "Antipaludéens recommandés pour les zones rurales et forestières" },
  ],
};
