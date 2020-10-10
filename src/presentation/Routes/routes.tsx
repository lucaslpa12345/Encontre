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
import {FirstPage} from '../pages/InitialPage/FirstPage';
import {UpdatePasswordFactory} from '../../main/factory/updatePassword';
import {ForggotPasswordFactory} from '../../main/factory/forggotPasswordFactory';
export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={FirstPage} />
        <Route path='/Login' component={LoginFactory} />
        <Route path='/Home' component={Home} />
        <Route path='/Signup' component={SignUpFactory} />
        <Route path='/ForggotPassword' component={ForggotPasswordFactory} />
        <Route path='/editPassword' exact component={UpdatePasswordFactory} />
      </Switch>
    </BrowserRouter>

  );
};
