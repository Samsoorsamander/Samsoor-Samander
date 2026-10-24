import React from "react";
import { FaArrowUp } from "react-icons/fa6";

// antfu.me back-to-top: round ghost button bottom-right, appears after scroll
const ScrollTopButton = ({ isVisible }) => {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`back-top fixed bottom-3 right-3 z-[90] transition-opacity duration-300 ${
        isVisible ? "opacity-75 hover:opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <FaArrowUp className="text-sm" />
    </button>
  );
};

export default ScrollTopButton;
