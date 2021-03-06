import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiCheck,  FiCheckSquare, FiXSquare, FiX } from 'react-icons/fi';
import axios from '../../services/axios';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';

import './styles.css';

/**
 * Página responsável pela aprovação das solicitações 
 * 
 * @param {*} props Recebe uma propriedade da tela anterior, contendo o id 
 * da solicitação que será Aprovada ou Reprovada
 */
export default function Solicitacao( props ) {

  /**
   * Defino o history, que será responsável pela navegação
   */
  const history = useHistory();

  /**
   * Estados
   */
  const [solicitacao, setSolicitacao] = useState([]);
  const [situacao, setSituacao] = useState('Aprovado');
  const [habilitaObs, setHabilitaObs] = useState(true);
  const [observacao, setObservacao] = useState('');
  const [statusModal, setStatusModal] = useState('none');
  const [color, setColor] = useState('');
  const [msg, setMsg] = useState('');
  const [responseOK, setResponseOK] = useState(true);

  /**
   * Função responsável por atualizar o status da solicitação
   */
  async function Salvar() {    
    /**
     * Defino um objeto data com todos os dados que serão enviados via PUT para
     * a API
     */
    const data = {
      id: solicitacao.id,
      descricao: solicitacao.descricao,
      quantidade: solicitacao.quantidade,
      preco: solicitacao.preco,
      solicitante: solicitacao.solicitante,
      observacao,
      situacao,
      aprovador: localStorage.getItem("usuario")
    }
    /**
     * O axios faz o PUT para a API passando o id da solicitação e os dados.
     * O retorno é uma Promise que se for concluída tanto com sucesso quanto 
     * falha, definirá os estados que atualizarão a Modal, que por sua vez é
     * chamada no finally()
     */
    await axios.put(`/solicitacoes/${props.location.solicitacaoId}`, data).then(result => {
      setColor('#3bbd4d');
      setMsg(`Situação da solicitação alterada para ${situacao}!`);
      setResponseOK(true);
    }).catch(err => {
      setColor('#f73a3a');
      setMsg('Erro ao alterar a solicitação de compra!');
      setResponseOK(false);
    }).finally(() => {
      setStatusModal('block');
    });

  }

  /**
   * Componente Icon, definirá qual será o ícone da Modal conforme o retorno do
   * PUT feito pelo axios
   */
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

  /**
   * Modal que informará o usuário se a atualização do status foi bem sucedida
   * ou não
   */
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


  /**
   * Efeito responsável por capturar a solicitação que será atualizada.
   * É executado sempre que página for aberta.
   */
  useEffect(() => {
    axios.get(`/solicitacoes/${props.location.solicitacaoId}`).then(result => {
      setSolicitacao(result.data);
    }).catch(err => {
      console.log(err);
    });
    
  }, [])

  /**
   * Efeito responsável por habilitar ou desabilitar o textarea da Observação
   * É executado sempre que o estado 'situacao' for alterado
   */
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

      <Modal />

      <button className="go-back" onClick={() => history.goBack()}>
        <FiArrowLeft size={24} color='#fff' />
        <h3>Voltar</h3>
      </button>

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
            <button type="button" onClick={Salvar}> 
              <FiCheck color="#1e99eb" size={24}/>
              Salvar
            </button>          
          </div>
        </div>
      </div>

    </div>
    </>
  )
}