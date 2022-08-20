/* eslint-disable no-unused-vars */
import { useState } from "react"

const Contador = ({ estadoPadre , onAdd , stock, initial }) => {

    const [contador, setContador] = useState(0)
    const [confirmed, setConfirmed] = useState(false)

    const sumar = () => {
        //setEstadoHijo(estadoHijo + 1)
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    const confirmar = () => {
        onAdd(contador)
    }

    return (
        <div>
            
            <p id="parrafo" className={contador < 5 ? "todobien" : "todomal"}>
                El {contador < 5 ? "contador" : "counter" } va : {contador}
            </p>

            <button onClick={restar} className="btn">-</button>
            <button onClick={confirmar} className="btn">confirmar</button>
            <button onClick={sumar} className="btn">+</button>
        </div>
    )
}

export default Contador
