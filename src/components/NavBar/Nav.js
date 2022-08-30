import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget';





const NavBar = () => {

  const [navLinks, setNavLinks] = useState([]);
  const url = "https://fakestoreapi.com/products/"

  useEffect(() => {

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(parsedArray => parsedArray.map(x => x.category))
    .then(uniqueArray => setNavLinks([...new Set(uniqueArray)]))

}, [])
    
      return (
        <Navbar >
          <Container>
          <Nav className="col-xl-8 d-flex justify-content-evenly mx-auto">
                
            <Link to="/">Inicio</Link>
            
                  
            {navLinks.map((element, index) => {
                        return <Link to={`/category/${element}`} key={index}>{element}</Link>
                    })}
            
                

          </Nav>
          <Link to={"/cart"}><CartWidget/></Link>
          </Container>
         
        
      </Navbar>
      
      )
    
  
}
export default NavBar