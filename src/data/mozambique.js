export const MOZAMBIQUE = {
  code: "MOZ",
  numericId: 508,
  name: { fr: "Mozambique", en: "Mozambique", es: "Mozambique", de: "Mosambik" },
  emoji: "🇲🇿",
  capital: { fr: "Maputo", en: "Maputo", es: "Maputo", de: "Maputo" },
  language: { fr: "Portugais, Makua, Changana, Sena", en: "Portuguese, Makua, Changana, Sena", es: "Portugués, makua, changana, sena", de: "Portugiesisch, Makua, Changana, Sena" },
  currency: { fr: "Metical (MZN)", en: "Metical (MZN)", es: "Metical (MZN)", de: "Metical (MZN)" },
  timezone: "UTC+2",
  filter: {
    budgetMin: 35, budgetMid: 75,
    tripMin: 1200, tripMid: 2800,
  },
  criteria: {
    unesco: 1,
    nature: 2,
    randonnee: 1,
    gastronomie: 1,
    architecture: 1,
    desert: 0,
    safari: 2,
    ski: 0,
    ville: 1,
    plage: 2,
  },
  description: {
    fr: "Le Mozambique déroule 2 500 km de côte sur l'océan Indien : l'archipel de Bazaruto (UNESCO) avec ses dunes et ses dugongs, l'archipel des Quirimbas avec ses dhows et ses récifs préservés, et Vilanculos comme base de plongée. Un pays peu fréquenté au sablé doux, marqué par la culture swahili et une hospitalité sincère. À combiner avec les parcs animaliers du Gorongosa.", en: "Mozambique unfurls 2,500 km of Indian Ocean coastline: the Bazaruto Archipelago (UNESCO) with its dunes and dugongs, the Quirimbas Archipelago with its dhows and pristine reefs, and Vilanculos as a diving base. A little-visited country with soft sand, shaped by Swahili culture and genuine hospitality. Best combined with the wildlife parks of Gorongosa.", es: "Mozambique despliega 2.500 km de costa sobre el océano Índico: el archipiélago de Bazaruto (UNESCO) con sus dunas y sus dugongos, el archipiélago de las Quirimbas con sus dhows y sus arrecifes preservados, y Vilanculos como base de buceo. Un país poco frecuentado de arena suave, marcado por la cultura suajili y una hospitalidad sincera. Ideal para combinar con los parques de fauna de Gorongosa.", de: "Mosambik verfügt über 2.500 km Küste am Indischen Ozean: den Bazaruto-Archipel (UNESCO) mit seinen Dünen und Dugongs, den Quirimbas-Archipel mit seinen Dhaus und erhaltenen Riffen sowie Vilanculos als Tauchbasis. Ein wenig besuchtes Land mit weichem Sand, geprägt von Swahili-Kultur und aufrichtiger Gastfreundschaft. Zur Kombination mit den Gorongosa-Wildparks.",
  },

  bestPeriods: [
    {
      months: { fr: "Avril – Octobre", en: "April – October", es: "Abril – Octubre", de: "April – Oktober" },
      label: { fr: "Saison sèche", en: "Dry season", es: "Estación seca", de: "Trockenzeit" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : ciel dégagé, mer calme, températures agréables (19–26°C). Plongée optimale et accès aux parcs facilité. Baleines à bosse de juillet à octobre.", en: "Best period: clear skies, calm sea, pleasant temperatures (19–26°C). Optimal diving and easier access to the parks. Humpback whales from July to October.", es: "Mejor época: cielo despejado, mar en calma, temperaturas agradables (19–26 °C). Buceo óptimo y acceso más fácil a los parques. Ballenas jorobadas de julio a octubre.", de: "Beste Zeit: klarer Himmel, ruhige See, angenehme Temperaturen (19–26°C). Optimales Tauchen und einfacher Zugang zu Parks. Buckelwale von Juli bis Oktober.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Novembre – Mars", en: "November – March", es: "Noviembre – Marzo", de: "November – März" },
      label: { fr: "Saison des pluies / cyclones", en: "Rainy season / cyclones", es: "Estación de lluvias / ciclones", de: "Regenzeit/Zyklone" },
      color: "#ef4444",
      description: {
        fr: "Pluies et chaleur (27–32°C). Risque cyclonique sur le nord. Routes de brousse impraticables. Plongée dégradée au nord.", en: "Rain and heat (27–32°C). Cyclone risk in the north. Bush roads become impassable. Diving conditions worsen in the north.", es: "Lluvias y calor (27–32 °C). Riesgo de ciclones en el norte. Caminos rurales intransitables. Buceo deteriorado en el norte.", de: "Regen und Hitze (27–32°C). Zyklongefahr im Norden. Unpassierbare Buschstraßen. Degradierter Tauchgang nach Norden.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "maputo",
      name: "Maputo",
      region: { fr: "Sud (capitale)", en: "South (capital)", es: "Sur (capital)", de: "Süden (Hauptstadt)" },
      data: [
        { month: "Jan", temp: 27, rain: 130, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 120, icon: "🌧️" },
        { month: "Mar", temp: 26, rain: 80,  icon: "⛅" },
        { month: "Avr", temp: 23, rain: 35,  icon: "☀️" },
        { month: "Mai", temp: 21, rain: 20,  icon: "☀️" },
        { month: "Jun", temp: 19, rain: 15,  icon: "☀️" },
        { month: "Jul", temp: 18, rain: 10,  icon: "☀️" },
        { month: "Aoû", temp: 19, rain: 15,  icon: "☀️" },
        { month: "Sep", temp: 21, rain: 15,  icon: "☀️" },
        { month: "Oct", temp: 23, rain: 30,  icon: "☀️" },
        { month: "Nov", temp: 25, rain: 70,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 110, icon: "🌧️" },
      ],
    },
    {
      id: "vilanculos",
      name: "Vilanculos",
      region: { fr: "Centre — porte de Bazaruto", en: "Centre — gateway to Bazaruto", es: "Centro — puerta de Bazaruto", de: "Mitte – Bazaruto-Tor" },
      data: [
        { month: "Jan", temp: 28, rain: 120, icon: "🌧️" },
        { month: "Fév", temp: 28, rain: 110, icon: "🌧️" },
        { month: "Mar", temp: 27, rain: 80,  icon: "🌧️" },
        { month: "Avr", temp: 25, rain: 40,  icon: "⛅" },
        { month: "Mai", temp: 23, rain: 20,  icon: "☀️" },
        { month: "Jun", temp: 21, rain: 10,  icon: "☀️" },
        { month: "Jul", temp: 20, rain: 10,  icon: "☀️" },
        { month: "Aoû", temp: 21, rain: 10,  icon: "☀️" },
        { month: "Sep", temp: 23, rain: 15,  icon: "☀️" },
        { month: "Oct", temp: 25, rain: 30,  icon: "☀️" },
        { month: "Nov", temp: 27, rain: 60,  icon: "⛅" },
        { month: "Déc", temp: 28, rain: 100, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Archipel de Bazaruto — Dugongs et récifs", en: "Bazaruto Archipelago — Dugongs and reefs", es: "Archipiélago de Bazaruto — Dugongos y arrecifes", de: "Bazaruto-Archipel – Dugongs und Riffe" },
      region: { fr: "Inhambane (centre-sud)", en: "Inhambane (central-south)", es: "Inhambane (centro-sur)", de: "Inhambane (Süd-Zentral)" },
      description: {
        fr: "L'archipel de Bazaruto regroupe cinq îles barrière protégées par un parc national marin (UNESCO) : dunes de sable montant à 100m, récifs coralliens intacts, dugongs (l'une des dernières populations viables d'Afrique orientale), raies manta et dauphins. L'accès depuis Vilanculos se fait en dhow ou en speedboat.", en: "The Bazaruto Archipelago comprises five barrier islands protected by a marine national park (UNESCO): sand dunes rising to 100m, untouched coral reefs, dugongs (one of the last viable populations in East Africa), manta rays and dolphins. Access from Vilanculos is by dhow or speedboat.", es: "El archipiélago de Bazaruto reúne cinco islas barrera protegidas por un parque nacional marino (UNESCO): dunas de arena que alcanzan los 100 m, arrecifes de coral intactos, dugongos (una de las últimas poblaciones viables de África oriental), rayas manta y delfines. El acceso desde Vilanculos se hace en dhow o en lancha rápida.", de: "Der Bazaruto-Archipel vereint fünf Barriereinseln, die durch einen Meeresnationalpark (UNESCO) geschützt sind: bis zu 100 m hohe Sanddünen, intakte Korallenriffe, Dugongs (eine der letzten lebensfähigen Populationen in Ostafrika), Mantarochen und Delfine. Der Zugang von Vilanculos aus erfolgt per Dhau oder Schnellboot.",
      },
      wikipedia: "Bazaruto_Archipelago",
      tags: ["Plage", "Safari", "UNESCO"],
      mustSee: [
        { name: { fr: "Plongée Two-Mile Reef — raies manta et tortues", en: "Two-Mile Reef diving — manta rays and turtles", es: "Buceo en Two-Mile Reef — rayas manta y tortugas", de: "Two-Mile Reef Diving – Mantarochen und Schildkröten" }, wikipedia: "File:Nausicaa - raie manta 2.jpg" },
        { name: { fr: "Nage avec les dugongs (espèce menacée)", en: "Swimming with dugongs (endangered species)", es: "Nadar con dugongos (especie amenazada)", de: "Schwimmen mit Dugongs (gefährdete Art)" }, wikipedia: "Dugong" },
        { name: { fr: "Dunes de l'île Santa Carolina (Ilha do Paraíso)", en: "Santa Carolina Island dunes (Ilha do Paraíso)", es: "Dunas de la isla Santa Carolina (Ilha do Paraíso)", de: "Dünen der Insel Santa Carolina (Ilha do Paraíso)" }, wikipedia: "File:Bazaruto-Island-banner.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Parc national de Gorongosa", en: "Gorongosa National Park", es: "Parque nacional de Gorongosa", de: "Gorongosa-Nationalpark" },
      region: { fr: "Sofala (centre)", en: "Sofala (centre)", es: "Sofala (centro)", de: "Sofala (Mitte)" },
      description: {
        fr: "Gorongosa était considéré comme le 'Jardin d'Éden' africain avant la guerre civile. Depuis la paix, il est l'objet d'un projet de restauration écologique exceptionnel : lions, éléphants, hippos et buffles ont été réintroduits avec succès. Le Mont Gorongosa (1 863m) abrite une forêt tropicale humide distincte de la savane.", en: "Gorongosa was regarded as Africa's 'Garden of Eden' before the civil war. Since peace returned, it has been the subject of an exceptional ecological restoration project: lions, elephants, hippos and buffalo have been successfully reintroduced. Mount Gorongosa (1,863m) harbours a rainforest distinct from the savannah below.", es: "Gorongosa era considerado el 'Jardín del Edén' africano antes de la guerra civil. Desde la vuelta de la paz, es objeto de un proyecto de restauración ecológica excepcional: leones, elefantes, hipopótamos y búfalos han sido reintroducidos con éxito. El monte Gorongosa (1.863 m) alberga un bosque tropical húmedo distinto de la sabana.", de: "Gorongosa galt vor dem Bürgerkrieg als der afrikanische „Garten Eden“. Seit dem Frieden ist es Gegenstand eines außergewöhnlichen ökologischen Sanierungsprojekts: Löwen, Elefanten, Flusspferde und Büffel wurden erfolgreich wieder angesiedelt. Der Berg Gorongosa (1.863 m) beherbergt einen tropischen Regenwald, der sich von der Savanne unterscheidet.",
      },
      wikipedia: "Gorongosa_National_Park",
      tags: ["Safari", "Architecture", "Nature"],
      mustSee: [
        { name: { fr: "Safari en 4x4 — lions et éléphants de Gorongosa", en: "4x4 safari — Gorongosa's lions and elephants", es: "Safari en 4x4 — leones y elefantes de Gorongosa", de: "4x4-Safari – Löwen und Elefanten von Gorongosa" }, wikipedia: "Gorongosa_National_Park" },
        { name: { fr: "Lac Urema — hippos et oiseaux aquatiques", en: "Lake Urema — hippos and waterbirds", es: "Lago Urema — hipopótamos y aves acuáticas", de: "Urema-See – Flusspferde und Wasservögel" }, wikipedia: "File:Mount_Gorongosa,_Gorongosa_National_Park,_Mozambique_(cropped).jpg" },
        { name: { fr: "Mont Gorongosa — randonnée en forêt de brouillard", en: "Mount Gorongosa — cloud forest hiking", es: "Monte Gorongosa — senderismo en bosque nuboso", de: "Gorongosa – Wanderung im Nebelwald" }, wikipedia: "File:Gorongosa - Gogogo peak. (4403966914).jpg" },
        { name: { fr: "Camp de nuit en brousse sous les étoiles", en: "Overnight bush camp under the stars", es: "Campamento nocturno en la sabana bajo las estrellas", de: "Nachtlager im Busch unter den Sternen" }, wikipedia: "File:Sunset - Gorongosa National Park, Mozambique.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Archipel des Quirimbas — Ibo Island", en: "Quirimbas Archipelago — Ibo Island", es: "Archipiélago de las Quirimbas — Isla de Ibo", de: "Quirimbas-Archipel – Insel Ibo" },
      region: { fr: "Cabo Delgado (extrême nord)", en: "Cabo Delgado (far north)", es: "Cabo Delgado (extremo norte)", de: "Cabo Delgado (ganz im Norden)" },
      description: {
        fr: "Les Quirimbas sont 32 îles coralliennes au nord du Mozambique, dont Ibo Island avec ses forts portugais du XVIe siècle et ses artisans bijoutiers — classée comme l'une des villes les plus préservées d'Afrique. Les récifs des Quirimbas sont parmi les moins altérés de l'océan Indien. Attention aux restrictions de sécurité dans la région depuis 2017.", en: "The Quirimbas are 32 coral islands off northern Mozambique, including Ibo Island with its 16th-century Portuguese forts and silversmiths — ranked among the best-preserved towns in Africa. The Quirimbas reefs are among the least disturbed in the Indian Ocean. Note the security restrictions in the region since 2017.", es: "Las Quirimbas son 32 islas coralinas frente al norte de Mozambique, entre ellas la isla de Ibo con sus fuertes portugueses del siglo XVI y sus artesanos plateros, clasificada como una de las ciudades mejor conservadas de África. Los arrecifes de las Quirimbas están entre los menos alterados del océano Índico. Atención a las restricciones de seguridad en la región desde 2017.", de: "Die Quirimbas sind 32 Koralleninseln im Norden Mosambiks, darunter die Insel Ibo mit ihren portugiesischen Festungen und Juweliergeschäften aus dem 16. Jahrhundert – sie gilt als eine der am besten erhaltenen Städte Afrikas. Die Quirimbas-Riffe gehören zu den am wenigsten veränderten im Indischen Ozean. Beachten Sie die Sicherheitsbeschränkungen in der Region seit 2017.",
      },
      wikipedia: "File:Medjumbe Island Pool Deck.jpg",
      tags: ["Histoire", "Plage", "Shopping"],
      mustSee: [
        { name: { fr: "Fort portugais d'Ibo (XVIe s.) et bijoutiers en argent", en: "Ibo's Portuguese fort (16th c.) and silversmiths", es: "Fuerte portugués de Ibo (siglo XVI) y plateros", de: "Portugiesische Festung von Ibo (16. Jahrhundert) und Silberjuweliere" }, wikipedia: "File:Ilha do Ibo - sunset-01.jpg" },
        { name: { fr: "Plongée récifs des Quirimbas — coraux intacts", en: "Quirimbas reef diving — pristine corals", es: "Buceo en los arrecifes de las Quirimbas — corales intactos", de: "Quirimbas-Rifftauchen – intakte Korallen" }, wikipedia: "File:Quilalea in Mozambique.JPG" },
        { name: { fr: "Balade en dhow au coucher du soleil inter-îles", en: "Sunset dhow ride between the islands", es: "Paseo en dhow al atardecer entre las islas", de: "Daufahrt bei Sonnenuntergang zwischen den Inseln" }, wikipedia: "File:Ilha do Ibo-sunset-02.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Maputo — Art déco et gastronomie", en: "Maputo — Art Deco and cuisine", es: "Maputo — Art déco y gastronomía", de: "Maputo – Art Deco und Gastronomie" },
      region: { fr: "Capitale (sud)", en: "Capital (south)", es: "Capital (sur)", de: "Hauptstadt (Süden)" },
      description: {
        fr: "Maputo est une capitale surprenante : architecture art déco et moderniste léguée par le Portugal, marché central avec artisanat et bois de rose, restaurants de fruits de mer exceptionnels (langoustes et camarão fraîche), et une scène culturelle animée. La Fortaleza de Maputo (XVIIIe s.) domine la baie.", en: "Maputo is a surprising capital: Art Deco and modernist architecture left by Portugal, a central market with crafts and rosewood, exceptional seafood restaurants (lobster and fresh camarão), and a lively cultural scene. The Fortaleza de Maputo (18th c.) overlooks the bay.", es: "Maputo es una capital sorprendente: arquitectura art déco y modernista legada por Portugal, mercado central con artesanía y palosanto, restaurantes de marisco excepcionales (langostas y camarão fresco), y una escena cultural animada. La Fortaleza de Maputo (siglo XVIII) domina la bahía.", de: "Maputo ist eine überraschende Hauptstadt: Art Deco und modernistische Architektur, ein Erbe Portugals, ein zentraler Markt mit Kunsthandwerk und Rosenholz, außergewöhnliche Fischrestaurants (Hummer und frischer Camarão) und eine lebendige Kulturszene. Die Fortaleza von Maputo (18. Jahrhundert) dominiert die Bucht.",
      },
      wikipedia: "Maputo",
      tags: ["Ville", "Architecture", "Gastronomie", "Shopping"],
      mustSee: [
        { name: { fr: "Marché central de Maputo — épices et sculptures", en: "Maputo Central Market — spices and carvings", es: "Mercado central de Maputo — especias y esculturas", de: "Maputo Central Market – Gewürze und Skulpturen" }, wikipedia: "File:Mozambique, Maputo, Zimpeto Market, fruit sellers.jpg" },
        { name: { fr: "Fortaleza de Nossa Senhora da Conceição (XVIII s.)", en: "Fortaleza de Nossa Senhora da Conceição (18th c.)", es: "Fortaleza de Nossa Senhora da Conceição (siglo XVIII)", de: "Fortaleza von Nossa Senhora da Conceição (18. Jahrhundert)" }, wikipedia: "File:Fortaleza_de_Nossa_Senhora_da_Conceição_(1946)_(4107930945).jpg" },
        { name: { fr: "Avenida Julius Nyerere — architecture coloniale art déco", en: "Avenida Julius Nyerere — colonial Art Deco architecture", es: "Avenida Julius Nyerere — arquitectura colonial art déco", de: "Avenida Julius Nyerere – Art-Deco-Kolonialarchitektur" }, wikipedia: "File:Av. Julius Nyerere in Maputo, Mozambique.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Mozambique est abordable mais l'hébergement de qualité coûte cher sur les îles (accès par speedboat ou avion léger). La côte nord (Quirimbas) est chère ; le centre et le sud restent accessibles. Le metical fluctue — prévoir dollars ou euros en liquide.", en: "Mozambique is affordable, but quality accommodation is pricey on the islands (reachable only by speedboat or light aircraft). The northern coast (Quirimbas) is expensive; the centre and south remain accessible. The metical fluctuates — bring dollars or euros in cash.", es: "Mozambique es asequible, pero el alojamiento de calidad es caro en las islas (acceso solo en lancha rápida o avioneta). La costa norte (Quirimbas) es cara; el centro y el sur siguen siendo accesibles. El metical fluctúa — llevar dólares o euros en efectivo.", de: "Mosambik ist erschwinglich, aber hochwertige Unterkünfte auf den Inseln sind teuer (Anreise per Schnellboot oder Kleinflugzeug). Die Nordküste (Quirimbas) ist teuer; Das Zentrum und der Süden bleiben weiterhin zugänglich. Der Metical schwankt – bringen Sie Dollar oder Euro in bar mit.",
    },
    currency: "MZN",
    exchangeRate: "1€ ≈ 68 MZN",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse / lodge de brousse simple", en: "Guesthouse / simple bush lodge", es: "Guesthouse / lodge sencillo en la sabana", de: "Einfache Pension/Lodge im Busch" }, price: "20–45 €", detail: { fr: "Chambre basique, moustiquaire", en: "Basic room, mosquito net", es: "Habitación básica, mosquitera", de: "Einfaches Zimmer, Moskitonetz" } },
          { label: { fr: "Lodge 3★ Vilanculos ou Maputo", en: "3★ lodge in Vilanculos or Maputo", es: "Lodge 3★ en Vilanculos o Maputo", de: "Lodge 3★ Vilanculos oder Maputo" }, price: "60–120 €", detail: { fr: "Piscine, vue mer ou jardin", en: "Pool, sea or garden view", es: "Piscina, vista al mar o al jardín", de: "Blick auf den Pool, das Meer oder den Garten" } },
          { label: { fr: "Island lodge Bazaruto (Anantara, Azura)", en: "Bazaruto island lodge (Anantara, Azura)", es: "Lodge insular en Bazaruto (Anantara, Azura)", de: "Inselhütte Bazaruto (Anantara, Azura)" }, price: "400–800 €", detail: { fr: "Tout compris, accès exclusif", en: "All-inclusive, exclusive access", es: "Todo incluido, acceso exclusivo", de: "Alles inklusive, exklusiver Zugang" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Camarão grillé (crevettes locales) dans un restaurante", en: "Grilled camarão (local prawns) in a restaurante", es: "Camarão a la parrilla (gambas locales) en un restaurante", de: "Gegrillte Camarão (lokale Garnele) in einem Restaurant" }, price: "8–18 €", detail: { fr: "Frais du jour, sauce piri-piri", en: "Fresh catch of the day, piri-piri sauce", es: "Pesca fresca del día, salsa piri-piri", de: "Täglich frische Piri-Piri-Sauce" } },
          { label: { fr: "Restaurant mid-range Maputo", en: "Mid-range restaurant in Maputo", es: "Restaurante de gama media en Maputo", de: "Mittelklasserestaurant Maputo" }, price: "15–30 €", detail: { fr: "Fruits de mer, pão com churrasco", en: "Seafood, pão com churrasco", es: "Marisco, pão com churrasco", de: "Meeresfrüchte, Pão com Churrasco" } },
          { label: { fr: "Marché local — matapa, xima, poisson séché", en: "Local market — matapa, xima, dried fish", es: "Mercado local — matapa, xima, pescado seco", de: "Lokaler Markt – Matapa, Xima, getrockneter Fisch" }, price: "2–6 €", detail: { fr: "Cuisine mozambicaine typique", en: "Typical Mozambican cuisine", es: "Cocina mozambiqueña típica", de: "Typische mosambikanische Küche" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Chapa (minibus collectif) entre villes", en: "Chapa (shared minibus) between towns", es: "Chapa (minibús colectivo) entre ciudades", de: "Chapa (Sammel-Kleinbus) zwischen Städten" }, price: "5–15 €", detail: { fr: "Lent mais économique", en: "Slow but cheap", es: "Lento pero económico", de: "Langsam, aber sparsam" } },
          { label: { fr: "Bus longue distance (Maputo–Vilanculos)", en: "Long-distance bus (Maputo–Vilanculos)", es: "Autobús de larga distancia (Maputo–Vilanculos)", de: "Fernbus (Maputo–Vilanculos)" }, price: "15–25 €", detail: { fr: "8–10h de route", en: "8–10h on the road", es: "8–10h de carretera", de: "8–10 Stunden Fahrt" } },
          { label: { fr: "Speedboat Vilanculos–Bazaruto (A/R)", en: "Speedboat Vilanculos–Bazaruto (return)", es: "Lancha rápida Vilanculos–Bazaruto (ida y vuelta)", de: "Schnellboot Vilanculos–Bazaruto (Hin- und Rückfahrt)" }, price: "40–80 €", detail: { fr: "30–45 min, obligatoire pour les îles", en: "30–45 min, required to reach the islands", es: "30–45 min, obligatoria para las islas", de: "30–45 Minuten, obligatorisch für die Inseln" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Plongée à Bazaruto (2 plongées, équipement)", en: "Bazaruto diving (2 dives, equipment)", es: "Buceo en Bazaruto (2 inmersiones, equipo)", de: "Tauchen in Bazaruto (2 Tauchgänge, Ausrüstung)" }, price: "70–110 €", detail: { fr: "Récifs intacts, visibilité 30m+", en: "Pristine reefs, 30m+ visibility", es: "Arrecifes intactos, visibilidad 30 m+", de: "Intakte Riffe, Sichtweite 30 m+" } },
          { label: { fr: "Safari Gorongosa (1 jour, 4x4, guide)", en: "Gorongosa safari (1 day, 4x4, guide)", es: "Safari en Gorongosa (1 día, 4x4, guía)", de: "Gorongosa Safari (1 Tag, 4x4, Führer)" }, price: "50–100 €", detail: { fr: "Entrée + accompagnement", en: "Entry + guide included", es: "Entrada + acompañamiento", de: "Vorspeise + Beilage" } },
          { label: { fr: "Excursion dhow inter-îles (demi-journée)", en: "Inter-island dhow trip (half day)", es: "Excursión en dhow entre islas (medio día)", de: "Dau-Ausflug zwischen den Inseln (halber Tag)" }, price: "30–60 €", detail: { fr: "Pique-nique sur plage déserte", en: "Picnic on a deserted beach", es: "Pícnic en una playa desierta", de: "Picknick am einsamen Strand" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "35–60 €/j", desc: { fr: "Guesthouse + cuisine locale + chapa", en: "Guesthouse + local food + chapa", es: "Guesthouse + cocina local + chapa", de: "Gästehaus + lokale Küche + Chapa" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "80–150 €/j", desc: { fr: "Lodge 3★ + restaurants + excursions", en: "3★ lodge + restaurants + excursions", es: "Lodge 3★ + restaurantes + excursiones", de: "Lodge 3★ + Restaurants + Ausflüge" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "12 jours", en: "12 days", es: "12 días", de: "12 Tage" },
      route: {
        fr: "Maputo (2j) → Vilanculos / Bazaruto (5j) → Gorongosa (3j) → Beira ou vol retour (2j)", en: "Maputo (2d) → Vilanculos / Bazaruto (5d) → Gorongosa (3d) → Beira or return flight (2d)", es: "Maputo (2d) → Vilanculos / Bazaruto (5d) → Gorongosa (3d) → Beira o vuelo de vuelta (2d)", de: "Maputo (2 Tage) → Vilanculos / Bazaruto (5 Tage) → Gorongosa (3 Tage) → Beira oder Rückflug (2 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 200 – 2 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Europe–Maputo", en: "Return flight Europe–Maputo", es: "Vuelo ida y vuelta Europa–Maputo", de: "Hin- und Rückflug Europa–Maputo" }, amount: "500–800 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)", es: "Alojamiento (12 noches)", de: "Unterkunft (12 Nächte)" }, amount: "300–500 €" },
            { label: { fr: "Transports locaux + speedboats", en: "Local transport + speedboats", es: "Transporte local + lanchas rápidas", de: "Nahverkehr + Schnellboote" }, amount: "200–350 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "200–350 €" },
            { label: { fr: "Plongée & safaris", en: "Diving & safaris", es: "Buceo y safaris", de: "Tauchen und Safaris" }, amount: "200–400 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "2 800 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Europe–Maputo", en: "Return flight Europe–Maputo", es: "Vuelo ida y vuelta Europa–Maputo", de: "Hin- und Rückflug Europa–Maputo" }, amount: "600–1 000 €" },
            { label: { fr: "Lodges (12 nuits)", en: "Lodges (12 nights)", es: "Lodges (12 noches)", de: "Lodges (12 Nächte)" }, amount: "900–2 000 €" },
            { label: { fr: "Vols intérieurs + speedboats", en: "Domestic flights + speedboats", es: "Vuelos interiores + lanchas rápidas", de: "Inlandsflüge + Schnellboote" }, amount: "400–700 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "400–700 €" },
            { label: { fr: "Plongée, dhow, safaris", en: "Diving, dhow, safaris", es: "Buceo, dhow, safaris", de: "Tauchen, Dhau, Safaris" }, amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~12–14h via Johannesburg (South African, Kenya Airways) ou Addis-Abeba (Ethiopian). Pas de direct.", en: "~12–14h via Johannesburg (South African, Kenya Airways) or Addis Ababa (Ethiopian). No direct flight.", es: "~12–14h vía Johannesburgo (South African, Kenya Airways) o Addis Abeba (Ethiopian). Sin vuelo directo.", de: "ca. 12–14 Std. über Johannesburg (South African, Kenya Airways) oder Addis Abeba (Ethiopian). Kein Direktflug." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Visa à l'arrivée gratuit (30 jours) pour les Français. Passeport valide 6 mois.", en: "Free visa on arrival (30 days) for French citizens. Passport valid for 6 months.", es: "Visado gratuito a la llegada (30 días) para ciudadanos de la UE. Pasaporte válido 6 meses.", de: "Kostenloses Visum bei der Ankunft (30 Tage) für Franzosen. Reisepass 6 Monate gültig." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Metical (MZN). Dollars et euros acceptés dans les lodges. Espèces indispensables hors Maputo.", en: "Metical (MZN). Dollars and euros accepted at lodges. Cash essential outside Maputo.", es: "Metical (MZN). Dólares y euros aceptados en los lodges. Efectivo indispensable fuera de Maputo.", de: "Metallisch (MZN). In den Lodges werden Dollar und Euro akzeptiert. Wesentliche Arten außerhalb von Maputo." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Portugais (officiel). Anglais parlé dans les zones touristiques. Makua/Changana dans les villages.", en: "Portuguese (official). English spoken in tourist areas. Makua/Changana in villages.", es: "Portugués (oficial). Se habla inglés en las zonas turísticas. Makua/changana en los pueblos.", de: "Portugiesisch (offiziell). In Touristengebieten wird Englisch gesprochen. Makua/Changana in den Dörfern." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type C/M (Sud-Africain, 3 broches rondes) — 220V. Adaptateur recommandé.", en: "Type C/M (South African, 3 round pins) — 220V. Adapter recommended.", es: "Tipo C/M (sudafricano, 3 clavijas redondas) — 220V. Se recomienda adaptador.", de: "Typ C/M (südafrikanisch, 3 runde Stifte) – 220 V. Adapter empfohlen." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Antipaludéen indispensable (paludisme présent). Vaccins fièvre jaune, hépatites recommandés. Eau en bouteille.", en: "Antimalarials essential (malaria present). Yellow fever and hepatitis vaccines recommended. Bottled water.", es: "Antipalúdico indispensable (presencia de malaria). Se recomiendan vacunas contra la fiebre amarilla y hepatitis. Agua embotellada.", de: "Wesentlicher Antimalariawirkstoff (Malaria vorhanden). Impfungen gegen Gelbfieber und Hepatitis werden empfohlen. Wasser in Flaschen." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable — eau en bouteille uniquement.", en: "Not drinkable — bottled water only.", es: "No potable — solo agua embotellada.", de: "Nicht trinkbar – nur Wasser in Flaschen." } },
    { icon: "⚠️", label: { fr: "Sécurité", en: "Safety", es: "Seguridad", de: "Sicherheit" }, value: { fr: "Cabo Delgado (extrême nord) : zone déconseillée formellement (conflit armé depuis 2017). Consulter les avis du MAE avant tout départ.", en: "Cabo Delgado (far north): strongly advised against (armed conflict since 2017). Check official travel advisories before departure.", es: "Cabo Delgado (extremo norte): zona formalmente desaconsejada (conflicto armado desde 2017). Consultar los avisos oficiales antes de viajar.", de: "Cabo Delgado (ganz im Norden): Gebiet offiziell nicht empfohlen (bewaffneter Konflikt seit 2017). Konsultieren Sie vor jeder Abreise die Meinung des MAE." } },
  ],
};
