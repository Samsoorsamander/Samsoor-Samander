import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HeroTypeWritter, HomeSocialLinks } from "../components";
import { Socials } from "../utils/helper";

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center flex-col gap-12 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* content section*/}
        <div
          className="w-full h-full flex flex-col items-center  
        lg:items-start gap-4
        "
        >
          <h2 className="text-3xl lg:text-4xl text-texlight">
            Hello, it's me
            <span
              className="block tracking-wider text-4xl lg:text-6xl mt-4
            to-white text-white
            "
            >
              {" "}
              Samsoor Samander
            </span>
          </h2>

          {/* typewritter */}
          <h2 className="text-2xl lg:text-4xl text-texlight mt-4">
            And I'm{" "}
            <HeroTypeWritter
              speed={100}
              words={["a Developer...", "a Freelancer..."]}
            />
          </h2>

          <p className="text-base text-texlight mt-6 text-center lg:text-left">
            Building apps, crafting experiences, and solving problems—one line
            of code at a time. From mobile applications to full-stack web
            solutions, I turn ideas into reality, blending creativity with logic
            to make technology work seamlessly. Every project is a new
            challenge, and every challenge is an opportunity to create something
            meaningful.
          </p>

          {/* social media links */}
          <div className="flex items-center justify-center gap-16 mt-16">
            <AnimatePresence>
              {Socials &&
                Socials.map((item, index) => (
                  <HomeSocialLinks key={index} data={item} index={index} />
                ))}
            </AnimatePresence>
          </div>
          {/* hire me btn*/}
          <a
            href="cv"
            style={{ boxShadow: "inset 0px 0px 10px rgba(255,255,255,0.3)" }}
            className="mt-12 border border-[rgba(255,255,255,0.3)] 
          rounded-xl px-8 py-3 active:95 group hover:border-primary
          "
          >
            <p
              className="text-texlight group-hover:text-transparent group-hover:bg-clip-text 
                group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary"
            >
              Hire me
            </p>
          </a>
        </div>

        {/* image section*/}
        <div
          className="w-full h-full flex  items-start justify-center
        lg:item-center
        "
        >
          <motion.img
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
            className="w-full h-auto object-contain"
            style={{ borderRadius: "50%", marginTop: 10 }}
            src={require("../assets/img/animeImage.jpg")}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
