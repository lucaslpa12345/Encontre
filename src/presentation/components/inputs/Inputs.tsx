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


  return (
    <div className='InputContainer' >
      <input value = {state[props.placeholder]} onChange={(e)=>{
        handleChange(e);
      } } data-testid={props.placeholder} className= { state[`${props.placeholder}IsValid`] ? 'NormalInput' : 'ErrorInput' } placeholder={props.placeholder}
      type="text"/>
      {state[`${props.placeholder}IsValid`] ? ( <div className='ERRORCONTAINER' >
        <strong> ‏‏‎ ‎‏‏‎ ‎ </strong>
      </div> ) : ( <div data-testid = 'error' className='ERRORCONTAINER' >
        <strong className='ERROR' >{props.placeholder} Inválido </strong>
      </div> )
      }
    </div>


  );
};


