import React from 'react';
import {Home} from '../../presentation/pages/Home/Home';
import {AllPubs} from '../../data/usecase/allpubs/allpubs';
import {AxiosHttpClient} from '../../infra/http/axios.http-client/axios.http-client';
export const HomeFactory = () => {
  const httpclient = new AxiosHttpClient;
  const allpubs = new AllPubs( httpclient, 'http://localhost:2500/allpubs?page=');
  return <Home getAllPubsfromDB={ allpubs } />;
};
