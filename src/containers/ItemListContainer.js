import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import ItemList from '../components/ItemList'
import CustomLoader from "../components/CustomLoader"


function ItemListContainer({ greeting }) {

    const [products, setProducts] = useState([])

    const { categorias } = useParams();

    const url = "https://fakestoreapi.com/products/";

    useEffect(() => {

        setTimeout(() => {
            fetch(url)
                .then((respuesta) => respuesta.json())
                .then((array) => {
                    if (!categorias) {
                        setProducts(array)
                    } else {
                        setProducts(array.filter(x => x.category === categorias))
                    }
                }
                )
        }, 100)

    }, [categorias])


    return (
        <div>
            
            <Row>
                <Col xl={6} className="mx-auto mt-5 text-center"><h1>{greeting}</h1></Col>
            </Row>

            {(products.length > 1)
                ? <ItemList productsArray={products} />
                : <CustomLoader color='#36D7B7' />}
                
        </div>
    )
}

export default ItemListContainer