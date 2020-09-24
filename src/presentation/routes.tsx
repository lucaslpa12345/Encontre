/* eslint-disable react/display-name */
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import {LoginFactory} from '../main/factory/LoginFactory';


export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/Login' component={LoginFactory} />
      </Switch>
    </BrowserRouter>

  );
};
