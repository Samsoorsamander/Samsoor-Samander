import React from "react";
import { motion } from "framer-motion";
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
    <section
      id="timeline"
      className="flex items-center justify-center flex-col gap-10 my-16"
    >
      <SectionTitle title="Experience Timeline" subtitle="Journey" />

      <div className="w-full max-w-4xl px-4">
        {timelineItems.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="relative pl-9 pb-8 last:pb-0"
          >
            {index !== timelineItems.length - 1 && (
              <span className="absolute left-[9px] top-7 h-[calc(100%-12px)] w-[2px] bg-white/20" />
            )}
            <span className="absolute left-0 top-1 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary" />
            <div className="glass-card rounded-xl border border-white/10 p-4">
              <h3 className="text-white font-semibold">{item.title}</h3>
              <p className="text-gray-300 mt-2 text-sm sm:text-base leading-7">
                {item.detail}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
