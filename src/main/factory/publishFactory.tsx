import React from 'react';
import {PublishComponent} from '../../presentation/pages/Publish/Publish';
import {Publish} from '../../data/usecase/publish/publish';
import {AxiosHttpClient} from '../../infra/http/axios.http-client/axios.http-client';
export const publishFactory = () => {
  const httpclient = new AxiosHttpClient;
  const publish = new Publish(httpclient, 'http://localhost:2500/publish');

  return (<PublishComponent publish={publish} />);
};
