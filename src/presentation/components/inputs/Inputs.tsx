import React, {useContext} from 'react';
import './inputs.css';
import Context from '../../contexts/login/form.Contexts';
import {selectClassName, handleErro, typeInput} from './InputFunctionsErros';


interface InptTypes{
     placeholder: string
    }


export const NormalInput : React.FC<InptTypes> = (props) => {
  const {state, setState} = useContext(Context);
  ;
  function handleChange(e:React.ChangeEvent<HTMLInputElement> ) {
    state[props.placeholder] = e.target.value;
    setState({...state});
  }


  const Name = props.placeholder;
  const InputIsValid = state[`${props.placeholder}IsValid`];

  return (
    <div className='InputContainer' >
      <input value = {state[Name]} onChange={(e)=>{
        handleChange(e);
      } } data-testid={Name} className={selectClassName(InputIsValid)} placeholder={Name}
      type={ typeInput(Name) }/>
      <div data-testid = 'error' className='ErrorContainer' >
        {
          InputIsValid === false ? <strong className='ErrorText' >{handleErro(Name)}</strong> : ''
        }
      </div>
    </div>


  );
};

