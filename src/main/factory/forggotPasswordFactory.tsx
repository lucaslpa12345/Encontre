import React from 'react';
import {ValidateEmail, ValidateMinCaracteres} from '../../presentation/validators';
import {ForggotPassword} from '../../presentation/pages/ForggotPassword/ForggotPassword'
import {AxiosHttpClient} from '../../infra/http/axios.http-client/axios.http-client';
import {SendEmail} from '../../data/usecase/sendemail/sendemail';
export const LoginFactory = () => {
  const validatorEmail = new ValidateEmail;
  const validatorMinCaracteres = new ValidateMinCaracteres;
  const clientHttp = new AxiosHttpClient;
  const authenticate = new SendEmail(clientHttp, 'localhost:2500/sendEmail' );


  return (
    <Login Authenticate={authenticate} Validator={{validatorEmail, validatorMinCaracteres}}/>
  );
};
