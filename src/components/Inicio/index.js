import React from "react";
import Portada from "../images/inicio.jpg"
import {Link} from "react-router-dom"



export const Inicio = () => {
    return (
        <div className="inicio">
            <Link to="/">
                <h1 >Inicio</h1>
            </Link>
            <div className="link">
                <Link to="/categoria/:id">
                    <h1 >Productos</h1>
                </Link>
            </div>
            
            <img src={Portada} alt="Inicio" />
        </div>
    )
}