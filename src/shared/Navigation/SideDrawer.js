import React from "react";

import "./SideDrawer.css";
import NavLinks from "./NavLinks";

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";

  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <NavLinks onClick={props.toggleSideBar} />
    </nav>
  );
};

export default SideDrawer;
