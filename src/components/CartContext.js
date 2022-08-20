/* eslint-disable no-unused-vars */
import { createContext, useContext ,useState } from "react";

const contexto = createContext(); 
const { Provider } = contexto; 

export const useCarrito = () => {
   return useContext(contexto)
}


const CartContext = (props) => {

    
    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (producto) => {
        
        console.log("Soy el contexto!")
        console.log(producto)
        
        setCantidad(cantidad + producto.cantidad)
    }

    const eliminarProducto = () => {}

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const estaEnCarrito = (id) => {
        //retrun true/false
    }
    
    const valorDelContexto = {
        cantidad: cantidad,
        carrito : carrito,
        agregarProducto,
        eliminarProducto,
    }

    return(
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}


export default CartContext;
