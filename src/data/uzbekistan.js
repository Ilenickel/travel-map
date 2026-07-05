export const UZBEKISTAN = {
  code: "UZB",
  numericId: 860,
  name: { fr: "Ouzbékistan", en: "Uzbekistan" },
  emoji: "🇺🇿",
  capital: { fr: "Tachkent", en: "Tashkent" },
  language: { fr: "Ouzbek", en: "Uzbek" },
  currency: { fr: "Som ouzbek (UZS)", en: "Uzbekistani Som (UZS)" },
  timezone: "UTC+5",
  filter: {
    budgetMin: 30, budgetMid: 65,
    tripMin: 1200, tripMid: 2200,
  },
  description: {
    fr: "L'Ouzbékistan est le cœur de la Route de la Soie. Samarcande, Boukhara et Khiva sont des villes-musées à ciel ouvert, avec leurs mosaïques de faïence turquoise, leurs minarets et leurs médersas du XIVe siècle. Une destination qui touche à l'absolu.",
    en: "Uzbekistan is the heart of the Silk Road. Samarkand, Bukhara and Khiva are open-air museum cities, with their turquoise tile mosaics, minarets and 14th-century madrasas. A destination that borders on the sublime.",
  },

  bestPeriods: [
    {
      months: { fr: "Avril – Juin", en: "April – June" },
      label: { fr: "Printemps", en: "Spring" },
      color: "#22c55e",
      description: {
        fr: "Températures idéales (17–25 °C), jardins en fleurs, idéal pour visiter Samarcande, Boukhara, Khiva.",
        en: "Ideal temperatures (17–25 °C), gardens in bloom, ideal for visiting Samarkand, Bukhara, Khiva.",
      },
      icon: "🌺",
    },
    {
      months: { fr: "Septembre – Octobre", en: "September – October" },
      label: { fr: "Automne doré", en: "Golden autumn" },
      color: "#fb923c",
      description: {
        fr: "Chaleur retombée, lumière magnifique sur les mosaïques, saison des abricots et des raisins secs.",
        en: "Heat has eased, beautiful light on the mosaics, apricot and raisin season.",
      },
      icon: "🏛️",
    },
  ],

  weatherCities: [
    {
      id: "samarkand",
      name: { fr: "Samarcande", en: "Samarkand" },
      region: { fr: "Samarcande", en: "Samarkand" },
      data: [
        { month: "Jan", temp: 2,  rain: 30,  icon: "❄️" },
        { month: "Fév", temp: 4,  rain: 30,  icon: "⛅" },
        { month: "Mar", temp: 10, rain: 45,  icon: "⛅" },
        { month: "Avr", temp: 17, rain: 40,  icon: "☀️" },
        { month: "Mai", temp: 22, rain: 25,  icon: "☀️" },
        { month: "Jun", temp: 28, rain: 5,   icon: "☀️" },
        { month: "Jul", temp: 30, rain: 2,   icon: "☀️" },
        { month: "Aoû", temp: 29, rain: 2,   icon: "☀️" },
        { month: "Sep", temp: 23, rain: 5,   icon: "☀️" },
        { month: "Oct", temp: 17, rain: 15,  icon: "☀️" },
        { month: "Nov", temp: 10, rain: 30,  icon: "⛅" },
        { month: "Déc", temp: 4,  rain: 30,  icon: "⛅" },
      ],
    },
    {
      id: "tashkent",
      name: { fr: "Tachkent", en: "Tashkent" },
      region: { fr: "Capitale", en: "Capital" },
      data: [
        { month: "Jan", temp: 1,  rain: 50,  icon: "❄️" },
        { month: "Fév", temp: 3,  rain: 45,  icon: "⛅" },
        { month: "Mar", temp: 9,  rain: 65,  icon: "⛅" },
        { month: "Avr", temp: 16, rain: 55,  icon: "☀️" },
        { month: "Mai", temp: 21, rain: 30,  icon: "☀️" },
        { month: "Jun", temp: 27, rain: 8,   icon: "☀️" },
        { month: "Jul", temp: 29, rain: 3,   icon: "☀️" },
        { month: "Aoû", temp: 28, rain: 2,   icon: "☀️" },
        { month: "Sep", temp: 22, rain: 10,  icon: "☀️" },
        { month: "Oct", temp: 16, rain: 35,  icon: "☀️" },
        { month: "Nov", temp: 9,  rain: 50,  icon: "⛅" },
        { month: "Déc", temp: 3,  rain: 55,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Samarcande", en: "Samarkand" },
      region: { fr: "Samarcande", en: "Samarkand" },
      description: {
        fr: "Joyau de la Route de la Soie, avec le Registan (trois médersas monumentales), le mausolée de Tamerlan (Gour-é-Amir) et les observatoires de l'astronome Oulough Beg.",
        en: "A jewel of the Silk Road, with the Registan (three monumental madrasas), Tamerlane's mausoleum (Gur-e-Amir) and the observatories of astronomer Ulugh Beg.",
      },
      wikipedia: "Samarkand",
      tags: ["Histoire", "Architecture", "UNESCO", "Route de la Soie", "Désert"],
      mustSee: [
        { name: { fr: "Registan — 3 médersas monumentales", en: "Registan — 3 monumental madrasas" }, wikipedia: "Registan" },
        { name: { fr: "Gour-é-Amir — tombeau de Tamerlan", en: "Gur-e-Amir — Tamerlane's tomb" }, wikipedia: "Gur-e-Amir" },
        { name: { fr: "Shah-i-Zinda — allée des mausolées", en: "Shah-i-Zinda — avenue of mausoleums" }, wikipedia: "Shah-i-Zinda" },
        { name: { fr: "Bibi-Khanym — grande mosquée", en: "Bibi-Khanym — great mosque" }, wikipedia: "Bibi-Khanym_Mosque" },
      ],
    },
    {
      id: 2,
      name: { fr: "Boukhara", en: "Bukhara" },
      region: { fr: "Boukhara", en: "Bukhara" },
      description: {
        fr: "Boukhara la Sainte conserve son centre historique médiéval presque intact, avec ses 140 monuments classés, sa forteresse Ark et son marché aux dômes couverts.",
        en: "Holy Bukhara preserves its medieval historic centre almost intact, with its 140 listed monuments, the Ark fortress and its domed covered market.",
      },
      wikipedia: "Bukhara",
      tags: ["Histoire", "Architecture", "UNESCO", "Souks"],
      mustSee: [
        { name: { fr: "Forteresse Ark (IVe s.)", en: "Ark Fortress (4th century)" }, wikipedia: "Ark_of_Bukhara" },
        { name: { fr: "Minaret Kalon et mosquée", en: "Kalon Minaret and mosque" }, wikipedia: "File:Le_minaret_et_la_mosquée_Kalon_(Boukhara,_Ouzbékistan)_(5658826884).jpg" },
        { name: { fr: "Bazar Toqi-Zargaron", en: "Toqi-Zargaron Bazaar" }, wikipedia: "Bukhara" },
        { name: { fr: "Mausolée des Samanides", en: "Samanid Mausoleum" }, wikipedia: "File:Samanid_mausoleum_bukhara.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Khiva", en: "Khiva" },
      region: { fr: "Khorezm", en: "Khorezm" },
      description: {
        fr: "Khiva est la ville la mieux préservée de la Route de la Soie : son centre historique Itchan Kala est un musée à ciel ouvert, avec ses ruelles de terre et ses tours de faïence.",
        en: "Khiva is the best-preserved city on the Silk Road: its historic centre, Itchan Kala, is an open-air museum, with its earthen lanes and tiled towers.",
      },
      wikipedia: "Khiva",
      tags: ["Histoire", "UNESCO", "Architecture"],
      mustSee: [
        { name: { fr: "Itchan Kala (vieille ville UNESCO)", en: "Itchan Kala (UNESCO old town)" }, wikipedia: "Itchan_Kala" },
        { name: { fr: "Minaret Islam-Khodja", en: "Islam Khodja Minaret" }, wikipedia: "File:Emin Khoja Minaret.jpg" },
        { name: { fr: "Mausolée Pakhlavan Mahmud", en: "Pakhlavan Mahmud Mausoleum" }, wikipedia: "File:Itchan Kala.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Tachkent", en: "Tashkent" },
      region: { fr: "Capitale", en: "Capital" },
      description: {
        fr: "Capitale cosmopolite rebâtie après le tremblement de terre de 1966, avec ses monuments soviétiques imposants, ses bazars colorés et sa montée en puissance gastronomique.",
        en: "A cosmopolitan capital rebuilt after the 1966 earthquake, with its imposing Soviet monuments, colourful bazaars and rising culinary scene.",
      },
      wikipedia: "Tashkent",
      tags: ["Ville", "Culture", "Gastronomie", "Architecture"],
      mustSee: [
        { name: { fr: "Bazar Tchorsu", en: "Chorsu Bazaar" }, wikipedia: "Chorsu_Bazaar" },
        { name: { fr: "Musée d'histoire de l'Ouzbékistan", en: "State Museum of History of Uzbekistan" }, wikipedia: "State_Museum_of_History_of_Uzbekistan" },
        { name: { fr: "Complexe Khast Imam", en: "Khast Imam Complex" }, wikipedia: "File:Hazrat Imam 01.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Ouzbékistan est très abordable. La nourriture, l'hébergement et les transports sont peu coûteux. Les entrées des monuments sont modiques.",
      en: "Uzbekistan is very affordable. Food, accommodation and transport are inexpensive. Monument entry fees are modest.",
    },
    currency: "UZS",
    exchangeRate: "1€ ≈ 13 500 UZS",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse traditionnelle", en: "Traditional guesthouse" }, price: "15–30 €", detail: { fr: "Souvent avec breakfast inclus", en: "Often with breakfast included" } },
          { label: { fr: "Hôtel 3★", en: "3★ hotel" }, price: "35–60 €", detail: { fr: "Confort correct", en: "Decent comfort" } },
          { label: { fr: "Hôtel boutique 4★", en: "4★ boutique hotel" }, price: "70–120 €", detail: { fr: "Meilleure option Samarcande", en: "Best option in Samarkand" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Plov (plat national)", en: "Plov (national dish)" }, price: "2–4 €", detail: { fr: "Riz au mouton, incontournable" , en: "Rice with mutton, a must-try" } },
          { label: { fr: "Restaurant local (samsa, lagman)", en: "Local restaurant (samsa, lagman)" }, price: "4–8 €", detail: { fr: "Excellent et copieux", en: "Excellent and hearty" } },
          { label: { fr: "Restaurant touristique", en: "Tourist restaurant" }, price: "12–25 €", detail: { fr: "Terrasses des médersas", en: "Madrasa terrace restaurants" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Train rapide Afrosiyob", en: "Afrosiyob high-speed train" }, price: "8–15 €", detail: { fr: "Tachkent–Samarcande en 2h", en: "Tashkent–Samarkand in 2h" } },
          { label: { fr: "Minibus / marshrutka", en: "Minibus / marshrutka" }, price: "1–3 €", detail: { fr: "Entre villes principales", en: "Between main cities" } },
          { label: { fr: "Taxi local", en: "Local taxi" }, price: "2–5 €", detail: { fr: "Négocier le prix avant", en: "Negotiate the price beforehand" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Entrée Registan", en: "Registan entry" }, price: "5–8 €", detail: { fr: "Son & lumière en soirée ~10 €", en: "Evening sound & light show ~10 €" } },
          { label: { fr: "Visite guidée Boukhara (1j)", en: "Guided tour of Bukhara (1 day)" }, price: "20–40 €", detail: { fr: "Guide anglophone", en: "English-speaking guide" } },
          { label: { fr: "Stage poterie / artisanat", en: "Pottery / craft workshop" }, price: "15–30 €", detail: { fr: "Ateliers traditionnels", en: "Traditional workshops" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "30–45 €/j", desc: { fr: "Guesthouse + restaurants locaux + train", en: "Guesthouse + local restaurants + train" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "65–100 €/j", desc: { fr: "Hôtel 3★ + bonnes tables + guides", en: "3★ hotel + good restaurants + guides" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "150 €+/j", desc: { fr: "Hôtel boutique + circuit organisé + gastronomie", en: "Boutique hotel + organised tour + fine dining" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks" },
      route: {
        fr: "Tachkent (2j) → Samarcande (3j) → Chakhrisabz (1j) → Boukhara (3j) → Khiva (3j) → Tachkent (2j)",
        en: "Tashkent (2d) → Samarkand (3d) → Shakhrisabz (1d) → Bukhara (3d) → Khiva (3d) → Tashkent (2d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 200 – 1 700 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tachkent", en: "Return flight Paris–Tashkent" }, amount: "450–700 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "200–400 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "200–300 €" },
            { label: { fr: "Trains & transports", en: "Trains & transport" }, amount: "100–150 €" },
            { label: { fr: "Entrées & activités", en: "Entry fees & activities" }, amount: "100–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 200 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tachkent", en: "Return flight Paris–Tashkent" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "700–1 100 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "400–600 €" },
            { label: { fr: "Transports & guides", en: "Transport & guides" }, amount: "300–500 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "200–300 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "5 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tachkent (Business)", en: "Return flight Paris–Tashkent (Business)" }, amount: "1 500–2 500 €" },
            { label: { fr: "Hébergement boutique (14 nuits)", en: "Boutique accommodation (14 nights)" }, amount: "1 400–2 200 €" },
            { label: { fr: "Gastronomie & expériences", en: "Fine dining & experiences" }, amount: "700–1 000 €" },
            { label: { fr: "Circuit privé", en: "Private tour" }, amount: "600–1 000 €" },
            { label: { fr: "Artisanat & imprévus", en: "Crafts & contingency" }, amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~6h (Uzbekistan Airways via Tachkent)", en: "~6h (Uzbekistan Airways via Tashkent)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Sans visa pour les Français (30 jours)", en: "No visa required for French citizens (30 days)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Som (1€ ≈ 13 500 UZS) — espèces préférées", en: "Som (1€ ≈ 13,500 UZS) — cash preferred" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Ouzbek (russe compris, peu d'anglais)", en: "Uzbek (Russian understood, little English)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/F – 220 V", en: "Type C/F – 220 V" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Couverture correcte, SIM locale ~3€", en: "Decent coverage, local SIM ~3€" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille", en: "Not drinkable — bottled water advised" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Hépatite A recommandée, fièvre typhoïde possible", en: "Hepatitis A recommended, typhoid possible" } },
  ],
};
