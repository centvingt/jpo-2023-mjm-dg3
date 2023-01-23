import { splitString, getIdFromYouTubeLink } from './utils.js'

const rawGames = [
  {
    BINOME: 'ABAKAR_COSIALLS',
    TITRE: '',
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': 'vdEKzfEWTjPe5DTb3jRj7u',
    DESCRIPTION: '',
    'COMMANDES DU CLAVIER': '',
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Alexia ABAKAR\nRaphaël COSIALLS',
  },
  {
    BINOME: 'BAZIRE_LEFRANC',
    TITRE: '',
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': 'xlNXtG9pXd9JdO8gYGmzRa',
    DESCRIPTION: '',
    'COMMANDES DU CLAVIER': '',
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Madeleine BAZIRE\nSuzanne LEFRANC',
  },
  {
    BINOME: 'BEKKA_LALANNE',
    TITRE: '',
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': '1u6DhD2KlZ2KfX3ri73pTw',
    DESCRIPTION: '',
    'COMMANDES DU CLAVIER': '',
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Inès BEKKA\nIsis LALANNE',
  },
  {
    BINOME: 'BENONI_MORLAT',
    TITRE: '',
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': 'ieCPJpabAM862wiHiv68V7',
    DESCRIPTION: '',
    'COMMANDES DU CLAVIER': '',
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Dylan BENONI\nSébastien MORLAT',
  },
  {
    BINOME: 'BONIN_CALOM',
    TITRE: '',
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': 'GH6yHvrUmll8nJw2UBklUZ/',
    DESCRIPTION: '',
    'COMMANDES DU CLAVIER': '',
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Marion BONIN\nAgathe CALOM',
  },
  {
    BINOME: 'BORDAS_HAMIDI',
    TITRE: '',
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': 'vS3SGPYB4FeLGl87pBHb8X',
    DESCRIPTION: '',
    'COMMANDES DU CLAVIER': '',
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Romain BORDAS\nHoussine HAMIDI',
  },
  {
    BINOME: 'BRUNET_DONINEAUX',
    TITRE: '',
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': '6GzOGjbeiwoCnI1PAed25o',
    DESCRIPTION: '',
    'COMMANDES DU CLAVIER': '',
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Charles BRUNET\nThomas DONINEAUX',
  },
  {
    BINOME: 'CHAN_LUU_NEREE',
    TITRE: '',
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': 'xIRHRk0wLGBaA6XFNBnkLV',
    DESCRIPTION: '',
    'COMMANDES DU CLAVIER': '',
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Miranda CHAN SIO MOUI\nNancy LUU\nAurélie NÉRÉE',
  },
  {
    BINOME: 'CHEBBAH_CHRETIEN',
    TITRE: '',
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': 'kGI1AOhfH4XABgrOC7WjVb',
    DESCRIPTION: '',
    'COMMANDES DU CLAVIER': '',
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Inès CHEBBAH\nMorgane CHRÉTIEN',
  },
  {
    BINOME: 'CHIKER_LEMOINE',
    TITRE: '',
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': 'i5HE7LTdOGoXIFSKCQG0h4',
    DESCRIPTION: '',
    'COMMANDES DU CLAVIER': '',
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Dorine CHIKER\nYohann LEMOINE',
  },
  {
    BINOME: 'COCIELLA_BOUKHATEM',
    TITRE: '',
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': 'VOg1bJOKjglqy5frCNcTG6',
    DESCRIPTION: '',
    'COMMANDES DU CLAVIER': '',
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Sarah BOUKHATEM\nBrune COCIELLA',
  },
  {
    BINOME: 'DAVID_MOHAMMAD',
    TITRE: '',
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': '403w16tI1UHOhtjj0JLQQp',
    DESCRIPTION: '',
    'COMMANDES DU CLAVIER': '',
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Maïka DAVID\nHadia MOHAMMAD',
  },
  {
    BINOME: 'DELANSORNE_DUHAMEL_RIBOUCHON',
    TITRE: 'ColorMeow',
    'ID SCRATCH (NEUF CHIFFRES)': 791003537,
    'ID FIGMA': 'KmnGKja2wfKB9kz57la1Fk',
    DESCRIPTION:
      "Il s'agit de la création d'un jeu indépendant. Nous utilisons la technique d'impression risographie.\nTout gris, tout triste et tout grincheux, un petit chat seul sur son territoire terne, est envahi d'oiseaux et de magie ! Ils sont en couleur. Il décide alors avec son élastique à cheveux, de tirer sur des oiseaux qui laissent tomber des plumes colorées. Il partira alors à la recherche des plus belles couleurs du monde.",
    'COMMANDES DU CLAVIER':
      "↑ pour monter, \n↓ pour descendre, \nBarre d'espace pour tirer sur les ennemis,\nFaites attention aux obstacles qui vous feront perdre votre jauge d'enthousiasme et votre vie.",
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Caroline DELANSORNE\nLena DUHAMEL\nMatthie RIBOUCHON',
  },
  {
    BINOME: 'EGUCHI_LAURENT',
    TITRE: 'Anyborg',
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': 'n5uoMd7SxCQbxb4IACGDe0',
    DESCRIPTION:
      'Anyborg est un jeu vidéo en 2D du genre Shoot’em up où le joueur devra incarner un “aniborg” (chasseur de prime mi-animal mi-cyborg), dont la mission est de renverser un dictateur et son armée de robots. Ce jeu se veut comme un hommage au cinéma de science-fiction ayant marqué le XXème siècle.',
    'COMMANDES DU CLAVIER':
      "Le perso principal fait du surplace, c'est le décor qui défile. Il peut sauter grâce à la touche espace et tirer des lasers avec une touche spécialisée",
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Kyoka EGUCHI\nEnzo LAURENT',
  },
  {
    BINOME: 'FENGAROL_OLIVERO_LE-DU',
    TITRE: '',
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': 'kW3se4piwqRPoWzoFNMJSa',
    DESCRIPTION: '',
    'COMMANDES DU CLAVIER': '',
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Owen FENGAROL\nClément OLIVERO\nJustine LE DÛ',
  },
  {
    BINOME: 'FOUCHONNERET_HADDAD_MARCIANO',
    TITRE: '',
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': 'PMkHfI0JNpZ36N1jndKojh',
    DESCRIPTION: '',
    'COMMANDES DU CLAVIER': '',
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Hugo FOUCHONNERET\nRaphael HADDAD\nShani MARCIANO',
  },
  {
    BINOME: 'GENDRON_VITURAT',
    TITRE: 'Slimy Jimy',
    'ID SCRATCH (NEUF CHIFFRES)': 791859224,
    'ID FIGMA': 'unww5VsL5c078gi1zts0e3',
    DESCRIPTION:
      "un slime n’ayant pas le droit à l’erreur, doit aller libérer les siens dans un monde sans dessus dessous à en perdre la tête ! Alors partez à l’aventure et sauvez vos semblables.\nAidez le slime à récupérer ses munissions (glaçons, feuilles, slime et boule de feu) afin d’en faire ses armes pour combattre ses ennemis. Dans le version Scratch, nous n'avons développé qu'un seul aspect du jeu. Il n'y a donc pour l'instant qu'un seul des 4 fonds et pas de munissions à récupérer car c'est grâce à cela que le monde change d'aspect.",
    'COMMANDES DU CLAVIER':
      "Personnage principal reste immobile,\nBarre d'espace : envoi missiles pour tuer les ennemis,\nFlêches haut et bas : sauter.",
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Yohann GENDRON\nCharlotte VITURAT',
  },
  {
    BINOME: 'GODINEAU_LE-GRUMELEC',
    TITRE: '',
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': '5JTVUGjE7cneny4DeDzaiI',
    DESCRIPTION: '',
    'COMMANDES DU CLAVIER': '',
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Anouck GODINEAU\nGaël LE-GRUMELEC',
  },
  {
    BINOME: 'GOURLAIN_OUADY',
    TITRE: 'StolenDreams',
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': 'xCz6iXXcYF1rMMQ1n0qfNN',
    DESCRIPTION: '',
    'COMMANDES DU CLAVIER': '',
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Killian GOURLAIN\nGuillaume OUADY',
  },
  {
    BINOME: 'HURTREL_NACKI',
    TITRE: '',
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': 'GnYODZXtrOl2kjoe8Vy54M',
    DESCRIPTION: '',
    'COMMANDES DU CLAVIER': '',
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Quentin HURTREL\nMarc-Lewis NACKI',
  },
  {
    BINOME: 'LANG_VALACH',
    TITRE: 'Roof Cake Party',
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': 'bzfiyG3BAQienizUeMw5ok',
    DESCRIPTION:
      "Jeu ou l'on incarne des patisseries en cavale sur les toits de Paris qui se sont echappée d'une boulangerie après avoir prit vie. ( un. croissant, un muffin et une tarte aux fraises ). Elles sont poursuivies par le chat du boulanger ainsi que des chauve souris des ténèbres ( engagées par le chat ).",
    'COMMANDES DU CLAVIER': '',
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Léna LANG\nAlexandra VALACH',
  },
  {
    BINOME: 'LEMARIE_ROSSIGNOL',
    TITRE: 'POW',
    'ID SCRATCH (NEUF CHIFFRES)': 790992658,
    'ID FIGMA': 'WSyO3XlSdcNHYqddpF0A4N',
    DESCRIPTION:
      'Une plante nommée Pow est à la recherche de sa famille. Pour les retrouver, elle doit traverser plusieurs mondes en évitant différents ennemis, elle peut les éliminer à l’aide de ses feuilles tranchantes.\nCependant, si un ennemi la touche, elle perd un pétale.\nPuis à un moment du jeux elle tombe dans un trou noir, la phrase « mettez vos lunettes » apparait. Elle atterrit alors dans le centre de la terre, un endroit où les deux mondes se superposent, les joueurs auront auront une visibilité réduite et devront alors mettre les lunettes afin de voir les ennemis ainsi que ce deuxième monde.',
    'COMMANDES DU CLAVIER':
      '↑ pour monter, \n↓ pour descendre, \ntouche espace pour tirer sur les ennemis',
    'LIEN YOUTUBE FORMAT 4:3': 'https://youtu.be/QSr2pZEhuf0',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3':
      'https://i.postimg.cc/rmTFyvpq/Page-play.jpg\nhttps://i.postimg.cc/7hQQNsmp/Page-aie.jpg\nhttps://i.postimg.cc/hvG5TWbL/Page-chargement.jpg\nhttps://i.postimg.cc/gJs7xkRc/Page-map-2.jpg\nhttps://i.postimg.cc/448MZysB/Page-map1.jpg',
    NOMS: 'Lou-Ann LEMARIE\nSyndel ROSSIGNOL',
  },
  {
    BINOME: 'LOUIS-THERESE_PICH-SOEUN',
    TITRE: 'NoFace',
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': '5TwfbjTGiDgCd34tiUb9Wb',
    DESCRIPTION:
      'Bienvenue dans le nouveau monde Yume*  où des monstres sèment le chaos. Les humains sont traqués, attaqués et leur identité leur est volée.  Tu incarnes le rôle d’un Sans-Visage. Récupère tous les masques retenus par les Face Eaters. Ces masques vont t’aider à découvrir ta véritable identité. Pour les récupérer, affronte les ennemis se trouvant dans le donjon Brumeux.',
    'COMMANDES DU CLAVIER':
      "↑ pour monter, \n↓ pour descendre, \nBarre d'espace pour tirer sur les ennemis.",
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Camile LOUIS-THERESE\nMarie PICH-SOEUN',
  },
  {
    BINOME: 'LUBANGI-MUTOKE_ONGOUALA',
    TITRE: "Les Décombres De L'atlantique",
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': 'DlIcmrNeYZDS3vTDk5Phsm',
    DESCRIPTION:
      'Lors d’une croisière en direction du Canada, le bateau connaît un accident en heurtant un iceberg. Le rescapé possède une bonbonne d’oxygène q u’il a récupéré dans les débris, il possède un masque à décharge électrique qu’il a fabriqué avec les anguilles des profondeurs. \nAvec la bonbonne, le rescapé tente de s’en sortir en deviant les stalactites et en détruisant les objets et en cas de contacts avec les stalactites, le rescaper perd des vies, au bout de la 10e, il meurt.',
    'COMMANDES DU CLAVIER': '',
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Karamatou LUBANGI-MUTOKE\nYanis ONGOUALA',
  },
  {
    BINOME: 'MAZEAU_RICHERT',
    TITRE: '',
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': 'vwuTNrkJXoU6fx7afEr4jb',
    DESCRIPTION: '',
    'COMMANDES DU CLAVIER': '',
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Tom MAZEAU\nLise RICHERT',
  },
  {
    BINOME: 'NINAUD_UGOLINI',
    TITRE: '',
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': 'xqkGIeKJC9TOnQtLsJdBxB',
    DESCRIPTION: '',
    'COMMANDES DU CLAVIER': '',
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Mona NINAUD\nTatiana UGOLINI',
  },
  {
    BINOME: 'RANJARD_SULTAN',
    TITRE: 'The Snake',
    'ID SCRATCH (NEUF CHIFFRES)': 791078087,
    'ID FIGMA': 'MsUaOTil5nBf3eMKT0nNuz',
    DESCRIPTION:
      'Le but du jeu est d’incarner un serpent qui doit parcourir le plus de métres possible, pour se nourrir il mange des yeux, ceux ci lui donne de la force mais attention certains sont toxiques et donc à éviter. Les yeux comestible lui donne à partir de 3 mangés d’affilés la possibilité d’utiliser un laser. Quand le serpent est touché par des mauvais yeux, il perd une de ses 4 vies.',
    'COMMANDES DU CLAVIER':
      "↑ pour monter, \n↓ pour descendre, \nBarre d'espace pour tirer sur les ennemis.",
    'LIEN YOUTUBE FORMAT 4:3': 'https://youtu.be/cQhNromYVIQ',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Bastien RANJARD\nTobias SULTAN',
  },
]

