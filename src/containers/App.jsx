import React, { useState, useEffect } from "react";
import {
  About,
  Contact,
  Header,
  Home,
  ParticlesContainer,
  Projects,
  Skills,
} from "./";
import { AnimatePresence } from "framer-motion";
import { Socials } from "../utils/helper";
import { HomeSocialLinks } from "../components";
import SkillsIcon from "../config/SkillsIcon";
import Certificates from "./Certificates";
import { FaArrowUp } from "react-icons/fa";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top handler
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <div className="w-full min-w-[320px] max-w-[1600px] mx-auto py-4 sm:py-8 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-x-hidden">
      {/* Smooth scroll behavior */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* particles container */}
      <ParticlesContainer />

      {/* header */}
      <Header />

      {/* home container */}
      <Home />

      {/* service container */}
      <SkillsIcon />

      {/* about container */}
      <About />

      {/* skills container */}
      <Skills />

      {/* projects container */}
      <Projects />

      {/* Certificates container */}
      <Certificates />

      {/* contact container */}
      <Contact />

      {/* footer container */}
      <footer className="w-full flex flex-col items-center justify-start mt-12 md:mt-24 mb-6 md:mb-8 px-2 sm:px-4">
        <p className="text-xl sm:text-2xl md:text-3xl tracking-wide text-texlight text-center">
          Samsoor Samander
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-16 mt-6 md:mt-12">
          <AnimatePresence>
            {Socials &&
              Socials.map((item, index) => (
                <HomeSocialLinks key={index} data={item} index={index} />
              ))}
          </AnimatePresence>
        </div>

        <div className="w-full flex flex-col items-center justify-start mt-12 md:mt-24 mb-6 md:mb-8 px-2 sm:px-4">
          <div className="p-4 flex flex-col items-center justify-center gap-2 sm:gap-3">
            <p className="text-texlight text-xs sm:text-sm md:text-base text-center">
              samsoorsamander@gmail.com
            </p>
            <p className="text-texlight text-xs sm:text-sm md:text-base text-center">
              +93764273409
            </p>
            <a
              href="cv"
              className="hover:opacity-80 transition-opacity duration-300"
              aria-label="Hire Me"
            >
              <p className="text-primary text-xs sm:text-sm md:text-base text-center font-medium">
                Hire Me
              </p>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full border-t border-gray-700 mt-8 pt-6">
          <p className="text-gray-400 text-xs text-center">
            © {new Date().getFullYear()} Samsoor Samander. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
