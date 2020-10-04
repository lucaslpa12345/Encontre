import React, {useEffect, useState} from 'react';
import {ButtonComponent, NormalInput} from '../../components';
import Context from '../../contexts/login/form.Contexts';
import {Validator} from 'presentation/validators/interfaceValidator';
import {RegisterTypes} from 'domain/usecase/registerInterface';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './styleSignup.css';
import {Logo} from '../../components/logo/index';


   interface SignUpTypes {
     Validator: {
       validatorEmail: Validator,
       validatorMinCaracteres: Validator
     }
     Register: RegisterTypes
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

  async function handleSubmitRegister(e: React.MouseEvent<HTMLButtonElement, MouseEvent> ) {
    try {
      e.preventDefault();
      setState({...state, isLoad: true});
      const auth = await props.Register.reg({name: state.Nome, email: state.Email, password: state.Senha, passwordConfirm: state['Confirmar Senha']});
      console.log(auth);
      if (auth.message) {
        return setState({...state, error: auth.message});
      } else {
        alert('Cadastrado com sucesso!');
        return history.push('/Login');
      }
    } catch (error) {

    }
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
            <ButtonComponent execute={handleSubmitRegister} Text='SignUp' />
            <div>
              <Link to='/Login' className='LinkToLogin' >Login</Link>
              <Link to='/Login' className='LinkToLogin' >Voltar para o início</Link>
            </div>

          </form>
        </Context.Provider>
      </main>
    </div>
  );
};

