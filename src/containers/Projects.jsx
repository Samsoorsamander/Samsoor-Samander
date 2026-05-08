import React from "react";
import { motion } from "framer-motion";
import { ProjectsData } from "../utils/helper";
import { SectionTitle } from "../components";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaMobileAlt,
  FaDesktop,
} from "react-icons/fa";

const Projects = () => {
  // Keep desktop projects first so recruiters see core business apps immediately.
  const orderedProjects = [...ProjectsData].sort((a, b) => {
    if (a.type === "desktop" && b.type !== "desktop") return -1;
    if (a.type !== "desktop" && b.type === "desktop") return 1;
    return 0;
  });

  return (
    <section
      id="projects"
      className="flex items-center justify-center flex-col gap-12 my-16"
    >
      <SectionTitle title="Featured Projects" subtitle="Portfolio" />

      {/* Highlighted label to call attention to pinned desktop projects. */}
      <div className="w-full px-4">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-xs sm:text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Desktop Apps Featured First
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
        {orderedProjects &&
          orderedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="relative overflow-hidden rounded-2xl h-full glass-card border border-white/10"
    >
      <div className="h-48 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full object-cover"
          src={project.imgSrc}
          alt={project.name}
        />
      </div>

      <div className="p-5 text-white">
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
            ) : project.type === "desktop" ? (
              <>
                <FaDesktop className="mr-1" />
                <span>Desktop Project</span>
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

      {/* Static gradient glow keeps cards modern without extra complexity. */}
      <div className="pointer-events-none absolute -bottom-14 -right-14 w-40 h-40 rounded-full bg-primary/20 blur-3xl" />
    </motion.div>
  );
};

export default Projects;
