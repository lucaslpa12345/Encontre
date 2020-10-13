import React, {useEffect, useState, useContext} from 'react';
import './search.css';
import {searchlocationsinterface} from './algorithms/searchLotions';
import {searchfilterinterface} from './algorithms/searchFilter';
import {context} from './../../homecontext/contextmain';
import array from '../vagas.stub';
import {Link} from 'react-router-dom';
export interface SearchProps {
  searchLocal: searchlocationsinterface,
  searchFilter: searchfilterinterface
}

export const Search: React.FC<SearchProps> = (props) => {
  const [states, setStates] = useState({
    searchlocal: '',
    search: '',
    locals: [''],
    posts: [''],
  });
  const {state, setState} = useContext(context);

  useEffect(() => {
    const res = props.searchLocal.search(states.searchlocal) || '';
    setStates({...states, locals: [...res]});
  }, [states.searchlocal]);

  function searchLocalFilter(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const res = props.searchFilter.search(array, {searchingFor: states.search, local: states.searchlocal} );
    setState({...states, vagas: res});
  }

  useEffect(() => {
    console.log('items:', states.posts);
  }, [states.posts]);


  return (
    <div id='SearchContainer' >
      <div id='inputs' >
        <div id='select' >
          <input value={states.search} onChange={ (e) => setStates({...states, search: e.target.value})} placeholder='O que busca ?' list='city' id='search' type="text"/>
        </div>
        <div id='select' >
          <input value={states.searchlocal} onChange={ (e) => setStates({...states, searchlocal: e.target.value})}placeholder='Região. Caso em branco os resultados serão do brasil todo.' list='city' id='searchRegião' type="text"/>
          <div id='menu' >
            {
              states.locals.map((i) => (<div onClick={ (e) => setStates({...states, searchlocal: i})} key={i} >
                <strong>{i}</strong>
              </div>) )
            }
          </div>
        </div>
      </div>
      <div id='ButtonContainer' >
        <button onClick={(e) => {
          searchLocalFilter(e);
        }} id='ButtonSearch' >Procurar </button>
        <Link to='/Publish' id='ButtonSearch' >  Publicar vaga </Link>
      </div>
    </div>
  );
};

