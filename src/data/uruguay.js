export const URUGUAY = {
  code: "URY",
  numericId: 858,
  name: { fr: "Uruguay", en: "Uruguay", es: "Uruguay", de: "Uruguay" },
  emoji: "🇺🇾",
  capital: { fr: "Montevideo", en: "Montevideo", es: "Montevideo", de: "Montevideo" },
  language: { fr: "Espagnol", en: "Spanish", es: "Español", de: "Spanisch" },
  currency: { fr: "Peso uruguayen (UYU)", en: "Uruguayan Peso (UYU)", es: "Peso uruguayo (UYU)", de: "Uruguayischer Peso (UYU)" },
  timezone: "UTC-3",
  filter: {
    budgetMin: 40,
    budgetMid: 80,
    tripMin: 1800,
    tripMid: 3200,
  },
  criteria: {
    unesco: 1,
    nature: 2,
    randonnee: 1,
    gastronomie: 2,
    architecture: 2,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 2,
    plage: 2,
  },
  description: {
    fr: "L'Uruguay est la petite perle méconnue de l'Amérique du Sud : pays stable, sûr et progressiste avec un art de vivre détendu. Entre Montevideo bohème, les plages branchées de Punta del Este et les estancias gauchières, il séduit par son authenticité et sa qualité de vie.", en: "Uruguay is South America's little-known gem: a stable, safe and progressive country with a relaxed way of life. Between bohemian Montevideo, the trendy beaches of Punta del Este and gaucho estancias, it charms with its authenticity and quality of life.", es: "Uruguay es la pequeña joya desconocida de Sudamérica: un país estable, seguro y progresista con un estilo de vida relajado. Entre el bohemio Montevideo, las playas de moda de Punta del Este y las estancias gauchas, seduce por su autenticidad y calidad de vida.", de: "Uruguay ist die wenig bekannte Perle Südamerikas: ein stabiles, sicheres und fortschrittliches Land mit einer entspannten Lebensweise. Zwischen dem unkonventionellen Montevideo, den trendigen Stränden von Punta del Este und den linkshändigen Estancias verführt es mit seiner Authentizität und Lebensqualität.",
  },

  bestPeriods: [
    {
      months: { fr: "Décembre – Mars", en: "December – March", es: "Diciembre – marzo", de: "Dezember – März" },
      label: { fr: "Été austral", en: "Southern summer", es: "Verano austral", de: "Südlicher Sommer" },
      color: "#fbbf24",
      description: {
        fr: "Saison balnéaire : Punta del Este et les plages de l'Atlantique sont animées. Carnaval de Montevideo en février.", en: "Beach season: Punta del Este and the Atlantic beaches are lively. Montevideo Carnival in February.", es: "Temporada de playa: Punta del Este y las playas atlánticas están animadas. Carnaval de Montevideo en febrero.", de: "Strandsaison: In Punta del Este und an den Atlantikstränden herrscht reges Treiben. Karneval in Montevideo im Februar.",
      },
      icon: "🏖️",
    },
    {
      months: { fr: "Avril – Juin", en: "April – June", es: "Abril – junio", de: "April – Juni" },
      label: { fr: "Automne doux", en: "Mild autumn", es: "Otoño suave", de: "Sanfter Herbst" },
      color: "#fb923c",
      description: {
        fr: "Températures agréables, moins de touristes, prix réduits. Idéal pour explorer Montevideo et la Colonia del Sacramento.", en: "Pleasant temperatures, fewer tourists, lower prices. Ideal for exploring Montevideo and Colonia del Sacramento.", es: "Temperaturas agradables, menos turistas, precios reducidos. Ideal para explorar Montevideo y Colonia del Sacramento.", de: "Angenehme Temperaturen, weniger Touristen, niedrigere Preise. Ideal für die Erkundung von Montevideo und der Colonia del Sacramento.",
      },
      icon: "🍂",
    },
  ],

  weatherCities: [
    {
      id: "montevideo",
      name: { fr: "Montevideo", en: "Montevideo", es: "Montevideo", de: "Montevideo" },
      region: { fr: "Río de la Plata", en: "Río de la Plata", es: "Río de la Plata", de: "Rio de la Plata" },
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
      name: { fr: "Punta del Este", en: "Punta del Este", es: "Punta del Este", de: "Punta del Este" },
      region: { fr: "Maldonado", en: "Maldonado", es: "Maldonado", de: "Maldonado" },
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
      name: { fr: "Montevideo", en: "Montevideo", es: "Montevideo", de: "Montevideo" },
      region: { fr: "Río de la Plata", en: "Río de la Plata", es: "Río de la Plata", de: "Rio de la Plata" },
      description: {
        fr: "La capitale uruguayenne est une ville à taille humaine avec un rambla (front de mer) de 22 km, un marché Tristán Narvaja animé et un centro histórico élégant. Sa scène culturelle, ses petits bars à mate et son ambiance détendue en font une destination attachante.", en: "The Uruguayan capital is a human-scale city with a 22 km rambla (waterfront), a lively Tristán Narvaja market and an elegant historic centre. Its cultural scene, small mate bars and relaxed atmosphere make it an endearing destination.", es: "La capital uruguaya es una ciudad a escala humana con una rambla de 22 km, un animado mercado Tristán Narvaja y un elegante centro histórico. Su escena cultural, sus pequeños bares de mate y su ambiente relajado la convierten en un destino entrañable.", de: "Die uruguayische Hauptstadt ist eine Stadt im menschlichen Maßstab mit einer 22 km langen Rambla (Strandpromenade), einem lebhaften Tristán-Narvaja-Markt und einem eleganten historischen Zentrum. Seine Kulturszene, seine kleinen Mate-Bars und seine entspannte Atmosphäre machen es zu einem liebenswerten Reiseziel.",
      },
      wikipedia: "Montevideo",
      tags: ["Ville", "Culture", "Gastronomie", "Plage", "Architecture"],
      mustSee: [
        { name: { fr: "Ciudad Vieja (vieille ville)", en: "Ciudad Vieja (old town)", es: "Ciudad Vieja", de: "Ciudad Vieja (Altstadt)" }, wikipedia: "Ciudad_Vieja,_Montevideo" },
        { name: { fr: "Marché du Port (Mercado del Puerto)", en: "Port Market (Mercado del Puerto)", es: "Mercado del Puerto", de: "Hafenmarkt (Mercado del Puerto)" }, wikipedia: "Mercado_del_Puerto" },
        { name: { fr: "Rambla de Montevideo", en: "Montevideo Rambla", es: "Rambla de Montevideo", de: "Montevideo Rambla" }, wikipedia: "File:Montevideo Rambla-20110506-RM-120836.jpg" },
        { name: { fr: "MNAV (musée national d'art)", en: "MNAV (national art museum)", es: "MNAV (museo nacional de artes visuales)", de: "MNAV (Nationales Kunstmuseum)" }, wikipedia: "National_Museum_of_Visual_Arts_(Uruguay)" },
      ],
    },
    {
      id: 2,
      name: { fr: "Colonia del Sacramento", en: "Colonia del Sacramento", es: "Colonia del Sacramento", de: "Colonia del Sacramento" },
      region: { fr: "Colonia", en: "Colonia", es: "Colonia", de: "Colonia" },
      description: {
        fr: "Cette ville coloniale portugaise du XVIIe siècle, inscrite au patrimoine UNESCO, est à 1h de ferry depuis Buenos Aires. Ses ruelles pavées, ses phares et ses maisons aux couleurs pastel en font un musée à ciel ouvert.", en: "This 17th-century Portuguese colonial town, inscribed on the UNESCO World Heritage List, is a 1-hour ferry ride from Buenos Aires. Its cobbled streets, lighthouses and pastel-coloured houses make it an open-air museum.", es: "Esta ciudad colonial portuguesa del siglo XVII, declarada Patrimonio de la Humanidad por la UNESCO, está a 1h en ferry desde Buenos Aires. Sus calles empedradas, sus faros y sus casas de colores pastel la convierten en un museo al aire libre.", de: "Diese portugiesische Kolonialstadt aus dem 17. Jahrhundert, die zum UNESCO-Weltkulturerbe gehört, liegt 1 Stunde mit der Fähre von Buenos Aires entfernt. Seine gepflasterten Straßen, Leuchttürme und pastellfarbenen Häuser machen es zu einem Freilichtmuseum.",
      },
      wikipedia: "Colonia_del_Sacramento",
      tags: ["Histoire", "UNESCO", "Architecture"],
      mustSee: [
        { name: { fr: "Barrio Histórico", en: "Barrio Histórico", es: "Barrio Histórico", de: "Historisches Barrio" }, wikipedia: "File:Calle en Colonia del Sacramento 2013.jpg" },
        { name: { fr: "Phare de Colonia", en: "Colonia Lighthouse", es: "Faro de Colonia", de: "Leuchtturm von Colonia" }, wikipedia: "Colonia_del_Sacramento_Lighthouse" },
        { name: { fr: "Plage de Colonia", en: "Colonia beach", es: "Playa de Colonia", de: "Colonia Strand" }, wikipedia: "File:Sunset on the beach in Colonia del Sacramento.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Punta del Este", en: "Punta del Este", es: "Punta del Este", de: "Punta del Este" },
      region: { fr: "Maldonado", en: "Maldonado", es: "Maldonado", de: "Maldonado" },
      description: {
        fr: "La Saint-Tropez de l'Amérique du Sud attire en été les célébrités et jet-setters argentins et brésiliens. La main géante de l'artiste Ironside, les plages Brava et Mansa et la vie nocturne animée sont ses emblèmes.", en: "South America's Saint-Tropez draws Argentine and Brazilian celebrities and jet-setters in summer. The giant hand sculpture by artist Ironside, Brava and Mansa beaches and lively nightlife are its emblems.", es: "La Saint-Tropez de Sudamérica atrae en verano a celebridades y jet-setters argentinos y brasileños. La mano gigante del artista Ironside, las playas Brava y Mansa y su animada vida nocturna son sus emblemas.", de: "Das Saint-Tropez Südamerikas lockt im Sommer argentinische und brasilianische Prominente und Jetsetter an. Die riesige Hand des Künstlers Ironside, die Strände Brava und Mansa und das pulsierende Nachtleben sind ihre Wahrzeichen.",
      },
      wikipedia: "Punta_del_Este",
      tags: ["Plage", "Luxe", "Nightlife", "Art"],
      mustSee: [
        { name: { fr: "La Mano (sculpture)", en: "La Mano (sculpture)", es: "La Mano (escultura)", de: "La Mano (Skulptur)" }, wikipedia: "File:Thehandofpuntadeleste.jpg" },
        { name: { fr: "Plage Brava", en: "Brava Beach", es: "Playa Brava", de: "Brava-Strand" }, wikipedia: "File:PuntadelEste3.jpg" },
        { name: "Isla Gorriti", wikipedia: "Gorriti_Island" },
        { name: { fr: "Casapueblo (Páez Vilaró)", en: "Casapueblo (Páez Vilaró)", es: "Casapueblo (Páez Vilaró)", de: "Casapueblo (Páez Vilaró)" }, wikipedia: "Casapueblo" },
      ],
    },
    {
      id: 4,
      name: { fr: "Estancias & Paysage intérieur", en: "Estancias & Inland landscapes", es: "Estancias y paisaje del interior", de: "Estancias & Innenlandschaft" },
      region: { fr: "Interior", en: "Interior", es: "Interior", de: "Innere" },
      description: {
        fr: "L'intérieur uruguayen est un immense territoire rural de pampas et collines douces. Les estancias (ranchs gauchiers) ouvrent leurs portes aux touristes pour des séjours authentiques : équitation, asado, coucher de soleil sur les prairies.", en: "Uruguay's interior is a vast rural territory of pampas and gentle hills. Estancias (gaucho ranches) welcome tourists for authentic stays: horse riding, asado, sunsets over the grasslands.", es: "El interior uruguayo es un vasto territorio rural de pampas y colinas suaves. Las estancias abren sus puertas a los turistas para estancias auténticas: equitación, asado, atardeceres sobre las praderas.", de: "Das Landesinnere Uruguays ist ein riesiges ländliches Gebiet mit Pampas und sanften Hügeln. Die Estancias (Linkshänder-Ranches) öffnen ihre Türen für Touristen für authentische Aufenthalte: Reiten, Asado, Sonnenuntergang über den Wiesen.",
      },
      wikipedia: "File:Parque_Anchorena_Estancia_Residencial_Presidencial_Colonia_Uruguay_-_panoramio_(2).jpg",
      tags: ["Rural", "Nature", "Aventure"],
      mustSee: [
        { name: { fr: "Tacuarembó (festival gaucho)", en: "Tacuarembó (gaucho festival)", es: "Tacuarembó (festival gaucho)", de: "Tacuarembó (Gaucho-Festival)" }, wikipedia: "File:Tablado Velódromo Municipal Tacuarembó.jpg" },
        { name: "Quebrada de los Cuervos", wikipedia: "Quebrada_de_los_Cuervos" },
        { name: "Cabo Polonio", wikipedia: "Cabo_Polonio" },
        { name: "Punta del Diablo", wikipedia: "Punta_del_Diablo" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Uruguay est un peu plus cher que ses voisins (Argentine et Paraguay), avec des prix proches de l'Europe méridionale. La sécurité et la qualité de vie compensent.", en: "Uruguay is a bit more expensive than its neighbours (Argentina and Paraguay), with prices close to Southern Europe. Safety and quality of life make up for it.", es: "Uruguay es un poco más caro que sus vecinos (Argentina y Paraguay), con precios cercanos a los del sur de Europa. La seguridad y la calidad de vida lo compensan.", de: "Uruguay ist etwas teurer als seine Nachbarn (Argentinien und Paraguay) und die Preise ähneln denen Südeuropas. Sicherheit und Lebensqualität kompensieren.",
    },
    currency: "Peso uruguayen (UYU)",
    exchangeRate: "1€ ≈ 40–45 UYU",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Dortoir auberge de jeunesse", en: "Hostel dorm", es: "Dormitorio de albergue", de: "Schlafsaal der Jugendherberge" }, price: "12–20 €", detail: { fr: "Montevideo, Colonia, qualité correcte", en: "Montevideo, Colonia, decent quality", es: "Montevideo, Colonia, calidad correcta", de: "Montevideo, Colonia, gute Qualität" } },
          { label: { fr: "Chambre double hôtel 3★", en: "3★ hotel double room", es: "Habitación doble hotel 3★", de: "Doppelzimmer Hotelzimmer 3★" }, price: "40–80 €", detail: { fr: "Bon rapport qualité-prix en basse saison", en: "Good value in low season", es: "Buena relación calidad-precio en temporada baja", de: "Gutes Preis-Leistungs-Verhältnis in der Nebensaison" } },
          { label: { fr: "Hôtel boutique Punta del Este (été)", en: "Boutique hotel Punta del Este (summer)", es: "Hotel boutique en Punta del Este (verano)", de: "Boutiquehotel Punta del Este (Sommer)" }, price: "120–300 €", detail: { fr: "Prix de haute saison (janv–fév)", en: "High season prices (Jan–Feb)", es: "Precios de temporada alta (ene–feb)", de: "Preise in der Hauptsaison (Januar–Februar)" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Chivito (sandwich national)", en: "Chivito (national sandwich)", es: "Chivito (sándwich nacional)", de: "Chivito (nationales Sandwich)" }, price: "5–8 €", detail: { fr: "Steak, jambon, œuf, fromage – copieux", en: "Steak, ham, egg, cheese – hearty", es: "Bife, jamón, huevo, queso — abundante", de: "Steak, Schinken, Ei, Käse – herzhaft" } },
          { label: { fr: "Menu du midi", en: "Lunch menu", es: "Menú del mediodía", de: "Mittagsmenü" }, price: "8–15 €", detail: { fr: "Dans les restaurants du quartier", en: "In neighbourhood restaurants", es: "En restaurantes del barrio", de: "In umliegenden Restaurants" } },
          { label: { fr: "Parrillada (grill) pour deux", en: "Parrillada (grill) for two", es: "Parrillada para dos", de: "Parrillada (Grill) für zwei Personen" }, price: "25–40 €", detail: { fr: "Avec vin uruguayen", en: "With Uruguayan wine", es: "Con vino uruguayo", de: "Mit uruguayischem Wein" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Ferry Montevideo–Buenos Aires", en: "Montevideo–Buenos Aires ferry", es: "Ferry Montevideo–Buenos Aires", de: "Fähre Montevideo–Buenos Aires" }, price: "40–80 €", detail: { fr: "Buquebus, selon classe, 2–3h de traversée", en: "Buquebus, depending on class, 2–3h crossing", es: "Buquebus, según clase, 2–3h de travesía", de: "Buquebus, je nach Klasse, 2–3 Stunden Überfahrt" } },
          { label: { fr: "Bus intercités", en: "Intercity bus", es: "Autobús interurbano", de: "Überlandbusse" }, price: "5–15 €", detail: { fr: "Réseau Turil/COPSA, confortable", en: "Turil/COPSA network, comfortable", es: "Red Turil/COPSA, cómoda", de: "Turil/COPSA-Netz, komfortabel" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités & Culture", en: "Activities & Culture", es: "Actividades y cultura", de: "Aktivitäten & Kultur" },
        items: [
          { label: { fr: "Tour Colonia del Sacramento", en: "Colonia del Sacramento tour", es: "Tour a Colonia del Sacramento", de: "Colonia del Sacramento-Tour" }, price: "20–35 €", detail: { fr: "Journée depuis Montevideo (ferry inclus)", en: "Day trip from Montevideo (ferry included)", es: "Día desde Montevideo (ferry incluido)", de: "Tagesausflug ab Montevideo (Fähre inklusive)" } },
          { label: { fr: "Séjour estancia (journée)", en: "Estancia stay (day)", es: "Estancia (día)", de: "Estancia-Aufenthalt (Tag)" }, price: "50–100 €", detail: { fr: "Équitation + asado + activités gaucho", en: "Horse riding + asado + gaucho activities", es: "Equitación + asado + actividades gauchas", de: "Reiten + Asado + Gaucho-Aktivitäten" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "40–60 €/j", desc: { fr: "Auberge, chivito, bus, excursions budget", en: "Hostel, chivito, bus, budget excursions", es: "Albergue, chivito, autobús, excursiones económicas", de: "Hostel, Chivito, Bus, günstige Ausflüge" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "80–130 €/j", desc: { fr: "Hôtel 3★, restaurants, location voiture", en: "3★ hotel, restaurants, car rental", es: "Hotel 3★, restaurantes, alquiler de coche", de: "3★ Hotel, Restaurants, Autovermietung" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "200 €+/j", desc: { fr: "Hôtel 5★ Punta del Este, gastronomie, privé", en: "5★ hotel in Punta del Este, fine dining, private tours", es: "Hotel 5★ en Punta del Este, gastronomía, privado", de: "Hotel 5★ Punta del Este, Gastronomie, privat" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks", es: "2 semanas", de: "2 Wochen" },
      route: { fr: "Montevideo – Colonia – Punta del Este – Interior", en: "Montevideo – Colonia – Punta del Este – Interior", es: "Montevideo – Colonia – Punta del Este – Interior", de: "Montevideo – Colonia – Punta del Este – Innenraum" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 800 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Montevideo", en: "Return flight Paris–Montevideo", es: "Vuelo ida/vuelta Madrid–Montevideo", de: "Hin- und Rückflug Paris–Montevideo" }, amount: "750–1 000 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "350–500 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "350–500 €" },
            { label: { fr: "Transport local + ferry", en: "Local transport + ferry", es: "Transporte local + ferry", de: "Nahverkehr + Fähre" }, amount: "150–250 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "120–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "3 200 – 4 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Montevideo", en: "Return flight Paris–Montevideo", es: "Vuelo ida/vuelta Madrid–Montevideo", de: "Hin- und Rückflug Paris–Montevideo" }, amount: "900–1 200 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "800–1 100 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "600–800 €" },
            { label: { fr: "Transport + location voiture", en: "Transport + car rental", es: "Transporte + alquiler de coche", de: "Transport + Autovermietung" }, amount: "400–600 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "300–500 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "6 500 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Montevideo (Business)", en: "Return flight Paris–Montevideo (Business)", es: "Vuelo ida/vuelta Madrid–Montevideo (Business)", de: "Hin- und Rückflug Paris–Montevideo (Business)" }, amount: "2 500–3 500 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "2 000–3 000 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "600–900 €" },
            { label: { fr: "Transport & excursions privées", en: "Transport & private excursions", es: "Transporte y excursiones privadas", de: "Transport und private Ausflüge" }, amount: "400–600 €" },
            { label: { fr: "Activités premium", en: "Premium activities", es: "Actividades premium", de: "Premium-Aktivitäten" }, amount: "300–500 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~13–14h avec escale (São Paulo, Buenos Aires)", en: "~13–14h with a stopover (São Paulo, Buenos Aires)", es: "~13h con escala (São Paulo, Buenos Aires)", de: "ca. 13–14 Std. mit Zwischenstopp (São Paulo, Buenos Aires)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Sans visa pour les Français (90 jours)", en: "No visa required for French citizens (90 days)", es: "Sin visado para los españoles (90 días)", de: "Visumfrei für Franzosen (90 Tage)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Peso uruguayen (1€ ≈ 40–45 UYU)", en: "Uruguayan Peso (1€ ≈ 40–45 UYU)", es: "Peso uruguayo (1€ ≈ 40–45 UYU)", de: "Uruguayischer Peso (1€ ≈ 40–45 UYU)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Espagnol (rioplatense)", en: "Spanish (Rioplatense)", es: "Español (rioplatense)", de: "Spanisch (rioplatense)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe", de: "Steckdose" }, value: { fr: "Type C/L – 220 V (compatible EU)", en: "Type C/L – 220 V (EU compatible)", es: "Tipo C/L – 220 V (compatible con la UE)", de: "Typ C/L – 220 V (EU-kompatibel)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red", de: "Mobilfunknetz" }, value: { fr: "4G dans les villes, bonne couverture nationale", en: "4G in cities, good nationwide coverage", es: "4G en las ciudades, buena cobertura nacional", de: "4G in Städten, gute landesweite Abdeckung" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Potable dans tout le pays", en: "Drinkable throughout the country", es: "Potable en todo el país", de: "Trinken im ganzen Land" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Pas de vaccins obligatoires, pays très sûr", en: "No mandatory vaccines, very safe country", es: "Sin vacunas obligatorias, país muy seguro", de: "Keine Impfpflicht, sehr sicheres Land" } },
  ],
};
