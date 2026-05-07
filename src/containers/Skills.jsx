import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "../components";

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      description:
        "React.js, React Native, Next.js, Tailwind CSS, and UI animation workflows with Framer Motion.",
    },
    {
      title: "Backend",
      description:
        "Node.js, Express.js, REST APIs, WebSockets, and ASP.NET Core integration for scalable services.",
    },
    {
      title: "Data & Tools",
      description:
        "MongoDB, SQL, Firebase, Git/GitHub, JWT auth, and deployment on Vercel, Netlify, EAS, and Docker.",
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
