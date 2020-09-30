import React, {useEffect, useState} from 'react';
import {ButtonComponent, NormalInput, Logo} from '../../components';
import Context from '../../contexts/login/form.Contexts';
import {Validator} from 'presentation/validators/interfaceValidator';
import {AuthTypes} from 'data/usecase/authenticate';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './styleSignup.css';


   interface SignUpTypes {
     Validator: {
       validatorEmail: Validator,
       validatorMinCaracteres: Validator
     }
     Authenticate: AuthTypes
   }

export const SignUp: React.FC<SignUpTypes> = (props) => {
  const history = useHistory();
  const [state, setState] = useState({
    'EmailIsValid': true,
    'SenhaIsValid': true,
    'Confirmar SenhaIsValid': true,
    'NomeIsValid': true,
    'Nome': '',
    'Email': '',
    'Senha': '',
    'Confirmar Senha': '',
    'HiddenSenha': '',
    'isLoad': false,
    'error': '',
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
    const SenhaIsValid = props.Validator.validatorMinCaracteres.isValid(state.Senha, 6);
    if (state['Confirmar Senha']) {
      verifyPassword();
    }
    if (!state.Senha) {
      state.SenhaIsValid = true;
      return setState({...state});
    }
    state.SenhaIsValid = SenhaIsValid;
    setState({...state});
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

  useEffect(() => {
    const NameIsValid = props.Validator.validatorMinCaracteres.isValid(state.Nome, 3);

    if (!state.Nome ) {
      state.NomeIsValid = true;
      return setState({...state});
    }
    state.NomeIsValid = NameIsValid;
    setState({...state});
  }, [state['Nome']]);

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent> ) {
    try {
      e.preventDefault();
      setState({...state, isLoad: true});
      const auth = await props.Authenticate.auth({email: state.Email, password: state.Senha});

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
    <div className='ContainerSignup'>
      <div className='BackgroundColorSignup'></div>
      <main className='SubContainerSignup' >
        <Context.Provider value={{state, setState}}>
          <form className='FormSignup' action="">
            <Logo/>
            <NormalInput placeholder='Nome' />
            <NormalInput placeholder='Email' />
            <NormalInput placeholder ='Senha' />
            <NormalInput placeholder='Confirmar Senha' />
            <a className='ForgotPasswordSignup' href='/' > Esqueci a senha</a>
            <ButtonComponent execute={handleSubmit} Text='SignUp' />
            <Link to='/Login' className='LinkToLogin' >Login</Link>
          </form>
        </Context.Provider>
      </main>
    </div>
  );
};

