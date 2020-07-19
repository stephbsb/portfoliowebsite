import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  const { lang, about, projects } = props.links;

  /* To hide the about and projects link on screens smaller than medium size */
  const style = props.type === "navbar" ? "hide-on-med-and-down" : "";

  /* Since the navbar and sidebar behaves diffetly I wanted to add different styles depending on the type that comes from the parent */
  const styleNavIcons =
    props.type === "navbar" ? "hide-on-small-and-down" : "hide";
  const styleSideIcons = props.type === "sidebar" ? "sidebar-icon" : "hide";

  return (
    <React.Fragment>
      <li className={`${props.type}-menu`}>
        <div className="user-view center">
          <a href="#menu">
            <h4 className="grey-text">MENU</h4>
          </a>
        </div>
      </li>
      <div className={`${props.type}-divider`}>
        <div className="divider"></div>
      </div>
      <li className={`${style}`}>
        <Link to={`/${lang}/`} className="sidenav-close">
          {about}
        </Link>
      </li>
      <li className={`${style}`}>
        <Link to={`/${lang}/${projects}`} className="sidenav-close">
          {projects}
        </Link>
      </li>

      <div className={`${styleSideIcons}`}>
        <div className="divider"></div>
      </div>

      {/* Icons for SideNav */}
      <li className={`${styleSideIcons} center`}>
        <div className="center">
          <a
            href="https://www.linkedin.com/in/stephany-rodrigues/"
            target="_blank"
          >
            <i className="fa fa-linkedin-square fa-2x grey-text"></i>
          </a>
          <a href="https://github.com/stephbsb" target="_blank">
            <i className="fa fa-github-square fa-2x grey-text"></i>
          </a>
        </div>
      </li>

      {/* Icons for NavBar */}
      <li className={`${styleNavIcons}`}>
        <a
          href="https://www.linkedin.com/in/stephany-rodrigues/"
          target="_blank"
        >
          <i className="fa fa-linkedin-square fa-2x"></i>
        </a>
      </li>
      <li className={`${styleNavIcons}`}>
        <a href="https://github.com/stephbsb" target="_blank">
          <i className="fa fa-github-square fa-2x"></i>
        </a>
      </li>
    </React.Fragment>
  );
};

export default NavLinks;
