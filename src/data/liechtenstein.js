export const LIECHTENSTEIN = {
  code: "LIE",
  numericId: 438,
  name: { fr: "Liechtenstein", en: "Liechtenstein", es: "Liechtenstein", de: "Liechtenstein" },
  emoji: "🇱🇮",
  capital: { fr: "Vaduz", en: "Vaduz", es: "Vaduz", de: "Vaduz" },
  language: { fr: "Allemand", en: "German", es: "Alemán", de: "Deutsch" },
  currency: { fr: "Franc suisse (CHF)", en: "Swiss Franc (CHF)", es: "Franco suizo (CHF)", de: "Schweizer Franken (CHF)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 120, budgetMid: 200,
    tripMin: 1400, tripMid: 2500,
  },
  criteria: {
    unesco: 1,
    nature: 2,
    randonnee: 2,
    gastronomie: 1,
    architecture: 2,
    desert: 0,
    safari: 0,
    ski: 2,
    ville: 1,
    plage: 0,
    plongee: 0,
  },
  description: {
    fr: "Le Liechtenstein est l'un des six États doublement enclavés au monde, coincé entre la Suisse et l'Autriche, et le seul pays au monde à partager un nom avec sa famille régnante. Cette principauté de 37 000 habitants est connue pour son château médiéval dominant Vaduz, sa production viticole surprenante sur les pentes du Rhin, et son statut de paradis fiscal attirant de nombreuses holdings internationales. La nature grandiose des Alpes rhétiques offre de superbes randonnées et ski.", en: "Liechtenstein is one of only six doubly landlocked states in the world, wedged between Switzerland and Austria, and the only country to share its name with its ruling family. This principality of 37,000 people is known for its medieval castle overlooking Vaduz, its surprising wine production on the slopes above the Rhine, and its status as a tax haven attracting numerous international holding companies. The grandiose nature of the Rhaetian Alps offers superb hiking and skiing.", es: "Liechtenstein es uno de los seis estados doblemente sin litoral del mundo, encajado entre Suiza y Austria, y el único país que comparte nombre con su familia reinante. Este principado de 37.000 habitantes es conocido por su castillo medieval que domina Vaduz, su sorprendente producción vinícola en las laderas del Rin, y su estatus de paraíso fiscal que atrae a numerosos holdings internacionales. La grandiosa naturaleza de los Alpes réticos ofrece un excelente senderismo y esquí.", de: "Liechtenstein ist einer von sechs doppelten Binnenstaaten der Welt, eingebettet zwischen der Schweiz und Österreich, und das einzige Land der Welt, das einen Namen mit seiner Herrscherfamilie teilt. Dieses Fürstentum mit 37.000 Einwohnern ist bekannt für seine mittelalterliche Burg, die Vaduz dominiert, seine überraschende Weinproduktion an den Rheinhängen und seinen Status als Steuerparadies, das zahlreiche internationale Holdinggesellschaften anzieht. Die grandiose Natur der Rhätischen Alpen lädt zum Wandern und Skifahren ein.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Septembre", en: "June – September", es: "Junio – Septiembre", de: "Juni – September" },
      label: { fr: "Randonnée et nature", en: "Hiking and nature", es: "Senderismo y naturaleza", de: "Wandern und Natur" },
      color: "#22c55e",
      description: {
        fr: "L'été dévoile les sentiers alpins du Liechtenstein avec des vues splendides sur la vallée du Rhin et les Alpes suisses. Les températures sont agréables (18–25°C) et les vignobles en pleine verdure sont magnifiques à visiter.", en: "Summer reveals Liechtenstein's alpine trails with splendid views over the Rhine valley and the Swiss Alps. Temperatures are pleasant (18–25°C) and the lush green vineyards are beautiful to visit.", es: "El verano desvela los senderos alpinos de Liechtenstein con espléndidas vistas sobre el valle del Rin y los Alpes suizos. Las temperaturas son agradables (18–25°C) y los viñedos en pleno verdor son magníficos para visitar.", de: "Der Sommer offenbart Liechtensteins Alpenwege mit herrlichen Ausblicken auf das Rheintal und die Schweizer Alpen. Die Temperaturen sind angenehm (18–25°C) und die mitten im Grünen gelegenen Weinberge laden zu einem Besuch ein.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Mars", en: "December – March", es: "Diciembre – Marzo", de: "Dezember – März" },
      label: { fr: "Ski et hiver alpin", en: "Skiing and alpine winter", es: "Esquí e invierno alpino", de: "Skifahren und alpiner Winter" },
      color: "#f59e0b",
      description: {
        fr: "La station de Malbun (à 1 600 m) propose un ski intimiste familial dans un cadre alpin authentique, loin des foules des grandes stations suisses. L'atmosphère hivernale de Vaduz avec son château enneigé est féerique.", en: "The Malbun resort (at 1,600 m) offers intimate family skiing in an authentic alpine setting, far from the crowds of the big Swiss resorts. Vaduz's winter atmosphere, with its snow-capped castle, is magical.", es: "La estación de Malbun (a 1.600 m) ofrece un esquí íntimo y familiar en un entorno alpino auténtico, lejos de las multitudes de las grandes estaciones suizas. El ambiente invernal de Vaduz con su castillo nevado es de cuento.", de: "Das Malbun-Resort (auf 1.600 m) bietet familiäres Skifahren in einer authentischen alpinen Umgebung, weit weg vom Trubel der großen Schweizer Skigebiete. Die winterliche Atmosphäre von Vaduz mit seinem schneebedeckten Schloss ist magisch.",
      },
      icon: "⛷️",
    },
  ],
  weatherCities: [
    {
      id: "vaduz",
      name: "Vaduz",
      region: { fr: "Liechtenstein central", en: "Central Liechtenstein", es: "Liechtenstein central", de: "Zentrales Liechtenstein" },
      data: [
        { month: "Jan", temp: 1, rain: 65, icon: "❄️" },
        { month: "Fév", temp: 3, rain: 55, icon: "❄️" },
        { month: "Mar", temp: 8, rain: 65, icon: "⛅" },
        { month: "Avr", temp: 12, rain: 75, icon: "⛅" },
        { month: "Mai", temp: 16, rain: 95, icon: "☀️" },
        { month: "Jun", temp: 19, rain: 110, icon: "☀️" },
        { month: "Jul", temp: 21, rain: 120, icon: "☀️" },
        { month: "Aoû", temp: 21, rain: 115, icon: "☀️" },
        { month: "Sep", temp: 17, rain: 85, icon: "☀️" },
        { month: "Oct", temp: 12, rain: 75, icon: "⛅" },
        { month: "Nov", temp: 6, rain: 70, icon: "⛅" },
        { month: "Déc", temp: 2, rain: 65, icon: "❄️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Vaduz",
      region: { fr: "Commune de Vaduz", en: "Vaduz municipality", es: "Municipio de Vaduz", de: "Gemeinde Vaduz" },
      description: {
        fr: "Vaduz est l'une des plus petites capitales du monde, avec seulement 5 500 habitants. Elle est dominée par le château du prince Hans-Adam II, résidence officielle de la famille régnante et non ouverte au public, mais offrant une silhouette iconique sur la ville. La rue principale concentre les musées, le Kunstmuseum et les boutiques de timbres (le Liechtenstein est réputé philatéliquement).", en: "Vaduz is one of the smallest capitals in the world, with just 5,500 inhabitants. It is dominated by the castle of Prince Hans-Adam II, the official residence of the ruling family, not open to the public but offering an iconic silhouette over the town. The main street is home to museums, the Kunstmuseum and stamp shops (Liechtenstein is renowned for its philately).", es: "Vaduz es una de las capitales más pequeñas del mundo, con solo 5.500 habitantes. Está dominada por el castillo del príncipe Hans-Adam II, residencia oficial de la familia reinante y no abierta al público, pero que ofrece una silueta icónica sobre la ciudad. La calle principal concentra los museos, el Kunstmuseum y las tiendas de sellos (Liechtenstein es célebre en filatelia).", de: "Vaduz ist mit nur 5.500 Einwohnern eine der kleinsten Hauptstädte der Welt. Es wird vom Schloss von Fürst Hans-Adam II. dominiert, der offiziellen Residenz der Herrscherfamilie und nicht für die Öffentlichkeit zugänglich, bietet aber eine ikonische Silhouette über der Stadt. Die Hauptstraße beherbergt Museen, das Kunstmuseum und Briefmarkenläden (Liechtenstein ist berühmt für seine Philatelie).",
      },
      wikipedia: "Vaduz",
      tags: ["Ville", "Architecture", "Musées", "Histoire"],
      mustSee: [
        { name: { fr: "Château de Vaduz — résidence princière médiévale en hauteur dominant la ville", en: "Vaduz Castle — medieval princely residence overlooking the town", es: "Castillo de Vaduz — residencia principesca medieval en altura que domina la ciudad", de: "Schloss Vaduz – mittelalterliche Fürstenresidenz auf einem Hügel über der Stadt" }, wikipedia: "Vaduz_Castle" },
        { name: { fr: "Kunstmuseum Liechtenstein — musée d'art moderne et contemporain de haute qualité", en: "Kunstmuseum Liechtenstein — high-quality modern and contemporary art museum", es: "Kunstmuseum Liechtenstein — museo de arte moderno y contemporáneo de gran calidad", de: "Kunstmuseum Liechtenstein – hochwertiges Museum für moderne und zeitgenössische Kunst" }, wikipedia: "Kunstmuseum_Liechtenstein" },
        { name: { fr: "Landesmuseum — musée national d'histoire et de culture liechtensteinoise", en: "Landesmuseum — national museum of Liechtenstein history and culture", es: "Landesmuseum — museo nacional de historia y cultura de Liechtenstein", de: "Landesmuseum – Landesmuseum für liechtensteinische Geschichte und Kultur" }, wikipedia: "File:Liechtenstein_asv2022-10_img16_Vaduz_Verweserhaus.jpg" },
      ],
    },
    {
      id: 2,
      name: "Malbun",
      region: { fr: "Commune de Triesenberg", en: "Triesenberg municipality", es: "Municipio de Triesenberg", de: "Gemeinde Triesenberg" },
      description: {
        fr: "Malbun est la seule station de ski du Liechtenstein, perchée à 1 600 m dans un vallon alpin préservé. Avec ses 23 km de pistes accessibles aux débutants et familles, et son ambiance intime typiquement alpine, elle offre une alternative authentique aux grandes stations suisses et autrichiennes voisines. L'été, les randonnées depuis Malbun vers les crêtes frontalières sont spectaculaires.", en: "Malbun is Liechtenstein's only ski resort, perched at 1,600 m in an unspoiled alpine valley. With 23 km of slopes suited to beginners and families, and its typically intimate alpine atmosphere, it offers an authentic alternative to the large neighbouring Swiss and Austrian resorts. In summer, hikes from Malbun to the border ridges are spectacular.", es: "Malbun es la única estación de esquí de Liechtenstein, encaramada a 1.600 m en un valle alpino preservado. Con sus 23 km de pistas aptas para principiantes y familias, y su ambiente íntimo típicamente alpino, ofrece una alternativa auténtica a las grandes estaciones vecinas suizas y austriacas. En verano, las caminatas desde Malbun hacia las crestas fronterizas son espectaculares.", de: "Malbun ist Liechtensteins einziges Skigebiet und liegt auf 1.600 m in einem geschützten Alpental. Mit seinen 23 km Pisten für Anfänger und Familien und seiner familiären, typisch alpinen Atmosphäre bietet es eine authentische Alternative zu den großen benachbarten Schweizer und österreichischen Skigebieten. Im Sommer sind die Wanderungen von Malbun zu den Grenzkämmen spektakulär.",
      },
      wikipedia: "Malbun",
      tags: ["Ski", "Montagne", "Famille", "Randonnée"],
      mustSee: [
        { name: { fr: "Domaine skiable de Malbun — 23 km de pistes familiales, ambiance locale", en: "Malbun ski area — 23 km of family-friendly slopes, local atmosphere", es: "Dominio esquiable de Malbun — 23 km de pistas familiares, ambiente local", de: "Skigebiet Malbun – 23 km Familienpisten, heimische Atmosphäre" }, wikipedia: "Malbun" },
        { name: { fr: "Augstenberg (2 359 m) — point culminant accessible depuis Malbun, panorama exceptionnel", en: "Augstenberg (2,359 m) — highest peak accessible from Malbun, exceptional panorama", es: "Augstenberg (2.359 m) — cumbre más alta accesible desde Malbun, panorámica excepcional", de: "Augstenberg (2.359 m) – höchster von Malbun aus erreichbarer Punkt, außergewöhnliches Panorama" }, wikipedia: "Augstenberg" },
        { name: { fr: "Valorschtal — vallée idyllique au départ de randonnées vers l'Autriche", en: "Valorschtal — idyllic valley, starting point for hikes towards Austria", es: "Valorschtal — valle idílico, punto de partida de senderos hacia Austria", de: "Valorschtal – idyllisches Tal zum Wandern nach Österreich" }, wikipedia: "File:Sücka_Saminatal_–_WAF_300_J_FL.jpg" },
        { name: { fr: "Fürstin-Gina-Weg — sentier panoramique autour du village de Malbun", en: "Fürstin-Gina-Weg — panoramic trail around the village of Malbun", es: "Fürstin-Gina-Weg — sendero panorámico alrededor del pueblo de Malbun", de: "Fürstin-Gina-Weg – Panoramaweg rund um das Dorf Malbun" }, wikipedia: "File:Furth_bei_Göttweig_-_Ortsansicht_der_KG_Steinaweg.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Triesenberg et villages alpins", en: "Triesenberg and alpine villages", es: "Triesenberg y pueblos alpinos", de: "Triesenberg und Alpendörfer" },
      region: { fr: "Commune de Triesenberg", en: "Triesenberg municipality", es: "Municipio de Triesenberg", de: "Gemeinde Triesenberg" },
      description: {
        fr: "Triesenberg est un village walser perché à 884 m sur les flancs de la montagne, peuplé par des descendants de colons suisses alémanique (Walser) venus au XIVe siècle. Son musée walser et ses maisons traditionnelles en bois constituent un témoignage unique de cette culture de haute montagne. Le village offre une vue panoramique sur toute la vallée du Rhin et les Alpes suisses.", en: "Triesenberg is a Walser village perched at 884 m on the mountainside, populated by descendants of German-speaking Swiss settlers (Walser) who arrived in the 14th century. Its Walser museum and traditional wooden houses are a unique testament to this high-mountain culture. The village offers a panoramic view over the entire Rhine valley and the Swiss Alps.", es: "Triesenberg es un pueblo walser encaramado a 884 m en la ladera de la montaña, poblado por descendientes de colonos suizos germanófonos (walser) llegados en el siglo XIV. Su museo walser y sus casas tradicionales de madera son un testimonio único de esta cultura de alta montaña. El pueblo ofrece una vista panorámica de todo el valle del Rin y los Alpes suizos.", de: "Triesenberg ist ein Walserdorf, das auf 884 m Höhe an den Hängen des Berges liegt und von Nachkommen deutschsprachiger Schweizer (Walser) Siedler bewohnt wird, die im 14. Jahrhundert kamen. Das Walsermuseum und die traditionellen Holzhäuser sind ein einzigartiges Zeugnis dieser Hochgebirgskultur. Das Dorf bietet einen Panoramablick auf das gesamte Rheintal und die Schweizer Alpen.",
      },
      wikipedia: "Triesenberg",
      tags: ["Rural", "Culture", "Panorama", "Tradition"],
      mustSee: [
        { name: { fr: "Walsermuseum de Triesenberg — histoire de la colonisation walser du XIVe siècle", en: "Walsermuseum in Triesenberg — history of 14th-century Walser settlement", es: "Walsermuseum de Triesenberg — historia de la colonización walser del siglo XIV", de: "Walsermuseum Triesenberg – Geschichte der Walsersiedlung ab dem 14. Jahrhundert" }, wikipedia: "Triesenberg" },
        { name: { fr: "Église paroissiale Saint-Joseph — architecture néo-romane dominant le village", en: "St. Joseph's parish church — neo-Romanesque architecture overlooking the village", es: "Iglesia parroquial de San José — arquitectura neorrománica que domina el pueblo", de: "Pfarrkirche Saint-Joseph – neoromanische Architektur dominiert das Dorf" }, wikipedia: "File:Triesenberg 08-2011 - panoramio (2).jpg" },
        { name: { fr: "Sentier panoramique Triesenberg — vue sur la vallée du Rhin et les Alpes", en: "Triesenberg panoramic trail — view over the Rhine valley and the Alps", es: "Sendero panorámico de Triesenberg — vistas al valle del Rin y los Alpes", de: "Panoramaweg Triesenberg – Blick auf das Rheintal und die Alpen" }, wikipedia: "File:Between_Steg_and_Triesenberg,_Liechtenstein_-_panoramio.jpg" },
        { name: { fr: "Steg — hameau alpin au bout de la vallée, idéal pour la randonnée", en: "Steg — alpine hamlet at the end of the valley, ideal for hiking", es: "Steg — aldea alpina al final del valle, ideal para el senderismo", de: "Steg – Alpendörfchen am Ende des Tals, ideal zum Wandern" }, wikipedia: "File:Steg Gampel, 2024.jpg" },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "Le Liechtenstein utilise le franc suisse et partage les niveaux de prix élevés de la Suisse. C'est l'un des pays les plus chers d'Europe, avec des hébergements et une restauration à des tarifs comparables aux villes suisses. La proximité avec l'Autriche et la Suisse permet de trouver des options plus abordables.", en: "Liechtenstein uses the Swiss franc and shares Switzerland's high price levels. It is one of the most expensive countries in Europe, with accommodation and dining at rates comparable to Swiss cities. Proximity to Austria and Switzerland makes it possible to find more affordable options.", es: "Liechtenstein utiliza el franco suizo y comparte los altos niveles de precios de Suiza. Es uno de los países más caros de Europa, con alojamiento y restauración a tarifas comparables a las de las ciudades suizas. La cercanía con Austria y Suiza permite encontrar opciones más asequibles.", de: "Liechtenstein nutzt den Schweizer Franken und teilt das hohe Preisniveau der Schweiz. Es ist eines der teuersten Länder Europas, mit Übernachtungs- und Verpflegungspreisen, die mit Schweizer Städten vergleichbar sind. Die Nähe zu Österreich und der Schweiz ermöglicht es, günstigere Optionen zu finden.",
    },
    currency: "CHF",
    exchangeRate: "1 CHF ≈ 1,06 €",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Auberge de jeunesse ou gîte", en: "Youth hostel or B&B", es: "Albergue juvenil o casa rural", de: "Jugendherberge oder Lodge" }, price: "40–60 CHF", detail: { fr: "Options limitées, réservation indispensable", en: "Limited options, booking essential", es: "Opciones limitadas, reserva indispensable", de: "Begrenzte Möglichkeiten, Reservierung erforderlich" } },
          { label: { fr: "Hôtel budget", en: "Budget hotel", es: "Hotel económico", de: "Budget-Hotel" }, price: "90–140 CHF", detail: { fr: "Chambre double simple à Vaduz ou Schaan", en: "Simple double room in Vaduz or Schaan", es: "Habitación doble sencilla en Vaduz o Schaan", de: "Einzel-Doppelzimmer in Vaduz oder Schaan" } },
          { label: { fr: "Hôtel confort 3–4 étoiles", en: "3–4 star comfort hotel", es: "Hotel confort 3–4 estrellas", de: "3–4-Sterne-Komforthotel" }, price: "160–250 CHF", detail: { fr: "Hôtels alpins de qualité à Vaduz ou Malbun", en: "Quality alpine hotels in Vaduz or Malbun", es: "Hoteles alpinos de calidad en Vaduz o Malbun", de: "Hochwertige Alpenhotels in Vaduz oder Malbun" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Boulangerie ou Wurst (snack)", en: "Bakery or Wurst (snack)", es: "Panadería o Wurst (tentempié)", de: "Bäckerei oder Wurst (Snack)" }, price: "8–14 CHF", detail: { fr: "Repas rapide, pain, charcuterie et fromages locaux", en: "Quick meal, bread, cold cuts and local cheeses", es: "Comida rápida, pan, embutidos y quesos locales", de: "Schnelle Mahlzeit, Brot, Aufschnitt und Käse aus der Region" } },
          { label: { fr: "Restaurant, menu midi", en: "Restaurant, lunch menu", es: "Restaurante, menú de mediodía", de: "Restaurant, Mittagsmenü" }, price: "20–30 CHF", detail: { fr: "Cuisine alpine : Käsknöpfle (spätzle au fromage), Rösti", en: "Alpine cuisine: Käsknöpfle (cheese spätzle), Rösti", es: "Cocina alpina: Käsknöpfle (spätzle con queso), Rösti", de: "Alpenküche: Käsknöpfle (Kässpätzle), Rösti" } },
          { label: { fr: "Restaurant dîner", en: "Restaurant dinner", es: "Restaurante para cenar", de: "Abendessenrestaurant" }, price: "35–60 CHF", detail: { fr: "Cuisine liechtensteinoise gastronomique, vins locaux", en: "Fine Liechtenstein cuisine, local wines", es: "Alta cocina de Liechtenstein, vinos locales", de: "Gourmet Liechtensteiner Küche, lokale Weine" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bus national LIECHTENSTEINmobil", en: "National LIECHTENSTEINmobil bus", es: "Autobús nacional LIECHTENSTEINmobil", de: "Nationalbus LIECHTENSTEINmobil" }, price: "2–4 CHF", detail: { fr: "Réseau de bus couvrant toutes les communes", en: "Bus network covering all municipalities", es: "Red de autobuses que cubre todos los municipios", de: "Busnetz, das alle Gemeinden abdeckt" } },
          { label: { fr: "Train Zurich–Feldkirch (arrêt frontière)", en: "Train Zurich–Feldkirch (border stop)", es: "Tren Zúrich–Feldkirch (parada fronteriza)", de: "Zug Zürich–Feldkirch (Grenzhaltestelle)" }, price: "30–50 CHF", detail: { fr: "Plus proche grande gare, puis bus jusqu'à Vaduz (30 min)", en: "Nearest major station, then bus to Vaduz (30 min)", es: "Estación grande más cercana, luego autobús hasta Vaduz (30 min)", de: "Nächster großer Bahnhof, dann Bus nach Vaduz (30 Min.)" } },
          { label: { fr: "Location de vélo (journée)", en: "Bike rental (day)", es: "Alquiler de bicicleta (día)", de: "Fahrradverleih (Tag)" }, price: "20–35 CHF", detail: { fr: "Idéal pour longer le Rhin et visiter les communes", en: "Ideal for following the Rhine and visiting the municipalities", es: "Ideal para bordear el Rin y visitar los municipios", de: "Ideal für Spaziergänge am Rhein und Besichtigungen der Städte" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: "Kunstmuseum Liechtenstein", price: "15 CHF", detail: { fr: "Art moderne et contemporain de grande qualité", en: "High-quality modern and contemporary art", es: "Arte moderno y contemporáneo de gran calidad", de: "Hochwertige moderne und zeitgenössische Kunst" } },
          { label: { fr: "Forfait ski Malbun (journée)", en: "Malbun ski pass (day)", es: "Forfait de esquí en Malbun (día)", de: "Skipass Malbun (Tag)" }, price: "40–55 CHF", detail: { fr: "Tarifs inférieurs aux grandes stations suisses", en: "Lower rates than the big Swiss resorts", es: "Tarifas inferiores a las grandes estaciones suizas", de: "Niedrigere Preise als die großen Schweizer Resorts" } },
          { label: { fr: "Dégustation vins Domaine princier", en: "Princely Wine Estate tasting", es: "Cata de vinos de la Bodega Principesca", de: "Weinprobe Fürstliches Anwesen" }, price: "20–35 CHF", detail: { fr: "Visite et dégustation des vins du Prince régnant", en: "Tour and tasting of the reigning Prince's wines", es: "Visita y cata de los vinos del Príncipe reinante", de: "Besichtigung und Verkostung der Weine des regierenden Fürsten" } },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
        daily: "120–160 €/j",
        desc: { fr: "Auberge, repas simples, bus, musées et randonnées gratuites", en: "Hostel, simple meals, bus, museums and free hikes", es: "Albergue, comidas sencillas, autobús, museos y senderismo gratuito", de: "Herberge, einfache Mahlzeiten, Busse, Museen und kostenlose Wanderungen" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
        daily: "200–280 €/j",
        desc: { fr: "Hôtel alpin, restaurants, ski ou randonnée guidée, dégustations", en: "Alpine hotel, restaurants, skiing or guided hikes, tastings", es: "Hotel alpino, restaurantes, esquí o senderismo guiado, catas", de: "Alpenhotel, Restaurants, Skifahren oder geführte Wanderungen, Verkostungen" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "3 jours", en: "3 days", es: "3 días", de: "3 Tage" },
      route: { fr: "Vaduz – Malbun – Triesenberg – Vignobles du Rhin", en: "Vaduz – Malbun – Triesenberg – Rhine vineyards", es: "Vaduz – Malbun – Triesenberg – Viñedos del Rin", de: "Vaduz – Malbun – Triesenberg – Rheinische Weinberge" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "500 – 700 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Train A/R Paris–Zürich puis bus", en: "Return train Paris–Zurich then bus", es: "Tren ida y vuelta Madrid–Zúrich y luego autobús", de: "Rückfahrt mit dem Zug Paris–Zürich, dann mit dem Bus" }, amount: "80–160 €" },
            { label: { fr: "Hébergement (2 nuits)", en: "Accommodation (2 nights)", es: "Alojamiento (2 noches)", de: "Unterkunft (2 Nächte)" }, amount: "80–120 €" },
            { label: { fr: "Transports locaux", en: "Local transport", es: "Transporte local", de: "Nahverkehr" }, amount: "15–25 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "120–180 €" },
            { label: { fr: "Activités + musées", en: "Activities + museums", es: "Actividades + museos", de: "Aktivitäten + Museen" }, amount: "50–80 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "950 – 1 350 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Zürich puis navette", en: "Return flight Paris–Zurich then shuttle", es: "Vuelo ida y vuelta Madrid–Zúrich y luego traslado", de: "Hin- und Rückflug Paris–Zürich, dann Shuttle" }, amount: "120–220 €" },
            { label: { fr: "Hébergement (2 nuits)", en: "Accommodation (2 nights)", es: "Alojamiento (2 noches)", de: "Unterkunft (2 Nächte)" }, amount: "320–500 €" },
            { label: { fr: "Transports locaux", en: "Local transport", es: "Transporte local", de: "Nahverkehr" }, amount: "25–50 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "280–400 €" },
            { label: { fr: "Activités + ski + dégustations", en: "Activities + skiing + tastings", es: "Actividades + esquí + catas", de: "Aktivitäten + Skifahren + Verkostungen" }, amount: "150–220 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "Pas d'aéroport — prendre le train jusqu'à Zürich (4h30) ou Feldkirch (5h)", en: "No airport — take the train to Zurich (4h30) or Feldkirch (5h)", es: "Sin aeropuerto — tomar el tren hasta Zúrich o Feldkirch", de: "Kein Flughafen – nehmen Sie den Zug nach Zürich (4 Std. 30 Min.) oder Feldkirch (5 Std.)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Aucun visa requis — membre de l'espace Schengen, carte d'identité française suffisante", en: "No visa required — Schengen area member, French national ID card is sufficient", es: "Sin visado — miembro del espacio Schengen, DNI válido para ciudadanos de la UE", de: "Kein Visum erforderlich – Mitglied des Schengen-Raums, ausreichender französischer Personalausweis" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Franc suisse (CHF) — pays très cher, prévoir un budget conséquent", en: "Swiss franc (CHF) — a very expensive country, plan a substantial budget", es: "Franco suizo (CHF) — país muy caro, prever un presupuesto considerable", de: "Schweizer Franken (CHF) – sehr teures Land, planen Sie ein beträchtliches Budget ein" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Allemand (dialecte alémanique) — l'anglais est parlé dans les hôtels et musées", en: "German (Alemannic dialect) — English is spoken in hotels and museums", es: "Alemán (dialecto alemánico) — el inglés se habla en hoteles y museos", de: "Deutsch (alemannischer Dialekt) – Englisch wird in Hotels und Museen gesprochen" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type J (prise suisse à 3 broches rondes) — adaptateur nécessaire", en: "Type J (Swiss 3-round-pin plug) — adapter required", es: "Tipo J (enchufe suizo de 3 clavijas redondas) — adaptador necesario", de: "Typ J (3-poliger Schweizer Stecker) – Adapter erforderlich" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Carte européenne d'assurance maladie non valable — assurance voyage obligatoire", en: "European health insurance card not valid — travel insurance mandatory", es: "Tarjeta Sanitaria Europea no válida — seguro de viaje obligatorio", de: "Ungültige Europäische Krankenversicherungskarte – obligatorische Reiseversicherung" } },
    { icon: "🏦", label: { fr: "Finance", en: "Finance", es: "Finanzas", de: "Finanzen" }, value: { fr: "Paradis fiscal et financier — de nombreuses holdings internationales y sont domiciliées", en: "Tax and financial haven — home to numerous international holding companies", es: "Paraíso fiscal y financiero — numerosos holdings internacionales tienen aquí su domicilio", de: "Steuer- und Finanzparadies – viele internationale Holdinggesellschaften sind dort ansässig" } },
    { icon: "📮", label: { fr: "Philatélie", en: "Philately", es: "Filatelia", de: "Philatelie" }, value: { fr: "Les timbres du Liechtenstein sont collectionnés dans le monde entier, en vente au musée", en: "Liechtenstein stamps are collected worldwide, on sale at the museum", es: "Los sellos de Liechtenstein son coleccionados en todo el mundo, a la venta en el museo", de: "Liechtensteiner Briefmarken werden auf der ganzen Welt gesammelt und im Museum verkauft" } },
  ],
};
