import React, { useEffect, useMemo, useState } from "react";
import { Menus } from "../utils/helper";
import { MenuItem } from "../components";

const Header = () => {
  const sectionIds = useMemo(
    () =>
      Menus.map((menu) => menu.uri.replace("#", "")).filter(
        (id) => id && document.getElementById(id)
      ),
    []
  );
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.35,
        rootMargin: "-20% 0px -35% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 w-full z-50
      px-4 sm:px-0 pb-2 flex justify-center"
    >
      <div
        className="w-fit px-4 py-3 rounded-[28px] border border-white/20 bg-black/35
        inline-flex items-center justify-center gap-4 sm:gap-8
        duration-200 backdrop-blur-xl max-w-full overflow-hidden
        flex-nowrap shadow-2xl"
      >
        {Menus &&
          Menus.map((item, index) => (
            <MenuItem
              key={index}
              menu={item}
              index={index}
              isActive={activeSection === item.uri.replace("#", "")}
            />
          ))}
      </div>
    </div>
  );
};

export default Header;
