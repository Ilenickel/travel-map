export const ALGERIA = {
  code: "DZA",
  numericId: 12,
  name: { fr: "Algérie", en: "Algeria", es: "Argelia", de: "Algerien" },
  emoji: "🇩🇿",
  capital: { fr: "Alger", en: "Algiers", es: "Argel", de: "Algier" },
  language: { fr: "Arabe, Tamazight (berbère), Français", en: "Arabic, Tamazight (Berber), French", es: "Árabe, tamazight (bereber), francés", de: "Arabisch, Tamazight (Berberisch), Französisch" },
  currency: { fr: "Dinar algérien (DZD)", en: "Algerian Dinar (DZD)", es: "Dinar argelino (DZD)", de: "Algerischer Dinar (DZD)" },
  timezone: "UTC+1",
  filter: {
    budgetMin: 40, budgetMid: 90,
    tripMin: 1500, tripMid: 3000,
  },
  criteria: {
    unesco: 3,
    nature: 2,
    randonnee: 1,
    gastronomie: 2,
    architecture: 2,
    desert: 3,
    safari: 0,
    ski: 0,
    ville: 1,
    plage: 2,
  },
  description: {
    fr: "L'Algérie est le plus grand pays d'Afrique et l'un des moins visités : la Casbah d'Alger (UNESCO) avec ses maisons ottomanes, Ghardaïa et la vallée du M'Zab (UNESCO), les dunes dorées du Grand Erg Occidental dans le Sahara, les ruines romaines de Timgad et Djémila (UNESCO), et les gorges des Aures. Un pays aux dimensions continentales et à l'hospitalité légendaire.", en: "Algeria is the largest country in Africa and one of the least visited: the Casbah of Algiers (UNESCO) with its Ottoman houses, Ghardaïa and the M'Zab valley (UNESCO), the golden dunes of the Grand Erg Occidental in the Sahara, the Roman ruins of Timgad and Djémila (UNESCO), and the Aures gorges. A country of continental scale and legendary hospitality.", es: "Argelia es el país más grande de África y uno de los menos visitados: la Casbah de Argel (UNESCO) con sus casas otomanas, Ghardaïa y el valle del M'Zab (UNESCO), las dunas doradas del Gran Erg Occidental en el Sahara, las ruinas romanas de Timgad y Djémila (UNESCO), y los desfiladeros de Aurès. Un país de dimensiones continentales y hospitalidad legendaria.", de: "Algerien ist das größte Land Afrikas und eines der am wenigsten besuchten: die Kasbah von Algier (UNESCO) mit ihren osmanischen Häusern, Ghardaïa und das M'Zab-Tal (UNESCO), die goldenen Dünen des Großen Erg Occidental in der Sahara, die römischen Ruinen von Timgad und Djémila (UNESCO) und die Aures-Schluchten. Ein Land mit kontinentalen Dimensionen und legendärer Gastfreundschaft.",
  },

  bestPeriods: [
    {
      months: { fr: "Mars – Mai", en: "March – May", es: "Marzo – Mayo", de: "März – Mai" },
      label: { fr: "Printemps méditerranéen", en: "Mediterranean spring", es: "Primavera mediterránea", de: "Mediterraner Frühling" },
      color: "#22c55e",
      description: {
        fr: "Idéal pour le nord : Alger et la côte sont agréables (18–25°C). Sahara encore supportable (25–35°C). Meilleure période globale.", en: "Ideal for the north: Algiers and the coast are pleasant (18–25°C). Sahara still bearable (25–35°C). Best overall period.", es: "Ideal para el norte: Argel y la costa son agradables (18–25°C). El Sahara todavía soportable (25–35°C). Mejor época en general.", de: "Ideal für den Norden: Algier und die Küste sind angenehm (18–25°C). Sahara noch erträglich (25–35°C). Beste Gesamtperiode.",
      },
      icon: "🌸",
    },
    {
      months: { fr: "Octobre – Novembre", en: "October – November", es: "Octubre – Noviembre", de: "Oktober – November" },
      label: { fr: "Automne doux", en: "Mild autumn", es: "Otoño suave", de: "Sanfter Herbst" },
      color: "#22c55e",
      description: {
        fr: "Excellent pour le Sahara (20–28°C) et les sites romains. Nord agréable. Dunes sans chaleur extrême.", en: "Excellent for the Sahara (20–28°C) and the Roman sites. Pleasant in the north. Dunes without extreme heat.", es: "Excelente para el Sahara (20–28°C) y los yacimientos romanos. Norte agradable. Dunas sin calor extremo.", de: "Hervorragend geeignet für die Sahara (20–28°C) und römische Stätten. Angenehmer Norden. Dünen ohne extreme Hitze.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Août", en: "June – August", es: "Junio – Agosto", de: "Juni – August" },
      label: { fr: "Été saharien", en: "Saharan summer", es: "Verano sahariano", de: "Sahara-Sommer" },
      color: "#ef4444",
      description: {
        fr: "Chaleur extrême dans le Sahara (45–50°C) et le sud. Côte méditerranéenne agréable mais bondée. Sahara déconseillé.", en: "Extreme heat in the Sahara (45–50°C) and the south. Mediterranean coast pleasant but crowded. Sahara not recommended.", es: "Calor extremo en el Sahara (45–50°C) y el sur. Costa mediterránea agradable pero abarrotada. Sahara desaconsejado.", de: "Extreme Hitze in der Sahara (45–50°C) und im Süden. Angenehme, aber überfüllte Mittelmeerküste. Sahara nicht empfohlen.",
      },
      icon: "🌡️",
    },
  ],

  weatherCities: [
    {
      id: "algiers",
      name: { fr: "Alger", en: "Algiers", es: "Argel", de: "Algier" },
      region: { fr: "Méditerranée (nord)", en: "Mediterranean (north)", es: "Mediterráneo (norte)", de: "Mittelmeer (Norden)" },
      data: [
        { month: "Jan", temp: 12, rain: 90,  icon: "⛅" },
        { month: "Fév", temp: 13, rain: 70,  icon: "⛅" },
        { month: "Mar", temp: 15, rain: 60,  icon: "⛅" },
        { month: "Avr", temp: 17, rain: 40,  icon: "☀️" },
        { month: "Mai", temp: 21, rain: 30,  icon: "☀️" },
        { month: "Jun", temp: 25, rain: 5,   icon: "☀️" },
        { month: "Jul", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Aoû", temp: 28, rain: 5,   icon: "⛅" },
        { month: "Sep", temp: 25, rain: 25,  icon: "☀️" },
        { month: "Oct", temp: 21, rain: 55,  icon: "⛅" },
        { month: "Nov", temp: 16, rain: 80,  icon: "⛅" },
        { month: "Déc", temp: 13, rain: 100, icon: "⛅" },
      ],
    },
    {
      id: "tamanrasset",
      name: "Tamanrasset",
      region: { fr: "Hoggar / Sahara (extrême sud)", en: "Hoggar / Sahara (far south)", es: "Hoggar / Sahara (extremo sur)", de: "Hoggar / Sahara (ganz im Süden)" },
      data: [
        { month: "Jan", temp: 14, rain: 0,  icon: "☀️" },
        { month: "Fév", temp: 17, rain: 0,  icon: "☀️" },
        { month: "Mar", temp: 21, rain: 0,  icon: "☀️" },
        { month: "Avr", temp: 26, rain: 5,  icon: "☀️" },
        { month: "Mai", temp: 30, rain: 5,  icon: "⛅" },
        { month: "Jun", temp: 34, rain: 5,  icon: "🌡️" },
        { month: "Jul", temp: 35, rain: 10, icon: "🌡️" },
        { month: "Aoû", temp: 33, rain: 15, icon: "🌡️" },
        { month: "Sep", temp: 30, rain: 10, icon: "⛅" },
        { month: "Oct", temp: 25, rain: 5,  icon: "☀️" },
        { month: "Nov", temp: 19, rain: 0,  icon: "☀️" },
        { month: "Déc", temp: 15, rain: 0,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "La Casbah d'Alger", en: "The Casbah of Algiers", es: "La Casbah de Argel", de: "Die Kasbah von Algier" },
      region: { fr: "Alger", en: "Algiers", es: "Argel", de: "Algier" },
      description: {
        fr: "La Casbah d'Alger (UNESCO) est un labyrinthe de ruelles ottomanes en pente douce sur la colline surplombant la mer : palais des Deys, mosquées du XVIe siècle, maisons à patios intérieurs avec fontaines, et les marches de rue emblématiques des films de la bataille d'Alger. Un monde à part, vivant et authentique.", en: "The Casbah of Algiers (UNESCO) is a labyrinth of gently sloping Ottoman alleyways on the hill overlooking the sea: palaces of the Deys, 16th-century mosques, houses with interior courtyards and fountains, and the iconic stairways made famous by films about the Battle of Algiers. A world apart, lively and authentic.", es: "La Casbah de Argel (UNESCO) es un laberinto de callejuelas otomanas en suave pendiente sobre la colina que domina el mar: palacios de los deyes, mezquitas del siglo XVI, casas con patios interiores y fuentes, y las escalinatas emblemáticas de las películas sobre la batalla de Argel. Un mundo aparte, vivo y auténtico.", de: "Die Kasbah von Algier (UNESCO) ist ein Labyrinth aus sanft abfallenden osmanischen Straßen am Hang mit Blick auf das Meer: Paläste der Deys, Moscheen aus dem 16. Jahrhundert, Häuser mit Innenhöfen mit Springbrunnen und die berühmten Straßentreppen aus den Filmen über die Schlacht von Algier. Eine Welt für sich, lebendig und authentisch.",
      },
      wikipedia: "Casbah_of_Algiers",
      tags: ["UNESCO", "Architecture", "Histoire", "Plage", "Ville", "Gastronomie"],
      mustSee: [
        { name: { fr: "Casbah d'Alger (UNESCO) — ruelles ottomanes du XVIe s.", en: "Casbah of Algiers (UNESCO) — 16th-century Ottoman alleyways", es: "Casbah de Argel (UNESCO) — callejuelas otomanas del siglo XVI", de: "Kasbah von Algier (UNESCO) – Osmanische Straßen aus dem 16. Jahrhundert." }, wikipedia: "Casbah_of_Algiers" },
        { name: { fr: "Palais des Raïs (Bastion 23) — musée des arts et traditions", en: "Palais des Raïs (Bastion 23) — museum of arts and traditions", es: "Palacio de los Raïs (Bastión 23) — museo de artes y tradiciones", de: "Palais des Raïs (Bastion 23) – Museum für Kunst und Traditionen" }, wikipedia: "File:Palais des Rais (Es'hine) - Alger.JPG" },
        { name: { fr: "Mosquée Ketchaoua (1612) — ottomane puis cathédrale", en: "Ketchaoua Mosque (1612) — Ottoman mosque turned cathedral", es: "Mezquita Ketchaoua (1612) — otomana convertida luego en catedral", de: "Ketchaoua-Moschee (1612) – osmanisch, dann Kathedrale" }, wikipedia: "Ketchaoua_Mosque" },
        { name: { fr: "Front de mer d'Alger — la Méditerranée au pied de la Casbah", en: "Algiers waterfront — the Mediterranean at the foot of the Casbah", es: "Paseo marítimo de Argel — el Mediterráneo al pie de la Casbah", de: "Algier am Meer – das Mittelmeer am Fuße der Kasbah" }, wikipedia: "File:Alger Kasbah02.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Tassili n'Ajjer — Art rupestre saharien", en: "Tassili n'Ajjer — Saharan rock art", es: "Tassili n'Ajjer — Arte rupestre sahariano", de: "Tassili n'Ajjer – Felskunst aus der Sahara" },
      region: { fr: "Illizi / Sahara", en: "Illizi / Sahara", es: "Illizi / Sahara", de: "Illizi / Sahara" },
      description: {
        fr: "Le Tassili n'Ajjer (UNESCO) est le plus grand site d'art rupestre préhistorique du monde : 15 000 gravures et peintures réparties sur un plateau de grès éreinté par l'érosion, représentant les animaux et les hommes du Sahara vert d'il y a 10 000 ans. Une forêt de rochers en formes fantastiques dans un désert absolument pur.", en: "Tassili n'Ajjer (UNESCO) is the largest prehistoric rock art site in the world: 15,000 engravings and paintings spread across a sandstone plateau worn by erosion, depicting the animals and people of the green Sahara of 10,000 years ago. A forest of rocks in fantastical shapes within an utterly pristine desert.", es: "El Tassili n'Ajjer (UNESCO) es el mayor yacimiento de arte rupestre prehistórico del mundo: 15.000 grabados y pinturas repartidos por una meseta de arenisca desgastada por la erosión, que representan los animales y los hombres del Sahara verde de hace 10.000 años. Un bosque de rocas de formas fantásticas en un desierto absolutamente puro.", de: "Tassili n'Ajjer (UNESCO) ist die größte prähistorische Felskunststätte der Welt: 15.000 Gravuren und Gemälde sind auf einem durch Erosion abgenutzten Sandsteinplateau verteilt und stellen die Tiere und Menschen der grünen Sahara vor 10.000 Jahren dar. Ein Wald aus fantastisch geformten Felsen in einer absolut reinen Wüste.",
      },
      wikipedia: "File:Tassili Desert Algeria.jpg",
      tags: ["UNESCO", "Nature", "Histoire", "Désert"],
      mustSee: [
        { name: { fr: "Peintures rupestres de Sefar — le 'musée' préhistorique", en: "Rock paintings of Sefar — the prehistoric 'museum'", es: "Pinturas rupestres de Sefar — el 'museo' prehistórico", de: "Felsmalereien von Sefar – das prähistorische „Museum“" }, wikipedia: "File:Eheren1.jpg" },
        { name: { fr: "Forêt de rochers de Tamrit — cyprès du Sahara millénaires", en: "Rock forest of Tamrit — thousand-year-old Saharan cypresses", es: "Bosque de rocas de Tamrit — cipreses milenarios del Sahara", de: "Tamrit-Felsenwald – tausend Jahre alte Sahara-Zypressen" }, wikipedia: "File:Tassili n'Ajjer-Tamghit 02.jpg" },
        { name: { fr: "Bivouac sous les étoiles du désert", en: "Overnight camp under the desert stars", es: "Vivac bajo las estrellas del desierto", de: "Biwak unter den Sternen der Wüste" }, wikipedia: "File:Tassili Desert Algeria.jpg" },
        { name: { fr: "Gravures d'Iheren — girafes et éléphants dans le Sahara", en: "Iheren engravings — giraffes and elephants in the Sahara", es: "Grabados de Iheren — jirafas y elefantes en el Sahara", de: "Stiche von Iheren – Giraffen und Elefanten in der Sahara" }, wikipedia: "File:The Tanzoumaitak cave painting in Tassili n'ajjer.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Djémila & Timgad — Cités romaines", en: "Djémila & Timgad — Roman cities", es: "Djémila y Timgad — Ciudades romanas", de: "Djémila und Timgad – römische Städte" },
      region: { fr: "Sétif / Batna", en: "Sétif / Batna", es: "Sétif / Batna", de: "Sétif / Batna" },
      description: {
        fr: "Djémila (UNESCO) et Timgad (UNESCO) sont deux cités romaines exceptionnellement bien conservées dans les montagnes algériennes : Timgad, construite en 100 apr. J.-C. par Trajan pour ses légions, étale sa grille parfaite dans la steppe ; Djémila, 'la belle' en arabe, est perchée sur un éperon rocheux avec forums, temples et arc de triomphe intacts.", en: "Djémila (UNESCO) and Timgad (UNESCO) are two exceptionally well-preserved Roman cities in the Algerian mountains: Timgad, built in 100 AD by Trajan for his legions, lays out its perfect grid across the steppe; Djémila, 'the beautiful' in Arabic, sits perched on a rocky spur with intact forums, temples and a triumphal arch.", es: "Djémila (UNESCO) y Timgad (UNESCO) son dos ciudades romanas excepcionalmente bien conservadas en las montañas argelinas: Timgad, construida en el año 100 d. C. por Trajano para sus legiones, despliega su trazado perfecto en la estepa; Djémila, 'la bella' en árabe, se alza sobre un espolón rocoso con foros, templos y un arco de triunfo intactos.", de: "Djémila (UNESCO) und Timgad (UNESCO) sind zwei außergewöhnlich gut erhaltene römische Städte in den algerischen Bergen: Timgad, erbaut im Jahr 100 n. Chr. AD von Trajan für seine Legionen, breitet sein perfektes Gitter in der Steppe aus; Djémila, auf Arabisch „die Schöne“, thront auf einem Felsvorsprung mit intakten Foren, Tempeln und einem Triumphbogen.",
      },
      wikipedia: "Timgad",
      tags: ["UNESCO", "Histoire", "Montagne", "Architecture"],
      mustSee: [
        { name: { fr: "Timgad (UNESCO) — cité romaine de Trajan aux plans parfaits", en: "Timgad (UNESCO) — Trajan's Roman city with its perfect layout", es: "Timgad (UNESCO) — ciudad romana de Trajano de trazado perfecto", de: "Timgad (UNESCO) – Römische Stadt Trajans mit perfekten Plänen" }, wikipedia: "File:Timgad Ruins Panorama.jpg" },
        { name: { fr: "Djémila (UNESCO) — forum et arc de triomphe sur un éperon", en: "Djémila (UNESCO) — forum and triumphal arch on a rocky spur", es: "Djémila (UNESCO) — foro y arco de triunfo sobre un espolón", de: "Djémila (UNESCO) – Forum und Triumphbogen auf einem Sporn" }, wikipedia: "Djémila" },
        { name: { fr: "Musée archéologique de Djémila — mosaïques romaines", en: "Djémila Archaeological Museum — Roman mosaics", es: "Museo arqueológico de Djémila — mosaicos romanos", de: "Archäologisches Museum Djémila – Römische Mosaike" }, wikipedia: "File:Algerie Djemila 05.jpg" },
        { name: { fr: "Paysage de montagne autour des cités", en: "Mountain scenery surrounding the cities", es: "Paisaje de montaña alrededor de las ciudades", de: "Berglandschaft rund um die Städte" }, wikipedia: "Timgad" },
      ],
    },
    {
      id: 4,
      name: { fr: "Hoggar — Désert et Touaregs", en: "Hoggar — Desert and Tuareg", es: "Hoggar — Desierto y tuaregs", de: "Hoggar – Wüste und Tuaregs" },
      region: { fr: "Tamanrasset", en: "Tamanrasset", es: "Tamanrasset", de: "Tamanrasset" },
      description: {
        fr: "Le Hoggar (Ahaggar) est le cœur montagneux et spirituel du Sahara algérien : des volcans et des pics de granite rouge formant un paysage minéral et désertique à 3 000m d'altitude, l'ermitage du père de Foucauld sur l'Assekrem (lever de soleil légendaire), et les campements Touaregs aux tentes bleues. Une des plus grandes solitudes au monde.", en: "The Hoggar (Ahaggar) is the mountainous, spiritual heart of the Algerian Sahara: volcanoes and red granite peaks forming a mineral, desert landscape at 3,000m altitude, Father de Foucauld's hermitage on the Assekrem (legendary sunrise), and Tuareg camps with their blue tents. One of the greatest expanses of solitude on Earth.", es: "El Hoggar (Ahaggar) es el corazón montañoso y espiritual del Sahara argelino: volcanes y picos de granito rojo que forman un paisaje mineral y desértico a 3.000m de altitud, la ermita del padre de Foucauld en el Assekrem (amanecer legendario), y los campamentos tuareg de tiendas azules. Una de las mayores soledades del mundo.", de: "Der Hoggar (Ahaggar) ist das gebirgige und spirituelle Herz der algerischen Sahara: Vulkane und rote Granitgipfel, die auf 3.000 m Höhe eine Mineral- und Wüstenlandschaft bilden, die Einsiedelei von Foucaulds Vater auf dem Assekrem (legendärer Sonnenaufgang) und die Tuareg-Lager mit blauen Zelten. Eine der größten Einsamkeiten der Welt.",
      },
      wikipedia: "File:Le Hoggar, Massif de l'Attekor.png",
      tags: ["Nature", "Culture", "Montagne", "Désert", "Randonnée"],
      mustSee: [
        { name: { fr: "Assekrem — lever de soleil sur le Hoggar (2 780m)", en: "Assekrem — sunrise over the Hoggar (2,780m)", es: "Assekrem — amanecer sobre el Hoggar (2.780m)", de: "Assekrem – Sonnenaufgang über Hoggar (2.780 m)" }, wikipedia: "Assekrem" },
        { name: { fr: "Ermitage du Père de Foucauld (1905)", en: "Father de Foucauld's hermitage (1905)", es: "Ermita del padre de Foucauld (1905)", de: "Eremitage von Pater de Foucauld (1905)" }, wikipedia: "Charles_de_Foucauld" },
        { name: { fr: "Bivouac Touareg dans le désert de pierres (reg)", en: "Tuareg camp in the stony desert (reg)", es: "Vivac tuareg en el desierto de piedras (reg)", de: "Touareg-Biwak in der Steinwüste (reg)" }, wikipedia: "File:Ahaggar Mountains 1981 33.jpg" },
        { name: { fr: "Tamanrasset — marché Touareg (bijoux argent, cuir)", en: "Tamanrasset — Tuareg market (silver jewelry, leather)", es: "Tamanrasset — mercado tuareg (joyas de plata, cuero)", de: "Tamanrasset – Touareg-Markt (Silberschmuck, Leder)" }, wikipedia: "Tamanrasset" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Algérie est très abordable pour les touristes : les prix officiels sont fixés en dinars, peu chers au taux officiel. La principale difficulté est la nécessité d'une agence touristique agréée pour le Sahara. Les visas pour les Français sont parfois restrictifs — vérifier les conditions actuelles.", en: "Algeria is very affordable for tourists: prices are set in dinars and cheap at the official rate. The main hurdle is the requirement to use a licensed tourist agency for the Sahara. Visas can sometimes be restrictive — check current conditions before booking.", es: "Argelia es muy asequible para los turistas: los precios oficiales están fijados en dinares, baratos al tipo de cambio oficial. La principal dificultad es la obligación de contratar una agencia turística autorizada para el Sahara. Los visados a veces son restrictivos: conviene comprobar las condiciones vigentes.", de: "Algerien ist für Touristen sehr erschwinglich: Die offiziellen Preise sind in Dinar angegeben, günstig zum offiziellen Kurs. Die Hauptschwierigkeit ist die Notwendigkeit eines zugelassenen Reisebüros für die Sahara. Visa für Franzosen sind manchmal restriktiv – prüfen Sie die aktuellen Bedingungen.",
    },
    currency: "DZD",
    exchangeRate: "1€ ≈ 145–155 DZD (taux officiel)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Hôtel économique / pension", en: "Budget hotel / guesthouse", es: "Hotel económico / pensión", de: "Budget-Hotel/Pension" }, price: "20–40 €", detail: { fr: "Simple, clim ou ventilateur", en: "Basic, AC or fan", es: "Sencillo, aire acondicionado o ventilador", de: "Einfach, Klimaanlage oder Ventilator" } },
          { label: { fr: "Hôtel 3★ (Alger, Constantine)", en: "3-star hotel (Algiers, Constantine)", es: "Hotel 3★ (Argel, Constantina)", de: "Hotel 3★ (Algier, Constantine)" }, price: "60–100 €", detail: { fr: "Clim, wifi, bon niveau", en: "AC, wifi, good standard", es: "Aire acondicionado, wifi, buen nivel", de: "Klimaanlage, WLAN, gutes Niveau" } },
          { label: { fr: "Hôtel de luxe / El Aurassi Alger", en: "Luxury hotel / El Aurassi Algiers", es: "Hotel de lujo / El Aurassi Argel", de: "Luxushotel / El Aurassi Algier" }, price: "130–220 €", detail: { fr: "Standard international", en: "International standard", es: "Estándar internacional", de: "Internationaler Standard" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Chorba / couscous dans un restaurant local", en: "Chorba / couscous at a local restaurant", es: "Chorba / cuscús en un restaurante local", de: "Chorba/Couscous in einem lokalen Restaurant" }, price: "2–5 €", detail: { fr: "Cuisine algérienne authentique", en: "Authentic Algerian cuisine", es: "Cocina argelina auténtica", de: "Authentische algerische Küche" } },
          { label: { fr: "Restaurant mid-range Alger", en: "Mid-range restaurant in Algiers", es: "Restaurante de gama media en Argel", de: "Mittelklasserestaurant Algier" }, price: "8–18 €", detail: { fr: "Fruits de mer, menu complet", en: "Seafood, full menu", es: "Marisco, menú completo", de: "Meeresfrüchte, komplette Speisekarte" } },
          { label: { fr: "Restaurant gastronomique Alger", en: "Fine dining in Algiers", es: "Restaurante gastronómico en Argel", de: "Gourmetrestaurant Algier" }, price: "25–50 €", detail: { fr: "Cuisine méditerranéenne", en: "Mediterranean cuisine", es: "Cocina mediterránea", de: "Mediterrane Küche" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Métro / tram Alger", en: "Algiers metro / tram", es: "Metro / tranvía de Argel", de: "U-Bahn/Straßenbahn Algier" }, price: "0,30–0,50 €", detail: { fr: "Réseau correct dans la capitale", en: "Decent network in the capital", es: "Red decente en la capital", de: "Gutes Netz in der Hauptstadt" } },
          { label: { fr: "Bus ou train inter-villes", en: "Intercity bus or train", es: "Autobús o tren interurbano", de: "Überlandbus oder Bahn" }, price: "3–10 €", detail: { fr: "Selon trajet", en: "Depending on route", es: "Según el trayecto", de: "Abhängig von der Route" } },
          { label: { fr: "Circuit Sahara avec agence (par jour)", en: "Sahara tour with agency (per day)", es: "Circuito por el Sahara con agencia (por día)", de: "Sahara-Tour mit Agentur (pro Tag)" }, price: "80–150 €/j", detail: { fr: "Obligatoire pour le Tassili et Hoggar", en: "Mandatory for the Tassili and Hoggar", es: "Obligatorio para el Tassili y el Hoggar", de: "Obligatorisch für Tassili und Hoggar" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Visite guidée Casbah d'Alger", en: "Guided tour of the Casbah of Algiers", es: "Visita guiada de la Casbah de Argel", de: "Führung durch die Kasbah von Algier" }, price: "10–20 €", detail: { fr: "Guide francophone", en: "French-speaking guide", es: "Guía francófono", de: "Französischsprachiger Reiseführer" } },
          { label: { fr: "Visite Timgad ou Djémila (transport inclus)", en: "Visit to Timgad or Djémila (transport included)", es: "Visita a Timgad o Djémila (transporte incluido)", de: "Besuchen Sie Timgad oder Djémila (Transport inbegriffen)" }, price: "15–30 €", detail: { fr: "Depuis Batna ou Sétif", en: "From Batna or Sétif", es: "Desde Batna o Sétif", de: "Von Batna oder Sétif" } },
          { label: { fr: "Circuit Tassili n'Ajjer (7 jours, agence)", en: "Tassili n'Ajjer tour (7 days, agency)", es: "Circuito por el Tassili n'Ajjer (7 días, agencia)", de: "Tassili n'Ajjer-Rundreise (7 Tage, Agentur)" }, price: "800–1 500 €", detail: { fr: "Tout compris depuis Djanet", en: "All-inclusive from Djanet", es: "Todo incluido desde Djanet", de: "Alles inklusive von Djanet" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "40–70 €/j", desc: { fr: "Hôtel économique + cuisine locale + transports en commun", en: "Budget hotel + local food + public transport", es: "Hotel económico + comida local + transporte público", de: "Budget-Hotel + lokale Küche + öffentliche Verkehrsmittel" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "90–140 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions guidées", en: "3-star hotel + restaurants + guided excursions", es: "Hotel 3★ + restaurantes + excursiones guiadas", de: "3★ Hotel + Restaurants + geführte Ausflüge" }, color: "#3b82f6" },
      { type: { fr: "Sahara", en: "Sahara", es: "Sahara", de: "Sahara" }, daily: "120–200 €/j", desc: { fr: "Circuit agence Tassili / Hoggar tout compris", en: "All-inclusive agency tour of Tassili / Hoggar", es: "Circuito con agencia por el Tassili / Hoggar todo incluido", de: "All-Inclusive-Tour durch die Agentur Tassili/Hoggar" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "12 jours", en: "12 days", es: "12 días", de: "12 Tage" },
      route: { fr: "Alger (3j) → Timgad / Djémila (2j) → Ghardaïa / M'Zab (2j) → Djanet / Tassili (5j)", en: "Algiers (3d) → Timgad / Djémila (2d) → Ghardaïa / M'Zab (2d) → Djanet / Tassili (5d)", es: "Argel (3d) → Timgad / Djémila (2d) → Ghardaïa / M'Zab (2d) → Djanet / Tassili (5d)", de: "Algier (3 Tage) → Timgad / Djémila (2 Tage) → Ghardaïa / M'Zab (2 Tage) → Djanet / Tassili (5 Tage)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 500 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Alger", en: "Round-trip flight Paris–Algiers", es: "Vuelo ida y vuelta París–Argel", de: "Hin- und Rückflug Paris–Algier" }, amount: "200–400 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)", es: "Alojamiento (12 noches)", de: "Unterkunft (12 Nächte)" }, amount: "350–600 €" },
            { label: { fr: "Transports (bus, train, vol intérieur)", en: "Transport (bus, train, domestic flight)", es: "Transportes (autobús, tren, vuelo interno)", de: "Transport (Bus, Bahn, Inlandsflug)" }, amount: "200–400 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "150–300 €" },
            { label: { fr: "Guides & excursions nord", en: "Guides & northern excursions", es: "Guías y excursiones en el norte", de: "Reiseführer und Ausflüge für den Norden" }, amount: "150–300 €" },
          ],
        },
        {
          type: { fr: "Confort + Sahara", en: "Comfort + Sahara", es: "Confort + Sahara", de: "Komfort + Sahara" },
          color: "#3b82f6",
          total: "3 000 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Alger", en: "Round-trip flight Paris–Algiers", es: "Vuelo ida y vuelta París–Argel", de: "Hin- und Rückflug Paris–Algier" }, amount: "250–450 €" },
            { label: { fr: "Hébergement (7 nuits nord)", en: "Accommodation (7 nights, north)", es: "Alojamiento (7 noches, norte)", de: "Unterkunft (7 Nächte im Norden)" }, amount: "500–800 €" },
            { label: { fr: "Circuit Tassili (5j, agence)", en: "Tassili tour (5 days, agency)", es: "Circuito por el Tassili (5d, agencia)", de: "Tassili-Rundreise (5 Tage, Agentur)" }, amount: "800–1 500 €" },
            { label: { fr: "Vols intérieurs Alger–Djanet", en: "Domestic flights Algiers–Djanet", es: "Vuelos internos Argel–Djanet", de: "Inlandsflüge Algier–Djanet" }, amount: "200–400 €" },
            { label: { fr: "Nourriture & guides", en: "Food & guides", es: "Comida y guías", de: "Essen und Reiseführer" }, amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde París", de: "Flug ab Paris" },  value: { fr: "~2h30 direct (Air Algérie, Air France, Transavia, Vueling — nombreuses liaisons)", en: "~2h30 direct (Air Algérie, Air France, Transavia, Vueling — many connections)", es: "~2h30 directo (Air Algérie, Air France, Transavia, Vueling — numerosas conexiones)", de: "ca. 2 Std. 30 Min. direkt (Air Algérie, Air France, Transavia, Vueling – zahlreiche Verbindungen)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" },              value: { fr: "Visa obligatoire pour les Français — ambassade d'Algérie à Paris. Délais variables, parfois refus. Vérifier les conditions actuelles avant de réserver.", en: "Visa mandatory for French citizens — Algerian embassy in Paris. Variable processing times, occasional refusals. Check current conditions before booking.", es: "Visado obligatorio — embajada de Argelia en París. Plazos variables, a veces con denegaciones. Comprobar las condiciones vigentes antes de reservar.", de: "Für französische Staatsbürger ist ein Visum erforderlich – algerische Botschaft in Paris. Variable Fristen, manchmal Ablehnung. Informieren Sie sich vor der Buchung über die aktuellen Konditionen." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" },           value: { fr: "Dinar algérien (DZD). Euros à changer dans les banques. Carte bancaire peu acceptée en dehors des grands hôtels.", en: "Algerian dinar (DZD). Change euros at banks. Credit cards rarely accepted outside major hotels.", es: "Dinar argelino (DZD). Cambiar euros en los bancos. Las tarjetas bancarias se aceptan poco fuera de los grandes hoteles.", de: "Algerischer Dinar (DZD). Euro in Banken wechseln. Bankkarten werden außerhalb großer Hotels nicht allgemein akzeptiert." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" },            value: { fr: "Arabe (officiel) + Tamazight. Français très largement parlé et compris — communication facile.", en: "Arabic (official) + Tamazight. French is very widely spoken and understood — easy to communicate.", es: "Árabe (oficial) + tamazight. El francés se habla y entiende ampliamente: comunicación fácil.", de: "Arabisch (offiziell) + Tamazight. Französisch wird sehr gut gesprochen und verstanden – einfache Verständigung." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" },  value: { fr: "Type C/F (européen) — 230V.", en: "Type C/F (European) — 230V.", es: "Tipo C/F (europeo) — 230V.", de: "Typ C/F (europäisch) – 230 V." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" },             value: { fr: "Pas de vaccin obligatoire. Antipaludéen non nécessaire. Précautions alimentaires habituelles.", en: "No mandatory vaccination. Anti-malarial not needed. Usual food precautions apply.", es: "Sin vacunas obligatorias. No es necesario antipalúdico. Precauciones alimentarias habituales.", de: "Keine Impfpflicht. Antimalariamittel nicht notwendig. Übliche Vorsichtsmaßnahmen bei der Ernährung." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" },    value: { fr: "Non potable dans la plupart des régions — eau en bouteille recommandée.", en: "Not drinkable in most regions — bottled water recommended.", es: "No potable en la mayoría de las regiones: se recomienda agua embotellada.", de: "In den meisten Gegenden nicht trinkbar – Wasser in Flaschen wird empfohlen." } },
    { icon: "📷", label: { fr: "Photographie", en: "Photography", es: "Fotografía", de: "Fotografie" },      value: { fr: "Éviter de photographier bâtiments officiels, militaires, police, frontières. Demander l'autorisation pour les personnes.", en: "Avoid photographing official buildings, military, police, or border areas. Ask permission before photographing people.", es: "Evitar fotografiar edificios oficiales, instalaciones militares, policía y fronteras. Pedir permiso para fotografiar a personas.", de: "Vermeiden Sie das Fotografieren von offiziellen Gebäuden, Militärgebäuden, Polizeigebäuden und Grenzen. Bitten Sie um Erlaubnis für Personen." } },
  ],
};
