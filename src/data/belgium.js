export const BELGIUM = {
  code: "BEL",
  numericId: 56,
  name: { fr: "Belgique", en: "Belgium" },
  emoji: "🇧🇪",
  capital: { fr: "Bruxelles", en: "Brussels" },
  language: { fr: "Français, Néerlandais, Allemand", en: "French, Dutch, German" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 75, budgetMid: 145,
    tripMin: 1000, tripMid: 2000,
  },
  description: {
    fr: "La Belgique est un petit pays au cœur de l'Europe, célèbre pour ses chocolats, ses bières artisanales et ses frites. De Bruges la médiévale à Gand la bohème, en passant par Bruxelles capitale de l'UE, le pays regorge de trésors architecturaux flamands et wallons. Les Ardennes offrent un contraste naturel avec les villes animées de la côte nord.",
    en: "Belgium is a small country at the heart of Europe, famous for its chocolate, craft beers and fries. From medieval Bruges to bohemian Ghent, via Brussels, capital of the EU, the country is full of Flemish and Walloon architectural treasures. The Ardennes offer a natural contrast to the lively cities of the northern coast.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Septembre", en: "May – September" },
      label: { fr: "Printemps et été", en: "Spring and summer" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période pour visiter la Belgique : températures agréables (15–22°C), terrasses animées, festivals de bière et de musique. Bruges et Gand sont particulièrement belles sous le soleil d'été.",
        en: "Best time to visit Belgium: pleasant temperatures (15–22°C), lively terraces, beer and music festivals. Bruges and Ghent are especially beautiful under the summer sun.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Novembre – Décembre", en: "November – December" },
      label: { fr: "Marchés de Noël", en: "Christmas markets" },
      color: "#f59e0b",
      description: {
        fr: "Les marchés de Noël de Bruges, Gand et Bruxelles comptent parmi les plus beaux d'Europe. Atmosphère féérique malgré le froid et la grisaille hivernale.",
        en: "The Christmas markets of Bruges, Ghent and Brussels are among the most beautiful in Europe. A magical atmosphere despite the cold and grey winter weather.",
      },
      icon: "🎄",
    },
  ],
  weatherCities: [
    {
      id: "brussels",
      name: "Bruxelles",
      region: { fr: "Brabant", en: "Brabant" },
      data: [
        { month: "Jan", temp: 4, rain: 75, icon: "❄️" },
        { month: "Fév", temp: 5, rain: 65, icon: "❄️" },
        { month: "Mar", temp: 8, rain: 70, icon: "⛅" },
        { month: "Avr", temp: 12, rain: 55, icon: "⛅" },
        { month: "Mai", temp: 16, rain: 65, icon: "☀️" },
        { month: "Jun", temp: 19, rain: 75, icon: "☀️" },
        { month: "Jul", temp: 21, rain: 85, icon: "☀️" },
        { month: "Aoû", temp: 21, rain: 80, icon: "☀️" },
        { month: "Sep", temp: 18, rain: 65, icon: "☀️" },
        { month: "Oct", temp: 13, rain: 75, icon: "⛅" },
        { month: "Nov", temp: 8, rain: 80, icon: "⛅" },
        { month: "Déc", temp: 5, rain: 80, icon: "❄️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Bruxelles",
      region: { fr: "Bruxelles-Capitale", en: "Brussels-Capital" },
      description: {
        fr: "Capitale de la Belgique et siège des institutions européennes, Bruxelles mêle grandeur Art nouveau et quartiers populaires animés. La Grand-Place, classée UNESCO, est l'une des plus belles places d'Europe. La ville est également connue pour ses musées, ses bandes dessinées et sa gastronomie.",
        en: "Capital of Belgium and seat of the European institutions, Brussels blends Art Nouveau grandeur with lively working-class neighbourhoods. The Grand-Place, a UNESCO World Heritage Site, is one of the most beautiful squares in Europe. The city is also known for its museums, comic strips and cuisine.",
      },
      wikipedia: "Brussels",
      tags: ["Ville", "UNESCO", "Gastronomie", "Architecture"],
      mustSee: [
        { name: { fr: "Grand-Place — place baroque classée UNESCO", en: "Grand-Place — baroque square, UNESCO World Heritage Site" }, wikipedia: "File:Brusel Grand-Place domy 3.jpg" },
        { name: { fr: "Atomium — sculpture géante de l'Expo 58", en: "Atomium — giant sculpture from Expo 58" }, wikipedia: "Atomium" },
        { name: { fr: "Manneken Pis — symbole iconique de la ville", en: "Manneken Pis — the city's iconic symbol" }, wikipedia: "Manneken_Pis" },
        { name: { fr: "Musées royaux des Beaux-Arts — Bruegel et Magritte", en: "Royal Museums of Fine Arts — Bruegel and Magritte" }, wikipedia: "Royal_Museums_of_Fine_Arts_of_Belgium" },
      ],
    },
    {
      id: 2,
      name: "Bruges",
      region: { fr: "Flandre occidentale", en: "West Flanders" },
      description: {
        fr: "Surnommée la 'Venise du Nord', Bruges est une cité médiévale exceptionnellement bien conservée, classée au patrimoine mondial de l'UNESCO. Ses canaux, ses beffrois et ses ruelles pavées attirent des millions de visiteurs chaque année. La ville est aussi le paradis du chocolat belge et de la dentelle artisanale.",
        en: "Nicknamed the 'Venice of the North', Bruges is an exceptionally well-preserved medieval city, listed as a UNESCO World Heritage Site. Its canals, belfries and cobbled streets attract millions of visitors every year. The city is also a paradise for Belgian chocolate and handmade lace.",
      },
      wikipedia: "Bruges",
      tags: ["UNESCO", "Médiéval", "Canaux", "Chocolat"],
      mustSee: [
        { name: { fr: "Beffroi de Bruges — 366 marches pour une vue imprenable", en: "Belfry of Bruges — 366 steps for a breathtaking view" }, wikipedia: "Belfry_of_Bruges" },
        { name: { fr: "Markt — place centrale avec maisons à pignons", en: "Markt — central square with gabled houses" }, wikipedia: "Markt,_Bruges" },
        { name: { fr: "Lac d'Amour (Minnewater) — lac romantique pittoresque", en: "Lake of Love (Minnewater) — picturesque romantic lake" }, wikipedia: "File:Lake of Love.jpg" },
        { name: { fr: "Musée Groeninge — maîtres flamands primitifs", en: "Groeninge Museum — early Flemish masters" }, wikipedia: "Groeningemuseum" },
      ],
    },
    {
      id: 3,
      name: "Gand",
      region: { fr: "Flandre orientale", en: "East Flanders" },
      description: {
        fr: "Gand est une ville universitaire dynamique qui allie patrimoine médiéval et vie culturelle contemporaine. Le château des Comtes, le Graslei et la cathédrale Saint-Bavon abritant le célèbre Agneau mystique de Van Eyck en font une destination incontournable. La ville est aussi réputée pour son marché aux fleurs et sa scène musicale.",
        en: "Ghent is a lively university town that combines medieval heritage with contemporary cultural life. The Castle of the Counts, the Graslei and Saint Bavo's Cathedral, home to Van Eyck's famous Mystic Lamb, make it a must-see destination. The city is also renowned for its flower market and music scene.",
      },
      wikipedia: "Ghent",
      tags: ["Art", "Médiéval", "Culture", "Université"],
      mustSee: [
        { name: { fr: "Gravensteen — château médiéval des Comtes de Flandre", en: "Gravensteen — medieval castle of the Counts of Flanders" }, wikipedia: "Gravensteen" },
        { name: { fr: "Cathédrale Saint-Bavon — L'Agneau mystique de Van Eyck", en: "Saint Bavo's Cathedral — Van Eyck's Mystic Lamb" }, wikipedia: "Saint_Bavo's_Cathedral,_Ghent" },
        { name: { fr: "Graslei et Korenlei — quais historiques pittoresques", en: "Graslei and Korenlei — picturesque historic quays" }, wikipedia: "Graslei" },
        { name: { fr: "SMAK — musée d'art contemporain de renom", en: "SMAK — renowned museum of contemporary art" }, wikipedia: "Stedelijk_Museum_voor_Actuele_Kunst" },
      ],
    },
    {
      id: 4,
      name: "Ardennes",
      region: { fr: "Wallonie", en: "Wallonia" },
      description: {
        fr: "Les Ardennes belges offrent un paysage de forêts denses, de vallées encaissées et de villages de pierre. Idéales pour la randonnée, le kayak et le cyclisme, elles accueillent aussi les mémoriaux de la Bataille des Ardennes de la Seconde Guerre mondiale. Dinant, La Roche-en-Ardenne et Bouillon sont les perles de cette région nature.",
        en: "The Belgian Ardennes offer a landscape of dense forests, steep valleys and stone villages. Ideal for hiking, kayaking and cycling, the region is also home to the memorials of the Battle of the Bulge from the Second World War. Dinant, La Roche-en-Ardenne and Bouillon are the gems of this natural region.",
      },
      wikipedia: "Ardennes",
      tags: ["Nature", "Randonnée", "Histoire", "Kayak"],
      mustSee: [
        { name: { fr: "Citadelle de Dinant — forteresse surplombant la Meuse", en: "Citadel of Dinant — fortress overlooking the Meuse" }, wikipedia: "File:Dinant reflected.jpg" },
        { name: { fr: "Château de Bouillon — forteresse médiévale de Godefroy", en: "Bouillon Castle — Godfrey's medieval fortress" }, wikipedia: "File:Bouillon - Château-fort et cité (1).jpg" },
        { name: { fr: "Grottes de Han — réseau de grottes karstiques spectaculaires", en: "Caves of Han — spectacular network of karst caves" }, wikipedia: "File:Grottes de Han DSCF6966.jpg" },
        { name: { fr: "Bastogne War Museum — mémorial de la Bataille des Ardennes", en: "Bastogne War Museum — memorial to the Battle of the Bulge" }, wikipedia: "Bastogne_War_Museum" },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "La Belgique est un pays d'Europe occidentale au coût de vie modéré. Les transports en commun sont efficaces et abordables, et on peut manger de bonnes frites pour moins de 5 €. Les hébergements à Bruges peuvent être plus chers en haute saison.",
      en: "Belgium is a Western European country with a moderate cost of living. Public transport is efficient and affordable, and you can get good fries for under 5 €. Accommodation in Bruges can be more expensive in high season.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Auberge de jeunesse (dortoir)", en: "Youth hostel (dorm)" }, price: "20–38 €", detail: { fr: "Bonne couverture dans les villes touristiques", en: "Good coverage in tourist cities" } },
          { label: { fr: "Hôtel budget / B&B", en: "Budget hotel / B&B" }, price: "65–100 €", detail: { fr: "Chambre double confortable en centre-ville", en: "Comfortable double room in the city centre" } },
          { label: { fr: "Hôtel confort 3–4 étoiles", en: "3–4 star comfort hotel" }, price: "110–180 €", detail: { fr: "Hôtels de charme à Bruges ou Gand", en: "Charming hotels in Bruges or Ghent" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Frites + snack rue", en: "Fries + street snack" }, price: "4–8 €", detail: { fr: "La friterie belge, incontournable et pas chère", en: "The Belgian fry stand, a must and inexpensive" } },
          { label: { fr: "Brasserie / bistrot du midi", en: "Brasserie / lunchtime bistro" }, price: "14–22 €", detail: { fr: "Plat + boisson, stoemp ou carbonnade flamande", en: "Dish + drink, stoemp or Flemish carbonade" } },
          { label: { fr: "Restaurant dîner", en: "Dinner restaurant" }, price: "25–45 €", detail: { fr: "Moules-frites, waterzooi ou cuisine gastronomique", en: "Mussels and fries, waterzooi or fine dining" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Train inter-villes (Bruxelles–Bruges)", en: "Intercity train (Brussels–Bruges)" }, price: "14–18 €", detail: { fr: "Réseau SNCB efficace, 1h de trajet", en: "Efficient SNCB network, 1h journey" } },
          { label: { fr: "Métro / bus Bruxelles (1 trajet)", en: "Brussels metro / bus (1 trip)" }, price: "2,50 €", detail: { fr: "Ticket unitaire, carnet de 10 disponible", en: "Single ticket, 10-ticket book available" } },
          { label: { fr: "Vélo en location (journée)", en: "Bike rental (day)" }, price: "10–20 €", detail: { fr: "Idéal à Bruges et Gand, villes très cyclables", en: "Ideal in Bruges and Ghent, very bike-friendly cities" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Musée des Beaux-Arts ou SMAK", en: "Museum of Fine Arts or SMAK" }, price: "10–15 €", detail: { fr: "Collections de maîtres flamands ou art contemporain", en: "Collections of Flemish masters or contemporary art" } },
          { label: { fr: "Croisière en bateau à Bruges", en: "Boat cruise in Bruges" }, price: "10–12 €", detail: { fr: "30 minutes sur les canaux médiévaux", en: "30 minutes on the medieval canals" } },
          { label: { fr: "Dégustation bières artisanales", en: "Craft beer tasting" }, price: "15–25 €", detail: { fr: "Bar spécialisé ou visite de brasserie", en: "Specialist bar or brewery visit" } },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker" },
        daily: "75–100 €/j",
        desc: { fr: "Auberge, frites et sandwichs, transports en commun, quelques visites gratuites", en: "Hostel, fries and sandwiches, public transport, a few free visits" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort" },
        daily: "145–200 €/j",
        desc: { fr: "Hôtel charme, repas en brasserie, train inter-villes, musées et activités", en: "Charming hotel, brasserie meals, intercity train, museums and activities" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "6 jours", en: "6 days" },
      route: {
        fr: "Bruxelles – Bruges – Gand – Ardennes",
        en: "Brussels – Bruges – Ghent – Ardennes",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "550 – 750 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bruxelles (ou train)", en: "Return flight Paris–Brussels (or train)" }, amount: "30–80 €" },
            { label: { fr: "Hébergement (5 nuits)", en: "Accommodation (5 nights)" }, amount: "125–200 €" },
            { label: { fr: "Transports locaux", en: "Local transport" }, amount: "50–80 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "200–280 €" },
            { label: { fr: "Activités + musées", en: "Activities + museums" }, amount: "50–80 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 000 – 1 400 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bruxelles (ou Thalys)", en: "Return flight Paris–Brussels (or Thalys)" }, amount: "80–150 €" },
            { label: { fr: "Hébergement (5 nuits)", en: "Accommodation (5 nights)" }, amount: "400–600 €" },
            { label: { fr: "Transports locaux", en: "Local transport" }, amount: "80–120 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "350–480 €" },
            { label: { fr: "Activités + musées", en: "Activities + museums" }, amount: "100–150 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "1h de vol ou 1h22 en Thalys jusqu'à Bruxelles-Midi", en: "1h flight or 1h22 by Thalys to Brussels-Midi" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Aucun visa requis — zone Schengen, carte d'identité française suffisante", en: "No visa required — Schengen area, French ID card is sufficient" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Euro (€) — distributeurs omniprésents, paiement CB accepté partout", en: "Euro (€) — ATMs everywhere, card payment accepted everywhere" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Français en Wallonie et à Bruxelles, néerlandais en Flandre", en: "French in Wallonia and Brussels, Dutch in Flanders" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type E (même qu'en France) — aucun adaptateur nécessaire", en: "Type E (same as France) — no adapter needed" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Carte européenne d'assurance maladie (CEAM) valable — soins de qualité", en: "European Health Insurance Card (EHIC) valid — quality healthcare" } },
    { icon: "🚆", label: { fr: "Train", en: "Train" }, value: { fr: "Réseau SNCB dense — toutes les grandes villes reliées en moins de 2h", en: "Dense SNCB network — all major cities connected in under 2h" } },
    { icon: "🍺", label: { fr: "Bière", en: "Beer" }, value: { fr: "Plus de 1 500 bières artisanales — la culture brassicole est classée UNESCO", en: "Over 1,500 craft beers — the brewing culture is UNESCO-listed" } },
  ],
};
