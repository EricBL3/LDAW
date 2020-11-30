import React from 'react';
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme.config'

import Home from './views/Home';
import OfertasRecibidas from './views/ofertas/OfertasRecibidas';
import { DetalleTitulo } from './views/DetalleTitulo/DetalleTitulo';
import { MisJuegos } from './views/MisJuegos/MisJuegos';
import { RegistrarJuego } from './views/RegistrarJuego/RegistrarJuego';
import ConsultarCuentas from './views/Cuentas/ConsultarCuentas';
import OfertasEnviadas from './views/ofertas/OfertasEnviadas';

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Router>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/cuentas" exact={true} component={ConsultarCuentas}/>
        <Route path="/detalleTitulo/:tituloId" exact={true} component={DetalleTitulo}/>
        <Route path="/misJuegos" exact={true} component={MisJuegos}/>
        <Route path="/misjuegos/registrarJuego" exact={true} component={RegistrarJuego}/>
        <Route path="/misJuegos/:idJuego([0-9]*)/ofertasRecibidas" exact={true} component={OfertasRecibidas}/>
        <Route path="/misOfertas/:idCuentaEnviar([0-9]*)" exact={true} component={OfertasEnviadas}/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
