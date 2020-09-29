import React, {useContext} from 'react';
import './inputs.css';
import Context from '../../contexts/login/form.Contexts';


interface InptTypes{
     placeholder: string
     emailIsValid?: boolean
     senhaisValid?: boolean
     nomeIsValid?: boolean
     confirmarEmailIsValid?: boolean
    }


export const NormalInput : React.FC<InptTypes> = (props) => {
  const {state, setState} = useContext(Context);
  ;
  function handleChange(e:React.ChangeEvent<HTMLInputElement> ) {
    state[props.placeholder] = e.target.value;
    setState({...state});
  }


  const Name = props.placeholder;
  const elementValidate = state[`${props.placeholder}IsValid`];

  function typeInput() {
    switch (Name) {
      case 'Email': return 'email';
      case 'Senha': return 'password';
      case 'Confirmar Senha': return 'password';
      default: return 'text';
    }
  }

  function className() {
    switch (elementValidate) {
      case false: return 'ErrorInput';
      default: return 'NormalInput';
    }
  }


  return (
    <div className='InputContainer' >
      <input value = {state[Name]} onChange={(e)=>{
        handleChange(e);
      } } data-testid={Name} className={className()} placeholder={Name}
      type={ typeInput() }/>
      <div data-testid = 'error' className='ErrorContainer' >
        {
        }
      </div>
    </div>


  );
};

