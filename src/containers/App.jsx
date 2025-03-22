import React from "react";
import {
  About,
  Contact,
  Header,
  Home,
  Projects,
  ServiceCount,
  Skills,
} from "./";

const App = () => {
  return (
    <div className="w-full xl:w-[1600px] py:32 px-4 lg:px-12 pr-4 lg:pr-32">
      {/* particals container*/}

      {/* header */}
      <Header />

      {/* home containerr */}
      <Home />
      {/* service container */}
      <ServiceCount />

      {/* about contaier */}
      <About />

      {/* skills container */}
      <Skills />

      {/* projects container */}
      <Projects />

      {/* contact container */}
      <Contact />

      {/* footer container */}
    </div>
  );
};

export default App;
