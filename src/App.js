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
              <p className="flow-text">
                <h5>
                  <b>Me chamo Stephany Ribeiro Rodrigues.</b>
                </h5>
                Sou Engenheira de Controle e Automação formada pela Universidade
                de Brasília
              </p>
              <p className="flow-text">
                Este é um website portfolio para apresentar trabalhos de
                desenvolvimento web e um pouco sobre mim e as minhas
                experiências.
              </p>
              <div className="divider grey"></div>
              <p className="flow-text">
                Este site se encontra em processo de desenvolvimento.
              </p>
              <p className="flow-text">
                Você pode acessar o código no github clicando no link abaixo.
              </p>
              <p className="flow-text">
                <i class="fa fa-angle-double-right"></i>
                <a
                  href="https://github.com/stephbsb/portfoliowebsite"
                  className="white-text padding-left-10"
                  target="_blank"
                >
                  Código
                </a>
              </p>
            </Route>
            <Route path="/en/" exact>
              <p className="flow-text">
                <h5>
                  <b>My name is Stephany Ribeiro Rodrigues</b>
                </h5>
                I am an Automation and Control Engineer graduated in the
                University of Brasilia, Brazil.
              </p>
              <p className="flow-text">
                This website is a portfolio so I can present my work and
                experience.
              </p>
              <div className="divider grey"></div>
              <p className="flow-text">
                This website is currently under devepment.
              </p>
              <p className="flow-text">
                You can access the code on github using the link below.
              </p>
              <p className="flow-text">
                <i class="fa fa-angle-double-right"></i>
                <a
                  href="https://github.com/stephbsb/portfoliowebsite"
                  className="white-text padding-left-10"
                  target="_blank"
                >
                  Code
                </a>
              </p>
            </Route>
            <Route path="/pt/projetos" exact>
              <div className="center">
                <h3>Em breve</h3>
              </div>
            </Route>
            <Route path="/en/projects" exact>
              <div className="center">
                <h3>Soon</h3>
              </div>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
