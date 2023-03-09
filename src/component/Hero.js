import React from "react";
import pp from "../assets/img/pp.png";
import { Layout } from "./Layout";
import resume from "../assets/Anjish+Gurung+Resume.docx";
const Hero = () => {
  return (
    <Layout>
      <section className="section1 grid">
        <div className="left flex">
          <img className="img" src={pp} alt="" />
        </div>
        <div className="right flex">
          <div className="flex">
            <h2 className="name">ANJISH</h2>
            <p className="tag">Web Developer</p>
          </div>
          <button>
            <a href={resume} download={true}>
              Download CV{" "}
              <span>
                <i className="fa-solid fa-download"></i>
              </span>
            </a>
          </button>
        </div>
      </section>
      <>
        <section className="section2" id="Home">
          <div className="info-container flex">
            <div className="info-lists flex">
              <div className="info-content flex">
                <div className="icon-container flex">
                  <i className="fa-solid fa-award"></i>
                </div>
                <span>
                  <h5>IT</h5>
                  <p>Graduate</p>
                </span>
              </div>
              <div className="info-diver"></div>
              <div className="info-content flex">
                <div className="icon-container flex">
                  <i className="fa-solid fa-award"></i>
                </div>
                <span>
                  <h5>15 Projects</h5>
                  <p>Completed</p>
                </span>
              </div>
              <div className="info-diver"></div>
              <div className="info-content flex">
                <div className="icon-container flex">
                  <i className="fa-solid fa-award"></i>
                </div>
                <span>
                  <h5>10 + Year</h5>
                  <p>Job Experience</p>
                </span>
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default Hero;
