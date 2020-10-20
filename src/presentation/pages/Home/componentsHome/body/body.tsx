import React from 'react';
import {PublishComponent} from '../../../Publish/Publish';
import {Publish} from '../../../../../data/usecase/publish/publish';
import {AxiosHttpClient} from '../../../../../infra/http/axios.http-client/axios.http-client';
import './body.css';
import {Footer} from '../../componentsHome/footer/footer';
import {context} from '../../homecontext/contextmain';
import {SearchFactory} from '../../../../../main/factory/searchFactory';

export const Body: React.FC = () => {
  const [states, setStates] = React.useState({
    Page: 1,
    Search: false,
  });
  const {state, setState} = React.useContext(context);

  function setSearch() {
    const element = document.getElementById('SearchContainer');
    if (states.Search && element) {
      element.style.display = 'none';
    }
    if (!states.Search && element) {
      element.style.display = 'flex';
    }
    return;
  }

  const http = new AxiosHttpClient;
  const publish = new Publish(http, 'localhost:2500/publish');
  return <div id='BodyContainer' >
    <div id='MenuBody' >
      <span onClick={() => setStates({...states, Page: 1})} id= { states.Page === 1 ? 'Selected' :'NSelected'} >Vagas</span>
      <span onClick={() => setStates({...states, Page: 2})} id= { states.Page === 2 ? 'Selected' :'NSelected'}>Nova Vaga</span>
    </div>
    {states.Page === 1 && <span onClick={() => {
      setStates({...states, Search: !states.Search});
      setSearch();
    }} id='Filtrar' >filtrar</span>}
    {states.Page === 2 ? <PublishComponent publish={publish}/> : <div id='Page1' >
      <SearchFactory/>
      <div>
        {
          state.vagas.map((i:any) => {
            return (
              <div onClick={() => setState({...state, infoModal: i, openModal: true})} id='ItemContainer' key={i.id} >
                <span id='ItemTitle' >{i.title}</span>
                <span id='ItemName' >{i.companyName}</span>
                <span id='ItemTecnology'>{i.tecnology}</span>
              </div>
            );
          })
        }
      </div>
    </div> }
    {states.Page === 1 && <Footer/>}
  </div>;
};

