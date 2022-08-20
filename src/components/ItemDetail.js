
import Contador from "./Contador"

import {useCarrito} from "./CartContext"

const ItemDetail = ({ item }) => {

    const { agregarProducto } = useCarrito()

    const onAdd = (contador) => {
       
        item.cantidad = contador
       
        agregarProducto(item)
    }

    return (
        <div className="item">
            <h1 className="item__title">{item.title}</h1>
            <img className="detail-image" src={item.image} alt="" />
            <p className="item__price">Precio : ${item.price}</p>
            <p>{item.description}</p>
            <Contador onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail