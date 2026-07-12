export const GAMBIA = {
  code: "GMB",
  numericId: 270,
  name: { fr: "Gambie", en: "Gambia", es: "Gambia" },
  emoji: "🇬🇲",
  capital: { fr: "Banjul", en: "Banjul", es: "Banjul" },
  language: { fr: "Anglais, Mandingue, Wolof, Fula", en: "English, Mandinka, Wolof, Fula", es: "Inglés, mandinga, wólof, fula" },
  currency: { fr: "Dalasi gambien (GMD)", en: "Gambian dalasi (GMD)", es: "Dalasi gambiano (GMD)" },
  timezone: "UTC+0",
  filter: {
    budgetMin: 40, budgetMid: 90,
    tripMin: 1300, tripMid: 2800,
  },
  description: {
    fr: "La Gambie est le plus petit pays d'Afrique continentale : un corridor de 50km de large autour du fleuve Gambie, enclavé dans le Sénégal. Réputée pour ses plages ensoleillées sur l'Atlantique (tourisme balnéaire nord-européen), son observation ornithologique exceptionnelle (560 espèces), les chimpanzés du Parc national de la Réserve de Kiang West et les sites historiques de la traite négrière sur l'île de Kunta Kinteh (UNESCO).",
    en: "Gambia is the smallest country on mainland Africa: a 50-km-wide corridor wrapped around the Gambia River and entirely surrounded by Senegal. It is known for its sunny Atlantic beaches (a favourite with northern European beachgoers), outstanding birdwatching (560 species), the chimpanzees of Kiang West National Park, and the historic slave trade sites on Kunta Kinteh Island (UNESCO).",
    es: "Gambia es el país más pequeño de la África continental: un corredor de 50km de ancho alrededor del río Gambia, rodeado por Senegal. Conocida por sus soleadas playas atlánticas (destino de sol para el turismo del norte de Europa), su excepcional observación ornitológica (560 especies), los chimpancés del Parque nacional de la Reserva de Kiang West y los sitios históricos de la trata de esclavos en la isla de Kunta Kinteh (UNESCO).",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Mai", en: "November – May", es: "Noviembre – Mayo" },
      label: { fr: "Saison sèche", en: "Dry season", es: "Temporada seca" },
      color: "#22c55e",
      description: {
        fr: "Excellente période : soleil garanti, peu de pluie, mer calme, températures agréables 25–32°C. Haute saison touristique.",
        en: "Excellent time to visit: guaranteed sunshine, very little rain, calm seas and pleasant temperatures of 25–32°C. Peak tourist season.",
        es: "Época excelente: sol garantizado, poca lluvia, mar en calma, temperaturas agradables de 25–32°C. Temporada alta turística.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Octobre", en: "June – October", es: "Junio – Octubre" },
      label: { fr: "Saison des pluies", en: "Rainy season", es: "Temporada de lluvias" },
      color: "#ef4444",
      description: {
        fr: "Fortes pluies (200–300mm/mois en août), humidité élevée, moustiques. Moins favorable pour le tourisme.",
        en: "Heavy rainfall (200–300 mm/month in August), high humidity and mosquitoes. Less favourable for tourism.",
        es: "Lluvias intensas (200–300mm/mes en agosto), humedad elevada, mosquitos. Menos favorable para el turismo.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "banjul",
      name: "Banjul / Serrekunda",
      region: { fr: "Grande Banjul", en: "Greater Banjul", es: "Gran Banjul" },
      data: [
        { month: "Jan", temp: 24, rain: 0,   icon: "☀️" },
        { month: "Fév", temp: 24, rain: 0,   icon: "☀️" },
        { month: "Mar", temp: 26, rain: 0,   icon: "☀️" },
        { month: "Avr", temp: 27, rain: 0,   icon: "⛅" },
        { month: "Mai", temp: 28, rain: 5,   icon: "⛅" },
        { month: "Jun", temp: 29, rain: 60,  icon: "⛅" },
        { month: "Jul", temp: 28, rain: 250, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 380, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 250, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 90,  icon: "⛅" },
        { month: "Nov", temp: 27, rain: 10,  icon: "⛅" },
        { month: "Déc", temp: 24, rain: 0,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Plages de Kololi & Senegambia", en: "Kololi & Senegambia Beaches", es: "Playas de Kololi y Senegambia" },
      region: { fr: "Banjul Ouest", en: "Western Banjul", es: "Banjul Oeste" },
      description: {
        fr: "Les plages de Kololi, Kotu et Senegambia sont le cœur du tourisme balnéaire gambien : sable blanc immaculé, eaux chaudes de l'Atlantique, palmiers, bars de plage animés. La strip de Senegambia concentre hôtels, restaurants et vie nocturne. Une destination de soleil d'hiver prisée des Britanniques et Scandinaves.",
        en: "The beaches of Kololi, Kotu and Senegambia are the heart of Gambian seaside tourism: pristine white sand, warm Atlantic waters, palm trees and lively beach bars. The Senegambia Strip brings together hotels, restaurants and nightlife. It is a favourite winter-sun escape for British and Scandinavian travellers.",
        es: "Las playas de Kololi, Kotu y Senegambia son el corazón del turismo de playa gambiano: arena blanca inmaculada, aguas cálidas del Atlántico, palmeras, animados bares de playa. La Senegambia Strip concentra hoteles, restaurantes y vida nocturna. Un destino de sol invernal muy popular entre británicos y escandinavos.",
      },
      wikipedia: "Kololi",
      tags: ["Plage", "Balnéaire", "Détente", "Soleil"],
      mustSee: [
        { name: { fr: "Plage de Kololi — la plus belle plage de Gambie", en: "Kololi Beach — the most beautiful beach in Gambia", es: "Playa de Kololi — la playa más bonita de Gambia" }, wikipedia: "Kololi" },
        { name: { fr: "Strip de Senegambia — restaurants, bars et vie nocturne", en: "Senegambia Strip — restaurants, bars and nightlife", es: "Senegambia Strip — restaurantes, bares y vida nocturna" }, wikipedia: "File:GambiaSenegambiaHotel067_(11853073665).jpg" },
        { name: { fr: "Craft Market de Bakau — artisanat local", en: "Bakau Craft Market — local handicrafts", es: "Mercado de artesanía de Bakau — artesanía local" }, wikipedia: "Bakau" },
        { name: { fr: "Crocodile Pool de Kachikally — crocodiles sacrés", en: "Kachikally Crocodile Pool — sacred crocodiles", es: "Estanque de cocodrilos de Kachikally — cocodrilos sagrados" }, wikipedia: "File:Gambia Kachikally 0002.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Île de Kunta Kinteh — Mémorial de la traite", en: "Kunta Kinteh Island — Slave Trade Memorial", es: "Isla de Kunta Kinteh — Memorial de la trata" },
      region: { fr: "Centre Gambie", en: "Central Gambia", es: "Gambia central" },
      description: {
        fr: "L'île de Kunta Kinteh (anciennement James Island, UNESCO) est le principal site de la traite négrière en Gambie — rendue célèbre par le roman Roots d'Alex Haley. Les ruines de Fort James (1651) sont classées UNESCO. Un site de mémoire profondément émouvant, accessible depuis Juffureh et Albreda, villages aux traditions mandingues préservées.",
        en: "Kunta Kinteh Island (formerly James Island, UNESCO) is Gambia's main slave trade site — made famous by Alex Haley's novel Roots. The ruins of Fort James (1651) are UNESCO-listed. It is a deeply moving memorial site, reached from Juffureh and Albreda, villages where Mandinka traditions are still preserved.",
        es: "La isla de Kunta Kinteh (antigua James Island, UNESCO) es el principal sitio de la trata de esclavos en Gambia — hecha célebre por la novela Roots de Alex Haley. Las ruinas del Fort James (1651) son Patrimonio UNESCO. Un lugar de memoria profundamente conmovedor, accesible desde Juffureh y Albreda, pueblos de tradiciones mandingas preservadas.",
      },
      wikipedia: "Kunta_Kinteh_Island",
      tags: ["UNESCO", "Histoire", "Mémorial", "Traite"],
      mustSee: [
        { name: { fr: "Île de Kunta Kinteh — ruines Fort James (UNESCO)", en: "Kunta Kinteh Island — Fort James ruins (UNESCO)", es: "Isla de Kunta Kinteh — ruinas del Fort James (UNESCO)" }, wikipedia: "File:Baobabs on James Island (4383600924).jpg" },
        { name: { fr: "Village de Juffureh — berceau de Kunta Kinteh (Roots)", en: "Juffureh village — birthplace of Kunta Kinteh (Roots)", es: "Pueblo de Juffureh — cuna de Kunta Kinteh (Roots)" }, wikipedia: "File:Never Again, Albreda Juffureh 2.jpg" },
        { name: { fr: "Musée de Albreda — histoire de la traite en Gambie", en: "Albreda Museum — the history of the slave trade in Gambia", es: "Museo de Albreda — historia de la trata en Gambia" }, wikipedia: "File:Albreda C9H-72.jpg" },
        { name: { fr: "Traversée en pirogue depuis Barra", en: "Pirogue crossing from Barra", es: "Travesía en piragua desde Barra" }, wikipedia: "Kunta_Kinteh_Island" },
      ],
    },
    {
      id: 3,
      name: { fr: "Observation ornithologique", en: "Birdwatching", es: "Observación de aves" },
      region: { fr: "Tout le pays", en: "Nationwide", es: "Todo el país" },
      description: {
        fr: "La Gambie est l'une des meilleures destinations ornithologiques au monde : 560 espèces dans un territoire minuscule. Abuko Nature Reserve (à 20min de Banjul), Tanji Bird Reserve, River Gambia National Park avec ses chimpanzés. Les birders du monde entier viennent ici pour cocher des espèces rares en quelques jours.",
        en: "Gambia is one of the world's best birdwatching destinations: 560 species in a tiny territory. Highlights include Abuko Nature Reserve (20 minutes from Banjul), Tanji Bird Reserve and River Gambia National Park with its chimpanzees. Birders from around the world come here to tick off rare species in just a few days.",
        es: "Gambia es uno de los mejores destinos ornitológicos del mundo: 560 especies en un territorio minúsculo. Destacan la Reserva Natural de Abuko (a 20min de Banjul), la Reserva de Aves de Tanji, y el Parque nacional del río Gambia con sus chimpancés. Observadores de aves de todo el mundo vienen aquí para avistar especies raras en pocos días.",
      },
      wikipedia: "Abuko_Nature_Reserve",
      tags: ["Oiseaux", "Nature", "Birding", "Chimpanzés"],
      mustSee: [
        { name: { fr: "Abuko Nature Reserve — 300 espèces à 20min de Banjul", en: "Abuko Nature Reserve — 300 species just 20 minutes from Banjul", es: "Reserva Natural de Abuko — 300 especies a 20min de Banjul" }, wikipedia: "File:Gambia abuko 003.jpg" },
        { name: { fr: "River Gambia National Park — chimpanzés sauvages", en: "River Gambia National Park — wild chimpanzees", es: "Parque nacional del río Gambia — chimpancés salvajes" }, wikipedia: "River_Gambia_National_Park" },
        { name: { fr: "Tanji Bird Reserve — oiseaux de rivière et côtiers", en: "Tanji Bird Reserve — river and coastal birds", es: "Reserva de Aves de Tanji — aves fluviales y costeras" }, wikipedia: "Tanji_Bird_Reserve" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Gambie est abordable pour un touriste occidental. Les complexes balnéaires de Kololi sont plus chers que l'intérieur du pays. La cuisine locale est excellente et très bon marché. Le dalasi peut fluctuer — prévoir livres sterling ou euros.",
      en: "Gambia is affordable for Western travellers. The beach resorts around Kololi are pricier than the interior of the country. Local food is excellent and very inexpensive. The dalasi can fluctuate, so it is wise to bring pounds sterling or euros.",
      es: "Gambia es asequible para un turista occidental. Los complejos de playa de Kololi son más caros que el interior del país. La cocina local es excelente y muy barata. El dalasi puede fluctuar — conviene llevar libras esterlinas o euros.",
    },
    currency: "GMD",
    exchangeRate: "1€ ≈ 75–80 GMD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Guesthouse / lodge local", en: "Local guesthouse / lodge", es: "Guesthouse / lodge local" }, price: "20–40 €", detail: { fr: "Simple, ventilateur ou clim", en: "Basic, with fan or air conditioning", es: "Sencillo, con ventilador o aire acondicionado" } },
          { label: { fr: "Hôtel 3★ Kololi / Senegambia", en: "3★ hotel in Kololi / Senegambia", es: "Hotel 3★ en Kololi / Senegambia" }, price: "60–100 €", detail: { fr: "Piscine, plage, petit-déj", en: "Pool, beach access, breakfast", es: "Piscina, playa, desayuno" } },
          { label: { fr: "Resort balnéaire tout-inclus", en: "All-inclusive beach resort", es: "Resort de playa todo incluido" }, price: "120–200 €", detail: { fr: "Front de mer, all-inclusive", en: "Beachfront, all-inclusive", es: "Frente al mar, todo incluido" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Benachin (riz au poisson) dans un local", en: "Benachin (fish and rice) at a local eatery", es: "Benachin (arroz con pescado) en un local" }, price: "2–5 €", detail: { fr: "Plat national gambien", en: "Gambia's national dish", es: "Plato nacional gambiano" } },
          { label: { fr: "Restaurant mid-range Kololi", en: "Mid-range restaurant in Kololi", es: "Restaurante de gama media en Kololi" }, price: "8–18 €", detail: { fr: "Poisson frais, barbecue", en: "Fresh fish, barbecue", es: "Pescado fresco, barbacoa" } },
          { label: { fr: "Restaurant gastronomique Senegambia", en: "Fine dining in Senegambia", es: "Restaurante gastronómico en Senegambia" }, price: "25–45 €", detail: { fr: "Cuisine internationale", en: "International cuisine", es: "Cocina internacional" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Bush taxi local — trajet entre villes", en: "Local bush taxi — intercity ride", es: "Bush taxi local — trayecto entre ciudades" }, price: "1–3 €", detail: { fr: "Économique mais bondé", en: "Cheap but crowded", es: "Económico pero abarrotado" } },
          { label: { fr: "Taxi touristique / voiture privée", en: "Tourist taxi / private car", es: "Taxi turístico / coche privado" }, price: "20–40 €/j", detail: { fr: "Recommandé pour excursions", en: "Recommended for excursions", es: "Recomendado para excursiones" } },
          { label: { fr: "Pirogue sur le fleuve Gambie", en: "Pirogue on the Gambia River", es: "Piragua en el río Gambia" }, price: "10–30 €", detail: { fr: "Excursion ornithologique", en: "Birdwatching excursion", es: "Excursión ornitológica" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Tour ornithologique avec guide (journée)", en: "Guided birdwatching tour (full day)", es: "Tour ornitológico con guía (día completo)" }, price: "30–60 €", detail: { fr: "Guide certifié, jumelles", en: "Certified guide, binoculars", es: "Guía certificado, prismáticos" } },
          { label: { fr: "Excursion île Kunta Kinteh (pirogue + guide)", en: "Kunta Kinteh Island excursion (pirogue + guide)", es: "Excursión a la isla de Kunta Kinteh (piragua + guía)" }, price: "25–50 €", detail: { fr: "Depuis Barra, journée", en: "From Barra, full day", es: "Desde Barra, día completo" } },
          { label: { fr: "Visite Abuko Nature Reserve", en: "Visit to Abuko Nature Reserve", es: "Visita a la Reserva Natural de Abuko" }, price: "5–10 €", detail: { fr: "Entrée + guide optionnel", en: "Entry + optional guide", es: "Entrada + guía opcional" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero" }, daily: "40–65 €/j", desc: { fr: "Guesthouse + cuisine locale + bush taxis", en: "Guesthouse + local food + bush taxis", es: "Guesthouse + cocina local + bush taxis" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort" }, daily: "90–140 €/j", desc: { fr: "Hôtel 3★ Kololi + restaurants + excursions", en: "3★ hotel in Kololi + restaurants + excursions", es: "Hotel 3★ en Kololi + restaurantes + excursiones" }, color: "#3b82f6" },
      { type: { fr: "Resort", en: "Resort", es: "Resort" }, daily: "160–250 €/j", desc: { fr: "All-inclusive bord de mer + circuits privés", en: "Beachfront all-inclusive + private tours", es: "Todo incluido frente al mar + circuitos privados" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días" },
      route: {
        fr: "Kololi / plages (4j) → Banjul + Abuko (2j) → remontée du fleuve Gambie (4j)",
        en: "Kololi / beaches (4d) → Banjul + Abuko (2d) → journey up the Gambia River (4d)",
        es: "Kololi / playas (4d) → Banjul + Abuko (2d) → remontada del río Gambia (4d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "1 300 – 2 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Banjul", en: "Return flight Paris–Banjul", es: "Vuelo ida y vuelta Madrid–Banjul" }, amount: "500–700 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)" }, amount: "250–400 €" },
            { label: { fr: "Transports locaux + pirogue", en: "Local transport + pirogue", es: "Transporte local + piragua" }, amount: "150–250 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida" }, amount: "150–250 €" },
            { label: { fr: "Activités & guides", en: "Activities & guides", es: "Actividades y guías" }, amount: "150–300 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "2 800 – 4 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Banjul", en: "Return flight Paris–Banjul", es: "Vuelo ida y vuelta Madrid–Banjul" }, amount: "600–800 €" },
            { label: { fr: "Hôtel 3★ + lodge (10 nuits)", en: "3★ hotel + lodge (10 nights)", es: "Hotel 3★ + lodge (10 noches)" }, amount: "800–1 200 €" },
            { label: { fr: "Voiture privée / excursions", en: "Private car / excursions", es: "Coche privado / excursiones" }, amount: "400–600 €" },
            { label: { fr: "Nourriture & sorties", en: "Food & outings", es: "Comida y salidas" }, amount: "400–600 €" },
            { label: { fr: "Guides ornithologiques", en: "Birdwatching guides", es: "Guías ornitológicos" }, amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid" }, value: { fr: "~6h (Brussels Airlines, Corsair saison, Transavia, Turkish via Istanbul)", en: "~6h (Brussels Airlines, seasonal Corsair, Transavia, Turkish via Istanbul)", es: "~6h (Brussels Airlines, Corsair de temporada, Transavia, Turkish vía Estambul)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "Pas de visa requis pour les ressortissants français et UE (90 jours).", en: "No visa required for French and EU nationals (90 days).", es: "Sin visado para ciudadanos de la UE (90 días)." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Dalasi gambien (GMD). Euros et livres sterling acceptés dans les hôtels.", en: "Gambian dalasi (GMD). Euros and pounds sterling are accepted in hotels.", es: "Dalasi gambiano (GMD). Se aceptan euros y libras esterlinas en los hoteles." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Anglais (officiel) — communication facile.", en: "English (official) — easy communication.", es: "Inglés (oficial) — comunicación fácil." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico" }, value: { fr: "Type G (britannique) — 230V. Adaptateur recommandé.", en: "Type G (British) — 230V. Adapter recommended.", es: "Tipo G (británico) — 230V. Adaptador recomendado." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Vaccin fièvre jaune recommandé. Antipaludéen indispensable (Malarone/Doxycycline).", en: "Yellow fever vaccination recommended. Antimalarial medication is essential (Malarone/Doxycycline).", es: "Se recomienda vacuna de fiebre amarilla. Antipalúdico indispensable (Malarone/Doxiciclina)." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo" }, value: { fr: "Non potable — eau en bouteille indispensable.", en: "Not drinkable — bottled water is essential.", es: "No potable — el agua embotellada es indispensable." } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red móvil" }, value: { fr: "Bonne couverture dans les zones touristiques. Intérieur plus aléatoire. SIM Africell recommandée.", en: "Good coverage in tourist areas. More patchy inland. Africell SIM recommended.", es: "Buena cobertura en zonas turísticas. Más irregular en el interior. Se recomienda SIM Africell." } },
  ],
};
