import React from 'react';
import {Header} from './componentsHome/header/header';
import {Main} from './componentsHome/main/main';
import './home.css';
export interface HomeProps {

}

export const Home: React.FC<HomeProps> = () => {
  return (


    <div id="container">
      <Header/>
      <Main/>
    </div>
  );
};


