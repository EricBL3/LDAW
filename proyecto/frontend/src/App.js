import React from 'react';
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme.config'

import Home from './views/Home';
import OfertasRecibidas from './views/ofertas/OfertasRecibidas';
import { DetalleTitulo } from './views/DetalleTitulo/DetalleTitulo';

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Router>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/detalleTitulo/:tituloId" exact={true} component={DetalleTitulo}/>
        <Route path="/misJuegos/:idJuego([0-9]*)/ofertasRecibidas" exact={true} component={OfertasRecibidas}/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
