import React from "react";

// Minimal antfu-style section heading, rendered inside a `.prose` wrapper.
// Optional `glyph` nods to the superhero that guards this section.
const SectionTitle = ({ title, subtitle, glyph }) => {
  return (
    <div className="se">
      {subtitle && <p className="op50 text-sm">{subtitle}</p>}
      <h2 className="flex items-center gap-2.5">
        {glyph && <span className="op50 shrink-0 flex w-6 h-6">{glyph}</span>}
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
