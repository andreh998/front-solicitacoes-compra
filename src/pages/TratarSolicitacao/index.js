import React from 'react';
import { FiCheck } from 'react-icons/fi';

import Header from '../../components/Header';

import './styles.css';

export default function Solicitacao() {
  return(
    <>
    <Header />
    <div className="container">

      <div className="title">
        <h3>Solicitação de materiais </h3>
      </div>

      <div className="row">
        <div className="t-container">
          <form className="col col-form">
            <div>
              <label>Descrição:</label>
              <input/>
              <label>Quantidade:</label>
              <input/>
              <label>Valor Total: </label>
              <input/>
              <label>Tratativa: </label>
              <select/>
              <label>Observação: </label>
              <textarea/>
            </div>
          </form>
          <div className="col col-h">    
            <a href="/aaaa">              
              <FiCheck color="#1e99eb" size={24}/>
              Salvar
            </a>            
          </div>
        </div>
      </div>

    </div>
    </>
  )
}