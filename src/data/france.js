export const FRANCE = {
  code: "FRA",
  numericId: 250,
  name: "France",
  emoji: "🇫🇷",
  capital: "Paris",
  language: "Français",
  currency: "Euro (EUR)",
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 80,
    budgetMid: 160,
    tripMin: 1100,
    tripMid: 2200,
  },
  description:
    "La France est l'une des destinations touristiques les plus visitées au monde, alliant patrimoine historique exceptionnel, gastronomie renommée et paysages variés. Des plages de la Côte d'Azur aux sommets alpins, en passant par les châteaux de la Loire et les vignobles bordelais, le pays offre une diversité remarquable. Paris, ville lumière, reste l'un des centres culturels et artistiques les plus importants de la planète.",
  bestPeriods: [
    {
      months: "Avr – Juin",
      label: "Idéal",
      color: "#22c55e",
      description:
        "Temps doux, foules modérées, fleurs de printemps. Idéal pour explorer Paris et les régions.",
      icon: "☀️",
    },
    {
      months: "Sep – Oct",
      label: "Très bien",
      color: "#22c55e",
      description:
        "Lumière dorée de l'automne, vendanges dans les vignobles, moins de touristes qu'en été.",
      icon: "🍂",
    },
    {
      months: "Jul – Aoû",
      label: "Haute saison",
      color: "#f59e0b",
      description:
        "Beau temps mais foules importantes et prix élevés, surtout sur la côte et à Paris.",
      icon: "🌞",
    },
    {
      months: "Nov – Mar",
      label: "Basse saison",
      color: "#94a3b8",
      description:
        "Hiver frais à Paris, mais ski dans les Alpes et Pyrénées. Prix avantageux en ville.",
      icon: "❄️",
    },
  ],
  weatherCities: [
    {
      id: "paris",
      name: "Paris",
      region: "Île-de-France — climat océanique tempéré",
      data: [
        { month: "Jan", temp: 4, rain: 55, icon: "❄️" },
        { month: "Fév", temp: 5, rain: 45, icon: "❄️" },
        { month: "Mar", temp: 9, rain: 50, icon: "⛅" },
        { month: "Avr", temp: 12, rain: 55, icon: "⛅" },
        { month: "Mai", temp: 16, rain: 65, icon: "☀️" },
        { month: "Jun", temp: 19, rain: 55, icon: "☀️" },
        { month: "Jul", temp: 20, rain: 65, icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 55, icon: "☀️" },
        { month: "Sep", temp: 17, rain: 50, icon: "☀️" },
        { month: "Oct", temp: 13, rain: 55, icon: "⛅" },
        { month: "Nov", temp: 8, rain: 55, icon: "⛅" },
        { month: "Déc", temp: 5, rain: 55, icon: "❄️" },
      ],
    },
    {
      id: "nice",
      name: "Nice",
      region: "Côte d'Azur — climat méditerranéen ensoleillé",
      data: [
        { month: "Jan", temp: 9, rain: 60, icon: "⛅" },
        { month: "Fév", temp: 10, rain: 55, icon: "⛅" },
        { month: "Mar", temp: 13, rain: 50, icon: "⛅" },
        { month: "Avr", temp: 16, rain: 55, icon: "☀️" },
        { month: "Mai", temp: 19, rain: 40, icon: "☀️" },
        { month: "Jun", temp: 23, rain: 25, icon: "☀️" },
        { month: "Jul", temp: 26, rain: 15, icon: "☀️" },
        { month: "Aoû", temp: 26, rain: 20, icon: "☀️" },
        { month: "Sep", temp: 23, rain: 55, icon: "☀️" },
        { month: "Oct", temp: 18, rain: 90, icon: "☀️" },
        { month: "Nov", temp: 13, rain: 85, icon: "⛅" },
        { month: "Déc", temp: 10, rain: 65, icon: "⛅" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Paris",
      region: "Île-de-France",
      description:
        "Capitale incontournable, Paris concentre une densité de chefs-d'œuvre artistiques et architecturaux sans équivalent mondial. La Tour Eiffel, le Louvre, Notre-Dame et Montmartre forment un décor iconique que des millions de visiteurs viennent admirer chaque année. Au-delà des monuments, la ville séduit par ses cafés, ses marchés animés et sa vie culturelle bouillonnante.",
      wikipedia: "Paris",
      tags: ["Culture", "Art", "Gastronomie", "Histoire", "Shopping"],
      mustSee: [
        {
          name: "Tour Eiffel — symbole de Paris, vue panoramique depuis le sommet",
          wikipedia: "Eiffel_Tower",
        },
        {
          name: "Musée du Louvre — plus grand musée du monde, abrite la Joconde",
          wikipedia: "Louvre",
        },
        {
          name: "Cathédrale Notre-Dame — chef-d'œuvre gothique en cours de restauration",
          wikipedia: "Notre-Dame_de_Paris",
        },
        {
          name: "Montmartre & Sacré-Cœur — quartier bohème avec vue sur toute la ville",
          wikipedia: "Montmartre",
        },
      ],
    },
    {
      id: 2,
      name: "Côte d'Azur",
      region: "Provence-Alpes-Côte d'Azur",
      description:
        "La French Riviera s'étire de Menton à Saint-Tropez avec ses eaux turquoise, ses villas belles époque et ses marchés colorés. Nice, Cannes et Monaco offrent chacune une identité distincte, entre promenade des Anglais, Festival du Film et palais princier. Le cadre méditerranéen, la cuisine provençale et l'art de vivre ensoleillé en font une destination de rêve.",
      wikipedia: "French_Riviera",
      tags: ["Plage", "Luxe", "Gastronomie", "Nature", "Culture"],
      mustSee: [
        {
          name: "Promenade des Anglais à Nice — balade iconique en bord de mer",
          wikipedia: "Promenade_des_Anglais",
        },
        {
          name: "Monaco & Rocher — microétat fascinant surplombant la Méditerranée",
          wikipedia: "File:Panorama von Monaco-La Turbie.jpg",
        },
        {
          name: "Gorges du Verdon — grand canyon européen aux eaux émeraude",
          wikipedia: "Verdon_Gorge",
        },
        {
          name: "Vieux-Nice — ruelles colorées et marché du Cours Saleya",
          wikipedia: "Nice",
        },
      ],
    },
    {
      id: 3,
      name: "Vallée de la Loire",
      region: "Centre-Val de Loire",
      description:
        "Surnommée le « jardin de la France », la vallée de la Loire abrite plus de 300 châteaux Renaissance classés au patrimoine mondial de l'UNESCO. Chambord, Chenonceau et Amboise témoignent de la splendeur royale des XVe et XVIe siècles. Les vignobles environnants produisent des vins réputés comme le Vouvray, le Sancerre et le Muscadet.",
      wikipedia: "Loire_Valley",
      tags: ["Histoire", "Châteaux", "Vin", "Vélo", "Patrimoine UNESCO"],
      mustSee: [
        {
          name: "Château de Chambord — joyau Renaissance aux 440 pièces et double escalier",
          wikipedia: "Château_de_Chambord",
        },
        {
          name: "Château de Chenonceau — château des dames enjambant le Cher",
          wikipedia: "Château_de_Chenonceau",
        },
        {
          name: "Château d'Amboise — résidence royale avec tombe de Léonard de Vinci",
          wikipedia: "Château_d'Amboise",
        },
        {
          name: "Clos Lucé — dernière demeure de Léonard de Vinci",
          wikipedia: "File:Clos luce 04.jpg",
        },
      ],
    },
    {
      id: 4,
      name: "Mont-Saint-Michel & Bretagne",
      region: "Normandie / Bretagne",
      description:
        "Le Mont-Saint-Michel, abbaye médiévale surgissant de la mer à marée haute, est l'un des sites les plus photographiés de France. La côte bretonne voisine offre des paysages sauvages de landes et de falaises, des villages de pêcheurs pittoresques et une culture celtique vivace. Crêpes, galettes, cidre et fruits de mer complètent cette expérience authentiquement bretonne.",
      wikipedia: "Mont-Saint-Michel",
      tags: ["Patrimoine UNESCO", "Nature", "Gastronomie", "Histoire", "Mer"],
      mustSee: [
        {
          name: "Abbaye du Mont-Saint-Michel — merveille médiévale sur son îlot rocheux",
          wikipedia: "Mont-Saint-Michel",
        },
        {
          name: "Saint-Malo — cité corsaire aux remparts grandioses face à la mer",
          wikipedia: "Saint-Malo",
        },
        {
          name: "Pointe du Raz — cap sauvage à l'extrémité ouest de l'Europe",
          wikipedia: "Pointe_du_Raz",
        },
        {
          name: "Carnac — alignements mégalithiques parmi les plus importants du monde",
          wikipedia: "Carnac_stones",
        },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "La France est une destination européenne de milieu de gamme. Paris reste plus chère que la moyenne nationale, mais les régions offrent un excellent rapport qualité-prix. La gastronomie peut être abordable avec les formules déjeuner et les boulangeries.",
    currency: "EUR",
    exchangeRate: "1€ = 1€",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          {
            label: "Auberge de jeunesse (dortoir)",
            price: "25–40 €",
            detail: "Grandes villes, literie fournie",
          },
          {
            label: "Hôtel 2–3 étoiles",
            price: "70–130 €",
            detail: "Chambre double en province, 90–160 € à Paris",
          },
          {
            label: "Hôtel 4 étoiles / boutique",
            price: "150–280 €",
            detail: "Centre-ville Paris ou Côte d'Azur",
          },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          {
            label: "Boulangerie / sandwich",
            price: "5–9 €",
            detail: "Croissant, baguette, jambon-beurre",
          },
          {
            label: "Formule déjeuner bistrot",
            price: "13–18 €",
            detail: "Entrée + plat ou plat + dessert, boisson incluse",
          },
          {
            label: "Restaurant le soir",
            price: "25–45 €",
            detail: "Menu 2–3 plats, verre de vin compris",
          },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          {
            label: "Métro / bus (ticket unité)",
            price: "1,90–2,20 €",
            detail: "Carnet de 10 tickets plus avantageux",
          },
          {
            label: "TGV Paris–Lyon",
            price: "30–80 €",
            detail: "En 2h, tarif Ouigo dès 15 € si réservé tôt",
          },
          {
            label: "Location de vélo / trottinette",
            price: "3–10 €/j",
            detail: "Vélib' à Paris, nombreuses pistes cyclables",
          },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          {
            label: "Musée national (Louvre, Orsay…)",
            price: "15–22 €",
            detail: "Gratuit le 1er dimanche du mois, réduit -26 ans",
          },
          {
            label: "Tour Eiffel (sommet)",
            price: "29 €",
            detail: "Réservation en ligne conseillée",
          },
          {
            label: "Visite château Loire",
            price: "12–18 €",
            detail: "Chambord 14 €, Chenonceau 17 €",
          },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "70–90 €/j",
        desc: "Auberge, sandwichs et formules midi, transports en commun",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "140–200 €/j",
        desc: "Hôtel 3 étoiles, restaurants midi et soir, quelques musées",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Paris (4j) → Vallée de la Loire (2j) → Côte d'Azur (4j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 100 – 1 400 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R (Europe)", amount: "100–200 €" },
            { label: "Hébergement (9 nuits)", amount: "270–360 €" },
            { label: "Transports locaux + TGV", amount: "120–160 €" },
            { label: "Nourriture + boissons", amount: "450–540 €" },
            { label: "Activités + musées", amount: "80–120 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 200 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R (Europe)", amount: "150–300 €" },
            { label: "Hébergement (9 nuits)", amount: "900–1 200 €" },
            { label: "Transports locaux + TGV", amount: "200–300 €" },
            { label: "Nourriture + boissons", amount: "700–900 €" },
            { label: "Activités + musées", amount: "150–250 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    {
      icon: "✈️",
      label: "Vol depuis Paris",
      value: "Destination intérieure — train TGV recommandé pour les villes reliées",
    },
    {
      icon: "🪪",
      label: "Visa",
      value: "Pas de visa pour les citoyens UE/Schengen. Carte d'identité suffisante.",
    },
    {
      icon: "💰",
      label: "Monnaie",
      value: "Euro (€). CB acceptée partout, mais prévoir du liquide pour marchés et petits commerces.",
    },
    {
      icon: "🗣️",
      label: "Langue",
      value: "Français. Anglais parlé dans les zones touristiques mais pas garanti en province.",
    },
    {
      icon: "🔌",
      label: "Prise électrique",
      value: "Type E (ronde, 2 broches + trou). 230V / 50Hz. Adaptateur nécessaire hors Europe.",
    },
    {
      icon: "💊",
      label: "Santé",
      value: "Excellents soins médicaux. Carte Européenne d'Assurance Maladie valable pour les ressortissants UE.",
    },
    {
      icon: "🚆",
      label: "Transport principal",
      value: "Réseau TGV très développé. Paris possède un métro dense. Location de voiture utile en région.",
    },
    {
      icon: "📅",
      label: "Jours fériés",
      value: "14 juillet (Fête nationale), 15 août, 1er novembre… Certains commerces fermés.",
    },
  ],
};
