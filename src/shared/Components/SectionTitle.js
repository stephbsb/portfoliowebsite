import React from "react";

import "./SectionTitle.css";

const SectionTitle = (props) => {
  return (
    <div className="section-title">
      <h1>{props.title}</h1>
      <div className="section-title-division"></div>
    </div>
  );
};

export default SectionTitle;
