import { useState } from "react"

const Slider = ({estadoPadre,customMethod}) => {

    const [contador, setContador] = useState(0)

    const handleChange = (e) => {
        customMethod(e.target.value)
    }

    return (
        <>
            {/* <p id="parrafo">El Contador va : {contador}</p> */}
            <input onChange={handleChange} type="range" step={10} />
        </>
    )
}
export default Slider