import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectsData } from "../utils/helper";
import { SectionTitle } from "../components";
import {
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
  FaMobileAlt,
  FaDesktop,
} from "react-icons/fa";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
          Desktop Apps Showcased First
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
        {orderedProjects &&
          orderedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const ProjectCard = ({ project, onOpen }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -10,
        rotateX: 2,
        rotateY: -2,
      }}
      className="relative overflow-hidden rounded-2xl h-full glass-card border border-white/10 [transform-style:preserve-3d]"
      style={{ transformPerspective: 1000 }}
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width) * 100;
        const y = ((event.clientY - bounds.top) / bounds.height) * 100;
        setGlow({ x, y });
      }}
      onClick={onOpen}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(0,255,170,0.2), transparent 45%)`,
        }}
      />

      <div className="h-48 overflow-hidden">
        {!imageLoaded && (
          <div className="w-full h-full bg-white/5 animate-pulse" />
        )}
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
          className={`w-full h-full object-cover transition-all duration-500 ${
            imageLoaded ? "opacity-100 blur-0" : "opacity-0 blur-md"
          }`}
          src={project.imgSrc}
          alt={project.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <div className="p-5 text-white">
        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {project.description || "A fantastic project with great features."}
        </p>

        {project.techStack?.length ? (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <span
                key={`${project.id}-${tech}`}
                className="px-2.5 py-1 rounded-full text-[11px] border border-white/15 bg-white/5 text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        ) : null}

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
                title="View Source"
                onClick={(event) => event.stopPropagation()}
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
                title="View Live Demo"
                onClick={(event) => event.stopPropagation()}
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

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="w-full max-w-3xl glass-card rounded-2xl border border-white/15 overflow-hidden"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative h-64 sm:h-80">
          <img
            src={project.imgSrc}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <button
            className="absolute top-4 right-4 w-9 h-9 rounded-full border border-white/30 bg-black/40 text-white flex items-center justify-center hover:border-primary transition-colors"
            onClick={onClose}
            aria-label="Close project details"
          >
            <FaTimes />
          </button>
        </div>

        <div className="p-5 sm:p-6">
          <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
          <p className="text-gray-300 mt-3 leading-7">{project.description}</p>

          {project.techStack?.length ? (
            <div className="flex flex-wrap gap-2 mt-4">
              {project.techStack.map((tech) => (
                <span
                  key={`${project.id}-modal-${tech}`}
                  className="px-3 py-1 rounded-full text-xs border border-white/15 bg-white/5 text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          ) : null}

          <div className="flex items-center gap-4 mt-5">
            {project.gitURL && (
              <a
                href={project.gitURL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-white/20 text-gray-100 hover:border-primary transition-colors inline-flex items-center gap-2"
              >
                <FaGithub />
                View Source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-black font-medium inline-flex items-center gap-2"
              >
                <FaExternalLinkAlt />
                View Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
