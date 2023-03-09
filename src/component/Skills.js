import React from "react";

const Skills = () => {
  return (
    <div>
      <section className="section3" id="Skills">
        <div className="skills-container flex">
          <div className="flex">
            <i className="fa-brands fa-html5"></i>
            <span>HTML</span>
          </div>
          <div className="flex">
            <i className="fa-brands fa-css3-alt"></i>
            <span>CSS</span>
          </div>
          <div className="flex">
            <i className="fa-brands fa-js"></i>
            <span>JAVASCRIPT</span>
          </div>
          <div className="flex">
            <i className="fa-brands fa-react"></i>
            <span>REACT</span>
          </div>
          <div className="flex">
            <i className="fa-solid fa-fire"></i>
            <span>FIREBASE</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
