import React from "react"
import {Link} from 'react-router-dom'
import "../Navbar/navbar.css"


//<img className="Logo" src="https://toppng.com/uploads/preview/camera-logo-png-hd-11563110785oo04j22ddv.png"></img>

class Navbar extends React.Component{


    render(){
        return <div className="navbar">
                        <ul className="nveg">
                            <li ><Link  to={"/"} >Home</Link></li>
                        
                            <li ><Link  to={"/About"} >About</Link></li>
                        
                            <li ><Link  to={"/suport"} >Suport</Link></li>


                        </ul>
                </div>
    }
}


export default Navbar;
