import React, { useState } from "react";
import { motion } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import { ProjectsData } from "../utils/helper";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaMobileAlt,
  FaDesktop,
} from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex items-center justify-center flex-col gap-12 my-12"
    >
      {/* title */}
      <div className="w-full flex items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Projects
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* main content - Removed AnimatePresence here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
        {ProjectsData &&
          ProjectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-lg shadow-lg h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="h-48 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          className="w-full h-full object-cover"
          src={project.imgSrc}
          alt={project.name}
        />
      </div>

      {/* Project Info (always visible) */}
      <div className="p-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {project.description || "A fantastic project with great features."}
        </p>

        <div className="flex justify-between items-center">
          {/* Project Type */}
          <div className="flex items-center text-xs">
            {project.type === "mobile" ? (
              <>
                <FaMobileAlt className="mr-1" />
                <span>Mobile Project</span>
              </>
            ) : (
              <>
                <FaDesktop className="mr-1" />
                <span>Web Project</span>
              </>
            )}
          </div>

          {/* Links */}
          <div className="flex space-x-3">
            {project.gitURL && (
              <a
                href={project.gitURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-primary transition-colors"
                title="View Code"
              >
                <FaGithub />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-secondary transition-colors"
                title="Live Demo"
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Hover Overlay with Blur Effect */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 backdrop-blur-md bg-black/60 flex flex-col justify-center items-center p-6 text-center"
        >
          <h3 className="text-xl font-bold mb-4 text-white">{project.name}</h3>
          <p className="mb-6 text-sm text-gray-200">
            {project.description ||
              "Click the links below to explore this project."}
          </p>

          {/* Project Type in Overlay */}
          <div className="mb-6 flex items-center text-white">
            {project.type === "mobile" ? (
              <>
                <FaMobileAlt className="mr-2" />
                <span>Mobile Application</span>
              </>
            ) : (
              <>
                <FaDesktop className="mr-2" />
                <span>Web Application</span>
              </>
            )}
          </div>

          <div className="flex space-x-4">
            {project.gitURL && (
              <a
                href={project.gitURL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 px-4 py-2 rounded-full flex items-center hover:bg-gray-200 transition-colors"
              >
                <FaGithub className="mr-2" /> Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 px-4 py-2 rounded-full flex items-center hover:bg-gray-200 transition-colors"
              >
                <FaExternalLinkAlt className="mr-2" /> Demo
              </a>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;
