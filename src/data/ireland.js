export const IRELAND = {
  code: "IRL",
  numericId: 372,
  name: { fr: "Irlande", en: "Ireland" },
  emoji: "🇮🇪",
  capital: { fr: "Dublin", en: "Dublin" },
  language: { fr: "Anglais, Irlandais (gaélique)", en: "English, Irish (Gaelic)" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)" },
  timezone: "UTC+0 (été UTC+1)",
  filter: {
    budgetMin: 85, budgetMid: 160,
    tripMin: 1100, tripMid: 2200,
  },
  description: {
    fr: "L'Irlande est une île d'émeraude au caractère sauvage, connue pour ses falaises spectaculaires, ses pubs chaleureux et sa tradition de contes et de musique celtique. Dublin mêle patrimoine victorien, culture littéraire (Joyce, Beckett, Wilde) et scène nocturne animée autour du Temple Bar. Les paysages du Connemara, de l'anneau du Kerry et des falaises de Moher offrent des panoramas d'une beauté saisissante.",
    en: "Known as the Emerald Isle for its wild, green character, Ireland is famous for its dramatic cliffs, welcoming pubs and deep tradition of storytelling and Celtic music. Dublin blends Victorian heritage, a literary legacy shaped by Joyce, Beckett and Wilde, and a lively nightlife scene around Temple Bar. The landscapes of Connemara, the Ring of Kerry and the Cliffs of Moher deliver breathtaking views at every turn.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Septembre", en: "May – September" },
      label: { fr: "Été irlandais", en: "Irish summer" },
      color: "#22c55e",
      description: {
        fr: "La meilleure période pour profiter des paysages verts et des longues journées claires. Les températures restent fraîches (14–18 °C) mais le soleil est présent. Juin et juillet sont idéaux pour le Ring of Kerry et les falaises de Moher.",
        en: "The best time to enjoy the green landscapes and long, bright days. Temperatures stay cool (14–18°C), but the sunshine is more reliable. June and July are ideal for the Ring of Kerry and the Cliffs of Moher.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Mars", en: "March" },
      label: { fr: "Saint-Patrick", en: "St Patrick's Day" },
      color: "#f59e0b",
      description: {
        fr: "Le 17 mars, toute l'Irlande célèbre la Saint-Patrick avec des défilés, de la musique et une ambiance festive incomparable, notamment à Dublin. Période très animée mais hébergements à réserver bien à l'avance.",
        en: "On 17 March, Ireland comes alive for St Patrick's Day, with parades, music and a festive atmosphere that is hard to match, especially in Dublin. It is an exciting time to visit, but accommodation should be booked well in advance.",
      },
      icon: "🍀",
    },
  ],

  weatherCities: [
    {
      id: "dublin",
      name: "Dublin",
      region: { fr: "Leinster", en: "Leinster" },
      data: [
        { month: "Jan", temp: 7, rain: 80, icon: "❄️" },
        { month: "Fév", temp: 7, rain: 65, icon: "❄️" },
        { month: "Mar", temp: 9, rain: 70, icon: "⛅" },
        { month: "Avr", temp: 11, rain: 55, icon: "⛅" },
        { month: "Mai", temp: 14, rain: 60, icon: "⛅" },
        { month: "Jun", temp: 17, rain: 65, icon: "☀️" },
        { month: "Jul", temp: 19, rain: 70, icon: "☀️" },
        { month: "Aoû", temp: 19, rain: 75, icon: "☀️" },
        { month: "Sep", temp: 17, rain: 75, icon: "☀️" },
        { month: "Oct", temp: 13, rain: 85, icon: "⛅" },
        { month: "Nov", temp: 9, rain: 80, icon: "⛅" },
        { month: "Déc", temp: 7, rain: 80, icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Dublin", en: "Dublin" },
      region: { fr: "Leinster", en: "Leinster" },
      description: {
        fr: "Capitale animée et conviviale, Dublin est le cœur littéraire et musical de l'Irlande. Le quartier du Temple Bar avec ses pubs traditionnels, Trinity College abritant le Livre de Kells, et le Chester Beatty Library en font une ville d'une richesse culturelle insoupçonnée. La scène des pubs irlandais avec leur musique live est une expérience unique en Europe.",
        en: "Lively and welcoming, Dublin is Ireland's literary and musical heart. Temple Bar, with its traditional pubs, Trinity College, home to the Book of Kells, and the Chester Beatty Library reveal a city of unexpected cultural depth. The Irish pub scene, especially live music nights, is a uniquely memorable European experience.",
      },
      wikipedia: "Dublin",
      tags: ["Ville", "Culture", "Pubs", "Littérature", "Histoire", "Gastronomie", "Architecture"],
      mustSee: [
        { name: { fr: "Trinity College et Livre de Kells — manuscrit enluminé du VIIIe siècle", en: "Trinity College and the Book of Kells — an illuminated 8th-century manuscript" }, wikipedia: "Book_of_Kells" },
        { name: { fr: "Temple Bar — quartier des pubs et de la vie nocturne", en: "Temple Bar — the pub and nightlife district" }, wikipedia: "File:Temple Bar at Dusk 4.jpg" },
        { name: { fr: "Guinness Storehouse — histoire de la célèbre bière irlandaise", en: "Guinness Storehouse — the story of Ireland's most famous beer" }, wikipedia: "Guinness_Storehouse" },
        { name: { fr: "Château de Dublin — cœur historique de la ville depuis le XIIIe siècle", en: "Dublin Castle — the city's historic core since the 13th century" }, wikipedia: "Dublin_Castle" },
      ],
    },
    {
      id: 2,
      name: { fr: "Anneau du Kerry", en: "Ring of Kerry" },
      region: { fr: "Munster", en: "Munster" },
      description: {
        fr: "Le Ring of Kerry est l'un des circuits panoramiques les plus célèbres d'Europe, serpentant sur 179 km autour de la péninsule d'Iveragh. Lacs de Killarney, îles Skellig (lieu de tournage de Star Wars), villages côtiers et montagnes forment un paysage d'une beauté grandiose. Killarney est la base idéale pour explorer cette région.",
        en: "The Ring of Kerry is one of Europe's best-known scenic drives, winding for 179 km around the Iveragh Peninsula. The Lakes of Killarney, the Skellig islands, coastal villages and mountains combine to create a landscape of sweeping beauty. Killarney is the ideal base for exploring the region.",
      },
      wikipedia: "Ring_of_Kerry",
      tags: ["Paysage", "Nature", "Côte", "Péninsule", "Randonnée"],
      mustSee: [
        { name: { fr: "Skellig Michael — monastère médiéval sur un rocher en pleine mer", en: "Skellig Michael — a medieval monastery on an offshore rock" }, wikipedia: "Skellig_Michael" },
        { name: { fr: "Lacs de Killarney — parc national aux paysages enchanteurs", en: "Lakes of Killarney — a national park with enchanting scenery" }, wikipedia: "Killarney_National_Park" },
        { name: { fr: "Gap of Dunloe — gorge spectaculaire dans les MacGillycuddy's Reeks", en: "Gap of Dunloe — a dramatic pass through the MacGillycuddy's Reeks" }, wikipedia: "Gap_of_Dunloe" },
        { name: { fr: "Torc Waterfall — cascade romantique dans la forêt de Killarney", en: "Torc Waterfall — a romantic waterfall in Killarney Forest" }, wikipedia: "Torc_Waterfall" },
      ],
    },
    {
      id: 3,
      name: { fr: "Falaises de Moher", en: "Cliffs of Moher" },
      region: { fr: "Connacht", en: "Connacht" },
      description: {
        fr: "Les falaises de Moher s'élèvent à 214 mètres au-dessus de l'Atlantique sur 8 km de côte sauvage dans le comté de Clare. Elles constituent le site naturel le plus visité d'Irlande et offrent des vues spectaculaires sur les îles d'Aran et le Connemara. La région du Burren, plateau calcaire unique en Europe, se trouve à proximité.",
        en: "The Cliffs of Moher rise 214 metres above the Atlantic along 8 km of rugged coastline in County Clare. They are Ireland's most visited natural attraction and offer spectacular views of the Aran Islands and Connemara. Nearby, the Burren — a limestone plateau unlike anywhere else in Europe — is well worth exploring too.",
      },
      wikipedia: "Cliffs_of_Moher",
      tags: ["Nature", "Falaises", "UNESCO", "Atlantique", "Randonnée"],
      mustSee: [
        { name: { fr: "Tour O'Brien — tour de guet victorienne au sommet des falaises", en: "O'Brien's Tower — a Victorian lookout at the cliff top" }, wikipedia: "O'Brien's_Tower" },
        { name: { fr: "Le Burren — paysage karstique unique avec flore méditerranéenne", en: "The Burren — a unique karst landscape with Mediterranean flora" }, wikipedia: "The_Burren" },
        { name: { fr: "Îles d'Aran — Inis Mór et ses forts préhistoriques", en: "Aran Islands — Inis Mór and its prehistoric forts" }, wikipedia: "File:Aran Islands, Ireland, Estate 2019 01.jpg" },
        { name: { fr: "Doolin — village traditionnel réputé pour sa musique celtique live", en: "Doolin — a traditional village famous for live Celtic music" }, wikipedia: "Doolin" },
      ],
    },
    {
      id: 4,
      name: { fr: "Chaussée des Géants", en: "Giant's Causeway" },
      region: { fr: "Ulster (Irlande du Nord)", en: "Ulster (Northern Ireland)" },
      description: {
        fr: "La Chaussée des Géants est une formation géologique spectaculaire de 40 000 colonnes de basalte hexagonales s'avançant dans la mer d'Irlande, classée au patrimoine mondial de l'UNESCO. Selon la légende, le géant Finn McCool l'aurait construite pour rejoindre l'Écosse. Elle se situe en Irlande du Nord, accessible facilement depuis Dublin.",
        en: "The Giant's Causeway is a spectacular geological formation of 40,000 hexagonal basalt columns stretching into the Irish Sea, and a UNESCO World Heritage Site. Legend says the giant Finn McCool built it to reach Scotland. It lies in Northern Ireland and is easy to reach from Dublin.",
      },
      wikipedia: "Giant's_Causeway",
      tags: ["UNESCO", "Géologie", "Légende", "Nature"],
      mustSee: [
        { name: { fr: "Chaussée des Géants — colonnes basaltiques hexagonales classées UNESCO", en: "Giant's Causeway — UNESCO-listed hexagonal basalt columns" }, wikipedia: "Giant's_Causeway" },
        { name: { fr: "Château de Dunluce — ruines médiévales perchées sur une falaise", en: "Dunluce Castle — medieval ruins perched on a cliff" }, wikipedia: "Dunluce_Castle" },
        { name: { fr: "Dark Hedges — avenue d'hêtres tordus célèbre par Game of Thrones", en: "The Dark Hedges — the twisted beech avenue made famous by Game of Thrones" }, wikipedia: "Dark_Hedges" },
        { name: { fr: "Rope Bridge de Carrick-a-Rede — pont de corde suspendu au-dessus de la mer", en: "Carrick-a-Rede Rope Bridge — a rope bridge suspended above the sea" }, wikipedia: "File:Carrick-a-Rede Rope bridge-20120829.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Irlande est l'un des pays les plus chers d'Europe de l'Ouest, notamment Dublin où l'hébergement et la restauration ont des prix élevés. Hors capitale, les coûts baissent sensiblement. La livre sterling est utilisée en Irlande du Nord.",
      en: "Ireland is one of the more expensive countries in Western Europe, especially in Dublin, where accommodation and dining are costly. Outside the capital, prices drop noticeably. Northern Ireland uses the British pound.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Auberge de jeunesse (dortoir)", en: "Hostel dorm" }, price: "30–50 €", detail: { fr: "Bonnes auberges à Dublin et dans les villes de campagne", en: "Good hostels in Dublin and across the countryside" } },
          { label: { fr: "B&B irlandais", en: "Irish B&B" }, price: "70–110 €", detail: { fr: "Bed & Breakfast chaleureux, petit-déjeuner irlandais inclus", en: "Warm bed-and-breakfast stays with an Irish breakfast included" } },
          { label: { fr: "Hôtel confort 3–4 étoiles", en: "3–4 star comfort hotel" }, price: "130–200 €", detail: { fr: "Hôtels de charme à Dublin ou dans les comtés ruraux", en: "Boutique hotels in Dublin or in rural counties" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Sandwich / fish & chips", en: "Sandwich / fish & chips" }, price: "8–14 €", detail: { fr: "Repas rapide dans un pub ou une friterie", en: "Quick meal in a pub or chip shop" } },
          { label: { fr: "Pub lunch (plat du jour)", en: "Pub lunch (daily special)" }, price: "14–22 €", detail: { fr: "Irish stew, shepherd's pie ou chowder de fruits de mer", en: "Irish stew, shepherd's pie or seafood chowder" } },
          { label: { fr: "Restaurant dîner", en: "Dinner restaurant" }, price: "28–50 €", detail: { fr: "Cuisine irlandaise moderne, fruits de mer frais", en: "Modern Irish cooking and fresh seafood" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus Dublin (trajet Leap Card)", en: "Dublin bus (Leap Card fare)" }, price: "1,60–2,50 €", detail: { fr: "Réseau Dublin Bus, tarif réduit avec carte Leap", en: "Dublin Bus network, discounted fare with a Leap Card" } },
          { label: { fr: "Train Dublin–Cork ou Galway", en: "Train Dublin–Cork or Galway" }, price: "20–50 €", detail: { fr: "Irish Rail, 2h30 à 3h selon la destination", en: "Irish Rail, roughly 2h30 to 3h depending on the route" } },
          { label: { fr: "Location de voiture (journée)", en: "Car rental (per day)" }, price: "40–70 €", detail: { fr: "Indispensable pour explorer le Ring of Kerry ou le Connemara", en: "Essential for exploring the Ring of Kerry or Connemara" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Entrée Chaussée des Géants", en: "Giant's Causeway entry" }, price: "16–19 €", detail: { fr: "Accès au site avec centre d'accueil (tarifs en livres sterling, Irlande du Nord)", en: "Site access with visitor centre (prices in pounds, Northern Ireland)" } },
          { label: { fr: "Musée national d'Irlande", en: "National Museum of Ireland" }, price: "Gratuit", detail: { fr: "Archéologie, art et histoire irlandaise à Dublin", en: "Irish archaeology, art and history in Dublin" } },
          { label: { fr: "Bateau vers Skellig Michael", en: "Boat trip to Skellig Michael" }, price: "80–110 €", detail: { fr: "Excursion d'une journée depuis Portmagee", en: "Full-day excursion from Portmagee" } },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker" },
        daily: "85–115 €/j",
        desc: {
          fr: "Auberge, pubs abordables, bus et trains, quelques entrées payantes",
          en: "Hostels, affordable pubs, buses and trains, plus a few paid attractions",
        },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort" },
        daily: "160–220 €/j",
        desc: {
          fr: "B&B charme, repas en restaurant, location de voiture, activités guidées",
          en: "Boutique B&Bs, restaurant meals, car rental and guided activities",
        },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days" },
      route: {
        fr: "Dublin – Galway – Falaises de Moher – Ring of Kerry – Cork",
        en: "Dublin – Galway – Cliffs of Moher – Ring of Kerry – Cork",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "750 – 1 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Dublin", en: "Return flight Paris–Dublin" }, amount: "80–150 €" },
            { label: { fr: "Hébergement (7 nuits)", en: "Accommodation (7 nights)" }, amount: "210–350 €" },
            { label: { fr: "Transports locaux + location voiture", en: "Local transport + car rental" }, amount: "150–220 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "250–350 €" },
            { label: { fr: "Activités + entrées", en: "Activities + entry fees" }, amount: "60–100 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 500 – 2 100 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Dublin", en: "Return flight Paris–Dublin" }, amount: "120–200 €" },
            { label: { fr: "Hébergement (7 nuits)", en: "Accommodation (7 nights)" }, amount: "560–840 €" },
            { label: { fr: "Transports locaux + location voiture", en: "Local transport + car rental" }, amount: "250–350 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "420–600 €" },
            { label: { fr: "Activités + excursions", en: "Activities + excursions" }, amount: "150–250 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "1h30 de vol direct vers Dublin depuis CDG ou Orly", en: "A direct flight to Dublin takes about 1h30 from CDG or Orly" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Aucun visa requis — l'Irlande n'est pas dans Schengen mais accepte les ressortissants UE", en: "No visa required — Ireland is not in Schengen, but EU citizens are admitted" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Euro (€) en République d'Irlande — livre sterling (£) en Irlande du Nord", en: "Euro (€) in the Republic of Ireland — British pound (£) in Northern Ireland" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Anglais partout — irlandais (gaélique) sur les panneaux et dans les Gaeltacht", en: "English everywhere — Irish (Gaelic) appears on signage and in the Gaeltacht areas" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type G (prise anglaise à 3 broches) — adaptateur indispensable", en: "Type G (three-pin British plug) — an adapter is essential" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Carte européenne d'assurance maladie (CEAM) valable — soins de qualité", en: "European Health Insurance Card (EHIC) accepted — healthcare quality is very good" } },
    { icon: "🚗", label: { fr: "Conduite", en: "Driving" }, value: { fr: "Conduite à gauche — volant à droite, routes étroites en campagne", en: "Left-hand driving — right-hand steering wheel, with narrow rural roads" } },
    { icon: "☔", label: { fr: "Météo", en: "Weather" }, value: { fr: "Climat très humide toute l'année — imperméable indispensable même en été", en: "Very wet climate all year — a raincoat is essential, even in summer" } },
  ],
};
