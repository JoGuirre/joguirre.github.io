import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ThreeCard from "./components/ThreeCard";
import Contact from "./components/Contact";

import BgGrid from "./assets/bggrid.svg";

function App() {
  return (
    <div className="bg-[url(./assets/bggrid.svg)] bg-contain">
      <div className="bg-gradient-to-tr from-customPurple to-customBlue">
        <div className="bg-gradient-to-tl from-black via-transparent to-black">
          <div
            id="app-container"
            className="flex flex-col bg-black bg-opacity-60 z-[-999]"
          >
            <NavBar />
            <Hero />
            <ThreeCard />

            {/* <Projects /> */}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
