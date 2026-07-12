export const DENMARK = {
  code: "DNK",
  numericId: 208,
  name: { fr: "Danemark", en: "Denmark", es: "Dinamarca" },
  emoji: "🇩🇰",
  capital: { fr: "Copenhague", en: "Copenhagen", es: "Copenhague" },
  language: { fr: "Danois", en: "Danish", es: "Danés" },
  currency: { fr: "Couronne danoise (DKK)", en: "Danish krone (DKK)", es: "Corona danesa (DKK)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 110, budgetMid: 190,
    tripMin: 1500, tripMid: 3000,
  },
  description: {
    fr: "Le Danemark est le pays du 'hygge' (bien-être douillet), du design scandinave, de Noma (plusieurs fois meilleur restaurant du monde), et de Hamlet (château d'Elseneur). Copenhague est la capitale vélo d'Europe, avec ses canaux de Nyhavn, ses marchés de street food de Reffen, ses musées de design et le parc de Tivoli. Le Danemark inclut aussi les Îles Féroé et le Groenland.",
    en: "Denmark is the land of hygge (cosy wellbeing), Scandinavian design, Noma (several times named the world's best restaurant), and Hamlet (Elsinore Castle). Copenhagen is Europe's cycling capital, with the Nyhavn canals, Reffen's street food markets, design museums and Tivoli Gardens. Denmark also includes the Faroe Islands and Greenland.",
    es: "Dinamarca es el país del 'hygge' (bienestar acogedor), del diseño escandinavo, de Noma (varias veces mejor restaurante del mundo) y de Hamlet (castillo de Elsinor). Copenhague es la capital de la bicicleta en Europa, con los canales de Nyhavn, los mercados de street food de Reffen, sus museos de diseño y el parque de Tivoli. Dinamarca incluye también las Islas Feroe y Groenlandia.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Août", en: "June – August", es: "Junio – Agosto" },
      label: { fr: "Été danois", en: "Danish summer", es: "Verano danés" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : 18–23°C à Copenhague, longues journées lumineuses, festivals (Roskilde Festival), terrasses, marchés et archipels. L'été danois est court mais intense.",
        en: "Best time to go: 18–23°C in Copenhagen, long bright days, festivals (Roskilde Festival), terraces, markets and archipelagos. The Danish summer is short but intense.",
        es: "La mejor época: 18–23°C en Copenhague, días largos y luminosos, festivales (Roskilde Festival), terrazas, mercados y archipiélagos. El verano danés es corto pero intenso.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre", en: "December", es: "Diciembre" },
      label: { fr: "Noël scandinave", en: "Scandinavian Christmas", es: "Navidad escandinava" },
      color: "#f59e0b",
      description: {
        fr: "Marchés de Noël parmi les plus beaux d'Europe, Tivoli illuminé, hygge dans les cafés, vin chaud (gløgg) et æbleskiver. Températures froides (0–5°C) mais atmosphère unique.",
        en: "Some of Europe's most beautiful Christmas markets, Tivoli lit up, hygge in cafés, mulled wine (gløgg) and æbleskiver. Cold temperatures (0–5°C), but a truly unique atmosphere.",
        es: "Mercados de Navidad entre los más bellos de Europa, Tivoli iluminado, hygge en los cafés, vino caliente (gløgg) y æbleskiver. Temperaturas frías (0–5°C) pero un ambiente único.",
      },
      icon: "🎄",
    },
  ],

  weatherCities: [
    {
      id: "copenhagen",
      name: "Copenhague",
      region: { fr: "Capitale (île de Sjælland)", en: "Capital region (island of Zealand)", es: "Capital (isla de Selandia)" },
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
      region: { fr: "Jutland (péninsule principale)", en: "Jutland (main peninsula)", es: "Jutlandia (península principal)" },
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
      name: { fr: "Copenhague — Vélos et canaux", en: "Copenhagen — Bikes and canals", es: "Copenhague — bicicletas y canales" },
      region: { fr: "Sjælland", en: "Zealand", es: "Selandia" },
      description: {
        fr: "Copenhague est régulièrement élue ville la plus cyclable du monde (400km de pistes cyclables). Nyhavn, ses maisons colorées du XVIIe siècle au bord de l'eau, est l'image de la ville. La Petite Sirène (sculpture d'Andersen), les ruelles de Christiania (commune libre), et la scène gastronomique (Noma, Geranium, Kadeau) font de Copenhague une capitale européenne de premier rang.",
        en: "Copenhagen is regularly ranked the world's most bike-friendly city (400 km of cycle lanes). Nyhavn, with its colourful 17th-century waterfront houses, is the city's signature image. The Little Mermaid (Andersen's sculpture), the lanes of Christiania (a self-governing free town), and the food scene (Noma, Geranium, Kadeau) make Copenhagen a top-tier European capital.",
        es: "Copenhague es elegida regularmente la ciudad más apta para bicicletas del mundo (400 km de carriles bici). Nyhavn, con sus casas coloridas del siglo XVII a orillas del agua, es la imagen de la ciudad. La Sirenita (escultura de Andersen), las callejuelas de Christiania (comuna libre) y la escena gastronómica (Noma, Geranium, Kadeau) hacen de Copenhague una capital europea de primer nivel.",
      },
      wikipedia: "Copenhagen",
      tags: ["Vélo", "Design", "Gastronomie", "Canaux", "Ville", "Architecture"],
      mustSee: [
        { name: { fr: "Nyhavn — maisons colorées et bateaux historiques", en: "Nyhavn — colourful houses and historic boats", es: "Nyhavn — casas coloridas y barcos históricos" }, wikipedia: "Nyhavn" },
        { name: { fr: "Tivoli Gardens — parc d'attractions depuis 1843", en: "Tivoli Gardens — amusement park since 1843", es: "Tivoli Gardens — parque de atracciones desde 1843" }, wikipedia: "File:Tivoli Lake Parterrehaven.jpg" },
        { name: { fr: "Musée National et Statens Museum for Kunst", en: "National Museum and Statens Museum for Kunst", es: "Museo Nacional y Statens Museum for Kunst" }, wikipedia: "File:Statens Museum for Kunst, København.jpg" },
        { name: { fr: "Christiania — commune libre et culture alternative", en: "Christiania — free town and alternative culture", es: "Christiania — comuna libre y cultura alternativa" }, wikipedia: "Freetown_Christiania" },
      ],
    },
    {
      id: 2,
      name: { fr: "Château de Kronborg — Hamlet's Castle", en: "Kronborg Castle — Hamlet's Castle", es: "Castillo de Kronborg — el castillo de Hamlet" },
      region: { fr: "Helsingør (Elseneur)", en: "Helsingør (Elsinore)", es: "Helsingør (Elsinor)" },
      description: {
        fr: "Le château de Kronborg à Helsingør (à 45min de train de Copenhague) est classé UNESCO : c'est le château d'Elseneur de la pièce de Shakespeare 'Hamlet'. Construit en 1574, il contrôle le détroit de l'Øresund entre le Danemark et la Suède. Ses donjons abritent la statue du Viking légendaire Holger Danske, endormi jusqu'au jour où le Danemark aura besoin de lui.",
        en: "Kronborg Castle in Helsingør (45 minutes by train from Copenhagen) is a UNESCO site: it is Elsinore Castle from Shakespeare's Hamlet. Built in 1574, it overlooks the Øresund strait between Denmark and Sweden. Its underground casemates house the statue of the legendary Viking Holger Danske, asleep until the day Denmark needs him.",
        es: "El castillo de Kronborg en Helsingør (a 45 min en tren de Copenhague) está declarado UNESCO: es el castillo de Elsinor de la obra de Shakespeare 'Hamlet'. Construido en 1574, controla el estrecho de Øresund entre Dinamarca y Suecia. Sus mazmorras albergan la estatua del legendario vikingo Holger Danske, dormido hasta el día en que Dinamarca lo necesite.",
      },
      wikipedia: "Kronborg",
      tags: ["Château", "Shakespeare", "UNESCO", "Histoire"],
      mustSee: [
        { name: { fr: "Château de Kronborg — décor de Hamlet (UNESCO)", en: "Kronborg Castle — the setting of Hamlet (UNESCO)", es: "Castillo de Kronborg — escenario de Hamlet (UNESCO)" }, wikipedia: "Kronborg" },
        { name: { fr: "Donjons avec la statue de Holger Danske", en: "Casemates with the statue of Holger Danske", es: "Mazmorras con la estatua de Holger Danske" }, wikipedia: "File:Holger Danske, Kronborg 2023.jpg" },
        { name: { fr: "Vue sur l'Øresund et la Suède à 4km", en: "Views over the Øresund and Sweden just 4 km away", es: "Vistas del Øresund y Suecia a 4 km" }, wikipedia: "Helsingør" },
        { name: { fr: "Musée maritime danois (M/S Museet for Søfart)", en: "Danish Maritime Museum (M/S Museet for Søfart)", es: "Museo marítimo danés (M/S Museet for Søfart)" }, wikipedia: "File:Maritime Museum of Denmark April 2026 01.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Legoland et Jutland — Dunes et patrimoine", en: "Legoland & Jutland — Dunes and heritage", es: "Legoland y Jutlandia — dunas y patrimonio" },
      region: { fr: "Jutland (ouest)", en: "West Jutland", es: "Jutlandia (oeste)" },
      description: {
        fr: "Billund abrite le Legoland original (créé en 1968) — le plus grand parc Lego du monde. Mais le Jutland réserve bien d'autres trésors : les dunes de Råbjerg Mile (la dune migratrice), les plages sauvages de la mer du Nord, et les tumulus vikings de Jelling (runes royales du Xe siècle, UNESCO) — le berceau du christianisme danois.",
        en: "Billund is home to the original Legoland (created in 1968) — the world's largest Lego park. But Jutland has many other treasures: the dunes of Råbjerg Mile (the migrating dune), the wild North Sea beaches, and the Viking burial mounds of Jelling (10th-century royal runestones, UNESCO) — the cradle of Danish Christianity.",
        es: "Billund alberga el Legoland original (creado en 1968), el mayor parque Lego del mundo. Pero Jutlandia guarda muchos otros tesoros: las dunas de Råbjerg Mile (la duna migratoria), las playas salvajes del mar del Norte y los túmulos vikingos de Jelling (runas reales del siglo X, UNESCO), la cuna del cristianismo danés.",
      },
      wikipedia: "File:Jutland Street - geograph.org.uk - 7939998.jpg",
      tags: ["Legoland", "Dunes", "UNESCO", "Plage", "Nature"],
      mustSee: [
        { name: { fr: "Legoland Billund — le parc Lego original (depuis 1968)", en: "Legoland Billund — the original Lego park (since 1968)", es: "Legoland Billund — el parque Lego original (desde 1968)" }, wikipedia: "File:LegoBillundTowerView.jpg" },
        { name: { fr: "Tumulus de Jelling — runes royales du Xe siècle (UNESCO)", en: "Jelling burial mounds — 10th-century royal runestones (UNESCO)", es: "Túmulos de Jelling — runas reales del siglo X (UNESCO)" }, wikipedia: "File:Jelling, cemetery July 2015.jpg" },
        { name: { fr: "Dune migratrice de Råbjerg Mile — désert de sable en Scandinavie", en: "Råbjerg Mile migrating dune — a sandy desert in Scandinavia", es: "Duna migratoria de Råbjerg Mile — un desierto de arena en Escandinavia" }, wikipedia: "Råbjerg_Mile" },
        { name: { fr: "Plages sauvages de Skagen — pointe nord du Jutland", en: "Skagen's wild beaches — the northern tip of Jutland", es: "Playas salvajes de Skagen — la punta norte de Jutlandia" }, wikipedia: "Skagen" },
      ],
    },
    {
      id: 4,
      name: { fr: "Bornholm — Île fumée de harengs", en: "Bornholm — Island of smoked herring", es: "Bornholm — la isla del arenque ahumado" },
      region: { fr: "Mer Baltique", en: "Baltic Sea", es: "Mar Báltico" },
      description: {
        fr: "Bornholm est une île danoise en mer Baltique (plus proche de la Suède et de la Pologne que du Danemark) : ses roundkirker (églises-forteresses rondes du XIIe siècle, uniques en Europe), ses fumeries de harengs de Hasle et Nexø, ses plages de sable blanc, et ses rochers de granite font d'elle la perle cachée de Scandinavie.",
        en: "Bornholm is a Danish island in the Baltic Sea (closer to Sweden and Poland than to Denmark): its roundkirker (12th-century round fortress churches, unique in Europe), its smoked herring smokehouses in Hasle and Nexø, its white sand beaches, and its granite cliffs make it one of Scandinavia's hidden gems.",
        es: "Bornholm es una isla danesa en el mar Báltico (más cerca de Suecia y Polonia que de Dinamarca): sus roundkirker (iglesias-fortaleza redondas del siglo XII, únicas en Europa), sus ahumaderos de arenque de Hasle y Nexø, sus playas de arena blanca y sus rocas de granito la convierten en la joya oculta de Escandinavia.",
      },
      wikipedia: "Bornholm",
      tags: ["Île", "Fumoirs", "Médiéval", "Baltique", "Nature", "Plage"],
      mustSee: [
        { name: { fr: "Roundkirker (églises rondes forteresses) — uniques en Europe", en: "Roundkirker (round fortress churches) — unique in Europe", es: "Roundkirker (iglesias-fortaleza redondas) — únicas en Europa" }, wikipedia: "File:Nylars Round Church on Bornholm.jpg" },
        { name: { fr: "Rocher de Hammershus — ruines de château le plus grand de Scandinavie", en: "Hammershus — the ruins of Scandinavia's largest castle", es: "Roca de Hammershus — ruinas del castillo más grande de Escandinavia" }, wikipedia: "File:Bornholm Hammershus 01.jpg" },
        { name: { fr: "Plages de sable blanc de Dueodde (côte sud)", en: "Dueodde's white sand beaches (south coast)", es: "Playas de arena blanca de Dueodde (costa sur)" }, wikipedia: "File:Stormy Baltic sea on Bornholm.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Danemark est parmi les pays les plus chers d'Europe. Les taxes (TVA à 25%) sont élevées mais incluses dans les prix affichés. Copenhague rivalise avec Zürich et Oslo en termes de coût de la vie. Le vélo permet d'économiser sur les transports.",
      en: "Denmark is one of the most expensive countries in Europe. Taxes (25% VAT) are high, but they are included in displayed prices. Copenhagen rivals Zurich and Oslo in terms of cost of living. Cycling helps save money on transport.",
      es: "Dinamarca está entre los países más caros de Europa. Los impuestos (IVA del 25%) son elevados pero están incluidos en los precios mostrados. Copenhague rivaliza con Zúrich y Oslo en coste de vida. La bicicleta permite ahorrar en transporte.",
    },
    currency: "DKK",
    exchangeRate: "1€ ≈ 7,45 DKK",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Auberge de jeunesse / hostel Copenhague", en: "Copenhagen hostel / youth hostel", es: "Albergue juvenil / hostel en Copenhague" }, price: "35–70 €", detail: { fr: "Dortoir ou chambre privée", en: "Dorm or private room", es: "Dormitorio o habitación privada" } },
          { label: { fr: "Hôtel 3★ Copenhague", en: "3★ hotel in Copenhagen", es: "Hotel 3★ en Copenhague" }, price: "130–220 €", detail: { fr: "Confort standard en capitale", en: "Standard comfort in the capital", es: "Confort estándar en la capital" } },
          { label: { fr: "Camping Danemark (réseau officiel)", en: "Camping in Denmark (official network)", es: "Camping en Dinamarca (red oficial)" }, price: "15–30 €", detail: { fr: "Qualité excellente, emplacements ombragés", en: "Excellent quality, shaded pitches", es: "Excelente calidad, parcelas con sombra" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Smørrebrød (tartines ouvertes danoises) dans un café", en: "Smørrebrød (Danish open sandwiches) in a café", es: "Smørrebrød (tostas abiertas danesas) en una cafetería" }, price: "12–20 €", detail: { fr: "Déjeuner typique danois", en: "Typical Danish lunch", es: "Almuerzo típico danés" } },
          { label: { fr: "Street food marché de Torvehallerne ou Reffen", en: "Street food at Torvehallerne or Reffen", es: "Street food en el mercado de Torvehallerne o Reffen" }, price: "10–18 €", detail: { fr: "Halles + conteneurs sur la rive", en: "Food hall + shipping containers on the waterfront", es: "Mercado cubierto + contenedores junto al agua" } },
          { label: { fr: "Supermarché Netto ou Aldi — courses journée", en: "Netto or Aldi supermarket — food for the day", es: "Supermercado Netto o Aldi — compra del día" }, price: "15–25 €", detail: { fr: "Option économique essentielle", en: "Essential budget option", es: "Opción económica esencial" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Métro + bus Copenhague (ticket 24h, zones 1–4)", en: "Copenhagen metro + bus (24-hour ticket, zones 1–4)", es: "Metro + autobús de Copenhague (billete 24h, zonas 1–4)" }, price: "14 €", detail: { fr: "Réseau excellent et ponctuel", en: "Excellent and punctual network", es: "Red excelente y puntual" } },
          { label: { fr: "Train Copenhague–Aarhus (3h, DSB)", en: "Copenhagen–Aarhus train (3h, DSB)", es: "Tren Copenhague–Aarhus (3h, DSB)" }, price: "25–55 €", detail: { fr: "Réservation recommandée en été", en: "Booking recommended in summer", es: "Reserva recomendada en verano" } },
          { label: { fr: "Location vélo Copenhague (journée)", en: "Bike rental in Copenhagen (full day)", es: "Alquiler de bici en Copenhague (día)" }, price: "15–25 €", detail: { fr: "Le meilleur moyen de découvrir la ville", en: "The best way to explore the city", es: "La mejor forma de descubrir la ciudad" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Tivoli Gardens (entrée)", en: "Tivoli Gardens (entry)", es: "Jardines de Tivoli (entrada)" }, price: "18 €", detail: { fr: "Manèges en supplément (pass disponible)", en: "Rides cost extra (passes available)", es: "Atracciones aparte (bono disponible)" } },
          { label: { fr: "Musée national danois (entrée gratuite)", en: "National Museum of Denmark (free entry)", es: "Museo Nacional de Dinamarca (entrada gratuita)" }, price: "0 €", detail: { fr: "Collections vikings et médiévales", en: "Viking and medieval collections", es: "Colecciones vikingas y medievales" } },
          { label: { fr: "Tour en kayak des canaux de Copenhague", en: "Kayak tour of Copenhagen's canals", es: "Tour en kayak por los canales de Copenhague" }, price: "30–50 €", detail: { fr: "Guidé ou location libre (2h)", en: "Guided or self-rental (2h)", es: "Guiado o alquiler libre (2h)" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero" }, daily: "110–170 €/j", desc: { fr: "Hostel + smørrebrød + supermarché + vélo", en: "Hostel + smørrebrød + supermarket + bike", es: "Hostel + smørrebrød + supermercado + bici" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort" }, daily: "190–320 €/j", desc: { fr: "Hôtel 3★ + restaurants + musées + excursions", en: "3★ hotel + restaurants + museums + excursions", es: "Hotel 3★ + restaurantes + museos + excursiones" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days", es: "8 días" },
      route: {
        fr: "Copenhague (4j) → Helsingør / Kronborg (1j) → Bornholm (2j) → retour (1j)",
        en: "Copenhagen (4d) → Helsingør / Kronborg (1d) → Bornholm (2d) → return (1d)",
        es: "Copenhague (4d) → Helsingør / Kronborg (1d) → Bornholm (2d) → regreso (1d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "1 500 – 2 300 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Copenhague (SAS, Air France, EasyJet)", en: "Return flight Paris–Copenhagen (SAS, Air France, EasyJet)", es: "Vuelo ida y vuelta Madrid–Copenhague (SAS, Air France, EasyJet)" }, amount: "80–200 €" },
            { label: { fr: "Hébergement (8 nuits)", en: "Accommodation (8 nights)", es: "Alojamiento (8 noches)" }, amount: "400–650 €" },
            { label: { fr: "Transports (train + ferry + vélo)", en: "Transport (train + ferry + bike)", es: "Transporte (tren + ferry + bici)" }, amount: "200–350 €" },
            { label: { fr: "Nourriture (smørrebrød + supermarché)", en: "Food (smørrebrød + supermarket)", es: "Comida (smørrebrød + supermercado)" }, amount: "350–500 €" },
            { label: { fr: "Activités & entrées", en: "Activities & admission tickets", es: "Actividades y entradas" }, amount: "200–350 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "3 000 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Copenhague", en: "Return flight Paris–Copenhagen", es: "Vuelo ida y vuelta Madrid–Copenhague" }, amount: "100–300 €" },
            { label: { fr: "Hôtels 3★ (8 nuits)", en: "3★ hotels (8 nights)", es: "Hoteles 3★ (8 noches)" }, amount: "1 000–1 800 €" },
            { label: { fr: "Transports + ferry Bornholm", en: "Transport + Bornholm ferry", es: "Transporte + ferry a Bornholm" }, amount: "300–500 €" },
            { label: { fr: "Nourriture & restaurants (gastronomie)", en: "Food & restaurants (fine dining)", es: "Comida y restaurantes (alta gastronomía)" }, amount: "700–1 200 €" },
            { label: { fr: "Activités, musées, tours", en: "Activities, museums, tours", es: "Actividades, museos, tours" }, amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid" }, value: { fr: "~2h (SAS, Air France, EasyJet direct CDG–Copenhague CPH). Nombreux vols quotidiens.", en: "~2h (SAS, Air France, EasyJet direct CDG–Copenhagen CPH). Many daily flights.", es: "~2h (SAS, Air France, EasyJet directo Madrid–Copenhague CPH). Numerosos vuelos diarios." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "Aucun visa — espace Schengen. Carte d'identité française suffisante.", en: "No visa required — Schengen area. A French national ID card is sufficient.", es: "Sin visado — espacio Schengen. DNI español suficiente." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Couronne danoise (DKK). Carte bancaire acceptée partout. Euros parfois acceptés (change défavorable). Espèces quasi inutiles.", en: "Danish krone (DKK). Cards are accepted everywhere. Euros are sometimes accepted (with poor exchange rates). Cash is almost unnecessary.", es: "Corona danesa (DKK). Tarjeta aceptada en todas partes. Euros a veces aceptados (cambio desfavorable). Efectivo casi innecesario." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Danois. Anglais quasi-universel — tous les Danois parlent un anglais excellent.", en: "Danish. English is nearly universal — Danes generally speak excellent English.", es: "Danés. El inglés es casi universal — los daneses hablan un inglés excelente." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico" }, value: { fr: "Type C/F/K (européen + type K danois à 3 broches rondes) — 230V. La plupart des prises françaises fonctionnent directement.", en: "Type C/F/K (European + Danish type K with 3 round pins) — 230V. Most French plugs work directly.", es: "Tipo C/F/K (europeo + tipo K danés de 3 clavijas redondas) — 230V. La mayoría de enchufes españoles funcionan directamente." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Aucune précaution. Carte européenne d'assurance maladie (CEAM) valide. Système de santé parmi les meilleurs du monde.", en: "No special precautions. The European Health Insurance Card (EHIC) is valid. The healthcare system is among the best in the world.", es: "Sin precauciones especiales. Tarjeta Sanitaria Europea (TSE) válida. Sistema de salud entre los mejores del mundo." } },
    { icon: "🚲", label: { fr: "Vélo", en: "Cycling", es: "Bicicleta" }, value: { fr: "Copenhague est la capitale mondiale du vélo : 380km de pistes, priorité absolue aux cyclistes. Louer un vélo est le meilleur moyen de visiter.", en: "Copenhagen is the cycling capital of the world: 380 km of bike lanes and absolute priority for cyclists. Renting a bike is the best way to explore.", es: "Copenhague es la capital mundial de la bicicleta: 380 km de carriles, prioridad absoluta para los ciclistas. Alquilar una bici es la mejor forma de visitar la ciudad." } },
    { icon: "😊", label: { fr: "Hygge", en: "Hygge", es: "Hygge" }, value: { fr: "Le hygge désigne l'art danois du bien-être douillet : bougies, plaid, café chaud et bonne compagnie. C'est une philosophie de vie, surtout en hiver.", en: "Hygge is the Danish art of cosy wellbeing: candles, blankets, hot coffee and good company. It is a way of life, especially in winter.", es: "El hygge designa el arte danés del bienestar acogedor: velas, mantas, café caliente y buena compañía. Es una filosofía de vida, sobre todo en invierno." } },
  ],
};
