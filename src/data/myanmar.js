export const MYANMAR = {
  code: "MMR",
  numericId: 104,
  name: { fr: "Myanmar", en: "Myanmar", es: "Myanmar", de: "Myanmar" },
  emoji: "🇲🇲",
  capital: { fr: "Naypyidaw", en: "Naypyidaw", es: "Naipyidó", de: "Naypyidaw" },
  language: { fr: "Birman", en: "Burmese", es: "Birmano", de: "Birmanisch" },
  currency: { fr: "Kyat birman (MMK)", en: "Burmese kyat (MMK)", es: "Kiat birmano (MMK)", de: "Burmesischer Kyat (MMK)" },
  timezone: "UTC+6:30",
  filter: {
    budgetMin: 30,
    budgetMid: 60,
    tripMin: 1100,
    tripMid: 2200,
  },
  criteria: {
    unesco: 3,
    nature: 2,
    randonnee: 2,
    gastronomie: 2,
    architecture: 2,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 1,
    plage: 2,
  },
  description: {
    fr: "Le Myanmar (Birmanie) est une destination d'une beauté et d'une profondeur spirituelle exceptionnelles : la plaine de Bagan avec ses milliers de temples bouddhistes, le lac Inle et ses pêcheurs sur pirogues, Mandalay et ses monastères. Note : vérifiez les conseils aux voyageurs avant de partir en raison de la situation politique.", en: "Myanmar (Burma) is a destination of exceptional beauty and spiritual depth: the plain of Bagan with its thousands of Buddhist temples, Inle Lake and its canoe fishermen, Mandalay and its monasteries. Note: check travel advisories before departure due to the political situation.", es: "Myanmar (Birmania) es un destino de una belleza y profundidad espiritual excepcionales: la llanura de Bagan con sus miles de templos budistas, el lago Inle y sus pescadores en piragua, Mandalay y sus monasterios. Nota: consulte los avisos de viaje antes de partir debido a la situación política.", de: "Myanmar (Burma) ist ein Reiseziel von außergewöhnlicher Schönheit und spiritueller Tiefe: die Bagan-Ebene mit ihren Tausenden buddhistischen Tempeln, der Inle-See und seine Kanufischer, Mandalay und seine Klöster. Hinweis: Informieren Sie sich aufgrund der politischen Situation vor Reiseantritt über die Reisehinweise.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Février", en: "November – February", es: "Noviembre – Febrero", de: "November – Februar" },
      label: { fr: "Saison sèche et fraîche", en: "Cool dry season", es: "Estación seca y fresca", de: "Trockene und kühle Jahreszeit" },
      color: "#fbbf24",
      description: {
        fr: "Meilleure période : températures agréables (20–30 °C), pas de pluie, idéal pour Bagan et le lac Inle.", en: "Best period: pleasant temperatures (20–30 °C), no rain, ideal for Bagan and Inle Lake.", es: "Mejor época: temperaturas agradables (20–30 °C), sin lluvia, ideal para Bagan y el lago Inle.", de: "Beste Zeit: angenehme Temperaturen (20–30°C), kein Regen, ideal für Bagan und den Inle-See.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Mars – Mai", en: "March – May", es: "Marzo – Mayo", de: "März – Mai" },
      label: { fr: "Chaud et sec", en: "Hot and dry", es: "Cálido y seco", de: "Warm und trocken" },
      color: "#fb923c",
      description: {
        fr: "Très chaud (35–40 °C) mais encore sec. Moins de touristes, couchers de soleil spectaculaires sur Bagan.", en: "Very hot (35–40 °C) but still dry. Fewer tourists, spectacular sunsets over Bagan.", es: "Muy caluroso (35–40 °C) pero aún seco. Menos turistas, atardeceres espectaculares sobre Bagan.", de: "Sehr heiß (35–40°C), aber immer noch trocken. Weniger Touristen, spektakuläre Sonnenuntergänge über Bagan.",
      },
      icon: "🌅",
    },
  ],

  weatherCities: [
    {
      id: "yangon",
      name: "Yangon",
      region: { fr: "Yangon (ancienne capitale)", en: "Yangon (former capital)", es: "Yangón (antigua capital)", de: "Yangon (ehemalige Hauptstadt)" },
      data: [
        { month: "Jan", temp: 25, rain: 5, icon: "☀️" },
        { month: "Fév", temp: 27, rain: 3, icon: "⛅" },
        { month: "Mar", temp: 30, rain: 10, icon: "⛅" },
        { month: "Avr", temp: 32, rain: 30, icon: "🌡️" },
        { month: "Mai", temp: 30, rain: 275, icon: "🌧️" },
        { month: "Jun", temp: 28, rain: 485, icon: "🌧️" },
        { month: "Jul", temp: 27, rain: 570, icon: "🌧️" },
        { month: "Aoû", temp: 27, rain: 535, icon: "🌧️" },
        { month: "Sep", temp: 27, rain: 390, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 200, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 65, icon: "⛅" },
        { month: "Déc", temp: 25, rain: 8, icon: "☀️" },
      ],
    },
    {
      id: "mandalay",
      name: "Mandalay",
      region: { fr: "Mandalay", en: "Mandalay", es: "Mandalay", de: "Mandalay" },
      data: [
        { month: "Jan", temp: 21, rain: 8, icon: "☀️" },
        { month: "Fév", temp: 24, rain: 8, icon: "☀️" },
        { month: "Mar", temp: 29, rain: 15, icon: "⛅" },
        { month: "Avr", temp: 33, rain: 45, icon: "🌡️" },
        { month: "Mai", temp: 31, rain: 120, icon: "🌧️" },
        { month: "Jun", temp: 29, rain: 130, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 160, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 155, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 130, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 100, icon: "🌧️" },
        { month: "Nov", temp: 24, rain: 40, icon: "☀️" },
        { month: "Déc", temp: 21, rain: 10, icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Bagan",
      region: { fr: "Mandalay", en: "Mandalay", es: "Mandalay", de: "Mandalay" },
      description: {
        fr: "La plaine de Bagan abrite plus de 2 000 temples et pagodes bouddhistes construits entre le Xe et XIIIe siècle. Au lever et coucher du soleil, ce paysage mystique depuis une montgolfière est l'une des expériences visuelles les plus saisissantes d'Asie.", en: "The plain of Bagan is home to more than 2,000 Buddhist temples and pagodas built between the 10th and 13th centuries. At sunrise and sunset, this mystical landscape seen from a hot-air balloon is one of the most striking visual experiences in Asia.", es: "La llanura de Bagan alberga más de 2.000 templos y pagodas budistas construidos entre los siglos X y XIII. Al amanecer y al atardecer, este paisaje místico visto desde un globo aerostático es una de las experiencias visuales más impactantes de Asia.", de: "Die Bagan-Ebene beherbergt mehr als 2.000 buddhistische Tempel und Pagoden, die zwischen dem 10. und 13. Jahrhundert erbaut wurden. Bei Sonnenaufgang und Sonnenuntergang ist diese mystische Landschaft aus einem Heißluftballon eines der beeindruckendsten visuellen Erlebnisse in Asien.",
      },
      wikipedia: "Bagan",
      tags: ["Spiritualité", "Histoire", "Aventure", "UNESCO", "Architecture", "Désert"],
      mustSee: [
        { name: "Ananda Temple", wikipedia: "File:20160801 Ananda Temple Bagan Myanmar 6682.jpg" },
        { name: "Dhammayangyi Temple", wikipedia: "Dhammayangyi_Temple" },
        { name: "Shwezigon Pagoda", wikipedia: "Shwezigon_Pagoda" },
        { name: { fr: "Montgolfière au lever du soleil", en: "Hot-air balloon at sunrise", es: "Globo aerostático al amanecer", de: "Heißluftballon bei Sonnenaufgang" }, wikipedia: "Bagan" },
      ],
    },
    {
      id: 2,
      name: { fr: "Lac Inle", en: "Inle Lake", es: "Lago Inle", de: "Inle-See" },
      region: { fr: "Shan", en: "Shan", es: "Shan", de: "Shan" },
      description: {
        fr: "Le lac Inle est célèbre pour ses pêcheurs manœuvrant leur pirogue avec une seule jambe enroulée autour de la rame. Jardins flottants, monastères sur pilotis et villages de tisserands s'y reflètent dans des eaux calmes et brumeuses.", en: "Inle Lake is famous for its fishermen who row their canoe with one leg wrapped around the oar. Floating gardens, stilted monasteries and weaving villages reflect on its calm, misty waters.", es: "El lago Inle es famoso por sus pescadores que remontan su piragua con una sola pierna enrollada alrededor del remo. Jardines flotantes, monasterios sobre pilotes y pueblos de tejedores se reflejan en sus aguas tranquilas y brumosas.", de: "Der Inle-See ist berühmt für seine Fischer, die ihre Kanus mit nur einem Bein um das Ruder führen. Schwimmende Gärten, Klöster auf Stelzen und Weberdörfer spiegeln sich in ruhigen, nebligen Gewässern.",
      },
      wikipedia: "Inle_Lake",
      tags: ["Nature", "Culture", "Plage", "Shopping"],
      mustSee: [
        { name: { fr: "Pêcheurs à la jambe-rame", en: "Leg-rowing fishermen", es: "Pescadores que reman con la pierna", de: "Beinruderfischer" }, wikipedia: "File:20160805 Inle Lake 7434.jpg" },
        { name: "Phaung Daw Oo Pagoda", wikipedia: "File:Phaung Daw Oo Paya Pagoda.jpg" },
        { name: { fr: "Jardins flottants Inle", en: "Inle floating gardens", es: "Jardines flotantes de Inle", de: "Schwimmende Gärten von Inle" }, wikipedia: "File:Inle Lake, House on the lake, Myanmar.jpg" },
      ],
    },
    {
      id: 3,
      name: "Mandalay",
      region: { fr: "Mandalay", en: "Mandalay", es: "Mandalay", de: "Mandalay" },
      description: {
        fr: "Ancienne capitale royale, Mandalay est le centre culturel et bouddhiste de la Birmanie. Ses monastères en teck, le Palais Royal reconstruit, le Pont U Bein (le plus long en teck du monde) et les ateliers d'artisans en font une étape incontournable.", en: "Former royal capital, Mandalay is Burma's cultural and Buddhist centre. Its teak monasteries, the rebuilt Royal Palace, U Bein Bridge (the world's longest teak bridge) and craft workshops make it an essential stop.", es: "Antigua capital real, Mandalay es el centro cultural y budista de Birmania. Sus monasterios de teca, el Palacio Real reconstruido, el puente U Bein (el más largo de teca del mundo) y los talleres artesanales la convierten en una parada imprescindible.", de: "Mandalay, die ehemalige königliche Hauptstadt, ist das kulturelle und buddhistische Zentrum Burmas. Seine Klöster aus Teakholz, der rekonstruierte Königspalast, die U-Bein-Brücke (die längste Teakholzbrücke der Welt) und die Handwerksbetriebe machen es zu einem unverzichtbaren Zwischenstopp.",
      },
      wikipedia: "Mandalay",
      tags: ["Histoire", "Spiritualité", "Shopping", "Culture", "Ville", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Pont U Bein", en: "U Bein Bridge", es: "Puente U Bein", de: "U-Bein-Brücke" }, wikipedia: "U_Bein_Bridge" },
        { name: "Mandalay Hill", wikipedia: "Mandalay_Hill" },
        { name: "Mahamuni Pagoda", wikipedia: "Mahamuni_Buddha_Temple" },
        { name: { fr: "Monastère Shwenandaw", en: "Shwenandaw Monastery", es: "Monasterio Shwenandaw", de: "Shwenandaw-Kloster" }, wikipedia: "Shwenandaw_Monastery" },
      ],
    },
    {
      id: 4,
      name: "Yangon",
      region: { fr: "Yangon", en: "Yangon", es: "Yangón", de: "Yangon" },
      description: {
        fr: "L'ancienne capitale est une ville fascinante aux influences coloniales britanniques et bouddhistes. La Shwedagon Pagoda, couverte d'or, est le monument le plus sacré du Myanmar. Le quartier colonial est parmi les mieux préservés d'Asie du Sud-Est.", en: "The former capital is a fascinating city of British colonial and Buddhist influences. The gold-covered Shwedagon Pagoda is Myanmar's most sacred monument. Its colonial quarter is among the best preserved in Southeast Asia.", es: "La antigua capital es una ciudad fascinante con influencias coloniales británicas y budistas. La pagoda Shwedagon, recubierta de oro, es el monumento más sagrado de Myanmar. Su barrio colonial está entre los mejor conservados del Sudeste Asiático.", de: "Die alte Hauptstadt ist eine faszinierende Stadt mit britischen Kolonial- und buddhistischen Einflüssen. Die mit Gold bedeckte Shwedagon-Pagode ist Myanmars heiligstes Denkmal. Das Kolonialviertel gehört zu den am besten erhaltenen in Südostasien.",
      },
      wikipedia: "Yangon",
      tags: ["Temples", "Histoire", "Culture", "Ville", "Architecture"],
      mustSee: [
        { name: "Shwedagon Pagoda", wikipedia: "Shwedagon_Pagoda" },
        { name: "Bogyoke Aung San Market", wikipedia: "File:Bogyoke Aung San Market inside.jpg" },
        { name: "Sule Pagoda", wikipedia: "Sule_Pagoda" },
        { name: { fr: "Quartier colonial (Downtown Yangon)", en: "Colonial quarter (Downtown Yangon)", es: "Barrio colonial (Downtown Yangón)", de: "Kolonialbezirk (Innenstadt von Yangon)" }, wikipedia: "Downtown_Yangon" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Myanmar est une destination abordable. Le kyat local est utilisé localement mais le dollar américain était historiquement très accepté pour les services touristiques.", en: "Myanmar is an affordable destination. The local kyat is used day-to-day, but US dollars have historically been widely accepted for tourist services.", es: "Myanmar es un destino asequible. El kiat local se usa a diario, pero el dólar estadounidense ha sido tradicionalmente muy aceptado para los servicios turísticos.", de: "Myanmar ist ein erschwingliches Reiseziel. Der lokale Kyat wird vor Ort verwendet, aber der US-Dollar wurde in der Vergangenheit weitgehend für touristische Dienstleistungen akzeptiert.",
    },
    currency: { fr: "Kyat birman (MMK)", en: "Burmese kyat (MMK)", es: "Kiat birmano (MMK)", de: "Burmesischer Kyat (MMK)" },
    exchangeRate: "1€ ≈ 2 000–2 500 MMK (taux fluctuant)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Dortoir guesthouse", en: "Guesthouse dorm", es: "Dormitorio en guesthouse", de: "Schlafsaal-Gästehaus" }, price: "5–10 €", detail: { fr: "Yangon, Bagan, Mandalay", en: "Yangon, Bagan, Mandalay", es: "Yangón, Bagan, Mandalay", de: "Yangon, Bagan, Mandalay" } },
          { label: { fr: "Chambre double guesthouse", en: "Guesthouse double room", es: "Habitación doble en guesthouse", de: "Doppelzimmer im Gästehaus" }, price: "15–35 €", detail: { fr: "Bon confort avec AC", en: "Good comfort with AC", es: "Buen confort con aire acondicionado", de: "Guter Komfort mit Klimaanlage" } },
          { label: { fr: "Hôtel boutique 4★", en: "4★ boutique hotel", es: "Hotel boutique 4★", de: "Boutique-Hotel 4★" }, price: "60–150 €", detail: { fr: "Bagan ou Inle Lake avec vue", en: "Bagan or Inle Lake with a view", es: "Bagan o lago Inle con vistas", de: "Bagan oder Inle-See mit Aussicht" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Mohinga (soupe nationale)", en: "Mohinga (national soup)", es: "Mohinga (sopa nacional)", de: "Mohinga (Nationalsuppe)" }, price: "0,50–1 €", detail: { fr: "Petit-déjeuner birman classique", en: "Classic Burmese breakfast", es: "Desayuno birmano clásico", de: "Klassisches burmesisches Frühstück" } },
          { label: { fr: "Repas dans une tea house", en: "Meal at a tea house", es: "Comida en una tea house", de: "Mahlzeiten in einem Teehaus" }, price: "1,50–3 €", detail: { fr: "Riz + curry + légumes, très typique", en: "Rice + curry + vegetables, very typical", es: "Arroz + curry + verduras, muy típico", de: "Reis + Curry + Gemüse, sehr typisch" } },
          { label: { fr: "Restaurant touristique", en: "Tourist restaurant", es: "Restaurante turístico", de: "Touristenrestaurant" }, price: "5–15 €", detail: { fr: "Cuisine birmane ou internationale", en: "Burmese or international cuisine", es: "Cocina birmana o internacional", de: "Burmesische oder internationale Küche" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bus express Yangon–Bagan (nuit, 8h)", en: "Express bus Yangon–Bagan (overnight, 8h)", es: "Autobús exprés Yangón–Bagan (nocturno, 8h)", de: "Expressbus Yangon–Bagan (nachts, 8 Std.)" }, price: "8–15 €", detail: { fr: "Confortable, AC, départ nocturne", en: "Comfortable, AC, overnight departure", es: "Cómodo, aire acondicionado, salida nocturna", de: "Komfortabel, Klimaanlage, Nachtabfahrt" } },
          { label: { fr: "Vol intérieur (ex: Yangon–Mandalay)", en: "Domestic flight (e.g. Yangon–Mandalay)", es: "Vuelo interior (ej: Yangón–Mandalay)", de: "Inlandsflug (z. B. Yangon–Mandalay)" }, price: "30–80 €", detail: { fr: "KBZ Air ou Air KBZ, 1h de vol", en: "KBZ Air or Air KBZ, 1h flight", es: "KBZ Air o Air KBZ, 1h de vuelo", de: "KBZ Air oder Air KBZ, 1 Stunde Flug" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités & Culture", en: "Activities & Culture", es: "Actividades y cultura", de: "Aktivitäten & Kultur" },
        items: [
          { label: { fr: "Entrée Bagan (zone archéologique)", en: "Bagan entrance (archaeological zone)", es: "Entrada a Bagan (zona arqueológica)", de: "Eingang Bagan (archäologische Zone)" }, price: "20–25 €", detail: { fr: "Valable plusieurs jours", en: "Valid for several days", es: "Válida varios días", de: "Gültig für mehrere Tage" } },
          { label: { fr: "Montgolfière Bagan", en: "Bagan hot-air balloon", es: "Globo aerostático en Bagan", de: "Bagan-Heißluftballon" }, price: "300–400 €", detail: { fr: "Coucher/lever de soleil, 1h de vol", en: "Sunrise/sunset, 1h flight", es: "Amanecer/atardecer, 1h de vuelo", de: "Sonnenuntergang/Sonnenaufgang, 1 Stunde Flug" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "30–50 €/j", desc: { fr: "Guesthouse, tea house, bus, excursions budget", en: "Guesthouse, tea house, bus, budget excursions", es: "Guesthouse, tea house, autobús, excursiones económicas", de: "Gästehaus, Teehaus, Bus, günstige Ausflüge" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "60–100 €/j", desc: { fr: "Hôtel 3★, restaurants, vols intérieurs", en: "3★ hotel, restaurants, domestic flights", es: "Hotel 3★, restaurantes, vuelos interiores", de: "3★ Hotel, Restaurants, Inlandsflüge" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "200 €+/j", desc: { fr: "Lodge 5★ Inle, montgolfière, tours privés", en: "5★ Inle lodge, hot-air balloon, private tours", es: "Lodge 5★ en Inle, globo aerostático, tours privados", de: "Lodge 5★ Inle, Heißluftballon, private Touren" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks", es: "2 semanas", de: "2 Wochen" },
      route: { fr: "Yangon – Bagan – Mandalay – Lac Inle", en: "Yangon – Bagan – Mandalay – Inle Lake", es: "Yangón – Bagan – Mandalay – Lago Inle", de: "Yangon – Bagan – Mandalay – Inle-See" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 100 – 1 600 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Yangon", en: "Return flight Paris–Yangon", es: "Vuelo ida y vuelta Madrid–Yangón", de: "Hin- und Rückflug Paris–Yangon" }, amount: "550–800 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "150–250 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "130–200 €" },
            { label: { fr: "Transport local + bus/train", en: "Local transport + bus/train", es: "Transporte local + autobús/tren", de: "Nahverkehr + Bus/Bahn" }, amount: "100–200 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "100–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "2 200 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Yangon", en: "Return flight Paris–Yangon", es: "Vuelo ida y vuelta Madrid–Yangón", de: "Hin- und Rückflug Paris–Yangon" }, amount: "700–1 000 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "600–900 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "350–500 €" },
            { label: { fr: "Transport + vols intérieurs", en: "Transport + domestic flights", es: "Transporte + vuelos interiores", de: "Transport + Inlandsflüge" }, amount: "300–500 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "200–350 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "5 500 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Yangon (Business)", en: "Return flight Paris–Yangon (Business)", es: "Vuelo ida y vuelta Madrid–Yangón (Business)", de: "Hin- und Rückflug Paris–Yangon (Business)" }, amount: "2 500–3 500 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "1 200–1 800 €" },
            { label: { fr: "Montgolfière Bagan", en: "Bagan hot-air balloon", es: "Globo aerostático en Bagan", de: "Bagan-Heißluftballon" }, amount: "400–600 €" },
            { label: { fr: "Transport & excursions privées", en: "Transport & private excursions", es: "Transporte y excursiones privadas", de: "Transport und private Ausflüge" }, amount: "400–600 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "300–450 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~13–15h avec escale (Bangkok, Singapour, KL)", en: "~13–15h with a layover (Bangkok, Singapore, KL)", es: "~13–15h con escala (Bangkok, Singapur, KL)", de: "ca. 1–15 Std. mit Zwischenstopp (Bangkok, Singapur, KL)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "e-Visa recommandé (50 USD) — vérifiez la situation actuelle", en: "e-Visa recommended (50 USD) — check the current situation", es: "Se recomienda e-Visa (50 USD) — consulte la situación actual", de: "Empfohlenes E-Visum (50 USD) – prüfen Sie die aktuelle Situation" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Kyat birman (1€ ≈ 2 000–2 500 MMK) — USD utiles", en: "Burmese kyat (1€ ≈ 2,000–2,500 MMK) — USD useful", es: "Kiat birmano (1€ ≈ 2.000–2.500 MMK) — dólares útiles", de: "Burmesischer Kyat (1 € ≈ 2.000–2.500 MMK) – Nützlicher USD" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Birman (l'anglais est parlé dans le tourisme)", en: "Burmese (English spoken in tourism)", es: "Birmano (el inglés se habla en el sector turístico)", de: "Burmesisch (im Tourismus wird Englisch gesprochen)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type A/C/D/G – 230 V (adaptateur universel)", en: "Type A/C/D/G – 230 V (universal adapter)", es: "Tipo A/C/D/G – 230 V (adaptador universal)", de: "Typ A/C/D/G – 230 V (Universaladapter)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red", de: "Mobilfunknetz" }, value: { fr: "4G dans les grandes villes, SIM locale à l'arrivée", en: "4G in major cities, local SIM on arrival", es: "4G en las grandes ciudades, SIM local a la llegada", de: "4G in Großstädten, lokale SIM-Karte bei Ankunft" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable, eau en bouteille indispensable", en: "Not drinkable, bottled water essential", es: "No potable, agua embotellada indispensable", de: "Kein Trinkwasser, Mineralwasser unbedingt erforderlich" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Antipaludéens recommandés pour les zones rurales, vaccins hépatite A/B", en: "Antimalarials recommended for rural areas, hepatitis A/B vaccines", es: "Se recomiendan antipalúdicos para zonas rurales, vacunas hepatitis A/B", de: "Für ländliche Gebiete werden Malariamittel und Hepatitis-A/B-Impfstoffe empfohlen" } },
  ],
};
