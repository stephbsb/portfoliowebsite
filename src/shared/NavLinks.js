import React from "react";

const NavLinks = (props) => {
  let linkClass = "";

  return (
    <ul>
      <li>
        <a
          href="#home"
          onClick={props.onClick}
          id="home_link"
          className={linkClass}
        >
          sobre
        </a>
      </li>
      <li>
        <a
          href="#projects"
          onClick={props.onClick}
          id="projects_link"
          className={linkClass}
        >
          projetos
        </a>
      </li>
      <li>
        <a
          href="#skills"
          onClick={props.onClick}
          id="skills_link"
          className={linkClass}
        >
          habilidades
        </a>
      </li>
    </ul>
  );
};
export default NavLinks;
