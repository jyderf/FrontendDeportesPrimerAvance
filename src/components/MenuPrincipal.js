import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import img_stilo from './css/img_stilo/menuPrincipal.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrimeraVista from './PrimeraVista'



const MenuPrincipal = () => {


  return (

    <div class="container">

      <div class="row">
        <div>
          <ul class="nav">
            <li><Link to="">Inicio</Link>
              <ul class="sub">
              </ul>
            </li>

            <li><Link to="Resultados">Resultados</Link>
                
              <ul class="sub">
                <li><a href="#">Temporada</a></li>
                <li><a href="#">Posiciones</a></li>
                <li><a href="#">Partidos Previos</a></li>
              </ul>
            </li>

            <li><Link to="proxpartidos">Próx. Partidos</Link>
              <ul class="sub">
              </ul>
            </li>

            <li><Link to="organizador">Organizador</Link>
              <ul class="sub">
              </ul>
            </li>

            <li><a href="#">Acerca de</a>
              <ul class="sub">
                <li><Link to="elaplicativo">El aplicativo</Link></li>
                <li><Link to="losautores">Los autores</Link></li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </div>



  );
}

export default MenuPrincipal;