import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({ children }) => {
  return (
    <>
      <input type="checkbox" id="darkMode" class="dark-mode-checkbox" />

      <div class="wrapper">
        <label for="darkMode">
          <i class="fa-solid fa-circle-half-stroke dark-mode-toggle"></i>
        </label>

        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};
