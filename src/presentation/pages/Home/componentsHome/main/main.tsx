import React, {useEffect, useContext} from 'react';
import {Search} from '../search/search';
import {Content} from '../content/content';
import {SearchLocations} from '../search/algorithms/searchLotions';
import {SearchLocalFilter} from '../search/algorithms/searchFilter';
import {context} from '../../homecontext/contextmain';
import vagas from '../vagas.stub';
import './main.css';
export interface MainProps {
}


export const Main: React.FC<MainProps> = (props) => {
  const searchlocation = new SearchLocations;
  const searchfilter = new SearchLocalFilter;

  const {state} = useContext(context);


  return (
    <main id='ContainerMain' >

      <Search searchFilter={searchfilter} searchLocal={searchlocation} />
      <Content/>

    </main>
  );
};

