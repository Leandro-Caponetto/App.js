import { useContext } from "react"
import Contador from "./Contador"
import { contexto } from "./CartContext"

const ItemDetail = ({ item }) => {

    const { agregarProducto } = useContext(contexto)

    const onAdd = (contador) => {
        //console.log("Producto a comprar : ")
        //console.log(item)
        //console.log("Cantidad a comprar : ")
        //console.log(contador)
        item.cantidad = contador
        //enviarAlCarrito(item)
        agregarProducto(item)
    }

    return (
        <div>
            <h1>{item.title}</h1>
            <img className="detail-image" src={item.image} alt="" />
            <p>{item.description}</p>
            <Contador onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail