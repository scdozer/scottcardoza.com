import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './components/main/main';
import Work from './components/work/work';

export default (
  <Switch>
    <Route component={Main} path="/" exact/>
    <Route component={Work} path="/experience"/>
  </Switch>
)
