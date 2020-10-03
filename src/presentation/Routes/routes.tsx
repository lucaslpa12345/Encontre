/* eslint-disable react/display-name */
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import {LoginFactory} from '../../main/factory/LoginFactory';
import {SignUpFactory} from '../../main/factory/SignupFactory';
import {ForggotPassword} from '../pages/ForggotPassword/ForggotPassword';
import {Home} from '../pages/Home/Home';
import {FirstPage} from '../pages/InitialPage/FirstPage';


export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={FirstPage} />
        <Route path='/Login' component={LoginFactory} />
        <Route path='/Home' component={Home} />
        <Route path='/Signup' component={SignUpFactory} />
        <Route path='./ForggotPassword' component={ForggotPassword} />
      </Switch>
    </BrowserRouter>

  );
};
