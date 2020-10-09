import React, {useEffect, useState} from 'react';
import './changepassword.css';
import {ButtonComponent, NormalInput} from '../../components/';
import Context from '../../contexts/login/form.Contexts';
import {Validator} from 'presentation/validators/interfaceValidator';
import {Logo} from '../../components/logo/index';

   interface ChangePasswordTypes {
       validatorMinCaracteres: Validator
   }

export const ChangePassword: React.FC<ChangePasswordTypes> = (props) => {
  const [state, setState] = useState({
    'SenhaIsValid': true,
    'Confirmar SenhaIsValid': true,
    'Senha': '',
    'Confirmar Senha': '',
    'isLoad': false,
    'error': '',
  });

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent> ) {
    e.preventDefault();
    setState({...state, isLoad: true});
    if (!state.SenhaIsValid || !state['Confirmar SenhaIsValid'] || !state.Senha || !state['Confirmar Senha'] ) {
      setState({...state, isLoad: false});
      return setState({...state, error: 'Informações inválidas'});
    }
  }

  useEffect( () => {
    const res = props.validatorMinCaracteres.isValid(state['Confirmar Senha'], 6);
    console.log(res);
    if (!res) {
      setState({...state, 'Confirmar SenhaIsValid': false});
    } else {
      setState({...state, 'Confirmar SenhaIsValid': true});
    }
  }, [state['Confirmar SenhaIsValid']]);

  useEffect( () => {
    const res = props.validatorMinCaracteres.isValid(state.Senha, 6);
    if (!res) {
      setState({...state, SenhaIsValid: false});
    } else {
      setState({...state, SenhaIsValid: true});
    }
  }, [state.Senha]);


  useEffect(() => {
    verifyPassword();
  }, [state['Confirmar Senha']]);

  function verifyPassword() {
    const validate = state['Confirmar Senha'] === state.Senha;
    if (!validate) {
      state['Confirmar SenhaIsValid'] = false;
      return setState({...state});
    } else {
      state['Confirmar SenhaIsValid'] = true;
      return setState({...state});
    }
  }
  return (
    <div className='ContainerChangePassword'>
      <div className='BackgroundColorLogin'></div>
      <main className='SubContainerLogin' >
        <Context.Provider value={{state, setState}}>
          <form className='FormChangePassword' action="">
            <Logo/>
            <NormalInput placeholder='Senha' />
            <NormalInput placeholder ='Confirmar Senha' />
            <ButtonComponent execute={handleSubmit} Text='Trocar Senha' />
          </form>
        </Context.Provider>
      </main>
    </div>
  );
};

