export const CAMEROON = {
  code: "CMR",
  numericId: 120,
  name: { fr: "Cameroun", en: "Cameroon", es: "Camerún", de: "Kamerun" },
  emoji: "🇨🇲",
  capital: { fr: "Yaoundé", en: "Yaoundé", es: "Yaundé", de: "Yaoundé" },
  language: { fr: "Français, Anglais, Pidgin, Fulfulde, Bassa", en: "French, English, Pidgin, Fulfulde, Bassa", es: "Francés, inglés, pidgin, fulfulde, bassa", de: "Französisch, Englisch, Pidgin, Fulfulde, Bassa" },
  currency: { fr: "Franc CFA (XAF)", en: "CFA Franc (XAF)", es: "Franco CFA (XAF)", de: "CFA-Franc (XAF)" },
  timezone: "UTC+1",
  filter: {
    budgetMin: 45, budgetMid: 100,
    tripMin: 1800, tripMid: 3500,
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
    plage: 1,
    plongee: 1,
  },
  description: {
    fr: "Le Cameroun est surnommé 'l'Afrique en miniature' : désert du Sahara au nord avec le lac Tchad, savane, forêt tropicale dense du bassin du Congo (gorilles et chimpanzés), côte atlantique avec le mont Cameroun (4 095m, volcan actif), et la diversité culturelle de 300 ethnies. Douala sa métropole, Kribi et ses plages, et le Nord avec les Kirdi et les sultanats peuls.", en: "Cameroon is nicknamed 'Africa in miniature': Sahara desert in the north with Lake Chad, savannah, dense Congo Basin rainforest (home to gorillas and chimpanzees), an Atlantic coastline with Mount Cameroon (4,095m, an active volcano), and the cultural diversity of 300 ethnic groups. Douala its metropolis, Kribi and its beaches, and the North with the Kirdi people and Fulani sultanates.", es: "Camerún es apodado 'el África en miniatura': desierto del Sáhara al norte con el lago Chad, sabana, densa selva tropical de la cuenca del Congo (gorilas y chimpancés), costa atlántica con el monte Camerún (4.095m, volcán activo), y la diversidad cultural de 300 etnias. Duala, su metrópolis, Kribi y sus playas, y el Norte con los kirdi y los sultanatos fulani.", de: "Kamerun trägt den Spitznamen „Afrika im Kleinformat“: Sahara im Norden mit dem Tschadsee, Savanne, dichter Tropenwald des Kongobeckens (Gorillas und Schimpansen), Atlantikküste mit dem Berg Kamerun (4.095 m, aktiver Vulkan) und die kulturelle Vielfalt von 300 ethnischen Gruppen. Douala mit seiner Metropole, Kribi mit seinen Stränden und der Norden mit den Sultanaten Kirdi und Fulani.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Mars", en: "November – March", es: "Noviembre – Marzo", de: "November – März" },
      label: { fr: "Saison sèche (nord et centre)", en: "Dry season (north and centre)", es: "Estación seca (norte y centro)", de: "Trockenzeit (Norden und Mitte)" },
      color: "#22c55e",
      description: {
        fr: "Idéal pour le nord (Maroua, Waza) et les parcs nationaux. Centre et sud plus pluvieux mais praticables. Températures agréables 22–30°C.", en: "Ideal for the north (Maroua, Waza) and national parks. Centre and south are rainier but still manageable. Pleasant temperatures of 22–30°C.", es: "Ideal para el norte (Maroua, Waza) y los parques nacionales. Centro y sur más lluviosos pero transitables. Temperaturas agradables de 22–30°C.", de: "Ideal für den Norden (Maroua, Waza) und Nationalparks. In der Mitte und im Süden ist es regnerischer, aber passabel. Angenehme Temperaturen 22–30°C.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Septembre", en: "June – September", es: "Junio – Septiembre", de: "Juni – September" },
      label: { fr: "Saison des pluies (sud)", en: "Rainy season (south)", es: "Estación de lluvias (sur)", de: "Regenzeit (Süden)" },
      color: "#ef4444",
      description: {
        fr: "Pluies abondantes au sud et centre (200–400mm/mois), routes difficiles en forêt. Nord sec mais très chaud (35–40°C).", en: "Heavy rainfall in the south and centre (200–400mm/month), difficult forest roads. The north is dry but very hot (35–40°C).", es: "Lluvias abundantes en el sur y el centro (200–400mm/mes), carreteras difíciles en la selva. Norte seco pero muy caluroso (35–40°C).", de: "Starke Regenfälle im Süden und in der Mitte (200–400 mm/Monat), schwierige Straßen im Wald. Norden trocken, aber sehr heiß (35–40°C).",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "yaounde",
      name: "Yaoundé",
      region: { fr: "Centre", en: "Centre", es: "Centro", de: "Center" },
      data: [
        { month: "Jan", temp: 24, rain: 20,  icon: "☀️" },
        { month: "Fév", temp: 25, rain: 70,  icon: "⛅" },
        { month: "Mar", temp: 25, rain: 130, icon: "🌧️" },
        { month: "Avr", temp: 25, rain: 200, icon: "🌧️" },
        { month: "Mai", temp: 24, rain: 200, icon: "🌧️" },
        { month: "Jun", temp: 23, rain: 100, icon: "⛅" },
        { month: "Jul", temp: 22, rain: 60,  icon: "⛅" },
        { month: "Aoû", temp: 22, rain: 80,  icon: "⛅" },
        { month: "Sep", temp: 23, rain: 220, icon: "🌧️" },
        { month: "Oct", temp: 23, rain: 280, icon: "🌧️" },
        { month: "Nov", temp: 24, rain: 100, icon: "⛅" },
        { month: "Déc", temp: 24, rain: 20,  icon: "☀️" },
      ],
    },
    {
      id: "maroua",
      name: "Maroua",
      region: { fr: "Extrême-Nord", en: "Far North", es: "Extremo Norte", de: "Hoher Norden" },
      data: [
        { month: "Jan", temp: 26, rain: 0,   icon: "☀️" },
        { month: "Fév", temp: 29, rain: 0,   icon: "⛅" },
        { month: "Mar", temp: 33, rain: 5,   icon: "🌡️" },
        { month: "Avr", temp: 36, rain: 20,  icon: "🌡️" },
        { month: "Mai", temp: 35, rain: 60,  icon: "🌡️" },
        { month: "Jun", temp: 31, rain: 110, icon: "🌧️" },
        { month: "Jul", temp: 29, rain: 180, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 200, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 130, icon: "🌧️" },
        { month: "Oct", temp: 31, rain: 30,  icon: "⛅" },
        { month: "Nov", temp: 29, rain: 0,   icon: "⛅" },
        { month: "Déc", temp: 26, rain: 0,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Parc de Waza — Éléphants du Sahel", en: "Waza National Park — Sahel Elephants", es: "Parque de Waza — Elefantes del Sahel", de: "Waza Park – Elefanten der Sahelzone" },
      region: { fr: "Extrême-Nord", en: "Far North", es: "Extremo Norte", de: "Hoher Norden" },
      description: {
        fr: "Le Parc national de Waza est le plus accessible et le plus riche en faune du Cameroun : éléphants (la plus grande population du pays), lions, girafes, autruches et hippotragues dans une savane sahélienne spectaculaire. Meilleur en saison sèche (novembre–avril) quand les animaux se concentrent autour des points d'eau.", en: "Waza National Park is Cameroon's most accessible and wildlife-rich park: elephants (the country's largest population), lions, giraffes, ostriches and roan antelopes in a spectacular Sahelian savannah. Best during the dry season (November–April) when animals gather around waterholes.", es: "El Parque nacional de Waza es el más accesible y el más rico en fauna de Camerún: elefantes (la mayor población del país), leones, jirafas, avestruces e hipotragos en una espectacular sabana saheliana. Mejor en estación seca (noviembre–abril), cuando los animales se concentran en torno a los puntos de agua.", de: "Der Waza-Nationalpark ist der am besten zugängliche und reichste an Wildtieren in Kamerun: Elefanten (die größte Population im Land), Löwen, Giraffen, Strauße und Antilopen in einer spektakulären Sahel-Savanne. Am besten in der Trockenzeit (November–April), wenn sich die Tiere in der Nähe von Wasserstellen konzentrieren.",
      },
      wikipedia: "Waza_National_Park",
      tags: ["Safari", "Nature"],
      mustSee: [
        { name: { fr: "Safari Waza — éléphants, girafes et lions en saison sèche", en: "Waza safari — elephants, giraffes and lions in the dry season", es: "Safari de Waza — elefantes, jirafas y leones en estación seca", de: "Safari Waza – Elefanten, Giraffen und Löwen in der Trockenzeit" }, wikipedia: "Waza_National_Park" },
        { name: { fr: "Sultanat de Maroua — palais du sultan peul", en: "Maroua Sultanate — palace of the Fulani sultan", es: "Sultanato de Maroua — palacio del sultán fulani", de: "Sultanat Maroua – Palast des Fulani-Sultans" }, wikipedia: "Maroua" },
        { name: { fr: "Mont Mandara et villages perchés Kirdi", en: "Mandara Mountains and perched Kirdi villages", es: "Montes Mandara y aldeas kirdi encaramadas", de: "Mandara-Gebirge und hoch gelegene Kirdi-Dörfer" }, wikipedia: "Mandara_Mountains" },
      ],
    },
    {
      id: 2,
      name: { fr: "Mont Cameroun — Volcan et ascension", en: "Mount Cameroon — Volcano and Climb", es: "Monte Camerún — Volcán y ascensión", de: "Kamerunberg – Vulkan und Besteigung" },
      region: { fr: "Sud-Ouest", en: "Southwest", es: "Suroeste", de: "Südwesten" },
      description: {
        fr: "Le mont Cameroun (4 095m) est le plus haut sommet d'Afrique de l'Ouest et de Centrale : un volcan actif (dernière éruption 1999) dont l'ascension de 3 jours traverse toutes les zones de végétation, de la forêt tropicale aux laves récentes. La ville de Buea est la base de départ. Limbe, sur la côte, complète le circuit avec ses plages de sable noir volcanique.", en: "Mount Cameroon (4,095m) is the highest peak in West and Central Africa: an active volcano (last erupted in 1999) whose three-day ascent crosses every vegetation zone, from rainforest to recent lava flows. The town of Buea is the starting base. Limbe, on the coast, rounds out the trip with its black volcanic sand beaches.", es: "El monte Camerún (4.095m) es el pico más alto de África Occidental y Central: un volcán activo (última erupción en 1999) cuya ascensión de 3 días atraviesa todas las zonas de vegetación, desde la selva tropical hasta las lavas recientes. La ciudad de Buea es el punto de partida. Limbe, en la costa, completa el circuito con sus playas de arena negra volcánica.", de: "Der Kamerunberg (4.095 m) ist der höchste Gipfel West- und Zentralafrikas. Der aktive Vulkan brach zuletzt 1999 aus; während der dreitägigen Besteigung durchquert man sämtliche Vegetationszonen, vom tropischen Regenwald bis zu jungen Lavafeldern. Ausgangspunkt ist die Stadt Buea. In Limbe an der Küste ergänzen schwarze Vulkansandstrände die Route.",
      },
      wikipedia: "Mount_Cameroon",
      tags: ["Nature", "Randonnée", "Montagne"],
      mustSee: [
        { name: { fr: "Ascension mont Cameroun (3j, guide obligatoire)", en: "Mount Cameroon ascent (3 days, guide required)", es: "Ascensión al monte Camerún (3 días, guía obligatorio)", de: "Besteigung des Kamerunbergs (3 Tage, Führer erforderlich)" }, wikipedia: "Mount_Cameroon" },
        { name: { fr: "Plages de sable noir de Limbe", en: "Limbe's black sand beaches", es: "Playas de arena negra de Limbe", de: "Schwarze Sandstrände von Limbe" }, wikipedia: "File:Limbe view with Bioko.jpg" },
        { name: { fr: "Wildlife Centre de Limbe — chimpanzés et gorilles sauvés", en: "Limbe Wildlife Centre — rescued chimpanzees and gorillas", es: "Wildlife Centre de Limbe — chimpancés y gorilas rescatados", de: "Limbe Wildlife Center – gerettete Schimpansen und Gorillas" }, wikipedia: "File:Limbé Wildlife Centre (4).jpg" },
        { name: { fr: "Plantation de thé de Tole", en: "Tole tea plantation", es: "Plantación de té de Tole", de: "Tole-Teeplantage" }, wikipedia: "Mount_Cameroon" },
      ],
    },
    {
      id: 3,
      name: { fr: "Kribi — Plages et chutes", en: "Kribi — Beaches and Waterfalls", es: "Kribi — Playas y cataratas", de: "Kribi – Strände und Wasserfälle" },
      region: { fr: "Océan", en: "Ocean", es: "Océano", de: "Ozean" },
      description: {
        fr: "Kribi est la plus belle station balnéaire du Cameroun : plages de sable blanc bordées de palmiers avec la forêt tropicale en arrière-plan. Les chutes de la Lobé sont uniques au monde : une rivière qui se jette directement dans l'océan Atlantique depuis une falaise rocheuse. À proximité : les Pygmées Baka et la forêt primaire.", en: "Kribi is Cameroon's finest seaside resort town: white sand beaches lined with palm trees, with rainforest as a backdrop. The Lobé Falls are unique in the world: a river that plunges directly into the Atlantic Ocean from a rocky cliff. Nearby: the Baka Pygmies and primary forest.", es: "Kribi es la estación balnearia más bella de Camerún: playas de arena blanca bordeadas de palmeras con la selva tropical de fondo. Las cataratas de Lobé son únicas en el mundo: un río que se precipita directamente en el océano Atlántico desde un acantilado rocoso. Cerca: los pigmeos baka y el bosque primario.", de: "Kribi ist der schönste Badeort in Kamerun: weiße Sandstrände, gesäumt von Palmen, im Hintergrund der tropische Wald. Die Lobé-Wasserfälle sind weltweit einzigartig: ein Fluss, der von einer felsigen Klippe direkt in den Atlantischen Ozean mündet. In der Nähe: die Baka-Pygmäen und der Primärwald.",
      },
      wikipedia: "Kribi",
      tags: ["Plage", "Nature", "Culture"],
      mustSee: [
        { name: { fr: "Chutes de la Lobé — chutes tombant directement dans l'océan", en: "Lobé Falls — waterfalls plunging directly into the ocean", es: "Cataratas de Lobé — caídas que se precipitan directamente en el océano", de: "Lobé Falls – Wasserfälle, die direkt ins Meer fallen" }, wikipedia: "File:Les chutes de la lobé kribi cameroon1.jpg" },
        { name: { fr: "Plages de Kribi — sable blanc et palmiers", en: "Kribi beaches — white sand and palm trees", es: "Playas de Kribi — arena blanca y palmeras", de: "Kribi-Strände – weißer Sand und Palmen" }, wikipedia: "Kribi" },
        { name: { fr: "Rencontre avec les Pygmées Baka (forêt)", en: "Meeting the Baka Pygmies (forest)", es: "Encuentro con los pigmeos baka (selva)", de: "Treffen mit den Baka-Pygmäen (Wald)" }, wikipedia: "File:Baka Drf Dja.JPG" },
      ],
    },
    {
      id: 4,
      name: { fr: "Bafut & Chefferies Bamoun", en: "Bafut & Bamoun Chiefdoms", es: "Bafut y jefaturas bamún", de: "Bafut & Chefferies Bamoun" },
      region: { fr: "Ouest / Nord-Ouest", en: "West / Northwest", es: "Oeste / Noroeste", de: "Westen/Nordwesten" },
      description: {
        fr: "Les chefferies traditionnelles de l'Ouest camerounais sont parmi les plus vivantes d'Afrique : le palais de la chefferie de Bafut avec ses danses Abakwa, les tisserands Ndop, et le palais du Sultan des Bamoun à Foumban avec son musée de 2 000 pièces retraçant l'histoire du royaume Bamoun. L'Ouest camerounais est aussi une région agricole spectaculaire aux paysages de montagnes.", en: "The traditional chiefdoms of western Cameroon are among the most vibrant in Africa: the Bafut chiefdom's palace with its Abakwa dances, the Ndop weavers, and the Bamoun Sultan's palace in Foumban with its 2,000-piece museum tracing the history of the Bamoun kingdom. Western Cameroon is also a spectacular farming region with mountain landscapes.", es: "Las jefaturas tradicionales del oeste de Camerún están entre las más vivas de África: el palacio de la jefatura de Bafut con sus danzas Abakwa, los tejedores ndop, y el palacio del sultán bamún en Foumban con su museo de 2.000 piezas que recorre la historia del reino bamún. El oeste de Camerún es también una espectacular región agrícola de paisajes montañosos.", de: "Die traditionellen Häuptlingstümer Westkameruns gehören zu den lebendigsten in Afrika: der Bafut-Häuptlingspalast mit seinen Abakwa-Tänzen, die Ndop-Weber und der Palast des Sultans von Bamoun in Foumban mit seinem Museum mit 2.000 Exponaten, die die Geschichte des Bamoun-Königreichs nachzeichnen. Westkamerun ist auch eine spektakuläre Agrarregion mit Berglandschaften.",
      },
      wikipedia: "Foumban",
      tags: ["Histoire", "Culture", "Shopping", "Montagne"],
      mustSee: [
        { name: { fr: "Palais du Sultan des Bamoun à Foumban + musée", en: "Bamoun Sultan's Palace in Foumban + museum", es: "Palacio del sultán bamún en Foumban + museo", de: "Palast des Sultans von Bamoun in Foumban + Museum" }, wikipedia: "Foumban" },
        { name: { fr: "Marché de Foumban — bronzes, masques et tissus", en: "Foumban market — bronzes, masks and fabrics", es: "Mercado de Foumban — bronces, máscaras y tejidos", de: "Foumban-Markt – Bronzen, Masken und Stoffe" }, wikipedia: "File:Cameroon - Foumban market.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Cameroun est abordable mais les parcs nationaux et les circuits guidés représentent un coût significatif. Douala est la ville la plus chère. La cuisine camerounaise est excellente et bon marché dans les restaurants locaux.", en: "Cameroon is affordable, but national parks and guided tours represent a significant expense. Douala is the most expensive city. Cameroonian cuisine is excellent and cheap in local restaurants.", es: "Camerún es asequible, pero los parques nacionales y los circuitos guiados representan un gasto importante. Duala es la ciudad más cara. La cocina camerunesa es excelente y económica en los restaurantes locales.", de: "Kamerun ist erschwinglich, aber Nationalparks und geführte Touren verursachen erhebliche Kosten. Douala ist die teuerste Stadt. Die kamerunische Küche ist in den örtlichen Restaurants ausgezeichnet und preiswert.",
    },
    currency: "XAF",
    exchangeRate: "1€ = 655 XAF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse / chambre en lodge", en: "Guesthouse / lodge room", es: "Guesthouse / habitación en lodge", de: "Gästehaus/Lodge-Zimmer" }, price: "20–40 €", detail: { fr: "Ventilateur ou clim basique", en: "Fan or basic air conditioning", es: "Ventilador o aire acondicionado básico", de: "Ventilator oder einfache Klimaanlage" } },
          { label: { fr: "Hôtel 3★ (Yaoundé, Douala, Kribi)", en: "3-star hotel (Yaoundé, Douala, Kribi)", es: "Hotel 3★ (Yaundé, Duala, Kribi)", de: "Hotel 3★ (Yaoundé, Douala, Kribi)" }, price: "60–100 €", detail: { fr: "Clim, wifi, sécurité", en: "AC, wifi, security", es: "Aire acondicionado, wifi, seguridad", de: "Klimaanlage, WLAN, Sicherheit" } },
          { label: { fr: "Hôtel de luxe (Hilton Douala, Yaoundé Hilton)", en: "Luxury hotel (Hilton Douala, Yaoundé Hilton)", es: "Hotel de lujo (Hilton Duala, Hilton Yaundé)", de: "Luxushotel (Hilton Douala, Yaoundé Hilton)" }, price: "150–250 €", detail: { fr: "Standard international", en: "International standard", es: "Estándar internacional", de: "Internationaler Standard" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Ndolé / eru dans un resto local", en: "Ndolé / eru at a local restaurant", es: "Ndolé / eru en un restaurante local", de: "Ndolé / eru in einem lokalen Restaurant" }, price: "2–6 €", detail: { fr: "Cuisine camerounaise typique", en: "Typical Cameroonian cuisine", es: "Cocina camerunesa típica", de: "Typische kamerunische Küche" } },
          { label: { fr: "Restaurant mid-range Yaoundé", en: "Mid-range restaurant in Yaoundé", es: "Restaurante de gama media en Yaundé", de: "Mittelklasserestaurant Yaoundé" }, price: "8–20 €", detail: { fr: "Grillades, poisson, bière locale", en: "Grilled meat, fish, local beer", es: "Parrilladas, pescado, cerveza local", de: "Grillgerichte, Fisch, lokales Bier" } },
          { label: { fr: "Restaurant gastronomique Douala", en: "Fine dining in Douala", es: "Restaurante gastronómico en Duala", de: "Gourmetrestaurant Douala" }, price: "25–50 €", detail: { fr: "Fruits de mer, cuisine française", en: "Seafood, French cuisine", es: "Marisco, cocina francesa", de: "Meeresfrüchte, französische Küche" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bus express (Yaoundé–Douala, 4h)", en: "Express bus (Yaoundé–Douala, 4h)", es: "Autobús exprés (Yaundé–Duala, 4h)", de: "Expressbus (Yaoundé–Douala, 4 Stunden)" }, price: "5–10 €", detail: { fr: "Compagnies confortables (Général Express)", en: "Comfortable companies (Général Express)", es: "Compañías cómodas (Général Express)", de: "Komfortable Gesellschaften (Général Express)" } },
          { label: { fr: "Vol intérieur Douala–Maroua", en: "Domestic flight Douala–Maroua", es: "Vuelo interior Duala–Maroua", de: "Inlandsflug Douala–Maroua" }, price: "80–150 €", detail: { fr: "Recommandé pour éviter les longues routes", en: "Recommended to avoid long road trips", es: "Recomendado para evitar trayectos largos por carretera", de: "Empfohlen, um lange Straßen zu vermeiden" } },
          { label: { fr: "4x4 avec chauffeur / journée", en: "4x4 with driver / day", es: "4x4 con conductor / día", de: "4x4 mit Fahrer / Tag" }, price: "70–120 €", detail: { fr: "Indispensable pour les parcs", en: "Essential for the parks", es: "Indispensable para los parques", de: "Unverzichtbar für Parks" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Safari Waza (guide + jeep, journée)", en: "Waza safari (guide + jeep, full day)", es: "Safari en Waza (guía + jeep, día completo)", de: "Safari Waza (Führer + Jeep, Tag)" }, price: "50–90 €", detail: { fr: "Depuis Maroua", en: "From Maroua", es: "Desde Maroua", de: "Von Maroua" } },
          { label: { fr: "Ascension mont Cameroun (3 jours)", en: "Mount Cameroon ascent (3 days)", es: "Ascensión al monte Camerún (3 días)", de: "Besteigung des Kamerunbergs (3 Tage)" }, price: "150–250 €", detail: { fr: "Guide + porteurs + hébergement", en: "Guide + porters + accommodation", es: "Guía + porteadores + alojamiento", de: "Führer + Träger + Unterkunft" } },
          { label: { fr: "Visite Foumban + Bafut avec guide", en: "Foumban + Bafut guided visit", es: "Visita guiada Foumban + Bafut", de: "Foumban + Bafut-Besuch mit Führer" }, price: "30–60 €", detail: { fr: "Journée depuis Bafoussam", en: "Day trip from Bafoussam", es: "Día completo desde Bafoussam", de: "Tag von Bafoussam" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "45–75 €/j", desc: { fr: "Guesthouse + cuisine locale + bus", en: "Guesthouse + local food + bus", es: "Guesthouse + comida local + autobús", de: "Gästehaus + lokale Küche + Bus" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "100–160 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions guidées", en: "3-star hotel + restaurants + guided excursions", es: "Hotel 3★ + restaurantes + excursiones guiadas", de: "3★ Hotel + Restaurants + geführte Ausflüge" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "250 €+/j", desc: { fr: "Grand hôtel + safaris privés + vols intérieurs", en: "Grand hotel + private safaris + domestic flights", es: "Gran hotel + safaris privados + vuelos interiores", de: "Großes Hotel + private Safaris + Inlandsflüge" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "14 jours", en: "14 days", es: "14 días", de: "14 Tage" },
      route: { fr: "Douala (2j) → Yaoundé (2j) → Bafoussam / Ouest (3j) → Mont Cameroun / Limbe (3j) → Kribi (2j) → Maroua / Waza (2j)", en: "Douala (2d) → Yaoundé (2d) → Bafoussam / West (3d) → Mount Cameroon / Limbe (3d) → Kribi (2d) → Maroua / Waza (2d)", es: "Duala (2d) → Yaundé (2d) → Bafoussam / Oeste (3d) → Monte Camerún / Limbe (3d) → Kribi (2d) → Maroua / Waza (2d)", de: "Douala (2 Tage) → Yaoundé (2 Tage) → Bafoussam / Westen (3 Tage) → Berg Kamerun / Limbe (3 Tage) → Kribi (2 Tage) → Maroua / Waza (2 Tage)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 800 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Douala", en: "Return flight Paris–Douala", es: "Vuelo ida y vuelta París–Duala", de: "Hin- und Rückflug Paris–Douala" }, amount: "550–800 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "400–650 €" },
            { label: { fr: "Transports locaux + 1 vol intérieur", en: "Local transport + 1 domestic flight", es: "Transporte local + 1 vuelo interior", de: "Nahverkehr + 1 Inlandsflug" }, amount: "300–500 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "200–400 €" },
            { label: { fr: "Guides & activités", en: "Guides & activities", es: "Guías y actividades", de: "Führer und Aktivitäten" }, amount: "250–450 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "3 500 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Douala", en: "Return flight Paris–Douala", es: "Vuelo ida y vuelta París–Duala", de: "Hin- und Rückflug Paris–Douala" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "1 000–1 600 €" },
            { label: { fr: "4x4 + vols intérieurs", en: "4x4 + domestic flights", es: "4x4 + vuelos interiores", de: "4x4 + Inlandsflüge" }, amount: "700–1 200 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "500–900 €" },
            { label: { fr: "Guides & safaris", en: "Guides & safaris", es: "Guías y safaris", de: "Führungen und Safaris" }, amount: "500–800 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde París", de: "Flug ab Paris" }, value: { fr: "~7h direct (Air France, Corsair, Camair-Co) vers Douala ou Yaoundé", en: "~7h direct (Air France, Corsair, Camair-Co) to Douala or Yaoundé", es: "~7h directo (Air France, Corsair, Camair-Co) a Duala o Yaundé", de: "ca. 7 Stunden direkt (Air France, Corsair, Camair-Co) nach Douala oder Yaoundé" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Visa obligatoire — e-Visa disponible en ligne (~90€) ou ambassade. Valable 30–90 jours.", en: "Visa required — e-Visa available online (~90€) or via embassy. Valid 30–90 days.", es: "Visado obligatorio — e-Visa disponible en línea (~90€) o en embajada. Válido 30–90 días.", de: "Visum erforderlich – E-Visum online (ca. 90 €) oder bei der Botschaft erhältlich. Gültig für 30–90 Tage." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Franc CFA BEAC (XAF). 1€ = 655 XAF taux fixe. Espèces indispensables hors grandes villes.", en: "CFA BEAC Franc (XAF). 1€ = 655 XAF fixed rate. Cash essential outside major cities.", es: "Franco CFA BEAC (XAF). 1€ = 655 XAF tipo fijo. Efectivo indispensable fuera de las grandes ciudades.", de: "CFA-BEAC-Franc (XAF). 1€ = 655 XAF Festpreis. Wesentliche Arten außerhalb von Großstädten." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Français et Anglais (officiels). Français prédominant au centre et sud. Anglais au nord-ouest et sud-ouest.", en: "French and English (official). French predominant in the centre and south. English in the northwest and southwest.", es: "Francés e inglés (oficiales). Francés predominante en el centro y el sur. Inglés en el noroeste y el suroeste.", de: "Französisch und Englisch (offiziell). Französisch vorherrschend in der Mitte und im Süden. Englisch im Nordwesten und Südwesten." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type C/E (européen) — 220V.", en: "Type C/E (European) — 220V.", es: "Tipo C/E (europeo) — 220V.", de: "Typ C/E (europäisch) – 220 V." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Vaccin fièvre jaune obligatoire. Antipaludéen indispensable. Fièvre typhoïde et hépatites A/B recommandés.", en: "Yellow fever vaccine mandatory. Antimalarials essential. Typhoid fever and hepatitis A/B vaccines recommended.", es: "Vacuna contra la fiebre amarilla obligatoria. Antipalúdico indispensable. Se recomiendan las vacunas contra la fiebre tifoidea y la hepatitis A/B.", de: "Gelbfieberimpfung erforderlich. Unverzichtbares Malariamittel. Typhus und Hepatitis A/B empfohlen." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable — eau en bouteille indispensable.", en: "Not drinkable — bottled water essential.", es: "No potable — agua embotellada indispensable.", de: "Nicht trinkbar – Wasser in Flaschen unbedingt erforderlich." } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red", de: "Mobilfunknetz" }, value: { fr: "Bonne couverture 4G dans les grandes villes. Zones reculées sans réseau. SIM MTN locale recommandée.", en: "Good 4G coverage in major cities. Remote areas without signal. Local MTN SIM recommended.", es: "Buena cobertura 4G en las grandes ciudades. Zonas remotas sin cobertura. Se recomienda una SIM MTN local.", de: "Gute 4G-Abdeckung in Großstädten. Entlegene Gebiete ohne Netz. Lokale MTN-SIM-Karte empfohlen." } },
  ],
};
