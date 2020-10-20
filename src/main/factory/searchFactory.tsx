import React from 'react';
import {SearchComponent} from '../../presentation/pages/Home/componentsHome/search/search';
import {Search} from '../../data/usecase/search/search';
import {AxiosHttpClient} from '../../infra/http/axios.http-client/axios.http-client';
export const SearchFactory = () => {
  const httpclient = new AxiosHttpClient;
  const search = new Search(httpclient, 'http://localhost:2500/search');

  return (<SearchComponent search={search} />);
};
