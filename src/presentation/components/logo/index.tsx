import * as React from 'react';
import './style.css';


export interface LogoProps {

}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <div className='Logo' >
      <strong>FoundJob</strong>
    </div>
  );
};


