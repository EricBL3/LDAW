import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Cookies from 'js-cookie'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Dialog, DialogContent, DialogTitle, Grid, DialogContentText, DialogActions, ListItemSecondaryAction } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';


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

function Botones(props){

  const[open, setOpen] = useState({acceptOpen: false, rejectOpen: false, terminateOpen: false, infoOpen: false});
  const[json, setJson] = useState({idOferta: props.idOferta, estado: ""});
  const [conSesion, setConSesion] = useState(false);

  useEffect(() => {
    console.log(Cookies.get('jwt'))
    setConSesion(Cookies.get('jwt') ? true : false); //ignoren esto, luego lo cambio
}, [])

const handleDialogOpenInfo = () => {
  setOpen({infoOpen: true});
}

const handleDialogCloseInfo = () => {
  setOpen({infoOpen: false});
}

  const handleDialogOpenAccept = () => {
    setOpen({acceptOpen: true});
  }

 const handleDialogCloseAccept = () => {
    setOpen({acceptOpen: false});
  }
  const handleDialogOpenReject = () => {
    setOpen({rejectOpen: true});
  }

 const handleDialogCloseReject = () => {
    setOpen({rejectOpen: false});
  }
  const handleDialogOpenTerminate = () => {
    setOpen({terminateOpen: true});
  }

 const handleDialogCloseTerminate = () => {
    setOpen({terminateOpen: false});
  }

  const AceptarOferta = () => {
    json.estado = "aceptada"
    console.log(json.idOferta);

    axios.put('http://localhost:8000/api/ofertas/' + json.idOferta, json, {headers: {"Accept": "application/json", "Authorization": "Bearer "+ Cookies.get('jwt')}})
          .then(res => {
            console.log(res);
            window.location.reload();
          })
          .catch(err => {
            console.log(err);
            window.location.reload();
          });
    setOpen({acceptOpen: false});
  }

  const RechazarOferta = () => {
    json.estado = "rechazada"
    console.log(json.idOferta);

    axios.put('http://localhost:8000/api/ofertas/' + json.idOferta, json, {headers: {"Accept": "application/json", "Authorization": "Bearer "+ Cookies.get('jwt')}})
          .then(res => {
            console.log(res);
            window.location.reload();
          })
          .catch(err => {
            console.log(err);
            window.location.reload();
          });
    setOpen({rejectOpen: false});

  }

  const TerminarOferta = () => {
    json.estado = "terminada"
    console.log(json.idOferta);

    axios.put('http://localhost:8000/api/ofertas/' + json.idOferta, json, {headers: {"Accept": "application/json", "Authorization": "Bearer "+ Cookies.get('jwt')}})
          .then(res => {
            console.log(res);
            window.location.reload();
          })
          .catch(err => {
            console.log(err);
            window.location.reload();
          });

    setOpen({terminateOpen: false});

   
  }

  if(props.estadoOferta === 'pendiente'){
    return(
      <div>
        <CardActions>
                  <Button  onClick={handleDialogOpenAccept} color="primary" variant="outlined" size="small">Aceptar Oferta</Button>
                  <Button onClick={handleDialogOpenReject} color="secondary" variant="outlined" size="small">Rechazar Oferta</Button>
        </CardActions>

        <Dialog
        open={open.acceptOpen}
        keepMounted
        onClose={handleDialogCloseAccept}
        >
        <DialogTitle>¿Seguro que quieres aceptar la oferta?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Despues de aceptar la oferta deberás ponerte en contacto con el dueño del juego a intercambiar
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogCloseAccept}  color="primary">
            No
          </Button>
          <Button onClick={AceptarOferta} color="primary">
            Si
          </Button>
        </DialogActions>
        </Dialog>

        <Dialog
        open={open.rejectOpen}
        keepMounted
        onClose={handleDialogCloseReject}
        >
        <DialogTitle>¿Seguro que quieres rechazar la oferta?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Despues de rechazar la oferta no podrás modificar su estado de nuevo
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogCloseReject}  color="primary">
            No
          </Button>
          <Button onClick={RechazarOferta} color="primary">
            Si
          </Button>
        </DialogActions>
        </Dialog>
      </div>
      
    )
  } else if(props.estadoOferta === 'rechazada'){
    return (

      <div>
        <CardActions>
          <Button onClick={handleDialogOpenTerminate} variant="outlined" size="small">Terminar Oferta</Button>
        </CardActions>

          <Dialog
          open={open.terminateOpen}
          keepMounted
          onClose={handleDialogCloseTerminate}
          >
          <DialogTitle>¿Seguro que quieres terminar la oferta?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Despues de terminar la oferta no podrás verla, ni cambiar su estado
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogCloseTerminate}  color="primary">
              No
            </Button>
            <Button onClick={TerminarOferta} color="primary">
              Si
            </Button>
          </DialogActions>
          </Dialog>
      </div>
      
    )
  } else if(props.estadoOferta === 'aceptada') {
      return (
        <div>
          <CardActions>
            <Button color="primary" onClick={handleDialogOpenInfo} variant="outlined" size="small">Info de contacto</Button>
          </CardActions>

            <Dialog
            open={open.infoOpen}
            keepMounted
            onClose={handleDialogCloseInfo}
            >
            <DialogTitle>INFORMACION DE CONTACTO DEL INTERCAMBIO</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <div>
                  Usuario: {props.usuario}
                </div>
                <div>
                  Correo: {props.correo}
                </div>
                <div>
                  Telefono: {props.telefono}
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogCloseInfo}  color="primary">
                Aceptar
              </Button>
            </DialogActions>
            </Dialog>
        </div>
      )
  } else {
    return (  
    <CardActions>
      <Button variant="outlined" size="small">OFERTA TERMINADA</Button>
    </CardActions>)
  }
}

export default function OfertasRecibidasConsultar(props) {

    const[values, setValues] = useState([]);


    useEffect ( () => {

        axios.get('http://127.0.0.1:8000/api/ofertas/' + props.idJuego)
        .then(res => { setValues (res.data)
    })
        .catch((e) => {
            console.log(e)
        })
   }, []);


   console.log(values)



    return (
        <div>
          <Grid container spacing="3">
          {values.map( (oferta) => (
              <Grid item xs="4">
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
              <Botones estadoOferta={oferta.estado} idOferta={oferta.idOferta} usuario={oferta.usuario} telefono={oferta.telefonoCuenta} correo={oferta.correoCuenta}/>
            </Card>
            </Grid>
            ))}
          </Grid>
           
        </div>
    )
}
