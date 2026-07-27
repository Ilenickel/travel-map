export const AFGHANISTAN = {
  code: "AFG",
  numericId: 4,
  name: { fr: "Afghanistan", en: "Afghanistan", es: "Afganistán" , de: "Afghanistan"},
  emoji: "🇦🇫",
  capital: { fr: "Kaboul", en: "Kabul", es: "Kabul" , de: "Kabul"},
  language: { fr: "Dari, Pachto", en: "Dari, Pashto", es: "Dari, Pastún" , de: "Dari, Paschtu"},
  currency: { fr: "Afghani (AFN)", en: "Afghani (AFN)", es: "Afgani (AFN)" , de: "Afghani (AFN)"},
  timezone: "UTC+4:30",
  filter: { budgetMin: 40, budgetMid: 80, tripMin: 900, tripMid: 1800 },
  criteria: {
    unesco: 3,
    nature: 2,
    randonnee: 2,
    gastronomie: 1,
    architecture: 2,
    desert: 2,
    safari: 0,
    ski: 2,
    ville: 1,
    plage: 0,
  },
  description: {
    fr: "L'Afghanistan est une terre de contrastes dramatiques, où les majestueuses montagnes de l'Hindu Kush plongent vers des déserts brûlants et des vallées verdoyantes. Carrefour historique de la Route de la Soie, il a vu passer Alexandre le Grand, les armées de Gengis Khan et les caravanes de marchands reliant l'Orient et l'Occident. Depuis la prise du pouvoir par les talibans en août 2021, le pays est effectivement fermé au tourisme international et classé en zone rouge absolue par l'ensemble des gouvernements occidentaux.", en: "Afghanistan is a land of dramatic contrasts, where the majestic Hindu Kush mountains plunge into scorching deserts and lush valleys. A historic crossroads of the Silk Road, it has seen Alexander the Great, Genghis Khan's armies and merchant caravans travelling between East and West. Since the Taliban takeover in August 2021, the country has effectively been closed to international tourism and is classified as an absolute red zone by all Western governments.", es: "Afganistán es una tierra de contrastes dramáticos, donde las majestuosas montañas del Hindu Kush se precipitan hacia desiertos abrasadores y valles frondosos. Cruce histórico de la Ruta de la Seda, ha visto pasar a Alejandro Magno, los ejércitos de Gengis Kan y las caravanas de mercaderes que unían Oriente y Occidente. Desde la toma del poder por los talibanes en agosto de 2021, el país está de hecho cerrado al turismo internacional y clasificado en zona roja absoluta por la práctica totalidad de los gobiernos occidentales.", de: "Afghanistan ist ein Land dramatischer Kontraste, in dem die majestätischen Hindukusch-Berge in glühend heiße Wüsten und grüne Täler übergehen. Als historischer Knotenpunkt der Seidenstraße durchzogen hier Alexander der Große, die Armeen von Dschingis Khan und die Handelskarawanen, die Ost und West verbanden. Seit der Machtübernahme der Taliban im August 2021 ist das Land faktisch für den internationalen Tourismus gesperrt und von allen westlichen Regierungen in eine absolute rote Zone eingestuft."
  },
  bestPeriods: [
    {
      months: { fr: "Avr–Jun", en: "Apr–Jun", es: "Abr–Jun" , de: "April–Jun"},
      label: { fr: "Printemps (historique)", en: "Spring (historical)", es: "Primavera (histórico)" , de: "Frühling (historisch)"},
      color: "#22c55e",
      description: {
        fr: "Avant 2021 : la meilleure période avec des températures agréables, les lacs de Band-e-Amir remplis et les champs en fleurs dans les vallées.", en: "Before 2021: the best time to go, with pleasant temperatures, full lakes at Band-e Amir and flowering fields in the valleys.", es: "Antes de 2021: la mejor época, con temperaturas agradables, los lagos de Band-e Amir llenos y los campos en flor en los valles.", de: "Vor 2021: die beste Zeit mit angenehmen Temperaturen, gefüllten Seen von Band-e-Amir und blühenden Feldern in den Tälern."
      },
      icon: "🌸",
    },
    {
      months: { fr: "Sep–Oct", en: "Sep–Oct", es: "Sep–Oct" , de: "September–Okt"},
      label: { fr: "Automne (historique)", en: "Autumn (historical)", es: "Otoño (histórico)" , de: "Herbst (historisch)"},
      color: "#22c55e",
      description: {
        fr: "Avant 2021 : températures douces, vendanges de grenades dans le Kandahar, couleurs automnales dans les montagnes du Nouristan.", en: "Before 2021: mild temperatures, pomegranate harvests around Kandahar, and autumn colours in the mountains of Nuristan.", es: "Antes de 2021: temperaturas suaves, cosecha de granadas en la región de Kandahar, colores otoñales en las montañas de Nuristán.", de: "Vor 2021: milde Temperaturen, Granatapfelernte in Kandahar, Herbstfarben in den Bergen von Nouristan."
      },
      icon: "🍂",
    },
    {
      months: { fr: "Nov–Mar", en: "Nov–Mar", es: "Nov–Mar" , de: "November–März"},
      label: { fr: "Hiver rigoureux", en: "Harsh winter", es: "Invierno riguroso" , de: "Strenger Winter"},
      color: "#f59e0b",
      description: {
        fr: "Froid intense dans les montagnes, cols fermés par la neige. Kaboul peut descendre bien en dessous de zéro.", en: "Bitter cold in the mountains, with passes closed by snow. Kabul can drop well below freezing.", es: "Frío intenso en las montañas, con puertos de montaña cerrados por la nieve. Kabul puede caer muy por debajo de cero.", de: "Starke Kälte in den Bergen, durch Schnee gesperrte Pässe. Kabul kann deutlich unter den Gefrierpunkt fallen."
      },
      icon: "❄️",
    },
  ],
  weatherCities: [
    {
      id: "kabul",
      name: "Kaboul",
      region: { fr: "Est (capitale)", en: "East (capital)", es: "Este (capital)" , de: "Osten (Hauptstadt)"},
      data: [
        { month: "Jan", temp: -3, rain: 35, icon: "❄️" },
        { month: "Fév", temp: 1, rain: 50, icon: "❄️" },
        { month: "Mar", temp: 10, rain: 65, icon: "⛅" },
        { month: "Avr", temp: 16, rain: 55, icon: "☀️" },
        { month: "Mai", temp: 21, rain: 30, icon: "☀️" },
        { month: "Jun", temp: 25, rain: 5, icon: "☀️" },
        { month: "Jul", temp: 26, rain: 5, icon: "☀️" },
        { month: "Aoû", temp: 25, rain: 5, icon: "☀️" },
        { month: "Sep", temp: 21, rain: 5, icon: "☀️" },
        { month: "Oct", temp: 14, rain: 10, icon: "⛅" },
        { month: "Nov", temp: 5, rain: 25, icon: "⛅" },
        { month: "Déc", temp: 1, rain: 30, icon: "❄️" },
      ],
    },
    {
      id: "kandahar",
      name: "Kandahar",
      region: { fr: "Sud", en: "South", es: "Sur" , de: "Süden"},
      data: [
        { month: "Jan", temp: 5, rain: 15, icon: "❄️" },
        { month: "Fév", temp: 9, rain: 20, icon: "⛅" },
        { month: "Mar", temp: 16, rain: 25, icon: "☀️" },
        { month: "Avr", temp: 22, rain: 15, icon: "☀️" },
        { month: "Mai", temp: 28, rain: 5, icon: "⛅" },
        { month: "Jun", temp: 33, rain: 1, icon: "🌡️" },
        { month: "Jul", temp: 35, rain: 0, icon: "🌡️" },
        { month: "Aoû", temp: 34, rain: 0, icon: "🌡️" },
        { month: "Sep", temp: 29, rain: 0, icon: "⛅" },
        { month: "Oct", temp: 21, rain: 5, icon: "☀️" },
        { month: "Nov", temp: 13, rain: 10, icon: "⛅" },
        { month: "Déc", temp: 6, rain: 15, icon: "⛅" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Bamiyan",
      region: { fr: "Province de Bamiyan", en: "Bamiyan Province", es: "Provincia de Bamiyán" , de: "Provinz Bamiyan"},
      description: {
        fr: "La vallée de Bamiyan était l'un des sites archéologiques les plus émouvants du monde, avec ses deux bouddhas colossaux taillés dans la falaise au VIe siècle — détruits à la dynamite par les talibans en 2001. Les niches béantes dans la falaise ocre témoignent encore de cette perte culturelle irréparable. Autour, des centaines de grottes bouddhistes ornées de fresques et les vestiges d'une cité florissante sur la Route de la Soie en font un site UNESCO d'une valeur exceptionnelle.", en: "The Bamiyan Valley was one of the world's most moving archaeological sites, with two colossal Buddhas carved into the cliff in the 6th century—blown up by the Taliban in 2001. The gaping niches in the ochre rock still bear witness to that irreparable cultural loss. Around them, hundreds of Buddhist caves decorated with frescoes and the remains of a once-thriving Silk Road city make this a UNESCO site of exceptional value.", es: "El valle de Bamiyán era uno de los yacimientos arqueológicos más conmovedores del mundo, con sus dos budas colosales tallados en el acantilado en el siglo VI, destruidos con dinamita por los talibanes en 2001. Los nichos vacíos en el acantilado ocre siguen dando testimonio de esa pérdida cultural irreparable. Alrededor, cientos de cuevas budistas decoradas con frescos y los restos de una ciudad próspera en la Ruta de la Seda hacen de este un sitio de la UNESCO de un valor excepcional.", de: "Das Bamiyan-Tal war eine der bewegendsten archäologischen Stätten der Welt, mit seinen beiden kolossalen Buddhas, die im 6. Jahrhundert in die Klippe gehauen wurden und 2001 von den Taliban mit Dynamit zerstört wurden. Die klaffenden Nischen in der ockerfarbenen Klippe zeugen noch heute von diesem unwiederbringlichen kulturellen Verlust. Um ihn herum befinden sich Hunderte von mit Fresken verzierten buddhistischen Höhlen und die Überreste einer blühenden Stadt an der Seidenstraße, die ihn zu einem UNESCO-Weltkulturerbe von außergewöhnlichem Wert machen."
      },
      wikipedia: "File:Black_Hawk_flying_over_a_valley_in_Bamyan.jpg",
      tags: ["UNESCO", "Spiritualité", "Histoire"],
      mustSee: [
        { name: { fr: "Niches des bouddhas de Bamiyan — mémorial des colosses détruits", en: "Bamiyan Buddha niches — memorial to the destroyed colossi", es: "Nichos de los budas de Bamiyán — memorial de los colosos destruidos" , de: "Bamiyan-Buddha-Nischen – Denkmal für die zerstörten Kolosse"}, wikipedia: "File:Buddha of Bamiyan.jpg" },
        { name: { fr: "Grottes de Bamiyan — monastères rupestres bouddhistes", en: "Bamiyan caves — Buddhist rock-cut monasteries", es: "Cuevas de Bamiyán — monasterios rupestres budistas" , de: "Bamiyan-Höhlen – buddhistische Höhlenklöster"}, wikipedia: "File:Bamiyan Valley2.jpg" },
        { name: { fr: "Shahr-e Gholghola — citadelle médiévale surnommée 'cité des cris'", en: "Shahr-e Gholghola — medieval citadel nicknamed the 'city of screams'", es: "Shahr-e Gholghola — ciudadela medieval apodada la 'ciudad de los gritos'" , de: "Shahr-e Gholghola – mittelalterliche Zitadelle mit dem Spitznamen „Stadt der Schreie“"}, wikipedia: "File:02- Gholghola Mountains.jpg" },
        { name: { fr: "Qala-e Dokhtar — château de la Fille de Bamiyan", en: "Qala-e Dokhtar — Bamiyan's Maiden Fortress", es: "Qala-e Dokhtar — el Castillo de la Doncella de Bamiyán" , de: "Qala-e Dokhtar – Burg der Tochter von Bamiyan"}, wikipedia: "File:Ghal'eh_Dokhtar2.jpg" },
      ],
    },
    {
      id: 2,
      name: "Band-e Amir",
      region: { fr: "Province de Bamiyan", en: "Bamiyan Province", es: "Provincia de Bamiyán" , de: "Provinz Bamiyan"},
      description: {
        fr: "Les lacs de Band-e Amir, surnommés les « diamants de l'Afghanistan », forment une série de six lacs aux eaux bleu azur d'une transparence irréelle, séparés par des barrages naturels de travertin blanc. Perchés à 2 900 mètres d'altitude dans les montagnes de l'Hindu Kush, ils constituent l'un des paysages naturels les plus spectaculaires d'Asie centrale et ont été classés premier parc national d'Afghanistan en 2009.", en: "The lakes of Band-e Amir, nicknamed the 'diamonds of Afghanistan', form a chain of six lakes with unreal azure-blue water, separated by natural white travertine dams. Set at 2,900 metres in the Hindu Kush mountains, they are among Central Asia's most spectacular natural landscapes and were designated Afghanistan's first national park in 2009.", es: "Los lagos de Band-e Amir, apodados los «diamantes de Afganistán», forman una serie de seis lagos de aguas azules de una transparencia irreal, separados por presas naturales de travertino blanco. Situados a 2.900 metros de altitud en las montañas del Hindu Kush, constituyen uno de los paisajes naturales más espectaculares de Asia Central y fueron declarados primer parque nacional de Afganistán en 2009.", de: "Die Seen von Band-e Amir, auch „Diamanten Afghanistans“ genannt, bilden eine Reihe von sechs Seen mit azurblauem Wasser von unwirklicher Transparenz, die durch natürliche weiße Travertindämme getrennt sind. Sie liegen auf 2.900 Metern über dem Meeresspiegel im Hindukusch-Gebirge und sind eine der spektakulärsten Naturlandschaften Zentralasiens. Sie wurden 2009 zum ersten Nationalpark Afghanistans erklärt."
      },
      wikipedia: "Band-e_Amir_National_Park",
      tags: ["Nature", "Randonnée"],
      mustSee: [
        { name: { fr: "Lac Band-e Haibat — le plus grand et le plus sacré", en: "Band-e Haibat Lake — the largest and most sacred", es: "Lago Band-e Haibat — el más grande y sagrado" , de: "Band-e Haibat-See – der größte und heiligste"}, wikipedia: "Band-e_Amir_National_Park" },
        { name: { fr: "Lac Band-e Zulfiqar — eaux turquoise entre falaises de travertin", en: "Band-e Zulfiqar Lake — turquoise water between travertine cliffs", es: "Lago Band-e Zulfiqar — aguas turquesa entre acantilados de travertino" , de: "Band-e-Zulfiqar-See – türkisfarbenes Wasser zwischen Travertinklippen"}, wikipedia: "File:Band-e-Amir National Park-9.jpg" },
        { name: { fr: "Barrage naturel de Band-e Pudina — cascades blanches", en: "Band-e Pudina natural dam — white cascades", es: "Presa natural de Band-e Pudina — cascadas blancas" , de: "Naturdamm Band-e Pudina – weiße Wasserfälle"}, wikipedia: "File:Band-e-Amir National Park-5.jpg" },
        { name: { fr: "Vue panoramique depuis la crête ouest — au coucher du soleil", en: "Panoramic view from the western ridge — at sunset", es: "Vista panorámica desde la cresta oeste — al atardecer" , de: "Panoramablick vom Westgrat – bei Sonnenuntergang"}, wikipedia: "File:DSC8188-Pano Band-E Amir National Park.jpg" },
      ],
    },
    {
      id: 3,
      name: "Hérat",
      region: { fr: "Province de Hérat (Ouest)", en: "Herat Province (West)", es: "Provincia de Herat (Oeste)" , de: "Provinz Herat (West)"},
      description: {
        fr: "Ancienne capitale culturelle de l'empire timouride au XVe siècle, Hérat était surnommée « la Florence de l'Orient » pour son rayonnement artistique et intellectuel. La Grande Mosquée de la Vieille Ville, ses minarets sculptés et sa citadelle reconstruite évoquent une splendeur aujourd'hui éclipsée par les conflits. La ville reste la troisième plus grande d'Afghanistan et un centre économique proche de la frontière iranienne.", en: "A former cultural capital of the Timurid Empire in the 15th century, Herat was nicknamed the 'Florence of the East' for its artistic and intellectual brilliance. The Great Mosque of the Old City, its carved minarets and its rebuilt citadel recall a splendour now overshadowed by conflict. The city remains Afghanistan's third largest and an important economic hub near the Iranian border.", es: "Antigua capital cultural del imperio timúrida en el siglo XV, Herat era apodada «la Florencia de Oriente» por su brillo artístico e intelectual. La Gran Mezquita del Casco Antiguo, sus minaretes esculpidos y su ciudadela reconstruida evocan un esplendor hoy eclipsado por los conflictos. La ciudad sigue siendo la tercera más grande de Afganistán y un centro económico cercano a la frontera iraní.", de: "Herat war im 15. Jahrhundert die ehemalige Kulturhauptstadt des Timuridenreiches und wurde wegen seines künstlerischen und intellektuellen Einflusses „das Florenz des Ostens“ genannt. Die Große Moschee der Altstadt, ihre skulptierten Minarette und ihre rekonstruierte Zitadelle erinnern an eine Pracht, die heute von Konflikten in den Schatten gestellt wird. Die Stadt ist nach wie vor die drittgrößte in Afghanistan und ein Wirtschaftszentrum nahe der iranischen Grenze."
      },
      wikipedia: "Herat",
      tags: ["Histoire", "Architecture", "Spiritualité"],
      mustSee: [
        { name: { fr: "Grande Mosquée de Hérat — joyau de l'architecture islamique", en: "Great Mosque of Herat — a jewel of Islamic architecture", es: "Gran Mezquita de Herat — joya de la arquitectura islámica" , de: "Große Moschee von Herat – Juwel islamischer Architektur"}, wikipedia: "File:Herat Masjidi Jami courtyard.jpg" },
        { name: { fr: "Minarets de Musalla — vestiges d'un complexe timouride du XVe s.", en: "Musalla minarets — remains of a 15th-century Timurid complex", es: "Minaretes de Musalla — restos de un complejo timúrida del siglo XV" , de: "Minarette von Musalla – Überreste eines timuridischen Komplexes aus dem 15. Jahrhundert."}, wikipedia: "File:Musalla Complex in 2009.jpg" },
        { name: { fr: "Citadelle d'Alexandre (Qala Ikhtiyaruddin) — forteresse reconstruite", en: "Citadel of Alexander (Qala Ikhtiyaruddin) — rebuilt fortress", es: "Ciudadela de Alejandro (Qala Ikhtiyaruddin) — fortaleza reconstruida" , de: "Alexander-Zitadelle (Qala Ikhtiyaruddin) – rekonstruierte Festung"}, wikipedia: "File:Herat Citadel.jpg" },
        { name: { fr: "Bazar de Hérat — atmosphère de caravansérail millénaire", en: "Herat bazaar — the atmosphere of an age-old caravanserai", es: "Bazar de Herat — atmósfera de caravasar milenario" , de: "Herat Basar – Atmosphäre einer tausend Jahre alten Karawanserei"}, wikipedia: "Herat" },
      ],
    },
    {
      id: 4,
      name: "Kaboul",
      region: { fr: "Capitale", en: "Capital", es: "Capital" , de: "Hauptstadt"},
      description: {
        fr: "Kaboul, nichée dans une cuvette à 1 800 mètres d'altitude entre des montagnes arides, fut longtemps une ville cosmopolite à la croisée des cultures persane, turque et indo-bouddhiste. Son musée national, pillé mais partiellement restauré, conserve des trésors inestimables de l'art bactrien et gréco-bouddhiste. La vieille ville, le bazar Mandawi et les jardins de Babur — dernier refuge du tombeau du fondateur de l'empire moghol — témoignent d'une histoire millénaire.", en: "Nestled in a basin at 1,800 metres above sea level between arid mountains, Kabul was long a cosmopolitan city at the crossroads of Persian, Turkic and Indo-Buddhist cultures. Its national museum, looted but partly restored, preserves invaluable treasures of Bactrian and Greco-Buddhist art. The old city, Mandawi bazaar and the Gardens of Babur—the final resting place of the Mughal Empire's founder—bear witness to a history stretching back millennia.", es: "Kabul, enclavada en una cuenca a 1.800 metros de altitud entre montañas áridas, fue durante mucho tiempo una ciudad cosmopolita en el cruce de las culturas persa, turca e indobudista. Su museo nacional, saqueado pero parcialmente restaurado, conserva tesoros invaluables del arte bactriano y grecobudista. El casco antiguo, el bazar de Mandawi y los jardines de Babur —último refugio de la tumba del fundador del imperio mogol— dan testimonio de una historia milenaria.", de: "Kabul, eingebettet in einem Becken auf 1.800 Metern Höhe zwischen trockenen Bergen, war lange Zeit eine kosmopolitische Stadt am Schnittpunkt persischer, türkischer und indobuddhistischer Kulturen. Das geplünderte, aber teilweise restaurierte Nationalmuseum bewahrt unschätzbare Schätze baktrischer und griechisch-buddhistischer Kunst. Die Altstadt, der Mandawi-Basar und die Babur-Gärten – der letzte Zufluchtsort des Grabmals des Gründers des Mogulreichs – zeugen von einer tausendjährigen Geschichte."
      },
      wikipedia: "Kabul",
      tags: ["Ville", "Musées", "Histoire", "Art"],
      mustSee: [
        { name: { fr: "Musée national d'Afghanistan — art bactrien et gréco-bouddhiste", en: "National Museum of Afghanistan — Bactrian and Greco-Buddhist art", es: "Museo Nacional de Afganistán — arte bactriano y grecobudista" , de: "Nationalmuseum Afghanistans – baktrische und griechisch-buddhistische Kunst"}, wikipedia: "National_Museum_of_Afghanistan" },
        { name: { fr: "Jardins de Babur — mausolée du fondateur de l'empire moghol", en: "Gardens of Babur — mausoleum of the founder of the Mughal Empire", es: "Jardines de Babur — mausoleo del fundador del imperio mogol" , de: "Babur Gardens – Mausoleum des Gründers des Mogulreichs"}, wikipedia: "File:Babur Gardens.jpg" },
        { name: { fr: "Bazar Mandawi — cœur commercial historique de Kaboul", en: "Mandawi Bazaar — Kabul's historic commercial heart", es: "Bazar Mandawi — corazón comercial histórico de Kabul" , de: "Mandawi-Basar – historisches Handelszentrum von Kabul"}, wikipedia: "File:Stolica Afganistanu Kabul w 2009 roku 02.jpg" },
        { name: { fr: "Darul Aman — palais en ruine, symbole de la tragédie afghane", en: "Darul Aman — ruined palace, symbol of Afghanistan's tragedy", es: "Darul Aman — palacio en ruinas, símbolo de la tragedia afgana" , de: "Darul Aman – zerstörter Palast, Symbol der afghanischen Tragödie"}, wikipedia: "Darul_Aman_Palace" },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "AVERTISSEMENT : L'Afghanistan est classé en zone rouge absolue (formellement déconseillé) par le Ministère des Affaires étrangères français et la quasi-totalité des gouvernements occidentaux. Le tourisme y est actuellement impossible. Les données ci-dessous sont fournies à titre historique et informatif uniquement, basées sur la situation pré-2021.", en: "WARNING: Afghanistan is classified as an absolute red zone (formally advised against) by the French Ministry for Europe and Foreign Affairs and by nearly all Western governments. Tourism there is currently impossible. The data below is provided for historical and informational purposes only, based on the pre-2021 situation.", es: "ADVERTENCIA: Afganistán está clasificado en zona roja absoluta (viaje formalmente desaconsejado) por el Ministerio de Asuntos Exteriores francés y por la práctica totalidad de los gobiernos occidentales. El turismo allí es actualmente imposible. Los datos a continuación se ofrecen únicamente con fines históricos e informativos, basados en la situación anterior a 2021.", de: "ACHTUNG: Afghanistan wird vom französischen Außenministerium und fast allen westlichen Regierungen als absolute rote Zone eingestuft (formal nicht empfohlen). Tourismus ist dort derzeit nicht möglich. Die nachstehenden Daten werden nur zu historischen und informativen Zwecken bereitgestellt und basieren auf der Situation vor 2021."
    },
    currency: "AFN",
    exchangeRate: "1€ ≈ 90–100 AFN (historique)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit (historique)", en: "Accommodation / night (historical)", es: "Alojamiento / noche (histórico)" , de: "Unterkunft / Nacht (historisch)"},
        items: [
          { label: { fr: "Auberge de jeunesse / dortoir", en: "Youth hostel / dorm", es: "Albergue juvenil / dormitorio" , de: "Jugendherberge/Wohnheim"}, min: 8, max: 15 },
          { label: { fr: "Guesthouse locale", en: "Local guesthouse", es: "Casa de huéspedes local" , de: "Lokales Gästehaus"}, min: 20, max: 40 },
          { label: { fr: "Hôtel international", en: "International hotel", es: "Hotel internacional" , de: "Internationales Hotel"}, min: 60, max: 120 },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" , de: "Essen"},
        items: [
          { label: { fr: "Repas local (pulao, kebab)", en: "Local meal (pulao, kebab)", es: "Comida local (pulao, kebab)" , de: "Lokale Mahlzeit (Pulao, Kebab)"}, min: 2, max: 5 },
          { label: { fr: "Restaurant de qualité moyenne", en: "Mid-range restaurant", es: "Restaurante de gama media" , de: "Restaurant von durchschnittlicher Qualität"}, min: 5, max: 12 },
          { label: { fr: "Restaurant pour expatriés", en: "Expat restaurant", es: "Restaurante para expatriados" , de: "Restaurant für Expats"}, min: 15, max: 30 },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" , de: "Transport"},
        items: [
          { label: { fr: "Bus intercity (ex: Kaboul–Bamiyan)", en: "Intercity bus (e.g. Kabul–Bamiyan)", es: "Autobús interurbano (ej.: Kabul–Bamiyán)" , de: "Überlandbus (z. B. Kabul–Bamiyan)"}, min: 5, max: 10 },
          { label: { fr: "4x4 avec chauffeur/guide (journée)", en: "4x4 with driver/guide (per day)", es: "4x4 con chófer/guía (por día)" , de: "4x4 mit Fahrer/Guide (Tag)"}, min: 50, max: 100 },
          { label: { fr: "Vol intérieur (Kaboul–Hérat)", en: "Domestic flight (Kabul–Herat)", es: "Vuelo interno (Kabul–Herat)" , de: "Inlandsflug (Kabul–Herat)"}, min: 60, max: 120 },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" , de: "Aktivitäten"},
        items: [
          { label: { fr: "Guide local (journée)", en: "Local guide (per day)", es: "Guía local (por día)" , de: "Lokaler Führer (Tag)"}, min: 30, max: 60 },
          { label: { fr: "Entrée musée national", en: "National museum entry", es: "Entrada al museo nacional" , de: "Eingang zum Nationalmuseum"}, min: 2, max: 5 },
          { label: { fr: "Trek accompagné (Hindu Kush)", en: "Guided trek (Hindu Kush)", es: "Trekking guiado (Hindu Kush)" , de: "Begleitete Wanderung (Hindukusch)"}, min: 40, max: 80 },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker", es: "Mochilero" , de: "Backpacker"},
        daily: "30–50 €/j",
        desc: { fr: "Budget historique (pré-2021). Actuellement inapplicable — pays fermé au tourisme.", en: "Historical budget (pre-2021). Currently not applicable—the country is closed to tourism.", es: "Presupuesto histórico (anterior a 2021). Actualmente no aplicable: el país está cerrado al turismo." , de: "Historischer Haushalt (vor 2021). Derzeit nicht anwendbar – Land für den Tourismus gesperrt."},
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort", es: "Confort" , de: "Komfort"},
        daily: "80–150 €/j",
        desc: { fr: "Budget journaliste/ONG avec sécurité renforcée. Actuellement inapplicable.", en: "Journalist/NGO budget with reinforced security. Currently not applicable.", es: "Presupuesto de periodista/ONG con seguridad reforzada. Actualmente no aplicable." , de: "Journalisten-/NGO-Budget mit erhöhter Sicherheit. Derzeit nicht anwendbar."},
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días" , de: "10 Tage"},
      route: { fr: "Kaboul → Bamiyan → Band-e Amir → Hérat", en: "Kabul → Bamiyan → Band-e Amir → Herat", es: "Kabul → Bamiyán → Band-e Amir → Herat" , de: "Kabul → Bamiyan → Band-e Amir → Herat"},
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" , de: "Backpacker"},
          color: "#22c55e",
          total: "1 000 – 1 400 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Kaboul", en: "Return flight Paris–Kabul", es: "Vuelo ida y vuelta París–Kabul" , de: "Hin- und Rückflug Paris–Kabul"}, amount: "600–800 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)", es: "Alojamiento (9 noches)" , de: "Unterkunft (9 Nächte)"}, amount: "100–180 €" },
            { label: { fr: "Transports locaux", en: "Local transport", es: "Transporte local" , de: "Nahverkehr"}, amount: "80–120 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas" , de: "Essen + Getränke"}, amount: "80–130 €" },
            { label: { fr: "Activités + guide", en: "Activities + guide", es: "Actividades + guía" , de: "Aktivitäten + Führer"}, amount: "80–120 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" , de: "Komfort"},
          color: "#3b82f6",
          total: "1 800 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Kaboul", en: "Return flight Paris–Kabul", es: "Vuelo ida y vuelta París–Kabul" , de: "Hin- und Rückflug Paris–Kabul"}, amount: "700–900 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)", es: "Alojamiento (9 noches)" , de: "Unterkunft (9 Nächte)"}, amount: "400–600 €" },
            { label: { fr: "Transports (4x4 privé)", en: "Transport (private 4x4)", es: "Transporte (4x4 privado)" , de: "Transport (privater 4x4)"}, amount: "200–350 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas" , de: "Essen + Getränke"}, amount: "150–250 €" },
            { label: { fr: "Activités + guide", en: "Activities + guide", es: "Actividades + guía" , de: "Aktivitäten + Führer"}, amount: "150–250 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    {
      icon: "✈️",
      label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde París" , de: "Flug ab Paris"},
      value: {
        fr: "8–12h via Dubaï, Istanbul ou Delhi (pas de vols directs). Aéroport de Kaboul partiellement opérationnel sous contrôle taliban.", en: "8–12h via Dubai, Istanbul or Delhi (no direct flights). Kabul airport is only partially operational under Taliban control.", es: "8–12h vía Dubái, Estambul o Delhi (sin vuelos directos). El aeropuerto de Kabul está solo parcialmente operativo bajo control talibán.", de: "8–12 Stunden über Dubai, Istanbul oder Delhi (keine Direktflüge). Der Flughafen von Kabul ist unter der Kontrolle der Taliban teilweise in Betrieb."
      },
    },
    {
      icon: "🪪",
      label: { fr: "Visa", en: "Visa", es: "Visado" , de: "Visum"},
      value: {
        fr: "IMPOSSIBLE — ambassade afghane non fonctionnelle en France. L'Afghanistan est classé zone rouge absolue : tout voyage est formellement déconseillé par le Quai d'Orsay.", en: "IMPOSSIBLE — the Afghan embassy in France is not operational. Afghanistan is classified as an absolute red zone: all travel is formally advised against by the French foreign ministry.", es: "IMPOSIBLE — la embajada afgana no está operativa en Francia. Afganistán está clasificado en zona roja absoluta: todo viaje está formalmente desaconsejado por el ministerio de Asuntos Exteriores francés.", de: "UNMÖGLICH – nicht funktionierende afghanische Botschaft in Frankreich. Afghanistan ist als absolute rote Zone eingestuft: Von allen Reisen wird am Quai d'Orsay strikt abgeraten."
      },
    },
    {
      icon: "💰",
      label: { fr: "Monnaie", en: "Currency", es: "Moneda" , de: "Währung"},
      value: {
        fr: "Afghani (AFN). Espèces uniquement. Économie largement informelle sous contrôle taliban.", en: "Afghani (AFN). Cash only. The economy is largely informal under Taliban control.", es: "Afgani (AFN). Solo efectivo. Economía en gran parte informal bajo control talibán.", de: "Afghani (AFN). Nur Barzahlung. Weitgehend informelle Wirtschaft unter der Kontrolle der Taliban."
      },
    },
    {
      icon: "🗣️",
      label: { fr: "Langue", en: "Language", es: "Idioma" , de: "Sprache"},
      value: {
        fr: "Dari (persan afghan) et Pachto — les deux langues officielles. L'anglais est compris par une minorité éduquée dans les grandes villes.", en: "Dari (Afghan Persian) and Pashto—the country's two official languages. English is understood by a small educated minority in the main cities.", es: "Dari (persa afgano) y pastún, los dos idiomas oficiales. El inglés lo entiende una minoría educada en las grandes ciudades.", de: "Dari (afghanisches Persisch) und Paschtu – die beiden offiziellen Sprachen. Englisch wird in Großstädten von einer gebildeten Minderheit verstanden."
      },
    },
    {
      icon: "🔌",
      label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico" , de: "Steckdose"},
      value: {
        fr: "Type C/F, 220V — alimentation électrique très instable dans l'ensemble du pays.", en: "Type C/F, 220V — the power supply is highly unreliable across the country.", es: "Tipo C/F, 220V — suministro eléctrico muy inestable en todo el país.", de: "Typ C/F, 220 V – sehr instabile Stromversorgung im ganzen Land."
      },
    },
    {
      icon: "💊",
      label: { fr: "Santé", en: "Health", es: "Salud" , de: "Gesundheit"},
      value: {
        fr: "Infrastructure médicale quasi inexistante en dehors de Kaboul. Vaccins recommandés : hépatites A et B, typhoïde, rage. Paludisme dans les zones basses.", en: "Medical infrastructure is almost non-existent outside Kabul. Recommended vaccines: hepatitis A and B, typhoid, rabies. Malaria is present in lowland areas.", es: "Infraestructura médica casi inexistente fuera de Kabul. Vacunas recomendadas: hepatitis A y B, tifoidea, rabia. Malaria presente en zonas bajas.", de: "Außerhalb Kabuls gibt es kaum medizinische Infrastruktur. Empfohlene Impfungen: Hepatitis A und B, Typhus, Tollwut. Malaria in tiefer gelegenen Gebieten."
      },
    },
    {
      icon: "⚠️",
      label: { fr: "Sécurité", en: "Safety", es: "Seguridad" , de: "Sicherheit"},
      value: {
        fr: "ZONE ROUGE ABSOLUE. Risques extrêmes d'enlèvements, d'attentats et de conflits armés. Aucun Français ne devrait se rendre en Afghanistan en 2025–2026. Tous les ressortissants occidentaux sont des cibles potentielles.", en: "ABSOLUTE RED ZONE. Extreme risks of kidnapping, attacks and armed conflict. No French national should travel to Afghanistan in 2025–2026. All Western nationals are potential targets.", es: "ZONA ROJA ABSOLUTA. Riesgos extremos de secuestro, atentados y conflictos armados. Ningún ciudadano occidental debería viajar a Afganistán en 2025–2026. Todos los ciudadanos occidentales son objetivos potenciales.", de: "ABSOLUTE ROTE ZONE. Extreme Risiken von Entführungen, Angriffen und bewaffneten Konflikten. Im Zeitraum 2025–2026 sollten keine Franzosen nach Afghanistan reisen. Alle westlichen Staatsangehörigen sind potenzielle Ziele."
      },
    },
    {
      icon: "🚫",
      label: { fr: "Restrictions talibanes", en: "Taliban restrictions", es: "Restricciones talibanas" , de: "Taliban-Beschränkungen"},
      value: {
        fr: "Les femmes étrangères doivent porter le hijab intégral. Photographie très restreinte. Alcool interdit. Musique interdite dans l'espace public. Toute activité perçue comme contraire à l'islam rigoriste est proscrite.", en: "Foreign women are required to wear full hijab. Photography is heavily restricted. Alcohol is banned. Music is forbidden in public spaces. Any activity perceived as contrary to hardline Islam is prohibited.", es: "Las mujeres extranjeras deben llevar hiyab integral. La fotografía está muy restringida. El alcohol está prohibido. La música está prohibida en el espacio público. Toda actividad percibida como contraria al islam rigorista está proscrita.", de: "Ausländische Frauen müssen den vollständigen Hijab tragen. Sehr eingeschränkte Fotografie. Alkohol verboten. Musik im öffentlichen Raum verboten. Jede Aktivität, die im Widerspruch zum strengen Islam steht, ist verboten."
      },
    },
  ],
};
