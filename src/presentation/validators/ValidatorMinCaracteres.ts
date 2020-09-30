import {Validator} from './interfaceValidator';
import validator from 'validator';
export class ValidateMinCaracteres implements Validator {
    public value: any
    isValid(value: string, min : number): boolean {
      if (!value) {
        return false;
      }
      const res = validator.isLength(value, {min: min});
      return res;
    }
}


