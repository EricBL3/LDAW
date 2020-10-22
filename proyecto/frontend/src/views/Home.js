import React from 'react'
import Navbar from '../components/Navbar'


const Home = (props) => {
    
    return(
        <div >
        <Navbar titulo="Home" history={props.history}/>
        </div>
    );
}


export default  Home;