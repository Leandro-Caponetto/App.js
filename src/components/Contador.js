import { useState } from "react"

const Contador = ({ estadoPadre , customMethod , stock, initial, onAdd }) => {

    const [estadoHijo, setEstadoHijo] = useState(0)
    const [confirmed, setConfirmed] = useState(false)

    const sumar = () => {
        //setEstadoHijo(estadoHijo + 1)
        setEstadoHijo(estadoHijo + 1)
    }

    const restar = () => {
        setEstadoHijo(estadoHijo - 1)
    }

    const confirmar = () => {
        customMethod(estadoHijo)
    }

    return (
        <div>
            {/* <p id="parrafo">El Contador va : {contador}</p> */}
            <button onClick={sumar}>summar</button>
            <button onClick={confirmar}>confirmar</button>
            <button onClick={restar}>restar</button>
        </div>
    )
}

export default Contador