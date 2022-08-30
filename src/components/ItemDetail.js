import { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { Row } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'

function ItemDetail({item }) {

    const [qty, setQty] = useState(1)

    const {isInCart, addItem} = useContext(CartContext)
    
    const onAdd = () => {
        isInCart(item.id)
        addItem(item, qty)
    }

    return (
        <Row className='detailView justify-content-center caja'>
            <div className='col-xl-3 d-flex align-items-center'>
                <img className='col-xl-8' src={item.image} alt={item.name}></img>
            </div>
            <div className='col-xl-3 d-flex flex-column align-items-center justify-content-center'>
                <h3 className='detailTitle'>{item.name}</h3>
                <h3>Categoria: {item.category}</h3>
                <h3>${item.price}</h3>
                <h3>Unidades disponibles: {item.stock}</h3>
            </div>
            <div className='col-xl-3 d-flex flex-column align-items-center justify-content-center'>
                <ItemCount qty={qty} setQty={setQty} stock={item.stock} onAdd={onAdd} />
            </div>
        </Row>
    )
}

export default ItemDetail