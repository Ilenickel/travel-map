export const POLAND = {
  code: "POL",
  numericId: 616,
  name: { fr: "Pologne", en: "Poland", es: "Polonia", de: "Polen" },
  emoji: "🇵🇱",
  capital: { fr: "Varsovie", en: "Warsaw", es: "Varsovia", de: "Warschau" },
  language: { fr: "Polonais", en: "Polish", es: "Polaco", de: "Polnisch" },
  currency: { fr: "Złoty (PLN)", en: "Złoty (PLN)", es: "Złoty (PLN)", de: "Zloty (PLN)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 45, budgetMid: 85,
    tripMin: 800, tripMid: 1800,
  },
  criteria: {
    unesco: 2,
    nature: 2,
    randonnee: 2,
    gastronomie: 2,
    architecture: 2,
    desert: 0,
    safari: 0,
    ski: 2,
    ville: 2,
    plage: 2,
    plongee: 1,
  },
  description: {
    fr: "La Pologne est une révélation en Europe centrale : Cracovie et son centre médiéval intact (UNESCO), Auschwitz-Birkenau (mémorial UNESCO), Varsovie et son incroyable reconstruction à l'identique après la WWII, la forêt primaire de Białowieża avec ses bisons européens (UNESCO), et Gdańsk sur la mer Baltique. Un pays à la cuisine généreuse (pierogi, żurek, bigos) et à l'hospitalité sincère.", en: "Poland is a revelation in Central Europe: Kraków and its intact medieval centre (UNESCO), Auschwitz-Birkenau (UNESCO memorial), Warsaw and its incredible identical reconstruction after WWII, the Białowieża primeval forest with its European bison (UNESCO), and Gdańsk on the Baltic Sea. A country with generous cuisine (pierogi, żurek, bigos) and sincere hospitality.", es: "Polonia es una revelación en Europa Central: Cracovia y su centro medieval intacto (UNESCO), Auschwitz-Birkenau (memorial UNESCO), Varsovia y su increíble reconstrucción idéntica tras la Segunda Guerra Mundial, el bosque primario de Białowieża con sus bisontes europeos (UNESCO), y Gdansk a orillas del mar Báltico. Un país de cocina generosa (pierogi, żurek, bigos) y hospitalidad sincera.", de: "Polen ist eine Offenbarung in Mitteleuropa: Krakau und sein intaktes mittelalterliches Zentrum (UNESCO), Auschwitz-Birkenau (UNESCO-Gedenkstätte), Warschau und sein unglaublich identischer Wiederaufbau nach dem Zweiten Weltkrieg, der Urwald von Białowieża mit seinem europäischen Bison (UNESCO) und Danzig an der Ostsee. Ein Land mit großzügiger Küche (Pierogi, żurek, Bigos) und aufrichtiger Gastfreundschaft.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Septembre", en: "May – September", es: "Mayo – Septiembre", de: "Mai – September" },
      label: { fr: "Saison douce", en: "Mild season", es: "Temporada templada", de: "Milde Jahreszeit" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : températures agréables (18–26°C), festivals, terrasses animées. Juin–août sont les mois les plus beaux mais aussi les plus fréquentés.", en: "Best time to visit: pleasant temperatures (18–26°C), festivals, lively terraces. June–August are the finest months but also the busiest.", es: "Mejor época para viajar: temperaturas agradables (18–26°C), festivales, terrazas animadas. Junio–agosto son los meses más hermosos, pero también los más concurridos.", de: "Beste Zeit: angenehme Temperaturen (18–26°C), Feste, lebhafte Terrassen. Juni–August sind die schönsten Monate, aber auch die geschäftigsten.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Février", en: "December – February", es: "Diciembre – Febrero", de: "Dezember – Februar" },
      label: { fr: "Hiver", en: "Winter", es: "Invierno", de: "Winter" },
      color: "#ef4444",
      description: {
        fr: "Froid (-5 à -10°C), mais marchés de Noël exceptionnels à Cracovie et Varsovie (décembre). Ski dans les Tatras (Zakopane).", en: "Cold (-5 to -10°C), but exceptional Christmas markets in Kraków and Warsaw (December). Skiing in the Tatras (Zakopane).", es: "Frío (-5 a -10°C), pero mercados navideños excepcionales en Cracovia y Varsovia (diciembre). Esquí en los Tatras (Zakopane).", de: "Kalt (-5 bis -10°C), aber außergewöhnliche Weihnachtsmärkte in Krakau und Warschau (Dezember). Skifahren in der Tatra (Zakopane).",
      },
      icon: "❄️",
    },
  ],

  weatherCities: [
    {
      id: "warsaw",
      name: "Varsovie",
      region: { fr: "Mazovie (centre)", en: "Masovia (centre)", es: "Mazovia (centro)", de: "Masowien (Mitte)" },
      data: [
        { month: "Jan", temp: -2, rain: 25,  icon: "❄️" },
        { month: "Fév", temp: -1, rain: 25,  icon: "❄️" },
        { month: "Mar", temp:  4, rain: 30,  icon: "⛅" },
        { month: "Avr", temp: 10, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 15, rain: 55,  icon: "⛅" },
        { month: "Jun", temp: 18, rain: 75,  icon: "☀️" },
        { month: "Jul", temp: 20, rain: 75,  icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 65,  icon: "☀️" },
        { month: "Sep", temp: 15, rain: 50,  icon: "⛅" },
        { month: "Oct", temp:  9, rain: 45,  icon: "⛅" },
        { month: "Nov", temp:  3, rain: 40,  icon: "⛅" },
        { month: "Déc", temp: -1, rain: 35,  icon: "❄️" },
      ],
    },
    {
      id: "krakow",
      name: "Cracovie",
      region: { fr: "Petite-Pologne (sud)", en: "Lesser Poland (south)", es: "Pequeña Polonia (sur)", de: "Kleinpolen (Süden)" },
      data: [
        { month: "Jan", temp: -2, rain: 30,  icon: "❄️" },
        { month: "Fév", temp: -1, rain: 25,  icon: "❄️" },
        { month: "Mar", temp:  4, rain: 35,  icon: "⛅" },
        { month: "Avr", temp: 10, rain: 40,  icon: "⛅" },
        { month: "Mai", temp: 15, rain: 65,  icon: "⛅" },
        { month: "Jun", temp: 18, rain: 85,  icon: "☀️" },
        { month: "Jul", temp: 20, rain: 90,  icon: "☀️" },
        { month: "Aoû", temp: 19, rain: 75,  icon: "☀️" },
        { month: "Sep", temp: 15, rain: 60,  icon: "⛅" },
        { month: "Oct", temp:  9, rain: 50,  icon: "⛅" },
        { month: "Nov", temp:  3, rain: 45,  icon: "⛅" },
        { month: "Déc", temp: -1, rain: 40,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Cracovie — Centre médiéval UNESCO", en: "Kraków — UNESCO medieval centre", es: "Cracovia — Centro medieval UNESCO", de: "Krakau – UNESCO-Mittelalterzentrum" },
      region: { fr: "Petite-Pologne", en: "Lesser Poland", es: "Pequeña Polonia", de: "Kleinpolen" },
      description: {
        fr: "Cracovie est l'une des plus belles villes médiévales d'Europe : la place du marché (Rynek Główny, la plus grande place médiévale d'Europe), le château du Wawel dominant la Vistule, la vieille ville et Kazimierz (quartier juif historique) sont classés UNESCO depuis 1978. La ville a survécu à la WWII quasi intacte — un trésor rare en Europe centrale.", en: "Kraków is one of the most beautiful medieval cities in Europe: the market square (Rynek Główny, the largest medieval square in Europe), Wawel Castle overlooking the Vistula, the old town and Kazimierz (historic Jewish quarter) have been UNESCO-listed since 1978. The city survived WWII almost intact — a rare treasure in Central Europe.", es: "Cracovia es una de las ciudades medievales más hermosas de Europa: la plaza del mercado (Rynek Główny, la mayor plaza medieval de Europa), el castillo de Wawel dominando el Vístula, el casco antiguo y Kazimierz (barrio judío histórico) están clasificados como Patrimonio de la UNESCO desde 1978. La ciudad sobrevivió a la Segunda Guerra Mundial casi intacta — un tesoro poco común en Europa Central.", de: "Krakau ist eine der schönsten mittelalterlichen Städte Europas: Der Marktplatz (Rynek Główny, der größte mittelalterliche Platz Europas), das Wawel-Schloss mit Blick auf die Weichsel, die Altstadt und Kazimierz (historisches jüdisches Viertel) stehen seit 1978 auf der UNESCO-Liste. Die Stadt überstand den Zweiten Weltkrieg nahezu unversehrt – ein seltener Schatz in Mitteleuropa.",
      },
      wikipedia: "Kraków",
      tags: ["Histoire", "UNESCO", "Architecture", "Spiritualité", "Ville", "Gastronomie"],
      mustSee: [
        { name: { fr: "Rynek Główny — plus grande place médiévale d'Europe", en: "Rynek Główny — largest medieval square in Europe", es: "Rynek Główny — la mayor plaza medieval de Europa", de: "Rynek Główny – größter mittelalterlicher Platz in Europa" }, wikipedia: "File:Empty_Old_Town_Market_Square_in_Kraków_during_the_COVID-19_pandemic_in_Poland,_April_2020.jpg" },
        { name: { fr: "Château royal du Wawel avec la crypte des rois de Pologne", en: "Wawel Royal Castle with the crypt of Polish kings", es: "Castillo real de Wawel con la cripta de los reyes de Polonia", de: "Königsschloss Wawel mit der Krypta der polnischen Könige" }, wikipedia: "Wawel_Castle" },
        { name: { fr: "Mine de sel de Wieliczka (UNESCO) — cathédrale souterraine", en: "Wieliczka Salt Mine (UNESCO) — underground cathedral", es: "Mina de sal de Wieliczka (UNESCO) — catedral subterránea", de: "Salzbergwerk Wieliczka (UNESCO) – unterirdische Kathedrale" }, wikipedia: "File:Wieliczka-daVinci.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Auschwitz-Birkenau — Mémorial UNESCO", en: "Auschwitz-Birkenau — UNESCO memorial", es: "Auschwitz-Birkenau — Memorial UNESCO", de: "Auschwitz-Birkenau – UNESCO-Gedenkstätte" },
      region: { fr: "Oświęcim (à 70km de Cracovie)", en: "Oświęcim (70km from Kraków)", es: "Oświęcim (a 70km de Cracovia)", de: "Oświęcim (70 km von Krakau entfernt)" },
      description: {
        fr: "Le camp d'extermination d'Auschwitz-Birkenau est classé UNESCO 'pour que la mémoire humaine ne perde pas de vue cet acte de barbarie'. Le site concentre les plus importantes archives du génocide des Juifs d'Europe : 1,1 million de victimes, dont 90% de Juifs. Une visite guidée est obligatoire pour comprendre la portée du lieu.", en: "The Auschwitz-Birkenau extermination camp is UNESCO-listed 'so that human memory does not lose sight of this act of barbarism'. The site holds the most important archives of the genocide of Europe's Jews: 1.1 million victims, 90% of them Jewish. A guided tour is mandatory to understand the significance of the site.", es: "El campo de exterminio de Auschwitz-Birkenau está clasificado como Patrimonio de la UNESCO 'para que la memoria humana no pierda de vista este acto de barbarie'. El sitio concentra los archivos más importantes del genocidio de los judíos de Europa: 1,1 millones de víctimas, el 90% de ellas judías. Una visita guiada es obligatoria para comprender el alcance del lugar.", de: "Das Vernichtungslager Auschwitz-Birkenau steht auf der UNESCO-Liste, „damit das menschliche Gedächtnis diesen Akt der Barbarei nicht aus den Augen verliert“. Die Website enthält die wichtigsten Archive des Völkermords an den Juden Europas: 1,1 Millionen Opfer, 90 % davon waren Juden. Eine Führung ist obligatorisch, um den Umfang des Ortes zu verstehen.",
      },
      wikipedia: "Auschwitz_concentration_camp",
      tags: ["Histoire", "UNESCO"],
      mustSee: [
        { name: { fr: "Auschwitz I — 'Arbeit Macht Frei', blocs d'exposition, salles des victimes", en: "Auschwitz I — 'Arbeit Macht Frei', exhibition blocks, victims' rooms", es: "Auschwitz I — 'Arbeit Macht Frei', bloques de exposición, salas de las víctimas", de: "Auschwitz I – „Arbeit Macht Frei“, Ausstellungsblöcke, Opferzimmer" }, wikipedia: "File:Auschwitz-Work Set Free-new.JPG" },
        { name: { fr: "Auschwitz II-Birkenau — ruines des chambres à gaz et crématoires", en: "Auschwitz II-Birkenau — ruins of the gas chambers and crematoria", es: "Auschwitz II-Birkenau — ruinas de las cámaras de gas y crematorios", de: "Auschwitz II-Birkenau – Ruinen der Gaskammern und Krematorien" }, wikipedia: "File:Auschwitz II Birkenau - crematory.jpg" },
        { name: { fr: "Visite guidée obligatoire (réservation en ligne indispensable)", en: "Mandatory guided tour (online booking essential)", es: "Visita guiada obligatoria (reserva en línea indispensable)", de: "Führung erforderlich (Online-Reservierung erforderlich)" }, wikipedia: "File:Scene of Auschwitz I, Poland4.jpg" },
        { name: { fr: "Mémorial et tombeau de cendres à Birkenau", en: "Memorial and tomb of ashes at Birkenau", es: "Memorial y tumba de cenizas en Birkenau", de: "Mahnmal und Aschengrab in Birkenau" }, wikipedia: "File:Crematorium at Auschwitz I 2012.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Varsovie — Phénix reconstruite", en: "Warsaw — the rebuilt phoenix", es: "Varsovia — El fénix reconstruido", de: "Warschau – Phoenix wieder aufgebaut" },
      region: { fr: "Mazovie (capitale)", en: "Masovia (capital)", es: "Mazovia (capital)", de: "Masowien (Hauptstadt)" },
      description: {
        fr: "Varsovie est l'une des grandes surprises d'Europe : détruite à 85% pendant la WWII, elle a été reconstruite à l'identique par ses habitants à partir de tableaux du peintre Canaletto. Sa Vieille Ville (UNESCO) ressemble à celle du XVIIe siècle. Le musée de l'Insurrection de Varsovie est l'un des plus émouvants d'Europe. La ville est aussi un hub de techno-culture et de gastronomie.", en: "Warsaw is one of Europe's great surprises: 85% destroyed during WWII, it was rebuilt identically by its residents using paintings by Canaletto. Its Old Town (UNESCO) looks just as it did in the 17th century. The Warsaw Uprising Museum is one of the most moving in Europe. The city is also a hub of techno culture and cuisine.", es: "Varsovia es una de las grandes sorpresas de Europa: destruida en un 85% durante la Segunda Guerra Mundial, fue reconstruida de forma idéntica por sus habitantes a partir de los cuadros del pintor Canaletto. Su Casco Antiguo (UNESCO) se parece al del siglo XVII. El Museo del Levantamiento de Varsovia es uno de los más conmovedores de Europa. La ciudad es también un polo de cultura techno y gastronomía.", de: "Warschau ist eine der großen Überraschungen Europas: Im Zweiten Weltkrieg wurde es zu 85 % zerstört und von seinen Bewohnern mit Gemälden des Malers Canaletto identisch wieder aufgebaut. Die Altstadt (UNESCO) ähnelt der des 17. Jahrhunderts. Das Museum des Warschauer Aufstands ist eines der bewegendsten in Europa. Die Stadt ist auch ein Zentrum der Technokultur und Gastronomie.",
      },
      wikipedia: "Warsaw",
      tags: ["Histoire", "UNESCO", "Musées", "Modernité", "Ville", "Gastronomie"],
      mustSee: [
        { name: { fr: "Vieille Ville de Varsovie (UNESCO) — reconstruite à l'identique", en: "Warsaw Old Town (UNESCO) — rebuilt identically", es: "Casco Antiguo de Varsovia (UNESCO) — reconstruido de forma idéntica", de: "Altstadt von Warschau (UNESCO) – identisch wieder aufgebaut" }, wikipedia: "File:Warsaw Old Town, Warsaw, Poland - panoramio (69).jpg" },
        { name: { fr: "Musée de l'Insurrection de Varsovie (1944)", en: "Warsaw Uprising Museum (1944)", es: "Museo del Levantamiento de Varsovia (1944)", de: "Museum des Warschauer Aufstandes (1944)" }, wikipedia: "File:Muzeum Powstania Warszawskiego 2014 018.JPG" },
        { name: { fr: "POLIN — Musée de l'histoire des Juifs polonais", en: "POLIN — Museum of the History of Polish Jews", es: "POLIN — Museo de la Historia de los Judíos Polacos", de: "POLIN – Museum zur Geschichte der polnischen Juden" }, wikipedia: "File:Museum_of_the_History_of_Polish_Jews_in_Warsaw_building_0011.jpg" },
        { name: { fr: "Łazienki Park — palais sur l'eau et concerts Chopin (été)", en: "Łazienki Park — palace on the water and Chopin concerts (summer)", es: "Parque Łazienki — palacio sobre el agua y conciertos de Chopin (verano)", de: "Łazienki-Park – Wasserpalast und Chopin-Konzerte (Sommer)" }, wikipedia: "File:4_Warszawa-Lazienki_Krolewskie_107.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Forêt de Białowieża — Derniers bisons", en: "Białowieża Forest — the last bison", es: "Bosque de Białowieża — Los últimos bisontes", de: "Białowieża-Wald – Letzter Bison" },
      region: { fr: "Podlachie (est)", en: "Podlasie (east)", es: "Podlaquia (este)", de: "Podlachien (Osten)" },
      description: {
        fr: "Białowieża est la dernière forêt primaire des plaines d'Europe — vieille de 12 000 ans, jamais exploitée industriellement. Elle abrite le bison européen (żubr), l'animal le plus lourd d'Europe, sauvé de l'extinction dans les années 1920. Les randonnées guidées dans la réserve stricte permettent d'observer les bisons, loups, lynx et cerfs en liberté.", en: "Białowieża is the last primeval lowland forest in Europe — 12,000 years old, never industrially logged. It's home to the European bison (żubr), Europe's heaviest animal, saved from extinction in the 1920s. Guided hikes in the strict reserve let you observe wild bison, wolves, lynx and deer.", es: "Białowieża es el último bosque primario de las llanuras de Europa — con 12.000 años de antigüedad, nunca explotado industrialmente. Alberga al bisonte europeo (żubr), el animal más pesado de Europa, salvado de la extinción en la década de 1920. Las caminatas guiadas por la reserva estricta permiten observar bisontes, lobos, linces y ciervos en libertad.", de: "Białowieża ist der letzte primäre Tieflandwald Europas – 12.000 Jahre alt, nie industriell genutzt. Hier lebt der Europäische Bison (żubr), das schwerste Tier Europas, das in den 1920er Jahren vor dem Aussterben gerettet wurde. Bei geführten Wanderungen im strengen Schutzgebiet können Sie Bisons, Wölfe, Luchse und Hirsche in freier Wildbahn beobachten.",
      },
      wikipedia: "Białowieża_Forest",
      tags: ["Nature", "Safari", "UNESCO"],
      mustSee: [
        { name: { fr: "Randonnée guidée dans la réserve stricte — bisons sauvages", en: "Guided hike in the strict reserve — wild bison", es: "Caminata guiada por la reserva estricta — bisontes salvajes", de: "Geführte Wanderung im strengen Reservat – wilde Bisons" }, wikipedia: "File:European bison (Bison bonasus) male Białowieza.jpg" },
        { name: { fr: "Parc national — arbres millénaires et silence absolu", en: "National park — ancient trees and absolute silence", es: "Parque nacional — árboles milenarios y silencio absoluto", de: "Nationalpark – tausendjährige Bäume und absolute Stille" }, wikipedia: "File:Smolany Sadek Aleja Lipowa 2024 01.jpg" },
        { name: { fr: "Village de Białowieża — maisons en bois podlachies", en: "Białowieża village — wooden Podlasie houses", es: "Pueblo de Białowieża — casas de madera de Podlaquia", de: "Dorf Białowieża – Podlachy-Holzhäuser" }, wikipedia: "File:Bialowieza beentree.jpg" },
      ],
    },
    {
      id: 5,
      name: { fr: "Zakopane & Tatras", en: "Zakopane & the Tatras", es: "Zakopane y los Tatras", de: "Zakopane und Tatra" },
      region: { fr: "Petite-Pologne", en: "Lesser Poland", es: "Pequeña Polonia", de: "Kleinpolen" },
      description: {
        fr: "Surnommée la capitale d'hiver de la Pologne, Zakopane niche au pied des Tatras, plus haut massif du pays. Architecture montagnarde en bois, pistes de ski et sentiers vers lacs glaciaires en font une destination prisée. Le téléphérique du Kasprowy Wierch ouvre des panoramas saisissants.", en: "Nicknamed Poland's winter capital, Zakopane nestles at the foot of the Tatras, the country's highest mountain range. Wooden mountain architecture, ski slopes and trails to glacial lakes make it a popular destination. The Kasprowy Wierch cable car opens up stunning panoramas.", es: "Apodada la capital de invierno de Polonia, Zakopane se asienta al pie de los Tatras, el macizo más alto del país. La arquitectura montañesa de madera, las pistas de esquí y los senderos hacia lagos glaciares la convierten en un destino muy apreciado. El teleférico de Kasprowy Wierch ofrece panorámicas impresionantes.", de: "Zakopane, auch Winterhauptstadt Polens genannt, liegt am Fuße der Tatra, dem höchsten Berg des Landes. Hölzerne Bergarchitektur, Skipisten und Wanderwege zu Gletscherseen machen es zu einem beliebten Reiseziel. Die Seilbahn Kasprowy Wierch eröffnet atemberaubende Panoramen.",
      },
      wikipedia: "Zakopane",
      tags: ["Ski", "Randonnée", "Nature", "UNESCO"],
      mustSee: [
        { name: { fr: "Kasprowy Wierch — pistes et télécabine", en: "Kasprowy Wierch — ski runs and cable car", es: "Kasprowy Wierch — pistas y teleférico", de: "Kasprowy Wierch – Pisten und Gondel" }, wikipedia: "Kasprowy_Wierch" },
        { name: { fr: "Vallée de Morskie Oko", en: "Morskie Oko valley", es: "Valle de Morskie Oko", de: "Morskie Oko-Tal" }, wikipedia: "Morskie_Oko" },
        { name: { fr: "Zakopane — ville de montagne", en: "Zakopane — mountain town", es: "Zakopane — ciudad de montaña", de: "Zakopane – Bergstadt" }, wikipedia: "Zakopane" },
        { name: { fr: "Parc national des Tatras", en: "Tatra National Park", es: "Parque nacional de los Tatras", de: "Tatra-Nationalpark" }, wikipedia: "Tatra_National_Park,_Poland" },
        { name: { fr: "Gubalówka — vue panoramique", en: "Gubałówka — panoramic view", es: "Gubałówka — vista panorámica", de: "Gubalówka – Panoramablick" }, wikipedia: "File:2020 Zakopane Gubałówka z Drogi pod Reglami, 1.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Pologne est l'une des destinations les moins chères d'Europe occidentale — les prix sont environ 40% inférieurs à ceux de la France. La gastronomie polonaise est généreuse et abordable. Cracovie est la ville la plus touristique (et la plus chère), mais reste bien en dessous de Paris.", en: "Poland is one of the cheapest destinations in Western Europe — prices are about 40% lower than in France. Polish cuisine is generous and affordable. Kraków is the most touristy (and priciest) city, but remains well below Paris.", es: "Polonia es uno de los destinos más económicos de Europa Occidental — los precios son alrededor de un 40% más bajos que en Francia. La gastronomía polaca es generosa y asequible. Cracovia es la ciudad más turística (y la más cara), pero sigue estando muy por debajo de París.", de: "Polen ist eines der günstigsten Reiseziele in Westeuropa – die Preise sind rund 40 % niedriger als in Frankreich. Die polnische Gastronomie ist großzügig und erschwinglich. Krakau ist die touristischste (und teuerste) Stadt, bleibt aber deutlich hinter Paris zurück.",
    },
    currency: "PLN",
    exchangeRate: "1€ ≈ 4,25 PLN",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Auberge de jeunesse (Cracovie, Varsovie)", en: "Youth hostel (Kraków, Warsaw)", es: "Albergue juvenil (Cracovia, Varsovia)", de: "Jugendherberge (Krakau, Warschau)" }, price: "15–30 €", detail: { fr: "Dortoir ou chambre privée, bonne qualité", en: "Dorm or private room, good quality", es: "Dormitorio compartido o habitación privada, buena calidad", de: "Schlafsaal oder Privatzimmer, gute Qualität" } },
          { label: { fr: "Hôtel 3★ centre-ville", en: "3★ city-centre hotel", es: "Hotel 3★ en el centro", de: "3★ Hotel im Stadtzentrum" }, price: "50–100 €", detail: { fr: "Confortable, petit-déj souvent inclus", en: "Comfortable, breakfast often included", es: "Cómodo, desayuno a menudo incluido", de: "Komfortabel, Frühstück oft inklusive" } },
          { label: { fr: "Appartement Airbnb (Cracovie 2 pers.)", en: "Airbnb apartment (Kraków, 2 people)", es: "Apartamento Airbnb (Cracovia, 2 personas)", de: "Airbnb-Wohnung (Krakau 2 Personen)" }, price: "40–80 €", detail: { fr: "Bien situé, cuisine disponible", en: "Well located, kitchen available", es: "Bien ubicado, cocina disponible", de: "Gut gelegen, Küche vorhanden" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Bar mleczny (cantine soviétique) — pierogi + zupa", en: "Bar mleczny (Soviet-era canteen) — pierogi + zupa", es: "Bar mleczny (cantina de época soviética) — pierogi + zupa", de: "Bar mleczny (sowjetische Kantine) – Pierogi + Zupa" }, price: "5–8 €", detail: { fr: "Repas complet, ambiance authentique", en: "Full meal, authentic atmosphere", es: "Comida completa, ambiente auténtico", de: "Komplettes Essen, authentische Atmosphäre" } },
          { label: { fr: "Restaurant polonais mid-range", en: "Mid-range Polish restaurant", es: "Restaurante polaco de gama media", de: "Polnisches Mittelklasserestaurant" }, price: "12–22 €", detail: { fr: "Bigos, żurek, kiełbasa, bière", en: "Bigos, żurek, kiełbasa, beer", es: "Bigos, żurek, kiełbasa, cerveza", de: "Bigos, żurek, Kielbasa, Bier" } },
          { label: { fr: "Zapiekanka (baguette grillée) — street food", en: "Zapiekanka (grilled baguette) — street food", es: "Zapiekanka (baguette a la parrilla) — comida callejera", de: "Zapiekanka (gegrilltes Baguette) – Streetfood" }, price: "2–4 €", detail: { fr: "Le snack national polonais", en: "Poland's national snack", es: "El tentempié nacional polaco", de: "Der polnische Nationalsnack" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Train PKP Intercity Varsovie–Cracovie (2h45)", en: "PKP Intercity train Warsaw–Kraków (2h45)", es: "Tren PKP Intercity Varsovia–Cracovia (2h45)", de: "PKP-Intercity-Zug Warschau–Krakau (2 Std. 45 Min.)" }, price: "15–40 €", detail: { fr: "Confortable et ponctuel", en: "Comfortable and punctual", es: "Cómodo y puntual", de: "Bequem und pünktlich" } },
          { label: { fr: "Bus FlixBus inter-villes", en: "FlixBus intercity bus", es: "Autobús FlixBus interurbano", de: "Überlandbus von FlixBus" }, price: "10–25 €", detail: { fr: "Économique, nombreuses liaisons", en: "Budget-friendly, many routes", es: "Económico, numerosas conexiones", de: "Kostengünstig, zahlreiche Anschlüsse" } },
          { label: { fr: "Tramway + métro Varsovie (ticket 24h)", en: "Tram + metro in Warsaw (24h ticket)", es: "Tranvía + metro en Varsovia (billete 24h)", de: "Warschauer Straßenbahn + U-Bahn (24-Stunden-Ticket)" }, price: "4 €", detail: { fr: "Réseau dense et efficace", en: "Dense and efficient network", es: "Red densa y eficiente", de: "Dichtes und effizientes Netz" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Mine de Wieliczka (visite guidée incluse)", en: "Wieliczka Mine (guided tour included)", es: "Mina de Wieliczka (visita guiada incluida)", de: "Wieliczka-Mine (Führung inklusive)" }, price: "20 €", detail: { fr: "Incontournable près de Cracovie", en: "A must near Kraków", es: "Imprescindible cerca de Cracovia", de: "Unumgänglich in der Nähe von Krakau" } },
          { label: { fr: "Auschwitz-Birkenau (visite guidée)", en: "Auschwitz-Birkenau (guided tour)", es: "Auschwitz-Birkenau (visita guiada)", de: "Auschwitz-Birkenau (Führung)" }, price: "40–60 €", detail: { fr: "Guide obligatoire, demi-journée minimum", en: "Guide mandatory, half-day minimum", es: "Guía obligatorio, medio día como mínimo", de: "Führer erforderlich, mindestens halber Tag" } },
          { label: { fr: "Visite guidée Białowieża (guide agréé, 3h)", en: "Guided visit of Białowieża (licensed guide, 3h)", es: "Visita guiada a Białowieża (guía autorizado, 3h)", de: "Führung durch Białowieża (lizenzierter Führer, 3 Stunden)" }, price: "25–45 €", detail: { fr: "Obligatoire dans la réserve stricte", en: "Mandatory in the strict reserve", es: "Obligatoria en la reserva estricta", de: "Bei strikter Reservierung obligatorisch" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "45–75 €/j", desc: { fr: "Auberge + bar mleczny + transports publics", en: "Hostel + bar mleczny + public transport", es: "Albergue + bar mleczny + transporte público", de: "Hostel + Mleczny-Bar + öffentliche Verkehrsmittel" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "85–150 €/j", desc: { fr: "Hôtel 3★ + restaurants + visites guidées", en: "3★ hotel + restaurants + guided tours", es: "Hotel 3★ + restaurantes + visitas guiadas", de: "3★ Hotel + Restaurants + Führungen" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: {
        fr: "Varsovie (3j) → Białowieża (2j) → Gdańsk (2j) → Cracovie + Wieliczka + Auschwitz (3j)", en: "Warsaw (3d) → Białowieża (2d) → Gdańsk (2d) → Kraków + Wieliczka + Auschwitz (3d)", es: "Varsovia (3d) → Białowieża (2d) → Gdansk (2d) → Cracovia + Wieliczka + Auschwitz (3d)", de: "Warschau (3 Tage) → Białowieża (2 Tage) → Danzig (2 Tage) → Krakau + Wieliczka + Auschwitz (3 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "800 – 1 400 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Varsovie ou Cracovie (Wizz Air, Ryanair)", en: "Return flight Paris–Warsaw or Kraków (Wizz Air, Ryanair)", es: "Vuelo ida/vuelta París–Varsovia o Cracovia (Wizz Air, Ryanair)", de: "Hin- und Rückflug Paris–Warschau oder Krakau (Wizz Air, Ryanair)" }, amount: "80–200 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "200–350 €" },
            { label: { fr: "Transports intérieurs (train + bus)", en: "Domestic transport (train + bus)", es: "Transporte interno (tren + autobús)", de: "Inlandstransport (Zug + Bus)" }, amount: "100–200 €" },
            { label: { fr: "Nourriture (bar mleczny + restaurants)", en: "Food (bar mleczny + restaurants)", es: "Comida (bar mleczny + restaurantes)", de: "Essen (mleczny Bar + Restaurants)" }, amount: "200–350 €" },
            { label: { fr: "Activités & entrées", en: "Activities & entry fees", es: "Actividades y entradas", de: "Aktivitäten & Einträge" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "1 800 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Varsovie", en: "Return flight Paris–Warsaw", es: "Vuelo ida/vuelta París–Varsovia", de: "Hin- und Rückflug Paris–Warschau" }, amount: "100–300 €" },
            { label: { fr: "Hôtels 3★ (10 nuits)", en: "3★ hotels (10 nights)", es: "Hoteles 3★ (10 noches)", de: "3★ Hotels (10 Nächte)" }, amount: "600–1 100 €" },
            { label: { fr: "Trains InterCity + transferts", en: "InterCity trains + transfers", es: "Trenes InterCity + traslados", de: "InterCity-Züge + Transfers" }, amount: "200–350 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "400–700 €" },
            { label: { fr: "Visites guidées + activités", en: "Guided tours + activities", es: "Visitas guiadas + actividades", de: "Führungen + Aktivitäten" }, amount: "300–500 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde París", de: "Flug ab Paris" }, value: { fr: "~2h30 (Wizz Air, Ryanair, Air France direct CDG–Varsovie ou Cracovie). Nombreuses liaisons.", en: "~2h30 (Wizz Air, Ryanair, direct Air France CDG–Warsaw or Kraków). Many routes.", es: "~2h30 (Wizz Air, Ryanair, Air France directo CDG–Varsovia o Cracovia). Numerosas conexiones.", de: "ca. 2 Std. 30 Min. (Wizz Air, Ryanair, Air France direkt CDG–Warschau oder Krakau). Viele Verbindungen." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Aucun visa — espace Schengen. Carte d'identité française suffisante.", en: "No visa required — Schengen area. A French ID card is sufficient.", es: "Sin visado — espacio Schengen. El documento de identidad es suficiente.", de: "Kein Visum – Schengen-Raum. Ausreichender französischer Personalausweis." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Złoty (PLN). Carte bancaire acceptée presque partout. Certains marchés et bars mleczny en espèces uniquement.", en: "Złoty (PLN). Cards accepted almost everywhere. Some markets and bars mleczny are cash-only.", es: "Złoty (PLN). Tarjeta aceptada casi en todas partes. Algunos mercados y bares mleczny solo aceptan efectivo.", de: "Złoty (PLN). Kreditkarten werden fast überall akzeptiert. Einige Mleczny-Märkte und Bars bieten nur Barzahlung an." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Polonais. Anglais parlé par les jeunes et dans les zones touristiques. Français rarement parlé. Appli Google Translate très utile.", en: "Polish. English spoken by young people and in tourist areas. French rarely spoken. The Google Translate app is very useful.", es: "Polaco. El inglés lo hablan los jóvenes y en zonas turísticas. El español rara vez se habla. La app Google Translate es muy útil.", de: "Polnisch. Englisch wird von jungen Leuten und in Touristengebieten gesprochen. Französisch wird selten gesprochen. Sehr nützliche Google Translate-App." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe", de: "Steckdose" }, value: { fr: "Type C/E (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/E (European) — 230V. No adapter needed.", es: "Tipo C/E (europeo) — 230V. No se necesita adaptador.", de: "Typ C/E (europäisch) – 230 V. Kein Adapter erforderlich." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Aucune précaution particulière. CEAM valide. Tiques dans les forêts (Białowieża) — pantalon long recommandé.", en: "No particular precautions needed. EHIC valid. Ticks in the forests (Białowieża) — long trousers recommended.", es: "Sin precauciones especiales. Tarjeta sanitaria europea válida. Garrapatas en los bosques (Białowieża) — se recomienda pantalón largo.", de: "Keine besonderen Vorsichtsmaßnahmen. Gültige EHIC. Zecken in Wäldern (Białowieża) – lange Hosen empfohlen." } },
    { icon: "🍺", label: { fr: "Bière", en: "Beer", es: "Cerveza", de: "Bier" }, value: { fr: "La Pologne est un grand pays de bière : Żywiec, Tyskie, Okocim. Une pinte en bar coûte 2–4€ — parmi les moins chères d'Europe.", en: "Poland is a great beer country: Żywiec, Tyskie, Okocim. A pint at a bar costs 2–4€ — among the cheapest in Europe.", es: "Polonia es un gran país cervecero: Żywiec, Tyskie, Okocim. Una pinta en un bar cuesta 2–4€ — de las más baratas de Europa.", de: "Polen ist ein großes Bierland: Żywiec, Tyskie, Okocim. Ein Pint in einer Bar kostet 2–4 € und gehört damit zu den günstigsten in Europa." } },
    { icon: "🌡️", label: { fr: "Hiver", en: "Winter", es: "Invierno", de: "Winter" }, value: { fr: "Les hivers polonais sont froids (-5 à -15°C). S'équiper chaudement de novembre à mars. La neige est fréquente à Cracovie et magnifique sur le Vieux Marché.", en: "Polish winters are cold (-5 to -15°C). Dress warmly from November to March. Snow is common in Kraków and looks magnificent on the Old Market Square.", es: "Los inviernos polacos son fríos (-5 a -15°C). Abríguese bien de noviembre a marzo. La nieve es frecuente en Cracovia y luce magnífica en la Plaza del Mercado.", de: "Die polnischen Winter sind kalt (-5 bis -15°C). Rüsten Sie sich von November bis März warm ein. Schnee ist in Krakau weit verbreitet und auf dem Alten Markt wunderschön." } },
  ],
};
