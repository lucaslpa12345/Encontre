import React from 'react';
import {ForggotPassword} from './ForggotPassword';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {SendEmail} from '../../../data/usecase/sendemail/sendemail';
import {AxiosHttpClient} from '../../../infra/http/axios.http-client/axios.http-client';
const history = createMemoryHistory();
const makeSut = () => {
  const httpclient = new AxiosHttpClient;
  const sendemail = new SendEmail( httpclient, 'localhost:2500/sendEmail');
  return {
    sut: render(
        <Router history={history} >
          <ForggotPassword sendEmail={sendemail} />
        </Router>,

    ),
  };
};

describe('Forggot Password', () => {
  test('should correctly send a email', () => {

  });
});
