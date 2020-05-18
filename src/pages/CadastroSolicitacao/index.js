import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';

import Header from '../../components/Header';

import './styles.css';

export default function Cadastro() {

  console.log('CADASTRO');

  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState(0.0);
  const [valor, setValor] = useState(0.0);

  function enviar(e) {
    e.preventDefault();
    console.log(descricao, quantidade, valor);
  }

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
              <input value={descricao} onChange={e => setDescricao(e.target.value)}/>
              <label>Quantidade:</label>
              <input value={quantidade} onChange={e => setQuantidade(e.target.value)}/>
              <label>Valor Total: </label>
              <input value={valor} onChange={e => setValor(e.target.value)}/>
            </div>
          </form>
          <div className="col col-hrefs">    
            <button onClick={e => enviar(e)} type="button">              
              <FiCheck color="#1e99eb" size={24}/>
              Solicitar
            </button>            
          </div>
        </div>
      </div>

    </div>
    </>
  )
}