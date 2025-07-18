import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MenuItem = ({ menu, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative mx-1 sm:mx-2 min-w-[44px]">
      <a
        href={menu.uri}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center
         justify-center group cursor-pointer 
         hover:bg-gradient-to-br 
         hover:from-primary hover:to-secondary relative
         transition-all duration-200
         active:scale-95"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={(e) => {
          // Smooth scroll for anchor links
          if (menu.uri.startsWith("#")) {
            e.preventDefault();
            document.querySelector(menu.uri)?.scrollIntoView({
              behavior: "smooth",
            });
          }
        }}
      >
        <menu.Icon
          className={`text-texlight group-hover:text-bgPrimary text-lg sm:text-xl`}
        />
      </a>

      {/* Desktop tooltips */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            className="hidden lg:block absolute bg-white rounded-full px-6 py-2 -left-[140px]
              after:absolute after:-right-1 after:top-3 after:w-3 after:h-3
              after:bg-white after:rotate-45"
            style={{
              boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.4)",
              minWidth: "120px",
            }}
          >
            <p className="text-bgPrimary text-sm font-medium">{menu?.name}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile label - always visible */}
      <div className="lg:hidden block text-center mt-1">
        <p className="text-texlight text-xs whitespace-nowrap">{menu.name}</p>
      </div>
    </div>
  );
};

export default MenuItem;
