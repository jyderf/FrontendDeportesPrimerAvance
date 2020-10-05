import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'






function AgregarEquipo() {
  return (


    <div class=" col bg-info text-white d-flex flex-column align-items-center">
      <div class="row">
        <h1>Agregar equipo</h1>
      </div>

      <div class="row m-4">

        <form >
          <div class="form-group ">
            <label for="nombreEquipo">Nombre del equipo</label>
            <input type="text" class="form-control" id="nombreEquipo" aria-describedby="emailHelp" placeholder="Nombre del equipo" />
          </div>

          <div class="form-group">
            <label for="siglas">Siglas</label>
            <input type="text" class="form-control" id="siglas" placeholder="Siglas" />
          </div>

          <div class="form-group ">
            <p6>Programa</p6>

            <select class="selectpicker form-control form-control-sm" data-live-search="true">
              <option data-tokens="">--select--</option>
              <option data-tokens="masc">Ingeniería de Sistemas</option>
              <option data-tokens="fem">Administración de Emresas</option>
              <option data-tokens="fem">Ingeniería Ambiental</option>
              <option data-tokens="fem">Ingeniería Civil</option>
              <option data-tokens="fem">Ingeniería Forestal</option>
            </select>

          </div>

          <div class="form-group ">
            <p6>Semestre</p6>

            <select class="selectpicker form-control form-control-sm" data-live-search="true">
              <option data-tokens="">--select--</option>
              <option data-tokens="masc">1</option>
              <option data-tokens="fem">2</option>
              <option data-tokens="">3</option>
              <option data-tokens="masc">4</option>
              <option data-tokens="fem">5</option>
              <option data-tokens="">6</option>
              <option data-tokens="masc">7</option>
              <option data-tokens="fem">8</option>
              <option data-tokens="masc">9</option>
              <option data-tokens="fem">10</option>
            </select>

          </div>

          <div class="form-group ">
            <p6>Deporte</p6>

            <select class="selectpicker form-control form-control-sm" data-live-search="true">
              <option data-tokens="">--select--</option>
              <option data-tokens="masc">Futbol</option>
              <option data-tokens="fem">Ajedréz</option>
              <option data-tokens="masc">Ciclismo</option>
              <option data-tokens="fem">Tenes de mesa</option>
              <option data-tokens="masc">Otro</option>
            </select>

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

export default AgregarEquipo;