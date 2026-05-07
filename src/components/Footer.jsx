import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Socials } from "../utils/helper";
import HomeSocialLinks from "./HomeSocialLinks";

const Footer = () => {
  return (
    <footer className="w-full mt-16 mb-24 lg:mb-8 px-2">
      <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col items-center gap-7">
        <p className="text-2xl sm:text-3xl tracking-wide text-white text-center">
          Samsoor Samander
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          <AnimatePresence>
            {Socials.map((item, index) => (
              <HomeSocialLinks key={item.id} data={item} index={index} />
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center text-gray-300 space-y-1">
          <p>samsoorsamander@gmail.com</p>
          <p>+93764273409</p>
        </div>

        {/* Subtle motion keeps footer lively without distraction. */}
        <motion.p
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-sm text-gray-400"
        >
          © {new Date().getFullYear()} Samsoor Samander. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
