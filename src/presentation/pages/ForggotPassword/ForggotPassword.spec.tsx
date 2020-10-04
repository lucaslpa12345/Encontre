import React from 'react';
import {ForggotPassword} from './ForggotPassword';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
const history = createMemoryHistory();
const makeSut = () => {
  return {
    sut: render(
        <Router history={history} >
           <ForggotPassword/>
        </Router>,

    ),
  };
};

describe('Forggot Password', () => {
  test('should ensure show img after button press ', () => {

  });
});
