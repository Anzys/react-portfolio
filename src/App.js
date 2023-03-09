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

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />

      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
