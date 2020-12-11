import React, {useContext} from 'react';
import './content.css';
import {Modal} from '../modal/modal';
import {context} from '../../homecontext/contextmain';
import vagas from '../vagas.stub'

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
          <p id='Info' >{i.companyName}</p>
          <div id='extras' >
            <strong id='Email' >{i.tecnology}</strong>
          </div>
        </div>
      ))
    }
  </div>;
};

