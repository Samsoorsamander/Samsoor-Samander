import React from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

// A silk thread stretched across the top of the page. It fills as you read,
// with a tiny spider bead riding the leading edge — same web language as the
// hero's growing web.
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  const left = useTransform(scrollYProgress, (value) => {
    const clamped = Math.min(1, Math.max(0, value));
    return `${clamped * 100}%`;
  });
  const beadOpacity = useTransform(scrollYProgress, [0, 0.01, 0.99, 1], [0, 1, 1, 1]);

  return (
    <div className="scroll-silk" aria-hidden="true">
      <motion.div className="scroll-silk-fill" style={{ scaleX }} />
      {!reduceMotion && (
        <motion.span
          className="scroll-silk-spider"
          style={{ left, opacity: beadOpacity }}
        />
      )}
    </div>
  );
};

export default ScrollProgress;
