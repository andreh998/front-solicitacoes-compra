import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../services/axios';

import './styles.css';

export default function Login() {

const [login, setLogin] = useState('');
const [senha, setSenha] = useState('');
const history = useHistory();

function validar(e) {
  e.preventDefault();
  const data = {
    login, senha
  };
  axios.post('/usuarios', data).then(result => {
    console.log(result);
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    console.log('Finally');
  });
}

  return(
    <div className="container-login">

      <div className="l-container">
        <form className="form-login" onSubmit={validar}>
          <div className="titles">      
            <h2>Bem vindo</h2>
            <h3>Login</h3>
          </div>
          <div>
            <label>Usuário:</label>
            <input onChange={(e) => setLogin(e.target.value)} type="text"/>
            <label>Senha:</label>
            <input onChange={(e) => setSenha(e.target.value)} type="password"/>
          </div>
          <div>
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>

    </div>
  )
}