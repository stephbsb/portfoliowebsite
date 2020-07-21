import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";
import LandingPage from "./pages/landing/LandingPage";
import NavBar from "./shared/Navigation/NavBar";
import SideDrawer from "./shared/Navigation/SideDrawer";
import Backdrop from "./shared/Components/Backdrop";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  return (
    <div className="App">
      {sideDrawerOpen && <Backdrop toggleSideBar={drawerToggleHandler} />}
      <Router>
        <SideDrawer toggleSideBar={drawerToggleHandler} show={sideDrawerOpen} />
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
