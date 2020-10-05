import React, { useState } from 'react';
import img_stilo from './css/img_stilo/menuVertical.css'
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrimeraVista from './PrimeraVista'




const MenuOrganizador = () => {


    return (



        <nav>

            <div class="menu-toggle">
                <h3>Menu</h3>
                <button type="button" id="menu-btn">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>


            <ul id="respMenu" class="ace-responsive-menu" data-menu-style="vertical">
                

                <li>
                    <a href="javascript:;">
                        <i class="fa fa-home" aria-hidden="true"></i>
                        <Link class="title" to="agregarequipo">Agregar equipo</Link>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="fa fa-cube" aria-hidden="true"></i>
                        <Link class="title" to="vincularjugadores">Vincular jugadores</Link>

                    </a>


                </li>


                <li>
                    <a class="" href="javascript:;">
                        <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                        <Link class="title" to="organizarencuentros">Organizar encuentros</Link>

                    </a>

                </li>
                <li>
                    <a href="javascript:;">
                        <i class="fa fa-heart" aria-hidden="true"></i>
                        <Link class="title" to="agregardeporte">Agregar deporte</Link>
                    </a>
                </li>
                <li class="last ">
                    <a href="javascript:;">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <span class="title">Agregar administrador</span>
                    </a>
                </li>
                <li class="last ">
                    <a href="javascript:;">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <span class="title">Solo administradodres</span>
                    </a>
                </li>
            </ul>
        </nav>


    );
}

export default MenuOrganizador;