import {  NavLink,Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const Nav = () => {
    
      return (
        <nav >
          <Link to="/">
                <h1 >TopShop</h1>
            </Link>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/categoria/producto">Productos</NavLink>
        <CartWidget/>
      </nav>
      
      )
    
  
}
export default Nav
