import React from 'react';
import './header.css';
import {Link} from 'react-router-dom'
export const Header: React.FC = () => {
  const [state, setState] = React.useState({
    ShowProfileOptions: false,
  });
  return (
    <header id='ContainerHeader' >
      <div id='ContainerLogo' >
        <strong id='StrongLogo' >Encontre</strong>
      </div>
      <div onClick={ () => setState({...state, ShowProfileOptions: !state.ShowProfileOptions})} id='ContainerProfile' >
        <strong id='Name'> Usuário </strong>
        <div style={state.ShowProfileOptions ? {display: 'flex'} : {display: 'none'} } id='AccountOptions' >
          <Link to='/' id='Option' >Sair</Link>
        </div>
      </div>
    </header>
  );
};


