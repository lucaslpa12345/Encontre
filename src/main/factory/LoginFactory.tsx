import React from 'react';
import {ValidationInputs} from '../../presentation/validators/ValiatorEmail';
import {Login} from '../../presentation/pages/Login/Login';
const validator = new ValidationInputs;
export const LoginFactory = () => {
  return (
    <Login Validator={validator}/>
  );
};
