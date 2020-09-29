/* eslint-disable react/display-name */
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import {LoginFactory} from '../../main/factory/LoginFactory';
import {SignUpFactory} from '../../main/factory/SignupFactory';

import {Home} from '../pages/Home/Home';


export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/Login' component={LoginFactory} />
        <Route path='/Home' component={Home} />
        <Route path='/Signup' component={SignUpFactory} />
      </Switch>
    </BrowserRouter>

  );
};