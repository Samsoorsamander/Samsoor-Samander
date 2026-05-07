import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HeroTypeWritter, HomeSocialLinks } from "../components";
import { Socials } from "../utils/helper";
import CV from "./../assets/Samsoor-resume.pdf";

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center flex-col gap-12 relative py-10 sm:py-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
        {/* content section*/}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full lg:col-span-8 flex flex-col items-center lg:items-start gap-4"
        >
          <span className="px-4 py-1 rounded-full border border-white/20 text-xs tracking-[0.25em] uppercase text-gray-300">
            Full Stack Developer
          </span>
          <h2 className="text-3xl lg:text-5xl text-texlight leading-tight">
            Hello, it's me
            <span
              className="block tracking-wider text-4xl lg:text-7xl mt-4 text-white"
            >
              Samsoor Samander
            </span>
          </h2>

          {/* typewritter */}
          <h2 className="text-xl sm:text-2xl lg:text-4xl text-texlight mt-4">
            And I'm{" "}
            <HeroTypeWritter
              speed={100}
              words={["a MERN Stack developer...", "a Mobile developer..."]}
            />
          </h2>

          <p className="text-base sm:text-lg text-gray-300 mt-6 text-center lg:text-left max-w-3xl">
            Building apps, crafting experiences, and solving problems—one line
            of code at a time. From mobile applications to full-stack web
            solutions, I turn ideas into reality, blending creativity with logic
            to make technology work seamlessly. Every project is a new
            challenge, and every challenge is an opportunity to create something
            meaningful.
          </p>

          {/* social media links */}
          <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-10 mt-10">
            <AnimatePresence>
              {Socials &&
                Socials.map((item, index) => (
                  <HomeSocialLinks key={index} data={item} index={index} />
                ))}
            </AnimatePresence>
          </div>
          {/* hire me btn*/}
          <a
            href={CV}
            download="Samsoor-resume.pdf"
            className="mt-8 border border-white/25 rounded-xl px-8 py-3 active:scale-95 group hover:border-primary transition-all duration-300 bg-white/5 backdrop-blur-sm"
          >
            <p
              className="text-texlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary"
            >
              Download CV
            </p>
          </a>
        </motion.div>

        {/* Spotlight panel adds depth and modern visual focus. */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-4"
        >
          <div className="glass-card rounded-3xl p-6 h-full min-h-[260px] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-16 -right-12 w-44 h-44 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-16 -left-12 w-44 h-44 rounded-full bg-secondary/20 blur-3xl" />
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
              Spotlight
            </p>
            <h3 className="text-2xl font-semibold text-white leading-snug">
              I build clean products with smooth user experiences.
            </h3>
            <p className="text-gray-300">
              React, React Native, Node.js, and modern UI animations that feel
              premium and responsive.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
