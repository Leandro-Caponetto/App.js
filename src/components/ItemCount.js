import { Link } from "react-router-dom"


function ItemCount({ producto }) {
   
    return (
        <article className="item">
      <img src={producto.image} alt="" width={200}/>
      <h2 className="item__title">{producto.nombre}</h2>
      <p>{producto.title}</p>
      <p className="item__price">Precio : ${producto.price}</p>
      <Link to={`/detalle/${producto.id}`} className="item__button">Agregar al carrito</Link>
      <Link to={`/detalle/${producto.id}`} className="item__button">Borrar</Link>
    </article>
    )
}

export default ItemCount
