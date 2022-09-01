import React from 'react'
import {Link} from "react-router-dom"

function Item({ item }) {
    return (
        <div className='tarjetas col-xl-3 mx-auto my-5 d-flex flex-column align-items-center'>
            <img className='col-xl-10' src={item.image} alt={item.title}></img>
            
            <h4><span className='span'>Nombre:</span>  {item.title}</h4>
            <p><span className='span'>Categoría:</span>  {item.category}</p>
            <p><span className='span'>Descripción:</span>{item.description}</p>
            <p><span className='span'>Precio:</span>  {item.price}</p>
            <p><span className='span'>Stock:</span>  {item.stock}</p>
            <Link to={`/item/${item.id}`} className="btn btn-success">Ver más</Link>
        </div>
    )
}

export default Item