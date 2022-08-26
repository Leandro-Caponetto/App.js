import React from 'react'
import {Link} from "react-router-dom"

function Item({ item }) {
    return (
        <div className='tarjetas col-xl-3 mx-auto my-5 d-flex flex-column align-items-center'>
            <img className='col-xl-10' src={item.image} alt={item.name}></img>
            { <h4>ID: {item.id} </h4> }
            <h4>Nombre: {item.title}</h4>
            <h4>Categoría: {item.category}</h4>
            <h4>Precio: {item.price}</h4>
            <h4>Stock: {item.stock}</h4>
            <Link to={`/item/${item.id}`} className="btn btn-success">Ver más</Link>
        </div>
    )
}

export default Item