import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "../components";

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      description:
        "React.js, Next.js, and React Native with polished UI systems using Tailwind CSS and Framer Motion.",
    },
    {
      title: "Backend",
      description:
        "Node.js and Express.js services with REST APIs, WebSockets, and scalable full-stack integrations.",
    },
    {
      title: "Data & Tools",
      description:
        "MongoDB, SQL, Firebase, Git/GitHub, JWT authentication, and deployments on Vercel, Netlify, EAS, and Docker.",
    },
    {
      title: "Desktop",
      description:
        "Cross-platform desktop applications with Electron.js and Tauri, focused on performance and maintainability.",
    },
  ];

  return (
    <section
      id="skills"
      className="flex items-center justify-center flex-col gap-12 my-16"
    >
      <SectionTitle title="Skills & Experience" subtitle="Expertise" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full px-4">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -8 }}
            className="glass-card rounded-2xl p-6 border border-white/10"
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              {group.title}
            </h3>
            <p className="text-gray-300 leading-7">{group.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
