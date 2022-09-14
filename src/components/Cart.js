import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


function Cart() {

    

    const { cart, deleteItem, emptyCart, getItemPrice } = useContext(CartContext)
    const total = getItemPrice([])
    

    if (cart.length > 0) {
        return (
            <div className='row col-xl-12'>
                <div className=' justify-content-center caja'>
                    {
                        cart.map((element, index) => {
                            return <div className='cartItem col-xl-6 d-flex align-items-center justify-content-evenly carrito uni' key={index}>
                                
                                <div className='img'>
                                    <img src={element.image} alt={element.title} width={150}></img>
                                </div>
                        
                                <div >
                                    <h3>{element.title}</h3>
                                    <h2>Precio: ${element.price}</h2>
                                    <h3>Unidades: {element.qty}</h3>
                                    <h3 >Unidades disponibles: {element.stock}</h3>
                                </div>
                                <div>
                                    <button onClick={() => deleteItem(element.id)} className='btn btn-danger'>Delete</button>
                                    
                                </div>
                                <hr />
                               
                            </div>
                            
                            
                        })
                    }
                    <button onClick={() => emptyCart()} className='btn btn-warning vaciar'>Vaciar Carrito</button>
                    <h3>Total: ${total}</h3>
                </div>

               
                <div className='btnCheckout'>
                    <Link to={'/checkout'}><button className='btn btn-success'>Ir al Checkout</button></Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h1>Este es tu carrito</h1>
            <Link to={'/'}><button className='btn btn-success'>Ir a la Home</button></Link>
        </div>
    )
}

export default Cart