import React from 'react';
import {ValidateEmail, ValidateMinCaracteres} from '../../presentation/validators';
import {SignUp} from '../../presentation/pages/Signup/Signup';
import {AxiosHttpClient} from '../../infra/http/axios.http-client/axios.http-client';
import {Register} from '../../data/usecase/register/register.api';
export const SignUpFactory = () => {
  const validatorEmail = new ValidateEmail;
  const validatorMinCaracteres = new ValidateMinCaracteres;
  const clientHttp = new AxiosHttpClient;
  const url = 'http://localhost:2500/Signup';
  const register = new Register(url, clientHttp);


  return (
    <SignUp Register={register} Validator={{validatorEmail, validatorMinCaracteres}}/>
  );
};
