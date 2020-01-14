import React from "react"
import "./Contenido.css"
import Lia from "../Lia/Lia"

class Contenido extends React.Component {
    render() {
        return  <div className="main">
        <div className="cont-1">
        <Lia/>
        </div>
        <div className="cont-2"></div>
        </div>
    }
}

export default Contenido ;