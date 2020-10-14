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

  useEffect(() => console.log(state), [state]);
  const history = useHistory();

  async function sendpub( e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    console.log('');
    const res = await props.publish.pub(state);
    console.log(res);
    if (res.status === 200) {
      alert('Pub criada com sucesso');
      history.push('/Home');
    }
  }


  return (
    <div id='Container' >
      <context.Provider value={{state, setState, sendpub}} >
        <Header/>
        <Main/>
      </context.Provider>
    </div>
  );
};

