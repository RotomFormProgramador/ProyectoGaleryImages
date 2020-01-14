import React from "react"
import { Link } from 'react-router-dom'
import "../Navbar/navbar.css"




//<img className="Logo" src="https://toppng.com/uploads/preview/camera-logo-png-hd-11563110785oo04j22ddv.png"></img>

class Navbar extends React.Component {


    render() {
        return <nav className="navInit">

            <Link to={"/"} >Home</Link>
            <Link to={"/About"} >About</Link>
            <Link to={"/Suport"} >Suport</Link>

            <img className="Logo" src="https://images.vexels.com/media/users/3/142734/isolated/preview/5fd7e99a39203ca549c70693725fb1c5-logotipo-de-marketing-de-lentes-de-c--mara-by-vexels.png"/>
        </nav>
    }
}



export default Navbar;
