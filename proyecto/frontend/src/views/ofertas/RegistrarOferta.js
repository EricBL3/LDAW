import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import { Paper, makeStyles, Container, Typography } from '@material-ui/core';
import RegistrarOfertaScreen from "./RegistrarOfertaScreen"


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


const RegistrarOferta = (props) => {
  const classes = useStyle();
  console.log(props);
    return (
      <div>
        <Navbar history={props.history}/>        
        <Container>
          <Paper className={classes.title}>
               <Typography variant="h4" >Registrar</Typography> 
          </Paper>
          <Paper className={classes.pageContent}>
               <RegistrarOfertaScreen idCuentaEnviar={props.match.params.idJuego}/>
          </Paper>
        </Container>
      </div>
    );

}

export default RegistrarOferta;
