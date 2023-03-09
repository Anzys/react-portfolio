import React from "react";

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
          <label for="checked" className="menu-icon">
            <i className="fa-solid fa-bars"></i>
          </label>
          <ul className="navigation flex">
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#Skills">SKILLS</a>
            </li>
            <li>
              <a href="#Projects">PROJECTS</a>
            </li>
            <li>
              <a href="#About">ABOUT</a>
            </li>
            <li>
              <a href="#Contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
