import React from "react"
import {Link} from 'react-router-dom'
import "../Navbar/navbar.css"

class Navbar extends React.Component{


    render(){
        return <nav>
                        <ul>
                            <li ><Link to={"/"} >Home</Link></li>
                        </ul>
                        <ul>
                            <li ><Link to={"/About"} >About</Link></li>
                        </ul>
                        <ul>
                            <li ><Link to={"/suport"} >Suport</Link></li>
                        </ul>
                </nav>
    }
}


export default Navbar;
