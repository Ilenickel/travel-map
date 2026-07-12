export const NORTH_MACEDONIA = {
  code: "MKD",
  numericId: 807,
  name: { fr: "Macédoine du Nord", en: "North Macedonia", es: "Macedonia del Norte" },
  emoji: "🇲🇰",
  capital: { fr: "Skopje", en: "Skopje", es: "Skopie" },
  language: { fr: "Macédonien, Albanais", en: "Macedonian, Albanian", es: "Macedonio, albanés" },
  currency: { fr: "Denar macédonien (MKD)", en: "Macedonian denar (MKD)", es: "Denar macedonio (MKD)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 30, budgetMid: 60,
    tripMin: 600, tripMid: 1200,
  },
  description: {
    fr: "La Macédoine du Nord est le secret le mieux gardé des Balkans : le lac d'Ohrid (double UNESCO — patrimoine naturel et culturel, l'un des plus vieux lacs d'Europe), les monastères byzantins des XIe–XIVe siècles dans la campagne, Skopje et son centre baroque néoclassique surprenant, et Mavrovo — le parc national alpin à 90 minutes de la capitale.",
    en: "North Macedonia is the Balkans' best-kept secret: Lake Ohrid (a double UNESCO site — natural and cultural heritage, one of the oldest lakes in Europe), 11th–14th-century Byzantine monasteries scattered across the countryside, Skopje with its surprising neoclassical baroque centre, and Mavrovo — the alpine national park just 90 minutes from the capital.",
    es: "Macedonia del Norte es el secreto mejor guardado de los Balcanes: el lago de Ohrid (doble Patrimonio de la Humanidad —natural y cultural—, uno de los lagos más antiguos de Europa), los monasterios bizantinos de los siglos XI-XIV repartidos por el campo, Skopie con su sorprendente centro barroco neoclásico, y Mavrovo, el parque nacional alpino a 90 minutos de la capital.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Septembre", en: "June – September", es: "Junio – Septiembre" },
      label: { fr: "Été lacustre et montagnard", en: "Lake and mountain summer", es: "Verano lacustre y de montaña" },
      color: "#22c55e",
      description: {
        fr: "Lac d'Ohrid idéal (eau à 24°C), Skopje animée (23–28°C), Mavrovo accessible. Juillet-août les plus chauds mais le lac tempère. Juin et septembre parfaits.",
        en: "Lake Ohrid at its best (water at 24°C), lively Skopje (23–28°C), Mavrovo accessible. July-August are the hottest but the lake moderates it. June and September are perfect.",
        es: "Lago de Ohrid en su mejor momento (agua a 24 °C), Skopie animada (23–28 °C), Mavrovo accesible. Julio-agosto son los más calurosos pero el lago templa el ambiente. Junio y septiembre son perfectos.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Mars", en: "December – March", es: "Diciembre – Marzo" },
      label: { fr: "Ski Mavrovo", en: "Mavrovo skiing", es: "Esquí en Mavrovo" },
      color: "#3b82f6",
      description: {
        fr: "Ski à Mavrovo (station des Balkans, 1 255m–2 255m). Lac d'Ohrid sous la brume d'hiver — atmosphère mystique. Températures -5 à -8°C.",
        en: "Skiing in Mavrovo (a Balkan ski resort, 1,255m–2,255m). Lake Ohrid under winter mist — a mystical atmosphere. Temperatures -5 to -8°C.",
        es: "Esquí en Mavrovo (estación balcánica, 1.255 m–2.255 m). Lago de Ohrid bajo la bruma invernal — atmósfera mística. Temperaturas de -5 a -8 °C.",
      },
      icon: "⛷️",
    },
  ],

  weatherCities: [
    {
      id: "skopje",
      name: "Skopje",
      region: { fr: "Vallée du Vardar (capitale)", en: "Vardar Valley (capital)", es: "Valle del Vardar (capital)" },
      data: [
        { month: "Jan", temp:  1, rain: 40,  icon: "❄️" },
        { month: "Fév", temp:  3, rain: 40,  icon: "❄️" },
        { month: "Mar", temp:  8, rain: 45,  icon: "⛅" },
        { month: "Avr", temp: 13, rain: 50,  icon: "⛅" },
        { month: "Mai", temp: 18, rain: 60,  icon: "⛅" },
        { month: "Jun", temp: 23, rain: 55,  icon: "☀️" },
        { month: "Jul", temp: 28, rain: 25,  icon: "⛅" },
        { month: "Aoû", temp: 28, rain: 20,  icon: "⛅" },
        { month: "Sep", temp: 22, rain: 35,  icon: "☀️" },
        { month: "Oct", temp: 15, rain: 50,  icon: "⛅" },
        { month: "Nov", temp:  8, rain: 55,  icon: "⛅" },
        { month: "Déc", temp:  2, rain: 50,  icon: "❄️" },
      ],
    },
    {
      id: "ohrid",
      name: "Ohrid",
      region: { fr: "Lac d'Ohrid (sud-ouest, UNESCO)", en: "Lake Ohrid (south-west, UNESCO)", es: "Lago de Ohrid (suroeste, UNESCO)" },
      data: [
        { month: "Jan", temp:  2, rain: 50,  icon: "❄️" },
        { month: "Fév", temp:  4, rain: 45,  icon: "❄️" },
        { month: "Mar", temp:  8, rain: 55,  icon: "⛅" },
        { month: "Avr", temp: 13, rain: 60,  icon: "⛅" },
        { month: "Mai", temp: 18, rain: 65,  icon: "⛅" },
        { month: "Jun", temp: 22, rain: 55,  icon: "☀️" },
        { month: "Jul", temp: 25, rain: 30,  icon: "☀️" },
        { month: "Aoû", temp: 25, rain: 25,  icon: "☀️" },
        { month: "Sep", temp: 20, rain: 40,  icon: "☀️" },
        { month: "Oct", temp: 14, rain: 65,  icon: "⛅" },
        { month: "Nov", temp:  8, rain: 70,  icon: "⛅" },
        { month: "Déc", temp:  3, rain: 55,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Lac d'Ohrid — Double UNESCO", en: "Lake Ohrid — Double UNESCO", es: "Lago de Ohrid — Doble UNESCO" },
      region: { fr: "Sud-ouest", en: "South-west", es: "Suroeste" },
      description: {
        fr: "Le lac d'Ohrid est l'un des plus vieux lacs du monde (2–3 millions d'années) et l'un des plus profonds des Balkans (293m). Classé double UNESCO (naturel ET culturel), il abrite 200 espèces endémiques dont la truite d'Ohrid. La ville d'Ohrid est une des plus anciennes d'Europe (antique Lychnidos) : 365 églises byzantines, monastères des Xe–XIVe siècles et une vieille ville parfaitement préservée.",
        en: "Lake Ohrid is one of the oldest lakes in the world (2–3 million years) and one of the deepest in the Balkans (293m). A double UNESCO site (both natural and cultural), it is home to 200 endemic species including the Ohrid trout. The town of Ohrid is one of the oldest in Europe (ancient Lychnidos): 365 Byzantine churches, 10th–14th-century monasteries and a perfectly preserved old town.",
        es: "El lago de Ohrid es uno de los lagos más antiguos del mundo (2–3 millones de años) y uno de los más profundos de los Balcanes (293 m). Declarado doble Patrimonio de la Humanidad (natural Y cultural), alberga 200 especies endémicas, entre ellas la trucha de Ohrid. La ciudad de Ohrid es una de las más antiguas de Europa (la antigua Lychnidos): 365 iglesias bizantinas, monasterios de los siglos X-XIV y un casco antiguo perfectamente conservado.",
      },
      wikipedia: "File:OhridskoEzeroKarpaSvNikola.jpg",
      tags: ["UNESCO", "Lac", "Byzantin", "Endémique", "Histoire", "Architecture", "Plage", "Randonnée"],
      mustSee: [
        { name: { fr: "Église Saint-Jean-de-Kaneo (XIIIe s.) — sur la falaise au-dessus du lac", en: "Church of St. John at Kaneo (13th c.) — on the cliff above the lake", es: "Iglesia de San Juan de Kaneo (siglo XIII) — en el acantilado sobre el lago" }, wikipedia: "File:Iglesia_San_Juan_Kaneo,_Ohrid,_Macedonia_del_Norte,_2014-04-17,_DD_19.jpg" },
        { name: { fr: "Monastère de Saint-Naum (Xe s.) — au bord du lac, sources souterraines", en: "St. Naum Monastery (10th c.) — on the lakeshore, underground springs", es: "Monasterio de San Naúm (siglo X) — a orillas del lago, manantiales subterráneos" }, wikipedia: "File:Svetinaum.jpg" },
        { name: { fr: "Forteresse de Samuel (Xe s.) — panorama sur le lac et les montagnes albanaises", en: "Samuel's Fortress (10th c.) — panorama over the lake and Albanian mountains", es: "Fortaleza de Samuel (siglo X) — panorámica del lago y las montañas albanesas" }, wikipedia: "File:Samuel's Fortress Ohrid 1.jpg" },
        { name: { fr: "Plongée dans le lac d'Ohrid — épaves et eaux cristallines à 20m", en: "Diving in Lake Ohrid — wrecks and crystal-clear waters at 20m", es: "Buceo en el lago de Ohrid — restos de naufragios y aguas cristalinas a 20 m" }, wikipedia: "File:Museum on Water, Ohrid.JPG" },
      ],
    },
    {
      id: 2,
      name: { fr: "Skopje — Capitale baroque et ottomane", en: "Skopje — Baroque and Ottoman Capital", es: "Skopie — Capital barroca y otomana" },
      region: { fr: "Capitale", en: "Capital", es: "Capital" },
      description: {
        fr: "Skopje est une capitale hors du commun : après le tremblement de terre de 1963 qui détruisit 80% de la ville, le gouvernement yougoslave l'a reconstruite en style moderniste-brutaliste, puis depuis 2010 le projet 'Skopje 2014' a érigé des centaines de statues néoclassiques et de fontaines monumentales. Le vieux bazar ottoman (Čaršija) — le plus grand des Balkans après Istanbul — survit intact.",
        en: "Skopje is an extraordinary capital: after the 1963 earthquake destroyed 80% of the city, the Yugoslav government rebuilt it in modernist-brutalist style, then since 2010 the 'Skopje 2014' project has erected hundreds of neoclassical statues and monumental fountains. The old Ottoman bazaar (Čaršija) — the largest in the Balkans after Istanbul — survives intact.",
        es: "Skopie es una capital fuera de lo común: tras el terremoto de 1963 que destruyó el 80% de la ciudad, el gobierno yugoslavo la reconstruyó en estilo modernista-brutalista, y desde 2010 el proyecto 'Skopje 2014' ha erigido cientos de estatuas neoclásicas y fuentes monumentales. El antiguo bazar otomano (Čaršija) —el más grande de los Balcanes después de Estambul— sobrevive intacto.",
      },
      wikipedia: "Skopje",
      tags: ["Bazar ottoman", "Baroque", "Statues", "Moderniste", "Ville", "Gastronomie", "Architecture"],
      mustSee: [
        { name: { fr: "Čaršija (vieux bazar ottoman) — le plus grand des Balkans après Istanbul", en: "Čaršija (old Ottoman bazaar) — the largest in the Balkans after Istanbul", es: "Čaršija (antiguo bazar otomano) — el más grande de los Balcanes después de Estambul" }, wikipedia: "Old_Bazaar,_Skopje" },
        { name: { fr: "Fontaine 'Guerrier sur cheval' (Alexandre le Grand, 22m de haut)", en: "'Warrior on a Horse' Fountain (Alexander the Great, 22m tall)", es: "Fuente 'Guerrero a caballo' (Alejandro Magno, 22 m de altura)" }, wikipedia: "File:Skopje_-_Warrior_on_a_Horse_(9451253725).jpg" },
        { name: { fr: "Forteresse Kale — ruines byzantines dominant le Vardar", en: "Kale Fortress — Byzantine ruins overlooking the Vardar", es: "Fortaleza Kale — ruinas bizantinas que dominan el Vardar" }, wikipedia: "File:Skopje (Скопје, Shkupi) - fortress 2.JPG" },
        { name: { fr: "Pont de Pierre — vieux pont ottoman du XVe s. au cœur de la ville", en: "Stone Bridge — old 15th-century Ottoman bridge at the heart of the city", es: "Puente de Piedra — antiguo puente otomano del siglo XV en el corazón de la ciudad" }, wikipedia: "File:08_Skopje.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Monastères byzantins de Macédoine", en: "Byzantine Monasteries of Macedonia", es: "Monasterios bizantinos de Macedonia" },
      region: { fr: "Campagne macédonienne", en: "Macedonian countryside", es: "Campiña macedonia" },
      description: {
        fr: "La Macédoine du Nord compte plus de 1 000 monastères et églises byzantines des Xe–XIVe siècles, avec des fresques d'une qualité comparable aux plus grandes œuvres de l'art chrétien. Sainte-Sophie d'Ohrid (VIIIe s.), le monastère de Treskavec dans une forêt de montagne, Lesnovo (XIVe s.) avec ses fresques renaissantes — un trésor byzantin inconnu du grand public.",
        en: "North Macedonia has more than 1,000 Byzantine monasteries and churches from the 10th–14th centuries, with frescoes of a quality comparable to the greatest works of Christian art. Hagia Sophia of Ohrid (8th c.), Treskavec Monastery in a mountain forest, Lesnovo (14th c.) with its proto-Renaissance frescoes — a Byzantine treasure unknown to the general public.",
        es: "Macedonia del Norte cuenta con más de 1.000 monasterios e iglesias bizantinas de los siglos X-XIV, con frescos de una calidad comparable a las mayores obras del arte cristiano. Santa Sofía de Ohrid (siglo VIII), el monasterio de Treskavec en un bosque de montaña, Lesnovo (siglo XIV) con sus frescos protorrenacentistas: un tesoro bizantino desconocido para el gran público.",
      },
      wikipedia: "File:Bulgarians_defeat_Byzantines_under_Krenites_and_Kourtikios.jpg",
      tags: ["Byzantin", "Fresques", "Monastères", "Xe-XIVe siècle", "Histoire", "Architecture"],
      mustSee: [
        { name: { fr: "Sainte-Sophie d'Ohrid (VIIIe s.) — mosaïques et fresques byzantines", en: "Hagia Sophia of Ohrid (8th c.) — Byzantine mosaics and frescoes", es: "Santa Sofía de Ohrid (siglo VIII) — mosaicos y frescos bizantinos" }, wikipedia: "File:St Sophia (Ohrid).jpg" },
        { name: { fr: "Monastère de Treskavec — perché à 1 200m, chambres pour les visiteurs", en: "Treskavec Monastery — perched at 1,200m, rooms available for visitors", es: "Monasterio de Treskavec — situado a 1.200 m, con habitaciones para visitantes" }, wikipedia: "Treskavec_Monastery" },
        { name: { fr: "Monastère de Lesnovo (1341) — fresques du XIVe s. classées par l'UNESCO", en: "Lesnovo Monastery (1341) — 14th-century UNESCO-recognised frescoes", es: "Monasterio de Lesnovo (1341) — frescos del siglo XIV reconocidos por la UNESCO" }, wikipedia: "Lesnovo_Monastery" },
        { name: { fr: "Monastère de Saint-Panteleimon (Nerezi, 1164) — fresques protorenaissantes", en: "St. Panteleimon Monastery (Nerezi, 1164) — proto-Renaissance frescoes", es: "Monasterio de San Panteleimón (Nerezi, 1164) — frescos protorrenacentistas" }, wikipedia: "File:Gorno_Nerezi,_Saint_Panteleimon_church.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Parc national de Mavrovo — Alpes macédoniennes", en: "Mavrovo National Park — Macedonian Alps", es: "Parque nacional de Mavrovo — Alpes macedonios" },
      region: { fr: "Nord-ouest", en: "North-west", es: "Noroeste" },
      description: {
        fr: "Mavrovo est le plus grand parc national de Macédoine du Nord (73 000 ha) : le lac de Mavrovo créé par un barrage dans un paysage alpin, le lynx des Balkans (l'un des plus rares au monde — moins de 50 individus), et la station de ski (la plus populaire du pays). Le village de Mavrovo avec son église partiellement submergée dans le lac est une image emblématique.",
        en: "Mavrovo is North Macedonia's largest national park (73,000 ha): Lake Mavrovo, created by a dam in an alpine landscape, the Balkan lynx (one of the rarest in the world — fewer than 50 individuals), and the country's most popular ski resort. The village of Mavrovo with its church partially submerged in the lake is an iconic sight.",
        es: "Mavrovo es el parque nacional más grande de Macedonia del Norte (73.000 ha): el lago de Mavrovo creado por una presa en un paisaje alpino, el lince balcánico (uno de los más raros del mundo, con menos de 50 ejemplares), y la estación de esquí más popular del país. El pueblo de Mavrovo con su iglesia parcialmente sumergida en el lago es una imagen icónica.",
      },
      wikipedia: "Mavrovo_National_Park",
      tags: ["Parc national", "Ski", "Lynx", "Lac alpin", "Randonnée", "Nature"],
      mustSee: [
        { name: { fr: "Lac de Mavrovo — église Saint-Nicolas partiellement submergée", en: "Lake Mavrovo — the partially submerged St. Nicholas Church", es: "Lago de Mavrovo — iglesia de San Nicolás parcialmente sumergida" }, wikipedia: "Mavrovo_Lake" },
        { name: { fr: "Ski à Mavrovo (1 255–2 255m) — la station la plus populaire du pays", en: "Skiing in Mavrovo (1,255–2,255m) — the country's most popular resort", es: "Esquí en Mavrovo (1.255–2.255 m) — la estación más popular del país" }, wikipedia: "File:Iglesia_sumergida_de_San_Nicolás,_lago_Mavrovo,_Macedonia_del_Norte,_2014-04-17,_DD_11.jpg" },
        { name: { fr: "Canyon de la Radika — randonnée dans les gorges profondes", en: "Radika Canyon — hiking through deep gorges", es: "Cañón del Radika — senderismo por profundos desfiladeros" }, wikipedia: "Mavrovo_National_Park" },
        { name: { fr: "Monastère de Sv. Jovan Bigorski (XIe s.) — iconostase en bois sculpté unique", en: "St. Jovan Bigorski Monastery (11th c.) — a unique carved wooden iconostasis", es: "Monasterio de Sv. Jovan Bigorski (siglo XI) — iconostasio de madera tallada único" }, wikipedia: "File:The_Church_of_St._John_the_Baptist,_the_Monastery_of_Saint_Jovan_Bigorski,_Macedonia.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Macédoine du Nord est l'un des pays les moins chers des Balkans et d'Europe. Skopje et Ohrid restent très abordables. Le denar fluctue légèrement — les euros sont parfois acceptés dans les hôtels.",
      en: "North Macedonia is one of the cheapest countries in the Balkans and in Europe. Skopje and Ohrid remain very affordable. The denar fluctuates slightly — euros are sometimes accepted at hotels.",
      es: "Macedonia del Norte es uno de los países más baratos de los Balcanes y de Europa. Skopie y Ohrid siguen siendo muy asequibles. El denar fluctúa ligeramente — a veces se aceptan euros en los hoteles.",
    },
    currency: "MKD",
    exchangeRate: "1€ ≈ 62 MKD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Guesthouse Ohrid (vue sur le lac)", en: "Ohrid guesthouse (lake view)", es: "Guesthouse en Ohrid (vistas al lago)" }, price: "20–45 €", detail: { fr: "Charme local, souvent petit-déjeuner inclus", en: "Local charm, breakfast often included", es: "Encanto local, desayuno a menudo incluido" } },
          { label: { fr: "Hôtel 3★ Skopje centre", en: "3★ hotel central Skopje", es: "Hotel 3★ en el centro de Skopie" }, price: "40–75 €", detail: { fr: "Bon confort, accès facile au bazar ottoman", en: "Good comfort, easy access to the Ottoman bazaar", es: "Buen confort, fácil acceso al bazar otomano" } },
          { label: { fr: "Pension rurale (Mavrovo)", en: "Rural guesthouse (Mavrovo)", es: "Pensión rural (Mavrovo)" }, price: "20–40 €", detail: { fr: "Demi-pension disponible, nature sauvage", en: "Half-board available, wild nature", es: "Media pensión disponible, naturaleza salvaje" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Pastrmajlija (pizza macédonienne à l'agneau) dans une taverne", en: "Pastrmajlija (Macedonian lamb pizza) at a tavern", es: "Pastrmajlija (pizza macedonia de cordero) en una taberna" }, price: "5–10 €", detail: { fr: "Spécialité de Štip, maintenant dans tout le pays", en: "Speciality from Štip, now found across the country", es: "Especialidad de Štip, ahora en todo el país" } },
          { label: { fr: "Tavče gravče (haricots au four) + salate au marché Skopje", en: "Tavče gravče (baked beans) + salad at Skopje market", es: "Tavče gravče (alubias al horno) + ensalada en el mercado de Skopie" }, price: "4–8 €", detail: { fr: "Plat national végétarien macédonien", en: "Macedonia's national vegetarian dish", es: "Plato nacional vegetariano macedonio" } },
          { label: { fr: "Truite d'Ohrid grillée sur le lac (Ohrid)", en: "Grilled Ohrid trout by the lake (Ohrid)", es: "Trucha de Ohrid a la parrilla junto al lago (Ohrid)" }, price: "10–18 €", detail: { fr: "Poisson endémique du lac, saveur unique", en: "Endemic lake fish, unique flavour", es: "Pez endémico del lago, sabor único" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Bus Skopje–Ohrid (3h)", en: "Bus Skopje–Ohrid (3h)", es: "Autobús Skopie–Ohrid (3h)" }, price: "6–10 €", detail: { fr: "Plusieurs départs par jour", en: "Several departures a day", es: "Varias salidas al día" } },
          { label: { fr: "Bus urbain Skopje (ticket)", en: "Skopje city bus (ticket)", es: "Autobús urbano de Skopie (billete)" }, price: "0,35 €", detail: { fr: "L'un des moins chers d'Europe", en: "One of the cheapest in Europe", es: "Uno de los más baratos de Europa" } },
          { label: { fr: "Taxi Skopje (course longue)", en: "Skopje taxi (long ride)", es: "Taxi en Skopie (trayecto largo)" }, price: "5–15 €", detail: { fr: "Très abordable, appli Bolt disponible", en: "Very affordable, Bolt app available", es: "Muy asequible, app Bolt disponible" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Entrée monastère de Saint-Naum ou Sainte-Sophie d'Ohrid", en: "Entry to St. Naum Monastery or Hagia Sophia of Ohrid", es: "Entrada al monasterio de San Naúm o a Santa Sofía de Ohrid" }, price: "2–4 €", detail: { fr: "Sites byzantins remarquablement peu chers", en: "Byzantine sites remarkably cheap", es: "Sitios bizantinos notablemente baratos" } },
          { label: { fr: "Balade en barque sur le lac d'Ohrid", en: "Boat ride on Lake Ohrid", es: "Paseo en barca por el lago de Ohrid" }, price: "8–15 €", detail: { fr: "Vue sur les monastères depuis l'eau", en: "Views of the monasteries from the water", es: "Vistas de los monasterios desde el agua" } },
          { label: { fr: "Forfait ski Mavrovo (journée)", en: "Mavrovo ski pass (day)", es: "Forfait de esquí en Mavrovo (día)" }, price: "20–30 €", detail: { fr: "Domaine skiable valable, très abordable", en: "Decent ski area, very affordable", es: "Dominio esquiable decente, muy asequible" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero" }, daily: "30–55 €/j", desc: { fr: "Pension + taverna locale + bus", en: "Guesthouse + local tavern + bus", es: "Pensión + taberna local + autobús" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort" }, daily: "60–110 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions", en: "3★ hotel + restaurants + excursions", es: "Hotel 3★ + restaurantes + excursiones" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "7 jours", en: "7 days", es: "7 días" },
      route: { fr: "Skopje (2j) → Lac d'Ohrid (3j) → Monastères campagne (1j) → Mavrovo (1j)", en: "Skopje (2d) → Lake Ohrid (3d) → Countryside monasteries (1d) → Mavrovo (1d)", es: "Skopie (2d) → Lago de Ohrid (3d) → Monasterios rurales (1d) → Mavrovo (1d)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "600 – 1 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Skopje (Wizz Air, Ryanair)", en: "Return flight Paris–Skopje (Wizz Air, Ryanair)", es: "Vuelo ida y vuelta Madrid–Skopie (Wizz Air, Ryanair)" }, amount: "80–200 €" },
            { label: { fr: "Hébergement (7 nuits)", en: "Accommodation (7 nights)", es: "Alojamiento (7 noches)" }, amount: "150–280 €" },
            { label: { fr: "Transports (bus + taxi)", en: "Transport (bus + taxi)", es: "Transporte (autobús + taxi)" }, amount: "60–100 €" },
            { label: { fr: "Nourriture + cafés + bière macédonienne", en: "Food + cafés + Macedonian beer", es: "Comida + cafés + cerveza macedonia" }, amount: "180–300 €" },
            { label: { fr: "Activités + monastères + lac", en: "Activities + monasteries + lake", es: "Actividades + monasterios + lago" }, amount: "80–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "1 200 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Skopje", en: "Return flight Paris–Skopje", es: "Vuelo ida y vuelta Madrid–Skopie" }, amount: "100–250 €" },
            { label: { fr: "Hôtels 3★ (7 nuits)", en: "3★ hotels (7 nights)", es: "Hoteles 3★ (7 noches)" }, amount: "350–600 €" },
            { label: { fr: "Voiture de location (7 jours)", en: "Car rental (7 days)", es: "Coche de alquiler (7 días)" }, amount: "220–380 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes" }, amount: "300–550 €" },
            { label: { fr: "Ski + excursions + sorties", en: "Skiing + excursions + outings", es: "Esquí + excursiones + salidas" }, amount: "180–350 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid" }, value: { fr: "~2h30 (Wizz Air direct Beauvais/Orly–Skopje, Ryanair). Liaisons régulières.", en: "~2h30 (Wizz Air direct from Beauvais/Orly–Skopje, Ryanair). Regular connections.", es: "~2h30 (Wizz Air y Ryanair, conexiones regulares)." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "Aucun visa pour les Français (90 jours). Passeport ou carte d'identité acceptés. Pas dans l'UE (candidat officiel).", en: "No visa required for French citizens (90 days). Passport or ID card accepted. Not in the EU (official candidate).", es: "Sin visado para ciudadanos de la UE (90 días). Se acepta pasaporte o DNI. No forma parte de la UE (candidato oficial)." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Denar macédonien (MKD). Euros parfois acceptés dans les hôtels. Espèces indispensables dans les monastères et transports ruraux.", en: "Macedonian denar (MKD). Euros sometimes accepted at hotels. Cash essential at monasteries and rural transport.", es: "Denar macedonio (MKD). Euros a veces aceptados en los hoteles. Efectivo indispensable en los monasterios y el transporte rural." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Macédonien (alphabet cyrillique). Albanais dans l'ouest. Anglais parlé par les jeunes à Skopje et Ohrid. Moins courant dans les villages.", en: "Macedonian (Cyrillic alphabet). Albanian in the west. English spoken by young people in Skopje and Ohrid. Less common in villages.", es: "Macedonio (alfabeto cirílico). Albanés en el oeste. Los jóvenes hablan inglés en Skopie y Ohrid. Menos común en los pueblos." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico" }, value: { fr: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/F (European) — 230V. No adapter needed.", es: "Tipo C/F (europeo) — 230 V. No se necesita adaptador." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Pas de précautions particulières. Assurance voyage recommandée (hors UE). Soins corrects à Skopje.", en: "No particular precautions needed. Travel insurance recommended (outside the EU). Decent healthcare in Skopje.", es: "Ninguna precaución especial. Se recomienda seguro de viaje (fuera de la UE). Atención médica correcta en Skopie." } },
    { icon: "🏛️", label: { fr: "Alexandre le Grand", en: "Alexander the Great", es: "Alejandro Magno" }, value: { fr: "La question de l'héritage d'Alexandre le Grand est très sensible — les Macédoniens le revendiquent, les Grecs contestent. Les statues monumentales de Skopje reflètent cette identité nationale. Éviter le sujet dans les discussions politiques.", en: "The question of Alexander the Great's legacy is very sensitive — Macedonians claim him, Greeks dispute it. Skopje's monumental statues reflect this national identity. Best avoided in political discussions.", es: "La cuestión del legado de Alejandro Magno es muy sensible: los macedonios lo reivindican, los griegos lo disputan. Las estatuas monumentales de Skopie reflejan esta identidad nacional. Mejor evitar el tema en discusiones políticas." } },
    { icon: "🦦", label: { fr: "Lac d'Ohrid", en: "Lake Ohrid", es: "Lago de Ohrid" }, value: { fr: "Le lac d'Ohrid est si ancien qu'il abrite 200 espèces endémiques introuvables ailleurs. La truite d'Ohrid est protégée — vérifier que le restaurant sert de l'élevage et non de la pêche sauvage.", en: "Lake Ohrid is so ancient that it hosts 200 endemic species found nowhere else. The Ohrid trout is protected — check that the restaurant serves farmed fish rather than wild-caught.", es: "El lago de Ohrid es tan antiguo que alberga 200 especies endémicas que no se encuentran en ningún otro lugar. La trucha de Ohrid está protegida — comprobar que el restaurante sirve pesca de acuicultura y no pesca salvaje." } },
  ],
};
