export const BHUTAN = {
  code: "BTN",
  numericId: 64,
  name: "Bhoutan",
  emoji: "🇧🇹",
  capital: "Thimphou",
  language: "Dzongkha",
  currency: "Ngultrum (BTN)",
  timezone: "UTC+6",
  filter: {
    budgetMin: 200, budgetMid: 350,
    tripMin: 3000, tripMid: 5500,
  },
  description:
    "Le Bhoutan est le dernier royaume bouddhiste de l'Himalaya, mesurant son succès au « Bonheur National Brut » plutôt qu'au PIB. Monastères perchés à flanc de falaise, rizières en terrasses, forêts vierges et une culture tibétaine intacte — une destination hors du temps, accessible mais unique.",

  bestPeriods: [
    {
      months: "Mars – Mai",
      label: "Printemps & Rhododendrons",
      color: "#22c55e",
      description:
        "Rhododendrons en fleurs (plus de 46 espèces), ciels clairs sur l'Himalaya, températures douces. Idéal pour trek et festivals (Paro Tsechu en avril).",
      icon: "🌸",
    },
    {
      months: "Septembre – Novembre",
      label: "Automne cristallin",
      color: "#fb923c",
      description:
        "Après la mousson, l'air est lavé, les panoramas sur les sommets (Jomolhari, Gangkhar Puensum) sont spectaculaires. Idéal pour les treks.",
      icon: "🏔️",
    },
  ],

  weatherCities: [
    {
      id: "thimphu",
      name: "Thimphou",
      region: "Thimphou",
      data: [
        { month: "Jan", temp:  5, rain:  10, icon: "❄️" },
        { month: "Fév", temp:  7, rain:  20, icon: "❄️" },
        { month: "Mar", temp: 10, rain:  30, icon: "⛅" },
        { month: "Avr", temp: 13, rain:  60, icon: "⛅" },
        { month: "Mai", temp: 16, rain: 100, icon: "☀️" },
        { month: "Jun", temp: 19, rain: 150, icon: "☀️" },
        { month: "Jul", temp: 20, rain: 200, icon: "⛅" },
        { month: "Aoû", temp: 20, rain: 200, icon: "⛅" },
        { month: "Sep", temp: 18, rain: 120, icon: "☀️" },
        { month: "Oct", temp: 14, rain:  50, icon: "⛅" },
        { month: "Nov", temp:  9, rain:  15, icon: "⛅" },
        { month: "Déc", temp:  6, rain:   5, icon: "❄️" },
      ],
    },
    {
      id: "paro",
      name: "Paro",
      region: "Paro",
      data: [
        { month: "Jan", temp:  3, rain:   8, icon: "❄️" },
        { month: "Fév", temp:  5, rain:  15, icon: "❄️" },
        { month: "Mar", temp:  9, rain:  25, icon: "⛅" },
        { month: "Avr", temp: 13, rain:  55, icon: "⛅" },
        { month: "Mai", temp: 16, rain:  90, icon: "☀️" },
        { month: "Jun", temp: 19, rain: 140, icon: "☀️" },
        { month: "Jul", temp: 20, rain: 200, icon: "⛅" },
        { month: "Aoû", temp: 20, rain: 200, icon: "⛅" },
        { month: "Sep", temp: 17, rain: 110, icon: "☀️" },
        { month: "Oct", temp: 13, rain:  45, icon: "⛅" },
        { month: "Nov", temp:  8, rain:  12, icon: "⛅" },
        { month: "Déc", temp:  4, rain:   4, icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Paro — Taktsang (Nid du Tigre)",
      region: "Paro",
      description:
        "Le monastère de Paro Taktsang, perché à 3 120 m sur une falaise verticale, est l'image iconique du Bhoutan. La randonnée de 2h depuis la vallée est accessible à tous.",
      wikipedia: "Paro_Taktsang",
      tags: ["Randonnée", "Bouddhisme", "Panorama", "Incontournable"],
      mustSee: [
        { name: "Monastère du Nid du Tigre (Taktsang)", wikipedia: "Paro_Taktsang" },
        { name: "Rinpung Dzong — forteresse-monastère", wikipedia: "Rinpung_Dzong" },
        { name: "Musée national du Bhoutan", wikipedia: "National_Museum_of_Bhutan" },
      ],
    },
    {
      id: 2,
      name: "Thimphou",
      region: "Thimphou",
      description:
        "Capitale sans feux de circulation (unique au monde), Thimphou est une ville à taille humaine avec le Tashichho Dzong, la statue de Bouddha Dordenma (51 m) et des marchés colorés.",
      wikipedia: "Thimphu",
      tags: ["Ville", "Culture", "Bouddhisme"],
      mustSee: [
        { name: "Bouddha Dordenma (51 m)", wikipedia: "Buddha_Dordenma_statue" },
        { name: "Tashichho Dzong", wikipedia: "Tashichho_Dzong" },
        { name: "Changangkha Lhakhang (XIIe s.)", wikipedia: "Changangkha_Lhakhang" },
      ],
    },
    {
      id: 3,
      name: "Punakha",
      region: "Punakha",
      description:
        "Ancienne capitale d'hiver, Punakha abrite le plus beau dzong du Bhoutan, à la confluence de deux rivières sacrées, entouré de rizières et de champs de moutarde dorée.",
      wikipedia: "Punakha_Dzong",
      tags: ["Histoire", "Architecture", "Nature"],
      mustSee: [
        { name: "Punakha Dzong — joyau architectural", wikipedia: "Punakha_Dzong" },
        { name: "Champs de moutarde (fév–mars)", wikipedia: "Punakha" },
        { name: "Chimi Lhakhang — temple de la fertilité", wikipedia: "Chimi_Lhakhang" },
      ],
    },
    {
      id: 4,
      name: "Bumthang — Vallée sacrée",
      region: "Bumthang",
      description:
        "Le cœur culturel et spirituel du Bhoutan, avec les plus anciens temples du pays, des forêts de sapins, des brasseries artisanales et la chaleur des habitants.",
      wikipedia: "Bumthang_District",
      tags: ["Spiritualité", "Randonnée", "Culture"],
      mustSee: [
        { name: "Jakar Dzong", wikipedia: "Jakar_Dzong" },
        { name: "Kurjey Lhakhang (empreinte de Guru Rinpoché)", wikipedia: "Kurjey_Lhakhang" },
        { name: "Red Panda Brewery (bière bhoutanaise)", wikipedia: "Bumthang_District" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Bhoutan impose une taxe touristique journalière (Sustainable Development Fee : 100$/jour en 2024, réduite de 200$/jour depuis 2023). Cela inclut hébergement 3★, repas, guide et transport locaux.",
    currency: "BTN / INR",
    exchangeRate: "1€ ≈ 90 BTN (parité avec roupie indienne)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Hôtel 3★ (inclus dans SDF)", price: "Inclus", detail: "Dans la taxe touristique journalière" },
          { label: "Hôtel 4★ (supplément)", price: "+50–100 €/nuit", detail: "Au-dessus du minimum SDF" },
          { label: "Lodge de luxe Aman/Six Senses", price: "600–1 500 €/nuit", detail: "En sus du SDF" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Ema Datshi (chili au fromage)", price: "Inclus SDF", detail: "Plat national, 3 repas inclus" },
          { label: "Restaurant upgradé", price: "15–30 €", detail: "En supplément du SDF" },
          { label: "Red Rice & Momo", price: "3–6 €", detail: "Si hors circuit officiel" },
        ],
      },
      {
        id: "transport",
        icon: "🚐",
        label: "Transport",
        items: [
          { label: "Transport inclus dans SDF", price: "Inclus", detail: "Véhicule + chauffeur dans le circuit" },
          { label: "Vol Paro–Katmandou", price: "150–250 €", detail: "Option combinaison avec Népal" },
          { label: "Druk Air (vol arrivée)", price: "200–400 €", detail: "Seul accès aérien" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Toutes visites incluses dans SDF", price: "Inclus", detail: "Guide + entrées" },
          { label: "Trek Jomolhari (7j)", price: "+200–400 €", detail: "Supplément trek avec guide" },
          { label: "Festival Tsechu (place réservée)", price: "+30–60 €", detail: "Billets pour meilleurs places" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "200 €/j", desc: "SDF 100$/j + vol A/R lissé + suppléments minimum", color: "#22c55e" },
      { type: "Confort", daily: "300–400 €/j", desc: "SDF + hôtel 4★ + excursions supplémentaires", color: "#3b82f6" },
      { type: "Luxe", daily: "700 €+/j", desc: "SDF + lodges Aman/Six Senses + treks privés", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Paro (2j) → Thimphou (3j) → Punakha (2j) → Bumthang (3j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "3 000 – 3 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Paro (Druk Air/Bangkok Air)", amount: "700–1 200 €" },
            { label: "SDF 100$/j × 10 jours", amount: "~920 €" },
            { label: "Hébergement & repas (inclus SDF)", amount: "Inclus" },
            { label: "Guide & transport (inclus SDF)", amount: "Inclus" },
            { label: "Suppléments & imprévus", amount: "500–800 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "5 500 – 7 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Paro", amount: "900–1 400 €" },
            { label: "SDF 100$/j × 10 jours", amount: "~920 €" },
            { label: "Hôtel 4★ (supplément)", amount: "700–1 200 €" },
            { label: "Treks & excursions", amount: "500–800 €" },
            { label: "Repas upgradés & imprévus", amount: "400–600 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "12 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Paro (Business)", amount: "2 000–4 000 €" },
            { label: "SDF 100$/j × 10 jours", amount: "~920 €" },
            { label: "Lodges Amankora ou Six Senses", amount: "6 000–12 000 €" },
            { label: "Treks privés & expériences exclusives", amount: "1 000–2 000 €" },
            { label: "Gastronomie & imprévus", amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~12h (Druk Air/Bangkok Air via Bangkok ou Delhi)" },
    { icon: "🪪", label: "Visa",              value: "Visa obligatoire (obtenu via agence agréée + SDF)" },
    { icon: "💰", label: "Monnaie",           value: "Ngultrum = Roupie indienne (1€ ≈ 90 BTN)" },
    { icon: "🗣️", label: "Langue",            value: "Dzongkha (anglais dans le tourisme)" },
    { icon: "🔌", label: "Prise électrique",  value: "Type D/F/G – 230 V" },
    { icon: "📱", label: "Réseau",            value: "Couverture dans les vallées, limité en montagne" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non recommandée — eau en bouteille" },
    { icon: "💊", label: "Santé",             value: "Vaccin hépatite A recommandé, médicaments anti-altitude" },
  ],
};
