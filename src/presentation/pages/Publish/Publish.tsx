import React from 'react';
import {Header} from '../../components/header/header';
import {Main} from './componentsPublish/main/main';
import './publish.css';
export const Publish: React.FC = () => {
  return (
    <div id='Container' >
      <Header/>
      <Main/>
    </div>
  );
};

