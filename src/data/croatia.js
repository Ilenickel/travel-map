export const CROATIA = {
  code: "HRV",
  numericId: 191,
  name: { fr: "Croatie", en: "Croatia", es: "Croacia" },
  emoji: "🇭🇷",
  capital: { fr: "Zagreb", en: "Zagreb", es: "Zagreb" },
  language: { fr: "Croate", en: "Croatian", es: "Croata" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)", es: "Euro (EUR)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 65, budgetMid: 120,
    tripMin: 1000, tripMid: 2500,
  },
  description: {
    fr: "La Croatie est une révélation adriatique : 1 778km de côte avec des eaux turquoise cristallines, plus de 1 000 îles dont Hvar, Brač et Korčula, la vieille ville de Dubrovnik (UNESCO, 'la perle de l'Adriatique'), les lacs de Plitvice (UNESCO, cascades turquoise en forêt), et Split avec le palais de Dioclétien habité depuis 1 700 ans. La destination méditerranéenne la plus en vogue d'Europe.",
    en: "Croatia is an Adriatic revelation: 1,778 km of coastline with crystal-clear turquoise waters, more than 1,000 islands including Hvar, Brač and Korčula, Dubrovnik's old town (UNESCO, the 'Pearl of the Adriatic'), the Plitvice Lakes (UNESCO, turquoise waterfalls in the forest), and Split with Diocletian's Palace still inhabited after 1,700 years. Europe's trendiest Mediterranean destination.",
    es: "Croacia es una revelación adriática: 1.778 km de costa con aguas turquesas cristalinas, más de 1.000 islas entre las que destacan Hvar, Brač y Korčula, el casco antiguo de Dubrovnik (UNESCO, 'la perla del Adriático'), los lagos de Plitvice (UNESCO, cascadas turquesas en el bosque) y Split, con el palacio de Diocleciano habitado desde hace 1.700 años. El destino mediterráneo más de moda de Europa.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Septembre", en: "June – September", es: "Junio – Septiembre" },
      label: { fr: "Été adriatique", en: "Adriatic summer", es: "Verano adriático" },
      color: "#22c55e",
      description: {
        fr: "Côte et îles en pleine saison : eaux chaudes (26°C), soleil garanti. Juin et septembre idéaux (moins de foules que juillet-août). Dubrovnik très chargé en juillet-août.",
        en: "Coast and islands at peak season: warm waters (26°C) and guaranteed sunshine. June and September are ideal (with fewer crowds than July-August). Dubrovnik gets very busy in July and August.",
        es: "La costa y las islas en plena temporada: aguas cálidas (26°C) y sol garantizado. Junio y septiembre son ideales (menos aglomeraciones que julio-agosto). Dubrovnik está muy concurrida en julio y agosto.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Avril – Mai", en: "April – May", es: "Abril – Mayo" },
      label: { fr: "Printemps", en: "Spring", es: "Primavera" },
      color: "#f59e0b",
      description: {
        fr: "Plitvice à son plus beau (cascades au maximum), côte déserte, températures agréables (16–22°C). Idéal pour l'intérieur.",
        en: "Plitvice at its best (waterfalls at full flow), quiet coastline, pleasant temperatures (16–22°C). Ideal for inland areas.",
        es: "Plitvice en su mejor momento (cascadas al máximo), costa desierta y temperaturas agradables (16–22°C). Ideal para el interior del país.",
      },
      icon: "🌸",
    },
  ],

  weatherCities: [
    {
      id: "split",
      name: "Split",
      region: { fr: "Dalmatie centrale", en: "Central Dalmatia", es: "Dalmacia central" },
      data: [
        { month: "Jan", temp:  8, rain: 90,  icon: "⛅" },
        { month: "Fév", temp:  9, rain: 75,  icon: "⛅" },
        { month: "Mar", temp: 12, rain: 70,  icon: "⛅" },
        { month: "Avr", temp: 15, rain: 65,  icon: "⛅" },
        { month: "Mai", temp: 19, rain: 55,  icon: "☀️" },
        { month: "Jun", temp: 24, rain: 35,  icon: "☀️" },
        { month: "Jul", temp: 27, rain: 25,  icon: "⛅" },
        { month: "Aoû", temp: 27, rain: 30,  icon: "⛅" },
        { month: "Sep", temp: 23, rain: 65,  icon: "☀️" },
        { month: "Oct", temp: 18, rain: 95,  icon: "⛅" },
        { month: "Nov", temp: 13, rain: 120, icon: "⛅" },
        { month: "Déc", temp:  9, rain: 110, icon: "⛅" },
      ],
    },
    {
      id: "zagreb",
      name: "Zagreb",
      region: { fr: "Plaine pannonnienne (capitale)", en: "Pannonian Plain (capital)", es: "Llanura panónica (capital)" },
      data: [
        { month: "Jan", temp:  1, rain: 45,  icon: "❄️" },
        { month: "Fév", temp:  3, rain: 40,  icon: "❄️" },
        { month: "Mar", temp:  8, rain: 55,  icon: "⛅" },
        { month: "Avr", temp: 13, rain: 65,  icon: "⛅" },
        { month: "Mai", temp: 17, rain: 80,  icon: "⛅" },
        { month: "Jun", temp: 20, rain: 85,  icon: "☀️" },
        { month: "Jul", temp: 23, rain: 70,  icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 70,  icon: "☀️" },
        { month: "Sep", temp: 18, rain: 70,  icon: "⛅" },
        { month: "Oct", temp: 12, rain: 70,  icon: "⛅" },
        { month: "Nov", temp:  6, rain: 75,  icon: "⛅" },
        { month: "Déc", temp:  2, rain: 55,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Dubrovnik — La Perle de l'Adriatique", en: "Dubrovnik — the Pearl of the Adriatic", es: "Dubrovnik — la perla del Adriático" },
      region: { fr: "Dalmatie du Sud", en: "Southern Dalmatia", es: "Dalmacia del Sur" },
      description: {
        fr: "Dubrovnik (UNESCO) est une des villes les plus belles du monde : ses remparts médiévaux du XVe siècle (2km de tour complet au-dessus de la mer) dominent une vieille ville de marbre blanc parfaitement préservée. La Stradun (rue principale), les palais gothiques, les fontaines de la Renaissance et la vue sur les îles Élaphites depuis les murailles sont inoubliables. Cadre de Game of Thrones.",
        en: "Dubrovnik (UNESCO) is one of the most beautiful cities in the world: its 15th-century medieval walls (a full 2 km circuit above the sea) overlook a perfectly preserved old town of white marble. The Stradun, Gothic palaces, Renaissance fountains and the view of the Elaphiti Islands from the ramparts are unforgettable. It was also a filming location for Game of Thrones.",
        es: "Dubrovnik (UNESCO) es una de las ciudades más bellas del mundo: sus murallas medievales del siglo XV (2 km de recorrido completo sobre el mar) dominan un casco antiguo de mármol blanco perfectamente conservado. La Stradun (calle principal), los palacios góticos, las fuentes renacentistas y la vista de las islas Elafitas desde las murallas son inolvidables. Escenario de Juego de Tronos.",
      },
      wikipedia: "Dubrovnik",
      tags: ["Architecture", "UNESCO", "Plage", "Culture", "Ville", "Histoire"],
      mustSee: [
        { name: { fr: "Tour des remparts médiévaux (2km) vue sur l'Adriatique", en: "Walk the medieval walls (2 km) with views over the Adriatic", es: "Recorrido por las murallas medievales (2 km) con vistas al Adriático" }, wikipedia: "Walls_of_Dubrovnik" },
        { name: { fr: "Stradun — rue de marbre principal de la Vieille Ville", en: "Stradun — the Old Town's main marble street", es: "Stradun — la calle de mármol principal del casco antiguo" }, wikipedia: "File:Stradun rano ujutro.jpg" },
        { name: { fr: "Île de Lokrum en ferry (10 min) — jardins et paons", en: "Lokrum Island by ferry (10 min) — gardens and peacocks", es: "Isla de Lokrum en ferry (10 min) — jardines y pavos reales" }, wikipedia: "Lokrum" },
        { name: { fr: "Téléphérique Srđ — panorama à 412m sur Dubrovnik", en: "Srđ cable car — panoramic views over Dubrovnik from 412 m", es: "Teleférico de Srđ — panorámica de Dubrovnik a 412 m de altura" }, wikipedia: "File:Dubrovnik Cable Car Station.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Lacs de Plitvice — Cascades UNESCO", en: "Plitvice Lakes — UNESCO waterfalls", es: "Lagos de Plitvice — cascadas UNESCO" },
      region: { fr: "Lika (intérieur)", en: "Lika (inland)", es: "Lika (interior)" },
      description: {
        fr: "Le parc national des lacs de Plitvice (UNESCO) est l'une des merveilles naturelles de Croatie : 16 lacs en cascade reliés par 90 cascades dans une forêt de hêtres et de sapins. L'eau est d'un turquoise surnaturel grâce aux dépôts de travertin. Les passerelles en bois au-dessus des cascades et la Grande Cascade (78m) créent un spectacle unique.",
        en: "Plitvice Lakes National Park (UNESCO) is one of Croatia's natural wonders: 16 cascading lakes linked by 90 waterfalls in a forest of beech and fir trees. The water has an almost unreal turquoise colour thanks to travertine deposits. The wooden boardwalks above the falls and the Great Waterfall (78 m) create a truly unique spectacle.",
        es: "El parque nacional de los lagos de Plitvice (UNESCO) es una de las maravillas naturales de Croacia: 16 lagos escalonados conectados por 90 cascadas en un bosque de hayas y abetos. El agua tiene un turquesa casi irreal gracias a los depósitos de travertino. Las pasarelas de madera sobre las cascadas y la Gran Cascada (78 m) crean un espectáculo único.",
      },
      wikipedia: "Plitvice_Lakes_National_Park",
      tags: ["Nature", "UNESCO", "Plage", "Randonnée"],
      mustSee: [
        { name: { fr: "Grande Cascade (Veliki Slap, 78m) — la plus haute de Croatie", en: "Great Waterfall (Veliki Slap, 78 m) — the highest in Croatia", es: "Gran Cascada (Veliki Slap, 78 m) — la más alta de Croacia" }, wikipedia: "File:Plitvice Lakes1.jpg" },
        { name: { fr: "Passerelles en bois entre les lacs du niveau inférieur", en: "Wooden boardwalks between the lower lakes", es: "Pasarelas de madera entre los lagos del nivel inferior" }, wikipedia: "File:A bridge in Plitvice lakes national park, Croatia.jpg" },
        { name: { fr: "Lac Kozjak en bateau électrique (le plus grand lac)", en: "Lake Kozjak by electric boat (the largest lake)", es: "Lago Kozjak en barco eléctrico (el lago más grande)" }, wikipedia: "File:Plitvice Lakes National Park BW 2014-10-13 12-27-16.jpg" },
        { name: { fr: "Grotte des oiseaux (Šupljara) — déversoir dans la falaise", en: "Šupljara Cave — a cliffside opening above the falls", es: "Cueva Šupljara — abertura en el acantilado sobre las cascadas" }, wikipedia: "File:Plitvice 12.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Split — Palais de Dioclétien habité", en: "Split — inhabited Diocletian's Palace", es: "Split — el palacio habitado de Diocleciano" },
      region: { fr: "Dalmatie centrale", en: "Central Dalmatia", es: "Dalmacia central" },
      description: {
        fr: "Split est une ville unique au monde : son centre historique (UNESCO) EST le palais de l'empereur Dioclétien (305 apr. J.-C.) — 3 000 personnes vivent encore à l'intérieur des murs antiques. Les caves du palais, le mausolée transformé en cathédrale, et les ruelles animées de bars et restaurants font de Split une des villes les plus vivantes de l'Adriatique.",
        en: "Split is unique in the world: its historic centre (UNESCO) IS Emperor Diocletian's Palace (305 AD) — and 3,000 people still live within its ancient walls. The palace cellars, the mausoleum turned cathedral, and the lively alleys packed with bars and restaurants make Split one of the Adriatic's most vibrant cities.",
        es: "Split es una ciudad única en el mundo: su centro histórico (UNESCO) ES el palacio del emperador Diocleciano (305 d.C.) — 3.000 personas siguen viviendo dentro de sus muros antiguos. Las bodegas del palacio, el mausoleo convertido en catedral y las animadas callejuelas llenas de bares y restaurantes hacen de Split una de las ciudades más vivas del Adriático.",
      },
      wikipedia: "Split,_Croatia",
      tags: ["Histoire", "UNESCO", "Ville", "Architecture"],
      mustSee: [
        { name: { fr: "Caves du palais de Dioclétien (IVe s.) — sous la ville", en: "Diocletian's Palace cellars (4th century) — beneath the city", es: "Bodegas del palacio de Diocleciano (siglo IV) — bajo la ciudad" }, wikipedia: "Diocletian's_Palace" },
        { name: { fr: "Cathédrale Saint-Domnius — mausolée impérial transformé en église", en: "Saint Domnius Cathedral — an imperial mausoleum turned church", es: "Catedral de San Domnio — mausoleo imperial convertido en iglesia" }, wikipedia: "Cathedral_of_Saint_Domnius" },
        { name: { fr: "Promenade de la Riva au coucher du soleil", en: "Sunset stroll along the Riva promenade", es: "Paseo por la Riva al atardecer" }, wikipedia: "Split,_Croatia" },
        { name: { fr: "Ferry vers les îles Brač, Hvar ou Korčula", en: "Ferry to the islands of Brač, Hvar or Korčula", es: "Ferry a las islas de Brač, Hvar o Korčula" }, wikipedia: "File:J32 807 Brač, Leuchtturm Rt Ražanj.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Hvar — L'île la plus ensoleillée d'Europe", en: "Hvar — Europe's sunniest island", es: "Hvar — la isla más soleada de Europa" },
      region: { fr: "Dalmatie — Adriatique", en: "Dalmatia — Adriatic", es: "Dalmacia — Adriático" },
      description: {
        fr: "Hvar est l'île la plus longue (68km) et la plus ensoleillée de Croatie (2 724h de soleil/an — parmi les plus élevées d'Europe). Sa forteresse espagnole domine la vieille ville blanche et son théâtre du XVIe siècle (l'un des plus anciens d'Europe). L'intérieur est couvert de lavande (juillet) et de vignobles produisant le Plavac Mali, l'un des meilleurs vins rouges de Croatie.",
        en: "Hvar is Croatia's longest island (68 km) and its sunniest (2,724 hours of sunshine a year — among the highest totals in Europe). Its Spanish fortress overlooks the white old town and its 16th-century theatre, one of the oldest in Europe. Inland, lavender fields bloom in July alongside vineyards producing Plavac Mali, one of Croatia's finest red wines.",
        es: "Hvar es la isla más larga (68 km) y la más soleada de Croacia (2.724 horas de sol al año, entre las más altas de Europa). Su fortaleza española domina el casco antiguo blanco y su teatro del siglo XVI, uno de los más antiguos de Europa. El interior está cubierto de lavanda (julio) y de viñedos que producen el Plavac Mali, uno de los mejores vinos tintos de Croacia.",
      },
      wikipedia: "Hvar",
      tags: ["Plage", "Nature", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Forteresse espagnole Španjola — vue panoramique sur l'archipel", en: "Španjola Fortress — panoramic views over the archipelago", es: "Fortaleza española de Španjola — vista panorámica del archipiélago" }, wikipedia: "File:Spanjola.JPG" },
        { name: { fr: "Champs de lavande de Brusje (juillet — floraison)", en: "Brusje lavender fields (July — bloom season)", es: "Campos de lavanda de Brusje (julio — floración)" }, wikipedia: "File:Brusje_-_panoramio_(1).jpg" },
        { name: { fr: "Îles Pakleni — eaux turquoise en bateau taxi", en: "Pakleni Islands — turquoise waters by water taxi", es: "Islas Pakleni — aguas turquesas en taxi acuático" }, wikipedia: "Pakleni_Islands" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Croatie a adopté l'euro en 2023. Les prix sont montés, surtout sur la côte en juillet-août où la demande dépasse l'offre. Dubrovnik est devenue chère. L'intérieur (Zagreb, Plitvice) reste abordable. Voyager en mai-juin ou septembre permet d'économiser 30–40%.",
      en: "Croatia adopted the euro in 2023. Prices have gone up, especially on the coast in July and August when demand outstrips supply. Dubrovnik has become expensive. Inland areas (Zagreb, Plitvice) remain affordable. Travelling in May-June or September can save you 30-40%.",
      es: "Croacia adoptó el euro en 2023. Los precios han subido, sobre todo en la costa en julio y agosto, cuando la demanda supera a la oferta. Dubrovnik se ha vuelto cara. El interior (Zagreb, Plitvice) sigue siendo asequible. Viajar en mayo-junio o septiembre permite ahorrar entre un 30 y un 40%.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€ (zone euro depuis 2023)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Sobe (chambre chez l'habitant) sur la côte", en: "Sobe (guest room in a local home) on the coast", es: "Sobe (habitación en casa particular) en la costa" }, price: "40–80 €", detail: { fr: "Charmant et abordable, souvent avec cuisine", en: "Charming and affordable, often with a kitchen", es: "Encantador y asequible, a menudo con cocina" } },
          { label: { fr: "Hôtel 3★ Split ou Zagreb", en: "3★ hotel in Split or Zagreb", es: "Hotel 3★ en Split o Zagreb" }, price: "80–150 €", detail: { fr: "Bon confort, proche de la vieille ville", en: "Good comfort, close to the old town", es: "Buen confort, cerca del casco antiguo" } },
          { label: { fr: "Hôtel 3★ Dubrovnik (haute saison)", en: "3★ hotel in Dubrovnik (high season)", es: "Hotel 3★ en Dubrovnik (temporada alta)" }, price: "150–280 €", detail: { fr: "Très demandé, réserver 3–6 mois à l'avance", en: "Very popular, book 3-6 months in advance", es: "Muy solicitado, reservar con 3–6 meses de antelación" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Ćevapi (saucisses grillées) + ajvar dans une konoba", en: "Ćevapi (grilled sausages) + ajvar in a konoba", es: "Ćevapi (salchichas a la parrilla) + ajvar en una konoba" }, price: "8–15 €", detail: { fr: "Cuisine dalmate typique", en: "Typical Dalmatian cuisine", es: "Cocina dálmata típica" } },
          { label: { fr: "Peka (agneau ou poulpe sous la cloche) en restaurant côtier", en: "Peka (lamb or octopus slow-cooked under a bell) in a coastal restaurant", es: "Peka (cordero o pulpo cocinado bajo campana) en un restaurante costero" }, price: "18–30 €", detail: { fr: "Plat traditionnel à commander à l'avance", en: "Traditional dish that usually needs to be ordered in advance", es: "Plato tradicional que suele pedirse con antelación" } },
          { label: { fr: "Pizza napolitaine sur la promenade", en: "Neapolitan pizza on the waterfront promenade", es: "Pizza napolitana en el paseo marítimo" }, price: "8–14 €", detail: { fr: "Influence italienne évidente", en: "The Italian influence is obvious", es: "La influencia italiana es evidente" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Ferry Split–Hvar (Jadrolinija)", en: "Split–Hvar ferry (Jadrolinija)", es: "Ferry Split–Hvar (Jadrolinija)" }, price: "6–12 €", detail: { fr: "Liaisons quotidiennes, billet à l'avance", en: "Daily crossings, buy your ticket in advance", es: "Conexiones diarias, comprar el billete con antelación" } },
          { label: { fr: "Bus Zagreb–Split (5h, FlixBus, Flixbus)", en: "Zagreb–Split bus (5h, FlixBus)", es: "Autobús Zagreb–Split (5h, FlixBus)" }, price: "15–30 €", detail: { fr: "Réseau dense et fiable", en: "Dense and reliable network", es: "Red densa y fiable" } },
          { label: { fr: "Location de scooter (île de Hvar, journée)", en: "Scooter rental (Hvar Island, per day)", es: "Alquiler de scooter (isla de Hvar, por día)" }, price: "30–50 €", detail: { fr: "Le meilleur moyen de visiter les îles", en: "The best way to explore the island", es: "La mejor forma de recorrer las islas" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Entrée parc de Plitvice (haute saison)", en: "Plitvice park entry (high season)", es: "Entrada al parque de Plitvice (temporada alta)" }, price: "40 €", detail: { fr: "Inclut bateau et bus dans le parc", en: "Includes the boat and shuttle bus inside the park", es: "Incluye el barco y el autobús lanzadera dentro del parque" } },
          { label: { fr: "Tour des remparts de Dubrovnik", en: "Dubrovnik city walls walk", es: "Recorrido por las murallas de Dubrovnik" }, price: "35 €", detail: { fr: "Incontournable, faire tôt le matin", en: "A must-do, best early in the morning", es: "Imprescindible, mejor hacerlo temprano por la mañana" } },
          { label: { fr: "Excursion kayak mer depuis Dubrovnik (demi-journée)", en: "Sea kayaking excursion from Dubrovnik (half day)", es: "Excursión en kayak de mar desde Dubrovnik (medio día)" }, price: "50–80 €", detail: { fr: "Grotte Bleue + plage secrète", en: "Blue Cave + secret beach", es: "Cueva Azul + playa secreta" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero" }, daily: "65–100 €/j", desc: { fr: "Sobe + konoba + ferry + bus", en: "Sobe + konoba + ferry + bus", es: "Sobe + konoba + ferry + autobús" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort" }, daily: "120–220 €/j", desc: { fr: "Hôtel 3★ + restaurants + activités", en: "3★ hotel + restaurants + activities", es: "Hotel 3★ + restaurantes + actividades" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días" },
      route: {
        fr: "Zagreb (1j) → Plitvice (2j) → Split (3j) → Hvar (2j) → Dubrovnik (2j)",
        en: "Zagreb (1d) → Plitvice (2d) → Split (3d) → Hvar (2d) → Dubrovnik (2d)",
        es: "Zagreb (1d) → Plitvice (2d) → Split (3d) → Hvar (2d) → Dubrovnik (2d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "1 000 – 1 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Zagreb ou Split (Ryanair, Air France)", en: "Return flight Paris–Zagreb or Split (Ryanair, Air France)", es: "Vuelo ida y vuelta París–Zagreb o Split (Ryanair, Air France)" }, amount: "80–200 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)" }, amount: "400–750 €" },
            { label: { fr: "Ferries + bus + transports", en: "Ferries + buses + transport", es: "Ferris + autobuses + transporte" }, amount: "150–280 €" },
            { label: { fr: "Nourriture + vin local", en: "Food + local wine", es: "Comida + vino local" }, amount: "300–500 €" },
            { label: { fr: "Plitvice + remparts + activités", en: "Plitvice + city walls + activities", es: "Plitvice + murallas + actividades" }, amount: "150–280 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "2 500 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Split ou Dubrovnik", en: "Return flight Paris–Split or Dubrovnik", es: "Vuelo ida y vuelta París–Split o Dubrovnik" }, amount: "100–300 €" },
            { label: { fr: "Hôtels 3★ (10 nuits)", en: "3★ hotels (10 nights)", es: "Hoteles 3★ (10 noches)" }, amount: "1 000–2 000 €" },
            { label: { fr: "Ferries + voiture + scooter", en: "Ferries + car + scooter", es: "Ferris + coche + scooter" }, amount: "350–600 €" },
            { label: { fr: "Nourriture & peka + vin", en: "Food, peka + wine", es: "Comida, peka + vino" }, amount: "500–900 €" },
            { label: { fr: "Kayak, sorties, activités", en: "Kayaking, outings + activities", es: "Kayak, salidas y actividades" }, amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flights from Paris", es: "Vuelo desde París" }, value: { fr: "~2h (Croatia Airlines, Ryanair, Air France direct CDG–Zagreb ou Split). Vols directs vers Dubrovnik en saison.", en: "~2h (Croatia Airlines, Ryanair, Air France direct from CDG to Zagreb or Split). Direct flights to Dubrovnik in season.", es: "~2h (Croatia Airlines, Ryanair, Air France directo CDG–Zagreb o Split). Vuelos directos a Dubrovnik en temporada." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "Aucun visa — espace Schengen (depuis 2023). Carte d'identité française suffisante.", en: "No visa required — Schengen Area (since 2023). A French national ID card is enough.", es: "Sin visado — espacio Schengen (desde 2023). Basta con el documento de identidad." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Euro (€, depuis jan. 2023). Carte bancaire très bien acceptée. Espèces utiles dans les marchés ruraux.", en: "Euro (€ since Jan. 2023). Cards are widely accepted. Cash is still useful at rural markets.", es: "Euro (€, desde enero de 2023). La tarjeta bancaria se acepta muy bien. El efectivo es útil en los mercados rurales." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Croate. Anglais très bien parlé partout sur la côte. Italien compris en Dalmatie.", en: "Croatian. English is widely spoken all along the coast. Italian is understood in Dalmatia.", es: "Croata. El inglés se habla muy bien en toda la costa. El italiano se entiende en Dalmacia." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe" }, value: { fr: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/F (European) — 230V. No adapter needed.", es: "Tipo C/F (europeo) — 230V. No se necesita adaptador." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Aucune précaution. CEAM valide. Méduses possibles sur certaines plages en été.", en: "No special precautions. The EHIC is valid. Jellyfish can appear on some beaches in summer.", es: "Sin precauciones especiales. La TSE es válida. Pueden aparecer medusas en algunas playas en verano." } },
    { icon: "🚢", label: { fr: "Ferries", en: "Ferries", es: "Ferris" }, value: { fr: "Jadrolinija opère toutes les lignes côtières. Réserver à l'avance en juillet-août (complets des semaines avant). Arriver tôt pour les ferries avec voitures.", en: "Jadrolinija runs all coastal routes. Book ahead in July and August (sailings can sell out weeks in advance). Arrive early for car ferries.", es: "Jadrolinija opera todas las líneas costeras. Reservar con antelación en julio-agosto (se completan semanas antes). Llegar pronto para los ferris con coche." } },
    { icon: "☀️", label: { fr: "Haute saison", en: "High season", es: "Temporada alta" }, value: { fr: "Juillet-août : foules extrêmes à Dubrovnik et Hvar, prix au maximum. Préférer juin et septembre pour 30% moins cher et deux fois moins de monde.", en: "July-August: extreme crowds in Dubrovnik and Hvar, with peak prices. June and September are better: about 30% cheaper and roughly half the crowds.", es: "Julio-agosto: aglomeraciones extremas en Dubrovnik y Hvar, precios al máximo. Preferir junio y septiembre: un 30% más barato y la mitad de gente." } },
  ],
};
