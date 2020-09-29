import React, {useContext} from 'react';
import Context from '../../contexts/login/form.Contexts';
import Load from '../../../assets/load2.gif';
import './style.css';

export interface Props {
        Text: string
        execute?: any
}


export const ButtonComponent : React.FC<Props> = ({Text, execute}) => {
  const {state} = useContext(Context);
  return (
    <div className='ButtonsContainer' >
      <strong data-testid='ErrorMessage' className='ErrorMessage' >{
        state.error }</strong>
      <button data-testid='Button' onClick={(e) => execute(e)} className='Button' > { state.isLoad ? <img data-testid='ImgLoad' className='Img' src={Load} alt='Loading' ></img> : <strong>{Text}</strong>} </button>
    </div>

  );
};

