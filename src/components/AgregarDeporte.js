import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TimeField from 'react-simple-timefield';
import img_stilo from './css/img_stilo/hora.css'








function AgregarDeporte() {
 
  return (


    <div class=" col bg-info text-white d-flex flex-column align-items-center">
      <div class="row m-5">
        <h1> Agregar Deporte</h1>
      </div>

      <div class="row m-2">

        <form >
                

          <div class="form-group ">
          <label for="nombre_deporte">Nombre Deporte</label>
            <input type="text" class="form-control" id="nombre_deporte" placeholder="Nombre Deporte" required />
          </div>

          <div class="form-group ">
          <label for="max_integrantes">Máximo integrantes</label>
            <input type="num" class="form-control" id="max_integrantes" placeholder="Máximo de integrantes" required />
          </div>
          <div class="form-group ">
          <label for="cod_deporte">Código Deporte</label>
            <input type="text" class="form-control" id="cod_deporte" placeholder="Código Deporte" required />
          </div>


          

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>

      </div>

      <div class="row ">
        <div class="col">

          <ul class="nav">
            <li><Link to="Organizador"> Volver</Link></li>
          </ul>

        </div>
      </div>




    </div>



  );
}

export default AgregarDeporte;