export const BELGIUM = {
  code: "BEL",
  numericId: 56,
  name: { fr: "Belgique", en: "Belgium", es: "Bélgica", de: "Belgien" },
  emoji: "🇧🇪",
  capital: { fr: "Bruxelles", en: "Brussels", es: "Bruselas", de: "Brüssel" },
  language: { fr: "Français, Néerlandais, Allemand", en: "French, Dutch, German", es: "Francés, Neerlandés, Alemán", de: "Französisch, Niederländisch, Deutsch" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)", es: "Euro (EUR)", de: "Euro (EUR)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 75, budgetMid: 145,
    tripMin: 1000, tripMid: 2000,
  },
  criteria: {
    unesco: 3,
    nature: 1,
    randonnee: 1,
    gastronomie: 2,
    architecture: 2,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 2,
    plage: 1,
    plongee: 1,
  },
  description: {
    fr: "La Belgique est un petit pays au cœur de l'Europe, célèbre pour ses chocolats, ses bières artisanales et ses frites. De Bruges la médiévale à Gand la bohème, en passant par Bruxelles capitale de l'UE, le pays regorge de trésors architecturaux flamands et wallons. Les Ardennes offrent un contraste naturel avec les villes animées de la côte nord.", en: "Belgium is a small country at the heart of Europe, famous for its chocolate, craft beers and fries. From medieval Bruges to bohemian Ghent, via Brussels, capital of the EU, the country is full of Flemish and Walloon architectural treasures. The Ardennes offer a natural contrast to the lively cities of the northern coast.", es: "Bélgica es un pequeño país en el corazón de Europa, famoso por sus chocolates, sus cervezas artesanales y sus patatas fritas. Desde la medieval Brujas hasta la bohemia Gante, pasando por Bruselas, capital de la UE, el país está repleto de tesoros arquitectónicos flamencos y valones. Las Ardenas ofrecen un contraste natural con las animadas ciudades de la costa norte.", de: "Belgien ist ein kleines Land im Herzen Europas, berühmt für seine Schokolade, Craft-Biere und Pommes Frites. Vom mittelalterlichen Brügge über das böhmische Gent bis hin zu Brüssel, der EU-Hauptstadt, ist das Land voller flämischer und wallonischer Architekturschätze. Die Ardennen bilden einen natürlichen Kontrast zu den geschäftigen Städten der Nordküste.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Septembre", en: "May – September", es: "Mayo – Septiembre", de: "Mai – September" },
      label: { fr: "Printemps et été", en: "Spring and summer", es: "Primavera y verano", de: "Frühling und Sommer" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période pour visiter la Belgique : températures agréables (15–22°C), terrasses animées, festivals de bière et de musique. Bruges et Gand sont particulièrement belles sous le soleil d'été.", en: "Best time to visit Belgium: pleasant temperatures (15–22°C), lively terraces, beer and music festivals. Bruges and Ghent are especially beautiful under the summer sun.", es: "Mejor época para visitar Bélgica: temperaturas agradables (15–22°C), terrazas animadas, festivales de cerveza y música. Brujas y Gante son especialmente bellas bajo el sol de verano.", de: "Beste Reisezeit für Belgien: angenehme Temperaturen (15–22 °C), lebhafte Straßencafés, Bier- und Musikfestivals. Brügge und Gent sind in der Sommersonne besonders schön.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Novembre – Décembre", en: "November – December", es: "Noviembre – Diciembre", de: "November – Dezember" },
      label: { fr: "Marchés de Noël", en: "Christmas markets", es: "Mercados de Navidad", de: "Weihnachtsmärkte" },
      color: "#f59e0b",
      description: {
        fr: "Les marchés de Noël de Bruges, Gand et Bruxelles comptent parmi les plus beaux d'Europe. Atmosphère féérique malgré le froid et la grisaille hivernale.", en: "The Christmas markets of Bruges, Ghent and Brussels are among the most beautiful in Europe. A magical atmosphere despite the cold and grey winter weather.", es: "Los mercados navideños de Brujas, Gante y Bruselas se encuentran entre los más bonitos de Europa. Un ambiente mágico pese al frío y la grisura invernal.", de: "Die Weihnachtsmärkte von Brügge, Gent und Brüssel gehören zu den schönsten in Europa. Trotz des kalten und grauen Winterwetters eine zauberhafte Atmosphäre.",
      },
      icon: "🎄",
    },
  ],
  weatherCities: [
    {
      id: "brussels",
      name: "Bruxelles",
      region: { fr: "Brabant", en: "Brabant", es: "Brabante", de: "Brabant" },
      data: [
        { month: "Jan", temp: 4, rain: 75, icon: "❄️" },
        { month: "Fév", temp: 5, rain: 65, icon: "❄️" },
        { month: "Mar", temp: 8, rain: 70, icon: "⛅" },
        { month: "Avr", temp: 12, rain: 55, icon: "⛅" },
        { month: "Mai", temp: 16, rain: 65, icon: "☀️" },
        { month: "Jun", temp: 19, rain: 75, icon: "☀️" },
        { month: "Jul", temp: 21, rain: 85, icon: "☀️" },
        { month: "Aoû", temp: 21, rain: 80, icon: "☀️" },
        { month: "Sep", temp: 18, rain: 65, icon: "☀️" },
        { month: "Oct", temp: 13, rain: 75, icon: "⛅" },
        { month: "Nov", temp: 8, rain: 80, icon: "⛅" },
        { month: "Déc", temp: 5, rain: 80, icon: "❄️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Bruxelles",
      region: { fr: "Bruxelles-Capitale", en: "Brussels-Capital", es: "Bruselas-Capital", de: "Brüssel-Hauptstadt" },
      description: {
        fr: "Capitale de la Belgique et siège des institutions européennes, Bruxelles mêle grandeur Art nouveau et quartiers populaires animés. La Grand-Place, classée UNESCO, est l'une des plus belles places d'Europe. La ville est également connue pour ses musées, ses bandes dessinées et sa gastronomie.", en: "Capital of Belgium and seat of the European institutions, Brussels blends Art Nouveau grandeur with lively working-class neighbourhoods. The Grand-Place, a UNESCO World Heritage Site, is one of the most beautiful squares in Europe. The city is also known for its museums, comic strips and cuisine.", es: "Capital de Bélgica y sede de las instituciones europeas, Bruselas combina la grandeza del Art Nouveau con animados barrios populares. La Grand-Place, declarada Patrimonio de la Humanidad por la UNESCO, es una de las plazas más bellas de Europa. La ciudad también es conocida por sus museos, sus cómics y su gastronomía.", de: "Brüssel, die Hauptstadt Belgiens und Sitz europäischer Institutionen, vereint Jugendstil-Pracht und lebhafte Arbeiterviertel. Der von der UNESCO gelistete Grand-Place ist einer der schönsten Plätze Europas. Die Stadt ist auch für ihre Museen, Comics und Gastronomie bekannt.",
      },
      wikipedia: "Brussels",
      tags: ["Ville", "UNESCO", "Gastronomie", "Architecture"],
      mustSee: [
        { name: { fr: "Grand-Place — place baroque classée UNESCO", en: "Grand-Place — baroque square, UNESCO World Heritage Site", es: "Grand-Place — plaza barroca declarada Patrimonio de la Humanidad", de: "Grand-Place – UNESCO-geschützter Barockplatz" }, wikipedia: "File:Brusel Grand-Place domy 3.jpg" },
        { name: { fr: "Atomium — sculpture géante de l'Expo 58", en: "Atomium — giant sculpture from Expo 58", es: "Atomium — escultura gigante de la Expo 58", de: "Atomium – Riesenskulptur von der Expo 58" }, wikipedia: "Atomium" },
        { name: { fr: "Manneken Pis — symbole iconique de la ville", en: "Manneken Pis — the city's iconic symbol", es: "Manneken Pis — símbolo icónico de la ciudad", de: "Manneken Pis – Wahrzeichen der Stadt" }, wikipedia: "Manneken_Pis" },
        { name: { fr: "Musées royaux des Beaux-Arts — Bruegel et Magritte", en: "Royal Museums of Fine Arts — Bruegel and Magritte", es: "Museos Reales de Bellas Artes — Bruegel y Magritte", de: "Königliche Museen der Schönen Künste – Bruegel und Magritte" }, wikipedia: "Royal_Museums_of_Fine_Arts_of_Belgium" },
      ],
    },
    {
      id: 2,
      name: "Bruges",
      region: { fr: "Flandre occidentale", en: "West Flanders", es: "Flandes Occidental", de: "Westflandern" },
      description: {
        fr: "Surnommée la 'Venise du Nord', Bruges est une cité médiévale exceptionnellement bien conservée, classée au patrimoine mondial de l'UNESCO. Ses canaux, ses beffrois et ses ruelles pavées attirent des millions de visiteurs chaque année. La ville est aussi le paradis du chocolat belge et de la dentelle artisanale.", en: "Nicknamed the 'Venice of the North', Bruges is an exceptionally well-preserved medieval city, listed as a UNESCO World Heritage Site. Its canals, belfries and cobbled streets attract millions of visitors every year. The city is also a paradise for Belgian chocolate and handmade lace.", es: "Apodada la 'Venecia del Norte', Brujas es una ciudad medieval excepcionalmente bien conservada, declarada Patrimonio de la Humanidad por la UNESCO. Sus canales, sus campanarios y sus callejuelas empedradas atraen a millones de visitantes cada año. La ciudad es también un paraíso para el chocolate belga y el encaje artesanal.", de: "Brügge, auch „Venedig des Nordens“ genannt, ist eine außergewöhnlich gut erhaltene mittelalterliche Stadt, die zum UNESCO-Weltkulturerbe gehört. Seine Kanäle, Glockentürme und Kopfsteinpflasterstraßen ziehen jedes Jahr Millionen von Besuchern an. Die Stadt ist auch ein Paradies für belgische Schokolade und kunsthandwerkliche Spitze.",
      },
      wikipedia: "Bruges",
      tags: ["UNESCO", "Histoire", "Ville", "Gastronomie"],
      mustSee: [
        { name: { fr: "Beffroi de Bruges — 366 marches pour une vue imprenable", en: "Belfry of Bruges — 366 steps for a breathtaking view", es: "Campanario de Brujas — 366 escalones para una vista impresionante", de: "Belfried von Brügge – 366 Stufen für eine atemberaubende Aussicht" }, wikipedia: "Belfry_of_Bruges" },
        { name: { fr: "Markt — place centrale avec maisons à pignons", en: "Markt — central square with gabled houses", es: "Markt — plaza central con casas de fachadas escalonadas", de: "Markt – zentraler Platz mit Giebelhäusern" }, wikipedia: "Markt,_Bruges" },
        { name: { fr: "Lac d'Amour (Minnewater) — lac romantique pittoresque", en: "Lake of Love (Minnewater) — picturesque romantic lake", es: "Lago del Amor (Minnewater) — pintoresco lago romántico", de: "Lake Love (Minnewater) – malerischer romantischer See" }, wikipedia: "File:Lake of Love.jpg" },
        { name: { fr: "Musée Groeninge — maîtres flamands primitifs", en: "Groeninge Museum — early Flemish masters", es: "Museo Groeninge — primitivos maestros flamencos", de: "Groeningemuseum – primitive flämische Meister" }, wikipedia: "Groeningemuseum" },
      ],
    },
    {
      id: 3,
      name: "Gand",
      region: { fr: "Flandre orientale", en: "East Flanders", es: "Flandes Oriental", de: "Ostflandern" },
      description: {
        fr: "Gand est une ville universitaire dynamique qui allie patrimoine médiéval et vie culturelle contemporaine. Le château des Comtes, le Graslei et la cathédrale Saint-Bavon abritant le célèbre Agneau mystique de Van Eyck en font une destination incontournable. La ville est aussi réputée pour son marché aux fleurs et sa scène musicale.", en: "Ghent is a lively university town that combines medieval heritage with contemporary cultural life. The Castle of the Counts, the Graslei and Saint Bavo's Cathedral, home to Van Eyck's famous Mystic Lamb, make it a must-see destination. The city is also renowned for its flower market and music scene.", es: "Gante es una ciudad universitaria dinámica que combina el patrimonio medieval con una vida cultural contemporánea. El castillo de los Condes, el Graslei y la catedral de San Bavón, que alberga el célebre Cordero Místico de Van Eyck, la convierten en un destino imprescindible. La ciudad también es célebre por su mercado de flores y su escena musical.", de: "Gent ist eine dynamische Universitätsstadt, die mittelalterliches Erbe und zeitgenössisches Kulturleben vereint. Das Grafenschloss, die Graslei und die St.-Bavo-Kathedrale, die Heimat von Van Eycks berühmtem Mystischen Lamm, machen es zu einem unverzichtbaren Reiseziel. Die Stadt ist auch für ihren Blumenmarkt und ihre Musikszene bekannt.",
      },
      wikipedia: "Ghent",
      tags: ["Art", "Histoire", "Culture", "Ville"],
      mustSee: [
        { name: { fr: "Gravensteen — château médiéval des Comtes de Flandre", en: "Gravensteen — medieval castle of the Counts of Flanders", es: "Gravensteen — castillo medieval de los Condes de Flandes", de: "Gravensteen – mittelalterliche Burg der Grafen von Flandern" }, wikipedia: "Gravensteen" },
        { name: { fr: "Cathédrale Saint-Bavon — L'Agneau mystique de Van Eyck", en: "Saint Bavo's Cathedral — Van Eyck's Mystic Lamb", es: "Catedral de San Bavón — El Cordero Místico de Van Eyck", de: "St.-Bavo-Kathedrale – Das mystische Lamm von Van Eyck" }, wikipedia: "Saint_Bavo's_Cathedral,_Ghent" },
        { name: { fr: "Graslei et Korenlei — quais historiques pittoresques", en: "Graslei and Korenlei — picturesque historic quays", es: "Graslei y Korenlei — pintorescos muelles históricos", de: "Graslei und Korenlei – malerische historische Kais" }, wikipedia: "Graslei" },
        { name: { fr: "SMAK — musée d'art contemporain de renom", en: "SMAK — renowned museum of contemporary art", es: "SMAK — reconocido museo de arte contemporáneo", de: "SMAK – renommiertes Museum für zeitgenössische Kunst" }, wikipedia: "Stedelijk_Museum_voor_Actuele_Kunst" },
      ],
    },
    {
      id: 4,
      name: "Ardennes",
      region: { fr: "Wallonie", en: "Wallonia", es: "Valonia", de: "Wallonien" },
      description: {
        fr: "Les Ardennes belges offrent un paysage de forêts denses, de vallées encaissées et de villages de pierre. Idéales pour la randonnée, le kayak et le cyclisme, elles accueillent aussi les mémoriaux de la Bataille des Ardennes de la Seconde Guerre mondiale. Dinant, La Roche-en-Ardenne et Bouillon sont les perles de cette région nature.", en: "The Belgian Ardennes offer a landscape of dense forests, steep valleys and stone villages. Ideal for hiking, kayaking and cycling, the region is also home to the memorials of the Battle of the Bulge from the Second World War. Dinant, La Roche-en-Ardenne and Bouillon are the gems of this natural region.", es: "Las Ardenas belgas ofrecen un paisaje de bosques densos, valles encajonados y pueblos de piedra. Ideales para el senderismo, el kayak y el ciclismo, la región también alberga los memoriales de la Batalla de las Ardenas de la Segunda Guerra Mundial. Dinant, La Roche-en-Ardenne y Bouillon son las joyas de esta región natural.", de: "Die belgischen Ardennen bieten eine Landschaft aus dichten Wäldern, tiefen Tälern und Steindörfern. Sie eignen sich ideal zum Wandern, Kajakfahren und Radfahren und beherbergen auch Denkmäler zur Ardennenoffensive aus dem Zweiten Weltkrieg. Dinant, La Roche-en-Ardenne und Bouillon sind die Perlen dieser Naturregion.",
      },
      wikipedia: "Ardennes",
      tags: ["Nature", "Randonnée", "Histoire", "Aventure"],
      mustSee: [
        { name: { fr: "Citadelle de Dinant — forteresse surplombant la Meuse", en: "Citadel of Dinant — fortress overlooking the Meuse", es: "Ciudadela de Dinant — fortaleza que domina el Mosa", de: "Zitadelle von Dinant – Festung mit Blick auf die Maas" }, wikipedia: "File:Dinant reflected.jpg" },
        { name: { fr: "Château de Bouillon — forteresse médiévale de Godefroy", en: "Bouillon Castle — Godfrey's medieval fortress", es: "Castillo de Bouillon — fortaleza medieval de Godofredo", de: "Schloss Bouillon – mittelalterliche Festung von Godefroy" }, wikipedia: "File:Bouillon - Château-fort et cité (1).jpg" },
        { name: { fr: "Grottes de Han — réseau de grottes karstiques spectaculaires", en: "Caves of Han — spectacular network of karst caves", es: "Cuevas de Han — espectacular red de cuevas kársticas", de: "Höhlen von Han – spektakuläres Karsthöhlensystem" }, wikipedia: "File:Grottes de Han DSCF6966.jpg" },
        { name: { fr: "Bastogne War Museum — mémorial de la Bataille des Ardennes", en: "Bastogne War Museum — memorial to the Battle of the Bulge", es: "Bastogne War Museum — memorial de la Batalla de las Ardenas", de: "Bastogne War Museum – Denkmal für die Ardennenoffensive" }, wikipedia: "Bastogne_War_Museum" },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "La Belgique est un pays d'Europe occidentale au coût de vie modéré. Les transports en commun sont efficaces et abordables, et on peut manger de bonnes frites pour moins de 5 €. Les hébergements à Bruges peuvent être plus chers en haute saison.", en: "Belgium is a Western European country with a moderate cost of living. Public transport is efficient and affordable, and you can get good fries for under 5 €. Accommodation in Bruges can be more expensive in high season.", es: "Bélgica es un país de Europa Occidental con un coste de vida moderado. El transporte público es eficiente y asequible, y se pueden comer buenas patatas fritas por menos de 5 €. El alojamiento en Brujas puede ser más caro en temporada alta.", de: "Belgien ist ein westeuropäisches Land mit moderaten Lebenshaltungskosten. Die öffentlichen Verkehrsmittel sind effizient und erschwinglich, und Sie können gute Pommes für weniger als 5 € essen. Unterkünfte in Brügge können in der Hochsaison teurer sein.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Auberge de jeunesse (dortoir)", en: "Youth hostel (dorm)", es: "Albergue juvenil (dormitorio compartido)", de: "Jugendherberge (Wohnheim)" }, price: "20–38 €", detail: { fr: "Bonne couverture dans les villes touristiques", en: "Good coverage in tourist cities", es: "Buena disponibilidad en las ciudades turísticas", de: "Gute Abdeckung in touristischen Städten" } },
          { label: { fr: "Hôtel budget / B&B", en: "Budget hotel / B&B", es: "Hotel económico / B&B", de: "Budget-Hotel/B&B" }, price: "65–100 €", detail: { fr: "Chambre double confortable en centre-ville", en: "Comfortable double room in the city centre", es: "Habitación doble confortable en el centro de la ciudad", de: "Komfortables Doppelzimmer im Stadtzentrum" } },
          { label: { fr: "Hôtel confort 3–4 étoiles", en: "3–4 star comfort hotel", es: "Hotel confort 3–4 estrellas", de: "3–4-Sterne-Komforthotel" }, price: "110–180 €", detail: { fr: "Hôtels de charme à Bruges ou Gand", en: "Charming hotels in Bruges or Ghent", es: "Hoteles con encanto en Brujas o Gante", de: "Charmante Hotels in Brügge oder Gent" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Frites + snack rue", en: "Fries + street snack", es: "Patatas fritas + snack callejero", de: "Pommes + Straßensnack" }, price: "4–8 €", detail: { fr: "La friterie belge, incontournable et pas chère", en: "The Belgian fry stand, a must and inexpensive", es: "La friteria belga, imprescindible y barata", de: "Der belgische Chipladen, unverzichtbar und preiswert" } },
          { label: { fr: "Brasserie / bistrot du midi", en: "Brasserie / lunchtime bistro", es: "Brasserie / bistró del mediodía", de: "Brasserie/Mittagsbistro" }, price: "14–22 €", detail: { fr: "Plat + boisson, stoemp ou carbonnade flamande", en: "Dish + drink, stoemp or Flemish carbonade", es: "Plato + bebida, stoemp o carbonada flamenca", de: "Gericht + Getränk, Stoemp oder flämischer Eintopf" } },
          { label: { fr: "Restaurant dîner", en: "Dinner restaurant", es: "Restaurante para cenar", de: "Abendessenrestaurant" }, price: "25–45 €", detail: { fr: "Moules-frites, waterzooi ou cuisine gastronomique", en: "Mussels and fries, waterzooi or fine dining", es: "Mejillones con patatas fritas, waterzooi o alta cocina", de: "Muscheln und Pommes, Wasserzoo oder Gourmetküche" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Train inter-villes (Bruxelles–Bruges)", en: "Intercity train (Brussels–Bruges)", es: "Tren interurbano (Bruselas–Brujas)", de: "Intercity-Zug (Brüssel–Brügge)" }, price: "14–18 €", detail: { fr: "Réseau SNCB efficace, 1h de trajet", en: "Efficient SNCB network, 1h journey", es: "Red SNCB eficiente, 1h de trayecto", de: "Effizientes SNCB-Netz, 1 Stunde Fahrt" } },
          { label: { fr: "Métro / bus Bruxelles (1 trajet)", en: "Brussels metro / bus (1 trip)", es: "Metro / bus Bruselas (1 trayecto)", de: "Brüsseler U-Bahn/Bus (1 Fahrt)" }, price: "2,50 €", detail: { fr: "Ticket unitaire, carnet de 10 disponible", en: "Single ticket, 10-ticket book available", es: "Billete sencillo, bono de 10 disponible", de: "Einzelticket, 10er-Buch erhältlich" } },
          { label: { fr: "Vélo en location (journée)", en: "Bike rental (day)", es: "Alquiler de bicicleta (día)", de: "Fahrradverleih (Tag)" }, price: "10–20 €", detail: { fr: "Idéal à Bruges et Gand, villes très cyclables", en: "Ideal in Bruges and Ghent, very bike-friendly cities", es: "Ideal en Brujas y Gante, ciudades muy ciclables", de: "Ideal in Brügge und Gent, sehr fahrradfreundliche Städte" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Musée des Beaux-Arts ou SMAK", en: "Museum of Fine Arts or SMAK", es: "Museo de Bellas Artes o SMAK", de: "Museum der Schönen Künste oder SMAK" }, price: "10–15 €", detail: { fr: "Collections de maîtres flamands ou art contemporain", en: "Collections of Flemish masters or contemporary art", es: "Colecciones de maestros flamencos o arte contemporáneo", de: "Sammlungen flämischer Meister oder zeitgenössischer Kunst" } },
          { label: { fr: "Croisière en bateau à Bruges", en: "Boat cruise in Bruges", es: "Crucero en barco por Brujas", de: "Bootsfahrt in Brügge" }, price: "10–12 €", detail: { fr: "30 minutes sur les canaux médiévaux", en: "30 minutes on the medieval canals", es: "30 minutos por los canales medievales", de: "30 Minuten auf mittelalterlichen Kanälen" } },
          { label: { fr: "Dégustation bières artisanales", en: "Craft beer tasting", es: "Degustación de cervezas artesanales", de: "Craft-Beer-Verkostung" }, price: "15–25 €", detail: { fr: "Bar spécialisé ou visite de brasserie", en: "Specialist bar or brewery visit", es: "Bar especializado o visita a una cervecería", de: "Führung durch Spezialitätenbar oder Brauerei" } },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
        daily: "75–100 €/j",
        desc: { fr: "Auberge, frites et sandwichs, transports en commun, quelques visites gratuites", en: "Hostel, fries and sandwiches, public transport, a few free visits", es: "Albergue, patatas fritas y bocadillos, transporte público, algunas visitas gratuitas", de: "Gasthaus, Pommes und Sandwiches, öffentliche Verkehrsmittel, einige kostenlose Besuche" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
        daily: "145–200 €/j",
        desc: { fr: "Hôtel charme, repas en brasserie, train inter-villes, musées et activités", en: "Charming hotel, brasserie meals, intercity train, museums and activities", es: "Hotel con encanto, comidas en brasserie, tren interurbano, museos y actividades", de: "Charmantes Hotel, Brasserie-Mahlzeiten, Intercity-Zug, Museen und Aktivitäten" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "6 jours", en: "6 days", es: "6 días", de: "6 Tage" },
      route: {
        fr: "Bruxelles – Bruges – Gand – Ardennes", en: "Brussels – Bruges – Ghent – Ardennes", es: "Bruselas – Brujas – Gante – Ardenas", de: "Brüssel – Brügge – Gent – Ardennen",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "550 – 750 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bruxelles (ou train)", en: "Return flight Paris–Brussels (or train)", es: "Vuelo ida/vuelta París–Bruselas (o tren)", de: "Hin- und Rückflug Paris–Brüssel (oder Zug)" }, amount: "30–80 €" },
            { label: { fr: "Hébergement (5 nuits)", en: "Accommodation (5 nights)", es: "Alojamiento (5 noches)", de: "Unterkunft (5 Nächte)" }, amount: "125–200 €" },
            { label: { fr: "Transports locaux", en: "Local transport", es: "Transporte local", de: "Nahverkehr" }, amount: "50–80 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "200–280 €" },
            { label: { fr: "Activités + musées", en: "Activities + museums", es: "Actividades + museos", de: "Aktivitäten + Museen" }, amount: "50–80 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "1 000 – 1 400 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bruxelles (ou Thalys)", en: "Return flight Paris–Brussels (or Thalys)", es: "Vuelo ida/vuelta París–Bruselas (o Thalys)", de: "Hin- und Rückflug Paris–Brüssel (oder Thalys)" }, amount: "80–150 €" },
            { label: { fr: "Hébergement (5 nuits)", en: "Accommodation (5 nights)", es: "Alojamiento (5 noches)", de: "Unterkunft (5 Nächte)" }, amount: "400–600 €" },
            { label: { fr: "Transports locaux", en: "Local transport", es: "Transporte local", de: "Nahverkehr" }, amount: "80–120 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "350–480 €" },
            { label: { fr: "Activités + musées", en: "Activities + museums", es: "Actividades + museos", de: "Aktivitäten + Museen" }, amount: "100–150 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde París", de: "Flug ab Paris" }, value: { fr: "1h de vol ou 1h22 en Thalys jusqu'à Bruxelles-Midi", en: "1h flight or 1h22 by Thalys to Brussels-Midi", es: "1h de vuelo o 1h22 en Thalys hasta Bruselas-Midi", de: "1 Stunde Flug oder 1 Std. 22 Min. mit dem Thalys nach Brüssel-Midi" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Aucun visa requis — zone Schengen, carte d'identité française suffisante", en: "No visa required — Schengen area, French ID card is sufficient", es: "No se requiere visado — espacio Schengen, el DNI francés es suficiente", de: "Kein Visum erforderlich – Schengen-Raum, ausreichender französischer Personalausweis" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Euro (€) — distributeurs omniprésents, paiement CB accepté partout", en: "Euro (€) — ATMs everywhere, card payment accepted everywhere", es: "Euro (€) — cajeros por todas partes, pago con tarjeta aceptado en todas partes", de: "Euro (€) – allgegenwärtige Geldautomaten, Kreditkartenzahlung wird überall akzeptiert" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Français en Wallonie et à Bruxelles, néerlandais en Flandre", en: "French in Wallonia and Brussels, Dutch in Flanders", es: "Francés en Valonia y Bruselas, neerlandés en Flandes", de: "Französisch in Wallonien und Brüssel, Niederländisch in Flandern" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type E (même qu'en France) — aucun adaptateur nécessaire", en: "Type E (same as France) — no adapter needed", es: "Tipo E (igual que en Francia) — no se necesita adaptador", de: "Typ E (wie in Frankreich) – kein Adapter erforderlich" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Carte européenne d'assurance maladie (CEAM) valable — soins de qualité", en: "European Health Insurance Card (EHIC) valid — quality healthcare", es: "Tarjeta Sanitaria Europea (TSE) válida — atención médica de calidad", de: "Gültige Europäische Krankenversicherungskarte (EHIC) – hochwertige Versorgung" } },
    { icon: "🚆", label: { fr: "Train", en: "Train", es: "Tren", de: "Zug" }, value: { fr: "Réseau SNCB dense — toutes les grandes villes reliées en moins de 2h", en: "Dense SNCB network — all major cities connected in under 2h", es: "Red SNCB densa — todas las grandes ciudades conectadas en menos de 2h", de: "Dichtes SNCB-Netz – alle größeren Städte in weniger als 2 Stunden verbunden" } },
    { icon: "🍺", label: { fr: "Bière", en: "Beer", es: "Cerveza", de: "Bier" }, value: { fr: "Plus de 1 500 bières artisanales — la culture brassicole est classée UNESCO", en: "Over 1,500 craft beers — the brewing culture is UNESCO-listed", es: "Más de 1.500 cervezas artesanales — la cultura cervecera está declarada Patrimonio de la Humanidad por la UNESCO", de: "Mehr als 1.500 Craft-Biere – Braukultur steht auf der UNESCO-Liste" } },
  ],
};
