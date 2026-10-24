import React, { useState, useEffect } from "react";
import { Contact, Header, Home, Projects, Skills, Timeline } from "./";
import { Footer, ScrollTopButton } from "../components";
import CertificatesModal from "./Certificates";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show back-to-top button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden">
      <Header />

      <main className="px-7 py-6">
        {/* home container */}
        <Home />

        {/* skills container */}
        <Skills />

        {/* timeline container */}
        <Timeline />

        {/* projects container */}
        <Projects />

        {/* contact container */}
        <Contact />

        {/* copyright footer */}
        <Footer />

        {/* certificates modal (opened via nav / hero / footer) */}
        <CertificatesModal />

        {/* back to top */}
        <ScrollTopButton isVisible={isVisible} />
      </main>
    </div>
  );
};

export default App;
