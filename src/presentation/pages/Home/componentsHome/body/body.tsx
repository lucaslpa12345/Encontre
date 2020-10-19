import React from 'react';
import {Search} from '../../componentsHome/search/search';
import {SearchLocalFilter} from '../../componentsHome/search/algorithms/searchFilter';
import {SearchLocations} from '../search/algorithms/searchLotions';
import {PublishComponent} from '../../../Publish/Publish';
import {Publish} from '../../../../../data/usecase/publish/publish';
import {AxiosHttpClient} from '../../../../../infra/http/axios.http-client/axios.http-client';
import './body.css';
import {Footer} from '../../componentsHome/footer/footer';
import {context} from '../../homecontext/contextmain';

export const Body: React.FC = () => {
  const [states, setState] = React.useState({
    Page: 1,
    Search: false,
  });
  const {state} = React.useContext(context);

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
  const searchLocalfilter = new SearchLocalFilter;
  const searchfilter = new SearchLocations;
  return <div id='BodyContainer' >
    <div id='MenuBody' >
      <span id='Selected' >Vagas</span>
      <span id= 'NSelected'>Nova Vaga</span>
    </div>
    <span onClick={() => {
      setState({...states, Search: !states.Search});
      setSearch();
    }} id='Filtrar' >filtrar</span>
    {states.Page === 2 ? <></> : <div id='Page1' >
      <Search searchFilter={searchLocalfilter} searchLocal={searchfilter} />
      <div>
        {
          state.vagas.map((i:any) => {
            console.log(i);
            return (
              <div key={i.id} >
                <span>{i.title}</span>
              </div>
            );
          })
        }
      </div>
    </div> }
    {states.Page === 2 ? <PublishComponent publish={publish}/> : <></>}
    <Footer/>
  </div>;
};

