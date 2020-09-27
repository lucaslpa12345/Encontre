import React, {useEffect, useState} from 'react';
import './style.css';
import {ButtonComponent, NormalInput, Logo} from '../../components/';
import Context from '../../contexts/login/form.Contexts';
import {Validator} from 'presentation/validators/interfaceValidator';
import {AuthTypes} from 'data/usecase/authenticate';

   interface LoginTypes {
     Validator: {
       validatorEmail: Validator,
       validatorSenha: Validator
     }
     Authenticate: AuthTypes
   }

export const Login: React.FC<LoginTypes> = (props) => {
  const [state, setState] = useState({
    EmailIsValid: true,
    SenhaIsValid: true,
    Email: '',
    Senha: '',
    isLoad: false,
    error: '',
  });


  useEffect(() => {
    const EmailisValid = props.Validator.validatorEmail.isValid(state.Email);
    if (!state.Email) {
      state.EmailIsValid = true;
      return setState({...state});
    }
    state.EmailIsValid = EmailisValid;
    setState({...state});
  }, [state.Email]);

  useEffect(() => {
    const SenhaIsValid = props.Validator.validatorSenha.isValid(state.Senha);
    if (!state.Senha) {
      state.SenhaIsValid = true;
      return setState({...state});
    }
    state.SenhaIsValid = SenhaIsValid;
    setState({...state});
  }, [state.Senha]);


  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent> ) {
    try {
      e.preventDefault();
      setState({...state, isLoad: true});

      const auth = await props.Authenticate.auth({email: state.Email, password: state.Senha});

      setState({...state, error: auth.token});
    } catch (error) {

    }
  }

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
            <ButtonComponent execute={handleSubmit} Text='Login' />
            <a className='Register' >Registrar</a>
          </form>
        </Context.Provider>
      </main>
    </div>
  );
};

