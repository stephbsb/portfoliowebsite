import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = (props) => {
  return (
    <ul className='navlinks'>
      <li>
        <Link to='#home' onClick={props.onClick}>
          sobre
        </Link>
      </li>
      <li>
        <Link to='#projects' onClick={props.onClick}>
          projetos
        </Link>
      </li>
      <li>
        <Link to='#mais' onClick={props.onClick}>
          mais
        </Link>
      </li>
    </ul>
  );
};
export default NavLinks;
