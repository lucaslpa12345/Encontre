import './main.css';
import React from 'react';
import {Link} from 'react-router-dom';

// import { Container } from './styles';
export const Main: React.FC = () => {
  return (<div id='MainContainer' >
    <form id='FormPublish' >
      <input id='InputTitle' placeholder='Title' />
      <input id='InputContato' placeholder='Contato número/email etc' />
      <div id='dados' >
        <input id='InputPreço' placeholder='preço/salário'/>
        <select id='SelectOptions' name='select' >
          <option value="Freelance">Freelance</option>
          <option value="CLT">CLT</option>
          <option value="PJ">PJ</option>
        </select>
      </div>
      <textarea id='Informações' placeholder='Informações' />
      <input id='Tecnologias' placeholder='Principais tecnologias' />
      <div id='Buttons' >
        <button id='ButtonPublish' >
          Publicar
        </button>
        <Link to='/Home' id='ButtonBack' >
          voltar
        </Link>
      </div>
    </form>
  </div>);
};


