
import { useEffect, useState  } from "react"
import ItemList from "./ItemList";
import  './ItemListContainer.css';



const productosIniciales = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 100,

    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 100

    }
]


const ItemListContainer = () => {

    
    
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState([true])


    useEffect(()=>{

        const pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                
                res(productosIniciales)
            },2000)
        })

        pedido.then((resultado)=>{
           
            console.log({resultado})
            setProductos(productosIniciales)
            setLoading(false)
        })
        pedido.catch((error)=>{
            console.log("termino el pedido mal ")
        })
        pedido.finally(()=>{
            console.log("termino el pedido ")
        })
    },[])


    if(loading){
        return (
            <p>Cargando...</p>
        )
    }else{
        return (
            <ItemList productos={productos}/>
            
        )
    }
    
       
    
    
}

export default ItemListContainer