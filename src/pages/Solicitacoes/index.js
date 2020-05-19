import React, { useState, useEffect } from 'react';
import { FiEye } from 'react-icons/fi';
import axios from '../../services/axios';
import { Link } from "react-router-dom";

import Header from '../../components/Header';

import './styles.css';

export default function Aprovacao() {

  /**
   * Crio um estado para as solicitações e inicio o mesmo com um array vazio
   */
  const [solicitacoes, setSolicitacoes] = useState([]);

  /**
   * Função assíncrona responsável por trazer as solicitações do back-end 
   * e salvá-las no estado 'solicitacoes'
   */
  async function carregarSolicitacoes(){
    const response = await axios.get('/solicitacoes/status?situacao=Aguardando');
    setSolicitacoes(response.data);
  }

   /**
   * useEffect será executado sempre que a página for carregada, pois não 
   * informei nenhum estado nele.
   * Ele será responsável por chamar a função carregarSolicitacoes.
   */
  useEffect(() => {
    carregarSolicitacoes();
  }, []);


  return (
    <>
    <Header />
    <div className="container">
      
      <div className="title">
        <h3>Solicitações Ativas</h3>
      </div>

      <div className="row">
        {solicitacoes.map((item, key) => (
          <div className="col col-2">
            <div className="s-container">
                <div className="col col-content">
                  <h4 className="s-text">Solicitante: {item.solicitante}</h4>
                  <h4 className="s-text">Item: {item.descricao}</h4>
                  <h4 className="s-text">Quantidade: {item.quantidade}</h4>
                  <h4 className="s-text">Valor total: {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(item.preco)}
                  </h4>
                </div>              
                <div className="col col-href">
                  <Link 
                    className="link"
                    to={{
                      pathname: "/tratar",
                      solicitacaoId: item.id
                    }}
                  >
                    <FiEye size={18} color="#1e99eb"/>
                    Visualizar
                  </Link>
                </div>
            </div>
          </div>
        ))}        
      </div>

    </div>
    </>
  )
}