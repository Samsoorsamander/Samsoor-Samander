import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { FaCircleHalfStroke } from "react-icons/fa6";

const KEY = "theme-scheme";
const SCHEMES = ["auto", "light", "dark"];

function applyScheme(scheme) {
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const dark =
    scheme === "dark" || (scheme === "auto" && prefersDark);
  document.documentElement.classList.toggle("dark", dark);
  return dark;
}

const ThemeToggle = () => {
  const [scheme, setScheme] = useState(
    () => localStorage.getItem(KEY) || "auto"
  );
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, scheme);
    } catch (e) {}
    setIsDark(applyScheme(scheme));

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setIsDark(applyScheme(scheme));
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [scheme]);

  const cycle = () => {
    const next =
      SCHEMES[(SCHEMES.indexOf(scheme) + 1) % SCHEMES.length];
    setScheme(next);
  };

  const icons = {
    auto: <FaCircleHalfStroke />,
    light: <FaSun />,
    dark: <FaMoon />,
  };

  return (
    <button
      type="button"
      onClick={cycle}
      title={`Color scheme: ${scheme}`}
      aria-label={`Toggle color scheme (currently ${scheme})`}
      className="nav-btn inline-flex items-center justify-center"
    >
      {icons[scheme]}
    </button>
  );
};

export default ThemeToggle;
