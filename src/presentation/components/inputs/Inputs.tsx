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
  function handleChange(e:React.ChangeEvent<HTMLInputElement> ) {
    state[props.placeholder] = e.target.value;
    setState({...state});
  }


  const Name = props.placeholder;
  const elementValidate = state[`${props.placeholder}IsValid`] && !state[`${props.placeholder}IsValid`] ? 'ErrorInput' : 'NormalInput';

  return (
    <div className='InputContainer' >
      <input value = {state[Name]} onChange={(e)=>{
        handleChange(e);
      } } data-testid={Name} className= { elementValidate } placeholder={Name}
      type={Name === 'Email' ? 'email' : 'password' }/>
      {elementValidate ? ( <div data-testid = 'error' className='ErrorContainer' >
        <strong className='ErrorText' >{Name === 'Email' ? 'Email inválido': 'Mínimo 6 caracteres' }</strong>
      </div> ) : ( <div className='ErrorContainer' >
        <strong> ‏‏‎ ‎‏‏‎ ‎ </strong>
      </div> )
      }
    </div>


  );
};

