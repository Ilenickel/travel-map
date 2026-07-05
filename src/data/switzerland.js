export const SWITZERLAND = {
  code: "CHE",
  numericId: 756,
  name: { fr: "Suisse", en: "Switzerland" },
  emoji: "🇨🇭",
  capital: { fr: "Berne", en: "Bern" },
  language: { fr: "Allemand, Français, Italien, Romanche", en: "German, French, Italian, Romansh" },
  currency: { fr: "Franc suisse (CHF)", en: "Swiss franc (CHF)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 130,
    budgetMid: 220,
    tripMin: 1500,
    tripMid: 3000,
  },
  description: {
    fr: "La Suisse est l'une des destinations les plus spectaculaires d'Europe, avec ses Alpes grandioses, ses lacs aux eaux limpides et ses villes soignées d'une propreté exemplaire. Pays quadrilingue au carrefour de l'Europe, elle fascine autant par ses paysages — le Cervin, la Jungfrau, le lac Léman — que par sa tradition horlogère, sa gastronomie (fromages, chocolats) et son infrastructure touristique d'excellence. Zurich, Genève, Berne et Lucerne offrent chacune une expérience urbaine unique.",
    en: "Switzerland is one of the most spectacular destinations in Europe, with its grandiose Alps, crystal-clear lakes and immaculately kept towns. A quadrilingual country at the crossroads of Europe, it fascinates as much for its landscapes — the Matterhorn, the Jungfrau, Lake Geneva — as for its watchmaking tradition, its cuisine (cheeses, chocolates) and its outstanding tourism infrastructure. Zurich, Geneva, Bern and Lucerne each offer a unique urban experience.",
  },
  bestPeriods: [
    {
      months: { fr: "Jun – Sep", en: "Jun – Sep" },
      label: { fr: "Idéal (montagne)", en: "Ideal (mountains)" },
      color: "#22c55e",
      description: {
        fr: "Randonnées en haute montagne, fleurs alpines, lacs à leur plus beau. Accès à toutes les attractions ouvertes.",
        en: "High-mountain hiking, alpine flowers, lakes at their finest. All attractions open and accessible.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Déc – Mar", en: "Dec – Mar" },
      label: { fr: "Ski & hiver", en: "Skiing & winter" },
      color: "#22c55e",
      description: {
        fr: "Stations de ski parmi les meilleures du monde : Zermatt, Verbier, Davos, St-Moritz.",
        en: "Some of the best ski resorts in the world: Zermatt, Verbier, Davos, St. Moritz.",
      },
      icon: "⛷️",
    },
    {
      months: { fr: "Avr – Mai", en: "Apr – May" },
      label: { fr: "Printemps", en: "Spring" },
      color: "#f59e0b",
      description: {
        fr: "Villes magnifiques, prix plus bas, mais montagne encore partiellement enneigée.",
        en: "Beautiful cities, lower prices, but the mountains are still partly snow-covered.",
      },
      icon: "🌸",
    },
    {
      months: { fr: "Oct – Nov", en: "Oct – Nov" },
      label: { fr: "Automne", en: "Autumn" },
      color: "#f59e0b",
      description: {
        fr: "Couleurs automnales sur les lacs, moins de touristes, certains téléphériques fermés.",
        en: "Autumn colours over the lakes, fewer tourists, some cable cars closed.",
      },
      icon: "🍂",
    },
  ],
  weatherCities: [
    {
      id: "zurich",
      name: "Zurich",
      region: { fr: "Plateau suisse — climat continental tempéré", en: "Swiss Plateau — temperate continental climate" },
      data: [
        { month: "Jan", temp: 2, rain: 70, icon: "❄️" },
        { month: "Fév", temp: 3, rain: 65, icon: "❄️" },
        { month: "Mar", temp: 8, rain: 75, icon: "❄️" },
        { month: "Avr", temp: 12, rain: 85, icon: "⛅" },
        { month: "Mai", temp: 16, rain: 100, icon: "☀️" },
        { month: "Jun", temp: 19, rain: 115, icon: "☀️" },
        { month: "Jul", temp: 21, rain: 120, icon: "☀️" },
        { month: "Aoû", temp: 21, rain: 120, icon: "☀️" },
        { month: "Sep", temp: 17, rain: 95, icon: "☀️" },
        { month: "Oct", temp: 12, rain: 80, icon: "⛅" },
        { month: "Nov", temp: 6, rain: 75, icon: "❄️" },
        { month: "Déc", temp: 2, rain: 70, icon: "❄️" },
      ],
    },
    {
      id: "zermatt",
      name: "Zermatt",
      region: { fr: "Valais — station alpine, précipitations élevées", en: "Valais — alpine resort, high rainfall" },
      data: [
        { month: "Jan", temp: -3, rain: 60, icon: "❄️" },
        { month: "Fév", temp: -2, rain: 55, icon: "❄️" },
        { month: "Mar", temp: 2, rain: 65, icon: "❄️" },
        { month: "Avr", temp: 6, rain: 70, icon: "❄️" },
        { month: "Mai", temp: 10, rain: 80, icon: "⛅" },
        { month: "Jun", temp: 14, rain: 100, icon: "⛅" },
        { month: "Jul", temp: 17, rain: 110, icon: "☀️" },
        { month: "Aoû", temp: 17, rain: 120, icon: "☀️" },
        { month: "Sep", temp: 13, rain: 90, icon: "⛅" },
        { month: "Oct", temp: 8, rain: 75, icon: "❄️" },
        { month: "Nov", temp: 2, rain: 65, icon: "❄️" },
        { month: "Déc", temp: -2, rain: 65, icon: "❄️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: { fr: "Zermatt & le Cervin", en: "Zermatt & the Matterhorn" },
      region: { fr: "Valais", en: "Valais" },
      description: {
        fr: "Zermatt est une station de montagne sans voitures aux pieds du Cervin (4 478 m), sommet emblématique des Alpes et symbole de la Suisse. L'accès se fait uniquement en train électrique depuis Täsch, ce qui préserve l'atmosphère unique de ce village alpin. Été comme hiver, randonnées, ski et photographies du Cervin à la lumière dorée du couchant font l'essence de cette expérience inoubliable.",
        en: "Zermatt is a car-free mountain resort at the foot of the Matterhorn (4,478m), the Alps' iconic peak and a symbol of Switzerland. Access is only by electric train from Täsch, which preserves the unique atmosphere of this alpine village. Summer and winter alike, hiking, skiing and photographing the Matterhorn in the golden light of sunset are the essence of this unforgettable experience.",
      },
      wikipedia: "Zermatt",
      tags: ["Alpes", "Ski", "Randonnée", "Photographie", "Nature"],
      mustSee: [
        {
          name: { fr: "Le Cervin — ascension ou observation depuis Schwarzsee ou Gornergrat", en: "The Matterhorn — climb it or view it from Schwarzsee or Gornergrat" },
          wikipedia: "Matterhorn",
        },
        {
          name: { fr: "Gornergrat — crête à 3 089 m avec panorama sur 29 sommets de 4 000 m", en: "Gornergrat — a 3,089m ridge with views of 29 peaks over 4,000m" },
          wikipedia: "Gornergrat",
        },
        {
          name: { fr: "Glacier Paradise (Klein Matterhorn) — point le plus haut d'Europe accessible en téléphérique", en: "Glacier Paradise (Klein Matterhorn) — Europe's highest point accessible by cable car" },
          wikipedia: "Klein_Matterhorn",
        },
        {
          name: { fr: "Bahnhofstrasse de Zermatt — rue principale animée avec boutiques et restaurants", en: "Zermatt's Bahnhofstrasse — lively main street with shops and restaurants" },
          wikipedia: "File:Zermatt 20190717 202516.jpg",
        },
      ],
    },
    {
      id: 2,
      name: { fr: "Interlaken & Jungfrau", en: "Interlaken & the Jungfrau" },
      region: { fr: "Oberland bernois", en: "Bernese Oberland" },
      description: {
        fr: "Interlaken est le point de départ idéal pour explorer l'Oberland bernois, coincé entre le lac de Thoune et le lac de Brienz. La Jungfrau (4 158 m) est accessible depuis Grindelwald ou Wengen par le célèbre chemin de fer de la Jungfrau, qui grimpe jusqu'au « toit de l'Europe » à 3 454 m. Les cascades de Giessbach, les gorges de Rosenlaui et les villages de Grindelwald et Mürren complètent ce tableau alpin exceptionnel.",
        en: "Interlaken is the ideal starting point for exploring the Bernese Oberland, wedged between Lake Thun and Lake Brienz. The Jungfrau (4,158m) is accessible from Grindelwald or Wengen via the famous Jungfrau Railway, which climbs to the 'Top of Europe' at 3,454m. The Giessbach Falls, the Rosenlaui gorges and the villages of Grindelwald and Mürren complete this exceptional alpine picture.",
      },
      wikipedia: "Interlaken",
      tags: ["Alpes", "Aventure", "Nature", "Randonnée", "Sports extrêmes", "Ski"],
      mustSee: [
        {
          name: { fr: "Jungfraujoch — « toit de l'Europe » à 3 454 m en train à crémaillère", en: "Jungfraujoch — the 'Top of Europe' at 3,454m via cogwheel train" },
          wikipedia: "Jungfraujoch",
        },
        {
          name: { fr: "Grindelwald — village alpin avec vue sur l'Eiger (3 970 m)", en: "Grindelwald — alpine village with a view of the Eiger (3,970m)" },
          wikipedia: "Grindelwald",
        },
        {
          name: { fr: "Cascades de Lauterbrunnen — 72 cascades dont la Staubbachfall", en: "Lauterbrunnen waterfalls — 72 falls including the Staubbach Falls" },
          wikipedia: "Lauterbrunnen",
        },
        {
          name: { fr: "Schynige Platte — jardin alpin botanique à 1 967 m d'altitude", en: "Schynige Platte — alpine botanical garden at 1,967m altitude" },
          wikipedia: "Schynige_Platte",
        },
      ],
    },
    {
      id: 3,
      name: { fr: "Lucerne & Lac des Quatre-Cantons", en: "Lucerne & Lake Lucerne" },
      region: { fr: "Lucerne", en: "Lucerne" },
      description: {
        fr: "Lucerne est l'une des villes les plus pittoresques de Suisse, avec son célèbre Pont de la Chapelle, sa vieille ville médiévale préservée et le majestueux Rigi en arrière-plan. Le lac des Quatre-Cantons offre des croisières panoramiques vers des sites chargés d'histoire comme le Rütli, prairie où fut fondée la Confédération suisse. Les monts Pilate et Rigi, accessibles en bateau et en crémaillère, offrent des vues à 360° sur les Alpes.",
        en: "Lucerne is one of the most picturesque cities in Switzerland, with its famous Chapel Bridge, preserved medieval old town, and the majestic Rigi in the background. Lake Lucerne offers panoramic cruises to sites steeped in history like the Rütli meadow, where the Swiss Confederation was founded. Mounts Pilatus and Rigi, accessible by boat and cogwheel train, offer 360° views over the Alps.",
      },
      wikipedia: "Lucerne",
      tags: ["Histoire", "Nature", "Lac", "Architecture", "Croisière", "Ville"],
      mustSee: [
        {
          name: { fr: "Pont de la Chapelle — pont en bois du XIVe siècle, symbole de Lucerne", en: "Chapel Bridge — a 14th-century wooden bridge, the symbol of Lucerne" },
          wikipedia: "File:Luzern Kapellbruecke.jpg",
        },
        {
          name: { fr: "Mont Pilate — « dragon-montagne » à 2 132 m, accès en gondole et crémaillère", en: "Mount Pilatus — the 'dragon mountain' at 2,132m, reached by gondola and cogwheel train" },
          wikipedia: "File:20201019-1545-pilatus.jpg",
        },
        {
          name: { fr: "Musée des Transports — plus visité de Suisse, histoire de la mobilité", en: "Swiss Museum of Transport — Switzerland's most-visited museum, the history of mobility" },
          wikipedia: "File:Train-swiss-museum.jpg",
        },
        {
          name: { fr: "Rigi — « reine des montagnes » avec lever de soleil spectaculaire", en: "Rigi — the 'queen of the mountains' with spectacular sunrises" },
          wikipedia: "File:CH.ZG.Zug 2005-03-17 Rigi.jpg",
        },
      ],
    },
    {
      id: 4,
      name: { fr: "Genève & Lac Léman", en: "Geneva & Lake Geneva" },
      region: { fr: "Genève / Vaud", en: "Geneva / Vaud" },
      description: {
        fr: "Genève, capitale mondiale de la diplomatie, est une ville cosmopolite au bord du lac Léman avec en toile de fond les sommets du Mont-Blanc. Le Jet d'Eau, icône de la ville, propulse 500 litres d'eau à 140 mètres de hauteur. Le tour du lac Léman permet de découvrir Lausanne, Montreux (festival de jazz), le Château de Chillon et les vignobles en terrasses du Lavaux classés à l'UNESCO.",
        en: "Geneva, the world capital of diplomacy, is a cosmopolitan city on the shores of Lake Geneva against the backdrop of the Mont Blanc massif. The Jet d'Eau, the city's icon, shoots 500 litres of water 140 metres into the air. Touring Lake Geneva reveals Lausanne, Montreux (jazz festival), Chillon Castle and the UNESCO-listed terraced vineyards of Lavaux.",
      },
      wikipedia: "Geneva",
      tags: ["Diplomatie", "Lac", "UNESCO", "Vin", "Culture", "Ville", "Gastronomie"],
      mustSee: [
        {
          name: { fr: "Jet d'Eau — geyser lacustre de 140 m visible de toute la ville", en: "Jet d'Eau — a 140m lake fountain visible from all over the city" },
          wikipedia: "Jet_d'Eau",
        },
        {
          name: { fr: "Château de Chillon — château médiéval lacustre près de Montreux", en: "Chillon Castle — a medieval lakeside castle near Montreux" },
          wikipedia: "Chillon_Castle",
        },
        {
          name: { fr: "Vignoble du Lavaux — terrasses viticoles UNESCO sur les rives du lac", en: "Lavaux vineyards — UNESCO-listed terraced vineyards along the lakeshore" },
          wikipedia: "Lavaux",
        },
        {
          name: { fr: "Vieille-Ville de Genève & Cathédrale Saint-Pierre — cœur historique de la Réforme", en: "Geneva Old Town & St. Pierre Cathedral — the historic heart of the Reformation" },
          wikipedia: "File:Geneve_maison_Turrettini_2011-09-09_12_52_26_PICT4523.JPG",
        },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "La Suisse est l'une des destinations les plus chères du monde. Les prix y sont 60 à 80 % plus élevés qu'en France. Le franc suisse fort amplifie le coût pour les voyageurs européens. Cependant, la qualité des prestations et la fiabilité des transports justifient largement l'investissement.",
      en: "Switzerland is one of the most expensive destinations in the world. Prices are 60 to 80% higher than in France. The strong Swiss franc amplifies the cost for European travellers. However, the quality of services and the reliability of transport largely justify the investment.",
    },
    currency: "CHF",
    exchangeRate: "1€ ≈ 0,93 CHF",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          {
            label: { fr: "Auberge de jeunesse (dortoir)", en: "Youth hostel (dorm)" },
            price: "40–60 €",
            detail: { fr: "Les moins chères de Suisse restent onéreuses pour le budget", en: "Even the cheapest option in Switzerland is pricey for a budget traveller" },
          },
          {
            label: { fr: "Hôtel 3 étoiles", en: "3-star hotel" },
            price: "130–200 €",
            detail: { fr: "Chambre double à Zurich ou Genève, moins cher en montagne hors saison", en: "Double room in Zurich or Geneva, cheaper in the mountains off-season" },
          },
          {
            label: { fr: "Hôtel 4 étoiles", en: "4-star hotel" },
            price: "220–400 €",
            detail: { fr: "Hôtels de montagne ou bord de lac avec vue panoramique", en: "Mountain or lakeside hotels with panoramic views" },
          },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          {
            label: { fr: "Supermarché / Coop / Migros", en: "Supermarket / Coop / Migros" },
            price: "8–15 €",
            detail: { fr: "Faire ses courses reste l'option la plus économique", en: "Grocery shopping remains the most economical option" },
          },
          {
            label: { fr: "Restaurant midi (menu du jour)", en: "Lunch restaurant (menu of the day)" },
            price: "18–28 €",
            detail: { fr: "Menu Tagesmenü très répandu, meilleur rapport Q/P", en: "The Tagesmenü lunch deal is widespread and the best value" },
          },
          {
            label: { fr: "Dîner au restaurant", en: "Dinner at a restaurant" },
            price: "40–90 €",
            detail: { fr: "Fondue, raclette, rösti — compter 90 CHF pour une fondue à deux en montagne", en: "Fondue, raclette, rösti — expect about 90 CHF for a fondue for two in the mountains" },
          },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          {
            label: { fr: "Swiss Travel Pass (3 jours)", en: "Swiss Travel Pass (3 days)" },
            price: "230–260 €",
            detail: { fr: "Accès illimité trains, bus, bateaux et transports urbains", en: "Unlimited access to trains, buses, boats and city transport" },
          },
          {
            label: { fr: "Téléphérique Jungfraujoch", en: "Jungfraujoch cable car" },
            price: "220–230 €",
            detail: { fr: "Aller-retour depuis Interlaken, coûteux mais unique", en: "Return trip from Interlaken, expensive but one of a kind" },
          },
          {
            label: { fr: "Train IC Zurich–Genève", en: "IC train Zurich–Geneva" },
            price: "50–80 €",
            detail: { fr: "En 2h40, réductions avec demi-tarif SBB", en: "2h40 journey, discounts with the SBB half-fare card" },
          },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          {
            label: { fr: "Musée national de Zurich", en: "Swiss National Museum, Zurich" },
            price: "10 €",
            detail: { fr: "Histoire suisse sur 6 000 ans, inclus dans Swiss Travel Pass", en: "6,000 years of Swiss history, included with the Swiss Travel Pass" },
          },
          {
            label: { fr: "Croisière lac Léman ou lac des 4-Cantons", en: "Cruise on Lake Geneva or Lake Lucerne" },
            price: "25–40 €",
            detail: { fr: "Incluse dans le Swiss Travel Pass", en: "Included with the Swiss Travel Pass" },
          },
          {
            label: { fr: "Château de Chillon", en: "Chillon Castle" },
            price: "14 €",
            detail: { fr: "Visite autonome en 1h30 à 2h", en: "Self-guided visit, 1h30 to 2h" },
          },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker" },
        daily: "110–140 €/j",
        desc: { fr: "Auberge, supermarché et un repas au restaurant, Swiss Travel Pass", en: "Hostel, supermarket and one restaurant meal, Swiss Travel Pass" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort" },
        daily: "200–280 €/j",
        desc: { fr: "Hôtel 3 étoiles, restaurants mid-range, excursions en montagne", en: "3-star hotel, mid-range restaurants, mountain excursions" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days" },
      route: { fr: "Zurich (2j) → Interlaken/Jungfrau (3j) → Zermatt (2j) → Genève (1j)", en: "Zurich (2d) → Interlaken/Jungfrau (3d) → Zermatt (2d) → Geneva (1d)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 500 – 1 900 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Zurich", en: "Return flight Paris–Zurich" }, amount: "80–150 €" },
            { label: { fr: "Hébergement (7 nuits)", en: "Accommodation (7 nights)" }, amount: "350–490 €" },
            { label: { fr: "Swiss Travel Pass (8j)", en: "Swiss Travel Pass (8d)" }, amount: "290–310 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "560–680 €" },
            { label: { fr: "Activités + téléphériques", en: "Activities + cable cars" }, amount: "200–280 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "3 000 – 4 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Zurich", en: "Return flight Paris–Zurich" }, amount: "100–200 €" },
            { label: { fr: "Hébergement (7 nuits)", en: "Accommodation (7 nights)" }, amount: "1 200–1 700 €" },
            { label: { fr: "Swiss Travel Pass (8j)", en: "Swiss Travel Pass (8d)" }, amount: "290–310 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "1 000–1 400 €" },
            { label: { fr: "Activités + Jungfraujoch", en: "Activities + Jungfraujoch" }, amount: "400–600 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    {
      icon: "✈️",
      label: { fr: "Vol depuis Paris", en: "Flight from Paris" },
      value: { fr: "Paris–Zurich : 1h30 de vol. Paris–Genève : 1h. Aussi accessible en TGV Paris–Genève en 3h20.", en: "Paris–Zurich: 1h30 flight. Paris–Geneva: 1h. Also reachable by TGV Paris–Geneva in 3h20." },
    },
    {
      icon: "🪪",
      label: { fr: "Visa", en: "Visa" },
      value: { fr: "La Suisse fait partie de l'espace Schengen. Pas de visa pour les citoyens UE. Carte d'identité suffisante.", en: "Switzerland is part of the Schengen area. No visa for EU citizens. An ID card is sufficient." },
    },
    {
      icon: "💰",
      label: { fr: "Monnaie", en: "Currency" },
      value: { fr: "Franc suisse (CHF). Les euros sont parfois acceptés à un taux défavorable. Privilégier le CHF.", en: "Swiss franc (CHF). Euros are sometimes accepted at an unfavourable rate. Prefer CHF." },
    },
    {
      icon: "🗣️",
      label: { fr: "Langue", en: "Language" },
      value: { fr: "Allemand en Suisse centrale, français en Suisse romande (Genève, Lausanne), italien au Tessin.", en: "German in central Switzerland, French in French-speaking Switzerland (Geneva, Lausanne), Italian in Ticino." },
    },
    {
      icon: "🔌",
      label: { fr: "Prise électrique", en: "Power outlet" },
      value: { fr: "Type J (spécifique à la Suisse, 3 broches). Adaptateur indispensable depuis la France.", en: "Type J (specific to Switzerland, 3-pin). An adapter is essential coming from France." },
    },
    {
      icon: "💊",
      label: { fr: "Santé", en: "Health" },
      value: { fr: "Soins de très haute qualité mais très coûteux. Assurance voyage avec rapatriement indispensable.", en: "Very high-quality but very expensive healthcare. Travel insurance with repatriation is essential." },
    },
    {
      icon: "🚆",
      label: { fr: "Swiss Travel Pass", en: "Swiss Travel Pass" },
      value: { fr: "Fortement recommandé pour les séjours de plus de 3 jours. Inclut trains, bateaux, bus et accès aux musées.", en: "Strongly recommended for stays longer than 3 days. Includes trains, boats, buses and museum access." },
    },
    {
      icon: "🏔️",
      label: { fr: "Altitude", en: "Altitude" },
      value: { fr: "Certaines excursions dépassent 3 000 m. Prévoir des vêtements chauds même en été.", en: "Some excursions exceed 3,000m. Bring warm clothing even in summer." },
    },
  ],
};
