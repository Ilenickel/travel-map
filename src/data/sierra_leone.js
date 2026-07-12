export const SIERRA_LEONE = {
  code: "SLE",
  numericId: 694,
  name: { fr: "Sierra Leone", en: "Sierra Leone", es: "Sierra Leona" },
  emoji: "🇸🇱",
  capital: { fr: "Freetown", en: "Freetown", es: "Freetown" },
  language: { fr: "Anglais (officiel), Krio (créole local)", en: "English (official), Krio (local creole)", es: "Inglés (oficial), krio (criollo local)" },
  currency: { fr: "Leone (SLL)", en: "Leone (SLL)", es: "Leone (SLL)" },
  timezone: "UTC",
  filter: {
    budgetMin: 35, budgetMid: 70,
    tripMin: 800, tripMid: 1700,
  },
  description: {
    fr: "La Sierra Leone est une destination en pleine renaissance touristique, avec des plages parmi les plus belles d'Afrique de l'Ouest encore presque désertes. Freetown et son coton-tree centenaire, l'île de Tiwai (sanctuaire de l'hippopotame pygmée et des colobes), les plages de Tokeh et River No. 2, et le sanctuaire de chimpanzés de Tacugama composent un itinéraire naturel exceptionnel.",
    en: "Sierra Leone is a destination undergoing a tourism renaissance, with some of the most beautiful beaches in West Africa still almost deserted. Freetown and its centuries-old cotton tree, Tiwai Island (sanctuary of the pygmy hippopotamus and colobus monkeys), the beaches of Tokeh and River No. 2, and the Tacugama chimpanzee sanctuary make up an exceptional natural itinerary.",
    es: "Sierra Leona es un destino en plena renovación turística, con playas entre las más bellas de África Occidental todavía casi desiertas. Freetown y su centenario árbol del algodón, la isla de Tiwai (santuario del hipopótamo pigmeo y los colobos), las playas de Tokeh y River No. 2, y el santuario de chimpancés de Tacugama componen un itinerario natural excepcional.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Avril", en: "November – April", es: "Noviembre – Abril" },
      label: { fr: "Saison sèche", en: "Dry season", es: "Estación seca" },
      color: "#22c55e",
      description: {
        fr: "Saison sèche idéale pour visiter les plages, la brousse et l'île de Tiwai. Temps ensoleillé, routes praticables, température de 27–31°C.",
        en: "Ideal dry season for visiting the beaches, the bush and Tiwai Island. Sunny weather, passable roads, temperatures of 27–31°C.",
        es: "Estación seca ideal para visitar las playas, la sabana y la isla de Tiwai. Tiempo soleado, carreteras transitables, temperatura de 27–31 °C.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Mai – Octobre", en: "May – October", es: "Mayo – Octubre" },
      label: { fr: "Saison des pluies", en: "Rainy season", es: "Estación de lluvias" },
      color: "#ef4444",
      description: {
        fr: "L'une des saisons des pluies les plus intenses d'Afrique avec 500–800 mm/mois en juillet-août. Routes dégradées, certaines zones inaccessibles. Déconseillé.",
        en: "One of the most intense rainy seasons in Africa, with 500–800 mm/month in July–August. Roads deteriorate, some areas inaccessible. Not recommended.",
        es: "Una de las estaciones de lluvias más intensas de África, con 500–800 mm/mes en julio-agosto. Carreteras deterioradas, algunas zonas inaccesibles. Desaconsejado.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "freetown",
      name: "Freetown",
      region: { fr: "Freetown (côte, péninsule)", en: "Freetown (coast, peninsula)", es: "Freetown (costa, península)" },
      data: [
        { month: "Jan", temp: 27, rain: 10,  icon: "⛅" },
        { month: "Fév", temp: 28, rain: 10,  icon: "⛅" },
        { month: "Mar", temp: 29, rain: 20,  icon: "⛅" },
        { month: "Avr", temp: 28, rain: 90,  icon: "⛅" },
        { month: "Mai", temp: 27, rain: 250, icon: "🌧️" },
        { month: "Jun", temp: 26, rain: 450, icon: "🌧️" },
        { month: "Jul", temp: 24, rain: 700, icon: "🌧️" },
        { month: "Aoû", temp: 24, rain: 800, icon: "🌧️" },
        { month: "Sep", temp: 25, rain: 600, icon: "🌧️" },
        { month: "Oct", temp: 26, rain: 300, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 80,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 20,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Freetown",
      region: { fr: "Freetown", en: "Freetown", es: "Freetown" },
      description: {
        fr: "Freetown, capitale fondée en 1787 pour accueillir des esclaves libérés, possède une histoire unique liée à l'abolition. Le coton-tree centenaire au cœur de la ville, le Musée national, le quartier de Krio Cotton Tree et l'île de Banana racontent cette mémoire singulière sur fond d'animation africaine.",
        en: "Freetown, founded in 1787 to house freed slaves, has a unique history tied to abolition. The centuries-old cotton tree at the heart of the city, the National Museum, the Krio Cotton Tree district and Banana Island tell this singular story against a backdrop of vibrant African life.",
        es: "Freetown, capital fundada en 1787 para acoger a esclavos liberados, posee una historia única ligada a la abolición. El centenario árbol del algodón en el corazón de la ciudad, el Museo Nacional, el barrio de Krio Cotton Tree y la isla Banana narran esta memoria singular sobre un fondo de animación africana.",
      },
      wikipedia: "Freetown",
      tags: ["Histoire", "Abolition", "Culture", "Ville"],
      mustSee: [
        { name: { fr: "Cotton Tree — kapokier tricentenaire symbole de la ville", en: "Cotton Tree — 300-year-old kapok tree, symbol of the city", es: "Cotton Tree — árbol de kapok tricentenario, símbolo de la ciudad" }, wikipedia: "Cotton_Tree_(Sierra_Leone)" },
        { name: "Sierra Leone National Museum", wikipedia: "Sierra_Leone_National_Museum" },
        { name: { fr: "Île de Banana (Bunce Island) — comptoir négrier", en: "Banana Island (Bunce Island) — former slave trading post", es: "Isla Banana (Bunce Island) — antiguo enclave esclavista" }, wikipedia: "File:Bunce Island Beach.jpg" },
        { name: { fr: "Marché de Freetown — Lumley Market", en: "Freetown Market — Lumley Market", es: "Mercado de Freetown — Lumley Market" }, wikipedia: "File:Freetown_street_(13992704238).jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Plages de la péninsule de Freetown", en: "Beaches of the Freetown Peninsula", es: "Playas de la península de Freetown" },
      region: { fr: "Western Area Rural", en: "Western Area Rural", es: "Western Area Rural" },
      description: {
        fr: "La péninsule de Freetown abrite des plages de sable blanc encore peu fréquentées et d'une beauté exceptionnelle. River No. 2 Beach, encadrée de palmiers et d'un lagon, et Tokeh Beach figurent parmi les plus belles plages d'Afrique de l'Ouest.",
        en: "The Freetown Peninsula is home to exceptionally beautiful, still little-visited white sand beaches. River No. 2 Beach, framed by palm trees and a lagoon, and Tokeh Beach rank among the most beautiful beaches in West Africa.",
        es: "La península de Freetown alberga playas de arena blanca todavía poco frecuentadas y de una belleza excepcional. River No. 2 Beach, enmarcada por palmeras y una laguna, y Tokeh Beach figuran entre las playas más bellas de África Occidental.",
      },
      wikipedia: "File:Beach in Freetown, Sierra Leone (14176784751).jpg",
      tags: ["Plage", "Nature", "Lagon", "Détente"],
      mustSee: [
        { name: { fr: "River No. 2 Beach — lagon et palmiers, top Afrique", en: "River No. 2 Beach — lagoon and palm trees, a top African beach", es: "River No. 2 Beach — laguna y palmeras, top de África" }, wikipedia: "File:River_No._2_Beach_(Sierra_Leone).jpg" },
        { name: { fr: "Tokeh Beach — plage de sable blanc préservée", en: "Tokeh Beach — pristine white sand beach", es: "Tokeh Beach — playa de arena blanca preservada" }, wikipedia: "File:Tokeh_Beach.jpg" },
        { name: { fr: "Kent Beach au bout de la péninsule", en: "Kent Beach at the tip of the peninsula", es: "Kent Beach en el extremo de la península" }, wikipedia: "File:The beach at Deal, Kent - geograph.org.uk - 6079466.jpg" },
        { name: { fr: "Plage de Bureh — vagues pour le surf", en: "Bureh Beach — waves for surfing", es: "Playa de Bureh — olas para el surf" }, wikipedia: "File:Freetown_beach.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Île de Tiwai", en: "Tiwai Island", es: "Isla de Tiwai" },
      region: { fr: "Pujehun", en: "Pujehun", es: "Pujehun" },
      description: {
        fr: "L'île de Tiwai, dans la rivière Moa, est un sanctuaire naturel privé abritant l'une des plus fortes densités de primates au monde. On y observe 11 espèces de primates dont le colobe de Diana en danger, le sooty mangabey, et surtout l'hippopotame pygmée dans son milieu naturel.",
        en: "Tiwai Island, in the Moa River, is a private nature sanctuary home to one of the highest densities of primates in the world. Visitors can observe 11 primate species including the endangered Diana monkey, the sooty mangabey, and above all the pygmy hippopotamus in its natural habitat.",
        es: "La isla de Tiwai, en el río Moa, es un santuario natural privado que alberga una de las mayores densidades de primates del mundo. Se pueden observar 11 especies de primates, entre ellas el colobo de Diana en peligro, el mangabey ahumado, y sobre todo el hipopótamo pigmeo en su hábitat natural.",
      },
      wikipedia: "Tiwai_Island",
      tags: ["Nature", "Primates", "Hippopotames pygmées", "Forêt"],
      mustSee: [
        { name: { fr: "Hippopotame pygmée — espèce rarissime", en: "Pygmy hippopotamus — an extremely rare species", es: "Hipopótamo pigmeo — especie rarísima" }, wikipedia: "Pygmy_hippopotamus" },
        { name: { fr: "Colobe de Diana et 10 autres espèces de primates", en: "Diana monkey and 10 other primate species", es: "Colobo de Diana y otras 10 especies de primates" }, wikipedia: "Diana_monkey" },
        { name: { fr: "Balade en pirogue autour de l'île", en: "Canoe trip around the island", es: "Paseo en piragua alrededor de la isla" }, wikipedia: "Tiwai_Island" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Sierra Leone est abordable pour les voyageurs, même si les prix ont augmenté avec la reprise du tourisme. Freetown et les plages restent bon marché par rapport aux standards internationaux, et la qualité du poisson frais et des fruits de mer est excellente.",
      en: "Sierra Leone is affordable for travellers, even though prices have risen with the tourism revival. Freetown and the beaches remain cheap by international standards, and the quality of fresh fish and seafood is excellent.",
      es: "Sierra Leona es asequible para los viajeros, aunque los precios han subido con la recuperación del turismo. Freetown y las playas siguen siendo baratas según los estándares internacionales, y la calidad del pescado fresco y el marisco es excelente.",
    },
    currency: "SLL",
    exchangeRate: "1€ ≈ 25 000 SLL",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Guesthouse locale à Freetown", en: "Local guesthouse in Freetown", es: "Guesthouse local en Freetown" }, price: "15–30 €", detail: { fr: "Simple, avec moustiquaire", en: "Simple, with mosquito net", es: "Sencilla, con mosquitera" } },
          { label: { fr: "Hôtel 2–3★ Freetown / côte", en: "2–3★ hotel, Freetown / coast", es: "Hotel 2–3★ Freetown / costa" }, price: "40–70 €", detail: { fr: "Clim, eau chaude", en: "AC, hot water", es: "Aire acondicionado, agua caliente" } },
          { label: { fr: "Lodge ou beach resort", en: "Lodge or beach resort", es: "Lodge o resort de playa" }, price: "60–120 €", detail: { fr: "Péninsule ou Tiwai Island", en: "Peninsula or Tiwai Island", es: "Península o isla de Tiwai" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Riz cassava leaf (cuisine locale)", en: "Cassava leaf rice (local cuisine)", es: "Arroz con hojas de yuca (cocina local)" }, price: "2–4 €", detail: { fr: "Plat national sierraléonais", en: "The Sierra Leonean national dish", es: "Plato nacional de Sierra Leona" } },
          { label: { fr: "Poisson grillé au marché", en: "Grilled fish at the market", es: "Pescado a la parrilla en el mercado" }, price: "3–7 €", detail: { fr: "Barracuda, mérou frais", en: "Fresh barracuda, grouper", es: "Barracuda, mero fresco" } },
          { label: { fr: "Restaurant touristique Freetown", en: "Tourist restaurant in Freetown", es: "Restaurante turístico en Freetown" }, price: "12–25 €", detail: { fr: "Fruits de mer, cuisine fusion", en: "Seafood, fusion cuisine", es: "Marisco, cocina fusión" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Ferry Freetown–aéroport (en bateau)", en: "Ferry Freetown–airport (by boat)", es: "Ferry Freetown–aeropuerto (en barco)" }, price: "3–5 €", detail: { fr: "Traversée 30 min, essentiel", en: "30-minute crossing, essential", es: "Travesía de 30 min, esencial" } },
          { label: { fr: "Taxi partagé (poda-poda) en ville", en: "Shared taxi (poda-poda) in town", es: "Taxi compartido (poda-poda) en la ciudad" }, price: "0,30–1 €", detail: { fr: "Minibus local courant", en: "Common local minibus", es: "Minibús local habitual" } },
          { label: { fr: "4x4 ou véhicule privé / jour", en: "4x4 or private vehicle / day", es: "4x4 o vehículo privado / día" }, price: "60–90 €", detail: { fr: "Pour Tiwai Island ou l'intérieur", en: "For Tiwai Island or the interior", es: "Para la isla de Tiwai o el interior" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Visite sanctuaire de Tacugama", en: "Tacugama Sanctuary visit", es: "Visita al santuario de Tacugama" }, price: "15–25 €", detail: { fr: "Entrée + guide", en: "Entry + guide", es: "Entrada + guía" } },
          { label: { fr: "Séjour Tiwai Island (nuit + repas + guides)", en: "Tiwai Island stay (night + meals + guides)", es: "Estancia en la isla de Tiwai (noche + comidas + guías)" }, price: "50–80 €/j", detail: { fr: "All-inclusive communautaire", en: "Community-run all-inclusive", es: "Todo incluido comunitario" } },
          { label: { fr: "Sortie plage avec pirogue (River No. 2)", en: "Beach trip with canoe (River No. 2)", es: "Salida a la playa en piragua (River No. 2)" }, price: "5–15 €", detail: { fr: "Traversée du lagon", en: "Lagoon crossing", es: "Travesía de la laguna" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero" }, daily: "35–55 €/j", desc: { fr: "Guesthouse + bouffe locale + transport partagé", en: "Guesthouse + local food + shared transport", es: "Guesthouse + comida local + transporte compartido" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort" }, daily: "70–110 €/j", desc: { fr: "Hôtel 3★ + restos + excursions + 4x4", en: "3★ hotel + restaurants + excursions + 4x4", es: "Hotel 3★ + restaurantes + excursiones + 4x4" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días" },
      route: {
        fr: "Freetown (2j) → Plages de la péninsule (2j) → Tacugama (1j) → Tiwai Island (3j) → Retour Freetown (2j)",
        en: "Freetown (2d) → Peninsula beaches (2d) → Tacugama (1d) → Tiwai Island (3d) → Return to Freetown (2d)",
        es: "Freetown (2d) → Playas de la península (2d) → Tacugama (1d) → Isla de Tiwai (3d) → Regreso a Freetown (2d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "800 – 1 150 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Freetown (via escale)", en: "Return flight Paris–Freetown (with layover)", es: "Vuelo ida y vuelta Madrid–Freetown (con escala)" }, amount: "400–600 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)" }, amount: "180–280 €" },
            { label: { fr: "Transports locaux + ferry + 4x4", en: "Local transport + ferry + 4x4", es: "Transporte local + ferry + 4x4" }, amount: "100–160 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas" }, amount: "80–120 €" },
            { label: { fr: "Activités + Tiwai + guides", en: "Activities + Tiwai + guides", es: "Actividades + Tiwai + guías" }, amount: "100–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "1 700 – 2 400 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Freetown (via escale)", en: "Return flight Paris–Freetown (with layover)", es: "Vuelo ida y vuelta Madrid–Freetown (con escala)" }, amount: "500–750 €" },
            { label: { fr: "Hébergement lodges (10 nuits)", en: "Lodge accommodation (10 nights)", es: "Alojamiento en lodges (10 noches)" }, amount: "550–800 €" },
            { label: { fr: "Transports + 4x4 privatif", en: "Transport + private 4x4", es: "Transporte + 4x4 privado" }, amount: "300–450 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas" }, amount: "200–280 €" },
            { label: { fr: "Activités + guides", en: "Activities + guides", es: "Actividades + guías" }, amount: "150–200 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid" }, value: { fr: "~8–9h (via Bruxelles, Casablanca ou Addis-Abeba — pas de direct)", en: "~8–9h (via Brussels, Casablanca or Addis Ababa — no direct flight)", es: "~8–9h (vía Bruselas, Casablanca o Addis Abeba — sin vuelo directo)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "Visa obligatoire — e-Visa disponible en ligne (80 $)", en: "Visa required — e-Visa available online ($80)", es: "Visado obligatorio — e-Visa disponible en línea (80 $)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Leone (SLL) — dollar et euro acceptés dans les hôtels, espèces en zone rurale", en: "Leone (SLL) — dollar and euro accepted in hotels, cash in rural areas", es: "Leone (SLL) — dólar y euro aceptados en los hoteles, efectivo en zonas rurales" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Anglais (officiel) + Krio (créole, langue véhiculaire de toute la population)", en: "English (official) + Krio (creole, the lingua franca of the whole population)", es: "Inglés (oficial) + krio (criollo, lengua vehicular de toda la población)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico" }, value: { fr: "Type G (comme au Royaume-Uni) — 230 V (coupures fréquentes)", en: "Type G (as in the UK) — 230V (frequent power cuts)", es: "Tipo G (como en el Reino Unido) — 230 V (cortes frecuentes)" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Antipaludéen OBLIGATOIRE + fièvre jaune OBLIGATOIRE — eau en bouteille uniquement", en: "Antimalarial MANDATORY + yellow fever MANDATORY — bottled water only", es: "Antipalúdico OBLIGATORIO + fiebre amarilla OBLIGATORIA — solo agua embotellada" } },
    { icon: "⛴️", label: { fr: "Aéroport", en: "Airport", es: "Aeropuerto" }, value: { fr: "L'aéroport est de l'autre côté de la baie — prévoir ferry (30 min) ou hélicoptère", en: "The airport is on the other side of the bay — plan for a ferry (30 min) or helicopter", es: "El aeropuerto está al otro lado de la bahía — prever ferry (30 min) o helicóptero" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red" }, value: { fr: "Bonne couverture Orange et Africell à Freetown, limitée en zone rurale", en: "Good Orange and Africell coverage in Freetown, limited in rural areas", es: "Buena cobertura Orange y Africell en Freetown, limitada en zonas rurales" } },
  ],
};
