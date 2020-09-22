import React,{useEffect, useState} from 'react';
import './style.css'
import load from '../../assets/load1.gif'
import { NormalInput  } from '../../components/inputs/Inputs'
import Context from '../../contexts/login/form.Contexts'          
interface State {
   EmailInvalid: Boolean
    SenhaInvalid: boolean 
    isLoad: boolean
   }

export function Login() {
       const [state , setState] = useState<State>({ 
          EmailInvalid: false  , 
          SenhaInvalid: false,
          isLoad: false , 
       })
       function set() {      
          state.EmailInvalid = !state.EmailInvalid
          setState({...state})
       }
  
  return (
    <div className='Container'>
     <div className='BackgroundColor'></div>
     <main className='SubContainer' >
       <Context.Provider value={state}>
       <form className='Form' action="">
         <div className='Logo' >
            <strong>FoundJob</strong>
         </div>
          <NormalInput placeholder='Email' />
          <NormalInput placeholder ='Senha' /> 
         <a className='Forgot' href='/' > Esqueci a senha</a>
         <button className='Button' onMouseOver={() => set()} >  </button>
               <a className='Register' >Registrar</a>
         </form>
       </Context.Provider>
        
     </main>

    </div>


  );
}

