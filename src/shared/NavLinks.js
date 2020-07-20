import React, { useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const NavLinks = (props) => {
  return (
    <ul className="navlinks">
      <li>
        <a href="#home" onClick={props.onClick}>
          sobre
        </a>
      </li>
      <li>
        <a href="#projects" onClick={props.onClick}>
          projetos
        </a>
      </li>
      <li>
        <a href="#skills" onClick={props.onClick}>
          habilidades
        </a>
      </li>
    </ul>
  );
};
export default NavLinks;
