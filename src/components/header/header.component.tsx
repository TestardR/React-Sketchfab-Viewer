import React from 'react';
import HeaderStyles from './header.styles';

const Header: React.FC = () => {
  return (
    <HeaderStyles>
      <div className="header">
        <img
          src={'https://static.sketchfab.com/img/press/logos/logo.png'}
          className="image item"
          alt="logo"
        />
        <div className="title item">Sketchfab</div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
