import React from "react";

import "./BannerSection.css";

import bannerImg from "../../../media/svg/bottom-banner.svg";

const BannerSection = (props) => {
  return (
    <section id="home" className="banner-section">
      <div className="background">
        <div className="container">
          <h1>BANNER</h1>
        </div>
      </div>
      <img src={bannerImg} className="bottom"></img>
    </section>
  );
};

export default BannerSection;
