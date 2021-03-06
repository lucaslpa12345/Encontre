import React from 'react';
import {ValidateEmail, ValidateMinCaracteres} from '../../presentation/validators';
import {Login} from '../../presentation/pages/Login/Login';
import {AxiosHttpClient} from '../../infra/http/axios.http-client/axios.http-client';
import {Authenticate} from '../../data/usecase/authenticate/authenticate-api';
export const LoginFactory = () => {
  const validatorEmail = new ValidateEmail;
  const validatorMinCaracteres = new ValidateMinCaracteres;
  const clientHttp = new AxiosHttpClient;
  const authenticate = new Authenticate('http://localhost:2500/login', clientHttp );


  return (
    <Login Authenticate={authenticate} Validator={{validatorEmail, validatorMinCaracteres}}/>
  );
};
