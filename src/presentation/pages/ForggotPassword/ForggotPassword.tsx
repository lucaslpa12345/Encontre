import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './forggot.css';
import load from '../../../assets/load2.gif';
import {sendEmailInterface} from '../../../domain/usecase/sendemail';
interface props {
   sendEmail: sendEmailInterface
}

export interface stateProps {
     isLoad: boolean
     Email: string
     Sended: boolean
}

export const ForggotPassword: React.FC<props> = (props) => {
  const [state, setState] = useState<stateProps>({
    isLoad: false,
    Email: '',
    Sended: false,
  });


  async function handleSubmit(e:React.MouseEvent<HTMLButtonElement>) {
    setState({...state, isLoad: true});
    props.sendEmail.send(state.Email).then(() => setState({...state, Sended: true}));
  }


  return (

    <div className='ContainerSignup'>
      <div className='BackgroundColorSignup'></div>
      <main className='SubContainerSignup' >
        <div className='ForggotPassword' >

          {state.Sended ? <strong >Se o email estiver associado a alguma conta <br/> enviaremos um email de recuperação !!</strong> : (
         <>
           <label htmlFor="Email">Digite o email da conta a ser recuperada</label>
           <input id='Email' value={state.Email} placeholder='Email' type="email"/>
           <div className='ButtonsForggotContainer' >
             {state.isLoad ? <img src={load} alt='Load' ></img> : (<button onClick={(e) => handleSubmit(e)} className='ButtonToRecuperar' > Enviar </button>
             ) }

           </div>

         </>

          ) }
          <Link className='LinkToBack' to='/' > Voltar para o início </Link>
        </div>

      </main>
    </div>
  );
};


