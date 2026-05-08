import React, { useState, useEffect } from "react";
import {
  Contact,
  Header,
  Home,
  ParticlesContainer,
  Projects,
  Skills,
  Timeline,
} from "./";
import { Footer, ScrollTopButton } from "../components";
import SkillsIcon from "../config/SkillsIcon";
import Certificates from "./Certificates";

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

  return (
    <div className="w-full flex-wrap max-w-[1600px] mx-auto py-4 sm:py-8 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-x-hidden pb-28 lg:pb-20">
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
      {/* skills container */}
      <Skills />

      {/* timeline container */}
      <Timeline />

      {/* projects container */}
      <Projects />

      {/* Certificates container */}
      <Certificates />

      {/* contact container */}
      <Contact />

      <Footer />
      <ScrollTopButton isVisible={isVisible} />
    </div>
  );
};

export default App;
