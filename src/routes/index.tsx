import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository/:name+" component={Repository} />
  </Switch>
);
/*
name+ : parametro possui uma "/", coloca-se o "+" para indicar que TUDO quem vem depois
de "repository/" é um parametro só.
*/

export default Routes;
