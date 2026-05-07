import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col items-center justify-center gap-3 text-center"
    >
      <span className="text-xs tracking-[0.35em] uppercase text-gray-400">
        {subtitle}
      </span>
      <h2 className="text-3xl sm:text-4xl font-semibold text-white">{title}</h2>
      <div className="w-24 h-[2px] bg-gradient-to-r from-primary to-secondary rounded-full" />
    </motion.div>
  );
};

export default SectionTitle;
