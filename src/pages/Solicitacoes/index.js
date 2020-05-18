import React from 'react';
import { FiEye } from 'react-icons/fi';

import Header from '../../components/Header';

import './styles.css';

export default function Aprovacao() {
  return (
    <>
    <Header />
    <div className="container">
      
      <div className="title">
        <h3>Solicitações Ativas</h3>
      </div>

      <div className="row">

        <div className="col col-2">
          <div className="s-container">
              <div className="col col-content">
                <h4 className="s-text">Solicitante: André Hoffmann</h4>
                <h4 className="s-text">Item: Pilha AAA 9v</h4>
                <h4 className="s-text">Quantidade: 2</h4>
                <h4 className="s-text">Valor total: 12.90</h4>
              </div>              
              <div className="col col-href">
                <button>
                  <FiEye size={18} color="#1e99eb"/>
                  Visualizar
                </button>
              </div>
          </div>
        </div>

        <div className="col col-2">
          <div className="s-container">
              <div className="col col-content">
                <h4 className="s-text">Solicitante: André Hoffmann</h4>
                <h4 className="s-text">Item: Pilha AAA 9v</h4>
                <h4 className="s-text">Quantidade: 5</h4>
                <h4 className="s-text">Valor total: 12.90</h4>
              </div>              
              <div className="col col-href">
                <button>
                  <FiEye size={18} color="#1e99eb"/>
                  Visualizar
                </button>
              </div>
          </div>
        </div>
        
      </div>

    </div>
    </>
  )
}