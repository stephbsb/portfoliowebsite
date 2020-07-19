import React from "react";

const NavLinks = (props) => {
  let linkClass = "";

  const setActiveLink = (event) => {
    console.log(event.target.className);
  };

  return (
    <ul>
      <li>
        <a
          href="#home"
          onClick={(props.onClick, setActiveLink)}
          id="home"
          className={linkClass}
        >
          sobre
        </a>
      </li>
      <li>
        <a
          href="#projects"
          onClick={(props.onClick, setActiveLink)}
          id="projects"
          className={linkClass}
        >
          projetos
        </a>
      </li>
      <li>
        <a
          href="#skills"
          onClick={(props.onClick, setActiveLink)}
          id="skills"
          className={linkClass}
        >
          habilidades
        </a>
      </li>
    </ul>
  );
};
export default NavLinks;
