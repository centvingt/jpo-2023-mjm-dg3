import { splitString, getIdFromYouTubeLink } from './util.js'

const rawGames = [
  {
    students: 'ABAKAR_COSIALLS',
    title: '',
    scratch: '',
    figma: 'vdEKzfEWTjPe5DTb3jRj7u',
    description: '',
    controls: '',
    youtube: '',
    screenshots: '',
  },
  {
    students: 'BAZIRE_LEFRANC',
    title: '',
    scratch: '',
    figma: 'xlNXtG9pXd9JdO8gYGmzRa',
    description: '',
    controls: '',
    youtube: '',
    screenshots: '',
  },
  {
    students: 'BEKKA_LALANNE',
    title: '',
    scratch: '',
    figma: '1u6DhD2KlZ2KfX3ri73pTw',
    description: '',
    controls: '',
    youtube: '',
    screenshots: '',
  },
  {
    students: 'BENONI_MORLAT',
    title: '',
    scratch: '',
    figma: 'ieCPJpabAM862wiHiv68V7',
    description: '',
    controls: '',
    youtube: '',
    screenshots: '',
  },
  {
    students: 'BONIN_CALOM',
    title: '',
    scratch: '',
    figma: 'GH6yHvrUmll8nJw2UBklUZ/',
    description: '',
    controls: '',
    youtube: '',
    screenshots: '',
  },
  {
    students: 'BORDAS_HAMIDI',
    title: '',
    scratch: '',
    figma: 'vS3SGPYB4FeLGl87pBHb8X',
    description: '',
    controls: '',
    youtube: '',
    screenshots: '',
  },
  {
    students: 'BRUNET_DONINEAUX',
    title: '',
    scratch: '',
    figma: '6GzOGjbeiwoCnI1PAed25o',
    description: '',
    controls: '',
    youtube: '',
    screenshots: '',
  },
  {
    students: 'CHAN_LUU_NEREE',
    title: '',
    scratch: '',
    figma: 'xIRHRk0wLGBaA6XFNBnkLV',
    description: '',
    controls: '',
    youtube: '',
    screenshots: '',
  },
  {
    students: 'CHEBBAH_CHRETIEN',
    title: '',
    scratch: '',
    figma: 'kGI1AOhfH4XABgrOC7WjVb',
    description: '',
    controls: '',
    youtube: '',
    screenshots: '',
  },
  {
    students: 'CHIKER_LEMOINE',
    title: '',
    scratch: '',
    figma: 'i5HE7LTdOGoXIFSKCQG0h4',
    description: '',
    controls: '',
    youtube: '',
    screenshots: '',
  },
  {
    students: 'COCIELLA_BOUKHATEM',
    title: '',
    scratch: '',
    figma: 'VOg1bJOKjglqy5frCNcTG6',
    description: '',
    controls: '',
    youtube: '',
    screenshots: '',
  },
  {
    students: 'DAVID_MOHAMMAD',
    title: '',
    scratch: '',
    figma: '403w16tI1UHOhtjj0JLQQp',
    description: '',
    controls: '',
    youtube: '',
    screenshots: '',
  },
  {
    students: 'DELANSORNE_DUHAMEL_RIBOUCHON',
    title: 'ColorMeow',
    scratch: 791003537,
    figma: 'KmnGKja2wfKB9kz57la1Fk',
    description:
      "Il s'agit de la création d'un jeu indépendant. Nous utilisons la technique d'impression risographie.\nTout gris, tout triste et tout grincheux, un petit chat seul sur son territoire terne, est envahi d'oiseaux et de magie ! Ils sont en couleur. Il décide alors avec son élastique à cheveux, de tirer sur des oiseaux qui laissent tomber des plumes colorées. Il partira alors à la recherche des plus belles couleurs du monde.",
    controls:
      "↑ pour monter, \n↓ pour descendre, \nBarre d'espace pour tirer sur les ennemis,\nFaites attention aux obstacles qui vous feront perdre votre jauge d'enthousiasme et votre vie.",
    youtube: '',
    screenshots: '',
  },
  {
    students: 'EGUCHI_LAURENT',
    title: 'Anyborg',
    scratch: '',
    figma: 'n5uoMd7SxCQbxb4IACGDe0',
    description:
      'Anyborg est un jeu vidéo en 2D du genre Shoot’em up où le joueur devra incarner un “aniborg” (chasseur de prime mi-animal mi-cyborg), dont la mission est de renverser un dictateur et son armée de robots. Ce jeu se veut comme un hommage au cinéma de science-fiction ayant marqué le XXème siècle.',
    controls:
      "Le perso principal fait du surplace, c'est le décor qui défile. Il peut sauter grâce à la touche espace et tirer des lasers avec une touche spécialisée",
    youtube: '',
    screenshots: '',
  },
  {
    students: 'FENGAROL_OLIVERO_LE-DU',
    title: '',
    scratch: '',
    figma: 'kW3se4piwqRPoWzoFNMJSa',
    description: '',
    controls: '',
    youtube: '',
    screenshots: '',
  },
  {
    students: 'FOUCHONNERET_HADDAD_MARCIANO',
    title: '',
    scratch: '',
    figma: 'PMkHfI0JNpZ36N1jndKojh',
    description: '',
    controls: '',
    youtube: '',
    screenshots: '',
  },
  {
    students: 'GENDRON_VITURAT',
    title: 'Slimy Jimy',
    scratch: 791859224,
    figma: 'unww5VsL5c078gi1zts0e3',
    description:
      "un slime n’ayant pas le droit à l’erreur, doit aller libérer les siens dans un monde sans dessus dessous à en perdre la tête ! Alors partez à l’aventure et sauvez vos semblables.\nAidez le slime à récupérer ses munissions (glaçons, feuilles, slime et boule de feu) afin d’en faire ses armes pour combattre ses ennemis. Dans le version Scratch, nous n'avons développé qu'un seul aspect du jeu. Il n'y a donc pour l'instant qu'un seul des 4 fonds et pas de munissions à récupérer car c'est grâce à cela que le monde change d'aspect.",
    controls:
      "Personnage principal reste immobile,\nBarre d'espace : envoi missiles pour tuer les ennemis,\nFlêches haut et bas : sauter.",
    youtube: '',
    screenshots: '',
  },
  {
    students: 'GODINEAU_LE-GRUMELEC',
    title: '',
    scratch: '',
    figma: '5JTVUGjE7cneny4DeDzaiI',
    description: '',
    controls: '',
    youtube: '',
    screenshots: '',
  },
  {
    students: 'GOURLAIN_OUADY',
    title: 'StolenDreams',
    scratch: '',
    figma: 'xCz6iXXcYF1rMMQ1n0qfNN',
    description: '',
    controls: '',
    youtube: '',
    screenshots: '',
  },
  {
    students: 'HURTREL_NACKI',
    title: '',
    scratch: '',
    figma: 'GnYODZXtrOl2kjoe8Vy54M',
    description: '',
    controls: '',
    youtube: '',
    screenshots: '',
  },
  {
    students: 'LANG_VALACH',
    title: 'Roof Cake Party',
    scratch: '',
    figma: 'bzfiyG3BAQienizUeMw5ok',
    description:
      "Jeu ou l'on incarne des patisseries en cavale sur les toits de Paris qui se sont echappée d'une boulangerie après avoir prit vie. ( un. croissant, un muffin et une tarte aux fraises ). Elles sont poursuivies par le chat du boulanger ainsi que des chauve souris des ténèbres ( engagées par le chat ).",
    controls: '',
    youtube: '',
    screenshots: '',
  },
  {
    students: 'LEMARIE_ROSSIGNOL',
    title: 'POW',
    scratch: 790992658,
    figma: 'WSyO3XlSdcNHYqddpF0A4N',
    description:
      'Une plante nommée Pow est à la recherche de sa famille. Pour les retrouver, elle doit traverser plusieurs mondes en évitant différents ennemis, elle peut les éliminer à l’aide de ses feuilles tranchantes.\nCependant, si un ennemi la touche, elle perd un pétale.\nPuis à un moment du jeux elle tombe dans un trou noir, la phrase « mettez vos lunettes » apparait. Elle atterrit alors dans le centre de la terre, un endroit où les deux mondes se superposent, les joueurs auront auront une visibilité réduite et devront alors mettre les lunettes afin de voir les ennemis ainsi que ce deuxième monde.',
    controls:
      '↑ pour monter, \n↓ pour descendre, \ntouche espace pour tirer sur les ennemis',
    youtube: 'https://youtu.be/QSr2pZEhuf0',
    screenshots:
      'https://i.postimg.cc/rmTFyvpq/Page-play.jpg\nhttps://i.postimg.cc/7hQQNsmp/Page-aie.jpg\nhttps://i.postimg.cc/hvG5TWbL/Page-chargement.jpg\nhttps://i.postimg.cc/gJs7xkRc/Page-map-2.jpg\nhttps://i.postimg.cc/448MZysB/Page-map1.jpg',
  },
  {
    students: 'LOUIS-THERESE_PICH-SOEUN',
    title: 'NoFace',
    scratch: '',
    figma: '5TwfbjTGiDgCd34tiUb9Wb',
    description:
      'Bienvenue dans le nouveau monde Yume*  où des monstres sèment le chaos. Les humains sont traqués, attaqués et leur identité leur est volée.  Tu incarnes le rôle d’un Sans-Visage. Récupère tous les masques retenus par les Face Eaters. Ces masques vont t’aider à découvrir ta véritable identité. Pour les récupérer, affronte les ennemis se trouvant dans le donjon Brumeux.',
    controls:
      "↑ pour monter, \n↓ pour descendre, \nBarre d'espace pour tirer sur les ennemis.",
    youtube: '',
    screenshots: '',
  },
  {
    students: 'LUBANGI-MUTOKE_ONGOUALA',
    title: "Les Décombres De L'atlantique",
    scratch: '',
    figma: 'DlIcmrNeYZDS3vTDk5Phsm',
    description:
      'Lors d’une croisière en direction du Canada, le bateau connaît un accident en heurtant un iceberg. Le rescapé possède une bonbonne d’oxygène q u’il a récupéré dans les débris, il possède un masque à décharge électrique qu’il a fabriqué avec les anguilles des profondeurs. \nAvec la bonbonne, le rescapé tente de s’en sortir en deviant les stalactites et en détruisant les objets et en cas de contacts avec les stalactites, le rescaper perd des vies, au bout de la 10e, il meurt.',
    controls: '',
    youtube: '',
    screenshots: '',
  },
  {
    students: 'MAZEAU_RICHERT',
    title: '',
    scratch: '',
    figma: 'vwuTNrkJXoU6fx7afEr4jb',
    description: '',
    controls: '',
    youtube: '',
    screenshots: '',
  },
  {
    students: 'NINAUD_UGOLINI',
    title: '',
    scratch: '',
    figma: 'xqkGIeKJC9TOnQtLsJdBxB',
    description: '',
    controls: '',
    youtube: '',
    screenshots: '',
  },
  {
    students: 'RANJARD_SULTAN',
    title: 'The Snake',
    scratch: 791078087,
    figma: 'MsUaOTil5nBf3eMKT0nNuz',
    description:
      'Le but du jeu est d’incarner un serpent qui doit parcourir le plus de métres possible, pour se nourrir il mange des yeux, ceux ci lui donne de la force mais attention certains sont toxiques et donc à éviter. Les yeux comestible lui donne à partir de 3 mangés d’affilés la possibilité d’utiliser un laser. Quand le serpent est touché par des mauvais yeux, il perd une de ses 4 vies.',
    controls:
      "↑ pour monter, \n↓ pour descendre, \nBarre d'espace pour tirer sur les ennemis.",
    youtube: 'https://youtu.be/cQhNromYVIQ',
    screenshots: '',
  },
]

const games = rawGames
  .map((game) => {
    if (
      !game.title ||
      game.title === '' ||
      !game.scratch ||
      game.scratch === '' ||
      !game.description ||
      game.description === '' ||
      !game.controls ||
      game.controls === '' ||
      !game.youtube ||
      game.youtube === ''
    )
      return

    const { title, figma } = game
    const scratch = game.scratch.toString()
    const description = splitString(game.description)
    const controls = splitString(game.controls)
    const youtube = getIdFromYouTubeLink(game.youtube)
    const screenshots = [youtube, ...splitString(game.screenshots)]

    return {
      title,
      figma,
      scratch,
      description,
      controls,
      youtube,
      screenshots,
    }
  })
  .sort(() => Math.random() - 0.5)

console.log('assets/js/data.js > games >', games)

export { games }
