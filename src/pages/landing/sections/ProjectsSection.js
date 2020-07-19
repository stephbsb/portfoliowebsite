import React from "react";

import "./ProjectsSection.css";
import spinner from "../../../media/svg/cog-solid.svg";

const ProjectsSection = (props) => {
  return (
    <section id="projects">
      <div className="container">
        <div className="projects-content">
          <h1>Em construção</h1>
          <img src={spinner} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
