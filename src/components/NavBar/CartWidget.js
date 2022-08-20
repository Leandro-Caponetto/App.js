
import { NavLink } from "react-router-dom"
import { useCarrito } from "../CartContext"


const Cart = () => {
    
    const { cantidad } = useCarrito()
    
    
 
    return (
        
             
        <NavLink to="/cart">
            <span className="material-symbols-outlined">
                shopping_cart
            </span>
            {cantidad}
            
        </NavLink>
    )
            
            
           
        
   
}

export default Cart