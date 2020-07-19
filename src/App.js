import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";
import LandingPage from "./pages/landing/LandingPage";
import NavBar from "./shared/NavBar";
import SideDrawer from "./shared/SideDrawer";
import Backdrop from "./shared/Backdrop/Backdrop";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleHandler = () => {
    console.log("prev: " + sideDrawerOpen);
    setSideDrawerOpen(!sideDrawerOpen);
    console.log("after: " + sideDrawerOpen);
  };

  return (
    <div className="App">
      <SideDrawer toggleSideBar={drawerToggleHandler} show={sideDrawerOpen} />

      {sideDrawerOpen && <Backdrop toggleSideBar={drawerToggleHandler} />}
      <Router>
        <NavBar toggleSideBar={drawerToggleHandler} />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/pt/" />
          </Route>
          <Route path="/pt/" exact>
            <LandingPage />
          </Route>
          <Route path="/en/" exact>
            <h1>English Version</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
