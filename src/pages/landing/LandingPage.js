import React from "react";

import BannerSection from "./sections/BannerSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";

import "./LandingPage.css";

const LandingPage = (props) => {
  return (
    <main>
      <div className="landing-page">
        <BannerSection id="home" />
        <ProjectsSection id="projects" />
      </div>
    </main>
  );
};

export default LandingPage;
