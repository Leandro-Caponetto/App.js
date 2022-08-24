import { createContext, useState } from "react";

export const CartContext = createContext()

const { Provider } = CartContext

const MyProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    // - Metodo Some - Retorna boolean - Lo necesitamos para verificar si el producto a agregar ya existe o no en el carrito.
    const isInCart = (id) => {
        return cart.some(x => x.id === id)
    }

    const addItem = (item, qty) => {

        const newItem = {
            ...item,
            qty
        }

        if (isInCart(newItem.id)) {
            const findProduct = cart.find(x => x.id === newItem.id)
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart]
            auxArray[productIndex].qty += qty
            setCart(auxArray)
        } else {
            setCart([...cart, newItem])
        }
    }

    // Lo utilizamos en un boton que diga Clear Cart, y reinicia el array a 0.
    const emptyCart = () => {
        return setCart([])
    }

    // Lo podemos usar en un botón de eliminar producto - Metodo Filter
    const deleteItem = (id) => {
        return setCart(cart.filter(x => x.id !== id))
    }

    // Esta función nos permite obtener la cantidad de unidades que tiene nuestro carrito - Metodo Reduce
    const getItemQty = () => {
        return cart.reduce((acc, x) => acc += x.qty, 0)
    }

    // Esta funcion nos va a permitir obtener el precio total de nuestra compra en funcion de los productos de nuestro Cart - Metodo Reduce
    const getItemPrice = () => {
        return cart.reduce((acc, x) => acc += x.qty * x.price, 0)
    }


    return <Provider value={{cart, isInCart, addItem, emptyCart, deleteItem, getItemQty, getItemPrice}}>{children}</Provider>

}

export default MyProvider
