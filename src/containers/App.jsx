import React from "react";
import { About, Header, Home, ServiceCount } from "./";

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

      {/* projects container */}

      {/* contact container */}

      {/* footer container */}
    </div>
  );
};

export default App;
