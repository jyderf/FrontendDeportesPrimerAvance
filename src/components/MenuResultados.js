import React, { useState } from 'react';
import img_stilo from './css/img_stilo/menuVertical.css'




const MenuResultados = () => {


  return (
    
    
   
    <nav >
 
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
                <span class="title">Microfutbol</span>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <i class="fa fa-cube" aria-hidden="true"></i>
                <span class="title">Ajedrez</span>

            </a>
            
            
        </li>

       
        <li>
            <a class="" href="javascript:;">
                <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                <span class="title">Atletismo</span>

            </a>
     
        </li>
        <li>
            <a href="javascript:;">
                <i class="fa fa-heart" aria-hidden="true"></i>
                <span class="title">Tenis de mesa</span>
            </a>
        </li>
        <li class="last ">
            <a href="javascript:;">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span class="title">Otros deportes</span>
            </a>
        </li>
    </ul>
</nav>

    
  );
}

export default MenuResultados;