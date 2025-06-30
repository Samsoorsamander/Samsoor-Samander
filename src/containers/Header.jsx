import React from "react";
import { Menus } from "../utils/helper";
import { MenuItem } from "../components";

const Header = () => {
  return (
    <div
      className="fixed bottom-0 right-0 lg:top-0 w-full h-auto 
      lg:h-screen lg:w-32 flex justify-center items-end lg:items-center pb-2 lg:pb-0 z-50
      px-4 sm:px-0"
    >
      <div
        className="px-4 py-3 lg:py-12 rounded-full border border-[rgba(255,255,255,0.3)] 
        flex flex-row lg:flex-col items-center justify-center gap-4 sm:gap-8 lg:gap-12
        duration-200 backdrop-blur-md max-w-full overflow-x-auto lg:overflow-visible"
      >
        {Menus &&
          Menus.map((item, index) => (
            <MenuItem key={index} menu={item} index={index} />
          ))}
      </div>
    </div>
  );
};

export default Header;
