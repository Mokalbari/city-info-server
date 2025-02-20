const cities = [
  {
    name: "Paris",
    region: "Île-de-France",
    id: 1,
    biome: "plaine",
    climat: "tempere oceanique",
    fait_insolite:
      "Paris possède un village caché au cœur de la ville, le village Saint-Paul, avec des ruelles pavées et des boutiques d'artisans.",
    gastronomie:
      "Paris est célèbre pour ses croissants, ses baguettes, ses escargots, et son foie gras.",
    choses_insolites_a_faire: [
      "Visiter les égouts de Paris pour découvrir l'histoire de son système d'assainissement.",
      "Explorer les passages couverts comme le Passage des Panoramas pour une expérience de shopping unique.",
      "Découvrir les catacombes de Paris, un réseau souterrain rempli d'ossements humains.",
    ],
    img: [
      "https://main--city-info-server.netlify.app/asset/Paris1.jpeg",
      "https://main--city-info-server.netlify.app/asset/Paris2.jpg",
      "https://main--city-info-server.netlify.app/asset/Paris3.jpg",
      "https://main--city-info-server.netlify.app/asset/Paris4.jpeg",
      "https://main--city-info-server.netlify.app/asset/Paris5.jpeg",
    ],
    video: "https://main--city-info-server.netlify.app/asset/Paris.mp4",
    location: "2.3522, 48.8566",
    description:
      "Paris est célèbre pour son architecture emblématique et ses musées renommés tels que le Louvre.",
  },
  {
    name: "Marseille",
    region: "Provence-Alpes-Côte d'Azur",
    id: 2,
    biome: "mer",
    climat: "mediterraneen",
    fait_insolite:
      "Le savon de Marseille est fabriqué dans la ville depuis plus de 600 ans.",
    gastronomie:
      "La bouillabaisse, une soupe de poisson traditionnelle, est emblématique de Marseille.",
    choses_insolites_a_faire: [
      "Visiter le quartier du Panier, le plus vieux quartier de la ville.",
      "Faire une randonnée dans les calanques de Marseille.",
      "Explorer les îles du Frioul et le Château d'If.",
    ],
    img: [
      "https://main--city-info-server.netlify.app/asset/marseille1.jpg",
      "https://main--city-info-server.netlify.app/asset/marseille2.jpeg",
      "https://main--city-info-server.netlify.app/asset/marseille3.jpeg",
      "https://main--city-info-server.netlify.app/asset/marseille4.jpg",
      "https://main--city-info-server.netlify.app/asset/marseille5.jpeg",
    ],
    video: "https://main--city-info-server.netlify.app/asset/marseille.mp4",
    location: "5.3698, 43.2965",
    description:
      "Marseille est connue pour ses calanques spectaculaires et son ambiance portuaire animée.",
  },
  {
    name: "Lyon",
    region: "Auvergne-Rhône-Alpes",
    id: 3,
    biome: "plaine",
    climat: "semi-continental",
    fait_insolite:
      "Lyon est souvent appelée la 'capitale mondiale de la gastronomie'.",
    gastronomie:
      "Les bouchons lyonnais offrent des spécialités locales comme le saucisson brioché et la quenelle.",
    choses_insolites_a_faire: [
      "Découvrir les traboules, des passages secrets entre les immeubles.",
      "Visiter le musée des Confluences pour une expérience unique de sciences naturelles et d'anthropologie.",
      "Monter à la basilique de Fourvière pour une vue panoramique de la ville.",
    ],
    img: [
      "https://main--city-info-server.netlify.app/asset/Lyon1.jpeg",
      "https://main--city-info-server.netlify.app/asset/Lyon2.jpeg",
      "https://main--city-info-server.netlify.app/asset/Lyon3.jpeg",
      "https://main--city-info-server.netlify.app/asset/Lyon4.jpeg",
      "https://main--city-info-server.netlify.app/asset/Lyon5.jpeg",
    ],
    video: "https://main--city-info-server.netlify.app/asset/lyon.mp4",
    location: "4.8357, 45.7640",
    description:
      "Lyon combine patrimoine historique, culture vibrante et délicieuses spécialités gastronomiques.",
  },
  {
    name: "Toulouse",
    region: "Occitanie",
    id: 4,
    biome: "plaine",
    climat: "tempere oceanique",
    fait_insolite:
      "Toulouse est surnommée 'La Ville Rose' en raison de la couleur de ses bâtiments en brique.",
    gastronomie: "Le cassoulet est le plat traditionnel de Toulouse.",
    choses_insolites_a_faire: [
      "Visiter la Cité de l'espace, un parc à thème dédié à l'exploration spatiale.",
      "Faire une croisière sur le Canal du Midi.",
      "Découvrir l'architecture gothique de la basilique Saint-Sernin.",
    ],
    img: [
      "https://main--city-info-server.netlify.app/asset/toulouse1.jpeg",
      "https://main--city-info-server.netlify.app/asset/toulouse2.jpeg",
      "https://main--city-info-server.netlify.app/asset/toulouse3.jpeg",
      "https://main--city-info-server.netlify.app/asset/toulouse4.jpeg",
      "https://main--city-info-server.netlify.app/asset/toulouse5.jpeg",
    ],
    video: "https://main--city-info-server.netlify.app/asset/toulouse.mp4",
    location: "1.4442, 43.6047",
    description:
      "Toulouse, la 'Ville Rose', est célèbre pour ses briques roses et son riche patrimoine aérospatial.",
  },
  {
    name: "Nice",
    region: "Provence-Alpes-Côte d'Azur",
    id: 5,
    biome: "mer",
    climat: "mediterraneen",
    fait_insolite: "Nice a son propre dialecte appelé le niçois.",
    gastronomie: "La salade niçoise et la socca sont des spécialités locales.",
    choses_insolites_a_faire: [
      "Se promener sur la Promenade des Anglais.",
      "Visiter le marché aux fleurs du Cours Saleya.",
      "Explorer le parc du Château pour une vue imprenable sur la baie.",
    ],
    img: [
      "https://main--city-info-server.netlify.app/asset/nice1.jpeg",
      "https://main--city-info-server.netlify.app/asset/nice2.jpeg",
      "https://main--city-info-server.netlify.app/asset/nice3.jpeg",
      "https://main--city-info-server.netlify.app/asset/nice4.jpeg",
      "https://main--city-info-server.netlify.app/asset/nice5.jpeg",
    ],
    video: "https://main--city-info-server.netlify.app/asset/nice.mp4",
    location: "7.2620, 43.7102",
    description:
      "Nice est renommée pour ses plages méditerranéennes et sa promenade célèbre le long de la mer.",
  },
  {
    name: "Nantes",
    region: "Pays de la Loire",
    id: 6,
    biome: "plaine",
    climat: "tempere oceanique",
    fait_insolite: "Nantes est le berceau de l'auteur Jules Verne.",
    gastronomie:
      "Le beurre blanc, une sauce à base de beurre, de vin blanc et d'échalotes, est une spécialité de la région.",
    choses_insolites_a_faire: [
      "Découvrir les Machines de l'île, une exposition de sculptures mécaniques.",
      "Visiter le château des ducs de Bretagne.",
      "Se promener dans le jardin des plantes de Nantes.",
    ],
    img: [
      "https://main--city-info-server.netlify.app/asset/nantes1.jpeg",
      "https://main--city-info-server.netlify.app/asset/nantes2.jpeg",
      "https://main--city-info-server.netlify.app/asset/nantes3.jpeg",
      "https://main--city-info-server.netlify.app/asset/nantes4.jpeg",
      "https://main--city-info-server.netlify.app/asset/nantes5.jpeg",
    ],
    video: "https://main--city-info-server.netlify.app/asset/nantes.mp4",
    location: "-1.5536, 47.2184",
    description:
      "Nantes, ville natale de Jules Verne, allie histoire, culture et innovations artistiques.",
  },
  {
    name: "Strasbourg",
    region: "Grand Est",
    id: 7,
    biome: "plaine",
    climat: "semi-continental",
    fait_insolite: "Strasbourg est le siège officiel du Parlement européen.",
    gastronomie: "La choucroute garnie est un plat traditionnel de Strasbourg.",
    choses_insolites_a_faire: [
      "Visiter la cathédrale Notre-Dame de Strasbourg.",
      "Se promener dans le quartier de la Petite France.",
      "Découvrir le musée Alsacien pour en savoir plus sur la culture locale.",
    ],
    img: [
      "https://main--city-info-server.netlify.app/asset/strasbourg1.jpeg",
      "https://main--city-info-server.netlify.app/asset/strasbourg2.jpeg",
      "https://main--city-info-server.netlify.app/asset/strasbourg3.jpeg",
      "https://main--city-info-server.netlify.app/asset/strasbourg4.jpeg",
      "https://main--city-info-server.netlify.app/asset/strasbourg5.jpeg",
    ],
    video: "https://main--city-info-server.netlify.app/asset/strasbourg.mp4",
    location: "7.7521, 48.5734",
    description:
      "Strasbourg, avec sa cathédrale majestueuse, est un carrefour culturel entre la France et l'Allemagne.",
  },
  {
    name: "Montpellier",
    region: "Occitanie",
    id: 8,
    biome: "plaine",
    climat: "mediterraneen",
    fait_insolite:
      "Montpellier possède la plus ancienne faculté de médecine en activité au monde.",
    gastronomie:
      "Les tielles sétoises, des tourtes aux fruits de mer, sont populaires dans la région.",
    choses_insolites_a_faire: [
      "Explorer le centre historique de Montpellier, notamment la Place de la Comédie.",
      "Visiter le musée Fabre, un des principaux musées d'art de France.",
      "Découvrir le jardin des plantes de Montpellier, l'un des plus anciens jardins botaniques d'Europe.",
    ],
    img: [
      "https://main--city-info-server.netlify.app/asset/montpellier1.jpeg",
      "https://main--city-info-server.netlify.app/asset/montpellier2.jpeg",
      "https://main--city-info-server.netlify.app/asset/montpellier3.jpeg",
      "https://main--city-info-server.netlify.app/asset/montpellier4.jpeg",
      "https://main--city-info-server.netlify.app/asset/montpellier5.jpeg",
    ],
    video: "https://main--city-info-server.netlify.app/asset/montpellier.mp4",
    location: "3.8767, 43.6108",
    description:
      "Montpellier, ville étudiante dynamique, offre un mélange d'histoire médiévale et de modernité.",
  },
  {
    name: "Bordeaux",
    region: "Nouvelle-Aquitaine",
    id: 9,
    biome: "plaine",
    climat: "tempere oceanique",
    fait_insolite:
      "Bordeaux est surnommée 'La Belle Endormie' en raison de son architecture historique et de son atmosphère calme.",
    gastronomie:
      "Les canelés, de petits gâteaux à la vanille et au rhum, sont une spécialité de Bordeaux.",
    choses_insolites_a_faire: [
      "Visiter la Cité du Vin, un musée consacré à la culture du vin.",
      "Faire une croisière sur la Garonne.",
      "Découvrir la Place de la Bourse et son miroir d'eau.",
    ],
    img: [
      "https://main--city-info-server.netlify.app/asset/bordeaux1.jpeg",
      "https://main--city-info-server.netlify.app/asset/bordeaux2.webp",
      "https://main--city-info-server.netlify.app/asset/bordeaux3.jpeg",
      "https://main--city-info-server.netlify.app/asset/bordeaux4.webp",
      "https://main--city-info-server.netlify.app/asset/bordeaux5.jpeg",
    ],
    video: "https://main--city-info-server.netlify.app/asset/bordeaux.mp4",
    location: "-0.5792, 44.8378",
    description:
      "Bordeaux, capitale mondiale du vin, enchante par son architecture et ses vignobles prestigieux.",
  },
  {
    name: "Lille",
    region: "Hauts-de-France",
    id: 10,
    biome: "plaine",
    climat: "tempere oceanique",
    fait_insolite:
      "Lille est connue pour sa braderie annuelle, la plus grande foire aux puces d'Europe.",
    gastronomie: "Les moules-frites sont un plat emblématique de Lille.",
    choses_insolites_a_faire: [
      "Visiter le palais des Beaux-Arts de Lille.",
      "Explorer le vieux Lille avec ses rues pavées et ses bâtiments historiques.",
      "Découvrir la citadelle de Lille, un chef-d'œuvre de l'architecture militaire.",
    ],
    img: [
      "https://main--city-info-server.netlify.app/asset/lille1.jpeg",
      "https://main--city-info-server.netlify.app/asset/lille2.jpeg",
      "https://main--city-info-server.netlify.app/asset/lille3.jpeg",
      "https://main--city-info-server.netlify.app/asset/lille4.jpeg",
      "https://main--city-info-server.netlify.app/asset/lille5.jpeg",
    ],
    video: "https://main--city-info-server.netlify.app/asset/lille.mp4",
    location: "3.0573, 50.6292",
    description:
      "Lille est dynamique et culturelle, réputée pour ses musées et son architecture flamande.",
  },
  {
    name: "Rennes",
    region: "Bretagne",
    id: 11,
    biome: "plaine",
    climat: "tempere oceanique",
    fait_insolite:
      "Rennes possède un réseau de plus de 100 kilomètres de chemins piétonniers et cyclables.",
    gastronomie:
      "Les galettes-saucisses sont une spécialité culinaire typique de Rennes.",
    choses_insolites_a_faire: [
      "Visiter le Parlement de Bretagne.",
      "Explorer le parc du Thabor, un des plus beaux jardins de France.",
      "Découvrir le marché des Lices, l'un des plus grands marchés de France.",
    ],
    img: [
      "https://main--city-info-server.netlify.app/asset/rennes1.jpeg",
      "https://main--city-info-server.netlify.app/asset/rennes2.jpeg",
      "https://main--city-info-server.netlify.app/asset/rennes3.jpeg",
      "https://main--city-info-server.netlify.app/asset/rennes4.jpeg",
      "https://main--city-info-server.netlify.app/asset/rennes5.jpeg",
    ],
    video: "https://main--city-info-server.netlify.app/asset/rennes.mp4",
    location: "-1.6778, 48.1173",
    description:
      "Rennes, ville bretonne, est célèbre pour son marché animé et ses magnifiques jardins.",
  },
  {
    name: "Toulon",
    region: "Provence-Alpes-Côte d'Azur",
    id: 12,
    biome: "mer",
    climat: "mediterraneen",
    fait_insolite: "Toulon abrite le plus grand port militaire de France.",
    gastronomie:
      "La cade toulonnaise, une sorte de galette à base de pois chiches, est une spécialité locale.",
    choses_insolites_a_faire: [
      "Visiter le Musée National de la Marine.",
      "Prendre le téléphérique du Mont Faron pour une vue panoramique.",
      "Explorer le marché du Cours Lafayette.",
    ],
    img: [
      "https://main--city-info-server.netlify.app/asset/toulon1.jpeg",
      "https://main--city-info-server.netlify.app/asset/toulon2.jpeg",
      "https://main--city-info-server.netlify.app/asset/toulon3.jpeg",
      "https://main--city-info-server.netlify.app/asset/toulon4.jpeg",
      "https://main--city-info-server.netlify.app/asset/toulon5.jpeg",
    ],
    video: "https://main--city-info-server.netlify.app/asset/toulon.mp4",
    location: "5.9280, 43.1242",
    description:
      "Toulon, avec son port militaire historique, offre des vues panoramiques exceptionnelles.",
  },
  {
    name: "Reims",
    region: "Grand Est",
    id: 13,
    biome: "plaine",
    climat: "semi-continental",
    fait_insolite:
      "Reims est connue comme la 'Cité des Sacres' car 33 rois de France y ont été couronnés.",
    gastronomie: "Le champagne est le produit le plus célèbre de Reims.",
    choses_insolites_a_faire: [
      "Visiter la cathédrale Notre-Dame de Reims.",
      "Explorer les caves de champagne.",
      "Découvrir le Palais du Tau.",
    ],
    img: [
      "https://main--city-info-server.netlify.app/asset/reims1.jpeg",
      "https://main--city-info-server.netlify.app/asset/reims2.jpeg",
      "https://main--city-info-server.netlify.app/asset/reims3.jpeg",
      "https://main--city-info-server.netlify.app/asset/reims4.jpeg",
      "https://main--city-info-server.netlify.app/asset/reims5.jpeg",
    ],
    video: "https://main--city-info-server.netlify.app/asset/reims.mp4",
    location: "4.0317, 49.2583",
    description:
      "Reims, la 'Cité des Sacres', est célèbre pour ses caves de champagne et sa cathédrale.",
  },
  {
    name: "Le Havre",
    region: "Normandie",
    id: 14,
    biome: "mer",
    climat: "tempere oceanique",
    fait_insolite:
      "Le Havre est classée au patrimoine mondial de l'UNESCO pour son architecture moderne reconstruite après la Seconde Guerre mondiale.",
    gastronomie:
      "Les fruits de mer sont une spécialité du Havre, notamment les moules et les huîtres.",
    choses_insolites_a_faire: [
      "Visiter le musée d'art moderne André Malraux.",
      "Explorer les jardins suspendus.",
      "Faire une promenade sur la plage du Havre.",
    ],
    img: [
      "https://main--city-info-server.netlify.app/asset/lehavre1.jpeg",
      "https://main--city-info-server.netlify.app/asset/lehavre2.jpeg",
      "https://main--city-info-server.netlify.app/asset/lehavre3.jpeg",
      "https://main--city-info-server.netlify.app/asset/lehavre4.jpeg",
      "https://main--city-info-server.netlify.app/asset/lehavre5.jpeg",
    ],
    video: "https://main--city-info-server.netlify.app/asset/reims.mp4",
    location: "0.1079, 49.4944",
    description:
      "Le Havre, au bord de la mer, est reconnu pour son architecture moderne et ses fruits de mer.",
  },
  {
    name: "Saint-Étienne",
    region: "Auvergne-Rhône-Alpes",
    id: 15,
    biome: "plaine",
    climat: "semi-continental",
    fait_insolite:
      "Saint-Étienne est connue pour son passé industriel dans la fabrication d'armes, de rubans et de bicyclettes.",
    gastronomie:
      "La râpée stéphanoise, une galette de pommes de terre, est une spécialité locale.",
    choses_insolites_a_faire: [
      "Visiter le musée de la Mine.",
      "Explorer le site Le Corbusier à Firminy.",
      "Découvrir le musée d'art et d'industrie.",
    ],
    img: [
      "https://main--city-info-server.netlify.app/asset/saintetienne1.jpg",
      "https://main--city-info-server.netlify.app/asset/saintetienne2.jpg",
      "https://main--city-info-server.netlify.app/asset/saintetienne3.jpg",
      "https://main--city-info-server.netlify.app/asset/saintetienne4.jpg",
      "https://main--city-info-server.netlify.app/asset/saintetienne5.jpg",
    ],
    video: "https://main--city-info-server.netlify.app/asset/stetienne.mp4",
    location: "4.3872, 45.4397",
    description:
      "Saint-Étienne est marquée par son histoire industrielle et ses innovations en design.",
  },
  {
    name: "Clermont-Ferrand",
    region: "Auvergne-Rhône-Alpes",
    id: 16,
    biome: "montagne",
    climat: "montagnard",
    fait_insolite:
      "Clermont-Ferrand est située près de la chaîne des Puys, une série de volcans éteints.",
    gastronomie:
      "La truffade, un plat à base de pommes de terre et de fromage, est une spécialité auvergnate.",
    choses_insolites_a_faire: [
      "Visiter la cathédrale Notre-Dame-de-l'Assomption.",
      "Explorer le parc Vulcania.",
      "Découvrir la basilique Notre-Dame-du-Port.",
    ],
    img: [
      "https://main--city-info-server.netlify.app/asset/clermontferrand1.jpg",
      "https://main--city-info-server.netlify.app/asset/clermontferrand2.jpg",
      "https://main--city-info-server.netlify.app/asset/clermontferrand3.jpg",
      "https://main--city-info-server.netlify.app/asset/clermontferrand4.jpg",
      "https://main--city-info-server.netlify.app/asset/clermontferrand5.jpg",
    ],
    video: "https://main--city-info-server.netlify.app/asset/clermont.mp4",
    location: "3.0870, 45.7772",
    description:
      "Clermont-Ferrand, ville volcanique, offre un panorama unique sur les Puys et des spécialités auvergnates.",
  },
  {
    name: "Tours",
    region: "Centre-Val de Loire",
    id: 17,
    biome: "plaine",
    climat: "tempere oceanique",
    fait_insolite:
      "Tours est connue comme le 'jardin de la France' en raison de ses nombreux parcs et jardins.",
    gastronomie: "Les rillettes de Tours sont une spécialité charcutière.",
    choses_insolites_a_faire: [
      "Visiter la cathédrale Saint-Gatien.",
      "Explorer le château de Tours.",
      "Se promener dans le vieux Tours avec ses maisons à colombages.",
    ],
    img: [
      "https://main--city-info-server.netlify.app/asset/tours1.jpg",
      "https://main--city-info-server.netlify.app/asset/tours2.jpg",
      "https://main--city-info-server.netlify.app/asset/tours3.jpg",
      "https://main--city-info-server.netlify.app/asset/tours4.jpg",
      "https://main--city-info-server.netlify.app/asset/tours5.jpg",
    ],
    video: "https://main--city-info-server.netlify.app/asset/tours.mp4",
    location: "0.6848, 47.3941",
    description:
      "Tours, souvent appelée 'jardin de la France', est réputée pour ses parcs et son patrimoine historique.",
  },
  {
    name: "Aix-en-Provence",
    region: "Provence-Alpes-Côte d'Azur",
    id: 18,
    biome: "plaine",
    climat: "mediterraneen",
    fait_insolite: "Aix-en-Provence est connue pour ses nombreuses fontaines.",
    gastronomie:
      "Les calissons, des confiseries à base de melon et d'amandes, sont une spécialité d'Aix.",
    choses_insolites_a_faire: [
      "Visiter l'atelier de Cézanne.",
      "Explorer le musée Granet.",
      "Se promener sur le Cours Mirabeau.",
    ],
    img: [
      "https://main--city-info-server.netlify.app/asset/aixenprovence1.jpg",
      "https://main--city-info-server.netlify.app/asset/aixenprovence2.jpg",
      "https://main--city-info-server.netlify.app/asset/aixenprovence3.jpg",
      "https://main--city-info-server.netlify.app/asset/aixenprovence4.jpg",
      "https://main--city-info-server.netlify.app/asset/aixenprovence5.jpg",
    ],
    video: "https://main--city-info-server.netlify.app/asset/aix.mp4",
    location: "5.4474, 43.5297",
    description:
      "Aix-en-Provence est renommée pour ses fontaines, son ambiance artistique et ses marchés colorés.",
  },
  {
    name: "Brest",
    region: "Bretagne",
    id: 19,
    biome: "mer",
    climat: "tempere oceanique",
    fait_insolite:
      "Brest est un important port militaire avec une riche histoire maritime.",
    gastronomie:
      "Les crêpes et le cidre sont des spécialités bretonnes populaires à Brest.",
    choses_insolites_a_faire: [
      "Visiter le musée national de la Marine.",
      "Explorer Océanopolis, un parc de découverte des océans.",
      "Découvrir le château de Brest.",
    ],
    img: [
      "https://main--city-info-server.netlify.app/asset/brest1.jpeg",
      "https://main--city-info-server.netlify.app/asset/brest2.jpeg",
      "https://main--city-info-server.netlify.app/asset/brest3.jpeg",
      "https://main--city-info-server.netlify.app/asset/brest4.jpg",
      "https://main--city-info-server.netlify.app/asset/brest5.jpg",
    ],
    video: "https://main--city-info-server.netlify.app/asset/brest.mp4",
    location: "-4.4861, 48.3904",
    description:
      "Brest, port maritime stratégique, est célèbre pour ses crêpes et son riche patrimoine nautique.",
  },
  {
    name: "Grenoble",
    region: "Auvergne-Rhône-Alpes",
    id: 20,
    biome: "montagne",
    climat: "montagnard",
    fait_insolite:
      "Grenoble est surnommée la 'capitale des Alpes' et est entourée de montagnes.",
    gastronomie:
      "La fondue savoyarde et la raclette sont des spécialités montagnardes.",
    choses_insolites_a_faire: [
      "Prendre les 'bulles' de Grenoble, des téléphériques qui montent à la Bastille.",
      "Visiter le musée de Grenoble.",
      "Faire une randonnée dans le parc naturel régional de Chartreuse.",
    ],
    img: [
      "https://main--city-info-server.netlify.app/asset/grenoble1.jpg",
      "https://main--city-info-server.netlify.app/asset/grenoble2.jpg",
      "https://main--city-info-server.netlify.app/asset/grenoble3.jpg",
      "https://main--city-info-server.netlify.app/asset/grenoble4.jpg",
      "https://main--city-info-server.netlify.app/asset/grenoble5.jpg",
    ],
    video: "https://main--city-info-server.netlify.app/asset/grenoble.mp4",
    location: "5.7245, 45.1885",
    description:
      "Grenoble, entourée de montagnes, est idéale pour les amateurs de sports d'hiver et de nature.",
  },
  {
    name: "Dijon",
    region: "Bourgogne-Franche-Comté",
    id: 21,
    biome: "plaine",
    climat: "tempere oceanique",
    fait_insolite: "Dijon est célèbre pour sa moutarde et son vin.",
    gastronomie: "Le bœuf bourguignon est un plat emblématique de la région.",
    choses_insolites_a_faire: [
      "Visiter le Palais des ducs et des États de Bourgogne.",
      "Explorer le musée des Beaux-Arts de Dijon.",
      "Découvrir le jardin Darcy et la chouette de Dijon.",
    ],
    img: [
      "https://main--city-info-server.netlify.app/asset/dijon1.jpeg",
      "https://main--city-info-server.netlify.app/asset/dijon2.jpeg",
      "https://main--city-info-server.netlify.app/asset/dijon3.jpeg",
      "https://main--city-info-server.netlify.app/asset/dijon4.jpeg",
      "https://main--city-info-server.netlify.app/asset/dijon5.jpeg",
    ],
    video: "https://main--city-info-server.netlify.app/asset/dijon.mp4",
    location: "5.0415, 47.3220",
    description:
      "Dijon, capitale de la Bourgogne, est renommée pour ses vins prestigieux et sa moutarde piquante.",
  },
  {
    name: "Angers",
    region: "Pays de la Loire",
    id: 22,
    biome: "plaine",
    climat: "tempere oceanique",
    fait_insolite:
      "Angers est connue pour sa tapisserie de l'Apocalypse, la plus grande tapisserie médiévale du monde.",
    gastronomie:
      "Le Cointreau, une liqueur à base d'écorces d'oranges, est produit à Angers.",
    choses_insolites_a_faire: [
      "Visiter le château d'Angers.",
      "Explorer le musée Jean-Lurçat et de la tapisserie contemporaine.",
      "Se promener dans le jardin des plantes d'Angers.",
    ],
    img: [
      "https://main--city-info-server.netlify.app/asset/angers1.jpg",
      "https://main--city-info-server.netlify.app/asset/angers2.jpg",
      "https://main--city-info-server.netlify.app/asset/angers3.jpg",
      "https://main--city-info-server.netlify.app/asset/angers4.jpg",
      "https://main--city-info-server.netlify.app/asset/angers5.jpg",
    ],
    video: "https://main--city-info-server.netlify.app/asset/angers.mp4",
    location: "-0.5632, 47.4784",
    description:
      "Angers, ville d'art et d'histoire, se distingue par sa célèbre tapisserie médiévale.",
  },
  {
    name: "Moisy-sur-Meth Frère!!!",
    region: "l'Hérault-in",
    id: 23,
    biome: "plaine",
    climat: "tempere oceanique",
    fait_insolite: "Un tatouage acheté, une IST offerte",
    gastronomie: "Freeganisme",
    choses_insolites_a_faire: [
      "Bataille de punk dans une piscine de slime",
      "Se faire faire des percings a l'épingle à nourrice sans désinfectant",
      "Offrez-vous la même coupe que votre animal avec le coiffeur/toiletteur",
    ],
    img: [
      "https://main--city-info-server.netlify.app/asset/moisy1.jpg",
      "https://main--city-info-server.netlify.app/asset/moisy2.jpg",
      "https://main--city-info-server.netlify.app/asset/moisy3.webp",
      "https://main--city-info-server.netlify.app/asset/moisy4.webp",
      "https://main--city-info-server.netlify.app/asset/moisy5.webp",
    ],
    video: "https://main--city-info-server.netlify.app/asset/sdf.mp4",
    location: "3.5594167215020556, 43.70904774113761",
    description:
      "N'hésitez pas à venir visiter notre charmante ville de Moisy-Sur-Meth, venez profiter de notre ville très insécuritaire, où le respect de la loi est inexistant, mais aussi de nos nombreuses déchèteries à ciel ouvert. Moisy-Sur-Meth, sans doute la ville où le mot Moisy prend tout son sens. Venez dans une ville où il fait bon moisir.",
  },
];

module.exports = cities;
