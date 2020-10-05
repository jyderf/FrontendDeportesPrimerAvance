import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TimeField from 'react-simple-timefield';
import img_stilo from './css/img_stilo/hora.css'








function OrganizarEncuentros() {




  
  return (


    <div class=" col bg-info text-white d-flex flex-column align-items-center">
      <div class="row">
        <h1>Organizar Encuentro</h1>
      </div>

      <div class="row mx-4">

        <form >
          <div class="form-group ">
            <label for="fecha">Fecha</label>
            <input type="date" class="form-control" id="fecha" placeholder="fecha" />
          </div>

          <div class="form-group ">
            <label for="hora">Hora</label>
            <input type="time" class="form-control" id="hora" ></input>
          </div>
                

          <div class="form-group ">
         
            <input type="text" class="form-control" id="juez_1" placeholder="Juez 1" />
          </div>
          <div class="form-group ">
          
            <input type="text" class="form-control" id="juez_2" placeholder="Juez 2" />
          </div>
          <div class="form-group ">
        
            <input type="text" class="form-control" id="juez_1" placeholder="Juez 3" />
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

export default OrganizarEncuentros;