import React from 'react';

import './ProjectsSection.css';

import phisiocare from '../../../media/png/phisiocare.png';
import video from '../../../media/video/Phisiocare.mp4';

import SectionTitle from '../../../shared/Components/SectionTitle';
const ProjectsSection = (props) => {
  return (
    <section id={props.id} className={`projects-section ${props.className}`}>
      <div className='container'>
        <div className='projects-content'>
          <SectionTitle title='Projetos' />
          <ul>
            <li className='project-item' id='phisiocare-website'>
              <div className='project-img'>
                <img src={phisiocare} alt='phisiocare site' />
              </div>
              <div className='project-text'>
                <h2>PHISIOCARE</h2>
                <p>
                  Página para uma clínica de fisioterapia com landing page e
                  blog.
                </p>
                <h4>Tecnologias Utilizadas:</h4>
                <ul className='technologies-list '>
                  <li>
                    <p>Front-end: ReactJs + Gatsby</p>
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
                  Atualmente a parte do blog se encontra em desenvolvimento.
                  Você pode acessar o site já publicado pelo link abaixo:
                </p>
                <ul className='links-list'>
                  <li>
                    <a href='https://www.phisiocare.com.br/' target='_blank'>
                      <p>VISITE A PAGINA</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://github.com/stephbsb/phisiocare-gatsby'
                      target='_blank'
                    >
                      <p>CODIGO NO GITHUB</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className='project-item no-image'>
              <div className='project-text'>
                <h2>PHISIOCARE</h2>
                <h3>Gestão de Pacientes</h3>
                <p>
                  Aplicação web para gestão de pacientes da clinica onde será
                  possivel realizar o cadastro dos pacientes, salvar as
                  avaliações necessárias para as tecnicas de fisioterapia, fazer
                  o agendamento de sessões, entre outras funcionalidades.
                </p>
                <h4>Tecnologias que serão utilizadas:</h4>
                <ul className='technologies-list'>
                  <li>
                    <p>Front-end: ReactJs (Typescript)</p>
                  </li>
                  <li>
                    <p>Back-end: NodeJS</p>
                  </li>
                  <li>
                    <p>Banco de Dados: MongoDB</p>
                  </li>
                </ul>
                <p>
                  O código não está público no github, mas o preview está no ar
                  enquanto o sistema é desenvolvido:
                </p>
                <ul className='links-list'>
                  <li>
                    <a
                      href='https://phisiocareadmin.herokuapp.com/'
                      target='_blank'
                    >
                      <p>VISITE A PAGINA</p>
                    </a>
                  </li>
                </ul>
                <p>Video Demo:</p>
                <video controls autoPlay loop muted>
                  <source src={video} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </div>
            </li>
            <li className='project-item no-image'>
              <div className='project-text'>
                <h2>Este site</h2>
                <p>
                  Este site foi desenvolvido usando ReactJs e outras bibliotecas
                  JavaScript e ainda está em desenvolvimento e constante
                  melhoria.
                </p>
                <p>Você pode ter acesso ao código do site pelo link abaixo.</p>
                <ul className='links-list'>
                  <li>
                    <a
                      href='https://github.com/stephbsb/portfoliowebsite'
                      target='_blank'
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
