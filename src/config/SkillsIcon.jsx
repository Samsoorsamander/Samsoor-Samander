import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faHtml5,
  faCss3Alt,
  faReact,
  faNodeJs,
  faGithub,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { SiTypescript, SiMongodb, SiOracle } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  {
    name: "JavaScript",
    icon: <FontAwesomeIcon icon={faJs} />,
    color: "text-yellow-400 shadow-yellow-400",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "text-blue-400 shadow-blue-400",
  },
  {
    name: "HTML",
    icon: <FontAwesomeIcon icon={faHtml5} />,
    color: "text-orange-500 shadow-orange-500",
  },
  {
    name: "CSS",
    icon: <FontAwesomeIcon icon={faCss3Alt} />,
    color: "text-blue-500 shadow-blue-500",
  },
  {
    name: "React",
    icon: <FontAwesomeIcon icon={faReact} />,
    color: "text-cyan-400 shadow-cyan-400",
  },
  {
    name: "React Native",
    icon: <FontAwesomeIcon icon={faReact} />,
    color: "text-blue-300 shadow-blue-300",
  },
  {
    name: "Expo",
    icon: <FontAwesomeIcon icon={faReact} />,
    color: "text-purple-400 shadow-purple-400",
  },
  {
    name: "Node.js",
    icon: <FontAwesomeIcon icon={faNodeJs} />,
    color: "text-green-500 shadow-green-500",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-400 shadow-green-400",
  },
  {
    name: "Oracle APEX",
    icon: <SiOracle />,
    color: "text-red-400 shadow-red-400",
  },
  {
    name: "Git",
    icon: <FontAwesomeIcon icon={faGitAlt} />,
    color: "text-orange-400 shadow-orange-400",
  },
  {
    name: "GitHub",
    icon: <FontAwesomeIcon icon={faGithub} />,
    color: "text-white shadow-gray-300",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative min-h-screen py-20">
      <div className="relative flex justify-center flex-wrap gap-12">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-full transition duration-300"
            animate={{
              y: [0, -15, 0], // Slight bounce
              x: [0, 5, -5], // Tiny side movement
              rotate: [-5, 5, -5], // Gentle tilt
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 4,
              ease: "easeInOut",
              delay: index * 0.3, // Staggered effect
            }}
            whileHover={{ scale: 1.2 }}
          >
            <div className={`text-5xl ${skill.color} drop-shadow-lg`}>
              {skill.icon}
            </div>
            <p className="text-white text-center mt-2 text-lg">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
