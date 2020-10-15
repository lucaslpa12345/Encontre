import React, {useState, useEffect} from 'react';
import {Header} from '../../components/header/header';
import {Main} from './componentsHome/main/main';
import './home.css';
import {context} from './homecontext/contextmain';
import {allpubs} from '../../../domain/usecase/allpubs';
import {useHistory} from 'react-router-dom';
export interface HomeProps {
       getAllPubsfromDB: allpubs
}

export const Home: React.FC<HomeProps> = (props) => {
  const history = useHistory();
  const [state, setState] = useState({
    openModal: false,
    infoModal: {

    },
    vagas: [{}],
    posts: [{}],
    unauthorized: false,
  });


  async function getAllPubs() {
    const token = localStorage.getItem('token') || '';
    const res = await props.getAllPubsfromDB.getpubs(token);
    if (res === 'Unauthorized') {
      return history.push('/');
    }
    const newres = res.body.map((i:any) => {
      return {...i, id: `${i.id}`};
    });

    setState({...state, posts: newres, vagas: newres});
    return res;
  }

  useEffect(() => {
    getAllPubs();
  }, []);

  return (


    <div id="container">
      <context.Provider value = {{state, setState, getAllPubs}} >
        <Header/>
        <Main/>
      </context.Provider>
    </div>
  );
};


