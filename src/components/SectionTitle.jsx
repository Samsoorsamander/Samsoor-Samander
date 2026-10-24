import React from "react";

// Minimal antfu-style section heading, rendered inside a `.prose` wrapper
const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="se">
      {subtitle && <p className="op50 text-sm">{subtitle}</p>}
      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitle;
