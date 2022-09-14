import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import ItemList from '../components/ItemList'
import CustomLoader from "../components/CustomLoader"
import {collection,  getDocs, query , where } from "firebase/firestore"
import { db } from "../firebase"
import Toast from 'react-bootstrap/Toast';








const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        if(!id){
            const productosCollection = collection(db, "productos")
            const consulta = getDocs(productosCollection)
    
            consulta
            .then(snapshot=>{
               
                const productos = snapshot.docs.map(doc=>{
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setProductos(productos)
                setLoading(false)
            })
            .catch(err=>{
                console.log(err)
            })
        }else{
            const productosCollection = collection(db, "productos")
            const filtro = query(productosCollection,
                where("category","==",id))
                
            const consulta = getDocs(filtro)
    
            consulta
            .then(snapshot=>{
                const productos = snapshot.docs.map(doc=>{
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setProductos(productos)
                setLoading(false)
            })
            .catch(err=>{
                
                <Toast>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">TOPSHOP</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>ERROR .</Toast.Body>
                </Toast>
            })
        }
    }, [id])


    if (loading) {
        return (
            <CustomLoader />
        )
    } else {
        return (
            <>
            <Row>
                <Col xl={6} className="mx-auto mt-5 text-center"><h1>{greeting}</h1></Col>
            </Row>
            <ItemList productsArray={productos} />
            </>
            
        )
    }

}

export default ItemListContainer