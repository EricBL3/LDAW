import React, { Component, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { Paper, makeStyles, Container, Typography } from '@material-ui/core';
import OfertasEnviadasConsultar from "./OfertasEnviadasConsultar"
import Mensaje from "../../components/Mensaje";
import Cookies from 'js-cookie'


const useStyle = makeStyles(theme => ({
  pageContent:{
      margin: theme.spacing(5),
      padding: theme.spacing(3)
  },
  container: {
    display: "flex",
    marginTop: "40px"
  } ,
  title: {
    textAlign: "center",
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))


const OfertasEnviadas = (props) => {
  const classes = useStyle();
  const args = props.location.search;

  useEffect(() => {
      if(!Cookies.get('rol'))
      {
          props.history.goBack();
      }
  }, []);
  console.log(props);
    return (
      <div>
        <Navbar history={props.history}/>        
        <Container>
          <Paper className={classes.title}>
               <Typography variant="h4" >OFERTAS ENVIADAS</Typography> 
          </Paper>
          <Paper className={classes.pageContent}>
               <OfertasEnviadasConsultar idCuentaEnviar={props.match.params.idJuego}/>
          </Paper>
        </Container>

        <Mensaje
            success={args.includes("agregarOferta") ? args.slice(-1) : -1} 
            mensajeExito={"Se registró la oferta en el sistema de manera exitosa."}
            mensajeError={"Hubo un error al registrar la oferta en el sistema"}
            />
      </div>
    );

}

export default OfertasEnviadas;
