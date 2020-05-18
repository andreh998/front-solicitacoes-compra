import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Solicitacoes from './pages/Solicitacoes';
import Cadastro from './pages/CadastroSolicitacao';
import Tratar from './pages/TratarSolicitacao';
import Login from './pages/Login';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/login" component={Login} />
        <Route path="/solicitacoes" component={Solicitacoes} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/tratar" component={Tratar} />
      </Switch>
    </BrowserRouter>
  );
}