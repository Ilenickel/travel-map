export const AUSTRIA = {
  code: "AUT",
  numericId: 40,
  name: { fr: "Autriche", en: "Austria" },
  emoji: "🇦🇹",
  capital: { fr: "Vienne", en: "Vienna" },
  language: { fr: "Allemand", en: "German" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 70,
    budgetMid: 140,
    tripMin: 950,
    tripMid: 1900,
  },
  description: {
    fr: "L'Autriche est un joyau au cœur de l'Europe, où la grandeur impériale des Habsbourg se mêle à des paysages alpins à couper le souffle. Vienne, ancienne capitale d'un immense empire, déborde de palais baroques, de cafés mythiques et d'une vie musicale inégalée — de Mozart à Beethoven, de Klimt à Schiele. Salzbourg, Innsbruck et les lacs du Salzkammergut complètent un tableau d'une extraordinaire richesse culturelle et naturelle.",
    en: "Austria is a jewel at the heart of Europe, where the imperial grandeur of the Habsburgs blends with breathtaking Alpine landscapes. Vienna, the former capital of a vast empire, overflows with baroque palaces, legendary cafés and an unmatched musical heritage — from Mozart to Beethoven, from Klimt to Schiele. Salzburg, Innsbruck and the lakes of the Salzkammergut complete a picture of extraordinary cultural and natural richness.",
  },
  bestPeriods: [
    {
      months: { fr: "Avr – Jun", en: "Apr – Jun" },
      label: { fr: "Idéal", en: "Ideal" },
      color: "#22c55e",
      description: {
        fr: "Printemps doux, prairies fleuries, foules encore raisonnables. Parfait pour Vienne et les lacs.",
        en: "Mild spring, blooming meadows, crowds still reasonable. Perfect for Vienna and the lakes.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Sep – Oct", en: "Sep – Oct" },
      label: { fr: "Très bien", en: "Very good" },
      color: "#22c55e",
      description: {
        fr: "Automne doré, vendanges en Wachau, lumière magnifique sur les Alpes.",
        en: "Golden autumn, grape harvest in the Wachau, magnificent light over the Alps.",
      },
      icon: "🍂",
    },
    {
      months: { fr: "Déc – Mar", en: "Dec – Mar" },
      label: { fr: "Ski & Noël", en: "Skiing & Christmas" },
      color: "#f59e0b",
      description: {
        fr: "Stations de ski world-class au Tyrol et à Salzbourg. Marchés de Noël somptueux à Vienne.",
        en: "World-class ski resorts in Tyrol and around Salzburg. Sumptuous Christmas markets in Vienna.",
      },
      icon: "⛷️",
    },
    {
      months: { fr: "Jul – Aoû", en: "Jul – Aug" },
      label: { fr: "Haute saison", en: "High season" },
      color: "#f59e0b",
      description: {
        fr: "Beau temps mais foules importantes dans les sites touristiques et prix en hausse.",
        en: "Fine weather but large crowds at tourist sites and higher prices.",
      },
      icon: "🌞",
    },
  ],
  weatherCities: [
    {
      id: "vienna",
      name: "Vienne",
      region: { fr: "Autriche orientale — climat continental tempéré", en: "Eastern Austria — temperate continental climate" },
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
      region: { fr: "Tyrol — vallée alpine, plus de précipitations", en: "Tyrol — alpine valley, higher rainfall" },
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
      region: { fr: "Basse-Autriche / Vienne", en: "Lower Austria / Vienna" },
      description: {
        fr: "Vienne est une ville impériale d'une élégance incomparable, dont les fastes baroques des Habsbourg sont préservés dans chaque rue du premier arrondissement. Le Kunsthistorisches Museum, l'Opéra d'État, le Palais de Schönbrunn et la Sécession viennoise illustrent la densité culturelle unique de la capitale. Les cafés viennois — Landtmann, Schwarzenberg, Central — sont à eux seuls une institution, inscrits au patrimoine culturel immatériel de l'UNESCO.",
        en: "Vienna is an imperial city of incomparable elegance, whose baroque Habsburg splendour is preserved in every street of the first district. The Kunsthistorisches Museum, the State Opera, Schönbrunn Palace and the Vienna Secession illustrate the capital's unique cultural density. Viennese cafés — Landtmann, Schwarzenberg, Central — are an institution in themselves, inscribed on UNESCO's intangible cultural heritage list.",
      },
      wikipedia: "Vienna",
      tags: ["Culture", "Musique", "Art", "Histoire", "Gastronomie", "Ville"],
      mustSee: [
        {
          name: { fr: "Palais de Schönbrunn — résidence d'été des Habsbourg avec 1 441 pièces", en: "Schönbrunn Palace — Habsburg summer residence with 1,441 rooms" },
          wikipedia: "Schönbrunn_Palace",
        },
        {
          name: { fr: "Kunsthistorisches Museum — l'une des plus grandes collections d'art au monde", en: "Kunsthistorisches Museum — one of the largest art collections in the world" },
          wikipedia: "File:Kunsthistorisches Museum - Wien.jpg",
        },
        {
          name: { fr: "Belvedere — palais baroque abritant Le Baiser de Klimt", en: "Belvedere — baroque palace housing Klimt's The Kiss" },
          wikipedia: "Belvedere,_Vienna",
        },
        {
          name: { fr: "Opéra de Vienne — temple de la musique classique, visites et spectacles", en: "Vienna State Opera — temple of classical music, tours and performances" },
          wikipedia: "Vienna_State_Opera",
        },
      ],
    },
    {
      id: 2,
      name: "Salzbourg",
      region: { fr: "Land de Salzbourg", en: "State of Salzburg" },
      description: {
        fr: "Ville natale de Mozart et décor des tournages de La Mélodie du Bonheur, Salzbourg est l'une des plus belles villes baroques d'Europe. Son centre historique, entièrement classé au patrimoine mondial de l'UNESCO, est dominé par la forteresse de Hohensalzburg surplombant l'Untersberg et la Salzach. Le Festival de Salzbourg, chaque été, est l'un des événements musicaux les plus prestigieux au monde.",
        en: "Mozart's birthplace and the filming location of The Sound of Music, Salzburg is one of Europe's most beautiful baroque cities. Its historic centre, entirely listed as a UNESCO World Heritage site, is dominated by the Hohensalzburg Fortress overlooking the Untersberg and the Salzach river. The Salzburg Festival, held every summer, is one of the most prestigious musical events in the world.",
      },
      wikipedia: "Salzburg",
      tags: ["UNESCO", "Musique", "Baroque", "Nature", "Culture", "Ville"],
      mustSee: [
        {
          name: { fr: "Forteresse de Hohensalzburg — château médiéval le mieux conservé d'Europe centrale", en: "Hohensalzburg Fortress — the best-preserved medieval castle in Central Europe" },
          wikipedia: "File:Festung_Hohensalzburg_seen_from_the_West,_Salzburg,_Austria,_20260430_1638_0140.jpg",
        },
        {
          name: { fr: "Maison natale de Mozart — musée dans la rue Getreidegasse", en: "Mozart's Birthplace — museum on Getreidegasse street" },
          wikipedia: "File:Salzburg, Getreidegasse 9, Mozarts Geburtshaus.jpg",
        },
        {
          name: { fr: "Palais de Mirabell et ses jardins — avec vue sur la forteresse", en: "Mirabell Palace and its gardens — with a view of the fortress" },
          wikipedia: "Mirabell_Palace",
        },
        {
          name: { fr: "Hallstatt — village lacustre de conte de fées dans les Alpes autrichiennes", en: "Hallstatt — fairy-tale lakeside village in the Austrian Alps" },
          wikipedia: "Hallstatt",
        },
      ],
    },
    {
      id: 3,
      name: "Salzkammergut",
      region: { fr: "Haute-Autriche / Salzbourg", en: "Upper Austria / Salzburg" },
      description: {
        fr: "La région du Salzkammergut regroupe une soixantaine de lacs alpins d'un bleu vert spectaculaire, nichés entre des sommets calcaires. Hallstatt, village lacustre emblématique, est souvent qualifié de plus beau village du monde et a même inspiré un village entier en Chine. Randonnées, baignades, bateau à voile et mines de sel constituent les attraits de cette région classée au patrimoine mondial de l'UNESCO.",
        en: "The Salzkammergut region is home to some sixty Alpine lakes of a spectacular blue-green colour, nestled among limestone peaks. Hallstatt, the emblematic lakeside village, is often called the most beautiful village in the world and even inspired an entire replica village in China. Hiking, swimming, sailing and salt mines are the highlights of this region listed as a UNESCO World Heritage site.",
      },
      wikipedia: "Salzkammergut",
      tags: ["Nature", "UNESCO", "Randonnée", "Lac", "Villages"],
      mustSee: [
        {
          name: { fr: "Hallstatt — village lacustre inscrit au patrimoine mondial", en: "Hallstatt — lakeside village listed as a World Heritage site" },
          wikipedia: "Hallstatt",
        },
        {
          name: { fr: "Dachstein — massif calcaire avec grottes de glace et via ferrata", en: "Dachstein — limestone massif with ice caves and via ferrata" },
          wikipedia: "File:Wagrain Grießenkareck N-Panorama 20160130.JPG",
        },
        {
          name: { fr: "Wolfgangsee — lac aux eaux cristallines, bateaux à vapeur centenaires", en: "Wolfgangsee — lake with crystal-clear waters, century-old steamboats" },
          wikipedia: "Lake_Wolfgang",
        },
        {
          name: { fr: "Bad Ischl — ancienne résidence impériale de François-Joseph", en: "Bad Ischl — former imperial residence of Franz Joseph" },
          wikipedia: "Bad_Ischl",
        },
      ],
    },
    {
      id: 4,
      name: { fr: "Tyrol & Innsbruck", en: "Tyrol & Innsbruck" },
      region: { fr: "Tyrol", en: "Tyrol" },
      description: {
        fr: "Innsbruck, capitale du Tyrol, est une ville alpine d'une beauté rare où les toits dorés et les façades colorées de l'Altstadt se détachent sur fond de sommets enneigés. C'est l'une des rares villes au monde où l'on peut skier le matin et visiter des musées l'après-midi. L'Ambras, le Toit d'Or, et les remontées mécaniques du Nordketten permettent d'apprécier toutes les facettes de cette destination alpine.",
        en: "Innsbruck, the capital of Tyrol, is an Alpine city of rare beauty where the golden roofs and colourful facades of the Altstadt stand out against a backdrop of snow-capped peaks. It is one of the few cities in the world where you can ski in the morning and visit museums in the afternoon. Ambras Castle, the Golden Roof, and the Nordkette cable cars let visitors enjoy every facet of this Alpine destination.",
      },
      wikipedia: "Innsbruck",
      tags: ["Alpes", "Ski", "Culture", "Randonnée", "Histoire"],
      mustSee: [
        {
          name: { fr: "Toit d'Or (Goldenes Dachl) — balcon couvert de 2 657 tuiles dorées du XVe siècle", en: "Golden Roof (Goldenes Dachl) — 15th-century balcony covered with 2,657 gilded tiles" },
          wikipedia: "Goldenes_Dachl",
        },
        {
          name: { fr: "Nordkette — accès rapide en téléphérique aux sommets alpins depuis le centre-ville", en: "Nordkette — quick cable car access to Alpine peaks from the city centre" },
          wikipedia: "Nordkette",
        },
        {
          name: { fr: "Château d'Ambras — collection d'art Renaissance des Habsbourg du Tyrol", en: "Ambras Castle — Renaissance art collection of the Tyrolean Habsburgs" },
          wikipedia: "Ambras_Castle",
        },
        {
          name: { fr: "Swarovski Kristallwelten — univers de cristal spectaculaire près d'Innsbruck", en: "Swarovski Kristallwelten — spectacular crystal world near Innsbruck" },
          wikipedia: "File:Swarovski Kristallwelten 20 Kristalldom.JPG",
        },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "L'Autriche est légèrement moins chère que la Suisse mais comparable à l'Allemagne et à la France. Vienne reste accessible avec de bons hôtels en milieu de gamme. Les stations de ski du Tyrol sont plus coûteuses, surtout en haute saison.",
      en: "Austria is slightly cheaper than Switzerland but comparable to Germany and France. Vienna remains affordable with good mid-range hotels. Tyrol's ski resorts are more expensive, especially in high season.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          {
            label: { fr: "Auberge de jeunesse / Jugendherberge", en: "Youth hostel / Jugendherberge" },
            price: "22–38 €",
            detail: { fr: "Très propre et bien équipé dans les grandes villes", en: "Very clean and well equipped in major cities" },
          },
          {
            label: { fr: "Hôtel 3 étoiles", en: "3-star hotel" },
            price: "70–120 €",
            detail: { fr: "Chambre double à Vienne ou Salzbourg", en: "Double room in Vienna or Salzburg" },
          },
          {
            label: { fr: "Hôtel 4 étoiles", en: "4-star hotel" },
            price: "130–220 €",
            detail: { fr: "Hôtels de standing avec spa dans les stations alpines", en: "Upscale hotels with spa in Alpine resorts" },
          },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          {
            label: { fr: "Würstelstand / boulangerie", en: "Würstelstand / bakery" },
            price: "4–8 €",
            detail: { fr: "Saucisses grillées et bretzels, street food typiquement autrichien", en: "Grilled sausages and pretzels, typically Austrian street food" },
          },
          {
            label: { fr: "Déjeuner au restaurant (Mittagsmenü)", en: "Lunch at a restaurant (Mittagsmenü)" },
            price: "10–16 €",
            detail: { fr: "Menu du midi très avantageux dans la plupart des restaurants", en: "Very good-value lunch menu in most restaurants" },
          },
          {
            label: { fr: "Dîner + café viennois", en: "Dinner + Viennese coffee" },
            price: "20–40 €",
            detail: { fr: "Wiener Schnitzel, Tafelspitz, Sachertorte au dessert", en: "Wiener Schnitzel, Tafelspitz, Sachertorte for dessert" },
          },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          {
            label: { fr: "Métro / tram de Vienne (ticket unité)", en: "Vienna metro / tram (single ticket)" },
            price: "2,40 €",
            detail: { fr: "Pass 24h à 8 €, pass semaine à 17,10 €", en: "24h pass at 8 €, weekly pass at 17.10 €" },
          },
          {
            label: { fr: "Train ÖBB Vienne–Salzbourg", en: "ÖBB train Vienna–Salzburg" },
            price: "25–70 €",
            detail: { fr: "En 2h30, Sparschiene dès 19 € si réservé tôt", en: "2h30 journey, Sparschiene fares from 19 € if booked early" },
          },
          {
            label: { fr: "OBB Nightjet (train de nuit)", en: "ÖBB Nightjet (night train)" },
            price: "30–80 €",
            detail: { fr: "Réseau de trains de nuit international depuis Vienne", en: "International night train network from Vienna" },
          },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          {
            label: { fr: "Musée à Vienne (KHM, Belvedere…)", en: "Museum in Vienna (KHM, Belvedere…)" },
            price: "16–21 €",
            detail: { fr: "Nombreux pass combinés disponibles", en: "Many combined passes available" },
          },
          {
            label: { fr: "Opéra de Vienne (debout)", en: "Vienna Opera (standing room)" },
            price: "3–15 €",
            detail: { fr: "Places debout vendues 80 min avant le spectacle", en: "Standing tickets sold 80 min before the show" },
          },
          {
            label: { fr: "Téléphérique Nordkette Innsbruck", en: "Nordkette cable car, Innsbruck" },
            price: "35 €",
            detail: { fr: "Aller-retour depuis le centre-ville jusqu'à 2 300 m", en: "Return trip from the city centre up to 2,300 m" },
          },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker" },
        daily: "60–80 €/j",
        desc: { fr: "Auberge, Mittagsmenü et street food, transports en commun", en: "Hostel, Mittagsmenü and street food, public transport" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort" },
        daily: "130–180 €/j",
        desc: { fr: "Hôtel 3 étoiles, restaurants le soir, opéra et musées", en: "3-star hotel, evening restaurants, opera and museums" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Vienne (4j) → Salzkammergut (2j) → Salzbourg (2j) → Innsbruck (2j)",
        en: "Vienna (4d) → Salzkammergut (2d) → Salzburg (2d) → Innsbruck (2d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "950 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Vienne", en: "Return flight Paris–Vienna" }, amount: "80–160 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)" }, amount: "230–340 €" },
            { label: { fr: "Transports locaux + trains", en: "Local transport + trains" }, amount: "130–170 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "390–450 €" },
            { label: { fr: "Activités + musées", en: "Activities + museums" }, amount: "80–120 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 900 – 2 600 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Vienne", en: "Return flight Paris–Vienna" }, amount: "100–200 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)" }, amount: "800–1 100 €" },
            { label: { fr: "Transports locaux + trains", en: "Local transport + trains" }, amount: "200–280 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "600–750 €" },
            { label: { fr: "Activités + opéra", en: "Activities + opera" }, amount: "150–250 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    {
      icon: "✈️",
      label: { fr: "Vol depuis Paris", en: "Flight from Paris" },
      value: {
        fr: "Paris–Vienne : 2h de vol. Nombreuses liaisons directes (Air France, Austrian, easyJet). Aussi accessible en train de nuit.",
        en: "Paris–Vienna: 2h flight. Many direct connections (Air France, Austrian, easyJet). Also accessible by night train.",
      },
    },
    {
      icon: "🪪",
      label: { fr: "Visa", en: "Visa" },
      value: {
        fr: "Pas de visa pour les citoyens UE/Schengen. Carte d'identité suffisante.",
        en: "No visa required for EU/Schengen citizens. An ID card is sufficient.",
      },
    },
    {
      icon: "💰",
      label: { fr: "Monnaie", en: "Currency" },
      value: {
        fr: "Euro (€). CB acceptée dans la plupart des commerces. Avoir du liquide pour les marchés et petits villages.",
        en: "Euro (€). Cards accepted in most shops. Carry cash for markets and small villages.",
      },
    },
    {
      icon: "🗣️",
      label: { fr: "Langue", en: "Language" },
      value: {
        fr: "Allemand autrichien. Anglais très bien parlé à Vienne et dans les zones touristiques.",
        en: "Austrian German. English is widely spoken in Vienna and tourist areas.",
      },
    },
    {
      icon: "🔌",
      label: { fr: "Prise électrique", en: "Power outlet" },
      value: {
        fr: "Type F (Schuko, 2 broches rondes). 230V / 50Hz. Compatible avec les prises françaises.",
        en: "Type F (Schuko, 2 round pins). 230V / 50Hz. Compatible with French plugs.",
      },
    },
    {
      icon: "💊",
      label: { fr: "Santé", en: "Health" },
      value: {
        fr: "Soins médicaux excellents. Carte Européenne d'Assurance Maladie valable pour les ressortissants UE.",
        en: "Excellent healthcare. European Health Insurance Card valid for EU nationals.",
      },
    },
    {
      icon: "☕",
      label: { fr: "Café viennois", en: "Viennese coffee" },
      value: {
        fr: "Le café viennois est inscrit au patrimoine immatériel de l'UNESCO. Un Melange (avec lait) ou un Einspänner (avec crème) s'impose.",
        en: "Viennese coffee culture is listed on UNESCO's intangible heritage list. A Melange (with milk) or an Einspänner (with cream) is a must.",
      },
    },
    {
      icon: "🎼",
      label: { fr: "Musique classique", en: "Classical music" },
      value: {
        fr: "Réserver billets d'opéra et concerts en avance. Places debout disponibles le soir même pour un prix symbolique.",
        en: "Book opera and concert tickets in advance. Standing-room tickets are available the same evening for a symbolic price.",
      },
    },
  ],
};
