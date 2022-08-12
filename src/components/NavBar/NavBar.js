import {  NavLink } from "react-router-dom"


const Nav = () => {
    
      return (
        <nav>
        <NavLink to="/categoria/electronics">Inicio</NavLink>
        <NavLink to="/categoria/jewelery">Productos</NavLink>
        <NavLink to="/cart">
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
        </NavLink>
      </nav>
      
      )
    
  
}
export default Nav