/**
 * @typedef {Object} Game
 * @property {string} title
 * @property {string} scratchId
 * @property {string} figmaId
 * @property {[string]} descriptionParagraphs
 * @property {[string]} controls
 * @property {string} youtubeId
 * @property {[string]} screenshots
 */

/** @type {[Game]} */ const games = rawGames
  .map((rawGame) => {
    if (
      !rawGame['TITRE'] ||
      rawGame['TITRE'] === '' ||
      !rawGame['ID SCRATCH (NEUF CHIFFRES)'] ||
      rawGame['ID SCRATCH (NEUF CHIFFRES)'] === '' ||
      !rawGame['DESCRIPTION'] ||
      rawGame['DESCRIPTION'] === '' ||
      !rawGame['COMMANDES DU CLAVIER'] ||
      rawGame['COMMANDES DU CLAVIER'] === '' ||
      !rawGame['LIEN YOUTUBE FORMAT 4:3'] ||
      rawGame['LIEN YOUTUBE FORMAT 4:3'] === ''
    )
      return

    const title = rawGame['TITRE']
    const figmaId = rawGame['ID FIGMA']
    const scratchId = rawGame['ID SCRATCH (NEUF CHIFFRES)'].toString()
    const descriptionParagraphs = splitString(rawGame['DESCRIPTION'])
    const controls = splitString(rawGame['COMMANDES DU CLAVIER'])
    const youtubeId = getIdFromYouTubeLink(rawGame['LIEN YOUTUBE FORMAT 4:3'])
    const screenshots = [
      youtubeId,
      ...splitString(
        rawGame['LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3']
      ),
    ].filter((s) => s !== '')

    return {
      title,
      figmaId,
      scratchId,
      descriptionParagraphs,
      controls,
      youtubeId,
      screenshots,
    }
  })
  .filter((game) => game)
  .sort(() => Math.random() - 0.5)

console.log('assets/js/data.js > games >', games)

export { games }
