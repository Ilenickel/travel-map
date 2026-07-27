export const REUNION = {
  code: "REU",
  numericId: 638,
  name: { fr: "La Réunion", en: "Réunion Island", es: "La Reunión", de: "Réunion" },
  emoji: "🇷🇪",
  capital: { fr: "Saint-Denis", en: "Saint-Denis", es: "Saint-Denis", de: "Saint-Denis" },
  language: { fr: "Français, Créole réunionnais", en: "French, Réunion Creole", es: "Francés, criollo reunionés", de: "Französisch, Réunion-Kreolisch" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)", es: "Euro (EUR)", de: "Euro (EUR)" },
  timezone: "UTC+4",
  filter: {
    budgetMin: 80, budgetMid: 160,
    tripMin: 1800, tripMid: 3500,
  },
  criteria: {
    unesco: 1,
    nature: 2,
    randonnee: 2,
    gastronomie: 2,
    architecture: 1,
    desert: 0,
    safari: 1,
    ski: 0,
    ville: 1,
    plage: 2,
  },
  description: {
    fr: "La Réunion est une île volcanique française de l'océan Indien : le Piton de la Fournaise (l'un des volcans les plus actifs du monde avec des éruptions quasi annuelles), les trois cirques de montagne (Cilaos, Mafate, Salazie — classés UNESCO Parc national), les ravines et forêts tropicales de liane, et la côte ouest avec ses plages et son lagon protégé. Un territoire français avec une cuisine créole exceptionnelle.", en: "Réunion Island is a French volcanic island in the Indian Ocean: Piton de la Fournaise (one of the most active volcanoes in the world, erupting almost yearly), the three mountain cirques (Cilaos, Mafate, Salazie — UNESCO-listed national park), ravines and tropical liana forests, and the west coast with its beaches and protected lagoon. A French territory with exceptional Creole cuisine.", es: "La Reunión es una isla volcánica francesa del océano Índico: el Piton de la Fournaise (uno de los volcanes más activos del mundo, con erupciones casi anuales), los tres circos de montaña (Cilaos, Mafate, Salazie, declarados parque nacional UNESCO), las ravinas y bosques tropicales de lianas, y la costa oeste con sus playas y su laguna protegida. Un territorio francés con una gastronomía criolla excepcional.", de: "Réunion ist eine französische Vulkaninsel im Indischen Ozean: der Piton de la Fournaise (einer der aktivsten Vulkane der Welt mit fast jährlichen Ausbrüchen), die drei Bergkessel (Cilaos, Mafate, Salazie – UNESCO-Nationalpark), die Schluchten und tropischen Lianenwälder sowie die Westküste mit ihren Stränden und ihrer geschützten Lagune. Ein französisches Territorium mit außergewöhnlicher kreolischer Küche.",
  },

  bestPeriods: [
    {
      months: { fr: "Avril – Novembre", en: "April – November", es: "Abril – Noviembre", de: "April – November" },
      label: { fr: "Saison fraîche et sèche (côte ouest)", en: "Cool, dry season (west coast)", es: "Estación fresca y seca (costa oeste)", de: "Kühle und trockene Jahreszeit (Westküste)" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : côte ouest ensoleillée (22–28°C), cirques accessibles, volcan souvent en éruption. Idéal pour la randonnée.", en: "Best time to visit: sunny west coast (22–28°C), accessible cirques, volcano often erupting. Ideal for hiking.", es: "Mejor época: costa oeste soleada (22–28 °C), circos accesibles, volcán a menudo en erupción. Ideal para el senderismo.", de: "Beste Zeit: sonnige Westküste (22–28°C), zugängliche Kare, häufig Vulkanausbrüche. Ideal zum Wandern.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Mars", en: "December – March", es: "Diciembre – Marzo", de: "Dezember – März" },
      label: { fr: "Saison chaude et cyclonique", en: "Hot, cyclone season", es: "Estación cálida y ciclónica", de: "Heiße und zyklonische Jahreszeit" },
      color: "#ef4444",
      description: {
        fr: "Risque cyclonique (la Réunion est fréquemment frappée), pluies abondantes sur l'est et les cirques, température 28–32°C. Moins favorable pour la randonnée.", en: "Cyclone risk (Réunion is frequently hit), heavy rain on the east side and in the cirques, temperatures 28–32°C. Less favourable for hiking.", es: "Riesgo de ciclones (La Reunión se ve afectada con frecuencia), lluvias abundantes en el este y los circos, temperatura de 28–32 °C. Menos favorable para el senderismo.", de: "Zyklongefahr (Réunion wird häufig heimgesucht), starke Regenfälle im Osten und in den Talkesseln, Temperatur 28–32°C. Zum Wandern weniger günstig.",
      },
      icon: "🌀",
    },
  ],

  weatherCities: [
    {
      id: "saint_gilles",
      name: { fr: "Saint-Gilles (côte ouest)", en: "Saint-Gilles (west coast)", es: "Saint-Gilles (costa oeste)", de: "Saint-Gilles (Westküste)" },
      region: { fr: "Saint-Paul — côte sous le vent", en: "Saint-Paul — leeward coast", es: "Saint-Paul — costa de sotavento", de: "Saint-Paul – Leeküste" },
      data: [
        { month: "Jan", temp: 29, rain: 80,  icon: "⛅" },
        { month: "Fév", temp: 30, rain: 100, icon: "🌧️" },
        { month: "Mar", temp: 29, rain: 90,  icon: "⛅" },
        { month: "Avr", temp: 28, rain: 40,  icon: "⛅" },
        { month: "Mai", temp: 26, rain: 30,  icon: "☀️" },
        { month: "Jun", temp: 24, rain: 20,  icon: "☀️" },
        { month: "Jul", temp: 23, rain: 15,  icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 15,  icon: "☀️" },
        { month: "Sep", temp: 24, rain: 20,  icon: "☀️" },
        { month: "Oct", temp: 26, rain: 30,  icon: "☀️" },
        { month: "Nov", temp: 27, rain: 40,  icon: "☀️" },
        { month: "Déc", temp: 28, rain: 60,  icon: "⛅" },
      ],
    },
    {
      id: "cilaos",
      name: { fr: "Cilaos (cirque)", en: "Cilaos (cirque)", es: "Cilaos (circo)", de: "Cilaos (Zirkus)" },
      region: { fr: "Cirque de Cilaos — altitude 1 200m", en: "Cirque de Cilaos — 1,200m altitude", es: "Circo de Cilaos — altitud 1.200 m", de: "Cirque de Cilaos – Höhe 1.200 m" },
      data: [
        { month: "Jan", temp: 21, rain: 380, icon: "🌧️" },
        { month: "Fév", temp: 21, rain: 420, icon: "🌧️" },
        { month: "Mar", temp: 21, rain: 350, icon: "🌧️" },
        { month: "Avr", temp: 19, rain: 200, icon: "🌧️" },
        { month: "Mai", temp: 17, rain: 130, icon: "☀️" },
        { month: "Jun", temp: 15, rain: 90,  icon: "⛅" },
        { month: "Jul", temp: 14, rain: 70,  icon: "⛅" },
        { month: "Aoû", temp: 14, rain: 60,  icon: "⛅" },
        { month: "Sep", temp: 16, rain: 80,  icon: "⛅" },
        { month: "Oct", temp: 18, rain: 100, icon: "☀️" },
        { month: "Nov", temp: 19, rain: 180, icon: "☀️" },
        { month: "Déc", temp: 21, rain: 300, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Piton de la Fournaise — Volcan actif", en: "Piton de la Fournaise — Active volcano", es: "Piton de la Fournaise — Volcán activo", de: "Piton de la Fournaise – Aktiver Vulkan" },
      region: { fr: "Massif de la Fournaise", en: "Fournaise Massif", es: "Macizo de la Fournaise", de: "Fournaise-Massiv" },
      description: {
        fr: "Le Piton de la Fournaise (2 632m) est l'un des volcans les plus actifs du monde : des éruptions presque chaque année, certaines spectaculaires avec des coulées de lave rougeoyantes qui atteignent l'océan. La route de la plaine des Cafres et la descente dans l'Enclos Fouqué (caldeira) sont les approches classiques. Un spectacle géologique unique.", en: "Piton de la Fournaise (2,632m) is one of the most active volcanoes in the world: erupting almost every year, some eruptions spectacularly sending glowing lava flows all the way to the ocean. The road via Plaine des Cafres and the descent into the Enclos Fouqué (caldera) are the classic approaches. A unique geological spectacle.", es: "El Piton de la Fournaise (2.632 m) es uno de los volcanes más activos del mundo: entra en erupción casi todos los años, algunas veces de forma espectacular con coladas de lava incandescente que llegan hasta el océano. La carretera de la Plaine des Cafres y el descenso al Enclos Fouqué (caldera) son los accesos clásicos. Un espectáculo geológico único.", de: "Piton de la Fournaise (2.632 m) ist einer der aktivsten Vulkane der Welt: Fast jedes Jahr kommt es zu Ausbrüchen, einige davon spektakulär mit glühenden Lavaströmen, die den Ozean erreichen. Der Weg zur Cafres-Ebene und der Abstieg in die Enclos Fouqué (Caldera) sind die klassischen Zustiege. Ein einzigartiges geologisches Spektakel.",
      },
      wikipedia: "File:Reunion PitonFournaise PitonChisny.JPG",
      tags: ["Nature", "Randonnée"],
      mustSee: [
        { name: { fr: "Piton de la Fournaise — ascension au cratère (si non actif)", en: "Piton de la Fournaise — climb to the crater (if not erupting)", es: "Piton de la Fournaise — ascensión al cráter (si no está activo)", de: "Piton de la Fournaise – Aufstieg zum Krater (falls nicht aktiv)" }, wikipedia: "Piton_de_la_Fournaise" },
        { name: { fr: "Belvedère de l'Enclos Fouqué — vue sur la caldeira", en: "Enclos Fouqué viewpoint — view over the caldera", es: "Mirador del Enclos Fouqué — vista sobre la caldera", de: "Belvedere des Enclos Fouqué – Blick auf die Caldera" }, wikipedia: "File:Route forestière du Volcan - Réunion.jpg" },
        { name: { fr: "Coulées de lave solidifiées (paysage volcanique minéral)", en: "Solidified lava flows (mineral volcanic landscape)", es: "Coladas de lava solidificada (paisaje volcánico mineral)", de: "Erstarrte Lavaströme (mineralische Vulkanlandschaft)" }, wikipedia: "File:Piton Fournaise Crater.jpg" },
        { name: { fr: "Éruption nocturne (aléatoire) — spectacle depuis la route", en: "Night eruption (unpredictable) — a show from the road", es: "Erupción nocturna (aleatoria) — espectáculo desde la carretera", de: "Nächtlicher Ausbruch (zufällig) – von der Straße aus sichtbar" }, wikipedia: "File:Lava_Fountains_and_Lava_Flows_at_Piton_de_la_Fournaise_2016.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Cirque de Mafate — Randonnée sans route", en: "Cirque de Mafate — Hiking with no roads", es: "Circo de Mafate — Senderismo sin carreteras", de: "Cirque de Mafate – Wanderung ohne Straße" },
      region: { fr: "Parc National", en: "National Park", es: "Parque nacional", de: "Nationalpark" },
      description: {
        fr: "Mafate est le seul cirque de La Réunion inaccessible en voiture : ses îlets (hameaux de quelques dizaines d'habitants) ne sont accessibles qu'à pied ou en hélicoptère. Les sentiers GR R1 et R2 traversent des paysages de basalte, de forêts de tamarins et de falaises vertigineuses. Un bivouac d'exception au cœur du Parc National (UNESCO).", en: "Mafate is the only cirque on Réunion Island inaccessible by car: its îlets (hamlets of a few dozen inhabitants) can only be reached on foot or by helicopter. The GR R1 and R2 trails cross basalt landscapes, tamarind forests and dizzying cliffs. An exceptional overnight stay at the heart of the National Park (UNESCO).", es: "Mafate es el único circo de La Reunión inaccesible en coche: sus îlets (caseríos de unas pocas decenas de habitantes) solo son accesibles a pie o en helicóptero. Los senderos GR R1 y R2 atraviesan paisajes de basalto, bosques de tamarindos y acantilados vertiginosos. Un vivac excepcional en el corazón del parque nacional (UNESCO).", de: "Mafate ist der einzige Talkessel der Insel La Réunion, der mit dem Auto nicht erreichbar ist: Seine Inselchen (Ortsteile mit ein paar Dutzend Einwohnern) sind nur zu Fuß oder mit dem Hubschrauber erreichbar. Die Wanderwege GR R1 und R2 durchqueren Landschaften aus Basalt, Tamarindenwäldern und schwindelerregenden Klippen. Ein außergewöhnliches Biwak im Herzen des Nationalparks (UNESCO).",
      },
      wikipedia: "File:14-07-2011_Grand_Bénare_(26)_Mafate_(version_améliorée).jpg",
      tags: ["Randonnée", "UNESCO", "Aventure"],
      mustSee: [
        { name: { fr: "Ilet à Cordes — village suspendu dans les falaises", en: "Ilet à Cordes — village perched on the cliffs", es: "Ilet à Cordes — pueblo suspendido en los acantilados", de: "Ilet à Cordes – in den Klippen schwebendes Dorf" }, wikipedia: "File:Ilet à Cordes - Cilaos.jpg" },
        { name: { fr: "Ilet La Nouvelle — cœur de Mafate avec gîtes", en: "Ilet La Nouvelle — the heart of Mafate with guesthouses", es: "Ilet La Nouvelle — corazón de Mafate con alojamientos rurales", de: "Ilet La Nouvelle – Herz von Mafate mit Ferienhäusern" }, wikipedia: "File:Rivière des Galets @ Nouvelle Mafate.jpg" },
        { name: { fr: "Sentier du Grand Bénard (2 898m) — panorama sur les 3 cirques", en: "Grand Bénard trail (2,898m) — panorama over the 3 cirques", es: "Sendero del Grand Bénard (2.898 m) — panorámica de los 3 circos", de: "Grand Bénard Trail (2.898 m) – Panorama der 3 Talkessel" }, wikipedia: "Piton_des_Neiges" },
        { name: { fr: "Bivouac en gîte de montagne Mafate", en: "Overnight stay in a Mafate mountain lodge", es: "Vivac en un refugio de montaña de Mafate", de: "Biwak in der Berghütte Mafate" }, wikipedia: "Mafate" },
      ],
    },
    {
      id: 3,
      name: { fr: "Cilaos — Cirque des eaux thermales", en: "Cilaos — Cirque of thermal waters", es: "Cilaos — Circo de las aguas termales", de: "Cilaos – Zirkus der Thermalquellen" },
      region: { fr: "Cirque de Cilaos", en: "Cirque de Cilaos", es: "Circo de Cilaos", de: "Cilaos-Zirkus" },
      description: {
        fr: "Cilaos est le cirque le plus accessible (route de montagne spectaculaire) et le plus touristique : ses sources thermales (centre thermal), ses vins de pays (Chai de Cilaos, uniques à cette altitude), la dentelle de Cilaos artisanale, et les randonnées vers le Piton des Neiges (3 071m, point culminant de l'océan Indien). La route des 400 virages pour y accéder est en elle-même un spectacle.", en: "Cilaos is the most accessible (via a spectacular mountain road) and most touristy cirque: its hot springs (thermal centre), local wines (Chai de Cilaos, unique at this altitude), handmade Cilaos lace, and hikes to Piton des Neiges (3,071m, the highest point in the Indian Ocean). The road of 400 hairpin bends to get there is a spectacle in itself.", es: "Cilaos es el circo más accesible (carretera de montaña espectacular) y el más turístico: sus fuentes termales (centro termal), sus vinos locales (Chai de Cilaos, únicos a esta altitud), el encaje artesanal de Cilaos, y las rutas hacia el Piton des Neiges (3.071 m, punto más alto del océano Índico). La carretera de las 400 curvas para llegar es en sí misma un espectáculo.", de: "Cilaos ist der am besten zugängliche Talkessel (spektakuläre Bergstraße) und der touristischste: seine Thermalquellen (Thermalzentrum), seine lokalen Weine (Chai de Cilaos, einzigartig in dieser Höhe), die handwerklich hergestellten Cilaos-Spitzen und die Wanderungen zum Piton des Neiges (3.071 m, höchster Punkt im Indischen Ozean). Der Weg dorthin mit seinen 400 Kurven ist an sich schon ein Spektakel.",
      },
      wikipedia: "Cilaos",
      tags: ["Nature", "Randonnée", "Détente", "Gastronomie"],
      mustSee: [
        { name: { fr: "Route des 400 virages — accès spectaculaire à Cilaos", en: "Route of 400 bends — spectacular access to Cilaos", es: "Carretera de las 400 curvas — acceso espectacular a Cilaos", de: "Route mit 400 Kurven – spektakulärer Zugang nach Cilaos" }, wikipedia: "File:La_Réunion_-_Route_nationale_5_-04.JPG" },
        { name: { fr: "Piton des Neiges (3 071m) — toit de l'océan Indien (bivouac)", en: "Piton des Neiges (3,071m) — the roof of the Indian Ocean (overnight hike)", es: "Piton des Neiges (3.071 m) — el techo del océano Índico (vivac)", de: "Piton des Neiges (3.071 m) – Dach des Indischen Ozeans (Biwak)" }, wikipedia: "Piton_des_Neiges" },
        { name: { fr: "Sources thermales de Cilaos — détente après la rando", en: "Cilaos hot springs — relaxation after the hike", es: "Fuentes termales de Cilaos — relax después de la ruta", de: "Cilaos-Thermalquellen – Entspannung nach der Wanderung" }, wikipedia: "File:Thermes_de_Cilaos.jpg" },
        { name: { fr: "Chai de Cilaos — dégustation vin de pays réunionnais", en: "Chai de Cilaos — tasting local Réunion wine", es: "Chai de Cilaos — degustación de vino local reunionés", de: "Chai de Cilaos – lokale Weinprobe auf La Réunion" }, wikipedia: "File:Cilaos_wine.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Saint-Gilles & Lagon", en: "Saint-Gilles & Lagoon", es: "Saint-Gilles y la laguna", de: "Saint-Gilles & Lagune" },
      region: { fr: "Côte Ouest", en: "West Coast", es: "Costa Oeste", de: "Westküste" },
      description: {
        fr: "Saint-Gilles-les-Bains est la capitale balnéaire de La Réunion : le lagon protégé par le récif corallien offre des eaux turquoise idéales pour la baignade et le snorkeling, la plage de l'Ermitage, les sports nautiques, et les restaurants de rougail saucisses et cari de poisson. Le coucher de soleil depuis la côte est exceptionnel.", en: "Saint-Gilles-les-Bains is Réunion's seaside capital: the lagoon protected by the coral reef offers turquoise waters ideal for swimming and snorkelling, Ermitage beach, water sports, and restaurants serving rougail saucisses and fish cari. The sunset from the coast is exceptional.", es: "Saint-Gilles-les-Bains es la capital costera de La Reunión: la laguna protegida por el arrecife de coral ofrece aguas turquesas ideales para el baño y el esnórquel, la playa de l'Ermitage, los deportes acuáticos, y los restaurantes de rougail de salchichas y cari de pescado. La puesta de sol desde la costa es excepcional.", de: "Saint-Gilles-les-Bains ist die Badehauptstadt der Insel La Réunion: Die durch ein Korallenriff geschützte Lagune bietet türkisfarbenes Wasser, ideal zum Schwimmen und Schnorcheln, den Ermitage-Strand, Wassersport und Restaurants mit Rougail-Würstchen und Fisch-Curry. Der Sonnenuntergang von der Küste aus ist außergewöhnlich.",
      },
      wikipedia: "File:Saint-Gilles les Bains depuis le chemin Summer.jpg",
      tags: ["Plage", "Culture"],
      mustSee: [
        { name: { fr: "Lagon de Saint-Gilles — snorkeling avec tortues et poissons multicolores", en: "Saint-Gilles lagoon — snorkelling with turtles and colourful fish", es: "Laguna de Saint-Gilles — esnórquel con tortugas y peces multicolores", de: "Lagune von Saint-Gilles – Schnorcheln mit Schildkröten und bunten Fischen" }, wikipedia: "File:Saint-Gilles-les-Bains 2024 04.jpg" },
        { name: { fr: "Plage de l'Ermitage — la plus belle plage de La Réunion", en: "Ermitage beach — Réunion's most beautiful beach", es: "Playa de l'Ermitage — la playa más bonita de La Reunión", de: "Plage de l’Ermitage – der schönste Strand auf Réunion" }, wikipedia: "File:L'Ermitage beach, Réunion.jpg" },
        { name: { fr: "Réserve marine — plongée avec requins citron", en: "Marine reserve — diving with lemon sharks", es: "Reserva marina — buceo con tiburones limón", de: "Meeresschutzgebiet – Tauchen mit Zitronenhaien" }, wikipedia: "File:Lemon shark2.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Réunion est un département français — les prix sont comparables à ceux de la métropole, voire légèrement supérieurs pour l'alimentaire (coût du transport). Les hébergements sont variés : gîtes de montagne très abordables, hôtels de plage plus chers. Pas de problème de change (euro).", en: "Réunion is a French overseas department — prices are comparable to mainland France, and even slightly higher for groceries (transport costs). Accommodation varies widely: mountain lodges are very affordable, beach hotels pricier. No currency exchange needed (euro).", es: "La Reunión es un departamento francés de ultramar: los precios son comparables a los de la Francia continental, e incluso ligeramente superiores en alimentación (coste del transporte). El alojamiento es muy variado: los refugios de montaña son muy asequibles, los hoteles de playa más caros. Sin problema de cambio de divisa (euro).", de: "Réunion ist ein französisches Departement – die Preise für Lebensmittel sind mit denen auf dem französischen Festland vergleichbar oder sogar etwas höher (Transportkosten). Die Unterkünfte sind vielfältig: sehr erschwingliche Berghütten, teurere Strandhotels. Kein Umtauschproblem (Euro).",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€ (territoire français)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Gîte de montagne / gîte rural", en: "Mountain lodge / rural gîte", es: "Refugio de montaña / gîte rural", de: "Berghütte / ländliche Hütte" }, price: "25–60 €", detail: { fr: "Table d'hôte possible, petit-déj", en: "Table d'hôte possible, breakfast", es: "Posible tabla de huéspedes, desayuno", de: "Table d'hôte möglich, Frühstück" } },
          { label: { fr: "Chambre d'hôte / B&B", en: "Guesthouse / B&B", es: "Casa de huéspedes / B&B", de: "Gästezimmer / B&B" }, price: "60–100 €", detail: { fr: "Souvent avec petit-déj créole", en: "Often with Creole breakfast", es: "A menudo con desayuno criollo", de: "Oft mit kreolischem Frühstück" } },
          { label: { fr: "Hôtel 3★ Saint-Gilles (lagon)", en: "3★ hotel in Saint-Gilles (lagoon)", es: "Hotel 3★ en Saint-Gilles (laguna)", de: "Hotel 3★ Saint-Gilles (Lagune)" }, price: "120–200 €", detail: { fr: "Vue mer, piscine, accès plage", en: "Sea view, pool, beach access", es: "Vista al mar, piscina, acceso a la playa", de: "Meerblick, Swimmingpool, Zugang zum Strand" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Cari de poulet ou rougail saucisses (restaurant local)", en: "Chicken cari or rougail saucisses (local restaurant)", es: "Cari de pollo o rougail de salchichas (restaurante local)", de: "Hühnchen-Curry oder Rougail-Würstchen (örtliches Restaurant)" }, price: "8–15 €", detail: { fr: "Cuisine créole authentique", en: "Authentic Creole cuisine", es: "Cocina criolla auténtica", de: "Authentische kreolische Küche" } },
          { label: { fr: "Restaurant mid-range Saint-Denis ou Saint-Gilles", en: "Mid-range restaurant in Saint-Denis or Saint-Gilles", es: "Restaurante de gama media en Saint-Denis o Saint-Gilles", de: "Mittelklasserestaurant Saint-Denis oder Saint-Gilles" }, price: "15–30 €", detail: { fr: "Menu complet + dessert vanille", en: "Full set menu + vanilla dessert", es: "Menú completo + postre de vainilla", de: "Komplettes Menü + Vanilledessert" } },
          { label: { fr: "Supermarché (Carrefour, Super-U)", en: "Supermarket (Carrefour, Super-U)", es: "Supermercado (Carrefour, Super-U)", de: "Supermarkt (Carrefour, Super-U)" }, price: "Same as France", detail: { fr: "Légèrement plus cher qu'en métropole", en: "Slightly pricier than mainland France", es: "Ligeramente más caro que en la Francia continental", de: "Etwas teurer als auf dem französischen Festland" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Car Jaune (bus régional)", en: "Car Jaune (regional bus)", es: "Car Jaune (autobús regional)", de: "Car Jaune (Regionalbus)" }, price: "2–5 €", detail: { fr: "Réseau correct sur la côte", en: "Decent network along the coast", es: "Red correcta a lo largo de la costa", de: "Gutes Netz entlang der Küste" } },
          { label: { fr: "Location de voiture", en: "Car rental", es: "Alquiler de coche", de: "Autovermietung" }, price: "40–70 €/j", detail: { fr: "Indispensable pour les cirques", en: "Essential for the cirques", es: "Indispensable para los circos", de: "Unverzichtbar für Zirkusse" } },
          { label: { fr: "Hélicoptère (tour de l'île, 30 min)", en: "Helicopter (island tour, 30 min)", es: "Helicóptero (vuelta a la isla, 30 min)", de: "Helikopter (Inseltour, 30 Min.)" }, price: "80–150 €", detail: { fr: "Spectaculaire, prix baisse hors saison", en: "Spectacular, cheaper off-season", es: "Espectacular, precio más bajo fuera de temporada", de: "Spektakulär, die Preise fallen außerhalb der Saison" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Randonnée GRR1 / GRR2 (avec guide, journée)", en: "GRR1 / GRR2 hike (with guide, day trip)", es: "Ruta GRR1 / GRR2 (con guía, día)", de: "GRR1 / GRR2 Wanderung (mit Führer, Tag)" }, price: "40–80 €", detail: { fr: "Mafate ou Cilaos", en: "Mafate or Cilaos", es: "Mafate o Cilaos", de: "Mafate oder Cilaos" } },
          { label: { fr: "Plongée sous-marine Saint-Gilles (2 plongées)", en: "Scuba diving in Saint-Gilles (2 dives)", es: "Buceo en Saint-Gilles (2 inmersiones)", de: "Tauchen Saint-Gilles (2 Tauchgänge)" }, price: "70–110 €", detail: { fr: "Requin citron, coraux", en: "Lemon shark, corals", es: "Tiburón limón, corales", de: "Zitronenhai, Korallen" } },
          { label: { fr: "Canyoning (Fleur Jaune, Grand Galet)", en: "Canyoning (Fleur Jaune, Grand Galet)", es: "Barranquismo (Fleur Jaune, Grand Galet)", de: "Canyoning (Gelbe Blume, großer Kieselstein)" }, price: "50–90 €", detail: { fr: "Encadrés, sensation garantie", en: "Guided, thrills guaranteed", es: "Con monitor, sensaciones garantizadas", de: "Gerahmt, Sensation garantiert" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "80–120 €/j", desc: { fr: "Gîte + cuisine créole + transports communs", en: "Gîte + Creole food + public transport", es: "Gîte + cocina criolla + transporte público", de: "Gîte + kreolische Küche + öffentliche Verkehrsmittel" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "160–250 €/j", desc: { fr: "Chambre d'hôte + restaurants + location voiture + activités", en: "Guesthouse + restaurants + car rental + activities", es: "Casa de huéspedes + restaurantes + alquiler de coche + actividades", de: "B&B + Restaurants + Autovermietung + Aktivitäten" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "350 €+/j", desc: { fr: "Hôtel 4★ lagon + excursions privées + héliport", en: "4★ lagoon hotel + private excursions + helicopter", es: "Hotel 4★ en la laguna + excursiones privadas + helicóptero", de: "4★ Lagunenhotel + private Ausflüge + Hubschrauberlandeplatz" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "12 jours", en: "12 days", es: "12 días", de: "12 Tage" },
      route: {
        fr: "Saint-Gilles / lagon (3j) → Cilaos (3j) → Mafate / GRR (3j) → Piton de la Fournaise (3j)", en: "Saint-Gilles / lagoon (3d) → Cilaos (3d) → Mafate / GRR (3d) → Piton de la Fournaise (3d)", es: "Saint-Gilles / laguna (3d) → Cilaos (3d) → Mafate / GRR (3d) → Piton de la Fournaise (3d)", de: "Saint-Gilles / Lagune (3 Tage) → Cilaos (3 Tage) → Mafate / GRR (3 Tage) → Piton de la Fournaise (3 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 800 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–La Réunion (Corsair, Air Austral, Air France)", en: "Return flight Paris–Réunion (Corsair, Air Austral, Air France)", es: "Vuelo ida y vuelta Madrid–La Reunión (Corsair, Air Austral, Air France)", de: "Hin- und Rückflug Paris–Réunion (Corsair, Air Austral, Air France)" }, amount: "500–900 €" },
            { label: { fr: "Gîtes et chambres d'hôte (12 nuits)", en: "Gîtes and guesthouses (12 nights)", es: "Gîtes y casas de huéspedes (12 noches)", de: "Ferienhäuser und Gästezimmer (12 Nächte)" }, amount: "500–800 €" },
            { label: { fr: "Location voiture", en: "Car rental", es: "Alquiler de coche", de: "Autovermietung" }, amount: "300–500 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "300–500 €" },
            { label: { fr: "Activités & randonnées", en: "Activities & hikes", es: "Actividades y rutas", de: "Aktivitäten & Wanderungen" }, amount: "200–350 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "3 500 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–La Réunion", en: "Return flight Paris–Réunion", es: "Vuelo ida y vuelta Madrid–La Reunión", de: "Hin- und Rückflug Paris–Réunion" }, amount: "600–1 100 €" },
            { label: { fr: "Hébergement 3★ et chambre d'hôte (12 nuits)", en: "3★ accommodation and guesthouses (12 nights)", es: "Alojamiento 3★ y casas de huéspedes (12 noches)", de: "3★ Unterkunft und Gästezimmer (12 Nächte)" }, amount: "1 200–2 000 €" },
            { label: { fr: "Location voiture", en: "Car rental", es: "Alquiler de coche", de: "Autovermietung" }, amount: "400–600 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "500–800 €" },
            { label: { fr: "Activités (plongée, canyoning, hélico)", en: "Activities (diving, canyoning, helicopter)", es: "Actividades (buceo, barranquismo, helicóptero)", de: "Aktivitäten (Tauchen, Canyoning, Helikopter)" }, amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~11h direct (Air Austral, Corsair, Air France) — liaisons quotidiennes depuis CDG et Orly", en: "~11h direct (Air Austral, Corsair, Air France) — daily flights from CDG and Orly", es: "~13h con escala — vuelos frecuentes vía París", de: "ca. 11 Stunden direkt (Air Austral, Corsair, Air France) – tägliche Verbindungen von CDG und Orly" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Aucun visa — territoire français. Carte nationale d'identité suffisante pour les ressortissants français.", en: "No visa required — French territory. A national ID card is sufficient for French citizens.", es: "Sin visado — territorio francés. DNI o pasaporte de la UE suficiente.", de: "Kein Visum – französisches Territorium. Für französische Staatsangehörige reicht ein nationaler Personalausweis aus." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Euro (€) — aucun change nécessaire. Carte bancaire acceptée partout.", en: "Euro (€) — no currency exchange needed. Bank cards accepted everywhere.", es: "Euro (€) — sin necesidad de cambio de divisa. Tarjeta bancaria aceptada en todas partes.", de: "Euro (€) – kein Umtausch erforderlich. Kreditkarten werden überall akzeptiert." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Français (officiel). Créole réunionnais entre habitants — compréhensible pour un francophone.", en: "French (official). Réunion Creole among locals — understandable for a French speaker.", es: "Francés (oficial). Criollo reunionés entre los habitantes — comprensible para un francófono.", de: "Französisch (offiziell). Reunion Creole unter den Bewohnern – verständlich für einen Französischsprachigen." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type E/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type E/F (European) — 230V. No adapter needed.", es: "Tipo E/F (europeo) — 230V. No se necesita adaptador.", de: "Typ E/F (europäisch) – 230 V. Kein Adapter erforderlich." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Pas de vaccin obligatoire. Pas de paludisme. Risque dengue en saison des pluies. Crème solaire indispensable.", en: "No mandatory vaccines. No malaria. Dengue risk during the rainy season. Sunscreen essential.", es: "Ninguna vacuna obligatoria. Sin malaria. Riesgo de dengue en temporada de lluvias. Protector solar indispensable.", de: "Keine Impfpflicht. Keine Malaria. Dengue-Risiko in der Regenzeit. Sonnenschutz unerlässlich." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Potable partout — eau de qualité métropolitaine.", en: "Drinkable everywhere — mainland-quality water.", es: "Potable en todas partes — agua de calidad equivalente a la de la Francia continental.", de: "Überall trinkbar – Wasser in Großstadtqualität." } },
    { icon: "🌀", label: { fr: "Cyclones", en: "Cyclones", es: "Ciclones", de: "Zyklone" }, value: { fr: "Risque cyclonique de novembre à avril. Consulter Météo-France Réunion en cas d'alerte.", en: "Cyclone risk from November to April. Check Météo-France Réunion in case of alert.", es: "Riesgo de ciclones de noviembre a abril. Consultar Météo-France Réunion en caso de alerta.", de: "Zyklongefahr von November bis April. Wenden Sie sich im Alarmfall an Météo-France Réunion." } },
  ],
};
