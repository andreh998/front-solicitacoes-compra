import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiCheckCircle, FiXOctagon, FiInbox } from 'react-icons/fi';
import axios from '../../services/axios';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';

import './styles.css';

export default function Aprovacao() {

  const history = useHistory();

  /**
   * Crio um estado para a situação das solicitações, iniciado com o status
   * 'Aguardando'
   * Crio um estado que conterá as solicitacoes, iniciado com um array vazio
   */
  const [situacao, setSituacao] = useState('Aguardando');
  const [solicitacoes, setSolicitacoes] = useState([]);
  const [color, setColor] = useState( '#1d33ff');

  /**
   * função assíncrona responsável por carregar as solicitações e salvá-las
   * no estado 'solicitacoes'
   */
  async function carregarSolicitacoes(situacao) {
    const response = await axios.get(`/solicitacoes/status?situacao=${situacao}`);
    setSolicitacoes(response.data);
  }

  const SituacaoTitulo = ({ situacao }) => {
    if (situacao === 'Aguardando') {
      setColor("#1d33ff");
      return (
        <div className="title">
          <h3>Solicitações Aguardando</h3>
          <FiInbox size={30} color={color} />
        </div>
      );
    } else if (situacao === 'Aprovado') {
      setColor("#059e2b");
      return (
        <div className="title">
          <h3>Solicitações Aprovadas</h3>
          <FiCheckCircle size={30} color={color} />
        </div>
      );
    } else if (situacao === 'Reprovado') {
      setColor("#f01f1f");
      return (
        <div className="title">
          <h3>Solicitações Reprovadas</h3>
          <FiXOctagon size={30} color={color} />
        </div>
      )
    }
  }

  useEffect(() => {
    carregarSolicitacoes(situacao);
  }, [situacao]);

  return (
    <>
    <Header />
    <div className="container">

      <button className="go-back" onClick={() => history.goBack()}>
        <FiArrowLeft size={24} color='#fff' />
        <h3>Voltar</h3>
      </button>

      <div className="filtro">
        <h3>Filtre pelo status da solicitação:</h3>      
        <select onChange={e => setSituacao(e.target.value)}>
          <option selected value="Aguardando">Aguardando aprovação</option>
          <option value="Aprovado">Aprovadas</option>
          <option value="Reprovado">Reprovadas</option>
        </select>
      </div>
      
      <SituacaoTitulo situacao={situacao}/>

      <div className="row">

        {solicitacoes.map((item, key) => (
          <div className="col col-2">
            <div className="c-container">
                <div className="col col-content">
                  <h4 className="s-text">Solicitante: {item.solicitante}</h4>
                  <h4 className="s-text">Item: {item.descricao}</h4>
                  <h4 className="s-text">Quantidade: {item.quantidade}</h4>
                  <h4 className="s-text">Valor total: {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(item.preco)}
                  </h4>
                  {situacao === 'Aprovado' ? 
                  <h4 style={{color: color }} className="s-text">Aprovado por: {item.aprovador}</h4>
                  : situacao === 'Reprovado' ?
                  <>
                    <h4 style={{color: color }} className="s-text">Reprovado por: {item.aprovador}</h4>
                    <h4 className="s-text">Motivo: {item.observacao}</h4>
                  </>
                  :
                  <></>
                  }                  
                </div>   
            </div>
          </div>
        ))}               
        
      </div>

    </div>
    </>
  )
}