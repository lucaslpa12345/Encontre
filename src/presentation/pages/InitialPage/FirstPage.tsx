import React, {useEffect} from 'react';
import img from '../../../assets/offers2.svg';
import {Link} from 'react-router-dom';
import './firstPage.css';
export interface FirstPageProps {

}

export const FirstPage: React.FC<FirstPageProps> = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (

    <div className="FirstPageContainer">
      <div className='header' >  <h1>Encontre</h1>
        <div className='Buttons'>  <Link className='Link' to='/Login' >Login</Link><Link className='Link' to='/Signup' >Signup</Link> </div>
      </div >
      <main>
        <h2>
              Contrate <br/>  e seja contratado <br/> direto da sua casa !
        </h2>
        <img src={img} alt=""/>
      </main>
      <footer></footer>
    </div>
  );
};

