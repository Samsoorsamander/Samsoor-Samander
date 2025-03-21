import React from "react";
import { about, Leaf1, Leaf2 } from "../assets";
import { motion } from "framer-motion";
import { SkillCard } from "../components";

const Skills = () => {
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
            Skills
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* content section */}
        <div
          className="w-full px-8 flex flex-col gap-4 items-start
        justify-start
        "
        >
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            My Skill & Work Experience
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            quibusdam, deserunt, laborum necessitatibus, ipsum perspiciatis
            adipisci eum sequi quo odio itaque iste error quaerat odit alias?
            Esse tenetur vitae nihil.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            quibusdam, deserunt, laborum necessitatibus, ipsum perspiciatis
            adipisci eum sequi quo odio itaque iste error quaerat odit alias?
            Esse tenetur vitae nihil.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            quibusdam, deserunt, laborum necessitatibus, ipsum perspiciatis
            adipisci eum sequi quo odio itaque iste error quaerat odit alias?
            Esse tenetur vitae nihil.
          </p>
        </div>

        {/* image section */}
        <div className="w-full flex flex-col gap-4 items-center justify-center px-8">
          <SkillCard
            skill={"HTML 5"}
            percentage={"95%"}
            color={"#FF3F3F"}
            move={true}
          />
          <SkillCard skill={"CSS 3"} percentage={"75%"} color={"#008FFF"} />
          <SkillCard
            skill={"Javascript"}
            percentage={"85%"}
            color={"#FF8900"}
            move={true}
          />
          <SkillCard skill={"Node Js"} percentage={"80%"} color={"#14DB00"} />
          <SkillCard skill={"Mongo DB "} percentage={"75%"} color={"#FFE400"} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
