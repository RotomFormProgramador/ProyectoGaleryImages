import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom'

import Navbar from "./component/Navbar/Navbar"

function App() {
    console.log("Hola Mundo")
   
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} >
                    <Navbar/>
                </Route>
            </Switch>

        </BrowserRouter>
    );
}

export default App;
