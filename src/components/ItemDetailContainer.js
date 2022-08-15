import { useEffect, useState } from "react"

import { useNavigate, useParams } from "react-router-dom"
import CustomLoader from "./CustomLoader"
import ItemDetail from "./ItemDetail"
import Page from "./Page"



const productosIniciales = [
    {
        id: 1,
        title: "Nike LD Waffle Sacai Black Nylon",
        price: 15401,
        image: require('./images/img01.jpg'),
        category: "nike",
        img1: "https://stockx-360.imgix.net/Nike-LD-Waffle-Sacai-Black-Nylon/Images/Nike-LD-Waffle-Sacai-Black-Nylon/Lv2/img",
        img2: ".jpg?auto=format,compress&q=90&updated_at=1606321430&w=1000",
        cantidad: 1,
      },
   
]




const ItemDetailContainer = () => {

    
    const [productos, setProductos] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {

        const pedido = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosIniciales)
            }, 2000)
        })

        pedido.then((resultado) => {
            setProductos(resultado)
            setLoading(false)
        })

        pedido.catch((error) => {
            console.log("Termino el pedido mal")
        })

    }, [])


    if (loading) {
        return (
            <CustomLoader />
        )
    } else {
        return (
            
            <Page titulo="Catalogo" subtitulo="Todos los productos en un solo lugar">
                <ItemDetail productos={productos} />
            </Page>
        )
    }


    /*const r = useParams()
    const navigate = useNavigate()

     useEffect(() => {})
    
    useEffect(() => {},[])
    useEffect(() => {},[r.id]) 

    useEffect(()=>{
        fetch("")
        .then(()=>{
            navigate("/algunaurl")
        })
        .catch(()=>{
            console.log("error")
        }) 
    })*/

}


export default ItemDetailContainer