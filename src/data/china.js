export const CHINA = {
  code: "CHN",
  numericId: 156,
  name: "Chine",
  emoji: "🇨🇳",
  capital: "Pékin",
  language: "Mandarin",
  currency: "Yuan (¥)",
  timezone: "UTC+8",
  filter: {
    budgetMin: 35, budgetMid: 90,
    tripMin: 1600, tripMid: 3200,
  },
  description:
    "La Chine est un monde à elle seule : Grande Muraille, Cité Interdite, paysages karstiques de Guilin, armée de terre cuite de Xi'an, et la frénésie de Shanghai. Cinq mille ans de civilisation à explorer dans un pays de contrastes saisissants.",

  bestPeriods: [
    {
      months: "Avril – Mai",
      label: "Printemps",
      color: "#22c55e",
      description:
        "Températures idéales dans tout le pays. Floraisons, paysages verts, avant les pluies estivales. Idéal pour Pékin et Xi'an.",
      icon: "🌸",
    },
    {
      months: "Septembre – Octobre",
      label: "Automne doré",
      color: "#fb923c",
      description:
        "La meilleure saison : ciel bleu, températures agréables, feuillages automnaux spectaculaires dans les montagnes.",
      icon: "🍂",
    },
    {
      months: "Décembre – Janvier",
      label: "Hiver Guilin",
      color: "#93c5fd",
      description:
        "Les paysages karstiques de Guilin sont quasi déserts et magnifiques. Shanghai reste agréable en hiver.",
      icon: "🌫",
    },
  ],

  weatherCities: [
    {
      id: "shanghai",
      name: "Shanghai",
      region: "Côte Est",
      data: [
        { month: "Jan", temp:  5, rain:  45, icon: "❄️" },
        { month: "Fév", temp:  7, rain:  70, icon: "❄️" },
        { month: "Mar", temp: 11, rain:  85, icon: "⛅" },
        { month: "Avr", temp: 16, rain: 110, icon: "☀️" },
        { month: "Mai", temp: 21, rain: 125, icon: "☀️" },
        { month: "Jun", temp: 25, rain: 200, icon: "⛅" },
        { month: "Jul", temp: 29, rain: 152, icon: "🌧️" },
        { month: "Aoû", temp: 29, rain: 128, icon: "🌧️" },
        { month: "Sep", temp: 25, rain: 140, icon: "☀️" },
        { month: "Oct", temp: 19, rain:  65, icon: "☀️" },
        { month: "Nov", temp: 14, rain:  55, icon: "⛅" },
        { month: "Déc", temp:  7, rain:  29, icon: "❄️" },
      ],
    },
    {
      id: "beijing",
      name: "Pékin",
      region: "Nord",
      data: [
        { month: "Jan", temp: -4, rain:   4, icon: "❄️" },
        { month: "Fév", temp:  0, rain:   7, icon: "❄️" },
        { month: "Mar", temp:  7, rain:  10, icon: "❄️" },
        { month: "Avr", temp: 15, rain:  25, icon: "⛅" },
        { month: "Mai", temp: 21, rain:  30, icon: "☀️" },
        { month: "Jun", temp: 26, rain:  75, icon: "☀️" },
        { month: "Jul", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Aoû", temp: 26, rain: 165, icon: "☀️" },
        { month: "Sep", temp: 20, rain:  50, icon: "☀️" },
        { month: "Oct", temp: 13, rain:  20, icon: "⛅" },
        { month: "Nov", temp:  5, rain:   8, icon: "❄️" },
        { month: "Déc", temp: -3, rain:   4, icon: "❄️" },
      ],
    },
    {
      id: "guilin",
      name: "Guilin",
      region: "Guangxi",
      data: [
        { month: "Jan", temp: 10, rain:  45, icon: "⛅" },
        { month: "Fév", temp: 11, rain:  80, icon: "⛅" },
        { month: "Mar", temp: 15, rain: 150, icon: "⛅" },
        { month: "Avr", temp: 20, rain: 250, icon: "⛅" },
        { month: "Mai", temp: 25, rain: 300, icon: "⛅" },
        { month: "Jun", temp: 28, rain: 300, icon: "🌧️" },
        { month: "Jul", temp: 30, rain: 175, icon: "🌧️" },
        { month: "Aoû", temp: 29, rain: 170, icon: "🌧️" },
        { month: "Sep", temp: 26, rain:  90, icon: "☀️" },
        { month: "Oct", temp: 21, rain:  60, icon: "☀️" },
        { month: "Nov", temp: 17, rain:  50, icon: "☀️" },
        { month: "Déc", temp: 12, rain:  40, icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Pékin",
      region: "Nord",
      description:
        "Capitale impériale avec la Cité Interdite, le Temple du Ciel, la Grande Muraille à portée de main et la modernité des hutongs rénovés.",
      wikipedia: "Beijing",
      tags: ["Histoire", "Culture", "UNESCO", "Ville"],
      mustSee: [
        { name: "Cité Interdite", wikipedia: "Forbidden_City" },
        { name: "Grande Muraille de Chine — Mutianyu", wikipedia: "Mutianyu" },
        { name: "Temple du Ciel", wikipedia: "Temple_of_Heaven" },
        { name: "Place Tiananmen", wikipedia: "Tiananmen_Square" },
      ],
    },
    {
      id: 2,
      name: "Shanghai",
      region: "Côte Est",
      description:
        "Métropole cosmopolite avec le Bund colonial face au Pudong futuriste, les ruelles de la vieille concession française et une scène gastronomique mondiale.",
      wikipedia: "Shanghai",
      tags: ["Ville", "Architecture", "Gastronomie", "Shopping"],
      mustSee: [
        { name: "Le Bund", wikipedia: "File:Night_view_from_the_Bund.jpg" },
        { name: "Pudong — tour de Shanghai", wikipedia: "Shanghai_Tower" },
        { name: "Vieille ville (Yu Yuan)", wikipedia: "Yu_Garden" },
        { name: "Concession française", wikipedia: "File:Wukang_Mansion_1.jpg" },
      ],
    },
    {
      id: 3,
      name: "Xi'an & Armée de Terre Cuite",
      region: "Nord-Ouest",
      description:
        "Ancienne capitale de la Chine impériale, point de départ de la Route de la Soie. L'armée de terre cuite de Qin Shi Huang est l'une des plus grandes découvertes archéologiques du monde.",
      wikipedia: "Terracotta_Army",
      tags: ["Histoire", "Archéologie", "UNESCO", "Culture"],
      mustSee: [
        { name: "Armée de Terre Cuite", wikipedia: "Terracotta_Army" },
        { name: "Remparts de Xi'an", wikipedia: "File:大明宫—丹凤门遗址.JPG" },
        { name: "Quartier musulman — Grande Mosquée", wikipedia: "Great_Mosque_of_Xi'an" },
        { name: "Pagode de la Grande Oie Sauvage", wikipedia: "Giant_Wild_Goose_Pagoda" },
      ],
    },
    {
      id: 4,
      name: "Guilin & Li Jiang",
      region: "Guangxi",
      description:
        "Paysages karstiques légendaires, avec des pics en aiguilles reflétés dans la rivière Li, immortalisés sur les billets de 20 yuans.",
      wikipedia: "Guilin",
      tags: ["Nature", "Paysage", "Rivière", "Randonnée"],
      mustSee: [
        { name: "Croisière sur la rivière Li", wikipedia: "Li_River" },
        { name: "Rizières en terrasses de Longsheng", wikipedia: "File:1_longsheng_ping_an_rice_terrace_2011.jpg" },
        { name: "Yangshuo — village de karst", wikipedia: "File:1_guilin_yangshuo_2017.jpg" },
        { name: "Colline de la Trompe d'Éléphant", wikipedia: "Elephant_Trunk_Hill" },
      ],
    },
    {
      id: 5,
      name: "Zhangjiajie",
      region: "Hunan",
      description:
        "Colonnes de grès flottant dans les nuages, modèle des « Montagnes Hallelujah » dans Avatar. Un des paysages les plus spectaculaires de Chine.",
      wikipedia: "Zhangjiajie_National_Forest_Park",
      tags: ["Nature", "Randonnée", "Paysage", "Montagne"],
      mustSee: [
        { name: "Piliers de grès de l'Avatar", wikipedia: "Zhangjiajie_National_Forest_Park" },
        { name: "Pont de verre de Zhangjiajie", wikipedia: "File:ZhangjiajieGlassByHighestBridges.jpg" },
        { name: "Téléphérique de Tianmen", wikipedia: "Tianmen_Mountain" },
      ],
    },
    {
      id: 6,
      name: "Route de la Soie — Dunhuang & Gobi",
      region: "Gansu / Xinjiang",
      description:
        "Aux confins du désert de Gobi, Dunhuang fut un carrefour majeur de la Route de la Soie. Ses grottes de Mogao abritent un trésor d'art bouddhique vieux de mille ans, tandis que les dunes chantantes encerclent l'oasis. Forteresses et passes antiques jalonnent cette frontière occidentale de la Chine.",
      wikipedia: "Dunhuang",
      tags: ["Désert", "Histoire", "UNESCO", "Architecture"],
      mustSee: [
        { name: "Grottes de Mogao", wikipedia: "Mogao_Caves" },
        { name: "Dunes chantantes de Mingsha", wikipedia: "File:Mingsha_Mountain_and_Crescent_Moon_Spring_(54532735143).jpg" },
        { name: "Yumen Pass", wikipedia: "File:Dunhuang.yumenguan.jpg" },
        { name: "Jiayuguan — extrémité ouest de la Grande Muraille", wikipedia: "File:JiayuguanFort.jpg" },
        { name: "Flaming Mountains", wikipedia: "File:Flaming Mountains (23367434013).jpg" },
      ],
    },
    {
      id: 7,
      name: "Chengdu & Sichuan",
      region: "Sichuan",
      description:
        "Chengdu est la capitale détendue du Sichuan, célèbre pour ses pandas géants et sa gastronomie épicée parmi les plus renommées de Chine. La ville sert de porte d'entrée vers les sommets enneigés du Sichuan et les vallées sauvages du plateau tibétain. Entre temples bouddhistes, thés en terrasse et hotpots fumants, Chengdu incarne le mode de vie décontracté de la Chine du Sud-Ouest.",
      wikipedia: "Chengdu",
      tags: ["Gastronomie", "Nature", "Culture", "UNESCO", "Randonnée"],
      mustSee: [
        { name: "Base de recherche sur les pandas géants", wikipedia: "File:Chengdu-pandas-d10.jpg" },
        { name: "Mont Emei — pèlerinage bouddhiste UNESCO", wikipedia: "Mount_Emei" },
        { name: "Dujiangyan", wikipedia: "File:都江堰南桥_5.jpg" },
        { name: "Leshan — Grand Bouddha UNESCO", wikipedia: "Leshan_Giant_Buddha" },
        { name: "Quartier de Kuanzhai Xiangzi — ruelles historiques", wikipedia: "File:Street_scene_-_Kuanzhai_Alleys_-_Chengdu,_China_-_DSC05311.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Chine est très accessible pour les voyageurs. La street food et les transports sont peu chers, mais les sites touristiques majeurs et les hôtels de qualité peuvent représenter un coût significatif.",
    currency: "CNY (¥)",
    exchangeRate: "~7,8 ¥ = 1 €",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir hostel", price: "5–12 €", detail: "Bonne infrastructure, ambiance internationale" },
          { label: "Hôtel budget", price: "20–40 €", detail: "Chambre double correcte" },
          { label: "Hôtel confort", price: "50–100 €", detail: "Niveau occidental, bien équipé" },
          { label: "Boutique hôtel / hutong", price: "80–150 €", detail: "Charme et authenticité à Pékin" },
          { label: "Hôtel 5 étoiles", price: "200–500 €", detail: "Marriott, Shangri-La, Four Seasons" },
        ],
      },
      {
        id: "food",
        icon: "🍜",
        label: "Nourriture",
        items: [
          { label: "Street food (baozi, jianbing)", price: "1–2 €", detail: "Incroyablement savoureux et peu cher" },
          { label: "Restaurant local", price: "3–7 €", detail: "Repas copieux, immersion totale" },
          { label: "Canard laqué (Pékin)", price: "15–30 €", detail: "Expérience gastronomique unique" },
          { label: "Restaurant mid-range", price: "8–20 €", detail: "Dim sum, nouilles, hot pot" },
          { label: "Restaurant occidental", price: "15–30 €", detail: "Dans les grandes villes" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Métro (Pékin/Shanghai)", price: "0,40–1 €", detail: "Réseau très développé et moderne" },
          { label: "Bus urbain", price: "0,20–0,50 €", detail: "Ultra économique" },
          { label: "Train rapide G/D", price: "20–80 €", detail: "Pékin–Shanghai en 4h30 (~70 €)" },
          { label: "Vol intérieur", price: "30–100 €", detail: "Réseau très dense, prix variables" },
          { label: "DiDi (taxi appli)", price: "2–10 €", detail: "Équivalent Uber, indispensable" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Cité Interdite", price: "8–12 €", detail: "Réservation en ligne obligatoire" },
          { label: "Armée de Terre Cuite", price: "18–22 €", detail: "Site de Xi'an, époustouflant" },
          { label: "Grande Muraille (Mutianyu)", price: "12–15 €", detail: "Téléphérique en option" },
          { label: "Temple du Ciel", price: "3–6 €", detail: "Gratuit pour les plus de 65 ans" },
          { label: "Croisière rivière Li", price: "30–50 €", detail: "Entre Guilin et Yangshuo (4h)" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "35–60 €/j", desc: "Hostel + street food + transports locaux", color: "#22c55e" },
      { type: "Confort", daily: "90–150 €/j", desc: "Hôtel confort + restos mid-range + activités", color: "#3b82f6" },
      { type: "Luxe", daily: "300 €+/j", desc: "Hôtel 5★ + gastronomie + guides privés", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Pékin (4j) → Xi'an (2j) → Guilin (3j) → Shanghai (3j) → Zhangjiajie (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 600 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Pékin", amount: "500–800 €" },
            { label: "Trains rapides intérieurs", amount: "150–250 €" },
            { label: "Hébergement (14 nuits)", amount: "300–450 €" },
            { label: "Nourriture", amount: "250–400 €" },
            { label: "Activités & imprévus", amount: "200–350 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 200 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Pékin", amount: "700–1 000 €" },
            { label: "Trains & vols intérieurs", amount: "250–400 €" },
            { label: "Hébergement (14 nuits)", amount: "900–1 400 €" },
            { label: "Nourriture", amount: "700–1 000 €" },
            { label: "Activités & imprévus", amount: "500–700 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "7 000 € +",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Pékin (business)", amount: "2 500–4 000 €" },
            { label: "Transferts & vols privés", amount: "500–800 €" },
            { label: "Hébergement 5★ (14 nuits)", amount: "2 000–4 000 €" },
            { label: "Gastronomie & expériences", amount: "800–1 500 €" },
            { label: "Guides privés & imprévus", amount: "600–1 000 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~10–11h direct (Air France, Air China)" },
    { icon: "🪪", label: "Visa", value: "30 jours sans visa (programme renouvelé). Séjours plus longs : visa touristique (~70 €, délai 5–10 jours)" },
    { icon: "💰", label: "Monnaie", value: "Yuan (¥) — WeChat Pay & AliPay désormais accessibles aux étrangers" },
    { icon: "🗣️", label: "Langue", value: "Mandarin — peu d'anglais en dehors des grandes villes" },
    { icon: "🔌", label: "Prise électrique", value: "Type A/I — 220V (adaptateur recommandé)" },
    { icon: "📱", label: "Réseau", value: "VPN indispensable — SIM locale ou SIM internationale" },
    { icon: "🚰", label: "Eau du robinet", value: "Non potable — eau en bouteille ou eau bouillie" },
    { icon: "💊", label: "Santé", value: "Vaccin hépatite A recommandé, bonne qualité médicale dans les villes" },
  ],
};
