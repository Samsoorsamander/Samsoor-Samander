import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hero } from "../assets";
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
          className="w-full h-full flex flex-col items-center justify-center 
        lg:item-center gap-4
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
              words={["a Developer...", "a YouTuber...", "a Freelancer..."]}
            />
          </h2>

          <p className="text-base text-texlight mt-6 text-center lg:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, blanditiis fugiat, beatae quos dicta ducimus
            pariatur maiores, consequatur minus debitis nemo. Autem similique
            eum cum expedita dignissimos voluptatum consequuntur quaerat.
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
            src={Hero}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
