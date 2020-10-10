import React from 'react';
import {ChangePassword} from '../../presentation/pages/changePassword/changepassword';
import {AxiosHttpClient} from '../../infra/http/axios.http-client/axios.http-client';
import {UpdateAccount} from '../../data/usecase/updateaccount/updateaccount';
import {ValidateMinCaracteres} from '../../presentation/validators/minCaracteresValidator/ValidatorMinCaracteres';

export const ForggotPasswordFactory = () => {
  const clientHttp = new AxiosHttpClient;
  const validator = new ValidateMinCaracteres;
  const updateaccount = new UpdateAccount(clientHttp, 'http://localhost:2500/sendEmail' );


  return (
    <ChangePassword httpclient={updateaccount} validatorMinCaracteres={validator} />
  );
};
