export const GAMBIA = {
  code: "GMB",
  numericId: 270,
  name: { fr: "Gambie", en: "Gambia", es: "Gambia", de: "Gambia" },
  emoji: "🇬🇲",
  capital: { fr: "Banjul", en: "Banjul", es: "Banjul", de: "Banjul" },
  language: { fr: "Anglais, Mandingue, Wolof, Fula", en: "English, Mandinka, Wolof, Fula", es: "Inglés, mandinga, wólof, fula", de: "Englisch, Mandingo, Wolof, Fula" },
  currency: { fr: "Dalasi gambien (GMD)", en: "Gambian dalasi (GMD)", es: "Dalasi gambiano (GMD)", de: "Gambischer Dalasi (GMD)" },
  timezone: "UTC+0",
  filter: {
    budgetMin: 40, budgetMid: 90,
    tripMin: 1300, tripMid: 2800,
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
    ville: 1,
    plage: 2,
  },
  description: {
    fr: "La Gambie est le plus petit pays d'Afrique continentale : un corridor de 50km de large autour du fleuve Gambie, enclavé dans le Sénégal. Réputée pour ses plages ensoleillées sur l'Atlantique (tourisme balnéaire nord-européen), son observation ornithologique exceptionnelle (560 espèces), les chimpanzés du Parc national de la Réserve de Kiang West et les sites historiques de la traite négrière sur l'île de Kunta Kinteh (UNESCO).", en: "Gambia is the smallest country on mainland Africa: a 50-km-wide corridor wrapped around the Gambia River and entirely surrounded by Senegal. It is known for its sunny Atlantic beaches (a favourite with northern European beachgoers), outstanding birdwatching (560 species), the chimpanzees of Kiang West National Park, and the historic slave trade sites on Kunta Kinteh Island (UNESCO).", es: "Gambia es el país más pequeño de la África continental: un corredor de 50km de ancho alrededor del río Gambia, rodeado por Senegal. Conocida por sus soleadas playas atlánticas (destino de sol para el turismo del norte de Europa), su excepcional observación ornitológica (560 especies), los chimpancés del Parque nacional de la Reserva de Kiang West y los sitios históricos de la trata de esclavos en la isla de Kunta Kinteh (UNESCO).", de: "Gambia ist das kleinste Land in Kontinentalafrika: ein 50 km breiter Korridor um den Gambia-Fluss, der im Senegal liegt. Bekannt für seine sonnigen Strände am Atlantik (nordeuropäischer Badetourismus), seine außergewöhnliche ornithologische Beobachtung (560 Arten), die Schimpansen des Kiang West Reserve Nationalparks und die historischen Stätten des Sklavenhandels auf der Insel Kunta Kinteh (UNESCO).",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Mai", en: "November – May", es: "Noviembre – Mayo", de: "November – Mai" },
      label: { fr: "Saison sèche", en: "Dry season", es: "Temporada seca", de: "Trockenzeit" },
      color: "#22c55e",
      description: {
        fr: "Excellente période : soleil garanti, peu de pluie, mer calme, températures agréables 25–32°C. Haute saison touristique.", en: "Excellent time to visit: guaranteed sunshine, very little rain, calm seas and pleasant temperatures of 25–32°C. Peak tourist season.", es: "Época excelente: sol garantizado, poca lluvia, mar en calma, temperaturas agradables de 25–32°C. Temporada alta turística.", de: "Ausgezeichnete Zeit: Sonnenschein garantiert, wenig Regen, ruhige See, angenehme Temperaturen 25–32 °C. Hochsaison für Touristen.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Octobre", en: "June – October", es: "Junio – Octubre", de: "Juni – Oktober" },
      label: { fr: "Saison des pluies", en: "Rainy season", es: "Temporada de lluvias", de: "Regenzeit" },
      color: "#ef4444",
      description: {
        fr: "Fortes pluies (200–300mm/mois en août), humidité élevée, moustiques. Moins favorable pour le tourisme.", en: "Heavy rainfall (200–300 mm/month in August), high humidity and mosquitoes. Less favourable for tourism.", es: "Lluvias intensas (200–300mm/mes en agosto), humedad elevada, mosquitos. Menos favorable para el turismo.", de: "Starker Regen (200–300 mm/Monat im August), hohe Luftfeuchtigkeit, Mücken. Weniger günstig für den Tourismus.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "banjul",
      name: "Banjul / Serrekunda",
      region: { fr: "Grande Banjul", en: "Greater Banjul", es: "Gran Banjul", de: "Großraum Banjul" },
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
      name: { fr: "Plages de Kololi & Senegambia", en: "Kololi & Senegambia Beaches", es: "Playas de Kololi y Senegambia", de: "Strände von Kololi und Senegambia" },
      region: { fr: "Banjul Ouest", en: "Western Banjul", es: "Banjul Oeste", de: "West-Banjul" },
      description: {
        fr: "Les plages de Kololi, Kotu et Senegambia sont le cœur du tourisme balnéaire gambien : sable blanc immaculé, eaux chaudes de l'Atlantique, palmiers, bars de plage animés. La strip de Senegambia concentre hôtels, restaurants et vie nocturne. Une destination de soleil d'hiver prisée des Britanniques et Scandinaves.", en: "The beaches of Kololi, Kotu and Senegambia are the heart of Gambian seaside tourism: pristine white sand, warm Atlantic waters, palm trees and lively beach bars. The Senegambia Strip brings together hotels, restaurants and nightlife. It is a favourite winter-sun escape for British and Scandinavian travellers.", es: "Las playas de Kololi, Kotu y Senegambia son el corazón del turismo de playa gambiano: arena blanca inmaculada, aguas cálidas del Atlántico, palmeras, animados bares de playa. La Senegambia Strip concentra hoteles, restaurantes y vida nocturna. Un destino de sol invernal muy popular entre británicos y escandinavos.", de: "Die Strände von Kololi, Kotu und Senegambia sind das Herzstück des gambischen Strandtourismus: unberührter weißer Sand, warmes Atlantikwasser, Palmen, lebhafte Strandbars. Der Senegambia-Streifen konzentriert Hotels, Restaurants und Nachtleben. Ein Wintersonnenziel, das bei Briten und Skandinaviern beliebt ist.",
      },
      wikipedia: "Kololi",
      tags: ["Plage", "Détente"],
      mustSee: [
        { name: { fr: "Plage de Kololi — la plus belle plage de Gambie", en: "Kololi Beach — the most beautiful beach in Gambia", es: "Playa de Kololi — la playa más bonita de Gambia", de: "Kololi Beach – der schönste Strand in Gambia" }, wikipedia: "Kololi" },
        { name: { fr: "Craft Market de Bakau — artisanat local", en: "Bakau Craft Market — local handicrafts", es: "Mercado de artesanía de Bakau — artesanía local", de: "Bakau Craft Market – lokales Kunsthandwerk" }, wikipedia: "Bakau" },
        { name: { fr: "Crocodile Pool de Kachikally — crocodiles sacrés", en: "Kachikally Crocodile Pool — sacred crocodiles", es: "Estanque de cocodrilos de Kachikally — cocodrilos sagrados", de: "Kachikally Crocodile Pool – heilige Krokodile" }, wikipedia: "File:Gambia Kachikally 0002.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Île de Kunta Kinteh — Mémorial de la traite", en: "Kunta Kinteh Island — Slave Trade Memorial", es: "Isla de Kunta Kinteh — Memorial de la trata", de: "Kunta Kinteh Island – Menschenhandelsdenkmal" },
      region: { fr: "Centre Gambie", en: "Central Gambia", es: "Gambia central", de: "Zentralgambia" },
      description: {
        fr: "L'île de Kunta Kinteh (anciennement James Island, UNESCO) est le principal site de la traite négrière en Gambie — rendue célèbre par le roman Roots d'Alex Haley. Les ruines de Fort James (1651) sont classées UNESCO. Un site de mémoire profondément émouvant, accessible depuis Juffureh et Albreda, villages aux traditions mandingues préservées.", en: "Kunta Kinteh Island (formerly James Island, UNESCO) is Gambia's main slave trade site — made famous by Alex Haley's novel Roots. The ruins of Fort James (1651) are UNESCO-listed. It is a deeply moving memorial site, reached from Juffureh and Albreda, villages where Mandinka traditions are still preserved.", es: "La isla de Kunta Kinteh (antigua James Island, UNESCO) es el principal sitio de la trata de esclavos en Gambia — hecha célebre por la novela Roots de Alex Haley. Las ruinas del Fort James (1651) son Patrimonio UNESCO. Un lugar de memoria profundamente conmovedor, accesible desde Juffureh y Albreda, pueblos de tradiciones mandingas preservadas.", de: "Kunta Kinteh Island (ehemals James Island, UNESCO) ist der Hauptstandort des Sklavenhandels in Gambia – berühmt geworden durch Alex Haleys Roman Roots. Die Ruinen von Fort James (1651) stehen auf der UNESCO-Liste. Ein zutiefst bewegender Ort der Erinnerung, erreichbar von Juffureh und Albreda, Dörfern mit erhaltenen Mandinka-Traditionen.",
      },
      wikipedia: "Kunta_Kinteh_Island",
      tags: ["UNESCO", "Histoire"],
      mustSee: [
        { name: { fr: "Île de Kunta Kinteh — ruines Fort James (UNESCO)", en: "Kunta Kinteh Island — Fort James ruins (UNESCO)", es: "Isla de Kunta Kinteh — ruinas del Fort James (UNESCO)", de: "Kunta Kinteh Island – Ruinen von Fort James (UNESCO)" }, wikipedia: "File:Baobabs on James Island (4383600924).jpg" },
        { name: { fr: "Village de Juffureh — berceau de Kunta Kinteh (Roots)", en: "Juffureh village — birthplace of Kunta Kinteh (Roots)", es: "Pueblo de Juffureh — cuna de Kunta Kinteh (Roots)", de: "Dorf Juffureh – Geburtsort von Kunta Kinteh (Wurzeln)" }, wikipedia: "File:Never Again, Albreda Juffureh 2.jpg" },
        { name: { fr: "Musée de Albreda — histoire de la traite en Gambie", en: "Albreda Museum — the history of the slave trade in Gambia", es: "Museo de Albreda — historia de la trata en Gambia", de: "Albreda Museum – Geschichte des Menschenhandels in Gambia" }, wikipedia: "File:Albreda C9H-72.jpg" },
        { name: { fr: "Traversée en pirogue depuis Barra", en: "Pirogue crossing from Barra", es: "Travesía en piragua desde Barra", de: "Kanuüberfahrt von Barra" }, wikipedia: "Kunta_Kinteh_Island" },
      ],
    },
    {
      id: 3,
      name: { fr: "Observation ornithologique", en: "Birdwatching", es: "Observación de aves", de: "Ornithologische Beobachtung" },
      region: { fr: "Tout le pays", en: "Nationwide", es: "Todo el país", de: "Das ganze Land" },
      description: {
        fr: "La Gambie est l'une des meilleures destinations ornithologiques au monde : 560 espèces dans un territoire minuscule. Abuko Nature Reserve (à 20min de Banjul), Tanji Bird Reserve, River Gambia National Park avec ses chimpanzés. Les birders du monde entier viennent ici pour cocher des espèces rares en quelques jours.", en: "Gambia is one of the world's best birdwatching destinations: 560 species in a tiny territory. Highlights include Abuko Nature Reserve (20 minutes from Banjul), Tanji Bird Reserve and River Gambia National Park with its chimpanzees. Birders from around the world come here to tick off rare species in just a few days.", es: "Gambia es uno de los mejores destinos ornitológicos del mundo: 560 especies en un territorio minúsculo. Destacan la Reserva Natural de Abuko (a 20min de Banjul), la Reserva de Aves de Tanji, y el Parque nacional del río Gambia con sus chimpancés. Observadores de aves de todo el mundo vienen aquí para avistar especies raras en pocos días.", de: "Gambia ist eines der besten ornithologischen Reiseziele der Welt: 560 Arten auf kleinstem Raum. Abuko Nature Reserve (20 Minuten von Banjul entfernt), Tanji Bird Reserve, River Gambia National Park mit seinen Schimpansen. Vogelbeobachter aus der ganzen Welt kommen hierher, um innerhalb weniger Tage seltene Arten zu ergattern.",
      },
      wikipedia: "Abuko_Nature_Reserve",
      tags: ["Safari", "Nature"],
      mustSee: [
        { name: { fr: "Abuko Nature Reserve — 300 espèces à 20min de Banjul", en: "Abuko Nature Reserve — 300 species just 20 minutes from Banjul", es: "Reserva Natural de Abuko — 300 especies a 20min de Banjul", de: "Naturschutzgebiet Abuko – 300 Arten 20 Minuten von Banjul entfernt" }, wikipedia: "File:Gambia abuko 003.jpg" },
        { name: { fr: "River Gambia National Park — chimpanzés sauvages", en: "River Gambia National Park — wild chimpanzees", es: "Parque nacional del río Gambia — chimpancés salvajes", de: "River Gambia Nationalpark – wilde Schimpansen" }, wikipedia: "River_Gambia_National_Park" },
        { name: { fr: "Tanji Bird Reserve — oiseaux de rivière et côtiers", en: "Tanji Bird Reserve — river and coastal birds", es: "Reserva de Aves de Tanji — aves fluviales y costeras", de: "Tanji Bird Reserve – Fluss- und Küstenvögel" }, wikipedia: "Tanji_Bird_Reserve" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Gambie est abordable pour un touriste occidental. Les complexes balnéaires de Kololi sont plus chers que l'intérieur du pays. La cuisine locale est excellente et très bon marché. Le dalasi peut fluctuer — prévoir livres sterling ou euros.", en: "Gambia is affordable for Western travellers. The beach resorts around Kololi are pricier than the interior of the country. Local food is excellent and very inexpensive. The dalasi can fluctuate, so it is wise to bring pounds sterling or euros.", es: "Gambia es asequible para un turista occidental. Los complejos de playa de Kololi son más caros que el interior del país. La cocina local es excelente y muy barata. El dalasi puede fluctuar — conviene llevar libras esterlinas o euros.", de: "Gambia ist für einen westlichen Touristen erschwinglich. Strandresorts in Kololi sind teurer als im Landesinneren. Die lokale Küche ist ausgezeichnet und sehr preiswert. Der Dalasi kann schwanken – berücksichtigen Sie Pfund Sterling oder Euro.",
    },
    currency: "GMD",
    exchangeRate: "1€ ≈ 75–80 GMD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse / lodge local", en: "Local guesthouse / lodge", es: "Guesthouse / lodge local", de: "Lokale Pension/Lodge" }, price: "20–40 €", detail: { fr: "Simple, ventilateur ou clim", en: "Basic, with fan or air conditioning", es: "Sencillo, con ventilador o aire acondicionado", de: "Einfach, Ventilator oder Klimaanlage" } },
          { label: { fr: "Hôtel 3★ Kololi / Senegambia", en: "3★ hotel in Kololi / Senegambia", es: "Hotel 3★ en Kololi / Senegambia", de: "Hotel 3★ Kololi / Senegambia" }, price: "60–100 €", detail: { fr: "Piscine, plage, petit-déj", en: "Pool, beach access, breakfast", es: "Piscina, playa, desayuno", de: "Schwimmbad, Strand, Frühstück" } },
          { label: { fr: "Resort balnéaire tout-inclus", en: "All-inclusive beach resort", es: "Resort de playa todo incluido", de: "All-Inclusive-Strandresort" }, price: "120–200 €", detail: { fr: "Front de mer, all-inclusive", en: "Beachfront, all-inclusive", es: "Frente al mar, todo incluido", de: "Direkt am Strand, All-Inclusive" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Benachin (riz au poisson) dans un local", en: "Benachin (fish and rice) at a local eatery", es: "Benachin (arroz con pescado) en un local", de: "Benachin (Reis mit Fisch) in einem Lokal" }, price: "2–5 €", detail: { fr: "Plat national gambien", en: "Gambia's national dish", es: "Plato nacional gambiano", de: "Gambisches Nationalgericht" } },
          { label: { fr: "Restaurant mid-range Kololi", en: "Mid-range restaurant in Kololi", es: "Restaurante de gama media en Kololi", de: "Mittelklasserestaurant Kololi" }, price: "8–18 €", detail: { fr: "Poisson frais, barbecue", en: "Fresh fish, barbecue", es: "Pescado fresco, barbacoa", de: "Frischer Fisch, Grill" } },
          { label: { fr: "Restaurant gastronomique Senegambia", en: "Fine dining in Senegambia", es: "Restaurante gastronómico en Senegambia", de: "Senegambia-Gourmetrestaurant" }, price: "25–45 €", detail: { fr: "Cuisine internationale", en: "International cuisine", es: "Cocina internacional", de: "Internationale Küche" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bush taxi local — trajet entre villes", en: "Local bush taxi — intercity ride", es: "Bush taxi local — trayecto entre ciudades", de: "Lokales Bush-Taxi – Reisen zwischen Städten" }, price: "1–3 €", detail: { fr: "Économique mais bondé", en: "Cheap but crowded", es: "Económico pero abarrotado", de: "Sparsam, aber überfüllt" } },
          { label: { fr: "Taxi touristique / voiture privée", en: "Tourist taxi / private car", es: "Taxi turístico / coche privado", de: "Touristentaxi/Privatwagen" }, price: "20–40 €/j", detail: { fr: "Recommandé pour excursions", en: "Recommended for excursions", es: "Recomendado para excursiones", de: "Für Ausflüge empfehlenswert" } },
          { label: { fr: "Pirogue sur le fleuve Gambie", en: "Pirogue on the Gambia River", es: "Piragua en el río Gambia", de: "Kanu auf dem Gambia River" }, price: "10–30 €", detail: { fr: "Excursion ornithologique", en: "Birdwatching excursion", es: "Excursión ornitológica", de: "Ornithologische Exkursion" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Tour ornithologique avec guide (journée)", en: "Guided birdwatching tour (full day)", es: "Tour ornitológico con guía (día completo)", de: "Ornithologische Tour mit Führer (Tag)" }, price: "30–60 €", detail: { fr: "Guide certifié, jumelles", en: "Certified guide, binoculars", es: "Guía certificado, prismáticos", de: "Zertifizierter Führer, Fernglas" } },
          { label: { fr: "Excursion île Kunta Kinteh (pirogue + guide)", en: "Kunta Kinteh Island excursion (pirogue + guide)", es: "Excursión a la isla de Kunta Kinteh (piragua + guía)", de: "Ausflug zur Insel Kunta Kinteh (Kanu + Führer)" }, price: "25–50 €", detail: { fr: "Depuis Barra, journée", en: "From Barra, full day", es: "Desde Barra, día completo", de: "Von Barra, Tag" } },
          { label: { fr: "Visite Abuko Nature Reserve", en: "Visit to Abuko Nature Reserve", es: "Visita a la Reserva Natural de Abuko", de: "Besuchen Sie das Naturschutzgebiet Abuko" }, price: "5–10 €", detail: { fr: "Entrée + guide optionnel", en: "Entry + optional guide", es: "Entrada + guía opcional", de: "Eintritt + optionaler Führer" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "40–65 €/j", desc: { fr: "Guesthouse + cuisine locale + bush taxis", en: "Guesthouse + local food + bush taxis", es: "Guesthouse + cocina local + bush taxis", de: "Gästehaus + lokale Küche + Buschtaxis" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "90–140 €/j", desc: { fr: "Hôtel 3★ Kololi + restaurants + excursions", en: "3★ hotel in Kololi + restaurants + excursions", es: "Hotel 3★ en Kololi + restaurantes + excursiones", de: "Hotel 3★ Kololi + Restaurants + Ausflüge" }, color: "#3b82f6" },
      { type: { fr: "Resort", en: "Resort", es: "Resort", de: "Resort" }, daily: "160–250 €/j", desc: { fr: "All-inclusive bord de mer + circuits privés", en: "Beachfront all-inclusive + private tours", es: "Todo incluido frente al mar + circuitos privados", de: "All-Inclusive-Touren am Meer + private Touren" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: {
        fr: "Kololi / plages (4j) → Banjul + Abuko (2j) → remontée du fleuve Gambie (4j)", en: "Kololi / beaches (4d) → Banjul + Abuko (2d) → journey up the Gambia River (4d)", es: "Kololi / playas (4d) → Banjul + Abuko (2d) → remontada del río Gambia (4d)", de: "Kololi / Strände (4 Tage) → Banjul + Abuko (2 Tage) → den Gambia River hinauf (4 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 300 – 2 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Banjul", en: "Return flight Paris–Banjul", es: "Vuelo ida y vuelta Madrid–Banjul", de: "Hin- und Rückflug Paris–Banjul" }, amount: "500–700 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "250–400 €" },
            { label: { fr: "Transports locaux + pirogue", en: "Local transport + pirogue", es: "Transporte local + piragua", de: "Nahverkehr + Kanu" }, amount: "150–250 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "150–250 €" },
            { label: { fr: "Activités & guides", en: "Activities & guides", es: "Actividades y guías", de: "Aktivitäten und Führer" }, amount: "150–300 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "2 800 – 4 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Banjul", en: "Return flight Paris–Banjul", es: "Vuelo ida y vuelta Madrid–Banjul", de: "Hin- und Rückflug Paris–Banjul" }, amount: "600–800 €" },
            { label: { fr: "Hôtel 3★ + lodge (10 nuits)", en: "3★ hotel + lodge (10 nights)", es: "Hotel 3★ + lodge (10 noches)", de: "3★ Hotel + Lodge (10 Nächte)" }, amount: "800–1 200 €" },
            { label: { fr: "Voiture privée / excursions", en: "Private car / excursions", es: "Coche privado / excursiones", de: "Privatwagen / Ausflüge" }, amount: "400–600 €" },
            { label: { fr: "Nourriture & sorties", en: "Food & outings", es: "Comida y salidas", de: "Essen und Ausflüge" }, amount: "400–600 €" },
            { label: { fr: "Guides ornithologiques", en: "Birdwatching guides", es: "Guías ornitológicos", de: "Ornithologische Führer" }, amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~6h (Brussels Airlines, Corsair saison, Transavia, Turkish via Istanbul)", en: "~6h (Brussels Airlines, seasonal Corsair, Transavia, Turkish via Istanbul)", es: "~6h (Brussels Airlines, Corsair de temporada, Transavia, Turkish vía Estambul)", de: "ca. 6 Std. (Brussels Airlines, Corsair Saison, Transavia, Turkish Airlines über Istanbul)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Pas de visa requis pour les ressortissants français et UE (90 jours).", en: "No visa required for French and EU nationals (90 days).", es: "Sin visado para ciudadanos de la UE (90 días).", de: "Für französische und EU-Bürger ist kein Visum erforderlich (90 Tage)." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Dalasi gambien (GMD). Euros et livres sterling acceptés dans les hôtels.", en: "Gambian dalasi (GMD). Euros and pounds sterling are accepted in hotels.", es: "Dalasi gambiano (GMD). Se aceptan euros y libras esterlinas en los hoteles.", de: "Gambischer Dalasi (GMD). In Hotels werden Euro und Pfund Sterling akzeptiert." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Anglais (officiel) — communication facile.", en: "English (official) — easy communication.", es: "Inglés (oficial) — comunicación fácil.", de: "Englisch (offiziell) – einfache Kommunikation." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type G (britannique) — 230V. Adaptateur recommandé.", en: "Type G (British) — 230V. Adapter recommended.", es: "Tipo G (británico) — 230V. Adaptador recomendado.", de: "Typ G (britisch) – 230 V. Adapter empfohlen." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Vaccin fièvre jaune recommandé. Antipaludéen indispensable (Malarone/Doxycycline).", en: "Yellow fever vaccination recommended. Antimalarial medication is essential (Malarone/Doxycycline).", es: "Se recomienda vacuna de fiebre amarilla. Antipalúdico indispensable (Malarone/Doxiciclina).", de: "Gelbfieberimpfung empfohlen. Essentielles Malariamittel (Malarone/Doxycyclin)." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable — eau en bouteille indispensable.", en: "Not drinkable — bottled water is essential.", es: "No potable — el agua embotellada es indispensable.", de: "Nicht trinkbar – Wasser in Flaschen unbedingt erforderlich." } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red móvil", de: "Mobilfunknetz" }, value: { fr: "Bonne couverture dans les zones touristiques. Intérieur plus aléatoire. SIM Africell recommandée.", en: "Good coverage in tourist areas. More patchy inland. Africell SIM recommended.", es: "Buena cobertura en zonas turísticas. Más irregular en el interior. Se recomienda SIM Africell.", de: "Gute Abdeckung in touristischen Gebieten. Mehr zufälliges Interieur. Africell SIM empfohlen." } },
  ],
};
