import React, {useState} from 'react';
import {Header} from '../../components/header/header';
import {Modal} from './componentsHome/modal/modal';
import './home.css';
import {Body} from './componentsHome/body/body';
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
    page: 1,
    unauthorized: false,
  });

  React.useEffect(() => {
  }, [state]);


  async function getAllPubs(page:number) {
    const token = localStorage.getItem('token') || '';
    const res = await props.getAllPubsfromDB.getpubs(token, page);
    if (res === 'Unauthorized') {
      return history.push('/');
    }
    const arrayWithIDinString = res.body.map((i:any) => {
      return {...i, id: `${i.id}`, accountId: 'any_id'};
    });

    setState({...state, posts: arrayWithIDinString, vagas: arrayWithIDinString});
    return res;
  }


  return (


    <div id="HomeContainer">
      <context.Provider value = {{state, setState, getAllPubs}} >
        <Modal />
        <Header/>
        <Body/>
      </context.Provider>
    </div>
  );
};


