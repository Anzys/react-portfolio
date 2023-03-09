import React from "react";

import { Layout } from "./Layout";
const Contact = () => {
  return (
    <Layout>
      <section className="section6 flex" id="Contact">
        <h1 className="title">Get In Touch</h1>
        <div className="socials flex">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
        <h1>OR</h1>
        <div className="email-section flex">
          <p>Reach out over email</p>
          <div className="email">
            <a href="mailto:grganjish@gmail.com">grganjish@gmail.com</a>
            <div className="send">
              <i className="fa-solid fa-paper-plane"></i>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
