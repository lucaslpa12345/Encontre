import React, {useState, useEffect} from 'react';
import {Header} from '../../components/header/header';
import {Main} from './componentsHome/main/main';
import './home.css';
import {context} from './homecontext/contextmain';
import {allpubs} from '../../../domain/usecase/allpubs';
import {Content} from './componentsHome/content/content'
export interface HomeProps {
       getAllPubsfromDB: allpubs
}

export const Home: React.FC<HomeProps> = (props) => {
  const [state, setState] = useState({
    openModal: false,
    infoModal: {

    },
    vagas: [{}],
    posts: [{}],
  });
  async function getAllPubs() {
    const res = await props.getAllPubsfromDB.getpubs();
    const newres = res.body.map((i:any) => {
      return {...i, id: `${i.id}`};
    });
    console.log(newres);
    setState({...state, posts: newres, vagas: newres});
    return res;
  }

  useEffect(() => {
    getAllPubs();
  }, []);

  return (


    <div id="container">
      <context.Provider value = {{state, setState, getAllPubs}} >
        <Main/>
       </context.Provider>
    </div>
  );
};


