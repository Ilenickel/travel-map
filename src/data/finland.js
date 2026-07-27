export const FINLAND = {
  code: "FIN",
  numericId: 246,
  name: { fr: "Finlande", en: "Finland", es: "Finlandia", de: "Finnland" },
  emoji: "🇫🇮",
  capital: { fr: "Helsinki", en: "Helsinki", es: "Helsinki", de: "Helsinki" },
  language: { fr: "Finnois, Suédois", en: "Finnish, Swedish", es: "Finés, sueco", de: "Finnisch, Schwedisch" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)", es: "Euro (EUR)", de: "Euro (EUR)" },
  timezone: "UTC+2 (été UTC+3)",
  filter: {
    budgetMin: 100, budgetMid: 180,
    tripMin: 1500, tripMid: 3000,
  },
  criteria: {
    unesco: 2,
    nature: 2,
    randonnee: 2,
    gastronomie: 1,
    architecture: 1,
    desert: 0,
    safari: 0,
    ski: 2,
    ville: 2,
    plage: 1,
  },
  description: {
    fr: "La Finlande est le 'pays de mille lacs' (il y en a 188 000) et de la forêt profonde. Helsinki, la capitale la plus au nord de l'UE, est une ville design et multiculturelle. En Laponie, Rovaniemi (ville officielle du Père Noël) et Saariselkä offrent les meilleures aurores boréales et safaris en motoneige d'Europe. Le sauna y est une institution culturelle fondamentale.", en: "Finland is the 'land of a thousand lakes' (there are actually 188,000 of them) and deep forests. Helsinki, the northernmost capital in the EU, is a design-driven, multicultural city. In Lapland, Rovaniemi (the official hometown of Santa Claus) and Saariselkä offer Europe's best northern lights and snowmobile safaris. Sauna is a fundamental part of the country's culture.", es: "Finlandia es el «país de los mil lagos» (en realidad hay 188.000) y de los bosques profundos. Helsinki, la capital más septentrional de la UE, es una ciudad de diseño y multicultural. En Laponia, Rovaniemi (residencia oficial de Papá Noel) y Saariselkä ofrecen las mejores auroras boreales y safaris en moto de nieve de Europa. La sauna es allí una institución cultural fundamental.", de: "Finnland ist das „Land der tausend Seen“ (es gibt 188.000) und der tiefen Wälder. Helsinki, die nördlichste Hauptstadt der EU, ist eine Designer- und multikulturelle Stadt. In Lappland bieten Rovaniemi (offizielle Stadt des Weihnachtsmanns) und Saariselkä die besten Nordlicht- und Schneemobilsafaris in Europa. Die Sauna ist dort eine grundlegende kulturelle Institution.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Août", en: "June – August", es: "Junio – Agosto", de: "Juni – August" },
      label: { fr: "Été blanc", en: "White Summer", es: "Verano blanco", de: "Weißer Sommer" },
      color: "#22c55e",
      description: {
        fr: "Courte mais belle saison : soleil jusqu'à 23h, lacs bleus, festivals (Flow Festival à Helsinki), randonnées en Laponie sans moustiques. Températures 20–26°C à Helsinki.", en: "A short but beautiful season: sunlight until 11 pm, blue lakes, festivals (including Flow Festival in Helsinki), and hikes in Lapland without mosquitoes. Temperatures reach 20–26°C in Helsinki.", es: "Temporada corta pero hermosa: sol hasta las 23h, lagos azules, festivales (Flow Festival en Helsinki), senderismo en Laponia sin mosquitos. Temperaturas de 20–26°C en Helsinki.", de: "Eine kurze, aber schöne Saison: Sonne bis 23 Uhr, blaue Seen, Festivals wie das Flow Festival in Helsinki und Wanderungen im mückenarmen Lappland. In Helsinki liegen die Temperaturen bei 20–26 °C.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Mars", en: "December – March", es: "Diciembre – Marzo", de: "Dezember – März" },
      label: { fr: "Hiver de Laponie", en: "Lapland Winter", es: "Invierno de Laponia", de: "Lappland-Winter" },
      color: "#3b82f6",
      description: {
        fr: "Rovaniemi et le Père Noël, aurores boréales magnifiques, safaris en motoneige et traîneaux à rennes. Expérience hivernale unique en Europe.", en: "Rovaniemi and Santa Claus, magnificent northern lights, snowmobile safaris and reindeer sleigh rides. A winter experience unlike anywhere else in Europe.", es: "Rovaniemi y Papá Noel, magníficas auroras boreales, safaris en moto de nieve y trineos tirados por renos. Una experiencia invernal única en Europa.", de: "Rovaniemi und der Weihnachtsmann, prächtige Nordlichter, Schneemobilsafaris und Rentierschlittenfahrten. Einzigartiges Wintererlebnis in Europa.",
      },
      icon: "🌌",
    },
  ],

  weatherCities: [
    {
      id: "helsinki",
      name: "Helsinki",
      region: { fr: "Côte sud (Golfe de Finlande)", en: "South coast (Gulf of Finland)", es: "Costa sur (golfo de Finlandia)", de: "Südküste (Finnischer Meerbusen)" },
      data: [
        { month: "Jan", temp: -4, rain: 45,  icon: "❄️" },
        { month: "Fév", temp: -5, rain: 35,  icon: "❄️" },
        { month: "Mar", temp: -1, rain: 35,  icon: "❄️" },
        { month: "Avr", temp:  5, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 12, rain: 40,  icon: "⛅" },
        { month: "Jun", temp: 17, rain: 55,  icon: "☀️" },
        { month: "Jul", temp: 21, rain: 65,  icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 70,  icon: "☀️" },
        { month: "Sep", temp: 14, rain: 65,  icon: "⛅" },
        { month: "Oct", temp:  8, rain: 70,  icon: "⛅" },
        { month: "Nov", temp:  3, rain: 60,  icon: "⛅" },
        { month: "Déc", temp: -2, rain: 50,  icon: "❄️" },
      ],
    },
    {
      id: "rovaniemi",
      name: "Rovaniemi (Laponie)",
      region: { fr: "Cercle polaire arctique", en: "Arctic Circle", es: "Círculo polar ártico", de: "Polarkreis" },
      data: [
        { month: "Jan", temp: -14, rain: 30, icon: "❄️" },
        { month: "Fév", temp: -14, rain: 25, icon: "❄️" },
        { month: "Mar", temp:  -8, rain: 25, icon: "❄️" },
        { month: "Avr", temp:  -1, rain: 25, icon: "❄️" },
        { month: "Mai", temp:   7, rain: 35, icon: "⛅" },
        { month: "Jun", temp:  13, rain: 65, icon: "⛅" },
        { month: "Jul", temp:  17, rain: 75, icon: "☀️" },
        { month: "Aoû", temp:  14, rain: 70, icon: "⛅" },
        { month: "Sep", temp:   8, rain: 50, icon: "⛅" },
        { month: "Oct", temp:   1, rain: 45, icon: "⛅" },
        { month: "Nov", temp:  -6, rain: 35, icon: "❄️" },
        { month: "Déc", temp: -12, rain: 35, icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Helsinki — Design nordique et îles", en: "Helsinki — Nordic design and islands", es: "Helsinki — Diseño nórdico e islas", de: "Helsinki – Nordisches Design und Inseln" },
      region: { fr: "Capitale (sud)", en: "Capital (south)", es: "Capital (sur)", de: "Hauptstadt (Süden)" },
      description: {
        fr: "Helsinki est une capitale compacte et élégante sur la mer Baltique : le quartier de Kallio avec ses bars et galeries branchées, le Design District, la cathédrale luthérienne blanche (place du Sénat), le marché couvert de Vanha Kauppahalli, et les îles accessibles en ferry (Suomenlinna, forteresse UNESCO). Une ville qui respire.", en: "Helsinki is a compact, elegant capital on the Baltic Sea: Kallio with its trendy bars and galleries, the Design District, the white Lutheran cathedral on Senate Square, Vanha Kauppahalli market hall, and islands reached by ferry such as Suomenlinna, a UNESCO fortress. A city with room to breathe.", es: "Helsinki es una capital compacta y elegante en el mar Báltico: el barrio de Kallio con sus bares y galerías de moda, el Design District, la catedral luterana blanca (plaza del Senado), el mercado cubierto de Vanha Kauppahalli, y las islas accesibles en ferry (Suomenlinna, fortaleza UNESCO). Una ciudad que respira.", de: "Helsinki ist eine kompakte und elegante Hauptstadt an der Ostsee: das Viertel Kallio mit seinen trendigen Bars und Galerien, das Designviertel, die weiße lutherische Kathedrale (Senatsplatz), die Markthalle Vanha Kauppahalli und die mit der Fähre erreichbaren Inseln (Suomenlinna, UNESCO-Festung). Eine Stadt, die atmet.",
      },
      wikipedia: "Helsinki",
      tags: ["Architecture", "Plage", "Gastronomie", "Ville"],
      mustSee: [
        { name: { fr: "Suomenlinna — forteresse maritime UNESCO sur une île", en: "Suomenlinna — UNESCO sea fortress on an island", es: "Suomenlinna — fortaleza marítima UNESCO en una isla", de: "Suomenlinna – UNESCO-Seefestung auf einer Insel" }, wikipedia: "Suomenlinna" },
        { name: { fr: "Sauna Löyly — sauna public avec plongée dans la mer Baltique", en: "Löyly Sauna — public sauna with a dip in the Baltic Sea", es: "Sauna Löyly — sauna pública con baño en el mar Báltico", de: "Sauna Löyly – öffentliche Sauna mit Sprung in die Ostsee" }, wikipedia: "Helsinki" },
        { name: { fr: "Musée de Design d'Helsinki — design finnois (Marimekko, Iittala)", en: "Helsinki Design Museum — Finnish design (Marimekko, Iittala)", es: "Museo de Diseño de Helsinki — diseño finlandés (Marimekko, Iittala)", de: "Helsinki Design Museum – Finnisches Design (Marimekko, Iittala)" }, wikipedia: "File:Designmuseo 2019.jpg" },
        { name: { fr: "Marché de Kauppatori et port — herring fumé et baies fraîches", en: "Kauppatori market and harbour — smoked herring and fresh berries", es: "Mercado de Kauppatori y puerto — arenque ahumado y bayas frescas", de: "Kauppatori-Markt und Hafen – geräucherter Hering und frische Beeren" }, wikipedia: "File:Market Square in Helsinki, Finland, 2024 May.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Rovaniemi — Village du Père Noël", en: "Rovaniemi — Santa Claus Village", es: "Rovaniemi — Pueblo de Papá Noel", de: "Rovaniemi – Weihnachtsmanndorf" },
      region: { fr: "Laponie finlandaise", en: "Finnish Lapland", es: "Laponia finlandesa", de: "Finnisches Lappland" },
      description: {
        fr: "Rovaniemi est officiellement le domicile du Père Noël selon les Nations Unies — Santa Claus Village se trouve exactement sur le cercle polaire arctique. Mais au-delà du mythe, c'est la capitale de la Laponie : base pour les aurores boréales, safaris en motoneige, raquettes à neige dans la forêt de pins, et expéditions dans les parcs nationaux voisins.", en: "Rovaniemi is officially Santa Claus's home according to the United Nations — Santa Claus Village lies exactly on the Arctic Circle. But beyond the myth, it is the capital of Lapland: a base for northern lights viewing, snowmobile safaris, snowshoeing in pine forests, and expeditions into nearby national parks.", es: "Rovaniemi es oficialmente el hogar de Papá Noel según las Naciones Unidas — Santa Claus Village se encuentra exactamente sobre el círculo polar ártico. Pero más allá del mito, es la capital de Laponia: base para observar auroras boreales, safaris en moto de nieve, raquetas de nieve en el bosque de pinos y expediciones a los parques nacionales cercanos.", de: "Nach Angaben der Vereinten Nationen ist Rovaniemi offiziell die Heimat des Weihnachtsmanns – das Weihnachtsmanndorf liegt genau am Polarkreis. Aber jenseits des Mythos ist es die Hauptstadt Lapplands: Ausgangspunkt für Nordlichter, Schneemobilsafaris, Schneeschuhwanderungen im Kiefernwald und Expeditionen in benachbarte Nationalparks.",
      },
      wikipedia: "File:Santa Land Rovaniemi Arctic Circle2.jpg",
      tags: ["Famille", "Nature", "Ski"],
      mustSee: [
        { name: { fr: "Santa Claus Village — sur le cercle polaire exactement", en: "Santa Claus Village — right on the Arctic Circle", es: "Santa Claus Village — exactamente sobre el círculo polar", de: "Weihnachtsmanndorf – genau am Polarkreis" }, wikipedia: "Santa_Claus_Village" },
        { name: { fr: "Safari en motoneige dans la forêt de Laponie", en: "Snowmobile safari through the Lapland forest", es: "Safari en moto de nieve por el bosque de Laponia", de: "Schneemobilsafari im Wald Lapplands" }, wikipedia: "File:Santa Land Rovaniemi Arctic Circle2.jpg" },
        { name: { fr: "Aurores boréales depuis la campagne (sept–mars)", en: "Northern lights from the countryside (Sept–Mar)", es: "Auroras boreales desde el campo (sept–mar)", de: "Nordlichter vom Land (September–März)" }, wikipedia: "File:Frederic Edwin Church - Aurora Borealis - Google Art Project.jpg" },
        { name: { fr: "Traîneau à rennes avec éleveur Sami", en: "Reindeer sleigh ride with a Sámi herder", es: "Trineo de renos con un pastor sami", de: "Rentierschlittenfahrt mit samischem Hirten" }, wikipedia: "File:MHB + renne du Père Noel à Rovaniemi en Finlande.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Lacs de Saimaa — Canoë et nature", en: "Lake Saimaa — Canoeing and nature", es: "Lagos de Saimaa — Canoa y naturaleza", de: "Saimaa-Seen – Kanufahren und Natur" },
      region: { fr: "Carélie du Sud", en: "South Karelia", es: "Carelia del Sur", de: "Südkarelien" },
      description: {
        fr: "Le lac Saimaa est le plus grand lac de Finlande et le quatrième d'Europe : son labyrinthe de 14 000 îles est le paradis du canoë et du kayak. La ville de Savonlinna abrite le château médiéval d'Olavinlinna, théâtre du Festival d'Opéra de Savonlinna (juillet) — unique au monde. Le ringed seal de Saimaa (phoque lacustre) est une espèce endémique gravement menacée.", en: "Lake Saimaa is Finland's largest lake and Europe's fourth largest: its maze of 14,000 islands is a paradise for canoeing and kayaking. The town of Savonlinna is home to the medieval Olavinlinna Castle, which hosts the Savonlinna Opera Festival in July — a one-of-a-kind setting. The Saimaa ringed seal, a freshwater seal, is a critically endangered endemic species.", es: "El lago Saimaa es el mayor de Finlandia y el cuarto de Europa: su laberinto de 14.000 islas es el paraíso de la canoa y el kayak. La ciudad de Savonlinna alberga el castillo medieval de Olavinlinna, escenario del Festival de Ópera de Savonlinna (julio) — único en el mundo. La foca anillada de Saimaa es una especie endémica de agua dulce en grave peligro de extinción.", de: "Der Saimaa-See ist der größte See Finnlands und der viertgrößte Europas: Sein Labyrinth aus 14.000 Inseln ist ein Paradies für Kanu- und Kajakfahrer. Die Stadt Savonlinna ist die Heimat der mittelalterlichen Burg Olavinlinna, Schauplatz des weltweit einzigartigen Savonlinna-Opernfestivals (Juli). Die Saimaa-Ringelrobbe ist eine vom Aussterben bedrohte endemische Art.",
      },
      wikipedia: "Saimaa",
      tags: ["Nature", "Aventure", "Culture", "Safari", "Randonnée"],
      mustSee: [
        { name: { fr: "Canoë sur le Saimaa (itinéraire 3–7 jours, île à île)", en: "Canoeing on Lake Saimaa (3–7-day route, island to island)", es: "Canoa en el Saimaa (ruta de 3–7 días, de isla en isla)", de: "Kanufahren auf der Saimaa (3–7-tägige Reiseroute, Insel zu Insel)" }, wikipedia: "Saimaa" },
        { name: { fr: "Château médiéval d'Olavinlinna à Savonlinna", en: "Medieval Olavinlinna Castle in Savonlinna", es: "Castillo medieval de Olavinlinna en Savonlinna", de: "Mittelalterliche Burg Olavinlinna in Savonlinna" }, wikipedia: "Olavinlinna" },
        { name: { fr: "Festival d'Opéra de Savonlinna (juillet, dans la cour du château)", en: "Savonlinna Opera Festival (July, in the castle courtyard)", es: "Festival de Ópera de Savonlinna (julio, en el patio del castillo)", de: "Savonlinna Opera Festival (Juli, im Schlosshof)" }, wikipedia: "Savonlinna_Opera_Festival" },
        { name: { fr: "Phoque lacustre de Saimaa (Pusa hispida saimensis)", en: "Saimaa ringed seal (Pusa hispida saimensis)", es: "Foca anillada de Saimaa (Pusa hispida saimensis)", de: "Saimaa-Seerobbe (Pusa hispida saimensis)" }, wikipedia: "Saimaa_ringed_seal" },
      ],
    },
    {
      id: 4,
      name: { fr: "Archipel de Turku — Mille îles baltiques", en: "Turku Archipelago — A thousand Baltic islands", es: "Archipiélago de Turku — Mil islas bálticas", de: "Turku-Archipel – Tausend baltische Inseln" },
      region: { fr: "Côte sud-ouest", en: "Southwest coast", es: "Costa suroeste", de: "Südwestküste" },
      description: {
        fr: "L'archipel de Turku est l'un des plus grands au monde (20 000 îles et îlots) et la partie habitée la plus au sud de la Finlande. Turku, ancienne capitale du pays, conserve son château médiéval et sa cathédrale du XIIIe siècle. Le ferry saisonnier parcourt l'archipel entre Turku et Åland en passant par des dizaines d'îles habitées.", en: "The Turku Archipelago is one of the largest in the world (20,000 islands and islets) and the southernmost inhabited part of Finland. Turku, the country's former capital, still has its medieval castle and 13th-century cathedral. The seasonal ferry route crosses the archipelago between Turku and Åland, stopping by dozens of inhabited islands.", es: "El archipiélago de Turku es uno de los más grandes del mundo (20.000 islas e islotes) y la parte habitada más meridional de Finlandia. Turku, antigua capital del país, conserva su castillo medieval y su catedral del siglo XIII. El ferry de temporada recorre el archipiélago entre Turku y Åland pasando por decenas de islas habitadas.", de: "Der Turku-Archipel ist einer der größten der Welt (20.000 Inseln und Inselchen) und der südlichste bewohnte Teil Finnlands. In Turku, der ehemaligen Hauptstadt des Landes, sind noch die mittelalterliche Burg und die Kathedrale aus dem 13. Jahrhundert erhalten. Die saisonale Fähre fährt durch die Schären zwischen Turku und Åland und passiert dabei Dutzende bewohnte Inseln.",
      },
      wikipedia: "File:Lempisaari, Naantali, Finland..jpg",
      tags: ["Plage", "Histoire"],
      mustSee: [
        { name: { fr: "Château de Turku (XIIIe s.) — musée historique finnois", en: "Turku Castle (13th c.) — Finnish history museum", es: "Castillo de Turku (s. XIII) — museo histórico finlandés", de: "Burg Turku (13. Jahrhundert) – Finnisches historisches Museum" }, wikipedia: "Turku_Castle" },
        { name: { fr: "Archipel Trail en ferry (Turku → Åland) — paysage unique", en: "Archipelago Trail by ferry (Turku → Åland) — unique scenery", es: "Archipelago Trail en ferry (Turku → Åland) — paisaje único", de: "Schärenwanderweg mit der Fähre (Turku → Åland) – einzigartige Landschaft" }, wikipedia: "File:Oasis of the seas leaving STX shipyard, Turku, Finland - pic2.JPG" },
        { name: { fr: "Visite d'une ferme d'archipel — fromage local et poisson fumé", en: "Visit an archipelago farm — local cheese and smoked fish", es: "Visita a una granja del archipiélago — queso local y pescado ahumado", de: "Besuch einer Schärenfarm – lokaler Käse und geräucherter Fisch" }, wikipedia: "File:Finland 2018-07-07 (44299618252).jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Finlande est chère mais légèrement moins que les autres pays nordiques. L'euro facilite les comparaisons. Le lunch (ravintola lunch) à 10–15€ est une institution qui rend le déjeuner abordable. La chaîne de supermarchés K-Market et Alepa offre des prix raisonnables.", en: "Finland is expensive, though slightly less so than the other Nordic countries. The euro makes comparisons easy. The 10–15€ lunch special (ravintola lunch) is an institution that keeps midday meals affordable. Supermarket chains such as K-Market and Alepa offer reasonable prices.", es: "Finlandia es cara, aunque algo menos que otros países nórdicos. El euro facilita las comparaciones. El «lunch» (ravintola lunch) a 10–15€ es una institución que hace del almuerzo algo asequible. Las cadenas de supermercados K-Market y Alepa ofrecen precios razonables.", de: "Finnland ist teuer, aber etwas günstiger als andere nordische Länder. Der Euro erleichtert Vergleiche. Das Mittagessen (Ravintola Lunch) für 10–15€ ist eine Institution, die das Mittagessen erschwinglich macht. Die Supermarktketten K-Market und Alepa bieten angemessene Preise.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€ (zone euro)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Auberge de jeunesse / hostel Helsinki", en: "Hostel in Helsinki", es: "Albergue juvenil / hostel en Helsinki", de: "Jugendherberge / Hostel Helsinki" }, price: "30–60 €", detail: { fr: "Dortoir ou chambre privée", en: "Dorm bed or private room", es: "Dormitorio o habitación privada", de: "Schlafsaal oder Privatzimmer" } },
          { label: { fr: "Hôtel 3★ Helsinki", en: "3★ hotel in Helsinki", es: "Hotel 3★ en Helsinki", de: "3★ Hotel Helsinki" }, price: "100–180 €", detail: { fr: "Bon confort dans la capitale", en: "Good comfort in the capital", es: "Buen confort en la capital", de: "Guter Komfort in der Hauptstadt" } },
          { label: { fr: "Chalet de Laponie (Rovaniemi, base aurores)", en: "Lapland chalet (Rovaniemi, northern lights base)", es: "Cabaña de Laponia (Rovaniemi, base para auroras)", de: "Lappland Chalet (Rovaniemi, Aurora-Basis)" }, price: "100–250 €", detail: { fr: "Chalet bois avec poêle ou fenêtres boréales", en: "Wooden chalet with a stove or aurora-view windows", es: "Cabaña de madera con estufa o ventanas para auroras", de: "Holzchalet mit Ofen oder Nordfenstern" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Lunch (plat + salade + pain + café) en semaine", en: "Weekday lunch (main + salad + bread + coffee)", es: "Almuerzo entre semana (plato + ensalada + pan + café)", de: "Mittagessen (Gericht + Salat + Brot + Kaffee) während der Woche" }, price: "10–15 €", detail: { fr: "Formule disponible partout en Finlande", en: "Set menu available all over Finland", es: "Menú disponible en toda Finlandia", de: "Die Formel ist überall in Finnland erhältlich" } },
          { label: { fr: "Café + pulla (brioche à la cardamome)", en: "Coffee + pulla (cardamom bun)", es: "Café + pulla (bollo de cardamomo)", de: "Kaffee + Pulla (Kardamom-Brioche)" }, price: "4–7 €", detail: { fr: "Rituel finlandais plusieurs fois par jour", en: "A Finnish ritual several times a day", es: "Ritual finlandés varias veces al día", de: "Mehrmals täglich finnisches Ritual" } },
          { label: { fr: "Supermarché (K-Market, Lidl) — courses journée", en: "Supermarket (K-Market, Lidl) — day's groceries", es: "Supermercado (K-Market, Lidl) — compra del día", de: "Supermarkt (K-Market, Lidl) – Tageseinkäufe" }, price: "10–20 €", detail: { fr: "Large gamme, qualité bonne", en: "Wide selection, good quality", es: "Amplia gama, buena calidad", de: "Große Auswahl, gute Qualität" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Métro + bus Helsinki (journée)", en: "Helsinki metro + bus (day pass)", es: "Metro + autobús de Helsinki (billete de día)", de: "Metro + Bus Helsinki (Tag)" }, price: "9 €", detail: { fr: "Réseau HSL, très ponctuel", en: "HSL network, very punctual", es: "Red HSL, muy puntual", de: "HSL-Netz, sehr pünktlich" } },
          { label: { fr: "Train VR Helsinki–Tampere (2h)", en: "VR train Helsinki–Tampere (2h)", es: "Tren VR Helsinki–Tampere (2h)", de: "VR-Zug Helsinki–Tampere (2 Std.)" }, price: "15–35 €", detail: { fr: "Réservation recommandée", en: "Booking recommended", es: "Se recomienda reservar", de: "Reservierung empfohlen" } },
          { label: { fr: "Vol Helsinki–Rovaniemi (1h)", en: "Helsinki–Rovaniemi flight (1h)", es: "Vuelo Helsinki–Rovaniemi (1h)", de: "Flug Helsinki–Rovaniemi (1 Std.)" }, price: "50–150 €", detail: { fr: "Finnair ou Norwegian — très pratique", en: "Finnair or Norwegian — very convenient", es: "Finnair o Norwegian — muy práctico", de: "Finnair oder Norwegian – sehr praktisch" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Sauna public (Löyly ou Allas Sea Pool) + baignade", en: "Public sauna (Löyly or Allas Sea Pool) + swim", es: "Sauna pública (Löyly o Allas Sea Pool) + baño", de: "Öffentliche Sauna (Löyly oder Allas Sea Pool) + Schwimmen" }, price: "20–35 €", detail: { fr: "Expérience finlandaise fondamentale", en: "A fundamental Finnish experience", es: "Experiencia finlandesa fundamental", de: "Grundlegende finnische Erfahrung" } },
          { label: { fr: "Safari aurores boréales (Rovaniemi, 3h minibus)", en: "Northern lights safari (Rovaniemi, 3h minibus)", es: "Safari de auroras boreales (Rovaniemi, 3h en minibús)", de: "Nordlichtsafari (Rovaniemi, 3 Stunden Minibus)" }, price: "60–100 €", detail: { fr: "Sept–mars, selon conditions", en: "Sept–Mar, depending on conditions", es: "Sept–mar, según condiciones", de: "September–März, je nach Bedingungen" } },
          { label: { fr: "Location canoë lac Saimaa (journée)", en: "Lake Saimaa canoe rental (day)", es: "Alquiler de canoa en el lago Saimaa (día)", de: "Kanuverleih am Saimaa-See (Tag)" }, price: "40–70 €", detail: { fr: "Itinéraire libre entre les îles", en: "Free route between the islands", es: "Ruta libre entre las islas", de: "Freie Route zwischen den Inseln" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "100–160 €/j", desc: { fr: "Auberge + lunch + supermarché + transports publics", en: "Hostel + lunch special + supermarket + public transport", es: "Albergue + almuerzo + supermercado + transporte público", de: "Hostel + Mittagessen + Supermarkt + öffentliche Verkehrsmittel" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "180–300 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions guidées", en: "3★ hotel + restaurants + guided excursions", es: "Hotel 3★ + restaurantes + excursiones guiadas", de: "3★ Hotel + Restaurants + geführte Ausflüge" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: {
        fr: "Helsinki (3j) → Saimaa / Savonlinna (3j) → Rovaniemi Laponie (4j)", en: "Helsinki (3d) → Saimaa / Savonlinna (3d) → Rovaniemi, Lapland (4d)", es: "Helsinki (3d) → Saimaa / Savonlinna (3d) → Rovaniemi, Laponia (4d)", de: "Helsinki (3 Tage) → Saimaa / Savonlinna (3 Tage) → Rovaniemi Lappland (4 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 500 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Helsinki (Finnair, Air France)", en: "Return flight Paris–Helsinki (Finnair, Air France)", es: "Vuelo ida y vuelta Madrid–Helsinki (Finnair, Air France)", de: "Hin- und Rückflug Paris–Helsinki (Finnair, Air France)" }, amount: "100–250 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "400–700 €" },
            { label: { fr: "Transports (trains, vols intérieurs, ferries)", en: "Transport (trains, domestic flights, ferries)", es: "Transporte (trenes, vuelos internos, ferris)", de: "Transport (Züge, Inlandsflüge, Fähren)" }, amount: "300–500 €" },
            { label: { fr: "Nourriture (lunch + supermarché)", en: "Food (lunch specials + supermarket)", es: "Comida (almuerzos + supermercado)", de: "Essen (Mittagessen + Supermarkt)" }, amount: "350–550 €" },
            { label: { fr: "Activités (sauna, aurores, canoë)", en: "Activities (sauna, northern lights, canoeing)", es: "Actividades (sauna, auroras, canoa)", de: "Aktivitäten (Sauna, Polarlicht, Kanufahren)" }, amount: "250–450 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "3 000 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Helsinki", en: "Return flight Paris–Helsinki", es: "Vuelo ida y vuelta Madrid–Helsinki", de: "Hin- und Rückflug Paris–Helsinki" }, amount: "150–400 €" },
            { label: { fr: "Hôtels 3★ (10 nuits)", en: "3★ hotels (10 nights)", es: "Hoteles 3★ (10 noches)", de: "3★ Hotels (10 Nächte)" }, amount: "1 000–1 800 €" },
            { label: { fr: "Vols intérieurs + transports", en: "Domestic flights + transport", es: "Vuelos internos + transporte", de: "Inlandsflüge + Transport" }, amount: "400–700 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "600–900 €" },
            { label: { fr: "Safaris Laponie + activités", en: "Lapland safaris + activities", es: "Safaris de Laponia + actividades", de: "Lappland-Safaris + Aktivitäten" }, amount: "600–1 000 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~2h30 (Finnair direct CDG–Helsinki). Aussi SAS via Stockholm. Nombreuses liaisons quotidiennes.", en: "~2h30 (Finnair direct CDG–Helsinki). SAS also flies via Stockholm. Many daily connections.", es: "~2h30 (Finnair directo). También SAS vía Estocolmo. Numerosas conexiones diarias.", de: "ca. 2 Std. 30 Min. (Finnair direkt CDG–Helsinki). Auch SAS über Stockholm. Zahlreiche tägliche Verbindungen." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Aucun visa — espace Schengen. Carte d'identité française suffisante.", en: "No visa required — Schengen Area. A French national ID card is sufficient.", es: "Sin visado — espacio Schengen. DNI válido para ciudadanos de la UE.", de: "Kein Visum – Schengen-Raum. Ausreichender französischer Personalausweis." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Euro (€). Carte bancaire acceptée partout — contactless universel. Espèces presque inutiles.", en: "Euro (€). Cards are accepted everywhere — contactless is universal. Cash is almost unnecessary.", es: "Euro (€). Tarjeta bancaria aceptada en todas partes — contactless universal. El efectivo apenas se usa.", de: "Euro (€). Kreditkarten werden überall akzeptiert – universell kontaktlos. Fast nutzlose Art." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Finnois (langue très différente des autres langues européennes). Anglais parfaitement parlé partout. Suédois également officiel.", en: "Finnish (a language very different from other European languages). English is widely spoken everywhere. Swedish is also an official language.", es: "Finés (lengua muy distinta al resto de idiomas europeos). Inglés perfectamente hablado en todas partes. El sueco también es oficial.", de: "Finnisch (eine Sprache, die sich stark von anderen europäischen Sprachen unterscheidet). Überall wird perfektes Englisch gesprochen. Schwedisch auch offiziell." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/F (European) — 230V. No adapter needed.", es: "Tipo C/F (europeo) — 230V. No se necesita adaptador.", de: "Typ C/F (europäisch) – 230 V. Kein Adapter erforderlich." } },
  ],
};
