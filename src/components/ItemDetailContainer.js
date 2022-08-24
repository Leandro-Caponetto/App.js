import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
import CustomLoader from "./CustomLoader"

const ItemDetailContainer = () => {

    
    const [detalle, setDetalle] = useState({})
    const { productId } = useParams();
   

        //https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe
        const url = "https://fakestoreapi.com/products/" 

  
        useEffect(() => {

            setTimeout(() => {
    
                fetch(url)
                    .then(respuesta => respuesta.json())
                    .then(pepe => setDetalle(pepe.find(x => x.id === productId)))
    
            }, 1000)
    
        }, [])
    
    
        return (
            <>
            {Object.keys(detalle).length < 1
            ? < CustomLoader color='#36D7B7'/>
            : <ItemDetail detalle={detalle} /> }
            </>
        )
}

export default ItemDetailContainer;