import { Grid, Typography, Card, CardContent, CardMedia, Button, Container, Box, makeStyles, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Navbar from "../../components/Navbar";
import axios from 'axios';
import Cookies from 'js-cookie'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Link } from 'react-router-dom';
import { typography } from '@material-ui/system';
const id = "1";
const styles = makeStyles(theme => ({
    Card: {
        height: 400,
        width: 340,
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
    },
    button:{
        textTransform:'none'
    },
    tittle: {
        padding: theme.spacing(0.5),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
}))

export const MisJuegos = () => {

    const classes = styles()
    const [data, setData] = useState([]);

    const peticionDeletejuego= async (idJuego) =>{
        axios.delete('http://localhost:8000/api/juego/borrarJuego/'+ idJuego, { headers: { "Authorization": "Bearer " + Cookies.get('jwt') } })
        .then(res => {
            console.log(res.data);
            window.location.reload();
        })
        .catch(err => {
            console.log(err);
        })
    }
    const peticionGetMisJuegos = async () => {
        axios.get('http://localhost:8000/api/juego/misJuegos/' + id, { headers: { "Authorization": "Bearer " + Cookies.get('jwt') } })
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        peticionGetMisJuegos();
        setData(data);
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
                        <Box color="white" mb={1} style={{ backgroundColor: '#2D484D' }} padding={1}>
                            <Grid container>
                                <Grid item xs={6} sm={9}>
                                    <Box align="left">
                                        <Typography gutterBottom variant="subtitle1">{juego.nombreTitulo}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} sm={2}>
                                    <Box mt={1.5}>
                                        <Button onClick={()=>peticionDeletejuego(juego.idJuego)} className={classes.button} size="small" variant="contained" color="secondary">Eliminar</Button>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} sm={1}>
                                </Grid>
                            </Grid>
                        </Box>
                        <CardContent >
                            <Grid container>
                                <Grid item xs={6} sm={6}>
                                    <CardMedia
                                        className={classes.media}
                                        image={juego.urlImagen}
                                        title="Imagen juego"
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <Box align="left" ml={3}>
                                        <Typography variant="h6">Consola:</Typography>
                                        <Typography variant="subtitle2">{juego.nombreConsola}</Typography>
                                        <Typography variant="h6">Condiciones:</Typography>
                                        <Typography variant="subtitle2">{juego.condiciones}</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box mt={1}>
                                <Typography variant="subtitle1">Titulos que acepto para intercambio:</Typography>
                                <Typography variant="subtitle2">1.- Lorem</Typography>
                                <Typography variant="subtitle2">2.- Lorem</Typography>
                                <Typography variant="subtitle2">3.- Lorem</Typography>
                            </Box>
                        </CardContent>
                        <Box align="center">
                            <Button className={classes.button}  variant="contained">Ver ofertas</Button>
                        </Box>
                    </Card>
                </Grid>
            ))}
        </Grid>
    }
    return (
        <div>
            <Navbar titulo="Detalle Titulo" />
            <Box align="center" mt={4}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} >
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h2" className={classes.tittle}>Registrar juego</Typography>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                        <Box mt={1}>
                            <Link to="/misjuegos/registrarJuego">
                                <AddCircleIcon className={classes.tittle} style={{ fontSize: 60 }} />
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    </Grid>
                </Grid>
            </Box>
            <Box mt={10}>
                {result}
            </Box>
        </div>
    )
}