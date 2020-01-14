import React from "react"
import { Link } from "react-router-dom"
import "../Lia/Lia.css"

/*            */
class Lia extends React.Component {
    render() {
        return <div className="Lia">
            <form action="as" method="post" className="Singin">
                <input type="text" name="Email" id="emailSi" />
                <input type="text" name="Password" id="passwSi" />
                <Link className="Singaup buLink" to="Singup">Singup</Link>

            </form>

            <Link className="Singaup buLink" to="Singup">Singup</Link>
        </div>
    }
}

export default Lia