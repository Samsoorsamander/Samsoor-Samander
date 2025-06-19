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
    id: `games-${Date.now()}`,
    name: "Games space",
    imgSrc: require("../assets/img/games space1.png"),
    gitURL: "https://games-space-g5lg.vercel.app/",
    demo: "https://games-space-g5lg.vercel.app/",
  },
  {
    id: `issue-tracker-${Date.now()}`,
    name: "Issue tracker",
    imgSrc: require("../assets/img/issue-tracker (2).png"),
    gitURL: "https://github.com/samsoorsamander/issue-tracker",
    demo: "https://issue-tracker-phi-black.vercel.app/",
  },
  {
    id: `DevSync-${Date.now()}`,
    name: "DevSync for develpoers",
    imgSrc: require("../assets/img/Dev-sync.png"),
    gitURL: "https://github.com/samsoorsamander",
    demo: "https://devsyncdotdev.vercel.app/",
  },
  {
    id: `Gym-tracker-${Date.now()}`,
    name: "Gym tribe tracker",
    imgSrc: require("../assets/img/gym.png"),
    gitURL: "https://github.com/samsoorsamander",
    demo: "",
  },
  {
    id: `AI-therapist-${Date.now()}`,
    name: "AI Therapist",
    imgSrc: require("../assets/img/AI-therapist.png"),
    gitURL: "https://github.com/samsoorsamander",
    demo: "",
  },
  {
    id: `camera-app-${Date.now()}`,
    name: "Camera app",
    imgSrc: require("../assets/img/camera.jpg"),
    gitURL: "https://github.com/samsoorsamander",
    demo: "https://games-space-g5lg.vercel.app/",
  },
  {
    id: `openai-${Date.now()}`,
    name: "S0",
    imgSrc: require("../assets/img/S02.png"),
    gitURL: "https://github.com/samsoorsamander",
    demo: "https://games-space-g5lg.vercel.app/",
  },
  {
    id: `plantly-${Date.now()}`,
    name: "Keep your plant healthy",
    imgSrc: require("../assets/img/plantly.png"),
    gitURL: "https://github.com/samsoorsamander/Plantly",
  },
  {
    id: `vidly-${Date.now()}`,
    name: "Vidly API",
    imgSrc: require("../assets/img/vidly.jpeg"),
    gitURL: "https://github.com/samsoorsamander/vidly",
  },
  {
    id: `socialmedia-${Date.now()}`,
    name: "Social Media App",
    imgSrc: SocialMedia,
    gitURL: "https://github.com/samsoorsamander",
    demo: "https://games-space-g5lg.vercel.app/",
  },
  {
    id: `portfoliofirebase-${Date.now()}`,
    name: "Portfolio UI Fireabse",
    imgSrc: PortfolioFirebase,
    gitURL: "https://github.com/samsoorsamander",
    demo: "https://games-space-g5lg.vercel.app/",
  },
];
