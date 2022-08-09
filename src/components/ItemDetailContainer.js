import { useEffect, useState  } from "react"
import ItemDetail from "./ItemDetail"
 

const data = [
    {
        id: 2,
        title: "Nike Dunk Low Off-White Pine Green",
        price: 16304,
        image: require('./img/images/img02.jpg'),
        category: "nike",
        img1: "https://stockx-360.imgix.net/Nike-Dunk-Low-Off-White-Pine-Green/Images/Nike-Dunk-Low-Off-White-Pine-Green/Lv2/img",
        img2: ".jpg?auto=format,compress&q=90&updated_at=1606319825&w=1000",
        cantidad: 1
    }
]

function ItemDetailContainer() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState([true])
  
    
    useEffect(()=>{

        const pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                
                res({
                    id: 2,
                    title: "Nike Dunk Low Off-White Pine Green",
                    price: 16304,
                    image: require('./img/images/img02.jpg'),
                    category: "nike",
                    img1: "https://stockx-360.imgix.net/Nike-Dunk-Low-Off-White-Pine-Green/Images/Nike-Dunk-Low-Off-White-Pine-Green/Lv2/img",
                    img2: ".jpg?auto=format,compress&q=90&updated_at=1606319825&w=1000",
                    cantidad: 1
                })
                    
                  
            })
        },2000)

        pedido.then((resultado)=>{
           
            console.log({resultado})
            setProductos(data)
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
            <ItemDetail productos={productos}/>
        )
    }
   
    
  
}
export default ItemDetailContainer