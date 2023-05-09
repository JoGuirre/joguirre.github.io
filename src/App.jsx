import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ThreeCard from "./components/ThreeCard";
import Contact from "./components/Contact";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="overflow-hidden bg-gradient-to-tr from-customPurple to-customBlue">
      <div className="bg-gradient-to-tl from-black via-transparent to-black">
        <div
          id="app-container"
          className="flex flex-col bg-black bg-opacity-60 z-[-999]"
        >
          <NavBar />
          <Hero />
          <ThreeCard />
          <TechStack />

          {/* <Projects /> */}
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
