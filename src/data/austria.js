export const AUSTRIA = {
  code: "AUT",
  numericId: 40,
  name: { fr: "Autriche", en: "Austria", es: "Austria", de: "Österreich" },
  emoji: "🇦🇹",
  capital: { fr: "Vienne", en: "Vienna", es: "Viena", de: "Wien" },
  language: { fr: "Allemand", en: "German", es: "Alemán", de: "Deutsch" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)", es: "Euro (EUR)", de: "Euro (EUR)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 70,
    budgetMid: 140,
    tripMin: 950,
    tripMid: 1900,
  },
  criteria: {
    unesco: 3,
    nature: 2,
    randonnee: 2,
    gastronomie: 2,
    architecture: 2,
    desert: 0,
    safari: 0,
    ski: 3,
    ville: 2,
    plage: 0,
    plongee: 2,
  },
  description: {
    fr: "L'Autriche est un joyau au cœur de l'Europe, où la grandeur impériale des Habsbourg se mêle à des paysages alpins à couper le souffle. Vienne, ancienne capitale d'un immense empire, déborde de palais baroques, de cafés mythiques et d'une vie musicale inégalée — de Mozart à Beethoven, de Klimt à Schiele. Salzbourg, Innsbruck et les lacs du Salzkammergut complètent un tableau d'une extraordinaire richesse culturelle et naturelle.", en: "Austria is a jewel at the heart of Europe, where the imperial grandeur of the Habsburgs blends with breathtaking Alpine landscapes. Vienna, the former capital of a vast empire, overflows with baroque palaces, legendary cafés and an unmatched musical heritage — from Mozart to Beethoven, from Klimt to Schiele. Salzburg, Innsbruck and the lakes of the Salzkammergut complete a picture of extraordinary cultural and natural richness.", es: "Austria es una joya en el corazón de Europa, donde la grandeza imperial de los Habsburgo se funde con paisajes alpinos de una belleza sobrecogedora. Viena, antigua capital de un vasto imperio, rebosa de palacios barrocos, cafés legendarios y una vida musical sin igual — de Mozart a Beethoven, de Klimt a Schiele. Salzburgo, Innsbruck y los lagos del Salzkammergut completan un cuadro de extraordinaria riqueza cultural y natural.", de: "Österreich ist ein Juwel im Herzen Europas, wo die imperiale Größe der Habsburger mit atemberaubenden Alpenlandschaften verschmilzt. Wien, die ehemalige Hauptstadt eines riesigen Reiches, strotzt nur so vor barocken Palästen, legendären Cafés und einem unvergleichlichen Musikleben – von Mozart bis Beethoven, von Klimt bis Schiele. Salzburg, Innsbruck und die Salzkammergutseen runden das Bild außergewöhnlichen Kultur- und Naturreichtums ab.",
  },
  bestPeriods: [
    {
      months: { fr: "Avr – Jun", en: "Apr – Jun", es: "Abr – Jun", de: "April – Juni" },
      label: { fr: "Idéal", en: "Ideal", es: "Ideal", de: "Ideal" },
      color: "#22c55e",
      description: {
        fr: "Printemps doux, prairies fleuries, foules encore raisonnables. Parfait pour Vienne et les lacs.", en: "Mild spring, blooming meadows, crowds still reasonable. Perfect for Vienna and the lakes.", es: "Primavera suave, praderas floridas, multitudes aún razonables. Perfecto para Viena y los lagos.", de: "Milder Frühling, blumige Wiesen, noch angemessener Andrang. Perfekt für Wien und die Seen.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Sep – Oct", en: "Sep – Oct", es: "Sep – Oct", de: "September – Okt" },
      label: { fr: "Très bien", en: "Very good", es: "Muy bien", de: "In Ordnung" },
      color: "#22c55e",
      description: {
        fr: "Automne doré, vendanges en Wachau, lumière magnifique sur les Alpes.", en: "Golden autumn, grape harvest in the Wachau, magnificent light over the Alps.", es: "Otoño dorado, vendimia en el Wachau, luz magnífica sobre los Alpes.", de: "Goldener Herbst, Ernte in der Wachau, herrliches Licht über den Alpen.",
      },
      icon: "🍂",
    },
    {
      months: { fr: "Déc – Mar", en: "Dec – Mar", es: "Dic – Mar", de: "Dezember – März" },
      label: { fr: "Ski & Noël", en: "Skiing & Christmas", es: "Esquí y Navidad", de: "Ski & Weihnachten" },
      color: "#f59e0b",
      description: {
        fr: "Stations de ski world-class au Tyrol et à Salzbourg. Marchés de Noël somptueux à Vienne.", en: "World-class ski resorts in Tyrol and around Salzburg. Sumptuous Christmas markets in Vienna.", es: "Estaciones de esquí de talla mundial en el Tirol y cerca de Salzburgo. Suntuosos mercadillos navideños en Viena.", de: "Weltklasse-Skigebiete in Tirol und Salzburg. Prächtige Weihnachtsmärkte in Wien.",
      },
      icon: "⛷️",
    },
    {
      months: { fr: "Jul – Aoû", en: "Jul – Aug", es: "Jul – Ago", de: "Juli – Aug" },
      label: { fr: "Haute saison", en: "High season", es: "Temporada alta", de: "Hochsaison" },
      color: "#f59e0b",
      description: {
        fr: "Beau temps mais foules importantes dans les sites touristiques et prix en hausse.", en: "Fine weather but large crowds at tourist sites and higher prices.", es: "Buen tiempo, pero grandes multitudes en los sitios turísticos y precios al alza.", de: "Gutes Wetter, aber großer Andrang an Sehenswürdigkeiten und steigende Preise.",
      },
      icon: "🌞",
    },
  ],
  weatherCities: [
    {
      id: "vienna",
      name: "Vienne",
      region: { fr: "Autriche orientale — climat continental tempéré", en: "Eastern Austria — temperate continental climate", es: "Austria oriental — clima continental templado", de: "Ostösterreich – gemäßigtes Kontinentalklima" },
      data: [
        { month: "Jan", temp: 2, rain: 40, icon: "❄️" },
        { month: "Fév", temp: 3, rain: 40, icon: "❄️" },
        { month: "Mar", temp: 9, rain: 45, icon: "⛅" },
        { month: "Avr", temp: 13, rain: 50, icon: "⛅" },
        { month: "Mai", temp: 18, rain: 65, icon: "☀️" },
        { month: "Jun", temp: 21, rain: 75, icon: "☀️" },
        { month: "Jul", temp: 23, rain: 65, icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 60, icon: "☀️" },
        { month: "Sep", temp: 18, rain: 50, icon: "☀️" },
        { month: "Oct", temp: 13, rain: 45, icon: "⛅" },
        { month: "Nov", temp: 6, rain: 45, icon: "❄️" },
        { month: "Déc", temp: 2, rain: 45, icon: "❄️" },
      ],
    },
    {
      id: "innsbruck",
      name: "Innsbruck",
      region: { fr: "Tyrol — vallée alpine, plus de précipitations", en: "Tyrol — alpine valley, higher rainfall", es: "Tirol — valle alpino, mayores precipitaciones", de: "Tirol – Alpental, mehr Niederschlag" },
      data: [
        { month: "Jan", temp: 1, rain: 65, icon: "❄️" },
        { month: "Fév", temp: 3, rain: 55, icon: "❄️" },
        { month: "Mar", temp: 8, rain: 65, icon: "❄️" },
        { month: "Avr", temp: 13, rain: 80, icon: "⛅" },
        { month: "Mai", temp: 17, rain: 100, icon: "☀️" },
        { month: "Jun", temp: 20, rain: 125, icon: "☀️" },
        { month: "Jul", temp: 22, rain: 130, icon: "☀️" },
        { month: "Aoû", temp: 22, rain: 115, icon: "☀️" },
        { month: "Sep", temp: 17, rain: 90, icon: "☀️" },
        { month: "Oct", temp: 12, rain: 75, icon: "⛅" },
        { month: "Nov", temp: 5, rain: 70, icon: "❄️" },
        { month: "Déc", temp: 1, rain: 65, icon: "❄️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Vienne",
      region: { fr: "Basse-Autriche / Vienne", en: "Lower Austria / Vienna", es: "Baja Austria / Viena", de: "Niederösterreich / Wien" },
      description: {
        fr: "Vienne est une ville impériale d'une élégance incomparable, dont les fastes baroques des Habsbourg sont préservés dans chaque rue du premier arrondissement. Le Kunsthistorisches Museum, l'Opéra d'État, le Palais de Schönbrunn et la Sécession viennoise illustrent la densité culturelle unique de la capitale. Les cafés viennois — Landtmann, Schwarzenberg, Central — sont à eux seuls une institution, inscrits au patrimoine culturel immatériel de l'UNESCO.", en: "Vienna is an imperial city of incomparable elegance, whose baroque Habsburg splendour is preserved in every street of the first district. The Kunsthistorisches Museum, the State Opera, Schönbrunn Palace and the Vienna Secession illustrate the capital's unique cultural density. Viennese cafés — Landtmann, Schwarzenberg, Central — are an institution in themselves, inscribed on UNESCO's intangible cultural heritage list.", es: "Viena es una ciudad imperial de una elegancia incomparable, cuyo esplendor barroco de los Habsburgo se conserva en cada calle del primer distrito. El Kunsthistorisches Museum, la Ópera Estatal, el Palacio de Schönbrunn y la Secesión vienesa ilustran la densidad cultural única de la capital. Los cafés vieneses —Landtmann, Schwarzenberg, Central— son en sí mismos toda una institución, inscritos en el patrimonio cultural inmaterial de la UNESCO.", de: "Wien ist eine Kaiserstadt von unvergleichlicher Eleganz, deren habsburgischer Barockpracht in jeder Straße des ersten Bezirks erhalten bleibt. Das Kunsthistorische Museum, die Staatsoper, das Schloss Schönbrunn und die Wiener Secession verdeutlichen die einzigartige kulturelle Dichte der Hauptstadt. Die Wiener Cafés – Landtmann, Schwarzenberg, Central – sind eine Institution für sich und gehören zum immateriellen Kulturerbe der UNESCO.",
      },
      wikipedia: "Vienna",
      tags: ["Culture", "Art", "Histoire", "Gastronomie", "Ville"],
      mustSee: [
        {
          name: { fr: "Palais de Schönbrunn — résidence d'été des Habsbourg avec 1 441 pièces", en: "Schönbrunn Palace — Habsburg summer residence with 1,441 rooms", es: "Palacio de Schönbrunn — residencia de verano de los Habsburgo con 1441 salas", de: "Schloss Schönbrunn – Sommerresidenz der Habsburger mit 1.441 Zimmern" },
          wikipedia: "Schönbrunn_Palace",
        },
        {
          name: { fr: "Kunsthistorisches Museum — l'une des plus grandes collections d'art au monde", en: "Kunsthistorisches Museum — one of the largest art collections in the world", es: "Kunsthistorisches Museum — una de las mayores colecciones de arte del mundo", de: "Kunsthistorisches Museum – eine der größten Kunstsammlungen der Welt" },
          wikipedia: "File:Kunsthistorisches Museum - Wien.jpg",
        },
        {
          name: { fr: "Belvedere — palais baroque abritant Le Baiser de Klimt", en: "Belvedere — baroque palace housing Klimt's The Kiss", es: "Belvedere — palacio barroco que alberga El Beso de Klimt", de: "Belvedere – Barockpalast mit Klimts „Der Kuss“." },
          wikipedia: "Belvedere,_Vienna",
        },
        {
          name: { fr: "Opéra de Vienne — temple de la musique classique, visites et spectacles", en: "Vienna State Opera — temple of classical music, tours and performances", es: "Ópera de Viena — templo de la música clásica, visitas y espectáculos", de: "Wiener Oper – Tempel der klassischen Musik, Besichtigungen und Shows" },
          wikipedia: "Vienna_State_Opera",
        },
      ],
    },
    {
      id: 2,
      name: "Salzbourg",
      region: { fr: "Land de Salzbourg", en: "State of Salzburg", es: "Estado de Salzburgo", de: "Land Salzburg" },
      description: {
        fr: "Ville natale de Mozart et décor des tournages de La Mélodie du Bonheur, Salzbourg est l'une des plus belles villes baroques d'Europe. Son centre historique, entièrement classé au patrimoine mondial de l'UNESCO, est dominé par la forteresse de Hohensalzburg surplombant l'Untersberg et la Salzach. Le Festival de Salzbourg, chaque été, est l'un des événements musicaux les plus prestigieux au monde.", en: "Mozart's birthplace and the filming location of The Sound of Music, Salzburg is one of Europe's most beautiful baroque cities. Its historic centre, entirely listed as a UNESCO World Heritage site, is dominated by the Hohensalzburg Fortress overlooking the Untersberg and the Salzach river. The Salzburg Festival, held every summer, is one of the most prestigious musical events in the world.", es: "Ciudad natal de Mozart y escenario de rodaje de Sonrisas y lágrimas, Salzburgo es una de las ciudades barrocas más bellas de Europa. Su centro histórico, íntegramente declarado Patrimonio Mundial por la UNESCO, está dominado por la fortaleza de Hohensalzburg, que domina el Untersberg y el río Salzach. El Festival de Salzburgo, cada verano, es uno de los eventos musicales más prestigiosos del mundo.", de: "Als Geburtsort von Mozart und Schauplatz der Dreharbeiten zu „The Sound of Music“ ist Salzburg eine der schönsten Barockstädte Europas. Sein historisches Zentrum, das vollständig zum UNESCO-Weltkulturerbe gehört, wird von der Festung Hohensalzburg mit Blick auf den Untersberg und die Salzach dominiert. Die Salzburger Festspiele sind jeden Sommer eines der prestigeträchtigsten Musikereignisse der Welt.",
      },
      wikipedia: "Salzburg",
      tags: ["UNESCO", "Culture", "Architecture", "Nature", "Ville"],
      mustSee: [
        {
          name: { fr: "Forteresse de Hohensalzburg — château médiéval le mieux conservé d'Europe centrale", en: "Hohensalzburg Fortress — the best-preserved medieval castle in Central Europe", es: "Fortaleza de Hohensalzburg — el castillo medieval mejor conservado de Europa Central", de: "Festung Hohensalzburg – die am besten erhaltene mittelalterliche Burg Mitteleuropas" },
          wikipedia: "File:Festung_Hohensalzburg_seen_from_the_West,_Salzburg,_Austria,_20260430_1638_0140.jpg",
        },
        {
          name: { fr: "Maison natale de Mozart — musée dans la rue Getreidegasse", en: "Mozart's Birthplace — museum on Getreidegasse street", es: "Casa natal de Mozart — museo en la calle Getreidegasse", de: "Mozarts Geburtshaus – Museum in der Getreidegasse" },
          wikipedia: "File:Salzburg, Getreidegasse 9, Mozarts Geburtshaus.jpg",
        },
        {
          name: { fr: "Palais de Mirabell et ses jardins — avec vue sur la forteresse", en: "Mirabell Palace and its gardens — with a view of the fortress", es: "Palacio de Mirabell y sus jardines — con vistas a la fortaleza", de: "Schloss Mirabell und seine Gärten – mit Blick auf die Festung" },
          wikipedia: "Mirabell_Palace",
        },
        {
          name: { fr: "Hallstatt — village lacustre de conte de fées dans les Alpes autrichiennes", en: "Hallstatt — fairy-tale lakeside village in the Austrian Alps", es: "Hallstatt — pueblo lacustre de cuento en los Alpes austríacos", de: "Hallstatt – märchenhaftes Seedorf in den österreichischen Alpen" },
          wikipedia: "Hallstatt",
        },
      ],
    },
    {
      id: 3,
      name: "Salzkammergut",
      region: { fr: "Haute-Autriche / Salzbourg", en: "Upper Austria / Salzburg", es: "Alta Austria / Salzburgo", de: "Oberösterreich / Salzburg" },
      description: {
        fr: "La région du Salzkammergut regroupe une soixantaine de lacs alpins d'un bleu vert spectaculaire, nichés entre des sommets calcaires. Hallstatt, village lacustre emblématique, est souvent qualifié de plus beau village du monde et a même inspiré un village entier en Chine. Randonnées, baignades, bateau à voile et mines de sel constituent les attraits de cette région classée au patrimoine mondial de l'UNESCO.", en: "The Salzkammergut region is home to some sixty Alpine lakes of a spectacular blue-green colour, nestled among limestone peaks. Hallstatt, the emblematic lakeside village, is often called the most beautiful village in the world and even inspired an entire replica village in China. Hiking, swimming, sailing and salt mines are the highlights of this region listed as a UNESCO World Heritage site.", es: "La región del Salzkammergut reúne una sesentena de lagos alpinos de un espectacular azul verdoso, enclavados entre picos calizos. Hallstatt, el emblemático pueblo lacustre, es a menudo calificado como el más bello del mundo, hasta el punto de inspirar una réplica entera en China. Senderismo, baños, vela y minas de sal son los atractivos de esta región declarada Patrimonio Mundial por la UNESCO.", de: "Das Salzkammergut vereint rund sechzig spektakuläre blaugrüne Alpenseen, eingebettet zwischen Kalksteingipfeln. Hallstatt, ein ikonisches Seedorf, wird oft als das schönste Dorf der Welt bezeichnet und hat sogar ein ganzes Dorf in China inspiriert. Wandern, Schwimmen, Segelboote und Salzminen sind die Attraktionen dieser Region, die zum UNESCO-Weltkulturerbe gehört.",
      },
      wikipedia: "Salzkammergut",
      tags: ["Nature", "UNESCO", "Randonnée", "Rural"],
      mustSee: [
        {
          name: { fr: "Hallstatt — village lacustre inscrit au patrimoine mondial", en: "Hallstatt — lakeside village listed as a World Heritage site", es: "Hallstatt — pueblo lacustre declarado Patrimonio Mundial", de: "Hallstatt – Weltkulturerbe-Seedorf" },
          wikipedia: "Hallstatt",
        },
        {
          name: { fr: "Dachstein — massif calcaire avec grottes de glace et via ferrata", en: "Dachstein — limestone massif with ice caves and via ferrata", es: "Dachstein — macizo calizo con cuevas de hielo y vía ferrata", de: "Dachstein – Kalksteinmassiv mit Eishöhlen und Klettersteig" },
          wikipedia: "File:Wagrain Grießenkareck N-Panorama 20160130.JPG",
        },
        {
          name: { fr: "Wolfgangsee — lac aux eaux cristallines, bateaux à vapeur centenaires", en: "Wolfgangsee — lake with crystal-clear waters, century-old steamboats", es: "Wolfgangsee — lago de aguas cristalinas, barcos de vapor centenarios", de: "Wolfgangsee – kristallklarer See, jahrhundertealte Dampfschiffe" },
          wikipedia: "Lake_Wolfgang",
        },
        {
          name: { fr: "Bad Ischl — ancienne résidence impériale de François-Joseph", en: "Bad Ischl — former imperial residence of Franz Joseph", es: "Bad Ischl — antigua residencia imperial de Francisco José", de: "Bad Ischl – ehemalige Kaiserresidenz von Franz Joseph" },
          wikipedia: "Bad_Ischl",
        },
      ],
    },
    {
      id: 4,
      name: { fr: "Tyrol & Innsbruck", en: "Tyrol & Innsbruck", es: "Tirol e Innsbruck", de: "Tirol & Innsbruck" },
      region: { fr: "Tyrol", en: "Tyrol", es: "Tirol", de: "Tirol" },
      description: {
        fr: "Innsbruck, capitale du Tyrol, est une ville alpine d'une beauté rare où les toits dorés et les façades colorées de l'Altstadt se détachent sur fond de sommets enneigés. C'est l'une des rares villes au monde où l'on peut skier le matin et visiter des musées l'après-midi. L'Ambras, le Toit d'Or, et les remontées mécaniques du Nordketten permettent d'apprécier toutes les facettes de cette destination alpine.", en: "Innsbruck, the capital of Tyrol, is an Alpine city of rare beauty where the golden roofs and colourful facades of the Altstadt stand out against a backdrop of snow-capped peaks. It is one of the few cities in the world where you can ski in the morning and visit museums in the afternoon. Ambras Castle, the Golden Roof, and the Nordkette cable cars let visitors enjoy every facet of this Alpine destination.", es: "Innsbruck, capital del Tirol, es una ciudad alpina de rara belleza donde los tejados dorados y las fachadas coloridas del Altstadt destacan sobre un telón de fondo de picos nevados. Es una de las pocas ciudades del mundo donde se puede esquiar por la mañana y visitar museos por la tarde. El castillo de Ambras, el Tejado de Oro y los teleféricos del Nordketten permiten disfrutar de todas las facetas de este destino alpino.", de: "Innsbruck, die Hauptstadt Tirols, ist eine Alpenstadt von besonderer Schönheit. Goldene Dächer und farbenfrohe Fassaden in der Altstadt heben sich vor schneebedeckten Gipfeln ab. Nur in wenigen Städten kann man morgens Ski fahren und nachmittags Museen besuchen. Schloss Ambras, das Goldene Dachl und die Nordkettenbahnen zeigen die vielen Facetten dieses Reiseziels in den Alpen.",
      },
      wikipedia: "Innsbruck",
      tags: ["Montagne", "Ski", "Culture", "Randonnée", "Histoire"],
      mustSee: [
        {
          name: { fr: "Toit d'Or (Goldenes Dachl) — balcon couvert de 2 657 tuiles dorées du XVe siècle", en: "Golden Roof (Goldenes Dachl) — 15th-century balcony covered with 2,657 gilded tiles", es: "Tejado de Oro (Goldenes Dachl) — balcón del siglo XV cubierto con 2657 tejas doradas", de: "Goldenes Dachl – Balkon gedeckt mit 2.657 goldenen Dachziegeln aus dem 15. Jahrhundert" },
          wikipedia: "Goldenes_Dachl",
        },
        {
          name: { fr: "Nordkette — accès rapide en téléphérique aux sommets alpins depuis le centre-ville", en: "Nordkette — quick cable car access to Alpine peaks from the city centre", es: "Nordkette — acceso rápido en teleférico a las cumbres alpinas desde el centro", de: "Nordkette – schneller Seilbahnzugang zu den Alpengipfeln vom Stadtzentrum aus" },
          wikipedia: "Nordkette",
        },
        {
          name: { fr: "Château d'Ambras — collection d'art Renaissance des Habsbourg du Tyrol", en: "Ambras Castle — Renaissance art collection of the Tyrolean Habsburgs", es: "Castillo de Ambras — colección de arte renacentista de los Habsburgo del Tirol", de: "Schloss Ambras – Kunstsammlung der Tiroler Habsburger Renaissance" },
          wikipedia: "Ambras_Castle",
        },
        {
          name: { fr: "Swarovski Kristallwelten — univers de cristal spectaculaire près d'Innsbruck", en: "Swarovski Kristallwelten — spectacular crystal world near Innsbruck", es: "Swarovski Kristallwelten — espectacular mundo de cristal cerca de Innsbruck", de: "Swarovski Kristallwelten – spektakuläre Kristallwelt in der Nähe von Innsbruck" },
          wikipedia: "File:Swarovski Kristallwelten 20 Kristalldom.JPG",
        },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "L'Autriche est légèrement moins chère que la Suisse mais comparable à l'Allemagne et à la France. Vienne reste accessible avec de bons hôtels en milieu de gamme. Les stations de ski du Tyrol sont plus coûteuses, surtout en haute saison.", en: "Austria is slightly cheaper than Switzerland but comparable to Germany and France. Vienna remains affordable with good mid-range hotels. Tyrol's ski resorts are more expensive, especially in high season.", es: "Austria es ligeramente más barata que Suiza, pero comparable a Alemania y Francia. Viena sigue siendo asequible con buenos hoteles de gama media. Las estaciones de esquí del Tirol son más caras, sobre todo en temporada alta.", de: "Österreich ist etwas günstiger als die Schweiz, aber vergleichbar mit Deutschland und Frankreich. Wien bleibt mit guten Mittelklassehotels gut erreichbar. Vor allem in der Hochsaison sind Tiroler Skigebiete teurer.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          {
            label: { fr: "Auberge de jeunesse / Jugendherberge", en: "Youth hostel / Jugendherberge", es: "Albergue juvenil / Jugendherberge", de: "Jugendherberge / Jugendherberge" },
            price: "22–38 €",
            detail: { fr: "Très propre et bien équipé dans les grandes villes", en: "Very clean and well equipped in major cities", es: "Muy limpio y bien equipado en las grandes ciudades", de: "Sehr sauber und gut ausgestattet in Großstädten" },
          },
          {
            label: { fr: "Hôtel 3 étoiles", en: "3-star hotel", es: "Hotel de 3 estrellas", de: "3-Sterne-Hotel" },
            price: "70–120 €",
            detail: { fr: "Chambre double à Vienne ou Salzbourg", en: "Double room in Vienna or Salzburg", es: "Habitación doble en Viena o Salzburgo", de: "Doppelzimmer in Wien oder Salzburg" },
          },
          {
            label: { fr: "Hôtel 4 étoiles", en: "4-star hotel", es: "Hotel de 4 estrellas", de: "4-Sterne-Hotel" },
            price: "130–220 €",
            detail: { fr: "Hôtels de standing avec spa dans les stations alpines", en: "Upscale hotels with spa in Alpine resorts", es: "Hoteles de categoría con spa en estaciones alpinas", de: "Luxushotels mit Spa in Alpenresorts" },
          },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          {
            label: { fr: "Würstelstand / boulangerie", en: "Würstelstand / bakery", es: "Würstelstand / panadería", de: "Würstelstand / Bäckerei" },
            price: "4–8 €",
            detail: { fr: "Saucisses grillées et bretzels, street food typiquement autrichien", en: "Grilled sausages and pretzels, typically Austrian street food", es: "Salchichas a la parrilla y pretzels, comida callejera típicamente austríaca", de: "Gegrillte Würstchen und Brezeln, typisch österreichisches Streetfood" },
          },
          {
            label: { fr: "Déjeuner au restaurant (Mittagsmenü)", en: "Lunch at a restaurant (Mittagsmenü)", es: "Almuerzo en restaurante (Mittagsmenü)", de: "Mittagessen im Restaurant (Mittagsmenü)" },
            price: "10–16 €",
            detail: { fr: "Menu du midi très avantageux dans la plupart des restaurants", en: "Very good-value lunch menu in most restaurants", es: "Menú del mediodía muy económico en la mayoría de restaurantes", de: "Sehr vorteilhaftes Mittagsmenü in den meisten Restaurants" },
          },
          {
            label: { fr: "Dîner + café viennois", en: "Dinner + Viennese coffee", es: "Cena + café vienés", de: "Abendessen + Wiener Kaffee" },
            price: "20–40 €",
            detail: { fr: "Wiener Schnitzel, Tafelspitz, Sachertorte au dessert", en: "Wiener Schnitzel, Tafelspitz, Sachertorte for dessert", es: "Wiener Schnitzel, Tafelspitz, Sachertorte de postre", de: "Wiener Schnitzel, Tafelspitz, Sachertorte zum Nachtisch" },
          },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          {
            label: { fr: "Métro / tram de Vienne (ticket unité)", en: "Vienna metro / tram (single ticket)", es: "Metro / tranvía de Viena (billete sencillo)", de: "Wiener U-Bahn/Straßenbahn (Einheitsticket)" },
            price: "2,40 €",
            detail: { fr: "Pass 24h à 8 €, pass semaine à 17,10 €", en: "24h pass at 8 €, weekly pass at 17.10 €", es: "Bono de 24h a 8 €, bono semanal a 17,10 €", de: "24-Stunden-Karte für 8 €, Wochenkarte für 17,10 €" },
          },
          {
            label: { fr: "Train ÖBB Vienne–Salzbourg", en: "ÖBB train Vienna–Salzburg", es: "Tren ÖBB Viena–Salzburgo", de: "Zug ÖBB Wien–Salzburg" },
            price: "25–70 €",
            detail: { fr: "En 2h30, Sparschiene dès 19 € si réservé tôt", en: "2h30 journey, Sparschiene fares from 19 € if booked early", es: "En 2h30, tarifas Sparschiene desde 19 € si se reserva con antelación", de: "In 2 Std. 30 Min., Sparschiene ab 19€ bei frühzeitiger Buchung" },
          },
          {
            label: { fr: "OBB Nightjet (train de nuit)", en: "ÖBB Nightjet (night train)", es: "ÖBB Nightjet (tren nocturno)", de: "OBB Nightjet (Nachtzug)" },
            price: "30–80 €",
            detail: { fr: "Réseau de trains de nuit international depuis Vienne", en: "International night train network from Vienna", es: "Red internacional de trenes nocturnos desde Viena", de: "Internationales Nachtzugnetz ab Wien" },
          },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          {
            label: { fr: "Musée à Vienne (KHM, Belvedere…)", en: "Museum in Vienna (KHM, Belvedere…)", es: "Museo en Viena (KHM, Belvedere…)", de: "Museum in Wien (KHM, Belvedere…)" },
            price: "16–21 €",
            detail: { fr: "Nombreux pass combinés disponibles", en: "Many combined passes available", es: "Numerosos bonos combinados disponibles", de: "Viele Kombipässe verfügbar" },
          },
          {
            label: { fr: "Opéra de Vienne (debout)", en: "Vienna Opera (standing room)", es: "Ópera de Viena (de pie)", de: "Wiener Oper (stehend)" },
            price: "3–15 €",
            detail: { fr: "Places debout vendues 80 min avant le spectacle", en: "Standing tickets sold 80 min before the show", es: "Entradas de pie a la venta 80 min antes del espectáculo", de: "Der Verkauf der Stehplätze erfolgt 80 Minuten vor der Vorstellung" },
          },
          {
            label: { fr: "Téléphérique Nordkette Innsbruck", en: "Nordkette cable car, Innsbruck", es: "Teleférico Nordkette, Innsbruck", de: "Nordkettenbahn Innsbruck" },
            price: "35 €",
            detail: { fr: "Aller-retour depuis le centre-ville jusqu'à 2 300 m", en: "Return trip from the city centre up to 2,300 m", es: "Ida y vuelta desde el centro hasta 2300 m", de: "Hin- und Rückfahrt vom Stadtzentrum auf 2.300 m" },
          },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
        daily: "60–80 €/j",
        desc: { fr: "Auberge, Mittagsmenü et street food, transports en commun", en: "Hostel, Mittagsmenü and street food, public transport", es: "Albergue, Mittagsmenü y comida callejera, transporte público", de: "Hostel, Mittagsmenü und Streetfood, öffentliche Verkehrsmittel" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
        daily: "130–180 €/j",
        desc: { fr: "Hôtel 3 étoiles, restaurants le soir, opéra et musées", en: "3-star hotel, evening restaurants, opera and museums", es: "Hotel de 3 estrellas, restaurantes por la noche, ópera y museos", de: "3-Sterne-Hotel, Abendrestaurants, Oper und Museen" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: {
        fr: "Vienne (4j) → Salzkammergut (2j) → Salzbourg (2j) → Innsbruck (2j)", en: "Vienna (4d) → Salzkammergut (2d) → Salzburg (2d) → Innsbruck (2d)", es: "Viena (4d) → Salzkammergut (2d) → Salzburgo (2d) → Innsbruck (2d)", de: "Wien (4 Tage) → Salzkammergut (2 Tage) → Salzburg (2 Tage) → Innsbruck (2 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "950 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Vienne", en: "Return flight Paris–Vienna", es: "Vuelo ida y vuelta París–Viena", de: "Hin- und Rückflug Paris–Wien" }, amount: "80–160 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)", es: "Alojamiento (9 noches)", de: "Unterkunft (9 Nächte)" }, amount: "230–340 €" },
            { label: { fr: "Transports locaux + trains", en: "Local transport + trains", es: "Transporte local + trenes", de: "Nahverkehr + Züge" }, amount: "130–170 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "390–450 €" },
            { label: { fr: "Activités + musées", en: "Activities + museums", es: "Actividades + museos", de: "Aktivitäten + Museen" }, amount: "80–120 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "1 900 – 2 600 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Vienne", en: "Return flight Paris–Vienna", es: "Vuelo ida y vuelta París–Viena", de: "Hin- und Rückflug Paris–Wien" }, amount: "100–200 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)", es: "Alojamiento (9 noches)", de: "Unterkunft (9 Nächte)" }, amount: "800–1 100 €" },
            { label: { fr: "Transports locaux + trains", en: "Local transport + trains", es: "Transporte local + trenes", de: "Nahverkehr + Züge" }, amount: "200–280 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "600–750 €" },
            { label: { fr: "Activités + opéra", en: "Activities + opera", es: "Actividades + ópera", de: "Aktivitäten + Oper" }, amount: "150–250 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    {
      icon: "✈️",
      label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde París", de: "Flug ab Paris" },
      value: {
        fr: "Paris–Vienne : 2h de vol. Nombreuses liaisons directes (Air France, Austrian, easyJet). Aussi accessible en train de nuit.", en: "Paris–Vienna: 2h flight. Many direct connections (Air France, Austrian, easyJet). Also accessible by night train.", es: "París–Viena: 2h de vuelo. Numerosas conexiones directas (Air France, Austrian, easyJet). También accesible en tren nocturno.", de: "Paris–Wien: 2 Stunden Flug. Zahlreiche Direktverbindungen (Air France, Austrian, easyJet). Auch mit dem Nachtzug erreichbar.",
      },
    },
    {
      icon: "🪪",
      label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" },
      value: {
        fr: "Pas de visa pour les citoyens UE/Schengen. Carte d'identité suffisante.", en: "No visa required for EU/Schengen citizens. An ID card is sufficient.", es: "Sin visado para ciudadanos de la UE/Schengen. Basta con el DNI.", de: "Kein Visum für EU-/Schengen-Bürger. Ausreichender Personalausweis.",
      },
    },
    {
      icon: "💰",
      label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" },
      value: {
        fr: "Euro (€). CB acceptée dans la plupart des commerces. Avoir du liquide pour les marchés et petits villages.", en: "Euro (€). Cards accepted in most shops. Carry cash for markets and small villages.", es: "Euro (€). Tarjeta aceptada en la mayoría de comercios. Conviene llevar efectivo para mercados y pueblos pequeños.", de: "Euro (€). Kreditkarten werden in den meisten Geschäften akzeptiert. Halten Sie Bargeld für Märkte und kleine Dörfer bereit.",
      },
    },
    {
      icon: "🗣️",
      label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" },
      value: {
        fr: "Allemand autrichien. Anglais très bien parlé à Vienne et dans les zones touristiques.", en: "Austrian German. English is widely spoken in Vienna and tourist areas.", es: "Alemán austríaco. El inglés se habla muy bien en Viena y en las zonas turísticas.", de: "Österreichisches Deutsch. In Wien und den touristischen Gebieten wird sehr gut Englisch gesprochen.",
      },
    },
    {
      icon: "🔌",
      label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" },
      value: {
        fr: "Type F (Schuko, 2 broches rondes). 230V / 50Hz. Compatible avec les prises françaises.", en: "Type F (Schuko, 2 round pins). 230V / 50Hz. Compatible with French plugs.", es: "Tipo F (Schuko, 2 clavijas redondas). 230V / 50Hz. Compatible con los enchufes españoles.", de: "Typ F (Schuko, 2 runde Stifte). 230V/50Hz. Kompatibel mit französischen Steckdosen.",
      },
    },
    {
      icon: "💊",
      label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" },
      value: {
        fr: "Soins médicaux excellents. Carte Européenne d'Assurance Maladie valable pour les ressortissants UE.", en: "Excellent healthcare. European Health Insurance Card valid for EU nationals.", es: "Atención médica excelente. Tarjeta Sanitaria Europea válida para ciudadanos de la UE.", de: "Ausgezeichnete medizinische Versorgung. Europäische Krankenversicherungskarte, gültig für EU-Bürger.",
      },
    },
    {
      icon: "☕",
      label: { fr: "Café viennois", en: "Viennese coffee", es: "Café vienés", de: "Wiener Kaffee" },
      value: {
        fr: "Le café viennois est inscrit au patrimoine immatériel de l'UNESCO. Un Melange (avec lait) ou un Einspänner (avec crème) s'impose.", en: "Viennese coffee culture is listed on UNESCO's intangible heritage list. A Melange (with milk) or an Einspänner (with cream) is a must.", es: "La cultura del café vienés está inscrita en el patrimonio inmaterial de la UNESCO. Un Melange (con leche) o un Einspänner (con nata) son imprescindibles.", de: "Wiener Kaffee gehört zum immateriellen Weltkulturerbe der UNESCO. Eine Melange (mit Milch) oder ein Einspänner (mit Sahne) darf nicht fehlen.",
      },
    },
    {
      icon: "🎼",
      label: { fr: "Musique classique", en: "Classical music", es: "Música clásica", de: "Klassische Musik" },
      value: {
        fr: "Réserver billets d'opéra et concerts en avance. Places debout disponibles le soir même pour un prix symbolique.", en: "Book opera and concert tickets in advance. Standing-room tickets are available the same evening for a symbolic price.", es: "Reservar entradas de ópera y conciertos con antelación. Las entradas de pie están disponibles la misma noche por un precio simbólico.", de: "Buchen Sie Opernkarten und Konzerte im Voraus. Stehplätze sind noch am selben Abend zu einem geringen Preis verfügbar.",
      },
    },
  ],
};
