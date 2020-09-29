import React from 'react';
import {render, fireEvent, cleanup, act} from '@testing-library/react';
import {SignUp} from './Signup';
import {Validator} from '../../validators/interfaceValidator';
import {AccountModel, AuthTypes} from '../../../domain/usecase/authInterface';
class ValidationEmailStub implements Validator {
  public value: any
  isValid(value: string): boolean {
    this.value = value;
    return true;
  }
}

class ValidationSenhaStub implements Validator {
  public value: any
  isValid(value: string): boolean {
    this.value = value;
    return true;
  }
}

class AuthenticateStub implements AuthTypes {
  public data : any
  auth(data: AccountModel): Promise<any> {
    this.data = data;
    return Promise.resolve('');
  }
}


const makeSut = () => {
  const validatorEmail = new ValidationEmailStub;
  const validatorSenha = new ValidationSenhaStub;
  const authenticate = new AuthenticateStub;
  return {
    sut: render(<SignUp Validator={{validatorEmail, validatorSenha}} Authenticate={authenticate} />),
    validatorEmail,
    validatorSenha,
    authenticate,
  };
};


describe('SignUp Components', () => {
  beforeEach(
      cleanup,
  );

  test('Ensure SignUp components work correctly', () => {
    const {sut} = makeSut();
    const input = sut.getByTestId('Email');
    expect(input.className).toBe('NormalInput');
    const load = sut.getByTestId('Button');
    expect(load.childElementCount).toBe(1);
    const error = sut.getByTestId('ErrorMessage');
    expect(error.textContent).toBe('');
    const Button = sut.getByTestId('Button');
    act(() => {
      fireEvent.click(Button);
    });
    const imgLoad = sut.getByTestId('ImgLoad');
    expect(imgLoad).toBeTruthy();
  });

  test('should  ensure validate email is call with correct value', () => {
    const {sut, validatorEmail} = makeSut();
    const input = sut.getByTestId('Email');
    fireEvent.input(input, {target: {value: '23'}});
    expect(validatorEmail.value).toBe('23');
  });

  test('should  ensure validate password is call with correct value', () => {
    const {sut, validatorSenha} = makeSut();
    const input = sut.getByTestId('Senha' );
    fireEvent.input(input, {target: {value: '23'}});
    expect(validatorSenha.value).toBe('23');
  });
});

