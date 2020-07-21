import React from "react";

import "./Footer.css";
import reactIcon from "../../../media/png/react.png";
import SocialMedia from "../../../shared/Components/SocialMedia";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h2>Entre em contato</h2>
          <SocialMedia />
        </div>
        <div className="footer-bottom">
          <h6>Desenvolvido com ReactJS </h6>

          <h6>Copyright &copy; 2020 - Todos os direitos reservados</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
