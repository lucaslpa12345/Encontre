import React, {useContext} from 'react';
import './inputs.css';
import Context from '../../contexts/login/form.Contexts';


interface InptTypes{
     placeholder: string
     emailIsValid?: boolean
     senhaisValid?: boolean
}


export const NormalInput : React.FC<InptTypes> = (props) => {
  const {state, setState} = useContext(Context);
  ;

  function returncorrectvar() {
    if (props.placeholder === 'Email') {
      return props.emailIsValid;
    } else {
      return props.senhaisValid;
    }
  }


  function handleChange(e:React.ChangeEvent<HTMLInputElement> ) {
    state[props.placeholder] = e.target.value;
    setState({...state});
  }


  return (
    <div className='InputContainer' >
      <input onChange={(e)=>{
        handleChange(e);
      } } data-testid={props.placeholder} className= { returncorrectvar() ? 'NormalInput' : 'ErrorInput' } placeholder={props.placeholder}
      type="text"/>
      {returncorrectvar() ? ( <div className='ERRORCONTAINER' >
        <strong> ‏‏‎ ‎‏‏‎ ‎ </strong>
      </div> ) : ( <div className='ERRORCONTAINER' >
        <strong className='ERROR' >{props.placeholder} Inválido </strong>
      </div> )
      }
    </div>


  );
};


