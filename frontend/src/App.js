import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom'

import  "../src/App.css"

import Contenido from "./component/Contenido/Contenido"

import Navbar from "./component/Navbar/Navbar"

function App() {
    console.log("Hola Mundo")
   
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} >
                    <Navbar/>
                    <Contenido/>
                </Route>
            </Switch>

        </BrowserRouter>
    );
}

export default App;
