import React from 'react';
import HeaderStyles from './header.styles';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <HeaderStyles>
      <Link to="/" className="link">
        <div className="header">
          <img
            src={'https://static.sketchfab.com/img/press/logos/logo.png'}
            className="image item"
            alt="logo"
          />
          <div className="title item">Sketchfab</div>
        </div>
      </Link>
    </HeaderStyles>
  );
};

export default Header;
