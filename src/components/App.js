import { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main";
import Button from 'react-bootstrap/Button';

const App = () => {
    
    const [contador, setContador] = useState(0)



    

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
            <Header contador={contador} />
            <Main uno={true} dos={1} tres={"Leandro Caponetto"}>
                
            
            </Main>
                <div className="cont">
                    <Button onClick={disminuirContador} variant="primary">-</Button>{' '}
                    <Button onClick={resetearContador} variant="primary">Restaurar</Button>{' '}

                    <Button onClick={aumentarContador} variant="primary">+</Button>{' '}
                </div>
            
            
            
           
            <Footer contador={contador} test={true} nombre="Leandro Caponetto" />
        </>


    )
}

export default App;