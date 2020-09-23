import React, {useContext} from 'react';
import Context from '../../contexts/login/form.Contexts';
import Load from '../../../assets/load1.gif';
import './style.css';

export interface Props {
        Text: string
        Execute?: any
}

export const ButtonComponent : React.FC<Props> = ({Text, Execute}) => {
  const {isLoad, error} = useContext(Context);
  return (
    <div data-testid='test' className='ButtonsContainer' >
      <strong data-testid='ErrorMessage' className='ErrorMessage' >{error && 'something wrong'}</strong>
      <button onMouseOver={Execute} className='Button' > { isLoad ? <img className='Img' src={Load} alt='Loading' ></img> : <strong>  {Text} </strong>} </button>
    </div>

  );
};

