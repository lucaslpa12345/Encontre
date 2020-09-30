import React, {useEffect, useState} from 'react';
import './styleLogin.css';
import {ButtonComponent, NormalInput, Logo} from '../../components/';
import Context from '../../contexts/login/form.Contexts';
import {Validator} from 'presentation/validators/interfaceValidator';
import {AuthTypes} from 'data/usecase/authenticate';
import {useHistory, Link} from 'react-router-dom';


   interface LoginTypes {
     Validator: {
       validatorEmail: Validator,
       validatorMinCaracteres: Validator
     }
     Authenticate: AuthTypes
   }

export const Login: React.FC<LoginTypes> = (props) => {
  const history = useHistory();
  const [state, setState] = useState({
    EmailIsValid: true,
    SenhaIsValid: true,
    Email: '',
    Senha: '',
    ConfirmarSenha: '',
    Nome: '',
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
    const SenhaIsValid = props.Validator.validatorMinCaracteres.isValid(state.Senha, 6);
    if (!state.Senha) {
      state.SenhaIsValid = true;
      return setState({...state});
    }
    state.SenhaIsValid = SenhaIsValid;
    setState({...state});
  }, [state.Senha]);


  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent> ) {
    function cleanError() {
      setTimeout(()=>{
        setState({...state, error: ''});
      }, 2000);
    }
    try {
      e.preventDefault();
      setState({...state, isLoad: true});
      const auth = await props.Authenticate.auth({email: state.Email, password: state.Senha});
      if (auth.status === 400) {
        setState({...state, error: auth.message});
        return cleanError();
      } else {
        localStorage.setItem('token', auth.data);
        history.push('/Home');
        return cleanError();
      }
    } catch (error) {

    }
  }


  return (
    <div className='ContainerLogin'>
      <div className='BackgroundColorLogin'></div>
      <main className='SubContainerLogin' >
        <Context.Provider value={{state, setState}}>
          <form className='FormLogin' action="">
            <Logo/>
            <NormalInput placeholder='Email' />
            <NormalInput placeholder ='Senha' />
            <a className='ForgotPasswordLogin' href='/' > Esqueci a senha</a>
            <ButtonComponent execute={handleSubmit} Text='Login' />
            <Link to='/Signup' className='LinkToSignup' >Sign-up</Link>
          </form>
        </Context.Provider>
      </main>
    </div>
  );
};

