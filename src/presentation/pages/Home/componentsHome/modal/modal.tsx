import React, {useContext} from 'react';
import './modal.css';
import {context} from '../../homecontext/contextmain';
// import { Container } from './styles';

export const Modal: React.FC = () => {
  const {state, setState} = useContext(context);


  function closedModal() {
    return setState({...state, openModal: false});
  }

  return (
       state.openModal ? (<div id='modalContainer' >
         <div id='ItemModal' >
           <div onClick={closedModal} id='back' >
             <span>voltar</span>
           </div>
           <div id='vagaModal' >
             <span id='Title' > {state.infoModal.title}</span>
             <div id='paragrafo' >
               <p id='Info' >{state.infoModal.informações}</p>
             </div>
             <div id='extra' >
               <strong id='Pryce' > valor/custo/salário: {state.infoModal.preço} </strong>
               <strong id='Email' >Contato: {state.infoModal.contato} </strong>
               <strong id='Local' >Localização: {state.infoModal.localizaçao} </strong>
               <strong id='Type' > {state.infoModal.typo} </strong>
               <strong id='PresencialRemoto' > {state.infoModal.presencialOuRemoto} </strong>
             </div>
           </div>
         </div>
       </div>) : <></>
  );
};
