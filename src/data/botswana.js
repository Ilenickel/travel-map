export const BOTSWANA = {
  code: "BWA",
  numericId: 72,
  name: "Botswana",
  emoji: "🇧🇼",
  capital: "Gaborone",
  language: "Tswana, Anglais",
  currency: "Pula (BWP)",
  timezone: "UTC+2",
  filter: {
    budgetMin: 100, budgetMid: 350,
    tripMin: 4000, tripMid: 12000,
  },
  description:
    "Le Botswana est le summum du safari haut de gamme : le Delta de l'Okavango, classé UNESCO, est une oasis flottante unique au monde où l'on se déplace en mokoro entre les îles aux éléphants. Chobe abrite la plus grande concentration d'éléphants d'Afrique, et le Kalahari révèle les lions noirs des sables.",

  bestPeriods: [
    {
      months: "Juillet – Octobre",
      label: "Saison sèche — Delta inondé",
      color: "#22c55e",
      description:
        "Le Delta de l'Okavango est à son maximum d'inondation (juil–oct). Faune concentrée autour des points d'eau. Températures idéales. Safaris de rêve à Chobe.",
      icon: "🐘",
    },
    {
      months: "Mai – Juin",
      label: "Début saison sèche",
      color: "#fb923c",
      description:
        "Moins de touristes, animaux encore dispersés mais conditions très agréables. Delta commence à se remplir.",
      icon: "🦁",
    },
  ],

  weatherCities: [
    {
      id: "maun",
      name: "Maun (Delta Okavango)",
      region: "Ngamiland",
      data: [
        { month: "Jan", temp: 30, rain: 70,  icon: "⛅" },
        { month: "Fév", temp: 30, rain: 60,  icon: "⛅" },
        { month: "Mar", temp: 29, rain: 50,  icon: "⛅" },
        { month: "Avr", temp: 27, rain: 10,  icon: "⛅" },
        { month: "Mai", temp: 24, rain: 5,   icon: "☀️" },
        { month: "Jun", temp: 21, rain: 0,   icon: "☀️" },
        { month: "Jul", temp: 21, rain: 0,   icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 0,   icon: "☀️" },
        { month: "Sep", temp: 28, rain: 5,   icon: "⛅" },
        { month: "Oct", temp: 31, rain: 25,  icon: "⛅" },
        { month: "Nov", temp: 30, rain: 50,  icon: "⛅" },
        { month: "Déc", temp: 30, rain: 75,  icon: "⛅" },
      ],
    },
    {
      id: "kasane",
      name: "Kasane (Chobe)",
      region: "Chobe",
      data: [
        { month: "Jan", temp: 30, rain: 100, icon: "🌧️" },
        { month: "Fév", temp: 30, rain: 90,  icon: "⛅" },
        { month: "Mar", temp: 29, rain: 70,  icon: "⛅" },
        { month: "Avr", temp: 27, rain: 20,  icon: "⛅" },
        { month: "Mai", temp: 24, rain: 5,   icon: "☀️" },
        { month: "Jun", temp: 21, rain: 0,   icon: "☀️" },
        { month: "Jul", temp: 22, rain: 0,   icon: "☀️" },
        { month: "Aoû", temp: 26, rain: 0,   icon: "☀️" },
        { month: "Sep", temp: 30, rain: 5,   icon: "⛅" },
        { month: "Oct", temp: 32, rain: 30,  icon: "🌡️" },
        { month: "Nov", temp: 31, rain: 60,  icon: "⛅" },
        { month: "Déc", temp: 30, rain: 100, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Delta de l'Okavango",
      region: "Ngamiland",
      description:
        "Le Delta de l'Okavango est l'un des plus grands deltas intérieurs du monde : une oasis de 15 000 km² au cœur du désert du Kalahari, classée UNESCO. Les mokoros (pirogues locales) glissent silencieusement entre les papyrus et les nénuphars, au milieu des hippopotames, éléphants et léopards.",
      wikipedia: "Okavango_Delta",
      tags: ["UNESCO", "Safari", "Mokoro", "Nature"],
      mustSee: [
        { name: "Safari en mokoro entre les îles aux éléphants", wikipedia: "Dugout_canoe" },
        { name: "Camp flottant — nuit dans le delta", wikipedia: "File:Moremi Game Reserve in summer 02.jpg" },
        { name: "Léopards et lycaons sauvages", wikipedia: "African_wild_dog" },
        { name: "Vol ULM au lever du soleil sur le delta", wikipedia: "Okavango_Delta" },
      ],
    },
    {
      id: 2,
      name: "Chobe National Park",
      region: "Chobe",
      description:
        "Le Chobe abrite la plus grande concentration d'éléphants du continent : jusqu'à 130 000 pachydermes dans le parc. Le safari en bateau sur la rivière Chobe, où les éléphants traversent à la nage devant les yeux des touristes, est une expérience incomparable.",
      wikipedia: "Chobe_National_Park",
      tags: ["Éléphants", "Safari", "Bateau", "Big Five"],
      mustSee: [
        { name: "Safari bateau rivière Chobe — éléphants à la nage", wikipedia: "File:Cuando River, Botswana.jpg" },
        { name: "Troupeaux de buffles et lions (Savuti)", wikipedia: "File:Lion-savuti-botswana-april-2025.jpg" },
        { name: "Painted dogs (lycaons) — espèce menacée", wikipedia: "African_wild_dog" },
        { name: "Kasane — gateway et coucher soleil sur le Zambèze", wikipedia: "File:Kasane a velký baobab - Botswana - panoramio.jpg" },
      ],
    },
    {
      id: 3,
      name: "Kalahari — Lions et Méerkats",
      region: "Ghanzi / CKGR",
      description:
        "Le Kalahari central (Central Kalahari Game Reserve, CKGR) est l'une des plus grandes réserves du monde : domaine des lions aux crinières noires, des méerkats observables chaque matin à quelques mètres, et des communautés San (Bushmen) aux techniques de chasse millénaires.",
      wikipedia: "File:Kalahari C17.JPG",
      tags: ["Lions noirs", "Méerkats", "San", "Désert"],
      mustSee: [
        { name: "Méerkats au lever du soleil (à 1 m)", wikipedia: "Meerkat" },
        { name: "Nuits étoilées — ciel parmi les plus purs du monde", wikipedia: "File:Kalahari desert, South Africa.jpg" },
      ],
    },
    {
      id: 4,
      name: "Makgadikgadi Pans",
      region: "Central",
      description:
        "Les Makgadikgadi Pans sont l'un des plus grands déserts de sel du monde : en saison sèche, une immensité blanche à perte de vue et des méerkats des salines ; en saison des pluies (nov–mars), des millions de zèbres et gnous y migrent. Baobabs de Chapman's et lune de miel sous les étoiles.",
      wikipedia: "File:Avestruces_(Struthio_camelus),_salar_del_parque_nacional_Makgadikgadi_Pans,_Botsuana,_2018-07-30,_DD_51.jpg",
      tags: ["Salines", "Zèbres", "Baobabs", "Migration"],
      mustSee: [
        { name: "Migration des zèbres (nov–mars)", wikipedia: "Plains_zebra" },
        { name: "Méerkats des salines — observatoire privé", wikipedia: "Meerkat" },
        { name: "Baobabs de Chapman's (3 000 ans)", wikipedia: "Adansonia_digitata" },
        { name: "Canoë dans les salines inondées", wikipedia: "File:690V3686 - Flickr - Lip Kee.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Botswana pratique une politique de tourisme « haut de gamme, faible volume » : les lodges sont volontairement chers pour protéger les écosystèmes. C'est l'un des safaris les plus exclusifs au monde, mais aussi le plus pristine.",
    currency: "BWP",
    exchangeRate: "1€ ≈ 14,5 BWP",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Camp de base / camping", price: "30–60 €", detail: "CKGR uniquement" },
          { label: "Lodge mid-range (Chobe)", price: "150–300 €", detail: "Demi-pension ou pension complète" },
          { label: "Camp flottant Delta (all-inclusive)", price: "800–2 000 €", detail: "Safaris inclus, exclusivité totale" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Nourriture locale (Maun)", price: "8–15 €", detail: "Restaurants basiques en ville" },
          { label: "Repas lodge (inclus)", price: "inclus", detail: "Gastronomie au feu de bois dans la brousse" },
          { label: "Braai (barbecue bush)", price: "inclus", detail: "Tradition sud-africaine sous les étoiles" },
        ],
      },
      {
        id: "transport",
        icon: "✈️",
        label: "Transport",
        items: [
          { label: "Vol Maun–Johannesburg", price: "150–300 €", detail: "A/R, 1h30" },
          { label: "Vol charter Delta (obligatoire)", price: "200–500 €", detail: "Seul accès aux camps" },
          { label: "4x4 location (CKGR, autonomie)", price: "100–180 €/j", detail: "Indispensable Kalahari" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Safari mokoro (demi-journée)", price: "60–100 €", detail: "Dans le delta" },
          { label: "Safari bateau Chobe (2h)", price: "40–60 €", detail: "Depuis Kasane" },
          { label: "Expérience méerkats (Makgadikgadi)", price: "inclus lodge", detail: "Guide spécialisé" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "100–200 €/j", desc: "Camping + 4x4 autonome + CKGR", color: "#22c55e" },
      { type: "Confort", daily: "350–600 €/j", desc: "Lodge mid-range + safaris inclus", color: "#3b82f6" },
      { type: "Luxe", daily: "1 000 €+/j", desc: "Camp flottant Okavango tout inclus", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Maun (1j) → Delta Okavango (3j) → Makgadikgadi (2j) → Chobe (3j) → Kasane départ (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "4 000 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Maun (via Johannesburg)", amount: "800–1 200 €" },
            { label: "Lodges & camping (10 nuits)", amount: "1 200–1 800 €" },
            { label: "Vols charters intérieurs", amount: "600–900 €" },
            { label: "Safaris & activités", amount: "800–1 200 €" },
            { label: "Nourriture & imprévus", amount: "400–600 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "12 000 – 18 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Botswana", amount: "1 000–1 600 €" },
            { label: "Lodges mid-range (10 nuits)", amount: "3 500–6 000 €" },
            { label: "Vols charters + transferts", amount: "2 000–3 000 €" },
            { label: "Safaris guidés inclus", amount: "inclus" },
            { label: "Extras", amount: "500 €+" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "25 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Botswana (Business)", amount: "4 000–7 000 €" },
            { label: "Camps flottants & lodges exclusifs (10 nuits)", amount: "12 000–20 000 €" },
            { label: "Vols privés inter-lodges", amount: "3 000–5 000 €" },
            { label: "Tout inclus (safaris, repas, bar)", amount: "inclus" },
            { label: "Extras", amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~12–14h avec escale (via Johannesburg, Nairobi ou Addis)" },
    { icon: "🪪", label: "Visa",              value: "Sans visa 90 jours (Français)" },
    { icon: "💰", label: "Monnaie",           value: "Pula (1€ ≈ 14,5 BWP) — USD/€ acceptés dans les lodges" },
    { icon: "🗣️", label: "Langue",            value: "Tswana + Anglais (officiel)" },
    { icon: "🔌", label: "Prise électrique",  value: "Type D/G – 230 V (comme Afrique du Sud / UK)" },
    { icon: "📱", label: "Réseau",            value: "Couverture villes, inexistante Delta et Kalahari profond" },
    { icon: "🚰", label: "Eau du robinet",    value: "Potable en ville, non potable en brousse" },
    { icon: "💊", label: "Santé",             value: "Antipaludéen OBLIGATOIRE pour Okavango, Chobe et CKGR" },
  ],
};
