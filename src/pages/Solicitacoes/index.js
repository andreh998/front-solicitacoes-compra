import React, { useState, useEffect } from 'react';
import { FiEye } from 'react-icons/fi';
import axios from '../../services/axios';

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
   * 
   * A função visualizar irá encaminhar o usuário para a tela de 
   * aprovação/reprovação da solicitação
   * 
   * @param {*} e o evento no qual impedira o reload quando o botão for clicado
   * @param {*} id o id da solicitação que será enviado para a prox. tela
   */
  function visualizar(e, id) {
    e.preventDefault();
    console.log(id);
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
                  <h4 className="s-text">Valor total: {item.preco}</h4>
                </div>              
                <div className="col col-href">
                  <button onClick={e => visualizar(e, key)}>
                    <FiEye size={18} color="#1e99eb"/>
                    Visualizar
                  </button>
                </div>
            </div>
          </div>
        ))}        
      </div>

    </div>
    </>
  )
}