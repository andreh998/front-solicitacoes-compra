import React, { useState, useEffect } from 'react';
import { FiCheck } from 'react-icons/fi';
import axios from '../../services/axios';

import Header from '../../components/Header';

import './styles.css';

export default function Solicitacao( props ) {

  const [solicitacao, setSolicitacao] = useState([]);
  const [situacao, setSituacao] = useState('Aprovado');
  const [habilitaObs, setHabilitaObs] = useState(true);
  const [observacao, setObservacao] = useState('');

  async function salvar() {
    
    const data = {
      id: solicitacao.id,
      descricao: solicitacao.descricao,
      quantidade: solicitacao.quantidade,
      preco: solicitacao.preco,
      solicitante: solicitacao.solicitante,
      observacao,
      situacao,
      aprovador: 'Josefino Sharknado'
    }
    await axios.put(`/solicitacoes/${props.location.solicitacaoId}`, data).then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      console.log('finally');
    });

  }

  useEffect(() => {
    axios.get(`/solicitacoes/${props.location.solicitacaoId}`).then(result => {
      setSolicitacao(result.data);
    }).catch(err => {
      console.log(err);
    });
    
  }, [])

  useEffect(()=> {
    if(situacao == 'Aprovado') {
      setHabilitaObs(true);
    } else if(situacao == 'Reprovado'){
      setHabilitaObs(false);
    }
  }, [situacao]);

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
              <label>Descrição: </label>
              <input value={solicitacao.descricao} readOnly />
              <label>Quantidade:</label>
              <input value={solicitacao.quantidade} readOnly />
              <label>Valor Total: </label>
              <input value={new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(solicitacao.preco)} readOnly />
              <label>Tratativa: </label>
              <select onChange={e => setSituacao(e.target.value)}>
                <option value="Aprovado">Aprovar</option>
                <option value="Reprovado">Reprovar</option>
              </select>
              <label>Observação: </label>
              <textarea disabled={habilitaObs} required={!habilitaObs} onChange={e => setObservacao(e.target.value)} />
            </div>
          </form>
          <div className="col col-h">    
            <button type="button" onClick={salvar}> 
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