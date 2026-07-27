export const IRAQ = {
  code: "IRQ",
  numericId: 368,
  name: { fr: "Irak", en: "Iraq", es: "Irak", de: "Irak" },
  emoji: "🇮🇶",
  capital: { fr: "Bagdad", en: "Baghdad", es: "Bagdad", de: "Bagdad" },
  language: { fr: "Arabe, Kurde", en: "Arabic, Kurdish", es: "Árabe, kurdo", de: "Arabisch, Kurdisch" },
  currency: { fr: "Dinar irakien (IQD)", en: "Iraqi dinar (IQD)", es: "Dinar iraquí (IQD)", de: "Irakischer Dinar (IQD)" },
  timezone: "UTC+3",
  filter: { budgetMin: 45, budgetMid: 90, tripMin: 950, tripMid: 2000 },
  criteria: {
    unesco: 3,
    nature: 1,
    randonnee: 1,
    gastronomie: 1,
    architecture: 2,
    desert: 2,
    safari: 0,
    ski: 0,
    ville: 1,
    plage: 0,
    plongee: 0,
  },
  description: {
    fr: "L'Irak est le berceau de la civilisation mésopotamienne, la « Terre entre les deux fleuves » où l'humanité a inventé l'écriture, les premières villes et les premières lois. Ses sites archéologiques — Babylone, Ur, Ninive — témoignent de millénaires d'histoire que peu de pays au monde peuvent égaler. Après des décennies de conflits, le pays amorce une timide ouverture touristique, notamment dans la région autonome du Kurdistan irakien, considérée comme relativement sûre.", en: "Iraq is the cradle of Mesopotamian civilisation, the 'land between the two rivers' where humanity invented writing, the first cities and the first laws. Its archaeological sites — Babylon, Ur and Nineveh — bear witness to millennia of history matched by very few countries. After decades of conflict, the country is cautiously opening to tourism, especially in the autonomous Kurdistan Region, which is generally considered the safest part of Iraq for visitors.", es: "Irak es la cuna de la civilización mesopotámica, la «tierra entre los dos ríos» donde la humanidad inventó la escritura, las primeras ciudades y las primeras leyes. Sus sitios arqueológicos —Babilonia, Ur, Nínive— dan testimonio de milenios de historia que muy pocos países pueden igualar. Tras décadas de conflictos, el país inicia una tímida apertura turística, especialmente en la región autónoma del Kurdistán iraquí, considerada relativamente segura.", de: "Der Irak ist die Wiege der mesopotamischen Zivilisation, das „Land zwischen den beiden Flüssen“, in dem die Menschheit die Schrift, die ersten Städte und die ersten Gesetze erfand. Seine archäologischen Stätten – Babylon, Ur, Ninive – zeugen von einer jahrtausendealten Geschichte, mit der nur wenige Länder der Welt mithalten können. Nach jahrzehntelangen Konflikten beginnt das Land mit einer zaghaften Öffnung des Tourismus, insbesondere in der autonomen Region Irakisch-Kurdistan, die als relativ sicher gilt.",
  },

  bestPeriods: [
    {
      months: { fr: "Mar – Mai", en: "Mar – May", es: "Mar – Mayo", de: "März – Mai" },
      label: { fr: "Printemps — idéal", en: "Spring — ideal", es: "Primavera — ideal", de: "Frühling – ideal" },
      color: "#22c55e",
      description: {
        fr: "Températures agréables (20–30 °C), végétation verdoyante dans le Kurdistan, idéal pour les sites archéologiques.", en: "Pleasant temperatures (20–30°C), green countryside in Kurdistan and ideal conditions for archaeological sites.", es: "Temperaturas agradables (20–30 °C), vegetación verde en el Kurdistán, ideal para los sitios arqueológicos.", de: "Angenehme Temperaturen (20–30°C), grüne Vegetation in Kurdistan, ideal für archäologische Stätten.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Oct – Nov", en: "Oct – Nov", es: "Oct – Nov", de: "Okt. – Nov" },
      label: { fr: "Automne — très bien", en: "Autumn — very good", es: "Otoño — muy bien", de: "Herbst – sehr gut" },
      color: "#22c55e",
      description: {
        fr: "Chaleur retombée, belles lumières dorées sur les ruines, ambiance calme.", en: "The heat has eased, golden light falls on the ruins, and the atmosphere is calm.", es: "El calor ha bajado, hermosa luz dorada sobre las ruinas, ambiente tranquilo.", de: "Die Hitze ließ nach, wunderschöne goldene Lichter auf den Ruinen, ruhige Atmosphäre.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Déc – Fév", en: "Dec – Feb", es: "Dic – Feb", de: "Dez. – Feb" },
      label: { fr: "Hiver — correct", en: "Winter — acceptable", es: "Invierno — aceptable", de: "Winter – richtig" },
      color: "#f59e0b",
      description: {
        fr: "Frais à Bagdad, froid et neigeux dans le Kurdistan. Quelques pluies mais peu de touristes.", en: "Cool in Baghdad, cold and snowy in Kurdistan. A few showers, but relatively few tourists.", es: "Fresco en Bagdad, frío y nevado en el Kurdistán. Algunas lluvias pero pocos turistas.", de: "Kühl in Bagdad, kalt und schneereich in Kurdistan. Etwas Regen, aber wenige Touristen.",
      },
      icon: "⛅",
    },
    {
      months: { fr: "Jun – Sep", en: "Jun – Sep", es: "Jun – Sept", de: "Juni – Sept" },
      label: { fr: "Été — à éviter", en: "Summer — best avoided", es: "Verano — a evitar", de: "Sommer – zu vermeiden" },
      color: "#ef4444",
      description: {
        fr: "Chaleur extrême (40–50 °C à Bagdad). Conditions de voyage très difficiles.", en: "Extreme heat (40–50°C in Baghdad). Travel conditions are extremely difficult.", es: "Calor extremo (40–50 °C en Bagdad). Condiciones de viaje muy difíciles.", de: "Extreme Hitze (40–50°C in Bagdad). Sehr schwierige Reisebedingungen.",
      },
      icon: "🌡️",
    },
  ],

  weatherCities: [
    {
      id: "baghdad",
      name: "Bagdad",
      region: { fr: "Centre", en: "Central Iraq", es: "Centro", de: "Center" },
      data: [
        { month: "Jan", temp: 10, rain: 25, icon: "⛅" },
        { month: "Fév", temp: 13, rain: 22, icon: "⛅" },
        { month: "Mar", temp: 18, rain: 20, icon: "☀️" },
        { month: "Avr", temp: 24, rain: 20, icon: "☀️" },
        { month: "Mai", temp: 31, rain: 5, icon: "⛅" },
        { month: "Jun", temp: 36, rain: 0, icon: "🌡️" },
        { month: "Jul", temp: 40, rain: 0, icon: "🌡️" },
        { month: "Aoû", temp: 39, rain: 0, icon: "🌡️" },
        { month: "Sep", temp: 34, rain: 0, icon: "🌡️" },
        { month: "Oct", temp: 26, rain: 5, icon: "☀️" },
        { month: "Nov", temp: 17, rain: 20, icon: "☀️" },
        { month: "Déc", temp: 11, rain: 25, icon: "⛅" },
      ],
    },
    {
      id: "erbil",
      name: "Erbil",
      region: { fr: "Kurdistan", en: "Kurdistan Region", es: "Región del Kurdistán", de: "Kurdistan" },
      data: [
        { month: "Jan", temp: 5, rain: 80, icon: "❄️" },
        { month: "Fév", temp: 7, rain: 70, icon: "⛅" },
        { month: "Mar", temp: 12, rain: 65, icon: "⛅" },
        { month: "Avr", temp: 18, rain: 55, icon: "☀️" },
        { month: "Mai", temp: 25, rain: 25, icon: "☀️" },
        { month: "Jun", temp: 33, rain: 2, icon: "🌡️" },
        { month: "Jul", temp: 38, rain: 0, icon: "🌡️" },
        { month: "Aoû", temp: 37, rain: 0, icon: "🌡️" },
        { month: "Sep", temp: 31, rain: 2, icon: "⛅" },
        { month: "Oct", temp: 22, rain: 20, icon: "☀️" },
        { month: "Nov", temp: 13, rain: 50, icon: "⛅" },
        { month: "Déc", temp: 7, rain: 75, icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Erbil (Hawler)", en: "Erbil (Hawler)", es: "Erbil (Hawler)", de: "Erbil (Hawler)" },
      region: { fr: "Kurdistan irakien", en: "Iraqi Kurdistan", es: "Kurdistán iraquí", de: "Irakisch-Kurdistan" },
      description: {
        fr: "Erbil est la capitale de la région autonome du Kurdistan irakien et l'une des villes continuellement habitées les plus anciennes du monde. Sa citadelle, perchée sur un tell artificiel de 30 mètres de haut et inscrite au patrimoine mondial de l'UNESCO, surplombe une ville moderne et dynamique aux bazars animés et aux restaurants animés. Le Kurdistan irakien est la destination la plus accessible et la plus sûre d'Irak pour les voyageurs étrangers.", en: "Erbil is the capital of the autonomous Kurdistan Region and one of the oldest continuously inhabited cities in the world. Its citadel, perched on an artificial mound 30 metres high and listed as a UNESCO World Heritage Site, overlooks a modern, energetic city with lively bazaars and restaurants. For foreign visitors, Iraqi Kurdistan is the most accessible and safest part of Iraq.", es: "Erbil es la capital de la región autónoma del Kurdistán iraquí y una de las ciudades habitadas ininterrumpidamente más antiguas del mundo. Su ciudadela, encaramada en un montículo artificial de 30 metros de altura y declarada Patrimonio de la Humanidad UNESCO, domina una ciudad moderna y dinámica de bazares y restaurantes animados. El Kurdistán iraquí es el destino más accesible y seguro de Irak para viajeros extranjeros.", de: "Erbil ist die Hauptstadt der autonomen Region Irakisch-Kurdistan und eine der ältesten durchgehend bewohnten Städte der Welt. Die Zitadelle, die auf einem 30 Meter hohen künstlichen Hügel thront und zum UNESCO-Weltkulturerbe gehört, überblickt eine moderne und dynamische Stadt mit geschäftigen Basaren und lebhaften Restaurants. Irakisch-Kurdistan ist für ausländische Reisende das am besten zugängliche und sicherste Reiseziel im Irak.",
      },
      wikipedia: "Erbil",
      tags: ["UNESCO", "Histoire", "Culture", "Ville", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Citadelle d'Erbil — forteresse millénaire classée à l'UNESCO", en: "Erbil Citadel — a UNESCO-listed millennium-old fortress", es: "Ciudadela de Erbil — fortaleza milenaria Patrimonio UNESCO", de: "Zitadelle von Erbil – tausend Jahre alte Festung, die zum UNESCO-Weltkulturerbe gehört" }, wikipedia: "File:Citadel (old city) of Hewlêr (Erbil).jpg" },
        { name: { fr: "Grand Bazar d'Erbil — marché couvert traditionnel", en: "Erbil Grand Bazaar — a traditional covered market", es: "Gran Bazar de Erbil — mercado cubierto tradicional", de: "Großer Basar von Erbil – traditionelle Markthalle" }, wikipedia: "File:Kurdistan - Erbil - Qaysari Market.jpg" },
        { name: { fr: "Musée de la Civilisation du Kurdistan — archéologie régionale", en: "Kurdish Civilisation Museum — regional archaeology", es: "Museo de la Civilización del Kurdistán — arqueología regional", de: "Museum der Zivilisation Kurdistans – regionale Archäologie" }, wikipedia: "File:250._Erbil_Stones_and_Gems_Museum._Interior_of_Erbil_Citadel,_Hawler,_Erbil_Governorate,_Iraq.jpg" },
        { name: { fr: "Parc Sami Abdulrahman — grande promenade urbaine", en: "Sami Abdulrahman Park — a large urban promenade", es: "Parque Sami Abdulrahman — gran paseo urbano", de: "Sami Abdulrahman Park – toller Stadtspaziergang" }, wikipedia: "File:Parki_Sami_Abdulrahman_in_Erbil,_capital_of_the_Kurdistan_Region_of_Iraq.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Bagdad", en: "Baghdad", es: "Bagdad", de: "Bagdad" },
      region: { fr: "Centre", en: "Central Iraq", es: "Centro", de: "Center" },
      description: {
        fr: "Bagdad, fondée en 762 par le calife abbasside al-Mansur, fut pendant des siècles la capitale intellectuelle et culturelle du monde islamique, hébergeant la célèbre Maison de la Sagesse. La ville moderne, marquée par des décennies de conflits, conserve des trésors remarquables comme le Musée national irakien et la rue al-Mutanabbi, symbole de la vie intellectuelle irakienne. La situation sécuritaire s'est améliorée depuis 2017 mais reste fragile.", en: "Founded in 762 by the Abbasid caliph al-Mansur, Baghdad was for centuries the intellectual and cultural capital of the Islamic world, home to the famed House of Wisdom. The modern city, shaped by decades of conflict, still preserves remarkable treasures such as the Iraq National Museum and al-Mutanabbi Street, a symbol of Iraq's intellectual life. Security has improved since 2017, but the situation remains fragile.", es: "Bagdad, fundada en 762 por el califa abasí al-Mansur, fue durante siglos la capital intelectual y cultural del mundo islámico, sede de la célebre Casa de la Sabiduría. La ciudad moderna, marcada por décadas de conflictos, conserva tesoros notables como el Museo Nacional de Irak y la calle al-Mutanabbi, símbolo de la vida intelectual iraquí. La situación de seguridad ha mejorado desde 2017 pero sigue siendo frágil.", de: "Bagdad, 762 vom abbasidischen Kalifen al-Mansur gegründet, war jahrhundertelang die intellektuelle und kulturelle Hauptstadt der islamischen Welt und beherbergte das berühmte Haus der Weisheit. Die moderne Stadt, die von jahrzehntelangen Konflikten geprägt ist, bewahrt bemerkenswerte Schätze wie das Irakische Nationalmuseum und die al-Mutanabbi-Straße, Symbol des irakischen intellektuellen Lebens. Die Sicherheitslage hat sich seit 2017 verbessert, bleibt jedoch fragil.",
      },
      wikipedia: "Baghdad",
      tags: ["Histoire", "Musées", "Culture", "Ville", "Gastronomie"],
      mustSee: [
        { name: { fr: "Musée national d'Irak — l'une des plus grandes collections d'antiquités mésopotamiennes", en: "Iraq National Museum — one of the world's largest Mesopotamian antiquities collections", es: "Museo Nacional de Irak — una de las mayores colecciones de antigüedades mesopotámicas", de: "Nationalmuseum des Irak – eine der größten Sammlungen mesopotamischer Antiquitäten" }, wikipedia: "File:National Museum Iraq (cropped).jpg" },
        { name: { fr: "Rue al-Mutanabbi — artère des libraires et intellectuels", en: "Al-Mutanabbi Street — Baghdad's street of booksellers and intellectuals", es: "Calle al-Mutanabbi — arteria de libreros e intelectuales", de: "Al-Mutanabbi-Straße – Verkehrsader der Buchhändler und Intellektuellen" }, wikipedia: "File:Al-Mutanabbi Street Gate.png" },
        { name: { fr: "Mosquée al-Kadhimiya — sanctuaire chiite du VIIIe imam", en: "Al-Kadhimiya Mosque — Shiite shrine of the eighth imam", es: "Mezquita de al-Kadhimiya — santuario chiita del octavo imán", de: "Al-Kadhimiya-Moschee – schiitischer Schrein des 8. Imams" }, wikipedia: "Ø§Ù„Ø¹ØªØ¨Ø© Ø§Ù„ÙƒØ§Ø¸Ù…ÙŠØ© (4).jpg" },
        { name: { fr: "Marché al-Shorja — grand marché populaire de Bagdad", en: "Al-Shorja market — Baghdad's great popular market", es: "Mercado de al-Shorja — gran mercado popular de Bagdad", de: "Al-Shorja-Markt – großer beliebter Markt in Bagdad" }, wikipedia: "File:Shorja samawa.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Babylone", en: "Babylon", es: "Babilonia", de: "Babylon" },
      region: { fr: "Centre-Sud", en: "South-central Iraq", es: "Centro-sur", de: "Süd-Zentral" },
      description: {
        fr: "Babylone, l'une des cités les plus légendaires de l'Antiquité, fut la capitale du premier empire babylonien et le foyer du célèbre Code d'Hammourabi. Bien que le site ait été partiellement reconstruit et endommagé, ses ruines imposantes — dont les restes de la porte d'Ishtar et des vestiges du palais de Nabuchodonosor — restent un pèlerinage incontournable pour les amateurs d'histoire. Le site est désormais inscrit au patrimoine mondial de l'UNESCO.", en: "Babylon, one of antiquity's most legendary cities, was the capital of the First Babylonian Empire and the home of Hammurabi's famous code. Although the site has been partly reconstructed and damaged, its imposing ruins — including remnants of the Ishtar Gate and the remains of Nebuchadnezzar's palace — remain a must-see pilgrimage for history lovers. The site is now a UNESCO World Heritage Site.", es: "Babilonia, una de las ciudades más legendarias de la Antigüedad, fue la capital del primer imperio babilonio y sede del célebre Código de Hammurabi. Aunque el sitio ha sido parcialmente reconstruido y dañado, sus imponentes ruinas —incluidos los restos de la Puerta de Ishtar y vestigios del palacio de Nabucodonosor— siguen siendo una peregrinación imprescindible para los amantes de la historia. El sitio es ahora Patrimonio de la Humanidad UNESCO.", de: "Babylon, eine der legendärsten Städte der Antike, war die Hauptstadt des ersten babylonischen Reiches und die Heimat des berühmten Kodex von Hammurabi. Obwohl die Stätte teilweise wieder aufgebaut und beschädigt wurde, sind ihre imposanten Ruinen – darunter die Überreste des Ischtar-Tors und Überreste des Palastes Nebukadnezars – nach wie vor ein Muss für Geschichtsinteressierte. Die Stätte ist jetzt als UNESCO-Weltkulturerbe gelistet.",
      },
      wikipedia: "Babylon",
      tags: ["UNESCO", "Histoire", "Architecture", "Désert"],
      mustSee: [
        { name: { fr: "Porte d'Ishtar — reconstruction de la célèbre porte ornée de céramiques bleues", en: "Ishtar Gate — a reconstruction of the famous blue-glazed gate", es: "Puerta de Ishtar — reconstrucción de la célebre puerta de cerámica azul", de: "Ischtar-Tor – Rekonstruktion des berühmten Tors, verziert mit blauer Keramik" }, wikipedia: "Ishtar_Gate" },
        { name: { fr: "Palais de Nabuchodonosor — ruines du palais royal babylonien", en: "Nebuchadnezzar's palace — ruins of the Babylonian royal palace", es: "Palacio de Nabucodonosor — ruinas del palacio real babilonio", de: "Palast von Nebukadnezar – Ruinen des babylonischen Königspalastes" }, wikipedia: "Nebuchadnezzar_II" },
        { name: { fr: "Musée du site de Babylone — artefacts et maquettes", en: "Babylon site museum — artefacts and scale models", es: "Museo del sitio de Babilonia — artefactos y maquetas", de: "Babylon Site Museum – Artefakte und Modelle" }, wikipedia: "File:Bible-Lands-Museum-Jerusalem-in-Babylon-32251.jpg" },
        { name: { fr: "Processional Way — voie sacrée de la cité antique", en: "Processional Way — the sacred road of the ancient city", es: "Vía Procesional — camino sagrado de la ciudad antigua", de: "Prozessionsweg – heiliger Weg der antiken Stadt" }, wikipedia: "File:View down the processional way at Eleusis.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Ur", en: "Ur", es: "Ur", de: "Ur" },
      region: { fr: "Sud (Dhi Qar)", en: "South (Dhi Qar)", es: "Sur (Dhi Qar)", de: "Süden (Dhi Qar)" },
      description: {
        fr: "Ur est l'une des plus anciennes et des plus importantes cités sumériennes, mentionnée dans la Bible comme la patrie d'Abraham. Son gigantesque ziggurat, érigé vers 2100 av. J.-C. et remarquablement bien conservé, est l'une des structures les plus impressionnantes du Proche-Orient antique. Le site royal d'Ur, avec ses tombes royales et ses trésors exposés au British Museum, a révolutionné la compréhension de la civilisation sumérienne.", en: "Ur is one of the oldest and most important Sumerian cities, mentioned in the Bible as Abraham's birthplace. Its giant ziggurat, built around 2100 BCE and remarkably well preserved, is one of the most impressive structures in the ancient Near East. The Royal Cemetery of Ur, with its royal tombs and treasures now housed in the British Museum, transformed our understanding of Sumerian civilisation.", es: "Ur es una de las ciudades sumerias más antiguas e importantes, mencionada en la Biblia como la patria de Abraham. Su gigantesco zigurat, erigido hacia el 2100 a. C. y notablemente bien conservado, es una de las estructuras más impresionantes del antiguo Cercano Oriente. El cementerio real de Ur, con sus tumbas reales y tesoros expuestos en el Museo Británico, revolucionó la comprensión de la civilización sumeria.", de: "Ur ist eine der ältesten und bedeutendsten sumerischen Städte und wird in der Bibel als Heimat Abrahams erwähnt. Die gigantische Zikkurat wurde um 2100 v. Chr. errichtet. BC und bemerkenswert gut erhalten ist eines der eindrucksvollsten Bauwerke des antiken Nahen Ostens. Die königliche Stätte Ur mit ihren Königsgräbern und Schätzen, die im British Museum ausgestellt sind, revolutionierte das Verständnis der sumerischen Zivilisation.",
      },
      wikipedia: "File:Ur-Nassiriyah.jpg",
      tags: ["Histoire", "Spiritualité", "Désert"],
      mustSee: [
        { name: { fr: "Ziggurat d'Ur — temple à degrés sumérien du IIIe millénaire av. J.-C.", en: "Ziggurat of Ur — a Sumerian stepped temple from the 3rd millennium BCE", es: "Zigurat de Ur — templo escalonado sumerio del III milenio a. C.", de: "Zikkurat von Ur – sumerischer Stufentempel aus dem 3. Jahrtausend v. Chr. ANZEIGE" }, wikipedia: "File:Ancient ziggurat at Ali Air Base Iraq 2005.jpg" },
        { name: { fr: "Tombes royales d'Ur — nécropole royale sumérienne", en: "Royal Tombs of Ur — the Sumerian royal necropolis", es: "Tumbas reales de Ur — necrópolis real sumeria", de: "Königsgräber von Ur – sumerische Königsnekropole" }, wikipedia: "File:Ziggurat of Ur.jpg" },
        { name: { fr: "Maison d'Abraham — site traditionnel de naissance du patriarche", en: "House of Abraham — the traditional birthplace of the patriarch", es: "Casa de Abraham — sitio tradicional del nacimiento del patriarca", de: "Haus Abrahams – traditioneller Geburtsort des Patriarchen" }, wikipedia: "File:Maison d'abraham.jpg" },
        { name: { fr: "Musée de Nasiriyah — collections archéologiques locales", en: "Nasiriyah Museum — local archaeological collections", es: "Museo de Nasiriya — colecciones arqueológicas locales", de: "Nasiriyah Museum – lokale archäologische Sammlungen" }, wikipedia: "Nasiriyah" },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "L'Irak est une destination peu onéreuse pour les voyageurs, en particulier dans le Kurdistan irakien qui dispose d'une infrastructure touristique en développement. Les prix sont généralement bas mais varient selon les régions et les prestataires.", en: "Iraq is a fairly inexpensive destination for travellers, especially in Iraqi Kurdistan, where the tourism infrastructure is still developing. Prices are generally low, but they vary by region and provider.", es: "Irak es un destino bastante económico para los viajeros, especialmente en el Kurdistán iraquí, que cuenta con una infraestructura turística en desarrollo. Los precios son generalmente bajos pero varían según la región y el proveedor.", de: "Der Irak ist ein günstiges Reiseziel für Reisende, insbesondere im irakischen Kurdistan, das über eine sich entwickelnde Tourismusinfrastruktur verfügt. Die Preise sind im Allgemeinen niedrig, variieren jedoch je nach Region und Anbieter.",
    },
    currency: "IQD",
    exchangeRate: "1€ ≈ 1 450 IQD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Auberge ou hôtel simple", en: "Hostel or simple hotel", es: "Albergue u hotel sencillo", de: "Einfache Herberge oder Hotel" }, price: "10–20 €", detail: { fr: "Chambre basique, souvent avec clim", en: "Basic room, often with air conditioning", es: "Habitación básica, a menudo con aire acondicionado", de: "Einfaches Zimmer, oft mit Klimaanlage" } },
          { label: { fr: "Hôtel mid-range", en: "Mid-range hotel", es: "Hotel de gama media", de: "Mittelklassehotel" }, price: "30–60 €", detail: { fr: "Confort correct, petit-déjeuner inclus", en: "Decent comfort, breakfast included", es: "Confort correcto, desayuno incluido", de: "Richtiger Komfort, Frühstück inklusive" } },
          { label: { fr: "Hôtel de charme / boutique", en: "Boutique hotel", es: "Hotel con encanto / boutique", de: "Boutique/Boutique-Hotel" }, price: "70–120 €", detail: { fr: "Meilleurs hôtels d'Erbil ou Bagdad", en: "The better hotels in Erbil or Baghdad", es: "Los mejores hoteles de Erbil o Bagdad", de: "Die besten Hotels in Erbil oder Bagdad" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Restaurant local", en: "Local restaurant", es: "Restaurante local", de: "Lokales Restaurant" }, price: "3–7 €", detail: { fr: "Kebab, tashreeb ou dolma", en: "Kebab, tashreeb or dolma", es: "Kebab, tashreeb o dolma", de: "Kebab, Taschreeb oder Dolma" } },
          { label: { fr: "Restaurant mid-range", en: "Mid-range restaurant", es: "Restaurante de gama media", de: "Mittelklasserestaurant" }, price: "10–20 €", detail: { fr: "Grillades, mezze variés", en: "Grilled meats and assorted mezze", es: "Carnes a la parrilla, mezze variados", de: "Gegrilltes Fleisch, verschiedene Mezze" } },
          { label: { fr: "Street food", en: "Street food", es: "Comida callejera", de: "Streetfood" }, price: "1–3 €", detail: { fr: "Shawarma, falafel, samoun bread", en: "Shawarma, falafel and samoon bread", es: "Shawarma, falafel, pan samoon", de: "Shawarma, Falafel, Samoun-Brot" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bus ou minibus interurbain", en: "Intercity bus or minibus", es: "Autobús o minibús interurbano", de: "Überlandbus oder Kleinbus" }, price: "3–10 €", detail: { fr: "Entre grandes villes du Kurdistan", en: "Between major Kurdish cities", es: "Entre las grandes ciudades del Kurdistán", de: "Zwischen den großen Städten Kurdistans" } },
          { label: { fr: "Taxi en ville", en: "City taxi", es: "Taxi en la ciudad", de: "Taxi in der Stadt" }, price: "2–5 €", detail: { fr: "Courte distance en ville", en: "Short urban rides", es: "Trayectos cortos en la ciudad", de: "Kurze Entfernung zur Stadt" } },
          { label: { fr: "Vol domestique", en: "Domestic flight", es: "Vuelo interno", de: "Inlandsflug" }, price: "50–100 €", detail: { fr: "Bagdad–Erbil ou Bagdad–Bassora", en: "Baghdad–Erbil or Baghdad–Basra", es: "Bagdad–Erbil o Bagdad–Basora", de: "Bagdad–Erbil oder Bagdad–Basra" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Entrée sites archéologiques", en: "Archaeological site entry", es: "Entrada a sitios arqueológicos", de: "Eintritt zu archäologischen Stätten" }, price: "2–5 €", detail: { fr: "Babylone, Ur, citadelle d'Erbil", en: "Babylon, Ur and Erbil Citadel", es: "Babilonia, Ur, ciudadela de Erbil", de: "Babylon, Ur, Zitadelle von Erbil" } },
          { label: { fr: "Guide local", en: "Local guide", es: "Guía local", de: "Lokaler Führer" }, price: "40–70 €/j", detail: { fr: "Anglophone ou francophone, indispensable", en: "English- or French-speaking, essential", es: "Angloparlante o francófono, indispensable", de: "Englisch- oder Französischkenntnisse sind unerlässlich" } },
          { label: { fr: "Excursion organisée", en: "Organised excursion", es: "Excursión organizada", de: "Organisierter Ausflug" }, price: "50–100 €", detail: { fr: "Journée complète avec transport", en: "Full-day trip with transport included", es: "Día completo con transporte incluido", de: "Ganzer Tag mit Transport" } },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
        daily: "35–55 €/j",
        desc: { fr: "Hébergement simple, repas locaux, transports partagés", en: "Simple accommodation, local food and shared transport", es: "Alojamiento sencillo, comidas locales, transporte compartido", de: "Einfache Unterkunft, lokale Mahlzeiten, gemeinsamer Transport" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
        daily: "80–130 €/j",
        desc: { fr: "Bon hôtel, restaurants corrects, excursions avec guide", en: "Good hotel, decent restaurants and guided excursions", es: "Buen hotel, restaurantes correctos, excursiones con guía", de: "Gutes Hotel, gute Restaurants, Ausflüge mit Führer" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "12 jours", en: "12 days", es: "12 días", de: "12 Tage" },
      route: {
        fr: "Erbil → Sulaymaniyah → Bagdad → Babylone → Ur", en: "Erbil → Sulaymaniyah → Baghdad → Babylon → Ur", es: "Erbil → Sulaimaniya → Bagdad → Babilonia → Ur", de: "Erbil → Sulaimaniyya → Bagdad → Babylon → Ur",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "950 – 1 300 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Erbil", en: "Return flight Paris–Erbil", es: "Vuelo ida y vuelta Madrid–Erbil", de: "Hin- und Rückflug Paris–Erbil" }, amount: "350–500 €" },
            { label: { fr: "Hébergement (11 nuits)", en: "Accommodation (11 nights)", es: "Alojamiento (11 noches)", de: "Unterkunft (11 Nächte)" }, amount: "130–200 €" },
            { label: { fr: "Transports locaux + vols intérieurs", en: "Local transport + domestic flights", es: "Transporte local + vuelos internos", de: "Lokaler Transport + Inlandsflüge" }, amount: "100–150 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "200–280 €" },
            { label: { fr: "Activités + guides", en: "Activities + guides", es: "Actividades + guías", de: "Aktivitäten + Führer" }, amount: "170–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "1 800 – 2 400 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Erbil", en: "Return flight Paris–Erbil", es: "Vuelo ida y vuelta Madrid–Erbil", de: "Hin- und Rückflug Paris–Erbil" }, amount: "400–600 €" },
            { label: { fr: "Hébergement (11 nuits)", en: "Accommodation (11 nights)", es: "Alojamiento (11 noches)", de: "Unterkunft (11 Nächte)" }, amount: "500–700 €" },
            { label: { fr: "Transports locaux + vols intérieurs", en: "Local transport + domestic flights", es: "Transporte local + vuelos internos", de: "Lokaler Transport + Inlandsflüge" }, amount: "200–300 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "400–550 €" },
            { label: { fr: "Activités + guides", en: "Activities + guides", es: "Actividades + guías", de: "Aktivitäten + Führer" }, amount: "300–450 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "Vols vers Erbil ou Bagdad via Istanbul, Dubaï ou Amman, 6–10h de trajet", en: "Flights to Erbil or Baghdad via Istanbul, Dubai or Amman, typically 6–10 hours total", es: "Vuelos hacia Erbil o Bagdad vía Estambul, Dubái o Ammán, 6–10h de trayecto", de: "Flüge nach Erbil oder Bagdad über Istanbul, Dubai oder Amman, 6–10 Stunden Fahrt" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Visa à l'arrivée disponible pour les Français (Kurdistan : e-visa) — situation variable selon les régions", en: "Visa on arrival is available for French travellers in some cases (Kurdistan: e-visa) — rules vary by region", es: "Visado a la llegada disponible para ciudadanos de la UE (Kurdistán: e-visa) — situación variable según la región", de: "Für Franzosen ist ein Visum bei der Ankunft verfügbar (Kurdistan: E-Visum) – die Situation variiert je nach Region" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Dinar irakien (IQD) — dollar américain largement accepté dans le Kurdistan", en: "Iraqi dinar (IQD) — US dollars are widely accepted in Kurdistan", es: "Dinar iraquí (IQD) — el dólar estadounidense se acepta ampliamente en el Kurdistán", de: "Irakischer Dinar (IQD) – US-Dollar, der in Kurdistan weithin akzeptiert wird" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Arabe et kurde — anglais compris dans le secteur touristique du Kurdistan", en: "Arabic and Kurdish — English is understood in Kurdistan's tourist sector", es: "Árabe y kurdo — el inglés se entiende en el sector turístico del Kurdistán", de: "Arabisch und Kurdisch – Englisch im Kurdistan-Tourismussektor enthalten" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type D/G (230V) — adaptateur universel recommandé", en: "Type D/G (230V) — a universal adapter is recommended", es: "Tipo D/G (230V) — se recomienda adaptador universal", de: "Typ D/G (230 V) – Universaladapter empfohlen" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Vaccins hépatite A/B, typhoïde, fièvre typhoïde recommandés. Eau du robinet non potable.", en: "Hepatitis A/B and typhoid vaccines are recommended. Tap water is not drinkable.", es: "Se recomiendan vacunas de hepatitis A/B y tifoidea. Agua del grifo no potable.", de: "Impfungen gegen Hepatitis A/B, Typhus und Typhus werden empfohlen. Unsicheres Leitungswasser." } },
    { icon: "⚠️", label: { fr: "Sécurité", en: "Safety", es: "Seguridad", de: "Sicherheit" }, value: { fr: "Kurdistan irakien : déconseillé sauf raison impérative (zone plus stable). Bagdad et centre : formellement déconseillé aux touristes. Consulter impérativement les alertes du MAE.", en: "Iraqi Kurdistan: travel discouraged unless absolutely necessary, although it is the more stable area. Baghdad and the centre: formally advised against for tourists. Check official travel advisories before planning anything.", es: "Kurdistán iraquí: desaconsejado salvo razón imperiosa (zona más estable). Bagdad y el centro: formalmente desaconsejado para turistas. Consultar imperativamente las alertas oficiales de viaje.", de: "Irakisch-Kurdistan: nicht empfohlen, es sei denn, es gibt einen zwingenden Grund (stabileres Gebiet). Bagdad und Zentrum: Für Touristen grundsätzlich nicht zu empfehlen. Es ist unbedingt erforderlich, die MAE-Warnungen zu konsultieren." } },
    { icon: "🌡️", label: { fr: "Climat", en: "Climate", es: "Clima", de: "Klima" }, value: { fr: "Éviter absolument juin–septembre (chaleurs extrêmes 40–50 °C). Privilégier mars–mai ou octobre–novembre.", en: "Avoid June–September at all costs because of extreme heat (40–50°C). March–May or October–November are much better choices.", es: "Evitar absolutamente junio–septiembre (calores extremos 40–50 °C). Preferir marzo–mayo u octubre–noviembre.", de: "Vermeiden Sie unbedingt die Monate Juni–September (extreme Hitze 40–50 °C). Bevorzugen Sie März–Mai oder Oktober–November." } },
  ],
};
