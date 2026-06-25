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
      id: "lyon",
      name: "Lyon",
      region: "Auvergne-Rhône-Alpes — continental doux",
      data: [
        { month: "Jan", temp:  3, rain: 52,  icon: "❄️" },
        { month: "Fév", temp:  5, rain: 48,  icon: "❄️" },
        { month: "Mar", temp:  9, rain: 55,  icon: "⛅" },
        { month: "Avr", temp: 13, rain: 65,  icon: "⛅" },
        { month: "Mai", temp: 17, rain: 80,  icon: "☀️" },
        { month: "Jun", temp: 21, rain: 70,  icon: "☀️" },
        { month: "Jul", temp: 24, rain: 60,  icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 70,  icon: "☀️" },
        { month: "Sep", temp: 19, rain: 80,  icon: "☀️" },
        { month: "Oct", temp: 14, rain: 80,  icon: "⛅" },
        { month: "Nov", temp:  7, rain: 70,  icon: "⛅" },
        { month: "Déc", temp:  4, rain: 55,  icon: "❄️" },
      ],
    },
    {
      id: "strasbourg",
      name: "Strasbourg (Alsace)",
      region: "Alsace — climat semi-continental",
      data: [
        { month: "Jan", temp:  1, rain: 45,  icon: "❄️" },
        { month: "Fév", temp:  3, rain: 40,  icon: "❄️" },
        { month: "Mar", temp:  8, rain: 45,  icon: "⛅" },
        { month: "Avr", temp: 12, rain: 50,  icon: "⛅" },
        { month: "Mai", temp: 17, rain: 65,  icon: "☀️" },
        { month: "Jun", temp: 20, rain: 75,  icon: "☀️" },
        { month: "Jul", temp: 23, rain: 70,  icon: "☀️" },
        { month: "Aoû", temp: 22, rain: 65,  icon: "☀️" },
        { month: "Sep", temp: 18, rain: 60,  icon: "☀️" },
        { month: "Oct", temp: 12, rain: 60,  icon: "⛅" },
        { month: "Nov", temp:  6, rain: 55,  icon: "⛅" },
        { month: "Déc", temp:  2, rain: 50,  icon: "❄️" },
      ],
    },
    {
      id: "avignon",
      name: "Avignon (Provence)",
      region: "Provence — climat méditerranéen",
      data: [
        { month: "Jan", temp:  6, rain: 48,  icon: "⛅" },
        { month: "Fév", temp:  8, rain: 42,  icon: "⛅" },
        { month: "Mar", temp: 12, rain: 42,  icon: "⛅" },
        { month: "Avr", temp: 15, rain: 55,  icon: "☀️" },
        { month: "Mai", temp: 19, rain: 55,  icon: "☀️" },
        { month: "Jun", temp: 24, rain: 35,  icon: "☀️" },
        { month: "Jul", temp: 27, rain: 20,  icon: "☀️" },
        { month: "Aoû", temp: 26, rain: 30,  icon: "☀️" },
        { month: "Sep", temp: 22, rain: 70,  icon: "☀️" },
        { month: "Oct", temp: 17, rain: 85,  icon: "⛅" },
        { month: "Nov", temp: 10, rain: 65,  icon: "⛅" },
        { month: "Déc", temp:  7, rain: 52,  icon: "⛅" },
      ],
    },
    {
      id: "bordeaux",
      name: "Bordeaux",
      region: "Nouvelle-Aquitaine — climat océanique tempéré",
      data: [
        { month: "Jan", temp:  7, rain: 80,  icon: "⛅" },
        { month: "Fév", temp:  8, rain: 65,  icon: "⛅" },
        { month: "Mar", temp: 11, rain: 65,  icon: "⛅" },
        { month: "Avr", temp: 14, rain: 70,  icon: "⛅" },
        { month: "Mai", temp: 17, rain: 75,  icon: "☀️" },
        { month: "Jun", temp: 21, rain: 55,  icon: "☀️" },
        { month: "Jul", temp: 23, rain: 45,  icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 50,  icon: "☀️" },
        { month: "Sep", temp: 20, rain: 70,  icon: "☀️" },
        { month: "Oct", temp: 15, rain: 85,  icon: "⛅" },
        { month: "Nov", temp: 10, rain: 85,  icon: "⛅" },
        { month: "Déc", temp:  7, rain: 80,  icon: "⛅" },
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
      tags: ["Culture", "Art", "Gastronomie", "Histoire", "Shopping", "Ville", "UNESCO"],
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
      tags: ["Plage", "Luxe", "Gastronomie", "Nature", "Culture", "Randonnée"],
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
      tags: ["Histoire", "Châteaux", "Vin", "Vélo", "UNESCO", "Architecture"],
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
      tags: ["UNESCO", "Nature", "Gastronomie", "Histoire", "Mer", "Randonnée"],
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
    {
      id: 5,
      name: "Alpes & Chamonix",
      region: "Auvergne-Rhône-Alpes",
      description:
        "Au pied du toit de l'Europe, Chamonix est la capitale mondiale de l'alpinisme et du ski. La vallée offre des panoramas grandioses sur le massif du Mont-Blanc, des glaciers spectaculaires et des stations réputées. En été, la randonnée et les remontées mécaniques ouvrent l'accès à la haute montagne.",
      wikipedia: "Chamonix",
      tags: ["Ski", "Randonnée", "Nature", "UNESCO"],
      mustSee: [
        { name: "Mont-Blanc", wikipedia: "File:Absolute_MtBlanc_01.jpg" },
        { name: "Chamonix — vallée et remontées mécaniques", wikipedia: "Chamonix" },
        { name: "Vallée Blanche — ski hors-piste légendaire", wikipedia: "File:ValleeBlancheFromSE_(cropped).JPG" },
        { name: "Mer de Glace", wikipedia: "Mer_de_Glace" },
        { name: "Annecy & son lac", wikipedia: "Annecy" },
      ],
    },
    {
      id: 6,
      name: "Lyon & Gastronomie",
      region: "Auvergne-Rhône-Alpes",
      description:
        "Lyon est la capitale mondiale de la gastronomie, avec ses bouchons lyonnais, ses marchés couverts (Halles Paul Bocuse) et le plus grand nombre de restaurants étoilés Michelin au km² en France. Sa vieille ville Renaissance et ses traboules — ces passages secrets entre les immeubles — forment un labyrinthe classé UNESCO. Confluent de la Saône et du Rhône, Lyon est aussi une ville de culture dynamique.",
      wikipedia: "Lyon",
      tags: ["Gastronomie", "Culture", "Histoire", "UNESCO", "Architecture", "Ville"],
      mustSee: [
        { name: "Vieux Lyon & traboules — quartier Renaissance classé UNESCO", wikipedia: "Vieux_Lyon" },
        { name: "Halles Paul Bocuse — temple de la gastronomie lyonnaise", wikipedia: "File:Halles de Lyon-Paul Bocuse 001.jpg" },
        { name: "Basilique Notre-Dame de Fourvière — surplombant la ville", wikipedia: "Basilica_of_Notre-Dame_de_Fourvière" },
        { name: "Théâtre des Célestins", wikipedia: "File:Théâtre des Célestins 2015.jpg" },
      ],
    },
    {
      id: 7,
      name: "Alsace & Strasbourg",
      region: "Grand Est",
      description:
        "L'Alsace est une région à la frontière franco-allemande avec une identité culturelle unique : maisons à colombages fleuries, vignobles de la Route des Vins, choucroute et kouglof. Strasbourg abrite le Parlement européen et une cathédrale gothique exceptionnelle. Son marché de Noël, le plus ancien et célèbre d'Europe, attire chaque année des millions de visiteurs.",
      wikipedia: "Alsace",
      tags: ["Culture", "Gastronomie", "Architecture", "UNESCO", "Vin", "Histoire", "Randonnée"],
      mustSee: [
        { name: "Cathédrale Notre-Dame de Strasbourg — flèche gothique de 142 m", wikipedia: "Strasbourg_Cathedral" },
        { name: "La Petite France — quartier de tanneurs aux maisons à colombages", wikipedia: "File:Straßburg (Frankreich), Petite France -- 2011 -- 1759.jpg" },
        { name: "Marché de Noël de Strasbourg — le plus ancien d'Europe", wikipedia: "File:Strasbourg Christkindelsmärik 30 nov 2014.jpg" },
      ],
    },
    {
      id: 8,
      name: "Provence & Avignon",
      region: "Provence-Alpes-Côte d'Azur",
      description:
        "La Provence est une symphonie de lavande, de cigales et d'art de vivre sous le soleil du Sud. Avignon et son Palais des Papes, le Pont du Gard romain, les Baux-de-Provence accrochés aux falaises, les marchés colorés d'Aix et les champs de lavande du Luberon forment l'une des régions les plus photographiées au monde. Vin rosé, tapenade et pastis compris.",
      wikipedia: "Provence",
      tags: ["Nature", "Histoire", "UNESCO", "Gastronomie", "Vin", "Paysage", "Randonnée"],
      mustSee: [
        { name: "Palais des Papes d'Avignon — plus grand palais gothique médiéval du monde", wikipedia: "File:Avignon,_Palais_des_Papes_by_JM_Rosier.jpg" },
        { name: "Pont du Gard — aqueduc romain à 3 niveaux classé UNESCO", wikipedia: "Pont_du_Gard" },
        { name: "Champs de lavande du Luberon & Valensole — juin–juillet", wikipedia: "File:Lavanda sahəsi - Çuxur Qəbələ k - Qəbələ r.jpg" },
        { name: "Les Baux-de-Provence — village perché et Carrières de Lumières", wikipedia: "File:Les Baux-de-Provence.jpg" },
      ],
    },
    {
      id: 9,
      name: "Bordeaux & Vignobles",
      region: "Nouvelle-Aquitaine",
      description:
        "Bordeaux est la capitale mondiale du vin et une ville classée au patrimoine UNESCO pour son ensemble architectural XVIIIe exceptionnel. La Cité du Vin est un musée immersif spectaculaire, la Place de la Bourse se reflète dans le miroir d'eau géant, et le Médoc, Saint-Émilion et Sauternes sont à portée de vélo. Depuis l'arrivée du TGV en 2017 (2h de Paris), la ville est devenue l'une des plus tendance de France.",
      wikipedia: "Bordeaux",
      tags: ["Vin", "Architecture", "UNESCO", "Gastronomie", "Culture", "Histoire", "Vélo"],
      mustSee: [
        { name: "Cité du Vin — musée immersif dédié aux civilisations du vin", wikipedia: "Cité_du_Vin" },
        { name: "Place de la Bourse & Miroir d'Eau — reflet monumental sur l'eau", wikipedia: "Place_de_la_Bourse,_Bordeaux" },
        { name: "Saint-Émilion — village médiéval et vignoble grand cru UNESCO", wikipedia: "File:Saint Émilion, Gironde, France..JPG" },
        { name: "Place des Quinconces", wikipedia: "File:Bordeaux Place des Quinconces 2.jpg" },
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
