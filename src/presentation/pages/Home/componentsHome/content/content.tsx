import React, {useContext} from 'react';
import './content.css';
import {context} from '../../homecontext/contextmain';


export const Content: React.FC = () => {
  const {state, setState} = useContext(context);

  return <div id='ContainerContent' >
    {
      state.vagas.map((i:any)=> (
        <div key={i.id} id='VagaItem' onClick={(e) => setState({...state, infoModal: i, openModal: !state.openModal})
        } >
          <span id='TitleContent' > {i.title}</span>
          <p id='InfoContent' >{i.companyName}</p>
          <div id='extras' >
            <strong id='TecnologyContent' >{i.tecnology}</strong>
          </div>
        </div>
      ))
    }
  </div>;
};

