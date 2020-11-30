import Navbar from "../../components/Navbar";
import { Input, Grid, Button, Box, TextField, Paper, makeStyles, Container, Typography } from '@material-ui/core'
import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useStyle = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
    container: {
        display: "flex",
        marginTop: "40px"
    },
    title: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
        height: 540,
        backgroundColor: '#B0C0C1'
    },
    inputs: {
        width: "50%",
        padding: 15,
    }
}));
const initialBusqueda = {
    busqueda: '',
    genero: '',
    publisher: '',
    desarrollador: '',
    consola: '',
}
const initialValues={
    archivo:null,
    archivoNombre:"",
    archivoURL:""
}

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export const RegistrarJuego = () => {

    const [archivo, setArchivo]=useState(initialValues);
    const [busqueda, setBusqueda] = useState(initialBusqueda);
    const [consola, setConsola] = useState([]);
    const [titulo, setTitulo] = useState([]);
    const classes = useStyle();
    const baseURL = "http://localhost:8000/api/";

    const handleInputChange = e => {
        const { name, value } = e.target;
        setBusqueda({
            ...busqueda,
            [name]: value
        });
    }

    const peticionGetConsola = async () => {
        await axios.get(baseURL + 'consola/getConsola')
            .then(response => {
                setConsola(response.data);
            })
    }
    const peticionPrueba = async () => {
        await axios.get('https://api.thedogapi.com/v1/images/search?limit=5')
            .then(response => {
                console.log(response.data);
            })
    }
    const peticionGetTitulo = async () => {
        await axios.get(baseURL + 'titulo/getTitulos')
            .then(response => {
                setTitulo(response.data);
            })
    }
    const fileSelectHandler = (e)=>{
        setArchivo({
            archivo: e.target.files[0],
            archivoNombre: e.target.files[0].name
        })
    }
    const onSubmit= e =>{
        e.preventDefault();
        const fd= new FormData();
        fd.append('file', archivo.archivo, archivo.archivoNombre);
        axios.post(baseURL+'archivos/upload', fd,{
            onUploadProgress: progressEvent =>{
                console.log('Upload progress: '+ Math.round(progressEvent.loaded /progressEvent.total * 100)+ '%');
            }
        })
    }

    useEffect(() => {
        peticionGetConsola();
        peticionGetTitulo();
        peticionPrueba();
    }, [])
    return (
        <div>
            <Navbar titulo="Detalle Titulo" />
            <Paper className={classes.title}>
                <Box align="center">
                    <FormControl variant="outlined" className={classes.inputs}>
                        <InputLabel>Consola</InputLabel>
                        <MuiSelect
                            MenuProps={MenuProps}
                            variant="filled"
                            name="consola"
                            value={busqueda.consola}
                            onChange={handleInputChange}>
                            <MenuItem value=''>Ninguno</MenuItem>
                            {consola.map((consola) => (
                                <MenuItem key={consola.idConsola} value={consola.nombreConsola}>{consola.nombreConsola}</MenuItem>
                            ))}
                        </MuiSelect>
                    </FormControl>
                </Box>
                <Box align="center">
                    <FormControl variant="outlined" className={classes.inputs}>
                        <InputLabel>Titulo</InputLabel>
                        <MuiSelect
                            MenuProps={MenuProps}
                            variant="filled"
                            name="consola"
                            value={busqueda.consola}
                            onChange={handleInputChange}>
                            <MenuItem value=''>Ninguno</MenuItem>
                            {titulo.map((titulo) => (
                                <MenuItem key={titulo.idTitulo} value={titulo.nombreTitulo}>{titulo.nombreTitulo}</MenuItem>
                            ))}
                        </MuiSelect>
                    </FormControl>
                </Box>
                <Box align="center">
                    <TextField
                        variant="outlined"
                        name="condiciones"
                        label="Condiciones"
                        className={classes.inputs}
                        variant="outlined"
                        inputProps={{
                            style: {
                                height: 250,
                                padding: '0 14px',
                                background: '#5A9199'
                            },
                        }}
                    >

                    </TextField>
                </Box>
                <Box align="center">
                    <Input
                        className={classes.inputs}
                        variant="outlined"
                        type="file"
                        onChange={fileSelectHandler}
                    />
                </Box>
                <Box>
                    <Button variant="contained" onClick={onSubmit}>
                        Registrar juego
                    </Button>
                </Box>
            </Paper>
        </div>
    )
}
