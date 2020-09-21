import React,{useState} from 'react';
import './style.css'
import load from '../../assets/load1.gif'
          


export function Login() {
       const [Load, setLoad] = useState(false)
       const [emailInvalid , setEmail ] = useState(false)
  
  return (
    <div className='Container'>
     <div className='BackgroundColor'></div>
              
     
     <main className='SubContainer' >
        
         <form className='Form' action="">
         <div className='Logo' >
            <strong>FoundJob</strong>
         </div>

           <input className='Input1' placeholder='Email' type="text"/>

           <input className='Input2' placeholder='Password' type="text"/>
            
                 <a className='Forgot' href='/' > Esqueci a senha</a>
        
         <button className='Button' onMouseOver={() => setLoad(!Load)} > {Load ? (<img src={load} alt='loading'></img>) : <span>Login</span>} </button>

               <a className='Register' >Registrar</a>
         </form>
     </main>

    </div>


  );
}

