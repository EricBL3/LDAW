import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import { Paper, makeStyles, Container, Typography } from '@material-ui/core';
import OfertasRecibidasConsultar from "./OfertasRecibidasConsultar"
import { useEffect } from "react";
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


const OfertasRecibidas = (props) => {
  const classes = useStyle();
  useEffect(() => {
      if(!Cookies.get('rol'))
      {
          props.history.goBack();
      }
  }, []);
    return (
      <div>
        <Navbar history={props.history}/>        
        <Container>
          <Paper className={classes.title}>
               <Typography variant="h4" >OFERTAS RECIBIDAS</Typography> 
          </Paper>
          <Paper className={classes.pageContent}>
               <OfertasRecibidasConsultar idJuego={props.match.params.idJuego}/>
          </Paper>
        </Container>
      </div>
    );

}

export default OfertasRecibidas;
