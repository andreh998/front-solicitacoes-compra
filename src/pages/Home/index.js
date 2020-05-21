import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiX } from 'react-icons/fi';

import Header from '../../components/Header';

import './styles.css';
import nova from '../../assets/new.png';
import aprovacao from '../../assets/check.png';
import consultar from '../../assets/consultar.png';
import sair from '../../assets/sair.png';

export default function Home() {

  const history = useHistory();
  const [statusModal, setStatusModal] = useState('none');
  const [perfil, setPerfil] = useState(localStorage.getItem("perfil"));
  const [menuSolicitar, setMenuSolicitar] = useState('');
  const [menuConsultar, setMenuConsultar] = useState('');
  const [menuAprovacao, setMenuAprovacao] = useState('');

  function Sair() {
    setStatusModal('none');
    localStorage.clear();
    history.push('/login');
  }

  const Modal = () => {
    return (
      <div style={{ display: statusModal}} id="modalSolicitacao" className="modal">
        <div className="modal-content">
          <div className="modal-header color-header">          
            <span onClick={() => setStatusModal('none')} className="close">
              <FiX size={18} color={'#000'} />
            </span>
          </div>
          <div className="text">
            <h3>Deseja realmente sair?</h3>
          </div>
          <div className="modalButtons">
            <button className="b-sim" onClick={() => Sair()}>Sim</button>
            <button className="b-nao" onClick={() => setStatusModal('none')}>Não</button>
          </div>
        </div>
      </div>
    )    
  }

  useEffect(() => {
    switch(perfil) {
      case 'solicitante':        
        setMenuAprovacao('none');
        setMenuConsultar('inline-block');
        setMenuSolicitar('inline-block');
        break;
      case 'almoxarife':
        setMenuAprovacao('inline-block');
        setMenuConsultar('none');
        setMenuSolicitar('none');
        break;
      case 'admin':        
        setMenuAprovacao('none');
        setMenuSolicitar('none');  
        setMenuConsultar('inline-block');   
        break;
      default:
        break;   
    }
  },[]);

  return(
    <>
      <Header />

      <Modal/>

      <div className="container">
        <div style={{marginTop: 15}} className="row">

          <div style={{ display: menuSolicitar }} className="column col-5">
            <button onClick={() => history.push('/cadastro')} className="content">
              <img className="imgs" src={nova} alt="Cadastrar Solicitação"></img>
              <h3>Solicitar material</h3>
            </button>
          </div>

          <div  style={{display: menuConsultar}} className="column col-5">
            <button onClick={() => history.push('/consultar')} className="content">
              <img className="imgs" src={consultar} alt="Consultar Solicitações"></img>
              <h3>Consultar </h3>
            </button>
          </div>

          <div style={{display: menuAprovacao}} className="column col-5">
            <button onClick={() => history.push('/solicitacoes')} className="content">
              <img className="imgs" src={aprovacao} alt="Aprovar Solicitaçòes"></img>
              <h3>Aprovações </h3>
            </button>
          </div>

          <div style={{display: 'inline-block'}}  className="column col-5">
            <button onClick={() => setStatusModal('block')} className="content">
              <img className="imgs" src={sair} alt="Cadastrar Solicitação"></img>
              <h3>Sair</h3>
            </button>
          </div>
          

        </div>
      </div>
    </>
  )
}