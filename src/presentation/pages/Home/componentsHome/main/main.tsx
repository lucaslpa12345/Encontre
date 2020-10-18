import React, {useState} from 'react';
import {Search} from '../search/search';
import {Content} from '../content/content';
import {SearchLocations} from '../search/algorithms/searchLotions';
import {SearchLocalFilter} from '../search/algorithms/searchFilter';
import {Footer} from '../footer/footer';
import './main.css';
import {AxiosHttpClient} from '../../../../../infra/http/axios.http-client/axios.http-client';
import {Publish} from '../../../../../data/usecase/publish/publish';
import {PublishComponent} from '../../../Publish/Publish';
export interface MainProps {
}


export const Main: React.FC<MainProps> = (props) => {
  const searchlocation = new SearchLocations;
  const searchfilter = new SearchLocalFilter;
  const [states, setStates] = useState({
    criarVaga: false,
    selected: 1,
    openFilter: false,
    tamanho: window.innerWidth,
  });


  const client = new AxiosHttpClient;
  const publish = new Publish(client, 'http://localhost:2500/publish' );
  return (
    <main id='ContainerMain' >

      <div id='Content' >
        <div id='Menu' >
          <div id='MenuContent' > <span onClick={() => setStates({...states, selected: 1})} id={states.selected === 1 ? 'Selected' : 'nSelected' } >Todas as vagas</span> <span onClick={() => setStates({...states, selected: 2})} id={states.selected === 2 ? 'Selected' : 'nSelected' }>Criar uma nova vaga</span >
          </div>
          {states.tamanho < 600 ? <></> : <Search searchFilter={searchfilter} searchLocal={searchlocation} /> }
        </div>
        <div onClick={() => setStates({...states, openFilter: !states.openFilter})} id='Filter' ><span>filtrar</span></div>
        {states.openFilter ? <Search searchFilter={searchfilter} searchLocal={searchlocation} /> : <></>}
        { states.selected === 2 ? <PublishComponent publish={publish} /> : <Content/>}
      </div>
      { states.selected === 2 ? <></> : <Footer/>}

    </main>
  );
};

