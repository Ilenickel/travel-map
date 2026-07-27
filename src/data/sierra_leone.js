export const SIERRA_LEONE = {
  code: "SLE",
  numericId: 694,
  name: { fr: "Sierra Leone", en: "Sierra Leone", es: "Sierra Leona", de: "Sierra Leone" },
  emoji: "🇸🇱",
  capital: { fr: "Freetown", en: "Freetown", es: "Freetown", de: "Freetown" },
  language: { fr: "Anglais (officiel), Krio (créole local)", en: "English (official), Krio (local creole)", es: "Inglés (oficial), krio (criollo local)", de: "Englisch (offiziell), Krio (lokales Kreolisch)" },
  currency: { fr: "Leone (SLL)", en: "Leone (SLL)", es: "Leone (SLL)", de: "Leone (SLL)" },
  timezone: "UTC",
  filter: {
    budgetMin: 35, budgetMid: 70,
    tripMin: 800, tripMid: 1700,
  },
  criteria: {
    unesco: 1,
    nature: 2,
    randonnee: 1,
    gastronomie: 1,
    architecture: 1,
    desert: 0,
    safari: 2,
    ski: 0,
    ville: 0,
    plage: 2,
    plongee: 1,
  },
  description: {
    fr: "La Sierra Leone est une destination en pleine renaissance touristique, avec des plages parmi les plus belles d'Afrique de l'Ouest encore presque désertes. Freetown et son coton-tree centenaire, l'île de Tiwai (sanctuaire de l'hippopotame pygmée et des colobes), les plages de Tokeh et River No. 2, et le sanctuaire de chimpanzés de Tacugama composent un itinéraire naturel exceptionnel.", en: "Sierra Leone is a destination undergoing a tourism renaissance, with some of the most beautiful beaches in West Africa still almost deserted. Freetown and its centuries-old cotton tree, Tiwai Island (sanctuary of the pygmy hippopotamus and colobus monkeys), the beaches of Tokeh and River No. 2, and the Tacugama chimpanzee sanctuary make up an exceptional natural itinerary.", es: "Sierra Leona es un destino en plena renovación turística, con playas entre las más bellas de África Occidental todavía casi desiertas. Freetown y su centenario árbol del algodón, la isla de Tiwai (santuario del hipopótamo pigmeo y los colobos), las playas de Tokeh y River No. 2, y el santuario de chimpancés de Tacugama componen un itinerario natural excepcional.", de: "Sierra Leone ist ein Reiseziel, das eine touristische Renaissance erlebt, wobei einige der schönsten Strände Westafrikas noch immer fast menschenleer sind. Freetown und sein jahrhundertealter Baumwollbaum, die Insel Tiwai (Zwergflusspferd- und Colobus-Schutzgebiet), die Strände von Tokeh und River No. 2 sowie das Schimpansenschutzgebiet von Tacugama bilden eine außergewöhnliche Naturroute.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Avril", en: "November – April", es: "Noviembre – Abril", de: "November – April" },
      label: { fr: "Saison sèche", en: "Dry season", es: "Estación seca", de: "Trockenzeit" },
      color: "#22c55e",
      description: {
        fr: "Saison sèche idéale pour visiter les plages, la brousse et l'île de Tiwai. Temps ensoleillé, routes praticables, température de 27–31°C.", en: "Ideal dry season for visiting the beaches, the bush and Tiwai Island. Sunny weather, passable roads, temperatures of 27–31°C.", es: "Estación seca ideal para visitar las playas, la sabana y la isla de Tiwai. Tiempo soleado, carreteras transitables, temperatura de 27–31 °C.", de: "Ideale Trockenzeit für den Besuch der Strände, des Busches und der Insel Tiwai. Sonniges Wetter, befahrbare Straßen, Temperatur 27–31°C.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Mai – Octobre", en: "May – October", es: "Mayo – Octubre", de: "Mai – Oktober" },
      label: { fr: "Saison des pluies", en: "Rainy season", es: "Estación de lluvias", de: "Regenzeit" },
      color: "#ef4444",
      description: {
        fr: "L'une des saisons des pluies les plus intenses d'Afrique avec 500–800 mm/mois en juillet-août. Routes dégradées, certaines zones inaccessibles. Déconseillé.", en: "One of the most intense rainy seasons in Africa, with 500–800 mm/month in July–August. Roads deteriorate, some areas inaccessible. Not recommended.", es: "Una de las estaciones de lluvias más intensas de África, con 500–800 mm/mes en julio-agosto. Carreteras deterioradas, algunas zonas inaccesibles. Desaconsejado.", de: "Eine der intensivsten Regenzeiten in Afrika mit 500–800 mm/Monat im Juli-August. Degradierte Straßen, einige unzugängliche Gebiete. Nicht empfohlen.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "freetown",
      name: "Freetown",
      region: { fr: "Freetown (côte, péninsule)", en: "Freetown (coast, peninsula)", es: "Freetown (costa, península)", de: "Freetown (Küste, Halbinsel)" },
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
      region: { fr: "Freetown", en: "Freetown", es: "Freetown", de: "Freetown" },
      description: {
        fr: "Freetown, capitale fondée en 1787 pour accueillir des esclaves libérés, possède une histoire unique liée à l'abolition. Le coton-tree centenaire au cœur de la ville, le Musée national, le quartier de Krio Cotton Tree et l'île de Banana racontent cette mémoire singulière sur fond d'animation africaine.", en: "Freetown, founded in 1787 to house freed slaves, has a unique history tied to abolition. The centuries-old cotton tree at the heart of the city, the National Museum, the Krio Cotton Tree district and Banana Island tell this singular story against a backdrop of vibrant African life.", es: "Freetown, capital fundada en 1787 para acoger a esclavos liberados, posee una historia única ligada a la abolición. El centenario árbol del algodón en el corazón de la ciudad, el Museo Nacional, el barrio de Krio Cotton Tree y la isla Banana narran esta memoria singular sobre un fondo de animación africana.", de: "Freetown, die 1787 zur Unterbringung befreiter Sklaven gegründete Hauptstadt, hat eine einzigartige Geschichte im Zusammenhang mit der Abschaffung der Sklaverei. Der jahrhundertealte Baumwollbaum im Herzen der Stadt, das Nationalmuseum, das Krio-Baumwollbaumviertel und die Bananeninsel erzählen die Geschichte dieser einzigartigen Erinnerung vor dem Hintergrund afrikanischer Animationen.",
      },
      wikipedia: "Freetown",
      tags: ["Histoire", "Culture", "Ville"],
      mustSee: [
        { name: { fr: "Cotton Tree — kapokier tricentenaire symbole de la ville", en: "Cotton Tree — 300-year-old kapok tree, symbol of the city", es: "Cotton Tree — árbol de kapok tricentenario, símbolo de la ciudad", de: "Baumwollbaum – 300 Jahre alter Kapokbaum, Symbol der Stadt" }, wikipedia: "Cotton_Tree_(Sierra_Leone)" },
        { name: "Sierra Leone National Museum", wikipedia: "Sierra_Leone_National_Museum" },
        { name: { fr: "Île de Banana (Bunce Island) — comptoir négrier", en: "Banana Island (Bunce Island) — former slave trading post", es: "Isla Banana (Bunce Island) — antiguo enclave esclavista", de: "Banana Island (Bunce Island) – Sklavenhandelsposten" }, wikipedia: "File:Bunce Island Beach.jpg" },
        { name: { fr: "Marché de Freetown — Lumley Market", en: "Freetown Market — Lumley Market", es: "Mercado de Freetown — Lumley Market", de: "Freetown-Markt – Lumley-Markt" }, wikipedia: "File:Freetown_street_(13992704238).jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Plages de la péninsule de Freetown", en: "Beaches of the Freetown Peninsula", es: "Playas de la península de Freetown", de: "Strände der Freetown-Halbinsel" },
      region: { fr: "Western Area Rural", en: "Western Area Rural", es: "Western Area Rural", de: "Westlicher ländlicher Raum" },
      description: {
        fr: "La péninsule de Freetown abrite des plages de sable blanc encore peu fréquentées et d'une beauté exceptionnelle. River No. 2 Beach, encadrée de palmiers et d'un lagon, et Tokeh Beach figurent parmi les plus belles plages d'Afrique de l'Ouest.", en: "The Freetown Peninsula is home to exceptionally beautiful, still little-visited white sand beaches. River No. 2 Beach, framed by palm trees and a lagoon, and Tokeh Beach rank among the most beautiful beaches in West Africa.", es: "La península de Freetown alberga playas de arena blanca todavía poco frecuentadas y de una belleza excepcional. River No. 2 Beach, enmarcada por palmeras y una laguna, y Tokeh Beach figuran entre las playas más bellas de África Occidental.", de: "Auf der Halbinsel Freetown gibt es nicht überfüllte weiße Sandstrände von außergewöhnlicher Schönheit. River No. 2 Beach, umrahmt von Palmen und einer Lagune, und Tokeh Beach gehören zu den schönsten Stränden Westafrikas.",
      },
      wikipedia: "File:Beach in Freetown, Sierra Leone (14176784751).jpg",
      tags: ["Plage", "Nature", "Détente"],
      mustSee: [
        { name: { fr: "River No. 2 Beach — lagon et palmiers, top Afrique", en: "River No. 2 Beach — lagoon and palm trees, a top African beach", es: "River No. 2 Beach — laguna y palmeras, top de África", de: "Fluss Nr. 2 Strand – Lagune und Palmen, Top-Afrika" }, wikipedia: "File:River_No._2_Beach_(Sierra_Leone).jpg" },
        { name: { fr: "Tokeh Beach — plage de sable blanc préservée", en: "Tokeh Beach — pristine white sand beach", es: "Tokeh Beach — playa de arena blanca preservada", de: "Tokeh Beach – unberührter weißer Sandstrand" }, wikipedia: "File:Tokeh_Beach.jpg" },
        { name: { fr: "Kent Beach au bout de la péninsule", en: "Kent Beach at the tip of the peninsula", es: "Kent Beach en el extremo de la península", de: "Kent Beach am Ende der Halbinsel" }, wikipedia: "File:The beach at Deal, Kent - geograph.org.uk - 6079466.jpg" },
        { name: { fr: "Plage de Bureh — vagues pour le surf", en: "Bureh Beach — waves for surfing", es: "Playa de Bureh — olas para el surf", de: "Bureh Beach – Wellen zum Surfen" }, wikipedia: "File:Freetown_beach.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Île de Tiwai", en: "Tiwai Island", es: "Isla de Tiwai", de: "Tiwai-Insel" },
      region: { fr: "Pujehun", en: "Pujehun", es: "Pujehun", de: "Pujehun" },
      description: {
        fr: "L'île de Tiwai, dans la rivière Moa, est un sanctuaire naturel privé abritant l'une des plus fortes densités de primates au monde. On y observe 11 espèces de primates dont le colobe de Diana en danger, le sooty mangabey, et surtout l'hippopotame pygmée dans son milieu naturel.", en: "Tiwai Island, in the Moa River, is a private nature sanctuary home to one of the highest densities of primates in the world. Visitors can observe 11 primate species including the endangered Diana monkey, the sooty mangabey, and above all the pygmy hippopotamus in its natural habitat.", es: "La isla de Tiwai, en el río Moa, es un santuario natural privado que alberga una de las mayores densidades de primates del mundo. Se pueden observar 11 especies de primates, entre ellas el colobo de Diana en peligro, el mangabey ahumado, y sobre todo el hipopótamo pigmeo en su hábitat natural.", de: "Tiwai Island im Moa River ist ein privates Naturschutzgebiet mit einer der höchsten Primatendichten der Welt. Wir beobachten 11 Primatenarten, darunter den vom Aussterben bedrohten Diana-Stummelaffe, die Rußmangabe und insbesondere das Zwergflusspferd in ihrer natürlichen Umgebung.",
      },
      wikipedia: "Tiwai_Island",
      tags: ["Nature", "Safari"],
      mustSee: [
        { name: { fr: "Hippopotame pygmée — espèce rarissime", en: "Pygmy hippopotamus — an extremely rare species", es: "Hipopótamo pigmeo — especie rarísima", de: "Zwergflusspferd – äußerst seltene Art" }, wikipedia: "Pygmy_hippopotamus" },
        { name: { fr: "Colobe de Diana et 10 autres espèces de primates", en: "Diana monkey and 10 other primate species", es: "Colobo de Diana y otras 10 especies de primates", de: "Dianas Colobus und 10 weitere Primatenarten" }, wikipedia: "Diana_monkey" },
        { name: { fr: "Balade en pirogue autour de l'île", en: "Canoe trip around the island", es: "Paseo en piragua alrededor de la isla", de: "Kanutour um die Insel" }, wikipedia: "Tiwai_Island" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Sierra Leone est abordable pour les voyageurs, même si les prix ont augmenté avec la reprise du tourisme. Freetown et les plages restent bon marché par rapport aux standards internationaux, et la qualité du poisson frais et des fruits de mer est excellente.", en: "Sierra Leone is affordable for travellers, even though prices have risen with the tourism revival. Freetown and the beaches remain cheap by international standards, and the quality of fresh fish and seafood is excellent.", es: "Sierra Leona es asequible para los viajeros, aunque los precios han subido con la recuperación del turismo. Freetown y las playas siguen siendo baratas según los estándares internacionales, y la calidad del pescado fresco y el marisco es excelente.", de: "Sierra Leone ist für Reisende erschwinglich, obwohl die Preise mit der Wiederaufnahme des Tourismus gestiegen sind. Freetown und die Strände sind im internationalen Vergleich immer noch günstig und die Qualität von frischem Fisch und Meeresfrüchten ist ausgezeichnet.",
    },
    currency: "SLL",
    exchangeRate: "1€ ≈ 25 000 SLL",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse locale à Freetown", en: "Local guesthouse in Freetown", es: "Guesthouse local en Freetown", de: "Lokales Gästehaus in Freetown" }, price: "15–30 €", detail: { fr: "Simple, avec moustiquaire", en: "Simple, with mosquito net", es: "Sencilla, con mosquitera", de: "Einfach, mit Moskitonetz" } },
          { label: { fr: "Hôtel 2–3★ Freetown / côte", en: "2–3★ hotel, Freetown / coast", es: "Hotel 2–3★ Freetown / costa", de: "Hotel 2–3★ Freetown / Küste" }, price: "40–70 €", detail: { fr: "Clim, eau chaude", en: "AC, hot water", es: "Aire acondicionado, agua caliente", de: "Klimaanlage, Warmwasser" } },
          { label: { fr: "Lodge ou beach resort", en: "Lodge or beach resort", es: "Lodge o resort de playa", de: "Lodge oder Strandresort" }, price: "60–120 €", detail: { fr: "Péninsule ou Tiwai Island", en: "Peninsula or Tiwai Island", es: "Península o isla de Tiwai", de: "Halbinsel oder Tiwai-Insel" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Riz cassava leaf (cuisine locale)", en: "Cassava leaf rice (local cuisine)", es: "Arroz con hojas de yuca (cocina local)", de: "Maniokblattreis (lokale Küche)" }, price: "2–4 €", detail: { fr: "Plat national sierraléonais", en: "The Sierra Leonean national dish", es: "Plato nacional de Sierra Leona", de: "Nationalgericht aus Sierra Leone" } },
          { label: { fr: "Poisson grillé au marché", en: "Grilled fish at the market", es: "Pescado a la parrilla en el mercado", de: "Gegrillter Fisch auf dem Markt" }, price: "3–7 €", detail: { fr: "Barracuda, mérou frais", en: "Fresh barracuda, grouper", es: "Barracuda, mero fresco", de: "Barrakuda, frischer Zackenbarsch" } },
          { label: { fr: "Restaurant touristique Freetown", en: "Tourist restaurant in Freetown", es: "Restaurante turístico en Freetown", de: "Touristenrestaurant Freetown" }, price: "12–25 €", detail: { fr: "Fruits de mer, cuisine fusion", en: "Seafood, fusion cuisine", es: "Marisco, cocina fusión", de: "Meeresfrüchte, Fusionsküche" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Ferry Freetown–aéroport (en bateau)", en: "Ferry Freetown–airport (by boat)", es: "Ferry Freetown–aeropuerto (en barco)", de: "Fähre Freetown–Flughafen (mit dem Boot)" }, price: "3–5 €", detail: { fr: "Traversée 30 min, essentiel", en: "30-minute crossing, essential", es: "Travesía de 30 min, esencial", de: "Überfahrt 30 Minuten, unbedingt erforderlich" } },
          { label: { fr: "Taxi partagé (poda-poda) en ville", en: "Shared taxi (poda-poda) in town", es: "Taxi compartido (poda-poda) en la ciudad", de: "Sammeltaxi (Poda-Poda) in der Stadt" }, price: "0,30–1 €", detail: { fr: "Minibus local courant", en: "Common local minibus", es: "Minibús local habitual", de: "Gemeinsamer lokaler Kleinbus" } },
          { label: { fr: "4x4 ou véhicule privé / jour", en: "4x4 or private vehicle / day", es: "4x4 o vehículo privado / día", de: "4x4 oder Privatfahrzeug / Tag" }, price: "60–90 €", detail: { fr: "Pour Tiwai Island ou l'intérieur", en: "For Tiwai Island or the interior", es: "Para la isla de Tiwai o el interior", de: "Für Tiwai Island oder den Innenraum" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Visite sanctuaire de Tacugama", en: "Tacugama Sanctuary visit", es: "Visita al santuario de Tacugama", de: "Besuchen Sie das Tacugama-Heiligtum" }, price: "15–25 €", detail: { fr: "Entrée + guide", en: "Entry + guide", es: "Entrada + guía", de: "Eintritt + Führung" } },
          { label: { fr: "Séjour Tiwai Island (nuit + repas + guides)", en: "Tiwai Island stay (night + meals + guides)", es: "Estancia en la isla de Tiwai (noche + comidas + guías)", de: "Aufenthalt auf der Insel Tiwai (Übernachtung + Mahlzeiten + Führer)" }, price: "50–80 €/j", detail: { fr: "All-inclusive communautaire", en: "Community-run all-inclusive", es: "Todo incluido comunitario", de: "All-Inclusive-Gemeinschaft" } },
          { label: { fr: "Sortie plage avec pirogue (River No. 2)", en: "Beach trip with canoe (River No. 2)", es: "Salida a la playa en piragua (River No. 2)", de: "Strandausflug mit Kanu (Fluss Nr. 2)" }, price: "5–15 €", detail: { fr: "Traversée du lagon", en: "Lagoon crossing", es: "Travesía de la laguna", de: "Überquerung der Lagune" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "35–55 €/j", desc: { fr: "Guesthouse + bouffe locale + transport partagé", en: "Guesthouse + local food + shared transport", es: "Guesthouse + comida local + transporte compartido", de: "Gästehaus + lokales Essen + gemeinsamer Transport" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "70–110 €/j", desc: { fr: "Hôtel 3★ + restos + excursions + 4x4", en: "3★ hotel + restaurants + excursions + 4x4", es: "Hotel 3★ + restaurantes + excursiones + 4x4", de: "3★ Hotel + Restaurants + Ausflüge + 4x4" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: {
        fr: "Freetown (2j) → Plages de la péninsule (2j) → Tacugama (1j) → Tiwai Island (3j) → Retour Freetown (2j)", en: "Freetown (2d) → Peninsula beaches (2d) → Tacugama (1d) → Tiwai Island (3d) → Return to Freetown (2d)", es: "Freetown (2d) → Playas de la península (2d) → Tacugama (1d) → Isla de Tiwai (3d) → Regreso a Freetown (2d)", de: "Freetown (2 Tage) → Strände der Halbinsel (2 Tage) → Tacugama (1 Tag) → Tiwai Island (3 Tage) → Rückkehr nach Freetown (2 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "800 – 1 150 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Freetown (via escale)", en: "Return flight Paris–Freetown (with layover)", es: "Vuelo ida y vuelta Madrid–Freetown (con escala)", de: "Hin- und Rückflug Paris–Freetown (mit Zwischenstopp)" }, amount: "400–600 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "180–280 €" },
            { label: { fr: "Transports locaux + ferry + 4x4", en: "Local transport + ferry + 4x4", es: "Transporte local + ferry + 4x4", de: "Nahverkehr + Fähre + 4x4" }, amount: "100–160 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "80–120 €" },
            { label: { fr: "Activités + Tiwai + guides", en: "Activities + Tiwai + guides", es: "Actividades + Tiwai + guías", de: "Aktivitäten + Tiwai + Führer" }, amount: "100–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "1 700 – 2 400 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Freetown (via escale)", en: "Return flight Paris–Freetown (with layover)", es: "Vuelo ida y vuelta Madrid–Freetown (con escala)", de: "Hin- und Rückflug Paris–Freetown (mit Zwischenstopp)" }, amount: "500–750 €" },
            { label: { fr: "Hébergement lodges (10 nuits)", en: "Lodge accommodation (10 nights)", es: "Alojamiento en lodges (10 noches)", de: "Lodge-Unterkunft (10 Nächte)" }, amount: "550–800 €" },
            { label: { fr: "Transports + 4x4 privatif", en: "Transport + private 4x4", es: "Transporte + 4x4 privado", de: "Transport + privater 4x4" }, amount: "300–450 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "200–280 €" },
            { label: { fr: "Activités + guides", en: "Activities + guides", es: "Actividades + guías", de: "Aktivitäten + Führer" }, amount: "150–200 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~8–9h (via Bruxelles, Casablanca ou Addis-Abeba — pas de direct)", en: "~8–9h (via Brussels, Casablanca or Addis Ababa — no direct flight)", es: "~8–9h (vía Bruselas, Casablanca o Addis Abeba — sin vuelo directo)", de: "ca. 8–9 Std. (über Brüssel, Casablanca oder Addis Abeba – kein Direktflug)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Visa obligatoire — e-Visa disponible en ligne (80 $)", en: "Visa required — e-Visa available online ($80)", es: "Visado obligatorio — e-Visa disponible en línea (80 $)", de: "Visum erforderlich – E-Visum online verfügbar (80 $)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Leone (SLL) — dollar et euro acceptés dans les hôtels, espèces en zone rurale", en: "Leone (SLL) — dollar and euro accepted in hotels, cash in rural areas", es: "Leone (SLL) — dólar y euro aceptados en los hoteles, efectivo en zonas rurales", de: "Leone (SLL) – Dollar und Euro werden in Hotels akzeptiert, Bargeld in ländlichen Gebieten" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Anglais (officiel) + Krio (créole, langue véhiculaire de toute la population)", en: "English (official) + Krio (creole, the lingua franca of the whole population)", es: "Inglés (oficial) + krio (criollo, lengua vehicular de toda la población)", de: "Englisch (offiziell) + Krio (Kreolisch, gemeinsame Sprache der gesamten Bevölkerung)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type G (comme au Royaume-Uni) — 230 V (coupures fréquentes)", en: "Type G (as in the UK) — 230V (frequent power cuts)", es: "Tipo G (como en el Reino Unido) — 230 V (cortes frecuentes)", de: "Typ G (wie im Vereinigten Königreich) – 230 V (häufige Ausfälle)" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Antipaludéen OBLIGATOIRE + fièvre jaune OBLIGATOIRE — eau en bouteille uniquement", en: "Antimalarial MANDATORY + yellow fever MANDATORY — bottled water only", es: "Antipalúdico OBLIGATORIO + fiebre amarilla OBLIGATORIA — solo agua embotellada", de: "OBLIGATORISCHES Malariamittel + OBLIGATORISCHES Gelbfiebermittel – nur Wasser in Flaschen" } },
    { icon: "⛴️", label: { fr: "Aéroport", en: "Airport", es: "Aeropuerto", de: "Flughafen" }, value: { fr: "L'aéroport est de l'autre côté de la baie — prévoir ferry (30 min) ou hélicoptère", en: "The airport is on the other side of the bay — plan for a ferry (30 min) or helicopter", es: "El aeropuerto está al otro lado de la bahía — prever ferry (30 min) o helicóptero", de: "Der Flughafen liegt auf der anderen Seite der Bucht – per Fähre (30 Min.) oder Helikopter" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red", de: "Mobilfunknetz" }, value: { fr: "Bonne couverture Orange et Africell à Freetown, limitée en zone rurale", en: "Good Orange and Africell coverage in Freetown, limited in rural areas", es: "Buena cobertura Orange y Africell en Freetown, limitada en zonas rurales", de: "Gute Orange- und Africell-Abdeckung in Freetown, begrenzt in ländlichen Gebieten" } },
  ],
};
