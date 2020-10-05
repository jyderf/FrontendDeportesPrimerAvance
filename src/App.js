import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LosAutores from './components/LosAutores';
import ElAplicativo from './components/ElAplicativo';
import Organizador from './components/Organizador';
import PrimeraVista from './components/PrimeraVista'
import ProxPartidos from './components/ProxPartidos';
import Resultados from './components/Resultados';
import AgregarEquipo from './components/AgregarEquipo';
import VincularJugadores from './components/VincularJugadores';
import OrganizarEncuentros from './components/OrganizarEncuentros';
import AgregarDeporte from './components/AgregarDeporte';


function App() {

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PrimeraVista} />
        <Route exact path="/resultados" component={Resultados} />
        <Route exact path="/proxpartidos" component={ProxPartidos} />
        <Route exact path="/organizador" component={Organizador} />
        <Route exact path="/elaplicativo" component={ElAplicativo} />
        <Route exact path="/losautores" component={LosAutores} />
        <Route exact path="/agregarequipo" component={AgregarEquipo} />
        <Route exact path="/vincularjugadores" component={VincularJugadores} />
        <Route exact path="/organizarencuentros" component={OrganizarEncuentros} />
        <Route exact path="/agregardeporte" component={AgregarDeporte} />

        
        

      </Switch>

    </BrowserRouter>

  )

}



export default App;