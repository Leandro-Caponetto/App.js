import { BrowserRouter } from "react-router-dom";

import CartWidget from "./NavBar/CartWidget"
import Main from "./Main";
import Provider from "./CartContext"






const App = () => {
    
    return (
        <BrowserRouter>
            <Provider titulo="hola">
                <CartWidget />
                <Main/>
            </Provider>
           
            
        </BrowserRouter>
    )
}
export default App;