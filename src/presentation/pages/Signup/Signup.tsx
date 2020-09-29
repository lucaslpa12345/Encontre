import React, {useEffect, useState} from 'react';
import './style.css';
import {ButtonComponent, NormalInput, Logo} from '../../components';
import Context from '../../contexts/login/form.Contexts';
import {Validator} from 'presentation/validators/interfaceValidator';
import {AuthTypes} from 'data/usecase/authenticate';
import {useHistory} from 'react-router-dom';
import {} from 'react-router-dom';


   interface SignUpTypes {
     Validator: {
       validatorEmail: Validator,
       validatorSenha: Validator
     }
     Authenticate: AuthTypes
   }

export const SignUp: React.FC<SignUpTypes> = (props) => {
  const history = useHistory();
  const [state, setState] = useState({
    EmailIsValid: true,
    SenhaIsValid: true,
    Email: '',
    Senha: '',
    HiddenSenha: '',
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

      console.log(auth);
      const error = callError(auth);
      localStorage.setItem('token', auth.token);
      if (error) {
        history.push('/Home');
      }
    } catch (error) {

    }
  }

  function callError(auth: any) {
    function setErrorToNothing() {
      return setTimeout( () => setState({...state, error: ''}), 2000);
    }
    if (state.isLoad) {
      return;
    }
    if (!state.Email || !state.Senha) {
      setErrorToNothing();
      return setState({...state, error: 'Informações inválidas'});
    }

    if (!state.EmailIsValid || !state.SenhaIsValid) {
      setErrorToNothing();
      return setState({...state, error: 'Informações inválidas'});
    }

    if (!auth.status) {
      state.error = 'Falha na autenticação';
      setErrorToNothing();
      return setState({...state, error: 'Falha na autenticação'});
    }
    return true;
  }


  return (
    <div className='Container'>
      <div className='BackgroundColor'></div>
      <main className='SubContainer' >
        <Context.Provider value={{state, setState}}>
          <form className='Form' action="">
            <Logo/>
            <NormalInput placeholder='Nome' />
            <NormalInput emailIsValid={state.EmailIsValid} placeholder='Email' />
            <NormalInput senhaisValid={state.SenhaIsValid} placeholder ='Senha' />
            <NormalInput emailIsValid={state.EmailIsValid} placeholder='Confirmar Senha' />
            <a className='ForgotPassword' href='/' > Esqueci a senha</a>
            <ButtonComponent execute={handleSubmit} Text='SignUp' />
            <a className='Register' >Entrar</a>
          </form>
        </Context.Provider>
      </main>
    </div>
  );
};

