export const DENMARK = {
  code: "DNK",
  numericId: 208,
  name: { fr: "Danemark", en: "Denmark", es: "Dinamarca", de: "Dänemark" },
  emoji: "🇩🇰",
  capital: { fr: "Copenhague", en: "Copenhagen", es: "Copenhague", de: "Kopenhagen" },
  language: { fr: "Danois", en: "Danish", es: "Danés", de: "Dänisch" },
  currency: { fr: "Couronne danoise (DKK)", en: "Danish krone (DKK)", es: "Corona danesa (DKK)", de: "Dänische Krone (DKK)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 110, budgetMid: 190,
    tripMin: 1500, tripMid: 3000,
  },
  criteria: {
    unesco: 2,
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
    fr: "Le Danemark est le pays du 'hygge' (bien-être douillet), du design scandinave, de Noma (plusieurs fois meilleur restaurant du monde), et de Hamlet (château d'Elseneur). Copenhague est la capitale vélo d'Europe, avec ses canaux de Nyhavn, ses marchés de street food de Reffen, ses musées de design et le parc de Tivoli. Le Danemark inclut aussi les Îles Féroé et le Groenland.", en: "Denmark is the land of hygge (cosy wellbeing), Scandinavian design, Noma (several times named the world's best restaurant), and Hamlet (Elsinore Castle). Copenhagen is Europe's cycling capital, with the Nyhavn canals, Reffen's street food markets, design museums and Tivoli Gardens. Denmark also includes the Faroe Islands and Greenland.", es: "Dinamarca es el país del 'hygge' (bienestar acogedor), del diseño escandinavo, de Noma (varias veces mejor restaurante del mundo) y de Hamlet (castillo de Elsinor). Copenhague es la capital de la bicicleta en Europa, con los canales de Nyhavn, los mercados de street food de Reffen, sus museos de diseño y el parque de Tivoli. Dinamarca incluye también las Islas Feroe y Groenlandia.", de: "Dänemark ist das Land des „Hygge“ (gemütliches Wohlbefinden), des skandinavischen Designs, des Noma (mehrmals das beste Restaurant der Welt) und des Hamlet (Schloss Helsingør). Kopenhagen ist mit seinen Nyhavn-Kanälen, den Reffen-Streetfood-Märkten, den Designmuseen und dem Tivoli-Park die Fahrradhauptstadt Europas. Zu Dänemark gehören auch die Färöer-Inseln und Grönland.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Août", en: "June – August", es: "Junio – Agosto", de: "Juni – August" },
      label: { fr: "Été danois", en: "Danish summer", es: "Verano danés", de: "Dänischer Sommer" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : 18–23°C à Copenhague, longues journées lumineuses, festivals (Roskilde Festival), terrasses, marchés et archipels. L'été danois est court mais intense.", en: "Best time to go: 18–23°C in Copenhagen, long bright days, festivals (Roskilde Festival), terraces, markets and archipelagos. The Danish summer is short but intense.", es: "La mejor época: 18–23°C en Copenhague, días largos y luminosos, festivales (Roskilde Festival), terrazas, mercados y archipiélagos. El verano danés es corto pero intenso.", de: "Beste Zeit: 18–23°C in Kopenhagen, lange helle Tage, Festivals (Roskilde Festival), Terrassen, Märkte und Schären. Der dänische Sommer ist kurz, aber intensiv.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre", en: "December", es: "Diciembre", de: "Dezember" },
      label: { fr: "Noël scandinave", en: "Scandinavian Christmas", es: "Navidad escandinava", de: "Skandinavisches Weihnachten" },
      color: "#f59e0b",
      description: {
        fr: "Marchés de Noël parmi les plus beaux d'Europe, Tivoli illuminé, hygge dans les cafés, vin chaud (gløgg) et æbleskiver. Températures froides (0–5°C) mais atmosphère unique.", en: "Some of Europe's most beautiful Christmas markets, Tivoli lit up, hygge in cafés, mulled wine (gløgg) and æbleskiver. Cold temperatures (0–5°C), but a truly unique atmosphere.", es: "Mercados de Navidad entre los más bellos de Europa, Tivoli iluminado, hygge en los cafés, vino caliente (gløgg) y æbleskiver. Temperaturas frías (0–5°C) pero un ambiente único.", de: "Einige der schönsten Weihnachtsmärkte Europas, beleuchteter Tivoli, Hygge in den Cafés, Glühwein (Gløgg) und æbleskiver. Kalte Temperaturen (0–5°C), aber einzigartige Atmosphäre.",
      },
      icon: "🎄",
    },
  ],

  weatherCities: [
    {
      id: "copenhagen",
      name: "Copenhague",
      region: { fr: "Capitale (île de Sjælland)", en: "Capital region (island of Zealand)", es: "Capital (isla de Selandia)", de: "Hauptstadt (Insel Sjælland)" },
      data: [
        { month: "Jan", temp:  2, rain: 55,  icon: "❄️" },
        { month: "Fév", temp:  2, rain: 40,  icon: "❄️" },
        { month: "Mar", temp:  5, rain: 45,  icon: "⛅" },
        { month: "Avr", temp:  9, rain: 40,  icon: "⛅" },
        { month: "Mai", temp: 14, rain: 45,  icon: "⛅" },
        { month: "Jun", temp: 17, rain: 55,  icon: "☀️" },
        { month: "Jul", temp: 20, rain: 65,  icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 65,  icon: "☀️" },
        { month: "Sep", temp: 15, rain: 65,  icon: "⛅" },
        { month: "Oct", temp: 10, rain: 65,  icon: "⛅" },
        { month: "Nov", temp:  6, rain: 65,  icon: "⛅" },
        { month: "Déc", temp:  3, rain: 55,  icon: "❄️" },
      ],
    },
    {
      id: "aarhus",
      name: "Aarhus",
      region: { fr: "Jutland (péninsule principale)", en: "Jutland (main peninsula)", es: "Jutlandia (península principal)", de: "Jütland (Haupthalbinsel)" },
      data: [
        { month: "Jan", temp:  1, rain: 55,  icon: "❄️" },
        { month: "Fév", temp:  1, rain: 45,  icon: "❄️" },
        { month: "Mar", temp:  4, rain: 40,  icon: "⛅" },
        { month: "Avr", temp:  8, rain: 40,  icon: "⛅" },
        { month: "Mai", temp: 13, rain: 50,  icon: "⛅" },
        { month: "Jun", temp: 16, rain: 55,  icon: "☀️" },
        { month: "Jul", temp: 19, rain: 70,  icon: "☀️" },
        { month: "Aoû", temp: 19, rain: 75,  icon: "☀️" },
        { month: "Sep", temp: 15, rain: 70,  icon: "⛅" },
        { month: "Oct", temp: 10, rain: 70,  icon: "⛅" },
        { month: "Nov", temp:  5, rain: 65,  icon: "⛅" },
        { month: "Déc", temp:  2, rain: 60,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Copenhague — Vélos et canaux", en: "Copenhagen — Bikes and canals", es: "Copenhague — bicicletas y canales", de: "Kopenhagen – Fahrräder und Kanäle" },
      region: { fr: "Sjælland", en: "Zealand", es: "Selandia", de: "Seeland" },
      description: {
        fr: "Copenhague est régulièrement élue ville la plus cyclable du monde (400km de pistes cyclables). Nyhavn, ses maisons colorées du XVIIe siècle au bord de l'eau, est l'image de la ville. La Petite Sirène (sculpture d'Andersen), les ruelles de Christiania (commune libre), et la scène gastronomique (Noma, Geranium, Kadeau) font de Copenhague une capitale européenne de premier rang.", en: "Copenhagen is regularly ranked the world's most bike-friendly city (400 km of cycle lanes). Nyhavn, with its colourful 17th-century waterfront houses, is the city's signature image. The Little Mermaid (Andersen's sculpture), the lanes of Christiania (a self-governing free town), and the food scene (Noma, Geranium, Kadeau) make Copenhagen a top-tier European capital.", es: "Copenhague es elegida regularmente la ciudad más apta para bicicletas del mundo (400 km de carriles bici). Nyhavn, con sus casas coloridas del siglo XVII a orillas del agua, es la imagen de la ciudad. La Sirenita (escultura de Andersen), las callejuelas de Christiania (comuna libre) y la escena gastronómica (Noma, Geranium, Kadeau) hacen de Copenhague una capital europea de primer nivel.", de: "Kopenhagen wird regelmäßig zur fahrradfreundlichsten Stadt der Welt gewählt (400 km Radwege). Nyhavn mit seinen farbenfrohen Häusern aus dem 17. Jahrhundert am Wasser ist das Wahrzeichen der Stadt. Die kleine Meerjungfrau (Skulptur von Andersen), die Straßen von Christiania (freie Gemeinde) und die gastronomische Szene (Noma, Geranium, Kadeau) machen Kopenhagen zu einer erstklassigen europäischen Hauptstadt.",
      },
      wikipedia: "Copenhagen",
      tags: ["Aventure", "Architecture", "Gastronomie", "Ville"],
      mustSee: [
        { name: { fr: "Nyhavn — maisons colorées et bateaux historiques", en: "Nyhavn — colourful houses and historic boats", es: "Nyhavn — casas coloridas y barcos históricos", de: "Nyhavn – bunte Häuser und historische Boote" }, wikipedia: "Nyhavn" },
        { name: { fr: "Tivoli Gardens — parc d'attractions depuis 1843", en: "Tivoli Gardens — amusement park since 1843", es: "Tivoli Gardens — parque de atracciones desde 1843", de: "Tivoli-Gärten – Vergnügungspark seit 1843" }, wikipedia: "File:Tivoli Lake Parterrehaven.jpg" },
        { name: { fr: "Musée National et Statens Museum for Kunst", en: "National Museum and Statens Museum for Kunst", es: "Museo Nacional y Statens Museum for Kunst", de: "Nationalmuseum und Statens Museum for Kunst" }, wikipedia: "File:Statens Museum for Kunst, København.jpg" },
        { name: { fr: "Christiania — commune libre et culture alternative", en: "Christiania — free town and alternative culture", es: "Christiania — comuna libre y cultura alternativa", de: "Christiania – freie Kommune und alternative Kultur" }, wikipedia: "Freetown_Christiania" },
      ],
    },
    {
      id: 2,
      name: { fr: "Château de Kronborg — Hamlet's Castle", en: "Kronborg Castle — Hamlet's Castle", es: "Castillo de Kronborg — el castillo de Hamlet", de: "Schloss Kronborg – Hamlets Schloss" },
      region: { fr: "Helsingør (Elseneur)", en: "Helsingør (Elsinore)", es: "Helsingør (Elsinor)", de: "Helsingør (Elsinore)" },
      description: {
        fr: "Le château de Kronborg à Helsingør (à 45min de train de Copenhague) est classé UNESCO : c'est le château d'Elseneur de la pièce de Shakespeare 'Hamlet'. Construit en 1574, il contrôle le détroit de l'Øresund entre le Danemark et la Suède. Ses donjons abritent la statue du Viking légendaire Holger Danske, endormi jusqu'au jour où le Danemark aura besoin de lui.", en: "Kronborg Castle in Helsingør (45 minutes by train from Copenhagen) is a UNESCO site: it is Elsinore Castle from Shakespeare's Hamlet. Built in 1574, it overlooks the Øresund strait between Denmark and Sweden. Its underground casemates house the statue of the legendary Viking Holger Danske, asleep until the day Denmark needs him.", es: "El castillo de Kronborg en Helsingør (a 45 min en tren de Copenhague) está declarado UNESCO: es el castillo de Elsinor de la obra de Shakespeare 'Hamlet'. Construido en 1574, controla el estrecho de Øresund entre Dinamarca y Suecia. Sus mazmorras albergan la estatua del legendario vikingo Holger Danske, dormido hasta el día en que Dinamarca lo necesite.", de: "Schloss Kronborg in Helsingør (45 Minuten mit dem Zug von Kopenhagen entfernt) steht auf der UNESCO-Liste: Es ist das Schloss Helsingør aus Shakespeares Stück „Hamlet“. Es wurde 1574 erbaut und kontrolliert die Öresundstraße zwischen Dänemark und Schweden. In seinen Kerkern steht die Statue des legendären Wikingers Holger Danske, der schläft, bis Dänemark ihn braucht.",
      },
      wikipedia: "Kronborg",
      tags: ["Architecture", "Culture", "UNESCO", "Histoire"],
      mustSee: [
        { name: { fr: "Château de Kronborg — décor de Hamlet (UNESCO)", en: "Kronborg Castle — the setting of Hamlet (UNESCO)", es: "Castillo de Kronborg — escenario de Hamlet (UNESCO)", de: "Schloss Kronborg – Kulisse für Hamlet (UNESCO)" }, wikipedia: "Kronborg" },
        { name: { fr: "Donjons avec la statue de Holger Danske", en: "Casemates with the statue of Holger Danske", es: "Mazmorras con la estatua de Holger Danske", de: "Kerker mit der Statue von Holger Danske" }, wikipedia: "File:Holger Danske, Kronborg 2023.jpg" },
        { name: { fr: "Vue sur l'Øresund et la Suède à 4km", en: "Views over the Øresund and Sweden just 4 km away", es: "Vistas del Øresund y Suecia a 4 km", de: "Blick auf Öresund und Schweden in 4 km Entfernung" }, wikipedia: "Helsingør" },
        { name: { fr: "Musée maritime danois (M/S Museet for Søfart)", en: "Danish Maritime Museum (M/S Museet for Søfart)", es: "Museo marítimo danés (M/S Museet for Søfart)", de: "Dänisches Schifffahrtsmuseum (M/S Museet for Søfart)" }, wikipedia: "File:Maritime Museum of Denmark April 2026 01.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Legoland et Jutland — Dunes et patrimoine", en: "Legoland & Jutland — Dunes and heritage", es: "Legoland y Jutlandia — dunas y patrimonio", de: "Legoland und Jütland – Dünen und Erbe" },
      region: { fr: "Jutland (ouest)", en: "West Jutland", es: "Jutlandia (oeste)", de: "Jütland (Westen)" },
      description: {
        fr: "Billund abrite le Legoland original (créé en 1968) — le plus grand parc Lego du monde. Mais le Jutland réserve bien d'autres trésors : les dunes de Råbjerg Mile (la dune migratrice), les plages sauvages de la mer du Nord, et les tumulus vikings de Jelling (runes royales du Xe siècle, UNESCO) — le berceau du christianisme danois.", en: "Billund is home to the original Legoland (created in 1968) — the world's largest Lego park. But Jutland has many other treasures: the dunes of Råbjerg Mile (the migrating dune), the wild North Sea beaches, and the Viking burial mounds of Jelling (10th-century royal runestones, UNESCO) — the cradle of Danish Christianity.", es: "Billund alberga el Legoland original (creado en 1968), el mayor parque Lego del mundo. Pero Jutlandia guarda muchos otros tesoros: las dunas de Råbjerg Mile (la duna migratoria), las playas salvajes del mar del Norte y los túmulos vikingos de Jelling (runas reales del siglo X, UNESCO), la cuna del cristianismo danés.", de: "In Billund befindet sich das ursprüngliche Legoland (gegründet 1968) – der größte Lego-Park der Welt. Aber Jütland hält noch viele andere Schätze bereit: die Dünen der Råbjerg-Meile (die Wanderdüne), die wilden Strände der Nordsee und die Wikinger-Grabhügel von Jelling (königliche Runen aus dem 10. Jahrhundert, UNESCO) – die Wiege des dänischen Christentums.",
      },
      wikipedia: "File:Jutland Street - geograph.org.uk - 7939998.jpg",
      tags: ["Famille", "Nature", "UNESCO", "Plage"],
      mustSee: [
        { name: { fr: "Legoland Billund — le parc Lego original (depuis 1968)", en: "Legoland Billund — the original Lego park (since 1968)", es: "Legoland Billund — el parque Lego original (desde 1968)", de: "Legoland Billund – der ursprüngliche Lego-Park (seit 1968)" }, wikipedia: "File:LegoBillundTowerView.jpg" },
        { name: { fr: "Tumulus de Jelling — runes royales du Xe siècle (UNESCO)", en: "Jelling burial mounds — 10th-century royal runestones (UNESCO)", es: "Túmulos de Jelling — runas reales del siglo X (UNESCO)", de: "Jelling Mound – königliche Runen aus dem 10. Jahrhundert (UNESCO)" }, wikipedia: "File:Jelling, cemetery July 2015.jpg" },
        { name: { fr: "Dune migratrice de Råbjerg Mile — désert de sable en Scandinavie", en: "Råbjerg Mile migrating dune — a sandy desert in Scandinavia", es: "Duna migratoria de Råbjerg Mile — un desierto de arena en Escandinavia", de: "Wanderdüne Råbjerg Mile – Sandwüste in Skandinavien" }, wikipedia: "Råbjerg_Mile" },
        { name: { fr: "Plages sauvages de Skagen — pointe nord du Jutland", en: "Skagen's wild beaches — the northern tip of Jutland", es: "Playas salvajes de Skagen — la punta norte de Jutlandia", de: "Wilde Strände von Skagen – Nordspitze Jütlands" }, wikipedia: "Skagen" },
      ],
    },
    {
      id: 4,
      name: { fr: "Bornholm — Île fumée de harengs", en: "Bornholm — Island of smoked herring", es: "Bornholm — la isla del arenque ahumado", de: "Bornholm – Heringsgeräucherte Insel" },
      region: { fr: "Mer Baltique", en: "Baltic Sea", es: "Mar Báltico", de: "Ostsee" },
      description: {
        fr: "Bornholm est une île danoise en mer Baltique (plus proche de la Suède et de la Pologne que du Danemark) : ses roundkirker (églises-forteresses rondes du XIIe siècle, uniques en Europe), ses fumeries de harengs de Hasle et Nexø, ses plages de sable blanc, et ses rochers de granite font d'elle la perle cachée de Scandinavie.", en: "Bornholm is a Danish island in the Baltic Sea (closer to Sweden and Poland than to Denmark): its roundkirker (12th-century round fortress churches, unique in Europe), its smoked herring smokehouses in Hasle and Nexø, its white sand beaches, and its granite cliffs make it one of Scandinavia's hidden gems.", es: "Bornholm es una isla danesa en el mar Báltico (más cerca de Suecia y Polonia que de Dinamarca): sus roundkirker (iglesias-fortaleza redondas del siglo XII, únicas en Europa), sus ahumaderos de arenque de Hasle y Nexø, sus playas de arena blanca y sus rocas de granito la convierten en la joya oculta de Escandinavia.", de: "Bornholm ist eine dänische Insel in der Ostsee (näher an Schweden und Polen als an Dänemark): Ihre Rundkirche (runde Kirchenfestungen aus dem 12. Jahrhundert, einzigartig in Europa), ihre Heringsräuchereien in Hasle und Nexø, ihre weißen Sandstrände und ihre Granitfelsen machen sie zur verborgenen Perle Skandinaviens.",
      },
      wikipedia: "Bornholm",
      tags: ["Plage", "Histoire", "Nature"],
      mustSee: [
        { name: { fr: "Roundkirker (églises rondes forteresses) — uniques en Europe", en: "Roundkirker (round fortress churches) — unique in Europe", es: "Roundkirker (iglesias-fortaleza redondas) — únicas en Europa", de: "Roundkirker (runde Wehrkirchen) – einzigartig in Europa" }, wikipedia: "File:Nylars Round Church on Bornholm.jpg" },
        { name: { fr: "Rocher de Hammershus — ruines de château le plus grand de Scandinavie", en: "Hammershus — the ruins of Scandinavia's largest castle", es: "Roca de Hammershus — ruinas del castillo más grande de Escandinavia", de: "Hammershus-Felsen – Ruinen der größten Burg Skandinaviens" }, wikipedia: "File:Bornholm Hammershus 01.jpg" },
        { name: { fr: "Plages de sable blanc de Dueodde (côte sud)", en: "Dueodde's white sand beaches (south coast)", es: "Playas de arena blanca de Dueodde (costa sur)", de: "Weiße Sandstrände von Dueodde (Südküste)" }, wikipedia: "File:Stormy Baltic sea on Bornholm.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Danemark est parmi les pays les plus chers d'Europe. Les taxes (TVA à 25%) sont élevées mais incluses dans les prix affichés. Copenhague rivalise avec Zürich et Oslo en termes de coût de la vie. Le vélo permet d'économiser sur les transports.", en: "Denmark is one of the most expensive countries in Europe. Taxes (25% VAT) are high, but they are included in displayed prices. Copenhagen rivals Zurich and Oslo in terms of cost of living. Cycling helps save money on transport.", es: "Dinamarca está entre los países más caros de Europa. Los impuestos (IVA del 25%) son elevados pero están incluidos en los precios mostrados. Copenhague rivaliza con Zúrich y Oslo en coste de vida. La bicicleta permite ahorrar en transporte.", de: "Dänemark gehört zu den teuersten Ländern Europas. Die Steuern (MwSt. 25 %) sind hoch, aber in den angezeigten Preisen enthalten. Bei den Lebenshaltungskosten konkurriert Kopenhagen mit Zürich und Oslo. Radfahren spart Transportkosten.",
    },
    currency: "DKK",
    exchangeRate: "1€ ≈ 7,45 DKK",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Auberge de jeunesse / hostel Copenhague", en: "Copenhagen hostel / youth hostel", es: "Albergue juvenil / hostel en Copenhague", de: "Jugendherberge / Hostel Kopenhagen" }, price: "35–70 €", detail: { fr: "Dortoir ou chambre privée", en: "Dorm or private room", es: "Dormitorio o habitación privada", de: "Schlafsaal oder Privatzimmer" } },
          { label: { fr: "Hôtel 3★ Copenhague", en: "3★ hotel in Copenhagen", es: "Hotel 3★ en Copenhague", de: "3★ Hotel Kopenhagen" }, price: "130–220 €", detail: { fr: "Confort standard en capitale", en: "Standard comfort in the capital", es: "Confort estándar en la capital", de: "Standardkomfort in der Hauptstadt" } },
          { label: { fr: "Camping Danemark (réseau officiel)", en: "Camping in Denmark (official network)", es: "Camping en Dinamarca (red oficial)", de: "Camping Dänemark (offizielles Netz)" }, price: "15–30 €", detail: { fr: "Qualité excellente, emplacements ombragés", en: "Excellent quality, shaded pitches", es: "Excelente calidad, parcelas con sombra", de: "Hervorragende Qualität, schattige Standorte" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Smørrebrød (tartines ouvertes danoises) dans un café", en: "Smørrebrød (Danish open sandwiches) in a café", es: "Smørrebrød (tostas abiertas danesas) en una cafetería", de: "Smørrebrød (dänischer offener Toast) in einem Café" }, price: "12–20 €", detail: { fr: "Déjeuner typique danois", en: "Typical Danish lunch", es: "Almuerzo típico danés", de: "Typisches dänisches Mittagessen" } },
          { label: { fr: "Street food marché de Torvehallerne ou Reffen", en: "Street food at Torvehallerne or Reffen", es: "Street food en el mercado de Torvehallerne o Reffen", de: "Streetfood-Markt in Torvehallerne oder Reffen" }, price: "10–18 €", detail: { fr: "Halles + conteneurs sur la rive", en: "Food hall + shipping containers on the waterfront", es: "Mercado cubierto + contenedores junto al agua", de: "Hallen + Container am Ufer" } },
          { label: { fr: "Supermarché Netto ou Aldi — courses journée", en: "Netto or Aldi supermarket — food for the day", es: "Supermercado Netto o Aldi — compra del día", de: "Netto- oder Aldi-Supermarkt – Tageseinkäufe" }, price: "15–25 €", detail: { fr: "Option économique essentielle", en: "Essential budget option", es: "Opción económica esencial", de: "Unverzichtbare wirtschaftliche Option" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Métro + bus Copenhague (ticket 24h, zones 1–4)", en: "Copenhagen metro + bus (24-hour ticket, zones 1–4)", es: "Metro + autobús de Copenhague (billete 24h, zonas 1–4)", de: "Metro + Bus Kopenhagen (24-Stunden-Ticket, Zonen 1–4)" }, price: "14 €", detail: { fr: "Réseau excellent et ponctuel", en: "Excellent and punctual network", es: "Red excelente y puntual", de: "Ausgezeichnetes und pünktliches Netz" } },
          { label: { fr: "Train Copenhague–Aarhus (3h, DSB)", en: "Copenhagen–Aarhus train (3h, DSB)", es: "Tren Copenhague–Aarhus (3h, DSB)", de: "Zug Kopenhagen–Aarhus (3 Std., DSB)" }, price: "25–55 €", detail: { fr: "Réservation recommandée en été", en: "Booking recommended in summer", es: "Reserva recomendada en verano", de: "Reservierung im Sommer empfohlen" } },
          { label: { fr: "Location vélo Copenhague (journée)", en: "Bike rental in Copenhagen (full day)", es: "Alquiler de bici en Copenhague (día)", de: "Fahrradverleih Kopenhagen (Tag)" }, price: "15–25 €", detail: { fr: "Le meilleur moyen de découvrir la ville", en: "The best way to explore the city", es: "La mejor forma de descubrir la ciudad", de: "Der beste Weg, die Stadt zu entdecken" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Tivoli Gardens (entrée)", en: "Tivoli Gardens (entry)", es: "Jardines de Tivoli (entrada)", de: "Tivoli-Gärten (Eingang)" }, price: "18 €", detail: { fr: "Manèges en supplément (pass disponible)", en: "Rides cost extra (passes available)", es: "Atracciones aparte (bono disponible)", de: "Fahrten extra (Pass erhältlich)" } },
          { label: { fr: "Musée national danois (entrée gratuite)", en: "National Museum of Denmark (free entry)", es: "Museo Nacional de Dinamarca (entrada gratuita)", de: "Dänisches Nationalmuseum (Eintritt frei)" }, price: "0 €", detail: { fr: "Collections vikings et médiévales", en: "Viking and medieval collections", es: "Colecciones vikingas y medievales", de: "Wikinger- und Mittelaltersammlungen" } },
          { label: { fr: "Tour en kayak des canaux de Copenhague", en: "Kayak tour of Copenhagen's canals", es: "Tour en kayak por los canales de Copenhague", de: "Kajaktour durch die Kanäle von Kopenhagen" }, price: "30–50 €", detail: { fr: "Guidé ou location libre (2h)", en: "Guided or self-rental (2h)", es: "Guiado o alquiler libre (2h)", de: "Geführte Tour oder eigenständige Miete (2 Std.)" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "110–170 €/j", desc: { fr: "Hostel + smørrebrød + supermarché + vélo", en: "Hostel + smørrebrød + supermarket + bike", es: "Hostel + smørrebrød + supermercado + bici", de: "Herberge + Smørrebrød + Supermarkt + Fahrrad" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "190–320 €/j", desc: { fr: "Hôtel 3★ + restaurants + musées + excursions", en: "3★ hotel + restaurants + museums + excursions", es: "Hotel 3★ + restaurantes + museos + excursiones", de: "3★ Hotel + Restaurants + Museen + Ausflüge" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days", es: "8 días", de: "8 Tage" },
      route: {
        fr: "Copenhague (4j) → Helsingør / Kronborg (1j) → Bornholm (2j) → retour (1j)", en: "Copenhagen (4d) → Helsingør / Kronborg (1d) → Bornholm (2d) → return (1d)", es: "Copenhague (4d) → Helsingør / Kronborg (1d) → Bornholm (2d) → regreso (1d)", de: "Kopenhagen (4 Tage) → Helsingør / Kronborg (1 Tag) → Bornholm (2 Tage) → Rückfahrt (1 Tag)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 500 – 2 300 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Copenhague (SAS, Air France, EasyJet)", en: "Return flight Paris–Copenhagen (SAS, Air France, EasyJet)", es: "Vuelo ida y vuelta Madrid–Copenhague (SAS, Air France, EasyJet)", de: "Hin- und Rückflug Paris–Kopenhagen (SAS, Air France, EasyJet)" }, amount: "80–200 €" },
            { label: { fr: "Hébergement (8 nuits)", en: "Accommodation (8 nights)", es: "Alojamiento (8 noches)", de: "Unterkunft (8 Nächte)" }, amount: "400–650 €" },
            { label: { fr: "Transports (train + ferry + vélo)", en: "Transport (train + ferry + bike)", es: "Transporte (tren + ferry + bici)", de: "Transport (Zug + Fähre + Fahrrad)" }, amount: "200–350 €" },
            { label: { fr: "Nourriture (smørrebrød + supermarché)", en: "Food (smørrebrød + supermarket)", es: "Comida (smørrebrød + supermercado)", de: "Essen (Smørrebrød + Supermarkt)" }, amount: "350–500 €" },
            { label: { fr: "Activités & entrées", en: "Activities & admission tickets", es: "Actividades y entradas", de: "Aktivitäten & Einträge" }, amount: "200–350 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "3 000 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Copenhague", en: "Return flight Paris–Copenhagen", es: "Vuelo ida y vuelta Madrid–Copenhague", de: "Hin- und Rückflug Paris–Kopenhagen" }, amount: "100–300 €" },
            { label: { fr: "Hôtels 3★ (8 nuits)", en: "3★ hotels (8 nights)", es: "Hoteles 3★ (8 noches)", de: "3★ Hotels (8 Nächte)" }, amount: "1 000–1 800 €" },
            { label: { fr: "Transports + ferry Bornholm", en: "Transport + Bornholm ferry", es: "Transporte + ferry a Bornholm", de: "Transport + Fähre Bornholm" }, amount: "300–500 €" },
            { label: { fr: "Nourriture & restaurants (gastronomie)", en: "Food & restaurants (fine dining)", es: "Comida y restaurantes (alta gastronomía)", de: "Essen & Restaurants (Gastronomie)" }, amount: "700–1 200 €" },
            { label: { fr: "Activités, musées, tours", en: "Activities, museums, tours", es: "Actividades, museos, tours", de: "Aktivitäten, Museen, Touren" }, amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~2h (SAS, Air France, EasyJet direct CDG–Copenhague CPH). Nombreux vols quotidiens.", en: "~2h (SAS, Air France, EasyJet direct CDG–Copenhagen CPH). Many daily flights.", es: "~2h (SAS, Air France, EasyJet directo Madrid–Copenhague CPH). Numerosos vuelos diarios.", de: "ca. 2 Std. (SAS, Air France, EasyJet direkt CDG–Kopenhagen CPH). Viele tägliche Flüge." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Aucun visa — espace Schengen. Carte d'identité française suffisante.", en: "No visa required — Schengen area. A French national ID card is sufficient.", es: "Sin visado — espacio Schengen. DNI español suficiente.", de: "Kein Visum – Schengen-Raum. Ausreichender französischer Personalausweis." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Couronne danoise (DKK). Carte bancaire acceptée partout. Euros parfois acceptés (change défavorable). Espèces quasi inutiles.", en: "Danish krone (DKK). Cards are accepted everywhere. Euros are sometimes accepted (with poor exchange rates). Cash is almost unnecessary.", es: "Corona danesa (DKK). Tarjeta aceptada en todas partes. Euros a veces aceptados (cambio desfavorable). Efectivo casi innecesario.", de: "Dänische Krone (DKK). Kreditkarten werden überall akzeptiert. Manchmal werden Euro akzeptiert (ungünstiger Wechselkurs). Fast nutzlose Art." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Danois. Anglais quasi-universel — tous les Danois parlent un anglais excellent.", en: "Danish. English is nearly universal — Danes generally speak excellent English.", es: "Danés. El inglés es casi universal — los daneses hablan un inglés excelente.", de: "Dänisch. Fast universelles Englisch – alle Dänen sprechen ausgezeichnetes Englisch." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type C/F/K (européen + type K danois à 3 broches rondes) — 230V. La plupart des prises françaises fonctionnent directement.", en: "Type C/F/K (European + Danish type K with 3 round pins) — 230V. Most French plugs work directly.", es: "Tipo C/F/K (europeo + tipo K danés de 3 clavijas redondas) — 230V. La mayoría de enchufes españoles funcionan directamente.", de: "Typ C/F/K (europäischer + dänischer Typ K mit 3 runden Stiften) – 230 V. Die meisten französischen Steckdosen funktionieren direkt." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Aucune précaution. Carte européenne d'assurance maladie (CEAM) valide. Système de santé parmi les meilleurs du monde.", en: "No special precautions. The European Health Insurance Card (EHIC) is valid. The healthcare system is among the best in the world.", es: "Sin precauciones especiales. Tarjeta Sanitaria Europea (TSE) válida. Sistema de salud entre los mejores del mundo.", de: "Keine Vorsichtsmaßnahmen. Gültige Europäische Krankenversicherungskarte (EHIC). Gesundheitssystem gehört zu den besten der Welt." } },
    { icon: "🚲", label: { fr: "Vélo", en: "Cycling", es: "Bicicleta", de: "Fahrrad" }, value: { fr: "Copenhague est la capitale mondiale du vélo : 380km de pistes, priorité absolue aux cyclistes. Louer un vélo est le meilleur moyen de visiter.", en: "Copenhagen is the cycling capital of the world: 380 km of bike lanes and absolute priority for cyclists. Renting a bike is the best way to explore.", es: "Copenhague es la capital mundial de la bicicleta: 380 km de carriles, prioridad absoluta para los ciclistas. Alquilar una bici es la mejor forma de visitar la ciudad.", de: "Kopenhagen ist die Fahrradhauptstadt der Welt: 380 km Wege, absolute Priorität für Radfahrer. Ein Fahrrad zu mieten ist die beste Möglichkeit für einen Besuch." } },
    { icon: "😊", label: { fr: "Hygge", en: "Hygge", es: "Hygge", de: "Hygge" }, value: { fr: "Le hygge désigne l'art danois du bien-être douillet : bougies, plaid, café chaud et bonne compagnie. C'est une philosophie de vie, surtout en hiver.", en: "Hygge is the Danish art of cosy wellbeing: candles, blankets, hot coffee and good company. It is a way of life, especially in winter.", es: "El hygge designa el arte danés del bienestar acogedor: velas, mantas, café caliente y buena compañía. Es una filosofía de vida, sobre todo en invierno.", de: "Hygge bezeichnet die dänische Kunst des gemütlichen Wohlbefindens: Kerzen, Decken, heißer Kaffee und gute Gesellschaft. Es ist eine Lebensphilosophie, besonders im Winter." } },
  ],
};
