import React from "react";
import About from "./container/About";
import Contact from "./container/Contact";
import Footer from "./container/Footer";
import Home from "./container/Home";
import Navbar from "./container/Navbar";
import Skills from "./container/Skills";
import Sources from "./container/Sources";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Sources />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
