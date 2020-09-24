import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import {Login} from './Login';
import {Validator} from '../../validators/interfaceValidator';

class ValidationInputs implements Validator {
  public value: any
  isValid(value: string): boolean {
    this.value = value;

    return true;
  }
}


const makeSut = () => {
  const validation = new ValidationInputs;
  return {
    sut: render(<Login Validator={validation} />),
    validation,
  };
};


describe('Login Components', () => {
  beforeEach(cleanup);

  test('Ensure login components work correctly', () => {
    const {sut} = makeSut();
    const input = sut.getByTestId('Email');
    expect(input.className).toBe('NormalInput');
    const load = sut.getByTestId('Button');
    expect(load.childElementCount).toBe(1);
    const error = sut.getByTestId('ErrorMessage');
    expect(error.textContent).toBe('');
  });

  test('should  ensure validate', () => {
    const {sut} = makeSut();

    const input = sut.getByTestId('Email');
    fireEvent.change(input, {target: {value: '23'}});
    input.nodeValue = '$23.0';
    expect(input.nodeValue).toBe('$23.0');
  });
});


