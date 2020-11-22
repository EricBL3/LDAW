import React from 'react'
import Navbar from '../components/Navbar'
import Mensaje from '../components/Mensaje'
import Buscartitulo from './BuscarTitulo/Buscartitulo';
const Home = (props) => {
    const args = props.location.search;
    
    return(
        <div >
        <Navbar titulo="Home" history={props.history}/>
        <Buscartitulo/>
        <Mensaje
            success={args.includes("registrarse") ? args.slice(-1) : -1} 
            mensajeExito={"Te has registrado en el sistema. Por favor inicia sesión."}
            mensajeError={"Hubo un error al registrate en el sistema"}
        />
        </div>
    );
}


export default  Home;