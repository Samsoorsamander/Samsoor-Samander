import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { about, Leaf1, Leaf2 } from "../assets";

const About = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center flex-col gap-12 my-12"
    >
      {/* title */}
      <div className="w-full flex items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            About
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* image section */}
        <div className="w-full flex items-center justify-center px-8">
          <div
            className="w-full lg:w-96 p-[2px] rounded-md 
          bg-gradient-to-br from bg-primary to-secondary relative"
          >
            <img
              src={about}
              className="w-full rounded-md h-auto object-contain"
              alt=""
            />
            <div
              className="absolute w-full h-full -top-3 -left-2
            rounded-md  bg-gradient-to-br from bg-primary to-secondary
            blur-[5px] -z-10
            "
            ></div>
          </div>
        </div>

        {/* content section */}
        <div
          className="w-full px-8 flex flex-col gap-4 items-start
        justify-start
        "
        >
          <p className="text-texlight text-base tracking-wide text-justify">
            Every great app starts with a simple idea, but it takes vision,
            persistence, and a love for problem-solving to bring it to life. I’m
            a passionate mobile and full-stack web developer specializing in the
            MERN stack. With a keen eye for detail and a commitment to clean,
            efficient code, I strive to build seamless, high-performing
            applications that enhance user experiences.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            What I Do: Mobile App Development – Crafting intuitive,
            high-performance applications. Full-Stack Web Development – Building
            dynamic and scalable web solutions. Creative Problem-Solving –
            Turning complex challenges into smooth, functional solutions.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Technology is constantly evolving, and so am I. Every project is a
            journey of learning and innovation, and I love bringing ideas to
            life through code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
