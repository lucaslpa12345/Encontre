import React from 'react';
import {Search} from '../search/search';
import {Content} from '../content/content';
import {SearchLocations} from '../search/algorithms/searchLotions';
import './main.css';
export interface MainProps {

}

export const Main: React.FC<MainProps> = () => {
  const searchlocation = new SearchLocations;
  return (

    <main id='ContainerMain' >
      <Search searchLocal={searchlocation} />
      <Content/>
    </main>
  );
};

