// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Annotation from "./components/Annotation/Annotation";
import Hero from "./components/Herosection/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/AI service/Services";
import Earth from "./components/Earth-section/Earth";
import Form  from "./components/form/form";
import Footer from "./components/footer/footer";
// import Form from './components/form/form';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Annotation />
      {/* <Annotation /> */}

      <Services />
      <Earth />
      <Form />
      <Footer />
    </>
  );
}

export default App;
