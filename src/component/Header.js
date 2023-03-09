import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="primary-header flex">
        <div className="logo flex">
          <h1>ANJISH</h1>
          <div>
            <h1 className="line">Web Developer</h1>
          </div>
        </div>
        <div className="right">
          <input type="checkbox" id="checked" />
          <label htmlFor="checked" className="menu-icon">
            <i className="fa-solid fa-bars"></i>
          </label>
          <ul className="navigation flex">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/skills">SKILLS</Link>
            </li>
            <li>
              <Link to="/projects">PROJECTS</Link>
            </li>
            <li>
              <Link to="/about-me">ABOUT</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
