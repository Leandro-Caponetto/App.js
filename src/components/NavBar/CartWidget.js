import NavBar from "./NavBar"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { contexto } from "../CartContext"

const Cart = () => {
    
    const { cantidad } = useContext(contexto)
    
    
 
    return (
        
             
        <header className="header">
            <NavLink to="/cart">
            <span className="material-symbols-outlined">
                shopping_cart
            </span>
            {cantidad}
        </NavLink>
            <NavBar type="header" />
        </header>
    )
            
            
           
        
   
}

export default Cart