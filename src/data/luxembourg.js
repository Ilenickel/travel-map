export const LUXEMBOURG = {
  code: "LUX",
  numericId: 442,
  name: "Luxembourg",
  emoji: "🇱🇺",
  capital: "Luxembourg",
  language: "Luxembourgeois, Français, Allemand",
  currency: "Euro (EUR)",
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 90, budgetMid: 170,
    tripMin: 1150, tripMid: 2400,
  },
  description:
    "Le Grand-Duché de Luxembourg est l'un des plus petits pays d'Europe et pourtant l'un des plus riches. Sa capitale, classée au patrimoine mondial de l'UNESCO pour ses fortifications, mêle architecture médiévale et institutions européennes modernes. Au-delà de la capitale, la région de la Moselle offre de beaux vignobles, le château de Vianden domine les Ardennes luxembourgeoises, et le Mullerthal est surnommé la 'Petite Suisse luxembourgeoise'.",

  bestPeriods: [
    {
      months: "Mai – Septembre",
      label: "Printemps et été",
      color: "#22c55e",
      description:
        "La meilleure saison pour explorer le Luxembourg, avec des températures agréables (15–22°C). Les terrasses s'animent dans la vieille ville, les randonnées dans le Mullerthal sont idéales et les vignobles de la Moselle sont en pleine verdure.",
      icon: "☀️",
    },
    {
      months: "Septembre – Octobre",
      label: "Vendanges et automne",
      color: "#f59e0b",
      description:
        "La région mosellane s'anime lors des vendanges en septembre. Les couleurs automnales des Ardennes luxembourgeoises et du Mullerthal sont spectaculaires et la fréquentation touristique diminue.",
      icon: "🍇",
    },
  ],
  weatherCities: [
    {
      id: "luxembourg_city",
      name: "Luxembourg",
      region: "Canton de Luxembourg",
      data: [
        { month: "Jan", temp: 2, rain: 75, icon: "❄️" },
        { month: "Fév", temp: 3, rain: 65, icon: "❄️" },
        { month: "Mar", temp: 7, rain: 70, icon: "⛅" },
        { month: "Avr", temp: 11, rain: 65, icon: "⛅" },
        { month: "Mai", temp: 15, rain: 70, icon: "⛅" },
        { month: "Jun", temp: 18, rain: 65, icon: "☀️" },
        { month: "Jul", temp: 20, rain: 70, icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 70, icon: "☀️" },
        { month: "Sep", temp: 17, rain: 60, icon: "☀️" },
        { month: "Oct", temp: 12, rain: 75, icon: "⛅" },
        { month: "Nov", temp: 6, rain: 80, icon: "⛅" },
        { month: "Déc", temp: 3, rain: 80, icon: "❄️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Luxembourg-Ville",
      region: "Canton de Luxembourg",
      description:
        "La capitale du Grand-Duché est une ville fascinante construite sur des falaises, dont les fortifications médiévales sont classées au patrimoine mondial de l'UNESCO. Le Chemin de la Corniche offre une vue panoramique sur les casemates et la vieille ville. Le Grund, quartier au fond des vallées de l'Alzette et de la Pétrusse, est idéal pour se promener en soirée.",
      wikipedia: "Luxembourg_City",
      tags: ["UNESCO", "Capitale", "Fortifications", "Institutions européennes"],
      mustSee: [
        { name: "Casemates du Bock — galeries souterraines dans la roche sur 23 km", wikipedia: "File:The Bock Casemates 1.jpg" },
        { name: "Chemin de la Corniche — 'le plus beau balcon d'Europe'", wikipedia: "File:Corniche_and_rear_view_of_Breedewee_Luxembourg_City_2012-04.JPG" },
        { name: "Cathédrale Notre-Dame — gothique tardif avec crypte des Grands-Ducs", wikipedia: "File:Luxembourg_City_Square_Guillaume_II_towards_Notre-Dame_Cathedral_April_2011.jpg" },
        { name: "MUDAM — musée d'art moderne de renommée internationale", wikipedia: "MUDAM" },
      ],
    },
    {
      id: 2,
      name: "Vianden",
      region: "Canton de Vianden",
      description:
        "Vianden est un village de conte de fées niché dans la vallée de l'Our, dominé par l'un des plus beaux châteaux médiévaux d'Europe. Victor Hugo y vécut en exil en 1871 et y rédigea une partie de son œuvre. Le télésiège offre une vue plongeante sur le château et la vallée boisée.",
      wikipedia: "Vianden",
      tags: ["Château", "Médiéval", "Victor Hugo", "Ardennes"],
      mustSee: [
        { name: "Château de Vianden — forteresse romano-gothique restaurée", wikipedia: "Vianden_Castle" },
        { name: "Maison de Victor Hugo — musée dédié au séjour de l'écrivain", wikipedia: "File:Victor Hugo Museum Vianden.jpg" },
        { name: "Télésiège de Vianden — panorama sur le château et la vallée de l'Our", wikipedia: "File:TélésiègeVianden1.JPG" },
        { name: "Our — rivière idéale pour le kayak et les randonnées riveraines", wikipedia: "Our_(river)" },
      ],
    },
    {
      id: 3,
      name: "Mullerthal",
      region: "Canton d'Echternach",
      description:
        "Surnommé la 'Petite Suisse luxembourgeoise', le Mullerthal est une région de gorges boisées, de rochers sculptés par l'érosion et de sentiers de randonnée spectaculaires. Echternach, plus ancienne ville du Luxembourg, est le point de départ idéal. Le sentier Mullerthal Trail (112 km) traverse des paysages de grès sauvages et enchanteurs.",
      wikipedia: "File:Mullerthal 02.jpg",
      tags: ["Randonnée", "Nature", "Gorges", "Grès"],
      mustSee: [
        { name: "Sentier Mullerthal Trail — 112 km de randonnée dans les gorges boisées", wikipedia: "File:Mullerthal 02.jpg" },
        { name: "Gorge du Loup — canyon étroit aux formations rocheuses spectaculaires", wikipedia: "File:Neubeuern Wolfsschlucht.jpg" },
        { name: "Abbaye d'Echternach — fondée au VIIe siècle, plus ancienne du Luxembourg", wikipedia: "File:Echternach Abbey R02.jpg" },
        { name: "Beaufort — château médiéval en ruine et château Renaissance", wikipedia: "Beaufort_Castle,_Luxembourg" },
      ],
    },
    {
      id: 4,
      name: "Vallée de la Moselle",
      region: "Canton de Remich",
      description:
        "La Moselle luxembourgeoise est une région viticole pittoresque bordant le fleuve qui sépare le Luxembourg de l'Allemagne. Les cépages Riesling, Pinot gris et Crémant du Luxembourg y sont produits. Des villages vignerons comme Remich, Ehnen et Grevenmacher proposent des caves à visiter et des terrasses avec vue sur les vignes en terrasses.",
      wikipedia: "File:Luxembourg Moselle Vinyards Machtum.JPG",
      tags: ["Vins", "Vignobles", "Gastronomie", "Fleuve"],
      mustSee: [
        { name: "Cave viticole Bernard-Massard à Grevenmacher — Crémant de Luxembourg", wikipedia: "File:GrevenmacherMarktplatz.JPG" },
        { name: "Remich — capitale de la Moselle luxembourgeoise", wikipedia: "Remich" },
        { name: "Schengen — village signataire de l'accord de libre circulation", wikipedia: "File:Luxembourg Schengen from Markusberg a.jpg" },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "Le Luxembourg est l'un des pays les plus chers d'Europe, avec des prix hôteliers élevés dans la capitale. Les restaurants proposent cependant des formules déjeuner abordables et les transports en commun sont gratuits depuis 2020.",
    currency: "EUR",
    exchangeRate: "1€ = 1€",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Auberge de jeunesse (dortoir)", price: "30–45 €", detail: "Auberges HI bien situées dans la capitale" },
          { label: "Hôtel budget", price: "80–120 €", detail: "Chambre double en ville, petit-déjeuner souvent en sus" },
          { label: "Hôtel confort 3–4 étoiles", price: "140–220 €", detail: "Hôtels de charme dans la vieille ville ou le Kirchberg" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Sandwich ou Gromperekichelcher (crêpes de pommes de terre)", price: "5–10 €", detail: "Spécialité locale en street food" },
          { label: "Brasserie, formule déjeuner", price: "15–22 €", detail: "Plat + boisson, excellente qualité rapport-prix" },
          { label: "Restaurant dîner", price: "30–55 €", detail: "Cuisine luxembourgeoise ou internationale haut de gamme" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus, tram et train dans tout le pays", price: "Gratuit", detail: "Transports en commun nationaux entièrement gratuits depuis 2020" },
          { label: "Train Paris–Luxembourg (TGV)", price: "25–80 €", detail: "2h10 de trajet depuis Paris-Est" },
          { label: "Location de vélo (journée)", price: "15–25 €", detail: "Réseau vélo développé, idéal pour la vallée de la Moselle" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Château de Vianden", price: "10 €", detail: "Visite complète du château médiéval restauré" },
          { label: "Casemates du Bock", price: "5 €", detail: "Visite des galeries souterraines fortifiées" },
          { label: "Dégustation de Crémant", price: "12–20 €", detail: "Visite et dégustation dans une cave mosellane" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "90–120 €/j",
        desc: "Auberge, repas abordables, transports gratuits, visites à prix modérés",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "170–240 €/j",
        desc: "Hôtel confort, restaurants, activités et caves à vins",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "4 jours",
      route: "Luxembourg-Ville – Vianden – Mullerthal – Moselle",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "450 – 600 €",
          includesFlights: true,
          breakdown: [
            { label: "Train A/R Paris–Luxembourg", amount: "50–120 €" },
            { label: "Hébergement (3 nuits)", amount: "90–135 €" },
            { label: "Transports locaux (gratuits)", amount: "0 €" },
            { label: "Nourriture + boissons", amount: "150–200 €" },
            { label: "Activités + musées", amount: "30–50 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "900 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Train A/R Paris–Luxembourg", amount: "80–160 €" },
            { label: "Hébergement (3 nuits)", amount: "420–660 €" },
            { label: "Transports locaux (gratuits)", amount: "0 €" },
            { label: "Nourriture + boissons", amount: "300–420 €" },
            { label: "Activités + dégustations", amount: "100–150 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "1h de vol depuis CDG — ou 2h10 en TGV depuis Paris-Est" },
    { icon: "🪪", label: "Visa", value: "Aucun visa requis — zone Schengen, carte d'identité française suffisante" },
    { icon: "💰", label: "Monnaie", value: "Euro (€) — pays très riche, prix élevés notamment pour l'hébergement" },
    { icon: "🗣️", label: "Langue", value: "Luxembourgeois, français et allemand sont les trois langues officielles" },
    { icon: "🔌", label: "Prise électrique", value: "Type E/F (identique à la France) — aucun adaptateur nécessaire" },
    { icon: "💊", label: "Santé", value: "Carte européenne d'assurance maladie (CEAM) valable — très bonnes infrastructures" },
    { icon: "🚌", label: "Transports gratuits", value: "Bus, trams et trains nationaux entièrement gratuits — pionnier mondial" },
    { icon: "🏦", label: "Finance", value: "Important centre financier européen — sièges de nombreuses institutions UE" },
  ],
};
