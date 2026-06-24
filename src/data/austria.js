export const AUSTRIA = {
  code: "AUT",
  numericId: 40,
  name: "Autriche",
  emoji: "🇦🇹",
  capital: "Vienne",
  language: "Allemand",
  currency: "Euro (EUR)",
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 70,
    budgetMid: 140,
    tripMin: 950,
    tripMid: 1900,
  },
  description:
    "L'Autriche est un joyau au cœur de l'Europe, où la grandeur impériale des Habsbourg se mêle à des paysages alpins à couper le souffle. Vienne, ancienne capitale d'un immense empire, déborde de palais baroques, de cafés mythiques et d'une vie musicale inégalée — de Mozart à Beethoven, de Klimt à Schiele. Salzbourg, Innsbruck et les lacs du Salzkammergut complètent un tableau d'une extraordinaire richesse culturelle et naturelle.",
  bestPeriods: [
    {
      months: "Avr – Jun",
      label: "Idéal",
      color: "#22c55e",
      description:
        "Printemps doux, prairies fleuries, foules encore raisonnables. Parfait pour Vienne et les lacs.",
      icon: "☀️",
    },
    {
      months: "Sep – Oct",
      label: "Très bien",
      color: "#22c55e",
      description:
        "Automne doré, vendanges en Wachau, lumière magnifique sur les Alpes.",
      icon: "🍂",
    },
    {
      months: "Déc – Mar",
      label: "Ski & Noël",
      color: "#f59e0b",
      description:
        "Stations de ski world-class au Tyrol et à Salzbourg. Marchés de Noël somptueux à Vienne.",
      icon: "⛷️",
    },
    {
      months: "Jul – Aoû",
      label: "Haute saison",
      color: "#f59e0b",
      description:
        "Beau temps mais foules importantes dans les sites touristiques et prix en hausse.",
      icon: "🌞",
    },
  ],
  weatherCities: [
    {
      id: "vienna",
      name: "Vienne",
      region: "Autriche orientale — climat continental tempéré",
      data: [
        { month: "Jan", temp: 2, rain: 40, icon: "❄️" },
        { month: "Fév", temp: 3, rain: 40, icon: "❄️" },
        { month: "Mar", temp: 9, rain: 45, icon: "⛅" },
        { month: "Avr", temp: 13, rain: 50, icon: "⛅" },
        { month: "Mai", temp: 18, rain: 65, icon: "☀️" },
        { month: "Jun", temp: 21, rain: 75, icon: "☀️" },
        { month: "Jul", temp: 23, rain: 65, icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 60, icon: "☀️" },
        { month: "Sep", temp: 18, rain: 50, icon: "☀️" },
        { month: "Oct", temp: 13, rain: 45, icon: "⛅" },
        { month: "Nov", temp: 6, rain: 45, icon: "❄️" },
        { month: "Déc", temp: 2, rain: 45, icon: "❄️" },
      ],
    },
    {
      id: "innsbruck",
      name: "Innsbruck",
      region: "Tyrol — vallée alpine, plus de précipitations",
      data: [
        { month: "Jan", temp: 1, rain: 65, icon: "❄️" },
        { month: "Fév", temp: 3, rain: 55, icon: "❄️" },
        { month: "Mar", temp: 8, rain: 65, icon: "❄️" },
        { month: "Avr", temp: 13, rain: 80, icon: "⛅" },
        { month: "Mai", temp: 17, rain: 100, icon: "☀️" },
        { month: "Jun", temp: 20, rain: 125, icon: "☀️" },
        { month: "Jul", temp: 22, rain: 130, icon: "☀️" },
        { month: "Aoû", temp: 22, rain: 115, icon: "☀️" },
        { month: "Sep", temp: 17, rain: 90, icon: "☀️" },
        { month: "Oct", temp: 12, rain: 75, icon: "⛅" },
        { month: "Nov", temp: 5, rain: 70, icon: "❄️" },
        { month: "Déc", temp: 1, rain: 65, icon: "❄️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Vienne",
      region: "Basse-Autriche / Vienne",
      description:
        "Vienne est une ville impériale d'une élégance incomparable, dont les fastes baroques des Habsbourg sont préservés dans chaque rue du premier arrondissement. Le Kunsthistorisches Museum, l'Opéra d'État, le Palais de Schönbrunn et la Sécession viennoise illustrent la densité culturelle unique de la capitale. Les cafés viennois — Landtmann, Schwarzenberg, Central — sont à eux seuls une institution, inscrits au patrimoine culturel immatériel de l'UNESCO.",
      wikipedia: "Vienna",
      tags: ["Culture", "Musique", "Art", "Histoire", "Gastronomie", "Ville"],
      mustSee: [
        {
          name: "Palais de Schönbrunn — résidence d'été des Habsbourg avec 1 441 pièces",
          wikipedia: "Schönbrunn_Palace",
        },
        {
          name: "Kunsthistorisches Museum — l'une des plus grandes collections d'art au monde",
          wikipedia: "File:Kunsthistorisches Museum - Wien.jpg",
        },
        {
          name: "Belvedere — palais baroque abritant Le Baiser de Klimt",
          wikipedia: "Belvedere,_Vienna",
        },
        {
          name: "Opéra de Vienne — temple de la musique classique, visites et spectacles",
          wikipedia: "Vienna_State_Opera",
        },
      ],
    },
    {
      id: 2,
      name: "Salzbourg",
      region: "Land de Salzbourg",
      description:
        "Ville natale de Mozart et décor des tournages de La Mélodie du Bonheur, Salzbourg est l'une des plus belles villes baroques d'Europe. Son centre historique, entièrement classé au patrimoine mondial de l'UNESCO, est dominé par la forteresse de Hohensalzburg surplombant l'Untersberg et la Salzach. Le Festival de Salzbourg, chaque été, est l'un des événements musicaux les plus prestigieux au monde.",
      wikipedia: "Salzburg",
      tags: ["UNESCO", "Musique", "Baroque", "Nature", "Culture", "Ville"],
      mustSee: [
        {
          name: "Forteresse de Hohensalzburg — château médiéval le mieux conservé d'Europe centrale",
          wikipedia: "File:Festung_Hohensalzburg_seen_from_the_West,_Salzburg,_Austria,_20260430_1638_0140.jpg",
        },
        {
          name: "Maison natale de Mozart — musée dans la rue Getreidegasse",
          wikipedia: "File:Salzburg, Getreidegasse 9, Mozarts Geburtshaus.jpg",
        },
        {
          name: "Palais de Mirabell et ses jardins — avec vue sur la forteresse",
          wikipedia: "Mirabell_Palace",
        },
        {
          name: "Hallstatt — village lacustre de conte de fées dans les Alpes autrichiennes",
          wikipedia: "Hallstatt",
        },
      ],
    },
    {
      id: 3,
      name: "Salzkammergut",
      region: "Haute-Autriche / Salzbourg",
      description:
        "La région du Salzkammergut regroupe une soixantaine de lacs alpins d'un bleu vert spectaculaire, nichés entre des sommets calcaires. Hallstatt, village lacustre emblématique, est souvent qualifié de plus beau village du monde et a même inspiré un village entier en Chine. Randonnées, baignades, bateau à voile et mines de sel constituent les attraits de cette région classée au patrimoine mondial de l'UNESCO.",
      wikipedia: "Salzkammergut",
      tags: ["Nature", "UNESCO", "Randonnée", "Lac", "Villages"],
      mustSee: [
        {
          name: "Hallstatt — village lacustre inscrit au patrimoine mondial",
          wikipedia: "Hallstatt",
        },
        {
          name: "Dachstein — massif calcaire avec grottes de glace et via ferrata",
          wikipedia: "File:Wagrain Grießenkareck N-Panorama 20160130.JPG",
        },
        {
          name: "Wolfgangsee — lac aux eaux cristallines, bateaux à vapeur centenaires",
          wikipedia: "Lake_Wolfgang",
        },
        {
          name: "Bad Ischl — ancienne résidence impériale de François-Joseph",
          wikipedia: "Bad_Ischl",
        },
      ],
    },
    {
      id: 4,
      name: "Tyrol & Innsbruck",
      region: "Tyrol",
      description:
        "Innsbruck, capitale du Tyrol, est une ville alpine d'une beauté rare où les toits dorés et les façades colorées de l'Altstadt se détachent sur fond de sommets enneigés. C'est l'une des rares villes au monde où l'on peut skier le matin et visiter des musées l'après-midi. L'Ambras, le Toit d'Or, et les remontées mécaniques du Nordketten permettent d'apprécier toutes les facettes de cette destination alpine.",
      wikipedia: "Innsbruck",
      tags: ["Alpes", "Ski", "Culture", "Randonnée", "Histoire"],
      mustSee: [
        {
          name: "Toit d'Or (Goldenes Dachl) — balcon couvert de 2 657 tuiles dorées du XVe siècle",
          wikipedia: "Goldenes_Dachl",
        },
        {
          name: "Nordkette — accès rapide en téléphérique aux sommets alpins depuis le centre-ville",
          wikipedia: "Nordkette",
        },
        {
          name: "Château d'Ambras — collection d'art Renaissance des Habsbourg du Tyrol",
          wikipedia: "Ambras_Castle",
        },
        {
          name: "Swarovski Kristallwelten — univers de cristal spectaculaire près d'Innsbruck",
          wikipedia: "File:Swarovski Kristallwelten 20 Kristalldom.JPG",
        },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "L'Autriche est légèrement moins chère que la Suisse mais comparable à l'Allemagne et à la France. Vienne reste accessible avec de bons hôtels en milieu de gamme. Les stations de ski du Tyrol sont plus coûteuses, surtout en haute saison.",
    currency: "EUR",
    exchangeRate: "1€ = 1€",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          {
            label: "Auberge de jeunesse / Jugendherberge",
            price: "22–38 €",
            detail: "Très propre et bien équipé dans les grandes villes",
          },
          {
            label: "Hôtel 3 étoiles",
            price: "70–120 €",
            detail: "Chambre double à Vienne ou Salzbourg",
          },
          {
            label: "Hôtel 4 étoiles",
            price: "130–220 €",
            detail: "Hôtels de standing avec spa dans les stations alpines",
          },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          {
            label: "Würstelstand / boulangerie",
            price: "4–8 €",
            detail: "Saucisses grillées et bretzels, street food typiquement autrichien",
          },
          {
            label: "Déjeuner au restaurant (Mittagsmenü)",
            price: "10–16 €",
            detail: "Menu du midi très avantageux dans la plupart des restaurants",
          },
          {
            label: "Dîner + café viennois",
            price: "20–40 €",
            detail: "Wiener Schnitzel, Tafelspitz, Sachertorte au dessert",
          },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          {
            label: "Métro / tram de Vienne (ticket unité)",
            price: "2,40 €",
            detail: "Pass 24h à 8 €, pass semaine à 17,10 €",
          },
          {
            label: "Train ÖBB Vienne–Salzbourg",
            price: "25–70 €",
            detail: "En 2h30, Sparschiene dès 19 € si réservé tôt",
          },
          {
            label: "OBB Nightjet (train de nuit)",
            price: "30–80 €",
            detail: "Réseau de trains de nuit international depuis Vienne",
          },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          {
            label: "Musée à Vienne (KHM, Belvedere…)",
            price: "16–21 €",
            detail: "Nombreux pass combinés disponibles",
          },
          {
            label: "Opéra de Vienne (debout)",
            price: "3–15 €",
            detail: "Places debout vendues 80 min avant le spectacle",
          },
          {
            label: "Téléphérique Nordkette Innsbruck",
            price: "35 €",
            detail: "Aller-retour depuis le centre-ville jusqu'à 2 300 m",
          },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "60–80 €/j",
        desc: "Auberge, Mittagsmenü et street food, transports en commun",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "130–180 €/j",
        desc: "Hôtel 3 étoiles, restaurants le soir, opéra et musées",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Vienne (4j) → Salzkammergut (2j) → Salzbourg (2j) → Innsbruck (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "950 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Vienne", amount: "80–160 €" },
            { label: "Hébergement (9 nuits)", amount: "230–340 €" },
            { label: "Transports locaux + trains", amount: "130–170 €" },
            { label: "Nourriture + boissons", amount: "390–450 €" },
            { label: "Activités + musées", amount: "80–120 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 900 – 2 600 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Vienne", amount: "100–200 €" },
            { label: "Hébergement (9 nuits)", amount: "800–1 100 €" },
            { label: "Transports locaux + trains", amount: "200–280 €" },
            { label: "Nourriture + boissons", amount: "600–750 €" },
            { label: "Activités + opéra", amount: "150–250 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    {
      icon: "✈️",
      label: "Vol depuis Paris",
      value: "Paris–Vienne : 2h de vol. Nombreuses liaisons directes (Air France, Austrian, easyJet). Aussi accessible en train de nuit.",
    },
    {
      icon: "🪪",
      label: "Visa",
      value: "Pas de visa pour les citoyens UE/Schengen. Carte d'identité suffisante.",
    },
    {
      icon: "💰",
      label: "Monnaie",
      value: "Euro (€). CB acceptée dans la plupart des commerces. Avoir du liquide pour les marchés et petits villages.",
    },
    {
      icon: "🗣️",
      label: "Langue",
      value: "Allemand autrichien. Anglais très bien parlé à Vienne et dans les zones touristiques.",
    },
    {
      icon: "🔌",
      label: "Prise électrique",
      value: "Type F (Schuko, 2 broches rondes). 230V / 50Hz. Compatible avec les prises françaises.",
    },
    {
      icon: "💊",
      label: "Santé",
      value: "Soins médicaux excellents. Carte Européenne d'Assurance Maladie valable pour les ressortissants UE.",
    },
    {
      icon: "☕",
      label: "Café viennois",
      value: "Le café viennois est inscrit au patrimoine immatériel de l'UNESCO. Un Melange (avec lait) ou un Einspänner (avec crème) s'impose.",
    },
    {
      icon: "🎼",
      label: "Musique classique",
      value: "Réserver billets d'opéra et concerts en avance. Places debout disponibles le soir même pour un prix symbolique.",
    },
  ],
};
