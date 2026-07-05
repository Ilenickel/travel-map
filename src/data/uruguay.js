export const URUGUAY = {
  code: "URY",
  numericId: 858,
  name: { fr: "Uruguay", en: "Uruguay" },
  emoji: "🇺🇾",
  capital: { fr: "Montevideo", en: "Montevideo" },
  language: { fr: "Espagnol", en: "Spanish" },
  currency: { fr: "Peso uruguayen (UYU)", en: "Uruguayan Peso (UYU)" },
  timezone: "UTC-3",
  filter: {
    budgetMin: 40,
    budgetMid: 80,
    tripMin: 1800,
    tripMid: 3200,
  },
  description: {
    fr: "L'Uruguay est la petite perle méconnue de l'Amérique du Sud : pays stable, sûr et progressiste avec un art de vivre détendu. Entre Montevideo bohème, les plages branchées de Punta del Este et les estancias gauchières, il séduit par son authenticité et sa qualité de vie.",
    en: "Uruguay is South America's little-known gem: a stable, safe and progressive country with a relaxed way of life. Between bohemian Montevideo, the trendy beaches of Punta del Este and gaucho estancias, it charms with its authenticity and quality of life.",
  },

  bestPeriods: [
    {
      months: { fr: "Décembre – Mars", en: "December – March" },
      label: { fr: "Été austral", en: "Southern summer" },
      color: "#fbbf24",
      description: {
        fr: "Saison balnéaire : Punta del Este et les plages de l'Atlantique sont animées. Carnaval de Montevideo en février.",
        en: "Beach season: Punta del Este and the Atlantic beaches are lively. Montevideo Carnival in February.",
      },
      icon: "🏖️",
    },
    {
      months: { fr: "Avril – Juin", en: "April – June" },
      label: { fr: "Automne doux", en: "Mild autumn" },
      color: "#fb923c",
      description: {
        fr: "Températures agréables, moins de touristes, prix réduits. Idéal pour explorer Montevideo et la Colonia del Sacramento.",
        en: "Pleasant temperatures, fewer tourists, lower prices. Ideal for exploring Montevideo and Colonia del Sacramento.",
      },
      icon: "🍂",
    },
  ],

  weatherCities: [
    {
      id: "montevideo",
      name: { fr: "Montevideo", en: "Montevideo" },
      region: { fr: "Río de la Plata", en: "Río de la Plata" },
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
      name: { fr: "Punta del Este", en: "Punta del Este" },
      region: { fr: "Maldonado", en: "Maldonado" },
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
      name: { fr: "Montevideo", en: "Montevideo" },
      region: { fr: "Río de la Plata", en: "Río de la Plata" },
      description: {
        fr: "La capitale uruguayenne est une ville à taille humaine avec un rambla (front de mer) de 22 km, un marché Tristán Narvaja animé et un centro histórico élégant. Sa scène culturelle, ses petits bars à mate et son ambiance détendue en font une destination attachante.",
        en: "The Uruguayan capital is a human-scale city with a 22 km rambla (waterfront), a lively Tristán Narvaja market and an elegant historic centre. Its cultural scene, small mate bars and relaxed atmosphere make it an endearing destination.",
      },
      wikipedia: "Montevideo",
      tags: ["Ville", "Culture", "Gastronomie", "Bord De Mer", "Architecture"],
      mustSee: [
        { name: { fr: "Ciudad Vieja (vieille ville)", en: "Ciudad Vieja (old town)" }, wikipedia: "Ciudad_Vieja,_Montevideo" },
        { name: { fr: "Marché du Port (Mercado del Puerto)", en: "Port Market (Mercado del Puerto)" }, wikipedia: "Mercado_del_Puerto" },
        { name: { fr: "Rambla de Montevideo", en: "Montevideo Rambla" }, wikipedia: "File:Montevideo Rambla-20110506-RM-120836.jpg" },
        { name: { fr: "MNAV (musée national d'art)", en: "MNAV (national art museum)" }, wikipedia: "National_Museum_of_Visual_Arts_(Uruguay)" },
      ],
    },
    {
      id: 2,
      name: { fr: "Colonia del Sacramento", en: "Colonia del Sacramento" },
      region: { fr: "Colonia", en: "Colonia" },
      description: {
        fr: "Cette ville coloniale portugaise du XVIIe siècle, inscrite au patrimoine UNESCO, est à 1h de ferry depuis Buenos Aires. Ses ruelles pavées, ses phares et ses maisons aux couleurs pastel en font un musée à ciel ouvert.",
        en: "This 17th-century Portuguese colonial town, inscribed on the UNESCO World Heritage List, is a 1-hour ferry ride from Buenos Aires. Its cobbled streets, lighthouses and pastel-coloured houses make it an open-air museum.",
      },
      wikipedia: "Colonia_del_Sacramento",
      tags: ["Colonial", "UNESCO", "Histoire", "Romantique", "Architecture"],
      mustSee: [
        { name: { fr: "Barrio Histórico", en: "Barrio Histórico" }, wikipedia: "File:Calle en Colonia del Sacramento 2013.jpg" },
        { name: { fr: "Phare de Colonia", en: "Colonia Lighthouse" }, wikipedia: "Colonia_del_Sacramento_Lighthouse" },
        { name: { fr: "Plage de Colonia", en: "Colonia beach" }, wikipedia: "File:Sunset on the beach in Colonia del Sacramento.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Punta del Este", en: "Punta del Este" },
      region: { fr: "Maldonado", en: "Maldonado" },
      description: {
        fr: "La Saint-Tropez de l'Amérique du Sud attire en été les célébrités et jet-setters argentins et brésiliens. La main géante de l'artiste Ironside, les plages Brava et Mansa et la vie nocturne animée sont ses emblèmes.",
        en: "South America's Saint-Tropez draws Argentine and Brazilian celebrities and jet-setters in summer. The giant hand sculpture by artist Ironside, Brava and Mansa beaches and lively nightlife are its emblems.",
      },
      wikipedia: "Punta_del_Este",
      tags: ["Plage", "Luxe", "Nightlife", "Art"],
      mustSee: [
        { name: { fr: "La Mano (sculpture)", en: "La Mano (sculpture)" }, wikipedia: "File:Thehandofpuntadeleste.jpg" },
        { name: { fr: "Plage Brava", en: "Brava Beach" }, wikipedia: "File:PuntadelEste3.jpg" },
        { name: "Isla Gorriti", wikipedia: "Gorriti_Island" },
        { name: { fr: "Casapueblo (Páez Vilaró)", en: "Casapueblo (Páez Vilaró)" }, wikipedia: "Casapueblo" },
      ],
    },
    {
      id: 4,
      name: { fr: "Estancias & Paysage intérieur", en: "Estancias & Inland landscapes" },
      region: { fr: "Interior", en: "Interior" },
      description: {
        fr: "L'intérieur uruguayen est un immense territoire rural de pampas et collines douces. Les estancias (ranchs gauchiers) ouvrent leurs portes aux touristes pour des séjours authentiques : équitation, asado, coucher de soleil sur les prairies.",
        en: "Uruguay's interior is a vast rural territory of pampas and gentle hills. Estancias (gaucho ranches) welcome tourists for authentic stays: horse riding, asado, sunsets over the grasslands.",
      },
      wikipedia: "File:Parque_Anchorena_Estancia_Residencial_Presidencial_Colonia_Uruguay_-_panoramio_(2).jpg",
      tags: ["Gaucho", "Nature", "Équitation", "Rural"],
      mustSee: [
        { name: { fr: "Tacuarembó (festival gaucho)", en: "Tacuarembó (gaucho festival)" }, wikipedia: "File:Tablado Velódromo Municipal Tacuarembó.jpg" },
        { name: "Quebrada de los Cuervos", wikipedia: "Quebrada_de_los_Cuervos" },
        { name: "Cabo Polonio", wikipedia: "Cabo_Polonio" },
        { name: "Punta del Diablo", wikipedia: "Punta_del_Diablo" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Uruguay est un peu plus cher que ses voisins (Argentine et Paraguay), avec des prix proches de l'Europe méridionale. La sécurité et la qualité de vie compensent.",
      en: "Uruguay is a bit more expensive than its neighbours (Argentina and Paraguay), with prices close to Southern Europe. Safety and quality of life make up for it.",
    },
    currency: "Peso uruguayen (UYU)",
    exchangeRate: "1€ ≈ 40–45 UYU",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Dortoir auberge de jeunesse", en: "Hostel dorm" }, price: "12–20 €", detail: { fr: "Montevideo, Colonia, qualité correcte", en: "Montevideo, Colonia, decent quality" } },
          { label: { fr: "Chambre double hôtel 3★", en: "3★ hotel double room" }, price: "40–80 €", detail: { fr: "Bon rapport qualité-prix en basse saison", en: "Good value in low season" } },
          { label: { fr: "Hôtel boutique Punta del Este (été)", en: "Boutique hotel Punta del Este (summer)" }, price: "120–300 €", detail: { fr: "Prix de haute saison (janv–fév)", en: "High season prices (Jan–Feb)" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Chivito (sandwich national)", en: "Chivito (national sandwich)" }, price: "5–8 €", detail: { fr: "Steak, jambon, œuf, fromage – copieux", en: "Steak, ham, egg, cheese – hearty" } },
          { label: { fr: "Menu du midi", en: "Lunch menu" }, price: "8–15 €", detail: { fr: "Dans les restaurants du quartier", en: "In neighbourhood restaurants" } },
          { label: { fr: "Parrillada (grill) pour deux", en: "Parrillada (grill) for two" }, price: "25–40 €", detail: { fr: "Avec vin uruguayen", en: "With Uruguayan wine" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Ferry Montevideo–Buenos Aires", en: "Montevideo–Buenos Aires ferry" }, price: "40–80 €", detail: { fr: "Buquebus, selon classe, 2–3h de traversée", en: "Buquebus, depending on class, 2–3h crossing" } },
          { label: { fr: "Bus intercités", en: "Intercity bus" }, price: "5–15 €", detail: { fr: "Réseau Turil/COPSA, confortable", en: "Turil/COPSA network, comfortable" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités & Culture", en: "Activities & Culture" },
        items: [
          { label: { fr: "Tour Colonia del Sacramento", en: "Colonia del Sacramento tour" }, price: "20–35 €", detail: { fr: "Journée depuis Montevideo (ferry inclus)", en: "Day trip from Montevideo (ferry included)" } },
          { label: { fr: "Séjour estancia (journée)", en: "Estancia stay (day)" }, price: "50–100 €", detail: { fr: "Équitation + asado + activités gaucho", en: "Horse riding + asado + gaucho activities" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "40–60 €/j", desc: { fr: "Auberge, chivito, bus, excursions budget", en: "Hostel, chivito, bus, budget excursions" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "80–130 €/j", desc: { fr: "Hôtel 3★, restaurants, location voiture", en: "3★ hotel, restaurants, car rental" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "200 €+/j", desc: { fr: "Hôtel 5★ Punta del Este, gastronomie, privé", en: "5★ hotel in Punta del Este, fine dining, private tours" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks" },
      route: { fr: "Montevideo – Colonia – Punta del Este – Interior", en: "Montevideo – Colonia – Punta del Este – Interior" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 800 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Montevideo", en: "Return flight Paris–Montevideo" }, amount: "750–1 000 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "350–500 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "350–500 €" },
            { label: { fr: "Transport local + ferry", en: "Local transport + ferry" }, amount: "150–250 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "120–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "3 200 – 4 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Montevideo", en: "Return flight Paris–Montevideo" }, amount: "900–1 200 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "800–1 100 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "600–800 €" },
            { label: { fr: "Transport + location voiture", en: "Transport + car rental" }, amount: "400–600 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "300–500 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "6 500 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Montevideo (Business)", en: "Return flight Paris–Montevideo (Business)" }, amount: "2 500–3 500 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "2 000–3 000 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "600–900 €" },
            { label: { fr: "Transport & excursions privées", en: "Transport & private excursions" }, amount: "400–600 €" },
            { label: { fr: "Activités premium", en: "Premium activities" }, amount: "300–500 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~13–14h avec escale (São Paulo, Buenos Aires)", en: "~13–14h with a stopover (São Paulo, Buenos Aires)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Sans visa pour les Français (90 jours)", en: "No visa required for French citizens (90 days)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Peso uruguayen (1€ ≈ 40–45 UYU)", en: "Uruguayan Peso (1€ ≈ 40–45 UYU)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Espagnol (rioplatense)", en: "Spanish (Rioplatense)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/L – 220 V (compatible EU)", en: "Type C/L – 220 V (EU compatible)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "4G dans les villes, bonne couverture nationale", en: "4G in cities, good nationwide coverage" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Potable dans tout le pays", en: "Drinkable throughout the country" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Pas de vaccins obligatoires, pays très sûr", en: "No mandatory vaccines, very safe country" } },
  ],
};
