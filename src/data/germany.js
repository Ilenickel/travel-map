export const GERMANY = {
  code: "DEU",
  numericId: 276,
  name: { fr: "Allemagne", en: "Germany", es: "Alemania", de: "Deutschland" },
  emoji: "🇩🇪",
  capital: { fr: "Berlin", en: "Berlin", es: "Berlín", de: "Berlin" },
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
    architecture: 3,
    desert: 0,
    safari: 0,
    ski: 2,
    ville: 3,
    plage: 1,
    plongee: 2,
  },
  description: {
    fr: "L'Allemagne est un pays d'une grande diversité culturelle et paysagère, alliant métropoles dynamiques, forêts profondes, châteaux féeriques et villages médiévaux préservés. Berlin, capitale réunifiée, incarne à elle seule l'histoire tourmentée et le renouveau créatif du XXe siècle. La Bavière, avec ses Alpes imposantes, ses bières légendaires et son architecture baroque, offre un contraste saisissant avec le nord industriel et la vallée du Rhin.", en: "Germany is a country of remarkable cultural and scenic diversity, blending dynamic metropolises, deep forests, fairy-tale castles and preserved medieval villages. Berlin, the reunified capital, embodies on its own the turbulent history and creative renewal of the 20th century. Bavaria, with its imposing Alps, legendary beers and baroque architecture, offers a striking contrast with the industrial north and the Rhine valley.", es: "Alemania es un país de gran diversidad cultural y paisajística, que combina metrópolis dinámicas, bosques profundos, castillos de cuento y pueblos medievales conservados. Berlín, capital reunificada, encarna por sí sola la agitada historia y la renovación creativa del siglo XX. Baviera, con sus imponentes Alpes, sus legendarias cervezas y su arquitectura barroca, ofrece un contraste sorprendente con el norte industrial y el valle del Rin.", de: "Deutschland ist ein Land mit großer kultureller und landschaftlicher Vielfalt, das dynamische Metropolen, tiefe Wälder, magische Burgen und erhaltene mittelalterliche Dörfer vereint. Allein die wiedervereinigte Hauptstadt Berlin verkörpert die bewegte Geschichte und den kreativen Aufbruch des 20. Jahrhunderts. Bayern bietet mit seinen hoch aufragenden Alpen, legendären Bieren und barocker Architektur einen markanten Kontrast zum industriellen Norden und dem Rheintal.",
  },
  bestPeriods: [
    {
      months: { fr: "Mai – Sep", en: "May – Sep", es: "Mayo – Sept", de: "Mai – Sept" },
      label: { fr: "Idéal", en: "Ideal", es: "Ideal", de: "Ideal" },
      color: "#22c55e",
      description: {
        fr: "Temps ensoleillé, jardins en fleurs, festivals de plein air et biergärten animés.", en: "Sunny weather, gardens in bloom, outdoor festivals and lively beer gardens.", es: "Clima soleado, jardines en flor, festivales al aire libre y animados biergärten.", de: "Sonniges Wetter, blühende Gärten, Outdoor-Feste und lebhafte Biergärten.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Oct", en: "Oct", es: "Oct", de: "Okt" },
      label: { fr: "Oktoberfest", en: "Oktoberfest", es: "Oktoberfest", de: "Oktoberfest" },
      color: "#22c55e",
      description: {
        fr: "Munich accueille la célèbre fête de la bière, forêts aux couleurs automnales splendides.", en: "Munich hosts the famous beer festival, and forests display splendid autumn colours.", es: "Múnich acoge la célebre fiesta de la cerveza, bosques con espléndidos colores otoñales.", de: "In München findet das berühmte Oktoberfest statt, Wälder mit prächtigen Herbstfarben.",
      },
      icon: "🍺",
    },
    {
      months: { fr: "Nov – Mar", en: "Nov – Mar", es: "Nov – Mar", de: "Nov. – Di" },
      label: { fr: "Marchés de Noël", en: "Christmas markets", es: "Mercados navideños", de: "Weihnachtsmärkte" },
      color: "#f59e0b",
      description: {
        fr: "Les marchés de Noël d'Allemagne sont parmi les plus beaux d'Europe, mais le froid est vif.", en: "Germany's Christmas markets are among the finest in Europe, but the cold is sharp.", es: "Los mercados navideños de Alemania están entre los más bonitos de Europa, aunque el frío es intenso.", de: "Deutschlands Weihnachtsmärkte gehören zu den schönsten in Europa, doch die Kälte ist bitter.",
      },
      icon: "🎄",
    },
  ],
  weatherCities: [
    {
      id: "berlin",
      name: "Berlin",
      region: { fr: "Nord-Est — climat continental tempéré", en: "Northeast — temperate continental climate", es: "Noreste — clima continental templado", de: "Nordosten – gemäßigtes kontinentales Klima" },
      data: [
        { month: "Jan", temp: 1, rain: 45, icon: "❄️" },
        { month: "Fév", temp: 2, rain: 40, icon: "❄️" },
        { month: "Mar", temp: 6, rain: 45, icon: "❄️" },
        { month: "Avr", temp: 11, rain: 40, icon: "⛅" },
        { month: "Mai", temp: 16, rain: 55, icon: "☀️" },
        { month: "Jun", temp: 19, rain: 65, icon: "☀️" },
        { month: "Jul", temp: 21, rain: 55, icon: "☀️" },
        { month: "Aoû", temp: 21, rain: 60, icon: "☀️" },
        { month: "Sep", temp: 17, rain: 45, icon: "☀️" },
        { month: "Oct", temp: 12, rain: 40, icon: "⛅" },
        { month: "Nov", temp: 6, rain: 45, icon: "❄️" },
        { month: "Déc", temp: 2, rain: 50, icon: "❄️" },
      ],
    },
    {
      id: "hamburg",
      name: "Hamburg",
      region: { fr: "Nord — climat océanique tempéré", en: "North — temperate oceanic climate", es: "Norte — clima oceánico templado", de: "Norden – gemäßigtes ozeanisches Klima" },
      data: [
        { month: "Jan", temp:  2, rain: 65,  icon: "❄️" },
        { month: "Fév", temp:  3, rain: 55,  icon: "❄️" },
        { month: "Mar", temp:  6, rain: 65,  icon: "⛅" },
        { month: "Avr", temp: 10, rain: 55,  icon: "⛅" },
        { month: "Mai", temp: 15, rain: 60,  icon: "☀️" },
        { month: "Jun", temp: 18, rain: 75,  icon: "☀️" },
        { month: "Jul", temp: 20, rain: 80,  icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 80,  icon: "☀️" },
        { month: "Sep", temp: 16, rain: 75,  icon: "☀️" },
        { month: "Oct", temp: 11, rain: 70,  icon: "⛅" },
        { month: "Nov", temp:  6, rain: 75,  icon: "⛅" },
        { month: "Déc", temp:  3, rain: 70,  icon: "❄️" },
      ],
    },
    {
      id: "munich",
      name: "Munich",
      region: { fr: "Bavière — climat continental, été plus chaud", en: "Bavaria — continental climate, warmer summer", es: "Baviera — clima continental, verano más cálido", de: "Bayern – kontinentales Klima, wärmerer Sommer" },
      data: [
        { month: "Jan", temp: 0, rain: 55, icon: "❄️" },
        { month: "Fév", temp: 2, rain: 50, icon: "❄️" },
        { month: "Mar", temp: 7, rain: 60, icon: "❄️" },
        { month: "Avr", temp: 12, rain: 70, icon: "⛅" },
        { month: "Mai", temp: 16, rain: 95, icon: "☀️" },
        { month: "Jun", temp: 20, rain: 120, icon: "☀️" },
        { month: "Jul", temp: 22, rain: 115, icon: "☀️" },
        { month: "Aoû", temp: 22, rain: 110, icon: "☀️" },
        { month: "Sep", temp: 18, rain: 85, icon: "☀️" },
        { month: "Oct", temp: 12, rain: 65, icon: "⛅" },
        { month: "Nov", temp: 5, rain: 60, icon: "❄️" },
        { month: "Déc", temp: 1, rain: 60, icon: "❄️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Berlin",
      region: { fr: "Brandebourg", en: "Brandenburg", es: "Brandeburgo", de: "Brandenburg" },
      description: {
        fr: "Berlin est une ville en perpétuelle réinvention, marquée par les cicatrices de l'Histoire et animée d'une créativité artistique unique en Europe. Le vestige du Mur, le Reichstag, l'île aux Musées et le mémorial de l'Holocauste témoignent d'un passé dense et complexe. La capitale allemande est aussi réputée pour sa scène musicale underground, ses galeries d'art contemporain et sa vie nocturne légendaire.", en: "Berlin is a city in constant reinvention, marked by the scars of history and animated by an artistic creativity unique in Europe. The remnants of the Wall, the Reichstag, Museum Island and the Holocaust Memorial bear witness to a dense and complex past. The German capital is also renowned for its underground music scene, contemporary art galleries and legendary nightlife.", es: "Berlín es una ciudad en perpetua reinvención, marcada por las cicatrices de la historia y animada por una creatividad artística única en Europa. Los restos del Muro, el Reichstag, la Isla de los Museos y el Memorial del Holocausto dan testimonio de un pasado denso y complejo. La capital alemana también es célebre por su escena musical underground, sus galerías de arte contemporáneo y su legendaria vida nocturna.", de: "Berlin ist eine Stadt in ständiger Neuerfindung, geprägt von den Narben der Geschichte und beseelt von einer in Europa einzigartigen künstlerischen Kreativität. Mauerreste, Reichstag, Museumsinsel und Holocaust-Mahnmal zeugen von einer dichten und komplexen Vergangenheit. Die deutsche Hauptstadt ist auch für ihre Underground-Musikszene, Galerien für zeitgenössische Kunst und ihr legendäres Nachtleben bekannt.",
      },
      wikipedia: "Berlin",
      tags: ["Histoire", "Culture", "Art", "Musées", "Nightlife", "Ville", "Architecture"],
      mustSee: [
        {
          name: { fr: "Mur de Berlin & Checkpoint Charlie — symboles de la Guerre froide", en: "Berlin Wall & Checkpoint Charlie — symbols of the Cold War", es: "Muro de Berlín y Checkpoint Charlie — símbolos de la Guerra Fría", de: "Berliner Mauer und Checkpoint Charlie – Symbole des Kalten Krieges" },
          wikipedia: "Berlin_Wall",
        },
        {
          name: { fr: "Reichstag — siège du Parlement allemand avec dôme de verre panoramique", en: "Reichstag — seat of the German Parliament with a panoramic glass dome", es: "Reichstag — sede del Parlamento alemán con su cúpula de cristal panorámica", de: "Reichstag – Sitz des Deutschen Bundestages mit Panorama-Glaskuppel" },
          wikipedia: "Reichstag_building",
        },
        {
          name: { fr: "Île aux Musées — ensemble de 5 musées classé au patrimoine UNESCO", en: "Museum Island — a group of 5 museums listed as a UNESCO World Heritage site", es: "Isla de los Museos — conjunto de 5 museos declarado Patrimonio UNESCO", de: "Museumsinsel – eine Gruppe von 5 Museen, die zum UNESCO-Weltkulturerbe gehören" },
          wikipedia: "Museum_Island",
        },
        {
          name: { fr: "Mémorial de l'Holocauste — installation sobre et puissante de 2 711 stèles", en: "Holocaust Memorial — a sober and powerful installation of 2,711 stelae", es: "Memorial del Holocausto — instalación sobria y poderosa de 2.711 estelas", de: "Holocaust-Mahnmal – schlichte und kraftvolle Installation aus 2.711 Stelen" },
          wikipedia: "Memorial_to_the_Murdered_Jews_of_Europe",
        },
      ],
    },
    {
      id: 2,
      name: { fr: "Bavière & Munich", en: "Bavaria & Munich", es: "Baviera y Múnich", de: "Bayern & München" },
      region: { fr: "Bavière", en: "Bavaria", es: "Baviera", de: "Bayern" },
      description: {
        fr: "La Bavière est la région la plus touristique d'Allemagne, avec Munich comme capitale festive et culturelle. La Marienplatz et la Residenz témoignent de la splendeur des Wittelsbach, tandis que les Alpes bavaroises toutes proches offrent randonnées et stations de ski. Le château de Neuschwanstein, perché sur son rocher, est l'un des sites les plus visités d'Europe.", en: "Bavaria is Germany's most popular tourist region, with Munich as its festive and cultural capital. Marienplatz and the Residenz showcase the splendour of the Wittelsbach dynasty, while the nearby Bavarian Alps offer hiking and ski resorts. Neuschwanstein Castle, perched on its rock, is one of the most visited sites in Europe.", es: "Baviera es la región más turística de Alemania, con Múnich como capital festiva y cultural. La Marienplatz y la Residenz reflejan el esplendor de los Wittelsbach, mientras que los cercanos Alpes bávaros ofrecen senderismo y estaciones de esquí. El castillo de Neuschwanstein, encaramado en su roca, es uno de los lugares más visitados de Europa.", de: "Bayern ist die touristischste Region Deutschlands, mit München als festlicher und kultureller Hauptstadt. Marienplatz und Residenz zeugen vom Glanz der Wittelsbacher, während die nahegelegenen Bayerischen Alpen Wander- und Skigebiete bieten. Das auf seinem Felsen thronende Schloss Neuschwanstein ist eine der meistbesuchten Sehenswürdigkeiten Europas.",
      },
      wikipedia: "File:Bavaria Statue and Ruhmeshalle Munich, April 2019 -01.jpg",
      tags: ["Culture", "Montagne", "Gastronomie", "Architecture", "Ski", "Ville"],
      mustSee: [
        {
          name: { fr: "Château de Neuschwanstein — château de conte de fées de Louis II de Bavière", en: "Neuschwanstein Castle — the fairy-tale castle of Ludwig II of Bavaria", es: "Castillo de Neuschwanstein — el castillo de cuento de Luis II de Baviera", de: "Schloss Neuschwanstein – Märchenschloss Ludwigs II. von Bayern" },
          wikipedia: "Neuschwanstein_Castle",
        },
        {
          name: { fr: "Marienplatz & Rathaus à Munich — cœur animé de la capitale bavaroise", en: "Marienplatz & Rathaus in Munich — the lively heart of the Bavarian capital", es: "Marienplatz y el Rathaus de Múnich — el animado corazón de la capital bávara", de: "Marienplatz & Rathaus in München – geschäftiges Herz der bayerischen Landeshauptstadt" },
          wikipedia: "Marienplatz",
        },
        {
          name: { fr: "Englischer Garten — l'un des plus grands parcs urbains du monde", en: "Englischer Garten — one of the largest urban parks in the world", es: "Englischer Garten — uno de los mayores parques urbanos del mundo", de: "Englischer Garten – einer der größten Stadtparks der Welt" },
          wikipedia: "File:Monopteros, Englischer Garten, Munich, 20251110 0835 6028.jpg",
        },
        {
          name: { fr: "Zugspitze — point culminant d'Allemagne à 2 962 m", en: "Zugspitze — Germany's highest peak at 2,962 m", es: "Zugspitze — el punto más alto de Alemania, a 2.962 m", de: "Zugspitze – höchster Punkt Deutschlands mit 2.962 m" },
          wikipedia: "Zugspitze",
        },
      ],
    },
    {
      id: 3,
      name: { fr: "Vallée du Rhin Romantique", en: "Romantic Rhine Valley", es: "Valle del Rin Romántico", de: "Romantisches Rheintal" },
      region: { fr: "Rhénanie-Palatinat", en: "Rhineland-Palatinate", es: "Renania-Palatinado", de: "Rheinland-Pfalz" },
      description: {
        fr: "Le Rhin romantique entre Bingen et Coblence offre l'un des paysages les plus pittoresques d'Europe, avec ses vignobles en terrasses, ses châteaux médiévaux perchés et ses villages aux maisons à colombages. La Loreley, rocher légendaire surplombant le fleuve, cristallise toute la poésie de cette région inscrite au patrimoine mondial de l'UNESCO. Une croisière fluviale permet d'apprécier ce panorama unique.", en: "The Romantic Rhine between Bingen and Koblenz offers one of the most picturesque landscapes in Europe, with its terraced vineyards, perched medieval castles and half-timbered villages. The Loreley, a legendary rock overlooking the river, embodies all the poetry of this region, a UNESCO World Heritage site. A river cruise is the best way to take in this unique panorama.", es: "El Rin romántico entre Bingen y Coblenza ofrece uno de los paisajes más pintorescos de Europa, con sus viñedos en terrazas, sus castillos medievales encaramados y sus pueblos de casas de entramado de madera. La Loreley, roca legendaria que domina el río, encarna toda la poesía de esta región declarada Patrimonio de la Humanidad UNESCO. Un crucero fluvial es la mejor forma de disfrutar de este panorama único.", de: "Der romantische Rhein zwischen Bingen und Koblenz bietet mit seinen Weinbergterrassen, mittelalterlichen Höhenburgen und Dörfern mit Fachwerkhäusern eine der malerischsten Landschaften Europas. Die Loreley, ein legendärer Felsen über dem Fluss, kristallisiert die ganze Poesie dieser Region heraus, die zum UNESCO-Weltkulturerbe gehört. Bei einer Flusskreuzfahrt können Sie dieses einzigartige Panorama genießen.",
      },
      wikipedia: "Rhine_Gorge",
      tags: ["Nature", "Gastronomie", "UNESCO", "Randonnée", "Plage", "Architecture"],
      mustSee: [
        {
          name: { fr: "Rocher de la Loreley — site légendaire aux 130 m de hauteur sur le Rhin", en: "Loreley Rock — legendary 130 m outcrop above the Rhine", es: "Roca de la Loreley — enclave legendario de 130 m sobre el Rin", de: "Loreleyfelsen – sagenumwobene Stätte 130 m hoch am Rhein" },
          wikipedia: "Lorelei",
        },
        {
          name: { fr: "Château de Rheinfels — imposante forteresse médiévale du XIIIe siècle", en: "Rheinfels Castle — an imposing 13th-century medieval fortress", es: "Castillo de Rheinfels — imponente fortaleza medieval del siglo XIII", de: "Burg Rheinfels – imposante mittelalterliche Festung aus dem 13. Jahrhundert" },
          wikipedia: "Rheinfels_Castle",
        },
        {
          name: { fr: "Rüdesheim am Rhein — village viticole avec sa célèbre Drosselgasse", en: "Rüdesheim am Rhein — a wine village with its famous Drosselgasse", es: "Rüdesheim am Rhein — pueblo vinícola con su célebre Drosselgasse", de: "Rüdesheim am Rhein – Weindorf mit seiner berühmten Drosselgasse" },
          wikipedia: "Rüdesheim_am_Rhein",
        },
        {
          name: { fr: "Coblence & Deutsches Eck — confluent monumental du Rhin et de la Moselle", en: "Koblenz & Deutsches Eck — the monumental confluence of the Rhine and the Moselle", es: "Coblenza y Deutsches Eck — la confluencia monumental del Rin y el Mosela", de: "Koblenz & Deutsches Eck – monumentaler Zusammenfluss von Rhein und Mosel" },
          wikipedia: "Koblenz",
        },
      ],
    },
    {
      id: 4,
      name: { fr: "Forêt-Noire & Heidelberg", en: "Black Forest & Heidelberg", es: "Selva Negra y Heidelberg", de: "Schwarzwald & Heidelberg" },
      region: { fr: "Bade-Wurtemberg", en: "Baden-Württemberg", es: "Baden-Wurtemberg", de: "Baden-Württemberg" },
      description: {
        fr: "La Forêt-Noire est un massif forestier d'une beauté sauvage, parsemé de villages traditionnels aux toits de chaume, de cascades et de lacs glaciaires. Tout proche, Heidelberg est l'une des plus belles villes médiévales d'Allemagne, dominée par son château en ruines romantiques et traversée par la Neckar. Les gâteaux Schwarzwälder Kirschtorte et les horloges à coucou sont les emblèmes gastronomiques et artisanaux de la région.", en: "The Black Forest is a wild and beautiful mountain range, dotted with traditional thatched-roof villages, waterfalls and glacial lakes. Nearby, Heidelberg is one of Germany's most beautiful medieval towns, dominated by its romantic ruined castle and crossed by the Neckar. Schwarzwälder Kirschtorte cakes and cuckoo clocks are the region's culinary and craft emblems.", es: "La Selva Negra es un macizo forestal de belleza salvaje, salpicado de pueblos tradicionales de tejados de paja, cascadas y lagos glaciares. Cerca de allí, Heidelberg es una de las ciudades medievales más bellas de Alemania, dominada por su romántico castillo en ruinas y atravesada por el Neckar. La tarta Schwarzwälder Kirschtorte y los relojes de cuco son los emblemas gastronómicos y artesanales de la región.", de: "Der Schwarzwald ist ein Wald von wilder Schönheit, übersät mit traditionellen strohgedeckten Dörfern, Wasserfällen und Gletscherseen. In der Nähe liegt Heidelberg, eine der schönsten mittelalterlichen Städte Deutschlands, dominiert von seinen romantischen Burgruinen und durchflossen vom Neckar. Schwarzwälder Kirschtorten und Kuckucksuhren sind die gastronomischen und handwerklichen Wahrzeichen der Region.",
      },
      wikipedia: "Black_Forest",
      tags: ["Nature", "Randonnée", "Histoire", "Gastronomie", "Aventure"],
      mustSee: [
        {
          name: { fr: "Château de Heidelberg — ruines romantiques dominant la ville et le Neckar", en: "Heidelberg Castle — romantic ruins overlooking the town and the Neckar", es: "Castillo de Heidelberg — ruinas románticas que dominan la ciudad y el Neckar", de: "Heidelberger Schloss – romantische Ruine mit Blick auf die Stadt und den Neckar" },
          wikipedia: "Heidelberg_Castle",
        },
        {
          name: { fr: "Triberg — village des cascades et capitale des horloges à coucou", en: "Triberg — village of waterfalls and capital of cuckoo clocks", es: "Triberg — pueblo de las cascadas y capital de los relojes de cuco", de: "Triberg – Dorf der Wasserfälle und Hauptstadt der Kuckucksuhren" },
          wikipedia: "Triberg_im_Schwarzwald",
        },
        {
          name: { fr: "Titisee — lac glaciaire au cœur de la Forêt-Noire", en: "Titisee — a glacial lake at the heart of the Black Forest", es: "Titisee — lago glaciar en el corazón de la Selva Negra", de: "Titisee – Gletschersee im Herzen des Schwarzwaldes" },
          wikipedia: "Titisee",
        },
        {
          name: { fr: "Fribourg-en-Brisgau — ville universitaire avec sa magnifique cathédrale gothique", en: "Freiburg im Breisgau — a university town with its magnificent Gothic cathedral", es: "Friburgo de Brisgovia — ciudad universitaria con su magnífica catedral gótica", de: "Freiburg im Breisgau – Universitätsstadt mit ihrem prachtvollen gotischen Dom" },
          wikipedia: "Freiburg_im_Breisgau",
        },
      ],
    },
    {
      id: 5,
      name: "Hamburg",
      region: { fr: "Nord", en: "North", es: "Norte", de: "Norden" },
      description: {
        fr: "Deuxième ville d'Allemagne, Hamburg est une métropole portuaire fière de son passé hanséatique et de son architecture de briques rouges. La Speicherstadt, entrepôts du XIXe siècle reconvertis en musées et galeries, est classée UNESCO. Le Reeperbahn est le quartier de divertissement le plus animé d'Europe du Nord, et le port — le 3e plus grand d'Europe — se visite en bateau. C'est aussi la ville des Beatles, qui y ont fait leurs débuts.", en: "Germany's second city, Hamburg is a port metropolis proud of its Hanseatic past and red-brick architecture. The Speicherstadt, 19th-century warehouses converted into museums and galleries, is a UNESCO World Heritage site. The Reeperbahn is northern Europe's liveliest entertainment district, and the port — the 3rd largest in Europe — can be explored by boat. It is also the city of the Beatles, who got their start here.", es: "Segunda ciudad de Alemania, Hamburgo es una metrópolis portuaria orgullosa de su pasado hanseático y su arquitectura de ladrillo rojo. La Speicherstadt, almacenes del siglo XIX convertidos en museos y galerías, es Patrimonio UNESCO. El Reeperbahn es el barrio de entretenimiento más animado del norte de Europa, y el puerto —el tercero más grande de Europa— se puede visitar en barco. Es también la ciudad de los Beatles, que debutaron aquí.", de: "Hamburg, die zweitgrößte Stadt Deutschlands, ist eine Hafenmetropole, die stolz auf ihre hanseatische Vergangenheit und ihre rote Backsteinarchitektur ist. Die Speicherstadt, im 19. Jahrhundert in Museen und Galerien umgewandelte Lagerhäuser, steht auf der UNESCO-Liste. Die Reeperbahn ist das lebhafteste Vergnügungsviertel Nordeuropas und der Hafen – der drittgrößte Europas – kann mit dem Boot besucht werden. Es ist auch die Stadt der Beatles, die dort ihr Debüt gaben.",
      },
      wikipedia: "Hamburg",
      tags: ["Ville", "Culture", "Architecture", "UNESCO", "Histoire"],
      mustSee: [
        {
          name: { fr: "Speicherstadt — entrepôts en briques rouges classés UNESCO", en: "Speicherstadt — UNESCO-listed red-brick warehouses", es: "Speicherstadt — almacenes de ladrillo rojo Patrimonio UNESCO", de: "Speicherstadt – UNESCO-geschützte Lagerhäuser aus rotem Backstein" },
          wikipedia: "File:Hamburg,_Speicherstadt,_Wasserschloss_--_2016_--_3223-9.jpg",
        },
        {
          name: { fr: "Elbphilharmonie — salle de concert au design spectaculaire sur l'Elbe", en: "Elbphilharmonie — a concert hall with spectacular design on the Elbe", es: "Elbphilharmonie — sala de conciertos de diseño espectacular junto al Elba", de: "Elbphilharmonie – spektakulär gestaltetes Konzerthaus an der Elbe" },
          wikipedia: "Elbphilharmonie",
        },
        {
          name: { fr: "Port de Hamburg — croisière en bateau dans le 3e plus grand port d'Europe", en: "Port of Hamburg — a boat cruise through Europe's 3rd largest port", es: "Puerto de Hamburgo — crucero en barco por el 3er puerto más grande de Europa", de: "Hafen Hamburg – Bootsfahrt im drittgrößten Hafen Europas" },
          wikipedia: "Port_of_Hamburg",
        },
        {
          name: { fr: "Reeperbahn & quartier de St. Pauli — où les Beatles ont débuté", en: "Reeperbahn & St. Pauli district — where the Beatles got their start", es: "Reeperbahn y el barrio de St. Pauli — donde debutaron los Beatles", de: "Reeperbahn & St. Pauli-Viertel – wo die Beatles ihren Anfang nahmen" },
          wikipedia: "Reeperbahn",
        },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "L'Allemagne offre un bon rapport qualité-prix pour l'Europe de l'Ouest. Berlin est l'une des capitales les moins chères d'Europe occidentale. Munich et Francfort sont plus onéreuses, mais restent abordables comparées à Paris ou Londres.", en: "Germany offers good value for money within Western Europe. Berlin is one of the cheapest capitals in Western Europe. Munich and Frankfurt are pricier, but remain affordable compared to Paris or London.", es: "Alemania ofrece una buena relación calidad-precio dentro de Europa occidental. Berlín es una de las capitales más baratas de Europa occidental. Múnich y Fráncfort son más caras, pero siguen siendo asequibles comparadas con París o Londres.", de: "Deutschland bietet für Westeuropa ein gutes Preis-Leistungs-Verhältnis. Berlin ist eine der günstigsten Hauptstädte Westeuropas. München und Frankfurt sind teurer, bleiben aber im Vergleich zu Paris oder London erschwinglich.",
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
            label: { fr: "Auberge de jeunesse (dortoir)", en: "Youth hostel (dorm)", es: "Albergue juvenil (dormitorio)", de: "Jugendherberge (Wohnheim)" },
            price: "20–35 €",
            detail: { fr: "Très développé dans toutes les grandes villes", en: "Widely available in all major cities", es: "Muy extendido en todas las grandes ciudades", de: "In allen größeren Städten hoch entwickelt" },
          },
          {
            label: { fr: "Hôtel 2–3 étoiles", en: "2–3 star hotel", es: "Hotel 2–3 estrellas", de: "2–3-Sterne-Hotel" },
            price: "65–120 €",
            detail: { fr: "Chambre double, petit-déjeuner souvent inclus", en: "Double room, breakfast often included", es: "Habitación doble, desayuno a menudo incluido", de: "Doppelzimmer, Frühstück oft inklusive" },
          },
          {
            label: { fr: "Hôtel 4 étoiles", en: "4 star hotel", es: "Hotel 4 estrellas", de: "4-Sterne-Hotel" },
            price: "120–220 €",
            detail: { fr: "Plus cher à Munich et Francfort", en: "Pricier in Munich and Frankfurt", es: "Más caro en Múnich y Fráncfort", de: "Teurer in München und Frankfurt" },
          },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          {
            label: { fr: "Bratwurst / kebab / bakery", en: "Bratwurst / kebab / bakery", es: "Bratwurst / kebab / panadería", de: "Bratwurst / Döner / Bäckerei" },
            price: "3–7 €",
            detail: { fr: "Street food très développé et de qualité", en: "Street food is widespread and of good quality", es: "Comida callejera muy extendida y de calidad", de: "Sehr entwickeltes und hochwertiges Streetfood" },
          },
          {
            label: { fr: "Déjeuner au restaurant", en: "Lunch at a restaurant", es: "Almuerzo en restaurante", de: "Mittagessen im Restaurant" },
            price: "10–16 €",
            detail: { fr: "Plat du jour, souvent très copieux", en: "Daily special, often very generous", es: "Plato del día, a menudo muy contundente", de: "Tagesgericht, oft sehr deftig" },
          },
          {
            label: { fr: "Dîner restaurant traditionnel", en: "Dinner at a traditional restaurant", es: "Cena en restaurante tradicional", de: "Traditionelles Abendessen im Restaurant" },
            price: "18–35 €",
            detail: { fr: "Avec bière incluse dans les brasseries", en: "Beer included in brewery restaurants", es: "Con cerveza incluida en las cervecerías", de: "Mit Bier aus den Brauereien inklusive" },
          },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          {
            label: { fr: "Ticket métro / bus (aller simple)", en: "Metro / bus ticket (one-way)", es: "Billete de metro / autobús (sencillo)", de: "Metro-/Busticket (einfache Fahrt)" },
            price: "2–3,50 €",
            detail: { fr: "Pass journée très avantageux (7–10 €)", en: "Day pass is great value (7–10 €)", es: "El bono de día sale muy a cuenta (7–10 €)", de: "Sehr vorteilhafte Tageskarte (7–10 €)" },
          },
          {
            label: { fr: "Train IC/ICE Berlin–Munich", en: "IC/ICE train Berlin–Munich", es: "Tren IC/ICE Berlín–Múnich", de: "Zug IC/ICE Berlin–München" },
            price: "30–90 €",
            detail: { fr: "En 4h, tarif Sparpreis dès 17 € si réservé tôt", en: "4h journey, Sparpreis fares from 17 € if booked early", es: "En 4h, tarifas Sparpreis desde 17 € si se reserva con antelación", de: "In 4 Stunden, Sparpreis ab 17 € bei frühzeitiger Buchung" },
          },
          {
            label: { fr: "FlixBus longue distance", en: "Long-distance FlixBus", es: "FlixBus de larga distancia", de: "FlixBus Fernverkehr" },
            price: "10–30 €",
            detail: { fr: "Alternative économique au train pour les longues distances", en: "A cheap alternative to the train for long distances", es: "Alternativa económica al tren para largas distancias", de: "Kostengünstige Alternative zum Zug über weite Strecken" },
          },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          {
            label: { fr: "Musée à Berlin (île aux Musées)", en: "Museum in Berlin (Museum Island)", es: "Museo en Berlín (Isla de los Museos)", de: "Museum in Berlin (Museumsinsel)" },
            price: "12–19 €",
            detail: { fr: "Pass combiné disponible pour plusieurs musées", en: "Combined pass available for several museums", es: "Bono combinado disponible para varios museos", de: "Kombipass für mehrere Museen erhältlich" },
          },
          {
            label: { fr: "Château de Neuschwanstein", en: "Neuschwanstein Castle", es: "Castillo de Neuschwanstein", de: "Schloss Neuschwanstein" },
            price: "17 €",
            detail: { fr: "Réservation obligatoire en ligne en haute saison", en: "Online booking required in high season", es: "Reserva en línea obligatoria en temporada alta", de: "In der Hochsaison ist eine Online-Reservierung erforderlich" },
          },
          {
            label: { fr: "Tour guidé à vélo", en: "Guided bike tour", es: "Tour guiado en bicicleta", de: "Geführte Radtour" },
            price: "15–25 €",
            detail: { fr: "Berlin propose d'excellentes visites à vélo", en: "Berlin offers excellent bike tours", es: "Berlín ofrece excelentes recorridos en bicicleta", de: "Berlin bietet hervorragende Radtouren" },
          },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
        daily: "60–80 €/j",
        desc: { fr: "Auberge, street food et plats du jour, transports en commun", en: "Hostel, street food and daily specials, public transport", es: "Albergue, comida callejera y platos del día, transporte público", de: "Gasthof, Streetfood und Tagesgerichte, öffentliche Verkehrsmittel" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
        daily: "120–180 €/j",
        desc: { fr: "Hôtel 3 étoiles, restaurants mid-range, activités culturelles", en: "3-star hotel, mid-range restaurants, cultural activities", es: "Hotel 3 estrellas, restaurantes de gama media, actividades culturales", de: "3-Sterne-Hotel, mittelklassige Restaurants, kulturelle Aktivitäten" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: { fr: "Berlin (4j) → Vallée du Rhin (2j) → Munich & Bavière (4j)", en: "Berlin (4d) → Rhine Valley (2d) → Munich & Bavaria (4d)", es: "Berlín (4d) → Valle del Rin (2d) → Múnich y Baviera (4d)", de: "Berlin (4 Tage) → Rheintal (2 Tage) → München & Bayern (4 Tage)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "950 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Berlin", en: "Return flight Paris–Berlin", es: "Vuelo ida y vuelta Madrid–Berlín", de: "Hin- und Rückflug Paris–Berlin" }, amount: "80–150 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)", es: "Alojamiento (9 noches)", de: "Unterkunft (9 Nächte)" }, amount: "220–315 €" },
            { label: { fr: "Transports locaux + trains", en: "Local transport + trains", es: "Transporte local + trenes", de: "Nahverkehr + Züge" }, amount: "130–180 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "380–450 €" },
            { label: { fr: "Activités + musées", en: "Activities + museums", es: "Actividades + museos", de: "Aktivitäten + Museen" }, amount: "70–100 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "1 900 – 2 600 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Berlin", en: "Return flight Paris–Berlin", es: "Vuelo ida y vuelta Madrid–Berlín", de: "Hin- und Rückflug Paris–Berlin" }, amount: "100–200 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)", es: "Alojamiento (9 noches)", de: "Unterkunft (9 Nächte)" }, amount: "800–1 100 €" },
            { label: { fr: "Transports locaux + trains", en: "Local transport + trains", es: "Transporte local + trenes", de: "Nahverkehr + Züge" }, amount: "200–280 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "600–750 €" },
            { label: { fr: "Activités + musées", en: "Activities + museums", es: "Actividades + museos", de: "Aktivitäten + Museen" }, amount: "130–200 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    {
      icon: "✈️",
      label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" },
      value: { fr: "Paris–Berlin : 1h30 de vol. Nombreuses compagnies low-cost (easyJet, Transavia). Aussi accessible en train de nuit.", en: "Paris–Berlin: 1h30 flight. Many low-cost airlines (easyJet, Transavia). Also accessible by night train.", es: "Madrid–Berlín: unas 2h30 de vuelo. Numerosas aerolíneas low-cost (easyJet, Ryanair).", de: "Paris–Berlin: 1 Std. 30 Min. Flug. Viele Billigflieger (easyJet, Transavia). Auch mit dem Nachtzug erreichbar." },
    },
    {
      icon: "🪪",
      label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" },
      value: { fr: "Pas de visa pour les citoyens UE/Schengen. Carte d'identité suffisante.", en: "No visa for EU/Schengen citizens. An ID card is sufficient.", es: "Sin visado para ciudadanos de la UE/Schengen. El DNI es suficiente.", de: "Kein Visum für EU-/Schengen-Bürger. Ausreichender Personalausweis." },
    },
    {
      icon: "💰",
      label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" },
      value: { fr: "Euro (€). Attention : de nombreux restaurants et commerces en Allemagne sont encore cash only.", en: "Euro (€). Note: many restaurants and shops in Germany are still cash only.", es: "Euro (€). Atención: muchos restaurantes y comercios en Alemania todavía solo aceptan efectivo.", de: "Euro (€). Bitte beachten Sie: Viele Restaurants und Geschäfte in Deutschland akzeptieren weiterhin nur Barzahlung." },
    },
    {
      icon: "🗣️",
      label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" },
      value: { fr: "Allemand. Anglais très bien parlé dans les grandes villes et les zones touristiques.", en: "German. English is very widely spoken in major cities and tourist areas.", es: "Alemán. El inglés se habla muy bien en las grandes ciudades y zonas turísticas.", de: "Deutsch. In Großstädten und Touristengebieten wird sehr gut Englisch gesprochen." },
    },
    {
      icon: "🔌",
      label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" },
      value: { fr: "Type F (Schuko, 2 broches rondes). 230V / 50Hz. Compatible avec les prises françaises.", en: "Type F (Schuko, 2 round pins). 230V / 50Hz. Compatible with French plugs.", es: "Tipo F (Schuko, 2 clavijas redondas). 230V / 50Hz. Compatible con los enchufes europeos.", de: "Typ F (Schuko, 2 runde Stifte). 230V/50Hz. Kompatibel mit französischen Steckdosen." },
    },
    {
      icon: "💊",
      label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" },
      value: { fr: "Soins médicaux excellents. Carte Européenne d'Assurance Maladie valable pour les ressortissants UE.", en: "Excellent medical care. European Health Insurance Card valid for EU nationals.", es: "Atención médica excelente. Tarjeta Sanitaria Europea válida para ciudadanos de la UE.", de: "Ausgezeichnete medizinische Versorgung. Europäische Krankenversicherungskarte, gültig für EU-Bürger." },
    },
    {
      icon: "🚲",
      label: { fr: "Mobilité", en: "Mobility", es: "Movilidad", de: "Mobilität" },
      value: { fr: "Excellent réseau cyclable dans toutes les grandes villes. Transports en commun très ponctuels.", en: "Excellent cycling network in all major cities. Public transport is very punctual.", es: "Excelente red ciclista en todas las grandes ciudades. Transporte público muy puntual.", de: "Ausgezeichnetes Fahrradnetz in allen größeren Städten. Sehr pünktliche öffentliche Verkehrsmittel." },
    },
    {
      icon: "🏪",
      label: { fr: "Commerces", en: "Shops", es: "Comercios", de: "Geschäfte" },
      value: { fr: "Fermés le dimanche dans la quasi-totalité du pays. Planifier les courses en conséquence.", en: "Closed on Sundays across almost the entire country. Plan your shopping accordingly.", es: "Cerrados los domingos en casi todo el país. Planificar las compras en consecuencia.", de: "Fast im ganzen Land sonntags geschlossen. Planen Sie Besorgungen entsprechend." },
    },
  ],
};
