import React from 'react';
import './footer.css';
// import { Container } from './styles';
import {context} from '../../homecontext/contextmain';

export const Footer: React.FC = () => {
  const [states, setStates] = React.useState({
    page: 1,
  });
  const {getAllPubs} = React.useContext(context);
  React.useEffect(() => {
    const form = document.getElementById('ContainerMain');
    console.log(form);
    if (form) {
      form.scrollTo(0, 0 );
    };
    getAllPubs(states.page);
  }, [states.page]);


  return <div id='ContainerFooter' >
    <span id='anterior' onClick={ () =>{
      if (states.page === 1) {
        return;
      }
      setStates({...states, page: states.page - 1});
    }} >{'<'}</span>  <span id='atual' >  {states.page} </span> <span id='proximo'
      onClick={ () => setStates({...states, page: states.page + 1})}
    >{'>'}</span>
  </div>;
};


