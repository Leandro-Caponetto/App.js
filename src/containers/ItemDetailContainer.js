import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../components/ItemDetail';
import CustomLoader from "../components/CustomLoader"

function ItemDetailContainer() {

    const [item, setItem] = useState({});

    const { productId } = useParams();

    const url = "https://fakestoreapi.com/products/";

    useEffect(() => {

        setTimeout(() => {

            fetch(url)
                .then(respuesta => respuesta.json())
                .then(pepe => setItem(pepe.find(x => x.id === productId)))

        }, 1000)

    }, [])


    return (
        <>
        {Object.keys(item).length < 1
        ? <CustomLoader color='#36D7B7'/>
        : <ItemDetail item={item} /> }
        </>
    )
}

export default ItemDetailContainer