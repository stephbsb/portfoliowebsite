import React from "react";

import BannerSection from "./sections/BannerSection";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import Footer from "./sections/Footer";

import "./LandingPage.css";

const LandingPage = (props) => {
  return (
    <main>
      <div className="landing-page">
        <BannerSection id="home" className="pagesection" />
        <ProjectsSection id="projects" className="pagesection" />

        <Footer />
      </div>
    </main>
  );
};

export default LandingPage;
