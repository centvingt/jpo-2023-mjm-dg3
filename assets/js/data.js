import { splitString, getIdFromYouTubeLink } from './utils.js'

const rawGames = [
  {
    BINOME: 'ABAKAR_COSIALLS',
    TITRE: 'SHOOT CA',
    'ID SCRATCH (NEUF CHIFFRES)': 794256856,
    'ID FIGMA': 'vdEKzfEWTjPe5DTb3jRj7u',
    DESCRIPTION:
      'vous êtes plongée dans les années 70 une ambiance Miami Vice. Vous incarnez un dauphin qui à pour ennemie des crabes votre but est de tous les dégommer pour reprndre le contrôle de la ville.',
    'COMMANDES DU CLAVIER':
      "↑ pour monter,\n↓ pour descendre,\n→ pour avancer,\n← pour reculer,\nbarre d'espace pour tirer sur les ennemis.",
    'LIEN YOUTUBE FORMAT 4:3': 'https://youtu.be/bl7eL1EacXM',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Alexia ABAKAR\nRaphaël COSIALLS',
    PDF: '',
  },
  {
    BINOME: 'BAZIRE_LEFRANC',
    TITRE: 'FISH & PILLS',
    'ID SCRATCH (NEUF CHIFFRES)': 792348480,
    'ID FIGMA': 'xlNXtG9pXd9JdO8gYGmzRa',
    DESCRIPTION:
      'Vous êtes plongé dans l’univers de Yellow Submarine des Beatles et vous vous trouvez au fond d’un océan coloré. Malheureusement, vous (Molly) croisez beaucoup de poissons tristes. Votre mission est leurs tirer de l’amour dessus afin qu’ils retrouvent leurs beaux sourires. L’objectif est d’éviter de se faire tuer par les poissons malheureux, en leur donnant le « smile » avec les pillules du love. Il faut aller le plus loin possible pour gagner un maximum de point et passer au niveau supérieur.',
    'COMMANDES DU CLAVIER':
      "↑ Pour monter,\n↓ Pour descendre,\n→ Pour avancer,\n← Pour reculer,\nBarre d'espace pour tirer sur les ennemis.",
    'LIEN YOUTUBE FORMAT 4:3': 'https://youtu.be/GMBevmdsqco',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3':
      'https://i.postimg.cc/wMp82NXY/loose.jpg\nhttps://i.postimg.cc/XY7Wt9TV/16.jpg\nhttps://i.postimg.cc/g2SppnW3/d-but.jpg\nhttps://i.postimg.cc/FzVtBKpd/GAMEOVER.jpg\nhttps://i.postimg.cc/JnJCjxBQ/menu.jpg\nhttps://i.postimg.cc/DfrKZChv/nextlever.jpg\nhttps://i.postimg.cc/9fsj4KzM/playagain.jpg',
    NOMS: 'Madeleine BAZIRE\nSuzanne LEFRANC',
    PDF: 'https://drive.google.com/file/d/1Sr4M8bVXXGh72IW1TRGJfJ2rvfxk7Opz/view?usp=share_link',
  },
  {
    BINOME: 'BEKKA_LALANNE',
    TITRE: 'Ink',
    'ID SCRATCH (NEUF CHIFFRES)': 788935190,
    'ID FIGMA': '1u6DhD2KlZ2KfX3ri73pTw',
    DESCRIPTION:
      'Une page blanche. C’est le monde dont vit Ink, le personnage principal. Son objectif ? Encrer tous ceux qui se trouvent sur son passage ! Armé de son stylo, il est déterminé à remplir la feuille de tâche d’encre. Alors aidez-le à accomplir son objectif pour remplir la page ! À vos stylos !\nLe concept du jeu est de toucher les ennemis avec les projectils de notre stylo. Mais il faudra faire attention à ne pas se faire toucher ou à user le réservoir trop rapidement. Plus on touchera d’ennemis, plus le score sera élevé. Si on obtient un score assez élevé, on pourra passer au niveau suivant.',
    'COMMANDES DU CLAVIER':
      "↑ Pour monter,\n↓ Pour descendre,\n→ Pour avancer,\n← Pour reculer,\nBarre d'espace pour tirer sur les ennemis.",
    'LIEN YOUTUBE FORMAT 4:3': 'https://youtu.be/VJcFgpYtULE',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3':
      'https://i.postimg.cc/6q6gBmwc/Jeu-Ink-Sc-ne-1-Bekka-et-Lalanne-jeu-de-tir.jpg\nhttps://i.postimg.cc/Nj2VGTh3/Jeu-Ink-Sc-ne-2-Bekka-et-Lalanne-jeu-de-tir.jpg\nhttps://i.postimg.cc/KYXW1zxR/Jeu-Ink-Sc-ne-3-Bekka-et-Lalanne-jeu-de-tir.jpg\nhttps://i.postimg.cc/KvHwyfW7/Jeu-Ink-Sc-ne-4-Bekka-et-Lalanne-jeu-de-tir.jpg',
    NOMS: 'Inès BEKKA\nIsis LALANNE',
    PDF: '',
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
    PDF: '',
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
    PDF: '',
  },
  {
    BINOME: 'BORDAS_HAMIDI',
    TITRE: 'MICROBE',
    'ID SCRATCH (NEUF CHIFFRES)': 770909946,
    'ID FIGMA': 'vS3SGPYB4FeLGl87pBHb8X',
    DESCRIPTION:
      'Dans la peau d’une cellule immunitaire, le but sera d’esquiver les différents microbes provenant de la fenêtre qui donne sur\nla ville. Celle-ci étant grande ouverte, les bactéries se voient alors frayer leurs chemins dans le salon. Attention à ne pas trop\nse relâcher, le vent peut être plus virulent et permettre aux microbes d’avoir encore plus de vitesse ! Ne vous inquiétez pas,\ncertains objets seront là pour vous aider à tenir !',
    'COMMANDES DU CLAVIER': '↑ Pour monter,\n↓ Pour descendre,',
    'LIEN YOUTUBE FORMAT 4:3':
      'https://www.youtube.com/watch?v=Kwq0cf5STaw&ab_channel=Hou2s',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Romain BORDAS\nHoussine HAMIDI',
    PDF: 'https://drive.google.com/drive/folders/1ZGgLg8O8sUkIsala_DSO8DL8TLVG5-tT',
  },
  {
    BINOME: 'BRUNET_DONINEAUX',
    TITRE: 'UTOPIA',
    'ID SCRATCH (NEUF CHIFFRES)': 793418282,
    'ID FIGMA': '6GzOGjbeiwoCnI1PAed25o',
    DESCRIPTION:
      'Icard est un monde ressemblant à la Terre, à la différence est que celui-ci, est imprégné de magie. Une région de ce monde est néanmoins toujours inexploré car très dangereux, cette région est constitué d’îles flottantes qui se déplacent au grès du vent et abritent des monstres dangereux. Une ancienne légende raconte qu’un explorateur du nom de Standorf fît la plus grosse découverte de l’ancien monde, le plus grand trésors du monde, « La Perle » . Un jeune homme, Jim Hawkins rêve d’aventure, mais Jim a des responsabilités, Jim a perdu ses parents jeune, le laissant lui et sa soeur, seul. La soeur de Jim est très malade, mais il n’a pas assez d’argent pour lui fournir les soins nécessaire. Il décide donc de partir à l’aventure, à la recherche du plus grand trésor du monde, pour trouver l’argent nécessaire à l’achat des soins destinés sa soeur.',
    'COMMANDES DU CLAVIER':
      "↑ Pour monter,\n↓ pour descendre,\n→ Pour avancer,\n← Pour reculer,\nBarre d'espace pour tirer sur les ennemis.",
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Charles BRUNET\nThomas DONINEAUX',
    PDF: 'https://drive.google.com/drive/folders/1iWGOQ1ciElcM5Cs6S2IylT6G_uhvvmB6',
  },
  {
    BINOME: 'CHAN_LUU_NEREE',
    TITRE: "PLYM'S QUEST",
    'ID SCRATCH (NEUF CHIFFRES)': 775892033,
    'ID FIGMA': 'xIRHRk0wLGBaA6XFNBnkLV',
    DESCRIPTION:
      'La perle de vie répand le bien être, la paix et la prospérité des habitants de l’océan. Cette perle qui regorge\nd’une énergie surpuissante attise la curiosité de beaucoup de malfaiteurs. Un groupe de méduses sournoises\nréussit à dérober la précieuse perle de vie. Suite à la disparition de la perle les êtres de l’océan tombèrent dans la\npénombre. C’est ainsi qu’arrive Plym gardienne de l’océan qui aura pour but de récuperer la perle de vie.',
    'COMMANDES DU CLAVIER':
      "↑ Pour monter,\n↓ pour descendre,\n→ Pour avancer,\n← Pour reculer,\nBarre d'espace pour tirer sur les ennemis (méduses).",
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3':
      'https://postimg.cc/gallery/gPZC1R2',
    NOMS: 'Miranda CHAN SIO MOUI\nNancy LUU\nAurélie NÉRÉE',
    PDF: 'https://drive.google.com/file/d/1T1Xz5ezw-ufiARVPCi4QYgV2cQWYYcm4/view?usp=share_link',
  },
  {
    BINOME: 'CHEBBAH_CHRETIEN',
    TITRE: 'RICE ATTACK',
    'ID SCRATCH (NEUF CHIFFRES)': 792348268,
    'ID FIGMA': 'kGI1AOhfH4XABgrOC7WjVb',
    DESCRIPTION:
      'L’objectif du jeu est de survivre le plus longtemps possible, tout en attaquant les ennemis qui arrivent de face (chauves-sousrice) avec les shuriken. Plus vous tué d’ennemies plus vous marquer des points et votre score augmente. Plus le joueur passe de niveaux plus le jeu devient\n compliquer et plus rapide.',
    'COMMANDES DU CLAVIER': '',
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Inès CHEBBAH\nMorgane CHRÉTIEN',
    PDF: '',
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
    PDF: '',
  },
  {
    BINOME: 'COCIELLA_BOUKHATEM',
    TITRE: 'NAKED CHICKEN RUN',
    'ID SCRATCH (NEUF CHIFFRES)': 792343744,
    'ID FIGMA': 'VOg1bJOKjglqy5frCNcTG6',
    DESCRIPTION: '',
    'COMMANDES DU CLAVIER':
      "↑ Pour monter.\n↓ pour descendre.\nBarre d'espace pour tirer sur les ennemis.",
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Sarah BOUKHATEM\nBrune COCIELLA',
    PDF: '',
  },
  {
    BINOME: 'DAVID_MOHAMMAD',
    TITRE: 'SHADOW',
    'ID SCRATCH (NEUF CHIFFRES)': 793427152,
    'ID FIGMA': '403w16tI1UHOhtjj0JLQQp',
    DESCRIPTION:
      'Eccho est un esprit à la recherche de son âme. Celle-ci a été dérobée par des esprits de lumière. Cachant sa colère derrière son masque, Eccho se lance dans une chasse sans merci contre ces petites boules diaboliques. Il est prêt à tout, même à traverser les ténèbres pour retrouver son âme volée. \nAide-le à vaincre ses ennemis et à retrouver son bien le plus précieux.',
    'COMMANDES DU CLAVIER':
      "↑ Pour monter,\n↓ pour descendre,\n→ Pour avancer,\n← Pour reculer,\nBarre d'espace pour tirer sur les ennemis.",
    'LIEN YOUTUBE FORMAT 4:3': 'https://youtu.be/Q9Fk9YW1Gr4',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3':
      'https://i.postimg.cc/SKdtXCnR/FOND1.jpg\nhttps://i.postimg.cc/x1KZ2WYK/FOND2.jpg\nhttps://i.postimg.cc/xCdpL8mR/GAMEOVER.jpg\nhttps://i.postimg.cc/HxPZzm4C/PLAY.jpg\nhttps://i.postimg.cc/wBgGT0Tn/START.jpg',
    NOMS: 'Maïka DAVID\nHadia MOHAMMAD',
    PDF: 'https://drive.google.com/file/d/1YurfF1gKqWbbmVMJVhujKRuJM-m6dtXr/view?usp=share_link',
  },
  {
    BINOME: 'DELANSORNE_DUHAMEL_RIBOUCHON',
    TITRE: 'ColorMeow',
    'ID SCRATCH (NEUF CHIFFRES)': 794451426,
    'ID FIGMA': 'KmnGKja2wfKB9kz57la1Fk',
    DESCRIPTION:
      "Il s'agit de la création d'un jeu indépendant. Nous utilisons la technique d'impression risographie.\nTout gris, tout triste et tout grincheux, un petit chat seul sur son territoire terne, est envahi d'oiseaux et de magie ! Ils sont en couleur. Il décide alors avec son élastique à cheveux, de tirer sur des oiseaux qui laissent tomber des plumes colorées. Il partira alors à la recherche des plus belles couleurs du monde.",
    'COMMANDES DU CLAVIER':
      "↑ pour monter, \n↓ pour descendre, \nBarre d'espace pour tirer sur les ennemis,\nFaites attention aux obstacles qui vous feront perdre votre jauge d'enthousiasme et votre vie.",
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Caroline DELANSORNE\nLena DUHAMEL\nMatthie RIBOUCHON',
    PDF: 'https://drive.google.com/file/d/1H3FKy9arqGGva-8V9e_2UosuewICcbfh/view?usp=share_link',
  },
  {
    BINOME: 'EGUCHI_LAURENT',
    TITRE: 'ANYBORG',
    'ID SCRATCH (NEUF CHIFFRES)': 790995366,
    'ID FIGMA': 'n5uoMd7SxCQbxb4IACGDe0',
    DESCRIPTION:
      'Anyborg est un jeu vidéo en 2D du genre Shoot’em up où le joueur devra incarner un “aniborg” (chasseur de prime mi-animal mi-cyborg), dont la mission est de renverser un dictateur et son armée de robots. Ce jeu se veut comme un hommage au cinéma de science-fiction ayant marqué le XXème siècle.',
    'COMMANDES DU CLAVIER': "Barre d'espace : sauter\nBouton DEATH : tirer",
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Kyoka EGUCHI\nEnzo LAURENT',
    PDF: '',
  },
  {
    BINOME: 'FENGAROL_OLIVERO_LE-DU',
    TITRE: 'Rambaussice',
    'ID SCRATCH (NEUF CHIFFRES)': 792387024,
    'ID FIGMA': 'kW3se4piwqRPoWzoFNMJSa',
    DESCRIPTION:
      "Après l'apparition d'un virus mortel touchant exclusivement les éléments végétaux, notre héros et soldat Rambaussice sera envoyé en mission dans un vieux dinner américain afin d'éradiquer cette nouvelle menace.",
    'COMMANDES DU CLAVIER':
      "→ Pour avancer,\n← Pour reculer,\nBarre d'espace pour tirer du ketchup",
    'LIEN YOUTUBE FORMAT 4:3': 'https://youtu.be/Oe4yUMT4xFo',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Owen FENGAROL\nClément OLIVERO\nJustine LE DÛ',
    PDF: 'https://drive.google.com/file/d/1xG4vTCkhQwykWwCB-J5vmZp7KFOzoJ09/view?usp=sharing',
  },
  {
    BINOME: 'FOUCHONNERET_HADDAD_MARCIANO',
    TITRE: 'Cryptonight',
    'ID SCRATCH (NEUF CHIFFRES)': 794444689,
    'ID FIGMA': 'PMkHfI0JNpZ36N1jndKojh',
    DESCRIPTION:
      'Vous arrivez dans un monde dystopique dans lequel les crypto monnaies deviennent de plus en plus importantes, vous incarnez un résistant riche qui se fait poursuivre par des traders de cryptomonnaies acharnés à l’enrôler.',
    'COMMANDES DU CLAVIER':
      "↑ pour monter, \n↓ pour descendre, \nBarre d'espace pour tirer sur les ennemis",
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3':
      'https://i.postimg.cc/RZknwd7T/Sratch-1.jpg\nhttps://i.postimg.cc/9fywb91H/Sratchgameover.jpg\nhttps://i.postimg.cc/0jXCvSLH/Frame-2.jpg\nhttps://i.postimg.cc/KYtQTRMR/Frame-3.jpg',
    NOMS: 'Hugo FOUCHONNERET\nRaphael HADDAD\nShani MARCIANO',
    PDF: '',
  },
  {
    BINOME: 'GENDRON_VITURAT',
    TITRE: 'Slimy Jimy',
    'ID SCRATCH (NEUF CHIFFRES)': 792380692,
    'ID FIGMA': 'unww5VsL5c078gi1zts0e3',
    DESCRIPTION:
      "Un slime n’ayant pas le droit à l’erreur, doit aller libérer les siens dans un monde sans dessus dessous à en perdre la tête ! Alors partez à l’aventure et sauvez vos semblables.\nAidez le slime à récupérer ses munissions (glaçons, feuilles, slime et boule de feu) afin d’en faire ses armes pour combattre ses ennemis. Dans le version Scratch, nous n'avons développé qu'un seul aspect du jeu. Il n'y a donc pour l'instant qu'un seul des 4 fonds et pas de munissions à récupérer car c'est grâce à cela que le monde change d'aspect.",
    'COMMANDES DU CLAVIER':
      "Personnage principal reste immobile,\nBarre d'espace : envoi missiles pour tuer les ennemis,\n↑ Monter,\n↓ Descendre.",
    'LIEN YOUTUBE FORMAT 4:3': 'https://youtu.be/HyoHov4mZEQ',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Yohann GENDRON\nCharlotte VITURAT',
    PDF: 'https://drive.google.com/file/d/1I3B_pjLkW_PURSW4hTQpovWhkB4ubi7F/view?usp=share_link',
  },
  {
    BINOME: 'GODINEAU_LE-GRUMELEC',
    TITRE: "Val'zar",
    'ID SCRATCH (NEUF CHIFFRES)': 794474686,
    'ID FIGMA': '5JTVUGjE7cneny4DeDzaiI',
    DESCRIPTION: '',
    'COMMANDES DU CLAVIER':
      "↑ Pour monter,\n↓ Pour descendre,\n→ Pour avancer,\n← Pour reculer,\nBarre d'espace pour tirer sur les ennemis.",
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Anouck GODINEAU\nGaël LE-GRUMELEC',
    PDF: '',
  },
  {
    BINOME: 'GOURLAIN_OUADY',
    TITRE: 'StolenDreams',
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': 'xCz6iXXcYF1rMMQ1n0qfNN',
    DESCRIPTION:
      'Tobs est un survivant de la guerre des rêves, depuis un siècle, il parcourt la planète Wobis pour retrouver les siens et donc récupérer sa planète qui est actuellement conquise par la communauté des Warbs (les voleurs de rêves). Il devra les affronter tout au long de son aventure, à travers ses combats, il pourra récupérer des rêves perdus et les stocker pour ensuite les redistribuer à sa communauté et reconquérir leur terre.',
    'COMMANDES DU CLAVIER': '',
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Killian GOURLAIN\nGuillaume OUADY',
    PDF: 'https://drive.google.com/file/d/1HiW6wgD-mZySyKQXhFMN8fIf-qE6u1EN/view?usp=share_link',
  },
  {
    BINOME: 'HURTREL_NACKI',
    TITRE: '',
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': 'GnYODZXtrOl2kjoe8Vy54M',
    DESCRIPTION: '',
    'COMMANDES DU CLAVIER':
      "↑ pour monter,\n↓ pour descendre,\n→ pour avancer,\n← pour reculer,\nbarre d'espace pour tirer sur les ennemis.",
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Quentin HURTREL\nMarc-Lewis NACKI',
    PDF: '',
  },
  {
    BINOME: 'LANG_VALACH',
    TITRE: 'Roof Cake Party',
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': 'bzfiyG3BAQienizUeMw5ok',
    DESCRIPTION:
      "Jeu ou l'on incarne des patisseries en cavale sur les toits de Paris qui se sont echappée d'une boulangerie après avoir prit vie. ( un. croissant, un muffin et une tarte aux fraises ). Elles sont poursuivies par le chat du boulanger ainsi que des chauve souris des ténèbres ( engagées par le chat ).",
    'COMMANDES DU CLAVIER':
      'perso 1 : E pour tirer espace pour sauter perso 2: A pour tirer espace pour sauter perso 3 : Z pour tirer espace pour sauter',
    'LIEN YOUTUBE FORMAT 4:3': 'https://youtu.be/iGpONqu8KzI',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3':
      'https://i.postimg.cc/K8WsWHKz/Sans-titre-3.png \nhttps://i.postimg.cc/VspvYjJV/2.png\nhttps://i.postimg.cc/B6x341kd/4.png\nhttps://i.postimg.cc/wBLZmY2N/Sans-titre-1.png',
    NOMS: 'Léna LANG\nAlexandra VALACH',
    PDF: 'https://drive.google.com/drive/folders/1hEvUo7nEx-Gy_f1Iyl8CbprYDv5SBQeL',
  },
  {
    BINOME: 'LEMARIE_ROSSIGNOL',
    TITRE: 'POW',
    'ID SCRATCH (NEUF CHIFFRES)': 790992658,
    'ID FIGMA': 'WSyO3XlSdcNHYqddpF0A4N',
    DESCRIPTION:
      'Une plante nommée Pow est à la recherche de sa famille. Pour les retrouver, elle doit traverser plusieurs mondes en évitant différents ennemis, elle peut les éliminer à l’aide de ses feuilles tranchantes.\nCependant, si un ennemi la touche, elle perd un pétale.\nPuis à un moment du jeux elle tombe dans un trou noir, la phrase « mettez vos lunettes » apparait. Elle atterrit alors dans le centre de la terre, un endroit où les deux mondes se superposent, les joueurs auront une visibilité réduite et devront alors mettre les lunettes afin de voir les ennemis ainsi que ce deuxième monde.',
    'COMMANDES DU CLAVIER':
      '↑ pour monter, \n↓ pour descendre, \ntouche espace pour tirer sur les ennemis',
    'LIEN YOUTUBE FORMAT 4:3': 'https://youtu.be/QSr2pZEhuf0',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3':
      'https://i.postimg.cc/rmTFyvpq/Page-play.jpg\nhttps://i.postimg.cc/7hQQNsmp/Page-aie.jpg\nhttps://i.postimg.cc/hvG5TWbL/Page-chargement.jpg\nhttps://i.postimg.cc/gJs7xkRc/Page-map-2.jpg\nhttps://i.postimg.cc/448MZysB/Page-map1.jpg',
    NOMS: 'Lou-Ann LEMARIE\nSyndel ROSSIGNOL',
    PDF: 'https://drive.google.com/file/d/1Tr9G2Y46pav1s7Wsfhl6vFiSnxafUsUT/view?usp=share_link',
  },
  {
    BINOME: 'LOUIS-THERESE_PICH-SOEUN',
    TITRE: 'NoFace',
    'ID SCRATCH (NEUF CHIFFRES)': 787597744,
    'ID FIGMA': '5TwfbjTGiDgCd34tiUb9Wb',
    DESCRIPTION:
      'Bienvenue dans le nouveau monde Yume  où des monstres sèment le chaos. Les humains sont traqués, attaqués et leur identité leur est volée.  Tu incarnes le rôle d’un Sans-Visage. Récupère tous les masques retenus par les Face Eaters. Ces masques vont t’aider à découvrir ta véritable identité. Pour les récupérer, affronte les ennemis se trouvant dans le donjon Brumeux.',
    'COMMANDES DU CLAVIER':
      "↑ pour monter, \n↓ pour descendre, \nBarre d'espace pour tirer sur les ennemis.",
    'LIEN YOUTUBE FORMAT 4:3': 'https://youtu.be/e1QUudmnyo4',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Camile LOUIS-THERESE\nMarie PICH-SOEUN',
    PDF: 'https://drive.google.com/drive/folders/1IENJGukqtqT3cTX5WmqDdNP-laLFVpfx',
  },
  {
    BINOME: 'LUBANGI-MUTOKE_ONGOUALA',
    TITRE: "Les Décombres De L'atlantique",
    'ID SCRATCH (NEUF CHIFFRES)': 792306499,
    'ID FIGMA': 'DlIcmrNeYZDS3vTDk5Phsm',
    DESCRIPTION:
      'Lors d’une croisière en direction du Canada, le bateau connaît un accident en heurtant un iceberg. Le rescapé possède une bombonne d’oxygène qu’il a récupéré dans les débris, il possède un masque à décharges électriques qu’il a fabriqué avec les anguilles des profondeurs. \nAvec la bombonne, le rescapé tente de s’en sortir en deviant les stalactites et en détruisant les objets et en cas de contacts avec les stalactites, le rescapé perd des vies, au bout de la 10ème, il meurt.',
    'COMMANDES DU CLAVIER':
      "↑ Pour monter,\n↓ pour descendre,\n→ Pour avancer,\n← Pour reculer,\nBarre d'espace pour tirer sur les ennemis.",
    'LIEN YOUTUBE FORMAT 4:3': 'https://youtu.be/OEUHreI1uqU',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Karamatou LUBANGI-MUTOKE\nYanis ONGOUALA',
    PDF: '',
  },
  {
    BINOME: 'MAZEAU_RICHERT',
    TITRE: "DRIPMAST'R",
    'ID SCRATCH (NEUF CHIFFRES)': '',
    'ID FIGMA': 'vwuTNrkJXoU6fx7afEr4jb',
    DESCRIPTION:
      'Contrôle le Drip Master dans ce nouveau shoot em up ! Personnalise ton Drip master, puis balade toi dans les rues en quête de nouvelles pièces à mettre.\nPour ça, il va falloir saper les méchants hypebeast qui traînent dans la rue à la sortie de la nouvelle collection Balenciaga x Supreme',
    'COMMANDES DU CLAVIER':
      "↑ Pour monter,\n↓ pour descendre,\nBarre d'espace pour tirer sur les ennemis.",
    'LIEN YOUTUBE FORMAT 4:3': '',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Tom MAZEAU\nLise RICHERT',
    PDF: '',
  },
  {
    BINOME: 'NINAUD_UGOLINI',
    TITRE: 'Pipo & his alter ego',
    'ID SCRATCH (NEUF CHIFFRES)': 794472659,
    'ID FIGMA': 'xqkGIeKJC9TOnQtLsJdBxB',
    DESCRIPTION:
      'Pipo est jovial et toujours souriant, et ce, même quand ses traumatismes de guerre refont sur- face et qu’il laisse son alter ego prendre le contrôle.\nLorsque cela arrive, attention à ne pas croiser son chemin: ami.es et collègues deviennent tous des ennemi.es.',
    'COMMANDES DU CLAVIER':
      "← Pour viser tout droit\n→ Pour viser vers le haut\n↑ Pour sauter\nBarre d'espace pour tirer",
    'LIEN YOUTUBE FORMAT 4:3': 'https://youtu.be/y8pHiLZ_fWg',
    'LIENS SECONDAIRES FACULTATIFS YOUTUBE ET POSTIMAGE FORMAT 4:3': '',
    NOMS: 'Mona NINAUD\nTatiana UGOLINI',
    PDF: '',
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
    PDF: '',
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
 * @property {[string]} authors
 * @property {string} pdfLink
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
    const authors = splitString(rawGame['NOMS'])
    const pdfLink = rawGame['PDF']

    return {
      title,
      figmaId,
      scratchId,
      descriptionParagraphs,
      controls,
      youtubeId,
      screenshots,
      authors,
      pdfLink,
    }
  })
  .filter((game) => game)
  .sort(() => Math.random() - 0.5)

console.log('assets/js/data.js > games >', games)

export { games }
