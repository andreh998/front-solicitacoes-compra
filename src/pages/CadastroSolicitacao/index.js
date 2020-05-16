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
        <div className="f-container">
          <form className="col col-form">
            <div>
              <label>Descrição:</label>
              <input/>
              <label>Quantidade:</label>
              <input/>
              <label>Valor Total: </label>
              <input/>
            </div>
          </form>
          <div className="col col-hrefs">    
            <a href="/aaaa">              
              <FiCheck color="#1e99eb" size={24}/>
              Solicitar
            </a>            
          </div>
        </div>
      </div>

    </div>
    </>
  )
}