import { Grid, Typography, Card, CardContent, CardMedia, Button, Container, Box, makeStyles, TextField } from '@material-ui/core'
import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


let s;

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
const initialBusqueda = {
    busqueda: '',
    genero: '',
    publisher: '',
    desarrollador: '',
    consola: '',
}

export const Buscartitulo = () => {
    const classes = styles()



    const [busqueda, setBusqueda] = useState(initialBusqueda);
    const [data, setData] = useState([]);
    const [genero, setGenero] = useState([]);
    const [publisher, setPublisher] = useState([]);
    const [consola, setConsola] = useState([]);
    const [desarrollador, setDesarrollador] = useState([]);
    const [errors, setErrors] = useState({});

    const validate = (fieldValues = busqueda) => {
        let temp = { ...errors }
        if ('busqueda' in fieldValues)
            temp.busqueda = (/^[0-9a-zA-Z]*$/).test(fieldValues.busqueda) ? "" : "Cuenta de correo invalida"
        setErrors({
            ...temp
        })
        if (fieldValues == busqueda)
            return Object.values(temp).every(x => x == "")
    }

    const handleInputChange = e => {
        const { name, value } = e.target;
        setBusqueda({
            ...busqueda,
            [name]: value
        });
    }
   
    const baseURL = "http://localhost:8000/api/";
    const peticionGet = async () => {
        await axios.get(baseURL + 'titulo/getTitulo/' + busqueda.busqueda + '-' + busqueda.genero + '-' + busqueda.consola + '-' + busqueda.publisher + '-' + busqueda.desarrollador)
            .then(response => {
                setData(response.data);
                return response.data
            })
    }
    const peticionGetGenero = async () => {
        await axios.get(baseURL + 'genero/getGenero')
            .then(response => {
                setGenero(response.data);
            })
    }
    const peticionGetConsola = async () => {
        await axios.get(baseURL + 'consola/getConsola')
            .then(response => {
                setConsola(response.data);
            })
    }
    const peticionGetPublisher = async () => {
        await axios.get(baseURL + 'publisher/getPublisher')
            .then(response => {
                setPublisher(response.data);
            })
    }
    const peticionGetDesarrollador = async () => {
        await axios.get(baseURL + 'desarrollador/getDesarrollador')
            .then(response => {
                setDesarrollador(response.data);
            })
    }
    const mostrarDetalles = (idTituloMostrar) =>{
        window.location.href = "http://localhost:3000/detalleTitulo/"+idTituloMostrar;
    }

    useEffect(() => {
        axios.get(baseURL + 'titulo/getTitulo/' + busqueda.busqueda + '-' + busqueda.genero + '-' + busqueda.consola + '-' + busqueda.publisher + '-' + busqueda.desarrollador)
            .then(response => {
                setData(response.data);
            })
        peticionGetConsola();
        peticionGetDesarrollador();
        peticionGetPublisher();
        peticionGetGenero();
    }, [])

    useEffect(() => {
        if (validate()){
        peticionGet();
        }
    }, [busqueda])
    var loginButton;
    if (Object.keys(data).length === 0) {
        loginButton = <Grid container spacing="3">
            <Container>
                <Box align="center" mt={20}>
                    <Typography variant="h5">No hay juegos con las caracteristicas actuales</Typography>
                </Box>
            </Container>
        </Grid>
    } else {
        loginButton = <Grid container spacing="3">
            {data.map((titulo) => (
                <Grid item sm={6}>
                    <Card className={classes.Card} style={{ backgroundColor: '#78C1CC' }}>
                        <Box align="center" color="white" mb={1} style={{ backgroundColor: '#2D484D' }}>
                            <Typography gutterBottom variant="h5" component="h2">{titulo.nombreTitulo}</Typography>
                        </Box>
                        <CardContent >
                            <CardMedia
                                className={classes.media}
                                image={titulo.urlImagen}
                                title="Contemplative Reptile"
                            />
                        </CardContent>
                        <Box align="right">
                            <Button onClick={()=>mostrarDetalles(titulo.idTitulo)} variant="contained">Detalles</Button>
                        </Box>
                    </Card>
                </Grid>
            ))}
        </Grid>
    }

    return (
        <div>
            <Container>
                <Box align="center" mt={5}>
                    <Grid container spacing="3">
                        <Grid item xs={12} sm={3}>
                            <FormControl variant="outlined" className={classes.selects}>
                                <InputLabel>Genero</InputLabel>
                                <MuiSelect
                                    name="genero"
                                    value={busqueda.genero}
                                    onChange={handleInputChange}>
                                    <MenuItem value=''>Ninguno</MenuItem>
                                    {genero.map((genero) => (
                                        <MenuItem key={genero.idGenero} value={genero.nombreGenero}>{genero.nombreGenero}</MenuItem>
                                    ))}
                                </MuiSelect>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <FormControl variant="outlined" className={classes.selects}>
                                <InputLabel>Consola</InputLabel>
                                <MuiSelect
                                    name="consola"
                                    value={busqueda.consola}
                                    onChange={handleInputChange}>
                                    <MenuItem value=''>Ninguno</MenuItem>
                                    {consola.map((consola) => (
                                        <MenuItem key={consola.idConsola} value={consola.nombreConsola}>{consola.nombreConsola}</MenuItem>
                                    ))}
                                </MuiSelect>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <FormControl variant="outlined" className={classes.selects}>
                                <InputLabel>Publisher</InputLabel>
                                <MuiSelect
                                    name="publisher"
                                    value={busqueda.publisher}
                                    onChange={handleInputChange}>
                                    <MenuItem value=''>Ninguno</MenuItem>
                                    {publisher.map((publisher) => (
                                        <MenuItem key={publisher.idPublisher} value={publisher.nombrePublisher}>{publisher.nombrePublisher}</MenuItem>
                                    ))}
                                </MuiSelect>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <FormControl variant="outlined" className={classes.selects}>
                                <InputLabel>Desarrollador</InputLabel>
                                <MuiSelect
                                    name="desarrollador"
                                    value={busqueda.desarrollador}
                                    onChange={handleInputChange}>
                                    <MenuItem value=''>Ninguno</MenuItem>
                                    {desarrollador.map((desarrollador) => (
                                        <MenuItem key={desarrollador.idDesarrollador} value={desarrollador.nombreDesarrollador}>{desarrollador.nombreDesarrollador}</MenuItem>
                                    ))}
                                </MuiSelect>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>
                <Box align="center" mt={4}>
                    <TextField
                        className={classes.cajaBusqueda}
                        variant="outlined"
                        label="Buscar"
                        value={busqueda.busqueda}
                        name="busqueda"
                        onChange={handleInputChange}
                        error={errors.busqueda}
                        helperText={errors.busqueda ? "Solo se aceptan caracteres alphanumericos" : ""}                     
                    />
                </Box>
                <Box mt={5}>
                    {loginButton}
                </Box>
            </Container>
        </div >
    )
}

export default Buscartitulo;