import React from 'react';
import {render} from '@testing-library/react';
import {Login} from './Login';


describe('Login page', () => {
  test('should ensure init without error warnings', () => {
    render(<Login/>);
  });
});


