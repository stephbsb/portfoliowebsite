import React from "react";

import "./BannerSection.css";

import SocialMedia from "../../../shared/Components/SocialMedia";

import bannerImg from "../../../media/svg/bottom-banner.svg";

const BannerSection = (props) => {
  return (
    <section id={props.id} className={`banner-section ${props.className}`}>
      <div className="background">
        <div className="container">
          <div className="banner-text">
            <h3>Olá, eu sou a</h3>
            <h1>Stephany</h1>
            <h2>
              <i class="material-icons">subdirectory_arrow_right</i>Web
              Developer Full Stack
            </h2>
            <h4>
              Sou formada em Engenharia de Controle e Automação pela
              Universidade de Brasília e atuo como desenvolvedora de aplicações
              web, em sua maioria em JAVA, porém me aventuro a aprender novas
              tecnologias.
            </h4>
            <h3>Aqui eu mostro um pouco sobre os meus projetos.</h3>
            <div>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
      <img src={bannerImg} className="bottom"></img>
    </section>
  );
};

export default BannerSection;
