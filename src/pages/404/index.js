import React from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header';

import './styles.css';

export default function NotFound() {

  let location = useLocation();

  return(
    <>
      <Header />
      <h1>404 not found</h1>
      <h2>Nada encontrado em: {location.pathname} </h2>
    </>
  )
}