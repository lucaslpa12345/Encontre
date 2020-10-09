import React from 'react';
import {ValidateMinCaracteres} from '../../presentation/validators';

import {AxiosHttpClient} from '../../infra/http/axios.http-client/axios.http-client';
import {SendEmail} from '../../data/usecase/sendemail/sendemail';
import {ChangePassword} from '../../presentation/pages/changePassword/changepassword';
export const UpatePasswordFactory = () => {
  const clientHttp = new AxiosHttpClient;
  const sendEmail = new SendEmail(clientHttp, 'http://localhost:2500/sendEmail' );

  const validatemincaracteres = new ValidateMinCaracteres();


  return (
    <ChangePassword validatorMinCaracteres={validatemincaracteres} / >
  );
};
