
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget';


const categories = [{
  
  category: "women",
  name: "Women"
},
{
  category: "men",
  name: "Men"
},{
  category: "electronics",
  name: "Electronics"
},{
  category: "jewelery",
  name: "Jewelery"
}]



const NavBar = () => {

  return (

    

    <Navbar sticky="top"className="header">
          <Container>

            
          <Nav className="col-xl-8 d-flex justify-content-evenly mx-auto ">
          <Link to="/">
                <h1 className="header__titulo" >TOPSHOP</h1>
            </Link>
                
            <Link to="/">Inicio</Link>
            
                  
            {categories.map( category => <Link to={`/category/${category.category}`}>
                    <p>{category.name}</p>
                    </Link>)}
            
                

          </Nav>
          <Link to={"/cart"}><CartWidget/></Link>
          </Container>
         
        
      </Navbar>
)
  
    
  
}
export default NavBar