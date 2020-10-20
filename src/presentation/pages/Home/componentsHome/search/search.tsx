import React, {useState, useContext} from 'react';
import './search.css';
import {context} from './../../homecontext/contextmain';
import {search} from '../../../../../domain/usecase/search';


export interface SearchProps {
  search: search
}

export const SearchComponent: React.FC<SearchProps> = (props) => {
  const [states, setStates] = useState({
    searchRegion: '',
    search: '',
    locals: [''],
    posts: [''],
  });
  const {state, setState, getAllPubs} = useContext(context);


  async function searchFilter(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (states.search === '' && states.searchRegion === '') {
      return getAllPubs();
    }
    const token = localStorage.getItem('token') || '';
    const data = {
      token: token,
      index: state.page,
      search: states.search,
      region: states.searchRegion,
    };
    const res = await props.search.search(data);
    setState({...state, vagas: res.body});
  }


  return (
    <div id='SearchContainer' >
      <input value={states.search} onChange={ (e) => setStates({...states, search: e.target.value})} placeholder='O que busca ?' list='city' id='search' type="text"/>
      <input value={states.searchRegion} onChange={ (e) => setStates({...states, searchRegion: e.target.value})}placeholder='Região. Caso em branco os resultados serão do brasil todo.' list='city' id='searchRegião' type="text"/>
      {
        states.locals.map((i) => (<div onClick={ (e) => setStates({...states, searchRegion: i})} key={i} >
          <strong>{i}</strong>
        </div>) )
      }
      <button onClick={(e) => {
        searchFilter(e);
      }} id='ButtonSearch' >Procurar </button>
    </div>
  );
};

