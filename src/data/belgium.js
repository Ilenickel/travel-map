export const BELGIUM = {
  code: "BEL",
  numericId: 56,
  name: "Belgique",
  emoji: "🇧🇪",
  capital: "Bruxelles",
  language: "Français, Néerlandais, Allemand",
  currency: "Euro (EUR)",
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 75, budgetMid: 145,
    tripMin: 1000, tripMid: 2000,
  },
  description:
    "La Belgique est un petit pays au cœur de l'Europe, célèbre pour ses chocolats, ses bières artisanales et ses frites. De Bruges la médiévale à Gand la bohème, en passant par Bruxelles capitale de l'UE, le pays regorge de trésors architecturaux flamands et wallons. Les Ardennes offrent un contraste naturel avec les villes animées de la côte nord.",

  bestPeriods: [
    {
      months: "Mai – Septembre",
      label: "Printemps et été",
      color: "#22c55e",
      description:
        "Meilleure période pour visiter la Belgique : températures agréables (15–22°C), terrasses animées, festivals de bière et de musique. Bruges et Gand sont particulièrement belles sous le soleil d'été.",
      icon: "☀️",
    },
    {
      months: "Novembre – Décembre",
      label: "Marchés de Noël",
      color: "#f59e0b",
      description:
        "Les marchés de Noël de Bruges, Gand et Bruxelles comptent parmi les plus beaux d'Europe. Atmosphère féérique malgré le froid et la grisaille hivernale.",
      icon: "🎄",
    },
  ],
  weatherCities: [
    {
      id: "brussels",
      name: "Bruxelles",
      region: "Brabant",
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
      region: "Bruxelles-Capitale",
      description:
        "Capitale de la Belgique et siège des institutions européennes, Bruxelles mêle grandeur Art nouveau et quartiers populaires animés. La Grand-Place, classée UNESCO, est l'une des plus belles places d'Europe. La ville est également connue pour ses musées, ses bandes dessinées et sa gastronomie.",
      wikipedia: "Brussels",
      tags: ["Capitale", "UNESCO", "Gastronomie", "Architecture"],
      mustSee: [
        { name: "Grand-Place — place baroque classée UNESCO", wikipedia: "File:Brusel Grand-Place domy 3.jpg" },
        { name: "Atomium — sculpture géante de l'Expo 58", wikipedia: "Atomium" },
        { name: "Manneken Pis — symbole iconique de la ville", wikipedia: "Manneken_Pis" },
        { name: "Musées royaux des Beaux-Arts — Bruegel et Magritte", wikipedia: "Royal_Museums_of_Fine_Arts_of_Belgium" },
      ],
    },
    {
      id: 2,
      name: "Bruges",
      region: "Flandre occidentale",
      description:
        "Surnommée la 'Venise du Nord', Bruges est une cité médiévale exceptionnellement bien conservée, classée au patrimoine mondial de l'UNESCO. Ses canaux, ses beffrois et ses ruelles pavées attirent des millions de visiteurs chaque année. La ville est aussi le paradis du chocolat belge et de la dentelle artisanale.",
      wikipedia: "Bruges",
      tags: ["UNESCO", "Médiéval", "Canaux", "Chocolat"],
      mustSee: [
        { name: "Beffroi de Bruges — 366 marches pour une vue imprenable", wikipedia: "Belfry_of_Bruges" },
        { name: "Markt — place centrale avec maisons à pignons", wikipedia: "Markt,_Bruges" },
        { name: "Lac d'Amour (Minnewater) — lac romantique pittoresque", wikipedia: "File:Lake of Love.jpg" },
        { name: "Musée Groeninge — maîtres flamands primitifs", wikipedia: "Groeningemuseum" },
      ],
    },
    {
      id: 3,
      name: "Gand",
      region: "Flandre orientale",
      description:
        "Gand est une ville universitaire dynamique qui allie patrimoine médiéval et vie culturelle contemporaine. Le château des Comtes, le Graslei et la cathédrale Saint-Bavon abritant le célèbre Agneau mystique de Van Eyck en font une destination incontournable. La ville est aussi réputée pour son marché aux fleurs et sa scène musicale.",
      wikipedia: "Ghent",
      tags: ["Art", "Médiéval", "Culture", "Université"],
      mustSee: [
        { name: "Gravensteen — château médiéval des Comtes de Flandre", wikipedia: "Gravensteen" },
        { name: "Cathédrale Saint-Bavon — L'Agneau mystique de Van Eyck", wikipedia: "Saint_Bavo's_Cathedral,_Ghent" },
        { name: "Graslei et Korenlei — quais historiques pittoresques", wikipedia: "Graslei" },
        { name: "SMAK — musée d'art contemporain de renom", wikipedia: "Stedelijk_Museum_voor_Actuele_Kunst" },
      ],
    },
    {
      id: 4,
      name: "Ardennes",
      region: "Wallonie",
      description:
        "Les Ardennes belges offrent un paysage de forêts denses, de vallées encaissées et de villages de pierre. Idéales pour la randonnée, le kayak et le cyclisme, elles accueillent aussi les mémoriaux de la Bataille des Ardennes de la Seconde Guerre mondiale. Dinant, La Roche-en-Ardenne et Bouillon sont les perles de cette région nature.",
      wikipedia: "Ardennes",
      tags: ["Nature", "Randonnée", "Histoire", "Kayak"],
      mustSee: [
        { name: "Citadelle de Dinant — forteresse surplombant la Meuse", wikipedia: "File:Dinant reflected.jpg" },
        { name: "Château de Bouillon — forteresse médiévale de Godefroy", wikipedia: "File:Bouillon - Château-fort et cité (1).jpg" },
        { name: "Grottes de Han — réseau de grottes karstiques spectaculaires", wikipedia: "File:Grottes de Han DSCF6966.jpg" },
        { name: "Bastogne War Museum — mémorial de la Bataille des Ardennes", wikipedia: "Bastogne_War_Museum" },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "La Belgique est un pays d'Europe occidentale au coût de vie modéré. Les transports en commun sont efficaces et abordables, et on peut manger de bonnes frites pour moins de 5 €. Les hébergements à Bruges peuvent être plus chers en haute saison.",
    currency: "EUR",
    exchangeRate: "1€ = 1€",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Auberge de jeunesse (dortoir)", price: "25–40 €", detail: "Bonne couverture dans les villes touristiques" },
          { label: "Hôtel budget / B&B", price: "65–100 €", detail: "Chambre double confortable en centre-ville" },
          { label: "Hôtel confort 3–4 étoiles", price: "110–180 €", detail: "Hôtels de charme à Bruges ou Gand" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Frites + snack rue", price: "4–8 €", detail: "La friterie belge, incontournable et pas chère" },
          { label: "Brasserie / bistrot du midi", price: "14–22 €", detail: "Plat + boisson, stoemp ou carbonnade flamande" },
          { label: "Restaurant dîner", price: "25–45 €", detail: "Moules-frites, waterzooi ou cuisine gastronomique" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Train inter-villes (Bruxelles–Bruges)", price: "14–18 €", detail: "Réseau SNCB efficace, 1h de trajet" },
          { label: "Métro / bus Bruxelles (1 trajet)", price: "2,50 €", detail: "Ticket unitaire, carnet de 10 disponible" },
          { label: "Vélo en location (journée)", price: "10–20 €", detail: "Idéal à Bruges et Gand, villes très cyclables" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Musée des Beaux-Arts ou SMAK", price: "10–15 €", detail: "Collections de maîtres flamands ou art contemporain" },
          { label: "Croisière en bateau à Bruges", price: "10–12 €", detail: "30 minutes sur les canaux médiévaux" },
          { label: "Dégustation bières artisanales", price: "15–25 €", detail: "Bar spécialisé ou visite de brasserie" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "75–100 €/j",
        desc: "Auberge, frites et sandwichs, transports en commun, quelques visites gratuites",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "145–200 €/j",
        desc: "Hôtel charme, repas en brasserie, train inter-villes, musées et activités",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "6 jours",
      route: "Bruxelles – Bruges – Gand – Ardennes",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "550 – 750 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Bruxelles (ou train)", amount: "30–80 €" },
            { label: "Hébergement (5 nuits)", amount: "125–200 €" },
            { label: "Transports locaux", amount: "50–80 €" },
            { label: "Nourriture + boissons", amount: "200–280 €" },
            { label: "Activités + musées", amount: "50–80 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 000 – 1 400 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Bruxelles (ou Thalys)", amount: "80–150 €" },
            { label: "Hébergement (5 nuits)", amount: "400–600 €" },
            { label: "Transports locaux", amount: "80–120 €" },
            { label: "Nourriture + boissons", amount: "350–480 €" },
            { label: "Activités + musées", amount: "100–150 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "1h de vol ou 1h22 en Thalys jusqu'à Bruxelles-Midi" },
    { icon: "🪪", label: "Visa", value: "Aucun visa requis — zone Schengen, carte d'identité française suffisante" },
    { icon: "💰", label: "Monnaie", value: "Euro (€) — distributeurs omniprésents, paiement CB accepté partout" },
    { icon: "🗣️", label: "Langue", value: "Français en Wallonie et à Bruxelles, néerlandais en Flandre" },
    { icon: "🔌", label: "Prise électrique", value: "Type E (même qu'en France) — aucun adaptateur nécessaire" },
    { icon: "💊", label: "Santé", value: "Carte européenne d'assurance maladie (CEAM) valable — soins de qualité" },
    { icon: "🚆", label: "Train", value: "Réseau SNCB dense — toutes les grandes villes reliées en moins de 2h" },
    { icon: "🍺", label: "Bière", value: "Plus de 1 500 bières artisanales — la culture brassicole est classée UNESCO" },
  ],
};
