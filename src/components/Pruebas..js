import React, { Component } from 'react';
import img_stilo from './css/img_stilo/carrusel.css'

import ImagenUno from './images/ImagenUno.jpg'
import ImagenDos from './images/ImagenDos.jpg'
import ImagenTres from './images/ImagenTres.jpg'
import ImagenCuatro from './images/ImagenCuatro.jpg'
import ImagenCinco from './images/ImagenCinco.jpg'
import ImagenSeis from './images/ImagenSeis.jpg'
import ImagenSiete from './images/ImagenSiete.jpg'
import ImagenOcho from './images/ImagenOcho.jpg'
import ImagenNueve from './images/ImagenNueve.jpg'
import ImagenDiez from './images/ImagenDiez.jpg'
import ImagenOnce from './images/ImagenOnce.jpg'
import ImagenDoce from './images/ImagenDoce.jpg'


export class Pruebas extends Component {
    render() {

        return (
           

<div class="slider">
			<ul>
				<li> <img src={ImagenUno} alt="" /> </li>
				<li> <img src={ImagenDos} alt="" /> </li>
				<li> <img src={ImagenTres} alt="" /> </li>
				<li> <img src={ImagenCuatro} alt="" /> </li>
                <li> <img src={ImagenCinco} alt="" /> </li>
				<li> <img src={ImagenSeis} alt="" /> </li>
				<li> <img src={ImagenSiete} alt="" /> </li>
				<li> <img src={ImagenOcho} alt="" /> </li>
                <li> <img src={ImagenNueve} alt="" /> </li>
				<li> <img src={ImagenDiez} alt="" /> </li>
				<li> <img src={ImagenOnce} alt="" /> </li>
				<li> <img src={ImagenDoce} alt="" /> </li>
			</ul>
		</div>

           
        );
    }
}

export default Pruebas;