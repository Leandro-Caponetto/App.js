import { Link } from "react-router-dom"
import { useContext } from "react"
import Contador from "./Contador"
import { contexto } from "./CartContext"

function ItemCount({item, producto }) {
   
  const { agregarProducto } = useContext(contexto)
  
  const onAdd = (contador) => {
    //console.log("Producto a comprar : ")
    //console.log(item)
    //console.log("Cantidad a comprar : ")
    //console.log(contador)
    item.cantidad = contador
    //enviarAlCarrito(item)
    agregarProducto(producto)
  }


  return (
        <article className="item">
      <img src={producto.image} alt="" width={200}/>
      <h2 className="item__title">{item.nombre}</h2>
      <p>{producto.title}</p>
      <p className="item__price">Precio : ${producto.price}</p>
      <Link to={`/detalle/${producto.id}`} className="item__button">Agregar al carrito</Link>
      <Link to={`/detalle/${producto.id}`} className="item__button">Borrar</Link>
      <Contador onAdd={onAdd} />
    </article>
  )
}

export default ItemCount
