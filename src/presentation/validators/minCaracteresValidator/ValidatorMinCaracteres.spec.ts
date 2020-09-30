import {ValidateMinCaracteres} from './ValidatorMinCaracteres';

function makeSut() {
  return {
    sut: new ValidateMinCaracteres,
  };
}

describe('Validatorword', () => {
  test('should ensure  word validator is called with correct valor ', async () => {
    const {sut} = makeSut();
    const word = 'any_word@gmail.com';
    jest.spyOn(sut, 'isValid');
    sut.isValid(word, 4);

    expect(sut.isValid).toHaveBeenCalledWith(word, 4);
  });

  test('should ensure  return false case word is invalid ', async () => {
    const {sut} = makeSut();
    const word = '22';
    jest.spyOn(sut, 'isValid');
    const res = sut.isValid(word, 5);

    expect(res).toBe(false);
  });

  test('should ensure  return true case word is valid ', async () => {
    const {sut} = makeSut();
    const word = 'any';
    jest.spyOn(sut, 'isValid');
    const res = sut.isValid(word, 3);

    expect(res).toBe(true);
  });
});
