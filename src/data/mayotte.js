export const MAYOTTE = {
  code: "MYT",
  numericId: 175,
  name: { fr: "Mayotte", en: "Mayotte", es: "Mayotte" },
  emoji: "🇾🇹",
  capital: { fr: "Mamoudzou", en: "Mamoudzou", es: "Mamoudzou" },
  language: { fr: "Français, Shimaoré, Kibushi", en: "French, Shimaore, Kibushi", es: "Francés, shimaoré, kibushi" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)", es: "Euro (EUR)" },
  timezone: "UTC+3",
  filter: {
    budgetMin: 70, budgetMid: 165,
    tripMin: 1500, tripMid: 3000,
  },
  description: {
    fr: "Mayotte est un département français de l'océan Indien entre les Comores et Madagascar : le deuxième plus grand lagon du monde (1 100 km²), protégé par la seule double barrière de corail de l'océan Indien, avec dauphins, tortues vertes, requins-baleines, dugongs et raies manta. L'île au lagon, encore méconnue, offre une plongée et un snorkeling d'exception à prix euro.",
    en: "Mayotte is a French overseas department in the Indian Ocean between the Comoros and Madagascar: the world's second-largest lagoon (1,100 km²), protected by the Indian Ocean's only double coral barrier reef, home to dolphins, green turtles, whale sharks, dugongs and manta rays. Still little known, this lagoon island offers exceptional diving and snorkelling at euro prices.",
    es: "Mayotte es un departamento francés de ultramar en el océano Índico entre las Comoras y Madagascar: la segunda laguna más grande del mundo (1.100 km²), protegida por la única barrera coralina doble del océano Índico, con delfines, tortugas verdes, tiburones ballena, dugongos y mantarrayas. La isla de la laguna, todavía poco conocida, ofrece un buceo y esnórquel excepcionales a precios europeos.",
  },

  bestPeriods: [
    {
      months: { fr: "Avril – Novembre", en: "April – November", es: "Abril – Noviembre" },
      label: { fr: "Saison sèche", en: "Dry season", es: "Temporada seca" },
      color: "#22c55e",
      description: {
        fr: "Idéal pour le lagon : mer calme, visibilité sous-marine excellente (20–30m), dauphins et tortues présents toute l'année. Températures agréables 24–28°C.",
        en: "Ideal for the lagoon: calm sea, excellent underwater visibility (20–30m), dolphins and turtles present year-round. Pleasant temperatures of 24–28°C.",
        es: "Ideal para la laguna: mar en calma, excelente visibilidad submarina (20–30m), delfines y tortugas presentes todo el año. Temperaturas agradables de 24–28°C.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Mars", en: "December – March", es: "Diciembre – Marzo" },
      label: { fr: "Saison des pluies / cyclones", en: "Rainy / cyclone season", es: "Temporada de lluvias / ciclones" },
      color: "#ef4444",
      description: {
        fr: "Pluies abondantes, mer agitée, risque cyclonique. Températures élevées (28–32°C). Mois les moins favorables pour la plongée.",
        en: "Heavy rain, rough sea, cyclone risk. High temperatures (28–32°C). The least favourable months for diving.",
        es: "Lluvias abundantes, mar agitado, riesgo de ciclones. Temperaturas altas (28–32°C). Los meses menos favorables para el buceo.",
      },
      icon: "🌀",
    },
  ],

  weatherCities: [
    {
      id: "mamoudzou",
      name: "Mamoudzou",
      region: { fr: "Grande-Terre", en: "Grande-Terre", es: "Grande-Terre" },
      data: [
        { month: "Jan", temp: 28, rain: 350, icon: "🌧️" },
        { month: "Fév", temp: 28, rain: 380, icon: "🌧️" },
        { month: "Mar", temp: 28, rain: 250, icon: "🌧️" },
        { month: "Avr", temp: 27, rain: 130, icon: "🌧️" },
        { month: "Mai", temp: 25, rain: 60,  icon: "☀️" },
        { month: "Jun", temp: 23, rain: 30,  icon: "☀️" },
        { month: "Jul", temp: 23, rain: 20,  icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 15,  icon: "☀️" },
        { month: "Sep", temp: 24, rain: 20,  icon: "☀️" },
        { month: "Oct", temp: 26, rain: 50,  icon: "☀️" },
        { month: "Nov", temp: 27, rain: 130, icon: "🌧️" },
        { month: "Déc", temp: 28, rain: 270, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Lagon de Mayotte — Plongée et dauphins", en: "Mayotte Lagoon — Diving and dolphins", es: "Laguna de Mayotte — Buceo y delfines" },
      region: { fr: "Lagon", en: "Lagoon", es: "Laguna" },
      description: {
        fr: "Le lagon de Mayotte est l'un des plus beaux au monde : 1 100 km² d'eaux turquoise entourées d'une double barrière de corail, où nagent des dauphins-toupies (en permanence), des tortues vertes (pondent sur les plages d'avril à août), des dugongs et des raies manta. La visibilité sous-marine y dépasse régulièrement 30 mètres.",
        en: "Mayotte's lagoon is one of the most beautiful in the world: 1,100 km² of turquoise waters surrounded by a double coral barrier reef, home to spinner dolphins (present year-round), green turtles (nesting on the beaches from April to August), dugongs and manta rays. Underwater visibility regularly exceeds 30 metres.",
        es: "La laguna de Mayotte es una de las más bellas del mundo: 1.100 km² de aguas turquesa rodeadas de una doble barrera de coral, donde nadan delfines giradores (todo el año), tortugas verdes (anidan en las playas de abril a agosto), dugongos y mantarrayas. La visibilidad submarina supera regularmente los 30 metros.",
      },
      wikipedia: "File:Le lagon de Mayotte (34707734326).jpg",
      tags: ["Lagon", "Plongée", "Dauphins", "Tortues"],
      mustSee: [
        { name: { fr: "Nage avec les dauphins-toupies dans le lagon", en: "Swimming with spinner dolphins in the lagoon", es: "Nado con delfines giradores en la laguna" }, wikipedia: "File:Eilat Dolphin Reef (3).jpg" },
        { name: { fr: "Snorkeling Petite-Terre — tortues et poissons perroquets", en: "Snorkelling at Petite-Terre — turtles and parrotfish", es: "Esnórquel en Petite-Terre — tortugas y peces loro" }, wikipedia: "File:Mayotte, Petite Terre (2850837100).jpg" },
        { name: { fr: "Banc de sable Ilot Sable Blanc", en: "Ilot Sable Blanc sandbank", es: "Banco de arena Ilot Sable Blanc" }, wikipedia: "File:Îlot de sable blanc.JPG" },
      ],
    },
    {
      id: 3,
      name: { fr: "Baie de Bouéni & plages du sud", en: "Bouéni Bay & southern beaches", es: "Bahía de Bouéni y playas del sur" },
      region: { fr: "Grande-Terre (sud)", en: "Grande-Terre (south)", es: "Grande-Terre (sur)" },
      description: {
        fr: "Le sud de Mayotte concentre les plus belles plages et baies : la baie de Bouéni avec ses eaux turquoise et ses mangroves, la plage de Moya (la plus longue de l'île, tortues en saison), et les villages traditionnels swahili aux mosquées blanches. Un mzungu (étranger) qui sort des sentiers battus y sera souvent seul.",
        en: "Southern Mayotte concentrates the island's finest beaches and bays: Bouéni Bay with its turquoise waters and mangroves, Moya Beach (the island's longest, with turtles in season), and traditional Swahili villages with white mosques. A mzungu (foreigner) who ventures off the beaten path will often be the only one there.",
        es: "El sur de Mayotte concentra las playas y bahías más bellas de la isla: la bahía de Bouéni con sus aguas turquesa y sus manglares, la playa de Moya (la más larga de la isla, con tortugas en temporada), y los pueblos tradicionales suajilis de mezquitas blancas. Un mzungu (extranjero) que se aleje de los caminos trillados a menudo estará completamente solo.",
      },
      wikipedia: "File:Riffs before SW Mayotte (30592452163).jpg",
      tags: ["Plage", "Mangroves", "Tortues", "Authentique"],
      mustSee: [
        { name: { fr: "Plage de Moya — la plus longue de Mayotte + tortues", en: "Moya Beach — Mayotte's longest, with turtles", es: "Playa de Moya — la más larga de Mayotte + tortugas" }, wikipedia: "File:Plage de Grand Moya .jpg" },
        { name: { fr: "Baie de Bouéni — kayak en mangroves", en: "Bouéni Bay — kayaking through the mangroves", es: "Bahía de Bouéni — kayak en los manglares" }, wikipedia: "File:Riffs before SW Mayotte (30592452163).jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Petite-Terre — Mamoudzou historique", en: "Petite-Terre — Historic Mamoudzou", es: "Petite-Terre — Mamoudzou histórico" },
      region: "Petite-Terre",
      description: {
        fr: "Petite-Terre est la petite île où se trouvent les institutions (préfecture), le quartier de Dzaoudzi et le marché de Mamoudzou. La promenade du bord de mer, les toits colorés de Dzaoudzi, et la plage du Sables-Blancs sont les points d'attraction de cette mini-île reliée par bac à la Grande-Terre.",
        en: "Petite-Terre is the small island home to the local institutions (prefecture), the Dzaoudzi district and Mamoudzou's market. The seafront promenade, the colourful rooftops of Dzaoudzi and Sables-Blancs beach are the main attractions of this mini-island, connected to Grande-Terre by ferry.",
        es: "Petite-Terre es la pequeña isla donde se encuentran las instituciones (prefectura), el barrio de Dzaoudzi y el mercado de Mamoudzou. El paseo marítimo, los tejados coloridos de Dzaoudzi y la playa de Sables-Blancs son los principales atractivos de esta mini isla, unida a Grande-Terre por ferry.",
      },
      wikipedia: "File:Phare de Petite Terre.jpg",
      tags: ["Ville", "Marché", "Bac", "Plage"],
      mustSee: [
        { name: { fr: "Marché de Mamoudzou — épices et artisanat mahorais", en: "Mamoudzou market — Mahoran spices and crafts", es: "Mercado de Mamoudzou — especias y artesanía mahorese" }, wikipedia: "Mamoudzou" },
        { name: { fr: "Traversée en bac Grande-Terre / Petite-Terre", en: "Ferry crossing between Grande-Terre and Petite-Terre", es: "Travesía en ferry Grande-Terre / Petite-Terre" }, wikipedia: "File:Mayotte, Petite Terre (2850837100).jpg" },
        { name: { fr: "Promenade de Dzaoudzi et panorama lagon", en: "Dzaoudzi promenade and lagoon panorama", es: "Paseo de Dzaoudzi y panorámica de la laguna" }, wikipedia: "File:Mayotte, Petite Terre (2850837570).jpg" },
        { name: { fr: "Plage de Petite-Terre (Sables Blancs) — snorkeling avec tortues", en: "Petite-Terre beach (Sables Blancs) — snorkelling with turtles", es: "Playa de Petite-Terre (Sables Blancs) — esnórquel con tortugas" }, wikipedia: "File:Petite Terre vue de l’îlot de sable blanc.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Mayotte est un département français — les prix s'alignent sur la métropole pour les produits importés, mais restent inférieurs pour la restauration locale. L'hébergement est en développement. Avantage majeur : l'euro sans change.",
      en: "Mayotte is a French overseas department — prices for imported goods match mainland France, but remain lower for local dining. Accommodation is still developing. A major advantage: the euro, with no currency exchange needed.",
      es: "Mayotte es un departamento francés de ultramar — los precios de los productos importados son similares a los de Francia continental, pero siguen siendo más bajos para la restauración local. El alojamiento está en desarrollo. Gran ventaja: el euro, sin necesidad de cambio de divisa.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€ (territoire français)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Chambre d'hôte / gîte local", en: "Guesthouse / local gîte", es: "Casa de huéspedes / gîte local" }, price: "40–70 €", detail: { fr: "Simple mais confortable", en: "Simple but comfortable", es: "Sencillo pero cómodo" } },
          { label: { fr: "Hôtel 3★ Mamoudzou / Petite-Terre", en: "3★ hotel in Mamoudzou / Petite-Terre", es: "Hotel 3★ en Mamoudzou / Petite-Terre" }, price: "90–150 €", detail: { fr: "Vue lagon, piscine", en: "Lagoon view, pool", es: "Vistas a la laguna, piscina" } },
          { label: { fr: "Lodge bord de mer (Bouéni)", en: "Seaside lodge (Bouéni)", es: "Lodge junto al mar (Bouéni)" }, price: "120–200 €", detail: { fr: "Immersion nature", en: "Immersion in nature", es: "Inmersión en la naturaleza" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Barquette coco / mataba dans un restaurant local", en: "Coconut dish / mataba at a local restaurant", es: "Plato de coco / mataba en un restaurante local" }, price: "5–12 €", detail: { fr: "Cuisine mahoraise typique", en: "Typical Mahoran cuisine", es: "Cocina mahorese típica" } },
          { label: { fr: "Restaurant mid-range Mamoudzou", en: "Mid-range restaurant in Mamoudzou", es: "Restaurante de gama media en Mamoudzou" }, price: "15–30 €", detail: { fr: "Poissons et fruits de mer du lagon", en: "Fish and seafood from the lagoon", es: "Pescado y marisco de la laguna" } },
          { label: { fr: "Supermarché (Jumbo Score, Score)", en: "Supermarket (Jumbo Score, Score)", es: "Supermercado (Jumbo Score, Score)" }, price: "Same as France", detail: { fr: "Prix métropole + transport", en: "Mainland French prices + shipping", es: "Precios de Francia continental + transporte" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Bac Grande-Terre / Petite-Terre", en: "Ferry Grande-Terre / Petite-Terre", es: "Ferry Grande-Terre / Petite-Terre" }, price: "1–2 €", detail: { fr: "Traversée 5 min", en: "5 min crossing", es: "Travesía de 5 min" } },
          { label: { fr: "Taxi-brousse / taxi collectif", en: "Bush taxi / shared taxi", es: "Taxi-brousse / taxi colectivo" }, price: "1–5 €", detail: { fr: "Transport inter-villages", en: "Transport between villages", es: "Transporte entre pueblos" } },
          { label: { fr: "Location de voiture", en: "Car rental", es: "Alquiler de coche" }, price: "50–80 €/j", detail: { fr: "Recommandé pour le sud et randonnées", en: "Recommended for the south and hikes", es: "Recomendado para el sur y el senderismo" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Plongée 2 immersions (club de plongée)", en: "2-dive session (dive club)", es: "Buceo con 2 inmersiones (club de buceo)" }, price: "70–100 €", detail: { fr: "Lagon exceptionnel", en: "Exceptional lagoon", es: "Laguna excepcional" } },
          { label: { fr: "Excursion dauphins et snorkeling (demi-journée)", en: "Dolphin & snorkelling excursion (half-day)", es: "Excursión de delfines y esnórquel (medio día)" }, price: "40–70 €", detail: { fr: "En bateau, guide", en: "By boat, with guide", es: "En barco, con guía" } },
          { label: { fr: "Kayak en mangroves (Bouéni)", en: "Kayaking through mangroves (Bouéni)", es: "Kayak en los manglares (Bouéni)" }, price: "20–40 €", detail: { fr: "Location ou guidée", en: "Rental or guided", es: "Alquiler o guiado" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero" }, daily: "70–100 €/j", desc: { fr: "Chambre d'hôte + cuisine locale + taxi-brousse", en: "Guesthouse + local food + bush taxi", es: "Casa de huéspedes + cocina local + taxi-brousse" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort" }, daily: "140–220 €/j", desc: { fr: "Hôtel 3★ + restaurants + plongée + location voiture", en: "3★ hotel + restaurants + diving + car rental", es: "Hotel 3★ + restaurantes + buceo + alquiler de coche" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días" },
      route: {
        fr: "Mamoudzou / Petite-Terre (2j) → Tour du lagon en bateau (3j) → Sud et plages (3j) → Bénara et forêt (2j)",
        en: "Mamoudzou / Petite-Terre (2d) → Lagoon boat tour (3d) → South and beaches (3d) → Bénara and forest (2d)",
        es: "Mamoudzou / Petite-Terre (2d) → Vuelta en barco por la laguna (3d) → Sur y playas (3d) → Bénara y bosque (2d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "1 500 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Mayotte (Air Austral, Corsair)", en: "Return flight Paris–Mayotte (Air Austral, Corsair)", es: "Vuelo ida y vuelta Madrid–Mayotte (con conexión)" }, amount: "500–800 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)" }, amount: "400–650 €" },
            { label: { fr: "Transports locaux", en: "Local transport", es: "Transporte local" }, amount: "150–250 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida" }, amount: "250–400 €" },
            { label: { fr: "Plongée & excursions lagon", en: "Diving & lagoon excursions", es: "Buceo y excursiones por la laguna" }, amount: "200–400 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "3 000 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Mayotte", en: "Return flight Paris–Mayotte", es: "Vuelo ida y vuelta Madrid–Mayotte" }, amount: "600–900 €" },
            { label: { fr: "Hôtels 3★ (10 nuits)", en: "3★ hotels (10 nights)", es: "Hoteles 3★ (10 noches)" }, amount: "1 000–1 600 €" },
            { label: { fr: "Location voiture", en: "Car rental", es: "Alquiler de coche" }, amount: "400–600 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes" }, amount: "400–650 €" },
            { label: { fr: "Plongée, dauphins, kayak", en: "Diving, dolphins, kayaking", es: "Buceo, delfines, kayak" }, amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid" }, value: { fr: "~12h (Air Austral direct depuis CDG, ou Corsair via escale) — 3 à 5 fois par semaine", en: "~12h (Air Austral direct from CDG, or Corsair with a stopover) — 3 to 5 times a week", es: "~12h (con escala) — 3 a 5 veces por semana" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "Aucun visa — département français. Carte nationale d'identité suffisante pour les ressortissants français.", en: "No visa needed — French overseas department. A national ID card is sufficient for French citizens.", es: "Sin visado — departamento francés de ultramar. DNI válido para ciudadanos de la UE." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Euro (€). Carte bancaire acceptée dans les commerces principaux. Espèces utiles en zone rurale.", en: "Euro (€). Bank cards accepted at major shops. Cash useful in rural areas.", es: "Euro (€). Tarjeta bancaria aceptada en los principales comercios. El efectivo es útil en zonas rurales." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Français (officiel). Shimaoré et Kibushi entre habitants. Français suffisant pour voyager.", en: "French (official). Shimaore and Kibushi spoken among locals. French is sufficient for travelling.", es: "Francés (oficial). Shimaoré y kibushi entre los habitantes. El francés es suficiente para viajar." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico" }, value: { fr: "Type E/F (européen) — 220V. Aucun adaptateur nécessaire.", en: "Type E/F (European) — 220V. No adapter needed.", es: "Tipo E/F (europeo) — 220V. No se necesita adaptador." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Antipaludéen recommandé (paludisme présent à Mayotte). Crème solaire indispensable. Eau du robinet à éviter.", en: "Antimalarials recommended (malaria present in Mayotte). Sunscreen essential. Avoid tap water.", es: "Se recomienda antipalúdico (malaria presente en Mayotte). Protector solar indispensable. Evitar el agua del grifo." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo" }, value: { fr: "Qualité variable — eau en bouteille recommandée.", en: "Variable quality — bottled water recommended.", es: "Calidad variable — se recomienda agua embotellada." } },
    { icon: "🌀", label: { fr: "Cyclones", en: "Cyclones", es: "Ciclones" }, value: { fr: "Risque cyclonique de novembre à avril. Consulter Météo-France Mayotte en saison.", en: "Cyclone risk from November to April. Check Météo-France Mayotte during the season.", es: "Riesgo de ciclones de noviembre a abril. Consultar Météo-France Mayotte en temporada." } },
  ],
};
