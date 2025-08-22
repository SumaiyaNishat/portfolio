import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
