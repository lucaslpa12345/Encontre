import React from 'react';
import './header.css';
export const Header: React.FC = () => {
  return (
    <header id='ContainerHeader' >
      <div id='ContainerLogo' >
        <strong id='StrongLogo' >Encontre</strong>
      </div>
      <div id='ContainerProfile' >
        <strong id='Name'> Usuário </strong>
      </div>
    </header>
  );
};


