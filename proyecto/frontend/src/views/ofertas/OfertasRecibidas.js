import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import { Paper, makeStyles, Container } from '@material-ui/core';
import OfertasRecibidasConsultar from "./OfertasRecibidasConsultar"


const useStyle = makeStyles(theme => ({
  pageContent:{
      margin: theme.spacing(5),
      padding: theme.spacing(3)
  },
  container: {
    display: "flex",
    marginTop: "40px"
  }
}))


const OfertasRecibidas = (props) => {
  const classes = useStyle();
    return (
      <div>
        <Navbar/>        
        <Container>
          <Paper className={classes.pageContent}>
                OFERTAS RECIBIDAS
          </Paper>
          <Paper className={classes.pageContent}>
               <OfertasRecibidasConsultar idJuego={props.match.params.idJuego}/>
          </Paper>
        </Container>
      </div>
    );

}

export default OfertasRecibidas;
