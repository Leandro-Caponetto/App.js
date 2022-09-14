import React from 'react'
import {Link} from "react-router-dom"

import Card from 'react-bootstrap/Card';
function Item({ item }) {
    return (
      
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.image}/>
                <Card.Body>
                    <Card.Title>  {item.title}</Card.Title>
                    <Card.Text>
                    
                        <p><span className='span'>Categoría:</span>  {item.category}</p>
                        
                        <p><span className='span'>Precio:</span>  ${item.price}</p>
                        <p><span className='span'>Stock:</span>  {item.stock}</p>
                    </Card.Text>
                    <Link to={`/item/${item.id}`} className="btn btn-success">Ver más</Link>
                </Card.Body>
            
            
            
            </Card>

       
    )
}

export default Item