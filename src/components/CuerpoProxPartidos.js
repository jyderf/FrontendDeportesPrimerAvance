import React from 'react';


function CuerpoProxPartidos() {

  return (

    <div class="container my-2 table-bordered bg-secondary">
      <div class="row   ">



        <div class="col col-12 my-2 container bg-white" align="center"  >

        <h1>Próximos partidos</h1>

          <table class="table table-responsive">
            <thead>

              <tr>
                <th>Fecha</th>
                <th>Equipo Uno</th>
                <th>Favorito</th>
                <th>Equipo Dos</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>18-10-2020</td>
                <td>Administración semestre1</td>
                <td>Ingeniería Forestal semestre 3</td>
                <td>Ingeniería Forestal semestre 3</td>
              </tr>

              <tr>
                <td>18-10-2020</td>
                <td>Ingeniería de Sistemas semestre 9</td>
                <td>Ingeniería de Sistemas semestre 9</td>
                <td>Ingeniería Civil Semestre 2</td>
              </tr>

              <tr>
                <td>18-10-2020</td>
                <td>Ingeniería Ambiental Semestre 5</td>
                <td>Administración de Empresas semestre 10</td>
                <td>Administración de Empresas semestre 10</td>
              </tr>

              
             
            </tbody>
          </table>



        </div>

      </div>
    </div>



  );
}

export default CuerpoProxPartidos;