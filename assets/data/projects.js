// Données des projets SolidFund
//
// Ce fichier définit un tableau global `projects` contenant les dix projets
// solidaires fournis par l'utilisateur. Chaque projet inclut un
// identifiant, un titre, une catégorie, des montants collectés et
// ciblés, une localisation, un nombre de contributeurs, une durée
// d’activité, des descriptions longues et des listes d'impact,
// d'objectifs secondaires et de projets similaires. Ces données sont
// importées par les pages projets.html et projet.html afin de
// construire dynamiquement les cartes et les détails des projets.

var projects = [
  {
    id: 1,
    title: "Centre de santé rural à Daloa",
    category: "Santé",
    image: "assets/img/centre-sante-rural-daloa.jpg",
    raised: 14500000,
    goal: 22000000,
    description: "Moderniser un dispensaire en zone rurale pour offrir des soins accessibles aux familles de Daloa.",
    location: "Daloa, Côte d’Ivoire",
    donors: 198,
    activeSince: "Actif depuis 3 mois",
    longDescription: "Le dispensaire rural de Daloa a été construit il y a plus de 20 ans et peine à répondre aux besoins croissants des familles environnantes. Les équipements sont vétustes, et les consultations se font parfois dans des conditions précaires. Le projet vise à rénover et agrandir le centre pour accueillir davantage de patients, moderniser les salles d’examen et créer une unité de maternité.\n\nLa communauté locale, composée principalement de cultivateurs, est confrontée à des défis sanitaires fréquents : maladies infantiles, grossesses à risque et infections non traitées. La présence d’un centre de santé modernisé permettra d’assurer un suivi médical régulier, de proposer des campagnes de vaccination et de sensibiliser sur la santé reproductive.\n\nLes fonds collectés serviront également à former du personnel médical, recruter une sage‑femme et équiper le centre d’un petit laboratoire pour des analyses de base. Un partenariat avec la direction régionale de la santé est envisagé pour garantir la pérennité des services.\n\nEnfin, l’objectif est de créer un espace d’accueil chaleureux et rassurant afin que les habitants de Daloa et des villages environnants aient confiance et se rendent plus régulièrement aux consultations préventives.",
    impactAttendu: [
      "Réduction de 25 % du taux de mortalité maternelle dans la zone.",
      "Accès permanent à des soins pour plus de 5 000 habitants.",
      "Vaccination systématique des enfants de moins de cinq ans.",
      "Création de cinq emplois stables (médecins et infirmiers).",
      "Sensibilisation renforcée à la santé reproductive et à la prévention des maladies."
    ],
    secondaryGoals: [
      "Lancer un programme d’hygiène communautaire (lavage des mains, prévention du paludisme).",
      "Mettre en place une pharmacie solidaire pour les familles défavorisées.",
      "Organiser des campagnes régulières de dépistage (hypertension, diabète)."
    ],
    similarProjects: [
      "Clinique mobile de soins à Kaffrine – Un camion médical équipé sillonne les villages isolés.",
      "Centre de santé maternelle à Bobo-Dioulasso – Construction d’une maternité et formation de sages-femmes.",
      "Pharmacie communautaire de Yamoussoukro – Dispensaire avec stock de médicaments essentiels à prix réduits."
    ]
  },
  {
    id: 2,
    title: "Forage d’eau potable à Korhogo",
    category: "Eau et assainissement",
    image: "assets/img/forage-eau-korhogo.jpg",
    raised: 8000000,
    goal: 12000000,
    description: "Fournir une source d’eau potable aux habitants du quartier Zanzan à Korhogo pour réduire les maladies hydriques.",
    location: "Korhogo, Côte d’Ivoire",
    donors: 150,
    activeSince: "Actif depuis 1 mois",
    longDescription: "Dans le quartier Zanzan, les familles dépendent d’un puits à ciel ouvert dont l’eau est souvent contaminée. Chaque saison sèche, les enfants souffrent de diarrhées et de typhoïde, obligeant les parents à parcourir plusieurs kilomètres pour se procurer de l’eau potable. Ce projet de forage vise à percer un puits profond avec une pompe manuelle et un système de traitement basique, garantissant une eau propre toute l’année.\n\nLes travaux prévoient l’étude géologique du terrain, l’installation du forage et la mise en place d’un réservoir surélevé pour améliorer la distribution. Le comité villageois se chargera de la maintenance et les femmes du quartier seront formées pour gérer le point d’eau.\n\nEn parallèle, des ateliers de sensibilisation à l’hygiène et à la conservation de l’eau seront organisés pour toutes les familles. L’initiative répond à un besoin urgent et contribuera à réduire considérablement les maladies liées à l’eau.\n\nCe forage permettra également d’irriguer un petit jardin communautaire, apportant une source de revenus supplémentaire aux femmes du quartier.",
    impactAttendu: [
      "Diminution de 70 % des cas de maladies diarrhéiques.",
      "Accès à l’eau potable pour 300 ménages.",
      "Création d’un potager communautaire cultivant légumes et herbes.",
      "Allégement de la corvée d’eau pour les femmes et les jeunes filles.",
      "Renforcement de la cohésion communautaire autour de la gestion de l’eau."
    ],
    secondaryGoals: [
      "Mise en place d’un comité de gestion et de maintenance.",
      "Distribution de filtres à eau pour les foyers.",
      "Initiation à la récolte des eaux de pluie durant la saison humide."
    ],
    similarProjects: [
      "Forage d’eau potable à Kaolack – Installation d’un puits moderne et formation du comité local.",
      "Réseau de micro-irrigation à Niamey – Système goutte-à-goutte pour potagers communautaires.",
      "Programme d’assainissement à Ségou – Construction de latrines et formation à l’hygiène."
    ]
  },
  {
    id: 3,
    title: "Programme éducatif pour jeunes – Bamako",
    category: "Éducation",
    image: "assets/img/programme-education-bamako.jpg",
    raised: 5500000,
    goal: 9000000,
    description: "Offrir des cours de soutien et un accès numérique aux élèves défavorisés de Bamako.",
    location: "Bamako, Mali",
    donors: 122,
    activeSince: "Actif depuis 4 mois",
    longDescription: "Beaucoup d’enfants et d’adolescents de Bamako n’ont pas accès à des ressources éducatives de qualité. Ce projet vise à créer un centre éducatif ouvert l’après-midi, offrant des cours de soutien en mathématiques, français et sciences, ainsi qu’un accès à des ordinateurs et à Internet.\n\nLe centre sera animé par des enseignants bénévoles et des étudiants en fin de cycle, désireux de transmettre leurs connaissances. Les élèves pourront également participer à des ateliers d’orientation professionnelle et découvrir des métiers d’avenir.\n\nUne salle numérique équipée de 20 ordinateurs permettra aux jeunes de se familiariser avec les technologies, apprendre à coder et développer leur créativité à travers des projets artistiques.\n\nCe programme entend réduire le décrochage scolaire et améliorer les résultats aux examens en offrant un environnement d’étude stimulant et bienveillant.",
    impactAttendu: [
      "Accompagnement de 150 élèves par an.",
      "Amélioration des résultats scolaires (taux de réussite au BEPC et au BAC).",
      "Familiarisation des jeunes avec les outils numériques.",
      "Mise en place d’un espace d’orientation professionnelle et d’entrepreneuriat.",
      "Stimulation de l’esprit critique et de la créativité."
    ],
    secondaryGoals: [
      "Organiser un concours annuel d’innovation entre élèves.",
      "Créer une bibliothèque physique et numérique accessible gratuitement.",
      "Former des parents à l’accompagnement scolaire."
    ],
    similarProjects: [
      "Bibliothèque numérique pour les écoles rurales – Accès aux ressources en ligne pour des villages isolés.",
      "Programme “Code pour l’Afrique” – Formation au développement web pour les jeunes.",
      "Bourse scolaire pour filles au Niger – Aider les familles à financer la scolarisation de leurs filles."
    ]
  },
  {
    id: 4,
    title: "Projet agricole durable – Ouahigouya",
    category: "Agriculture",
    image: "assets/img/projet-agricole.jpg",
    raised: 9200000,
    goal: 15000000,
    description: "Former des cultivateurs à des pratiques durables et installer une unité de transformation à Ouahigouya.",
    location: "Ouahigouya, Burkina Faso",
    donors: 167,
    activeSince: "Actif depuis 2 mois",
    longDescription: "La région de Ouahigouya est confrontée à l’appauvrissement des sols et à une baisse de la productivité. Les agriculteurs cultivent de manière extensive sans les connaissances nécessaires pour préserver la fertilité. Ce projet vise à former 60 cultivateurs aux pratiques agro-écologiques (compostage, rotation des cultures, utilisation de semences locales adaptées) et à construire une petite unité de transformation de céréales et de légumes afin de valoriser les productions.\n\nLes formations seront animées par des agronomes et se dérouleront sur plusieurs mois. Chaque agriculteur recevra un kit de démarrage comprenant du matériel de base et des semences améliorées. En parallèle, un champ école sera développé pour tester et diffuser les bonnes pratiques.\n\nL’unité de transformation, équipée d’un moulin et de séchoirs solaires, permettra de produire de la farine, des purées et des chips de manioc, offrant des débouchés plus rémunérateurs. Ces produits seront vendus sur le marché local et dans la région.\n\nLe projet encourage également la création d’une coopérative pour renforcer la négociation collective et l’autonomisation financière des producteurs.",
    impactAttendu: [
      "Augmentation de 30 % des rendements des cultures.",
      "Valorisation des produits agricoles grâce à la transformation locale.",
      "Réduction de l’exode rural en créant 20 emplois directs.",
      "Sensibilisation à la préservation des sols et de la biodiversité.",
      "Amélioration des revenus des familles participantes."
    ],
    secondaryGoals: [
      "Promouvoir la diversification des cultures (céréales, légumineuses, fruits).",
      "Développer un label “Produit local durable” pour la région.",
      "Mettre en place un fonds de solidarité pour les cultivateurs en difficulté."
    ],
    similarProjects: [
      "Ferme biologique communautaire à Togo – Production de légumes bio avec formation des agriculteurs.",
      "Projet agro-forestier au Sénégal – Plantation d’arbres fruitiers et céréaliers pour la diversification.",
      "Coopérative de semences locales à Bénin – Conservation et valorisation des variétés traditionnelles."
    ]
  },
  {
    id: 5,
    title: "Réhabilitation d’une école primaire à Zinder",
    category: "Éducation",
    image: "assets/img/rehabilitation-ecole-zinder1.jpg",
    raised: 3800000,
    goal: 7500000,
    description: "Rénover des classes en terre battue et fournir du mobilier et des kits scolaires aux élèves de Zinder.",
    location: "Zinder, Niger",
    donors: 97,
    activeSince: "Actif depuis 1 mois",
    longDescription: "L’école primaire du quartier Birni est composée de trois salles en terre battue, construites il y a 15 ans. Les pluies et la chaleur les ont fortement dégradées : fissures, toiture trouée, mobilier cassé. Les 120 élèves travaillent dans des conditions difficiles et sont souvent malades à cause de la poussière.\n\nLe projet prévoit de réhabiliter les salles de classe avec des briques stabilisées, d’installer une toiture en tôle ondulée, de refaire les portes et fenêtres et de construire un bloc sanitaire. De nouveaux bureaux et bancs seront fabriqués par des artisans locaux.\n\nUn kit scolaire (cahiers, stylos, ardoises) sera distribué à chaque élève pour soulager les familles. Le comité des parents d’élèves participera aux travaux communautaires (transport des briques, peinture).\n\nLa rénovation de l’école vise à offrir un environnement digne et stimulant, où les enfants pourront apprendre dans des conditions saines et sécurisées.",
    impactAttendu: [
      "Amélioration des conditions d’apprentissage pour 120 élèves.",
      "Réduction des absences dues aux maladies et aux intempéries.",
      "Mobilisation de la communauté autour de l’éducation.",
      "Soutien aux artisans locaux grâce à la fabrication du mobilier.",
      "Stimulation de l’inscription des filles à l’école."
    ],
    secondaryGoals: [
      "Aménagement d’un potager scolaire pour l’initiation à l’agriculture.",
      "Organisation de séances de sensibilisation à l’égalité filles-garçons.",
      "Création d’un club de lecture animé par des bénévoles."
    ],
    similarProjects: [
      "Construction d’une école en terre dans l’Adamaoua – Bâtiment moderne et écologique.",
      "Programme “Lumière pour apprendre” au Cameroun – Installation de panneaux solaires pour éclairer les classes.",
      "Fourniture de manuels scolaires à Dakar – Achat et distribution de livres essentiels."
    ]
  },
  {
    id: 6,
    title: "Mini-centrale solaire communautaire – Sédhiou",
    category: "Énergie",
    image: "assets/img/mini-centrale-solaire-sedhiou.jpg",
    raised: 20000000,
    goal: 28000000,
    description: "Installer une centrale solaire pour alimenter un village en électricité et favoriser des activités économiques durables.",
    location: "Sédhiou, Sénégal",
    donors: 253,
    activeSince: "Actif depuis 5 mois",
    longDescription: "Dans la région de Sédhiou, les habitants vivent sans accès fiable à l’électricité. Les familles utilisent des lampes à pétrole ou des batteries de mauvaise qualité qui présentent des risques d’incendie. Cette mini-centrale solaire de 15 kW permettra d’alimenter 40 foyers, l’école et le centre de santé du village en électricité propre et abordable.\n\nLe projet comprend l’installation de panneaux solaires photovoltaïques, de batteries de stockage et d’un système de distribution basse tension. Une équipe locale sera formée à la maintenance et à la gestion de l’énergie.\n\nGrâce à cette centrale, les activités commerciales (petits commerces, ateliers de menuiserie) pourront fonctionner après le coucher du soleil, augmentant les revenus des familles. L’école bénéficiera d’un éclairage pour des cours du soir, et le centre de santé pourra conserver les vaccins à bonne température.\n\nCe projet contribue à la réduction des émissions de CO₂ et démontre le potentiel des énergies renouvelables en milieu rural.",
    impactAttendu: [
      "Accès à l’électricité pour 40 foyers et trois bâtiments publics.",
      "Diminution de 80 % des dépenses en lampes à pétrole.",
      "Création de cinq emplois pour l’entretien et la gestion de la centrale.",
      "Développement d’activités économiques (vente de produits réfrigérés, couture).",
      "Contribution à la lutte contre le changement climatique (énergie propre)."
    ],
    secondaryGoals: [
      "Sensibiliser la communauté à l’efficacité énergétique.",
      "Mettre en place un fonds de renouvellement des batteries.",
      "Étudier l’extension de la capacité à d’autres villages voisins."
    ],
    similarProjects: [
      "Solarisation d’un centre de santé à Kédougou – Installation de panneaux pour alimenter l’équipement médical.",
      "Lampadaires solaires pour un quartier de Ouagadougou – Éclairage public sécurisant les rues la nuit.",
      "Formation en énergie renouvelable à Bénin City – Apprendre à installer et entretenir des systèmes solaires."
    ]
  },
  {
    id: 7,
    title: "Formation en entrepreneuriat pour femmes – Conakry",
    category: "Autonomisation des femmes",
    image: "assets/img/formation-entrepreneuriat-femmes-conakry1.jpg",
    raised: 6700000,
    goal: 10000000,
    description: "Accompagner 50 femmes en Guinée dans la création et la gestion de micro-entreprises durables.",
    location: "Conakry, Guinée",
    donors: 138,
    activeSince: "Actif depuis 2 mois",
    longDescription: "De nombreuses femmes à Conakry souhaitent lancer de petites activités (restauration, artisanat, coiffure) mais manquent de formation et de capital. Ce projet propose un parcours complet de six mois, comprenant des ateliers de gestion d’entreprise, de marketing, d’accès au financement et de leadership.\n\nUne vingtaine de mentors, entrepreneurs expérimentés et universitaires, encadreront les participantes. Les femmes constitueront des groupes d’entraide pour se soutenir et partager leurs expériences.\n\nÀ la fin de la formation, un petit capital sera octroyé à chacune des 50 femmes pour démarrer son activité, assorti d’un accompagnement continu pendant un an. Les participantes suivront également des sessions sur les droits des femmes et la gestion de la vie privée et professionnelle.\n\nL’objectif est de renforcer l’autonomie économique des femmes et de favoriser l’émergence d’un tissu économique local résilient.",
    impactAttendu: [
      "Création de 50 micro-entreprises gérées par des femmes.",
      "Augmentation significative des revenus des ménages.",
      "Développement d’un réseau d’entraide et de mentorat local.",
      "Sensibilisation des femmes à leurs droits économiques.",
      "Participation accrue des femmes dans les instances communautaires."
    ],
    secondaryGoals: [
      "Organisation d’un salon de l’entrepreneuriat féminin.",
      "Établissement d’un fonds rotatif pour financer d’autres projets de femmes.",
      "Création d’un comité de veille pour accompagner les nouvelles entreprises."
    ],
    similarProjects: [
      "Atelier “Femmes et numérique” à Abidjan – Formation aux métiers du digital pour 30 femmes.",
      "Programme “Agricultrices leaders” à Togo – Apprentissage des pratiques agricoles et gestion des terres.",
      "Micro-crédits pour femmes artisans à Dakar – Financement et formation en gestion de stock et de trésorerie."
    ]
  },
  {
    id: 8,
    title: "Cantine scolaire pour enfants – Bouaké",
    category: "Nutrition et enfance",
    image: "assets/img/cantine-scolaire-bouake.jpg",
    raised: 5000000,
    goal: 8500000,
    description: "Mettre en place une cantine offrant des repas équilibrés à 200 élèves d’une école primaire.",
    location: "Bouaké, Côte d’Ivoire",
    donors: 110,
    activeSince: "Actif depuis 3 semaines",
    longDescription: "De nombreux élèves viennent à l’école sans avoir pris de petit-déjeuner et passent la journée sans repas, ce qui affecte leur concentration. Ce projet vise à créer une cantine scolaire offrant des repas équilibrés à 200 élèves d’une école primaire à Bouaké.\n\nLes fonds serviront à construire une cuisine équipée, à acheter des ustensiles, des tables et des bancs, et à financer l’embauche de deux cuisinières. Les menus seront élaborés par un nutritionniste local pour garantir un apport équilibré en protéines, céréales, fruits et légumes.\n\nLa cantine sera approvisionnée en partie par le jardin scolaire, qui cultivera des légumes de saison. Des parents volontaires participeront à la récolte et à la préparation, renforçant l’implication communautaire.\n\nCe projet contribuera à améliorer la santé des élèves, réduira l’absentéisme et augmentera les performances scolaires.",
    impactAttendu: [
      "Distribution de repas équilibrés à 200 enfants chaque jour.",
      "Amélioration de la concentration et des résultats scolaires.",
      "Diminution des cas de malnutrition et des maladies liées.",
      "Création de quatre emplois permanents (cuisinières, gestionnaires).",
      "Renforcement de l’agriculture scolaire et des liens communauté- école."
    ],
    secondaryGoals: [
      "Sensibilisation des parents à la nutrition et à l’hygiène alimentaire.",
      "Mise en place d’un potager pédagogique.",
      "Organisation d’activités sportives et éducatives pendant la pause déjeuner."
    ],
    similarProjects: [
      "Cantine scolaire à Dakar – Offre de repas sains pour 150 élèves.",
      "Programme “Petit-déjeuner pour tous” à Lomé – Distribution de céréales et de lait le matin.",
      "Projet “Fruits dans les écoles” au Bénin – Approvisionnement hebdomadaire en fruits locaux."
    ]
  },
  {
    id: 9,
    title: "Centre d’accueil pour enfants vulnérables – Douala",
    category: "Protection de l’enfance",
    image: "assets/img/centre-accueil-douala.jpg",
    raised: 11000000,
    goal: 18000000,
    description: "Construire un centre d’accueil pour offrir refuge, éducation et soins à 30 enfants vulnérables de Douala.",
    location: "Douala, Cameroun",
    donors: 175,
    activeSince: "Actif depuis 6 semaines",
    longDescription: "À Douala, des enfants vivent dans la rue ou dans des conditions précaires, exposés à la malnutrition et à la violence. Ce projet souhaite bâtir un centre d’accueil accueillant 30 enfants vulnérables et leur offrir un refuge sécurisé, une alimentation régulière, une scolarisation et un accompagnement psychologique.\n\nLes fonds permettront de construire des dortoirs, une salle de classe, une cuisine et des installations sanitaires, ainsi que d’employer des éducateurs spécialisés et des psychologues. Un jardin potager et un terrain de sport permettront aux enfants de se reconnecter à la nature et de pratiquer des activités physiques.\n\nLes enfants bénéficieront de cours de rattrapage pour réintégrer l’école publique et d’un suivi social afin de renouer avec leurs familles lorsque cela est possible.\n\nCe centre constituera un lieu sûr et bienveillant où les enfants pourront se reconstruire et envisager l’avenir avec espoir.",
    impactAttendu: [
      "Hébergement sécurisé pour 30 enfants vulnérables.",
      "Accès à l’éducation et à des soins psychologiques.",
      "Réinsertion progressive des enfants dans la société.",
      "Création de 10 emplois (éducateurs, cuisinières, agents de santé).",
      "Sensibilisation de la communauté à la protection de l’enfance."
    ],
    secondaryGoals: [
      "Organiser des séances de médiation familiale.",
      "Mettre en place un système de parrainage pour les frais de scolarité.",
      "Développer un programme d’art-thérapie pour les enfants."
    ],
    similarProjects: [
      "Maison des enfants à Abidjan – Centre d’hébergement et de soutien scolaire.",
      "Village SOS pour enfants à Ouagadougou – Familles d’accueil et scolarisation.",
      "Programme “Écoles de rue” à Kigali – Enseignement gratuit pour les enfants des rues."
    ]
  },
  {
    id: 10,
    title: "Jardin communautaire bio – Niamey",
    category: "Environnement & nutrition",
    image: "assets/img/jardin-communautaire-niamey.jpg",
    raised: 3000000,
    goal: 5500000,
    description: "Créer un jardin biologique géré par la communauté pour favoriser l’autosuffisance alimentaire et l’éducation à l’environnement.",
    location: "Niamey, Niger",
    donors: 80,
    activeSince: "Actif depuis 2 mois",
    longDescription: "L’insécurité alimentaire touche de nombreuses familles à Niamey. Ce projet propose de transformer un terrain abandonné en jardin biologique cultivé collectivement. Les parcelles seront réparties entre les familles participantes qui suivront une formation à l’agroécologie (compostage, irrigation goutte-à-goutte, semences locales).\n\nLe jardin produira légumes, plantes médicinales et fruits, améliorant l’alimentation des ménages. Un marché hebdomadaire permettra de vendre les excédents à prix abordable. Des ateliers éducatifs seront organisés pour les enfants afin de les sensibiliser à la protection de l’environnement.\n\nLes fonds collectés serviront à défricher le terrain, installer une clôture, un système d’arrosage et acheter les semences et outils nécessaires. Les familles contribueront par des heures de travail communautaire et la municipalité soutiendra l’initiative par un prêt foncier de longue durée.\n\nCe jardin deviendra un lieu de rencontre et d’entraide, favorisant la cohésion sociale et la résilience alimentaire.",
    impactAttendu: [
      "Production annuelle de légumes variés pour 50 familles.",
      "Amélioration de la nutrition et des revenus des ménages.",
      "Sensibilisation à l’agriculture biologique et à la biodiversité.",
      "Création d’une dynamique communautaire durable.",
      "Participation des enfants à la protection de l’environnement."
    ],
    secondaryGoals: [
      "Organiser des ateliers de cuisine saine utilisant les produits du jardin.",
      "Installer un système de récupération des eaux de pluie.",
      "Lancer un club environnemental pour les jeunes du quartier."
    ],
    similarProjects: [
      "Jardin partagé de Thiès – Exploitation de parcelles collectives en permaculture.",
      "Potager urbain à Cotonou – Formation des citadins à la culture hors-sol.",
      "Projet “Un arbre, une vie” à Abidjan – Plantation d’arbres fruitiers dans les écoles."
    ]
  }
];