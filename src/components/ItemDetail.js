
import { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { Row } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'

function ItemDetail({ detalle }) {

    const [qty, setQty] = useState(1)

    const {isInCart, addItem} = useContext(CartContext)
    
    const onAdd = () => {
        isInCart(detalle.id)
        addItem(detalle, qty)
    }

    return (
        <Row className='detailView justify-content-center'>
            <div className='col-xl-3 d-flex align-items-center'>
                <img className='col-xl-8' src={detalle.pictureURL} alt={detalle.name}></img>
            </div>
            <div className='col-xl-3 d-flex flex-column align-items-center justify-content-center'>
                <h3 className='detailTitle'>{detalle.name}</h3>
                <h3>Categoria: {detalle.category}</h3>
                <h3>${detalle.price}</h3>
                <h3>Unidades disponibles: {detalle.stock}</h3>
            </div>
            <div className='col-xl-3 d-flex flex-column align-items-center justify-content-center'>
                <ItemCount qty={qty} setQty={setQty} stock={detalle.stock} onAdd={onAdd} />
            </div>
        </Row>
    )
}

export default ItemDetail