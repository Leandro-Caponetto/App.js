/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const r = useParams() 
    / useEffect(() => {})
    
    useEffect(() => {},[])
    useEffect(() => {},[r.id]) 

    useEffect(()=>{
       /*  fetch("")
        .then(()=>{
            navigate("/algunaurl")
        })
        .catch(()=>{
            console.log("error")
        }) */
    })

    return (
        <div>ItemDetailContainer</div>
    )
}


export default ItemDetailContainer