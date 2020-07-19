import React, { useEffect } from "react";

import "./NavBar.css";
import NavLinks from "./NavLinks";

const NavBar = (props) => {
  useEffect(() => {
    const header = document.querySelector(".navbar");

    window.onscroll = () => {
      if (window.scrollY === 0) {
        header.className = "navbar navbar-start";
      } else {
        header.className = "navbar navbar-scroll";
      }
    };
  });

  return (
    <header className={`navbar navbar-start`}>
      <div className="container">
        <nav className="navbar-navigation">
          <div className="navbar-logo">{`{S}`}</div>
          <div className="space"></div>
          <div className="navbar-navigation-items">
            <NavLinks />
          </div>
          <div className="menu-icon ">
            <button href="#" onClick={props.toggleSideBar}>
              <i className="material-icons">more_vert</i>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
