import React, {useEffect, useState} from 'react';
import './search.css';
import {searchlocationsinterface} from './algorithms/searchLotions';
export interface SearchProps {
  searchLocal: searchlocationsinterface
}

export const Search: React.FC<SearchProps> = (props) => {
  const [state, setState] = useState({
    searchlocal: '',
    search: '',
    locals: [''],
  });

  useEffect(() => {
    const res = props.searchLocal.search(state.searchlocal) || '';
    setState({...state, locals: [...res]});
  }, [state.searchlocal]);
  function onChangeSearchLocal(e: React.ChangeEvent<HTMLInputElement> ) {
    setState({...state, searchlocal: e.target.value});
  }


  return (
    <div id='SearchContainer' >
      <div id='inputs' >
        <div id='select' >
          <input placeholder='O que busca ?' list='city' id='search' type="text"/>
        </div>
        <div id='select' >
          <input value={state.searchlocal} onChange={(e) => onChangeSearchLocal(e)} placeholder='Região' list='city' id='searchRegião' type="text"/>
          <div id='menu' >
            {
              state.locals.map((i) => (<div onClick={ (e) => setState({...state, searchlocal: i})} key={i} >
                <strong>{i}</strong>
              </div>) )
            }
          </div>
        </div>
      </div>
      <div id='ButtonContainer' >
        <button id='ButtonSearch' >Procurar </button>
        <button id='ButtonSearch' >  Publicar vaga </button>
      </div>
    </div>
  );
};

