export const MALTA = {
  code: "MLT",
  numericId: 470,
  name: { fr: "Malte", en: "Malta", es: "Malta", de: "Malta" },
  emoji: "🇲🇹",
  capital: { fr: "La Valette", en: "Valletta", es: "La Valeta", de: "Valletta" },
  language: { fr: "Maltais, Anglais", en: "Maltese, English", es: "Maltés, Inglés", de: "Maltesisch, Englisch" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)", es: "Euro (EUR)", de: "Euro (EUR)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 60, budgetMid: 110,
    tripMin: 800, tripMid: 1600,
  },
  criteria: {
    unesco: 3,
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
    fr: "Malte est un archipel méditerranéen de trois îles habitées (Malte, Gozo et Comino) dont l'histoire s'étend sur 7 000 ans. La Valette, plus petite capitale de l'UE et classée UNESCO, regorge d'églises baroques et de palais des Chevaliers de Saint-Jean. Les temples mégalithiques de Malte sont les plus anciennes structures autoportantes du monde, antérieures de 1 000 ans aux pyramides d'Égypte.", en: "Malta is a Mediterranean archipelago of three inhabited islands (Malta, Gozo and Comino) whose history spans 7,000 years. Valletta, the EU's smallest capital and a UNESCO World Heritage Site, is packed with baroque churches and palaces of the Knights of St John. Malta's megalithic temples are the oldest free-standing structures in the world, predating the pyramids of Egypt by 1,000 years.", es: "Malta es un archipiélago mediterráneo de tres islas habitadas (Malta, Gozo y Comino) cuya historia abarca 7.000 años. La Valeta, la capital más pequeña de la UE y Patrimonio de la Humanidad de la UNESCO, está repleta de iglesias barrocas y palacios de los Caballeros de San Juan. Los templos megalíticos de Malta son las estructuras autoportantes más antiguas del mundo, anteriores en 1.000 años a las pirámides de Egipto.", de: "Malta ist ein Mittelmeerarchipel aus drei bewohnten Inseln (Malta, Gozo und Comino) mit einer 7.000-jährigen Geschichte. Valletta, die kleinste Hauptstadt der EU und UNESCO-Weltkulturerbe, ist voller barocker Kirchen und Paläste der Johanniter. Maltas Megalithtempel sind die ältesten freistehenden Bauwerke der Welt und 1.000 Jahre älter als die Pyramiden Ägyptens.",
  },

  bestPeriods: [
    {
      months: { fr: "Avril – Juin", en: "April – June", es: "Abril – Junio", de: "April – Juni" },
      label: { fr: "Printemps méditerranéen", en: "Mediterranean spring", es: "Primavera mediterránea", de: "Mediterraner Frühling" },
      color: "#22c55e",
      description: {
        fr: "Période idéale avec des températures douces (18–25°C), la mer encore fraîche mais la végétation en fleurs. Peu de touristes, prix plus bas et pas de la chaleur étouffante de l'été.", en: "An ideal period with mild temperatures (18–25°C), the sea still cool but the vegetation in bloom. Few tourists, lower prices and none of summer's stifling heat.", es: "Período ideal con temperaturas suaves (18–25°C), el mar aún fresco pero la vegetación en flor. Pocos turistas, precios más bajos y sin el calor sofocante del verano.", de: "Ideale Zeit mit milden Temperaturen (18–25 °C), das Meer ist noch kühl, aber die Vegetation blüht. Wenig Touristen, niedrigere Preise und keine drückende Sommerhitze.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Septembre – Octobre", en: "September – October", es: "Septiembre – Octubre", de: "September – Oktober" },
      label: { fr: "Arrière-saison", en: "Late season", es: "Temporada baja", de: "Späte Saison" },
      color: "#f59e0b",
      description: {
        fr: "La mer reste chaude (25°C) après l'été et les températures sont idéales (22–28°C). Les foules estivales ont disparu tout en conservant une météo excellente pour la baignade et les visites culturelles.", en: "The sea stays warm (25°C) after summer and temperatures are ideal (22–28°C). The summer crowds are gone while the weather remains excellent for swimming and sightseeing.", es: "El mar permanece cálido (25°C) tras el verano y las temperaturas son ideales (22–28°C). Las multitudes estivales han desaparecido mientras el clima sigue siendo excelente para bañarse y para las visitas culturales.", de: "Das Meer bleibt nach dem Sommer warm (25 °C) und die Temperaturen sind ideal (22–28 °C). Die Menschenmassen im Sommer sind verschwunden, während das Wetter weiterhin hervorragend zum Schwimmen und für kulturelle Besuche geeignet ist.",
      },
      icon: "🌊",
    },
  ],
  weatherCities: [
    {
      id: "valletta",
      name: { fr: "La Valette", en: "Valletta", es: "La Valeta", de: "Valletta" },
      region: { fr: "Malte centrale", en: "Central Malta", es: "Malta central", de: "Zentralmalta" },
      data: [
        { month: "Jan", temp: 14, rain: 85, icon: "⛅" },
        { month: "Fév", temp: 14, rain: 75, icon: "⛅" },
        { month: "Mar", temp: 16, rain: 50, icon: "☀️" },
        { month: "Avr", temp: 18, rain: 30, icon: "☀️" },
        { month: "Mai", temp: 22, rain: 15, icon: "☀️" },
        { month: "Jun", temp: 26, rain: 5, icon: "☀️" },
        { month: "Jul", temp: 29, rain: 5, icon: "⛅" },
        { month: "Aoû", temp: 30, rain: 5, icon: "⛅" },
        { month: "Sep", temp: 27, rain: 30, icon: "⛅" },
        { month: "Oct", temp: 23, rain: 60, icon: "☀️" },
        { month: "Nov", temp: 19, rain: 80, icon: "☀️" },
        { month: "Déc", temp: 15, rain: 90, icon: "⛅" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: { fr: "La Valette", en: "Valletta", es: "La Valeta", de: "Valletta" },
      region: { fr: "Malte", en: "Malta", es: "Malta", de: "Malta" },
      description: {
        fr: "La Valette est la plus petite capitale de l'Union européenne et l'une des villes les plus fortifiées d'Europe, classée au patrimoine mondial de l'UNESCO. Construite par les Chevaliers de l'Ordre de Saint-Jean au XVIe siècle, elle abrite une concentration exceptionnelle de monuments historiques. La co-cathédrale Saint-Jean, avec ses intérieurs baroques dorés et ses deux toiles du Caravage, est un chef-d'œuvre absolu.", en: "Valletta is the smallest capital in the European Union and one of the most fortified cities in Europe, a UNESCO World Heritage Site. Built by the Knights of the Order of St John in the 16th century, it holds an exceptional concentration of historic monuments. St John's Co-Cathedral, with its gilded baroque interiors and two Caravaggio paintings, is an absolute masterpiece.", es: "La Valeta es la capital más pequeña de la Unión Europea y una de las ciudades más fortificadas de Europa, declarada Patrimonio de la Humanidad por la UNESCO. Construida por los Caballeros de la Orden de San Juan en el siglo XVI, alberga una concentración excepcional de monumentos históricos. La concatedral de San Juan, con sus interiores barrocos dorados y dos cuadros de Caravaggio, es una obra maestra absoluta.", de: "Valletta ist die kleinste Hauptstadt der Europäischen Union und eine der am stärksten befestigten Städte Europas, die zum UNESCO-Weltkulturerbe gehört. Es wurde im 16. Jahrhundert von den Rittern des Johanniterordens erbaut und beherbergt eine außergewöhnliche Konzentration historischer Denkmäler. Die St. John's Co-Cathedral ist mit ihren vergoldeten barocken Innenräumen und zwei Caravaggio-Gemälden ein absolutes Meisterwerk.",
      },
      wikipedia: "Valletta",
      tags: ["UNESCO", "Ville", "Architecture", "Histoire", "Gastronomie"],
      mustSee: [
        { name: { fr: "Co-cathédrale Saint-Jean — baroque maltais et Caravage (La Décollation)", en: "St John's Co-Cathedral — Maltese baroque and Caravaggio (The Beheading)", es: "Concatedral de San Juan — barroco maltés y Caravaggio (La Decapitación)", de: "St. John’s Co-Cathedral – maltesischer Barock und Caravaggio (Die Enthauptung)" }, wikipedia: "File:Concatedral_de_San_Juan,_La_Valeta,_isla_de_Malta,_Malta,_2021-08-25,_DD_246-248_HDR.jpg" },
        { name: { fr: "Palais du Grand Maître — résidence officielle du Président de Malte", en: "Grandmaster's Palace — official residence of the President of Malta", es: "Palacio del Gran Maestre — residencia oficial del Presidente de Malta", de: "Großmeisterpalast – offizielle Residenz des Präsidenten von Malta" }, wikipedia: "Grandmaster's_Palace,_Valletta" },
        { name: { fr: "Jardins de Barrakka Supérieure — panorama sur le Grand Harbour", en: "Upper Barrakka Gardens — panorama over the Grand Harbour", es: "Jardines de Barrakka Superior — panorámica del Grand Harbour", de: "Upper Barrakka Gardens – Panorama des Grand Harbour" }, wikipedia: "Upper_Barrakka_Gardens" },
        { name: { fr: "MUŻA — musée national des arts de Malte", en: "MUŻA — Malta's national museum of art", es: "MUŻA — museo nacional de arte de Malta", de: "MUŻA – Nationales Kunstmuseum von Malta" }, wikipedia: "MUŻA" },
      ],
    },
    {
      id: 2,
      name: "Mdina",
      region: { fr: "Malte centrale", en: "Central Malta", es: "Malta central", de: "Zentralmalta" },
      description: {
        fr: "Surnommée la 'Cité du Silence', Mdina est une ancienne capitale fortifiée médiévale perchée sur une colline au centre de l'île de Malte. Avec moins de 300 habitants permanents, ses ruelles désertes à la tombée de la nuit créent une atmosphère presque magique. Elle a notamment servi de décor à King's Landing dans la première saison de Game of Thrones.", en: "Nicknamed the 'Silent City', Mdina is a former fortified medieval capital perched on a hill in the centre of Malta. With fewer than 300 permanent residents, its deserted alleys at nightfall create an almost magical atmosphere. It notably served as the backdrop for King's Landing in the first season of Game of Thrones.", es: "Apodada la 'Ciudad del Silencio', Mdina es una antigua capital fortificada medieval encaramada en una colina en el centro de la isla de Malta. Con menos de 300 habitantes permanentes, sus callejuelas desiertas al caer la noche crean una atmósfera casi mágica. Sirvió de escenario para Desembarco del Rey en la primera temporada de Juego de Tronos.", de: "Mdina, auch „Stadt der Stille“ genannt, ist eine alte mittelalterliche, von Mauern umgebene Hauptstadt auf einem Hügel im Zentrum der Insel Malta. Mit weniger als 300 ständigen Einwohnern verbreiten die verlassenen Straßen bei Einbruch der Dunkelheit eine fast magische Atmosphäre. Es diente insbesondere als Kulisse für King's Landing in der ersten Staffel von Game of Thrones.",
      },
      wikipedia: "Mdina",
      tags: ["Histoire", "Architecture", "Culture"],
      mustSee: [
        { name: { fr: "Remparts de Mdina — vues panoramiques sur toute l'île de Malte", en: "Mdina ramparts — panoramic views over the whole island of Malta", es: "Murallas de Mdina — vistas panorámicas de toda la isla de Malta", de: "Mdina Walls – Panoramablick über die Insel Malta" }, wikipedia: "Mdina" },
        { name: { fr: "Cathédrale Saint-Paul — baroque du XVIIIe siècle sur un tremblement de terre", en: "St Paul's Cathedral — 18th-century baroque rebuilt after an earthquake", es: "Catedral de San Pablo — barroco del siglo XVIII reconstruida tras un terremoto", de: "St. Paul's Cathedral – Barock aus dem 18. Jahrhundert bei einem Erdbeben" }, wikipedia: "File:Catedral_de_San_Pablo,_Mdina,_isla_de_Malta,_Malta,_2021-08-25,_DD_150-152_HDR.jpg" },
        { name: { fr: "Musée des Donjons — histoire des chevaliers et instruments de torture", en: "Mdina Dungeons Museum — history of the knights and instruments of torture", es: "Museo de las Mazmorras — historia de los caballeros e instrumentos de tortura", de: "Dungeons Museum – Geschichte der Ritter und Folterinstrumente" }, wikipedia: "File:Gibbeting, Mdina Dungeons.jpg" },
        { name: { fr: "Rabat — ville adjacente avec catacombes paléochrétiennes", en: "Rabat — neighbouring town with early Christian catacombs", es: "Rabat — localidad vecina con catacumbas paleocristianas", de: "Rabat – angrenzende Stadt mit frühchristlichen Katakomben" }, wikipedia: "Rabat,_Malta" },
      ],
    },
    {
      id: 3,
      name: { fr: "Lagune Bleue de Comino", en: "Comino Blue Lagoon", es: "Laguna Azul de Comino", de: "Blaue Lagune von Comino" },
      region: "Comino",
      description: {
        fr: "La Lagune Bleue de l'île de Comino est l'une des eaux les plus cristallines de toute la Méditerranée, avec des teintes turquoise et azur d'une beauté irréelle. L'île de Comino, quasi inhabitée, abrite seulement un hôtel. La Lagune Bleue est idéale pour la baignade, le snorkeling et la plongée. En basse saison, elle prend un caractère paradisiaque.", en: "The Blue Lagoon on the island of Comino has some of the clearest waters in the entire Mediterranean, with unreal turquoise and azure hues. The island of Comino, almost uninhabited, has only one hotel. The Blue Lagoon is ideal for swimming, snorkelling and diving. In low season it takes on a paradise-like feel.", es: "La Laguna Azul de la isla de Comino tiene una de las aguas más cristalinas de todo el Mediterráneo, con tonos turquesa y azul de una belleza irreal. La isla de Comino, casi deshabitada, alberga un único hotel. La Laguna Azul es ideal para nadar, hacer snorkel y bucear. En temporada baja adquiere un carácter paradisíaco.", de: "Die Blaue Lagune der Insel Comino ist eines der kristallklarsten Gewässer im gesamten Mittelmeerraum mit türkisfarbenen und azurblauen Farbtönen von unwirklicher Schönheit. Auf der fast unbewohnten Insel Comino gibt es nur ein Hotel. Die Blaue Lagune ist ideal zum Schwimmen, Schnorcheln und Tauchen. In der Nebensaison nimmt es einen paradiesischen Charakter an.",
      },
      wikipedia: "File:Blue_Lagoon_and_Cominotto.JPG",
      tags: ["Plage", "Nature"],
      mustSee: [
        { name: { fr: "Lagune Bleue — eaux turquoise spectaculaires, snorkeling exceptionnel", en: "Blue Lagoon — spectacular turquoise waters, outstanding snorkelling", es: "Laguna Azul — aguas turquesas espectaculares, snorkel excepcional", de: "Blaue Lagune – spektakuläres türkisfarbenes Wasser, außergewöhnliche Schnorchelmöglichkeiten" }, wikipedia: "File:Blue_Lagoon_and_Cominotto.JPG" },
        { name: { fr: "Tour Santa Marija — tour défensive du XVIIe siècle sur l'île", en: "Santa Marija Tower — 17th-century defensive tower on the island", es: "Torre de Santa Marija — torre defensiva del siglo XVII en la isla", de: "Turm Santa Marija – Wehrturm aus dem 17. Jahrhundert auf der Insel" }, wikipedia: "File:Comino_St_Mary’s_Tower.JPG" },
        { name: { fr: "Lagune de Cristal — deuxième lagune moins fréquentée et tout aussi belle", en: "Crystal Lagoon — a second, less crowded and equally beautiful lagoon", es: "Laguna de Cristal — una segunda laguna menos concurrida y igual de bella", de: "Crystal Lagoon – zweite Lagune, weniger besucht und genauso schön" }, wikipedia: "File:Crystal_lagoon_-_Malta.jpg" },
        { name: { fr: "Grottes marines — exploration en bateau des grottes calcaires de l'île", en: "Sea caves — boat exploration of the island's limestone caves", es: "Cuevas marinas — exploración en barco de las cuevas calcáreas de la isla", de: "Meereshöhlen – Erkundung der Kalksteinhöhlen der Insel mit dem Boot" }, wikipedia: "File:Comino caves.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Temples mégalithiques", en: "Megalithic Temples", es: "Templos megalíticos", de: "Megalithische Tempel" },
      region: { fr: "Malte sud", en: "Southern Malta", es: "Malta sur", de: "Malta Süd" },
      description: {
        fr: "Les temples mégalithiques de Malte sont les structures architecturales autoportantes les plus anciennes du monde, datant de 3 600 à 2 500 av. J.-C. Les temples de Ħaġar Qim et Mnajdra, surplombant la mer, et ceux de Tarxien, classés UNESCO, témoignent d'une civilisation préhistorique mystérieuse et avancée. Le Musée archéologique national de La Valette conserve les précieuses 'Vénus de Malte'.", en: "Malta's megalithic temples are the oldest free-standing architectural structures in the world, dating from 3600 to 2500 BC. The temples of Ħaġar Qim and Mnajdra, overlooking the sea, and those of Tarxien, all UNESCO-listed, bear witness to a mysterious and advanced prehistoric civilisation. The National Archaeological Museum in Valletta holds the precious 'Venus of Malta' figurines.", es: "Los templos megalíticos de Malta son las estructuras arquitectónicas autoportantes más antiguas del mundo, datadas entre el 3600 y el 2500 a.C. Los templos de Ħaġar Qim y Mnajdra, frente al mar, y los de Tarxien, todos declarados Patrimonio de la Humanidad por la UNESCO, dan testimonio de una civilización prehistórica misteriosa y avanzada. El Museo Arqueológico Nacional de La Valeta conserva las preciadas 'Venus de Malta'.", de: "Maltas Megalithtempel sind die ältesten freistehenden architektonischen Bauwerke der Welt und stammen aus der Zeit zwischen 3.600 und 2.500 v. Chr. Die Tempel von Ħaġar Qim und Mnajdra mit Blick auf das Meer und die von Tarxien, die zum UNESCO-Weltkulturerbe gehören, zeugen von einer mysteriösen und fortgeschrittenen prähistorischen Zivilisation. Das Nationale Archäologische Museum in Valletta bewahrt die kostbare „Venus von Malta“.",
      },
      wikipedia: "Megalithic_Temples_of_Malta",
      tags: ["UNESCO", "Histoire", "Architecture"],
      mustSee: [
        { name: { fr: "Temples de Ħaġar Qim et Mnajdra — mégalithes face à la mer, classés UNESCO", en: "Ħaġar Qim and Mnajdra temples — UNESCO-listed megaliths facing the sea", es: "Templos de Ħaġar Qim y Mnajdra — megalitos frente al mar, Patrimonio de la Humanidad", de: "Ħaġar Qim- und Mnajdra-Tempel – Megalithen mit Blick auf das Meer, klassifiziert als UNESCO" }, wikipedia: "Ħaġar_Qim" },
        { name: { fr: "Hypogée de Ħal Saflieni — temple souterrain préhistorique unique au monde", en: "Ħal Saflieni Hypogeum — a unique underground prehistoric temple", es: "Hipogeo de Ħal Saflieni — templo subterráneo prehistórico único en el mundo", de: "Hypogäum von Ħal Saflieni – einzigartiger prähistorischer unterirdischer Tempel der Welt" }, wikipedia: "Ħal_Saflieni_Hypogeum" },
        { name: { fr: "Temples de Tarxien — complexe mégalithique en plein milieu de la ville", en: "Tarxien Temples — a megalithic complex right in the middle of town", es: "Templos de Tarxien — complejo megalítico en pleno centro de la ciudad", de: "Tempel von Tarxien – Megalithkomplex mitten in der Stadt" }, wikipedia: "File:Templos_de_Tarxien,_isla_de_Malta,_Malta,_2021-08-25,_DD_29.jpg" },
        { name: { fr: "Musée archéologique national — 'Vénus de Malte' et trésors préhistoriques", en: "National Archaeological Museum — 'Venus of Malta' and prehistoric treasures", es: "Museo Arqueológico Nacional — 'Venus de Malta' y tesoros prehistóricos", de: "Nationales Archäologisches Museum – „Venus von Malta“ und prähistorische Schätze" }, wikipedia: "File:Cart Ruts Hall.jpg" },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "Malte est l'une des destinations les plus abordables de la Méditerranée occidentale. Les prix sont inférieurs à ceux de la France ou de l'Italie, avec un excellent rapport qualité-prix pour la restauration et les activités. L'été voit les prix grimper sensiblement.", en: "Malta is one of the most affordable destinations in the western Mediterranean. Prices are lower than in France or Italy, with excellent value for money on food and activities. Summer sees prices rise noticeably.", es: "Malta es uno de los destinos más asequibles del Mediterráneo occidental. Los precios son inferiores a los de Francia o Italia, con una excelente relación calidad-precio en restauración y actividades. En verano los precios suben notablemente.", de: "Malta ist eines der günstigsten Reiseziele im westlichen Mittelmeerraum. Die Preise sind niedriger als in Frankreich oder Italien und das Preis-Leistungs-Verhältnis für Essen und Aktivitäten ist ausgezeichnet. Im Sommer steigen die Preise deutlich.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Auberge de jeunesse (dortoir)", en: "Youth hostel (dorm)", es: "Albergue juvenil (dormitorio)", de: "Jugendherberge (Wohnheim)" }, price: "18–30 €", detail: { fr: "Bonne offre à La Valette, St Julian's et Sliema", en: "Good options in Valletta, St Julian's and Sliema", es: "Buena oferta en La Valeta, St Julian's y Sliema", de: "Gutes Angebot in Valletta, St. Julian's und Sliema" } },
          { label: { fr: "Hôtel budget ou guesthouse", en: "Budget hotel or guesthouse", es: "Hotel económico o guesthouse", de: "Budget-Hotel oder Pension" }, price: "50–85 €", detail: { fr: "Chambre double correcte en centre-ville", en: "Decent double room in the town centre", es: "Habitación doble decente en el centro", de: "Ordentliches Doppelzimmer im Stadtzentrum" } },
          { label: { fr: "Hôtel confort 3–4 étoiles", en: "3–4 star comfort hotel", es: "Hotel confort 3–4 estrellas", de: "3–4-Sterne-Komforthotel" }, price: "90–160 €", detail: { fr: "Hôtels de charme dans la vieille ville de La Valette", en: "Charming hotels in Valletta's old town", es: "Hoteles con encanto en el casco antiguo de La Valeta", de: "Boutique-Hotels in der Altstadt von Valletta" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Pastizzi (chausson feuilleté au fromage ou petits pois)", en: "Pastizzi (flaky pastry with cheese or peas)", es: "Pastizzi (hojaldre relleno de queso o guisantes)", de: "Pastizzi (Blätterteig mit Käse oder Erbsen)" }, price: "0,50–1 €", detail: { fr: "Snack traditionnel maltais, incontournable et ultra-abordable", en: "A traditional Maltese snack, a must-try and ultra-cheap", es: "Snack tradicional maltés, imprescindible y muy económico", de: "Traditioneller maltesischer Snack, unverzichtbar und äußerst erschwinglich" } },
          { label: { fr: "Restaurant local, plat du jour", en: "Local restaurant, dish of the day", es: "Restaurante local, plato del día", de: "Lokales Restaurant, Tagesgericht" }, price: "10–16 €", detail: { fr: "Rabbit stew (lapin), ftira (pain maltais), plats de poisson", en: "Rabbit stew, ftira (Maltese bread), fish dishes", es: "Estofado de conejo, ftira (pan maltés), platos de pescado", de: "Kanincheneintopf (Kaninchen), Ftira (maltesisches Brot), Fischgerichte" } },
          { label: { fr: "Restaurant touristique dîner", en: "Touristy restaurant dinner", es: "Cena en restaurante turístico", de: "Abendessen im Touristenrestaurant" }, price: "20–35 €", detail: { fr: "Cuisine méditerranéenne de qualité, fruits de mer frais", en: "Quality Mediterranean cuisine, fresh seafood", es: "Cocina mediterránea de calidad, marisco fresco", de: "Hochwertige mediterrane Küche, frische Meeresfrüchte" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bus maltais (trajet unique)", en: "Maltese bus (single ride)", es: "Autobús maltés (trayecto único)", de: "Maltesischer Bus (einfache Fahrt)" }, price: "1,50–2 €", detail: { fr: "Réseau couvrant toute l'île, principal moyen de transport", en: "Network covering the whole island, the main mode of transport", es: "Red que cubre toda la isla, principal medio de transporte", de: "Netz, das die gesamte Insel abdeckt, Haupttransportmittel" } },
          { label: { fr: "Ferries inter-îles (Malte–Gozo)", en: "Inter-island ferry (Malta–Gozo)", es: "Ferry entre islas (Malta–Gozo)", de: "Fähren zwischen den Inseln (Malta–Gozo)" }, price: "4,65 €", detail: { fr: "Traversée aller-retour Cirkewwa–Mġarr, 25 minutes", en: "Round-trip crossing Cirkewwa–Mġarr, 25 minutes", es: "Travesía de ida y vuelta Cirkewwa–Mġarr, 25 minutos", de: "Rückfahrt Cirkewwa–Mġarr, 25 Minuten" } },
          { label: { fr: "Bateau vers la Lagune Bleue", en: "Boat to the Blue Lagoon", es: "Barco a la Laguna Azul", de: "Boot zur Blauen Lagune" }, price: "25–40 €", detail: { fr: "Excursion en bateau depuis Malte ou Gozo, tour de l'île inclus", en: "Boat excursion from Malta or Gozo, island tour included", es: "Excursión en barco desde Malta o Gozo, incluye vuelta a la isla", de: "Bootsfahrt ab Malta oder Gozo, Inselrundfahrt inklusive" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Co-cathédrale Saint-Jean (La Valette)", en: "St John's Co-Cathedral (Valletta)", es: "Concatedral de San Juan (La Valeta)", de: "St. John's Co-Cathedral (Valletta)" }, price: "15 €", detail: { fr: "Inclut audioguide et tapisseries baroques", en: "Includes audio guide and baroque tapestries", es: "Incluye audioguía y tapices barrocos", de: "Inklusive Audioguide und barocken Wandteppichen" } },
          { label: { fr: "Hypogée de Ħal Saflieni (réservation obligatoire)", en: "Ħal Saflieni Hypogeum (booking required)", es: "Hipogeo de Ħal Saflieni (reserva obligatoria)", de: "Hypogäum von Ħal Saflieni (Reservierung erforderlich)" }, price: "35 €", detail: { fr: "Visite guidée limitée à 80 personnes par jour", en: "Guided tour limited to 80 people per day", es: "Visita guiada limitada a 80 personas por día", de: "Die Führung ist auf 80 Personen pro Tag begrenzt" } },
          { label: { fr: "Plongée sous-marine (1 plongée)", en: "Scuba diving (1 dive)", es: "Buceo (1 inmersión)", de: "Tauchen (1 Tauchgang)" }, price: "40–60 €", detail: { fr: "Sites exceptionnels dont le sous-marin Tug II et le Blue Hole de Gozo", en: "Outstanding sites including the Tug II wreck and Gozo's Blue Hole", es: "Sitios excepcionales, entre ellos el pecio Tug II y el Blue Hole de Gozo", de: "Außergewöhnliche Orte wie das U-Boot Tug II und das Blue Hole von Gozo" } },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
        daily: "60–80 €/j",
        desc: { fr: "Auberge, pastizzi et restaurants locaux, bus, visites abordables", en: "Hostel, pastizzi and local restaurants, bus, affordable sightseeing", es: "Albergue, pastizzi y restaurantes locales, autobús, visitas asequibles", de: "Gasthaus, Pastizzi und lokale Restaurants, Busse, erschwingliche Touren" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
        daily: "110–160 €/j",
        desc: { fr: "Hôtel charme, bonne restauration, activités nautiques et visites", en: "Charming hotel, good dining, water activities and sightseeing", es: "Hotel con encanto, buena restauración, actividades acuáticas y visitas", de: "Charmantes Hotel, gutes Catering, Wasseraktivitäten und Besichtigungen" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "7 jours", en: "7 days", es: "7 días", de: "7 Tage" },
      route: {
        fr: "La Valette – Mdina – Comino (Lagune Bleue) – Gozo", en: "Valletta – Mdina – Comino (Blue Lagoon) – Gozo", es: "La Valeta – Mdina – Comino (Laguna Azul) – Gozo", de: "Valletta – Mdina – Comino (Blaue Lagune) – Gozo",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "550 – 750 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Malte", en: "Return flight Paris–Malta", es: "Vuelo ida y vuelta París–Malta", de: "Hin- und Rückflug Paris–Malta" }, amount: "80–150 €" },
            { label: { fr: "Hébergement (6 nuits)", en: "Accommodation (6 nights)", es: "Alojamiento (6 noches)", de: "Unterkunft (6 Nächte)" }, amount: "108–180 €" },
            { label: { fr: "Transports locaux + ferries", en: "Local transport + ferries", es: "Transporte local y ferris", de: "Nahverkehr + Fähren" }, amount: "50–70 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida y bebidas", de: "Essen + Getränke" }, amount: "210–280 €" },
            { label: { fr: "Activités + entrées", en: "Activities + entry fees", es: "Actividades y entradas", de: "Aktivitäten + Einträge" }, amount: "60–90 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "1 100 – 1 600 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Malte", en: "Return flight Paris–Malta", es: "Vuelo ida y vuelta París–Malta", de: "Hin- und Rückflug Paris–Malta" }, amount: "120–200 €" },
            { label: { fr: "Hébergement (6 nuits)", en: "Accommodation (6 nights)", es: "Alojamiento (6 noches)", de: "Unterkunft (6 Nächte)" }, amount: "540–720 €" },
            { label: { fr: "Transports locaux + ferries", en: "Local transport + ferries", es: "Transporte local y ferris", de: "Nahverkehr + Fähren" }, amount: "80–120 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida y bebidas", de: "Essen + Getränke" }, amount: "300–420 €" },
            { label: { fr: "Activités + plongée", en: "Activities + diving", es: "Actividades y buceo", de: "Aktivitäten + Tauchen" }, amount: "150–220 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde París", de: "Flug ab Paris" }, value: { fr: "2h30 de vol direct depuis CDG vers l'aéroport international de Malte", en: "2h30 direct flight from CDG to Malta International Airport", es: "2h30 de vuelo directo desde CDG al aeropuerto internacional de Malta", de: "2 Std. 30 Min. Direktflug von CDG zum Malta International Airport" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Aucun visa requis — zone Schengen, carte d'identité française suffisante", en: "No visa required — Schengen area, an EU ID card is sufficient", es: "No se requiere visado — zona Schengen, basta con el DNI europeo", de: "Kein Visum erforderlich – Schengen-Raum, ausreichender französischer Personalausweis" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Euro (€) — pays très accessible financièrement pour la Méditerranée", en: "Euro (€) — a very budget-friendly country for the Mediterranean", es: "Euro (€) — país muy accesible económicamente para el Mediterráneo", de: "Euro (€) – sehr finanziell zugängliches Land für das Mittelmeer" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Maltais et anglais officiels — le français est peu parlé, l'anglais est universel", en: "Maltese and English are official — French is little spoken, English is universal", es: "Maltés e inglés son oficiales — el francés se habla poco, el inglés es universal", de: "Offizielles Maltesisch und Englisch – Französisch wird kaum gesprochen, Englisch ist allgemein verbreitet" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type G (prise britannique à 3 broches) — adaptateur indispensable", en: "Type G (British 3-pin plug) — adapter essential", es: "Tipo G (enchufe británico de 3 clavijas) — adaptador indispensable", de: "Typ G (3-poliger UK-Stecker) – unverzichtbarer Adapter" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Carte européenne d'assurance maladie (CEAM) valable — soins de bonne qualité", en: "European Health Insurance Card (EHIC) valid — good quality healthcare", es: "Tarjeta sanitaria europea (TSE) válida — atención médica de buena calidad", de: "Gültige Europäische Krankenversicherungskarte (EHIC) – hochwertige Pflege" } },
    { icon: "🌊", label: { fr: "Baignade", en: "Swimming", es: "Baño", de: "Baden" }, value: { fr: "Mer chaude de juin à novembre — snorkeling et plongée exceptionnels", en: "Warm sea from June to November — outstanding snorkelling and diving", es: "Mar cálido de junio a noviembre — snorkel y buceo excepcionales", de: "Warmes Meer von Juni bis November – außergewöhnliches Schnorcheln und Tauchen" } },
    { icon: "🎬", label: { fr: "Cinéma", en: "Film", es: "Cine", de: "Kino" }, value: { fr: "Malte a servi de décor à Gladiator, Game of Thrones et Troie", en: "Malta has served as a filming location for Gladiator, Game of Thrones and Troy", es: "Malta ha servido de escenario para Gladiator, Juego de Tronos y Troya", de: "Malta diente als Schauplatz für Gladiator, Game of Thrones und Troja" } },
  ],
};
