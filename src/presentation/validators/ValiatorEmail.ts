import {Validator} from './interfaceValidator';
import validator from 'validator';
export class ValidationInputs implements Validator {
    public value: any
    isValid(value: string): boolean {
      if (!value) {
        return false;
      }
      const res = validator.isEmail(value);
      return res;
    }
}

