import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiX } from 'react-icons/fi';

import './styles.css';
import '../../global.css';

export default function Header() {

  const history = useHistory();
  const [statusModal, setStatusModal] = useState('none');

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
  return(
    <>
    <Modal />
    <div className="header">
      <div>
        <h4>Bem vindo {localStorage.getItem("usuario")}</h4>
      </div>        
      <button onClick={() => setStatusModal('block')} >Sair</button>
    </div>
    </>
  )
}