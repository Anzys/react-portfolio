import React from "react";
import cake from "../assets/img/cakeweb-sc.png";
import calculator from "../assets/img/calulator-sc.png";
import jetflix from "../assets/img/Jetflix-sc.png";
import movie from "../assets/img/movie-sc.png";
import nottodo from "../assets/img/nototdo-sc.png";
import { Layout } from "./Layout";

const Projects = () => {
  return (
    <Layout>
      <div className="wrapper">
        <section className="section4 flex" id="Projects">
          <h1 className="title">My Recent Projects</h1>
          <div className="projects-container grid">
            <div className="project-card flex">
              <div className="top">
                <img src={cake} alt="cake" />
              </div>
              <div className="bottom">
                <p>Dec 15, 2022</p>
                <p>Full Stack Web application Built using React& Firebase</p>
              </div>
            </div>
            <div className="project-card flex">
              <div className="top">
                <img src={calculator} alt="" />
              </div>
              <div className="bottom">
                <p>Dec 15, 2022</p>
                <p>Full Stack Web application Built using React& Firebase</p>
              </div>
            </div>
            <div className="project-card flex">
              <div className="top">
                <img src={jetflix} alt="" />
              </div>
              <div className="bottom">
                <p>Dec 15, 2022</p>
                <p>Full Stack Web application Built using React& Firebase</p>
              </div>
            </div>
            <div className="project-card flex">
              <div className="top">
                <img src={movie} alt="" />
              </div>
              <div className="bottom">
                <p>Dec 15, 2022</p>
                <p>Full Stack Web application Built using React& Firebase</p>
              </div>
            </div>
            <div className="project-card flex">
              <div className="top">
                <img src={nottodo} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Projects;
