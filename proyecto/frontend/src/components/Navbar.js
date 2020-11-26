import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Cookies from 'js-cookie'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IniciarSesionForm from './IniciarSesionForm';
import axios from 'axios';
import RegistrarForm from './RegistrarForm';




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            display: "block",
        },
        [theme.breakpoints.up('md')]: {
            display: "none",
        },
    },
    homeButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            display: "none",
        },
        [theme.breakpoints.up('md')]: {
            display: "block",
        },
    },
    flex: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "space-around"
    },
    botonesWeb: {
        flexGrow: 1,
        justifyContent: "space-between",
        [theme.breakpoints.down('sm')]: {
            display: "none",
        },
        [theme.breakpoints.up('md')]: {
            display: "flex",
        },
    },
    botonesMovil: {

    }
}));

export default function Navbar(props) {
    const classes = useStyles();
    const [conSesion, setConSesion] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [iniciarSesionOpen, setIniciarSesionOpen] = React.useState(false);
    const [registrarOpen, setRegistrarOpen] = React.useState(false);

    useEffect(() => {
        console.log(Cookies.get('jwt'))
        setConSesion(Cookies.get('jwt') ? true : false); //ignoren esto, luego lo cambio
    }, [])

    const handleIniciarSesionOpen = () => {
        setIniciarSesionOpen(true);
        setAnchorEl(null);
    }

    const handleIniciarSesionClose = () => {
        setIniciarSesionOpen(false);
    }

    const handleRegistrarOpen = () => {
        setIniciarSesionOpen(false);
        setRegistrarOpen(true);
    }

    const handleRegistrarClose = () => {
        setRegistrarOpen(false);
    }

    const handleCerrarSesion = () => {
        setAnchorEl(null);
        axios.post('http://localhost:8000/api/auth/logout', null, {headers: {"Accept": "application/json", "Authorization": "Bearer "+ Cookies.get('jwt')}})
            .then(res => {
                console.log(res);
                Cookies.remove('jwt');
                Cookies.remove('rol');
                if(props.history.location['pathname'] == "/")
                    window.location.reload();
                else
                    props.history.push("/");
            })
            .catch(err => {
                console.log(err);
                Cookies.remove('jwt');
                Cookies.remove('rol');
                if(props.history.location['pathname'] == "/")
                    window.location.reload();
                else
                    props.history.push("/");
            })
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCuentasClick = (event) => {
        handleClose();
        props.history.push("/cuentas");
    }
    const handleMisofertas = (event) => {
        handleClose();
        props.history.push("/misOfertas/" + Cookies.get('idCuenta'));
    }

    return (
        
        <div className={classes.root}>
        {!conSesion ? 
            <AppBar position="static">
                <Toolbar>
                    {/*BOTONES MÓVIL */}
                    <IconButton edge="start" className={classes.menuButton} onClick={handleClick} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    >
                    <MenuItem onClick={handleIniciarSesionOpen}>Iniciar Sesión</MenuItem>
                    </Menu>

                    {/*BOTONES WEB */}
                    <IconButton edge="start" className={classes.homeButton} color="inherit" aria-label="menu">
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {props.titulo}
                    </Typography>
                    <div className={classes.botonesWeb}>
                        <div></div>
                        <Button onClick={handleIniciarSesionOpen}  variant="contained" color="primary">Iniciar Sesión</Button>
                    </div>
                </Toolbar>
            </AppBar>
            :
            <AppBar position="static">
                <Toolbar>
                    {/*BOTONES MÓVIL */}
                    <IconButton edge="start" className={classes.menuButton} onClick={handleClick} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    >
                    <MenuItem onClick={handleClose}>Mis Juegos</MenuItem>
                    <MenuItem onClick={handleClose}>Mis Ofertas</MenuItem>
                    {Cookies.get('rol') == 'admin' ?
                        <MenuItem onClick={handleCuentasClick}>Cuentas</MenuItem>
                    :
                        <></>
                    }
                    <MenuItem onClick={handleCerrarSesion}>Cerrar Sesión</MenuItem>
                    </Menu>


                    {/*BOTONES WEB */}
                    <IconButton edge="start" className={classes.homeButton} color="inherit" aria-label="menu">
                        <HomeIcon />
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                        {props.titulo}
                    </Typography>
                    <div id="botonesWeb" className={classes.botonesWeb}>
                        <Button style={{marginLeft: "10%"}} variant="contained" color="primary">Mis Juegos</Button>
                        <Button variant="contained" color="primary" onClick={handleMisofertas}>Mis Ofertas</Button>
                        {Cookies.get('rol') == 'admin' ?
                            <Button variant="contained" color="primary" onClick={handleCuentasClick}>Cuentas</Button>
                        :
                            <></>
                        }
                        <Button onClick={handleCerrarSesion}  variant="contained" color="primary">Cerrar Sesión</Button>
                    </div>
                </Toolbar>
            </AppBar>

            
        }
            <IniciarSesionForm 
                open={iniciarSesionOpen} 
                handleOpen={handleIniciarSesionOpen} 
                handleClose={handleIniciarSesionClose}
                registrarOpen={handleRegistrarOpen}
                history={props.history}
            />
            <RegistrarForm
                open={registrarOpen}
                handleOpen={handleRegistrarOpen}
                handleClose={handleRegistrarClose}
                history={props.history}
            />
        </div>
    );
}