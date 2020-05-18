import React from 'react';

import './styles.css';

export default function Login() {
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
            <a href="asduio">Entrar</a>
          </div>
        </form>
      </div>

    </div>
  )
}