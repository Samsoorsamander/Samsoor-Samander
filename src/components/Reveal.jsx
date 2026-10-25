import React from "react";
import { motion, useReducedMotion } from "framer-motion";

// Scroll-triggered entrance: content fades + rises the first time it enters
// the viewport. Matches the feel of the existing `.se` load animation so the
// whole page shares one motion language.
const EASE = [0.22, 1, 0.36, 1];

const Reveal = ({
  as = "div",
  delay = 0,
  y = 18,
  amount = 0.25,
  className,
  children,
  ...rest
}) => {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as] || motion.div;

  // Respect "reduce motion": render the final state, no transforms.
  if (reduceMotion) {
    const Static = as;
    return (
      <Static className={className} {...rest}>
        {children}
      </Static>
    );
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
