import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";
import MainNavigation from "./shared/MainNavigation";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <main className="container">
          <Switch>
            <Route path="/" exact>
              <Redirect to="/pt/" />
            </Route>
            <Route path="/pt/" exact>
              <h1>Sobre</h1>
            </Route>
            <Route path="/en/" exact>
              <h1>About</h1>
            </Route>
            <Route path="/pt/projetos" exact>
              <h1>Projetos</h1>
            </Route>
            <Route path="/en/projects" exact>
              <h1>Projects</h1>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
