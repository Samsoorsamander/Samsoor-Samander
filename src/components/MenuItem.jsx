import React from "react";

const MenuItem = ({ menu, index }) => {
  return (
    <a
      href={menu.uri}
      className="w-12 h-12 rounded-full flex items-center
       justify-center group cursor-pointer 
       hover:bg-gradient-to-br 
       hover:from-primary hover:to-secondary
       "
    >
      <menu.Icon className={`text-texlight text-xl`} />
    </a>
  );
};

export default MenuItem;
