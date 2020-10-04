import * as React from 'react';
import './style.css';


export interface LogoProps {

}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <div className='Logo' >
      <strong>Encontre</strong>
    </div>
  );
};


