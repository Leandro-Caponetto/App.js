import { useState, useEffect } from "react"
import Cart from "../NavBar/CartWidget"
import Button from 'react-bootstrap/Button';
import ItemList from "../ItemList/ItemList";
import  './ItemListContainer.css';





const ItemListContainer = ({onAdd, initial, stock}) => {

    const [titulo, setTitulo] = useState("Cargando..")
    const [contador, setContador] = useState(0)
    
    const [confirmed, setConfirmed] = useState(false)

    
    useEffect(() => {
        
        setTitulo("cargando...")

        
        const simulacroPedido = new Promise((res,rej)=>{
            setTimeout(() => {
                res("Todo bien")                
            }, 2000)
        })

        simulacroPedido.then((resultado)=>{
            console.log({resultado})
        })

        simulacroPedido.catch((error)=>{})



    }, [confirmed])


    

    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    const confirmar = () => {
        setConfirmed(!confirmed)
    }

    console.log("Se crean los metodos")


    console.log("Re renderiza")
   


    const aumentarContador = () => {
        console.log("aumentarContador")
        
        if(contador < 10){
            setContador(contador + 1)
        }
    }

    const disminuirContador = () => {
        setContador(contador - 1)
    }

    const resetearContador = () => {
        setContador(0)
    }

    return (
        

            <>
                <Cart contador={contador} />
                
                

                <div className="cont">

                    
                    <Button onClick={disminuirContador} variant="primary">-</Button>{' '}
                    <Button onClick={resetearContador} variant="primary">Restaurar</Button>{' '}

                    <Button onClick={aumentarContador} variant="primary">+</Button>{' '}
                    <ItemList titulo={titulo}/>
                    
                    <p id="parrafo">El Contador va : {contador}</p>

                    <button onClick={restar}>restar</button>
                    <button onClick={confirmar}>confirmar</button>
                    <button onClick={sumar}>summar</button>
                    
                </div>
                        
               

            </>
            
            
    
    )
    
}

export default ItemListContainer