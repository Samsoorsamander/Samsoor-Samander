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
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Keep desktop projects first so recruiters see core business apps immediately.
  const orderedProjects = [...ProjectsData].sort((a, b) => {
    if (a.type === "desktop" && b.type !== "desktop") return -1;
    if (a.type !== "desktop" && b.type === "desktop") return 1;
    return 0;
  });

  // Only the first 6 projects are shown by default.
  const visibleProjects = showAllProjects
    ? orderedProjects
    : orderedProjects.slice(0, 6);

  return (
    <section id="projects" className="my-20 w-full">
      <div className="prose m-auto">
        <SectionTitle title="Featured Projects" subtitle="Portfolio" />

        {/* Highlighted label to call attention to pinned desktop projects. */}
        <p className="op50 text-sm">Desktop apps showcased first.</p>

        <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {visibleProjects &&
            visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={() => setSelectedProject(project)}
              />
            ))}
        </div>

        {/* Option to reveal every project */}
        {orderedProjects.length > 6 && (
          <div className="my-8">
            <button
              type="button"
              onClick={() => setShowAllProjects((prev) => !prev)}
              className="magic-link !transform-none px-2 py-1.5"
            >
              {showAllProjects
                ? "Show Less"
                : `See All Projects (${orderedProjects.length})`}
            </button>
          </div>
        )}
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

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      onClick={onOpen}
      className="bd group block w-full rounded-md bg-transparent p-4 text-left"
      aria-label={`Open details for ${project.name}`}
    >
      <div className="h-28 overflow-hidden rounded-sm sm:h-32">
        {!imageLoaded && <div className="h-full w-full animate-pulse bg-[#8883]" />}
        <img
          className={`h-full w-full object-cover transition-all duration-500 ${
            imageLoaded ? "opacity-90 blur-0 group-hover:opacity-100" : "opacity-0 blur-md"
          }`}
          src={project.imgSrc}
          alt={project.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <p className="mt-4 text-[var(--fg-deep)]">
        <b>{project.name}</b>
      </p>
      <p className="mt-1 line-clamp-2 text-sm text-[var(--fg)]">
        {project.description || "A fantastic project with great features."}
      </p>

      {project.techStack?.length ? (
        <p className="mt-3 text-sm font-mono op50">
          {project.techStack.join(" / ")}
        </p>
      ) : null}

      <div className="mt-4 flex items-center justify-between text-sm op75">
        {/* Project Type */}
        <div className="flex items-center gap-1.5">
          {project.type === "mobile" ? (
            <>
              <FaMobileAlt className="text-xs" />
              <span>Mobile</span>
            </>
          ) : project.type === "desktop" ? (
            <>
              <FaDesktop className="text-xs" />
              <span>Desktop</span>
            </>
          ) : (
            <>
              <FaDesktop className="text-xs" />
              <span>Web</span>
            </>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {project.gitURL && (
            <a
              href={project.gitURL}
              target="_blank"
              rel="noopener noreferrer"
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
              title="View Live Demo"
              onClick={(event) => event.stopPropagation()}
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
    </motion.button>
  );
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-[#000000aa] p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="panel max-h-full w-full max-w-3xl overflow-y-auto rounded-md"
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
            className="h-full w-full object-cover"
          />
          <button
            className="back-top absolute right-3 top-3 bg-[var(--c-bg)]"
            onClick={onClose}
            aria-label="Close project details"
          >
            <FaTimes />
          </button>
        </div>

        <div className="p-5 sm:p-6">
          <h3 className="text-xl font-bold text-[var(--fg-deep)]">
            {project.name}
          </h3>
          <p className="mt-3 leading-7 text-[var(--fg)]">{project.description}</p>

          {project.techStack?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={`${project.id}-modal-${tech}`}
                  className="magic-link !transform-none pointer-events-none"
                >
                  {tech}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-5 flex flex-wrap items-center gap-3">
            {project.gitURL && (
              <a
                href={project.gitURL}
                target="_blank"
                rel="noopener noreferrer"
                className="magic-link"
              >
                <span className="icon">
                  <FaGithub />
                </span>
                View Source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
              >
                View Live Demo
                <FaExternalLinkAlt className="text-sm" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
