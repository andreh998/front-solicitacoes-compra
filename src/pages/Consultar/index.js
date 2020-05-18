import React from 'react';
import { FiCheckCircle, FiXOctagon, FiInbox } from 'react-icons/fi';

import Header from '../../components/Header';

import './styles.css';

export default function Aprovacao() {
  return (
    <>
    <Header />
    <div className="container">
      
      <div className="title">
        <h3>Solicitações Aguardando</h3>
        <FiInbox size={30} color="#059e2b" />
      </div>

      <div className="row">

        <div className="col col-2">
          <div className="c-container">
              <div className="col col-content">
                <h4 className="s-text">Solicitante: André Hoffmann</h4>
                <h4 className="s-text">Item: Pilha AAA 9v</h4>
                <h4 className="s-text">Quantidade: 2</h4>
                <h4 className="s-text">Valor total: 12.90</h4>
              </div> 
          </div>
        </div>

        <div className="col col-2">
          <div className="c-container">
              <div className="col col-content">
                <h4 className="s-text">Solicitante: André Hoffmann</h4>
                <h4 className="s-text">Item: Pilha AAA 9v</h4>
                <h4 className="s-text">Quantidade: 5</h4>
                <h4 className="s-text">Valor total: 12.90</h4>
              </div>
          </div>
        </div>
        
        
      </div>

      <div className="title">
        <h3>Solicitações Aprovadas</h3>
        <FiCheckCircle size={30} color="#1d33ff" />
      </div>

      <div className="row">

        <div className="col col-2">
          <div className="c-container">
              <div className="col col-content">
                <h4 className="s-text">Solicitante: André Hoffmann</h4>
                <h4 className="s-text">Item: Pilha AAA 9v</h4>
                <h4 className="s-text">Quantidade: 2</h4>
                <h4 className="s-text">Valor total: 12.90</h4>
                <h4 style={{color: '#1d33ff' }} className="s-text">Aprovado por: Camila</h4>
              </div>  
          </div>
        </div>

        <div className="col col-2">
          <div className="c-container">
              <div className="col col-content">
                <h4 className="s-text">Solicitante: André Hoffmann</h4>
                <h4 className="s-text">Item: Pilha AAA 9v</h4>
                <h4 className="s-text">Quantidade: 5</h4>
                <h4 className="s-text">Valor total: 12.90</h4>
                <h4 style={{color: '#1d33ff' }} className="s-text">Aprovado por: Camila</h4>
              </div>   
          </div>
        </div>
        
        
      </div>

      <div className="title">
        <h3>Solicitações Reprovadas</h3>
        <FiXOctagon size={30} color="#f01f1f" />
      </div>

      <div className="row">

        <div className="col col-2">
          <div className="c-container">
              <div className="col col-content">
                <h4 className="s-text">Solicitante: André Hoffmann</h4>
                <h4 className="s-text">Item: Pilha AAA 9v</h4>
                <h4 className="s-text">Quantidade: 2</h4>
                <h4 className="s-text">Valor total: 12.90</h4>
                <h4 style={{color: '#f01f1f' }} className="s-text">Reprovada por: Camila</h4>
                <h4 className="s-text">Motivo: Não tem necessidade </h4>
              </div>   
          </div>
        </div>

        <div className="col col-2">
          <div className="c-container">
              <div className="col col-content">
                <h4 className="s-text">Solicitante: André Hoffmann</h4>
                <h4 className="s-text">Item: Pilha AAA 9v</h4>
                <h4 className="s-text">Quantidade: 5</h4>
                <h4 className="s-text">Valor total: 12.90</h4>
                <h4 style={{color: '#f01f1f' }} className="s-text">Reprovada por: Camila</h4>
                <h4 className="s-text">Motivo: Muito caro</h4>
              </div>  
          </div>
        </div>
        
        
      </div>


    </div>
    </>
  )
}