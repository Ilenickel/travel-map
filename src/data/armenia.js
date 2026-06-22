export const ARMENIA = {
  code: "ARM",
  numericId: 51,
  name: "Arménie",
  emoji: "🇦🇲",
  capital: "Erevan",
  language: "Arménien",
  currency: "Dram (AMD)",
  timezone: "UTC+4",
  filter: {
    budgetMin: 25, budgetMid: 55,
    tripMin: 1000, tripMid: 1800,
  },
  description:
    "L'Arménie, berceau du christianisme (301 ap. J.-C.), fascine par ses monastères médiévaux perchés dans des gorges profondes, son lac Sévan aux teintes cobalt, l'ombre du mont Ararat sur Erevan et une culture du café et du cognac incomparables.",

  bestPeriods: [
    {
      months: "Mai – Juin",
      label: "Printemps fleuri",
      color: "#22c55e",
      description:
        "Nature éclatante, températures douces (16–24 °C). Idéal pour les monastères, les gorges et les randonnées.",
      icon: "🌺",
    },
    {
      months: "Septembre – Octobre",
      label: "Automne & Vendanges",
      color: "#fb923c",
      description:
        "Raisins, figues, grenades mûrissent. Lumière dorée sur les monastères, températures parfaites.",
      icon: "🍇",
    },
    {
      months: "Juillet – Août",
      label: "Été montagnard",
      color: "#3b82f6",
      description:
        "Chaud à Erevan (27 °C) mais les montagnes (Dilijan, Tatev) restent fraîches et magnifiques.",
      icon: "⛰️",
    },
  ],

  weatherCities: [
    {
      id: "yerevan",
      name: "Erevan",
      region: "Ararat",
      data: [
        { month: "Jan", temp: 0,  rain: 30,  icon: "❄️" },
        { month: "Fév", temp: 1,  rain: 30,  icon: "❄️" },
        { month: "Mar", temp: 7,  rain: 45,  icon: "❄️" },
        { month: "Avr", temp: 13, rain: 55,  icon: "⛅" },
        { month: "Mai", temp: 18, rain: 60,  icon: "☀️" },
        { month: "Jun", temp: 23, rain: 25,  icon: "☀️" },
        { month: "Jul", temp: 27, rain: 15,  icon: "⛅" },
        { month: "Aoû", temp: 27, rain: 15,  icon: "⛅" },
        { month: "Sep", temp: 22, rain: 25,  icon: "☀️" },
        { month: "Oct", temp: 15, rain: 45,  icon: "⛅" },
        { month: "Nov", temp: 8,  rain: 35,  icon: "⛅" },
        { month: "Déc", temp: 2,  rain: 30,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Erevan",
      region: "Ararat",
      description:
        "La « ville rose » (construite en tuf volcanique rose) avec la cascade monumentale, le musée Matenadaran aux manuscrits enluminés, et la vue sur le mont Ararat en toile de fond.",
      wikipedia: "Yerevan",
      tags: ["Ville", "Culture", "Art", "Gastronomie"],
      mustSee: [
        { name: "Cascade — escalier monumental", wikipedia: "Yerevan_Cascade" },
        { name: "Matenadaran — manuscrits anciens", wikipedia: "Matenadaran" },
        { name: "Place de la République", wikipedia: "Republic_Square,_Yerevan" },
        { name: "Mont Ararat (vue depuis Erevan)", wikipedia: "Mount_Ararat" },
      ],
    },
    {
      id: 2,
      name: "Geghard & Garni",
      region: "Kotayk",
      description:
        "Le monastère de Geghard (XIIIe s.), partiellement taillé dans la roche d'une gorge, est l'un des plus impressionnants du Caucase. À 20 km, le temple grec de Garni (Ier s. ap. J.-C.) est unique.",
      wikipedia: "Geghard",
      tags: ["Histoire", "UNESCO", "Archéologie"],
      mustSee: [
        { name: "Monastère de Geghard (UNESCO)", wikipedia: "Geghard" },
        { name: "Temple grec de Garni", wikipedia: "Garni_Temple" },
        { name: "Gorge de l'Azat", wikipedia: "File:Río Azat, valle de Garni, Armenia, 2016-10-02, DD 37-39 HDR.jpg" },
      ],
    },
    {
      id: 3,
      name: "Tatev — Câble & Monastère",
      region: "Syunik",
      description:
        "Le monastère de Tatev (IXe s.) trône sur un promontoire vertigineux dans le Syunik. Pour y accéder : « Wings of Tatev », le plus long téléphérique réversible passager du monde (5,7 km).",
      wikipedia: "Tatev_Monastery",
      tags: ["Histoire", "Panorama", "Aventure"],
      mustSee: [
        { name: "Téléphérique Wings of Tatev (5,7 km)", wikipedia: "Wings_of_Tatev" },
        { name: "Monastère de Tatev (IXe s.)", wikipedia: "Tatev_Monastery" },
        { name: "Gorge de Vorotan", wikipedia: "File:Vorotan_kz02.jpg" },
      ],
    },
    {
      id: 4,
      name: "Lac Sévan",
      region: "Gegharkunik",
      description:
        "L'un des plus grands lacs d'eau douce du monde en altitude (1 900 m), entouré de montagnes. Les monastères de Sevanavank sur une presqu'île offrent une vue époustouflante.",
      wikipedia: "Lake_Sevan",
      tags: ["Nature", "Histoire", "Randonnée"],
      mustSee: [
        { name: "Monastères de Sevanavank", wikipedia: "Sevanavank" },
        { name: "Plages et baignade (juillet-août)", wikipedia: "Lake_Sevan" },
        { name: "Dilijan — forêts et guesthouses", wikipedia: "File:Dilijan monument banner.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "L'Arménie est l'une des destinations les plus économiques du Caucase. Erevan est très abordable avec une scène culinaire et artistique surprenante.",
    currency: "AMD",
    exchangeRate: "1€ ≈ 430 AMD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse familiale", price: "10–20 €", detail: "Souvent avec petit-déjeuner arménien" },
          { label: "Hôtel 3★ Erevan", price: "30–55 €", detail: "Centre-ville" },
          { label: "Hôtel boutique design", price: "70–130 €", detail: "Quartier branché d'Erevan" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Lavash + houmous + mezze", price: "2–5 €", detail: "Rue ou marché Vernissage" },
          { label: "Restaurant local (khorovats)", price: "6–12 €", detail: "BBQ arménien à toute heure" },
          { label: "Restaurant gastronomique Erevan", price: "15–35 €", detail: "Excellente cuisine moderne" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Métro Erevan (trajet)", price: "0,20 €", detail: "Limité mais pratique" },
          { label: "Taxi Erevan (GG / Yandex)", price: "1–3 €", detail: "Application recommandée" },
          { label: "Marshrutka intercités", price: "2–6 €", detail: "Erevan–Gyumri ou Sévan" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Wings of Tatev (aller-retour)", price: "12–16 €", detail: "Téléphérique record mondial" },
          { label: "Dégustation brandy Ararat", price: "8–20 €", detail: "Distillerie ouverte aux visiteurs" },
          { label: "Tour en Jeep (Khosrov, Noravank)", price: "40–70 €/j", detail: "Guide + transport" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "25–40 €/j", desc: "Guesthouse + restaurants locaux + transports", color: "#22c55e" },
      { type: "Confort", daily: "55–80 €/j", desc: "Hôtel 3★ + bonnes tables + excursions", color: "#3b82f6" },
      { type: "Luxe", daily: "150 €+/j", desc: "Boutique hôtel + gastronomie + circuit privé", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Erevan (4j) → Garni & Geghard (1j) → Lac Sévan (1j) → Dilijan (1j) → Tatev (2j) → Erevan (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 000 – 1 400 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Erevan", amount: "300–500 €" },
            { label: "Hébergement (10 nuits)", amount: "150–250 €" },
            { label: "Nourriture", amount: "200–300 €" },
            { label: "Transport local", amount: "100–150 €" },
            { label: "Activités & imprévus", amount: "150–200 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 800 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Erevan", amount: "400–650 €" },
            { label: "Hébergement (10 nuits)", amount: "400–650 €" },
            { label: "Nourriture", amount: "400–600 €" },
            { label: "Transport & guides", amount: "300–500 €" },
            { label: "Activités & imprévus", amount: "250–400 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "4 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Erevan (direct)", amount: "800–1 500 €" },
            { label: "Hébergement boutique (10 nuits)", amount: "900–1 500 €" },
            { label: "Gastronomie & dégustations", amount: "500–800 €" },
            { label: "Circuit privé & chauffeur", amount: "500–800 €" },
            { label: "Expériences & imprévus", amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~4–5h (Air France, Flyone Armenia)" },
    { icon: "🪪", label: "Visa",              value: "Sans visa pour les Français (180 jours)" },
    { icon: "💰", label: "Monnaie",           value: "Dram (1€ ≈ 430 AMD) — espèces souvent préférées" },
    { icon: "🗣️", label: "Langue",            value: "Arménien (russe compris, anglais chez les jeunes)" },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/F – 220 V" },
    { icon: "📱", label: "Réseau",            value: "Bonne couverture, SIM locale ~3€" },
    { icon: "🚰", label: "Eau du robinet",    value: "Potable à Erevan" },
    { icon: "💊", label: "Santé",             value: "Aucun vaccin obligatoire" },
  ],
};
