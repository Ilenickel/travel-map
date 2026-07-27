export const CAMBODIA = {
  code: "KHM",
  numericId: 116,
  name: { fr: "Cambodge", en: "Cambodia", es: "Camboya", de: "Kambodscha" },
  emoji: "🇰🇭",
  capital: { fr: "Phnom Penh", en: "Phnom Penh", es: "Nom Pen", de: "Phnom Penh" },
  language: { fr: "Khmer", en: "Khmer", es: "Jemer", de: "Khmer" },
  currency: { fr: "Riel cambodgien (KHR) / Dollar américain (USD)", en: "Cambodian riel (KHR) / US dollar (USD)", es: "Riel camboyano (KHR) / dólar estadounidense (USD)", de: "Kambodschanischer Riel (KHR) / US-Dollar (USD)" },
  timezone: "UTC+7",
  filter: {
    budgetMin: 25,
    budgetMid: 55,
    tripMin: 900,
    tripMid: 1800,
  },
  criteria: {
    unesco: 3,
    nature: 2,
    randonnee: 1,
    gastronomie: 2,
    architecture: 2,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 1,
    plage: 2,
  },
  description: {
    fr: "Le Cambodge est le pays d'Angkor, l'un des plus grands sites archéologiques du monde. Au-delà des temples khmers, il offre des plages encore sauvages, le Mékong et le lac Tonlé Sap, et une culture empreinte de sérénité bouddhiste malgré un passé traumatique avec les Khmers rouges.", en: "Cambodia is the land of Angkor, one of the world's greatest archaeological sites. Beyond its Khmer temples, it offers still-unspoiled beaches, the Mekong and Tonlé Sap Lake, and a culture steeped in Buddhist serenity despite the traumatic legacy of the Khmer Rouge.", es: "Camboya es el país de Angkor, uno de los mayores sitios arqueológicos del mundo. Más allá de sus templos jemeres, ofrece playas todavía vírgenes, el Mekong y el lago Tonlé Sap, y una cultura impregnada de serenidad budista pese al traumático pasado de los jemeres rojos.", de: "Kambodscha ist das Land von Angkor, einer der größten archäologischen Stätten der Welt. Abgesehen von den Khmer-Tempeln bietet es noch immer wilde Strände, den Mekong und den Tonlé-Sap-See sowie eine Kultur, die trotz einer traumatischen Vergangenheit mit den Roten Khmer von buddhistischer Gelassenheit geprägt ist.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Février", en: "November – February", es: "Noviembre – Febrero", de: "November – Februar" },
      label: { fr: "Saison sèche et fraîche", en: "Dry and cool season", es: "Estación seca y fresca", de: "Trockene und kühle Jahreszeit" },
      color: "#fbbf24",
      description: {
        fr: "Meilleure période : températures douces (25–30 °C), ciel bleu, routes praticables. Idéal pour Angkor et les plages.", en: "Best time to visit: mild temperatures (25–30 °C), blue skies and passable roads. Ideal for Angkor and the beaches.", es: "Mejor época: temperaturas suaves (25–30 °C), cielo azul, carreteras transitables. Ideal para Angkor y las playas.", de: "Beste Zeit: milde Temperaturen (25–30°C), blauer Himmel, befahrbare Straßen. Ideal für Angkor und die Strände.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Octobre", en: "June – October", es: "Junio – Octubre", de: "Juni – Oktober" },
      label: { fr: "Saison des pluies (vert et moins de monde)", en: "Rainy season (lush and less crowded)", es: "Estación de lluvias (verde y menos gente)", de: "Regenzeit (grün und weniger überfüllt)" },
      color: "#22c55e",
      description: {
        fr: "Campagne verdoyante et moins de touristes à Angkor. Les pluies sont souvent brèves. Coût plus bas.", en: "The countryside turns lush and Angkor sees fewer tourists. Showers are often brief. Costs are lower.", es: "El campo se vuelve exuberante y hay menos turistas en Angkor. Las lluvias suelen ser breves. Costes más bajos.", de: "Grüne Landschaft und weniger Touristen in Angkor. Die Regenfälle sind oft kurz. Niedrigere Kosten.",
      },
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "phnom-penh",
      name: "Phnom Penh",
      region: { fr: "Mékong", en: "Mekong", es: "Mekong", de: "Mekong" },
      data: [
        { month: "Jan", temp: 25, rain: 10, icon: "☀️" },
        { month: "Fév", temp: 27, rain: 8, icon: "⛅" },
        { month: "Mar", temp: 29, rain: 30, icon: "⛅" },
        { month: "Avr", temp: 31, rain: 65, icon: "⛅" },
        { month: "Mai", temp: 30, rain: 145, icon: "🌧️" },
        { month: "Jun", temp: 30, rain: 180, icon: "🌧️" },
        { month: "Jul", temp: 29, rain: 175, icon: "🌧️" },
        { month: "Aoû", temp: 29, rain: 190, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 260, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 240, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 65, icon: "⛅" },
        { month: "Déc", temp: 25, rain: 15, icon: "☀️" },
      ],
    },
    {
      id: "siem-reap",
      name: "Siem Reap",
      region: { fr: "Angkor", en: "Angkor", es: "Angkor", de: "Angkor" },
      data: [
        { month: "Jan", temp: 25, rain: 10, icon: "☀️" },
        { month: "Fév", temp: 27, rain: 10, icon: "⛅" },
        { month: "Mar", temp: 29, rain: 30, icon: "⛅" },
        { month: "Avr", temp: 31, rain: 60, icon: "⛅" },
        { month: "Mai", temp: 30, rain: 135, icon: "🌧️" },
        { month: "Jun", temp: 29, rain: 165, icon: "🌧️" },
        { month: "Jul", temp: 29, rain: 175, icon: "🌧️" },
        { month: "Aoû", temp: 29, rain: 185, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 250, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 245, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 60, icon: "⛅" },
        { month: "Déc", temp: 25, rain: 10, icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Angkor & Siem Reap", en: "Angkor & Siem Reap", es: "Angkor y Siem Reap", de: "Angkor und Siem Reap" },
      region: { fr: "Siem Reap", en: "Siem Reap", es: "Siem Reap", de: "Siem Reap" },
      description: {
        fr: "Angkor est l'un des sites archéologiques les plus impressionnants du monde : 400 km² de temples khmers du IXe au XVe siècle. Angkor Wat, la plus grande structure religieuse jamais construite, est le symbole même du Cambodge.", en: "Angkor is one of the world's most awe-inspiring archaeological sites: 400 km² of Khmer temples dating from the 9th to the 15th century. Angkor Wat, the largest religious structure ever built, is Cambodia's defining symbol.", es: "Angkor es uno de los sitios arqueológicos más impresionantes del mundo: 400 km² de templos jemeres del siglo IX al XV. Angkor Wat, la mayor estructura religiosa jamás construida, es el símbolo por excelencia de Camboya.", de: "Angkor ist eine der beeindruckendsten archäologischen Stätten der Welt: 400 km² Khmer-Tempel aus dem 9. bis 15. Jahrhundert. Angkor Wat, das größte jemals erbaute religiöse Bauwerk, ist das Symbol Kambodschas.",
      },
      wikipedia: "File:2016 Angkor, Angkor Wat, Brama Angkor Wat (48).jpg",
      tags: ["Temples", "Histoire", "UNESCO", "Gastronomie"],
      mustSee: [
        { name: "Angkor Wat", wikipedia: "Angkor_Wat" },
        { name: { fr: "Angkor Thom & Bayon", en: "Angkor Thom & Bayon", es: "Angkor Thom y Bayon", de: "Angkor Thom und Bayon" }, wikipedia: "Angkor_Thom" },
        { name: { fr: "Ta Prohm (temple forêt)", en: "Ta Prohm (jungle temple)", es: "Ta Prohm (templo de la selva)", de: "Ta Prohm (Waldtempel)" }, wikipedia: "Ta_Prohm" },
        { name: "Banteay Srei", wikipedia: "Banteay_Srei" },
      ],
    },
    {
      id: 2,
      name: "Phnom Penh",
      region: { fr: "Capitale", en: "Capital", es: "Capital", de: "Hauptstadt" },
      description: {
        fr: "La capitale est une ville attachante au bord du Mékong. Le Palais Royal, les pagodes bouddhistes et le marché central contrastent avec les mémoriaux Tuol Sleng (S-21) et Choeung Ek, témoignages poignants du génocide khmer rouge.", en: "The capital is a compelling city on the banks of the Mekong. The Royal Palace, Buddhist pagodas and Central Market stand in stark contrast to the Tuol Sleng (S-21) and Choeung Ek memorials, poignant reminders of the Khmer Rouge genocide.", es: "La capital es una ciudad entrañable a orillas del Mekong. El Palacio Real, las pagodas budistas y el mercado central contrastan con los memoriales de Tuol Sleng (S-21) y Choeung Ek, testimonios conmovedores del genocidio de los jemeres rojos.", de: "Die Hauptstadt ist eine liebenswerte Stadt am Ufer des Mekong. Der Königspalast, die buddhistischen Pagoden und der zentrale Markt stehen im Kontrast zu den Denkmälern Tuol Sleng (S-21) und Choeung Ek, ergreifenden Zeugnissen des Völkermords der Roten Khmer.",
      },
      wikipedia: "Phnom_Penh",
      tags: ["Ville", "Histoire", "Culture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Palais Royal de Phnom Penh", en: "Phnom Penh Royal Palace", es: "Palacio Real de Nom Pen", de: "Königspalast von Phnom Penh" }, wikipedia: "File:2016 Phnom Penh, Pałac Królewski, Srebrna Pagoda (02).jpg" },
        { name: { fr: "Musée Tuol Sleng (S-21)", en: "Tuol Sleng Museum (S-21)", es: "Museo Tuol Sleng (S-21)", de: "Tuol-Sleng-Museum (S-21)" }, wikipedia: "Tuol_Sleng_Genocide_Museum" },
        { name: { fr: "Choeung Ek (Killing Fields)", en: "Choeung Ek (Killing Fields)", es: "Choeung Ek (los Campos de la Muerte)", de: "Choeung Ek (Killing Fields)" }, wikipedia: "Choeung_Ek" },
        { name: { fr: "Musée National", en: "National Museum", es: "Museo Nacional", de: "Nationalmuseum" }, wikipedia: "National_Museum_of_Cambodia" },
      ],
    },
    {
      id: 3,
      name: { fr: "Plages de Sihanoukville & îles", en: "Sihanoukville beaches & islands", es: "Playas de Sihanoukville e islas", de: "Strände und Inseln von Sihanoukville" },
      region: { fr: "Côte Sud", en: "South Coast", es: "Costa sur", de: "Südküste" },
      description: {
        fr: "Les îles de Koh Rong et Koh Rong Samloem offrent des plages de sable blanc et des eaux turquoise encore préservées. Sihanoukville est la porte d'entrée, bien que la ville principale ait beaucoup changé ces dernières années.", en: "The islands of Koh Rong and Koh Rong Samloem offer white-sand beaches and still-preserved turquoise waters. Sihanoukville is the gateway, although the main town has changed dramatically in recent years.", es: "Las islas de Koh Rong y Koh Rong Samloem ofrecen playas de arena blanca y aguas turquesa aún preservadas. Sihanoukville es la puerta de entrada, aunque la ciudad principal ha cambiado mucho en los últimos años.", de: "Die Inseln Koh Rong und Koh Rong Samloem bieten weiße Sandstrände und unberührtes türkisfarbenes Wasser. Sihanoukville ist das Tor, obwohl sich die Hauptstadt in den letzten Jahren stark verändert hat.",
      },
      wikipedia: "Sihanoukville",
      tags: ["Plage", "Nature"],
      mustSee: [
        { name: "Koh Rong Samloem", wikipedia: "File:Koh Rong Sanloem estuary.jpg" },
        { name: "Koh Rong", wikipedia: "Koh_Rong" },
        { name: "Long Set Beach", wikipedia: "Sihanoukville" },
        { name: "Ream National Park", wikipedia: "Ream_National_Park" },
      ],
    },
    {
      id: 4,
      name: "Battambang",
      region: { fr: "Nord-Ouest", en: "Northwest", es: "Noroeste", de: "Nordwest" },
      description: {
        fr: "Battambang est la deuxième ville du Cambodge, plus authentique et moins touristique que Siem Reap. Ses temples préangkoriens, son train de bambou (Norry), ses villages de potiers et son architecture coloniale en font une étape charmante.", en: "Battambang is Cambodia's second-largest city, more authentic and less touristy than Siem Reap. Its pre-Angkorian temples, bamboo train (Norry), pottery villages and colonial architecture make it a charming stop.", es: "Battambang es la segunda ciudad de Camboya, más auténtica y menos turística que Siem Reap. Sus templos preangkorianos, su tren de bambú (Norry), sus pueblos de alfareros y su arquitectura colonial la convierten en una parada encantadora.", de: "Battambang ist Kambodschas zweitgrößte Stadt, authentischer und weniger touristisch als Siem Reap. Seine präangkorianischen Tempel, sein Bambuszug (Norry), seine Töpferdörfer und seine Kolonialarchitektur machen es zu einem bezaubernden Zwischenstopp.",
      },
      wikipedia: "Battambang",
      tags: ["Culture", "Architecture", "Aventure"],
      mustSee: [
        { name: { fr: "Train de bambou (Norry)", en: "Bamboo train (Norry)", es: "Tren de bambú (Norry)", de: "Bambuszug (Norry)" }, wikipedia: "File:Bamboo train (Norry) station near Battambang in 2012.jpg" },
        { name: { fr: "Phnom Sampeau (temple-falaise)", en: "Phnom Sampeau (cliffside temple)", es: "Phnom Sampeau (templo en el acantilado)", de: "Phnom Sampeau (Klippentempel)" }, wikipedia: "File:Wat Phnom Sampeau.Battambang.2006.jpg" },
        { name: { fr: "Wat Banan (temple)", en: "Wat Banan Temple", es: "Wat Banan (templo)", de: "Wat Banan (Tempel)" }, wikipedia: "Wat_Banan" },
        { name: { fr: "Village de Phnom Pros", en: "Phnom Pros village", es: "Pueblo de Phnom Pros", de: "Phnom Pros Village" }, wikipedia: "Battambang" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Cambodge est l'une des destinations les plus abordables d'Asie du Sud-Est. Le dollar américain est largement accepté et souvent préféré au riel local.", en: "Cambodia is one of the most affordable destinations in Southeast Asia. The US dollar is widely accepted and often preferred over the local riel.", es: "Camboya es uno de los destinos más asequibles del sudeste asiático. El dólar estadounidense es ampliamente aceptado y a menudo preferido frente al riel local.", de: "Kambodscha ist eines der günstigsten Reiseziele in Südostasien. Der US-Dollar wird weithin akzeptiert und oft dem lokalen Riel vorgezogen.",
    },
    currency: "Dollar américain (USD) / Riel (KHR)",
    exchangeRate: "1€ ≈ 1,05–1,10 USD (utilisez des dollars)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Dortoir auberge de jeunesse", en: "Hostel dorm", es: "Dormitorio en albergue", de: "Schlafsaal der Jugendherberge" }, price: "4–8 €", detail: { fr: "Siem Reap, Phnom Penh, très bon réseau", en: "Well developed in Siem Reap and Phnom Penh", es: "Muy extendido en Siem Reap y Nom Pen", de: "Siem Reap, Phnom Penh, sehr gutes Netz" } },
          { label: { fr: "Guesthouse double AC", en: "Double guesthouse room with A/C", es: "Casa de huéspedes doble con A/C", de: "Doppel-AC-Gästehaus" }, price: "10–25 €", detail: { fr: "Bon rapport qualité-prix", en: "Good value for money", es: "Buena relación calidad-precio", de: "Gutes Preis-Leistungs-Verhältnis" } },
          { label: { fr: "Hôtel boutique 4★", en: "4★ boutique hotel", es: "Hotel boutique 4★", de: "Boutique-Hotel 4★" }, price: "50–120 €", detail: { fr: "Siem Reap, piscine souvent incluse", en: "In Siem Reap, a pool is often included", es: "En Siem Reap, a menudo con piscina", de: "Siem Reap, Schwimmbad oft inklusive" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Repas local (lok lak, amok)", en: "Local meal (lok lak, amok)", es: "Comida local (lok lak, amok)", de: "Lokale Mahlzeit (Lok Lak, Amok)" }, price: "1,5–3 €", detail: { fr: "Dans les restos locaux ou marchés", en: "At local restaurants or markets", es: "En restaurantes locales o mercados", de: "In lokalen Restaurants oder Märkten" } },
          { label: { fr: "Happy pizza ou restaurant rue", en: "Happy pizza or street-side restaurant", es: "Happy pizza o restaurante callejero", de: "Fröhliches Pizza- oder Straßenrestaurant" }, price: "3–7 €", detail: { fr: "Restaurant touristique de base", en: "Basic tourist restaurant", es: "Restaurante turístico básico", de: "Einfaches Touristenrestaurant" } },
          { label: { fr: "Restaurant mid-range", en: "Mid-range restaurant", es: "Restaurante de gama media", de: "Mittelklasserestaurant" }, price: "8–18 €", detail: { fr: "Fish amok, beef lok lak, desserts", en: "Fish amok, beef lok lak, desserts", es: "Fish amok, beef lok lak, postres", de: "Fischamok, Beef Lok Lak, Desserts" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bus Phnom Penh–Siem Reap (6h)", en: "Phnom Penh–Siem Reap bus (6h)", es: "Autobús Nom Pen–Siem Reap (6h)", de: "Bus Phnom Penh–Siem Reap (6 Stunden)" }, price: "5–10 €", detail: { fr: "Giant Ibis ou Mekong Express, AC", en: "Giant Ibis or Mekong Express, A/C", es: "Giant Ibis o Mekong Express, con A/C", de: "Giant Ibis oder Mekong Express, AC" } },
          { label: { fr: "Tuk-tuk trajet ville", en: "Tuk-tuk city ride", es: "Trayecto en tuk-tuk por la ciudad", de: "Tuk-Tuk-Stadtfahrt" }, price: "1–4 €", detail: { fr: "Négocier le prix, omniprésent", en: "Negotiate the price, available everywhere", es: "Negociar el precio, omnipresente", de: "Verhandeln Sie den Preis, allgegenwärtig" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités & Culture", en: "Activities & Culture", es: "Actividades y cultura", de: "Aktivitäten & Kultur" },
        items: [
          { label: { fr: "Pass Angkor 1 jour", en: "1-day Angkor pass", es: "Pase de Angkor de 1 día", de: "1-Tages-Angkor-Pass" }, price: "35 €", detail: { fr: "3 jours : 55 €, 7 jours : 70 €", en: "3 days: €55, 7 days: €70", es: "3 días: 55 €, 7 días: 70 €", de: "3 Tage: 55 €, 7 Tage: 70 €" } },
          { label: { fr: "Cooking class khmer", en: "Khmer cooking class", es: "Clase de cocina jemer", de: "Khmer-Kochkurs" }, price: "15–25 €", detail: { fr: "Visite marché + cours 3h", en: "Market visit + 3-hour class", es: "Visita al mercado + clase de 3h", de: "Marktbesuch + 3 Std. Kurs" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "25–40 €/j", desc: { fr: "Dortoir, restos locaux, tuk-tuk", en: "Dorm bed, local eateries, tuk-tuks", es: "Dormitorio, restaurantes locales, tuk-tuk", de: "Schlafsaal, lokale Restaurants, Tuk-Tuk" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "55–90 €/j", desc: { fr: "Hôtel 3★, restaurants, excursions guidées", en: "3★ hotel, restaurants, guided excursions", es: "Hotel 3★, restaurantes, excursiones guiadas", de: "3★ Hotel, Restaurants, geführte Ausflüge" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "150 €+/j", desc: { fr: "Hôtel boutique piscine, spa, tours privés", en: "Boutique hotel with pool, spa, private tours", es: "Hotel boutique con piscina, spa, tours privados", de: "Boutique-Hotel-Swimmingpool, Spa, private Touren" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks", es: "2 semanas", de: "2 Wochen" },
      route: { fr: "Phnom Penh – Siem Reap (Angkor) – Plages", en: "Phnom Penh – Siem Reap (Angkor) – Beaches", es: "Nom Pen – Siem Reap (Angkor) – Playas", de: "Phnom Penh – Siem Reap (Angkor) – Strände" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "900 – 1 300 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Phnom Penh", en: "Return flight Paris–Phnom Penh", es: "Vuelo ida y vuelta Madrid–Nom Pen", de: "Hin- und Rückflug Paris–Phnom Penh" }, amount: "550–750 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "100–180 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "120–200 €" },
            { label: { fr: "Transport local + bus", en: "Local transport + buses", es: "Transporte local + autobuses", de: "Nahverkehr + Bus" }, amount: "60–100 €" },
            { label: { fr: "Pass Angkor + activités", en: "Angkor pass + activities", es: "Pase de Angkor + actividades", de: "Angkor Pass + Aktivitäten" }, amount: "80–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "1 800 – 2 600 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Phnom Penh", en: "Return flight Paris–Phnom Penh", es: "Vuelo ida y vuelta Madrid–Nom Pen", de: "Hin- und Rückflug Paris–Phnom Penh" }, amount: "700–950 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "450–700 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "300–450 €" },
            { label: { fr: "Transport + excursions", en: "Transport + excursions", es: "Transporte + excursiones", de: "Transport + Ausflüge" }, amount: "200–300 €" },
            { label: { fr: "Pass Angkor + activités", en: "Angkor pass + activities", es: "Pase de Angkor + actividades", de: "Angkor Pass + Aktivitäten" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "4 500 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Phnom Penh (Business)", en: "Return flight Paris–Phnom Penh (business)", es: "Vuelo ida y vuelta Madrid–Nom Pen (business)", de: "Hin- und Rückflug Paris–Phnom Penh (Business)" }, amount: "2 500–3 500 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "1 000–1 500 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "350–500 €" },
            { label: { fr: "Tours privés Angkor", en: "Private Angkor tours", es: "Tours privados en Angkor", de: "Private Angkor-Touren" }, amount: "300–500 €" },
            { label: { fr: "Activités premium + spa", en: "Premium activities + spa", es: "Actividades premium + spa", de: "Premium-Aktivitäten + Spa" }, amount: "250–400 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~13–14h avec escale (Bangkok, Singapour, KL)", en: "~13–14h with a stopover (Bangkok, Singapore, KL)", es: "~13–14h con escala (Bangkok, Singapur, KL)", de: "ca. 13–14 Std. mit Zwischenstopp (Bangkok, Singapur, KL)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "e-Visa en ligne (~36 USD = 30 $ visa + 6 $ frais) ou visa à l'arrivée (35 USD)", en: "Online e-visa (~USD 36 = $30 visa + $6 fee) or visa on arrival (USD 35)", es: "e-Visa en línea (~36 USD = 30 $ visado + 6 $ de gestión) o visado a la llegada (35 USD)", de: "E-Visum online (ca. 36 USD = 30 USD Visum + 6 USD Gebühr) oder Visum bei Ankunft (35 USD)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "USD très accepté (1€ ≈ 1,05–1,10 USD)", en: "USD widely accepted (1€ ≈ USD 1.05–1.10)", es: "USD ampliamente aceptado (1€ ≈ 1,05–1,10 USD)", de: "USD sehr akzeptiert (1€ ≈ 1,05–1,10 USD)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Khmer (l'anglais est très répandu dans le tourisme)", en: "Khmer (English is widely spoken in tourist areas)", es: "Jemer (el inglés está muy extendido en el sector turístico)", de: "Khmer (Englisch ist im Tourismus sehr verbreitet)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type A/C/G – 230 V (adaptateur universel conseillé)", en: "Type A/C/G – 230 V (a universal adapter is recommended)", es: "Tipo A/C/G – 230 V (adaptador universal recomendado)", de: "Typ A/C/G – 230 V (Universaladapter empfohlen)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red móvil", de: "Mobilfunknetz" }, value: { fr: "4G dans les villes, SIM locale chez Smart ou Metfone", en: "4G in cities, local SIM from Smart or Metfone", es: "4G en las ciudades, SIM local en Smart o Metfone", de: "4G in Städten, lokale SIM-Karte bei Smart oder Metfone" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable, eau en bouteille indispensable", en: "Not drinkable, bottled water is essential", es: "No potable, agua embotellada indispensable", de: "Kein Trinkwasser, Mineralwasser unbedingt erforderlich" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Antipaludéens recommandés pour les zones rurales et forestières", en: "Antimalarial medication is recommended for rural and forested areas", es: "Se recomienda antipalúdico para zonas rurales y boscosas", de: "Für ländliche Gebiete und Waldgebiete empfohlene Malariamittel" } },
  ],
};
