import React,{useState} from 'react';
import './style.css'
import load from '../../assets/load1.gif'
import { NormalInput , ErrorInput } from '../components/inputs/Inputs'
          


export function Login() {
       const [Load, setLoad] = useState(false)
       const [emailInvalid , setEmail ] = useState(true)
       const [passwordInvalid , setPassword ] = useState(false)
  
  return (
    <div className='Container'>
     <div className='BackgroundColor'></div>
     <main className='SubContainer' >
         <form className='Form' action="">
         <div className='Logo' >
            <strong>FoundJob</strong>
         </div>
         {
         emailInvalid ? <ErrorInput placeholder='Email'/> : <NormalInput placeholder='Email' /> }
         {!passwordInvalid ? <NormalInput placeholder='Senha'/> : <ErrorInput placeholder='Senha' /> }

         <a className='Forgot' href='/' > Esqueci a senha</a>
         <button className='Button' onMouseOver={() => setEmail(!emailInvalid)} > {Load ? (<img src={load} alt='loading'></img>) : <span>Login</span>} </button>
               <a className='Register' >Registrar</a>
         </form>
     </main>

    </div>


  );
}

