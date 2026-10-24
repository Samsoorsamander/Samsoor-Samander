import React from "react";
import Clock from "./Clock";
import { FaCertificate } from "react-icons/fa6";

// antfu.me copyright row: muted text left, meta right
const Footer = () => {
  return (
    <footer className="copyright prose m-auto w-full">
      <span className="text-sm op50">
        2024-present © <b>Samsoor Enzo</b>
      </span>

      <span className="flex-auto" />

      <a
        href="#certificates"
        onClick={(event) => {
          event.preventDefault();
          window.dispatchEvent(new Event("open-certificates"));
        }}
        className="text-sm op50 inline-flex items-center gap-1 mr-4"
      >
        <FaCertificate aria-hidden="true" />
        Certificates
      </a>

      <span className="text-sm op50 font-mono">
        <Clock />
      </span>
    </footer>
  );
};

export default Footer;
