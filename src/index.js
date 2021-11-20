import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, useRoutes } from "react-router-dom";
import './index.css';
import ListagemAlunos from './Aula3/pages/ListagemAlunos';
import Exemplos from './Aula2/pages/material/Exemplos';
import NavBar from './components/NavBar';
import Cadastro from "./Aula3/pages/Cadastro";



const Routes = () => {
  const routes = useRoutes([
    { path: "/", element:  <ListagemAlunos /> },
    { path: "/aula2", element: <Exemplos />},
    { path: "/cadastro", element: <Cadastro />}
  ]);

  return routes;
}

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
    <NavBar />
    <Routes />
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
