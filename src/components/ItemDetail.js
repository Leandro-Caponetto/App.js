import { useEffect } from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const r = useParams() // es un hook que se actualiza si estas en el mismo componente y cambia la url y siempre da un objeto a cambio

     useEffect(() => {})
    
    useEffect(() => {},[])
    useEffect(() => {},[r.id]) 

    useEffect(()=>{

    })

    return (
        <div>ItemDetailContainer</div>
    )
}


export default ItemDetailContainer