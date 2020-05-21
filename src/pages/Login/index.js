import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import axios from '../../services/axios';

import './styles.css';

export default function Login() {

  /**
   * Defino o history, que será responsável pela navegação
   */
  const history = useHistory();

  /**
   * Defino os estados
   */
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [statusModal, setStatusModal] = useState('none');
  const [msg, setMsg] = useState('');
  const [erros, setErros] = useState('');

  /**
   * Função responsável por enviar os dados para validação do login no back-end
   * 
   * @param {*} e Evento responsável por impedir a atualização da página
   */
  function validar(e) {
    e.preventDefault();
    const data = {
      login, senha
    };
    /**
     * Axios faz um POST com os dados de login e retorna uma Promise.
     * Se o login for bem sucedido, alguns dados do usuário são armazenados no
     * localStorage e utilizados nas demais páginas da aplicação
     * 
     * Se o back-end retornar erro 400, significa que a senha está inválida
     * Se o back-end retornar erro 500, significa que o usuário não foi encontrado
     */
    axios.post('/usuarios', data).then(result => {
      localStorage.setItem("usuario", result.data.nomeCompleto);
      localStorage.setItem("perfil", result.data.perfil);    
      history.push('/');
    }).catch(err => {
      if (err.response.status == 400) {
        setErros('Senha inválida!');
        setStatusModal('block');
      } else if (err.response.status == 500) {
        setErros('Usuário não encontrado!');
        setStatusModal('block');
      }
    });
  }

  /**
   * Modal responsável por avisar o usuário se o login foi bem sucedido ou não
   */
  const Modal = () => {
    return (
      <div style={{ display: statusModal}} id="modalSolicitacao" className="modal">
        <div className="modal-content">
          <div style={{background: '#f73a3a'}} className="modal-header">
            <span onClick={() => setStatusModal('none')} className="close">
              <FiX size={18} />
            </span>
          </div>
          <div className="text">
            <h3>{msg}</h3>            
            {erros ?              
                <h3 className="errorMessage"> <FiX size={18} /> {erros}</h3>
              :
                null
            }
          </div>
        </div>
      </div>
    )    
  }

  return(
    <div className="container-login">

      <Modal />

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