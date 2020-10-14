import React from 'react';
import {ForggotPassword} from '../../presentation/pages/ForggotPassword/ForggotPassword';
import {AxiosHttpClient} from '../../infra/http/axios.http-client/axios.http-client';
import {SendEmail} from '../../data/usecase/sendemail/sendemail';
export const ForggotPasswordFactory = () => {
  const clientHttp = new AxiosHttpClient;
  const sendEmail = new SendEmail(clientHttp, 'http://localhost:2500/sendEmail' );


  return (
    <ForggotPassword sendEmail={sendEmail} />
  );
};
