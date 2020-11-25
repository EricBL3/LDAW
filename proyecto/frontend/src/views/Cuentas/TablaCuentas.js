import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
    Toolbar,
    Typography,
    Paper,
    IconButton,
    Tooltip,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from 'axios'
import { useEffect } from "react";
import Cookies from 'js-cookie'

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: "usuario",
        numeric: false,
        disablePadding: true,
        label: "Usuario",
    },
    { id: "correo", numeric: false, disablePadding: false, label: "Correo" },
    {
        id: "rol",
        numeric: false,
        disablePadding: false,
        label: "Rol",
    },
    {
        id: "opciones",
        numeric: false,
        disablePadding: false,
        label: "Opciones",
    },
];

function EnhancedTableHead(props) {
    const { classes, order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
        <TableRow>
            {headCells.map((headCell) => (
            <TableCell
                key={headCell.id}
                align="center"
                padding={headCell.disablePadding ? "none" : "default"}
                sortDirection={orderBy === headCell.id ? order : false}
            >
                <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
                >
                {headCell.label}
                {orderBy === headCell.id ? (
                    <span className={classes.visuallyHidden}>
                    {order === "desc" ? "sorted descending" : "sorted ascending"}
                    </span>
                ) : null}
                </TableSortLabel>
            </TableCell>
            ))}
        </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
    };

    const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },

    title: {
        flex: "1 1 100%",
    },
}));

const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();

    return (
        <Toolbar>
        <Typography
            className={classes.title}
            variant="h6"
            id="tableTitle"
            component="div"
        >
            Cuentas
        </Typography>
        </Toolbar>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    paper: {
        width: "100%",
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
    },
    deletewindow: {
        width: "50%",
    },
}));

export default function TablaCuentas(props) {
    const classes = useStyles();
    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("");
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [cuentaEliminar, setCuentaEliminar] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [cuentas, setCuentas] = React.useState([]);
    const [retrieve, setRetrieve] = React.useState([]);
    const [page, setPage] = React.useState(0);

    useEffect( () => {
        axios.get('http://localhost:8000/api/cuentas',  {headers: {"Accept": "application/json", "Authorization": "Bearer "+ Cookies.get('jwt')}})
            .then(res => {
                console.log(res);
                setCuentas(res.data);
                if (res.data.length !== 0) {
                    setRetrieve({ retrieve: 0 });
                } else {
                    setRetrieve({ retrieve: 1 });
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    

    const handleClickOpen = (cuenta) => {
        setCuentaEliminar(cuenta);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const EliminarCuenta = (id) => {
        axios.delete('http://localhost:8000/api/cuentas/'+id,  {headers: {"Accept": "application/json", "Authorization": "Bearer "+ Cookies.get('jwt')}})
            .then(res => {
                props.history.push("/cuentas?eliminar=1");
                window.location.reload();
            })
            .catch(res => {
                props.history.push("/cuentas?eliminar=0");
                window.location.reload();
            })
    };

    return (
        <div className={classes.root}>
        {console.log(cuentas)}
        <Paper className={classes.paper}>
            <EnhancedTableToolbar />
            <TableContainer>
            <Table
                className={classes.table}
                aria-labelledby="tableTitle"
                size="small"
                aria-label="enhanced table"
            >
                <EnhancedTableHead
                classes={classes}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={cuentas.length}
                />
                <TableBody>
                {cuentas.length === 0 && retrieve !== -1 && (
                    <TableCell colSpan={6}>
                    <Alert severity="info">No se encontró ninguna cuenta.</Alert>
                    </TableCell>
                )}
                {stableSort(cuentas, getComparator(order, orderBy))
                    .slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                    )
                    .map((cuenta) => {
                    return (
                        <TableRow hover tabIndex={-1} key={cuenta.id}>
                        <TableCell align="center">{cuenta.usuario}</TableCell>

                        <TableCell align="center">{cuenta.correoCuenta}</TableCell>
                        <TableCell align="center">{cuenta.nombreRol}</TableCell>
                        <TableCell align="center">
                            <Tooltip title="Editar" arrow>
                            <IconButton
                                color="primary"
                                aria-label="edit"
                                onClick={() => {
                                    axios.get('http://localhost:8000/api/cuentas/'+cuenta.id,  {headers: {"Accept": "application/json", "Authorization": "Bearer "+ Cookies.get('jwt')}})
                                    .then(res => {
                                        console.log(res)
                                        props.setCuentaEditar(res.data);
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    })
                                    props.handleEditarOpen();
                                }}
                            >
                                <EditIcon />
                            </IconButton>
                            </Tooltip>
                            <Tooltip title="Eliminar" arrow>
                            <IconButton
                                color="secondary"
                                aria-label="edit"
                                onClick={() => handleClickOpen(cuenta)}
                            >
                                <DeleteIcon />
                            </IconButton>
                            </Tooltip>
                        </TableCell>
                        </TableRow>
                    );
                    })}
                </TableBody>
            </Table>
            </TableContainer>
            <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={cuentas.length}
            rowsPerPage={rowsPerPage}
            page={page}
            labelRowsPerPage="Cuentas por página"
            onChangePage={setPage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
        <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Seguro que desea eliminar esta cuenta?
            </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>Usuario: {cuentaEliminar.usuario}</Typography>
                <Typography gutterBottom>Nombre: {cuentaEliminar.nombre}</Typography>
                <Typography gutterBottom>
                    Correo: {cuentaEliminar.correoCuenta}
                </Typography>
                <Typography gutterBottom>
                    Rol: {cuentaEliminar.nombreRol}
                </Typography>
            </DialogContent>
            <DialogActions>
            <Button
                autoFocus
                onClick={() => EliminarCuenta(cuentaEliminar.id)}
                color="primary"
            >
                Eliminar
            </Button>
            <Button autoFocus onClick={handleClose} color="primary">
                Cancelar
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}
