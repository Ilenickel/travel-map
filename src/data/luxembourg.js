export const LUXEMBOURG = {
  code: "LUX",
  numericId: 442,
  name: { fr: "Luxembourg", en: "Luxembourg" },
  emoji: "🇱🇺",
  capital: { fr: "Luxembourg", en: "Luxembourg" },
  language: { fr: "Luxembourgeois, Français, Allemand", en: "Luxembourgish, French, German" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 90, budgetMid: 170,
    tripMin: 1150, tripMid: 2400,
  },
  description: {
    fr: "Le Grand-Duché de Luxembourg est l'un des plus petits pays d'Europe et pourtant l'un des plus riches. Sa capitale, classée au patrimoine mondial de l'UNESCO pour ses fortifications, mêle architecture médiévale et institutions européennes modernes. Au-delà de la capitale, la région de la Moselle offre de beaux vignobles, le château de Vianden domine les Ardennes luxembourgeoises, et le Mullerthal est surnommé la 'Petite Suisse luxembourgeoise'.",
    en: "The Grand Duchy of Luxembourg is one of the smallest countries in Europe, yet one of the richest. Its capital, a UNESCO World Heritage site for its fortifications, blends medieval architecture with modern European institutions. Beyond the capital, the Moselle region offers beautiful vineyards, Vianden Castle overlooks the Luxembourg Ardennes, and the Mullerthal is nicknamed 'Luxembourg's Little Switzerland'.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Septembre", en: "May – September" },
      label: { fr: "Printemps et été", en: "Spring and summer" },
      color: "#22c55e",
      description: {
        fr: "La meilleure saison pour explorer le Luxembourg, avec des températures agréables (15–22°C). Les terrasses s'animent dans la vieille ville, les randonnées dans le Mullerthal sont idéales et les vignobles de la Moselle sont en pleine verdure.",
        en: "The best season to explore Luxembourg, with pleasant temperatures (15–22°C). Terraces come alive in the old town, hiking in the Mullerthal is ideal and the Moselle vineyards are lush and green.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Septembre – Octobre", en: "September – October" },
      label: { fr: "Vendanges et automne", en: "Grape harvest and autumn" },
      color: "#f59e0b",
      description: {
        fr: "La région mosellane s'anime lors des vendanges en septembre. Les couleurs automnales des Ardennes luxembourgeoises et du Mullerthal sont spectaculaires et la fréquentation touristique diminue.",
        en: "The Moselle region comes alive during the September grape harvest. The autumn colours of the Luxembourg Ardennes and the Mullerthal are spectacular, and tourist numbers drop.",
      },
      icon: "🍇",
    },
  ],
  weatherCities: [
    {
      id: "luxembourg_city",
      name: "Luxembourg",
      region: { fr: "Canton de Luxembourg", en: "Canton of Luxembourg" },
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
      region: { fr: "Canton de Luxembourg", en: "Canton of Luxembourg" },
      description: {
        fr: "La capitale du Grand-Duché est une ville fascinante construite sur des falaises, dont les fortifications médiévales sont classées au patrimoine mondial de l'UNESCO. Le Chemin de la Corniche offre une vue panoramique sur les casemates et la vieille ville. Le Grund, quartier au fond des vallées de l'Alzette et de la Pétrusse, est idéal pour se promener en soirée.",
        en: "The Grand Duchy's capital is a fascinating city built on cliffs, whose medieval fortifications are a UNESCO World Heritage site. The Chemin de la Corniche offers a panoramic view over the casemates and the old town. The Grund, a district at the bottom of the Alzette and Pétrusse valleys, is ideal for an evening stroll.",
      },
      wikipedia: "Luxembourg_City",
      tags: ["UNESCO", "Ville", "Fortifications", "Institutions européennes", "Architecture", "Histoire"],
      mustSee: [
        { name: { fr: "Casemates du Bock — galeries souterraines dans la roche sur 23 km", en: "Bock Casemates — 23 km of underground galleries carved into the rock" }, wikipedia: "File:The Bock Casemates 1.jpg" },
        { name: { fr: "Chemin de la Corniche — 'le plus beau balcon d'Europe'", en: "Chemin de la Corniche — 'Europe's most beautiful balcony'" }, wikipedia: "File:Corniche_and_rear_view_of_Breedewee_Luxembourg_City_2012-04.JPG" },
        { name: { fr: "Cathédrale Notre-Dame — gothique tardif avec crypte des Grands-Ducs", en: "Notre-Dame Cathedral — late Gothic with the Grand Ducal crypt" }, wikipedia: "File:Luxembourg_City_Square_Guillaume_II_towards_Notre-Dame_Cathedral_April_2011.jpg" },
        { name: { fr: "MUDAM — musée d'art moderne de renommée internationale", en: "MUDAM — internationally renowned museum of modern art" }, wikipedia: "MUDAM" },
      ],
    },
    {
      id: 2,
      name: "Vianden",
      region: { fr: "Canton de Vianden", en: "Canton of Vianden" },
      description: {
        fr: "Vianden est un village de conte de fées niché dans la vallée de l'Our, dominé par l'un des plus beaux châteaux médiévaux d'Europe. Victor Hugo y vécut en exil en 1871 et y rédigea une partie de son œuvre. Le télésiège offre une vue plongeante sur le château et la vallée boisée.",
        en: "Vianden is a fairytale village nestled in the Our valley, overlooked by one of the finest medieval castles in Europe. Victor Hugo lived here in exile in 1871 and wrote part of his work there. The chairlift offers a sweeping view over the castle and the wooded valley.",
      },
      wikipedia: "Vianden",
      tags: ["Château", "Médiéval", "Victor Hugo", "Ardennes"],
      mustSee: [
        { name: { fr: "Château de Vianden — forteresse romano-gothique restaurée", en: "Vianden Castle — restored Romanesque-Gothic fortress" }, wikipedia: "Vianden_Castle" },
        { name: { fr: "Maison de Victor Hugo — musée dédié au séjour de l'écrivain", en: "Victor Hugo House — museum dedicated to the writer's stay" }, wikipedia: "File:Victor Hugo Museum Vianden.jpg" },
        { name: { fr: "Télésiège de Vianden — panorama sur le château et la vallée de l'Our", en: "Vianden chairlift — panorama over the castle and the Our valley" }, wikipedia: "File:TélésiègeVianden1.JPG" },
        { name: { fr: "Our — rivière idéale pour le kayak et les randonnées riveraines", en: "Our — river ideal for kayaking and riverside walks" }, wikipedia: "Our_(river)" },
      ],
    },
    {
      id: 3,
      name: "Mullerthal",
      region: { fr: "Canton d'Echternach", en: "Canton of Echternach" },
      description: {
        fr: "Surnommé la 'Petite Suisse luxembourgeoise', le Mullerthal est une région de gorges boisées, de rochers sculptés par l'érosion et de sentiers de randonnée spectaculaires. Echternach, plus ancienne ville du Luxembourg, est le point de départ idéal. Le sentier Mullerthal Trail (112 km) traverse des paysages de grès sauvages et enchanteurs.",
        en: "Nicknamed 'Luxembourg's Little Switzerland', the Mullerthal is a region of wooded gorges, erosion-carved rock formations and spectacular hiking trails. Echternach, Luxembourg's oldest town, is the ideal starting point. The Mullerthal Trail (112 km) winds through wild, enchanting sandstone landscapes.",
      },
      wikipedia: "File:Mullerthal 02.jpg",
      tags: ["Randonnée", "Nature", "Gorges", "Grès"],
      mustSee: [
        { name: { fr: "Sentier Mullerthal Trail — 112 km de randonnée dans les gorges boisées", en: "Mullerthal Trail — 112 km of hiking through wooded gorges" }, wikipedia: "File:Mullerthal 02.jpg" },
        { name: { fr: "Gorge du Loup — canyon étroit aux formations rocheuses spectaculaires", en: "Gorge du Loup — narrow canyon with spectacular rock formations" }, wikipedia: "File:Neubeuern Wolfsschlucht.jpg" },
        { name: { fr: "Abbaye d'Echternach — fondée au VIIe siècle, plus ancienne du Luxembourg", en: "Echternach Abbey — founded in the 7th century, Luxembourg's oldest" }, wikipedia: "File:Echternach Abbey R02.jpg" },
        { name: { fr: "Beaufort — château médiéval en ruine et château Renaissance", en: "Beaufort — ruined medieval castle and Renaissance château" }, wikipedia: "Beaufort_Castle,_Luxembourg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Vallée de la Moselle", en: "Moselle Valley" },
      region: { fr: "Canton de Remich", en: "Canton of Remich" },
      description: {
        fr: "La Moselle luxembourgeoise est une région viticole pittoresque bordant le fleuve qui sépare le Luxembourg de l'Allemagne. Les cépages Riesling, Pinot gris et Crémant du Luxembourg y sont produits. Des villages vignerons comme Remich, Ehnen et Grevenmacher proposent des caves à visiter et des terrasses avec vue sur les vignes en terrasses.",
        en: "The Luxembourg Moselle is a picturesque wine region bordering the river that separates Luxembourg from Germany. Riesling, Pinot Gris and Luxembourg Crémant are produced here. Wine villages such as Remich, Ehnen and Grevenmacher offer cellars to visit and terraces overlooking the terraced vineyards.",
      },
      wikipedia: "File:Luxembourg Moselle Vinyards Machtum.JPG",
      tags: ["Vins", "Vignobles", "Gastronomie", "Fleuve"],
      mustSee: [
        { name: { fr: "Cave viticole Bernard-Massard à Grevenmacher — Crémant de Luxembourg", en: "Bernard-Massard winery in Grevenmacher — Luxembourg Crémant" }, wikipedia: "File:GrevenmacherMarktplatz.JPG" },
        { name: { fr: "Remich — capitale de la Moselle luxembourgeoise", en: "Remich — capital of the Luxembourg Moselle" }, wikipedia: "Remich" },
        { name: { fr: "Schengen — village signataire de l'accord de libre circulation", en: "Schengen — village where the free-movement agreement was signed" }, wikipedia: "File:Luxembourg Schengen from Markusberg a.jpg" },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "Le Luxembourg est l'un des pays les plus chers d'Europe, avec des prix hôteliers élevés dans la capitale. Les restaurants proposent cependant des formules déjeuner abordables et les transports en commun sont gratuits depuis 2020.",
      en: "Luxembourg is one of the most expensive countries in Europe, with high hotel prices in the capital. Restaurants, however, offer affordable lunch menus, and public transport has been free since 2020.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Auberge de jeunesse (dortoir)", en: "Youth hostel (dorm)" }, price: "30–45 €", detail: { fr: "Auberges HI bien situées dans la capitale", en: "Well-located HI hostels in the capital" } },
          { label: { fr: "Hôtel budget", en: "Budget hotel" }, price: "80–120 €", detail: { fr: "Chambre double en ville, petit-déjeuner souvent en sus", en: "Double room in town, breakfast often extra" } },
          { label: { fr: "Hôtel confort 3–4 étoiles", en: "3–4 star comfort hotel" }, price: "140–220 €", detail: { fr: "Hôtels de charme dans la vieille ville ou le Kirchberg", en: "Charming hotels in the old town or Kirchberg" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Sandwich ou Gromperekichelcher (crêpes de pommes de terre)", en: "Sandwich or Gromperekichelcher (potato pancakes)" }, price: "5–10 €", detail: { fr: "Spécialité locale en street food", en: "Local street food specialty" } },
          { label: { fr: "Brasserie, formule déjeuner", en: "Brasserie, lunch menu" }, price: "15–22 €", detail: { fr: "Plat + boisson, excellente qualité rapport-prix", en: "Dish + drink, excellent value for money" } },
          { label: { fr: "Restaurant dîner", en: "Restaurant dinner" }, price: "30–55 €", detail: { fr: "Cuisine luxembourgeoise ou internationale haut de gamme", en: "Upscale Luxembourgish or international cuisine" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus, tram et train dans tout le pays", en: "Bus, tram and train nationwide" }, price: { fr: "Gratuit", en: "Free" }, detail: { fr: "Transports en commun nationaux entièrement gratuits depuis 2020", en: "National public transport entirely free since 2020" } },
          { label: { fr: "Train Paris–Luxembourg (TGV)", en: "Train Paris–Luxembourg (TGV)" }, price: "25–80 €", detail: { fr: "2h10 de trajet depuis Paris-Est", en: "2h10 journey from Paris-Est" } },
          { label: { fr: "Location de vélo (journée)", en: "Bike rental (day)" }, price: "15–25 €", detail: { fr: "Réseau vélo développé, idéal pour la vallée de la Moselle", en: "Well-developed cycling network, ideal for the Moselle valley" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Château de Vianden", en: "Vianden Castle" }, price: "10 €", detail: { fr: "Visite complète du château médiéval restauré", en: "Full tour of the restored medieval castle" } },
          { label: { fr: "Casemates du Bock", en: "Bock Casemates" }, price: "5 €", detail: { fr: "Visite des galeries souterraines fortifiées", en: "Tour of the fortified underground galleries" } },
          { label: { fr: "Dégustation de Crémant", en: "Crémant tasting" }, price: "12–20 €", detail: { fr: "Visite et dégustation dans une cave mosellane", en: "Tour and tasting at a Moselle winery" } },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker" },
        daily: "90–120 €/j",
        desc: { fr: "Auberge, repas abordables, transports gratuits, visites à prix modérés", en: "Hostel, affordable meals, free transport, moderately priced visits" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort" },
        daily: "170–240 €/j",
        desc: { fr: "Hôtel confort, restaurants, activités et caves à vins", en: "Comfort hotel, restaurants, activities and wine cellars" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "4 jours", en: "4 days" },
      route: { fr: "Luxembourg-Ville – Vianden – Mullerthal – Moselle", en: "Luxembourg City – Vianden – Mullerthal – Moselle" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "450 – 600 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Train A/R Paris–Luxembourg", en: "Return train Paris–Luxembourg" }, amount: "50–120 €" },
            { label: { fr: "Hébergement (3 nuits)", en: "Accommodation (3 nights)" }, amount: "90–135 €" },
            { label: { fr: "Transports locaux (gratuits)", en: "Local transport (free)" }, amount: "0 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "150–200 €" },
            { label: { fr: "Activités + musées", en: "Activities + museums" }, amount: "30–50 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "900 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Train A/R Paris–Luxembourg", en: "Return train Paris–Luxembourg" }, amount: "80–160 €" },
            { label: { fr: "Hébergement (3 nuits)", en: "Accommodation (3 nights)" }, amount: "420–660 €" },
            { label: { fr: "Transports locaux (gratuits)", en: "Local transport (free)" }, amount: "0 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "300–420 €" },
            { label: { fr: "Activités + dégustations", en: "Activities + tastings" }, amount: "100–150 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "1h de vol depuis CDG — ou 2h10 en TGV depuis Paris-Est", en: "1h flight from CDG — or 2h10 by TGV from Paris-Est" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Aucun visa requis — zone Schengen, carte d'identité française suffisante", en: "No visa required — Schengen area, French national ID card is sufficient" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Euro (€) — pays très riche, prix élevés notamment pour l'hébergement", en: "Euro (€) — a very wealthy country, high prices especially for accommodation" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Luxembourgeois, français et allemand sont les trois langues officielles", en: "Luxembourgish, French and German are the three official languages" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type E/F (identique à la France) — aucun adaptateur nécessaire", en: "Type E/F (same as France) — no adapter needed" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Carte européenne d'assurance maladie (CEAM) valable — très bonnes infrastructures", en: "European Health Insurance Card (EHIC) valid — very good healthcare infrastructure" } },
    { icon: "🚌", label: { fr: "Transports gratuits", en: "Free transport" }, value: { fr: "Bus, trams et trains nationaux entièrement gratuits — pionnier mondial", en: "National buses, trams and trains entirely free — a world pioneer" } },
    { icon: "🏦", label: { fr: "Finance", en: "Finance" }, value: { fr: "Important centre financier européen — sièges de nombreuses institutions UE", en: "Major European financial centre — home to many EU institutions" } },
  ],
};
