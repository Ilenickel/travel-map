export const LATVIA = {
  code: "LVA",
  numericId: 428,
  name: { fr: "Lettonie", en: "Latvia", es: "Letonia", de: "Lettland" },
  emoji: "🇱🇻",
  capital: { fr: "Riga", en: "Riga", es: "Riga", de: "Riga" },
  language: { fr: "Letton", en: "Latvian", es: "Letón", de: "Lettisch" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)", es: "Euro (EUR)", de: "Euro (EUR)" },
  timezone: "UTC+2 (été UTC+3)",
  filter: {
    budgetMin: 50, budgetMid: 90,
    tripMin: 900, tripMid: 1900,
  },
  criteria: {
    unesco: 2,
    nature: 2,
    randonnee: 2,
    gastronomie: 1,
    architecture: 2,
    desert: 0,
    safari: 0,
    ski: 2,
    ville: 2,
    plage: 2,
    plongee: 1,
  },
  description: {
    fr: "La Lettonie est le cœur des États baltes : Riga, sa capitale, possède le plus grand ensemble d'architecture Art Nouveau d'Europe (800 bâtiments classés UNESCO) et une Vieille Ville médiévale hanséatique. Les plages de sable de Jūrmala (35km de côte), les châteaux de Gauja et la forêt primaire de Slītere font de la Lettonie une destination nature et culture abordable.", en: "Latvia is the heart of the Baltic states: Riga, its capital, boasts Europe's largest collection of Art Nouveau architecture (800 UNESCO-listed buildings) and a medieval Hanseatic Old Town. The sandy beaches of Jūrmala (35km of coastline), the castles of Gauja and the primeval Slītere forest make Latvia an affordable nature and culture destination.", es: "Letonia es el corazón de los estados bálticos: Riga, su capital, cuenta con el mayor conjunto de arquitectura Art Nouveau de Europa (800 edificios Patrimonio UNESCO) y un casco antiguo medieval hanseático. Las playas de arena de Jūrmala (35km de costa), los castillos de Gauja y el bosque primario de Slītere convierten a Letonia en un destino de naturaleza y cultura asequible.", de: "Lettland ist das Herz der baltischen Staaten: Riga, seine Hauptstadt, verfügt über die größte Sammlung an Jugendstilarchitektur in Europa (800 UNESCO-geschützte Gebäude) und eine mittelalterliche Hansestadt. Die Sandstrände von Jūrmala (35 km Küstenlinie), die Burgen von Gauja und der Primärwald von Slītere machen Lettland zu einem erschwinglichen Natur- und Kulturziel.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Août", en: "June – August", es: "Junio – Agosto", de: "Juni – August" },
      label: { fr: "Été balte", en: "Baltic summer", es: "Verano báltico", de: "Baltischer Sommer" },
      color: "#22c55e",
      description: {
        fr: "Longues journées lumineuses (17–22°C), plages de Jūrmala animées, festivals (Jāņi, la Saint-Jean la plus folle d'Europe). Meilleure saison pour Riga.", en: "Long bright days (17–22°C), lively Jūrmala beaches, festivals (Jāņi, Europe's wildest Midsummer). The best season for Riga.", es: "Días largos y luminosos (17–22°C), animadas playas de Jūrmala, festivales (Jāņi, la fiesta de San Juan más salvaje de Europa). La mejor temporada para Riga.", de: "Lange, helle Tage (17–22 °C), lebhafte Strände in Jūrmala, Festivals (Jāņi, der verrückteste Mittsommer in Europa). Beste Saison für Riga.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Janvier", en: "December – January", es: "Diciembre – Enero", de: "Dezember – Januar" },
      label: { fr: "Noël balte", en: "Baltic Christmas", es: "Navidad báltica", de: "Baltische Weihnachten" },
      color: "#f59e0b",
      description: {
        fr: "Marchés de Noël de Riga (place de la Dôme), fêtes traditionnelles, forêts enneigées. Froid (-5°C) mais atmosphère unique.", en: "Riga's Christmas markets (Dome Square), traditional festivities, snowy forests. Cold (-5°C) but a unique atmosphere.", es: "Mercados navideños de Riga (plaza del Domo), festividades tradicionales, bosques nevados. Frío (-5°C) pero un ambiente único.", de: "Rigaer Weihnachtsmärkte (Domplatz), traditionelle Feste, schneebedeckte Wälder. Kalt (-5°C), aber einzigartige Atmosphäre.",
      },
      icon: "🎄",
    },
  ],

  weatherCities: [
    {
      id: "riga",
      name: "Riga",
      region: { fr: "Côte de la mer Baltique", en: "Baltic Sea coast", es: "Costa del mar Báltico", de: "Ostseeküste" },
      data: [
        { month: "Jan", temp: -4, rain: 40,  icon: "❄️" },
        { month: "Fév", temp: -4, rain: 30,  icon: "❄️" },
        { month: "Mar", temp:  0, rain: 35,  icon: "❄️" },
        { month: "Avr", temp:  7, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 13, rain: 45,  icon: "⛅" },
        { month: "Jun", temp: 16, rain: 65,  icon: "☀️" },
        { month: "Jul", temp: 19, rain: 80,  icon: "☀️" },
        { month: "Aoû", temp: 18, rain: 75,  icon: "☀️" },
        { month: "Sep", temp: 13, rain: 65,  icon: "⛅" },
        { month: "Oct", temp:  8, rain: 60,  icon: "⛅" },
        { month: "Nov", temp:  3, rain: 55,  icon: "⛅" },
        { month: "Déc", temp: -1, rain: 45,  icon: "❄️" },
      ],
    },
    {
      id: "jurmala",
      name: "Jūrmala",
      region: { fr: "Côte du golfe de Riga", en: "Gulf of Riga coast", es: "Costa del golfo de Riga", de: "Küste des Golfs von Riga" },
      data: [
        { month: "Jan", temp: -4, rain: 40,  icon: "❄️" },
        { month: "Fév", temp: -4, rain: 30,  icon: "❄️" },
        { month: "Mar", temp:  0, rain: 35,  icon: "❄️" },
        { month: "Avr", temp:  7, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 12, rain: 40,  icon: "⛅" },
        { month: "Jun", temp: 16, rain: 60,  icon: "☀️" },
        { month: "Jul", temp: 19, rain: 70,  icon: "☀️" },
        { month: "Aoû", temp: 18, rain: 70,  icon: "☀️" },
        { month: "Sep", temp: 13, rain: 60,  icon: "⛅" },
        { month: "Oct", temp:  8, rain: 55,  icon: "⛅" },
        { month: "Nov", temp:  3, rain: 55,  icon: "⛅" },
        { month: "Déc", temp: -1, rain: 45,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Riga — Art Nouveau et Hanséatique", en: "Riga — Art Nouveau and Hanseatic", es: "Riga — Art Nouveau y hanseática", de: "Riga – Jugendstil und Hanseatismus" },
      region: { fr: "Capitale", en: "Capital", es: "Capital", de: "Hauptstadt" },
      description: {
        fr: "Riga possède le plus grand ensemble Art Nouveau d'Europe : 800 bâtiments ornés de masques, atlantes et ornements floraux, concentrés dans le quartier Alberta iela. La Vieille Ville médiévale (UNESCO) avec la cathédrale du Dôme (plus grand orgue des pays baltes), la Maison des Têtes Noires et les ruelles pavées est l'une des plus belles du nord de l'Europe.", en: "Riga has Europe's largest collection of Art Nouveau buildings: 800 structures adorned with masks, atlantes and floral ornaments, concentrated in the Alberta iela district. The medieval Old Town (UNESCO) with Dome Cathedral (the largest organ in the Baltic states), the House of the Blackheads and cobbled streets is one of the most beautiful in Northern Europe.", es: "Riga cuenta con el mayor conjunto Art Nouveau de Europa: 800 edificios adornados con máscaras, atlantes y ornamentos florales, concentrados en el barrio de Alberta iela. El casco antiguo medieval (UNESCO) con la catedral del Domo (el órgano más grande de los países bálticos), la Casa de las Cabezas Negras y las calles empedradas es uno de los más bellos del norte de Europa.", de: "Riga verfügt über das größte Jugendstil-Ensemble Europas: 800 mit Masken, Atlantischen und Blumenornamenten geschmückte Gebäude, konzentriert im Stadtteil Alberta iela. Die mittelalterliche Altstadt (UNESCO) mit der Domkathedrale (größte Orgel im Baltikum), dem Schwarzhäupterhaus und den gepflasterten Straßen gehört zu den schönsten in Nordeuropa.",
      },
      wikipedia: "Riga",
      tags: ["Architecture", "UNESCO", "Histoire", "Culture", "Ville", "Gastronomie"],
      mustSee: [
        { name: { fr: "Alberta iela — rue Art Nouveau, chef-d'œuvre de Mikhail Eisenstein", en: "Alberta iela — Art Nouveau street, masterpiece by Mikhail Eisenstein", es: "Alberta iela — calle Art Nouveau, obra maestra de Mijaíl Eisenstein", de: "Alberta iela – Jugendstilstraße, Meisterwerk von Michail Eisenstein" }, wikipedia: "File:Edificio_modernista_en_Alberta_iela_2a,_Riga,_Letonia,_2012-08-07,_DD_02.JPG" },
        { name: { fr: "Maison des Têtes Noires (XVe s.) reconstruite — façade dorée", en: "House of the Blackheads (15th c.), rebuilt — golden façade", es: "Casa de las Cabezas Negras (s. XV) reconstruida — fachada dorada", de: "Maison des Têtes Noires (15. Jahrhundert) wieder aufgebaut – goldene Fassade" }, wikipedia: "File:House of the Blackheads, Riga, Latvia-24June2009.jpg" },
        { name: { fr: "Cathédrale du Dôme et son orgue historique (XIIIe s.)", en: "Dome Cathedral and its historic organ (13th c.)", es: "Catedral del Domo y su órgano histórico (s. XIII)", de: "Domkathedrale und ihre historische Orgel (13. Jahrhundert)" }, wikipedia: "Riga_Cathedral" },
        { name: { fr: "Marché central de Riga — dans des hangars de zeppelins reconvertis", en: "Riga Central Market — housed in converted zeppelin hangars", es: "Mercado central de Riga — en hangares de zepelines reconvertidos", de: "Rigaer Zentralmarkt – in umgebauten Zeppelinhangars" }, wikipedia: "Riga_Central_Market" },
      ],
    },
    {
      id: 2,
      name: { fr: "Jūrmala — Plages de sable et villas en bois", en: "Jūrmala — Sandy beaches and wooden villas", es: "Jūrmala — Playas de arena y villas de madera", de: "Jūrmala – Sandstrände und Holzvillen" },
      region: { fr: "Golfe de Riga", en: "Gulf of Riga", es: "Golfo de Riga", de: "Golf von Riga" },
      description: {
        fr: "Jūrmala est la station balnéaire historique de la noblesse russe et soviétique : 35km de plages de sable fin sur le golfe de Riga (eau plus chaude que la Baltique ouverte), et un alignement unique de villas en bois sculptées du XIXe siècle dans la pinède. À 30 minutes de train depuis Riga, c'est la sortie estivale incontournable des Rigains.", en: "Jūrmala is the historic seaside resort of the Russian and Soviet nobility: 35km of fine sandy beaches on the Gulf of Riga (warmer water than the open Baltic), and a unique row of carved 19th-century wooden villas in the pine forest. Just 30 minutes by train from Riga, it's the essential summer getaway for locals.", es: "Jūrmala es la histórica estación balnearia de la nobleza rusa y soviética: 35km de playas de arena fina en el golfo de Riga (aguas más cálidas que el Báltico abierto), y una hilera única de villas de madera talladas del siglo XIX en el pinar. A solo 30 minutos en tren de Riga, es la escapada veraniega imprescindible de los locales.", de: "Jūrmala ist der historische Badeort des russischen und sowjetischen Adels: 35 km feine Sandstrände am Golf von Riga (Wasser wärmer als die offene Ostsee) und eine einzigartige Anordnung geschnitzter Holzvillen aus dem 19. Jahrhundert im Kiefernwald. 30 Minuten mit dem Zug von Riga entfernt ist dies der unverzichtbare Sommerausflug nach Rigains.",
      },
      wikipedia: "Jūrmala",
      tags: ["Plage", "Architecture", "Nature"],
      mustSee: [
        { name: { fr: "Plage de Majori — sable blanc et mer chaude du golfe", en: "Majori Beach — white sand and warm gulf waters", es: "Playa de Majori — arena blanca y aguas cálidas del golfo", de: "Majori Beach – weißer Sand und warmes Golfmeer" }, wikipedia: "File:Jurmala 2017 05.jpg" },
        { name: { fr: "Villas en bois Art Nouveau sculptées dans la pinède", en: "Carved Art Nouveau wooden villas in the pine forest", es: "Villas de madera Art Nouveau talladas en el pinar", de: "In den Kiefernwald geschnitzte Jugendstil-Holzvillen" }, wikipedia: "File:Kāpu iela 80 Jūrmala.jpg" },
        { name: { fr: "Jomas iela — rue piétonne animée avec cafés et marchés", en: "Jomas iela — lively pedestrian street with cafés and markets", es: "Jomas iela — animada calle peatonal con cafés y mercados", de: "Jomas iela – belebte Fußgängerzone mit Cafés und Märkten" }, wikipedia: "File:Jomas Street, Jurmala, Latvia.png" },
      ],
    },
    {
      id: 3,
      name: { fr: "Parc national de Gauja — Châteaux et grès", en: "Gauja National Park — Castles and sandstone", es: "Parque nacional de Gauja — Castillos y arenisca", de: "Nationalpark Gauja – Burgen und Sandsteine" },
      region: { fr: "Vidzeme (nord-est)", en: "Vidzeme (north-east)", es: "Vidzeme (noreste)", de: "Vidzeme (Nordosten)" },
      description: {
        fr: "Le parc national de Gauja est le plus grand de Lettonie : la rivière Gauja a taillé des falaises de grès rouge et des grottes dans la forêt. Sigulda, surnommée la 'Suisse lettone', est entourée de trois châteaux médiévaux (Sigulda, Turaida, Krimulda) en ruines dans la forêt. Un circuit de deux jours depuis Riga.", en: "Gauja National Park is Latvia's largest: the Gauja river has carved red sandstone cliffs and caves into the forest. Sigulda, nicknamed 'Latvian Switzerland', is surrounded by three medieval castle ruins (Sigulda, Turaida, Krimulda) in the woods. A two-day trip from Riga.", es: "El parque nacional de Gauja es el más grande de Letonia: el río Gauja ha esculpido acantilados de arenisca roja y cuevas en el bosque. Sigulda, apodada la «Suiza letona», está rodeada de tres castillos medievales en ruinas (Sigulda, Turaida, Krimulda) en el bosque. Una excursión de dos días desde Riga.", de: "Der Gauja-Nationalpark ist der größte in Lettland: Der Fluss Gauja hat rote Sandsteinfelsen und Höhlen in den Wald gegraben. Sigulda, auch „Lettische Schweiz“ genannt, ist von drei mittelalterlichen Burgruinen (Sigulda, Turaida, Krimulda) umgeben, die im Wald verfallen sind. Eine zweitägige Tour ab Riga.",
      },
      wikipedia: "Gauja_National_Park",
      tags: ["Nature", "Architecture", "Randonnée"],
      mustSee: [
        { name: { fr: "Château de Turaida (XIIIe s.) et tour ronde dans la forêt", en: "Turaida Castle (13th c.) and round tower in the forest", es: "Castillo de Turaida (s. XIII) y torre redonda en el bosque", de: "Burg Turaida (13. Jahrhundert) und Rundturm im Wald" }, wikipedia: "File:Turaida_Castle.JPG" },
        { name: { fr: "Grottes de grès de Gutmanis — plus grande grotte des pays baltes", en: "Gutmanis sandstone cave — the largest cave in the Baltic states", es: "Cueva de arenisca de Gutmanis — la cueva más grande de los países bálticos", de: "Gutmanis-Sandsteinhöhlen – größte Höhle im Baltikum" }, wikipedia: "File:Gutmana ala3 8sep07.jpg" },
        { name: { fr: "Falaises de grès rouge le long de la Gauja", en: "Red sandstone cliffs along the Gauja", es: "Acantilados de arenisca roja a lo largo del Gauja", de: "Rote Sandsteinfelsen entlang der Gauja" }, wikipedia: "File:Gauja National Park 14.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Rundale — Versailles balte", en: "Rundāle — the Baltic Versailles", es: "Rundāle — el Versalles báltico", de: "Rundale – Baltisches Versailles" },
      region: { fr: "Zemgale (sud)", en: "Zemgale (south)", es: "Zemgale (sur)", de: "Zemgale (Süden)" },
      description: {
        fr: "Le palais de Rundale est le Versailles des pays baltes : conçu par Rastrelli (l'architecte de l'Ermitage de Saint-Pétersbourg) pour le duc de Courlande au XVIIIe siècle, ses 138 pièces rococo et ses jardins à la française sont parmi les plus beaux d'Europe du Nord. À 80km de Riga, c'est une excursion d'une demi-journée.", en: "Rundāle Palace is the Versailles of the Baltic states: designed by Rastrelli (architect of the Hermitage in Saint Petersburg) for the Duke of Courland in the 18th century, its 138 rococo rooms and French-style gardens are among the finest in Northern Europe. 80km from Riga, it makes for a half-day excursion.", es: "El palacio de Rundāle es el Versalles de los países bálticos: diseñado por Rastrelli (el arquitecto del Hermitage de San Petersburgo) para el duque de Curlandia en el siglo XVIII, sus 138 salas rococó y sus jardines a la francesa están entre los más bellos del norte de Europa. A 80km de Riga, es una excursión de medio día.", de: "Das Schloss Rundale ist das Versailles des Baltikums: Es wurde im 18. Jahrhundert von Rastrelli (dem Architekten der Eremitage von Sankt Petersburg) für den Herzog von Kurland entworfen und seine 138 Rokokozimmer und französischen Gärten gehören zu den schönsten in Nordeuropa. 80 km von Riga entfernt, dies ist ein halbtägiger Ausflug.",
      },
      wikipedia: "File:Rundāle Palace 27.jpg",
      tags: ["Architecture", "Nature"],
      mustSee: [
        { name: { fr: "Salle d'or du palais de Rundale — rococo letton parfait", en: "Golden Hall of Rundāle Palace — Latvian rococo at its finest", es: "Salón Dorado del palacio de Rundāle — el rococó letón en su máxima expresión", de: "Goldenes Zimmer im Schloss Rundale – perfektes lettisches Rokoko" }, wikipedia: "File:Rundale_Palace_reception_hall.JPG" },
        { name: { fr: "Jardins à la française de Rundale — parterres de roses", en: "Rundāle's French-style gardens — rose beds", es: "Jardines a la francesa de Rundāle — parterres de rosas", de: "Rundale Formal Gardens – Rosenbeete" }, wikipedia: "File:Le_château_de_Rundal_(Rundal_Pils)_(6).JPG" },
        { name: { fr: "Exposition de la vie de cour du XVIIIe siècle", en: "Exhibition on 18th-century court life", es: "Exposición sobre la vida cortesana del siglo XVIII", de: "Ausstellung zum Hofleben des 18. Jahrhunderts" }, wikipedia: "File:Le_château_de_Rundal_(Rundal_Pils)_(9).JPG" },
        { name: { fr: "Village de Bauska et château ruiné à la confluence des rivières", en: "Bauska village and its ruined castle at the confluence of two rivers", es: "Pueblo de Bauska y su castillo en ruinas en la confluencia de los ríos", de: "Dorf Bauska und Burgruine am Zusammenfluss der Flüsse" }, wikipedia: "File:Bauska, Rīgas iela - panoramio (3).jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Lettonie utilise l'euro depuis 2014. Les prix sont 30–40% inférieurs à ceux de la France. Riga est la plus chère des trois capitales baltes mais reste très abordable. Les transports en commun sont bon marché et efficaces.", en: "Latvia has used the euro since 2014. Prices are 30–40% lower than in France. Riga is the most expensive of the three Baltic capitals but remains very affordable. Public transport is cheap and efficient.", es: "Letonia utiliza el euro desde 2014. Los precios son entre un 30 y un 40% inferiores a los de Europa occidental. Riga es la más cara de las tres capitales bálticas pero sigue siendo muy asequible. El transporte público es barato y eficiente.", de: "Lettland verwendet den Euro seit 2014. Die Preise sind 30–40 % niedriger als in Frankreich. Riga ist die teuerste der drei baltischen Hauptstädte, bleibt aber sehr erschwinglich. Der öffentliche Nahverkehr ist günstig und effizient.",
    },
    currency: "EUR",
    exchangeRate: { fr: "1€ = 1€ (zone euro)", en: "1€ = 1€ (eurozone)", es: "1€ = 1€ (zona euro)", de: "1€ = 1€ (Eurozone)" },
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Auberge de jeunesse Riga (dortoir ou chambre)", en: "Riga youth hostel (dorm or room)", es: "Albergue juvenil en Riga (dormitorio o habitación)", de: "Riga Hostel (Schlafsaal oder Zimmer)" }, price: "20–40 €", detail: { fr: "Bonne qualité, bien situées", en: "Good quality, well located", es: "Buena calidad, bien ubicados", de: "Gute Qualität, gut gelegen" } },
          { label: { fr: "Hôtel 3★ Riga Vieille Ville", en: "3★ hotel in Riga Old Town", es: "Hotel 3★ en el casco antiguo de Riga", de: "Hotel 3★ Altstadt von Riga" }, price: "60–110 €", detail: { fr: "Souvent dans des bâtiments historiques", en: "Often in historic buildings", es: "A menudo en edificios históricos", de: "Oft in historischen Gebäuden" } },
          { label: { fr: "Villa en bois Jūrmala (location)", en: "Wooden villa in Jūrmala (rental)", es: "Villa de madera en Jūrmala (alquiler)", de: "Holzvilla Jūrmala (Vermietung)" }, price: "50–100 €", detail: { fr: "Charme soviétique et balnéaire", en: "Soviet-era seaside charm", es: "Encanto costero de estilo soviético", de: "Sowjetischer und maritimer Charme" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Pelēkie zirņi (pois gris au lard) + kvass dans une bodega", en: "Pelēkie zirņi (grey peas with bacon) + kvass at a bodega", es: "Pelēkie zirņi (guisantes grises con tocino) + kvas en una bodega", de: "Pelēkie zirņi (graue Erbsen mit Speck) + Kwas in einer Bodega" }, price: "6–10 €", detail: { fr: "Plats lettons traditionnels", en: "Traditional Latvian dishes", es: "Platos letones tradicionales", de: "Traditionelle lettische Gerichte" } },
          { label: { fr: "Restaurant mid-range Riga", en: "Mid-range restaurant in Riga", es: "Restaurante de gama media en Riga", de: "Mittelklasserestaurant Riga" }, price: "12–22 €", detail: { fr: "Cuisine locale et internationale", en: "Local and international cuisine", es: "Cocina local e internacional", de: "Lokale und internationale Küche" } },
          { label: { fr: "Marché central — fromage de ferme, pain de seigle, poisson fumé", en: "Central Market — farmhouse cheese, rye bread, smoked fish", es: "Mercado central — queso de granja, pan de centeno, pescado ahumado", de: "Zentralmarkt – Bauernkäse, Roggenbrot, geräucherter Fisch" }, price: "5–10 €", detail: { fr: "Le meilleur marché des pays baltes", en: "The best market in the Baltic states", es: "El mejor mercado de los países bálticos", de: "Der beste Markt im Baltikum" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Tram + bus Riga (ticket 24h)", en: "Tram + bus in Riga (24h ticket)", es: "Tranvía + autobús en Riga (billete de 24h)", de: "Straßenbahn + Bus Riga (24-Stunden-Ticket)" }, price: "5 €", detail: { fr: "Réseau dense et ponctuel", en: "Dense, punctual network", es: "Red densa y puntual", de: "Dichtes und pünktliches Netz" } },
          { label: { fr: "Train Riga–Jūrmala (30 min)", en: "Train Riga–Jūrmala (30 min)", es: "Tren Riga–Jūrmala (30 min)", de: "Zug Riga–Jūrmala (30 Min.)" }, price: "2 €", detail: { fr: "Départs toutes les 30 min", en: "Departures every 30 min", es: "Salidas cada 30 min", de: "Abfahrt alle 30 Min." } },
          { label: { fr: "Bus Riga–Tallinn ou Vilnius (Lux Express)", en: "Bus Riga–Tallinn or Vilnius (Lux Express)", es: "Autobús Riga–Tallin o Vilna (Lux Express)", de: "Bus Riga–Tallinn oder Vilnius (Lux Express)" }, price: "15–30 €", detail: { fr: "Bus confortables inter-capitales", en: "Comfortable inter-capital buses", es: "Autobuses cómodos entre capitales", de: "Komfortable Busse zwischen den Hauptstädten" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Visite palais de Rundale (entrée + jardins)", en: "Rundāle Palace visit (entrance + gardens)", es: "Visita al palacio de Rundāle (entrada + jardines)", de: "Besuchen Sie das Schloss Rundale (Eingang + Gärten)" }, price: "10 €", detail: { fr: "Balade dans le parc incluse", en: "Park stroll included", es: "Paseo por el parque incluido", de: "Spaziergang im Park inklusive" } },
          { label: { fr: "Concert dans la cathédrale du Dôme (orgue)", en: "Organ concert at Dome Cathedral", es: "Concierto de órgano en la catedral del Domo", de: "Konzert im Dom (Orgel)" }, price: "15–25 €", detail: { fr: "Acoustique exceptionnelle", en: "Exceptional acoustics", es: "Acústica excepcional", de: "Außergewöhnliche Akustik" } },
          { label: { fr: "Tour guidé Art Nouveau Riga (2h à pied)", en: "Guided Art Nouveau walking tour of Riga (2h)", es: "Tour guiado Art Nouveau por Riga (2h a pie)", de: "Rigaer Jugendstil-Führung (2 Stunden zu Fuß)" }, price: "15–25 €", detail: { fr: "Guide francophone disponible", en: "French-speaking guide available", es: "Guía en español disponible", de: "Französischsprachiger Reiseführer verfügbar" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "50–80 €/j", desc: { fr: "Auberge + cuisine locale + transports publics", en: "Hostel + local food + public transport", es: "Albergue + cocina local + transporte público", de: "Hostel + lokale Küche + öffentliche Verkehrsmittel" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "90–160 €/j", desc: { fr: "Hôtel 3★ + restaurants + visites guidées", en: "3★ hotel + restaurants + guided tours", es: "Hotel 3★ + restaurantes + visitas guiadas", de: "3★ Hotel + Restaurants + Führungen" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "7 jours", en: "7 days", es: "7 días", de: "7 Tage" },
      route: {
        fr: "Riga (3j) → Gauja / Sigulda (1j) → Jūrmala (1j) → Rundale (1j) → retour (1j)", en: "Riga (3d) → Gauja / Sigulda (1d) → Jūrmala (1d) → Rundāle (1d) → return (1d)", es: "Riga (3d) → Gauja / Sigulda (1d) → Jūrmala (1d) → Rundāle (1d) → regreso (1d)", de: "Riga (3T) → Gauja / Sigulda (1T) → Jūrmala (1T) → Rundale (1T) → Rückfahrt (1T)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "900 – 1 400 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Riga (Ryanair, Air Baltic)", en: "Return flight Paris–Riga (Ryanair, Air Baltic)", es: "Vuelo ida y vuelta Madrid–Riga (Ryanair, Air Baltic)", de: "Hin- und Rückflug Paris–Riga (Ryanair, Air Baltic)" }, amount: "80–200 €" },
            { label: { fr: "Hébergement (7 nuits)", en: "Accommodation (7 nights)", es: "Alojamiento (7 noches)", de: "Unterkunft (7 Nächte)" }, amount: "200–350 €" },
            { label: { fr: "Transports (train + bus)", en: "Transport (train + bus)", es: "Transporte (tren + autobús)", de: "Transport (Zug + Bus)" }, amount: "80–150 €" },
            { label: { fr: "Nourriture + kvass + marché", en: "Food + kvass + market", es: "Comida + kvas + mercado", de: "Essen + Kwas + Markt" }, amount: "220–380 €" },
            { label: { fr: "Activités + Rundale + Gauja", en: "Activities + Rundāle + Gauja", es: "Actividades + Rundāle + Gauja", de: "Aktivitäten + Rundale + Gauja" }, amount: "100–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "1 900 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Riga", en: "Return flight Paris–Riga", es: "Vuelo ida y vuelta Madrid–Riga", de: "Hin- und Rückflug Paris–Riga" }, amount: "100–250 €" },
            { label: { fr: "Hôtels 3★ (7 nuits)", en: "3★ hotels (7 nights)", es: "Hoteles 3★ (7 noches)", de: "3★ Hotels (7 Nächte)" }, amount: "500–900 €" },
            { label: { fr: "Voiture de location + transports", en: "Rental car + transport", es: "Coche de alquiler + transporte", de: "Mietwagen + Transport" }, amount: "250–400 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "400–700 €" },
            { label: { fr: "Concerts, palais, excursions", en: "Concerts, palace, excursions", es: "Conciertos, palacio, excursiones", de: "Konzerte, Paläste, Ausflüge" }, amount: "250–450 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~3h (Air Baltic direct CDG–Riga, Ryanair Beauvais–Riga). Plusieurs liaisons par semaine.", en: "~3h (Air Baltic direct CDG–Riga, Ryanair Beauvais–Riga). Several flights per week.", es: "~3h (Air Baltic directo, Ryanair). Varias conexiones por semana.", de: "ca. 3 Stunden (Air Baltic direkt CDG–Riga, Ryanair Beauvais–Riga). Mehrere Verbindungen pro Woche." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Aucun visa — espace Schengen. Carte d'identité française suffisante.", en: "No visa required — Schengen area. French national ID card is sufficient.", es: "Sin visado — espacio Schengen. DNI válido para ciudadanos de la UE.", de: "Kein Visum – Schengen-Raum. Ausreichender französischer Personalausweis." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Euro (€). Carte bancaire acceptée partout. Espèces utiles dans les marchés et zones rurales.", en: "Euro (€). Cards accepted everywhere. Cash useful in markets and rural areas.", es: "Euro (€). Tarjeta bancaria aceptada en todas partes. El efectivo es útil en mercados y zonas rurales.", de: "Euro (€). Kreditkarten werden überall akzeptiert. Nützliche Arten auf Märkten und in ländlichen Gebieten." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Letton. Anglais bien parlé par les jeunes. Russe compris par tous les plus de 40 ans.", en: "Latvian. English well spoken by young people. Russian understood by everyone over 40.", es: "Letón. Los jóvenes hablan bien inglés. El ruso lo entienden todos los mayores de 40 años.", de: "Lettisch. Englisch wird von jungen Leuten gut gesprochen. Russisch versteht jeder über 40." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/F (European) — 230V. No adapter needed.", es: "Tipo C/F (europeo) — 230V. No se necesita adaptador.", de: "Typ C/F (europäisch) – 230 V. Kein Adapter erforderlich." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Aucune précaution. CEAM valide. Tiques dans les forêts — pantalon long recommandé en été.", en: "No special precautions. EHIC valid. Ticks in the forests — long trousers recommended in summer.", es: "Sin precauciones especiales. TSE válida. Garrapatas en los bosques — se recomienda pantalón largo en verano.", de: "Keine Vorsichtsmaßnahmen. Gültige EHIC. Zecken im Wald – im Sommer sind lange Hosen empfehlenswert." } },
    { icon: "🌲", label: { fr: "Nature", en: "Nature", es: "Naturaleza", de: "Natur" }, value: { fr: "55% du territoire est couvert de forêts. Les Lettons ramassent champignons et baies en automne — une pratique nationale. Les forêts sont accessibles librement.", en: "55% of the territory is covered in forest. Latvians pick mushrooms and berries in autumn — a national pastime. Forests are freely accessible.", es: "El 55% del territorio está cubierto de bosques. Los letones recolectan setas y bayas en otoño — una práctica nacional. Los bosques son de libre acceso.", de: "55 % des Territoriums sind von Wäldern bedeckt. Die Letten sammeln im Herbst Pilze und Beeren – eine landesweite Praxis. Die Wälder sind frei zugänglich." } },
    { icon: "🍺", label: { fr: "Kvass", en: "Kvass", es: "Kvas", de: "Kwas" }, value: { fr: "Le kvass est la boisson nationale : une bière légèrement fermentée à base de pain de seigle, peu alcoolisée et rafraîchissante. À essayer au marché central.", en: "Kvass is the national drink: a lightly fermented, low-alcohol, refreshing beverage made from rye bread. Worth trying at the Central Market.", es: "El kvas es la bebida nacional: una cerveza ligeramente fermentada a base de pan de centeno, poco alcohólica y refrescante. Hay que probarla en el mercado central.", de: "Kwas ist das Nationalgetränk: ein leicht vergorenes Bier aus Roggenbrot, alkoholarm und erfrischend. Zum Ausprobieren auf dem Zentralmarkt." } },
  ],
};
