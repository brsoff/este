import App from './app/app.react';
import Home from './app/home.react';
import React from 'react';
import {DefaultRoute, Route} from 'react-router';

export default (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} name="home" />
  </Route>
);
