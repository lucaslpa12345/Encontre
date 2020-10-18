import React, {useState, useEffect} from 'react';
import {Header} from '../../components/header/header';
import {Main} from './componentsPublish/main/main';
import {useHistory} from 'react-router-dom';
import './publish.css';
import {context} from './publishformcontext';
import {publish} from '../../../domain/usecase/publishinterface';
interface publishprops {
     publish: publish
}

export const PublishComponent: React.FC<publishprops> = (props) => {
  const [state, setState] = useState({
    token: '',
    title: '',
    companyName: '',
    tecnology: '',
    informações: '',
    contato: '',
    preço: '',
    localizaçao: '',
    typo: '',
    presencialOuRemoto: '',
  });


  const history = useHistory();

  async function sendpub( e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    const res = await props.publish.pub(state);

    if (res.status === 200) {
      alert('Pub criada com sucesso');
      history.push('/Home');
    }
  }

  useEffect(()=> {
    const token = localStorage.getItem('token');
    console.log('token', token)
    if (!token) {
      return history.push('/');
    }
    setState({...state, token});
  }, []);

  return (
    <div id='Container' >
      <context.Provider value={{state, setState, sendpub}} >
        <Main/>
      </context.Provider>
    </div>
  );
};

