/*

    const valuesOferta = {
        idCuentaEnviar: '',
        idCuentaRecibir: '',
        idJuegoPorEnviar: '',
        idJuegoPorRecibir: '',
    }
    
    const [oferta, setOferta] = useState(valuesOferta);
    const[misJuegos, setMisJuegos] = useState([]);
    const [open, setOpen] = React.useState(false);

  const handleInputChange= e => {
        const {name , value} = e.target
        setValues({
            ...values,
            [name]:value 
        })
    }


    axios.get('http://localhost:8000/api/misJuegos/' + Cookies.get('idCuenta'))
                    .then(res => {
                         setMisJuegos(res.data);
                         console.log(res.data)
            })

    console.log(misJuegos)
    const handleClickOpen = () => {
        setOpen(true);                 
      }
    
      const handleClose = () => {
        setOpen(false);
      }
       

    const EnviarOferta = (props) => {

           
    }

 axios.get('http://localhost:8000/api/getIdCuenta/' + props.idJuego)
             .then( result => {
                 console.log(result.data[0].idCuenta)
                 let idCuentaRecibir = result.data[0].idCuenta
            })

                        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Intercambio de Juego</DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            Seleccion el juego que quieras cambiar por este
                        </DialogContentText>
                        <SelectJuego
                            name="idJuego"
                            label="Juego a intercambiar"
                            value={valuesOferta.idJuegoPorEnviar}
                            onChange={handleInputChange}
                            options={misJuegos}
                         />                        
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Aceptar
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Cancelar
                        </Button>
                        </DialogActions>
                    </Dialog>
*/