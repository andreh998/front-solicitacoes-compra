import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isLogin } from './services/validaRotas';

/**
 * Importação dos componentes
 */
import Login from './pages/Login';
import Home from './pages/Home';
import Solicitacoes from './pages/Solicitacoes';
import Cadastro from './pages/CadastroSolicitacao';
import Tratar from './pages/TratarSolicitacao';
import Consultar from './pages/Consultar';
import NotFound from './pages/404';

/**
 * Defino uma rota privada, que requer que um usuário esteja logado para que
 * ela seja acessada.
 * 
 * @param {*} param0 A privateRoute recebe todos as propriedades que são 
 * informadas em uma Route simples, e depois passa eles para a Route privada
 * definida
 * 
 * render é responsável por renderizar o componente, porém antes ele verifica
 * se o usuário está logado, caso contrário ele é redirecionado para o login.
 */
const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route 
    {...rest} 
    render={props => 
      isLogin() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    } 
  />
)

/**
 * Defino meu componente de rotas
 */
export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/solicitacoes" component={Solicitacoes} />
        <PrivateRoute path="/cadastro" component={Cadastro} />
        <PrivateRoute path="/tratar" component={Tratar} />
        <PrivateRoute path="/consultar" component={Consultar} />
        <PrivateRoute path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}