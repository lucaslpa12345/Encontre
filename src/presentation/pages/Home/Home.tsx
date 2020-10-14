import React, {useState, useEffect} from 'react';
import {Header} from '../../components/header/header';
import {Main} from './componentsHome/main/main';
import './home.css';
import {context} from './homecontext/contextmain';
import {allpubs} from '../../../domain/usecase/allpubs';
export interface HomeProps {
       getAllPubsfromDB: allpubs
}

export const Home: React.FC<HomeProps> = (props) => {
  const [state, setState] = useState({
    openModal: false,
    infoModal: {

    },
    vagas: [{}],
  });
  async function getAllPubs() {
    const res = await props.getAllPubsfromDB.getpubs();
    setState({...state, vagas: res.body});
    return res;
  }

  useEffect(() => {
    getAllPubs();
  }, []);

  return (


    <div id="container">
      <context.Provider value = {{state, setState}} >
        <Header/>
        <Main/>
      </context.Provider>
    </div>
  );
};


