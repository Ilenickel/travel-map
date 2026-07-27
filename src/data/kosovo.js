export const KOSOVO = {
  code: "XKX",
  numericId: 383,
  name: { fr: "Kosovo", en: "Kosovo", es: "Kosovo", de: "Kosovo" },
  emoji: "🇽🇰",
  capital: { fr: "Pristina", en: "Pristina", es: "Pristina", de: "Pristina" },
  language: { fr: "Albanais, Serbe", en: "Albanian, Serbian", es: "Albanés, serbio", de: "Albanisch, Serbisch" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)", es: "Euro (EUR)", de: "Euro (EUR)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 30, budgetMid: 55,
    tripMin: 600, tripMid: 1100,
  },
  criteria: {
    unesco: 2,
    nature: 2, // 🟢 dans les données ChatGPT, ramené à 🟠 (hors liste "référence mondiale")
    randonnee: 2, // idem
    gastronomie: 2,
    architecture: 2,
    desert: 0,
    safari: 0,
    ski: 2,
    ville: 2,
    plage: 1,
    plongee: 0,
  },
  description: {
    fr: "Le Kosovo est le plus jeune État d'Europe, ayant déclaré son indépendance de la Serbie en 2008, reconnue par plus d'une centaine de pays dont la France. Ce petit pays des Balkans offre une mosaïque culturelle fascinante où coexistent héritages ottoman, serbe et albanais dans des paysages montagneux spectaculaires. Le tourisme y est encore confidentiel, ce qui en fait une destination authentique et abordable pour les voyageurs curieux.", en: "Kosovo is Europe's youngest state, having declared independence from Serbia in 2008, recognised by more than a hundred countries including France. This small Balkan country offers a fascinating cultural mosaic where Ottoman, Serbian and Albanian heritage coexist amid spectacular mountain landscapes. Tourism remains niche here, making it an authentic and affordable destination for curious travellers.", es: "Kosovo es el estado más joven de Europa, tras declarar su independencia de Serbia en 2008, reconocida por más de un centenar de países entre ellos España. Este pequeño país de los Balcanes ofrece un fascinante mosaico cultural donde coexisten herencias otomana, serbia y albanesa en paisajes montañosos espectaculares. El turismo sigue siendo aquí un fenómeno reducido, lo que lo convierte en un destino auténtico y asequible para viajeros curiosos.", de: "Kosovo ist der jüngste Staat Europas und erklärte 2008 seine Unabhängigkeit von Serbien, die von mehr als hundert Ländern, darunter auch Frankreich, anerkannt wurde. Dieses kleine Balkanland bietet ein faszinierendes kulturelles Mosaik, in dem osmanisches, serbisches und albanisches Erbe in spektakulären Berglandschaften nebeneinander existieren. Der Tourismus ist immer noch vertraulich, was ihn zu einem authentischen und erschwinglichen Reiseziel für neugierige Reisende macht.",
  },
  bestPeriods: [
    { months: { fr: "Mai – Sep", en: "May – Sep", es: "Mayo – Sept", de: "Mai – Sept" }, label: { fr: "Beau temps garanti", en: "Guaranteed good weather", es: "Buen tiempo garantizado", de: "Gutes Wetter garantiert" }, color: "#22c55e", description: { fr: "Étés chauds et ensoleillés, idéal pour les randonnées dans les Alpes dinariques et le canyon de Rugova.", en: "Hot, sunny summers, ideal for hiking in the Dinaric Alps and Rugova Canyon.", es: "Veranos calurosos y soleados, ideal para el senderismo en los Alpes Dináricos y el cañón de Rugova.", de: "Warme und sonnige Sommer, ideal zum Wandern in den Dinarischen Alpen und der Rugova-Schlucht." }, icon: "☀️" },
    { months: { fr: "Déc – Fév", en: "Dec – Feb", es: "Dic – Feb", de: "Dez. – Feb" }, label: { fr: "Sports d'hiver", en: "Winter sports", es: "Deportes de invierno", de: "Wintersport" }, color: "#3b82f6", description: { fr: "Stations de ski de Brezovica accessibles, paysages enneigés des Sharr Mountains.", en: "Brezovica ski resorts accessible, snowy landscapes of the Sharr Mountains.", es: "Estaciones de esquí de Brezovica accesibles, paisajes nevados de las montañas Sharr.", de: "Zugängliche Skigebiete in Brezovica, verschneite Landschaften des Sharr-Gebirges." }, icon: "🎿" },
  ],
  weatherCities: [
    {
      id: "pristina",
      name: "Pristina",
      region: { fr: "Centre", en: "Centre", es: "Centro", de: "Center" },
      data: [
        { month: "Jan", temp: 0, rain: 45, icon: "❄️" },
        { month: "Fév", temp: 2, rain: 40, icon: "❄️" },
        { month: "Mar", temp: 7, rain: 50, icon: "❄️" },
        { month: "Avr", temp: 12, rain: 55, icon: "⛅" },
        { month: "Mai", temp: 17, rain: 65, icon: "☀️" },
        { month: "Jun", temp: 21, rain: 60, icon: "☀️" },
        { month: "Jul", temp: 24, rain: 45, icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 40, icon: "☀️" },
        { month: "Sep", temp: 18, rain: 50, icon: "☀️" },
        { month: "Oct", temp: 12, rain: 55, icon: "⛅" },
        { month: "Nov", temp: 6, rain: 60, icon: "❄️" },
        { month: "Déc", temp: 1, rain: 50, icon: "❄️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Pristina",
      region: { fr: "Centre", en: "Centre", es: "Centro", de: "Center" },
      description: {
        fr: "Pristina est une capitale jeune et dynamique où l'indépendance proclamée en 2008 se lit partout : dans le monument Newborn repeint chaque année, sur le boulevard Bill Clinton ou devant la statue de George W. Bush. La ville mêle architecture ottomane, immeubles yougoslaves et constructions modernes dans une atmosphère vibrante et chaleureuse. Les cafés bondés, les marchés et la scène artistique émergente en font une étape attachante.", en: "Pristina is a young, dynamic capital where the independence proclaimed in 2008 is visible everywhere: on the Newborn monument repainted every year, along Bill Clinton Boulevard or in front of the George W. Bush statue. The city blends Ottoman architecture, Yugoslav-era buildings and modern construction in a vibrant, warm atmosphere. Its crowded cafés, markets and emerging arts scene make it an endearing stop.", es: "Pristina es una capital joven y dinámica donde la independencia proclamada en 2008 se percibe por todas partes: en el monumento Newborn repintado cada año, en el bulevar Bill Clinton o frente a la estatua de George W. Bush. La ciudad combina arquitectura otomana, edificios yugoslavos y construcciones modernas en una atmósfera vibrante y cálida. Sus cafés abarrotados, mercados y escena artística emergente la convierten en una parada entrañable.", de: "Pristina ist eine junge und dynamische Hauptstadt, in der die 2008 ausgerufene Unabhängigkeit überall zu sehen ist: am jedes Jahr neu gestrichenen Newborn-Denkmal, auf dem Bill Clinton Boulevard oder vor der Statue von George W. Bush. Die Stadt vereint osmanische Architektur, jugoslawische Gebäude und moderne Bauten in einer lebendigen und warmen Atmosphäre. Die überfüllten Cafés, Märkte und die aufstrebende Kunstszene machen es zu einem liebenswerten Zwischenstopp.",
      },
      wikipedia: "Pristina",
      tags: ["Ville", "Modernité", "Culture", "Histoire", "Gastronomie"],
      mustSee: [
        { name: { fr: "Monument Newborn — sculpture emblématique de l'indépendance de 2008", en: "Newborn monument — iconic sculpture marking 2008 independence", es: "Monumento Newborn — escultura emblemática de la independencia de 2008", de: "Newborn Monument – ikonische Skulptur der Unabhängigkeit 2008" }, wikipedia: "Newborn_monument" },
        { name: { fr: "Boulevard Bill Clinton — avenue principale avec statue du 42e président américain", en: "Bill Clinton Boulevard — main avenue with a statue of the 42nd US president", es: "Bulevar Bill Clinton — avenida principal con estatua del 42º presidente de EE. UU.", de: "Bill Clinton Boulevard – Hauptstraße mit Statue des 42. amerikanischen Präsidenten" }, wikipedia: "Bill_Clinton_Boulevard" },
        { name: { fr: "Mosquée impériale (Xhamia e Mbretit) — mosquée ottomane du XVe siècle", en: "Imperial Mosque (Xhamia e Mbretit) — 15th-century Ottoman mosque", es: "Mezquita Imperial (Xhamia e Mbretit) — mezquita otomana del siglo XV", de: "Kaiserliche Moschee (Xhamia e Mbretit) – osmanische Moschee aus dem 15. Jahrhundert" }, wikipedia: "File:Xhamia_e_Madhe_Prishtine.JPG" },
        { name: { fr: "Musée du Kosovo — collections archéologiques et ethnographiques nationales", en: "Kosovo Museum — national archaeological and ethnographic collections", es: "Museo de Kosovo — colecciones arqueológicas y etnográficas nacionales", de: "Kosovo-Museum – nationale archäologische und ethnografische Sammlungen" }, wikipedia: "Kosovo_Museum" },
      ],
    },
    {
      id: 2,
      name: "Prizren",
      region: { fr: "Sud", en: "South", es: "Sur", de: "Süden" },
      description: {
        fr: "Prizren est la perle ottomane du Kosovo, ville historique dont les ruelles pavées, les ponts de pierre et les mosquées du XVIe siècle évoquent directement Istanbul ou Sarajevo. Nichée au pied des montagnes de Sharr et traversée par la rivière Bistrica, la ville est un joyau architectural préservé. Le festival international du film (DokuFest) en fait chaque été une destination culturelle animée.", en: "Prizren is Kosovo's Ottoman pearl, a historic town whose cobbled streets, stone bridges and 16th-century mosques evoke Istanbul or Sarajevo. Nestled at the foot of the Sharr Mountains and crossed by the Bistrica river, the town is a well-preserved architectural gem. The international DokuFest film festival makes it a lively cultural destination every summer.", es: "Prizren es la perla otomana de Kosovo, una ciudad histórica cuyas calles empedradas, puentes de piedra y mezquitas del siglo XVI evocan directamente Estambul o Sarajevo. Enclavada al pie de las montañas Sharr y atravesada por el río Bistrica, la ciudad es una joya arquitectónica bien conservada. El festival internacional de cine (DokuFest) la convierte cada verano en un animado destino cultural.", de: "Prizren ist die osmanische Perle des Kosovo, eine historische Stadt, deren Kopfsteinpflasterstraßen, Steinbrücken und Moscheen aus dem 16. Jahrhundert direkt an Istanbul oder Sarajevo erinnern. Die Stadt liegt am Fuße des Sharr-Gebirges und wird vom Fluss Bistrica durchquert. Sie ist ein erhaltenes architektonisches Juwel. Das internationale Filmfestival (DokuFest) macht es jeden Sommer zu einem lebhaften Kulturziel.",
      },
      wikipedia: "Prizren",
      tags: ["Histoire", "Architecture", "Culture"],
      mustSee: [
        { name: { fr: "Forteresse de Prizren — citadelle médiévale dominant la ville", en: "Prizren Fortress — medieval citadel overlooking the town", es: "Fortaleza de Prizren — ciudadela medieval que domina la ciudad", de: "Festung Prizren – mittelalterliche Zitadelle, die die Stadt dominiert" }, wikipedia: "Prizren_Fortress" },
        { name: { fr: "Pont de pierre ottoman — pont du XVIe siècle sur la Bistrica", en: "Ottoman stone bridge — 16th-century bridge over the Bistrica", es: "Puente de piedra otomano — puente del siglo XVI sobre el Bistrica", de: "Osmanische Steinbrücke – Brücke über die Bistrica aus dem 16. Jahrhundert" }, wikipedia: "File:PrizrenStoneBridge.jpg" },
        { name: { fr: "Mosquée de Sinan Pacha — mosquée ottomane du XVIe siècle", en: "Sinan Pasha Mosque — 16th-century Ottoman mosque", es: "Mezquita de Sinan Pasha — mezquita otomana del siglo XVI", de: "Sinan-Pascha-Moschee – osmanische Moschee aus dem 16. Jahrhundert" }, wikipedia: "File:Sinan Pasha Mosque, Prizren, Kosovo.jpg" },
        { name: { fr: "Cathédrale orthodoxe Saint-Georges — église médiévale restaurée", en: "St. George Orthodox Cathedral — restored medieval church", es: "Catedral ortodoxa de San Jorge — iglesia medieval restaurada", de: "Orthodoxe St.-Georgs-Kathedrale – restaurierte mittelalterliche Kirche" }, wikipedia: "File:St._George_Cathedral_(Saborni_hram_Svetog_Đorđa),_Prizren.JPG" },
      ],
    },
    {
      id: 3,
      name: { fr: "Canyon de Rugova", en: "Rugova Canyon", es: "Cañón de Rugova", de: "Rugova-Schlucht" },
      region: "Peja/Peć",
      description: {
        fr: "Le canyon de Rugova, près de Peja, est l'un des sites naturels les plus spectaculaires des Balkans, avec ses parois calcaires vertigineuses atteignant 1 000 mètres de hauteur. La gorge traverse les Alpes dinariques et offre des itinéraires de randonnée et d'escalade exceptionnels. À l'entrée du canyon se trouve le monastère des Patriarches de Peć, l'un des sites religieux orthodoxes les plus sacrés de la région.", en: "Rugova Canyon, near Peja, is one of the most spectacular natural sites in the Balkans, with vertiginous limestone walls reaching 1,000 metres high. The gorge cuts through the Dinaric Alps and offers exceptional hiking and climbing routes. At the entrance to the canyon stands the Patriarchate of Peć monastery, one of the most sacred Orthodox religious sites in the region.", es: "El cañón de Rugova, cerca de Peja, es uno de los enclaves naturales más espectaculares de los Balcanes, con sus vertiginosas paredes calizas que alcanzan los 1.000 metros de altura. El desfiladero atraviesa los Alpes Dináricos y ofrece rutas excepcionales de senderismo y escalada. A la entrada del cañón se encuentra el monasterio del Patriarcado de Peć, uno de los sitios religiosos ortodoxos más sagrados de la región.", de: "Die Rugova-Schlucht in der Nähe von Peja ist mit ihren schwindelerregenden Kalksteinwänden, die eine Höhe von 1.000 Metern erreichen, eine der spektakulärsten Naturstätten auf dem Balkan. Die Schlucht verläuft durch die Dinarischen Alpen und bietet außergewöhnliche Wander- und Kletterrouten. Am Eingang der Schlucht befindet sich das Kloster der Patriarchen von Peć, eine der heiligsten orthodoxen religiösen Stätten in der Region.",
      },
      wikipedia: "Rugova_Canyon",
      tags: ["Nature", "Randonnée", "Montagne", "Ski"],
      mustSee: [
        { name: { fr: "Canyon de Rugova — gorge calcaire de 25 km dans les Alpes dinariques", en: "Rugova Canyon — 25 km limestone gorge in the Dinaric Alps", es: "Cañón de Rugova — garganta caliza de 25 km en los Alpes Dináricos", de: "Rugova Canyon – 25 km lange Kalksteinschlucht in den Dinarischen Alpen" }, wikipedia: "Rugova_Canyon" },
        { name: { fr: "Monastère des Patriarches de Peć — ensemble monastique médiéval", en: "Patriarchate of Peć — medieval monastic complex", es: "Patriarcado de Peć — conjunto monástico medieval", de: "Kloster der Patriarchen von Peć – mittelalterliche Klosteranlage" }, wikipedia: "File:Patriarchate_of_Peć_2010.JPG" },
        { name: { fr: "Peja (Peć) — ville à l'entrée du canyon, marché animé", en: "Peja (Peć) — town at the canyon's entrance, lively market", es: "Peja (Peć) — ciudad a la entrada del cañón, mercado animado", de: "Peja (Peć) – Stadt am Eingang der Schlucht, lebhafter Markt" }, wikipedia: "Peja" },
        { name: { fr: "Alpes albanaises — randonnées vers le Prokletije", en: "Albanian Alps — hikes towards the Prokletije", es: "Alpes albaneses — senderismo hacia el Prokletije", de: "Albanische Alpen – Wanderungen nach Prokletije" }, wikipedia: "File:Accursed_Mountains_in_the_West_part_of_Kosovo_(Albania,_Montenegro_and_Kosovo).jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Monastère de Dečani", en: "Dečani Monastery", es: "Monasterio de Dečani", de: "Decani-Kloster" },
      region: { fr: "Deçan", en: "Deçan", es: "Deçan", de: "Decan" },
      description: {
        fr: "Le monastère de Visoki Dečani, inscrit au patrimoine mondial de l'UNESCO, est un chef-d'œuvre de l'architecture médiévale serbe du XIVe siècle, construit par le roi Stefan Dečanski. Son église abbatiale conserve des fresques byzantines parmi les plus belles et les mieux préservées des Balkans. Ce monastère encore actif est protégé par la KFOR en raison des tensions interethniques.", en: "The Visoki Dečani monastery, a UNESCO World Heritage site, is a masterpiece of 14th-century Serbian medieval architecture, built by King Stefan Dečanski. Its abbey church holds Byzantine frescoes among the finest and best preserved in the Balkans. This still-active monastery is protected by KFOR due to interethnic tensions.", es: "El monasterio de Visoki Dečani, declarado Patrimonio de la Humanidad UNESCO, es una obra maestra de la arquitectura medieval serbia del siglo XIV, construido por el rey Stefan Dečanski. Su iglesia abacial conserva frescos bizantinos entre los más bellos y mejor conservados de los Balcanes. Este monasterio, aún activo, está protegido por la KFOR debido a las tensiones interétnicas.", de: "Das Kloster Visoki Dečani, ein UNESCO-Weltkulturerbe, ist ein Meisterwerk serbischer mittelalterlicher Architektur aus dem 14. Jahrhundert, erbaut von König Stefan Dečanski. Die Abteikirche beherbergt einige der schönsten und am besten erhaltenen byzantinischen Fresken auf dem Balkan. Dieses noch aktive Kloster steht aufgrund interethnischer Spannungen unter dem Schutz der KFOR.",
      },
      wikipedia: "Visoki_Dečani",
      tags: ["UNESCO", "Spiritualité", "Culture", "Histoire"],
      mustSee: [
        { name: { fr: "Église abbatiale — chef-d'œuvre roman-byzantin du XIVe siècle", en: "Abbey church — 14th-century Romanesque-Byzantine masterpiece", es: "Iglesia abacial — obra maestra románico-bizantina del siglo XIV", de: "Abteikirche – romanisch-byzantinisches Meisterwerk aus dem 14. Jahrhundert" }, wikipedia: "Visoki_Dečani" },
        { name: { fr: "Fresques intérieures — cycle de peintures byzantines parmi les mieux conservées", en: "Interior frescoes — cycle of Byzantine paintings among the best preserved", es: "Frescos interiores — ciclo de pinturas bizantinas entre las mejor conservadas", de: "Innenfresken – Zyklus byzantinischer Gemälde unter den am besten erhaltenen" }, wikipedia: "File:Baptism of the Eunuch, Visoki Dečani.jpg" },
        { name: { fr: "Tombeau de Stefan Dečanski — mausolée royal médiéval", en: "Tomb of Stefan Dečanski — medieval royal mausoleum", es: "Tumba de Stefan Dečanski — mausoleo real medieval", de: "Grab von Stefan Dečanski – mittelalterliches königliches Mausoleum" }, wikipedia: "Stefan_Dečanski" },
        { name: { fr: "Forêt environnante — cadre naturel protégé autour du monastère", en: "Surrounding forest — protected natural setting around the monastery", es: "Bosque circundante — entorno natural protegido alrededor del monasterio", de: "Umliegender Wald – geschützte Naturlandschaft rund um das Kloster" }, wikipedia: "Deçan" },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "Le Kosovo utilise l'euro comme monnaie officielle sans être membre de la zone euro. C'est l'une des destinations les moins chères des Balkans, avec un excellent rapport qualité-prix pour l'hébergement et la restauration.", en: "Kosovo uses the euro as its official currency without being a member of the eurozone. It's one of the cheapest destinations in the Balkans, with excellent value for money on accommodation and dining.", es: "Kosovo utiliza el euro como moneda oficial sin ser miembro de la zona euro. Es uno de los destinos más baratos de los Balcanes, con una excelente relación calidad-precio en alojamiento y restauración.", de: "Kosovo verwendet den Euro als offizielle Währung, ohne Mitglied der Eurozone zu sein. Es ist eines der günstigsten Reiseziele auf dem Balkan und bietet ein hervorragendes Preis-Leistungs-Verhältnis für Unterkunft und Verpflegung.",
    },
    currency: "EUR",
    exchangeRate: { fr: "Monnaie locale : Euro (EUR)", en: "Local currency: Euro (EUR)", es: "Moneda local: euro (EUR)", de: "Landeswährung: Euro (EUR)" },
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Hostel / chambre économique", en: "Hostel / budget room", es: "Hostel / habitación económica", de: "Hostel/Economy-Zimmer" }, price: "10–18 €" },
          { label: { fr: "Hôtel 3★ à Pristina", en: "3★ hotel in Pristina", es: "Hotel 3★ en Pristina", de: "3★ Hotel in Priština" }, price: "35–60 €" },
          { label: { fr: "Guesthouse de charme", en: "Charming guesthouse", es: "Guesthouse con encanto", de: "Charmantes Gästehaus" }, price: "25–50 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Qebapa / flija (plat local)", en: "Qebapa / flija (local dish)", es: "Qebapa / flija (plato local)", de: "Qebapa / Flija (lokales Gericht)" }, price: "3–6 €" },
          { label: { fr: "Repas restaurant midi", en: "Lunch at a restaurant", es: "Comida en restaurante al mediodía", de: "Mittagsessen im Restaurant" }, price: "5–10 €" },
          { label: { fr: "Restaurant dîner pour deux", en: "Dinner for two at a restaurant", es: "Cena para dos en restaurante", de: "Abendessen im Restaurant für zwei Personen" }, price: "20–35 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bus urbain à Pristina", en: "City bus in Pristina", es: "Autobús urbano en Pristina", de: "Stadtbus in Pristina" }, price: "0,50 €" },
          { label: { fr: "Bus Pristina–Prizren", en: "Bus Pristina–Prizren", es: "Autobús Pristina–Prizren", de: "Bus Pristina–Prizren" }, price: "5–8 €" },
          { label: { fr: "Taxi (10 km)", en: "Taxi (10 km)", es: "Taxi (10 km)", de: "Taxi (10 km)" }, price: "5–8 €" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Entrée musée national", en: "National museum entrance", es: "Entrada al museo nacional", de: "Eingang zum Nationalmuseum" }, price: "2–4 €" },
          { label: { fr: "Randonnée guidée canyon de Rugova", en: "Guided hike in Rugova Canyon", es: "Senderismo guiado por el cañón de Rugova", de: "Geführte Wanderung durch die Rugova-Schlucht" }, price: "15–30 €" },
          { label: { fr: "Visite monastère de Dečani", en: "Dečani Monastery visit", es: "Visita al monasterio de Dečani", de: "Besuchen Sie das Decani-Kloster" }, price: { fr: "gratuit", en: "free", es: "gratis", de: "frei" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "25–40 €/j", desc: { fr: "Hostel, cuisine locale très bon marché, bus, randonnées gratuites.", en: "Hostel, very cheap local food, bus, free hikes.", es: "Hostel, cocina local muy barata, autobús, senderismo gratuito.", de: "Hostel, sehr preiswerte lokale Küche, Busse, kostenlose Wanderungen." }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "55–90 €/j", desc: { fr: "Hôtel 3★, bons restaurants, voiture de location pour explorer la campagne.", en: "3★ hotel, good restaurants, rental car to explore the countryside.", es: "Hotel 3★, buenos restaurantes, coche de alquiler para explorar el campo.", de: "3★ Hotel, gute Restaurants, Mietwagen zur Erkundung der Landschaft." }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "7 jours", en: "7 days", es: "7 días", de: "7 Tage" },
      route: { fr: "Pristina → Prizren → Peja/Rugova → Dečani", en: "Pristina → Prizren → Peja/Rugova → Dečani", es: "Pristina → Prizren → Peja/Rugova → Dečani", de: "Pristina → Prizren → Peja/Rugova → Dečani" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "450 – 650 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Pristina", en: "Return flight Paris–Pristina", es: "Vuelo ida y vuelta Madrid–Pristina", de: "Hin- und Rückflug Paris–Pristina" }, amount: "150–250 €" },
            { label: { fr: "Hébergement (6 nuits)", en: "Accommodation (6 nights)", es: "Alojamiento (6 noches)", de: "Unterkunft (6 Nächte)" }, amount: "70–110 €" },
            { label: { fr: "Transports locaux", en: "Local transport", es: "Transporte local", de: "Nahverkehr" }, amount: "30–50 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "90–140 €" },
            { label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" }, amount: "30–50 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "800 – 1 100 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Pristina", en: "Return flight Paris–Pristina", es: "Vuelo ida y vuelta Madrid–Pristina", de: "Hin- und Rückflug Paris–Pristina" }, amount: "200–350 €" },
            { label: { fr: "Hébergement (6 nuits)", en: "Accommodation (6 nights)", es: "Alojamiento (6 noches)", de: "Unterkunft (6 Nächte)" }, amount: "240–380 €" },
            { label: { fr: "Transports locaux + location", en: "Local transport + rental car", es: "Transporte local + alquiler de coche", de: "Nahverkehr + Vermietung" }, amount: "80–120 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "150–200 €" },
            { label: { fr: "Activités guidées", en: "Guided activities", es: "Actividades guiadas", de: "Geführte Aktivitäten" }, amount: "60–100 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "Vols directs ou avec escale vers Pristina (aéroport Adem Jashari), 2h30–4h. Wizz Air et Air France desservent la capitale.", en: "Direct or connecting flights to Pristina (Adem Jashari Airport), 2h30–4h. Wizz Air and Air France serve the capital.", es: "Vuelos directos o con escala hacia Pristina (aeropuerto Adem Jashari), 2h30–4h. Wizz Air y Air France conectan con la capital.", de: "Direkt- oder Zwischenflüge nach Pristina (Flughafen Adem Jashari), 2 Std. 30 Min. bis 4 Std. Wizz Air und Air France fliegen die Hauptstadt an." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Pas de visa pour les ressortissants français. La carte nationale d'identité française est généralement acceptée. Le Kosovo ne fait pas partie de Schengen.", en: "No visa required for French citizens. The French national ID card is generally accepted. Kosovo is not part of Schengen.", es: "Sin visado para ciudadanos de la UE. El DNI suele ser aceptado. Kosovo no forma parte de Schengen.", de: "Kein Visum für französische Staatsangehörige. Der französische Personalausweis wird allgemein akzeptiert. Kosovo ist nicht Teil von Schengen." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Euro (EUR) utilisé comme monnaie officielle. CB acceptée dans les grandes villes, prévoir du cash en zone rurale.", en: "Euro (EUR) used as official currency. Cards accepted in major cities, bring cash in rural areas.", es: "Euro (EUR) utilizado como moneda oficial. Tarjeta aceptada en las grandes ciudades, llevar efectivo en zonas rurales.", de: "Als offizielle Währung wird der Euro (EUR) verwendet. Kreditkarten werden in Großstädten akzeptiert, in ländlichen Gebieten Bargeld mitnehmen." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Albanais (langue majoritaire) et serbe (co-officiel). L'anglais est bien compris chez les jeunes et dans les établissements touristiques.", en: "Albanian (majority language) and Serbian (co-official). English is well understood among young people and in tourist establishments.", es: "Albanés (lengua mayoritaria) y serbio (cooficial). El inglés se entiende bien entre los jóvenes y en los establecimientos turísticos.", de: "Albanisch (Mehrheitssprache) und Serbisch (Co-Amtssprache). Englisch wird von jungen Leuten und in touristischen Einrichtungen gut verstanden." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type C/F, 230V. Même standard qu'en Europe occidentale.", en: "Type C/F, 230V. Same standard as Western Europe.", es: "Tipo C/F, 230V. Mismo estándar que en Europa occidental.", de: "Typ C/F, 230V. Gleicher Standard wie in Westeuropa." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Pas de vaccins obligatoires. Assurance voyage recommandée. Qualité des soins variable en dehors de Pristina.", en: "No mandatory vaccines. Travel insurance recommended. Quality of care varies outside Pristina.", es: "Ninguna vacuna obligatoria. Se recomienda seguro de viaje. Calidad de la atención variable fuera de Pristina.", de: "Keine Impfpflicht. Reiseversicherung empfohlen. Die Qualität der Pflege variiert außerhalb von Pristina." } },
    { icon: "🌍", label: { fr: "Reconnaissance internationale", en: "International recognition", es: "Reconocimiento internacional", de: "Internationale Anerkennung" }, value: { fr: "Le Kosovo est reconnu par environ 100 pays dont la France, les USA et l'Allemagne, mais pas par la Russie, la Chine ni l'Espagne. Vérifier les règles d'entrée si vous voyagez ensuite en Serbie.", en: "Kosovo is recognised by around 100 countries including France, the US and Germany, but not by Russia, China or Spain. Check entry rules if you plan to travel on to Serbia.", es: "Kosovo está reconocido por unos 100 países, entre ellos Francia, EE. UU. y Alemania, pero no por Rusia, China ni España. Comprobar las normas de entrada si se viaja después a Serbia.", de: "Kosovo wird von rund 100 Ländern anerkannt, darunter Frankreich, die USA und Deutschland, nicht jedoch von Russland, China oder Spanien. Überprüfen Sie die Einreisebestimmungen, wenn Sie anschließend nach Serbien reisen." } },
    { icon: "🏔️", label: { fr: "Randonnée", en: "Hiking", es: "Senderismo", de: "Wandern" }, value: { fr: "Les Alpes albanaises (Prokletije) offrent des itinéraires difficiles mais magnifiques. La Via Dinarica traverse le Kosovo du nord au sud.", en: "The Albanian Alps (Prokletije) offer challenging but stunning routes. The Via Dinarica crosses Kosovo from north to south.", es: "Los Alpes albaneses (Prokletije) ofrecen rutas exigentes pero magníficas. La Via Dinarica atraviesa Kosovo de norte a sur.", de: "Die albanischen Alpen (Prokletije) bieten anspruchsvolle, aber wunderschöne Routen. Die Via Dinarica durchquert den Kosovo von Norden nach Süden." } },
  ],
};
