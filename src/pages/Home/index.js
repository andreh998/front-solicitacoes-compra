import React from 'react';

import Header from '../../components/Header';

import './styles.css';
import nova from '../../assets/new.png';
import aprovacao from '../../assets/check.png';
import consultar from '../../assets/consultar.png';
import sair from '../../assets/sair.png';

export default function Home() {
  return(
    <>
      <Header />
      <div className="container">
        <div style={{marginTop: 15}} className="row">

          <div className="column col-5">
            <button className="content">
              <img className="imgs" src={nova} alt="Cadastrar Solicitação"></img>
              <h3>Solicitar material</h3>
            </button>
          </div>

          <div className="column col-5">
            <button className="content">
              <img className="imgs" src={consultar} alt="Cadastrar Solicitação"></img>
              <h3>Consultar </h3>
            </button>
          </div>

          <div className="column col-5">
            <button className="content">
              <img className="imgs" src={aprovacao} alt="Aprovar Solicitaçòes"></img>
              <h3>Aprovações </h3>
            </button>
          </div>

          <div className="column col-5">
            <button className="content">
              <img className="imgs" src={sair} alt="Cadastrar Solicitação"></img>
              <h3>Sair</h3>
            </button>
          </div>
          

        </div>
      </div>
    </>
  )
}