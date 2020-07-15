import React, { useState } from "react";
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

const NavLinks = (props) => {
  const { lang, sobre, projetos } = props.links;

  return (
    <React.Fragment>
      <li className={props.className}>
        <Link to={`/${lang}/`} className="sidenav-close">
          {sobre}
        </Link>
      </li>
      <li className={props.className}>
        <Link to={`/${lang}/${projetos}`} className="sidenav-close">
          {projetos}
        </Link>
      </li>
    </React.Fragment>
  );
};

export default NavLinks;
