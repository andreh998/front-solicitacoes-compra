import React from 'react';

import './styles.css';

export default function Header() {
  return(
    <div className="header">
        <div>
          <button>Menu</button>
          <h4>Bem vindo André</h4>
        </div>        
        <a href="/login" >Sair</a>
    </div>
  )
}