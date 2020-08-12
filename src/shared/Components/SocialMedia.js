import React from 'react';

import './SocialMedia.css';

const SocialMedia = () => {
  return (
    <ul className='redes-sociais'>
      <li>
        <a href='https://github.com/stephbsb/' target='_blank'>
          <i className='fa fa-github fa-2x'></i>
        </a>
      </li>
      <li>
        <a
          href='https://www.linkedin.com/in/stephany-rodrigues/'
          target='_blank'
        >
          <i className='fa fa-linkedin-square fa-2x'></i>
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/stephany.rr/' target='_blank'>
          <i className='fa fa-instagram fa-2x'></i>
        </a>
      </li>
      <li>
        <a href='https://www.facebook.com/stephany.r.rodrigues' target='_blank'>
          <i className='fa fa-facebook-square fa-2x'></i>
        </a>
      </li>
      <li>
        <a href='mailto:rrodrigues.stephany@gmail.com' target='_blank'>
          <i className='fa fa-envelope fa-2x'></i>
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
