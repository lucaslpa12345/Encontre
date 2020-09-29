import * as React from 'react';
import './style.css';
import LogoImg from '../../../assets/pic.svg';


export interface LogoProps {

}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <div className='Logo' >
      <img data-testid='Img' width='100' src={LogoImg} ></img>
    </div>
  );
};


