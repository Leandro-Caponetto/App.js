import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CustomLoader from "./CustomLoader"
import ItemList from "./ItemList"
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
      {
        id: 2,
        title: "Nike Dunk Low Off-White Pine Green",
        price: 16304,
        image: require('./images/img02.jpg'),
        category: "nike",
        img1: "https://stockx-360.imgix.net/Nike-Dunk-Low-Off-White-Pine-Green/Images/Nike-Dunk-Low-Off-White-Pine-Green/Lv2/img",
        img2: ".jpg?auto=format,compress&q=90&updated_at=1606319825&w=1000",
        cantidad: 1
      },
      {
        id: 3,
        title: "Nike Air Force 1 Low Supreme Black",
        price: 13475,
        image: require('./images/img03.jpg'),
        category: "nike",
        img1: "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-Supreme-Box-Logo-Black/Images/Nike-Air-Force-1-Low-Supreme-Box-Logo-Black/Lv2/img",
        img2: ".jpg?auto=format,compress&q=90&updated_at=1606325289&w=1000",
        cantidad: 1
      },
]

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {

        const pedido = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosIniciales)
            }, 3000)
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
                <ItemList productos={productos} />
            </Page>
        )
    }

}
export default ItemListContainer