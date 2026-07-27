export const LUXEMBOURG = {
  code: "LUX",
  numericId: 442,
  name: { fr: "Luxembourg", en: "Luxembourg", es: "Luxemburgo", de: "Luxemburg" },
  emoji: "🇱🇺",
  capital: { fr: "Luxembourg", en: "Luxembourg", es: "Luxemburgo", de: "Luxemburg" },
  language: { fr: "Luxembourgeois, Français, Allemand", en: "Luxembourgish, French, German", es: "Luxemburgués, Francés, Alemán", de: "Luxemburgisch, Französisch, Deutsch" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)", es: "Euro (EUR)", de: "Euro (EUR)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 90, budgetMid: 170,
    tripMin: 1150, tripMid: 2400,
  },
  criteria: {
    unesco: 2,
    nature: 2,
    randonnee: 2,
    gastronomie: 2,
    architecture: 2,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 2,
    plage: 0,
  },
  description: {
    fr: "Le Grand-Duché de Luxembourg est l'un des plus petits pays d'Europe et pourtant l'un des plus riches. Sa capitale, classée au patrimoine mondial de l'UNESCO pour ses fortifications, mêle architecture médiévale et institutions européennes modernes. Au-delà de la capitale, la région de la Moselle offre de beaux vignobles, le château de Vianden domine les Ardennes luxembourgeoises, et le Mullerthal est surnommé la 'Petite Suisse luxembourgeoise'.", en: "The Grand Duchy of Luxembourg is one of the smallest countries in Europe, yet one of the richest. Its capital, a UNESCO World Heritage site for its fortifications, blends medieval architecture with modern European institutions. Beyond the capital, the Moselle region offers beautiful vineyards, Vianden Castle overlooks the Luxembourg Ardennes, and the Mullerthal is nicknamed 'Luxembourg's Little Switzerland'.", es: "El Gran Ducado de Luxemburgo es uno de los países más pequeños de Europa y, sin embargo, uno de los más ricos. Su capital, declarada Patrimonio de la Humanidad por la UNESCO por sus fortificaciones, combina arquitectura medieval con instituciones europeas modernas. Más allá de la capital, la región del Mosela ofrece hermosos viñedos, el castillo de Vianden domina las Ardenas luxemburguesas y el Mullerthal es apodado la 'Pequeña Suiza luxemburguesa'.", de: "Das Großherzogtum Luxemburg ist eines der kleinsten Länder Europas und dennoch eines der reichsten. Die Hauptstadt, die wegen ihrer Befestigungsanlagen zum UNESCO-Weltkulturerbe gehört, vereint mittelalterliche Architektur und moderne europäische Institutionen. Außerhalb der Hauptstadt bietet die Moselregion wunderschöne Weinberge, das Schloss Vianden dominiert die Luxemburger Ardennen und Müllerthal trägt den Spitznamen „Kleine Luxemburger Schweiz“.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Septembre", en: "May – September", es: "Mayo – Septiembre", de: "Mai – September" },
      label: { fr: "Printemps et été", en: "Spring and summer", es: "Primavera y verano", de: "Frühling und Sommer" },
      color: "#22c55e",
      description: {
        fr: "La meilleure saison pour explorer le Luxembourg, avec des températures agréables (15–22°C). Les terrasses s'animent dans la vieille ville, les randonnées dans le Mullerthal sont idéales et les vignobles de la Moselle sont en pleine verdure.", en: "The best season to explore Luxembourg, with pleasant temperatures (15–22°C). Terraces come alive in the old town, hiking in the Mullerthal is ideal and the Moselle vineyards are lush and green.", es: "La mejor temporada para explorar Luxemburgo, con temperaturas agradables (15–22°C). Las terrazas cobran vida en el casco antiguo, las caminatas por el Mullerthal son ideales y los viñedos del Mosela están en pleno verdor.", de: "Die beste Jahreszeit, um Luxemburg zu erkunden, mit angenehmen Temperaturen (15–22 °C). In der Altstadt erwachen die Terrassen zum Leben, Wanderungen im Müllerthal laden zum Wandern ein und die Moselweinberge liegen mitten im Grünen.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Septembre – Octobre", en: "September – October", es: "Septiembre – Octubre", de: "September – Oktober" },
      label: { fr: "Vendanges et automne", en: "Grape harvest and autumn", es: "Vendimia y otoño", de: "Ernte und Herbst" },
      color: "#f59e0b",
      description: {
        fr: "La région mosellane s'anime lors des vendanges en septembre. Les couleurs automnales des Ardennes luxembourgeoises et du Mullerthal sont spectaculaires et la fréquentation touristique diminue.", en: "The Moselle region comes alive during the September grape harvest. The autumn colours of the Luxembourg Ardennes and the Mullerthal are spectacular, and tourist numbers drop.", es: "La región del Mosela cobra vida durante la vendimia de septiembre. Los colores otoñales de las Ardenas luxemburguesas y del Mullerthal son espectaculares, y la afluencia turística disminuye.", de: "Bei der Ernte im September erwacht die Moselregion zum Leben. Die Herbstfarben der Luxemburger Ardennen und des Müllerthals sind spektakulär und die Touristenzahlen gehen zurück.",
      },
      icon: "🍇",
    },
  ],
  weatherCities: [
    {
      id: "luxembourg_city",
      name: "Luxembourg",
      region: { fr: "Canton de Luxembourg", en: "Canton of Luxembourg", es: "Cantón de Luxemburgo", de: "Kanton Luxemburg" },
      data: [
        { month: "Jan", temp: 2, rain: 75, icon: "❄️" },
        { month: "Fév", temp: 3, rain: 65, icon: "❄️" },
        { month: "Mar", temp: 7, rain: 70, icon: "⛅" },
        { month: "Avr", temp: 11, rain: 65, icon: "⛅" },
        { month: "Mai", temp: 15, rain: 70, icon: "⛅" },
        { month: "Jun", temp: 18, rain: 65, icon: "☀️" },
        { month: "Jul", temp: 20, rain: 70, icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 70, icon: "☀️" },
        { month: "Sep", temp: 17, rain: 60, icon: "☀️" },
        { month: "Oct", temp: 12, rain: 75, icon: "⛅" },
        { month: "Nov", temp: 6, rain: 80, icon: "⛅" },
        { month: "Déc", temp: 3, rain: 80, icon: "❄️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Luxembourg-Ville",
      region: { fr: "Canton de Luxembourg", en: "Canton of Luxembourg", es: "Cantón de Luxemburgo", de: "Kanton Luxemburg" },
      description: {
        fr: "La capitale du Grand-Duché est une ville fascinante construite sur des falaises, dont les fortifications médiévales sont classées au patrimoine mondial de l'UNESCO. Le Chemin de la Corniche offre une vue panoramique sur les casemates et la vieille ville. Le Grund, quartier au fond des vallées de l'Alzette et de la Pétrusse, est idéal pour se promener en soirée.", en: "The Grand Duchy's capital is a fascinating city built on cliffs, whose medieval fortifications are a UNESCO World Heritage site. The Chemin de la Corniche offers a panoramic view over the casemates and the old town. The Grund, a district at the bottom of the Alzette and Pétrusse valleys, is ideal for an evening stroll.", es: "La capital del Gran Ducado es una ciudad fascinante construida sobre acantilados, cuyas fortificaciones medievales están declaradas Patrimonio de la Humanidad por la UNESCO. El Chemin de la Corniche ofrece una vista panorámica sobre las casamatas y el casco antiguo. El Grund, barrio situado en el fondo de los valles del Alzette y del Pétrusse, es ideal para pasear al anochecer.", de: "Die Hauptstadt des Großherzogtums ist eine faszinierende, auf Klippen erbaute Stadt, deren mittelalterliche Befestigungsanlagen zum UNESCO-Weltkulturerbe gehören. Der Chemin de la Corniche bietet einen Panoramablick auf die Kasematten und die Altstadt. Le Grund, ein Stadtteil am Fuße der Täler Alzette und Pétrusse, eignet sich ideal für einen Abendspaziergang.",
      },
      wikipedia: "Luxembourg_City",
      tags: ["UNESCO", "Ville", "Architecture", "Histoire"],
      mustSee: [
        { name: { fr: "Casemates du Bock — galeries souterraines dans la roche sur 23 km", en: "Bock Casemates — 23 km of underground galleries carved into the rock", es: "Casamatas del Bock — 23 km de galerías subterráneas excavadas en la roca", de: "Bock-Kasematten – unterirdische Stollen im Fels über 23 km" }, wikipedia: "File:The Bock Casemates 1.jpg" },
        { name: { fr: "Chemin de la Corniche — 'le plus beau balcon d'Europe'", en: "Chemin de la Corniche — 'Europe's most beautiful balcony'", es: "Chemin de la Corniche — 'el balcón más bello de Europa'", de: "Chemin de la Corniche – „der schönste Balkon Europas“" }, wikipedia: "File:Corniche_and_rear_view_of_Breedewee_Luxembourg_City_2012-04.JPG" },
        { name: { fr: "Cathédrale Notre-Dame — gothique tardif avec crypte des Grands-Ducs", en: "Notre-Dame Cathedral — late Gothic with the Grand Ducal crypt", es: "Catedral de Notre-Dame — gótico tardío con la cripta de los Grandes Duques", de: "Kathedrale Notre-Dame – spätgotisch mit Krypta der Großherzöge" }, wikipedia: "File:Luxembourg_City_Square_Guillaume_II_towards_Notre-Dame_Cathedral_April_2011.jpg" },
        { name: { fr: "MUDAM — musée d'art moderne de renommée internationale", en: "MUDAM — internationally renowned museum of modern art", es: "MUDAM — museo de arte moderno de renombre internacional", de: "MUDAM – international bekanntes Museum für moderne Kunst" }, wikipedia: "MUDAM" },
      ],
    },
    {
      id: 2,
      name: "Vianden",
      region: { fr: "Canton de Vianden", en: "Canton of Vianden", es: "Cantón de Vianden", de: "Kanton Vianden" },
      description: {
        fr: "Vianden est un village de conte de fées niché dans la vallée de l'Our, dominé par l'un des plus beaux châteaux médiévaux d'Europe. Victor Hugo y vécut en exil en 1871 et y rédigea une partie de son œuvre. Le télésiège offre une vue plongeante sur le château et la vallée boisée.", en: "Vianden is a fairytale village nestled in the Our valley, overlooked by one of the finest medieval castles in Europe. Victor Hugo lived here in exile in 1871 and wrote part of his work there. The chairlift offers a sweeping view over the castle and the wooded valley.", es: "Vianden es un pueblo de cuento enclavado en el valle del Our, dominado por uno de los castillos medievales más bellos de Europa. Victor Hugo vivió aquí en el exilio en 1871 y redactó parte de su obra. El telesilla ofrece una vista impresionante sobre el castillo y el valle boscoso.", de: "Vianden ist ein märchenhaftes Dorf im Our-Tal, das von einer der schönsten mittelalterlichen Burgen Europas dominiert wird. Dort lebte Victor Hugo 1871 im Exil und verfasste dort einen Teil seiner Werke. Der Sessellift bietet einen Blick aus der Vogelperspektive auf die Burg und das bewaldete Tal.",
      },
      wikipedia: "Vianden",
      tags: ["Architecture", "Histoire", "Culture", "Montagne"],
      mustSee: [
        { name: { fr: "Château de Vianden — forteresse romano-gothique restaurée", en: "Vianden Castle — restored Romanesque-Gothic fortress", es: "Castillo de Vianden — fortaleza románico-gótica restaurada", de: "Burg Vianden – restaurierte römisch-gotische Festung" }, wikipedia: "Vianden_Castle" },
        { name: { fr: "Maison de Victor Hugo — musée dédié au séjour de l'écrivain", en: "Victor Hugo House — museum dedicated to the writer's stay", es: "Casa de Victor Hugo — museo dedicado a la estancia del escritor", de: "Maison de Victor Hugo – Museum, das dem Aufenthalt des Schriftstellers gewidmet ist" }, wikipedia: "File:Victor Hugo Museum Vianden.jpg" },
        { name: { fr: "Télésiège de Vianden — panorama sur le château et la vallée de l'Our", en: "Vianden chairlift — panorama over the castle and the Our valley", es: "Telesilla de Vianden — panorámica del castillo y el valle del Our", de: "Vianden-Sessellift – Panorama auf die Burg und das Ourtal" }, wikipedia: "File:TélésiègeVianden1.JPG" },
        { name: { fr: "Our — rivière idéale pour le kayak et les randonnées riveraines", en: "Our — river ideal for kayaking and riverside walks", es: "Our — río ideal para el kayak y los paseos ribereños", de: "Unser Fluss ist ideal zum Kajakfahren und für Wanderungen am Flussufer" }, wikipedia: "Our_(river)" },
      ],
    },
    {
      id: 3,
      name: "Mullerthal",
      region: { fr: "Canton d'Echternach", en: "Canton of Echternach", es: "Cantón de Echternach", de: "Kanton Echternach" },
      description: {
        fr: "Surnommé la 'Petite Suisse luxembourgeoise', le Mullerthal est une région de gorges boisées, de rochers sculptés par l'érosion et de sentiers de randonnée spectaculaires. Echternach, plus ancienne ville du Luxembourg, est le point de départ idéal. Le sentier Mullerthal Trail (112 km) traverse des paysages de grès sauvages et enchanteurs.", en: "Nicknamed 'Luxembourg's Little Switzerland', the Mullerthal is a region of wooded gorges, erosion-carved rock formations and spectacular hiking trails. Echternach, Luxembourg's oldest town, is the ideal starting point. The Mullerthal Trail (112 km) winds through wild, enchanting sandstone landscapes.", es: "Apodado la 'Pequeña Suiza luxemburguesa', el Mullerthal es una región de gargantas boscosas, rocas esculpidas por la erosión y senderos espectaculares. Echternach, la ciudad más antigua de Luxemburgo, es el punto de partida ideal. El Mullerthal Trail (112 km) atraviesa paisajes de arenisca salvajes y encantadores.", de: "Müllerthal, auch „Kleine Luxemburger Schweiz“ genannt, ist eine Region mit bewaldeten Schluchten, durch Erosion geformten Felsen und spektakulären Wanderwegen. Echternach, die älteste Stadt Luxemburgs, ist der ideale Ausgangspunkt. Der Mullerthal Trail (112 km) durchquert wilde und bezaubernde Sandsteinlandschaften.",
      },
      wikipedia: "File:Mullerthal 02.jpg",
      tags: ["Randonnée", "Nature"],
      mustSee: [
        { name: { fr: "Sentier Mullerthal Trail — 112 km de randonnée dans les gorges boisées", en: "Mullerthal Trail — 112 km of hiking through wooded gorges", es: "Mullerthal Trail — 112 km de senderismo por gargantas boscosas", de: "Sentier Mullerthal Trail – 112 km Wanderung durch bewaldete Schluchten" }, wikipedia: "File:Mullerthal 02.jpg" },
        { name: { fr: "Gorge du Loup — canyon étroit aux formations rocheuses spectaculaires", en: "Gorge du Loup — narrow canyon with spectacular rock formations", es: "Gorge du Loup — cañón estrecho con espectaculares formaciones rocosas", de: "Gorge du Loup – enge Schlucht mit spektakulären Felsformationen" }, wikipedia: "File:Neubeuern Wolfsschlucht.jpg" },
        { name: { fr: "Abbaye d'Echternach — fondée au VIIe siècle, plus ancienne du Luxembourg", en: "Echternach Abbey — founded in the 7th century, Luxembourg's oldest", es: "Abadía de Echternach — fundada en el s. VII, la más antigua de Luxemburgo", de: "Abtei Echternach – gegründet im 7. Jahrhundert, älteste in Luxemburg" }, wikipedia: "File:Echternach Abbey R02.jpg" },
        { name: { fr: "Beaufort — château médiéval en ruine et château Renaissance", en: "Beaufort — ruined medieval castle and Renaissance château", es: "Beaufort — castillo medieval en ruinas y castillo renacentista", de: "Beaufort – mittelalterliche Burgruine und Renaissanceschloss" }, wikipedia: "Beaufort_Castle,_Luxembourg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Vallée de la Moselle", en: "Moselle Valley", es: "Valle del Mosela", de: "Moseltal" },
      region: { fr: "Canton de Remich", en: "Canton of Remich", es: "Cantón de Remich", de: "Kanton Remich" },
      description: {
        fr: "La Moselle luxembourgeoise est une région viticole pittoresque bordant le fleuve qui sépare le Luxembourg de l'Allemagne. Les cépages Riesling, Pinot gris et Crémant du Luxembourg y sont produits. Des villages vignerons comme Remich, Ehnen et Grevenmacher proposent des caves à visiter et des terrasses avec vue sur les vignes en terrasses.", en: "The Luxembourg Moselle is a picturesque wine region bordering the river that separates Luxembourg from Germany. Riesling, Pinot Gris and Luxembourg Crémant are produced here. Wine villages such as Remich, Ehnen and Grevenmacher offer cellars to visit and terraces overlooking the terraced vineyards.", es: "El Mosela luxemburgués es una región vinícola pintoresca que bordea el río que separa Luxemburgo de Alemania. Se producen aquí Riesling, Pinot Gris y Crémant de Luxemburgo. Pueblos vinateros como Remich, Ehnen y Grevenmacher ofrecen bodegas para visitar y terrazas con vistas a los viñedos en terrazas.", de: "Die Luxemburger Mosel ist eine malerische Weinregion, die an den Fluss grenzt, der Luxemburg von Deutschland trennt. Dort werden die Rebsorten Riesling, Grauburgunder und Crémant du Luxembourg angebaut. Weindörfer wie Remich, Ehnen und Grevenmacher bieten Weinkeller zur Besichtigung und Terrassen mit Blick auf die Weinterrassen.",
      },
      wikipedia: "File:Luxembourg Moselle Vinyards Machtum.JPG",
      tags: ["Gastronomie", "Nature"],
      mustSee: [
        { name: { fr: "Cave viticole Bernard-Massard à Grevenmacher — Crémant de Luxembourg", en: "Bernard-Massard winery in Grevenmacher — Luxembourg Crémant", es: "Bodega Bernard-Massard en Grevenmacher — Crémant de Luxemburgo", de: "Weinkeller Bernard-Massard in Grevenmacher – Crémant de Luxembourg" }, wikipedia: "File:GrevenmacherMarktplatz.JPG" },
        { name: { fr: "Remich — capitale de la Moselle luxembourgeoise", en: "Remich — capital of the Luxembourg Moselle", es: "Remich — capital del Mosela luxemburgués", de: "Remich – Hauptstadt der Luxemburger Mosel" }, wikipedia: "Remich" },
        { name: { fr: "Schengen — village signataire de l'accord de libre circulation", en: "Schengen — village where the free-movement agreement was signed", es: "Schengen — pueblo donde se firmó el acuerdo de libre circulación", de: "Schengen – Dorf, das das Freizügigkeitsabkommen unterzeichnet hat" }, wikipedia: "File:Luxembourg Schengen from Markusberg a.jpg" },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "Le Luxembourg est l'un des pays les plus chers d'Europe, avec des prix hôteliers élevés dans la capitale. Les restaurants proposent cependant des formules déjeuner abordables et les transports en commun sont gratuits depuis 2020.", en: "Luxembourg is one of the most expensive countries in Europe, with high hotel prices in the capital. Restaurants, however, offer affordable lunch menus, and public transport has been free since 2020.", es: "Luxemburgo es uno de los países más caros de Europa, con precios hoteleros elevados en la capital. Sin embargo, los restaurantes ofrecen menús de mediodía asequibles y el transporte público es gratuito desde 2020.", de: "Luxemburg ist eines der teuersten Länder Europas, mit hohen Hotelpreisen in der Hauptstadt. Allerdings bieten Restaurants preisgünstige Mittagsangebote an und der öffentliche Nahverkehr ist seit 2020 kostenlos.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Auberge de jeunesse (dortoir)", en: "Youth hostel (dorm)", es: "Albergue juvenil (dormitorio)", de: "Jugendherberge (Wohnheim)" }, price: "30–45 €", detail: { fr: "Auberges HI bien situées dans la capitale", en: "Well-located HI hostels in the capital", es: "Albergues HI bien situados en la capital", de: "HI-Hostels in guter Lage in der Hauptstadt" } },
          { label: { fr: "Hôtel budget", en: "Budget hotel", es: "Hotel económico", de: "Budget-Hotel" }, price: "80–120 €", detail: { fr: "Chambre double en ville, petit-déjeuner souvent en sus", en: "Double room in town, breakfast often extra", es: "Habitación doble en la ciudad, desayuno a menudo aparte", de: "Doppelzimmer im Ort, Frühstück oft extra" } },
          { label: { fr: "Hôtel confort 3–4 étoiles", en: "3–4 star comfort hotel", es: "Hotel confort 3–4 estrellas", de: "3–4-Sterne-Komforthotel" }, price: "140–220 €", detail: { fr: "Hôtels de charme dans la vieille ville ou le Kirchberg", en: "Charming hotels in the old town or Kirchberg", es: "Hoteles con encanto en el casco antiguo o el Kirchberg", de: "Charmante Hotels in der Altstadt oder auf dem Kirchberg" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Sandwich ou Gromperekichelcher (crêpes de pommes de terre)", en: "Sandwich or Gromperekichelcher (potato pancakes)", es: "Sándwich o Gromperekichelcher (tortitas de patata)", de: "Sandwich oder Gromperekichelcher (Kartoffelpuffer)" }, price: "5–10 €", detail: { fr: "Spécialité locale en street food", en: "Local street food specialty", es: "Especialidad local de comida callejera", de: "Lokale Streetfood-Spezialität" } },
          { label: { fr: "Brasserie, formule déjeuner", en: "Brasserie, lunch menu", es: "Brasserie, menú del mediodía", de: "Brasserie, Mittagsangebot" }, price: "15–22 €", detail: { fr: "Plat + boisson, excellente qualité rapport-prix", en: "Dish + drink, excellent value for money", es: "Plato + bebida, excelente relación calidad-precio", de: "Gericht + Getränk, ausgezeichnetes Preis-Leistungs-Verhältnis" } },
          { label: { fr: "Restaurant dîner", en: "Restaurant dinner", es: "Cena en restaurante", de: "Abendessenrestaurant" }, price: "30–55 €", detail: { fr: "Cuisine luxembourgeoise ou internationale haut de gamme", en: "Upscale Luxembourgish or international cuisine", es: "Cocina luxemburguesa o internacional de alta gama", de: "Hochwertige luxemburgische oder internationale Küche" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bus, tram et train dans tout le pays", en: "Bus, tram and train nationwide", es: "Autobús, tranvía y tren en todo el país", de: "Bus, Straßenbahn und Zug im ganzen Land" }, price: { fr: "Gratuit", en: "Free", es: "Gratis", de: "Frei" }, detail: { fr: "Transports en commun nationaux entièrement gratuits depuis 2020", en: "National public transport entirely free since 2020", es: "Transporte público nacional totalmente gratuito desde 2020", de: "Völlig kostenloser öffentlicher Nahverkehr seit 2020" } },
          { label: { fr: "Train Paris–Luxembourg (TGV)", en: "Train Paris–Luxembourg (TGV)", es: "Tren Madrid–Luxemburgo", de: "Zug Paris–Luxemburg (TGV)" }, price: "25–80 €", detail: { fr: "2h10 de trajet depuis Paris-Est", en: "2h10 journey from Paris-Est", es: "2h10 de trayecto desde París-Este", de: "2 Std. 10 Min. Fahrt von Paris-Est" } },
          { label: { fr: "Location de vélo (journée)", en: "Bike rental (day)", es: "Alquiler de bicicleta (día)", de: "Fahrradverleih (Tag)" }, price: "15–25 €", detail: { fr: "Réseau vélo développé, idéal pour la vallée de la Moselle", en: "Well-developed cycling network, ideal for the Moselle valley", es: "Red ciclista desarrollada, ideal para el valle del Mosela", de: "Ausgebautes Fahrradnetz, ideal für das Moseltal" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Château de Vianden", en: "Vianden Castle", es: "Castillo de Vianden", de: "Schloss Vianden" }, price: "10 €", detail: { fr: "Visite complète du château médiéval restauré", en: "Full tour of the restored medieval castle", es: "Visita completa del castillo medieval restaurado", de: "Kompletter Rundgang durch die restaurierte mittelalterliche Burg" } },
          { label: { fr: "Casemates du Bock", en: "Bock Casemates", es: "Casamatas del Bock", de: "Bock-Kasematten" }, price: "5 €", detail: { fr: "Visite des galeries souterraines fortifiées", en: "Tour of the fortified underground galleries", es: "Visita a las galerías subterráneas fortificadas", de: "Besuch der befestigten unterirdischen Galerien" } },
          { label: { fr: "Dégustation de Crémant", en: "Crémant tasting", es: "Cata de Crémant", de: "Crémant-Verkostung" }, price: "12–20 €", detail: { fr: "Visite et dégustation dans une cave mosellane", en: "Tour and tasting at a Moselle winery", es: "Visita y cata en una bodega del Mosela", de: "Besichtigung und Verkostung in einem Moselkeller" } },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
        daily: "90–120 €/j",
        desc: { fr: "Auberge, repas abordables, transports gratuits, visites à prix modérés", en: "Hostel, affordable meals, free transport, moderately priced visits", es: "Albergue, comidas asequibles, transporte gratuito, visitas a precio moderado", de: "Herberge, erschwingliche Mahlzeiten, kostenloser Transport, Touren zu moderaten Preisen" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
        daily: "170–240 €/j",
        desc: { fr: "Hôtel confort, restaurants, activités et caves à vins", en: "Comfort hotel, restaurants, activities and wine cellars", es: "Hotel confort, restaurantes, actividades y bodegas", de: "Komforthotel, Restaurants, Aktivitäten und Weinkeller" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "4 jours", en: "4 days", es: "4 días", de: "4 Tage" },
      route: { fr: "Luxembourg-Ville – Vianden – Mullerthal – Moselle", en: "Luxembourg City – Vianden – Mullerthal – Moselle", es: "Ciudad de Luxemburgo – Vianden – Mullerthal – Mosela", de: "Luxemburg-Stadt – Vianden – Müllerthal – Mosel" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "450 – 600 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Train A/R Paris–Luxembourg", en: "Return train Paris–Luxembourg", es: "Tren ida y vuelta Madrid–Luxemburgo", de: "Rückfahrt mit dem Zug Paris–Luxemburg" }, amount: "50–120 €" },
            { label: { fr: "Hébergement (3 nuits)", en: "Accommodation (3 nights)", es: "Alojamiento (3 noches)", de: "Unterkunft (3 Nächte)" }, amount: "90–135 €" },
            { label: { fr: "Transports locaux (gratuits)", en: "Local transport (free)", es: "Transporte local (gratuito)", de: "Nahverkehr (kostenlos)" }, amount: "0 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "150–200 €" },
            { label: { fr: "Activités + musées", en: "Activities + museums", es: "Actividades + museos", de: "Aktivitäten + Museen" }, amount: "30–50 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "900 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Train A/R Paris–Luxembourg", en: "Return train Paris–Luxembourg", es: "Tren ida y vuelta Madrid–Luxemburgo", de: "Rückfahrt mit dem Zug Paris–Luxemburg" }, amount: "80–160 €" },
            { label: { fr: "Hébergement (3 nuits)", en: "Accommodation (3 nights)", es: "Alojamiento (3 noches)", de: "Unterkunft (3 Nächte)" }, amount: "420–660 €" },
            { label: { fr: "Transports locaux (gratuits)", en: "Local transport (free)", es: "Transporte local (gratuito)", de: "Nahverkehr (kostenlos)" }, amount: "0 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "300–420 €" },
            { label: { fr: "Activités + dégustations", en: "Activities + tastings", es: "Actividades + catas", de: "Aktivitäten + Verkostungen" }, amount: "100–150 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "1h de vol depuis CDG — ou 2h10 en TGV depuis Paris-Est", en: "1h flight from CDG — or 2h10 by TGV from Paris-Est", es: "1h de vuelo desde Madrid — o 2h10 en tren desde París", de: "1 Stunde Flug von CDG – oder 2 Stunden und 10 Minuten mit dem TGV von Paris-Est" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Aucun visa requis — zone Schengen, carte d'identité française suffisante", en: "No visa required — Schengen area, French national ID card is sufficient", es: "Sin visado — espacio Schengen, DNI español suficiente", de: "Kein Visum erforderlich – Schengen-Raum, ausreichender französischer Personalausweis" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Euro (€) — pays très riche, prix élevés notamment pour l'hébergement", en: "Euro (€) — a very wealthy country, high prices especially for accommodation", es: "Euro (€) — país muy rico, precios elevados sobre todo en alojamiento", de: "Euro (€) – sehr reiches Land, hohe Preise vor allem für Unterkünfte" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Luxembourgeois, français et allemand sont les trois langues officielles", en: "Luxembourgish, French and German are the three official languages", es: "Luxemburgués, francés y alemán son los tres idiomas oficiales", de: "Luxemburgisch, Französisch und Deutsch sind die drei Amtssprachen" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type E/F (identique à la France) — aucun adaptateur nécessaire", en: "Type E/F (same as France) — no adapter needed", es: "Tipo E/F (idéntico a España) — no se necesita adaptador", de: "Typ E/F (wie Frankreich) – kein Adapter erforderlich" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Carte européenne d'assurance maladie (CEAM) valable — très bonnes infrastructures", en: "European Health Insurance Card (EHIC) valid — very good healthcare infrastructure", es: "Tarjeta Sanitaria Europea (TSE) válida — infraestructuras muy buenas", de: "Gültige Europäische Krankenversicherungskarte (EHIC) – sehr gute Infrastruktur" } },
    { icon: "🚌", label: { fr: "Transports gratuits", en: "Free transport", es: "Transporte gratuito", de: "Kostenloser Transport" }, value: { fr: "Bus, trams et trains nationaux entièrement gratuits — pionnier mondial", en: "National buses, trams and trains entirely free — a world pioneer", es: "Autobuses, tranvías y trenes nacionales totalmente gratuitos — pionero mundial", de: "Völlig kostenlose nationale Busse, Straßenbahnen und Züge – Weltpionier" } },
    { icon: "🏦", label: { fr: "Finance", en: "Finance", es: "Finanzas", de: "Finanzen" }, value: { fr: "Important centre financier européen — sièges de nombreuses institutions UE", en: "Major European financial centre — home to many EU institutions", es: "Importante centro financiero europeo — sede de numerosas instituciones de la UE", de: "Wichtiges europäisches Finanzzentrum – Sitz vieler EU-Institutionen" } },
  ],
};
