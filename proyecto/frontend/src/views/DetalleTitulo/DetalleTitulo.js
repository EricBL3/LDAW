import { Grid, Typography, Card, CardContent, CardMedia, Button, Container, Box, makeStyles, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Navbar from "../../components/Navbar";
import axios from 'axios';
import Cookies from 'js-cookie'
import Image from 'material-ui-image'
import SelectJuego from '../../components/SelectJuego'

const styles = makeStyles(theme => ({
    Card: {
        height: 300,
        width: 300,
        padding: 10,
        marginLeft: 50,
        marginRight: 50,
        marginRight: 100,
    },
    media: {
        height: "150px",
    },
    cajaBusqueda: {
        width: "90%"
    },
    selects: {
        width: "60%"
    }
}))
export const DetalleTitulo = (props) => {
    const classes = styles()
    const { match } = props;
    const initialValues = {
        nombreTitulo: '',
        edicion: '',
        version: '',
        urlImagen: '',
    }
    const valuesOferta = {
        idCuentaEnviar: '',
        idCuentaRecibir: '',
        idJuegoPorEnviar: '',
        idJuegoPorRecibir: '',
        estado: 'pendiente'
    }


    const [values, setValues] = useState(initialValues);
    const [data, setData] = useState([]);
    const [oferta, setOferta] = useState(valuesOferta);
    const[misJuegos, setMisJuegos] = useState([]);
    const [open, setOpen] = React.useState(false);

    

    const handleInputChange= e => {
        const {name , value} = e.target
        setOferta({
            ...oferta,
            [name]:value 
        })
    }

    const handleClickOpen = (idJuegoPorRecibir, idCuentaRecibir) => {
        setOpen(true);  
        axios.get('http://localhost:8000/api/misJuegos/' + Cookies.get('idCuenta'))
        .then(res => {
             setMisJuegos(res.data);
        }) 
        .catch( e => {
            console.log(e);
        })
        oferta.idCuentaEnviar = Cookies.get('idCuenta');
        oferta.idCuentaRecibir = idCuentaRecibir;
        oferta.idJuegoPorRecibir =  idJuegoPorRecibir;
        console.log(oferta)            
      }
    
      const handleClose = () => {
        setOpen(false);
      }

   const handleHacerOferta = () => {
        axios.post('http://localhost:8000/api/ofertas', oferta)
        .then( res => {
        })
        .catch (e => {
            console.log(e);
        })
        //window.location.replace("/misOfertas/" + Cookies.get('idCuenta'))

   }

    const peticionGet = async () => {
        axios.get('http://localhost:8000/api/titulo/mostrarTitulo/' + match.params.tituloId, { headers: { "Authorization": "Bearer " + Cookies.get('jwt') } })
            .then(res => {
                initialValues.urlImagen = res.data.urlImagen;
                initialValues.nombreTitulo = res.data.nombreTitulo;
                initialValues.edicion = res.data.edicion;
                initialValues.version = res.data.version;
                setValues(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
    const peticionGetJuegos = async () => {
        axios.get('http://localhost:8000/api/juego/listarJuegos/' + match.params.tituloId, { headers: { "Authorization": "Bearer " + Cookies.get('jwt') } })
            .then(res => {
                setData(res.data);
                console.log(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        peticionGet();
        peticionGetJuegos();
        setValues(initialValues);
        setData(data);
        console.log(oferta)
    }, []);


    var result;
    if (Object.keys(data).length === 0) {
        result = <Grid container spacing="3">
            <Container>
                <Box align="center" mt={20}>
                    <Typography variant="h5">No hay juegos disponibles actualmente en este titulo</Typography>
                </Box>
            </Container>
        </Grid>
    } else {
        result = <Grid container spacing="3">
            {data.map((juego) => (
                <Grid item xs={4}>
                    <Card className={classes.Card} style={{ backgroundColor: '#78C1CC' }}>
                        <Box align="center" color="white" mb={1} style={{ backgroundColor: '#2D484D' }}>
                            <Typography gutterBottom variant="h5" component="h2">{values.nombreTitulo}</Typography>
                        </Box>
                        <CardContent >
                            <CardMedia
                                className={classes.media}
                                image={juego.urlImagen}
                                title="Contemplative Reptile"
                            />
                        </CardContent>
                        <Box align="center">
                        <Button variant="contained" onClick={() => handleClickOpen(juego.idJuego, juego.idCuenta)}>Enviar Oferta</Button>
                        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"  PaperProps={{style: {overflowY: 'visible'}}}>
                            <DialogTitle id="form-dialog-title">Intercambio de Juego</DialogTitle>
                            <DialogContent style={{ overflowY: 'visible' }}>
                            <DialogContentText>
                                Seleccion el juego que quieras cambiar por este
                            </DialogContentText>
                            <SelectJuego
                                name="idJuegoPorEnviar"
                                label="Juego a intercambiar"
                                value={oferta.idJuegoPorEnviar}
                                onChange={handleInputChange}
                                options={misJuegos}
                                />  
                                {console.log(oferta)}                   
                            </DialogContent>
                            <br/>
                            <DialogActions>
                            <Button onClick={handleHacerOferta} color="primary">
                                Aceptar
                            </Button>
                            <Button onClick={handleClose} color="primary">
                                Cancelar
                            </Button>
                            </DialogActions>
                        </Dialog>
                        </Box>
                    </Card>
                </Grid>
            ))}
        </Grid>
    }
    return (
        <div>
            <Navbar titulo="Detalle Titulo" />
            <Grid container>
                <Grid item xs={4} sm={6}>
                    <Box ml={3} mt={10}>
                        <Typography variant="h4">Título:{values.nombreTitulo}</Typography>
                    </Box>
                    <Box ml={3} mt={4}>
                        <Typography variant="h4">Edicion:{values.edicion}</Typography>
                    </Box>
                    <Box ml={3} mt={4}>
                        <Typography variant="h4">Versión:{values.version}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={6}>
                    <Box align="center" mt={9}>
                        <img src={values.urlImagen} alt="imagenTitulo" height="250px" />
                    </Box>
                </Grid>
            </Grid>
            <Box mt={10}>
                {result}
            </Box>
        </div>
    )
}
