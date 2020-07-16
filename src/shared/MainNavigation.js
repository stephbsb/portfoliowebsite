import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import NavLinks from "./NavLinks";
import { useEffect } from "react";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  /* This is to change the navbar language in case the user refreshes the page */
  const currentLanguage = useLocation().pathname.split("/")[1];

  /* Atributes to set the navbar to the correct language */
  const ptLangAtributes = {
    lang: "pt",
    nextLang: "en",
    about: "sobre",
    projects: "projetos",
  };

  const enLangAtributes = {
    lang: "en",
    nextLang: "pt",
    about: "about",
    projects: "projects",
  };

  const initialState =
    currentLanguage === "pt" ? ptLangAtributes : enLangAtributes;

  const [lang, setLang] = useState(initialState);

  /* This function is triggered when the user selects another language on the dropdown */
  const changeLang = () => {
    if (currentLanguage === "pt") {
      setLang(enLangAtributes);
    }
    if (currentLanguage === "en") {
      setLang(ptLangAtributes);
    }

    console.log("lingua: " + currentLanguage);
    console.log("objeto: " + lang.lang);
  };

  /* Code to trigger sidenav and dropdown using Materialize */
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
      {/* Drop down content for changing the language */}
      <ui id="dropdown1" className="dropdown-content">
        <li>
          <Link to={`/${lang.nextLang}/`} onClick={changeLang}>
            {lang.nextLang.toUpperCase()}
          </Link>
        </li>
      </ui>

      {/* Content for navbar */}
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

              <NavLinks links={lang} type="navbar" />

              <li>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger">
                  <i class="material-icons">more_vert</i>
                </a>
              </li>
            </ul>
            <ul className="sidenav center" id="mobile-demo">
              <NavLinks links={lang} type="sidebar" />
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default MainNavigation;
