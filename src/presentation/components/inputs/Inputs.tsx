import  React from 'react'
import './inputs.css'

interface InptTypes{
     placeholder: string 
}


export const  NormalInput : React.FC<InptTypes> = (props) => { 
     return ( 
         <div  className='InputContainer' >   
        <input className='NormalInput' placeholder={props.placeholder} 
        type="text"/>
        <div className='ERRORCONTAINER' >
            <strong> ‏‏‎ ‎‏‏‎ ‎ </strong>
        </div>
       
         </div>
     )
}


export const  ErrorInput : React.FC<InptTypes> = (props) => { 
    return ( 
          <div className='InputContainer' > 
         <input className='ErrorInput' placeholder={props.placeholder} type="text"/>     
         <div className='ERRORCONTAINER' >
         <strong className='ERROR' >{props.placeholder} Inválido </strong>
        </div>
        </div>
    )
}


