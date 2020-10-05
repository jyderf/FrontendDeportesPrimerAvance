import React from 'react';
import MenuResultados from './MenuResultados';


function CuerpoResultados() {

  return (

    <div class="container my-2 table-bordered bg-secondary ">

      <div class="row   ">

        <div class="col col-3 my-2 bg-white ">
          <MenuResultados />
        </div>

        <div class="col row my-2 bg-white d-flex flex-row justify-content-center">
          <div class="row " >
            <h1 class="text-center">Resultados</h1>
          </div>


        </div>

      </div>


   


    </div>

  );
}

export default CuerpoResultados;