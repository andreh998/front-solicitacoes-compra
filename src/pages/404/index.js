import React from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header';

import './styles.css';

export default function NotFound() {

  let location = useLocation();


  /**
   * Página que informa ao usuário que a rota acessada não existe
   * 
   * Com a validação do acesso em cada rota, ele nunca cairá nessa página
   */

  return(
    <>
      <Header />
      <h1>404 not found</h1>
      <h2>Nada encontrado em: {location.pathname} </h2>
    </>
  )
}