import React from "react"
import {Link} from 'react-router-dom'
import "../Navbar/navbar.css"




//<img className="Logo" src="https://toppng.com/uploads/preview/camera-logo-png-hd-11563110785oo04j22ddv.png"></img>

class Navbar extends React.Component{


    render(){
        return<nav className="navIni"> 

            <Link  to={"/"} >Home</Link>
            <Link  to={"/About"} >About</Link>
            <Link  to={"/Suport"} >Suport</Link>
            
            <img className="Logo" src="https://github.com/RotomFormProgramador/ProyectoGaleryImages/blob/19489fa4526f2c289b0de73c6d9afd479a0f7d60/frontend/public/Logo.png" />
        </nav>
    }
}



export default Navbar;
