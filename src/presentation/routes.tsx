/* eslint-disable react/display-name */
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import {Login} from './pages/Login/Login';


export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/Login' component={Login} />
      </Switch>
    </BrowserRouter>

  );
};
