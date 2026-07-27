export const HAITI = {
  code: "HTI",
  numericId: 332,
  name: { fr: "Haïti", en: "Haiti", es: "Haití", de: "Haiti" },
  emoji: "🇭🇹",
  capital: { fr: "Port-au-Prince", en: "Port-au-Prince", es: "Puerto Príncipe", de: "Port-au-Prince" },
  language: { fr: "Créole haïtien, Français", en: "Haitian Creole, French", es: "Criollo haitiano, francés", de: "Haitianisches Kreolisch, Französisch" },
  currency: { fr: "Gourde haïtienne (HTG)", en: "Haitian gourde (HTG)", es: "Gourde haitiana (HTG)", de: "Haitianische Gourde (HTG)" },
  timezone: "UTC-5",
  filter: { budgetMin: 35, budgetMid: 70, tripMin: 850, tripMid: 1800 },
  criteria: {
    unesco: 2,
    nature: 2,
    randonnee: 1,
    gastronomie: 1,
    architecture: 1,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 1,
    plage: 2,
  },
  description: {
    fr: "Haïti, première république noire du monde fondée en 1804 après une révolution d'esclaves unique dans l'histoire, possède un patrimoine culturel extraordinaire mêlant influences africaines, françaises et taïnos. Le pays abrite des sites classés UNESCO comme la Citadelle Laferrière et le Sans-Souci, témoignages d'une grandeur passée. ⚠️ AVERTISSEMENT SÉCURITÉ : En raison de la violence des gangs et de l'instabilité politique extrême depuis 2021, le voyage en Haïti est fortement déconseillé par la plupart des gouvernements — consultez impérativement les avis officiels avant tout projet de visite.", en: "Haiti, the world's first Black republic, founded in 1804 after a slave revolution unique in history, has an extraordinary cultural heritage blending African, French and Taíno influences. The country is home to UNESCO-listed sites such as the Citadelle Laferrière and Sans-Souci, reminders of a former grandeur. ⚠️ SECURITY WARNING: Because of gang violence and extreme political instability since 2021, travel to Haiti is strongly discouraged by most governments — be sure to consult official advisories before planning any visit.", es: "Haití, primera república negra del mundo, fundada en 1804 tras una revolución de esclavos única en la historia, posee un patrimonio cultural extraordinario que mezcla influencias africanas, francesas y taínas. El país alberga sitios declarados Patrimonio de la Humanidad por la UNESCO como la Ciudadela Laferrière y el palacio Sans-Souci, testimonios de una grandeza pasada. ⚠️ ADVERTENCIA DE SEGURIDAD: debido a la violencia de las pandillas y a la extrema inestabilidad política desde 2021, la mayoría de los gobiernos desaconsejan firmemente viajar a Haití — es imprescindible consultar los avisos oficiales antes de cualquier proyecto de visita.", de: "Haiti, die erste schwarze Republik der Welt, die 1804 nach einer historisch einzigartigen Sklavenrevolution gegründet wurde, verfügt über ein außergewöhnliches kulturelles Erbe, das afrikanische, französische und Taino-Einflüsse vermischt. Das Land beherbergt UNESCO-geschützte Stätten wie die Citadelle Laferrière und Sans-Souci, Zeugnisse vergangener Pracht. ⚠️ SICHERHEITSHINWEIS: Aufgrund der Bandengewalt und der extremen politischen Instabilität seit 2021 wird von Reisen nach Haiti von den meisten Regierungen dringend abgeraten – konsultieren Sie unbedingt die offiziellen Hinweise, bevor Sie einen Besuch planen.",
  },
  bestPeriods: [
    {
      months: { fr: "Déc – Mars", en: "Dec – March", es: "Dic – Marzo", de: "Dezember – März" },
      label: { fr: "Saison sèche", en: "Dry season", es: "Estación seca", de: "Trockenzeit" },
      color: "#22c55e",
      description: {
        fr: "Période la plus sèche et agréable, températures douces, idéale pour visiter", en: "The driest and most pleasant period, with mild temperatures, ideal for visiting.", es: "El período más seco y agradable, con temperaturas suaves, ideal para visitar.", de: "Die trockenste und angenehmste Zeit, milde Temperaturen, ideal für einen Besuch",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Avr – Jun & Oct – Nov", en: "Apr – Jun & Oct – Nov", es: "Abr – Jun y Oct – Nov", de: "April – Juni und Okt. – Nov" },
      label: { fr: "Saisons des pluies", en: "Rainy seasons", es: "Estaciones de lluvias", de: "Regenzeiten" },
      color: "#f59e0b",
      description: {
        fr: "Deux saisons pluvieuses avec risques de crues et d'inondations", en: "Two rainy seasons with risks of flash floods and flooding.", es: "Dos estaciones lluviosas con riesgo de crecidas repentinas e inundaciones.", de: "Zwei Regenzeiten mit Überschwemmungsgefahr",
      },
      icon: "🌧️",
    },
    {
      months: { fr: "Jun – Nov", en: "Jun – Nov", es: "Jun – Nov", de: "Juni – Nov" },
      label: { fr: "Saison cyclonique", en: "Hurricane season", es: "Temporada de huracanes", de: "Hurrikansaison" },
      color: "#ef4444",
      description: {
        fr: "Risque élevé d'ouragans — éviter cette période", en: "High hurricane risk — avoid this period.", es: "Riesgo elevado de huracanes — evitar este período.", de: "Hohes Hurrikanrisiko – vermeiden Sie diese Zeit",
      },
      icon: "🌀",
    },
  ],
  weatherCities: [
    {
      id: "port_au_prince",
      name: "Port-au-Prince",
      region: { fr: "Ouest", en: "West", es: "Oeste", de: "Westen" },
      data: [
        { month: "Jan", temp: 25, rain: 60, icon: "☀️" },
        { month: "Fév", temp: 25, rain: 55, icon: "☀️" },
        { month: "Mar", temp: 26, rain: 80, icon: "☀️" },
        { month: "Avr", temp: 27, rain: 110, icon: "🌧️" },
        { month: "Mai", temp: 28, rain: 130, icon: "🌧️" },
        { month: "Jun", temp: 28, rain: 140, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 90, icon: "⛅" },
        { month: "Aoû", temp: 28, rain: 95, icon: "⛅" },
        { month: "Sep", temp: 28, rain: 130, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 160, icon: "🌧️" },
        { month: "Nov", temp: 26, rain: 110, icon: "🌧️" },
        { month: "Déc", temp: 24, rain: 65, icon: "☀️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: { fr: "Citadelle Laferrière & Sans-Souci", en: "Citadelle Laferrière & Sans-Souci", es: "Ciudadela Laferrière y Sans-Souci", de: "Zitadelle Laferrière & Sans-Souci" },
      region: { fr: "Nord", en: "North", es: "Norte", de: "Norden" },
      description: {
        fr: "La Citadelle Laferrière est l'une des plus grandes forteresses de l'hémisphère occidental, construite au début du XIXe siècle par le roi Henri Christophe pour défendre Haïti contre une éventuelle reconquête française. Classée au patrimoine mondial de l'UNESCO avec le palais Sans-Souci, elle témoigne de la grandeur de la première nation noire indépendante. Le site est accessible depuis Cap-Haïtien, à quelques heures de cheval ou de marche dans les montagnes.", en: "The Citadelle Laferrière is one of the largest fortresses in the Western Hemisphere, built in the early 19th century by King Henri Christophe to defend Haiti against a possible French reconquest. Listed as a UNESCO World Heritage Site together with Sans-Souci Palace, it reflects the grandeur of the first independent Black nation. The site can be reached from Cap-Haïtien after a few hours on horseback or on foot in the mountains.", es: "La Ciudadela Laferrière es una de las fortalezas más grandes del hemisferio occidental, construida a principios del siglo XIX por el rey Henri Christophe para defender Haití de una posible reconquista francesa. Declarada Patrimonio de la Humanidad por la UNESCO junto con el palacio Sans-Souci, da testimonio de la grandeza de la primera nación negra independiente. El sitio es accesible desde Cap-Haïtien, tras unas horas a caballo o a pie por las montañas.", de: "Die Zitadelle von Laferrière ist eine der größten Festungen der westlichen Hemisphäre und wurde Anfang des 19. Jahrhunderts von König Henri Christophe erbaut, um Haiti vor einer möglichen französischen Rückeroberung zu schützen. Zusammen mit dem Sans-Souci-Palast gehört es zum UNESCO-Weltkulturerbe und zeugt von der Größe der ersten unabhängigen schwarzen Nation. Der Standort ist von Cap-Haitien aus in wenigen Stunden zu Pferd oder zu Fuß in den Bergen erreichbar.",
      },
      wikipedia: "Citadelle_Laferrière",
      tags: ["UNESCO", "Histoire", "Architecture", "Randonnée"],
      mustSee: [
        { name: { fr: "Citadelle Laferrière — forteresse UNESCO du roi Henri Christophe", en: "Citadelle Laferrière — UNESCO fortress of King Henri Christophe", es: "Ciudadela Laferrière — fortaleza UNESCO del rey Henri Christophe", de: "Citadelle Laferrière – UNESCO-Festung von König Henri Christophe" }, wikipedia: "Citadelle_Laferrière" },
        { name: { fr: "Palais Sans-Souci — ruines royales du XIXe siècle", en: "Sans-Souci Palace — 19th-century royal ruins", es: "Palacio Sans-Souci — ruinas reales del siglo XIX", de: "Palast Sans-Souci – königliche Ruinen aus dem 19. Jahrhundert" }, wikipedia: "File:Sans-Souci_Palace_front.jpg" },
        { name: { fr: "Cap-Haïtien — ancienne capitale coloniale française", en: "Cap-Haïtien — former French colonial capital", es: "Cap-Haïtien — antigua capital colonial francesa", de: "Cap-Haïtien – ehemalige französische Kolonialhauptstadt" }, wikipedia: "File:View_of_Cap-Haitien.jpg" },
        { name: { fr: "Musée du Panthéon National Haïtien — histoire de la révolution", en: "Museum of the Haitian National Pantheon — history of the revolution", es: "Museo del Panteón Nacional Haitiano — historia de la revolución", de: "Haitianisches Nationales Pantheon-Museum – Geschichte der Revolution" }, wikipedia: "File:MUPANAH 2018 - Roof.jpg" },
      ],
    },
    {
      id: 2,
      name: "Jacmel",
      region: { fr: "Sud-Est", en: "Southeast", es: "Sudeste", de: "Südost" },
      description: {
        fr: "Jacmel est une ville côtière réputée pour son architecture coloniale préservée, sa scène artistique foisonnante et son célèbre carnaval. La ville abrite de nombreux ateliers d'artistes et est considérée comme la capitale culturelle d'Haïti. Son front de mer pittoresque et ses maisons en fer forgé d'influence victorienne en font une destination unique dans les Caraïbes.", en: "Jacmel is a coastal town known for its preserved colonial architecture, thriving art scene and famous carnival. The town is home to many artists' workshops and is considered Haiti's cultural capital. Its picturesque seafront and Victorian-style wrought-iron houses make it a unique destination in the Caribbean.", es: "Jacmel es una ciudad costera célebre por su arquitectura colonial bien conservada, su vibrante escena artística y su famoso carnaval. La ciudad alberga numerosos talleres de artistas y se considera la capital cultural de Haití. Su pintoresco frente marítimo y sus casas de hierro forjado de estilo victoriano hacen de ella un destino único en el Caribe.", de: "Jacmel ist eine Küstenstadt, die für ihre erhaltene Kolonialarchitektur, ihre blühende Kunstszene und ihren berühmten Karneval bekannt ist. Die Stadt beherbergt viele Künstlerateliers und gilt als Kulturhauptstadt Haitis. Seine malerische Uferpromenade und die viktorianisch beeinflussten schmiedeeisernen Häuser machen es zu einem einzigartigen Reiseziel in der Karibik.",
      },
      wikipedia: "Jacmel",
      tags: ["Art", "Culture", "Architecture", "Plage"],
      mustSee: [
        { name: { fr: "Marché de fer de Jacmel — marché artisanal coloré", en: "Jacmel iron market — colourful craft market", es: "Mercado de hierro de Jacmel — colorido mercado artesanal", de: "Eisenmarkt in Jacmel – farbenfroher Kunsthandwerksmarkt" }, wikipedia: "Jacmel" },
        { name: { fr: "Carnaval de Jacmel — fête culturelle réputée (février)", en: "Jacmel Carnival — renowned cultural celebration (February)", es: "Carnaval de Jacmel — célebre fiesta cultural (febrero)", de: "Karneval von Jacmel – berühmtes Kulturfestival (Februar)" }, wikipedia: "File:Kanaval in Jacmel Haiti 2014 01.jpg" },
        { name: { fr: "Maisons coloniales — architecture victorienne et fer forgé", en: "Colonial houses — Victorian wrought-iron architecture", es: "Casas coloniales — arquitectura victoriana y hierro forjado", de: "Kolonialhäuser – viktorianische Architektur und Schmiedeeisen" }, wikipedia: "File:HT Jacmel 1010 (9) (17029406128).jpg" },
        { name: { fr: "Plage de Cyvadier — plage calme à proximité", en: "Cyvadier Beach — quiet nearby beach", es: "Playa de Cyvadier — playa tranquila cercana", de: "Cyvadier Beach – ruhiger Strand in der Nähe" }, wikipedia: "File:HT Jacmel 1010 (60) (16594718984).jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Île-à-Vache", en: "Île-à-Vache", es: "Île-à-Vache", de: "Ile-a-Vache" },
      region: { fr: "Sud", en: "South", es: "Sur", de: "Süden" },
      description: {
        fr: "Île-à-Vache est une île tropicale paisible au large des Cayes, l'une des rares régions d'Haïti offrant encore un tourisme balnéaire dans des conditions relativement sûres. Ses plages de sable blanc, ses eaux turquoise et son atmosphère tranquille contrastent avec les difficultés du pays continental. Autrefois refuge du pirate Henry Morgan, elle offre une plongée et des paysages naturels remarquables.", en: "Île-à-Vache is a peaceful tropical island off Les Cayes, one of the few parts of Haiti still offering seaside tourism under relatively safe conditions. Its white-sand beaches, turquoise waters and calm atmosphere stand in sharp contrast to the difficulties on the mainland. Once a hideout for the pirate Henry Morgan, it offers diving opportunities and remarkable natural scenery.", es: "Île-à-Vache es una apacible isla tropical frente a Les Cayes, una de las pocas regiones de Haití que aún ofrece turismo de playa en condiciones relativamente seguras. Sus playas de arena blanca, sus aguas turquesas y su atmósfera tranquila contrastan con las dificultades del país continental. Antiguo refugio del pirata Henry Morgan, ofrece buceo y paisajes naturales notables.", de: "Île-à-Vache ist eine friedliche tropische Insel vor der Küste von Les Cayes, einer der wenigen Regionen Haitis, die noch Strandtourismus unter relativ sicheren Bedingungen anbietet. Die weißen Sandstrände, das türkisfarbene Wasser und die ruhige Atmosphäre stehen im Kontrast zu den Schwierigkeiten des kontinentalen Landes. Einst der Zufluchtsort des Piraten Henry Morgan, bietet es bemerkenswerte Tauch- und Naturlandschaften.",
      },
      wikipedia: "File:Ile-a-Vache - Haiti.jpg",
      tags: ["Plage", "Nature"],
      mustSee: [
        { name: { fr: "Plages de sable blanc — eaux turquoise et récifs coralliens", en: "White-sand beaches — turquoise waters and coral reefs", es: "Playas de arena blanca — aguas turquesas y arrecifes de coral", de: "Weiße Sandstrände – türkisfarbenes Wasser und Korallenriffe" }, wikipedia: "File:Ile-a-Vache - Haiti.jpg" },
        { name: { fr: "Village de pêcheurs — vie locale authentique", en: "Fishing village — authentic local life", es: "Pueblo de pescadores — vida local auténtica", de: "Fischerdorf – authentisches lokales Leben" }, wikipedia: "File:Vaches ile dupas.jpg" },
        { name: { fr: "Randonnée sur l'île — végétation tropicale et panoramas", en: "Hiking on the island — tropical vegetation and panoramic views", es: "Senderismo por la isla — vegetación tropical y panorámicas", de: "Wandern Sie über die Insel – tropische Vegetation und Panoramen" }, wikipedia: "File:Ile-a-Vache Inland Lake - Haiti.jpg" },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "Haïti est l'une des destinations les moins chères des Caraïbes, mais l'instabilité économique et la dévaluation de la gourde rendent les prix très variables. La dollarisation partielle de l'économie est courante dans le secteur touristique.", en: "Haiti is one of the cheapest destinations in the Caribbean, but economic instability and the depreciation of the gourde make prices highly variable. Partial dollarisation of the economy is common in the tourism sector.", es: "Haití es uno de los destinos más económicos del Caribe, pero la inestabilidad económica y la devaluación de la gourde hacen que los precios sean muy variables. La dolarización parcial de la economía es habitual en el sector turístico.", de: "Haiti ist eines der günstigsten Reiseziele in der Karibik, aber wirtschaftliche Instabilität und die Abwertung des Kürbisses führen zu sehr unterschiedlichen Preisen. Eine teilweise Dollarisierung der Wirtschaft ist im Tourismussektor üblich.",
    },
    currency: "HTG",
    exchangeRate: "1€ ≈ 135 HTG",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse locale", en: "Local guesthouse", es: "Casa de huéspedes local", de: "Lokales Gästehaus" }, price: "15–25 €" },
          { label: { fr: "Hôtel confort", en: "Comfort hotel", es: "Hotel confort", de: "Komforthotel" }, price: "40–70 €" },
          { label: { fr: "Resort / hôtel haut de gamme", en: "Resort / upscale hotel", es: "Resort / hotel de gama alta", de: "Gehobenes Resort/Hotel" }, price: "100–180 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Repas local (griot, riz et haricots)", en: "Local meal (griot, rice and beans)", es: "Comida local (griot, arroz con frijoles)", de: "Lokale Mahlzeit (Griot, Reis und Bohnen)" }, price: "3–6 €" },
          { label: { fr: "Restaurant intermédiaire", en: "Mid-range restaurant", es: "Restaurante de gama media", de: "Mittelschweres Restaurant" }, price: "10–20 €" },
          { label: { fr: "Restaurant de style occidental", en: "Western-style restaurant", es: "Restaurante de estilo occidental", de: "Restaurant im westlichen Stil" }, price: "20–40 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Tap-tap (minibus collectif)", en: "Tap-tap (shared minibus)", es: "Tap-tap (minibús colectivo)", de: "Tap-Tap (Sammel-Kleinbus)" }, price: "0,50–1 €" },
          { label: { fr: "Moto-taxi (trajet court)", en: "Motorbike taxi (short ride)", es: "Mototaxi (trayecto corto)", de: "Motorradtaxi (kurze Fahrt)" }, price: "1–3 €" },
          { label: { fr: "Location de voiture avec chauffeur / jour", en: "Car hire with driver / day", es: "Alquiler de coche con chófer / día", de: "Autovermietung mit Fahrer / Tag" }, price: "60–100 €" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Visite guidée Citadelle Laferrière", en: "Guided visit to Citadelle Laferrière", es: "Visita guiada a la Ciudadela Laferrière", de: "Führung durch die Zitadelle Laferrière" }, price: "15–30 €" },
          { label: { fr: "Excursion Île-à-Vache (bateau + journée)", en: "Île-à-Vache excursion (boat + day trip)", es: "Excursión a Île-à-Vache (barco + día completo)", de: "Ausflug zur Île-à-Vache (Boot + Tag)" }, price: "25–50 €" },
          { label: { fr: "Cours de peinture / atelier artisanal à Jacmel", en: "Painting class / craft workshop in Jacmel", es: "Clase de pintura / taller artesanal en Jacmel", de: "Malkurse / Handwerkswerkstatt in Jacmel" }, price: "20–40 €" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
        daily: "35–55 €/j",
        desc: { fr: "Guesthouse simple, repas locaux, transports collectifs", en: "Simple guesthouse, local meals, shared transport", es: "Casa de huéspedes sencilla, comidas locales, transporte colectivo", de: "Einfache Pension, lokale Küche, öffentliche Verkehrsmittel" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
        daily: "70–120 €/j",
        desc: { fr: "Hôtel correct, restaurants variés, chauffeur privé", en: "Decent hotel, varied restaurants, private driver", es: "Hotel decente, restaurantes variados, chófer privado", de: "Ordentliches Hotel, abwechslungsreiche Restaurants, privater Fahrer" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: {
        fr: "Port-au-Prince → Cap-Haïtien (Citadelle) → Jacmel → Île-à-Vache", en: "Port-au-Prince → Cap-Haïtien (Citadel) → Jacmel → Île-à-Vache", es: "Puerto Príncipe → Cap-Haïtien (Ciudadela) → Jacmel → Île-à-Vache", de: "Port-au-Prince → Cap-Haitien (Citadelle) → Jacmel → Île-à-Vache",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "850 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Port-au-Prince", en: "Return flight Paris–Port-au-Prince", es: "Vuelo ida y vuelta París–Puerto Príncipe", de: "Hin- und Rückflug Paris–Port-au-Prince" }, amount: "450–650 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)", es: "Alojamiento (9 noches)", de: "Unterkunft (9 Nächte)" }, amount: "135–225 €" },
            { label: { fr: "Transports locaux", en: "Local transport", es: "Transporte local", de: "Nahverkehr" }, amount: "80–120 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "100–150 €" },
            { label: { fr: "Activités + visites", en: "Activities + visits", es: "Actividades + visitas", de: "Aktivitäten + Besichtigungen" }, amount: "85–135 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "1 800 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Port-au-Prince", en: "Return flight Paris–Port-au-Prince", es: "Vuelo ida y vuelta París–Puerto Príncipe", de: "Hin- und Rückflug Paris–Port-au-Prince" }, amount: "600–850 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)", es: "Alojamiento (9 noches)", de: "Unterkunft (9 Nächte)" }, amount: "630–900 €" },
            { label: { fr: "Transports locaux + chauffeur", en: "Local transport + driver", es: "Transporte local + chófer", de: "Nahverkehr + Fahrer" }, amount: "250–350 €" },
            { label: { fr: "Nourriture + restaurants", en: "Food + restaurants", es: "Comida + restaurantes", de: "Essen + Restaurants" }, amount: "200–300 €" },
            { label: { fr: "Activités + guides", en: "Activities + guides", es: "Actividades + guías", de: "Aktivitäten + Führer" }, amount: "120–200 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde París", de: "Flug ab Paris" }, value: { fr: "10–14h avec escale (Miami, New York ou Fort-de-France)", en: "10–14h with a stopover (Miami, New York or Fort-de-France)", es: "10–14h con escala (Miami, Nueva York o Fort-de-France)", de: "10–14 Std. mit Zwischenstopp (Miami, New York oder Fort-de-France)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Pas de visa requis pour les ressortissants français (séjour ≤ 90 jours)", en: "No visa required for French citizens (stay ≤ 90 days)", es: "Sin visado para ciudadanos franceses (estancia ≤ 90 días)", de: "Für französische Staatsangehörige ist kein Visum erforderlich (Aufenthalt ≤ 90 Tage)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Gourde haïtienne (HTG) — USD largement accepté dans le secteur touristique", en: "Haitian gourde (HTG) — USD widely accepted in the tourism sector", es: "Gourde haitiana (HTG) — el dólar estadounidense se acepta ampliamente en el sector turístico", de: "Haitianische Gourde (HTG) – USD, der im Tourismussektor weithin akzeptiert wird" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Créole haïtien (langue maternelle), Français (officiel)", en: "Haitian Creole (mother tongue), French (official)", es: "Criollo haitiano (lengua materna), francés (oficial)", de: "Haitianisches Kreol (Muttersprache), Französisch (offiziell)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type A/B (110V, 60Hz) — adaptateur nécessaire pour les Européens", en: "Type A/B (110V, 60Hz) — adapter needed for Europeans", es: "Tipo A/B (110V, 60Hz) — se necesita adaptador para los europeos", de: "Typ A/B (110 V, 60 Hz) – Adapter für Europäer erforderlich" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Vaccins hépatite A/B, typhoïde, rage recommandés. Paludisme dans certaines zones — prophylaxie conseillée. Eau non potable.", en: "Hepatitis A/B, typhoid and rabies vaccines recommended. Malaria exists in some areas — prophylaxis advised. Water is not safe to drink.", es: "Se recomiendan las vacunas de hepatitis A/B, tifoidea y rabia. Paludismo en algunas zonas — se aconseja profilaxis. Agua no potable.", de: "Impfungen gegen Hepatitis A/B, Typhus und Tollwut werden empfohlen. Malaria in bestimmten Gebieten – Prophylaxe empfohlen. Nicht trinkbares Wasser." } },
    { icon: "⚠️", label: { fr: "Sécurité", en: "Security", es: "Seguridad", de: "Sicherheit" }, value: { fr: "DÉCONSEILLÉ : violence des gangs extrême à Port-au-Prince et dans plusieurs régions depuis 2021. Consultez les avis officiels du MAE avant tout voyage.", en: "NOT ADVISED: extreme gang violence in Port-au-Prince and several regions since 2021. Check official foreign ministry advisories before any travel.", es: "NO RECOMENDADO: violencia extrema de pandillas en Puerto Príncipe y varias regiones desde 2021. Consulte los avisos oficiales antes de cualquier viaje.", de: "NICHT EMPFOHLEN: extreme Bandengewalt in Port-au-Prince und mehreren Regionen seit 2021. Konsultieren Sie vor Reiseantritt die offiziellen MAE-Hinweise." } },
    { icon: "🌀", label: { fr: "Cyclones", en: "Hurricanes", es: "Huracanes", de: "Zyklone" }, value: { fr: "Saison cyclonique juin–novembre — éviter cette période, risques majeurs", en: "Hurricane season runs from June to November — avoid this period, major risks.", es: "Temporada de huracanes de junio a noviembre — evitar este período, riesgos importantes.", de: "Hurrikansaison Juni–November – vermeiden Sie diese Zeit, da große Risiken bestehen" } },
  ],
};
