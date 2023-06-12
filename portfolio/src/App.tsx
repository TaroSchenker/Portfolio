import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />  
    </>
  );
}

export default App;
