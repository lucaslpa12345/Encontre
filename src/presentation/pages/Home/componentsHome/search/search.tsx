import React, {useEffect, useState, useContext} from 'react';
import './search.css';
import {searchlocationsinterface} from './algorithms/searchLotions';
import {searchfilterinterface} from './algorithms/searchFilter';
import {context} from './../../homecontext/contextmain';
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
  const {state, setState, getAllPubs} = useContext(context);

  useEffect(() => {
    const res = props.searchLocal.search(states.searchlocal) || '';
    setStates({...states, locals: [...res]});
  }, [states.searchlocal]);


  async function searchLocalFilter(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (states.search === '' && states.searchlocal === '') {
      return getAllPubs();
    }
    setStates({...states, posts: state.vagas});
    const res = await props.searchFilter.search(state.posts.length > 0 ? state.posts : states.posts, {searchingFor: states.search, local: states.searchlocal} );
    if (res.length ===0) {
      return;
    }

    setState({...state, vagas: res});
  }


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

