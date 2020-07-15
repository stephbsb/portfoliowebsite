import React, { useState } from "react";
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import NavLinks from "./NavLinks";
import { useEffect } from "react";

const MainNavigation = (props) => {
  const [lang, setLang] = useState({
    lang: "pt",
    nextLang: "en",
    sobre: "sobre",
    projetos: "projetos",
  });

  const changeLang = () => {
    if (lang.lang === "pt") {
      setLang({
        lang: "en",
        nextLang: "pt",
        sobre: "about",
        projetos: "projects",
      });
    }
    if (lang.lang === "en") {
      setLang({
        lang: "pt",
        nextLang: "en",
        sobre: "sobre",
        projetos: "projetos",
      });
    }
  };

  useEffect(() => {
    var elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
      edge: "right",
    });

    var dropdown = document.querySelector(".dropdown-trigger");
    M.Dropdown.init(dropdown, { coverTrigger: false });
  });

  return (
    <React.Fragment>
      <ui id="dropdown1" className="dropdown-content">
        <li className="transparent">
          <Link to={`/${lang.nextLang}/`} onClick={changeLang}>
            {lang.nextLang.toUpperCase()}
          </Link>
        </li>
      </ui>
      <nav className="nav-bar transparent">
        <div className="container">
          <div class="nav-wrapper">
            <a href="#" class="brand-logo left">
              Stephany
            </a>

            <ul className="right">
              <li>
                <a
                  className="dropdown-trigger"
                  href="#"
                  data-target="dropdown1"
                >
                  {lang.lang.toUpperCase()}
                  <i className="material-icons right">keyboard_arrow_down</i>
                </a>
              </li>

              <NavLinks links={lang} className="hide-on-med-and-down" />

              <li>
                <a
                  href="https://www.linkedin.com/in/stephany-rodrigues/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square fa-2x "></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/stephany.rr" target="_blank">
                  <i className="fa fa-github-square fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger">
                  <i class="material-icons">more_vert</i>
                </a>
              </li>
            </ul>
            <ul className="sidenav" id="mobile-demo">
              <NavLinks links={lang} />
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default MainNavigation;
