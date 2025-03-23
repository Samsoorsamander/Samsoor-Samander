import React from "react";
import {
  About,
  Contact,
  Header,
  Home,
  Projects,
  ServiceCount,
  Skills,
} from "./";
import { AnimatePresence } from "framer-motion";
import { Socials } from "../utils/helper";
import { HomeSocialLinks } from "../components";

const App = () => {
  return (
    <div className="w-full xl:w-[1600px] py:32 px-4 lg:px-12 pr-4 lg:pr-32">
      {/* particals container*/}

      {/* header */}
      <Header />

      {/* home containerr */}
      <Home />
      {/* service container */}
      <ServiceCount />

      {/* about contaier */}
      <About />

      {/* skills container */}
      <Skills />

      {/* projects container */}
      <Projects />

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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            fugiat non dolorum dignissimos nulla doloribus ipsam quae similique
            corrupti, consequuntur voluptates ratione nemo nesciunt aut aperiam
            aliquid quia, exercitationem veniam.
          </p>
          <p className="text-texlight text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            fugiat non dolorum dignissimos nulla doloribus ipsam quae similique
            corrupti, consequuntur voluptates ratione nemo nesciunt aut aperiam
            aliquid quia, exercitationem veniam.
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
