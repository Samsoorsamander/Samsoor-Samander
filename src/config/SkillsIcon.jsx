import React from "react";

// Skill list rendered as a quiet inline antfu-style text flow
const skills = [
  "JavaScript",
  "TypeScript",
  "Next.js",
  "HTML",
  "CSS",
  "React",
  "React Native",
  "Expo",
  "Node.js",
  "MongoDB",
  "Oracle APEX",
  "Git",
  "GitHub",
];

const SkillsIcon = () => {
  return (
    <p className="flex flex-wrap gap-x-2 gap-y-1">
      {skills.map((name, index) => (
        <React.Fragment key={name}>
          <span className="transition-colors duration-200 hover:text-[var(--fg-deeper)]">
            {name}
          </span>
          {index < skills.length - 1 && <span className="op25">/</span>}
        </React.Fragment>
      ))}
    </p>
  );
};

export default SkillsIcon;
