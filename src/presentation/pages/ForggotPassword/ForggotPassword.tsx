import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './forggot.css';
import load from '../../../assets/load2.gif';
export interface stateProps {
     isLoad: boolean
     Email: string
     Sended: boolean
}

export const ForggotPassword: React.FC = () => {
  const [state, setState] = useState<stateProps>({
    isLoad: false,
    Email: '',
    Sended: false,
  });


  function handleSubmit(e:React.MouseEvent<HTMLButtonElement>) {
    setState({...state, isLoad: true});
    setTimeout(() => {
      setState({...state, Sended: true});
    }, 4000);
  }


  return (

    <div className='ContainerSignup'>
      <div className='BackgroundColorSignup'></div>
      <main className='SubContainerSignup' >
        <div className='ForggotPassword' >

          {state.Sended ? <strong >Se o email estiver associado a alguma conta <br/> enviaremos um email de recuperação !!</strong> : (
         <>
           <label htmlFor="Email">Digite o email da conta a ser recuperada</label>
           <input id='Email' placeholder='Email' type="email"/>
           <div className='ButtonsForggotContainer' >
             {state.isLoad ? <img src={load} alt='Load' ></img> : (<button onClick={(e) => handleSubmit(e)} className='ButtonToRecuperar' > Recuperar </button>
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


