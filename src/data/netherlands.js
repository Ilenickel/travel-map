export const NETHERLANDS = {
  code: "NLD",
  numericId: 528,
  name: { fr: "Pays-Bas", en: "Netherlands", es: "Países Bajos", de: "Niederlande" },
  emoji: "🇳🇱",
  capital: { fr: "Amsterdam", en: "Amsterdam", es: "Ámsterdam", de: "Amsterdam" },
  language: { fr: "Néerlandais", en: "Dutch", es: "Neerlandés", de: "Niederländisch" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)", es: "Euro (EUR)", de: "Euro (EUR)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 80,
    budgetMid: 150,
    tripMin: 1050,
    tripMid: 2100,
  },
  criteria: {
    unesco: 2,
    nature: 1,
    randonnee: 1,
    gastronomie: 2,
    architecture: 2,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 3,
    plage: 2,
  },
  description: {
    fr: "Les Pays-Bas sont une destination surprenante de diversité malgré leur petite taille, alliant une capitale cosmopolite et bohème à des tulipiers à perte de vue, des moulins à vent iconiques et des villes historiques médiévales. Amsterdam, avec ses canaux du XVIIe siècle, ses musées de rang mondial et son architecture unique, est l'une des villes les plus visitées d'Europe. La culture du vélo, l'hospitalité chaleureuse et la liberté d'esprit hollandaise en font une destination attachante et accessible.", en: "The Netherlands is a surprisingly diverse destination despite its small size, combining a cosmopolitan, bohemian capital with tulip fields as far as the eye can see, iconic windmills and medieval historic towns. Amsterdam, with its 17th-century canals, world-class museums and unique architecture, is one of the most visited cities in Europe. Bike culture, warm hospitality and the Dutch free spirit make it an endearing and accessible destination.", es: "Los Países Bajos son un destino sorprendentemente diverso a pesar de su reducido tamaño, que combina una capital cosmopolita y bohemia con campos de tulipanes hasta donde alcanza la vista, molinos de viento icónicos y ciudades históricas medievales. Ámsterdam, con sus canales del siglo XVII, sus museos de talla mundial y su arquitectura única, es una de las ciudades más visitadas de Europa. La cultura de la bicicleta, la cálida hospitalidad y el espíritu libre neerlandés la convierten en un destino entrañable y accesible.", de: "Die Niederlande sind trotz ihrer geringen Größe ein überraschend vielfältiges Reiseziel, das eine kosmopolitische, unkonventionelle Hauptstadt mit endlosen Tulpenbäumen, berühmten Windmühlen und historischen mittelalterlichen Städten vereint. Amsterdam ist mit seinen Kanälen aus dem 17. Jahrhundert, erstklassigen Museen und einzigartiger Architektur eine der meistbesuchten Städte Europas. Die Fahrradkultur, die herzliche Gastfreundschaft und der niederländische Freiheitsgeist machen es zu einem liebenswerten und zugänglichen Reiseziel.",
  },
  bestPeriods: [
    {
      months: { fr: "Avr – Mai", en: "Apr – May", es: "Abr – May", de: "April – Mai" },
      label: { fr: "Tulipes & printemps", en: "Tulips & spring", es: "Tulipanes y primavera", de: "Tulpen und Frühling" },
      color: "#22c55e",
      description: {
        fr: "Les champs de tulipes sont en fleurs, Keukenhof est ouvert. Temps frais mais ensoleillé par belles journées.", en: "Tulip fields are in bloom, Keukenhof is open. Cool but sunny on fine days.", es: "Los campos de tulipanes están en flor, Keukenhof está abierto. Tiempo fresco pero soleado en los días buenos.", de: "Die Tulpenfelder blühen, der Keukenhof ist geöffnet. Kühles, aber sonniges Wetter an schönen Tagen.",
      },
      icon: "🌷",
    },
    {
      months: { fr: "Jun – Aoû", en: "Jun – Aug", es: "Jun – Ago", de: "Juni – Aug" },
      label: { fr: "Été", en: "Summer", es: "Verano", de: "Sommer" },
      color: "#22c55e",
      description: {
        fr: "Températures douces, terrasses animées, festivals de plein air. Meilleure période pour les excursions à vélo.", en: "Mild temperatures, lively terraces, outdoor festivals. Best period for bike trips.", es: "Temperaturas suaves, terrazas animadas, festivales al aire libre. Mejor época para rutas en bicicleta.", de: "Milde Temperaturen, belebte Terrassen, Open-Air-Festivals. Beste Zeit für Radtouren.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Sep – Oct", en: "Sep – Oct", es: "Sep – Oct", de: "September – Okt" },
      label: { fr: "Automne", en: "Autumn", es: "Otoño", de: "Herbst" },
      color: "#f59e0b",
      description: {
        fr: "Moins de touristes, lumière dorée sur les canaux, prix plus bas. Quelques risques de pluie.", en: "Fewer tourists, golden light over the canals, lower prices. Some chance of rain.", es: "Menos turistas, luz dorada sobre los canales, precios más bajos. Algo de riesgo de lluvia.", de: "Weniger Touristen, goldenes Licht auf den Kanälen, niedrigere Preise. Es besteht eine gewisse Regengefahr.",
      },
      icon: "🍂",
    },
    {
      months: { fr: "Nov – Mar", en: "Nov – Mar", es: "Nov – Mar", de: "Nov. – Di" },
      label: { fr: "Hiver", en: "Winter", es: "Invierno", de: "Winter" },
      color: "#94a3b8",
      description: {
        fr: "Froid et pluvieux, mais ambiance chaleureuse dans les cafés-bruns. Marchés de Noël et patinoires.", en: "Cold and rainy, but a cosy atmosphere in the brown cafés. Christmas markets and ice rinks.", es: "Frío y lluvioso, pero un ambiente cálido en los cafés marrones. Mercados navideños y pistas de patinaje.", de: "Kalt und regnerisch, aber warme Atmosphäre in den Cafés-Bruns. Weihnachtsmärkte und Eisbahnen.",
      },
      icon: "🌧️",
    },
  ],
  weatherCities: [
    {
      id: "amsterdam",
      name: "Amsterdam",
      region: { fr: "Hollande-Septentrionale — climat océanique, assez pluvieux", en: "North Holland — oceanic climate, fairly rainy", es: "Holanda Septentrional — clima oceánico, bastante lluvioso", de: "Nordholland – ozeanisches Klima, ziemlich regnerisch" },
      data: [
        { month: "Jan", temp: 4, rain: 75, icon: "❄️" },
        { month: "Fév", temp: 4, rain: 65, icon: "❄️" },
        { month: "Mar", temp: 7, rain: 65, icon: "❄️" },
        { month: "Avr", temp: 11, rain: 55, icon: "⛅" },
        { month: "Mai", temp: 15, rain: 65, icon: "⛅" },
        { month: "Jun", temp: 17, rain: 75, icon: "☀️" },
        { month: "Jul", temp: 19, rain: 85, icon: "☀️" },
        { month: "Aoû", temp: 19, rain: 90, icon: "☀️" },
        { month: "Sep", temp: 16, rain: 85, icon: "☀️" },
        { month: "Oct", temp: 12, rain: 90, icon: "⛅" },
        { month: "Nov", temp: 8, rain: 85, icon: "⛅" },
        { month: "Déc", temp: 5, rain: 80, icon: "❄️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Amsterdam",
      region: { fr: "Hollande-Septentrionale", en: "North Holland", es: "Holanda Septentrional", de: "Nordholland" },
      description: {
        fr: "Amsterdam est une capitale unique en son genre, construite sur un réseau de 165 canaux bordés de maisons à pignons typiques du Siècle d'Or hollandais. Les musées Van Gogh, Rijksmuseum et Anne Frank font partie des plus visités du monde, mais la ville séduit surtout par son atmosphère de liberté, ses marchés aux puces et ses innombrables cafés-bruns. Se déplacer à vélo comme les 900 000 habitants est la meilleure façon de s'immerger dans la culture locale.", en: "Amsterdam is a one-of-a-kind capital, built on a network of 165 canals lined with gabled houses typical of the Dutch Golden Age. The Van Gogh Museum, the Rijksmuseum and the Anne Frank House are among the most visited in the world, but the city charms above all through its atmosphere of freedom, its flea markets and its countless brown cafés. Getting around by bike like its 900,000 residents is the best way to soak up the local culture.", es: "Ámsterdam es una capital única, construida sobre una red de 165 canales bordeados de casas con frontones típicas del Siglo de Oro neerlandés. Los museos Van Gogh, Rijksmuseum y Ana Frank están entre los más visitados del mundo, pero la ciudad seduce sobre todo por su atmósfera de libertad, sus mercadillos y sus innumerables cafés marrones. Desplazarse en bicicleta como sus 900.000 habitantes es la mejor manera de sumergirse en la cultura local.", de: "Amsterdam ist eine einzigartige Hauptstadt, die auf einem Netz von 165 Kanälen mit typischen Giebelhäusern aus dem Goldenen Zeitalter der Niederlande errichtet wurde. Die Van Gogh-, Rijksmuseum- und Anne-Frank-Museen gehören zu den meistbesuchten der Welt, aber die Stadt verführt vor allem mit ihrer Atmosphäre der Freiheit, ihren Flohmärkten und ihren unzähligen Cafés-Bruns. Sich wie die 900.000 Einwohner mit dem Fahrrad fortzubewegen, ist die beste Möglichkeit, in die lokale Kultur einzutauchen.",
      },
      wikipedia: "Amsterdam",
      tags: ["Culture", "Musées", "Ville", "Aventure", "Art"],
      mustSee: [
        {
          name: { fr: "Rijksmuseum — chef-d'œuvre de Rembrandt, Vermeer et Hals", en: "Rijksmuseum — masterpieces by Rembrandt, Vermeer and Hals", es: "Rijksmuseum — obras maestras de Rembrandt, Vermeer y Hals", de: "Rijksmuseum – Meisterwerk von Rembrandt, Vermeer und Hals" },
          wikipedia: "Rijksmuseum",
        },
        {
          name: { fr: "Musée Van Gogh — plus grande collection de l'artiste au monde", en: "Van Gogh Museum — the largest collection of the artist's work in the world", es: "Museo Van Gogh — la mayor colección del artista del mundo", de: "Van Gogh Museum – größte Sammlung des Künstlers weltweit" },
          wikipedia: "File:VanGogh-starry night ballance1.jpg",
        },
        {
          name: { fr: "Maison d'Anne Frank — demeure où se cacha la jeune fille juive pendant la guerre", en: "Anne Frank House — the home where the young Jewish girl hid during the war", es: "Casa de Ana Frank — vivienda donde se escondió la joven judía durante la guerra", de: "Anne-Frank-Haus – Haus, in dem sich das jüdische Mädchen während des Krieges versteckte" },
          wikipedia: "Anne_Frank_House",
        },
        {
          name: { fr: "Ceinture de canaux du XVIIe siècle — classée au patrimoine mondial UNESCO", en: "17th-century canal ring — UNESCO World Heritage Site", es: "Cinturón de canales del siglo XVII — Patrimonio de la Humanidad UNESCO", de: "Kanalring aus dem 17. Jahrhundert – UNESCO-Weltkulturerbe" },
          wikipedia: "File:Achterwehrer Schifffahrtskanal 1.JPG",
        },
      ],
    },
    {
      id: 2,
      name: { fr: "Keukenhof & Champs de tulipes", en: "Keukenhof & Tulip Fields", es: "Keukenhof y campos de tulipanes", de: "Keukenhof und Tulpenfelder" },
      region: { fr: "Hollande-Méridionale", en: "South Holland", es: "Holanda Meridional", de: "Südholland" },
      description: {
        fr: "Le Keukenhof, ouvert uniquement de mi-mars à mi-mai, est le plus grand jardin de fleurs du monde avec ses 7 millions de bulbes en fleurs sur 32 hectares. Alentour, les champs de tulipes multicolores s'étirent à perte de vue entre Lisse et Haarlem, créant un spectacle unique au monde. Louer un vélo pour sillonner ces paysages floraux est une expérience inoubliable et peu coûteuse.", en: "Keukenhof, open only from mid-March to mid-May, is the world's largest flower garden with 7 million bulbs in bloom across 32 hectares. Around it, multicoloured tulip fields stretch as far as the eye can see between Lisse and Haarlem, creating a spectacle unlike anywhere else. Renting a bike to explore these floral landscapes is an unforgettable and inexpensive experience.", es: "Keukenhof, abierto solo de mediados de marzo a mediados de mayo, es el mayor jardín floral del mundo con 7 millones de bulbos en flor en 32 hectáreas. Alrededor, los campos de tulipanes multicolores se extienden hasta donde alcanza la vista entre Lisse y Haarlem, creando un espectáculo único en el mundo. Alquilar una bicicleta para recorrer estos paisajes florales es una experiencia inolvidable y económica.", de: "Der Keukenhof ist nur von Mitte März bis Mitte Mai geöffnet und mit seinen 7 Millionen Blumenzwiebeln auf 32 Hektar der größte Blumengarten der Welt. Die umliegenden Felder mit bunten Tulpen erstrecken sich so weit das Auge reicht zwischen Lisse und Haarlem und bieten ein weltweit einzigartiges Schauspiel. Ein Fahrrad zu mieten, um diese Blumenlandschaften zu erkunden, ist ein unvergessliches und kostengünstiges Erlebnis.",
      },
      wikipedia: "Keukenhof",
      tags: ["Nature", "Aventure", "Culture"],
      mustSee: [
        {
          name: { fr: "Keukenhof — 800 variétés de tulipes, narcisses et jacinthes en fleurs", en: "Keukenhof — 800 varieties of tulips, daffodils and hyacinths in bloom", es: "Keukenhof — 800 variedades de tulipanes, narcisos y jacintos en flor", de: "Keukenhof – 800 blühende Tulpen-, Narzissen- und Hyazinthenarten" },
          wikipedia: "Keukenhof",
        },
        {
          name: { fr: "Haarlem — élégante ville historique avec superbe cathédrale et Frans Hals Museum", en: "Haarlem — elegant historic town with a superb cathedral and the Frans Hals Museum", es: "Haarlem — elegante ciudad histórica con una magnífica catedral y el Museo Frans Hals", de: "Haarlem – elegante historische Stadt mit atemberaubender Kathedrale und Frans-Hals-Museum" },
          wikipedia: "Haarlem",
        },
        {
          name: { fr: "Aalsmeer — plus grand marché aux fleurs du monde (visite le matin)", en: "Aalsmeer — the world's largest flower auction (visit in the morning)", es: "Aalsmeer — la mayor subasta de flores del mundo (visitar por la mañana)", de: "Aalsmeer – größter Blumenmarkt der Welt (Morgenbesuch)" },
          wikipedia: "File:Aalsmeer Flower Auction Distribution (13013825874).jpg",
        },
      ],
    },
    {
      id: 3,
      name: { fr: "La Haye, Delft & Rotterdam", en: "The Hague, Delft & Rotterdam", es: "La Haya, Delft y Róterdam", de: "Den Haag, Delft und Rotterdam" },
      region: { fr: "Hollande-Méridionale", en: "South Holland", es: "Holanda Meridional", de: "Südholland" },
      description: {
        fr: "Ces trois villes de Hollande-Méridionale offrent trois visages contrastés des Pays-Bas. La Haye est la ville des institutions internationales et du Mauritshuis (La Jeune Fille à la Perle). Delft, avec ses canaux miniatures et sa faïence bleue légendaire, est figée dans une sérénité XVIIe siècle. Rotterdam, détruite en 1940 et reconstruite, est devenue l'une des villes d'architecture contemporaine les plus audacieuses d'Europe.", en: "These three cities in South Holland offer three contrasting faces of the Netherlands. The Hague is the city of international institutions and the Mauritshuis (Girl with a Pearl Earring). Delft, with its miniature canals and legendary blue pottery, feels frozen in 17th-century serenity. Rotterdam, destroyed in 1940 and rebuilt, has become one of Europe's boldest cities for contemporary architecture.", es: "Estas tres ciudades de Holanda Meridional ofrecen tres caras contrastadas de los Países Bajos. La Haya es la ciudad de las instituciones internacionales y del Mauritshuis (La joven de la perla). Delft, con sus canales en miniatura y su legendaria loza azul, parece congelada en la serenidad del siglo XVII. Róterdam, destruida en 1940 y reconstruida, se ha convertido en una de las ciudades de arquitectura contemporánea más audaces de Europa.", de: "Diese drei Städte in Südholland bieten drei kontrastreiche Gesichter der Niederlande. Den Haag ist die Stadt der internationalen Institutionen und des Mauritshuis (Mädchen mit dem Perlenohrring). Delft mit seinen Miniaturkanälen und dem legendären blauen Steingut ist in der Ruhe des 17. Jahrhunderts erstarrt. Rotterdam, 1940 zerstört und wieder aufgebaut, hat sich zu einer der gewagtesten Städte zeitgenössischer Architektur in Europa entwickelt.",
      },
      wikipedia: "File:00 0781 Canal in Delft (NL).jpg",
      tags: ["Histoire", "Architecture", "Art", "Gastronomie"],
      mustSee: [
        {
          name: { fr: "Mauritshuis à La Haye", en: "Mauritshuis in The Hague", es: "Mauritshuis en La Haya", de: "Mauritshuis in Den Haag" },
          wikipedia: "File:Mauritshuis - Den Haag-1780.jpg",
        },
        {
          name: { fr: "Vieille-Ville de Delft et fabrique de faïence royale", en: "Delft old town and the Royal Delft pottery factory", es: "Casco antiguo de Delft y fábrica de loza real", de: "Altstadt von Delft und Königliche Steingutfabrik" },
          wikipedia: "File:Delft 21 April 2013 07.jpg",
        },
        {
          name: { fr: "Maisons cubes de Rotterdam (Kubuswoning) — icônes du design néerlandais", en: "Rotterdam cube houses (Kubuswoning) — icons of Dutch design", es: "Casas cubo de Róterdam (Kubuswoning) — íconos del diseño neerlandés", de: "Würfelhäuser von Rotterdam (Kubuswoning) – Ikonen des niederländischen Designs" },
          wikipedia: "File:Rotterdam Cube House street view.jpg",
        },
      ],
    },
    {
      id: 4,
      name: "Kinderdijk & Zaanse Schans",
      region: { fr: "Hollande-Méridionale / Hollande-Septentrionale", en: "South Holland / North Holland", es: "Holanda Meridional / Holanda Septentrional", de: "Südholland / Nordholland" },
      description: {
        fr: "Kinderdijk abrite le plus grand ensemble de moulins à vent préservés du monde, alignant 19 moulins le long des polders du XVIIIe siècle, classés au patrimoine de l'UNESCO. Zaanse Schans, à quelques kilomètres d'Amsterdam, est un village-musée vivant où moulins à vent en activité, fromageries et saboteries reconstituent la vie hollandaise d'antan. Ces deux sites condensent l'essence de l'identité néerlandaise dans des paysages iconiques.", en: "Kinderdijk is home to the largest preserved group of windmills in the world, with 19 windmills lined up along 18th-century polders, a UNESCO World Heritage site. Zaanse Schans, a few kilometres from Amsterdam, is a living open-air museum village where working windmills, cheese farms and clog workshops recreate Dutch life of old. Together, these two sites capture the essence of Dutch identity in iconic landscapes.", es: "Kinderdijk alberga el mayor conjunto de molinos de viento preservados del mundo, con 19 molinos alineados a lo largo de pólderes del siglo XVIII, declarados Patrimonio de la Humanidad por la UNESCO. Zaanse Schans, a pocos kilómetros de Ámsterdam, es un pueblo-museo vivo donde molinos en funcionamiento, queserías y talleres de zuecos recrean la vida neerlandesa de antaño. Ambos lugares condensan la esencia de la identidad neerlandesa en paisajes icónicos.", de: "Kinderdijk beherbergt die größte Sammlung erhaltener Windmühlen der Welt und säumt 19 Mühlen entlang der Polder aus dem 18. Jahrhundert, die zum UNESCO-Weltkulturerbe gehören. Zaanse Schans, nur wenige Kilometer von Amsterdam entfernt, ist ein lebendiges Museumsdorf, in dem funktionierende Windmühlen, Käsereien und Holzschuhfabriken das niederländische Leben vergangener Zeiten nachbilden. Diese beiden Orte verdichten die Essenz der niederländischen Identität in ikonischen Landschaften.",
      },
      wikipedia: "Kinderdijk",
      tags: ["UNESCO", "Architecture", "Nature", "Tradition"],
      mustSee: [
        {
          name: { fr: "Kinderdijk — 19 moulins à vent alignés sur les polders, classés UNESCO", en: "Kinderdijk — 19 windmills lined up on the polders, UNESCO-listed", es: "Kinderdijk — 19 molinos de viento alineados en los pólderes, Patrimonio UNESCO", de: "Kinderdijk – 19 Windmühlen in den Poldern, die zum UNESCO-Weltkulturerbe gehören" },
          wikipedia: "Kinderdijk",
        },
        {
          name: { fr: "Zaanse Schans — village-musée avec moulins, fromageries et saboteries", en: "Zaanse Schans — open-air museum village with windmills, cheese farms and clog workshops", es: "Zaanse Schans — pueblo-museo con molinos, queserías y talleres de zuecos", de: "Zaanse Schans – Museumsdorf mit Mühlen, Käsereien und Holzschuhfabriken" },
          wikipedia: "Zaanse_Schans",
        },
        {
          name: { fr: "Giethoorn — village lacustre surnommé la Venise des Pays-Bas", en: "Giethoorn — lakeside village nicknamed the Venice of the Netherlands", es: "Giethoorn — pueblo lacustre apodado la Venecia de los Países Bajos", de: "Giethoorn – Dorf am Seeufer, auch „Venedig der Niederlande“ genannt" },
          wikipedia: "Giethoorn",
        },
        {
          name: { fr: "Alkmaar — célèbre marché aux fromages chaque vendredi matin", en: "Alkmaar — famous cheese market every Friday morning", es: "Alkmaar — famoso mercado de quesos todos los viernes por la mañana", de: "Alkmaar – berühmter Käsemarkt jeden Freitagmorgen" },
          wikipedia: "Alkmaar",
        },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "Les Pays-Bas sont légèrement plus chers que la moyenne de l'Europe de l'Ouest. Amsterdam en particulier a connu une forte hausse des prix ces dernières années. Cependant, se déplacer à vélo et manger dans les marchés ou supermarchés permet de contrôler son budget.", en: "The Netherlands is slightly more expensive than the Western European average. Amsterdam in particular has seen a sharp rise in prices in recent years. However, getting around by bike and eating at markets or supermarkets helps keep the budget under control.", es: "Los Países Bajos son ligeramente más caros que la media de Europa Occidental. Ámsterdam en particular ha experimentado una fuerte subida de precios en los últimos años. Sin embargo, desplazarse en bicicleta y comer en mercados o supermercados permite controlar el presupuesto.", de: "Die Niederlande sind etwas teurer als der westeuropäische Durchschnitt. Insbesondere Amsterdam verzeichnete in den letzten Jahren einen starken Preisanstieg. Wenn Sie jedoch mit dem Fahrrad reisen und auf Märkten oder Supermärkten essen, haben Sie die Kontrolle über Ihr Budget.",
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
            price: "28–45 €",
            detail: { fr: "Amsterdam est l'une des plus chères pour les auberges", en: "Amsterdam is among the most expensive for hostels", es: "Ámsterdam es uno de los más caros para albergues", de: "Amsterdam ist eines der teuersten Hostels" },
          },
          {
            label: { fr: "Hôtel 2–3 étoiles", en: "2–3 star hotel", es: "Hotel 2–3 estrellas", de: "2–3-Sterne-Hotel" },
            price: "80–140 €",
            detail: { fr: "Chambre double, moins cher hors du centre d'Amsterdam", en: "Double room, cheaper outside Amsterdam's centre", es: "Habitación doble, más barato fuera del centro de Ámsterdam", de: "Doppelzimmer, günstiger außerhalb des Zentrums von Amsterdam" },
          },
          {
            label: { fr: "Hôtel de canal (boutique)", en: "Canal-house hotel (boutique)", es: "Hotel en casa de canal (boutique)", de: "Kanalhotel (Boutique)" },
            price: "140–250 €",
            detail: { fr: "Hôtels dans les maisons historiques avec vue sur les canaux", en: "Hotels in historic houses with canal views", es: "Hoteles en casas históricas con vistas a los canales", de: "Hotels in historischen Häusern mit Blick auf den Kanal" },
          },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          {
            label: { fr: "Stroopwafel, haaring, frites de rue", en: "Stroopwafel, haaring, street fries", es: "Stroopwafel, haaring, patatas fritas callejeras", de: "Stroopwafel, Haaring, Street Fries" },
            price: "3–8 €",
            detail: { fr: "Street food hollandais typique et abordable", en: "Typical, affordable Dutch street food", es: "Comida callejera neerlandesa típica y asequible", de: "Typisches und erschwingliches niederländisches Streetfood" },
          },
          {
            label: { fr: "Déjeuner restaurant / broodje", en: "Restaurant lunch / broodje", es: "Almuerzo en restaurante / broodje", de: "Mittagessen im Restaurant/Broodje" },
            price: "12–20 €",
            detail: { fr: "Sandwichs hollandais (broodjes) ou plat du jour", en: "Dutch sandwiches (broodjes) or dish of the day", es: "Sándwiches neerlandeses (broodjes) o plato del día", de: "Niederländische Sandwiches (Broodjes) oder Tagesgericht" },
          },
          {
            label: { fr: "Dîner restaurant", en: "Restaurant dinner", es: "Cena en restaurante", de: "Abendessen im Restaurant" },
            price: "25–45 €",
            detail: { fr: "Cuisine internationale très développée à Amsterdam", en: "Highly developed international cuisine scene in Amsterdam", es: "Escena de cocina internacional muy desarrollada en Ámsterdam", de: "Hochentwickelte internationale Küche in Amsterdam" },
          },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          {
            label: { fr: "OV-chipkaart (tram/bus/métro Amsterdam)", en: "OV-chipkaart (tram/bus/metro Amsterdam)", es: "OV-chipkaart (tranvía/autobús/metro Ámsterdam)", de: "OV-chipkaart (Amsterdamer Straßenbahn/Bus/U-Bahn)" },
            price: "2,50–3,50 €",
            detail: { fr: "Pass journée à 9 €, très pratique", en: "Day pass for 9 €, very handy", es: "Bono diario a 9 €, muy práctico", de: "Tageskarte für 9 €, sehr praktisch" },
          },
          {
            label: { fr: "Location de vélo (journée)", en: "Bike rental (day)", es: "Alquiler de bicicleta (día)", de: "Fahrradverleih (Tag)" },
            price: "12–18 €",
            detail: { fr: "Meilleur moyen de transport aux Pays-Bas", en: "The best way to get around the Netherlands", es: "El mejor medio de transporte en los Países Bajos", de: "Bester Transport in den Niederlanden" },
          },
          {
            label: { fr: "Train Amsterdam–Rotterdam ou La Haye", en: "Train Amsterdam–Rotterdam or The Hague", es: "Tren Ámsterdam–Róterdam o La Haya", de: "Zug Amsterdam–Rotterdam oder Den Haag" },
            price: "12–20 €",
            detail: { fr: "En 40–50 min, trains très fréquents", en: "40–50 min, very frequent trains", es: "En 40–50 min, trenes muy frecuentes", de: "In 40–50 Minuten, sehr häufige Züge" },
          },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          {
            label: { fr: "Rijksmuseum ou Van Gogh Museum", en: "Rijksmuseum or Van Gogh Museum", es: "Rijksmuseum o Museo Van Gogh", de: "Rijksmuseum oder Van Gogh Museum" },
            price: "22–27 €",
            detail: { fr: "Réservation en ligne obligatoire pour Van Gogh Museum", en: "Online booking mandatory for the Van Gogh Museum", es: "Reserva en línea obligatoria para el Museo Van Gogh", de: "Für das Van Gogh Museum ist eine Online-Reservierung erforderlich" },
          },
          {
            label: { fr: "Maison d'Anne Frank", en: "Anne Frank House", es: "Casa de Ana Frank", de: "Anne-Frank-Haus" },
            price: "16 €",
            detail: { fr: "Réservation indispensable longtemps à l'avance", en: "Booking essential well in advance", es: "Reserva indispensable con mucha antelación", de: "Eine rechtzeitige Reservierung ist unbedingt erforderlich" },
          },
          {
            label: { fr: "Keukenhof (mai uniquement)", en: "Keukenhof (May only)", es: "Keukenhof (solo en mayo)", de: "Keukenhof (nur Mai)" },
            price: "22 €",
            detail: { fr: "Inclut les jardins, pas de navette depuis Amsterdam", en: "Includes the gardens, no shuttle from Amsterdam", es: "Incluye los jardines, sin lanzadera desde Ámsterdam", de: "Inklusive Gärten, kein Shuttle von Amsterdam" },
          },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
        daily: "80–105 €/j",
        desc: { fr: "Auberge, street food et supermarché, vélo loué, musée par jour", en: "Hostel, street food and supermarket, rented bike, one museum a day", es: "Albergue, comida callejera y supermercado, bicicleta alquilada, un museo al día", de: "Hostel, Streetfood und Supermarkt, Leihfahrrad, Museum pro Tag" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
        daily: "140–200 €/j",
        desc: { fr: "Hôtel 3 étoiles, restaurants midi et soir, musées et activités", en: "3-star hotel, lunch and dinner restaurants, museums and activities", es: "Hotel 3 estrellas, restaurantes al mediodía y por la noche, museos y actividades", de: "3-Sterne-Hotel, Mittags- und Abendrestaurants, Museen und Aktivitäten" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "7 jours", en: "7 days", es: "7 días", de: "7 Tage" },
      route: { fr: "Amsterdam (4j) → Keukenhof/Haarlem (1j) → La Haye & Delft (1j) → Rotterdam (1j)", en: "Amsterdam (4d) → Keukenhof/Haarlem (1d) → The Hague & Delft (1d) → Rotterdam (1d)", es: "Ámsterdam (4d) → Keukenhof/Haarlem (1d) → La Haya y Delft (1d) → Róterdam (1d)", de: "Amsterdam (4 Tage) → Keukenhof/Haarlem (1 Tag) → Den Haag und Delft (1 Tag) → Rotterdam (1 Tag)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 050 – 1 300 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Amsterdam", en: "Return flight Paris–Amsterdam", es: "Vuelo ida y vuelta Madrid–Ámsterdam", de: "Hin- und Rückflug Paris–Amsterdam" }, amount: "80–150 €" },
            { label: { fr: "Hébergement (6 nuits)", en: "Accommodation (6 nights)", es: "Alojamiento (6 noches)", de: "Unterkunft (6 Nächte)" }, amount: "200–280 €" },
            { label: { fr: "Transports locaux + trains", en: "Local transport + trains", es: "Transporte local + trenes", de: "Nahverkehr + Züge" }, amount: "100–130 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "410–490 €" },
            { label: { fr: "Activités + musées", en: "Activities + museums", es: "Actividades + museos", de: "Aktivitäten + Museen" }, amount: "110–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "2 100 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Amsterdam", en: "Return flight Paris–Amsterdam", es: "Vuelo ida y vuelta Madrid–Ámsterdam", de: "Hin- und Rückflug Paris–Amsterdam" }, amount: "100–180 €" },
            { label: { fr: "Hébergement (6 nuits)", en: "Accommodation (6 nights)", es: "Alojamiento (6 noches)", de: "Unterkunft (6 Nächte)" }, amount: "750–1 000 €" },
            { label: { fr: "Transports locaux + trains", en: "Local transport + trains", es: "Transporte local + trenes", de: "Nahverkehr + Züge" }, amount: "150–200 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "750–1 000 €" },
            { label: { fr: "Activités + musées", en: "Activities + museums", es: "Actividades + museos", de: "Aktivitäten + Museen" }, amount: "200–280 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    {
      icon: "✈️",
      label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" },
      value: { fr: "Paris–Amsterdam : 1h15 de vol. Aussi accessible en Thalys/Eurostar en 3h20 depuis Paris-Nord.", en: "Paris–Amsterdam: 1h15 flight. Also reachable by Thalys/Eurostar in 3h20 from Paris-Nord.", es: "Madrid–Ámsterdam: 2h30 de vuelo directo.", de: "Paris–Amsterdam: 1 Std. 15 Min. Flug. Auch mit Thalys/Eurostar in 3 Stunden und 20 Minuten von Paris-Nord aus erreichbar." },
    },
    {
      icon: "🪪",
      label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" },
      value: { fr: "Pas de visa pour les citoyens UE/Schengen. Carte d'identité suffisante.", en: "No visa required for EU/Schengen citizens. ID card is sufficient.", es: "Sin visado para ciudadanos de la UE/Schengen. DNI suficiente.", de: "Kein Visum für EU-/Schengen-Bürger. Ausreichender Personalausweis." },
    },
    {
      icon: "💰",
      label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" },
      value: { fr: "Euro (€). CB acceptée presque partout, mais certains petits commerces sont cash only.", en: "Euro (€). Cards accepted almost everywhere, but some small shops are cash only.", es: "Euro (€). Tarjeta aceptada casi en todas partes, pero algunos pequeños comercios solo aceptan efectivo.", de: "Euro (€). Kreditkarten werden fast überall akzeptiert, in einigen kleinen Geschäften ist jedoch nur Barzahlung möglich." },
    },
    {
      icon: "🗣️",
      label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" },
      value: { fr: "Néerlandais. L'anglais est parlé couramment par pratiquement toute la population, l'un des meilleurs taux d'Europe.", en: "Dutch. English is spoken fluently by nearly the entire population, one of the best rates in Europe.", es: "Neerlandés. El inglés lo habla con fluidez prácticamente toda la población, uno de los mejores índices de Europa.", de: "Niederländisch. Nahezu die gesamte Bevölkerung spricht fließend Englisch, eine der besten Sprachkenntnisse in Europa." },
    },
    {
      icon: "🔌",
      label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" },
      value: { fr: "Type F (Schuko, 2 broches rondes). 230V / 50Hz. Compatible avec les prises françaises.", en: "Type F (Schuko, 2 round pins). 230V / 50Hz. Compatible with French plugs.", es: "Tipo F (Schuko, 2 clavijas redondas). 230V / 50Hz. Compatible con los enchufes españoles.", de: "Typ F (Schuko, 2 runde Stifte). 230V/50Hz. Kompatibel mit französischen Steckdosen." },
    },
    {
      icon: "💊",
      label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" },
      value: { fr: "Soins médicaux excellents. Carte Européenne d'Assurance Maladie valable pour les ressortissants UE.", en: "Excellent healthcare. European Health Insurance Card valid for EU nationals.", es: "Atención médica excelente. Tarjeta Sanitaria Europea válida para ciudadanos de la UE.", de: "Ausgezeichnete medizinische Versorgung. Europäische Krankenversicherungskarte, gültig für EU-Bürger." },
    },
    {
      icon: "🚲",
      label: { fr: "Vélo", en: "Bike", es: "Bicicleta", de: "Fahrrad" },
      value: { fr: "Le vélo est ROI aux Pays-Bas. Louer un vélo est indispensable et rend de nombreux sites accessibles sans train.", en: "The bike is king in the Netherlands. Renting one is essential and makes many sites accessible without a train.", es: "La bicicleta es reina en los Países Bajos. Alquilar una es indispensable y permite acceder a muchos lugares sin tren.", de: "Radfahren ist in den Niederlanden KÖNIG. Das Mieten eines Fahrrads ist unerlässlich und macht viele Orte auch ohne Zug erreichbar." },
    },
    {
      icon: "🌧️",
      label: { fr: "Météo", en: "Weather", es: "Clima", de: "Wetterbericht" },
      value: { fr: "Prévoir un imperméable léger en toute saison. Les averses sont brèves mais fréquentes. Le vent est souvent présent.", en: "Bring a light rain jacket in every season. Showers are brief but frequent. Wind is often present.", es: "Llevar un impermeable ligero en cualquier estación. Los chubascos son breves pero frecuentes. El viento suele estar presente.", de: "Bringen Sie zu jeder Jahreszeit einen leichten Regenmantel mit. Die Schauer sind kurz, aber häufig. Der Wind ist oft vorhanden." },
    },
  ],
};
