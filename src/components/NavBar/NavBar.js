import {  NavLink,Link } from "react-router-dom"


const Nav = () => {
    
      return (
        <nav className="header">
          <Link to="/">
                <h1 className="header__titulo" >TopShop</h1>
            </Link>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/categoria/producto">Productos</NavLink>
        
      </nav>
      
      )
    
  
}
export default Nav
