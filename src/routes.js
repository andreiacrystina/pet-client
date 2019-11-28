import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Bolsista from './pages/Bolsista';
import Main from './pages/Main';
import Projeto from './pages/Projeto';
import Reuniao from './pages/Reuniao';
import Tutor from './pages/Tutor';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Main } />
    <Route path="/tutores" component={ Tutor } />
    <Route path="/bolsistas" component={ Bolsista } />
    <Route path="/reunioes" component={ Reuniao } />
    <Route path="/projetos" component={ Projeto } />
  </Switch>
);

export default Routes;
