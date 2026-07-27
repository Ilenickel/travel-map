export const VENEZUELA = {
  code: "VEN",
  numericId: 862,
  name: { fr: "Venezuela", en: "Venezuela", es: "Venezuela", de: "Venezuela" },
  emoji: "🇻🇪",
  capital: { fr: "Caracas", en: "Caracas", es: "Caracas", de: "Caracas" },
  language: { fr: "Espagnol", en: "Spanish", es: "Español", de: "Spanisch" },
  currency: { fr: "Bolívar soberano (VES)", en: "Sovereign Bolívar (VES)", es: "Bolívar soberano (VES)", de: "Bolivar soberano (VES)" },
  timezone: "UTC-4",
  filter: {
    budgetMin: 30,
    budgetMid: 65,
    tripMin: 1500,
    tripMid: 2800,
  },
  criteria: {
    unesco: 2,
    nature: 2,
    randonnee: 2,
    gastronomie: 2,
    architecture: 2,
    desert: 0,
    safari: 2,
    ski: 0,
    ville: 2,
    plage: 2,
    plongee: 2,
  },
  description: {
    fr: "Le Venezuela possède l'une des plus grandes biodiversités au monde : le Salto Ángel (plus haute chute du monde), les tepuys de la Gran Sabana, les Llanos (plaines à jaguar et anaconda) et les plages des Caraïbes. Attention : la situation politique et économique est instable — vérifiez impérativement les derniers conseils aux voyageurs du ministère des Affaires étrangères avant tout départ.", en: "Venezuela has one of the greatest biodiversities in the world: Angel Falls (the world's highest waterfall), the tepuis of the Gran Sabana, the Llanos (plains with jaguars and anacondas) and Caribbean beaches. Warning: the political and economic situation is unstable — be sure to check the latest travel advisories from the Foreign Ministry before departing.", es: "Venezuela posee una de las mayores biodiversidades del mundo: el Salto Ángel (la catarata más alta del mundo), los tepuyes de la Gran Sabana, los Llanos (planicies con jaguares y anacondas) y las playas del Caribe. Atención: la situación política y económica es inestable — es imprescindible consultar las últimas recomendaciones de viaje del ministerio de Asuntos Exteriores antes de cualquier viaje.", de: "Venezuela verfügt über eine der größten Artenvielfalt der Welt: den Salto Ángel (höchster Wasserfall der Welt), die Tepuys von Gran Sabana, die Llanos (Jaguar- und Anakonda-Ebenen) und die Strände der Karibik. Bitte beachten Sie: Die politische und wirtschaftliche Lage ist instabil – es ist wichtig, vor der Abreise die aktuellen Reisehinweise des Außenministeriums zu prüfen.",
  },

  bestPeriods: [
    {
      months: { fr: "Décembre – Avril", en: "December – April", es: "Diciembre – abril", de: "Dezember – April" },
      label: { fr: "Saison sèche", en: "Dry season", es: "Estación seca", de: "Trockenzeit" },
      color: "#fbbf24",
      description: {
        fr: "Meilleure période pour visiter les tepuys, la Gran Sabana et les côtes. Routes praticables, chutes visibles.", en: "Best period to visit the tepuis, the Gran Sabana and the coast. Roads passable, falls visible.", es: "Mejor época para visitar los tepuyes, la Gran Sabana y las costas. Carreteras transitables, cataratas visibles.", de: "Beste Zeit, um die Tepuys, Gran Sabana und die Küsten zu besuchen. Befahrbare Straßen, sichtbare Wasserfälle.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Novembre", en: "June – November", es: "Junio – noviembre", de: "Juni – November" },
      label: { fr: "Saison des pluies (Llanos)", en: "Rainy season (Llanos)", es: "Estación de lluvias (Llanos)", de: "Regenzeit (Llanos)" },
      color: "#22c55e",
      description: {
        fr: "Les Llanos inondés accueillent une faune extraordinaire (caïmans, capybaras, oiseaux). Certaines zones inaccessibles.", en: "The flooded Llanos host extraordinary wildlife (caimans, capybaras, birds). Some areas are inaccessible.", es: "Los Llanos inundados albergan una fauna extraordinaria (caimanes, capibaras, aves). Algunas zonas quedan inaccesibles.", de: "Die überschwemmten Llanos sind die Heimat einer außergewöhnlichen Tierwelt (Kaimane, Wasserschweine, Vögel). Einige unzugängliche Bereiche.",
      },
      icon: "🐊",
    },
  ],

  weatherCities: [
    {
      id: "caracas",
      name: { fr: "Caracas", en: "Caracas", es: "Caracas", de: "Caracas" },
      region: { fr: "Région Capitale", en: "Capital Region", es: "Región Capital", de: "Hauptstadtregion" },
      data: [
        { month: "Jan", temp: 23, rain: 20, icon: "☀️" },
        { month: "Fév", temp: 23, rain: 15, icon: "☀️" },
        { month: "Mar", temp: 24, rain: 25, icon: "☀️" },
        { month: "Avr", temp: 25, rain: 65, icon: "☀️" },
        { month: "Mai", temp: 26, rain: 100, icon: "☀️" },
        { month: "Jun", temp: 26, rain: 105, icon: "☀️" },
        { month: "Jul", temp: 26, rain: 90, icon: "☀️" },
        { month: "Aoû", temp: 27, rain: 95, icon: "⛅" },
        { month: "Sep", temp: 27, rain: 110, icon: "🌧️" },
        { month: "Oct", temp: 26, rain: 120, icon: "☀️" },
        { month: "Nov", temp: 24, rain: 85, icon: "☀️" },
        { month: "Déc", temp: 23, rain: 40, icon: "☀️" },
      ],
    },
    {
      id: "ciudad-bolivar",
      name: { fr: "Ciudad Bolívar", en: "Ciudad Bolívar", es: "Ciudad Bolívar", de: "Bolivar-Stadt" },
      region: { fr: "Bolívar (Gran Sabana)", en: "Bolívar (Gran Sabana)", es: "Bolívar (Gran Sabana)", de: "Bolívar (Gran Sabana)" },
      data: [
        { month: "Jan", temp: 28, rain: 30, icon: "☀️" },
        { month: "Fév", temp: 29, rain: 20, icon: "☀️" },
        { month: "Mar", temp: 31, rain: 25, icon: "🌡️" },
        { month: "Avr", temp: 31, rain: 55, icon: "⛅" },
        { month: "Mai", temp: 30, rain: 130, icon: "🌧️" },
        { month: "Jun", temp: 29, rain: 160, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 155, icon: "🌧️" },
        { month: "Aoû", temp: 29, rain: 140, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 150, icon: "🌧️" },
        { month: "Oct", temp: 29, rain: 145, icon: "🌧️" },
        { month: "Nov", temp: 28, rain: 90, icon: "⛅" },
        { month: "Déc", temp: 27, rain: 40, icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Salto Ángel", en: "Angel Falls", es: "Salto Ángel", de: "Salto Engel" },
      region: { fr: "Bolívar", en: "Bolívar", es: "Bolívar", de: "Bolívar" },
      description: {
        fr: "La plus haute chute d'eau du monde (979 m, soit 15 fois Niagara) plonge depuis le sommet du Tepuy Auyán depuis des millénaires. Accessible en avion ou en pirogue depuis Ciudad Bolívar ou Canaima, c'est l'une des merveilles naturelles absolues de la planète.", en: "The world's highest waterfall (979 m, 15 times Niagara) has plunged from the summit of Auyán Tepui for millennia. Accessible by plane or canoe from Ciudad Bolívar or Canaima, it is one of the planet's absolute natural wonders.", es: "La catarata más alta del mundo (979 m, 15 veces el Niágara) se precipita desde la cima del tepuy Auyán desde hace milenios. Accesible en avión o en piragua desde Ciudad Bolívar o Canaima, es una de las maravillas naturales absolutas del planeta.", de: "Der höchste Wasserfall der Welt (979 m, 15-mal Niagara) stürzt seit Jahrtausenden vom Gipfel des Tepuy Auyán in die Tiefe. Es ist mit dem Flugzeug oder Kanu von Ciudad Bolívar oder Canaima aus erreichbar und eines der absoluten Naturwunder des Planeten.",
      },
      wikipedia: "File:Salto del Angel-Canaima-Venezuela03.JPG",
      tags: ["Nature", "UNESCO"],
      mustSee: [
        { name: "Tepuy Auyán-tepui", wikipedia: "File:Auyan Tepui 01.JPG" },
        { name: { fr: "Lagune de Canaima", en: "Canaima Lagoon", es: "Laguna de Canaima", de: "Canaima-Lagune" }, wikipedia: "File:Canaima 34.JPG" },
        { name: { fr: "Parc national Canaima", en: "Canaima National Park", es: "Parque nacional Canaima", de: "Canaima-Nationalpark" }, wikipedia: "File:Canaima National Park.JPG" },
        { name: { fr: "Pirogue sur le Río Carrao", en: "Canoe trip on the Río Carrao", es: "Piragua por el río Carrao", de: "Kanu auf dem Río Carrao" }, wikipedia: "File:Canaima 21.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Gran Sabana & Roraima", en: "Gran Sabana & Roraima", es: "Gran Sabana y Roraima", de: "Gran Sabana und Roraima" },
      region: { fr: "Bolívar", en: "Bolívar", es: "Bolívar", de: "Bolívar" },
      description: {
        fr: "La Gran Sabana est un plateau mystique de savanes et tepuys (montagnes tabulaires) à la frontière brésilienne. Le Tepuy Roraima, dont le sommet perdu dans les nuages a inspiré Conan Doyle pour Le Monde Perdu, se trek en 6 jours depuis San Francisco de Yuruaní.", en: "The Gran Sabana is a mystical plateau of savannas and tepuis (tabletop mountains) on the Brazilian border. Mount Roraima, whose cloud-shrouded summit inspired Conan Doyle's The Lost World, is trekked in 6 days from San Francisco de Yuruaní.", es: "La Gran Sabana es una meseta mística de sabanas y tepuyes (montañas tabulares) en la frontera brasileña. El tepuy Roraima, cuya cima perdida entre las nubes inspiró a Conan Doyle para El Mundo Perdido, se recorre en un trekking de 6 días desde San Francisco de Yuruaní.", de: "Gran Sabana ist ein mystisches Plateau aus Savannen und Tepuys (Tafelbergen) an der brasilianischen Grenze. Tepuy Roraima, dessen in den Wolken verlorener Gipfel Conan Doyle zu „The Lost World“ inspirierte, kann in 6 Tagen von San Francisco de Yuruaní aus bestiegen werden.",
      },
      wikipedia: "Gran_Sabana",
      tags: ["Nature", "Randonnée", "Spiritualité"],
      mustSee: [
        { name: "Mount Roraima", wikipedia: "Mount_Roraima" },
        { name: "Salto Kama", wikipedia: "File:Kamá Falls - Salto Kama (23495860840).jpg" },
        { name: { fr: "Quebrada de Jaspe (rivière rouge)", en: "Quebrada de Jaspe (red river)", es: "Quebrada de Jaspe (río rojo)", de: "Quebrada de Jaspe (Roter Fluss)" }, wikipedia: "File:Quebrada del Jaspe-La Gran Sabana-Venezuela07.JPG" },
        { name: "San Francisco de Yuruaní", wikipedia: "File:San Francisco de Yuruani.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Llanos (plaines)", en: "Llanos (plains)", es: "Llanos", de: "Llanos (Ebene)" },
      region: { fr: "Apure / Barinas", en: "Apure / Barinas", es: "Apure / Barinas", de: "Apure / Barinas" },
      description: {
        fr: "Les Llanos vénézuéliens sont l'un des meilleurs endroits au monde pour observer la faune sauvage : anacondas, caïmans, capybaras, jaguars et plus de 400 espèces d'oiseaux. Les hatos (ranchs) proposent des safaris à cheval ou en 4x4.", en: "The Venezuelan Llanos are one of the best places in the world to observe wildlife: anacondas, caimans, capybaras, jaguars and over 400 bird species. The hatos (ranches) offer safaris on horseback or by 4x4.", es: "Los Llanos venezolanos son uno de los mejores lugares del mundo para observar fauna silvestre: anacondas, caimanes, capibaras, jaguares y más de 400 especies de aves. Los hatos (ranchos) ofrecen safaris a caballo o en 4x4.", de: "Die venezolanischen Llanos sind einer der besten Orte der Welt, um Wildtiere zu beobachten: Anakondas, Kaimane, Wasserschweine, Jaguare und mehr als 400 Vogelarten. Die Hatos (Ranches) bieten Safaris zu Pferd oder im Geländewagen an.",
      },
      wikipedia: "File:Los_Llanos_Colombia_by_David.png",
      tags: ["Safari", "Nature"],
      mustSee: [
        { name: "Hato El Cedral", wikipedia: "Capybara" },
        { name: "Hato Piñero", wikipedia: "File:Hato Piñero 2002 001.jpg" },
        { name: { fr: "Caïmans du Llanos", en: "Llanos caimans", es: "Caimanes de los Llanos", de: "Llanos Caymans" }, wikipedia: "Spectacled_caiman" },
        { name: { fr: "Anaconda géant", en: "Giant anaconda", es: "Anaconda gigante", de: "Riesige Anakonda" }, wikipedia: "Green_anaconda" },
      ],
    },
    {
      id: 4,
      name: { fr: "Archipel Los Roques", en: "Los Roques Archipelago", es: "Archipiélago de Los Roques", de: "Los Roques-Archipel" },
      region: { fr: "Caraïbes", en: "Caribbean", es: "Caribe", de: "Karibik" },
      description: {
        fr: "L'archipel Los Roques est un parc national marin d'eaux turquoise et de plages de sable blanc à 160 km au nord de Caracas. Pêche à la mouche, plongée et voile dans un cadre préservé des Caraïbes.", en: "The Los Roques Archipelago is a marine national park of turquoise waters and white sand beaches, 160 km north of Caracas. Fly fishing, diving and sailing in a pristine Caribbean setting.", es: "El archipiélago de Los Roques es un parque nacional marino de aguas turquesas y playas de arena blanca a 160 km al norte de Caracas. Pesca con mosca, buceo y vela en un entorno caribeño preservado.", de: "Der Los Roques-Archipel ist ein Meeresnationalpark mit türkisfarbenem Wasser und weißen Sandstränden 160 km nördlich von Caracas. Fliegenfischen, Tauchen und Segeln in einer geschützten karibischen Umgebung.",
      },
      wikipedia: "File:CayoCareneroLosRoquesVenezuelapic1.jpg",
      tags: ["Plage", "Nature"],
      mustSee: [
        { name: "Cayo de Agua", wikipedia: "File:Cayo de Agua in Los Roques.jpg" },
        { name: "Francisquí", wikipedia: "File:Cayo Francisqui apacible.JPG" },
        { name: { fr: "Gran Roque (village)", en: "Gran Roque (village)", es: "Gran Roque (pueblo)", de: "Gran Roque (Dorf)" }, wikipedia: "File:Village Gran Roque.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Venezuela connaît une situation économique très instable avec une inflation élevée. Les prix sont difficiles à estimer avec précision. La monnaie locale est peu fiable ; le dollar américain et l'euro sont largement acceptés.", en: "Venezuela is experiencing a very unstable economic situation with high inflation. Prices are difficult to estimate precisely. The local currency is unreliable; the US dollar and euro are widely accepted.", es: "Venezuela atraviesa una situación económica muy inestable con alta inflación. Los precios son difíciles de estimar con precisión. La moneda local es poco fiable; el dólar estadounidense y el euro son ampliamente aceptados.", de: "Venezuela erlebt eine sehr instabile Wirtschaftslage mit hoher Inflation. Preise lassen sich nur schwer genau einschätzen. Die lokale Währung ist unzuverlässig; Der US-Dollar und der Euro werden weitgehend akzeptiert.",
    },
    currency: "Bolívar soberano (VES) / Dollar américain (USD)",
    exchangeRate: "Taux officiel instable — vérifiez avant le départ",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Posada simple", en: "Simple posada", es: "Posada sencilla", de: "Einfache Posada" }, price: "15–30 USD", detail: { fr: "Qualité variable, payer en USD", en: "Variable quality, pay in USD", es: "Calidad variable, pagar en USD", de: "Variable Qualität, Bezahlung in USD" } },
          { label: { fr: "Hôtel correct (Caracas)", en: "Decent hotel (Caracas)", es: "Hotel decente (Caracas)", de: "Ordentliches Hotel (Caracas)" }, price: "40–80 USD", detail: { fr: "Avec sécurité, quartiers sûrs", en: "With security, safe neighbourhoods", es: "Con seguridad, barrios seguros", de: "Mit Sicherheit, sicheren Nachbarschaften" } },
          { label: { fr: "Hato (ranch Llanos)", en: "Hato (Llanos ranch)", es: "Hato (rancho de los Llanos)", de: "Hato (Llanos-Ranch)" }, price: "80–200 USD", detail: { fr: "Tout compris, safaris inclus", en: "All-inclusive, safaris included", es: "Todo incluido, safaris incluidos", de: "Alles inklusive, Safaris inklusive" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Arepa (plat national)", en: "Arepa (national dish)", es: "Arepa (plato nacional)", de: "Arepa (Nationalgericht)" }, price: "1–3 USD", detail: { fr: "Galette de maïs fourrée, partout", en: "Stuffed corn cake, everywhere", es: "Torta de maíz rellena, en todas partes", de: "Überall gefüllte Maispfannkuchen" } },
          { label: { fr: "Menu local", en: "Local set menu", es: "Menú local", de: "Lokales Menü" }, price: "5–10 USD", detail: { fr: "Soupe + plat, dans les comedores", en: "Soup + main, at the comedores", es: "Sopa + plato, en los comedores", de: "Suppe + Hauptgericht, in den Comedores" } },
          { label: { fr: "Restaurant touristique", en: "Tourist restaurant", es: "Restaurante turístico", de: "Touristenrestaurant" }, price: "15–30 USD", detail: { fr: "Payer en USD, qualité variable", en: "Pay in USD, variable quality", es: "Pagar en USD, calidad variable", de: "Bezahlen Sie in USD, die Qualität variiert" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Vol Caracas–Canaima (Salto Ángel)", en: "Caracas–Canaima flight (Angel Falls)", es: "Vuelo Caracas–Canaima (Salto Ángel)", de: "Flug Caracas–Canaima (Salto Ángel)" }, price: "100–200 USD", detail: { fr: "Vol charter, inclus dans les tours", en: "Charter flight, included in tours", es: "Vuelo chárter, incluido en los tours", de: "Charterflug, in den Touren inbegriffen" } },
          { label: { fr: "Bus longue distance", en: "Long-distance bus", es: "Autobús de larga distancia", de: "Fernbus" }, price: "5–20 USD", detail: { fr: "Réseau variable selon la région", en: "Network varies by region", es: "Red variable según la región", de: "Das Netz variiert je nach Region" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités & Culture", en: "Activities & Culture", es: "Actividades y cultura", de: "Aktivitäten & Kultur" },
        items: [
          { label: { fr: "Tour Salto Ángel (3 jours)", en: "Angel Falls tour (3 days)", es: "Tour al Salto Ángel (3 días)", de: "Salto Ángel-Tour (3 Tage)" }, price: "250–450 USD", detail: { fr: "Tout compris, pirogue + camping", en: "All-inclusive, canoe + camping", es: "Todo incluido, piragua + camping", de: "Alles inklusive, Kanu + Camping" } },
          { label: { fr: "Trek Roraima (6 jours)", en: "Roraima trek (6 days)", es: "Trekking al Roraima (6 días)", de: "Trek Roraima (6 Tage)" }, price: "300–500 USD", detail: { fr: "Guide + porteur + nourriture obligatoires", en: "Guide + porter + food mandatory", es: "Guía + porteador + comida obligatorios", de: "Führer + Träger + Verpflegung erforderlich" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "30–50 €/j", desc: { fr: "Posada, arepas, transport local, prudence requise", en: "Posada, arepas, local transport, caution required", es: "Posada, arepas, transporte local, se requiere prudencia", de: "Posada, Arepas, örtliche Verkehrsmittel, Vorsicht geboten" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "65–100 €/j", desc: { fr: "Hôtel sécurisé, tours guidés, USD recommandé", en: "Secure hotel, guided tours, USD recommended", es: "Hotel seguro, tours guiados, se recomienda USD", de: "Sicheres Hotel, geführte Touren, USD empfohlen" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "150 €+/j", desc: { fr: "Hatos, lodges privés, vols charters", en: "Hatos, private lodges, charter flights", es: "Hatos, lodges privados, vuelos chárter", de: "Hatos, private Lodges, Charterflüge" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks", es: "2 semanas", de: "2 Wochen" },
      route: { fr: "Caracas – Gran Sabana/Canaima – Llanos – Los Roques", en: "Caracas – Gran Sabana/Canaima – Llanos – Los Roques", es: "Caracas – Gran Sabana/Canaima – Llanos – Los Roques", de: "Caracas – Gran Sabana/Canaima – Llanos – Los Roques" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 500 – 2 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Caracas", en: "Return flight Paris–Caracas", es: "Vuelo ida/vuelta Madrid–Caracas", de: "Hin- und Rückflug Paris–Caracas" }, amount: "700–900 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "250–400 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "200–300 €" },
            { label: { fr: "Tours Salto Ángel + transport", en: "Angel Falls tours + transport", es: "Tours al Salto Ángel + transporte", de: "Salto Ángel Touren + Transport" }, amount: "300–450 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "2 800 – 3 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Caracas", en: "Return flight Paris–Caracas", es: "Vuelo ida/vuelta Madrid–Caracas", de: "Hin- und Rückflug Paris–Caracas" }, amount: "900–1 200 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "500–700 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "400–600 €" },
            { label: { fr: "Tours + vols intérieurs", en: "Tours + domestic flights", es: "Tours + vuelos internos", de: "Touren + Inlandsflüge" }, amount: "600–900 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "300–500 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "6 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Caracas (Business)", en: "Return flight Paris–Caracas (Business)", es: "Vuelo ida/vuelta Madrid–Caracas (Business)", de: "Hin- und Rückflug Paris–Caracas (Business)" }, amount: "2 500–3 500 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "1 500–2 200 €" },
            { label: { fr: "Tours privés + vols charters", en: "Private tours + charter flights", es: "Tours privados + vuelos chárter", de: "Private Touren + Charterflüge" }, amount: "1 000–1 500 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "400–600 €" },
            { label: { fr: "Activités premium + sécurité", en: "Premium activities + security", es: "Actividades premium y seguridad", de: "Premium-Aktivitäten + Sicherheit" }, amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~11–13h avec escale (Bogotá, Panama, Madrid)", en: "~11–13h with a stopover (Bogotá, Panama, Madrid)", es: "~11h con escala (Bogotá, Panamá)", de: "ca. 11–13 Std. mit Zwischenstopp (Bogotá, Panama, Madrid)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Sans visa pour les Français (90 jours) — vérifiez avant départ", en: "No visa required for French citizens (90 days) — check before departure", es: "Sin visado para los españoles (90 días) — comprobar antes de partir", de: "Visumfrei für Franzosen (90 Tage) – vor der Abreise prüfen" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "USD/EUR largement préférés au bolivar local", en: "USD/EUR widely preferred over the local bolívar", es: "USD/EUR ampliamente preferidos frente al bolívar local", de: "USD/EUR wird weithin dem lokalen Bolivar vorgezogen" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Espagnol", en: "Spanish", es: "Español", de: "Spanisch" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe", de: "Steckdose" }, value: { fr: "Type A/B – 120 V (adaptateur nécessaire)", en: "Type A/B – 120 V (adapter needed)", es: "Tipo A/B – 120 V (adaptador necesario)", de: "Typ A/B – 120 V (Adapter erforderlich)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red", de: "Mobilfunknetz" }, value: { fr: "Couverture variable, évitez de dépendre du réseau local", en: "Variable coverage, avoid relying on the local network", es: "Cobertura variable, evitar depender de la red local", de: "Variable Abdeckung, je nach lokalem Netz vermeiden" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable, eau en bouteille indispensable", en: "Not drinkable, bottled water essential", es: "No potable, agua embotellada imprescindible", de: "Kein Trinkwasser, Mineralwasser unbedingt erforderlich" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Vaccin fièvre jaune obligatoire ; vérifiez les derniers conseils sécurité MEAE", en: "Yellow fever vaccine mandatory; check the latest French Foreign Ministry security advisories", es: "Vacuna contra la fiebre amarilla obligatoria; consultar las últimas recomendaciones de seguridad", de: "Gelbfieberimpfung erforderlich; Informieren Sie sich über die neuesten MEAE-Sicherheitshinweise" } },
  ],
};
