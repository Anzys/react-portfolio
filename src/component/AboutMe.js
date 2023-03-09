import React from "react";

const AboutMe = () => {
  return (
    <div>
      <section className="section5 flex" id="About">
        <h1 className="Title">About Me</h1>
        <div className="about-container flex">
          <div className="left flex">
            <div className="bg"></div>
            <img src="img/pp.png" alt="" />
          </div>
          <div className="right flex">
            <h1>ANJISH</h1>
            <p>
              I grew up in Nepal and currently working as afront end developer.
            </p>
            <p>Sydney, Australia</p>
            <a href="">Connect with me</a>
            <div className="flex">
              <div className="tag">Interests</div>
              <div>
                <span>Coding</span>
                <span>Football</span>
                <span>Movies</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
