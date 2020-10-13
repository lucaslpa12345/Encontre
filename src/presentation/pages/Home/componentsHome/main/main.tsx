import React, {useContext, useEffect} from 'react';
import {Search} from '../search/search';
import {Content} from '../content/content';
import {SearchLocations} from '../search/algorithms/searchLotions';
import {SearchLocalFilter} from '../search/algorithms/searchFilter';
import {context} from '../../homecontext/contextmain';
import vagas from '../vagas.stub';
import './main.css';
export interface MainProps {

}

export const Main: React.FC<MainProps> = () => {
  const [state, setState] = React.useState({
    openModal: false,
    infoModal: {

    },
    vagas: [{}],
  });
  useEffect(() => {
    setState({...state, vagas});
  }, []);
  useEffect(() => {
    console.log('hm', state.vagas);
  }, [state.vagas]);

  const searchlocation = new SearchLocations;
  const searchfilter = new SearchLocalFilter;
  return (
    <main id='ContainerMain' >
      <context.Provider value={{state, setState}} >
        <Search searchFilter={searchfilter} searchLocal={searchlocation} />
        <Content/>
      </context.Provider>
    </main>
  );
};

