import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function OfertasRecibidasConsultar(props) {

    const[values, setValues] = useState([]);



    useEffect ( () => {

        axios.get('http://127.0.0.1:8000/api/ofertas/' + props.idJuego)
        .then(res => { setValues (res.data)
    })
        .catch((e) => {
            console.log(e)
        })
   }, []);


   console.log(values)



    return (
        <div>
            {values.map( (oferta) => (
              <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                    {oferta.nombreTitulo}
                </Typography>
                <Typography variant="body2">
                 Propietario: {oferta.usuario}
                </Typography>
                <Typography variant="body2">
                  Consola: {oferta.nombreConsola}
                </Typography>
                <Typography variant="body2">
                  Genero: {oferta.nombreGenero}
                </Typography>
                <Typography variant="body2">
                  Desarrollador: {oferta.nombreDesarrollador}
                </Typography>
                <Typography variant="body2">
                  Publisher: {oferta.nombrePublisher}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            ))}
        </div>
    )
}
