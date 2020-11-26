import React, { Component, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { Paper, makeStyles, Container, Typography, Button, Icon, Fab, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import TablaCuentas from "./TablaCuentas";
import Mensaje from "../../components/Mensaje";
import RegistrarForm from "../../components/RegistrarForm";
import EditarForm from "./EditarForm";
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
    },
    button: {
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: theme.spacing(5),
    }
}))

const valoresIniciales = {
    'id': 0,
    'idRol': 2,
    'nombre': '',
    'correoCuenta': '',
    'telefonoCuenta': '',
    'usuario': '',
    'password': '',
    'password_confirmation': ''
}


const ConsultarCuentas = (props) => {
    const classes = useStyle();
    const [registrarOpen, setRegistrarOpen] = React.useState(false);
    const [editarOpen, setEditarOpen] = React.useState(false);
    const [valoresEditar, setValoresEditar] = React.useState(valoresIniciales);
    const args = props.location.search;

    useEffect ( () => {
        if(Cookies.get('rol') != 'admin')
        {
            props.history.goBack();
        }

    }, []);

    const handleRegistrarOpen = () => {
        setRegistrarOpen(true);
        console.log(props.history.location)
    }

    const handleRegistrarClose = () => {
        setRegistrarOpen(false);
    }

    const handleEditarOpen = () => {
        setEditarOpen(true);
        console.log(props.history.location)
    }

    const handleEditarClose = () => {
        setEditarOpen(false);
    }

    return (
    <div>
        <Navbar titulo="CUENTAS" history={props.history}/>        
        <Container>
            <Paper className={classes.pageContent}>
                <div className={classes.button}>
                <Tooltip title="Agregar una cuenta">
                    <Fab
                    color="primary"
                    onClick={handleRegistrarOpen}
                    >
                    <AddIcon />
                    </Fab>
                </Tooltip>
                </div>
                <div>
                    <TablaCuentas 
                        history={props.history} setCuentaEditar={setValoresEditar} handleEditarOpen={handleEditarOpen} 
                        handleRegistrarOpen={handleRegistrarOpen}
                    />
                </div>
            </Paper>

            <RegistrarForm
                open={registrarOpen}
                handleOpen={handleRegistrarOpen}
                handleClose={handleRegistrarClose}
                history={props.history}
                admin={true}
            />

            <EditarForm
                open={editarOpen}
                handleOpen={handleEditarOpen}
                handleClose={handleEditarClose}
                history={props.history}
                valores={valoresEditar}
                setValores={setValoresEditar}
                idCuenta={valoresEditar.id}
            />

            <Mensaje
                success={args.includes("registrarse") ? args.slice(-1) : -1} 
                mensajeExito={"La cuenta se registró de manera exitosa."}
                mensajeError={"Hubo un error al registrar la cuenta en el sistema."}
            />

            <Mensaje
                success={args.includes("editar") ? args.slice(-1) : -1} 
                mensajeExito={"La cuenta se editó de manera exitosa."}
                mensajeError={"Hubo un error al editar la cuenta en el sistema."}
            />

            <Mensaje
                success={args.includes("eliminar") ? args.slice(-1) : -1} 
                mensajeExito={"La cuenta se eliminó de manera exitosa."}
                mensajeError={"Hubo un error al eliminar la cuenta en el sistema."}
            />
        </Container>
    </div>
    );

}

export default ConsultarCuentas;