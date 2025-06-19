import React from "react";
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

const App = () => {
  return (
    <div className="w-full xl:w-[1600px] py:32 px-4 lg:px-12 pr-4 lg:pr-32">
      {/* particals container*/}
      <ParticlesContainer />

      {/* header */}
      <Header />

      {/* home containerr */}
      <Home />
      {/* service container */}
      <SkillsIcon />

      {/* about contaier */}
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
      <div className="w-full flex flex-col items-center justify-start mt-32 mb-12">
        <p className="text-3xl tracking-wide text-texlight ">
          {" "}
          Samsoor Samander{" "}
        </p>
        <div className="flex items-center justify-center gap-16 mt-16">
          <AnimatePresence>
            {Socials &&
              Socials.map((item, index) => (
                <HomeSocialLinks key={index} data={item} index={index} />
              ))}
          </AnimatePresence>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-12">
          <p className="text-texlight text-center">
            As a developer, I’m committed to crafting meaningful experiences
            through both mobile and web technologies. I strive to make every
            project an opportunity for growth and innovation.
          </p>
          <p className="text-texlight text-center">
            Building projects isn’t just about writing code. It’s about
            problem-solving and creating solutions that stand the test of time.
            I believe in the power of collaboration and always seeking ways to
            improve.
          </p>
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <p className="text-texlight text-center">
              samsoorsamander@gmail.com
            </p>
            <p className="text-texlight text-center">+93764273409</p>
            <a href="cv">
              <p className="text-primary text-center">Hire Me</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
