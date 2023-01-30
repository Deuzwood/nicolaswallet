import { Project } from '../interfaces/project';

export const projects: Project[] = [
  {
    date: '2023-01-12T00:00:00.000Z',
    tags: ['angular', 'tailwindcss'],
    maintained: true,
    name: 'Ce site',
    description: 'Ce site réalisé avec Angular, TailwindCSS.',
    links: ['https://nicolaswallet.fr/'],
  },
  {
    date: '2023-02-01T00:00:00.000Z',
    tags: ['angular', 'tailwindcss', 'firebase', 'crowdin'],
    maintained: true,
    name: 'La meute',
    description:
      'Web app, "Le quizz de la meute" réalisé avec Angular, TailwindCSS et Firebase. Utilisation de crowdin pour la traduction.',
    links: ['https://lameute.web.app/'],
  },
  {
    date: '2019-09-01T00:00:00.000Z',
    tags: ['nodejs', 'Express', 'ejs', 'bootstrap', 'sass'],
    maintained: false,
    name: 'Site perso',
    description:
      'Ce site (une version plus ancienne) réalisé avec nodejs, view engine EJS, bootstrap, sass et hébergé sur Heroku.',
    links: ['https://nicolas-wallet.herokuapp.com/'],
  },
  {
    date: '2020-06-01T00:00:00.000Z',
    tags: ['nodejs', 'ejs', 'threejs', 'socket.io', 'ulco'],
    maintained: false,
    name: 'Flight Fighter',
    description:
      'Jeu avec Three.JS et Socket.io(). Jeu de combat arcade aérien.',
    links: [],
  },
  {
    date: '2020-12-01T00:00:00.000Z',
    tags: ['bootstrap', 'indexeddb'],
    maintained: false,
    name: 'To Do List',
    description: 'Simple to do list avec IndexedDB .',
    links: ['https://deuzwood.github.io/ToDoList/'],
  },
  {
    date: '2021-01-01T00:00:00.000Z',
    tags: [
      'nodejs',
      'api decathlon',
      'api google',
      'netlify',
      'heroku',
      'ulco',
    ],
    maintained: false,
    name: 'VitAgility',
    description: 'Projet du module agile. Groupe de 4 sur 3 jours ',
    links: ['https://github.com/HuyghesAntoine/vitagility'],
  },
  {
    date: '2021-06-01T00:00:00.000Z',
    tags: ['mongodb', 'react', 'api spotify', 'netlify', 'ulco'],
    maintained: false,
    name: 'Soundify',
    description:
      "Réseau Social basé sur l'API de Spotify. Similaire à Soundcloud, vous pouvez partager vos playlists, vos titres préférés, vos artistes préférés, suivre vos amis, et commenter ou réagir à leurs publications. Groupe de 4 sur 3 semaines.",
    links: ['https://sound-ify.netlify.app/'],
  },
  {
    date: '2020-03-01T00:00:00.000Z',
    tags: ['api chess.com'],
    links: ['https://github.com/Deuzwood/stats_stream_chess'],
    maintained: false,
    name: 'Chess Stats',
    description:
      'Page Web qui affiche vos statitiques (elo : win / loss / draw) de Chess.com , depuis toujours ou depuis le lancement de la page. (Outils Streamer)',
  },
  {
    date: '2020-04-01T00:00:00.000Z',
    tags: ['nodejs', 'ejs', 'threejs', 'socket.io', 'ulco'],
    links: ['https://github.com/Deuzwood/vroom'],
    maintained: false,
    name: 'Vroom',
    description:
      'Petit jeu de voiture avec Three.JS et Socket.io(). Il est aussi possible de créer ses propres cartes via un éditeur, et chaque carte dispose d’un salon afin de pouvoir jouer avec ses amis.',
  },
  {
    date: '2021-09-01T00:00:00.000Z',
    tags: ['react'],
    links: [
      'https://ndlc.netlify.app/',
      'https://play.google.com/store/apps/details?id=fr.ndlc.twa&hl=fr_FR&gl=FR',
    ],
    maintained: false,
    name: 'nDLC',
    description: 'Application de gestion des DLCs.',
  },
  {
    date: '2019-10-01T00:00:00.000Z',
    tags: ['nodejs', 'alexaskill'],
    links: [],
    maintained: false,
    name: 'Velin Calais',
    description:
      "Application (Skill) pour l'assistant connecté Amazon Alexa. L'application permet de connaître le nombre de vélos et de places disponibles par station.",
  },
  {
    date: '2022-02-01T00:00:00.000Z',
    tags: ['vuejs', 'firebase', 'ulco'],
    links: [
      'https://brainfast-application.web.app/#/',
      'https://play.google.com/store/apps/details?id=app.web.brainfast_application.twa',
    ],
    maintained: false,
    name: 'Brain Fast',
    description: 'Application VueJS',
  },
  {
    date: '2021-06-01T00:00:00.000Z',
    tags: ['python', 'yolo', 'opencv', 'tensorflow', 'keras', 'ulco'],
    links: ['https://github.com/Deuzwood/minimap-analyser'],
    maintained: false,
    name: 'Minimap Analyser',
    description:
      'Application Python qui permet de détecter les unités sur la minimap d’un jeu vidéo. (League of Legends). Nous avons utilisé YOLOv3 pour la détection, entraîné sur un dataset de 6000 images. Le dataset a été créé grâce à OpenCV. Ce projet a été réalisé en binôme.',
  },
  {
    date: '2023-01-30T00:00:00.000Z',
    tags: ['wcag 2.2', 'accessibility', 'python'],
    links: ['https://deuzwood.github.io/small-color-work/'],
    maintained: true,
    name: 'Small Color Work',
    description:
      'Script Python qui permet de connaître la meilleure couleur pour un texte en fonction de la couleur de fond selon une liste de couleurs. Les données sont disponibles depuis un page web, afin de constater les résultats. Réalisé initialement en quelques heures pour la curiosité.',
  },
];
