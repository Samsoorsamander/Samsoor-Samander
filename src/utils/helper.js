import {
  FaDiagramProject,
  FaEnvelope,
  FaXTwitter,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser,
  FaInstagram,
} from "react-icons/fa6";
import {
  FreshJuiceUI,
  PixabayClone,
  PortfolioFirebase,
  SocialMedia,
} from "../assets";

export const Socials = [
  {
    id: `xtwitter-${Date.now()}`,
    Icon: FaXTwitter,
    uri: "https://x.com/ssamDev",
    color: "#1877F2",
  },
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uri: "https://linkedin.com/in/SamsoorHananzoi",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uri: "https://github.com/samsoorsamander",
    color: "#fff",
  },
  {
    id: `youtube-${Date.now()}`,
    Icon: FaInstagram,
    uri: "https://instagram.com/samsoorsamander",
    color: "#ff0000",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  {
    id: `Gym tribe tracker-${Date.now()}`,
    name: "Gym Tribe Tracker",
    imgSrc: require("../assets/img/gym.png"),
    gitURL: "https://github.com/samsoorsamander",
    demo: "https://gym-tribe-tracker.vercel.app/",
    description:
      "Fitness application that helps users track workouts, set goals, and connect with a community. Includes progress analytics and exercise libraries.",
    type: "web",
  },
  {
    id: `games-${Date.now()}`,
    name: "Games Space",
    imgSrc: require("../assets/img/games space1.png"),
    gitURL: "https://games-space-g5lg.vercel.app/",
    demo: "https://games-space-g5lg.vercel.app/",
    description:
      "A comprehensive gaming platform featuring curated collections, user reviews, and game discovery. Built with modern web technologies for seamless browsing experience.",
    type: "web",
  },

  {
    id: `DevSync-${Date.now()}`,
    name: "DevSync for Developers",
    imgSrc: require("../assets/img/Dev-sync.png"),
    gitURL: "https://github.com/samsoorsamander",
    demo: "https://devsyncdotdev.vercel.app/",
    description:
      "A developer collaboration platform that syncs code, tasks, and communication in one place. Perfect for remote teams working on complex projects.",
    type: "web",
  },

  {
    id: `AI-therapist-${Date.now()}`,
    name: "AI Therapist",
    imgSrc: require("../assets/img/AI-therapist.png"),
    gitURL: "https://github.com/samsoorsamander",
    demo: "",
    description:
      "Mental health companion using natural language processing to provide therapeutic conversations and mindfulness exercises.",
    type: "web",
  },
  {
    id: `Wanderlust-${Date.now()}`,
    name: "Wanderlust",
    imgSrc: require("../assets/img/Wanderlust.png"),
    gitURL: "https://github.com/samsoorsamander",
    demo: "https://wanderlust-samsoors-projects.vercel.app/",
    description:
      "Travel planning application that helps users discover destinations, create itineraries, and share travel experiences with a community.",
    type: "web",
  },
  {
    id: `issue-tracker-${Date.now()}`,
    name: "Issue Tracker",
    imgSrc: require("../assets/img/issue-tracker (2).png"),
    gitURL: "https://github.com/samsoorsamander/issue-tracker",
    demo: "https://issue-tracker-phi-black.vercel.app/",
    description:
      "A productivity tool for development teams to track, manage, and resolve project issues efficiently. Features real-time updates and collaborative workflows.",
    type: "web",
  },
  {
    id: `camera-app-${Date.now()}`,
    name: "Camera App",
    imgSrc: require("../assets/img/camera.jpg"),
    gitURL: "https://github.com/samsoorsamander",
    demo: "",
    description:
      "Mobile camera application with advanced filters, editing tools, and social sharing capabilities. Built with React Native for cross-platform performance.",
    type: "mobile",
  },
  {
    id: `openai-${Date.now()}`,
    name: "S0",
    imgSrc: require("../assets/img/S02.png"),
    gitURL: "https://github.com/samsoorsamander",
    demo: "",
    description:
      "AI-powered personal assistant that helps with productivity, scheduling, and information retrieval using natural language commands.",
    type: "mobile",
  },
  {
    id: `plantly-${Date.now()}`,
    name: "Keep Your Plant Healthy",
    imgSrc: require("../assets/img/plantly.png"),
    gitURL: "https://github.com/samsoorsamander/Plantly",
    demo: "",
    description:
      "Plant care companion that provides watering reminders, growth tracking, and plant identification through image recognition.",
    type: "mobile",
  },
  {
    id: `vidly-${Date.now()}`,
    name: "Vidly API",
    imgSrc: require("../assets/img/vidly.jpeg"),
    gitURL: "https://github.com/samsoorsamander/vidly",
    demo: "",
    description:
      "RESTful API service for video rental applications. Features user authentication, movie catalog management, and rental processing.",
    type: "web",
  },
  {
    id: `socialmedia-${Date.now()}`,
    name: "Social Media App",
    imgSrc: SocialMedia,
    gitURL: "https://github.com/samsoorsamander",
    demo: "",
    description:
      "Full-stack social networking platform with real-time posts, comments, and user connections. Built with modern authentication and data security.",
    type: "web",
  },
  {
    id: `portfoliofirebase-${Date.now()}`,
    name: "Portfolio UI Firebase",
    imgSrc: PortfolioFirebase,
    gitURL: "https://github.com/samsoorsamander",
    demo: "",
    description:
      "Interactive portfolio website with Firebase backend for dynamic content management. Showcases projects with smooth animations and responsive design.",
    type: "web",
  },
];
