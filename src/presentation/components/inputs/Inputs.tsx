import React, {useContext} from 'react';
import './inputs.css';
import Context from '../../contexts/login/form.Contexts';


interface InptTypes{
     placeholder: string
}


export const NormalInput : React.FC<InptTypes> = (props) => {
  const {EmailInvalid, SenhaInvalid} = useContext(Context);

  function returncorrectvar() {
    if (props.placeholder === 'Email') {
      return EmailInvalid;
    } else {
      return SenhaInvalid;
    }
  }
  return (
    <div className='InputContainer' >
      <input className= { returncorrectvar() ? 'ErrorInput' : 'NormalInput' } placeholder={props.placeholder}
        type="text"/>
      {returncorrectvar() ? (
                        <div className='ERRORCONTAINER' >
                          <strong className='ERROR' >{props.placeholder} Inválido </strong>
                        </div>
                      ) :
                     (
                        <div className='ERRORCONTAINER' >
                          <strong> ‏‏‎ ‎‏‏‎ ‎ </strong>
                        </div>
                       )
      }
    </div>
  );
};


