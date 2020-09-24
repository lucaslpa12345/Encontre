import React, {useEffect, useState} from 'react';
import './style.css';
import {ButtonComponent, NormalInput, Logo} from '../../components/';
import Context from '../../contexts/login/form.Contexts';
import {Validator} from 'presentation/validators/interfaceValidator';

interface State {
  EmailIsValid: boolean
  SenhaIsValid: boolean
    isLoad: boolean
    error: boolean
    Email: string
    Senha: string
   }

   interface LoginTypes {
     Validator: Validator
   }

export const Login: React.FC<LoginTypes> = ({Validator}) => {
  const [state, setState] = useState<State>({
    EmailIsValid: true,
    SenhaIsValid: true,
    Email: '',
    Senha: '',
    isLoad: false,
    error: false,
  });
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setNumber(number + 1);
  }, [state]);

  useEffect(() => {
    const EmailisValid = Validator.isValid(state.Email);
    const newstate = state;
    if (!newstate.Email) {
      newstate.EmailIsValid = true;
      return setState({...newstate});
    }
    newstate.EmailIsValid = EmailisValid;
    setState(newstate);
  }, [state.Email]);

  useEffect(() => {
    const SenhaIsValid = Validator.isValid(state.Senha);
    const newstate = state;
    if (!newstate.Senha) {
      newstate.SenhaIsValid = true;
      return setState({...newstate});
    }
    newstate.SenhaIsValid = SenhaIsValid;
    setState(newstate);
  }, [state.Senha]);


  return (
    <div className='Container'>
      <div className='BackgroundColor'></div>
      <main className='SubContainer' >
        <Context.Provider value={{state, setState}}>
          <form className='Form' action="">
            <Logo/>
            <NormalInput emailIsValid={state.EmailIsValid} placeholder='Email' />
            <NormalInput senhaisValid={state.SenhaIsValid} placeholder ='Senha' />
            <a className='Forgot' href='/' > Esqueci a senha</a>
            <ButtonComponent Text='Login' />
            <a className='Register' >Registrar</a>
          </form>
        </Context.Provider>
      </main>
    </div>
  );
};

