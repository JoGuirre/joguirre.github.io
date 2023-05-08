import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ThreeCard from "./components/ThreeCard";
import Contact from "./components/Contact";

function App() {
  return (
    <div id="app-container" className="flex flex-col">
      <NavBar />
      <Hero />
      <ThreeCard />

      {/* <Projects /> */}
      <Contact />
    </div>
  );
}

export default App;
