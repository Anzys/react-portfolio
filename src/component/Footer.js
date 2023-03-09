import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-container flex">
          <div className="footer-top flex">
            <div className="flex">
              <h3>Links</h3>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="flex">
              <h3>External Links</h3>
              <ul className="flex">
                <li>LinkedIn</li>
                <li>GitHub</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom flex">
            <p>@2022 | All Rights Reserved. MAde by Anjish Gurung😎x</p>
          </div>
        </div>
      </footer>
      <>
        <div className="scroll-to-top">
          <a href="#" className="scroll-btn">
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        </div>
      </>
    </div>
  );
};

export default Footer;
