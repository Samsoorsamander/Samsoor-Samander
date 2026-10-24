import React from "react";

// antfu.me "Find me on" style social link: icon + label, prose-underline hover
const HomeSocialLinks = ({ data }) => {
  return (
    <a
      href={data.uri}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5"
    >
      <span className="op75">
        <data.Icon />
      </span>
      <span>{data.name}</span>
    </a>
  );
};

export default HomeSocialLinks;
