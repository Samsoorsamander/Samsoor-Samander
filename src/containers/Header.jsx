import React, { useEffect, useState } from "react";
import { Menus } from "../utils/helper";
import ThemeToggle from "../components/ThemeToggle";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import avatar from "../assets/img/about.webp";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = Menus.map((menu) =>
      document.getElementById(menu.uri.replace("#", ""))
    ).filter(Boolean);

    if (!sections.length) return undefined;

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
  }, []);

  return (
    <header className="z-40">
      {/* avatar logo — fixed top-left like antfu.me */}
      <a
        href="#home"
        className="header-logo select-none outline-none"
        title="Samsoor Enzo"
        aria-label="Samsoor Enzo — home"
      >
        <img src={avatar} alt="Samsoor Enzo" />
      </a>

      <nav className="nav">
        <div className="spacer" />
        <div className="right">
          {Menus.map((item) => {
            const id = item.uri.replace("#", "");
            const isActive = activeSection === id;

            // items flagged as modal open an overlay instead of scrolling
            if (item.type === "modal") {
              return (
                <button
                  key={item.id}
                  type="button"
                  className="cursor-pointer"
                  onClick={() =>
                    window.dispatchEvent(new Event(item.event))
                  }
                >
                  {item.name}
                </button>
              );
            }

            return (
              <a
                key={item.id}
                href={item.uri}
                className={isActive ? "is-active" : ""}
              >
                {item.name}
              </a>
            );
          })}

          <a
            href="https://github.com/samsoorsamander"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/ssamDev"
            target="_blank"
            rel="noreferrer"
            title="X / Twitter"
            aria-label="X / Twitter"
          >
            <FaXTwitter />
          </a>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
