import React from "react";
import { SectionTitle } from "../components";
import { BoltGlyph } from "../components/HeroGlyphs";
import SkillsIcon from "../config/SkillsIcon";

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
    <section id="skills" className="my-20 w-full">
      <div className="prose m-auto">
        <SectionTitle
          title="Skills & Experience"
          subtitle="Expertise"
          glyph={<BoltGlyph />}
        />

        <div className="mt-4 grid gap-2">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h4>{group.title}</h4>
              <p className="mt-0">{group.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p className="op50 text-sm">Tooling</p>
          <SkillsIcon />
        </div>
      </div>
    </section>
  );
};

export default Skills;
