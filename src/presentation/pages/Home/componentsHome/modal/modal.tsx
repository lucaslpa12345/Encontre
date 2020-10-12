import React, {useContext} from 'react';
import './modal.css';
import {context} from '../content/createcontexts';
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
               <p id='Info' >{state.infoModal.info}</p>
             </div>
             <strong id='Email' >email para contato: {state.infoModal.email} </strong>
           </div>
         </div>
       </div>) : <></>
  );
};
