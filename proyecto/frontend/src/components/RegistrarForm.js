import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Modal, IconButton, Button, Tooltip, TextField, Grid, Typography, Link, FormControl, FormHelperText
        , Input, InputLabel} from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import axios from 'axios';
import Cookies from 'js-cookie'


function isEmail(correo)
{
    let ans = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(correo);
    return ans;
}

function isNullOrWhitespace(input)
{
    return !input || !input.trim();
}

function isPhoneNumber(input)
{
    return /^[0-9]{10}$/.test(input);
}

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
    'idRol': 2,
    'nombre': '',
    'correoCuenta': '',
    'telefonoCuenta': '',
    'usuario': '',
    'password': '',
    'password_confirmation': ''
}

const erroresIniciales = {
    'nombre': false,
    'correoCuenta': false,
    'telefonoCuenta': false,
    'usuario': false,
    'password': false,
    'password_confirmation': false
}


export default function RegistrarForm(props) {
    const classes = useStyles();
    const [valores, setValores] = useState(valoresIniciales);
    const [errores, setErrores] = useState(erroresIniciales);

    const validateNombre = (nombre) => {
        if(isNullOrWhitespace(nombre))
        {
            setErrores({
                ...errores,
                'nombre': true
            })
        }
        else
        {
            console.log("no hay error")
            setErrores({
                ...errores,
                'nombre': false
            })
        }
        console.log(errores);
    }

    const validateCorreo = (correoCuenta) => {
        if(isNullOrWhitespace(correoCuenta) | !isEmail(correoCuenta))
        {
            setErrores({
                ...errores,
                'correoCuenta': true
            })
        }
        else
        {
            setErrores({
                ...errores,
                'correoCuenta': false
            })
        }
    }

    const validateTelefono = (telefonoCuenta) => {
        if(telefonoCuenta.length > 0 & (isNullOrWhitespace(telefonoCuenta) | !isPhoneNumber(telefonoCuenta)))
        {
            setErrores({
                ...errores,
                'telefonoCuenta': true
            })
        }
        else
        {
            setErrores({
                ...errores,
                'telefonoCuenta': false
            })
        }
    }

    const validateUsuario = (usuario) => {
        if(isNullOrWhitespace(usuario))
        {
            setErrores({
                ...errores,
                'usuario': true
            })
        }
        else
        {
            setErrores({
                ...errores,
                'usuario': false
            })
        }
    }

    const validateContraseña = (password) => {
        if(password.length < 6 | isNullOrWhitespace(password))
        {
            setErrores({
                ...errores,
                'password': true
            })
        }
        else
        {
            setErrores({
                ...errores,
                'password': false
            })
        }
    }

    const validateConfirmarContraseña = (password_confirmation) => {
        if(password_confirmation.length < 6 | (isNullOrWhitespace(password_confirmation) | password_confirmation != valores['password']))
        {
            setErrores({
                ...errores,
                'password_confirmation': true
            })
        }
        else
        {
            setErrores({
                ...errores,
                'password_confirmation': false
            })
        }
    }

    const validate = (campo, value) => {
        if(campo == "nombre")
        {
            validateNombre(value);
        }
        else if (campo == "correoCuenta")
        {
            validateCorreo(value);
        }
        else if (campo == "telefonoCuenta")
        {
            validateTelefono(value);
        }
        else if (campo == "usuario")
        {
            validateUsuario(value);
        }
        else if (campo == "password")
        {
            validateContraseña(value);
        }
        else if (campo == "password_confirmation")
        {
            validateConfirmarContraseña(value);
        }
    }

    const handleChange = (event) => {
        setValores({
            ...valores,
            [event.target.name]: event.target.value
        });
        validate(event.target.name, event.target.value);
    }

    const registrar = () => {
        let submit = true;
        validate("nombre", valores['nombre']);
        if(!valores.nombre)
            errores.nombre = true;
        validate("correoCuenta", valores['correoCuenta']);
        if(!valores.correoCuenta)
            errores.correoCuenta = true;
        validate("telefonoCuenta", valores['telefonoCuenta']);
        validate("usuario", valores['usuario']);
        if(!valores.usuario)
            errores.usuario = true;
        validate("password", valores['password']);
        if(!valores.password)
            errores.password = true;
        validate("password_confirmation", valores['password_confirmation']);
        if(!valores.password_confirmation)
            errores.password_confirmation = true;
        if(errores.nombre || errores.correoCuenta || errores.telefonoCuenta || errores.usuario || errores.password || errores.password_confirmation)
        {
            submit = false;
        }
        if(submit)
        {
        
            axios.post('http://localhost:8000/api/auth/register', valores, {headers: {"Accept": "application/json"}})
                .then(res => {
                    console.log(res)
                    props.handleClose();
                    if(props.history.location['pathname'] == "/")
                    {
                        props.history.push("/?registrarse=1");
                        window.location.reload();
                    }
                    else
                        props.history.push("/?registrarse=1");
                })
                .catch(err => {
                    console.log(err)
                    if(props.history.location['pathname'] == "/")
                    {
                        props.history.push("/?registrarse=0");
                        window.location.reload();
                    }
                    else
                        props.history.push("/?registrarse=0");
                })
        }
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
                    <h2 id="iniciar-sesion-title">Registrar Nueva Cuenta</h2>
                    <form id="iniciar-sesion-form" >
                        <div>
                            <FormControl error={errores.nombre} className={classes.item} required>
                                <InputLabel htmlFor="nombre">Nombre: </InputLabel>
                                <Input id="nombre" name="nombre" 
                                    onChange={handleChange} 
                                />
                                <FormHelperText style={{display: errores.nombre ? "block" : "none"}} id="component-error-text">
                                    El nombre no es válido.
                                </FormHelperText>
                            </FormControl>
                        </div>

                        <div>
                            <FormControl error={errores.correoCuenta} className={classes.item} required >
                                <InputLabel htmlFor="correoCuenta">Correo: </InputLabel>
                                <Input type="email" id="correoCuenta" name="correoCuenta" 
                                    onChange={handleChange} 
                                />
                                <FormHelperText style={{display: errores.correoCuenta ? "block" : "none"}}  id="component-error-text">
                                    El correo no es válido.
                                </FormHelperText>
                            </FormControl>
                        </div>

                        <div>
                            <FormControl error={errores.telefonoCuenta} className={classes.item} >
                                <InputLabel htmlFor="telefonoCuenta">Teléfono: </InputLabel>
                                <Input id="telefonoCuenta" name="telefonoCuenta" 
                                    onChange={handleChange} 
                                />
                                <FormHelperText style={{display: errores.telefonoCuenta ? "block" : "none"}} id="component-error-text">
                                    El teléfono debe ser de 10 dígitos.
                                </FormHelperText>
                            </FormControl>
                        </div>

                        <div>
                            <FormControl error={errores.usuario} className={classes.item} required>
                                <InputLabel htmlFor="usuario">Usuario: </InputLabel>
                                <Input id="usuario" name="usuario" 
                                    onChange={handleChange}  
                                />
                                <FormHelperText style={{display: errores.usuario ? "block" : "none"}} id="component-error-text">
                                    El usuario no es válido.
                                </FormHelperText>
                            </FormControl>
                        </div>
                        
                        <div>
                            <FormControl error={errores.password} className={classes.item} required>    
                                <InputLabel htmlFor="contraseña">Contraseña: </InputLabel>
                                <Input type="password" id="contraseña" name="password"
                                    onChange={handleChange} 
                                />
                                <FormHelperText style={{display: errores.password ? "block" : "none"}} id="component-error-text">
                                    La contraseña no es válida.
                                </FormHelperText>
                            </FormControl>
                        </div>

                        <div>
                            <FormControl error={errores.password_confirmation} className={classes.item} required>  
                                <InputLabel htmlFor="password_confirmation">Confirmar Contraseña: </InputLabel>
                                <Input type="password" id="password_confirmation" name="password_confirmation" 
                                    onChange={handleChange} 
                                />
                                <FormHelperText style={{display: errores.password_confirmation ? "block" : "none"}} id="component-error-text">
                                    Las contraseñas no son las mismas.
                                </FormHelperText>
                            </FormControl>
                        </div>

                        <Button className={classes.item} variant="contained" onClick={registrar} color="primary">
                            Registrarse
                        </Button>
                    </form>
                </center>
            </Modal>
        </div>
    );
}
