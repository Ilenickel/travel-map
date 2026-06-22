export const URUGUAY = {
  code: "URY",
  numericId: 858,
  name: "Uruguay",
  emoji: "🇺🇾",
  capital: "Montevideo",
  language: "Espagnol",
  currency: "Peso uruguayen (UYU)",
  timezone: "UTC-3",
  filter: {
    budgetMin: 40,
    budgetMid: 80,
    tripMin: 1800,
    tripMid: 3200,
  },
  description:
    "L'Uruguay est la petite perle méconnue de l'Amérique du Sud : pays stable, sûr et progressiste avec un art de vivre détendu. Entre Montevideo bohème, les plages branchées de Punta del Este et les estancias gauchières, il séduit par son authenticité et sa qualité de vie.",

  bestPeriods: [
    {
      months: "Décembre – Mars",
      label: "Été austral",
      color: "#fbbf24",
      description:
        "Saison balnéaire : Punta del Este et les plages de l'Atlantique sont animées. Carnaval de Montevideo en février.",
      icon: "🏖️",
    },
    {
      months: "Avril – Juin",
      label: "Automne doux",
      color: "#fb923c",
      description:
        "Températures agréables, moins de touristes, prix réduits. Idéal pour explorer Montevideo et la Colonia del Sacramento.",
      icon: "🍂",
    },
  ],

  weatherCities: [
    {
      id: "montevideo",
      name: "Montevideo",
      region: "Río de la Plata",
      data: [
        { month: "Jan", temp: 24, rain: 70, icon: "☀️" },
        { month: "Fév", temp: 24, rain: 65, icon: "☀️" },
        { month: "Mar", temp: 22, rain: 80, icon: "☀️" },
        { month: "Avr", temp: 17, rain: 85, icon: "⛅" },
        { month: "Mai", temp: 14, rain: 80, icon: "⛅" },
        { month: "Jun", temp: 11, rain: 80, icon: "⛅" },
        { month: "Jul", temp: 10, rain: 75, icon: "⛅" },
        { month: "Aoû", temp: 11, rain: 80, icon: "⛅" },
        { month: "Sep", temp: 13, rain: 80, icon: "⛅" },
        { month: "Oct", temp: 17, rain: 90, icon: "⛅" },
        { month: "Nov", temp: 20, rain: 85, icon: "☀️" },
        { month: "Déc", temp: 23, rain: 75, icon: "☀️" },
      ],
    },
    {
      id: "punta-del-este",
      name: "Punta del Este",
      region: "Maldonado",
      data: [
        { month: "Jan", temp: 25, rain: 65, icon: "☀️" },
        { month: "Fév", temp: 25, rain: 60, icon: "☀️" },
        { month: "Mar", temp: 23, rain: 75, icon: "☀️" },
        { month: "Avr", temp: 18, rain: 80, icon: "⛅" },
        { month: "Mai", temp: 15, rain: 75, icon: "⛅" },
        { month: "Jun", temp: 12, rain: 75, icon: "⛅" },
        { month: "Jul", temp: 11, rain: 70, icon: "⛅" },
        { month: "Aoû", temp: 12, rain: 75, icon: "⛅" },
        { month: "Sep", temp: 14, rain: 75, icon: "⛅" },
        { month: "Oct", temp: 18, rain: 85, icon: "⛅" },
        { month: "Nov", temp: 21, rain: 80, icon: "☀️" },
        { month: "Déc", temp: 24, rain: 70, icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Montevideo",
      region: "Río de la Plata",
      description:
        "La capitale uruguayenne est une ville à taille humaine avec un rambla (front de mer) de 22 km, un marché Tristán Narvaja animé et un centro histórico élégant. Sa scène culturelle, ses petits bars à mate et son ambiance détendue en font une destination attachante.",
      wikipedia: "Montevideo",
      tags: ["capitale", "culture", "gastronomie", "bord de mer"],
      mustSee: [
        { name: "Ciudad Vieja (vieille ville)", wikipedia: "Ciudad_Vieja,_Montevideo" },
        { name: "Marché du Port (Mercado del Puerto)", wikipedia: "Mercado_del_Puerto" },
        { name: "Rambla de Montevideo", wikipedia: "File:Montevideo Rambla-20110506-RM-120836.jpg" },
        { name: "MNAV (musée national d'art)", wikipedia: "National_Museum_of_Visual_Arts_(Uruguay)" },
      ],
    },
    {
      id: 2,
      name: "Colonia del Sacramento",
      region: "Colonia",
      description:
        "Cette ville coloniale portugaise du XVIIe siècle, inscrite au patrimoine UNESCO, est à 1h de ferry depuis Buenos Aires. Ses ruelles pavées, ses phares et ses maisons aux couleurs pastel en font un musée à ciel ouvert.",
      wikipedia: "Colonia_del_Sacramento",
      tags: ["colonial", "UNESCO", "histoire", "romantique"],
      mustSee: [
        { name: "Barrio Histórico", wikipedia: "File:Calle en Colonia del Sacramento 2013.jpg" },
        { name: "Phare de Colonia", wikipedia: "Colonia_del_Sacramento_Lighthouse" },
        { name: "Plage de Colonia", wikipedia: "File:Sunset on the beach in Colonia del Sacramento.jpg" },
      ],
    },
    {
      id: 3,
      name: "Punta del Este",
      region: "Maldonado",
      description:
        "La Saint-Tropez de l'Amérique du Sud attire en été les célébrités et jet-setters argentins et brésiliens. La main géante de l'artiste Ironside, les plages Brava et Mansa et la vie nocturne animée sont ses emblèmes.",
      wikipedia: "Punta_del_Este",
      tags: ["plages", "luxe", "nightlife", "art"],
      mustSee: [
        { name: "La Mano (sculpture)", wikipedia: "File:Thehandofpuntadeleste.jpg" },
        { name: "Plage Brava", wikipedia: "File:PuntadelEste3.jpg" },
        { name: "Isla Gorriti", wikipedia: "Gorriti_Island" },
        { name: "Casapueblo (Páez Vilaró)", wikipedia: "Casapueblo" },
      ],
    },
    {
      id: 4,
      name: "Estancias & Paysage intérieur",
      region: "Interior",
      description:
        "L'intérieur uruguayen est un immense territoire rural de pampas et collines douces. Les estancias (ranchs gauchiers) ouvrent leurs portes aux touristes pour des séjours authentiques : équitation, asado, coucher de soleil sur les prairies.",
      wikipedia: "File:Parque_Anchorena_Estancia_Residencial_Presidencial_Colonia_Uruguay_-_panoramio_(2).jpg",
      tags: ["gaucho", "nature", "équitation", "rural"],
      mustSee: [
        { name: "Tacuarembó (festival gaucho)", wikipedia: "File:Tablado Velódromo Municipal Tacuarembó.jpg" },
        { name: "Quebrada de los Cuervos", wikipedia: "Quebrada_de_los_Cuervos" },
        { name: "Cabo Polonio", wikipedia: "Cabo_Polonio" },
        { name: "Punta del Diablo", wikipedia: "Punta_del_Diablo" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "L'Uruguay est un peu plus cher que ses voisins (Argentine et Paraguay), avec des prix proches de l'Europe méridionale. La sécurité et la qualité de vie compensent.",
    currency: "Peso uruguayen (UYU)",
    exchangeRate: "1€ ≈ 40–45 UYU",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir auberge de jeunesse", price: "12–20 €", detail: "Montevideo, Colonia, qualité correcte" },
          { label: "Chambre double hôtel 3★", price: "40–80 €", detail: "Bon rapport qualité-prix en basse saison" },
          { label: "Hôtel boutique Punta del Este (été)", price: "120–300 €", detail: "Prix de haute saison (janv–fév)" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Chivito (sandwich national)", price: "5–8 €", detail: "Steak, jambon, œuf, fromage – copieux" },
          { label: "Menu du midi", price: "8–15 €", detail: "Dans les restaurants du quartier" },
          { label: "Parrillada (grill) pour deux", price: "25–40 €", detail: "Avec vin uruguayen" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Ferry Montevideo–Buenos Aires", price: "40–80 €", detail: "Buquebus, selon classe, 2–3h de traversée" },
          { label: "Bus intercités", price: "5–15 €", detail: "Réseau Turil/COPSA, confortable" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Tour Colonia del Sacramento", price: "20–35 €", detail: "Journée depuis Montevideo (ferry inclus)" },
          { label: "Séjour estancia (journée)", price: "50–100 €", detail: "Équitation + asado + activités gaucho" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "40–60 €/j", desc: "Auberge, chivito, bus, excursions budget", color: "#22c55e" },
      { type: "Confort", daily: "80–130 €/j", desc: "Hôtel 3★, restaurants, location voiture", color: "#3b82f6" },
      { type: "Luxe", daily: "200 €+/j", desc: "Hôtel 5★ Punta del Este, gastronomie, privé", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Montevideo – Colonia – Punta del Este – Interior",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 800 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Montevideo", amount: "750–1 000 €" },
            { label: "Hébergement (14 nuits)", amount: "350–500 €" },
            { label: "Nourriture", amount: "350–500 €" },
            { label: "Transport local + ferry", amount: "150–250 €" },
            { label: "Activités & imprévus", amount: "120–200 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 200 – 4 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Montevideo", amount: "900–1 200 €" },
            { label: "Hébergement (14 nuits)", amount: "800–1 100 €" },
            { label: "Nourriture", amount: "600–800 €" },
            { label: "Transport + location voiture", amount: "400–600 €" },
            { label: "Activités & imprévus", amount: "300–500 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "6 500 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Montevideo (Business)", amount: "2 500–3 500 €" },
            { label: "Hébergement (14 nuits)", amount: "2 000–3 000 €" },
            { label: "Nourriture & restaurants", amount: "600–900 €" },
            { label: "Transport & excursions privées", amount: "400–600 €" },
            { label: "Activités premium", amount: "300–500 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~13–14h avec escale (São Paulo, Buenos Aires)" },
    { icon: "🪪", label: "Visa", value: "Sans visa pour les Français (90 jours)" },
    { icon: "💰", label: "Monnaie", value: "Peso uruguayen (1€ ≈ 40–45 UYU)" },
    { icon: "🗣️", label: "Langue", value: "Espagnol (rioplatense)" },
    { icon: "🔌", label: "Prise électrique", value: "Type C/L – 220 V (compatible EU)" },
    { icon: "📱", label: "Réseau", value: "4G dans les villes, bonne couverture nationale" },
    { icon: "🚰", label: "Eau du robinet", value: "Potable dans tout le pays" },
    { icon: "💊", label: "Santé", value: "Pas de vaccins obligatoires, pays très sûr" },
  ],
};
