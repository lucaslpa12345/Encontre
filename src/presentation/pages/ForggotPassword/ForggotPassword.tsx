import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {sendEmailInterface} from '../../../domain/usecase/sendemail';
import {ButtonComponent, NormalInput} from '../../components/';
import Context from '../../contexts/login/form.Contexts';
import {Logo} from '../../components/logo/index';
import './styles.css';

interface props {
   sendEmail: sendEmailInterface
}

export interface stateProps {
     isLoad: boolean
     Email: string
     error: string
     Sended: boolean
}

export const ForggotPassword: React.FC<props> = (props) => {
  const [state, setState] = useState<stateProps>({
    isLoad: false,
    Email: '',
    error: '',
    Sended: false,
  });

  async function handleSubmit(e:React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setState({...state, isLoad: true});
    const res = await props.sendEmail.send(state.Email);
    const string = res.message || '';
    if (res.status === 500) {
      return setState({...state, error: string});
    }
    setState({...state, Sended: true});
  }

  return (

    <div className='ContainerLogin'>
      <div className='BackgroundColorLogin'></div>
      <main className='SubContainerLogin' >
        <Context.Provider value={{state, setState}}>
          <form className='FormLogin' action="">
            <Logo/>
            {state.Sended ? <strong id='strong' >Caso a conta exista enviaremos um email de recuperação.</strong> : (
         <>
           <strong id='strong' > Digite o email da conta que deseja recuperar</strong>
           <NormalInput placeholder='Email' />
           <ButtonComponent execute={handleSubmit} Text='Enviar' />
         </>
       )}
            <div>
              <Link to='/' className='LinkToSignup' >Voltar para o início</Link>
            </div>
          </form>
        </Context.Provider>
      </main>
    </div>
  );
};


