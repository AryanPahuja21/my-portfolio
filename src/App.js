import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import About from "./components/About";
import './index.css';

function App() {
  return (
    <div className="bg-[url(./assets/background.jpg)] text-white">
      <div className="bg-gif">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
