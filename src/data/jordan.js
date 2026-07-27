export const JORDAN = {
  code: "JOR",
  numericId: 400,
  name: { fr: "Jordanie", en: "Jordan", es: "Jordania", de: "Jordanien" },
  emoji: "🇯🇴",
  capital: { fr: "Amman", en: "Amman", es: "Amán", de: "Amman" },
  language: { fr: "Arabe", en: "Arabic", es: "Árabe", de: "Arabisch" },
  currency: { fr: "Dinar jordanien (JOD)", en: "Jordanian dinar (JOD)", es: "Dinar jordano (JOD)", de: "Jordanischer Dinar (JOD)" },
  timezone: "UTC+3",
  filter: {
    budgetMin: 40, budgetMid: 90,
    tripMin: 1500, tripMid: 3000,
  },
  criteria: {
    unesco: 3,
    nature: 2,
    randonnee: 2,
    gastronomie: 2,
    architecture: 2,
    desert: 3,
    safari: 0,
    ski: 0,
    ville: 2,
    plage: 1,
  },
  description: {
    fr: "La Jordanie est un joyau du Moyen-Orient : Pétra, cité nabatéenne taillée dans la roche rose, le désert de Wadi Rum aux teintes martiennes, la mer Morte où l'on flotte sans effort et les ruines romaines de Jérash. Un pays ouvert, sûr et accueillant.", en: "Jordan is a jewel of the Middle East: Petra, a Nabataean city carved into pink rock, the Mars-like hues of Wadi Rum desert, the Dead Sea where you float effortlessly, and the Roman ruins of Jerash. An open, safe and welcoming country.", es: "Jordania es una joya de Oriente Medio: Petra, ciudad nabatea tallada en roca rosa, el desierto de Wadi Rum de tonos marcianos, el mar Muerto donde se flota sin esfuerzo y las ruinas romanas de Jerash. Un país abierto, seguro y acogedor.", de: "Jordanien ist ein Juwel des Nahen Ostens: Petra, eine nabatäische Stadt, die aus rosafarbenem Fels gehauen wurde, die Wüste Wadi Rum mit ihren Marsfarben, das Tote Meer, in dem Sie mühelos schweben können, und die römischen Ruinen von Jerash. Ein offenes, sicheres und einladendes Land.",
  },

  bestPeriods: [
    {
      months: { fr: "Mars – Mai", en: "March – May", es: "Marzo – Mayo", de: "März – Mai" },
      label: { fr: "Printemps", en: "Spring", es: "Primavera", de: "Frühling" },
      color: "#22c55e",
      description: {
        fr: "Températures parfaites (18–25 °C), fleurs dans les vallées, idéal pour Pétra et Wadi Rum. Éviter Ramadan si possible.", en: "Perfect temperatures (18–25°C), flowers blooming in the valleys, and ideal conditions for Petra and Wadi Rum. Avoid Ramadan if possible.", es: "Temperaturas perfectas (18–25 °C), flores en los valles, ideal para Petra y Wadi Rum. Evitar el Ramadán si es posible.", de: "Perfekte Temperaturen (18–25°C), Blumen in den Tälern, ideal für Petra und Wadi Rum. Vermeiden Sie nach Möglichkeit den Ramadan.",
      },
      icon: "🌸",
    },
    {
      months: { fr: "Septembre – Novembre", en: "September – November", es: "Septiembre – Noviembre", de: "September – November" },
      label: { fr: "Automne doré", en: "Golden autumn", es: "Otoño dorado", de: "Goldener Herbst" },
      color: "#fb923c",
      description: {
        fr: "Chaleur moins intense (22–28 °C), ciel clair, parfait pour explorer les sites archéologiques.", en: "Less intense heat (22–28°C) and clear skies, perfect for exploring the archaeological sites.", es: "Calor menos intenso (22–28 °C), cielo despejado, perfecto para explorar los sitios arqueológicos.", de: "Weniger starke Hitze (22–28 °C), klarer Himmel, ideal für die Erkundung archäologischer Stätten.",
      },
      icon: "🏺",
    },
    {
      months: { fr: "Décembre – Février", en: "December – February", es: "Diciembre – Febrero", de: "Dezember – Februar" },
      label: { fr: "Hiver doux", en: "Mild winter", es: "Invierno suave", de: "Milder Winter" },
      color: "#93c5fd",
      description: {
        fr: "Frais mais agréable pour visiter (8–16 °C). Pétra sous la neige est spectaculaire. Mer Morte accessible.", en: "Cool but pleasant for sightseeing (8–16°C). Petra under snow is spectacular, and the Dead Sea remains accessible.", es: "Fresco pero agradable para visitar (8–16 °C). Petra bajo la nieve es espectacular. El mar Muerto sigue siendo accesible.", de: "Kühl, aber angenehm zu besuchen (8–16°C). Petra unter dem Schnee ist spektakulär. Zugang zum Toten Meer.",
      },
      icon: "⛅",
    },
  ],

  weatherCities: [
    {
      id: "amman",
      name: "Amman",
      region: { fr: "Nord", en: "North", es: "Norte", de: "Norden" },
      data: [
        { month: "Jan", temp: 8,  rain: 65,  icon: "⛅" },
        { month: "Fév", temp: 9,  rain: 65,  icon: "⛅" },
        { month: "Mar", temp: 12, rain: 45,  icon: "⛅" },
        { month: "Avr", temp: 18, rain: 20,  icon: "☀️" },
        { month: "Mai", temp: 23, rain: 5,   icon: "☀️" },
        { month: "Jun", temp: 27, rain: 0,   icon: "⛅" },
        { month: "Jul", temp: 29, rain: 0,   icon: "⛅" },
        { month: "Aoû", temp: 29, rain: 0,   icon: "⛅" },
        { month: "Sep", temp: 27, rain: 0,   icon: "⛅" },
        { month: "Oct", temp: 22, rain: 10,  icon: "☀️" },
        { month: "Nov", temp: 16, rain: 30,  icon: "⛅" },
        { month: "Déc", temp: 10, rain: 60,  icon: "⛅" },
      ],
    },
    {
      id: "wadi_rum",
      name: "Wadi Rum",
      region: { fr: "Sud", en: "South", es: "Sur", de: "Süden" },
      data: [
        { month: "Jan", temp: 10, rain: 10,  icon: "☀️" },
        { month: "Fév", temp: 12, rain: 8,   icon: "☀️" },
        { month: "Mar", temp: 17, rain: 5,   icon: "☀️" },
        { month: "Avr", temp: 23, rain: 2,   icon: "☀️" },
        { month: "Mai", temp: 29, rain: 0,   icon: "⛅" },
        { month: "Jun", temp: 33, rain: 0,   icon: "🌡️" },
        { month: "Jul", temp: 34, rain: 0,   icon: "🌡️" },
        { month: "Aoû", temp: 33, rain: 0,   icon: "🌡️" },
        { month: "Sep", temp: 30, rain: 0,   icon: "⛅" },
        { month: "Oct", temp: 24, rain: 2,   icon: "☀️" },
        { month: "Nov", temp: 18, rain: 5,   icon: "☀️" },
        { month: "Déc", temp: 12, rain: 8,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Pétra",
      region: { fr: "Ma'an", en: "Ma'an", es: "Ma'an", de: "Ma'an" },
      description: {
        fr: "L'une des sept merveilles du monde moderne : une cité nabatéenne entière sculptée dans la roche rose, avec le Trésor (Al-Khazneh) comme symbole absolu.", en: "One of the New Seven Wonders of the World: an entire Nabataean city carved into pink rock, with the Treasury (Al-Khazneh) as its ultimate symbol.", es: "Una de las siete maravillas del mundo moderno: una ciudad nabatea entera esculpida en roca rosa, con el Tesoro (Al-Khazneh) como su símbolo absoluto.", de: "Eines der sieben Weltwunder der Moderne: eine ganze nabatäische Stadt, die aus rosafarbenem Fels gehauen ist, mit der Schatzkammer (Al-Khazneh) als absolutem Symbol.",
      },
      wikipedia: "Petra",
      tags: ["Histoire", "UNESCO", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Le Trésor (Al-Khazneh)", en: "The Treasury (Al-Khazneh)", es: "El Tesoro (Al-Khazneh)", de: "Die Schatzkammer (Al-Khazneh)" }, wikipedia: "Al-Khazneh" },
        { name: { fr: "Le Monastère (Ad Deir)", en: "The Monastery (Ad Deir)", es: "El Monasterio (Ad Deir)", de: "Das Kloster (Ad Deir)" }, wikipedia: "File:The Monastery, Petra, Jordan8.jpg" },
        { name: { fr: "Le Siq (gorge d'entrée)", en: "The Siq (entrance gorge)", es: "El Siq (garganta de entrada)", de: "Der Siq (Eingangsschlucht)" }, wikipedia: "File:Al hakem mosque.jpg" },
        { name: "Petra by Night", wikipedia: "File:Petra by Night, Jordan.jpg" },
      ],
    },
    {
      id: 2,
      name: "Wadi Rum",
      region: { fr: "Aqaba", en: "Aqaba", es: "Aqaba", de: "Akaba" },
      description: {
        fr: "Désert de grès et de granit aux teintes rouges et orangées, décor de science-fiction qui a servi pour plusieurs films. Nuits sous les étoiles en camp bédouin inoubliables.", en: "A desert of sandstone and granite in shades of red and orange, a sci-fi landscape that has served as the backdrop for several films. Unforgettable nights under the stars in a Bedouin camp.", es: "Desierto de arenisca y granito en tonos rojos y anaranjados, paisaje de ciencia ficción que ha servido de escenario para varias películas. Noches inolvidables bajo las estrellas en un campamento beduino.", de: "Wüste aus Sandstein und Granit mit roten und orangen Farbtönen, Science-Fiction-Kulisse, die für mehrere Filme genutzt wurde. Unvergessliche Nächte unter dem Sternenhimmel in einem Beduinenlager.",
      },
      wikipedia: "Wadi_Rum",
      tags: ["Désert", "Nature", "Aventure", "Randonnée"],
      mustSee: [
        { name: { fr: "Dunes de sable rouge", en: "Red sand dunes", es: "Dunas de arena roja", de: "Rote Sanddünen" }, wikipedia: "Wadi_Rum" },
        { name: { fr: "Pont naturel de Burdah", en: "Burdah Rock Bridge", es: "Puente natural de Burdah", de: "Burdah Natural Bridge" }, wikipedia: "File:Wadi Rum in December.jpg" },
      ],
    },
    {
      id: 3,
      name: "Amman",
      region: { fr: "Amman", en: "Amman", es: "Amán", de: "Amman" },
      description: {
        fr: "Capitale moderne et ancienne à la fois, avec la Citadelle sur une colline, l'amphithéâtre romain du IIe siècle et les ruelles animées du quartier Rainbow Street.", en: "A capital that is both modern and ancient, with its hilltop Citadel, a 2nd-century Roman amphitheatre and the lively streets of the Rainbow Street district.", es: "Una capital moderna y antigua a la vez, con la Ciudadela sobre una colina, el anfiteatro romano del siglo II y las animadas callejuelas del barrio de Rainbow Street.", de: "Eine moderne und antike Hauptstadt zugleich, mit der Zitadelle auf einem Hügel, dem römischen Amphitheater aus dem 2. Jahrhundert und den belebten Straßen des Rainbow Street-Viertels.",
      },
      wikipedia: "Amman",
      tags: ["Ville", "Histoire", "Culture", "Architecture"],
      mustSee: [
        { name: { fr: "Citadelle d'Amman", en: "Amman Citadel", es: "Ciudadela de Amán", de: "Zitadelle von Amman" }, wikipedia: "Amman_Citadel" },
        { name: { fr: "Théâtre romain d'Amman", en: "Roman Theatre of Amman", es: "Teatro romano de Amán", de: "Römisches Theater von Amman" }, wikipedia: "File:Roman theater of Amman 01.jpg" },
        { name: { fr: "Jérash — ruines romaines", en: "Jerash — Roman ruins", es: "Jerash — ruinas romanas", de: "Jerash – römische Ruinen" }, wikipedia: "Jerash" },
      ],
    },
    {
      id: 4,
      name: { fr: "Mer Morte", en: "Dead Sea", es: "Mar Muerto", de: "Totes Meer" },
      region: { fr: "Ghor", en: "Ghor", es: "Ghor", de: "Ghor" },
      description: {
        fr: "Le point le plus bas de la Terre (430 m sous le niveau de la mer). Baignade flottante dans une eau ultra-salée aux propriétés minérales uniques, enduire de boue noire.", en: "The lowest point on Earth (430 metres below sea level). Float effortlessly in ultra-salty water with unique mineral properties, and cover yourself in black mud.", es: "El punto más bajo de la Tierra (430 m bajo el nivel del mar). Baño flotante en un agua ultrasalada de propiedades minerales únicas, cubrirse de barro negro.", de: "Der tiefste Punkt der Erde (430 m unter dem Meeresspiegel). Schwimmen Sie in ultrasalzigem Wasser mit einzigartigen mineralischen Eigenschaften, das mit schwarzem Schlamm bedeckt ist.",
      },
      wikipedia: "Dead_Sea",
      tags: ["Nature", "Détente"],
      mustSee: [
        { name: { fr: "Bain flottant (sel 30%)", en: "Floating bath (30% salt)", es: "Baño flotante (30% de sal)", de: "Schwebebad (30 % Salz)" }, wikipedia: "File:Dead Sea salt crystals.jpg" },
        { name: { fr: "Coucher de soleil sur la mer", en: "Sunset over the sea", es: "Atardecer sobre el mar", de: "Sonnenuntergang über dem Meer" }, wikipedia: "File:The dead sea.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Jordanie est relativement onéreuse pour la région mais offre un excellent rapport qualité/expérience. Pétra à elle seule représente un budget conséquent (entrée ~60 €/jour).", en: "Jordan is relatively expensive for the region but offers excellent value in terms of experience. Petra alone accounts for a significant part of the budget (entry ~60 €/day).", es: "Jordania es relativamente cara para la región, pero ofrece una excelente relación calidad/experiencia. Solo Petra representa un presupuesto considerable (entrada ~60 €/día).", de: "Jordanien ist für die Region relativ teuer, bietet aber ein hervorragendes Preis-Leistungs-Verhältnis. Allein Petra stellt ein beachtliches Budget dar (Eintritt ca. 60 €/Tag).",
    },
    currency: "JOD",
    exchangeRate: "1€ ≈ 0,78 JOD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Auberge de jeunesse", en: "Youth hostel", es: "Albergue juvenil", de: "Jugendherberge" }, price: "10–20 €", detail: { fr: "Amman, Petra", en: "Amman, Petra", es: "Amán, Petra", de: "Amman, Petra" } },
          { label: { fr: "Hôtel 3★", en: "3-star hotel", es: "Hotel 3★", de: "Hotel 3★" }, price: "40–70 €", detail: { fr: "Confort correct", en: "Decent comfort", es: "Confort correcto", de: "Richtiger Komfort" } },
          { label: { fr: "Camp bédouin Wadi Rum", en: "Bedouin camp in Wadi Rum", es: "Campamento beduino en Wadi Rum", de: "Beduinenlager Wadi Rum" }, price: "60–120 €", detail: { fr: "Dîner inclus souvent", en: "Dinner often included", es: "Cena a menudo incluida", de: "Das Abendessen ist oft inbegriffen" } },
          { label: { fr: "Resort Mer Morte", en: "Dead Sea resort", es: "Resort en el mar Muerto", de: "Resort am Toten Meer" }, price: "150–300 €", detail: { fr: "Accès piscine/plage privée inclus", en: "Private pool/beach access included", es: "Acceso a piscina/playa privada incluido", de: "Privater Zugang zum Pool/Strand inklusive" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Falafel/shawarma de rue", en: "Street falafel / shawarma", es: "Falafel/shawarma callejero", de: "Straßenfalafel/Döner" }, price: "1–3 €", detail: { fr: "Excellent et partout", en: "Excellent and available everywhere", es: "Excelente y disponible en todas partes", de: "Ausgezeichnet und überall" } },
          { label: { fr: "Restaurant local (mansaf)", en: "Local restaurant (mansaf)", es: "Restaurante local (mansaf)", de: "Lokales Restaurant (Mansaf)" }, price: "8–15 €", detail: { fr: "Plat national jordanien", en: "Jordan's national dish", es: "Plato nacional jordano", de: "Jordanisches Nationalgericht" } },
          { label: { fr: "Restaurant touristique", en: "Tourist restaurant", es: "Restaurante turístico", de: "Touristenrestaurant" }, price: "20–40 €", detail: { fr: "Près de Pétra", en: "Near Petra", es: "Cerca de Petra", de: "In der Nähe von Petra" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Minibus intercités", en: "Intercity minibus", es: "Minibús interurbano", de: "Überland-Kleinbusse" }, price: "2–8 €", detail: { fr: "Amman–Pétra ~4h", en: "Amman–Petra ~4h", es: "Amán–Petra ~4h", de: "Amman–Petra ca. 4 Std." } },
          { label: { fr: "Location voiture / jour", en: "Car rental / day", es: "Alquiler de coche / día", de: "Autovermietung / Tag" }, price: "30–50 €", detail: { fr: "Indispensable pour flexibilité", en: "Essential for flexibility", es: "Indispensable para tener flexibilidad", de: "Unverzichtbar für Flexibilität" } },
          { label: { fr: "Taxi à Amman", en: "Taxi in Amman", es: "Taxi en Amán", de: "Taxi in Amman" }, price: "3–8 €", detail: { fr: "Trajets urbains", en: "Rides around the city", es: "Trayectos urbanos", de: "Städtische Reisen" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Entrée Pétra (1 jour)", en: "Petra entry (1 day)", es: "Entrada a Petra (1 día)", de: "Eintritt in Petra (1 Tag)" }, price: "55 €", detail: { fr: "Tarif plein — incontournable", en: "Full price — an absolute must", es: "Tarifa completa — imprescindible", de: "Voller Preis – unerlässlich" } },
          { label: { fr: "Tour Wadi Rum (demi-journée)", en: "Wadi Rum tour (half-day)", es: "Tour por Wadi Rum (medio día)", de: "Wadi-Rum-Tour (halber Tag)" }, price: "25–40 €", detail: { fr: "En 4×4 avec guide", en: "By 4x4 with a guide", es: "En 4x4 con guía", de: "Im 4×4 mit Führer" } },
          { label: "Jordan Pass", price: "~80 €", detail: { fr: "Visa + Pétra inclus — recommandé", en: "Includes visa + Petra — recommended", es: "Incluye visado + Petra — recomendado", de: "Visa + Petra inklusive – empfehlenswert" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "40–60 €/j", desc: { fr: "Auberge + street food + transports partagés", en: "Hostel + street food + shared transport", es: "Albergue + comida callejera + transporte compartido", de: "Hostel + Streetfood + gemeinsamer Transport" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "90–150 €/j", desc: { fr: "Hôtel 3★ + restos + excursions", en: "3-star hotel + restaurants + excursions", es: "Hotel 3★ + restaurantes + excursiones", de: "3★ Hotel + Restaurants + Ausflüge" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "250 €+/j", desc: { fr: "Resort + camp glamping + expériences guidées", en: "Resort + glamping camp + guided experiences", es: "Resort + campamento de glamping + experiencias guiadas", de: "Resort + Glamping Camp + geführte Erlebnisse" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: {
        fr: "Amman (2j) → Jérash (1j) → Wadi Rum (2j) → Pétra (2j) → Mer Morte (2j) → Amman (1j)", en: "Amman (2d) → Jerash (1d) → Wadi Rum (2d) → Petra (2d) → Dead Sea (2d) → Amman (1d)", es: "Amán (2d) → Jerash (1d) → Wadi Rum (2d) → Petra (2d) → Mar Muerto (2d) → Amán (1d)", de: "Amman (2T) → Jerash (1T) → Wadi Rum (2T) → Petra (2T) → Totes Meer (2T) → Amman (1T)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 500 – 2 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Amman", en: "Return flight Paris–Amman", es: "Vuelo ida y vuelta Madrid–Amán", de: "Hin- und Rückflug Paris–Amman" }, amount: "400–600 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "250–400 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "200–300 €" },
            { label: { fr: "Transport local", en: "Local transport", es: "Transporte local", de: "Nahverkehr" }, amount: "150–200 €" },
            { label: { fr: "Entrées (Pétra, Jordan Pass)", en: "Entry fees (Petra, Jordan Pass)", es: "Entradas (Petra, Jordan Pass)", de: "Eingänge (Petra, Jordan Pass)" }, amount: "200–300 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "3 000 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Amman", en: "Return flight Paris–Amman", es: "Vuelo ida y vuelta Madrid–Amán", de: "Hin- und Rückflug Paris–Amman" }, amount: "500–800 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "700–1 200 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "400–600 €" },
            { label: { fr: "Location voiture", en: "Car rental", es: "Alquiler de coche", de: "Autovermietung" }, amount: "300–500 €" },
            { label: { fr: "Activités & entrées", en: "Activities & entry fees", es: "Actividades y entradas", de: "Aktivitäten & Einträge" }, amount: "400–600 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "7 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Amman (Business)", en: "Return flight Paris–Amman (business)", es: "Vuelo ida y vuelta Madrid–Amán (business)", de: "Hin- und Rückflug Paris–Amman (Business)" }, amount: "1 500–2 500 €" },
            { label: { fr: "Hébergement 5★ (10 nuits)", en: "5-star accommodation (10 nights)", es: "Alojamiento 5★ (10 noches)", de: "Unterkunft 5★ (10 Nächte)" }, amount: "2 000–4 000 €" },
            { label: { fr: "Gastronomie & expériences", en: "Fine dining & experiences", es: "Gastronomía y experiencias", de: "Gastronomie & Erlebnisse" }, amount: "1 000–2 000 €" },
            { label: { fr: "Transport & guide privé", en: "Private transport & guide", es: "Transporte y guía privado", de: "Transport und privater Reiseführer" }, amount: "800–1 500 €" },
            { label: { fr: "Activités premium", en: "Premium activities", es: "Actividades premium", de: "Premium-Aktivitäten" }, amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~4–5h (Royal Jordanian, Air France)", en: "~4–5h (Royal Jordanian, Air France)", es: "~4–5h (Royal Jordanian, Air France)", de: "ca. 4–5 Std. (Royal Jordanian, Air France)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Visa à l'arrivée (40 JOD ≈ 56 USD) ou Jordan Pass recommandé (~70–100 USD, inclut visa + entrée Pétra + autres sites)", en: "Visa on arrival (40 JOD ≈ USD 56), or the recommended Jordan Pass (~USD 70–100), which includes the visa, Petra entry and other sites", es: "Visado a la llegada (40 JOD ≈ 56 USD) o Jordan Pass recomendado (~70–100 USD, incluye visado + entrada a Petra + otros sitios)", de: "Visum bei der Ankunft (40 JOD ≈ 56 USD) oder Jordan Pass empfohlen (ca. 70–100 USD, beinhaltet Visum + Einreise nach Petra + andere Sehenswürdigkeiten)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Dinar (1€ ≈ 0,78 JOD)", en: "Dinar (1€ ≈ 0.78 JOD)", es: "Dinar (1€ ≈ 0,78 JOD)", de: "Dinar (1€ ≈ 0,78 JOD)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Arabe (anglais répandu dans le tourisme)", en: "Arabic (English widely spoken in tourism)", es: "Árabe (inglés muy extendido en el turismo)", de: "Arabisch (im Tourismus gebräuchliches Englisch)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type B/D/F/G – 230 V (adaptateur conseillé)", en: "Type B/D/F/G – 230V (adapter recommended)", es: "Tipo B/D/F/G – 230 V (adaptador recomendado)", de: "Typ B/D/F/G – 230 V (Adapter empfohlen)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red móvil", de: "Mobilfunknetz" }, value: { fr: "Bonne couverture, SIM locale dès l'aéroport", en: "Good coverage, local SIM available right at the airport", es: "Buena cobertura, SIM local disponible desde el aeropuerto", de: "Gute Abdeckung, lokale SIM-Karte vom Flughafen" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable — eau en bouteille", en: "Not drinkable — bottled water recommended", es: "No potable — se recomienda agua embotellada", de: "Kein Trinkwasser – Wasser in Flaschen" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Aucun vaccin obligatoire, hépatite A recommandée", en: "No mandatory vaccines, hepatitis A recommended", es: "Ninguna vacuna obligatoria, se recomienda hepatitis A", de: "Keine Impfpflicht, Hepatitis A empfohlen" } },
  ],
};
