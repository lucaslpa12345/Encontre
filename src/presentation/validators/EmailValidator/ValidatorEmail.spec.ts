import {ValidateEmail} from './ValiatorEmail';

function makeSut() {
  return {
    sut: new ValidateEmail,
  };
}

describe('ValidatorEmail', () => {
  test('should ensure  email validator is called with correct valor ', async () => {
    const {sut} = makeSut();
    const email = 'any_email@gmail.com';
    jest.spyOn(sut, 'isValid');
    sut.isValid(email);

    expect(sut.isValid).toHaveBeenCalledWith(email);
  });

  test('should ensure  return false case email is invalid ', async () => {
    const {sut} = makeSut();
    const email = 'any_emailgmail.com';
    jest.spyOn(sut, 'isValid');
    const res = sut.isValid(email);
    expect(res).toBe(false);
  });

  test('should ensure  return true case email is valid ', async () => {
    const {sut} = makeSut();
    const email = 'any_email@gmail.com';
    jest.spyOn(sut, 'isValid');
    const res = sut.isValid(email);
    expect(res).toBe(true);
  });
});
