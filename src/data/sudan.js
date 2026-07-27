export const SUDAN = {
  code: "SDN",
  numericId: 729,
  name: { fr: "Soudan", en: "Sudan", es: "Sudán", de: "Sudan" },
  emoji: "🇸🇩",
  capital: { fr: "Khartoum", en: "Khartoum", es: "Jartum", de: "Khartum" },
  language: { fr: "Arabe, Anglais", en: "Arabic, English", es: "Árabe, Inglés", de: "Arabisch, Englisch" },
  currency: { fr: "Livre soudanaise (SDG)", en: "Sudanese pound (SDG)", es: "Libra sudanesa (SDG)", de: "Sudanesisches Pfund (SDG)" },
  timezone: "UTC+3",
  filter: {
    budgetMin: 35, budgetMid: 70,
    tripMin: 850, tripMid: 1800,
  },
  criteria: {
    unesco: 3,
    nature: 1,
    randonnee: 1,
    gastronomie: 1,
    architecture: 2,
    desert: 3,
    safari: 0,
    ski: 0,
    ville: 1,
    plage: 1,
    plongee: 1,
  },
  description: {
    fr: "Le Soudan possédait l'une des destinations archéologiques les plus extraordinaires du monde : les pyramides nubiennes de Méroé (plus nombreuses qu'en Égypte), les temples de Jebel Barkal et la culture nubienne millénaire. Depuis avril 2023, le pays est plongé dans une guerre civile dévastatrice qui rend tout voyage impossible et constitue l'une des pires crises humanitaires mondiales.", en: "Sudan was home to one of the most extraordinary archaeological destinations in the world: the Nubian pyramids of Meroë (more numerous than in Egypt), the temples of Jebel Barkal and a millennia-old Nubian culture. Since April 2023, the country has been plunged into a devastating civil war that makes travel impossible and constitutes one of the world's worst humanitarian crises.", es: "Sudán albergaba uno de los destinos arqueológicos más extraordinarios del mundo: las pirámides nubias de Meroe (más numerosas que en Egipto), los templos de Jebel Barkal y la milenaria cultura nubia. Desde abril de 2023, el país está sumido en una guerra civil devastadora que hace imposible cualquier viaje y constituye una de las peores crisis humanitarias del mundo.", de: "Der Sudan hatte eines der außergewöhnlichsten archäologischen Reiseziele der Welt: die nubischen Pyramiden von Meroe (zahlreicher als in Ägypten), die Tempel von Jebel Barkal und die tausend Jahre alte nubische Kultur. Seit April 2023 befindet sich das Land in einem verheerenden Bürgerkrieg, der Reisen unmöglich macht und eine der schlimmsten humanitären Krisen weltweit darstellt.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Février", en: "November – February", es: "Noviembre – Febrero", de: "November – Februar" },
      label: { fr: "Saison fraîche (pré-conflit)", en: "Cool season (pre-conflict)", es: "Estación fresca (pre-conflicto)", de: "Kühle Jahreszeit (vor dem Konflikt)" },
      color: "#22c55e",
      description: {
        fr: "Avant le conflit, la seule période vraiment praticable : températures entre 18–32°C, sec, idéal pour les sites archéologiques. Les nuits dans le désert nubien étaient froides et étoilées.", en: "Before the conflict, the only truly practical period: temperatures between 18–32°C, dry, ideal for archaeological sites. Nights in the Nubian desert were cold and starlit.", es: "Antes del conflicto, la única época realmente viable: temperaturas entre 18–32°C, seco, ideal para los sitios arqueológicos. Las noches en el desierto nubio eran frías y estrelladas.", de: "Vor dem Konflikt der einzig wirklich praktikable Zeitraum: Temperaturen zwischen 18–32°C, trocken, ideal für archäologische Stätten. Die Nächte in der nubischen Wüste waren kalt und sternenklar.",
      },
      icon: "🏛️",
    },
    {
      months: { fr: "Mars – Octobre", en: "March – October", es: "Marzo – Octubre", de: "März – Oktober" },
      label: { fr: "Chaleur extrême / pluies (sud)", en: "Extreme heat / rain (south)", es: "Calor extremo / lluvias (sur)", de: "Extreme Hitze/Regen (Süden)" },
      color: "#ef4444",
      description: {
        fr: "Températures dépassant 40–47°C à Khartoum. Saison des pluies de juillet à septembre dans le Sahel. Conditions difficiles même en temps de paix.", en: "Temperatures exceeding 40–47°C in Khartoum. Rainy season from July to September in the Sahel. Difficult conditions even in peacetime.", es: "Temperaturas que superan los 40–47°C en Jartum. Estación de lluvias de julio a septiembre en el Sahel. Condiciones difíciles incluso en tiempos de paz.", de: "Temperaturen über 40–47 °C in Khartum. Regenzeit von Juli bis September in der Sahelzone. Auch in Friedenszeiten schwierige Bedingungen.",
      },
      icon: "🌡️",
    },
  ],

  weatherCities: [
    {
      id: "khartoum",
      name: "Khartoum",
      region: { fr: "Capitale (désert)", en: "Capital (desert)", es: "Capital (desierto)", de: "Hauptstadt (Wüste)" },
      data: [
        { month: "Jan", temp: 19, rain: 0,  icon: "☀️" },
        { month: "Fév", temp: 22, rain: 0,  icon: "☀️" },
        { month: "Mar", temp: 27, rain: 0,  icon: "⛅" },
        { month: "Avr", temp: 34, rain: 5,  icon: "🌡️" },
        { month: "Mai", temp: 39, rain: 5,  icon: "🌡️" },
        { month: "Jun", temp: 40, rain: 10, icon: "🌡️" },
        { month: "Jul", temp: 34, rain: 25, icon: "🌡️" },
        { month: "Aoû", temp: 32, rain: 40, icon: "🌡️" },
        { month: "Sep", temp: 33, rain: 15, icon: "🌡️" },
        { month: "Oct", temp: 34, rain: 5,  icon: "🌡️" },
        { month: "Nov", temp: 27, rain: 0,  icon: "⛅" },
        { month: "Déc", temp: 19, rain: 0,  icon: "☀️" },
      ],
    },
    {
      id: "kassala",
      name: "Kassala",
      region: { fr: "Collines de la Mer Rouge (est)", en: "Red Sea Hills (east)", es: "Colinas del Mar Rojo (este)", de: "Red Sea Hills (Osten)" },
      data: [
        { month: "Jan", temp: 18, rain: 0,  icon: "☀️" },
        { month: "Fév", temp: 21, rain: 0,  icon: "☀️" },
        { month: "Mar", temp: 26, rain: 2,  icon: "☀️" },
        { month: "Avr", temp: 30, rain: 5,  icon: "🌡️" },
        { month: "Mai", temp: 34, rain: 10, icon: "🌡️" },
        { month: "Jun", temp: 35, rain: 20, icon: "🌡️" },
        { month: "Jul", temp: 31, rain: 60, icon: "🌡️" },
        { month: "Aoû", temp: 29, rain: 80, icon: "⛅" },
        { month: "Sep", temp: 30, rain: 50, icon: "🌡️" },
        { month: "Oct", temp: 29, rain: 10, icon: "⛅" },
        { month: "Nov", temp: 23, rain: 2,  icon: "☀️" },
        { month: "Déc", temp: 18, rain: 0,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Pyramides de Méroé", en: "Pyramids of Meroë", es: "Pirámides de Meroe", de: "Pyramiden von Meroe" },
      region: { fr: "État du Nil (nord)", en: "River Nile State (north)", es: "Estado del Nilo (norte)", de: "Nilstaat (Norden)" },
      description: {
        fr: "Les pyramides de Méroé sont le joyau archéologique du Soudan : plus de 200 pyramides nubiennes aux proportions élancées, plus nombreuses qu'en Égypte, classées au patrimoine mondial de l'UNESCO. Capitales du royaume de Koush et Méroé pendant plus de mille ans, elles témoignent d'une civilisation africaine d'une richesse exceptionnelle. Avant la guerre, Méroé accueillait des milliers de visiteurs par an venus admirer ces sentinelles de grès rose dans le désert nubien.", en: "The pyramids of Meroë are Sudan's archaeological jewel: over 200 slender Nubian pyramids, more numerous than in Egypt, a UNESCO World Heritage site. Capitals of the Kingdom of Kush and Meroë for over a thousand years, they bear witness to an exceptionally rich African civilisation. Before the war, Meroë welcomed thousands of visitors a year who came to admire these pink sandstone sentinels in the Nubian desert.", es: "Las pirámides de Meroe son la joya arqueológica de Sudán: más de 200 esbeltas pirámides nubias, más numerosas que en Egipto, Patrimonio de la Humanidad de la UNESCO. Capitales del reino de Kush y Meroe durante más de mil años, dan testimonio de una civilización africana de una riqueza excepcional. Antes de la guerra, Meroe recibía a miles de visitantes al año que venían a admirar estos centinelas de arenisca rosa en el desierto nubio.", de: "Die Pyramiden von Meroe sind das archäologische Juwel des Sudan: mehr als 200 nubische Pyramiden von schlanken Ausmaßen, zahlreicher als in Ägypten, die zum UNESCO-Weltkulturerbe gehören. Sie sind seit mehr als tausend Jahren Hauptstädte des Königreichs Kusch und Meroe und zeugen von einer außergewöhnlich reichen afrikanischen Zivilisation. Vor dem Krieg begrüßte Meroe jedes Jahr Tausende von Besuchern, die kamen, um diese rosa Sandsteinwächter in der nubischen Wüste zu bewundern.",
      },
      wikipedia: "File:Sudan Meroe Pyramids 2001.JPG",
      tags: ["UNESCO", "Histoire", "Architecture"],
      mustSee: [
        { name: { fr: "Nécropole nord de Méroé — principale concentration de pyramides", en: "Northern necropolis of Meroë — the main cluster of pyramids", es: "Necrópolis norte de Meroe — la principal concentración de pirámides", de: "Nördliche Nekropole von Meroe – Hauptkonzentration der Pyramiden" }, wikipedia: "Meroë" },
        { name: { fr: "Temple d'Apedemak à Naqa — temple du lion nubien", en: "Temple of Apedemak at Naqa — the Nubian lion temple", es: "Templo de Apedemak en Naqa — el templo del león nubio", de: "Apedemak-Tempel in Naqa – Tempel des nubischen Löwen" }, wikipedia: "Naqa" },
        { name: { fr: "Bains royaux de Méroé — thermes de la cité antique", en: "Royal Baths of Meroë — the ancient city's thermal baths", es: "Baños reales de Meroe — termas de la ciudad antigua", de: "Königliche Bäder von Meroe – Thermalbäder der antiken Stadt" }, wikipedia: "File:Meroe Royal Bath.JPG" },
        { name: { fr: "Musée national de Khartoum — collections nubiennes (pré-conflit)", en: "Khartoum National Museum — Nubian collections (pre-conflict)", es: "Museo nacional de Jartum — colecciones nubias (pre-conflicto)", de: "Nationalmuseum Khartum – Nubische Sammlungen (vor dem Konflikt)" }, wikipedia: "File:Republican Palace Museum (Khartoum) 002.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Jebel Barkal & Kerma", en: "Jebel Barkal & Kerma", es: "Jebel Barkal y Kerma", de: "Jebel Barkal & Kerma" },
      region: { fr: "État du Nil Nord (Nubie)", en: "Northern State (Nubia)", es: "Estado del Nilo Norte (Nubia)", de: "Nord-Nil-Staat (Nubien)" },
      description: {
        fr: "Jebel Barkal est une montagne sacrée des anciens Égyptiens et Nubiens, dominée par une falaise de 100 mètres de haut sur le Nil, abritant temples et pyramides royales classés à l'UNESCO. Kerma, plus au nord, est le site de la plus ancienne ville d'Afrique subsaharienne connue, avec des objets remontant à 2500 av. J.-C. Ces sites constituaient avant la guerre les étapes incontournables d'un circuit nubien unique au monde.", en: "Jebel Barkal is a sacred mountain of the ancient Egyptians and Nubians, dominated by a 100-metre cliff over the Nile, housing UNESCO-listed temples and royal pyramids. Kerma, further north, is the site of the oldest known city in sub-Saharan Africa, with artefacts dating back to 2500 BC. Before the war, these sites were the essential stops on a uniquely Nubian tour.", es: "Jebel Barkal es una montaña sagrada de los antiguos egipcios y nubios, dominada por un acantilado de 100 metros sobre el Nilo, que alberga templos y pirámides reales catalogados por la UNESCO. Kerma, más al norte, es el emplazamiento de la ciudad más antigua conocida del África subsahariana, con objetos que se remontan al 2500 a.C. Antes de la guerra, estos sitios eran las paradas imprescindibles de un circuito nubio único en el mundo.", de: "Jebel Barkal ist ein heiliger Berg der alten Ägypter und Nubier, der von einer 100 Meter hohen Klippe am Nil dominiert wird und die Heimat von Tempeln und königlichen Pyramiden ist, die zum UNESCO-Weltkulturerbe gehören. Kerma, weiter nördlich, ist die älteste bekannte Stadt in Afrika südlich der Sahara mit Artefakten aus dem Jahr 2500 v. Chr. Vor dem Krieg bildeten diese Stätten die wesentlichen Etappen eines weltweit einzigartigen nubischen Rundgangs.",
      },
      wikipedia: "Jebel_Barkal",
      tags: ["UNESCO", "Histoire"],
      mustSee: [
        { name: { fr: "Temple d'Amon à Jebel Barkal — sanctuaire taillé dans la roche", en: "Temple of Amun at Jebel Barkal — sanctuary carved into the rock", es: "Templo de Amón en Jebel Barkal — santuario tallado en la roca", de: "Tempel des Amun am Jebel Barkal – in den Fels gehauenes Heiligtum" }, wikipedia: "Jebel_Barkal" },
        { name: { fr: "Pyramides de Nuri — tombeaux royaux nubiens", en: "Pyramids of Nuri — royal Nubian tombs", es: "Pirámides de Nuri — tumbas reales nubias", de: "Pyramiden von Nuri – nubische Königsgräber" }, wikipedia: "Nuri" },
        { name: { fr: "Kerma — plus ancienne ville d'Afrique subsaharienne", en: "Kerma — the oldest city in sub-Saharan Africa", es: "Kerma — la ciudad más antigua del África subsahariana", de: "Kerma – älteste Stadt in Afrika südlich der Sahara" }, wikipedia: "Kerma" },
        { name: { fr: "Deffufa Occidentale de Kerma — monument en briques de terre crue", en: "Western Deffufa of Kerma — mudbrick monument", es: "Deffufa Occidental de Kerma — monumento de adobe", de: "Deffufa Occidentale de Kerma – Lehmziegeldenkmal" }, wikipedia: "File:Western Deffufa - Kerma.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Port Soudan & Mer Rouge", en: "Port Sudan & the Red Sea", es: "Port Sudan y el Mar Rojo", de: "Port Sudan und Rotes Meer" },
      region: { fr: "État de la Mer Rouge", en: "Red Sea State", es: "Estado del Mar Rojo", de: "Staat am Roten Meer" },
      description: {
        fr: "Port Soudan donnait accès à l'une des plus belles plongées de la mer Rouge, dans des eaux encore peu explorées avec des récifs coralliens intacts, des épaves historiques et une biodiversité marine remarquable. Les collines de la Mer Rouge offrent une atmosphère nubienne authentique avec les communautés Beja nomades. La région est aujourd'hui moins touchée par la guerre civile que Khartoum.", en: "Port Sudan gave access to some of the finest diving in the Red Sea, in still little-explored waters with intact coral reefs, historic wrecks and remarkable marine biodiversity. The Red Sea Hills offer an authentic Nubian atmosphere with nomadic Beja communities. The region is today less affected by the civil war than Khartoum.", es: "Port Sudan daba acceso a una de las mejores zonas de buceo del Mar Rojo, en aguas todavía poco exploradas con arrecifes de coral intactos, pecios históricos y una biodiversidad marina notable. Las colinas del Mar Rojo ofrecen un ambiente nubio auténtico con las comunidades nómadas Beja. Hoy la región está menos afectada por la guerra civil que Jartum.", de: "Port Sudan bot Zugang zu einem der schönsten Tauchgänge im Roten Meer, in noch wenig erforschten Gewässern mit intakten Korallenriffen, historischen Wracks und bemerkenswerter Artenvielfalt im Meer. Die Hügel des Roten Meeres bieten eine authentische nubische Atmosphäre mit nomadischen Beja-Gemeinschaften. Die Region ist heute weniger vom Bürgerkrieg betroffen als Khartum.",
      },
      wikipedia: "Port_Sudan",
      tags: ["Plage", "Nature"],
      mustSee: [
        { name: { fr: "Récifs de Sanganeb — parc marin avec requins et dauphins", en: "Sanganeb reefs — marine park with sharks and dolphins", es: "Arrecifes de Sanganeb — parque marino con tiburones y delfines", de: "Sanganeb Reefs – Meerespark mit Haien und Delfinen" }, wikipedia: "File:Barracuda_Tornado.jpg" },
        { name: { fr: "Épave du MV Umbria — navire mussolini coulé en 1940", en: "MV Umbria wreck — Mussolini-era ship sunk in 1940", es: "Pecio del MV Umbria — barco de la era Mussolini hundido en 1940", de: "Wrack der MV Umbria – Mussolini-Schiff, 1940 versenkt" }, wikipedia: "SS_Umbria" },
        { name: { fr: "Collines Taka (Kassala) — formations rocheuses et communauté Beja", en: "Taka Hills (Kassala) — rock formations and Beja community", es: "Colinas Taka (Kassala) — formaciones rocosas y comunidad Beja", de: "Taka Hills (Kassala) – Felsformationen und Beja-Gemeinde" }, wikipedia: "Kassala" },
        { name: { fr: "Suakin — ancienne ville ottomane en corail sur l'île", en: "Suakin — former Ottoman coral town on the island", es: "Suakin — antigua ciudad otomana de coral en la isla", de: "Suakin – alte osmanische Korallenstadt auf der Insel" }, wikipedia: "Suakin" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Avant la guerre, le Soudan était l'une des destinations archéologiques les moins chères au monde. La situation actuelle rend toute évaluation de coût hors de propos : le pays vit une catastrophe humanitaire et économique majeure. Les informations ci-dessous sont données à titre historique uniquement.", en: "Before the war, Sudan was one of the cheapest archaeological destinations in the world. The current situation makes any cost assessment irrelevant: the country is experiencing a major humanitarian and economic catastrophe. The information below is given for historical reference only.", es: "Antes de la guerra, Sudán era uno de los destinos arqueológicos más baratos del mundo. La situación actual hace que cualquier evaluación de costes carezca de sentido: el país atraviesa una catástrofe humanitaria y económica de gran magnitud. La información siguiente se ofrece únicamente a título histórico.", de: "Vor dem Krieg war der Sudan eines der günstigsten archäologischen Reiseziele der Welt. Die aktuelle Situation macht jede Kostenabschätzung irrelevant: Das Land erlebt eine große humanitäre und wirtschaftliche Katastrophe. Die folgenden Informationen dienen nur historischen Zwecken.",
    },
    currency: "SDG",
    exchangeRate: "1€ ≈ 600 SDG (taux pré-conflit, instable)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Auberge / chambre basique (pré-conflit)", en: "Hostel / basic room (pre-conflict)", es: "Albergue / habitación básica (pre-conflicto)", de: "Einfache Herberge/Zimmer (vor dem Konflikt)" }, range: "8–15 €" },
          { label: { fr: "Hôtel milieu de gamme", en: "Mid-range hotel", es: "Hotel de gama media", de: "Mittelklassehotel" }, range: "25–50 €" },
          { label: { fr: "Hôtel international (Khartoum)", en: "International hotel (Khartoum)", es: "Hotel internacional (Jartum)", de: "International Hotel (Khartum)" }, range: "60–120 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Foul médamès et falafels (rue)", en: "Ful medames and falafel (street)", es: "Foul medames y falafel (calle)", de: "Foul Medamès und Falafels (Straße)" }, range: "1–3 €" },
          { label: { fr: "Restaurant local (viande grillée)", en: "Local restaurant (grilled meat)", es: "Restaurante local (carne a la parrilla)", de: "Lokales Restaurant (gegrilltes Fleisch)" }, range: "5–12 €" },
          { label: { fr: "Café soudanais et jus de fruits", en: "Sudanese coffee and fruit juice", es: "Café sudanés y zumo de frutas", de: "Sudanesischer Kaffee und Fruchtsaft" }, range: "1–2 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bus Khartoum–Méroé", en: "Bus Khartoum–Meroë", es: "Autobús Jartum–Meroe", de: "Bus Khartum–Meroe" }, range: "5–10 €" },
          { label: { fr: "Taxi en ville", en: "Taxi in town", es: "Taxi en la ciudad", de: "Taxi in der Stadt" }, range: "2–5 €" },
          { label: { fr: "Location 4x4 avec chauffeur", en: "4x4 rental with driver", es: "Alquiler de 4x4 con conductor", de: "4x4-Vermietung mit Fahrer" }, range: "60–120 €/j" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Entrée site de Méroé", en: "Meroë site entry", es: "Entrada al sitio de Meroe", de: "Eingang zum Standort Meroe" }, range: "5–15 €" },
          { label: { fr: "Guide archéologique local", en: "Local archaeological guide", es: "Guía arqueológico local", de: "Lokaler archäologischer Führer" }, range: "20–40 €/j" },
          { label: { fr: "Plongée mer Rouge (forfait journée)", en: "Red Sea diving (day package)", es: "Buceo en el Mar Rojo (paquete de un día)", de: "Tauchen im Roten Meer (Tagespaket)" }, range: "40–80 €" },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "35–55 €/j", desc: { fr: "Chiffres pré-conflit uniquement. Voyage actuellement impossible.", en: "Pre-conflict figures only. Travel is currently impossible.", es: "Cifras pre-conflicto únicamente. Viajar es actualmente imposible.", de: "Nur Zahlen aus der Zeit vor dem Konflikt. Reisen derzeit nicht möglich." }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "70–120 €/j", desc: { fr: "Chiffres pré-conflit uniquement. Voyage actuellement impossible.", en: "Pre-conflict figures only. Travel is currently impossible.", es: "Cifras pre-conflicto únicamente. Viajar es actualmente imposible.", de: "Nur Zahlen aus der Zeit vor dem Konflikt. Reisen derzeit nicht möglich." }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: { fr: "Khartoum → Méroé → Jebel Barkal → Kerma → Port Soudan", en: "Khartoum → Meroë → Jebel Barkal → Kerma → Port Sudan", es: "Jartum → Meroe → Jebel Barkal → Kerma → Port Sudan", de: "Khartum → Meroe → Jebel Barkal → Kerma → Port Sudan" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "850 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Khartoum (pré-conflit)", en: "Return flight Paris–Khartoum (pre-conflict)", es: "Vuelo ida y vuelta París–Jartum (pre-conflicto)", de: "Hin- und Rückflug Paris–Khartum (vor dem Konflikt)" }, amount: "400–600 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)", es: "Alojamiento (9 noches)", de: "Unterkunft (9 Nächte)" }, amount: "80–150 €" },
            { label: { fr: "Transports locaux", en: "Local transport", es: "Transporte local", de: "Nahverkehr" }, amount: "80–150 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "120–200 €" },
            { label: { fr: "Activités + entrées", en: "Activities + entry fees", es: "Actividades + entradas", de: "Aktivitäten + Einträge" }, amount: "80–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "1 800 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Khartoum (pré-conflit)", en: "Return flight Paris–Khartoum (pre-conflict)", es: "Vuelo ida y vuelta París–Jartum (pre-conflicto)", de: "Hin- und Rückflug Paris–Khartum (vor dem Konflikt)" }, amount: "450–650 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)", es: "Alojamiento (9 noches)", de: "Unterkunft (9 Nächte)" }, amount: "250–500 €" },
            { label: { fr: "Location 4x4 + carburant", en: "4x4 rental + fuel", es: "Alquiler de 4x4 + combustible", de: "4x4-Miete + Treibstoff" }, amount: "500–800 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "250–400 €" },
            { label: { fr: "Activités + guides", en: "Activities + guides", es: "Actividades + guías", de: "Aktivitäten + Führer" }, amount: "200–300 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde París", de: "Flug ab Paris" }, value: { fr: "Vols via Le Caire (EgyptAir), Istanbul (Turkish) ou Dubaï (Emirates). Liaisons directes suspendues depuis le conflit.", en: "Flights via Cairo (EgyptAir), Istanbul (Turkish) or Dubai (Emirates). Direct flights suspended since the conflict.", es: "Vuelos vía El Cairo (EgyptAir), Estambul (Turkish) o Dubái (Emirates). Los vuelos directos están suspendidos desde el conflicto.", de: "Flüge über Kairo (EgyptAir), Istanbul (Turkish Airlines) oder Dubai (Emirates). Direkte Verbindungen seit dem Konflikt ausgesetzt." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Visa obligatoire — procédures actuellement suspendues pour les voyageurs civils en raison du conflit armé.", en: "Visa required — procedures currently suspended for civilian travellers due to the armed conflict.", es: "Visado obligatorio — trámites actualmente suspendidos para viajeros civiles debido al conflicto armado.", de: "Visum erforderlich – Verfahren für zivile Reisende aufgrund bewaffneter Konflikte derzeit ausgesetzt." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Livre soudanaise (SDG). Économie en effondrement depuis 2023. Transactions en cash USD historiquement nécessaires.", en: "Sudanese pound (SDG). Economy collapsing since 2023. Cash USD transactions have historically been necessary.", es: "Libra sudanesa (SDG). Economía en colapso desde 2023. Históricamente han sido necesarias las transacciones en efectivo en USD.", de: "Sudanesisches Pfund (SDG). Seit 2023 kollabiert die Wirtschaft. Historisch notwendige USD-Bargeldtransaktionen." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Arabe (officiel), anglais dans les villes et les milieux éduqués. Langues nubiennes dans le nord.", en: "Arabic (official), English in cities and educated circles. Nubian languages in the north.", es: "Árabe (oficial), inglés en las ciudades y en los círculos educados. Lenguas nubias en el norte.", de: "Arabisch (offiziell), Englisch in Städten und gebildeten Kreisen. Nubische Sprachen im Norden." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type D et Type G (britannique). Tension 230V. Coupures fréquentes même en temps normal.", en: "Type D and Type G (British). 230V. Frequent power cuts even in normal times.", es: "Tipo D y Tipo G (británico). Tensión 230V. Cortes frecuentes incluso en tiempos normales.", de: "Typ D und Typ G (britisch). Spannung 230V. Auch in normalen Zeiten kommt es häufig zu Ausfällen." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Paludisme présent, chaleur extrême (jusqu'à 47°C). Accès aux soins très limité. Situation sanitaire désastreuse depuis 2023.", en: "Malaria present, extreme heat (up to 47°C). Very limited access to healthcare. Disastrous health situation since 2023.", es: "Presencia de paludismo, calor extremo (hasta 47°C). Acceso a la atención médica muy limitado. Situación sanitaria desastrosa desde 2023.", de: "Malaria vorhanden, extreme Hitze (bis zu 47°C). Sehr eingeschränkter Zugang zur Pflege. Katastrophale Gesundheitssituation seit 2023." } },
    { icon: "⚠️", label: { fr: "Sécurité — AVERTISSEMENT CRITIQUE", en: "Safety — CRITICAL WARNING", es: "Seguridad — ADVERTENCIA CRÍTICA", de: "Sicherheit – KRITISCHE WARNUNG" }, value: { fr: "🚫 VOYAGE FORMELLEMENT DÉCONSEILLÉ. Guerre civile active depuis avril 2023 entre les FAR (armée) et les RSF (paramilitaires). Khartoum est une zone de combat. Des millions de déplacés. Le MEAE classe le Soudan en zone rouge absolue. N'envisagez aucun déplacement.", en: "🚫 TRAVEL FORMALLY ADVISED AGAINST. Active civil war since April 2023 between the SAF (army) and the RSF (paramilitaries). Khartoum is a combat zone. Millions displaced. Official government travel advisories classify Sudan as an absolute no-go zone. Do not consider any travel.", es: "🚫 VIAJE FORMALMENTE DESACONSEJADO. Guerra civil activa desde abril de 2023 entre las FAS (ejército) y las RSF (paramilitares). Jartum es una zona de combate. Millones de desplazados. Las autoridades clasifican Sudán como zona roja absoluta. No considere ningún desplazamiento.", de: "🚫 REISEN FORMELL NICHT EMPFOHLEN. Aktiver Bürgerkrieg seit April 2023 zwischen der FAR (Armee) und der RSF (paramilitärisch). Khartum ist ein Kampfgebiet. Millionen vertrieben. Die MEAE stuft den Sudan in die absolute rote Zone ein. Planen Sie keine Reisen." } },
    { icon: "📰", label: { fr: "Contexte politique", en: "Political context", es: "Contexto político", de: "Politischer Kontext" }, value: { fr: "Crise humanitaire majeure : plus de 8 millions de déplacés, famine, infrastructures détruites. Suivre l'évolution sur le site du Ministère des Affaires Étrangères (France.fr/conseils-aux-voyageurs).", en: "Major humanitarian crisis: over 8 million displaced, famine, destroyed infrastructure. Follow developments on your government's foreign travel advisory website.", es: "Crisis humanitaria de gran magnitud: más de 8 millones de desplazados, hambruna, infraestructuras destruidas. Siga la evolución en el sitio web de asuntos exteriores de su país.", de: "Große humanitäre Krise: mehr als 8 Millionen Vertriebene, Hungersnot, zerstörte Infrastruktur. Verfolgen Sie die Entwicklungen auf der Website des Außenministeriums (France.fr/conseils-aux-voyageurs)." } },
  ],
};
