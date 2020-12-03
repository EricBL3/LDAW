import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import Cookies from 'js-cookie'


function EstadoOferta (props) {

    if(props.estadoOferta === 'aceptada'){
        return <Alert severity="success">Oferta Aceptada!</Alert>
    } else if (props.estadoOferta === 'terminada') {
      return <Alert severity="warning">Oferta Terminada!</Alert>
    } else if (props.estadoOferta === 'pendiente') {
      return <Alert severity="info">Oferta Pendiente</Alert>
    }  else if (props.estadoOferta === 'rechazada') {
      return  <Alert severity="error">Oferta Rechazada!</Alert>
    }
  
  }

export default function OfertasEnviadasConsultar(props) {

    const[values, setValues] = useState([]);

    useEffect ( () => {

        axios.get('http://127.0.0.1:8000/api/ofertasEnviadas/' + Cookies.get('idCuenta'))
        .then(res => { setValues (res.data)
    })
        .catch((e) => {
            console.log(e)
        })
   }, []);

   console.log(values);

    return (
        <div>
          <Grid container spacing="3">
          {values.map( (oferta) => (
              <Grid item sm="6">
              <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                    {oferta.nombreTitulo}
                </Typography>
                <Typography variant="body2">
                 <EstadoOferta estadoOferta={oferta.estado}/>
                </Typography>
                <Typography variant="body2">
                 Propietario: {oferta.usuario}
                </Typography>
                <Typography variant="body2">
                  Consola: {oferta.nombreConsola}
                </Typography>
                <Typography variant="body2">
                  Genero: {oferta.nombreGenero}
                </Typography>
                <Typography variant="body2">
                  Desarrollador: {oferta.nombreDesarrollador}
                </Typography>
                <Typography variant="body2">
                  Publisher: {oferta.nombrePublisher}
                </Typography>
                <Typography variant="body2">
                  Condiciones: {oferta.condiciones}
                </Typography>
              </CardContent>
            </Card>
            </Grid>
            ))}
          </Grid>
           
        </div>
    )
}
