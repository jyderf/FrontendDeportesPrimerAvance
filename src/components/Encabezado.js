import React from 'react';

import Login from './Login';
import Buscador from './Buscador';
import Actualizar from './Actualizar';

import MenuPrincipal from './MenuPrincipal';
import SimpleSlider from './SimpleSlider';


export function Encabezado() {
  var a = 1;
  return (



    <div className="container ">


      <div className="row bg-dark text-white   ">
        <div className="col">
          <h4 align="center" className=" py-6 mt-4">Deportes ITP</h4>
        </div>

        <div className="col  ">
          {a == 1 ? <Login /> : "Conectado"}
        </div>
      </div>

      <div className="row  bg-dark ">
        <div className="col col-12  ">
          <SimpleSlider />
        </div>
      </div>

      <div class="row bg-warning ">
        <div class="col  ">
          <MenuPrincipal />
        </div>
        <div class="col col-3 my-4" >
          <Buscador />
        </div>
      </div>



    </div>



  );
}

export default Encabezado;
