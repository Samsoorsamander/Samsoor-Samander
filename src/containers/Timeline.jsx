import React from "react";
import { SectionTitle } from "../components";

const timelineItems = [
  {
    title: "Business Desktop Platforms",
    detail:
      "Delivered GymPro, Spectrum Pro, and PharmaFlow to streamline operations, billing, and reporting.",
  },
  {
    title: "Full-Stack Product Delivery",
    detail:
      "Built production-ready web applications with React/Next.js, backend APIs, and secure data workflows.",
  },
  {
    title: "Mobile and AI Experiences",
    detail:
      "Developed React Native apps and integrated AI-driven features for more intelligent user experiences.",
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="my-20 w-full">
      <div className="prose m-auto">
        <SectionTitle title="Experience Timeline" subtitle="Journey" />

        <ul className="dot-accent mt-2">
          {timelineItems.map((item) => (
            <li key={item.title}>
              <b>{item.title}</b> — {item.detail}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Timeline;
