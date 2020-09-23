import React, {useState} from 'react';
import './style.css';
import {ButtonComponent, NormalInput, Logo} from '../../components/';
import Context from '../../contexts/login/form.Contexts';

interface State {
   EmailInvalid: Boolean
    SenhaInvalid: boolean
    isLoad: boolean
    error: boolean
   }

export function Login() {
  const [state, setState] = useState<State>({
    EmailInvalid: false,
    SenhaInvalid: false,
    isLoad: true,
    error: false,
  });

  function setStateFunction() {
    state.EmailInvalid = !state.EmailInvalid;
    state.isLoad = !state.isLoad;
    state.SenhaInvalid = !state.SenhaInvalid;
    state.error = !state.error;
    setState({...state});
  }


  return (
    <div className='Container'>
      <div className='BackgroundColor'></div>
      <main className='SubContainer' >
        <Context.Provider value={state}>
          <form className='Form' action="">
            <Logo/>
            <NormalInput placeholder='Email' />
            <NormalInput placeholder ='Senha' />
            <a className='Forgot' href='/' > Esqueci a senha</a>
            <ButtonComponent Execute={setStateFunction} Text='Login' />
            <a className='Register' >Registrar</a>
          </form>
        </Context.Provider>

      </main>

    </div>


  );
}

