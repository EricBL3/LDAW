import Navbar from "../../components/Navbar";
import { Input, Grid, Button, Box, TextField, Paper, makeStyles, Container, Typography } from '@material-ui/core'
import { FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'

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
        height: 900,
        backgroundColor: '#B0C0C1'
    },
    inputs: {
        width: "50%",
        padding: 15,
    }
}));
const valoresIniciales = {
    titulo: '',
    consola: '',
    condiciones: '',
    idTituloRecibir1: '',
    idTituloRecibir2: '',
    idTituloRecibir3: '',
}
const initialValues = {
    archivo: null,
    archivoNombre: "",
    archivoURL: ""
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

export const RegistrarJuego = (props) => {

    const [archivo, setArchivo] = useState(initialValues);
    const [values, setValues] = useState(valoresIniciales);
    const [consola, setConsola] = useState([]);
    const [titulo, setTitulo] = useState([]);
    const classes = useStyle();
    const baseURL = "http://localhost:8000/api/";
    const [errors, setErrors] = useState({});

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('titulo' in fieldValues)
            temp.titulo = fieldValues.titulo ? "" : "Este campo es obligatorio."
        if ('consola' in fieldValues)
            temp.consola = fieldValues.consola ? "" : "Este campo es obligatorio."
        if ('condiciones' in fieldValues)
            temp.condiciones = fieldValues.condiciones ? "" : "Este campo es obligatorio."
        if ('idTituloRecibir1' in fieldValues)
            temp.idTituloRecibir1 = fieldValues.idTituloRecibir1 ? "" : "Este campo es obligatorio."
        if ('idTituloRecibir2' in fieldValues)
            temp.idTituloRecibir2 = fieldValues.idTituloRecibir2 ? "" : "Este campo es obligatorio."
        if ('idTituloRecibir3' in fieldValues)
            temp.idTituloRecibir3 = fieldValues.idTituloRecibir3 ? "" : "Este campo es obligatorio."
        setErrors({
            ...temp
        })
        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    const peticionGetConsola = async () => {
        await axios.get(baseURL + 'consola/getConsola')
            .then(response => {
                setConsola(response.data);
            })
    }
    const peticionGetTitulo = async () => {
        await axios.get(baseURL + 'titulo/getTitulos')
            .then(response => {
                setTitulo(response.data);
            })
    }
    const fileSelectHandler = (e) => {
        setArchivo({
            archivo: e.target.files[0],
            archivoNombre: e.target.files[0].name
        })
    }
    const onSubmit = e => {
        if (validate()) {
            e.preventDefault();
            const fd = new FormData();
            fd.append('file', archivo.archivo, archivo.archivoNombre);
            axios.post(baseURL + 'archivos/upload', fd, {
                onUploadProgress: progressEvent => {
                    console.log('Upload progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%');
                }
            }).then(res => {
                let url=res.data.result;
                axios.post(baseURL + 'juego/registrarJuego/' + Cookies.get('idCuenta'), {
                    "idTitulo": values.titulo,
                    "condiciones": values.condiciones,
                    "pathImagen": url,
                    "tituloRecibir1": values.idTituloRecibir1,
                    "tituloRecibir2": values.idTituloRecibir2,
                    "tituloRecibir3": values.idTituloRecibir3,
                }, { headers: { "Accept": "application/json" } }
                ).then(res => {
                })
                    .catch(err => {
                        console.log(err);
                    });
            })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    useEffect(() => {
        peticionGetConsola();
        peticionGetTitulo();
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
                            value={values.consola}
                            onChange={handleInputChange}>
                            <MenuItem value=''>Ninguno</MenuItem>
                            {consola.map((consola) => (
                                <MenuItem key={consola.idConsola} value={consola.idConsola}>{consola.nombreConsola}</MenuItem>
                            ))}
                        </MuiSelect>
                        {errors && <FormHelperText>{errors.consola}</FormHelperText>}
                    </FormControl>
                </Box>
                <Box align="center">
                    <FormControl variant="outlined" className={classes.inputs}>
                        <InputLabel>Titulo</InputLabel>
                        <MuiSelect
                            MenuProps={MenuProps}
                            variant="filled"
                            name="titulo"
                            value={values.titulo}
                            onChange={handleInputChange}>
                            <MenuItem value=''>Ninguno</MenuItem>
                            {titulo.map((titulo) => (
                                <MenuItem key={titulo.idTitulo} value={titulo.idTitulo}>{titulo.nombreTitulo}</MenuItem>
                            ))}
                        </MuiSelect>
                        {errors && <FormHelperText>{errors.titulo}</FormHelperText>}
                    </FormControl>
                </Box>
                <Box align="center">
                    <TextField
                        variant="outlined"
                        name="condiciones"
                        label="Condiciones"
                        onChange={handleInputChange}
                        value={values.condiciones}
                        className={classes.inputs}
                        variant="outlined"
                        error={errors.condiciones}
                        helperText={errors.condiciones}
                        multiline
                        inputProps={{
                            style: {
                                height: 100,
                                padding: '0 14px',
                                background: '#5A9199'
                            },
                        }}
                    >
                    </TextField>
                </Box>
                <Box ml={41}>
                    <Container>
                        <Typography>Titulos dispuestos a intercambiar:</Typography>
                    </Container>
                </Box>
                <Box align="center">
                    <FormControl variant="outlined" className={classes.inputs}>
                        <InputLabel>Primer opcion intercambio</InputLabel>
                        <MuiSelect
                            MenuProps={MenuProps}
                            variant="filled"
                            name="idTituloRecibir1"
                            value={values.idTituloRecibir1}
                            onChange={handleInputChange}>
                            <MenuItem value=''>Ninguno</MenuItem>
                            {titulo.map((titulo) => (
                                <MenuItem key={titulo.idTitulo} value={titulo.nombreTitulo}>{titulo.nombreTitulo}</MenuItem>
                            ))}
                        </MuiSelect>
                        {errors && <FormHelperText>{errors.idTituloRecibir1}</FormHelperText>}
                    </FormControl>
                    <FormControl variant="outlined" className={classes.inputs}>
                        <InputLabel>Segunda opcion intercambio</InputLabel>
                        <MuiSelect
                            MenuProps={MenuProps}
                            variant="filled"
                            name="idTituloRecibir2"
                            value={values.idTituloRecibir2}
                            onChange={handleInputChange}>
                            <MenuItem value=''>Ninguno</MenuItem>
                            {titulo.map((titulo) => (
                                <MenuItem key={titulo.idTitulo} value={titulo.nombreTitulo}>{titulo.nombreTitulo}</MenuItem>
                            ))}
                        </MuiSelect>
                        {errors && <FormHelperText>{errors.idTituloRecibir2}</FormHelperText>}
                    </FormControl>
                    <FormControl variant="outlined" className={classes.inputs}>
                        <InputLabel>Tercer opcion intercambio</InputLabel>
                        <MuiSelect
                            MenuProps={MenuProps}
                            variant="filled"
                            name="idTituloRecibir3"
                            value={values.idTituloRecibir3}
                            onChange={handleInputChange}>
                            <MenuItem value=''>Ninguno</MenuItem>
                            {titulo.map((titulo) => (
                                <MenuItem key={titulo.idTitulo} value={titulo.nombreTitulo}>{titulo.nombreTitulo}</MenuItem>
                            ))}
                        </MuiSelect>
                        {errors && <FormHelperText>{errors.idTituloRecibir3}</FormHelperText>}
                    </FormControl>
                </Box>
                <Box ml={41}>
                    <Container>
                        <Typography>Imagen del juego:</Typography>
                    </Container>
                </Box>
                <Box align="center">
                    <Input
                        className={classes.inputs}
                        variant="outlined"
                        type="file"
                        onChange={fileSelectHandler}
                    />
                </Box>
                <Box align="center" mt={5}>
                    <Button variant="contained" onClick={onSubmit}>
                        Registrar juego
                    </Button>
                </Box>
            </Paper>
        </div>
    )
}
