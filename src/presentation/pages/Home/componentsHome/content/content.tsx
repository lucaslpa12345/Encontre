import React, {useEffect, useContext} from 'react';
import './content.css';
import {Modal} from '../modal/modal';
import {context} from '../../homecontext/contextmain';

export const Content: React.FC = () => {
  const {state, setState} = useContext(context);


  return <div id='ContainerContent' >
    <context.Provider value={{state, setState}} >
      <Modal />
    </context.Provider>
    {
      state.vagas.map((i:any)=> (
        <div key={i.id} id='VagaItem' onClick={(e) => setState({...state, infoModal: i, openModal: !state.openModal})
        } >
          <span id='Title' > {i.title}</span>
          <p id='Info' >{i.proprietario}</p>
          <div id='extras' >
            <strong id='Email' >{i.skill}</strong>
          </div>

        </div>
      ))
    }
  </div>;
};

