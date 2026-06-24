export const SERBIA = {
  code: "SRB",
  numericId: 688,
  name: "Serbie",
  emoji: "🇷🇸",
  capital: "Belgrade",
  language: "Serbe",
  currency: "Dinar serbe (RSD)",
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 35, budgetMid: 65,
    tripMin: 700, tripMid: 1500,
  },
  description:
    "La Serbie est la grande inconnue des Balkans : Belgrade, ville à la fois balkanique et européenne, avec sa forteresse de Kalemegdan, sa scène nocturne légendaire sur les bateaux-discothèques de la Sava (splavovi), les monastères médiévaux d'Oplenac et Žiča dans la campagne serbe, Novi Sad et son festival EXIT, les gorges des Portes de Fer (Đerdap) sur le Danube.",

  bestPeriods: [
    {
      months: "Avril – Octobre",
      label: "Printemps, été et automne",
      color: "#22c55e",
      description:
        "Meilleure période : juin-août (22–28°C, terrasses, festival EXIT à Novi Sad), mai et septembre-octobre (moins chaud, festivals à Belgrade). Automne magnifique dans les gorges.",
      icon: "☀️",
    },
    {
      months: "Décembre – Février",
      label: "Hiver festif",
      color: "#f59e0b",
      description:
        "Belgrade se réchauffe avec les bars et clubs couverts. Les fêtes orthodoxes (Noël le 7 janvier, Slava) sont très animées. Températures 0 à -5°C.",
      icon: "🕯️",
    },
  ],

  weatherCities: [
    {
      id: "belgrade",
      name: "Belgrade",
      region: "Confluent Sava-Danube (capitale)",
      data: [
        { month: "Jan", temp:  1, rain: 50,  icon: "❄️" },
        { month: "Fév", temp:  3, rain: 40,  icon: "❄️" },
        { month: "Mar", temp:  9, rain: 45,  icon: "⛅" },
        { month: "Avr", temp: 14, rain: 55,  icon: "⛅" },
        { month: "Mai", temp: 19, rain: 70,  icon: "⛅" },
        { month: "Jun", temp: 21, rain: 80,  icon: "☀️" },
        { month: "Jul", temp: 24, rain: 55,  icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 50,  icon: "☀️" },
        { month: "Sep", temp: 19, rain: 50,  icon: "⛅" },
        { month: "Oct", temp: 13, rain: 50,  icon: "⛅" },
        { month: "Nov", temp:  7, rain: 55,  icon: "⛅" },
        { month: "Déc", temp:  2, rain: 55,  icon: "❄️" },
      ],
    },
    {
      id: "novi_sad",
      name: "Novi Sad",
      region: "Voïvodine (nord, plaine pannonnienne)",
      data: [
        { month: "Jan", temp:  0, rain: 40,  icon: "❄️" },
        { month: "Fév", temp:  2, rain: 35,  icon: "❄️" },
        { month: "Mar", temp:  8, rain: 45,  icon: "⛅" },
        { month: "Avr", temp: 14, rain: 50,  icon: "⛅" },
        { month: "Mai", temp: 18, rain: 65,  icon: "⛅" },
        { month: "Jun", temp: 21, rain: 75,  icon: "☀️" },
        { month: "Jul", temp: 24, rain: 55,  icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 50,  icon: "☀️" },
        { month: "Sep", temp: 18, rain: 50,  icon: "⛅" },
        { month: "Oct", temp: 12, rain: 45,  icon: "⛅" },
        { month: "Nov", temp:  6, rain: 50,  icon: "⛅" },
        { month: "Déc", temp:  1, rain: 45,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Belgrade — Forteresse et vie nocturne",
      region: "Confluence Sava-Danube",
      description:
        "Belgrade est la capitale la plus animée des Balkans : la forteresse de Kalemegdan (IIe s., reconstruite par les Romains, Byzantins, Ottomans et Autrichiens) domine la confluence Sava-Danube, tandis que la rue Skadarlija (quartier bohème du XIXe s.) regorge de kafanas aux sons des orchestres tziganes. Les splavovi (bateaux-discothèques) sur la Sava ont fait la légende nocturne de la ville.",
      wikipedia: "Belgrade",
      tags: ["Forteresse", "Vie nocturne", "Bohème", "Danube", "Ville", "Architecture", "Gastronomie"],
      mustSee: [
        { name: "Forteresse de Kalemegdan — 2 000 ans d'histoire au-dessus du Danube", wikipedia: "Belgrade_Fortress" },
        { name: "Skadarlija — rue bohème aux kafanas et orchestres tziganes", wikipedia: "Skadarlija" },
        { name: "Splavovi (bateaux-discothèques) sur la Sava — vie nocturne unique", wikipedia: "File:Splavovi (7).jpeg" },
        { name: "Église Saint-Sava — l'une des plus grandes cathédrales orthodoxes du monde", wikipedia: "File:Temple Saint Sava crop.jpg" },
      ],
    },
    {
      id: 2,
      name: "Novi Sad — Capitale culturelle et EXIT",
      region: "Voïvodine",
      description:
        "Novi Sad, capitale européenne de la culture 2022, est une ville universitaire et multiculturelle : la forteresse de Petrovaradin (XVIII s.) dominant le Danube accueille chaque juillet le festival EXIT (150 000 personnes, l'un des meilleurs festivals de musique d'Europe). Le centre-ville AustroHongrois et le quartier des artistes de Štrand sur le Danube en font une ville très agréable.",
      wikipedia: "Novi_Sad",
      tags: ["Festival", "Culture", "Forteresse", "Danube", "Ville", "Architecture"],
      mustSee: [
        { name: "Forteresse de Petrovaradin — 'Gibraltar sur le Danube'", wikipedia: "Petrovaradin_Fortress" },
        { name: "Festival EXIT (juillet) — électro, rock, world music sous la forteresse", wikipedia: "File:Exit festival, 2021.jpg" },
        { name: "Quartier piéton de Dunavska — cafés et terrasses bordant le Danube", wikipedia: "Novi_Sad" },
        { name: "Plage Štrand sur le Danube — la plage la plus populaire de Serbie", wikipedia: "File:Plaža_Štrand_-_panoramio.jpg" },
      ],
    },
    {
      id: 3,
      name: "Gorges des Portes de Fer — Đerdap",
      region: "Est (frontière roumaine)",
      description:
        "Les Portes de Fer (Đerdap) sont les gorges les plus spectaculaires du Danube : 100km de falaises calcaires de 300m de hauteur sculptées par le fleuve sur la frontière serbo-roumaine. La sculpture rupestre de Decebal (l'une des plus grandes d'Europe, 55m de haut) et les vestiges romains de Trajan (Tabula Traiana) sont visibles depuis le bateau. Patrimoine naturel et historique exceptionnel.",
      wikipedia: "Iron_Gates",
      tags: ["Gorges", "Danube", "Romain", "Nature"],
      mustSee: [
        { name: "Gorges du Đerdap depuis un bateau — falaises de 300m", wikipedia: "Đerdap_National_Park" },
        { name: "Tête de Decebal sculptée dans la falaise (55m, la plus grande d'Europe)", wikipedia: "File:Rock Sculpture of Decebalus (26845769043).jpg" },
        { name: "Tabula Traiana — inscription romaine de 101-103 apr. J.-C. sur la falaise", wikipedia: "Tabula_Traiana" },
        { name: "Lepenski Vir — site néolithique de 9 000 ans dans la gorge", wikipedia: "Lepenski_Vir" },
      ],
    },
    {
      id: 4,
      name: "Monastères médiévaux de Serbie",
      region: "Šumadija et vallées",
      description:
        "La Serbie compte plus de 200 monastères médiévaux orthodoxes — dont plusieurs candidats à l'UNESCO. Žiča (XIIIe s., rouge sang, couronnement des rois serbes), Studenica (XIIe s., marbres blancs, école médiévale de peinture), et Mileševa (XIIIe s., fresque de l'Ange Blanc — transmise en 1969 dans le premier satellite de communication européen) sont les plus remarquables.",
      wikipedia: "File:Studenica monastery (Manastir Studenica) - by Pudelek.jpg",
      tags: ["Monastères", "Orthodoxe", "Médiéval", "Fresque", "UNESCO", "Architecture", "Histoire"],
      mustSee: [
        { name: "Monastère de Studenica (UNESCO) — marbres blancs XIIe siècle", wikipedia: "File:Studenica monastery, 09.jpg" },
        { name: "Monastère de Žiča — rouge sang, couronnement des rois serbes", wikipedia: "File:Manastir Žiča (by Pudelek).JPG" },
        { name: "Fresque de l'Ange Blanc de Mileševa — première image transmise par satellite", wikipedia: "File:Beli_andjeo2.jpg" },
        { name: "Monastère de Sopoćani (UNESCO) — fresques byzantines du XIIIe s.", wikipedia: "Sopoćani" },
      ],
    },
    {
      id: 5,
      name: "Kopaonik & Zlatibor",
      region: "Serbie centrale",
      description:
        "Les montagnes du centre de la Serbie réunissent la grande station de ski de Kopaonik et le plateau authentique de Zlatibor. Villages traditionnels, train historique du Sargan et réserves naturelles spectaculaires y attendent les visiteurs. Un concentré de nature et de traditions serbes.",
      wikipedia: "Kopaonik",
      tags: ["Ski", "Randonnée", "Nature"],
      mustSee: [
        { name: "Kopaonik — plus grande station serbe", wikipedia: "Kopaonik" },
        { name: "Zlatibor — plateau et village authentique", wikipedia: "Zlatibor" },
        { name: "Train de Sargan", wikipedia: "File:Sarganska osmica 2.jpg" },
        { name: "Uvac — gorges et pélicans frisés", wikipedia: "Uvac_Special_Nature_Reserve" },
        { name: "Drvengrad — village de Kusturica", wikipedia: "File:View from Drvengrad, Serbia.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Serbie est l'une des moins chères d'Europe : Belgrade rivalise avec Bucarest pour le titre de capitale d'Europe le plus abordable. Le dinar fluctue légèrement — les euros sont acceptés dans de nombreux hôtels.",
    currency: "RSD",
    exchangeRate: "1€ ≈ 117 RSD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Hostel Belgrade (dortoir ou chambre)", price: "15–35 €", detail: "Nombreux et très bien situés" },
          { label: "Hôtel 3★ Belgrade centre", price: "50–90 €", detail: "Bon confort, souvent petit-déj inclus" },
          { label: "Appartement Airbnb (Belgrade, 2 pers.)", price: "40–80 €", detail: "Souvent mieux situé qu'un hôtel" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Pljeskavica (burger serbe géant) dans une pljeskavičarnica", price: "4–8 €", detail: "Le fast-food national serbe" },
          { label: "Kafana traditionnelle — cornes d'abondance et viande grillée", price: "10–20 €", detail: "Musique live tzigane certains soirs" },
          { label: "Burek (feuillleté à la viande ou feta) du matin", price: "2–3 €", detail: "Petit-déjeuner balkanique universel" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus + tramway Belgrade (ticket)", price: "1 €", detail: "Réseau étendu, très bon marché" },
          { label: "Train Belgrade–Novi Sad (1h30)", price: "4–8 €", detail: "Nouvelle ligne à grande vitesse (350km/h)" },
          { label: "Bus Belgrade–Niš ou Novi Sad (FlixBus)", price: "8–15 €", detail: "Réseau interurbain dense" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée forteresse de Kalemegdan (musée)", price: "3–5 €", detail: "Parc autour gratuit" },
          { label: "Festival EXIT Novi Sad (pass journée)", price: "40–80 €", detail: "Juillet, programmation internationale" },
          { label: "Croisière gorges du Đerdap (journée)", price: "30–60 €", detail: "Depuis Donji Milanovac" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "35–60 €/j", desc: "Hostel + pljeskavica + transports publics", color: "#22c55e" },
      { type: "Confort", daily: "65–120 €/j", desc: "Hôtel 3★ + kafana + excursions", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "8 jours",
      route: "Belgrade (4j) → Novi Sad (1j) → Monastères de Šumadija (2j) → Gorges Đerdap (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "700 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Belgrade (Air France, Wizz Air, Air Serbia)", amount: "100–250 €" },
            { label: "Hébergement (8 nuits)", amount: "180–330 €" },
            { label: "Transports (train + bus)", amount: "70–130 €" },
            { label: "Nourriture + cafés + bière", amount: "180–320 €" },
            { label: "Activités + festivals", amount: "100–200 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 500 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Belgrade", amount: "150–300 €" },
            { label: "Hôtels 3★ (8 nuits)", amount: "450–800 €" },
            { label: "Voiture de location + train", amount: "200–400 €" },
            { label: "Nourriture & kafana + vin", amount: "300–550 €" },
            { label: "Monastères, croisière, EXIT", amount: "200–400 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~2h30 (Air France direct CDG–Belgrade, Air Serbia, Wizz Air). Liaisons quotidiennes." },
    { icon: "🪪", label: "Visa",              value: "Aucun visa pour les Français (90 jours). Passeport ou carte d'identité valides. Pas encore dans l'UE." },
    { icon: "💰", label: "Monnaie",           value: "Dinar serbe (RSD). Euros souvent acceptés dans les hôtels. Carte bancaire bien acceptée en ville. Espèces indispensables dans les kafanas et monastères." },
    { icon: "🗣️", label: "Langue",            value: "Serbe (alphabet cyrillique). Anglais bien parlé à Belgrade par les jeunes. Moins courant en province." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire." },
    { icon: "💊", label: "Santé",             value: "Aucune précaution particulière. Pas de CEAM (hors UE) — assurance voyage recommandée. Soins médicaux de bonne qualité à Belgrade." },
    { icon: "🎵", label: "Musique",           value: "La Serbie est le pays de la turbo-folk (musique populaire balkanique) et des kafanas avec orchestres live. La scène club de Belgrade (avec les splavovi) est l'une des meilleures d'Europe." },
    { icon: "🏙️", label: "Sécurité",          value: "Belgrade est l'une des capitales les plus sûres des Balkans. Prudence habituelle dans les foules et les transports en commun. Les monastères sont souvent isolés — guide ou voiture recommandés." },
  ],
};
