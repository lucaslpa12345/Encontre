import './main.css';
import React, {useContext} from 'react';
import {context} from '../../publishformcontext';
export const Main: React.FC = () => {
  const {state, setState, sendpub} = useContext(context);


  return (<div id='MainPublishContainer' >
    <form id='FormPublish' >
      <input onChange={(e) => setState({...state, title: e.target.value}) } className='InputPublish' placeholder='Title' />
      <input onChange={(e) => setState({...state, companyName: e.target.value}) }className='InputPublish' placeholder='Nome contratante/empresa'/>
      <input onChange={(e) => setState({...state, contato: e.target.value}) } className='InputPublish' placeholder='Contato número/email etc' />
      <input onChange={(e) => setState({...state, preço: e.target.value}) } id='InputPreço' type='number' placeholder='preço/salário'/>
      <div id='dados' >
        <select onChange={(e) => setState({...state, typo: e.target.value}) } id='SelectOptions' name='select' >
          <option value="">Tipo do trabalho</option>
          <option value="Freelance">Freelance</option>
          <option value="CLT">CLT</option>
          <option value="PJ">PJ</option>
        </select>
        <select onChange={(e) => setState({...state, presencialOuRemoto: e.target.value}) } id='SelectOptions' name='select' >
          <option value="">Presencial ou remoto?</option>
          <option value="Remoto">Remoto</option>
          <option value="Presencial">Presencial</option>
        </select>
      </div>
      <input onChange={(e) => setState({...state, localizaçao: e.target.value}) } className='InputPublish' placeholder='Localização' />
      <textarea onChange={(e) => setState({...state, informações: e.target.value}) } id='Informações' placeholder='Informações' />
      <input onChange={(e) => setState({...state, tecnology: e.target.value}) } className='InputPublish' placeholder='Principais tecnologias' />
      <div id='Buttons' >
        <button onClick={(e) => sendpub(e)} id='ButtonPublish' >
          Publicar
        </button>
      </div>
    </form>
  </div>);
};


