import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Reveal, SectionTitle } from "../components";
import { ShieldGlyph } from "../components/HeroGlyphs";

const timelineItems = [
  {
    title: "Business Desktop Platforms",
    detail:
      "Delivered GymPro, Spectrum Pro, and PharmaFlow to streamline operations, billing, and reporting.",
  },
  {
    title: "Full-Stack Product Delivery",
    detail:
      "Built production-ready web applications with React/Next.js, backend APIs, and secure data workflows.",
  },
  {
    title: "Mobile and AI Experiences",
    detail:
      "Developed React Native apps and integrated AI-driven features for more intelligent user experiences.",
  },
];

const Timeline = () => {
  const listRef = useRef(null);
  const reduceMotion = useReducedMotion();

  // The thread fills as the timeline travels up the viewport, like a strand
  // of web being spun while you scroll.
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 85%", "end 55%"],
  });
  const threadFill = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="timeline" className="my-20 w-full">
      <div className="prose m-auto">
        <SectionTitle
          title="Experience Timeline"
          subtitle="Journey"
          glyph={<ShieldGlyph />}
        />

        <div className="timeline-wrap" ref={listRef}>
          <span className="timeline-thread" aria-hidden="true">
            <motion.span
              className="timeline-thread-fill"
              style={reduceMotion ? { scaleY: 1 } : { scaleY: threadFill }}
            />
          </span>

          <ol className="timeline-list">
            {timelineItems.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                className="timeline-item"
                delay={index * 110}
              >
                <span className="timeline-node" aria-hidden="true" />
                <b>{item.title}</b> — {item.detail}
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
