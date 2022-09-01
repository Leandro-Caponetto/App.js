
import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail"
import { useParams } from "react-router-dom";
import { db } from "../firebase"
import { collection , getDoc , doc } from "firebase/firestore"


const ItemDetailContainer = () => {
    
    const [item, setItem] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        
        const productosCollection = collection(db, "productos") 
        const referencia = doc(productosCollection,id) 
        const consulta = getDoc(referencia) 

        consulta
        .then((res)=>{
            setItem(res.data())
        })
        .catch((err) => {
            
        })

    }, [id])


    return (
        <>
            <div className='container'>
                <ItemDetail item={item} />
            </div>
        </>
    );
}

export default ItemDetailContainer;