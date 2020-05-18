import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

export default function Login() {

const history = useHistory();

function validar(e) {
  e.preventDefault();
  history.push('/cadastro');
}

  return(
    <div className="container-login">

      <div className="l-container">
        <form className="form-login">    
          <div className="titles">      
            <h2>Bem vindo</h2>
            <h3>Login</h3>
          </div>
          <div>
            <label>Usuário:</label>
            <input type="text"/>
            <label>Senha:</label>
            <input type="password"/>
          </div>
          <div>
            <button onClick={(e) => validar(e)}>Entrar</button>
          </div>
        </form>
      </div>

    </div>
  )
}