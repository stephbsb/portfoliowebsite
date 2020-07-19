import React from "react";

import BannerSection from "./sections/BannerSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";

const LandingPage = (props) => {
  return (
    <main>
      <BannerSection />
      <ProjectsSection />
    </main>
  );
};

export default LandingPage;
