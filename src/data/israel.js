export const ISRAEL = {
  code: "ISR",
  numericId: 376,
  name: { fr: "Israël", en: "Israel", es: "Israel", de: "Israel" },
  emoji: "🇮🇱",
  capital: { fr: "Jérusalem", en: "Jerusalem", es: "Jerusalén", de: "Jerusalem" },
  language: { fr: "Hébreu", en: "Hebrew", es: "Hebreo", de: "Hebräisch" },
  currency: { fr: "Shekel (ILS)", en: "Shekel (ILS)", es: "Séquel (ILS)", de: "Schekel (ILS)" },
  timezone: "UTC+2 (UTC+3 été)",
  filter: {
    budgetMin: 60, budgetMid: 130,
    tripMin: 2000, tripMid: 3800,
  },
  criteria: {
    unesco: 3,
    nature: 2,
    randonnee: 1,
    gastronomie: 2,
    architecture: 2,
    desert: 2,
    safari: 0,
    ski: 0,
    ville: 2,
    plage: 2,
    plongee: 2,
  },
  description: {
    fr: "Israël concentre en un territoire minuscule trois des lieux saints les plus importants de l'humanité (Jérusalem), la mer Morte à −430 m, les plages de Tel Aviv, le désert du Néguev et des sites archéologiques uniques. Une destination d'une richesse culturelle exceptionnelle.", en: "Israel packs into a tiny territory three of humanity's most important holy sites (in Jerusalem), the Dead Sea at 430 metres below sea level, Tel Aviv's beaches, the Negev Desert and a remarkable range of archaeological sites. It is an exceptionally rich cultural destination.", es: "Israel concentra en un territorio minúsculo tres de los lugares sagrados más importantes de la humanidad (Jerusalén), el mar Muerto a −430 m, las playas de Tel Aviv, el desierto del Néguev y sitios arqueológicos únicos. Un destino de una riqueza cultural excepcional.", de: "Israel konzentriert auf einem winzigen Territorium drei der wichtigsten heiligen Stätten der Menschheit (Jerusalem), das Tote Meer auf −430 m, die Strände von Tel Aviv, die Negev-Wüste und einzigartige archäologische Stätten. Ein Reiseziel mit außergewöhnlichem kulturellem Reichtum.",
  },

  bestPeriods: [
    {
      months: { fr: "Mars – Mai", en: "March – May", es: "Marzo – Mayo", de: "März – Mai" },
      label: { fr: "Printemps", en: "Spring", es: "Primavera", de: "Frühling" },
      color: "#22c55e",
      description: {
        fr: "Températures idéales (16–25 °C), fleurs du désert (négué), Pessah, idéal pour Jérusalem et les randonnées.", en: "Ideal temperatures (16–25°C), desert wildflowers in the Negev, Passover season and excellent conditions for Jerusalem and hiking.", es: "Temperaturas ideales (16–25 °C), flores del desierto en el Néguev, Pésaj, ideal para Jerusalén y el senderismo.", de: "Ideale Temperaturen (16–25°C), Wüstenblumen (Negé), Pessach, ideal für Jerusalem und Wandern.",
      },
      icon: "🌸",
    },
    {
      months: { fr: "Septembre – Novembre", en: "September – November", es: "Septiembre – Noviembre", de: "September – November" },
      label: { fr: "Automne", en: "Autumn", es: "Otoño", de: "Herbst" },
      color: "#fb923c",
      description: {
        fr: "Après la chaleur estivale, températures agréables (22–28 °C). Roch Hachana et fêtes juives en septembre-octobre.", en: "After the summer heat, temperatures are pleasantly warm (22–28°C). Rosh Hashanah and the autumn Jewish holidays also fall in this period.", es: "Tras el calor del verano, temperaturas agradables (22–28 °C). Rosh Hashaná y las fiestas judías en septiembre-octubre.", de: "Nach der Sommerhitze angenehme Temperaturen (22–28°C). Rosch Haschana und jüdische Feiertage im September und Oktober.",
      },
      icon: "🍂",
    },
    {
      months: { fr: "Juin – Août", en: "June – August", es: "Junio – Agosto", de: "Juni – August" },
      label: { fr: "Été balnéaire", en: "Beach season", es: "Verano de playa", de: "Sommer am Meer" },
      color: "#3b82f6",
      description: {
        fr: "Mer parfaite, Tel Aviv animée, Eilat et Mer Rouge accessibles. Chaud mais sec (sec < 30% humidité sur la côte).", en: "Perfect sea conditions, lively Tel Aviv, and easy access to Eilat and the Red Sea. Hot but dry, with coastal humidity usually under 30%.", es: "Mar perfecto, Tel Aviv animada, Eilat y el mar Rojo accesibles. Caluroso pero seco (humedad costera <30%).", de: "Perfektes Meer, geschäftiges Tel Aviv, gut erreichbares Eilat und das Rote Meer. Warm, aber trocken (trocken < 30 % Luftfeuchtigkeit an der Küste).",
      },
      icon: "🏖️",
    },
  ],

  weatherCities: [
    {
      id: "tel_aviv",
      name: "Tel Aviv",
      region: { fr: "Centre", en: "Central Israel", es: "Centro", de: "Center" },
      data: [
        { month: "Jan", temp: 13, rain: 130, icon: "⛅" },
        { month: "Fév", temp: 14, rain: 90,  icon: "⛅" },
        { month: "Mar", temp: 16, rain: 55,  icon: "☀️" },
        { month: "Avr", temp: 21, rain: 20,  icon: "☀️" },
        { month: "Mai", temp: 25, rain: 3,   icon: "☀️" },
        { month: "Jun", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Jul", temp: 31, rain: 0,   icon: "⛅" },
        { month: "Aoû", temp: 31, rain: 0,   icon: "⛅" },
        { month: "Sep", temp: 29, rain: 0,   icon: "⛅" },
        { month: "Oct", temp: 26, rain: 10,  icon: "☀️" },
        { month: "Nov", temp: 21, rain: 65,  icon: "☀️" },
        { month: "Déc", temp: 15, rain: 110, icon: "⛅" },
      ],
    },
    {
      id: "eilat",
      name: "Eilat",
      region: { fr: "Mer Rouge", en: "Red Sea", es: "Mar Rojo", de: "Rotes Meer" },
      data: [
        { month: "Jan", temp: 15, rain: 5,   icon: "☀️" },
        { month: "Fév", temp: 17, rain: 5,   icon: "☀️" },
        { month: "Mar", temp: 21, rain: 5,   icon: "☀️" },
        { month: "Avr", temp: 26, rain: 0,   icon: "☀️" },
        { month: "Mai", temp: 31, rain: 0,   icon: "⛅" },
        { month: "Jun", temp: 34, rain: 0,   icon: "🌡️" },
        { month: "Jul", temp: 37, rain: 0,   icon: "🌡️" },
        { month: "Aoû", temp: 36, rain: 0,   icon: "🌡️" },
        { month: "Sep", temp: 33, rain: 0,   icon: "🌡️" },
        { month: "Oct", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Nov", temp: 22, rain: 3,   icon: "☀️" },
        { month: "Déc", temp: 17, rain: 5,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Jérusalem", en: "Jerusalem", es: "Jerusalén", de: "Jerusalem" },
      region: { fr: "Jérusalem", en: "Jerusalem", es: "Jerusalén", de: "Jerusalem" },
      description: {
        fr: "Ville sainte pour les trois grandes religions monothéistes, avec la vieille ville classée à l'UNESCO : le Mur occidental, l'Esplanade des Mosquées (Dôme du Rocher, Al-Aqsa), le Saint-Sépulcre et le quartier juif.", en: "A holy city for the three major monotheistic religions, with an UNESCO-listed Old City: the Western Wall, the Temple Mount and Mosque Esplanade (Dome of the Rock, Al-Aqsa), the Church of the Holy Sepulchre and the Jewish Quarter.", es: "Ciudad santa para las tres grandes religiones monoteístas, con el casco antiguo declarado Patrimonio UNESCO: el Muro Occidental, la Explanada de las Mezquitas (Cúpula de la Roca, Al-Aqsa), el Santo Sepulcro y el barrio judío.", de: "Heilige Stadt für die drei großen monotheistischen Religionen. Die Altstadt steht auf der Liste der UNESCO: die Klagemauer, die Esplanade der Moscheen (Felsendom, Al-Aqsa), das Heilige Grab und das jüdische Viertel.",
      },
      wikipedia: "Jerusalem",
      tags: ["Histoire", "Spiritualité", "UNESCO", "Ville", "Architecture"],
      mustSee: [
        { name: { fr: "Mur occidental (Kotel)", en: "Western Wall (Kotel)", es: "Muro Occidental (Kotel)", de: "Klagemauer (Kotel)" }, wikipedia: "Western_Wall" },
        { name: { fr: "Dôme du Rocher & al-Aqsa", en: "Dome of the Rock & Al-Aqsa", es: "Cúpula de la Roca y Al-Aqsa", de: "Felsendom und al-Aqsa" }, wikipedia: "Dome_of_the_Rock" },
        { name: { fr: "Saint-Sépulcre", en: "Church of the Holy Sepulchre", es: "Santo Sepulcro", de: "Heiliges Grab" }, wikipedia: "Church_of_the_Holy_Sepulchre" },
        { name: { fr: "Vieille ville — marchés et ruelles", en: "Old City — markets and alleys", es: "Casco antiguo — mercados y callejuelas", de: "Altstadt – Märkte und Gassen" }, wikipedia: "Old_City_of_Jerusalem" },
      ],
    },
    {
      id: 2,
      name: { fr: "Tel Aviv", en: "Tel Aviv", es: "Tel Aviv", de: "Tel Aviv" },
      region: { fr: "Gush Dan", en: "Gush Dan", es: "Gush Dan", de: "Gush Dan" },
      description: {
        fr: "Ville ultramoderne, branchée et tolérante, avec la plus grande concentration d'architecture Bauhaus au monde (Ville Blanche UNESCO), des plages de sable fin et une scène culinaire mondialement reconnue.", en: "A hyper-modern, stylish and tolerant city, home to the world's largest concentration of Bauhaus architecture (the UNESCO-listed White City), sandy beaches and a globally recognised food scene.", es: "Ciudad ultramoderna, de moda y tolerante, con la mayor concentración de arquitectura Bauhaus del mundo (Ciudad Blanca UNESCO), playas de arena fina y una escena gastronómica reconocida mundialmente.", de: "Hochmoderne, hippe und tolerante Stadt mit der weltweit größten Konzentration an Bauhaus-Architektur (UNESCO White City), Sandstränden und einer weltbekannten kulinarischen Szene.",
      },
      wikipedia: "Tel_Aviv",
      tags: ["Plage", "Culture", "Gastronomie", "Architecture", "Ville"],
      mustSee: [
        { name: { fr: "Ville Blanche — architecture Bauhaus (UNESCO)", en: "White City — Bauhaus architecture (UNESCO)", es: "Ciudad Blanca — arquitectura Bauhaus (UNESCO)", de: "Weiße Stadt – Bauhaus-Architektur (UNESCO)" }, wikipedia: "File:PikiWiki Israel 9168 White City of Tel Aviv.JPG" },
        { name: { fr: "Jaffa — vieille ville portuaire", en: "Jaffa — the old port city", es: "Jaffa — antigua ciudad portuaria", de: "Jaffa – alte Hafenstadt" }, wikipedia: "Jaffa" },
        { name: { fr: "Marché Carmel", en: "Carmel Market", es: "Mercado Carmel", de: "Carmel-Markt" }, wikipedia: "Carmel_Market" },
      ],
    },
    {
      id: 3,
      name: { fr: "Mer Morte", en: "Dead Sea", es: "Mar Muerto", de: "Totes Meer" },
      region: { fr: "District Sud", en: "Southern District", es: "Distrito Sur", de: "Südbezirk" },
      description: {
        fr: "Le point le plus bas de la Terre (−430 m), avec une eau à 34% de sel où l'on flotte sans effort. Les boues minérales noires ont des propriétés thérapeutiques reconnues.", en: "The lowest point on Earth (430 metres below sea level), with water so salty that you float effortlessly. Its black mineral muds are widely valued for their therapeutic properties.", es: "El punto más bajo de la Tierra (−430 m), con un agua al 34% de salinidad donde se flota sin esfuerzo. Sus lodos minerales negros tienen propiedades terapéuticas reconocidas.", de: "Der tiefste Punkt der Erde (−430 m) mit 34 % Salzgehalt im Wasser, auf dem Sie mühelos schweben können. Schwarzer Mineralschlamm hat anerkannte therapeutische Eigenschaften.",
      },
      wikipedia: "Dead_Sea",
      tags: ["Nature", "Détente", "Désert", "Randonnée"],
      mustSee: [
        { name: { fr: "Masada — forteresse hérodienne", en: "Masada — a Herodian fortress", es: "Masada — fortaleza herodiana", de: "Masada – Herodianische Festung" }, wikipedia: "Masada" },
        { name: { fr: "Bain flottant mer Morte", en: "Floating bath in the Dead Sea", es: "Baño flotante en el mar Muerto", de: "Schwimmendes Bad im Toten Meer" }, wikipedia: "Dead_Sea" },
        { name: { fr: "Grottes de Qumrân (manuscrits)", en: "Qumran caves (Dead Sea Scrolls)", es: "Cuevas de Qumrán (manuscritos)", de: "Höhlen von Qumran (Manuskripte)" }, wikipedia: "Qumran" },
      ],
    },
    {
      id: 4,
      name: { fr: "Eilat & Mer Rouge", en: "Eilat & the Red Sea", es: "Eilat y el mar Rojo", de: "Eilat und Rotes Meer" },
      region: { fr: "District Sud", en: "Southern District", es: "Distrito Sur", de: "Südbezirk" },
      description: {
        fr: "Station balnéaire à la pointe du Néguev, où la mer Rouge offre une plongée exceptionnelle (coraux, poissons tropicaux, dauphins) et un soleil garanti 360 jours par an.", en: "A seaside resort at the tip of the Negev, where the Red Sea offers exceptional diving — coral reefs, tropical fish and dolphins — plus sunshine virtually year-round.", es: "Estación balnearia en la punta del Néguev, donde el mar Rojo ofrece un buceo excepcional (corales, peces tropicales, delfines) y sol garantizado 360 días al año.", de: "Badeort an der Spitze des Negev, wo das Rote Meer außergewöhnliche Tauchmöglichkeiten (Korallen, tropische Fische, Delfine) und garantierten Sonnenschein an 360 Tagen im Jahr bietet.",
      },
      wikipedia: "Eilat",
      tags: ["Plage", "Nature", "Désert"],
      mustSee: [
        { name: { fr: "Coral Beach Reserve (snorkeling)", en: "Coral Beach Reserve (snorkelling)", es: "Coral Beach Reserve (esnórquel)", de: "Coral Beach Reserve (Schnorcheln)" }, wikipedia: "File:Gulf of Aqaba - Gulf von Akaba.jpg" },
        { name: { fr: "Plongée avec dauphins", en: "Diving with dolphins", es: "Buceo con delfines", de: "Tauchen mit Delfinen" }, wikipedia: "File:Eilat Dolphin Reef (3).jpg" },
        { name: { fr: "Désert du Néguev — Makhtesh Ramon", en: "Negev Desert — Makhtesh Ramon", es: "Desierto del Néguev — Makhtesh Ramon", de: "Negev-Wüste – Makhtesh Ramon" }, wikipedia: "Makhtesh_Ramon" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Israël est une destination onéreuse, comparable aux grandes capitales européennes. Tel Aviv est régulièrement citée comme l'une des villes les plus chères du monde.", en: "Israel is an expensive destination, comparable to the major capitals of Western Europe. Tel Aviv is regularly listed among the most expensive cities in the world.", es: "Israel es un destino caro, comparable a las grandes capitales de Europa occidental. Tel Aviv aparece regularmente entre las ciudades más caras del mundo.", de: "Israel ist ein teures Reiseziel, vergleichbar mit den großen europäischen Hauptstädten. Tel Aviv wird regelmäßig als eine der teuersten Städte der Welt bezeichnet.",
    },
    currency: "ILS",
    exchangeRate: "1€ ≈ 4,10 ILS",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Auberge de jeunesse / hostel", en: "Hostel / youth hostel", es: "Albergue juvenil / hostel", de: "Jugendherberge/Herberge" }, price: "20–40 €", detail: { fr: "Dortoir Tel Aviv ou Jérusalem", en: "Shared dorm in Tel Aviv or Jerusalem", es: "Dormitorio en Tel Aviv o Jerusalén", de: "Wohnheim Tel Aviv oder Jerusalem" } },
          { label: { fr: "Hôtel 3★", en: "3-star hotel", es: "Hotel 3★", de: "Hotel 3★" }, price: "70–120 €", detail: { fr: "Correct, souvent inclus breakfast", en: "Comfortable, often with breakfast included", es: "Correcto, a menudo con desayuno incluido", de: "Richtig, oft inklusive Frühstück" } },
          { label: { fr: "Hôtel 4–5★ design", en: "4–5 star design hotel", es: "Hotel de diseño 4–5★", de: "4–5★ Designhotel" }, price: "180–400 €", detail: { fr: "Tel Aviv bord de mer ou Jérusalem", en: "Seafront Tel Aviv or Jerusalem", es: "Tel Aviv junto al mar o Jerusalén", de: "Tel Aviv am Meer oder Jerusalem" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Houmous + falafel au marché", en: "Hummus and falafel at the market", es: "Hummus y falafel en el mercado", de: "Hummus + Falafel auf dem Markt" }, price: "3–7 €", detail: { fr: "Marché Machane Yehuda ou Carmel", en: "Mahane Yehuda or Carmel Market", es: "Mercado Mahane Yehuda o Carmel", de: "Machane Yehuda oder Carmel-Markt" } },
          { label: { fr: "Restaurant local (shakshuka, sabich)", en: "Local restaurant (shakshuka, sabich)", es: "Restaurante local (shakshuka, sabich)", de: "Lokales Restaurant (Shakshuka, Sabich)" }, price: "12–20 €", detail: { fr: "Bon rapport qualité-prix", en: "Good value for money", es: "Buena relación calidad-precio", de: "Gutes Preis-Leistungs-Verhältnis" } },
          { label: { fr: "Restaurant gastronomique Tel Aviv", en: "Fine-dining in Tel Aviv", es: "Restaurante gastronómico en Tel Aviv", de: "Gourmetrestaurant Tel Aviv" }, price: "40–80 €", detail: { fr: "Scène culinaire world class", en: "World-class food scene", es: "Escena gastronómica de talla mundial", de: "Kulinarische Szene von Weltklasse" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bus / Train inter-cités", en: "Intercity bus / train", es: "Autobús / tren interurbano", de: "Überlandbus/Zug" }, price: "5–15 €", detail: { fr: "Tel Aviv–Jérusalem ~1h (train direct)", en: "Tel Aviv–Jerusalem takes about 1 hour by direct train", es: "Tel Aviv–Jerusalén ~1h (tren directo)", de: "Tel Aviv–Jerusalem ca. 1 Std. (Direktzug)" } },
          { label: { fr: "Métro léger Tel Aviv (Ligne Rouge)", en: "Tel Aviv light rail (Red Line)", es: "Metro ligero de Tel Aviv (Línea Roja)", de: "Stadtbahn Tel Aviv (Rote Linie)" }, price: "1,50 €", detail: { fr: "Réseau en expansion", en: "Network still expanding", es: "Red en expansión", de: "Netz wird weiter ausgebaut" } },
          { label: { fr: "Location voiture / jour", en: "Car rental per day", es: "Alquiler de coche / día", de: "Autovermietung / Tag" }, price: "40–70 €", detail: { fr: "Utile pour Néguev et Nord", en: "Useful for the Negev and the north", es: "Útil para el Néguev y el norte", de: "Nützlich für Negev und Norden" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Musée d'Israël (Jérusalem)", en: "Israel Museum (Jerusalem)", es: "Museo de Israel (Jerusalén)", de: "Israel-Museum (Jerusalem)" }, price: "12–16 €", detail: { fr: "Rouleaux de la Mer Morte", en: "Dead Sea Scrolls", es: "Rollos del mar Muerto", de: "Schriftrollen vom Toten Meer" } },
          { label: { fr: "Tour guidé vieille ville Jérusalem", en: "Guided tour of Jerusalem's Old City", es: "Tour guiado por el casco antiguo de Jerusalén", de: "Führung durch die Altstadt von Jerusalem" }, price: "20–40 €", detail: { fr: "Guide anglophone 3h", en: "3-hour English-speaking guide", es: "Guía angloparlante de 3h", de: "Englischsprachiger Reiseführer 3 Stunden" } },
          { label: { fr: "Plongée Eilat (2 plongées)", en: "Eilat diving (2 dives)", es: "Buceo en Eilat (2 inmersiones)", de: "Tauchen Eilat (2 Tauchgänge)" }, price: "60–90 €", detail: { fr: "Équipement inclus", en: "Equipment included", es: "Equipo incluido", de: "Ausrüstung inklusive" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "60–90 €/j", desc: { fr: "Hostel + marchés + transports en commun", en: "Hostels, markets and public transport", es: "Hostel + mercados + transporte público", de: "Hostel + Märkte + öffentliche Verkehrsmittel" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "130–200 €/j", desc: { fr: "Hôtel 3★ + restos mid-range + excursions", en: "3-star hotels, mid-range restaurants and excursions", es: "Hotel 3★ + restaurantes de gama media + excursiones", de: "3★ Hotel + Mittelklasserestaurants + Ausflüge" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "300 €/j+", desc: { fr: "Hôtel design + gastronomie + guide privé", en: "Design hotel, fine dining and private guide", es: "Hotel de diseño + alta gastronomía + guía privado", de: "Designhotel + Gastronomie + Privatführer" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: {
        fr: "Tel Aviv (3j) → Jérusalem (3j) → Mer Morte + Masada (2j) → Eilat (2j)", en: "Tel Aviv (3d) → Jerusalem (3d) → Dead Sea + Masada (2d) → Eilat (2d)", es: "Tel Aviv (3d) → Jerusalén (3d) → Mar Muerto + Masada (2d) → Eilat (2d)", de: "Tel Aviv (3 Tage) → Jerusalem (3 Tage) → Totes Meer + Masada (2 Tage) → Eilat (2 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "2 000 – 2 700 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tel Aviv", en: "Return flight Paris–Tel Aviv", es: "Vuelo ida y vuelta Madrid–Tel Aviv", de: "Hin- und Rückflug Paris–Tel Aviv" }, amount: "350–550 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "300–500 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "400–600 €" },
            { label: { fr: "Transport local", en: "Local transport", es: "Transporte local", de: "Nahverkehr" }, amount: "200–300 €" },
            { label: { fr: "Activités & entrées", en: "Activities & entry fees", es: "Actividades y entradas", de: "Aktivitäten & Einträge" }, amount: "300–450 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "3 800 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tel Aviv", en: "Return flight Paris–Tel Aviv", es: "Vuelo ida y vuelta Madrid–Tel Aviv", de: "Hin- und Rückflug Paris–Tel Aviv" }, amount: "450–700 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "900–1 500 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "800–1 200 €" },
            { label: { fr: "Transport & location voiture", en: "Transport & car rental", es: "Transporte y alquiler de coche", de: "Transport und Autovermietung" }, amount: "400–600 €" },
            { label: { fr: "Activités & guides", en: "Activities & guides", es: "Actividades y guías", de: "Aktivitäten und Führer" }, amount: "400–700 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "8 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tel Aviv (Business)", en: "Return flight Paris–Tel Aviv (business)", es: "Vuelo ida y vuelta Madrid–Tel Aviv (business)", de: "Hin- und Rückflug Paris–Tel Aviv (Business)" }, amount: "1 500–3 000 €" },
            { label: { fr: "Hôtels design (10 nuits)", en: "Design hotels (10 nights)", es: "Hoteles de diseño (10 noches)", de: "Designhotels (10 Nächte)" }, amount: "2 500–4 500 €" },
            { label: { fr: "Gastronomie & wine", en: "Fine dining & wine", es: "Alta gastronomía y vino", de: "Gastronomie & Wein" }, amount: "1 500–2 500 €" },
            { label: { fr: "Transport privé", en: "Private transport", es: "Transporte privado", de: "Privater Transport" }, amount: "600–1 000 €" },
            { label: { fr: "Expériences privées", en: "Private experiences", es: "Experiencias privadas", de: "Private Erlebnisse" }, amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~4–5h direct (Air France, El Al, Transavia)", en: "~4–5 hours direct (Air France, El Al, Transavia)", es: "~4–5h directo (Air France, El Al, Transavia)", de: "ca. 4–5 Stunden direkt (Air France, El Al, Transavia)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Sans visa pour les Français (90 jours)", en: "No visa required for French citizens (90 days)", es: "Sin visado para ciudadanos de la UE (90 días)", de: "Visumfrei für Franzosen (90 Tage)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Shekel (1€ ≈ 4,10 ILS)", en: "Shekel (1€ ≈ 4.10 ILS)", es: "Séquel (1€ ≈ 4,10 ILS)", de: "Schekel (1€ ≈ 4,10 ILS)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Hébreu et arabe (anglais très répandu)", en: "Hebrew and Arabic, with English widely spoken", es: "Hebreo y árabe (el inglés está muy extendido)", de: "Hebräisch und Arabisch (Englisch wird weithin gesprochen)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type H (spécifique) – 230 V (adaptateur universel)", en: "Type H (specific plug) – 230V (universal adapter recommended)", es: "Tipo H (específico) – 230 V (adaptador universal recomendado)", de: "Typ H (spezifisch) – 230 V (Universaladapter)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red móvil", de: "Mobilfunknetz" }, value: { fr: "Excellente couverture, e-SIM disponible", en: "Excellent coverage, eSIM available", es: "Excelente cobertura, eSIM disponible", de: "Hervorragende Abdeckung, E-SIM verfügbar" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Potable (eau dessalinisée de bonne qualité)", en: "Drinkable (high-quality desalinated water)", es: "Potable (agua desalinizada de buena calidad)", de: "Trinkbar (entsalztes Wasser von guter Qualität)" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Aucun vaccin obligatoire, soins excellents", en: "No mandatory vaccines, excellent healthcare", es: "Ninguna vacuna obligatoria, atención excelente", de: "Keine Impfpflicht, hervorragende Betreuung" } },
  ],
};
