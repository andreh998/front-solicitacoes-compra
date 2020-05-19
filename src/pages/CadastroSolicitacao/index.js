import React, { useState } from 'react';
import { FiCheck, FiCheckSquare, FiXSquare, FiX } from 'react-icons/fi';
import NumberFormat from 'react-number-format';
import axios from '../../services/axios';

import Header from '../../components/Header';

import './styles.css';

export default function Cadastro() {

  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState();
  const [valor, setValor] = useState(0);
  const [statusModal, setStatusModal] = useState('none');
  const [color, setColor] = useState('');
  const [msg, setMsg] = useState('');
  const [responseOK, setResponseOK] = useState(true);

  function enviar(e) {
    e.preventDefault();
    const data = {
      solicitante: 'André Hoffmann',
      situacao: 'Aguardando',
      descricao, quantidade, 
      preco: valor,
    };
    axios.post('/solicitacoes', data).then(result => {
      setColor('#3bbd4d');
      setMsg('Solicitação de compra cadastrada com sucesso!');
      setResponseOK(true);
    }).catch(err => {
      setColor('#f73a3a');
      setMsg('Erro ao cadastrar solicitação de compra!');
      setResponseOK(false);
    }).finally(() => {
      setStatusModal('block');
    });
  }

  const Icon = () => {
    if (responseOK) {
      return (
        <FiCheckSquare size={20} color="#09501b" />
      )
    } else {
      return (
        <FiXSquare size={20} color="#750c0c" />
      )
    }
  }

  const Modal = () => {
    return (
      <div style={{ display: statusModal}} id="modalSolicitacao" className="modal">
        <div className="modal-content">
          <div style={{background: color}} className="modal-header">
            <Icon />
            <span onClick={() => setStatusModal('none')} className="close">
              <FiX size={18} />
            </span>
          </div>
          <div className="text">
            <h3>{msg}</h3>
          </div>
        </div>
      </div>
    )    
  }


  return(
    <>
    <Header />
    <div className="container">
      
      <Modal />

      <div className="title">
        <h3>Solicitação de materiais </h3>
      </div>

      <div className="row">
        <div className="f-container">
          <form className="col col-form">
            <div>
              <label>Descrição:</label>
              <input onChange={e => setDescricao(e.target.value)}/>
              <label>Quantidade:</label>
              <input type="number" onChange={e => setQuantidade(e.target.value)}/>
              <label>Valor Total: </label>              
              <NumberFormat 
                thousandSeparator="."
                decimalSeparator=","
                fixedDecimalScale
                decimalScale={2} 
                prefix={'R$'} 
                onValueChange={(values) => {
                  const {formattedValue, value} = values;
                  setValor(value);
                }
              }/>
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