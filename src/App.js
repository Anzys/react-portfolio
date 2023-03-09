import "./App.css";
import "./style.css";

import AboutMe from "./component/AboutMe";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import "./style.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="skills" element={<Skills />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="about-me" element={<AboutMe />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
