import React from "react";
import Clock from "./Clock";

const BottomBar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] pointer-events-none">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-5 sm:px-8 py-4 text-[11px] tracking-[0.3em] text-texlight">
        <span>© {new Date().getFullYear()}</span>
        <Clock />
      </div>
    </div>
  );
};

export default BottomBar;
