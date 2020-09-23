import React from 'react';
import {render} from '@testing-library/react';
import {ButtonComponent} from '../../components/button/index';


describe('Login page', () => {
  test('should ensure init without error warnings', () => {
    const {getByTestId} = render(<ButtonComponent Text='string' />);
    console.log(getByTestId('test'));
    const load = getByTestId('ErrorMessage');
    console.log(load.textContent);
    expect(load.textContent).toBe('');
  });
});


