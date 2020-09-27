import {Validator} from './interfaceValidator';
import validator from 'validator';
export class ValidateSenha implements Validator {
    public value: any
    isValid(value: string): boolean {
      if (!value) {
        return false;
      }
      const res = validator.isLength(value, {max: 6});
      return res;
    }
}


