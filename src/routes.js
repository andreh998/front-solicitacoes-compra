import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Solicitacoes from './pages/Solicitacoes';
import Cadastro from './pages/CadastroSolicitacao';
import Tratar from './pages/TratarSolicitacao';
import Consultar from './pages/Consultar';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
        <Route path="/solicitacoes" component={Solicitacoes} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/tratar" component={Tratar} />
        <Route path="/consultar" component={Consultar} />
      </Switch>
    </BrowserRouter>
  );
}