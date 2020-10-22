import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Modal, IconButton, Button, Tooltip, TextField, Grid, Typography, Link, FormControl, FormHelperText} from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import axios from 'axios';
import Cookies from 'js-cookie'

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButton: {
        display: "flex",
    },
    item: {
        margin: theme.spacing(2),
    }
}));

const valoresIniciales = {
    'correoCuenta': '',
    'password': '',
}


export default function IniciarSesionForm(props) {
    const classes = useStyles();
    const [valores, setValores] = useState(valoresIniciales);
    const [error, setError] = useState(false);

    const iniciarSesion = (event) => {
        axios.post('http://localhost:8000/api/auth/login', valores, {headers: {"Accept": "application/json"}})
            .then(res => {
                console.log(res)
                Cookies.set('jwt', res.data['access_token']);

                

                props.handleClose();
                if(props.history.location['pathname'] == "/")
                {
                    props.history.push("/");
                    window.location.reload();
                }
                else
                    props.history.push("/");
            })
            .catch(err => {
                console.log(err)
                setError(true);
            })
    }

    const handleChange = (event) => {
        setValores({
            ...valores,
            [event.target.name]: event.target.value
        })
        setError(false);
    }

    return (
        <div>
            <Modal
                    open={props.open}
                    onClose={props.handleClose}
                    aria-labelledby="iniciar-sesion-title"
                    aria-describedby="iniciar-sesion-form"
                    className={classes.modal}
                >
                <center className={classes.paper}>
                    <div className={classes.closeButton}>
                    <Tooltip  title="Cancelar" arrow>
                    <IconButton  color="secondary" onClick={props.handleClose} aria-label="close">
                        <HighlightOffIcon/>
                    </IconButton>
                    </Tooltip>
                    </div>
                    <h2 id="iniciar-sesion-title">Iniciar Sesión</h2>
                    <form id="iniciar-sesion-form" >
                        <Grid container direction="column">
                            <Grid item>
                                <TextField type="email" autoComplete="off" name="correoCuenta" className={classes.item} 
                                    onChange={handleChange} label="Correo" 
                                />
                            </Grid>
                            <Grid item>
                                <TextField type="password" autoComplete="off" name="password" className={classes.item} 
                                    onChange={handleChange} label="Contraseña" 
                                />
                            </Grid>
                            <Grid item style={{display: error ? "block" : "none"}}>
                                <FormControl error={true}>
                                    <FormHelperText id="component-error-text">
                                        El correo y/o la contraseña no son válidos.
                                    </FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <Button className={classes.item} variant="contained" onClick={iniciarSesion} color="primary">
                                    Iniciar Sesión
                                </Button>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.item} variant="body2">
                                    ¿No tienes una cuenta? 
                                    <Link href="#" onClick={props.registrarOpen}> Regístrate </Link>
                                    con nosotros.
                                </Typography>
                            </Grid>
                        </Grid>
                    </form>
                </center>
            </Modal>
        </div>
    );
}
