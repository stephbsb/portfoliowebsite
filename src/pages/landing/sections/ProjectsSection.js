import React from "react";

import "./ProjectsSection.css";

import phisiocare from "../../../media/png/phisiocare.png";
import engrenagem from "../../../media/svg/cog-solid.svg";

import SectionTitle from "../../../shared/Components/SectionTitle";
const ProjectsSection = (props) => {
  return (
    <section id={props.id} className={`${props.className}`}>
      <div className="container">
        <div className="projects-content">
          <SectionTitle title="Projetos" />
          <ul>
            <li className="project-item ">
              <div className="project-img">
                <img src={phisiocare} />
              </div>
              <div className="project-text">
                <h2>PHISIOCARE</h2>
                <p>
                  Página para uma clínica de fisioterapia com landing page e
                  blog.
                </p>
                <h4>Tecnologias Utilizadas:</h4>
                <ul className="technologies-list ">
                  <li>
                    <p>Front-end: ReactJs</p>
                  </li>
                  <li>
                    <p>Back-end: NodeJS</p>
                  </li>
                  <li>
                    <p>Banco de Dados: MongoDB</p>
                  </li>
                  <li>
                    <p>MaterializeCSS</p>
                  </li>
                </ul>
                <p>
                  Atualmente a página se encontra em construção e você
                  acompanhar pelos links abaixo:
                </p>
                <ul className="links-list">
                  <li>
                    <a href="https://phisiocare.herokuapp.com/" target="_blank">
                      <p>VISITE A PAGINA</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/stephbsb/phisiocare#"
                      target="_blank"
                    >
                      <p>CODIGO NO GITHUB</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="project-item no-image">
              <div className="project-text">
                <h2>PHISIOCARE</h2>
                <h3>Gestão de Pacientes</h3>
                <p>
                  Aplicação web para gestão de pacientes da clinica onde será
                  possivel realizar o cadastro dos pacientes, salvar as
                  avaliações necessárias para as tecnicas de fisioterapia, fazer
                  o agendamento de sessões, entre outras funcionalidades.
                </p>
                <h4>Tecnologias que serão utilizadas:</h4>
                <ul className="technologies-list">
                  <li>
                    <p>Front-end: ReactJs</p>
                  </li>
                  <li>
                    <p>Back-end: NodeJS</p>
                  </li>
                  <li>
                    <p>Banco de Dados: MongoDB</p>
                  </li>
                </ul>
                <p>
                  Atualmente a página se encontra em fase de design e definição
                  da arquitetura do sistema.
                </p>
              </div>
            </li>
            <li className="project-item no-image">
              <div className="project-text">
                <h2>Este site</h2>
                <p>
                  Este site foi desenvolvido usando ReactJs e outras bibliotecas
                  JavaScript e ainda está em desenvolvido e constante melhoria.
                </p>
                <p>Você pode ter acesso ao código do site pelo link abaixo.</p>
                <ul className="links-list">
                  <li>
                    <a
                      href="https://github.com/stephbsb/portfoliowebsite"
                      target="_blank"
                    >
                      <p>CODIGO NO GITHUB</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
