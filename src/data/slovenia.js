export const SLOVENIA = {
  code: "SVN",
  numericId: 705,
  name: { fr: "Slovénie", en: "Slovenia", es: "Eslovenia", de: "Slowenien" },
  emoji: "🇸🇮",
  capital: { fr: "Ljubljana", en: "Ljubljana", es: "Liubliana", de: "Ljubljana" },
  language: { fr: "Slovène", en: "Slovenian", es: "Esloveno", de: "Slowenisch" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)", es: "Euro (EUR)", de: "Euro (EUR)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 60, budgetMid: 110,
    tripMin: 900, tripMid: 2000,
  },
  criteria: {
    unesco: 3,
    nature: 2,
    randonnee: 2,
    gastronomie: 2,
    architecture: 2,
    desert: 0,
    safari: 0,
    ski: 2,
    ville: 2,
    plage: 1,
    plongee: 2,
  },
  description: {
    fr: "La Slovénie est le pays le plus vert d'Europe : 60% du territoire couvert par la forêt, le lac de Bled (château médiéval sur île au milieu d'un lac vert émeraude dans les Alpes juliennes), les grottes de Postojna (les plus visitées d'Europe), le parc national du Triglav et ses 2 864m, la côte adriatique de Piran, et Ljubljana — une capitale à vélo au bord de la Ljubljanica.", en: "Slovenia is Europe's greenest country: 60% of its territory covered by forest, Lake Bled (a medieval castle on an island in the middle of an emerald-green lake in the Julian Alps), the Postojna Caves (the most visited in Europe), Triglav National Park with its 2,864m peak, the Adriatic coastline of Piran, and Ljubljana — a cycling capital on the banks of the Ljubljanica.", es: "Eslovenia es el país más verde de Europa: el 60% de su territorio está cubierto por bosques, el lago Bled (un castillo medieval en una isla en medio de un lago verde esmeralda en los Alpes Julianos), las cuevas de Postojna (las más visitadas de Europa), el parque nacional del Triglav y su cima de 2.864m, la costa adriática de Piran, y Liubliana — una capital ciclista a orillas del río Liubliana.", de: "Slowenien ist das grünste Land Europas: 60 % der Fläche sind mit Wald bedeckt, der Bleder See (mittelalterliche Burg auf einer Insel inmitten eines smaragdgrünen Sees in den Julischen Alpen), die Höhlen von Postojna (die meistbesuchten in Europa), der Triglav-Nationalpark mit seinen 2.864 m, die Adriaküste von Piran und Ljubljana – eine Fahrradhauptstadt am Ufer der Ljubljanica.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Septembre", en: "June – September", es: "Junio – Septiembre", de: "Juni – September" },
      label: { fr: "Été alpin", en: "Alpine summer", es: "Verano alpino", de: "Alpensommer" },
      color: "#22c55e",
      description: {
        fr: "Lac de Bled idéal (eau à 22°C), Triglav accessible, Ljubljana animée, côte de Piran ensoleillée. Températures 22–28°C en plaine, 15–20°C en montagne.", en: "Lake Bled at its best (water at 22°C), Triglav accessible, lively Ljubljana, sunny Piran coast. Temperatures 22–28°C in the lowlands, 15–20°C in the mountains.", es: "Lago Bled en su mejor momento (agua a 22°C), Triglav accesible, Liubliana animada, costa de Piran soleada. Temperaturas de 22–28°C en el llano, 15–20°C en montaña.", de: "Idealer Bleder See (Wassertemperatur 22°C), zugänglicher Triglav, lebhaftes Ljubljana, sonnige Piran-Küste. Temperaturen 22–28°C in der Ebene, 15–20°C in den Bergen.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Mars", en: "December – March", es: "Diciembre – Marzo", de: "Dezember – März" },
      label: { fr: "Ski alpin", en: "Alpine skiing", es: "Esquí alpino", de: "Ski alpin" },
      color: "#3b82f6",
      description: {
        fr: "Ski à Kranjska Gora et Krvavec. Lac de Bled sous la neige — une des plus belles vues d'Europe en hiver. Températures -5 à -15°C en altitude.", en: "Skiing at Kranjska Gora and Krvavec. Lake Bled under snow — one of the most beautiful winter views in Europe. Temperatures -5 to -15°C at altitude.", es: "Esquí en Kranjska Gora y Krvavec. Lago Bled cubierto de nieve — una de las vistas más bellas de Europa en invierno. Temperaturas de -5 a -15°C en altura.", de: "Skifahren in Kranjska Gora und Krvavec. Der Bleder See unter dem Schnee – einer der schönsten Ausblicke in Europa im Winter. Temperaturen -5 bis -15°C in der Höhe.",
      },
      icon: "⛷️",
    },
  ],

  weatherCities: [
    {
      id: "ljubljana",
      name: "Ljubljana",
      region: { fr: "Bassin de Ljubljana (centre)", en: "Ljubljana basin (centre)", es: "Cuenca de Liubliana (centro)", de: "Ljubljana-Becken (Mitte)" },
      data: [
        { month: "Jan", temp:  1, rain: 70,  icon: "❄️" },
        { month: "Fév", temp:  3, rain: 70,  icon: "❄️" },
        { month: "Mar", temp:  8, rain: 90,  icon: "⛅" },
        { month: "Avr", temp: 13, rain: 100, icon: "⛅" },
        { month: "Mai", temp: 17, rain: 110, icon: "⛅" },
        { month: "Jun", temp: 19, rain: 120, icon: "☀️" },
        { month: "Jul", temp: 21, rain: 100, icon: "☀️" },
        { month: "Aoû", temp: 21, rain: 95,  icon: "☀️" },
        { month: "Sep", temp: 16, rain: 100, icon: "⛅" },
        { month: "Oct", temp: 11, rain: 110, icon: "⛅" },
        { month: "Nov", temp:  5, rain: 100, icon: "⛅" },
        { month: "Déc", temp:  1, rain: 85,  icon: "❄️" },
      ],
    },
    {
      id: "bled",
      name: { fr: "Lac de Bled", en: "Lake Bled", es: "Lago Bled", de: "Bleder See" },
      region: { fr: "Alpes juliennes (nord-ouest)", en: "Julian Alps (north-west)", es: "Alpes Julianos (noroeste)", de: "Julische Alpen (Nordwesten)" },
      data: [
        { month: "Jan", temp: -1, rain: 80,  icon: "❄️" },
        { month: "Fév", temp:  1, rain: 75,  icon: "❄️" },
        { month: "Mar", temp:  6, rain: 95,  icon: "⛅" },
        { month: "Avr", temp: 11, rain: 110, icon: "⛅" },
        { month: "Mai", temp: 15, rain: 120, icon: "⛅" },
        { month: "Jun", temp: 18, rain: 130, icon: "☀️" },
        { month: "Jul", temp: 21, rain: 110, icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 105, icon: "☀️" },
        { month: "Sep", temp: 15, rain: 110, icon: "⛅" },
        { month: "Oct", temp:  9, rain: 120, icon: "⛅" },
        { month: "Nov", temp:  3, rain: 110, icon: "⛅" },
        { month: "Déc", temp: -1, rain: 85,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Lac de Bled — Carte postale des Alpes", en: "Lake Bled — The Alps' postcard view", es: "Lago Bled — La postal de los Alpes", de: "Bleder See – Postkarte aus den Alpen" },
      region: { fr: "Alpes juliennes", en: "Julian Alps", es: "Alpes Julianos", de: "Julische Alpen" },
      description: {
        fr: "Le lac de Bled est l'une des vues les plus photographiées d'Europe : une église baroque sur une petite île au milieu d'un lac vert émeraude encerclé d'Alpes, avec un château médiéval perché sur une falaise. La pletna (barque traditionnelle) emmène les visiteurs à l'île. La crème à la vanille (kremšnita) inventée ici est un rituel.", en: "Lake Bled is one of the most photographed views in Europe: a baroque church on a small island in the middle of an emerald-green lake ringed by the Alps, with a medieval castle perched on a cliff. The pletna (traditional boat) carries visitors to the island. The vanilla cream cake (kremšnita) invented here is a must.", es: "El lago Bled es una de las vistas más fotografiadas de Europa: una iglesia barroca en una pequeña isla en medio de un lago verde esmeralda rodeado de Alpes, con un castillo medieval encaramado en un acantilado. La pletna (barca tradicional) lleva a los visitantes hasta la isla. La tarta de crema (kremšnita) inventada aquí es todo un ritual.", de: "Der Bleder See ist eine der meistfotografierten Sehenswürdigkeiten Europas: eine barocke Kirche auf einer kleinen Insel inmitten eines smaragdgrünen Sees, umgeben von den Alpen, mit einer mittelalterlichen Burg auf einer Klippe. Die Pletna (traditionelles Boot) bringt Besucher zur Insel. Die hier erfundene Vanillecreme (Kremšnita) ist ein Ritual.",
      },
      wikipedia: "Lake_Bled",
      tags: ["Nature", "Montagne", "Architecture", "Plage", "Randonnée", "Ski"],
      mustSee: [
        { name: { fr: "Île de Bled en pletna — église baroque du XVIIe siècle", en: "Bled Island by pletna — 17th-century baroque church", es: "Isla de Bled en pletna — iglesia barroca del siglo XVII", de: "Insel Bled in Pletna – Barockkirche aus dem 17. Jahrhundert" }, wikipedia: "File:Bled Overview.JPG" },
        { name: { fr: "Château de Bled (XIe s.) — vue plongeante sur le lac", en: "Bled Castle (11th century) — sweeping view over the lake", es: "Castillo de Bled (s. XI) — vista panorámica sobre el lago", de: "Burg von Bled (11. Jahrhundert) – Blick auf den See" }, wikipedia: "Bled_Castle" },
        { name: { fr: "Vintgar Gorge — canyon de 1,6km à 4km de Bled", en: "Vintgar Gorge — a 1.6km canyon 4km from Bled", es: "Garganta de Vintgar — cañón de 1,6km a 4km de Bled", de: "Vintgar-Schlucht – 1,6 km lange Schlucht, 4 km von Bled entfernt" }, wikipedia: "Vintgar_Gorge" },
      ],
    },
    {
      id: 2,
      name: { fr: "Grottes de Postojna et Predjama", en: "Postojna and Predjama Caves", es: "Cuevas de Postojna y Predjama", de: "Höhlen von Postojna und Predjama" },
      region: { fr: "Carso (sud-ouest)", en: "Karst (south-west)", es: "Carso (suroeste)", de: "Carso (südwestlich)" },
      description: {
        fr: "Les grottes de Postojna sont les plus visitées d'Europe (24 millions de visiteurs depuis leur découverte) : 24km de galeries avec stalactites géantes, le protée (olm, le 'poisson humain' — salamandre aveugle endémique aux grottes balkaniques) et un train souterrain qui parcourt 5km dans les entrailles. À 10km : le château de Predjama, dans la falaise au-dessus d'une grotte.", en: "The Postojna Caves are the most visited in Europe (24 million visitors since their discovery): 24km of galleries with giant stalactites, the olm (the 'human fish' — a blind salamander endemic to Balkan caves), and an underground train that runs 5km into the depths. 10km away: Predjama Castle, built into a cliff above a cave.", es: "Las cuevas de Postojna son las más visitadas de Europa (24 millones de visitantes desde su descubrimiento): 24km de galerías con estalactitas gigantes, el proteo (olm, el 'pez humano' — salamandra ciega endémica de las cuevas balcánicas) y un tren subterráneo que recorre 5km en las entrañas de la tierra. A 10km: el castillo de Predjama, incrustado en el acantilado sobre una cueva.", de: "Die Postojna-Höhlen sind die meistbesuchten in Europa (24 Millionen Besucher seit ihrer Entdeckung): 24 km Galerien mit riesigen Stalaktiten, dem Protea (Olm, der „menschliche Fisch“ – blinder Salamander, der in den Balkanhöhlen endemisch ist) und einer U-Bahn, die 5 km in die Eingeweide fährt. 10 km: Burg Predjama, in der Klippe über einer Höhle.",
      },
      wikipedia: "Postojna_Cave",
      tags: ["Nature", "Safari", "UNESCO"],
      mustSee: [
        { name: { fr: "Train souterrain dans les grottes de Postojna (5km)", en: "Underground train through the Postojna Caves (5km)", es: "Tren subterráneo en las cuevas de Postojna (5km)", de: "U-Bahn in den Höhlen von Postojna (5 km)" }, wikipedia: "File:Postojna Cave train (3).jpg" },
        { name: { fr: "Protée (olm) — salamandre aveugle endémique des grottes balkaniques", en: "Olm — blind salamander endemic to Balkan caves", es: "Proteo (olm) — salamandra ciega endémica de las cuevas balcánicas", de: "Proteus (Golm) – blinder Salamander, der in Balkanhöhlen endemisch ist" }, wikipedia: "Olm" },
        { name: { fr: "Concert de Noël dans les grottes (acoustique unique)", en: "Christmas concert in the caves (unique acoustics)", es: "Concierto de Navidad en las cuevas (acústica única)", de: "Weihnachtskonzert in den Höhlen (einzigartige Akustik)" }, wikipedia: "File:Postojna Cave. Concert Hall. 2012-07-26 13-42-19.jpg" },
        { name: { fr: "Château de Predjama — forteresse dans la falaise au-dessus d'une grotte", en: "Predjama Castle — fortress in a cliff above a cave", es: "Castillo de Predjama — fortaleza en el acantilado sobre una cueva", de: "Burg Predjama – Festung in der Klippe über einer Höhle" }, wikipedia: "Predjama_Castle" },
      ],
    },
    {
      id: 3,
      name: { fr: "Parc national du Triglav", en: "Triglav National Park", es: "Parque nacional del Triglav", de: "Triglav-Nationalpark" },
      region: { fr: "Alpes juliennes (nord)", en: "Julian Alps (north)", es: "Alpes Julianos (norte)", de: "Julische Alpen (Norden)" },
      description: {
        fr: "Le Triglav (2 864m) est le symbole national slovène — son ascension est un rite de passage pour tout Slovène. Le parc national du Triglav (838 km²) est le seul parc national du pays : lacs d'altitude de couleur opale (les Lacs des Sept Lagons), gorges de Soča (eau d'un turquoise hallucinant, paradis du kayak), et prairies alpines fleuries.", en: "Triglav (2,864m) is the Slovenian national symbol — climbing it is a rite of passage for every Slovenian. Triglav National Park (838 km²) is the country's only national park: opal-coloured mountain lakes (the Seven Lakes Valley), the Soča gorge (dazzling turquoise water, a kayaking paradise), and blooming alpine meadows.", es: "El Triglav (2.864m) es el símbolo nacional esloveno — su ascensión es un rito de paso para todo esloveno. El parque nacional del Triglav (838 km²) es el único parque nacional del país: lagos de altitud de color ópalo (el Valle de los Siete Lagos), el desfiladero del Soča (agua de un turquesa alucinante, paraíso del kayak) y praderas alpinas floridas.", de: "Der Triglav (2.864 m) ist das slowenische Nationalsymbol – seine Besteigung ist für jeden Slowenen ein Übergangsritus. Der Triglav-Nationalpark (838 km²) ist der einzige Nationalpark des Landes: opalfarbene Hochgebirgsseen (die Seen der Sieben Lagunen), Soča-Schluchten (erstaunliches türkisfarbenes Wasser, Kajakparadies) und blumige Almwiesen.",
      },
      wikipedia: "File:Triglav National Park (28749976304).jpg",
      tags: ["Aventure", "Nature", "Randonnée", "Ski", "UNESCO"],
      mustSee: [
        { name: { fr: "Rivière Soča — turquoise intense, kayak et rafting", en: "Soča River — intense turquoise, kayaking and rafting", es: "Río Soča — turquesa intenso, kayak y rafting", de: "Fluss Soča – intensives Türkis, Kajakfahren und Rafting" }, wikipedia: "Soča" },
        { name: { fr: "Sept lacs de Triglav — randonnée de 2 jours", en: "Triglav's Seven Lakes — a 2-day hike", es: "Siete lagos del Triglav — caminata de 2 días", de: "Sieben Triglav-Seen – 2-tägige Wanderung" }, wikipedia: "File:Triglav_Lakes_Valley_Mountain_Lodge_in_Slovenia%27s_Julian_Alps.jpg" },
        { name: { fr: "Gorge de Vintgar depuis Bled (marche 1h30)", en: "Vintgar Gorge from Bled (1h30 walk)", es: "Garganta de Vintgar desde Bled (caminata de 1h30)", de: "Vintgar-Schlucht von Bled (1 Std. 30 Min. Fußweg)" }, wikipedia: "Vintgar_Gorge" },
        { name: { fr: "Ascension du Triglav (2 864m) — 2 jours avec guide", en: "Climbing Triglav (2,864m) — 2 days with a guide", es: "Ascensión al Triglav (2.864m) — 2 días con guía", de: "Besteigung des Triglav (2.864 m) – 2 Tage mit Führer" }, wikipedia: "Triglav" },
      ],
    },
    {
      id: 4,
      name: { fr: "Ljubljana — Capitale verte à vélo", en: "Ljubljana — The green cycling capital", es: "Liubliana — La capital verde en bicicleta", de: "Ljubljana – Grüne Hauptstadt mit dem Fahrrad" },
      region: { fr: "Capitale", en: "Capital", es: "Capital", de: "Hauptstadt" },
      description: {
        fr: "Ljubljana est la capitale européenne de l'environnement 2016 : centre-ville intégralement piéton depuis 2007, 30km de pistes cyclables, la Ljubljanica traversant le centre avec ses terrasses animées, le château médiéval sur la colline, et les marchés biologiques du vendredi. Une ville à taille humaine, dynamique et bilingue (anglais parfait).", en: "Ljubljana was European Green Capital in 2016: fully pedestrianised city centre since 2007, 30km of cycle paths, the Ljubljanica river running through the centre with lively terraces, a medieval castle on the hill, and organic markets on Fridays. A human-scale city, dynamic and bilingual (excellent English).", es: "Liubliana fue capital verde europea en 2016: centro urbano totalmente peatonal desde 2007, 30km de carriles bici, el río Liubliana atravesando el centro con sus animadas terrazas, el castillo medieval en la colina, y los mercados ecológicos de los viernes. Una ciudad a escala humana, dinámica y bilingüe (inglés excelente).", de: "Ljubljana ist die Umwelthauptstadt Europas 2016: seit 2007 vollständig verkehrsberuhigtes Stadtzentrum, 30 km Radwege, die Ljubljanica durchquert das Zentrum mit ihren belebten Terrassen, die mittelalterliche Burg auf dem Hügel und die Freitags-Biomärkte. Eine Stadt im menschlichen Maßstab, dynamisch und zweisprachig (perfektes Englisch).",
      },
      wikipedia: "Ljubljana",
      tags: ["Ville", "Aventure", "Nature", "Shopping", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Triple-pont de Plečnik — entrée monumentale en vieille ville", en: "Plečnik's Triple Bridge — monumental entrance to the old town", es: "Triple puente de Plečnik — entrada monumental al casco antiguo", de: "Plečnik-Dreibrücke – monumentaler Eingang zur Altstadt" }, wikipedia: "Triple_Bridge" },
        { name: { fr: "Château de Ljubljana — vue panoramique sur les Alpes", en: "Ljubljana Castle — panoramic view of the Alps", es: "Castillo de Liubliana — vista panorámica de los Alpes", de: "Burg von Ljubljana – Panoramablick auf die Alpen" }, wikipedia: "Ljubljana_Castle" },
        { name: { fr: "Marché de Pogačar (vendredi) — produits bio slovènes", en: "Pogačar Market (Friday) — organic Slovenian produce", es: "Mercado de Pogačar (viernes) — productos ecológicos eslovenos", de: "Pogačar-Markt (Freitag) – Slowenische Bio-Produkte" }, wikipedia: "Ljubljana" },
        { name: { fr: "Promenade de la Ljubljanica — terrasses et bateaux le soir", en: "Ljubljanica river promenade — terraces and boats in the evening", es: "Paseo por el río Liubliana — terrazas y barcos por la noche", de: "Promenade von Ljubljanica – Terrassen und Boote am Abend" }, wikipedia: "Ljubljanica" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Slovénie est légèrement moins chère que la France mais plus chère que ses voisins Croatie ou Hongrie. Le lac de Bled est très touristique et donc cher en été. Ljubljana reste très abordable pour une capitale de l'UE.", en: "Slovenia is slightly cheaper than France but pricier than neighbouring Croatia or Hungary. Lake Bled is very touristy and therefore expensive in summer. Ljubljana remains very affordable for an EU capital.", es: "Eslovenia es ligeramente más barata que Francia, pero más cara que sus vecinos Croacia u Hungría. El lago Bled es muy turístico y, por lo tanto, caro en verano. Liubliana sigue siendo muy asequible para una capital de la UE.", de: "Slowenien ist etwas günstiger als Frankreich, aber teurer als seine Nachbarn Kroatien oder Ungarn. Der Bleder See ist im Sommer sehr touristisch und daher teuer. Ljubljana bleibt für eine EU-Hauptstadt sehr erschwinglich.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€ (zone euro)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Hostel / guesthouse Ljubljana ou Bled", en: "Hostel / guesthouse in Ljubljana or Bled", es: "Hostel / pensión en Liubliana o Bled", de: "Hostel/Gästehaus Ljubljana oder Bled" }, price: "25–55 €", detail: { fr: "Bonne qualité, vues souvent incluses", en: "Good quality, often with views", es: "Buena calidad, con vistas a menudo incluidas", de: "Gute Qualität, Ansichten oft inklusive" } },
          { label: { fr: "Hôtel 3★ Ljubljana centre", en: "3★ hotel, central Ljubljana", es: "Hotel 3★ en el centro de Liubliana", de: "Hotel 3★ Ljubljana Zentrum" }, price: "80–150 €", detail: { fr: "Bon confort en ville", en: "Good in-town comfort", es: "Buen confort en la ciudad", de: "Guter Komfort in der Stadt" } },
          { label: { fr: "Pension au bord du lac de Bled (été)", en: "Guesthouse by Lake Bled (summer)", es: "Pensión a orillas del lago Bled (verano)", de: "Pension am Bleder See (Sommer)" }, price: "90–180 €", detail: { fr: "Vue sur le lac, réserver 3 mois à l'avance", en: "Lake view, book 3 months ahead", es: "Vista al lago, reservar con 3 meses de antelación", de: "Seeblick, 3 Monate im Voraus buchen" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Jota (soupe de haricots et choucroute) + kruh (pain)", en: "Jota (bean and sauerkraut soup) + kruh (bread)", es: "Jota (sopa de alubias y chucrut) + kruh (pan)", de: "Jota (Bohnen-Sauerkraut-Suppe) + Kruh (Brot)" }, price: "7–12 €", detail: { fr: "Cuisine slovène simple et copieuse", en: "Simple, hearty Slovenian cuisine", es: "Cocina eslovena sencilla y abundante", de: "Einfache und herzhafte slowenische Küche" } },
          { label: { fr: "Restaurant mid-range Ljubljana ou Bled", en: "Mid-range restaurant in Ljubljana or Bled", es: "Restaurante de gama media en Liubliana o Bled", de: "Mittelklasserestaurant Ljubljana oder Bled" }, price: "14–25 €", detail: { fr: "Cuisine locale créative", en: "Creative local cuisine", es: "Cocina local creativa", de: "Kreative lokale Küche" } },
          { label: { fr: "Kremšnita de Bled — la vraie, au café Park", en: "Bled's Kremšnita — the original, at Café Park", es: "Kremšnita de Bled — la auténtica, en el café Park", de: "Bled Kremšnita – die echte im Parkcafé" }, price: "4–6 €", detail: { fr: "Crème à la vanille — expérience obligatoire", en: "Vanilla cream cake — a must-try", es: "Tarta de crema — experiencia obligatoria", de: "Vanillecreme – Erfahrung erforderlich" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bus public Ljubljana–Bled (1h20)", en: "Public bus Ljubljana–Bled (1h20)", es: "Autobús público Liubliana–Bled (1h20)", de: "Öffentlicher Bus Ljubljana–Bled (1 Std. 20 Min.)" }, price: "7 €", detail: { fr: "Fréquent, direct", en: "Frequent, direct", es: "Frecuente, directo", de: "Häufig, direkt" } },
          { label: { fr: "Location de vélo Ljubljana (journée)", en: "Bike rental in Ljubljana (day)", es: "Alquiler de bicicleta en Liubliana (día)", de: "Fahrradverleih Ljubljana (Tag)" }, price: "10–15 €", detail: { fr: "La meilleure façon de visiter la capitale", en: "The best way to explore the capital", es: "La mejor manera de visitar la capital", de: "Der beste Weg, die Hauptstadt zu besuchen" } },
          { label: { fr: "Train Ljubljana–Postojna (1h, pour les grottes)", en: "Train Ljubljana–Postojna (1h, for the caves)", es: "Tren Liubliana–Postojna (1h, para las cuevas)", de: "Zug Ljubljana–Postojna (1 Stunde, für die Höhlen)" }, price: "6 €", detail: { fr: "Puis bus ou taxi depuis la gare", en: "Then bus or taxi from the station", es: "Luego autobús o taxi desde la estación", de: "Dann Bus oder Taxi vom Bahnhof" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Grottes de Postojna (visite guidée 1h30 + train)", en: "Postojna Caves (guided tour 1h30 + train)", es: "Cuevas de Postojna (visita guiada 1h30 + tren)", de: "Höhlen von Postojna (Führung 1 Std. 30 Min. + Zug)" }, price: "28 €", detail: { fr: "Incontournable de Slovénie", en: "A Slovenian must-see", es: "Imprescindible de Eslovenia", de: "Ein Muss in Slowenien" } },
          { label: { fr: "Pletna (barque traditionnelle) vers l'île de Bled", en: "Pletna (traditional boat) to Bled Island", es: "Pletna (barca tradicional) hacia la isla de Bled", de: "Pletna (traditionelles Boot) zur Insel Bled" }, price: "16 €", detail: { fr: "A/R, 30 min de traversée", en: "Return trip, 30 min crossing", es: "Ida y vuelta, 30 min de travesía", de: "Hin- und Rückfahrt, 30-minütige Überfahrt" } },
          { label: { fr: "Kayak sur la Soča (demi-journée avec guide)", en: "Kayaking on the Soča (half-day, guided)", es: "Kayak en el Soča (media jornada con guía)", de: "Kajakfahren auf der Soča (halber Tag mit Führer)" }, price: "40–70 €", detail: { fr: "Eau turquoise unique en Europe", en: "Uniquely turquoise water in Europe", es: "Agua turquesa única en Europa", de: "Türkisfarbenes Wasser, einzigartig in Europa" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "60–95 €/j", desc: { fr: "Hostel + cuisine locale + bus + activités basiques", en: "Hostel + local food + bus + basic activities", es: "Hostel + comida local + autobús + actividades básicas", de: "Hostel + lokale Küche + Bus + grundlegende Aktivitäten" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "110–200 €/j", desc: { fr: "Hôtel 3★ + restaurants + activités guidées", en: "3★ hotel + restaurants + guided activities", es: "Hotel 3★ + restaurantes + actividades guiadas", de: "3★ Hotel + Restaurants + geführte Aktivitäten" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days", es: "8 días", de: "8 Tage" },
      route: {
        fr: "Ljubljana (2j) → Postojna + Predjama (1j) → Lac de Bled (3j) → Soča + Triglav (2j)", en: "Ljubljana (2d) → Postojna + Predjama (1d) → Lake Bled (3d) → Soča + Triglav (2d)", es: "Liubliana (2d) → Postojna + Predjama (1d) → Lago Bled (3d) → Soča + Triglav (2d)", de: "Ljubljana (2 Tage) → Postojna + Predjama (1 Tag) → Bleder See (3 Tage) → Soča + Triglav (2 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "900 – 1 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Ljubljana (Ryanair, Air France)", en: "Return flight Paris–Ljubljana (Ryanair, Air France)", es: "Vuelo ida y vuelta París–Liubliana (Ryanair, Air France)", de: "Hin- und Rückflug Paris–Ljubljana (Ryanair, Air France)" }, amount: "80–200 €" },
            { label: { fr: "Hébergement (8 nuits)", en: "Accommodation (8 nights)", es: "Alojamiento (8 noches)", de: "Unterkunft (8 Nächte)" }, amount: "250–500 €" },
            { label: { fr: "Transports (bus + vélo)", en: "Transport (bus + bike)", es: "Transporte (autobús + bicicleta)", de: "Transport (Bus + Fahrrad)" }, amount: "80–150 €" },
            { label: { fr: "Nourriture + kremšnita", en: "Food + kremšnita", es: "Comida + kremšnita", de: "Essen + Kremšnita" }, amount: "280–450 €" },
            { label: { fr: "Grottes + pletna + kayak", en: "Caves + pletna + kayaking", es: "Cuevas + pletna + kayak", de: "Höhlen + Pletna + Kajak" }, amount: "150–280 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "2 000 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Ljubljana", en: "Return flight Paris–Ljubljana", es: "Vuelo ida y vuelta París–Liubliana", de: "Hin- und Rückflug Paris–Ljubljana" }, amount: "100–250 €" },
            { label: { fr: "Hôtels 3★ (8 nuits)", en: "3★ hotels (8 nights)", es: "Hoteles 3★ (8 noches)", de: "3★ Hotels (8 Nächte)" }, amount: "700–1 300 €" },
            { label: { fr: "Voiture de location (8 jours)", en: "Car rental (8 days)", es: "Coche de alquiler (8 días)", de: "Mietwagen (8 Tage)" }, amount: "250–400 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "400–700 €" },
            { label: { fr: "Activités guidées + ski + sorties", en: "Guided activities + skiing + outings", es: "Actividades guiadas + esquí + excursiones", de: "Geführte Aktivitäten + Skifahren + Ausflüge" }, amount: "350–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde París", de: "Flug ab Paris" }, value: { fr: "~2h (Ryanair direct Beauvais–Ljubljana, Air France CDG–Ljubljana). Aussi via Vienne ou Zagreb.", en: "~2h (Ryanair direct Beauvais–Ljubljana, Air France CDG–Ljubljana). Also via Vienna or Zagreb.", es: "~2h (Ryanair directo Beauvais–Liubliana, Air France CDG–Liubliana). También vía Viena o Zagreb.", de: "ca. 2 Std. (Ryanair direkt Beauvais–Ljubljana, Air France CDG–Ljubljana). Auch über Wien oder Zagreb." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Aucun visa — espace Schengen. Carte d'identité française suffisante.", en: "No visa required — Schengen area. A French ID card is sufficient.", es: "Sin visado — espacio Schengen. El DNI es suficiente.", de: "Kein Visum – Schengen-Raum. Ausreichender französischer Personalausweis." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Euro (€). Carte bancaire acceptée partout. Espèces utiles dans les refuges de montagne.", en: "Euro (€). Bank cards accepted everywhere. Cash useful at mountain refuges.", es: "Euro (€). Tarjeta bancaria aceptada en todas partes. El efectivo es útil en los refugios de montaña.", de: "Euro (€). Kreditkarten werden überall akzeptiert. Nützliche Arten in Berghütten." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Slovène. Anglais parlé quasi-universellement, y compris en zone rurale. Excellente destination pour les non-polyglottes.", en: "Slovenian. English spoken almost universally, even in rural areas. An excellent destination for non-polyglots.", es: "Esloveno. El inglés se habla casi universalmente, incluso en zonas rurales. Excelente destino para quienes no dominan idiomas.", de: "Slowenisch. Fast überall wird Englisch gesprochen, auch in ländlichen Gebieten. Ausgezeichnetes Ziel für Nicht-Polyglotten." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/F (European) — 230V. No adapter needed.", es: "Tipo C/F (europeo) — 230V. No se necesita adaptador.", de: "Typ C/F (europäisch) – 230 V. Kein Adapter erforderlich." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Aucune précaution. CEAM valide. Tiques dans les forêts — vaccination recommandée pour les randonneurs intensifs (encéphalite à tiques).", en: "No particular precautions. EHIC valid. Ticks in the forests — vaccination recommended for keen hikers (tick-borne encephalitis).", es: "Ninguna precaución especial. TSE válida. Garrapatas en los bosques — vacunación recomendada para excursionistas intensivos (encefalitis por garrapatas).", de: "Keine Vorsichtsmaßnahmen. Gültige EHIC. Zecken im Wald – Impfung für Intensivwanderer empfohlen (Frühsommer-Meningoenzephalitis)." } },
    { icon: "🌿", label: { fr: "Durabilité", en: "Sustainability", es: "Sostenibilidad", de: "Nachhaltigkeit" }, value: { fr: "La Slovénie est championne d'Europe du tourisme durable — Ljubljana a été nommée capitale européenne verte 2016. Privilégier les transports publics et les hébergements certifiés 'Slovenia Green'.", en: "Slovenia is Europe's champion of sustainable tourism — Ljubljana was named European Green Capital in 2016. Favour public transport and 'Slovenia Green' certified accommodation.", es: "Eslovenia es la campeona de Europa en turismo sostenible — Liubliana fue nombrada capital verde europea en 2016. Priorice el transporte público y los alojamientos certificados 'Slovenia Green'.", de: "Slowenien ist der europäische Vorreiter im nachhaltigen Tourismus – Ljubljana wurde 2016 zur Grünen Hauptstadt Europas gekürt. Bevorzugen Sie öffentliche Verkehrsmittel und Unterkünfte, die als „Slovenia Green“ zertifiziert sind." } },
    { icon: "🏔️", label: { fr: "Triglav", en: "Triglav", es: "Triglav", de: "Triglav" }, value: { fr: "Monter au Triglav est un rite de passage national. L'ascension dure 2 jours avec nuit en refuge (D/A obligatoire). Les Slovènes disent : 'Qui n'a pas gravi le Triglav n'est pas vraiment slovène'.", en: "Climbing Triglav is a national rite of passage. The climb takes 2 days with an overnight stay at a mountain hut (half-board mandatory). Slovenians say: 'Whoever hasn't climbed Triglav isn't truly Slovenian'.", es: "Subir al Triglav es un rito de paso nacional. La ascensión dura 2 días con noche en refugio (media pensión obligatoria). Los eslovenos dicen: 'Quien no ha subido al Triglav no es realmente esloveno'.", de: "Die Besteigung des Triglav ist ein nationaler Übergangsritus. Der Aufstieg dauert 2 Tage mit Übernachtung in einer Schutzhütte (D/A obligatorisch). Die Slowenen sagen: „Wer den Triglav nicht bestiegen hat, ist kein echter Slowene.“" } },
  ],
};
